/**
 * @file cli.js
 * @description Este archivo define la interfaz de línea de comandos (CLI) para el compilador BiesC. Configura las opciones, valida los argumentos y ejecuta los archivos `.bies`.
 * 
 * @module cli
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
 * 
 */

import { Command } from 'commander';
import fs from 'fs';
import { promises as fsPromises } from 'fs';
import Loader from './../compiler_core/loader/loader.js';
import Generator from './../compiler_core/code_generator/generator.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Errors, Logs } from './../compiler_core/semantic/control.js';

const program = new Command();

const __filename = fileURLToPath(import.meta.url);
const __dirnamePath = dirname(__filename);

const DEFAULT_CONFIG_FILE = path.join(__dirnamePath, '..', '..', '.config_biesm.json');
const LOGS_DIR = path.join(__dirnamePath, '..', '..', 'logs');

/**
 * Garantiza la existencia de un directorio, creándolo si no existe.
 * @async
 * @param {string} dir - Ruta del directorio a garantizar.
 * @throws {Error} Lanza un error si ocurre un problema al crear el directorio.
 */
const ensureDir = async (dir) => {
    try {
        await fsPromises.mkdir(dir, { recursive: true });
    } catch (error) {
        console.error(`Error al crear el directorio de logs: ${error.message}`);
        process.exit(1);
    }
};

/**
 * Finaliza un flujo de forma segura.
 * @param {WritableStream} stream - Flujo de salida a cerrar.
 * @returns {Promise<void>} Promesa que se resuelve al cerrar el flujo.
 */
const endStream = (stream) => {
    return new Promise((resolve, reject) => {
        if (stream === process.stdout || stream === process.stderr) {
            resolve();
            return;
        }
        stream.end(() => resolve());
        stream.once('error', reject);
    });
};

/**
 * Escribe datos en un stream y espera a que termine.
 * @async
 * @param {Writable} stream - Stream de escritura (salida o error).
 * @param {string} data - Datos a escribir.
 * @returns {Promise<void>} Promesa que se resuelve cuando se completa la escritura.
 */
const writeStream = async (stream, data) => {
    return new Promise((resolve, reject) => {
        if (!stream.write(data)) {
            stream.once('drain', resolve);
        } else {
            resolve();
        }
        stream.once('error', reject);
    });
};


/**
 * Ejecuta la interfaz de línea de comandos (CLI) para el compilador BiesC.
 * Configura las opciones, valida los argumentos y ejecuta los archivos `.bies`.
 * @async
 */
export const runCLI = async () => {
    await ensureDir(LOGS_DIR);

    program
        .version('1.0.0')
        .name('biesc')
        .description('CLI para ejecutar archivos .bies utilizando el compilador BiesC.')
        .usage('[options] <file.bies>')
        .argument('<file>', 'archivo .bies a ejecutar')
        .option('--o <outfile>', 'archivo de salida para prints (por defecto: configurado o salida.txt)')
        .option('--e <errfile>', 'archivo de salida para errores (por defecto: configurado o errores.txt)')
        .option('--trace <level>', 'nivel de traza (0-1) (por defecto: 0)', '0')
        .option('--use-config <file>', 'archivo de configuración (por defecto: .config_biesm.json)', DEFAULT_CONFIG_FILE)
        .action(async (file, options) => {
            try {
                if (!file.endsWith('.bies')) {
                    throw new Error('El archivo debe tener la extensión .bies');
                }
                const configOptions = await loadConfig(options.useConfig);
                
                let outputPath, errorPath;

                if (options.useConfig === DEFAULT_CONFIG_FILE) {
                    outputPath = options.o
                        ? path.resolve(process.cwd(), options.o)
                        : path.join(LOGS_DIR, configOptions.output || 'salida.txt');
                    errorPath = options.e
                        ? path.resolve(process.cwd(), options.e)
                        : path.join(LOGS_DIR, configOptions.error || 'errores.txt');
                } else {
                    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
                    outputPath = options.o
                        ? path.resolve(process.cwd(), `${path.parse(options.o).name}-${timestamp}${path.parse(options.o).ext}`)
                        : path.join(LOGS_DIR, `salida-${timestamp}.txt`);
                    errorPath = options.e
                        ? path.resolve(process.cwd(), `${path.parse(options.e).name}-${timestamp}${path.parse(options.e).ext}`)
                        : path.join(LOGS_DIR, `errores-${timestamp}.txt`);
                }

                const trace = options.trace || configOptions.trace || '0';
                const finalOptions = { output: outputPath, error: errorPath, trace };
                await executeFile(file, finalOptions);
            } catch (error) {
                console.error(`Error: ${error.message}`);
                await handleProcessExit(1);
            }
        });

    program.parse(process.argv);
};

/**
 * Carga configuraciones desde un archivo JSON.
 * @param {string} configFilePath - Ruta del archivo de configuración.
 * @returns {Promise<Object>} Objeto de configuración.
 */
const loadConfig = async (configFilePath) => {
    try {
        const configContent = await fsPromises.readFile(configFilePath, 'utf8');
        return JSON.parse(configContent);
    } catch {
        return {};
    }
};

/**
 * Lee un archivo de forma asíncrona.
 * @param {string} filename - Ruta del archivo a leer.
 * @returns {Promise<string>} Contenido del archivo.
 * @throws {Error} Si ocurre un error al leer el archivo.
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
 * Lee el contenido de un archivo `.bies` y lo procesa.
 * @async
 * @param {string} filename - Ruta del archivo `.bies` a procesar.
 * @param {Object} options - Opciones de ejecución, incluyendo salida y errores.
 * @throws {Error} Lanza un error si no se puede leer el archivo.
 */
const executeFile = async (filename, options) => {
    const fileContent = await readFileAsync(filename);
    await executeCode(fileContent, filename, options);
};

/**
 * Ejecuta el proceso de generación de bytecode y archivo .basm.
 * @param {string} data - Contenido del archivo fuente.
 * @param {string} filename - Nombre del archivo de entrada.
 * @param {Object} options - Opciones de configuración.
 * @param {string} [options.output] - Ruta del archivo de salida.
 * @param {string} [options.error] - Ruta del archivo de errores.
 * @param {number} options.trace - Nivel de trazabilidad (0 o 1).
 * @returns {Promise<void>} Promesa que se resuelve al completar el proceso.
 */
const executeCode = async (data, filename, options) => {
    const outputStream = options.output ? fs.createWriteStream(options.output, { flags: 'w' }) : process.stdout;
    const errorStream = options.error ? fs.createWriteStream(options.error, { flags: 'w' }) : process.stderr;

    const traceLevel = parseInt(options.trace, 10);
    if (![0, 1].includes(traceLevel)) {
        await handleErrors(new Error('El nivel de traza debe ser 0 o 1.'), errorStream, outputStream);
    }

    const timestamp = new Date().toLocaleString();
    if (options.output) {
        await writeStream(outputStream, '----------------------------------------------------------\n');
        await writeStream(outputStream, `Fecha: ${timestamp}\n\n`);
    }
    if (options.error) {
        await writeStream(errorStream, '----------------------------------------------------------\n');
        await writeStream(errorStream, `Fecha: ${timestamp}\n\n`);
    }

    const loader = new Loader();
    let byteCode;

    try {
        byteCode = loader.load(data, traceLevel);
    } catch (loadError) {
        await handleErrors(loadError, errorStream, outputStream);
    }

    if (Errors.getErrors().length > 0) {
        Errors.printErrors();
        if (options.error) {
            await writeStream(errorStream, '\nErrores:\n' + Errors.toString() + '\n');
        }
        if (options.output) {
            await writeStream(outputStream, '\nLogs:\n' + Logs.toString() + '\n');
        }
        await endStream(outputStream);
        await endStream(errorStream);
        await handleProcessExit(1);
    } else {
        // Always generate output and error files even if there are no errors
        if (options.error) {
            await writeStream(errorStream, 'No se encontraron errores.\n');
        }
        if (options.output) {
            await writeStream(outputStream, 'Ejecución completada sin errores.\n');
        }
    }

    const inputDir = path.dirname(path.resolve(filename));
    const inputBaseName = path.basename(filename, '.bies');
    const basmFilename = `${inputBaseName}.basm`;
    const basmOutputPath = path.join(inputDir, basmFilename);

    const generator = new Generator();

    if(Errors.getErrors().length == 0) {
        await generator.generateBasm(byteCode, basmOutputPath);
    }
    
    if (options.output) {
        await writeStream(outputStream, `Archivo .basm generado en: ${basmOutputPath}\n Logs:\n${Logs.toString()}\n\n ByteCode Generado: \n${byteCode.toString()}\n`);        
        await endStream(outputStream);
    }
    if (options.error) {
        await endStream(errorStream);
    }

    console.log(`Archivo .basm generado en: ${basmOutputPath}`);
};

const handleErrors = async (error, errorStream, outputStream) => {
    if (errorStream) {
        await writeStream(errorStream, `Error: ${error.message}\n`);
    }
    console.error(`Error: ${error.message}`);
    if (outputStream) {
        await endStream(outputStream);
    }
    if (errorStream) {
        await endStream(errorStream);
    }
    await handleProcessExit(1);
};

const handleProcessExit = async (code) => {
    setImmediate(() => process.exit(code));
};