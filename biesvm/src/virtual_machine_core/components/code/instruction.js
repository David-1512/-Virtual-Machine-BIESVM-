/**
 * @file Instruccion.js
 * @description Clase que representa una instrucción en la máquina virtual BiesVM.
 * Cada instrucción tiene un código mnemotécnico, parámetros asociados y la línea
 * de código de origen de donde proviene.
 *
 * @module Instruccion
 *
 * @author David Serrano Medrano
 * @author Leandro Mora Corrales
 * @author Xiara Suarez Alpizar
 * @author Bryan Hernandez Hernández
 *
 * @version 1.0.0
 * @since 15-10-2024
 */

class Instruccion {
	/**
	 * Crea una instancia de la clase Instruccion.
	 *
	 * @param {string} mnemonic - El código mnemotécnico de la instrucción.
	 * @param {Array<string>} [params=[]] - Los parámetros asociados a la instrucción.
	 * @param {number} [line=0] - La línea de código de origen de la instrucción.
	 */
	constructor(mnemonic, params = [], line = 0) {
		this.mnemonic = mnemonic;
		this.params = params;
		this.line = line;
	}

	/**
	 * Devuelve el código mnemotécnico de la instrucción.
	 *
	 * @returns {string} - El código mnemotécnico.
	 */
	getMnemonic() {
		return this.mnemonic;
	}

	/**
	 * Devuelve los parámetros de la instrucción.
	 *
	 * @returns {Array<string>} - Los parámetros de la instrucción.
	 */
	getParams() {
		return this.params;
	}

	/**
	 * Devuelve la línea de código de origen de la instrucción.
	 *
	 * @returns {number} - La línea de origen.
	 */
	getLine() {
		return this.line;
	}

	/**
	 * Devuelve una representación en forma de cadena de la instrucción.
	 *
	 * @returns {string} - Representación en cadena de la instrucción.
	 */
	toString() {
		return `${this.mnemonic} ${this.params.join(' ')} -> [${this.line}]`;
	}
}

export default Instruccion;
