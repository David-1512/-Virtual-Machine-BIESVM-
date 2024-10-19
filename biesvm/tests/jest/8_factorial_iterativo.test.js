// Para instalar jest: npm install --save-dev jest
// Para hacer pruebas jest: npm test <ruta biesvm-main\src\tests\jest>

const { factorial } = require('../logicos/8_factorial_iterativo.js');

describe('Pruebas para la función factorial', () => {
    test('debería calcular el factorial de 5', () => {
        expect(factorial(5)).toBe(120);
    });

    test('debería calcular el factorial de 0', () => {
        expect(factorial(0)).toBe(1);
    });

    test('debería calcular el factorial de 1', () => {
        expect(factorial(1)).toBe(1);
    });

    test('debería calcular el factorial de 6', () => {
        expect(factorial(6)).toBe(720);
    });

    test('debería calcular el factorial de 10', () => {
        expect(factorial(10)).toBe(3628800);
    });
});
