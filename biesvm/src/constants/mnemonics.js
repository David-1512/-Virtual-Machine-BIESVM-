/**
 * @file BiesVM Mnemónicos
 * @description Tabla de mnemónicos utilizados por la máquina virtual BiesVM. Contiene los comandos de control, pila, funciones, aritméticos, comparativos, lógicos, bifurcación, entrada/salida, hileras, listas y tipos.
 * @module BiesVM_MNEMONICS
 *
 * @project biesVM
 * Proyecto académico donde se implementa una máquina virtual basada en pila para un lenguaje funcional de juguete llamado bies.
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

/**
 * Tabla de mnemónicos utilizados por la BiesVM.
 * @constant {Object} MNEMONICS
 */

export const MNEMONICS = {
	HLT: 'HLT', // Halt
	INI: 'INI', // Inicializar

	POP: 'POP', // Pop
	SWP: 'SWP', // Swap
	LDV: 'LDV', // Load Value
	BLD: 'BLD', // Bindings Load
	BST: 'BST', // Bindings Store

	LDF: 'LDF', // Load Function
	APP: 'APP', // Apply
	RET: 'RET', // Return

	ADD: 'ADD', // Add
	SUB: 'SUB', // Subtract
	MUL: 'MUL', // Multiply
	DIV: 'DIV', // Divide

	NEG: 'NEG', // Negate
	SGN: 'SGN', // Sign

	EQ: 'EQ', // Equal
	GT: 'GT', // Greater Than
	GTE: 'GTE', // Greater Than or Equal
	LT: 'LT', // Less Than
	LTE: 'LTE', // Less Than or Equal

	AND: 'AND', // And
	OR: 'OR', // Or
	XOR: 'XOR', // Xor
	NOT: 'NOT', // Not

	BT: 'BT', // Branch True
	BF: 'BF', // Branch False
	BR: 'BR', // Branch
	NOP: 'NOP', // No Operation

	INP: 'INP', // Input
	PRN: 'PRN', // Print

	SNT: 'SNT',
	CAT: 'CAT',
	TOS: 'TOS',
	STK: 'STK',
	SRK: 'SRK',

	LIN: 'LIN',
	LNT: 'LNT',
	TOL: 'TOL',
	LTK: 'LTK',
	LRK: 'LRK',

	CST: 'CST',
	INO: 'INO',

	//Extras
	POW: 'POW', 
	LEN: 'LEN',
	NEQ: 'NEQ',
};
