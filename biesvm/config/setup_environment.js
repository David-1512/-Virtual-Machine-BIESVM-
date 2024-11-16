import { existsSync, mkdirSync, readdirSync, lstatSync, copyFileSync, writeFileSync, unlinkSync, symlinkSync } from 'fs';
import { join } from 'path';
import { platform } from 'os';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

const appName = 'biesvm';

// Detectar sistema operativo
const isWindows = platform() === 'win32';
const isLinux = platform() === 'linux';
const isMac = platform() === 'darwin';

const windowsDestinationPath = `C:\\${appName}`;
const windowsBatFilePath = `C:\\Windows\\${appName}.bat`;
const unixDestinationPath = `/usr/local/${appName}`;
const unixSymlinkPath = `/usr/local/bin/${appName}`;

// Función para copiar recursivamente la carpeta de forma declarativa
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

// Función para instalar dependencias en el destino
const installDependencies = async (destination) => {
    console.log(`Instalando dependencias en ${destination}...`);
    await execPromise(`npm install`, { cwd: destination, stdio: 'inherit' });
    await execPromise(`npm run antlr4`, { cwd: destination, stdio: 'inherit' });
    console.log('Dependencias instaladas.');
};

// Crear archivo .bat en Windows
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
        if "%file%"=="-tests" (
            npm test --prefix "${windowsDestinationPath}"
        ) else (
            node "${windowsDestinationPath}\\bin\\biesvm.js" %*
        )`;
    writeFileSync(windowsBatFilePath, batContent.trim(), 'utf8');
    console.log(`Archivo ${appName}.bat creado en ${windowsBatFilePath}.`);
};

// Configuración en Linux/macOS
const setupUnix = async () => {
    console.log('Configurando en Linux o macOS...');
    console.log(`Copiando proyecto a ${unixDestinationPath}...`);
    await copyFolder(process.cwd(), unixDestinationPath);
    await installDependencies(unixDestinationPath);

    try {
        if (existsSync(unixSymlinkPath)) unlinkSync(unixSymlinkPath);
        symlinkSync(`${unixDestinationPath}/biesvm.js`, unixSymlinkPath, 'file');

        const scriptContent = `
        #!/bin/bash
        if [[ "$1" == "-tests" ]]; then
            npm test --prefix "${unixDestinationPath}"
        else
            node "${unixDestinationPath}/biesvm.js" "$@"
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

// Función principal para configurar el entorno
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
        console.log(`Configuración completa. Ahora puedes ejecutar "biesvm" desde cualquier lugar con parámetros opcionales.`);
        console.log(`Por ejemplo: "biesvm -tests" para ejecutar los tests por default.`);
    } catch (error) {
        console.error('Error en la configuración:', error);
    }
};

// Ejecutar configuración
setupEnvironment();

// Agregar al package.json el siguiente script:
// "configure": "node config/setup_environment.js"