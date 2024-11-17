/**
 * @file instructions.js
 * @description Clase Instructions que gestiona el registro y recuperación de comandos
 * para la máquina virtual BiesVM. Proporciona métodos para obtener comandos por su mnemotécnico.
 * @module INSTRUCTIONS
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

import * as Commands from './commands/all_comands.js';
import { MNEMONICS } from '../constants/mnemonics.js';

/**
 * Clase Instructions que gestiona el registro y recuperación de comandos para la máquina virtual BiesVM.
 * Proporciona métodos para obtener comandos por su mnemotécnico y registrar nuevos comandos.
 */
export default class Instructions {
	// Objeto estático para almacenar los comandos registrados
	static #instructions = {};

	// Inicialización estática que registra todos los comandos al cargar la clase
	static {
		this.#registerInstructions();
	}

	/**
	 * Obtiene un comando basado en su mnemotécnico.
	 * @param {string} mnemonic - El mnemotécnico del comando a obtener.
	 * @param {WritableStream} errorStream - Flujo de salida para escribir errores.
	 * @returns {Command} El comando correspondiente al mnemotécnico.
	 * @throws {Error} Si no se encuentra el comando correspondiente.
	 */
	static getCommand(mnemonic, errorStream) {
		const command = this.#instructions[mnemonic];
		if (!command) {
			errorStream.write(`No se encontró el comando para la instrucción ${mnemonic}\n`);
			throw new Error(`No se encontró el comando para la instrucción ${mnemonic}`);
		}
		return command;
	}

	/**
	 * Registra un comando asociado a su mnemotécnico.
	 * @param {string} mnemonic - El mnemotécnico del comando.
	 * @param {Command} command - La instancia del comando a registrar.
	 */
	static #registerInstruction(mnemonic, command) {
		this.#instructions[mnemonic] = command;
	}

	/**
	 * Registra todos los comandos disponibles en la máquina virtual.
	 */
	static #registerInstructions() {
		// Comandos de control
		this.#registerInstruction(MNEMONICS.HLT, new Commands.HltCommand());

		// Comandos relacionados con la pila
		this.#registerInstruction(MNEMONICS.POP, new Commands.PopCommand());
		this.#registerInstruction(MNEMONICS.SWP, new Commands.SwpCommand());
		this.#registerInstruction(MNEMONICS.LDV, new Commands.LdvCommand());
		this.#registerInstruction(MNEMONICS.BLD, new Commands.BldCommand());
		this.#registerInstruction(MNEMONICS.BST, new Commands.BstCommand());

		// Comandos relacionados con funciones
		this.#registerInstruction(MNEMONICS.LDF, new Commands.LdfCommand());
		this.#registerInstruction(MNEMONICS.APP, new Commands.AppCommand());
		this.#registerInstruction(MNEMONICS.RET, new Commands.RetCommand());

		// Comandos aritméticos y unarios
		this.#registerInstruction(MNEMONICS.ADD, new Commands.OperationCommand((n, m) => n + m));
		this.#registerInstruction(MNEMONICS.SUB, new Commands.OperationCommand((n, m) => n - m));
		this.#registerInstruction(MNEMONICS.MUL, new Commands.OperationCommand((n, m) => n * m));
		this.#registerInstruction(MNEMONICS.DIV, new Commands.OperationCommand((n, m) => n / m));

		this.#registerInstruction(MNEMONICS.NEG, new Commands.UnaryOperationCommand((n) => -n));
		this.#registerInstruction(MNEMONICS.SGN, new Commands.UnaryOperationCommand((n) => n > 0));

		// Comandos de comparación y lógica
		this.#registerInstruction(MNEMONICS.EQ, new Commands.EQCommand((n, m) => n === m));
		this.#registerInstruction(MNEMONICS.GT, new Commands.ComparisonCommand((n, m) => n > m));
		this.#registerInstruction(MNEMONICS.GTE, new Commands.ComparisonCommand((n, m) => n >= m));
		this.#registerInstruction(MNEMONICS.LT, new Commands.ComparisonCommand((n, m) => n < m));
		this.#registerInstruction(MNEMONICS.LTE, new Commands.ComparisonCommand((n, m) => n <= m));
		this.#registerInstruction(MNEMONICS.AND, new Commands.ComparisonCommand((n, m) => n && m));
		this.#registerInstruction(MNEMONICS.OR, new Commands.ComparisonCommand((n, m) => n || m));
		this.#registerInstruction(MNEMONICS.XOR, new Commands.ComparisonCommand((n, m) => n ^ m));

		this.#registerInstruction(
			MNEMONICS.NOT,
			new Commands.UnaryOperationCommand((n1) =>
				n1 === 0 || n1 === '' || (Array.isArray(n1) && n1.length === 0) || n1 === false ? true : false,
			),
		);

		// Comandos relacionados con strings
		this.#registerInstruction(MNEMONICS.SNT, new Commands.UnaryOperationCommand((s) => (s === '')));
		this.#registerInstruction(MNEMONICS.CAT, new Commands.OperationCommand((s1, s2) => s1 + s2));
		this.#registerInstruction(MNEMONICS.TOS, new Commands.UnaryOperationCommand((s) => s.toString()));
		this.#registerInstruction(MNEMONICS.STK, new Commands.UnaryOperationCommand((s) => s.slice(0, -1)));
		this.#registerInstruction(MNEMONICS.SRK, new Commands.UnaryOperationCommand((s) => s.slice(1)));

		// Comandos de bifurcación
		this.#registerInstruction(MNEMONICS.BT, new Commands.BtCommand());
		this.#registerInstruction(MNEMONICS.BF, new Commands.BfCommand());
		this.#registerInstruction(MNEMONICS.BR, new Commands.BrCommand());

		// | 'CST' | 'INO'                                     // Conversiones/Verificaciones de Tipo
		// Falta implementar

		// Comandos de entrada/salida
		this.#registerInstruction(MNEMONICS.PRN, new Commands.PrnCommand());
		this.#registerInstruction(MNEMONICS.INP, new Commands.InpCommand());

		//SntCommand, ConcatCommand, TosCommand, StkCommand, SrkCommand

		// Comandos relacionados con Strings
		this.#registerInstruction(MNEMONICS.SNT, new Commands.SntCommand());
		this.#registerInstruction(MNEMONICS.CAT, new Commands.ConcatCommand());
		this.#registerInstruction(MNEMONICS.TOS, new Commands.TosCommand());
		this.#registerInstruction(MNEMONICS.STK, new Commands.StkCommand());
		this.#registerInstruction(MNEMONICS.SRK, new Commands.SrkCommand());

		// Comandos relacionados con listas
		this.#registerInstruction(MNEMONICS.LNT, new Commands.LntCommand());
		this.#registerInstruction(MNEMONICS.LIN, new Commands.LinCommand());
		this.#registerInstruction(MNEMONICS.LTK, new Commands.LtkCommand());
		this.#registerInstruction(MNEMONICS.LRK, new Commands.LrkCommand());
		this.#registerInstruction(MNEMONICS.TOL, new Commands.TolCommand());

		// Comandos relacionados con tipos
		this.#registerInstruction(MNEMONICS.CST, new Commands.CstCommand());
		this.#registerInstruction(MNEMONICS.INO, new Commands.InoCommand());

		// Comandos extras
		this.#registerInstruction(MNEMONICS.POW, new Commands.OperationCommand((n, m) => Math.pow(n, m)));
		this.#registerInstruction(MNEMONICS.LEN, new Commands.UnaryOperationCommand((n) => n.length));
		this.#registerInstruction(MNEMONICS.NEQ, new Commands.EQCommand((n, m) => n !== m));
	}
}
