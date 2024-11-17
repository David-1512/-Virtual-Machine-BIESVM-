

/**
 * @file Mnemónicos
 * @description Tabla de mnemónicos utilizados por la máquina virtual BiesVM. Contiene los comandos de control, pila, funciones, aritméticos, comparativos, lógicos, bifurcación, entrada/salida, hileras, listas y tipos.
 * @module BiesC_MNEMONICS
 *
 * @project biesC
 * Proyecto académico donde se implementa una máquina virtual basada en pila para un lenguaje funcional de juguete llamado bies.
 *
 *  @author David Serrano Medrano
 *  @author Leandro Mora Corrales
 *  @author Xiara Suarez Alpizar
 *
 *  @version 1.0.0
 *
 *  @since 17-11-2024
 */

/**
 * Tabla de mnemónicos utilizados por la máquina virtual BiesVM.
 * Estos mnemónicos corresponden a las operaciones disponibles en la máquina virtual, que incluyen instrucciones para el control de flujo, manipulación de la pila, operaciones aritméticas, comparaciones, y más.
 * 
 * @constant {Object} MNEMONICS
 * @property {string} HLT - Detiene la ejecución de la máquina virtual.
 * @property {string} INI - Inicializa el estado de la máquina.
 * @property {string} POP - Elimina el valor superior de la pila.
 * @property {string} SWP - Intercambia los dos valores superiores de la pila.
 * @property {string} LDV - Carga un valor en la pila.
 * @property {string} BLD - Carga los enlaces de la pila.
 * @property {string} BST - Almacena los enlaces en la pila.
 * @property {string} LDF - Carga una función en la pila.
 * @property {string} APP - Aplica una función sobre los valores de la pila.
 * @property {string} RET - Retorna desde la ejecución de una función.
 * @property {string} ADD - Suma los dos valores superiores de la pila.
 * @property {string} SUB - Resta el segundo valor superior del primero en la pila.
 * @property {string} MUL - Multiplica los dos valores superiores de la pila.
 * @property {string} DIV - Divide el segundo valor superior entre el primero en la pila.
 * @property {string} NEG - Niega el valor superior de la pila.
 * @property {string} SGN - Cambia el signo del valor superior de la pila.
 * @property {string} EQ - Compara si los dos valores superiores de la pila son iguales.
 * @property {string} GT - Compara si el segundo valor superior es mayor que el primero.
 * @property {string} GTE - Compara si el segundo valor superior es mayor o igual que el primero.
 * @property {string} LT - Compara si el segundo valor superior es menor que el primero.
 * @property {string} LTE - Compara si el segundo valor superior es menor o igual que el primero.
 * @property {string} AND - Realiza la operación lógica "AND" sobre los dos valores superiores de la pila.
 * @property {string} OR - Realiza la operación lógica "OR" sobre los dos valores superiores de la pila.
 * @property {string} XOR - Realiza la operación lógica "XOR" sobre los dos valores superiores de la pila.
 * @property {string} NOT - Realiza la operación lógica "NOT" sobre el valor superior de la pila.
 * @property {string} BT - Realiza una bifurcación si el valor superior de la pila es verdadero.
 * @property {string} BF - Realiza una bifurcación si el valor superior de la pila es falso.
 * @property {string} BR - Realiza una bifurcación incondicional.
 * @property {string} NOP - No realiza ninguna operación.
 * @property {string} INP - Realiza una operación de entrada (input).
 * @property {string} PRN - Realiza una operación de impresión (print).
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
