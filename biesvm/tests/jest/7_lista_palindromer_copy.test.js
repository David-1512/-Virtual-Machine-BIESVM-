// Para instalar jest: npm install --save-dev jest
// Para hacer pruebas jest: npm test <ruta biesvm-main\src\tests\jest>

const { largolista, pal } = require('../logicos/7_lista_palindromer_copy.js'); 

describe('Pruebas de la función largolista', () => {
    test('debería retornar la longitud de la lista correctamente', () => {
        expect(largolista([1, 2, 3, 4])).toBe(4);
        expect(largolista([])).toBe(0);
        expect(largolista([1, 2, 3, 4, 5, 6, 7])).toBe(7);
    });
});

describe('Pruebas de la función pal', () => {
    test('debería identificar correctamente si una lista es un palíndromo', () => {
        expect(pal([1, 2, 3, 2, 1])).toBe(true);
        expect(pal([1, 2, 3, 4, 5])).toBe(false);
        expect(pal([1, 2, 3, 3, 2, 1])).toBe(true);
        expect(pal([1, 2, 2, 1])).toBe(true);
        expect(pal([])).toBe(true); // Una lista vacía se considera un palíndromo
    });
});
