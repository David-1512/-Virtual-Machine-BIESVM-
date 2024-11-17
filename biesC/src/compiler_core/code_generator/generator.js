/**
 * @file generator.js
 * @description Este archivo define la clase Generator, que se encarga de generar archivos `.basm` a partir de código proporcionado.
 * La clase incluye métodos para escribir el código en el sistema de archivos y gestionar errores en el proceso.
 * 
 * @module Generator
 * 
 * @project biesC
 * Proyecto académico para implementar un compilador para un lenguaje funcional basado en pila (BiesVM).
 * 
 * @class Generator
 * @classdesc Clase para manejar la generación de archivos `.basm` a partir del código generado por el compilador.
 * 
 * @author David Serrano Medrano
 * @author Leandro Mora Corrales
 * @author Xiara Suarez Alpizar
 * 
 * @version 1.0.0
 * @since 17-11-2024
 */

import { promises as fs } from 'fs';
import path from 'path';

class Generator {
	/**
     * Genera un archivo `.basm` con el contenido del código proporcionado.
     * Si no se especifica una ruta de salida, utiliza la ruta predeterminada `./byte_code/output.basm`.
     * 
     * @param {string} code - Código que será escrito en el archivo `.basm`.
     * @param {string} [outputPath='./byte_code/output.basm'] - Ruta de salida para guardar el archivo `.basm`.
     * @returns {Promise<void>} Una promesa que se resuelve cuando el archivo se crea exitosamente.
     * @throws {Error} Si ocurre un error al escribir el archivo.
     */
	generateBasm(code, outputPath = './byte_code/output.basm') {
		const filePath = path.resolve(outputPath);
		const fileContent = code.toString();

		return fs.writeFile(filePath, fileContent, 'utf8')
		.then(() => {
			console.log(`.basm file successfully created at ${filePath}`);
		})
		.catch(error => {
			console.error('Failed to write .basm file:', error);
		});
	}
}

export default Generator;