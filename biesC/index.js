/**
 * @file Main Process
 * @description Este archivo contiene el proceso principal para leer y ejecutar el código fuente de Bies. El flujo incluye la obtención del nombre del archivo, su validación, la lectura de su contenido y la ejecución del código a través de un analizador semántico.
 *
 * @module MainProcess
 *
 * @project biesC
 * Proyecto académico para implementar un compilador para un lenguaje funcional basado en pila (BiesVM).
 *
 * @author David Serrano Medrano
 * @author Leandro Mora Corrales
 * @author Xiara Suarez Alpizar
 *
 * @version 1.0.0
 * @since 17-11-2024
 */

import { promises as fs } from 'fs'; // Usar promesas para la lectura de archivos
import Loader from './src/compiler_core/loader/loader.js';

const DEFAULT_FILENAME = './basm/version0.bies';

/**
 * Obtiene el nombre del archivo desde los argumentos de la línea de comandos.
 * Si no se proporciona, devuelve el nombre de archivo por defecto.
 * 
 * @function
 * @returns {string} El nombre del archivo a procesar.
 */
const getFilename = () => (process.argv.length >= 3 ? process.argv[2] : DEFAULT_FILENAME);

/**
 * Valida si el nombre del archivo tiene la extensión '.bies'.
 * Lanza un error si el nombre no tiene la extensión correcta.
 * 
 * @function
 * @param {string} filename - El nombre del archivo a validar.
 * @throws {Error} Si el nombre del archivo no termina con '.bies'.
 */
const validateFilename = (filename) => {
	if (!filename.endsWith('.bies')) {
		throw new Error('El archivo debe tener la extensión .bies');
	}
};

/**
 * Lee de forma asincrónica el contenido de un archivo.
 * 
 * @function
 * @param {string} filename - El nombre del archivo a leer.
 * @returns {Promise<string>} El contenido del archivo como texto.
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
 * Ejecuta el código cargado desde el archivo utilizando el analizador semántico (Loader).
 * 
 * @function
 * @param {string} data - El contenido del archivo a analizar.
 */
const executeCode = (data) => {
	const semanticAnalizer = new Loader();
	const code = semanticAnalizer.load(data);
};

/**
 * Función principal que coordina la ejecución del programa.
 * Valida el archivo de entrada, lee su contenido y lo procesa utilizando el analizador semántico.
 * 
 * @async
 * @function
 * @throws {Error} Si ocurre un error al leer o procesar el archivo.
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
