/**
 * @file main.js
 * @description Script principal que carga y ejecuta un archivo `.basm` en la máquina virtual BiesVM.
 * Este script utiliza las clases Loader y Runner para procesar el código ensamblador.
 * @module MAIN
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

import { promises as fs } from 'fs'; // Usar promesas para la lectura de archivos
import Loader from './src/virtual_machine_core/loader/loader.js';
import Runner from './src/virtual_machine_core/runner.js';

const DEFAULT_FILENAME = './basm/2_cuadratica.basm';

/**
 * Función para obtener el nombre del archivo desde los argumentos de la línea de comandos.
 * @returns {string} El nombre del archivo especificado o el nombre por defecto si no se proporciona ninguno.
 */
const getFilename = () => (process.argv.length >= 3 ? process.argv[2] : DEFAULT_FILENAME);

/**
 * Función para validar que el archivo tenga la extensión .basm.
 * @param {string} filename - Nombre del archivo a validar.
 * @throws {Error} Si el archivo no tiene la extensión .basm.
 */
const validateFilename = (filename) => {
	if (!filename.endsWith('.basm')) {
		throw new Error('El archivo debe tener la extensión .basm');
	}
};

/**
 * Función para leer el archivo de manera asincrónica.
 * @param {string} filename - Nombre del archivo a leer.
 * @returns {Promise<string>} Contenido del archivo leído.
 * @throws {Error} Si ocurre un error al leer el archivo.
 */
const readFileAsync = async (filename) => {
	try {
		const data = await fs.readFile(filename, 'utf8');
		return data;
	} catch (error) {
		throw new Error(`Error al leer el archivo: ${error.message}`);
	}
};

/**
 * Función para ejecutar el código usando Loader y Runner.
 * @param {string} data - Código ensamblador a ejecutar.
 */
const executeCode = (data) => {
	console.log(data);
	console.log('------------------------------------------------');

	const loader = new Loader();
	const code = loader.load(data);
	const runner = new Runner();
	console.log(code.toString());
	runner.execute(code);
};

/**
 * Función principal que orquesta todo el flujo de manera declarativa.
 * Carga el archivo, valida, lo lee y ejecuta el código.
 */
const main = async () => {
	try {
		const filename = getFilename();
		validateFilename(filename);

		const fileContent = await readFileAsync(filename);
		executeCode(fileContent);
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
};

main();
