/**
 * @file identifier.js
 * @description Esta clase representa un identificador en el compilador BiesC. Un identificador puede ser una variable, una constante, una función, o cualquier otro símbolo que se utilice en el código fuente. La clase proporciona métodos para gestionar las propiedades del identificador.
 * 
 * @module identifier
 * 
 * @project biesC
 * Proyecto académico para implementar un compilador para un lenguaje funcional basado en pila (BiesVM).
 * 
 * @class Identifier
 * @classdesc Clase que representa un identificador en el compilador BiesC. Esta clase almacena información sobre el nombre, tipo, valor, y la ubicación del identificador en el código fuente, y permite gestionar su estado como función.
 * 
 * @author David Serrano Medrano
 * @author Leandro Mora Corrales
 * @author Xiara Suarez Alpizar
 * 
 * @version 1.0.0
 * @since 17-11-2024
 */

/**
 * Representa un identificador en el compilador BiesC.
 * Un identificador puede ser una variable, una constante, una función, o cualquier otro símbolo utilizado en el código fuente.
 * @class
 */
export default class Identifier {
    /**
     * Crea una nueva instancia de un identificador.
     * @constructor
     * @param {string} name - El nombre del identificador.
     * @param {string} type - El tipo del identificador ('const', 'let', 'var', 'function').
     * @param {any} value - El valor asociado al identificador.
     * @param {number} line - La línea del código fuente donde se declara el identificador.
     */
    constructor(name, type, value, line) {
        this.name = name;
        this.id = -1; // id se asignará en el scope
        this.type = type; // 'const', 'let', 'var', 'function'
        this.value = value;
        this.line = line;
        this.isfunction = false;
    }

    
    /**
     * Devuelve true si el identificador es una función, de lo contrario, devuelve false.
     * @returns {boolean} - True si el identificador es una función.
     */
    isFunction() {
        return this.isfunction;
    }

    /**
     * Establece el valor de isfunction a true o al valor proporcionado.
     * @param {boolean} [value=true] - El valor a establecer para isfunction.
     */
    setIsFunction(value = true) {
        this.isfunction = value;
    }
}