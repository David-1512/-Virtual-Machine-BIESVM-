/**
 * @file cli.js
 * @description CLI para ejecutar archivos .basm utilizando la máquina virtual BiesVM.
 * @module BiesVM_CLI
 *
 * @project biesVM
 * Proyecto académico para implementar una máquina virtual basada en pila para el lenguaje funcional bies.
 *
 * @version 1.0.0
 *
 * @since 15-10-2024
 */

import { Command } from 'commander';
import fs from 'fs';
import { promises as fsPromises } from 'fs';
import Loader from '../virtual_machine_core/loader/loader.js';
import Runner from '../virtual_machine_core/runner.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const program = new Command();

// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirnamePath = dirname(__filename);

const DEFAULT_CONFIG_FILE = path.join(__dirnamePath, '..', '..', '.config_biesm.json');
const LOGS_DIR = path.join(__dirnamePath, '..', '..', 'logs');

// Crear el directorio de logs si no existe
fsPromises.mkdir(LOGS_DIR, { recursive: true }).catch(console.error);

/**
 * Ejecuta la interfaz de línea de comandos (CLI) para la BiesVM.
 * Maneja los comandos y opciones de configuración.
 */
export const runCLI = () => {
    program
		.version('1.2.0')
        .name('biesvm')
        .description('CLI para ejecutar archivos .basm utilizando la máquina virtual BiesVM.')
        .usage('[options] <file.basm>')
        .argument('<file>', 'archivo .basm a ejecutar') // Definir <file> como argumento posicional obligatorio
        .option('--o <outfile>', 'archivo de salida para prints (por defecto: configurado o salida.txt)')
        .option('--e <errfile>', 'archivo de salida para errores (por defecto: configurado o errores.txt)')
        .option('--trace <level>', 'nivel de traza (0-1) (por defecto: 0)', '0')
        .option('--use-config <file>', 'archivo de configuración (por defecto: .config_biesm.json)', DEFAULT_CONFIG_FILE)
        .action(async (file, options) => {
            try {
                // Validar que el archivo tenga la extensión .basm
                validateFilename(file);

                //console.log(`Ruta del archivo de configuración: ${options.useConfig}`);
                const configOptions = await loadConfig(options.useConfig);
                //console.log(`Opciones de configuración cargadas: ${JSON.stringify(configOptions)}`);

                // Resolver ruta para archivo de salida
                const outputPath = (options.o && options.o.trim())
                    ? path.resolve(process.cwd(), options.o)
                    : path.join(LOGS_DIR, configOptions.output || 'salida.txt');

                // Resolver ruta para archivo de errores
                const errorPath = (options.e && options.e.trim())
                    ? path.resolve(process.cwd(), options.e)
                    : path.join(LOGS_DIR, configOptions.error || 'errores.txt');

                const finalOptions = {
                    output: outputPath,
                    error: errorPath,
                    trace: options.trace || configOptions.trace || '0',
                };
                //console.log(`Opciones finales: ${JSON.stringify(finalOptions)}`);

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
        console.warn(
            `No se pudo cargar el archivo de configuración: ${error.message}. Usando configuraciones por defecto.`,
        );
        return {};
    }
};

/**
 * Ejecuta el código leído desde el archivo `.basm` en la máquina virtual.
 * @param {string} filename - Nombre del archivo `.basm` a ejecutar.
 * @param {Object} options - Opciones de configuración para la ejecución.
 */
const executeFile = async (filename, options) => {
    const fileContent = await readFileAsync(filename);
    executeCode(fileContent, options);
};

/**
 * Valida que el archivo tenga la extensión .basm.
 * @param {string} filename - Nombre del archivo a validar.
 * @throws {Error} - Si el archivo no tiene la extensión .basm.
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
    const outputStream = options.output ? fs.createWriteStream(options.output, { flags: 'a' }) : process.stdout;
    const errorStream = options.error ? fs.createWriteStream(options.error, { flags: 'a' }) : process.stderr;

    const traceLevel = parseInt(options.trace, 10);

    if (![0, 1].includes(traceLevel)) {
        throw new Error('El nivel de traza debe ser 0 o 1.');
    }

    const timestamp = new Date().toLocaleString();

    if (options.output) {
        outputStream.write('----------------------------------------------------------\n');
        outputStream.write(`Fecha: ${timestamp}\n\n`);
    }

    if (options.error) {
        errorStream.write('----------------------------------------------------------\n');
        errorStream.write(`Fecha: ${timestamp}\n\n`);
    }

    const loader = new Loader();
    const code = loader.load(data, outputStream);
    const runner = new Runner(outputStream, errorStream, traceLevel);

    try {
        runner.execute(code);
    } finally {
        if (options.output) outputStream.end();
        if (options.error) errorStream.end();
    }
};