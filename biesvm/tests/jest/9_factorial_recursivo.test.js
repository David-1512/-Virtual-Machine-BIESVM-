// Para instalar jest: npm install --save-dev jest
// Para hacer pruebas jest: npm test <ruta biesvm-main\src\tests\jest>

const { factorial } = require('../logicos/9_factorial_recursivo.js');

describe('Pruebas para la función factorial', () => {
    test('debería calcular el factorial de 3', () => {
        expect(factorial(3)).toBe(6);
    });

    test('debería calcular el factorial de 0', () => {
        expect(factorial(0)).toBe(1);
    });

    test('debería calcular el factorial de 1', () => {
        expect(factorial(1)).toBe(1);
    });

    test('debería calcular el factorial de 4', () => {
        expect(factorial(4)).toBe(24);
    });

    test('debería calcular el factorial de 5', () => {
        expect(factorial(5)).toBe(120);
    });
});
