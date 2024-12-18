/**
 * @file setup_environment.js
 * @description Configura el entorno necesario para ejecutar el proyecto BiesC en diferentes sistemas operativos.
 * Realiza tareas como copiar el proyecto, instalar dependencias y configurar comandos globales.
 * 
 * @module setup_environment
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
 * 
 */

import { existsSync, mkdirSync, readdirSync, lstatSync, copyFileSync, writeFileSync, unlinkSync, symlinkSync } from 'fs';
import { join } from 'path';
import { platform } from 'os';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';


const execPromise = promisify(exec);

const appName = 'biesc';

// Detectar sistema operativo
const isWindows = platform() === 'win32';
const isLinux = platform() === 'linux';
const isMac = platform() === 'darwin';

const windowsDestinationPath = `C:\\${appName}`;
const windowsBatFilePath = `C:\\Windows\\${appName}.bat`;
const unixDestinationPath = `/usr/local/${appName}`;
const unixSymlinkPath = `/usr/local/bin/${appName}`;

/**
 * Copia recursivamente una carpeta, excluyendo `node_modules`.
 * @param {string} source - Ruta de origen.
 * @param {string} destination - Ruta de destino.
 * @returns {Promise<void>} Promesa resuelta al completar la copia.
 */
const copyFolder = async (source, destination) => {
    if (!existsSync(destination)) mkdirSync(destination, { recursive: true });

    const files = readdirSync(source);
    await Promise.all(
        files
            .filter(file => file !== 'node_modules') // Excluir node_modules
            .map(async (file) => {
                const srcPath = join(source, file);
                const destPath = join(destination, file);
                if (lstatSync(srcPath).isDirectory()) {
                    await copyFolder(srcPath, destPath);
                } else {
                    copyFileSync(srcPath, destPath);
                }
            })
    );
};

/**
 * Instala las dependencias del proyecto en la carpeta destino.
 * @param {string} destination - Ruta donde se instalarán las dependencias.
 * @returns {Promise<void>} Promesa resuelta al completar la instalación.
 */
const installDependencies = async (destination) => {
    console.log(`Instalando dependencias en ${destination}...`);
    await execPromise(`npm install`, { cwd: destination, stdio: 'inherit' });
    await execPromise(`npm run antlr4`, { cwd: destination, stdio: 'inherit' });
    await execPromise(`npm install --save-dev jest`, { cwd: destination, stdio: 'inherit' });
    await execPromise(`npm install -g npm@10.9.0`, { cwd: destination, stdio: 'inherit' });
    await execPromise(`npm install --save-dev @babel/core @babel/preset-env babel-jest`, { cwd: destination, stdio: 'inherit' });
    console.log('Dependencias instaladas.');
};

/**
 * Configura el entorno en Windows.
 * @returns {Promise<void>} Promesa resuelta al completar la configuración.
 */
const setupWindows = async () => {
    console.log('Configurando en Windows...');
    console.log(`Copiando proyecto a ${windowsDestinationPath}...`);
    await copyFolder(process.cwd(), windowsDestinationPath);
    await installDependencies(windowsDestinationPath);

    // Copiar .config_biesm.json al directorio destino
    const sourceConfigPath = join(process.cwd(), '.config_biesm.json');
    const destConfigPath = join(windowsDestinationPath, '.config_biesm.json');
    if (existsSync(sourceConfigPath)) {
        copyFileSync(sourceConfigPath, destConfigPath);
        console.log(`Archivo .config_biesm.json copiado a ${destConfigPath}.`);
    } else {
        console.warn(`Archivo de configuración no encontrado en ${sourceConfigPath}.`);
    }

    const batContent = `
        @echo off
        set "file=%~1"
        if "%file%"=="--tests" (
            npm test --prefix "${windowsDestinationPath}"
        ) else (
            node "${windowsDestinationPath}\\bin\\biesc.js" %*
        )`;
    writeFileSync(windowsBatFilePath, batContent.trim(), 'utf8');
    console.log(`Archivo ${appName}.bat creado en ${windowsBatFilePath}.`);
};

/**
 * Configura el entorno en Linux o macOS.
 * @returns {Promise<void>} Promesa resuelta al completar la configuración.
 */
const setupUnix = async () => {
    console.log('Configurando en Linux o macOS...');
    console.log(`Copiando proyecto a ${unixDestinationPath}...`);
    await copyFolder(process.cwd(), unixDestinationPath);
    await installDependencies(unixDestinationPath);

    try {
        if (existsSync(unixSymlinkPath)) unlinkSync(unixSymlinkPath);
        symlinkSync(`${unixDestinationPath}/bin/biesc.js`, unixSymlinkPath, 'file');

        const scriptContent = `
        #!/bin/bash
        if [[ "$1" == "--tests" ]]; then
            npm test --prefix "${unixDestinationPath}"
        else
            node "${unixDestinationPath}/bin/biesc.js" "$@"
        fi
        `;
        writeFileSync(unixSymlinkPath, scriptContent.trim(), { mode: 0o755 });
        console.log(`Enlace simbólico creado en ${unixSymlinkPath}.`);

        // Copiar .config_biesm.json al directorio destino
        const sourceConfigPath = join(process.cwd(), '.config_biesm.json');
        const destConfigPath = join(unixDestinationPath, '.config_biesm.json');
        if (existsSync(sourceConfigPath)) {
            copyFileSync(sourceConfigPath, destConfigPath);
            console.log(`Archivo .config_biesm.json copiado a ${destConfigPath}.`);
        } else {
            console.warn(`Archivo de configuración no encontrado en ${sourceConfigPath}.`);
        }
    } catch (error) {
        console.error('Error al crear el enlace simbólico:', error);
    }
};

/**
 * Configura el entorno según el sistema operativo detectado.
 * @returns {Promise<void>} Promesa resuelta al completar la configuración.
 */
const setupEnvironment = async () => {
    try {  
        if (isWindows) {
            await setupWindows();
        } else if (isLinux || isMac) {
            await setupUnix();
        } else {
            console.log('Sistema operativo no compatible.');
            return;
        }
        console.log(`Configuración completa. Ahora puedes ejecutar "biesc" desde cualquier lugar con parámetros opcionales.`);
        console.log(`Por ejemplo: "biesc -tests" para ejecutar los tests por default.`);
    } catch (error) {
        console.error('Error en la configuración:', error);
    }
};

setupEnvironment();

/**
 * Configura el comando global `bies` para facilitar la ejecución de scripts en el proyecto.
 * 
 * - En **Windows**, crea un archivo `.bat` en `C:\Windows` para ejecutar el script `bies.js`.
 * - En **Linux/macOS**, copia el script `bies.js` a `/usr/local` y crea un enlace simbólico en `/usr/local/bin/bies`.
 * 
 * @async
 * @function setupBies
 * @returns {Promise<void>} Promesa resuelta al completar la configuración.
 * 
 * @example
 * // Configurar el comando `bies` globalmente
 * await setupBies();
 * 
 * @throws {Error} - Si ocurre un problema al crear enlaces simbólicos o configurar el entorno.
 */
const setupBies = async () => {
    const appName = 'bies'; // Nombre del comando

    if (isWindows) {
        const windowsBiesBatPath = `C:\\Windows\\${appName}.bat`;
        const scriptPath = windowsDestinationPath + "\\config\\bies.js"//path.join(process.cwd(), 'config', 'bies.js');

        const batContent = `
            @echo off
            node "${scriptPath}" %*
        `;
        writeFileSync(windowsBiesBatPath, batContent.trim(), 'utf8');
        console.log(`Archivo ${appName}.bat creado en ${windowsBiesBatPath}.`);

    } else if (isLinux || isMac) {
        const destinationScriptPath = `/usr/local/bin/${appName}`;
        const scriptPath = unixDestinationPath + "/config/bies.js"//path.join(process.cwd(), 'bies.js');

        try {
            // Copiar el script a /usr/local/bin/bies
            copyFileSync(scriptPath, destinationScriptPath);

            // Hacer el script ejecutable
            await execPromise(`chmod +x ${destinationScriptPath}`);

            console.log(`Archivo copiado a ${destinationScriptPath} y hecho ejecutable.`);
        } catch (error) {
            console.error('Error al copiar el script para bies:', error);
        }
    }
};

await setupBies();