// Para instalar jest: npm install --save-dev jest
// Para hacer pruebas jest: npm test <ruta biesvm-main\src\tests\jest>

const { hilera, invertir } = require('../logicos/4_invertir_hilera.js');

describe('Pruebas para hilera', () => {
    test('debería contar correctamente los caracteres en una cadena', () => {
        expect(hilera("Hola Mundo!")).toBe(11);
        expect(hilera("")).toBe(0);
        expect(hilera("JavaScript")).toBe(10);
        expect(hilera("¡Hola!")).toBe(6); 
    });
});

describe('Pruebas para invertir', () => {
    test('debería invertir la cadena correctamente', () => {
        expect(invertir("Hola Mundo!")).toBe("!odnuM aloH");
        expect(invertir("")).toBe("");
        expect(invertir("JavaScript")).toBe("tpircSavaJ");
        expect(invertir("¡Hola!")).toBe("!aloH¡");
    });
});
