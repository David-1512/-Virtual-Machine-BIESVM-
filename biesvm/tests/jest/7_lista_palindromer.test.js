// Para instalar jest: npm install --save-dev jest
// Para hacer pruebas jest: npm test <ruta biesvm-main\src\tests\jest>

const { largolista, rec, pal } = require('../logicos/7_lista_palindromer.js');

describe('Pruebas para largolista', () => {
    test('debería contar correctamente los elementos en una lista', () => {
        expect(largolista(["R", "E", "C", "O", "N", "O", "C", "E", "R"])).toBe(9);
        expect(largolista([])).toBe(0);
        expect(largolista(["R", "E", "", "C", "O", "N", "O", "C", "E", "R"])).toBe(2); // Se detiene en el vacío
    });
});

describe('Pruebas para rec', () => {
    test('debería verificar si una sublista es un palíndromo', () => {
        expect(rec(0, 8, ["R", "E", "C", "O", "N", "O", "C", "E", "R"])).toBe(1);
        expect(rec(0, 7, ["R", "E", "C", "O", "N", "A", "C", "E", "R"])).toBe(0);
    });
});

describe('Pruebas para pal', () => {
    test('debería verificar si una lista es un palíndromo', () => {
        expect(pal(["R", "E", "C", "O", "N", "O", "C", "E", "R"])).toBe(1);
        expect(pal(["R", "E", "C", "O", "N", "A", "C", "E", "R"])).toBe(0);
        expect(pal(["A", "B", "C", "B", "A"])).toBe(1);
        expect(pal(["A", "B", "C", "D", "A"])).toBe(0);
    });
});
