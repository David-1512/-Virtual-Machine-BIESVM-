/**
 * @file comparison_commands.js
 * @description Implementación de comandos de comparación para la máquina virtual BiesVM. Estos comandos permiten comparar valores en la pila.
 * @module COMPARISON_COMMANDS
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
 * Clase que representa un comando de comparación genérico.
 * @extends Command
 */
class ComparisonCommand extends Command {
	/**
	 * @param {Function} comparator - Función que representa la operación de comparación a realizar.
	 */
	constructor(comparator) {
		super();
		this.comparator = comparator;
	}

	/**
	 * Ejecuta la comparación entre los dos elementos superiores de la pila.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
	 * @param {WritableStream} errorStream - Flujo de salida para escribir los errores.
	 * @throws {Error} Si los elementos de la pila no pueden ser convertidos a números.
	 */
	execute(runner, outputStream, errorStream) {
		const m = Number(runner.stack.pop());
		const n = Number(runner.stack.pop());
		outputStream.write(`Comparando ${n} y ${m} = ${this.comparator(n, m)}\n`);
		runner.stack.push(this.comparator(n, m) ? 1 : 0);
	}
}

/**
 * Clase que representa un comando de comparación de igualdad.
 * @extends ComparisonCommand
 */
class EQCommand extends ComparisonCommand {
	/**
	 * Ejecuta la comparación de igualdad entre los dos elementos superiores de la pila.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
	 * @param {WritableStream} errorStream - Flujo de salida para escribir los errores.
	 */
	constructor(comparator) {
		super();
		this.comparator = comparator;
	}

	/**
	 * Ejecuta la comparación de igualdad entre los dos elementos superiores de la pila.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
	 * @param {WritableStream} errorStream - Flujo de salida para escribir los errores.
	 */
	execute(runner, outputStream, errorStream) {
		const n = runner.stack.pop();
		const m = runner.stack.pop();
		outputStream.write(`Comparando ${n} y ${m} = ${this.comparator(n, m)}`);
		runner.stack.push(this.comparator(n, m) ? 1 : 0);
	}
}

export { ComparisonCommand, EQCommand };
