/**
 * @file scope.js
 * @description Esta clase representa un ámbito (scope) en el compilador BiesC. Un scope almacena identificadores (como variables, funciones) y su contexto, gestionando su creación, reasignación y resolución dentro de un entorno jerárquico de scopes.
 * 
 * @module scope
 * 
 * @project biesC
 * Proyecto académico para implementar un compilador para un lenguaje funcional basado en pila (BiesVM).
 * 
 * @class Scope
 * @classdesc Clase para representar y gestionar un ámbito (scope) en el compilador BiesC. Cada scope puede contener identificadores locales, funciones y variables, y tiene un enlace con un scope padre y uno o más scopes hijos.
 * 
 * @author David Serrano Medrano
 * @author Leandro Mora Corrales
 * @author Xiara Suarez Alpizar
 * 
 * @version 1.0.0
 * @since 17-11-2024
 */


import Identifier from './identifier.js';
import {Errors, Logs} from './control.js';

/**
 * Representa un ámbito (scope) en el compilador BiesC. 
 * Un scope es un entorno que contiene identificadores y su contexto, permitiendo gestionar su resolución en un entorno jerárquico.
 * @class
 */
export default class Scope {
    /**
     * Lista de todas las instancias de scopes creadas.
     * @type {Scope[]}
     * @static
     */
    static instances = [];

    /**
     * Crea un nuevo ámbito (scope).
     * @constructor
     * @param {Scope|null} parent - El scope padre, si existe.
     * @param {number} id - El identificador único del scope.
     * @param {string} funName - El nombre de la función asociada al scope, por defecto 'main'.
     */
    constructor(parent = null, id = 0, funName = 'main') {
        Logs.addLog(`4Creando scope ${funName} con id ${id}`);
        this.funName = funName;
        this.id = id;
        this.parent = parent;
        this.bindings = {}; // Bindings locales de este scope
        this.children = []; // Scopes hijos
        this.params = 0; // Cantidad de parámetros de la función
        Scope.instances.push(this);
    }

    /**
     * Agrega un nuevo identificador al scope actual.
     * @param {string} name - El nombre del identificador.
     * @param {string} type - El tipo del identificador ('const', 'let', 'var', 'function').
     * @param {any} value - El valor asociado al identificador.
     * @param {number} line - La línea donde se declara el identificador.
     * @param {number} [currentLine=line] - La línea actual en caso de que sea diferente a la línea original.
     * @returns {Array.<number>} - El id del identificador dentro del scope y el id asignado.
     */
    addIdentifier(name, type, value, line, currentLine = line) {
        if (name in this.bindings) {
            Errors.addError(`5Identificador '${name}' ya está definido en este alcance. Línea: ${currentLine}.`);
            //throw new Error(`Identifier '${name}' ya está definido en este alcance. Línea: ${currentLine}.`);
        }
        const identifier = new Identifier(name, type, value, line);
        if (type === 'function') {
            identifier.setIsFunction();
        }
        identifier.id = Object.keys(this.bindings).length; // Asignamos un ID único por scope
        this.bindings[name] = identifier;
        return [0, identifier.id];
    }

     /**
     * Reasigna un valor a un identificador existente en el scope.
     * @param {string} name - El nombre del identificador.
     * @param {any} newValue - El nuevo valor para el identificador.
     * @param {number} [currentLine=null] - La línea actual donde ocurre la reasignación.
     * @returns {boolean} - Devuelve true si la reasignación fue exitosa, de lo contrario false.
     */
    reassignIdentifier(name, newValue, currentLine = null) {
        const identifier = Scope.getIdentifier(this, name);
        if (!identifier) {
            Errors.addError(`6Identificador '${name}' no está definido en este alcance. Línea: ${currentLine || 'Desconocida'}.`);
            return false;
        }
        if (identifier && identifier.type === 'const') {
            Errors.addError(`7No se puede reasignar ${identifier.type} identificador '${name}'. Línea: ${currentLine || identifier.line}.`);
            return false;
        }        
        return true;
    }

    /**
     * Verifica si un identificador existe en el scope actual.
     * @param {string} name - El nombre del identificador a verificar.
     * @returns {boolean} - True si el identificador existe en este scope, de lo contrario false.
     */
	identifierExists(name) {
		return this.bindings[name] !== undefined;
	}

        /**
     * Obtiene un identificador, buscando en el scope actual y en los scopes padres si es necesario.
     * @static
     * @param {Scope} scope - El scope en el que buscar.
     * @param {string} name - El nombre del identificador.
     * @param {number} [currentLine=null] - La línea actual del código fuente.
     * @param {number} [env=0] - El nivel del entorno (scope) en la jerarquía.
     * @returns {Array.<number>} - Un array con el entorno y el id del identificador.
     */
    static getEnvAndLocal(scope, name, currentLine = null, env = 0) {
        if (scope.bindings[name] !== undefined) {
            return [env, scope.bindings[name].id];
        } else if (scope.parent) {
            return Scope.getEnvAndLocal(scope.parent, name, currentLine, env + 1);
        } else {
            Errors.addError(`8Identificador '${name}' no está definido en este alcance. Línea: ${currentLine || 'Desconocida'}.`);
            //throw new Error(`Identifier '${name}' no está definido en este alcance. Línea: ${currentLine || 'Desconocida'}.`);
        }
    }

    /**
     * Obtiene un identificador desde el scope actual o desde los scopes padres.
     * @static
     * @param {Scope} scope - El scope en el que buscar el identificador.
     * @param {string} name - El nombre del identificador.
     * @param {number} [currentLine=null] - La línea actual donde se hace la consulta.
     * @returns {Identifier|null} - El identificador si se encuentra, o null si no existe.
     */
    static getIdentifier(scope, name, currentLine = null) {
        if (scope.bindings[name] !== undefined) {
            return scope.bindings[name];
        } else if (scope.parent) {
            return Scope.getIdentifier(scope.parent, name, currentLine);
        }
        return null;
    }

     /**
     * Añade un scope hijo a un scope padre.
     * @static
     * @param {Scope} parent - El scope padre.
     * @param {Scope} child - El scope hijo que se va a añadir.
     */
    static addChild(parent, child) {
        parent.children.push(child);
    }

    /**
     * Obtiene los scopes hijos de un scope.
     * @static
     * @param {Scope} scope - El scope del que obtener los hijos.
     * @returns {Scope[]} - Lista de scopes hijos.
     */
    static getChildren(scope) {
        return scope.children;
    }

     /**
     * Obtiene el scope padre de un scope.
     * @static
     * @param {Scope} scope - El scope cuyo padre se quiere obtener.
     * @returns {Scope|null} - El scope padre o null si no existe.
     */
    static getParent(scope) {
        return scope.parent;
    }

    /**
     * Obtiene los bindings (identificadores) de un scope.
     * @static
     * @param {Scope} scope - El scope cuyo bindings se desean obtener.
     * @returns {Object} - El objeto de bindings del scope.
     */
    static getBindings(scope) {
        return scope.bindings;
    }

     /**
     * Obtiene el id de un scope.
     * @static
     * @param {Scope} scope - El scope cuyo id se desea obtener.
     * @returns {number} - El id del scope.
     */
    static getId(scope) {
        return scope.id;
    }

     /**
     * Obtiene la cantidad de parámetros de un scope.
     * @static
     * @param {Scope} scope - El scope cuyo número de parámetros se desea obtener.
     * @returns {number} - El número de parámetros del scope.
     */
    static getParams(scope) {
        return scope.params;
    }

     /**
     * Establece la cantidad de parámetros de un scope.
     * @static
     * @param {Scope} scope - El scope para el que establecer los parámetros.
     * @param {number} params - El número de parámetros a asignar.
     */
    static setParams(scope, params) {
        scope.params = params;
    }

    /**
     * Obtiene un scope por su id.
     * @static
     * @param {number} id - El id del scope a buscar.
     * @returns {Scope|null} - El scope con el id especificado, o null si no existe.
     */
    static getScopeById(id) {
        return Scope.instances.find(scope => scope.id === id);
    }
    
}