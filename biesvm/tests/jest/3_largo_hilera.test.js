// Para instalar jest: npm install --save-dev jest
// Para hacer pruebas jest: npm test <ruta biesvm-main\src\tests\jest>

const { hilera } = require('../logicos/3_largo_hilera.js');

test('debería contar correctamente los caracteres en una cadena', () => {
    expect(hilera("Hola Mundo!")).toBe(11);
    expect(hilera("")).toBe(0);
    expect(hilera("JavaScript")).toBe(10);
    expect(hilera("¡Hola!")).toBe(6); // Ejemplo adicional
});
