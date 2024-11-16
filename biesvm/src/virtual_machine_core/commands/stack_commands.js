/**
 * @file stack_commands.js
 * @description Implementación de comandos relacionados con la pila para la máquina virtual BiesVM. Incluye comandos para manipular la pila, como sacar elementos, intercambiar, cargar y almacenar variables.
 * @module STACK_COMMANDS
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
 * Clase que representa el comando para sacar el elemento superior de la pila.
 * @extends Command
 */
class PopCommand extends Command {
	/**
	 * Ejecuta el comando de extracción, sacando el valor de la parte superior de la pila.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
	 */
	execute(runner, outputStream) {
		const valor = runner.stack.pop();
		outputStream.write(`Sacando ${valor} de la pila`);
	}
}

/**
 * Clase que representa el comando para intercambiar los dos elementos superiores de la pila.
 * @extends Command
 */
class SwpCommand extends Command {
	/**
	 * Ejecuta el comando de intercambio, cambiando la posición de los dos elementos superiores de la pila.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
	 */
	execute(runner, outputStream) {
		const n2 = runner.stack.pop();
		const n1 = runner.stack.pop();
		outputStream.write(`Intercambiando posicion de ${n1} y ${n2} en la pila. `);
		runner.stack.push(n2);
		runner.stack.push(n1);
	}
}

/**
 * Clase que representa el comando para cargar un valor en la pila.
 * @extends Command
 */
class LdvCommand extends Command {
	/**
	 * Ejecuta el comando de carga, empujando un valor a la pila.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
	 * @param {WritableStream} errorStream - Flujo de salida para escribir los errores.
	 * @param {Array} params - Parámetros para el comando, donde el primer elemento es el valor a cargar.
	 */
	execute(runner, outputStream, errorStream, params) {
		const value = params[0];
		outputStream.write(`Cargando valor ${value} en la pila. `);
		runner.stack.push(value);
	}
}

/**
 * Clase que representa el comando para cargar una variable desde el entorno a la pila.
 * @extends Command
 */
class BldCommand extends Command {
	/**
	 * Ejecuta el comando de carga, sacando una variable del entorno y empujándola a la pila.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
	 * @param {WritableStream} errorStream - Flujo de salida para escribir los errores.
	 * @param {Array} params - Parámetros para el comando, donde el primer elemento es el índice del entorno y el segundo es el índice de la variable.
	 */
	execute(runner, outputStream, errorStream, params) {
		const envIndex = params[0];
		const varIndex = params[1];
		outputStream.write(`Cargando variable ${varIndex} del entorno ${envIndex}\n`);

		if (runner.environment.getVariable(envIndex, varIndex) !== undefined) {
			runner.stack.push(runner.environment.getVariable(envIndex, varIndex));
		} else {
			runner.stack.push('');
		}
	}
}

/**
 * Clase que representa el comando para almacenar una variable en el entorno.
 * @extends Command
 */
class BstCommand extends Command {
	/**
	 * Ejecuta el comando de almacenamiento, guardando el valor superior de la pila en el entorno.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
	 * @param {WritableStream} errorStream - Flujo de salida para escribir los errores.
	 * @param {Array} params - Parámetros para el comando, donde el primer elemento es el índice del entorno y el segundo es el índice de la variable.
	 */
	execute(runner, outputStream, errorStream, params) {
		const envIndex = params[0];
		const varIndex = params[1];
		outputStream.write(`Almacenando variable en entorno ${envIndex}, índice ${varIndex}\n`);
		runner.environment.setVariable(envIndex, varIndex, runner.stack.pop());
	}
}

export { PopCommand, SwpCommand, LdvCommand, BldCommand, BstCommand };
