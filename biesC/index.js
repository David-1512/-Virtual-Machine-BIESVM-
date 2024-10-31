import { promises as fs } from 'fs';  // Usar promesas para la lectura de archivos
import Loader from './src/loader/loader.js';

const DEFAULT_FILENAME = './basm/version2.bies';

const getFilename = () => 
    process.argv.length >= 3 ? process.argv[2] : DEFAULT_FILENAME;


const validateFilename = (filename) => {
    if (!filename.endsWith('.bies')) {
        throw new Error('El archivo debe tener la extensión .bies');
    }
};

const readFileAsync = async (filename) => {
    try {
        const data = await fs.readFile(filename, 'utf8');
        return data;
    } catch (error) {
        throw new Error(`Error al leer el archivo: ${error.message}`);
    }
};


const executeCode = (data) => {
    const loader = new Loader();
    const code = loader.load(data);
};


const main = async () => {
    try {
        const filename = getFilename();
        validateFilename(filename);

        const fileContent = await readFileAsync(filename);
        executeCode(fileContent);
    } catch (error) {
        console.error(error.message);
        process.exit(1);  
    }
};

main();
