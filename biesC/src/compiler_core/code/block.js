/**
 * @file Block.js
 * @description Este archivo define la clase Block, que representa un bloque de código en un compilador o intérprete.
 * Permite organizar y manipular bloques de código, incluyendo instrucciones y sub-bloques.
 * 
 * @module Block
 * 
 * @project biesC
 * Proyecto académico para implementar un compilador para un lenguaje funcional basado en pila (BiesVM).
 * 
 * @class Block
 * @classdesc Representa un bloque de código con un identificador, argumento, bloque padre,
 * lista de instrucciones y sub-bloques.
 * 
 * @author David Serrano Medrano
 * @author Leandro Mora Corrales
 * @author Xiara Suarez Alpizar
 * 
 * @version 1.0.0
 * @since 17-11-2024
 */

class Block {

	/**
     * @constructor
     * @param {string} id - Identificador único del bloque.
     * @param {string} argument - Argumento asociado al bloque.
     * @param {string|null} parent - Identificador del bloque padre. Puede ser null si no hay bloque padre.
     */
	constructor(id, argument, parent) {
		this.id = id;
		this.parent = parent;
		this.argument = argument;
		this.instruccions = [];
		this.blocks = [];
	}

	 /**
     * Obtiene el identificador del bloque.
     * @returns {string} Identificador del bloque.
     */
	getId() {
		return this.id;
	}

	/**
     * Obtiene la lista de instrucciones en el bloque.
     * @returns {Array} Lista de instrucciones.
     */
	getInstruccions() {
		return this.instruccions;
	}

	/**
     * Obtiene la cantidad de instrucciones en el bloque.
     * @returns {number} Número de instrucciones en el bloque.
     */
	getCantInstruccions() {
		return this.instruccions.length;
	}

	/**
     * Agrega una instrucción al bloque.
     * @param {Object} instruccion - La instrucción a agregar.
     */
	addInstruccion(instruccion) {
		this.instruccions.push(instruccion);
	}

	/**
     * Agrega un bloque hijo al bloque actual.
     * @param {Block} block - El bloque hijo a agregar.
     */
	addBlock(block) {
		this.blocks.push(block);
	}

	/**
     * Obtiene la cantidad de bloques hijos.
     * @returns {number} Número de bloques hijos.
     */
	getCantBlocks() {
		return this.blocks.length;
	}

	 /**
     * Convierte el bloque y sus contenidos en una representación de cadena de texto.
     * @returns {string} Representación del bloque como texto.
     */
	toString() {
		let str = '';
		for (const block of this.blocks) {
			if (block) {
				str += `${block.toString()}\n`;
			}
		}
		str += `$FUN $${this.id} args:${this.argument} parent:${this.parent} \n`;
		for (const key in this.instruccions) {
			if (this.instruccions.hasOwnProperty(key)) {
				const instruccion = this.instruccions[key];
				str += `${instruccion.toString()}`;
			}
		}
		return str;
	}
}

export default Block;
