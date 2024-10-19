// Para instalar jest: npm install --save-dev jest
// Para hacer pruebas jest: npm test <ruta biesvm-main\src\tests\jest>

const { max, main } = require('../logicos/1_max.js');

describe('Test de la lógica del pseudo-ensamblador BASM', () => {
  
  test('Función max devuelve el mayor valor', () => {
    expect(max(4, 5)).toBe(5);
    expect(max(10, -5)).toBe(10);
    expect(max(0, 0)).toBe(0);
  });
  
  test('Función main ejecuta el flujo principal correctamente', () => {
    const result = main();
    expect(result).toBe(5); // 5 es el mayor de 4 y 5
  });
  
});
