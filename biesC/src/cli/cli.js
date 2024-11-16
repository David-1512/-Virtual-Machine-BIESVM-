/**
 * @file cli.js
 * @description CLI para ejecutar archivos .bies utilizando el compilador BiesC.
 * @module BiesC
 *
 * @project biesC
 * Proyecto académico para implementar un compilador para el lenguaje funcional bies.
 *
 * @version 1.0.0
 *
 * @since 15-11-2024
 */

import { Command } from 'commander';
import fs from 'fs';
import { promises as fsPromises } from 'fs';
import SemanticAnalyzer from './../loader/semantic_analyzer.js';
import Generator from './../code_generator/generator.js'; // Asegúrate de que la ruta sea correcta
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
 * Ejecuta la interfaz de línea de comandos (CLI) para la BiesC.
 * Maneja los comandos y opciones de configuración.
 */
export const runCLI = () => {
    program
        .version('1.0.0')
        .name('biesc')
        .description('CLI para ejecutar archivos .bies utilizando el compilador BiesC.')
        .usage('[options] <file.bies>')
        .argument('<file>', 'archivo .bies a ejecutar') // Definir <file> como argumento posicional obligatorio
        .option('--o <outfile>', 'archivo de salida para prints (por defecto: configurado o salida.txt)')
        .option('--e <errfile>', 'archivo de salida para errores (por defecto: configurado o errores.txt)')
        .option('--trace <level>', 'nivel de traza (0-1) (por defecto: 0)', '0')
        .option('--use-config <file>', 'archivo de configuración (por defecto: .config_biesm.json)', DEFAULT_CONFIG_FILE)
        .action(async (file, options) => {
            try {
                // Validar que el archivo tenga la extensión .bies
                validateFilename(file);

                const configOptions = await loadConfig(options.useConfig);

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
 * Ejecuta el código leído desde el archivo `.bies` en el compilador.
 * @param {string} filename - Nombre del archivo `.bies` a ejecutar.
 * @param {Object} options - Opciones de configuración para la ejecución.
 */
const executeFile = async (filename, options) => {
    const fileContent = await readFileAsync(filename);
    await executeCode(fileContent, filename, options);
};

/**
 * Valida que el archivo tenga la extensión .bies.
 * @param {string} filename - Nombre del archivo a validar.
 * @throws {Error} - Si el archivo no tiene la extensión .bies.
 */
const validateFilename = (filename) => {
    if (!filename.endsWith('.bies')) {
        throw new Error('El archivo debe tener la extensión .bies');
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
 * Procesa el Código en el compilador BiesC.
 * @param {string} data - Código ensamblador a ejecutar.
 * @param {string} filename - Nombre del archivo de entrada.
 * @param {Object} options - Opciones de configuración para la ejecución.
 */
const executeCode = async (data, filename, options) => {
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
    
    const semanticAnalyzer = new SemanticAnalyzer();
    
    //const compiler = new CodeGenerator(outputStream, errorStream, traceLevel); // Asegúrate de importar y definir correctamente CodeGenerator

    let byteCode;
    try {
		byteCode = semanticAnalyzer.load(data);
        //byteCode = await compiler.proccesCode(code); // Asegúrate de que proccesCode sea asíncrono
    } finally {
        if (options.output) outputStream.end();
        if (options.error) errorStream.end();
    }

    // Generar el archivo .basm en la misma ruta del archivo de entrada
    const inputDir = path.dirname(path.resolve(filename));
    const inputBaseName = path.basename(filename, '.bies');
    const basmFilename = `${inputBaseName}.basm`;
    const basmOutputPath = path.join(inputDir, basmFilename);

    const generator = new Generator();
    await generator.generateBasm(byteCode, basmOutputPath);
};