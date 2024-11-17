/**
 * @file Instruccion.js
 * @description Este archivo define la clase Instruccion, que representa una instrucción en un compilador o intérprete.
 * Cada instrucción tiene un mnemónico y una lista de valores asociados, y se puede convertir a una representación de cadena.
 * 
 * @module Instruccion
 * 
 * @project biesC
 * Proyecto académico para implementar un compilador para un lenguaje funcional basado en pila (BiesVM).
 * 
 * @class Instruccion
 * @classdesc Representa una instrucción en un lenguaje funcional, compuesta por un mnemónico y valores asociados.
 * 
 * @author David Serrano Medrano
 * @author Leandro Mora Corrales
 * @author Xiara Suarez Alpizar
 * 
 * @version 1.0.0
 * @since 17-11-2024
 */

class Instruccion {
	 /**
     * @constructor
     * @param {string} mnemonic - El mnemónico de la instrucción, que define su operación.
     * @param {Array<string|number>} values - Lista de valores asociados a la instrucción.
     */
	constructor(mnemonic, values) {
		this.mnemonic = mnemonic;
		this.values = values;
	}

	/**
     * Convierte la instrucción a una representación de cadena de texto.
     * El mnemónico y los valores se separan por espacios.
     * 
     * @returns {string} Representación en cadena de la instrucción.
     */
	toString() {
		let str = `${this.mnemonic}`;
		if (this.values && this.values.length > 0) {
			str += ` ${this.values.join(' ')}`;
		}

		return str + '\n';
	}
}

export default Instruccion;
