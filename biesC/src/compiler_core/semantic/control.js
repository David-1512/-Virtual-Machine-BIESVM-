/**
 * @file control.js
 * @description Este archivo define dos clases estáticas, Errors y Logs, que se utilizan para gestionar y registrar errores y logs durante el proceso de compilación o ejecución del compilador BiesC.
 * 
 * @module control
 * 
 * @project biesC
 * Proyecto académico para implementar un compilador para un lenguaje funcional basado en pila (BiesVM).
 * 
 * @class Errors
 * @classdesc Clase para gestionar los errores que ocurren durante el proceso de compilación o ejecución.
 * Esta clase proporciona métodos para agregar, obtener, imprimir y convertir los errores a una cadena de texto.
 * 
 * @class Logs
 * @classdesc Clase para gestionar los logs informativos durante el proceso de compilación o ejecución.
 * Esta clase proporciona métodos para agregar, obtener, imprimir y convertir los logs a una cadena de texto.
 * 
 * @author David Serrano Medrano
 * @author Leandro Mora Corrales
 * @author Xiara Suarez Alpizar
 * 
 * @version 1.0.0
 * @since 17-11-2024
 */


/**
 * Clase estática para gestionar los errores durante el proceso de compilación o ejecución.
 * @class
 */
class Errors {
	/**
     * Lista estática que almacena los errores.
     * @static
     * @type {Array<string>}
     */
	static errors = [];

	/**
     * Devuelve la lista de errores registrados.
     * @static
     * @returns {Array<string>} Lista de errores.
     */
	static getErrors() {
		return this.errors;
	}

	/**
     * Agrega un error a la lista de errores.
     * @static
     * @param {string} error - El mensaje de error a agregar.
     */
	static addError(error) {
		this.errors.push(error);
	}

	/**
     * Imprime todos los errores registrados en la consola.
     * @static
     */
	static printErrors() {
		for (let i = 0; i < this.errors.length; i++) {
			console.error(this.errors[i]);
		}
	}

	/**
     * Convierte la lista de errores en una cadena de texto, con cada error en una nueva línea.
     * @static
     * @returns {string} Cadena de texto con todos los errores.
     */
	static toString() {
		let errors = '';
		for (let i = 0; i < this.errors.length; i++) {
			errors += this.errors[i] + '\n';
		}
		return errors;
	}
}

/**
 * Clase estática para gestionar los logs durante el proceso de compilación o ejecución.
 * @class
 */
class Logs {
	/**
     * Lista estática que almacena los logs.
     * @static
     * @type {Array<string>}
     */
	static logs = [];

	/**
     * Devuelve la lista de logs registrados.
     * @static
     * @returns {Array<string>} Lista de logs.
     */
	static getLogs() {
		return this.logs;
	}

	/**
     * Agrega un log a la lista de logs.
     * @static
     * @param {string} log - El mensaje de log a agregar.
     */
	static addLog(log) {
		this.logs.push(log);
	}

	 /**
     * Imprime todos los logs registrados en la consola.
     * @static
     */
	static printLogs() {
		for (let i = 0; i < this.logs.length; i++) {
			console.error(this.logs[i]);
		}
	}

	    /**
     * Convierte la lista de logs en una cadena de texto, con cada log en una nueva línea.
     * @static
     * @returns {string} Cadena de texto con todos los logs.
     */
	static toString() {
		let logs = '';
		for (let i = 0; i < this.logs.length; i++) {
			logs += this.logs[i] + '\n';
		}
		return logs;
	}
}


export { Errors, Logs };