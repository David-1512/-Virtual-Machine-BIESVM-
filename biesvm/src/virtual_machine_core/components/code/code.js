/**
 * @file code.js
 * @description Clase que representa el conjunto de funciones y su configuración en la máquina virtual BiesVM.
 * Maneja la colección de funciones, la función principal y las instrucciones de inicialización.
 * @module CODE
 *
 * @project biesVM
 * Proyecto académico donde se implementa una máquina virtual basada en pila para un lenguaje funcional llamado bies.
 * El objetivo principal es implementar un intérprete (biesVM) que procese y ejecute código ensamblador generado para este lenguaje.
 *
 * @author David Serrano Medrano
 * @author Leandro Mora Corrales
 * @author Xiara Suarez Alpizar
 * @author Bryan Hernandez Hernández
 *
 * @version 1.0.0
 * @since 15-10-2024
 */

class Code {
	/**
	 * Crea una instancia de la clase Code, inicializando un objeto para almacenar funciones,
	 * así como referencias a la función principal e instrucciones de inicialización.
	 */
	constructor() {
		this.functions = {};
		this.main = null;
		this.init = null;
	}

	/**
	 * Agrega una función al conjunto de funciones.
	 *
	 * @param {Function} func - La función a agregar, que debe implementar un método getId().
	 */
	addFunction(func) {
		this.functions[func.getId()] = func;
	}

	/**
	 * Establece la función principal a ejecutar.
	 *
	 * @param {Function} func - La función principal que debe implementarse.
	 */
	setMain(func) {
		this.main = func;
	}

	/**
	 * Establece las instrucciones de inicialización.
	 *
	 * @param {Instruction} instr - Las instrucciones de inicialización.
	 */
	setInit(instr) {
		this.init = instr;
	}

	/**
	 * Devuelve las instrucciones de inicialización.
	 *
	 * @returns {Instruction} - Las instrucciones de inicialización almacenadas.
	 */
	getInit() {
		return this.init;
	}

	/**
	 * Recupera una función por su identificador.
	 *
	 * @param {string} id - El identificador de la función que se desea recuperar.
	 * @returns {Function} - La función correspondiente al identificador dado.
	 */
	getFunction(id) {
		return this.functions[id];
	}

	/**
	 * Devuelve una representación en forma de cadena del estado de la clase Code.
	 *
	 * @returns {string} - Representación en cadena del conjunto de funciones y la instrucción de inicio.
	 */
	toString() {
		let str = '';
		if (this.init) {
			str += `Instrucción de inicio:\n  ${this.init.toString()}\n`;
		}
		for (const key in this.functions) {
			if (this.functions.hasOwnProperty(key)) {
				const func = this.functions[key];
				str += `Función ${func.getId()}:\n`;
				str += `Locales: ${func.getLocals()}\n`;
				str += `Padre: ${func.getParent()}\n`;
				func.getInstructions().forEach((instr) => {
					str += `  ${instr.toString()}\n`;
				});
			}
		}
		return str;
	}
}

export default Code;
