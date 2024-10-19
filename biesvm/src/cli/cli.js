/**
 * @file cli.js
 * @description CLI que junta y organiza los archivos necesarios para facilitar la exportación y ejecución de la máquina virtual BiesVM.
 * @module BiesVM_CLI
 * 
 * @project biesVM
 * Proyecto académico donde se implementa una máquina virtual basada en pila para un lenguaje funcional llamado bies.
 * El objetivo principal es implementar un intérprete (biesVM) que procese y ejecute código ensamblador generado para este lenguaje.
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

import { Command } from 'commander';
import fs from 'fs';
import { promises as fsPromises } from 'fs';
import Loader from '../virtual_machine_core/loader/loader.js';
import Runner from '../virtual_machine_core/runner.js';
import path from 'path';

const program = new Command();

const DEFAULT_CONFIG_FILE = path.join(process.cwd(), '.config_biesm.json');
const LOGS_DIR = path.join(process.cwd(), 'logs');

fsPromises.mkdir(LOGS_DIR, { recursive: true }).catch(console.error);

/**
 * Ejecuta la interfaz de línea de comandos (CLI) para la BiesVM.
 * Maneja los comandos y opciones de configuración.
 */
export const runCLI = () => {
    program
        .version('1.0.0')
        .description('BiesVM Command Line Interface')
        .argument('<file>', 'archivo .basm a ejecutar')
        .option('--o <outfile>', 'archivo de salida para prints')
        .option('--e <errfile>', 'archivo de salida para errores')
        .option('--trace <level>', 'nivel de traza (0-1)', '0')
        .option('--use-config <file>', 'archivo de configuración', DEFAULT_CONFIG_FILE)
        .action(async (file, options) => {
        try {
            const configOptions = await loadConfig(options.useConfig);

            const finalOptions = {
                output: path.join(LOGS_DIR, options.o || configOptions.output),
                error: path.join(LOGS_DIR, options.e || configOptions.error),
                trace: options.trace || configOptions.trace
            };

            await executeFile(file, finalOptions);
        } catch (error) {
            console.error(`Error: ${error.message}`);
            process.exit(1);
        }
        });

    program.parse(process.argv);
};

/**
 * Carga las configuraciones desde un archivo JSON de configuración.
 * @param {string} configFilePath - Ruta del archivo de configuración.
 * @returns {Promise<Object>} - Objeto con las configuraciones cargadas.
 */
const loadConfig = async (configFilePath) => {
    try {
        const configContent = await fsPromises.readFile(configFilePath, 'utf8');
        return JSON.parse(configContent);
    } catch (error) {
        console.warn(`No se pudo cargar el archivo de configuración: ${error.message}. Usando configuraciones por defecto.`);
        return {};
    }
};

/**
 * Ejecuta el código leído desde el archivo `.basm` en la máquina virtual.
 * @param {string} filename - Nombre del archivo `.basm` a ejecutar.
 * @param {Object} options - Opciones de configuración para la ejecución.
 * @throws {Error} - Si el archivo no es válido o si hay errores en la ejecución.
 */

const executeFile = async (filename, options) => {
    validateFilename(filename);
    const fileContent = await readFileAsync(filename);
    executeCode(fileContent, options);
};

/**
 * Valida el nombre del archivo asegurando que sea un archivo `.basm`.
 * @param {string} filename - Nombre del archivo a validar.
 * @throws {Error} - Si el archivo no tiene la extensión `.basm`.
 */

const validateFilename = (filename) => {
    if (!filename.endsWith('.basm')) {
        throw new Error('El archivo debe tener la extensión .basm');
    }
};

/**
 * Lee el contenido de un archivo de manera asíncrona.
 * @param {string} filename - Ruta del archivo a leer.
 * @returns {Promise<string>} - Contenido del archivo leído.
 * @throws {Error} - Si ocurre un error al leer el archivo.
 */

const readFileAsync = async (filename) => {
    try {
        const data = await fsPromises.readFile(filename, 'utf8');
        return data;
    } catch (error) {
        throw new Error(`Error al leer el archivo: ${error.message}`);
    }
};

/**
 * Ejecuta el código ensamblador en la máquina virtual BiesVM.
 * @param {string} data - Código ensamblador a ejecutar.
 * @param {Object} options - Opciones de configuración para la ejecución.
 */
const executeCode = (data, options) => {
    const output = options.output ? fs.createWriteStream(options.output, { flags: 'a' }) : process.stdout;
    const error = options.error ? fs.createWriteStream(options.error, { flags: 'a' }) : process.stderr;

    const traceLevel = parseInt(options.trace, 10);
    
    if (![0, 1].includes(traceLevel)) {
        throw new Error('El nivel de traza debe ser 0 o 1.');
    }

    const timestamp = new Date().toLocaleString();

    if (options.output) {
        output.write('----------------------------------------------------------\n');
        output.write(`Fecha: ${timestamp}\n\n`);
    }

    if (options.error) {
        error.write('----------------------------------------------------------\n');
        error.write(`Fecha: ${timestamp}\n\n`);
    }

    const loader = new Loader();
    const code = loader.load(data,output);
    const runner = new Runner(output, error, traceLevel);
   
    try {
        runner.execute(code);
    } finally {
        if (options.output) output.end();
        if (options.error) error.end();
    }
};
