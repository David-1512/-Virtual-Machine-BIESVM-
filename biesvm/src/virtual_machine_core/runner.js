/**
 * @file runner.js
 * @description Clase Runner que se encarga de ejecutar el código en la máquina virtual BiesVM.
 * Maneja el estado de la máquina virtual, la pila, el entorno y el contexto de ejecución.
 * @module RUNNER
 *
 * @project biesVM
 * Proyecto académico donde se implementa una máquina virtual basada en pila para un lenguaje funcional llamado bies.
 * El objetivo principal es implementar un intérprete (biesVM) que procese y ejecute código ensamblador generado para este lenguaje.
 *
 * @author David Serrano Medrano
 * @author Leandro Mora Corrales
 * @author Xiara Suarez Alpízar
 * @author Bryan Hernandez Hernández
 *
 * @version 1.0.0
 * @since 15-10-2024
 */

import Instructions from './instructions.js';
import Frame from './components/binding/frame.js';
import { ContextStack } from './components/context/context.js';

/**
 * Clase Runner que maneja la ejecución del código en la máquina virtual BiesVM.
 */
class Runner {
	/**
	 * Crea una instancia de Runner.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir resultados.
	 * @param {WritableStream} errorStream - Flujo de salida para escribir errores.
	 * @param {number} traceLevel - Nivel de traza para la ejecución.
	 */
	constructor(outputStream, errorStream, traceLevel) {
		this.stack = [];
		this.environment = new Frame();
		this.context = new ContextStack();
		this.pc = 0;
		this.currentFunc = null;
		this.outputStream = outputStream;
		this.errorStream = errorStream;
		this.traceLevel = traceLevel;
	}

	/**
	 * Ejecuta el código en la máquina virtual.
	 * @param {Code} code - El código que contiene las funciones a ejecutar.
	 */
	execute(code) {
		this.currentFunc = code.getFunction(code.getInit().getParams()[0]);

		while (true) {
			const { mnemonic, params } = this._getInstruction();
			this.outputStream.write(`Ejecutando: ${mnemonic} ${params.join(' ')}\n`);

			if (this.traceLevel == 1) {
				console.log(
					'\x1b[31m%s\x1b[0m',
					`${this.currentFunc.getId()} Ejecutando: ${mnemonic} ${params.join(' ')}`,
				);
			}

			if (this._handleInstruction(mnemonic, params, code)) {
				return;
			}

			this.pc++;
		}
	}

	/**
	 * Obtiene la instrucción actual en la posición del contador de programa.
	 * @returns {Object} Un objeto que contiene el mnemotécnico y los parámetros de la instrucción.
	 */
	_getInstruction() {
		const instruction = this.currentFunc.getInstructionAt(this.pc);
		return {
			mnemonic: instruction.getMnemonic(),
			params: instruction.getParams(),
		};
	}

	/**
	 * Maneja la ejecución de la instrucción actual.
	 * @param {string} mnemonic - El mnemotécnico de la instrucción.
	 * @param {Array} params - Los parámetros de la instrucción.
	 * @param {Code} code - El código que contiene las funciones.
	 * @returns {boolean} Verdadero si la instrucción indica finalizar la ejecución, falso en caso contrario.
	 */
	_handleInstruction(mnemonic, params, code) {
		const command = Instructions.getCommand(mnemonic, this.errorStream);
		if (command) {
			return command.execute(this, this.outputStream, this.errorStream, params, code);
		} else {
			this.errorStream.write(`Instrucción no reconocida: ${mnemonic}\n`);
			throw new Error(`Instrucción no reconocida: ${mnemonic}`);
		}
	}

	/**
	 * Obtiene el frame actual del entorno léxico.
	 * @returns {Frame} El entorno léxico actual.
	 */
	getCurrentFrame() {
		return this.environment; // Retornar el frame actual (entorno léxico)
	}

	/**
	 * Agrega un valor a la pila.
	 * @param {any} value - Valor a agregar a la pila.
	 */
	pushToStack(value) {
		this.stack.push(value); // Poner valor en la pila S
	}

	/**
	 * Extrae un valor de la pila.
	 * @returns {any} El valor extraído de la pila.
	 */
	popFromStack() {
		return this.stack.pop(); // Sacar valor de la pila S
	}

	/**
	 * Establece un nuevo frame como el entorno léxico actual.
	 * @param {Frame} frame - El nuevo frame a establecer.
	 */
	pushNewFrame(frame) {
		this.environment = frame; // Actualizar el entorno léxico actual
	}

	/**
	 * Restaura el entorno léxico al frame padre.
	 */
	popFrame() {
		this.environment = this.environment.parent; // Volver al padre léxico al finalizar la función
	}

	/**
	 * Guarda el contexto de ejecución actual en la pila de contextos.
	 */
	saveContext() {
		this.context.pushContext(this.pc, this.environment, this.currentFunc.getId()); // Guardar el contexto de ejecución en la pila D
	}

	/**
	 * Restaura el contexto de ejecución desde la pila de contextos.
	 * @param {Code} code - El código que contiene las funciones.
	 */
	restoreContext(code) {
		const context = this.context.popContext(); // Restaurar el contexto de ejecución
		this.pc = context.pc; // Restaurar el contador de programa
		this.environment = context.environment; // Restaurar el entorno léxico
		this.currentFunc = code.getFunction(context.funcId);
	}
}

export default Runner;
