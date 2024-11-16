/**
 * @file string_commands.js
 * @description Implementación de comandos relacionados con cadenas para la máquina virtual BiesVM. Incluye comandos para verificar nulidad, concatenar cadenas, convertir a string, y manipular cadenas.
 * @module STRING_COMMANDS
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

/**
 * Clase que representa el comando para verificar la nulidad de una cadena.
 * @extends Command
 */
class SntCommand extends Command {
	/**
	 * Ejecuta el comando de prueba de nulidad, verificando si el valor es una cadena vacía.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
	 */
	execute(runner, outputStream) {
		const value = runner.stack.pop();
		outputStream.write(`Verificando nulidad de ${value} :  ${value === '' ? 1 : 0} \n`);
		runner.stack.push(value === '' ? 1 : 0);
	}
}

/**
 * Clase que representa el comando para concatenar dos cadenas.
 * @extends Command
 */
class ConcatCommand extends Command {
	/**
	 * Ejecuta el comando de concatenación, uniendo dos cadenas y empujando el resultado a la pila.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
	 */
	execute(runner, outputStream) {
		const h2 = runner.stack.pop();
		const h1 = runner.stack.pop();
		outputStream.write(`Concatenando ${h1} y  ${h2}: ${h1 + h2} \n`);
		runner.stack.push(h1 + h2);
	}
}

/**
 * Clase que representa el comando para convertir un valor a una cadena.
 * @extends Command
 */
class TosCommand extends Command {
	/**
	 * Ejecuta el comando de conversión, convirtiendo un valor en una cadena.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
	 */
	execute(runner, outputStream) {
		const value = runner.stack.pop();
		outputStream.write(`Convirtiendo ${value} a String: ${value.toString()} \n`);
		runner.stack.push(value.toString());
	}
}

/**
 * Clase que representa el comando para tomar el k-ésimo carácter de una cadena.
 * @extends Command
 */
class StkCommand extends Command {
	/**
	 * Ejecuta el comando de extracción, sacando el k-ésimo carácter de una cadena.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
	 * @param {WritableStream} errorStream - Flujo de salida para escribir los errores.
	 */
	execute(runner, outputStream, errorStream) {
		const value = runner.stack.pop();
		const k = runner.stack.pop();
		outputStream.write(`Value: ${value} K: ${k} STK: ${value[k]}`);
		runner.stack.push(value[k]);
	}
}

/**
 * Clase que representa el comando para tomar el resto de una cadena a partir de la posición k.
 * @extends Command
 */
class SrkCommand extends Command {
	/**
	 * Ejecuta el comando de extracción, tomando el resto de la cadena a partir de la posición k.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
	 */
	execute(runner, outputStream) {
		const value = runner.stack.pop();
		const k = runner.stack.pop();
		outputStream.write(`Tomando de ${value}  el resto apartir de la posicion ${k} : ${value.slice(k)} \n`);
		runner.stack.push(value.slice(k));
	}
}

export { SntCommand, ConcatCommand, TosCommand, StkCommand, SrkCommand };
