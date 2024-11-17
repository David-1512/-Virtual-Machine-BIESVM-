#!/usr/bin/env node

/**
 * @file bies.js
 * @description Módulo para compilar y ejecutar archivos `.bies` utilizando BiesC y BiesVM.
 * Proporciona funcionalidades para manejar la compilación y ejecución de archivos `.bies` individuales 
 * y múltiples archivos de prueba en un directorio.
 * 
 * @module bies
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

import { exec, spawn } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';
import { promisify } from 'util';
import readline from 'readline';
import { fileURLToPath } from 'url';

// Obtener __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const execPromise = promisify(exec);

/**
 * Pausa la ejecución hasta que el usuario presione Enter.
 * @returns {Promise<void>} Promesa resuelta al presionar Enter.
 */
const pause = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question('Presiona Enter para continuar al siguiente test...', () => {
            rl.close();
            resolve();
        });
    });
};

/**
 * Ejecuta un comando de shell con argumentos.
 * @param {string} command - El comando a ejecutar (e.g., `biesc` o `biesvm`).
 * @param {string} args - Argumentos para el comando.
 * @param {string} cwd - Directorio de trabajo para ejecutar el comando.
 * @throws {Error} Si ocurre un error durante la ejecución del comando.
 * @returns {Promise<void>} Promesa resuelta si el comando se ejecuta correctamente.
 */
const runCommand = async (command, args, cwd) => {
    try {
        const { stdout, stderr } = await execPromise(`${command} ${args}`, { cwd });
        if (stdout) console.log(stdout);
        if (stderr) console.error(stderr);
    } catch (error) {
        console.error(`Error al ejecutar ${command}:`, error.message);
        throw error;
    }
};

/**
 * Compila un archivo `.bies` en un archivo `.basm`.
 * @param {string} biesPath - Ruta al archivo `.bies` a compilar.
 * @param {Object} options - Opciones de compilación.
 * @param {string} [options.o] - Archivo de salida para el resultado de ejecución.
 * @param {string} [options.e] - Archivo de salida para errores.
 * @param {number} [options.trace] - Nivel de traza (0 o 1).
 * @returns {Promise<string>} Ruta del archivo `.basm` generado.
 */
const compileBies = async (biesPath, options) => {
    const { o, e, trace } = options;
    const args = [
        `"${biesPath}"`,
        ...(o ? [`--o "${o}"`] : []),
        ...(e ? [`--e "${e}"`] : []),
        ...(trace !== undefined ? [`--trace ${trace}`] : [])
    ].join(' ');

    await runCommand('biesc', args, path.dirname(biesPath));

    // Generar la ruta del archivo .basm
    const basmPath = path.join(path.dirname(biesPath), `${path.basename(biesPath, '.bies')}.basm`);
    return basmPath;
};


/**
 * Ejecuta un archivo `.basm` generado previamente.
 * @param {string} basmPath - Ruta del archivo `.basm` a ejecutar.
 * @param {Object} options - Opciones de ejecución.
 * @param {string} [options.o] - Archivo de salida para el resultado de ejecución.
 * @param {string} [options.e] - Archivo de salida para errores.
 * @param {number} [options.trace] - Nivel de traza (0 o 1).
 * @returns {Promise<void>} Promesa resuelta si la ejecución es exitosa.
 */
const executeBasm = async (basmPath, options) => {
    const { o, e, trace } = options;
    const args = [
        `"${basmPath}"`,
        ...(o ? [`--o "${o}"`] : []),
        ...(e ? [`--e "${e}"`] : []),
        ...(trace !== undefined ? [`--trace ${trace}`] : [])
    ].join(' ');

    await runCommand('biesvm', args, path.dirname(basmPath));
};

/**
 * Compila y ejecuta un único archivo `.bies`.
 * @param {string} biesPath - Ruta del archivo `.bies` a compilar y ejecutar.
 * @param {Object} options - Opciones de compilación y ejecución.
 * @returns {Promise<void>} Promesa resuelta si todo el proceso se completa exitosamente.
 */
const handleSingleFile = async (biesPath, options) => {
    console.error(`\n=== Compilando: ${biesPath} ===`);
    try {
        const basmPath = await compileBies(biesPath, options);
        console.warn(`\n--- Archivo .basm generado: ${basmPath} ---`);
        console.error(`\n=== Ejecutando: ${basmPath} ===`);
        await executeBasm(basmPath, options);
        console.warn(`\n--- Ejecución completada: ${basmPath} ---\n`);
    } catch (error) {
        console.error(`\n--- Falló la compilación o ejecución de: ${biesPath} ---\n`);
    }
};

/**
 * Compila y ejecuta múltiples archivos `.bies` en un directorio.
 * @param {string} testsDir - Directorio que contiene los archivos `.bies`.
 * @param {Object} options - Opciones de compilación y ejecución.
 * @returns {Promise<void>} Promesa resuelta cuando todos los archivos son procesados.
 */
const handleTests = async (testsDir, options) => {
    try {
        const testFiles = await fs.readdir(testsDir);
        const biesFiles = testFiles.filter(file => file.endsWith('.bies'));

        if (biesFiles.length === 0) {
            console.warn(`No se encontraron archivos .bies en la carpeta ${testsDir}.`);
            return;
        }	
        for (const file of biesFiles) {			
            const biesPath = path.join(testsDir, file);
            await handleSingleFile(biesPath, options);
            await pause();			
        }

        console.error('\n=== Todos los tests han sido ejecutados ===\n');
    } catch (error) {
        console.error(`Error al acceder a la carpeta ${testsDir}: ${error.message}`);
    }
};

/**
 * Función principal del compilador BiesC.
 * Maneja argumentos de línea de comandos para compilar y ejecutar archivos `.bies`.
 * 
 * - Si no se pasan argumentos, intenta ejecutar un script auxiliar en Python.
 * - Si se pasa un archivo `.bies`, lo compila y ejecuta.
 * - Si se utiliza la opción `--tests`, compila y ejecuta múltiples archivos en un directorio.
 * 
 * @function main
 * @returns {Promise<void>} - Promesa resuelta al completar la ejecución.
 * 
 * @example
 * // Compilar y ejecutar un archivo `.bies`
 * node bies.js archivo.bies
 * 
 * @example
 * // Especificar archivos de salida para resultados y errores
 * node bies.js archivo.bies --o salida.txt --e errores.txt
 * 
 * @example
 * // Ejecutar todos los tests en un directorio
 * node bies.js --tests /ruta/a/carpeta_tests
 * 
 * @throws {Error} - Si no se pueden manejar los argumentos o fallan las compilaciones/ejecuciones.
 */
const main = async () => {
    const args = process.argv.slice(2);
    const options = {
        o: undefined,
        e: undefined,
        trace: undefined,
        tests: false,
        testsDir: undefined,
        file: undefined
    };

    if (args.length === 0) {
        const terminalPath = path.join(__dirname, '..', 'byte_code', 'terminal.py'); // Asegúrate de que esta ruta sea correcta
        const terminalDir = path.dirname(terminalPath);
    
        // Iniciar el proceso interactivo usando spawn
        const child = spawn('python', [terminalPath], {
            cwd: terminalDir,
            stdio: 'inherit' // Esto asegura que la entrada y salida se conecten al terminal principal
        });
    
        child.on('error', (error) => {
            console.error(`Error al iniciar el script Python: ${error.message}`);
        });
    
        child.on('close', (code) => {
            if (code !== 0) {
                console.error(`El script Python terminó con el código ${code}`);
            }
            process.exit(code);
        });
    
        return;
    }

    // Parsear argumentos
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        switch (arg) {
            case '--o':
                options.o = args[++i];
                break;
            case '--e':
                options.e = args[++i];
                break;
            case '--trace':
                options.trace = args[++i];
                break;
            case '--tests':
                options.tests = true;
                // Verificar si el siguiente argumento es una ruta (no empieza con '-')
                if (i + 1 < args.length && !args[i + 1].startsWith('-')) {
                    options.testsDir = args[++i];
                }
                break;
            default:
                if (arg.endsWith('.bies')) {
                    options.file = arg;
                }
                break;
        }
    }

    if (options.tests) {
        // Determinar la carpeta de tests
        let testsDir;
        if (options.testsDir) {
            // Ruta proporcionada por el usuario
            testsDir = path.isAbsolute(options.testsDir) ? options.testsDir : path.resolve(process.cwd(), options.testsDir);
        } else {
            // Ruta predeterminada en la raíz del proyecto
            testsDir = path.join(__dirname, '../tests_cases');
        }

        await handleTests(testsDir, options);
    } else if (options.file) {
        const biesPath = path.isAbsolute(options.file) ? options.file : path.resolve(process.cwd(), options.file);
        await handleSingleFile(biesPath, options);
    } else {
        console.error('Uso incorrecto. Debes proporcionar un archivo .bies o usar --tests.');
        console.error('Ejemplos:');
        console.error('  bies archivo.bies');
        console.error('  bies --o salida.txt --e errores.txt archivo.bies');
        console.error('  bies --tests');
        console.error('  bies --tests /ruta/a/carpeta_tests');
        process.exit(1);
    }
};

main();