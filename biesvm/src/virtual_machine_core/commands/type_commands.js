/**
 * @file type_commands.js
 * @description Implementación de comandos de verificación y casteo de tipos para la máquina virtual BiesVM.
 * Estos comandos permiten validar y convertir tipos de valores en la pila.
 * @module TYPE_COMMANDS
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

import Command from './command.js';

/**
 * Clase CstCommand que representa un comando para realizar el casteo de tipos.
 * @extends Command
 */
class CstCommand extends Command {
	/**
	 * Ejecuta el comando de casteo, verificando si el valor en la pila es del tipo esperado.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
	 * @param {WritableStream} errorStream - Flujo de salida para escribir los errores.
	 * @param {Array} params - Parámetros del comando, donde el primer elemento es el tipo esperado.
	 * @throws {Error} Si el valor no es del tipo esperado.
	 */
	execute(runner, outputStream, errorStream, params) {
		const expectedType = params[0]; // Tipo esperado (number, list, string)
		const value = runner.popFromStack(); // Valor que será casteado

		const isValidType = this._checkType(value, expectedType);
		if (isValidType) {
			runner.pushToStack(value);
			outputStream.write(`Cast exitoso: ${value} es de tipo ${expectedType}\n`);
		} else {
			const errorMessage = `Error de casteo: ${value} no es de tipo ${expectedType}`;
			errorStream.write(errorMessage + '\n');
			throw new Error(errorMessage);
		}
	}

	/**
	 * Verifica si el valor es del tipo esperado.
	 * @param {any} value - Valor a verificar.
	 * @param {string} type - Tipo esperado (number, string, list).
	 * @returns {boolean} Verdadero si el tipo coincide, falso en caso contrario.
	 */
	_checkType(value, type) {
		switch (type) {
			case 'number':
				return typeof value === 'number';
			case 'string':
				return typeof value === 'string';
			case 'list':
				return Array.isArray(value);
			default:
				return false;
		}
	}
}

/**
 * Clase InoCommand que representa un comando para verificar el tipo de un valor.
 * @extends Command
 */
class InoCommand extends Command {
	/**
	 * Ejecuta el comando de verificación de tipo, comprobando si el valor en la pila coincide con el tipo esperado.
	 * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
	 * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
	 * @param {WritableStream} errorStream - Flujo de salida para escribir los errores.
	 * @param {Array} params - Parámetros del comando, donde el primer elemento es el tipo esperado.
	 */
	execute(runner, outputStream, errorStream, params) {
		const type = params[0]; // Tipo esperado
		const value = runner.popFromStack(); // Valor de la pila
		const isValid = this._validateType(value, type);

		runner.pushToStack(isValid ? 1 : 0);
		outputStream.write(`Verificación de tipo: ${value} es de tipo ${type}: ${isValid}\n`);
	}

	/**
	 * Valida si el valor es del tipo esperado.
	 * @param {any} value - Valor a verificar.
	 * @param {string} type - Tipo esperado (number, string, list).
	 * @returns {boolean} Verdadero si el tipo coincide, falso en caso contrario.
	 */
	_validateType(value, type) {
		switch (type) {
			case 'number':
				return typeof value === 'number';
			case 'string':
				return typeof value === 'string';
			case 'list':
				return Array.isArray(value);
			default:
				return false;
		}
	}
}

export { InoCommand, CstCommand };
