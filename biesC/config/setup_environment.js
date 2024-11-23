/**
 * @file setup_environment.js
 * @description Configura el entorno necesario para ejecutar el proyecto BiesC en Windows.
 * Realiza tareas como instalar dependencias y configurar comandos globales sin copiar el proyecto.
 * 
 * @module setup_environment
 * 
 * @project biesC
 * Proyecto académico para implementar un compilador para un lenguaje funcional basado en pila (BiesVM).
 * 
 * @version 1.0.0
 * @since 17-11-2024
 */

import { existsSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { platform } from 'os';
import { exec } from 'child_process';
import { promisify } from 'util';
import { fileURLToPath } from 'url';

const execPromise = promisify(exec);

// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);

const __dirnamePath = dirname(__filename);

// Definir nombres de las aplicaciones
const appNameBiesc = 'biesc';
const appNameBies = 'bies';

// Directorio raíz del proyecto (padre de 'config')
const currentDir = join(__dirnamePath, '..');

// Directorio para los archivos .bat
const binDir = join(currentDir, 'bin');

// Ruta del archivo add_to_path.cmd
const addToPathCmd = join(binDir, 'add_to_path.cmd');

/**
 * Instala las dependencias del proyecto en el directorio actual.
 * @returns {Promise<void>}
 */
const installDependencies = async () => {
    console.log(`Instalando dependencias en ${currentDir}...`);
    try {
        await execPromise(`npm install`, { cwd: currentDir, stdio: 'inherit' });
        await execPromise(`npm run antlr4`, { cwd: currentDir, stdio: 'inherit' });
        await execPromise(`npm install --save-dev jest @babel/core @babel/preset-env babel-jest`, { cwd: currentDir, stdio: 'inherit' });
        console.log('Dependencias instaladas.');
    } catch (error) {
        console.error('Error al instalar dependencias:', error);
        throw error;
    }
};

/**
 * Crea el archivo .bat en el directorio bin.
 * @param {string} appName - Nombre del comando (biesc o bies).
 * @param {string} scriptPath - Ruta al script JS correspondiente.
 */
const createBatFile = (appName, scriptPath) => {
    const batContent = `
        @echo off
        set "file=%~1"
        if "%file%"=="--tests" (
            npm test
        ) else (
            node "${scriptPath}" %*
        )
        `.trim();

    const batFilePath = join(binDir, `${appName}.bat`);
    writeFileSync(batFilePath, batContent, 'utf8');
    console.log(`Archivo ${appName}.bat creado en ${batFilePath}.`);
};

/**
 * Agrega el directorio bin a las variables de entorno PATH del usuario.
 */
const addToPath = async () => {
    try {
        // Obtener el PATH actual del usuario
        const { stdout } = await execPromise('echo %PATH%');
        const currentPath = stdout.trim();
        
        // Ruta absoluta y normalizada de binDir
        const absoluteBinDir = join(binDir);
        const normalizedBinDir = absoluteBinDir.toLowerCase();

        console.log(`Bin Directory to Add: ${absoluteBinDir}`);

        // Normalizar PATH
        const normalizedPath = currentPath.split(';').map(p => p.trim().toLowerCase());

        // Verificar si binDir ya está en PATH
        if (!normalizedPath.includes(normalizedBinDir)) {
            const newPath = `${currentPath};${absoluteBinDir}`;
            const pathCommand = `setx PATH "${newPath}"`;            
            await execPromise(pathCommand);
            console.log(`Directorio "${absoluteBinDir}" agregado a la variable de entorno PATH.`);
        } else {
            console.log(`El directorio "${absoluteBinDir}" ya está en la variable de entorno PATH.`);
        }
    } catch (error) {
        console.error('Error al agregar al PATH:', error);
    }
};

/**
 * Configura el entorno en Windows sin copiar el proyecto y añade comandos al PATH.
 */
const setupWindows = async () => {
    console.log('Configurando en Windows...');

    // Crear directorio bin si no existe
    if (!existsSync(binDir)) {
        mkdirSync(binDir, { recursive: true });
        console.log(`Directorio bin creado en ${binDir}.`);
    } else {
        console.log(`El directorio bin ya existe en ${binDir}.`);
    }

    // Instalar dependencias
    await installDependencies();

    // Rutas a los scripts JS
    const scriptPathBiesc = join(currentDir, 'bin', 'biesc.js');
    const scriptPathBies = join(__dirnamePath, 'bies.js');

    // Crear archivos .bat
    createBatFile(appNameBiesc, scriptPathBiesc);
    createBatFile(appNameBies, scriptPathBies);

    // Agregar binDir a PATH
    await addToPath();

    console.log(`Configuración completa. Ahora puedes ejecutar "${appNameBiesc}" y "${appNameBies}" desde cualquier lugar.`);
};

/**
 * Configura el entorno según el sistema operativo detectado.
 */
const setupEnvironment = async () => {
    if (platform() === 'win32') {
        await setupWindows();
    } else {
        console.log('Solo se soporta Windows en esta configuración.');
    }
};

setupEnvironment();