// Para instalar jest: npm install --save-dev jest
// Para hacer pruebas jest: npm test <ruta biesvm-main\src\tests\jest>

const { sqrt, cuadratica } = require('../logicos/2_cuadratica.js');

test('Calcula la raíz cuadrada de 9', () => {
    expect(sqrt(9)).toBe(3);
});

test('Resuelve la ecuación cuadrática 1x² - 5x + 6', () => {
    const resultados = cuadratica(1, -5, 6);
    expect(resultados).toEqual([3, 2]); // Las soluciones son 3 y 2
});
