// Para instalar jest: npm install --save-dev jest
// Para hacer pruebas jest: npm test <ruta biesvm-main\src\tests\jest>

const { largolista, pal } = require('../logicos/6_lista_palindrome.js');

describe('Pruebas para largolista', () => {
    test('debería contar correctamente los elementos en una lista', () => {
        expect(largolista([1, 2, 3, 4, 5])).toBe(5);
        expect(largolista([])).toBe(0);
        expect(largolista([1, 2, "", 4, 5])).toBe(2); // Se detiene en el vacío
    });
});

describe('Pruebas para pal', () => {
    test('debería verificar si una lista es un palíndromo', () => {
        expect(pal([1, 2, 3, 3, 2, 1])).toBe(1);
        expect(pal([1, 2, 3, 4, 5])).toBe(0);
        expect(pal([1, 2, 2, 1])).toBe(1);
        expect(pal([1])).toBe(1);
        expect(pal([1, 2, 3, 2, 1])).toBe(1); // Palíndromo
    });
});
