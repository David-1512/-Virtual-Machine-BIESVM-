#!/usr/bin/env node

import { promises as fs } from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

// Obtener __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para ejecutar un comando con opciones usando spawn
const runCommand = (command, args, cwd) => {
    return new Promise((resolve, reject) => {
        const proc = spawn(command, args, { cwd, stdio: 'inherit', shell: true });

        proc.on('close', (code) => {
            if (code !== 0) {
                reject(new Error(`El proceso terminó con el código de salida ${code}`));
            } else {
                resolve();
            }
        });

        proc.on('error', (err) => {
            reject(err);
        });
    });
};

// Función para compilar un archivo .bies
const compileBies = async (biesPath, options) => {
    const { o, e, trace } = options;
    const args = [
        `"${biesPath}"`,
        ...(o ? [`--o "${o}"`] : []),
        ...(e ? [`--e "${e}"`] : []),
        ...(trace !== undefined ? [`--trace ${trace}`] : [])
    ].join(' ');

    await runCommand('biesc', args, process.cwd());

    // Generar la ruta del archivo .basm
    const basmPath = path.join(path.dirname(biesPath), `${path.basename(biesPath, '.bies')}.basm`);
    return basmPath;
};

// Función para ejecutar un archivo .basm
const executeBasm = async (basmPath, options) => {
    const { o, e, trace } = options;
    const args = [
        `"${basmPath}"`,
        ...(o ? [`--o "${o}"`] : []),
        ...(e ? [`--e "${e}"`] : []),
        ...(trace !== undefined ? [`--trace ${trace}`] : [])
    ].join(' ');

    await runCommand('biesvm', args, process.cwd());
};

// Función para manejar la compilación y ejecución de un solo archivo
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

// Función para manejar la opción --tests
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

// Función principal
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

    if (args.length === 0) {
        console.log("Ejecutando terminal.py...");
        try {
            await runCommand('python', ['../byte_code/terminal.py'], __dirname);
        } catch (error) {
            console.error("Error al ejecutar terminal.py:", error.message);
            process.exit(1);
        }
        return;
    }

    if (options.tests) {
        // Determinar la carpeta de tests
        let testsDir;
        if (options.testsDir) {
            // Ruta proporcionada por el usuario
            testsDir = path.isAbsolute(options.testsDir) ? options.testsDir : path.resolve(process.cwd(), options.testsDir);
        } else {
            // Ruta predeterminada en la raíz del proyecto
            testsDir = path.join(__dirname,'..', 'tests_cases');
        }

        await handleTests(testsDir, options);
    } else if (options.file) {
        await handleSingleFile(options.file, options);
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