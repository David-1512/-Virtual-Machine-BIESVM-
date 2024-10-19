// Para instalar jest: npm install --save-dev jest
// Para hacer pruebas jest: npm test <ruta biesvm-main\src\tests\jest>

const { fibonacci } = require('../logicos/10_fibonacci_iterativo.js');

describe('Pruebas para la función fibonacci', () => {
    test('debería calcular el fibonacci de 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    test('debería calcular el fibonacci de 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    test('debería calcular el fibonacci de 2', () => {
        expect(fibonacci(2)).toBe(1);
    });

    test('debería calcular el fibonacci de 3', () => {
        expect(fibonacci(3)).toBe(2);
    });

    test('debería calcular el fibonacci de 4', () => {
        expect(fibonacci(4)).toBe(3);
    });

    test('debería calcular el fibonacci de 5', () => {
        expect(fibonacci(5)).toBe(5);
    });

    test('debería calcular el fibonacci de 6', () => {
        expect(fibonacci(6)).toBe(8);
    });

    test('debería calcular el fibonacci de 7', () => {
        expect(fibonacci(7)).toBe(13);
    });
});
