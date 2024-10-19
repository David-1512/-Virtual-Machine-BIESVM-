// Para instalar jest: npm install --save-dev jest
// Para hacer pruebas jest: npm test <ruta biesvm-main\src\tests\jest>

const { hilera, indice } = require('../logicos/5_indice_subhilera.js');

describe('Pruebas para hilera', () => {
    test('debería contar correctamente los caracteres en una cadena', () => {
        expect(hilera("Hola Mundo!")).toBe(11);
        expect(hilera("")).toBe(0);
        expect(hilera("JavaScript")).toBe(10);
        expect(hilera("¡Hola!")).toBe(6);
    });
});

describe('Pruebas para indice', () => {
    test('debería encontrar el índice de una subcadena', () => {
        expect(indice("Hola Mundo!", "Mundo")).toBe(5);
        expect(indice("Hola Mundo!", "Hola")).toBe(0);
        expect(indice("Hola Mundo!", "Adiós")).toBe(-1);
        expect(indice("Hola Mundo!", "")).toBe(0); // subcadena vacía
    });
});
