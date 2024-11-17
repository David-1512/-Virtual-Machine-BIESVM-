/**
 * @file list_commands.js
 * @description Implementación de comandos relacionados con listas para la máquina virtual BiesVM. Incluye comandos para verificar nulidad, insertar elementos, tomar elementos y convertir valores en listas.
 * @module LIST_COMMANDS
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
 * Clase que representa el comando para verificar la nulidad de una lista.
 * @extends Command
 */
class LntCommand extends Command {
	/**
	 * Ejecuta el comando de prueba de nulidad, verificando si el valor es una lista vacía.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
	 */
	execute(runner, outputStream) {
		let value = runner.stack.pop();
		outputStream.write(`Verificando Nulidad de ${value}: ${value.length === 0 ? 1 : 0}\n`);
		runner.stack.push(value.length === 0 ? 1 : 0);
	}
}

/**
 * Clase que representa el comando para insertar un elemento al inicio de una lista.
 * @extends Command
 */
class LinCommand extends Command {
	/**
	 * Ejecuta el comando de inserción, añadiendo un valor al inicio de la lista.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
	 */
	execute(runner, outputStream) {		
		let v = runner.stack.pop();
		let l = runner.stack.pop();
		outputStream.write(`Insertando ${v}  al inicio de ${l} : ${l.unshift(v)} \n`);
		runner.stack.push(l);
	}
}

/**
 * Clase que representa el comando para tomar el k-ésimo elemento de una lista.
 * @extends Command
 */
class LtkCommand extends Command {
	/**
	 * Ejecuta el comando de toma, extrayendo el k-ésimo elemento de la lista.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
	 */
	execute(runner, outputStream) {
		let k = runner.stack.pop();
		let l = runner.stack.pop();		
		outputStream.write(`v: ${l}, k: ${k}, v[k]: ${l[k]}`);
		runner.stack.push(l[k]);
	}
}

/**
 * Clase que representa el comando para tomar el resto de una lista a partir de la posición k.
 * @extends Command
 */
class LrkCommand extends Command {
	/**
	 * Ejecuta el comando de extracción, tomando el resto de la lista a partir de la posición k.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
	 */
	execute(runner, outputStream) {
		let l = runner.stack.pop();
		let k = runner.stack.pop();
		outputStream.write(`Tomando de ${l}  el resto apartir de la posicion ${k} : ${l.slice(k)} \n`);
		runner.stack.push(l.slice(k));
	}
}

/**
 * Clase que representa el comando para convertir un valor en una lista.
 * @extends Command
 */
class TolCommand extends Command {
	/**
	 * Ejecuta el comando de conversión, convirtiendo un valor en una lista.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
	 */
	execute(runner, outputStream) {
		let value = runner.stack.pop();
		let toList = Array.from(value);
		outputStream.write(`Convirtiendo ${value} en lista: ${toList} \n`);
		runner.stack.push(toList);
	}
}

export { LntCommand, LinCommand, LtkCommand, LrkCommand, TolCommand };
