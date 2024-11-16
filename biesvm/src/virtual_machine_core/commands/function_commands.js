/**
 * @file function_commands.js
 * @description Implementación de comandos relacionados con funciones para la máquina virtual BiesVM. Incluye comandos para cargar, aplicar y retornar de funciones.
 * @module FUNCTION_COMMANDS
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

import Command from './command.js';
import Closure from '../components/closure.js';
import Frame from '../components/binding/frame.js';

/**
 * Clase que representa el comando para cargar una función.
 * @extends Command
 */
class LdfCommand extends Command {
	/**
	 * Ejecuta el comando de carga de función, creando una clausura y empujándola a la pila.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
	 * @param {WritableStream} errorStream - Flujo de salida para escribir los errores.
	 * @param {Array} params - Parámetros para el comando, donde el primer elemento es el nombre de la función.
	 */
	execute(runner, outputStream, errorStream, params) {
		const functionName = params[0];
		const currentFrame = runner.getCurrentFrame(); // Frame actual

		outputStream.write(`Cargando clausura de la función ${functionName} en la pila.\n`);

		const closure = new Closure(functionName, currentFrame);

		runner.stack.push(closure);
	}
}

/**
 * Clase que representa el comando para aplicar una función.
 * @extends Command
 */
class AppCommand extends Command {
	/**
	 * Ejecuta el comando de aplicación de función, extrayendo los argumentos y creando un nuevo frame.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
	 * @param {WritableStream} errorStream - Flujo de salida para escribir los errores.
	 * @param {Array} params - Parámetros para el comando, donde el primer elemento es el número de argumentos.
	 * @param {Object} code - Código fuente que contiene la función a ejecutar.
	 */
	execute(runner, outputStream, errorStream, params, code) {
		const closure = runner.popFromStack();
		let k = params[0] || 1;
		params[0] == 0 ? (k = 0) : params[0] > 0 ? (k = params[0]) : (k = 1);

		const args = Array.from({ length: k }, () => runner.stack.pop()).reverse();

		outputStream.write(`Aplicando la función ${closure.fn} con ${k} argumentos: ${args}\n`);

		const newFrame = new Frame(closure.lexicalEnv);
		args.forEach((arg, index) => newFrame.setVariable('0', index, arg));

		runner.saveContext();

		runner.pushNewFrame(newFrame);

		// Saltar a la función
		outputStream.write(`Llamando a función ${closure.fn} con argumentos ${args.join(', ')}\n`);
		runner.currentFunc = code.getFunction(closure.fn);
		runner.pc = -1;

		outputStream.write(`Argumentos de la función:\n  ${runner.environment.toString()}`);
	}
}

/**
 * Clase que representa el comando para retornar de una función.
 * @extends Command
 */
class RetCommand extends Command {
	/**
	 * Ejecuta el comando de retorno, restaurando el contexto y el frame anterior.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
	 * @param {WritableStream} errorStream - Flujo de salida para escribir los errores.
	 * @param {Array} params - Parámetros para el comando (no utilizados en este caso).
	 * @param {Object} code - Código fuente que contiene la función a ejecutar.
	 */
	execute(runner, outputStream, errorStream, params, code) {
		const returnValue = runner.popFromStack(); // Sacar el valor de retorno de la pila
		outputStream.write(`Retornando de la función con valor ${returnValue}\n`);
		runner.popFrame(); // Restaurar el frame (entorno léxico) anterior
		runner.restoreContext(code); // Restaurar el contexto de ejecución anterior
		runner.pushToStack(returnValue); // Poner el valor de retorno en la pila
	}
}

export { LdfCommand, AppCommand, RetCommand };
