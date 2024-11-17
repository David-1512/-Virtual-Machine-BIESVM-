/**
 * @file symbolTable.js
 * @description Esta clase representa la tabla de símbolos en el compilador BiesC. La tabla de símbolos almacena identificadores (como variables, funciones) y su contexto, gestionando su creación, reasignación y resolución dentro de un entorno jerárquico de ámbitos.
 * 
 * @module symbolTable
 * 
 * @project biesC
 * Proyecto académico para implementar un compilador para un lenguaje funcional basado en pila (BiesVM).
 * 
 * @class SymbolTable
 * @classdesc Clase para representar y gestionar la tabla de símbolos en el compilador BiesC. La tabla de símbolos permite agregar, obtener y reasignar identificadores, gestionar los ámbitos (scope) y realizar verificaciones relacionadas con funciones y parámetros.
 * 
 * @author David Serrano Medrano
 * @author Leandro Mora Corrales
 * @author Xiara Suarez Alpizar
 * 
 * @version 1.0.0
 * @since 17-11-2024
 */


import { Errors, Logs } from './control.js';
import Scope from './scope.js';
class SymbolTable {
     /** 
     * @static
     * @description El ámbito global de la tabla de símbolos, accesible globalmente en el compilador.
     */
    static globalScope = new Scope(null, 0, 'global');
    /** 
     * @static
     * @description El ámbito actual en la tabla de símbolos, que se modifica conforme se navega entre scopes.
     */
    static currentScope = SymbolTable.globalScope;
    /** 
     * @static
     * @description El siguiente identificador de ámbito que se asignará al crear un nuevo scope.
     */
    static nextScopeId = 1;

    /**
     * @static
     * @description Agrega un identificador al ámbito actual.
     * @param {string} name - Nombre del identificador.
     * @param {string} type - Tipo del identificador (variable, función, etc.).
     * @param {any} value - Valor inicial del identificador.
     * @param {number} line - Línea donde se declara el identificador.
     * @returns {Identifier} El identificador agregado.
     */
    static addIdentifier(name, type, value, line) {
        return SymbolTable.currentScope.addIdentifier(name, type, value, line, line);
    }

    /**
     * @static
     * @description Reasigna un nuevo valor a un identificador en el ámbito actual.
     * @param {string} name - Nombre del identificador.
     * @param {any} newValue - Nuevo valor que se asignará.
     * @param {number} line - Línea donde se realiza la reasignación.
     * @returns {Identifier|undefined} El identificador actualizado o `undefined` si no se encontró.
     */
    static reassignIdentifier(name, newValue, line) {
        if (SymbolTable.currentScope.reassignIdentifier(name, newValue, line)) {
            return Scope.getEnvAndLocal(SymbolTable.currentScope, name, line);
        }
    }

     /**
     * @static
     * @description Obtiene el identificador en el ámbito actual o en los scopes padres si no se encuentra en el ámbito actual.
     * @param {string} name - Nombre del identificador.
     * @param {number} [currentLine=null] - Línea donde se solicita el identificador.
     * @returns {Identifier|null} El identificador encontrado o `null` si no existe.
     */
    static getEnvAndLocal(name, currentLine ) {
        return Scope.getEnvAndLocal(SymbolTable.currentScope, name, currentLine);
    }

     /**
     * @static
     * @description Obtiene un identificador en el ámbito actual.
     * @param {string} name - Nombre del identificador.
     * @param {number} [currentLine=null] - Línea donde se solicita el identificador.
     * @returns {Identifier|null} El identificador encontrado o `null` si no existe.
     */
    static getIdentifier(name,  currentLine = null) {
        return Scope.getIdentifier(SymbolTable.currentScope, name, currentLine);
    }

     /**
     * @static
     * @description Establece si un identificador es una función en el ámbito actual.
     * @param {string} name - Nombre del identificador.
     * @param {boolean} [value=true] - Valor para indicar si es una función (por defecto es `true`).
     * @param {number} [currentLine=null] - Línea donde se solicita el identificador.
     */
	static setIdentifierFunction(name, value = true, currentLine = null) {
		const identifier = SymbolTable.getIdentifier(name, currentLine);
		if (!identifier) {
            Errors.addError(`Identificador '${name}' no está definido en este alcance. Línea: ${currentLine || 'Desconocida'}.`);
		}
		identifier.setIsFunction(value);
	}

     /**
     * @static
     * @description Crea un nuevo ámbito (scope) para una función o bloque de código.
     * @param {string} funName - Nombre de la función asociada al nuevo ámbito.
     */
    static addScope(funName) {
        const newScope = new Scope(SymbolTable.currentScope, SymbolTable.nextScopeId, funName);
        Scope.addChild(SymbolTable.currentScope, newScope);
        SymbolTable.currentScope = newScope;
        SymbolTable.nextScopeId++;
    }

    /**
     * @static
     * @description Obtiene el ID del ámbito de una función, basado en su nombre.
     * @param {string} funName - Nombre de la función.
     * @param {number} [currentLine=null] - Línea donde se solicita el ámbito.
     * @returns {number|null} El ID del ámbito o `null` si no se encuentra.
     */
    static getScopeIdbyName(funName,  currentLine = null) {
        let scope = SymbolTable.globalScope;
        while (scope) {
            if (scope.funName === funName) {
                return scope.id;
            }
            scope = scope.children[0];
        }
        Errors.addError(`Función '${funName}' no está definida. Línea: ${currentLine || 'Desconocida'}.`);
        return null;
    }

    /**
     * @static
     * @description Establece un ámbito específico como el ámbito actual.
     * @param {Scope} scope - El ámbito que se establecerá como el actual.
     */
    static setScope(scope) {
        SymbolTable.currentScope = scope;
    }

     /**
     * @static
     * @description Obtiene el ID del ámbito actual.
     * @returns {number} El ID del ámbito actual.
     */
    static getCurrentScopeId() {
        return Scope.getId(SymbolTable.currentScope);
    }

     /**
     * @static
     * @description Obtiene el ámbito actual.
     * @returns {Scope} El ámbito actual.
     */
    static getCurrentScope() {
        return SymbolTable.currentScope;
    }

     /**
     * @static
     * @description Obtiene el ámbito global.
     * @returns {Scope} El ámbito global.
     */
    static getGlobalScope() {
        return SymbolTable.globalScope;
    }

     /**
     * @static
     * @description Sale del ámbito actual y regresa al ámbito padre.
     * Si el ámbito actual es el global, se genera un error.
     */
    static exitScope() {
        if (SymbolTable.currentScope.parent) {
            SymbolTable.currentScope = SymbolTable.currentScope.parent;
        } else {
            Errors.addError('No se puede salir del alcance global.');
        }
    }

      /**
     * @static
     * @description Obtiene el ID del ámbito padre del ámbito actual.
     * @returns {number} El ID del ámbito padre o 0 si el ámbito actual es el global.
     */
    static getParentCurrentScopeID() {
        let parentScope = SymbolTable.currentScope.parent;
        if (!parentScope) {
            return 0;
        }
        return parentScope.id;
    }

      /**
     * @static
     * @description Devuelve una representación en cadena de la tabla de símbolos, incluyendo todos los ámbitos y los identificadores asociados a cada uno.
     * @returns {string} La representación en cadena de la tabla de símbolos.
     */
    static toString() {
        let str = '';
        for (const scope of Scope.instances) {
            str += `Scope: ${scope.id} ${scope.funName}\n`;
            for (const key in scope.bindings) {
                if (scope.bindings.hasOwnProperty(key)) {
                    const identifier = scope.bindings[key];
                    str += `  ${identifier.name} ${identifier.type} ${identifier.value} ${identifier.line}\n`;
                }
            }
        }
        return str;
    }

    /**
     * @static
     * @description Obtiene la cantidad de parámetros del ámbito actual.
     * @returns {number} La cantidad de parámetros en el ámbito actual.
     */
    static getCantParams() {
        return Scope.getParams(SymbolTable.currentScope);
    }

    /**
     * @static
     * @description Establece la cantidad de parámetros para el ámbito actual.
     * @param {number} params - La cantidad de parámetros a establecer.
     */
    static setCantParams(params) {
        SymbolTable.currentScope.params = params;
    }

    /**
     * Verifica si la cantidad de argumentos proporcionados a una función es correcta.
     * Si la cantidad de argumentos no coincide con la cantidad de parámetros de la función, 
     * se agrega un error a la lista de errores.
     * 
     * @param {number} cantArgs - La cantidad de argumentos proporcionados a la función.
     * @param {string} funName - El nombre de la función a la que se están pasando los argumentos.
     * @param {number|null} [currentLine=null] - La línea actual del código donde se realiza la verificación. 
     * Si no se proporciona, se usa `null` por defecto.
     */
    static checkCantArgs(cantArgs, funName, currentLine = null) {        
        const funScope = SymbolTable.getScopeIdbyName(funName, currentLine);
        console.log('funScope', funScope);
        if(funScope === null) {
            return;
        }
        const params = Scope.getParams(Scope.getScopeById(funScope));
        if (params !== cantArgs) {
            Errors.addError(`Cantidad de argumentos incorrecta para función '${funName}'. Línea: ${currentLine || 'Desconocida'}.`);
        }
    }

    /**
     * Verifica si un identificador es una función.
     * Si el identificador no es una función, agrega un error a la lista de errores.
     * 
     * @param {string} name - El nombre del identificador a verificar.
     * @param {number|null} [currentLine=null] - La línea actual del código donde se realiza la verificación. 
     * Si no se proporciona, se usa `null` por defecto.
     */
    static checkIsFunction(name, currentLine = null) {
        const identifier = SymbolTable.getIdentifier(name, currentLine);
        if (identifier && !identifier.isFunction) {
            Errors.addError(`Identificador '${name}' no es una función. Línea: ${currentLine || 'Desconocida'}.`);
        }
    }

}

export default SymbolTable;
