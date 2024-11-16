/**
 * @file branch_commands.js
 * @description Implementación de los comandos de bifurcación para la máquina virtual BiesVM. Estos comandos permiten realizar saltos condicionales e incondicionales en la ejecución del programa.
 * @module BRANCH_COMMANDS
 *
 * @project biesVM
 * Proyecto académico donde se implementa una máquina virtual basada en pila para un lenguaje funcional llamado bies.
 * El objetivo principal es implementar un intérprete (biesVM) que procese y ejecute código ensamblador generado para este lenguaje.
 *
 *  @author David Serrano Medrano
 *  @author Leandro Mora Corrales
 *  @author Xiara Suarez Alpizar
 *  @author Bryan Hernandez Hernández
 *
 *  @version 1.0.0
 *
 *  @since 15-10-2024
 */

import Command from './command.js';

/**
 * Clase que representa un comando de bifurcación incondicional.
 * @extends Command
 */
class BrCommand extends Command {
	/**
	 * Ejecuta una bifurcación incondicional, ajustando el contador de programa (pc).
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados (no se utiliza en este comando).
	 * @param {WritableStream} errorStream - Flujo de salida para escribir los errores (no se utiliza en este comando).
	 * @param {Array} params - Parámetros para la bifurcación, donde el primer elemento es el offset.
	 */
	execute(runner, outputStream, errorStream, params) {
		runner.pc += params[0] - 1;
	}
}

/**
 * Clase que representa un comando de bifurcación condicional verdadera (Branch True).
 * @extends Command
 */
class BtCommand extends Command {
	/**
	 * Ejecuta una bifurcación si el valor en la parte superior de la pila es diferente de 0.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados (no se utiliza en este comando).
	 * @param {WritableStream} errorStream - Flujo de salida para escribir los errores (no se utiliza en este comando).
	 * @param {Array} params - Parámetros para la bifurcación, donde el primer elemento es el offset.
	 * @throws {Error} Si el valor de la pila no es numérico.
	 */
	execute(runner, outputStream, errorStream, params) {
		let offset = Number(params[0]);
		offset > 0 ? (offset -= 1) : (offset += 1);
		const value = runner.stack.pop();
		if (value !== 0) {
			runner.pc += offset;
		}
	}
}

/**
 * Clase que representa un comando de bifurcación condicional falsa (Branch False).
 * @extends Command
 */
class BfCommand extends Command {
	/**
	 * Ejecuta una bifurcación si el valor en la parte superior de la pila es igual a 0.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados (no se utiliza en este comando).
	 * @param {WritableStream} errorStream - Flujo de salida para escribir los errores (no se utiliza en este comando).
	 * @param {Array} params - Parámetros para la bifurcación, donde el primer elemento es el offset.
	 * @throws {Error} Si el valor de la pila no es numérico.
	 */
	execute(runner, outputStream, errorStream, params) {
		let offset = Number(params[0]);
		offset > 0 ? (offset -= 1) : (offset += 1);
		const value = runner.stack.pop();
		if (value === 0) {
			runner.pc += offset;
		}
	}
}

export { BrCommand, BtCommand, BfCommand };
