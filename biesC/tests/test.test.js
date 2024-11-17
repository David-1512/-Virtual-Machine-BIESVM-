/**
 * Autores: 
 *      David Serrano Medrano, 
 *      Leandro Mora Corrales, 
 *      Xiara Suarez Alpizar
 */

import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';

describe('CLI BiesC Tests - Validaciones de Archivos', () => {
  const cliPath = path.join(__dirname, '../bin/biesc.js'); // Ajusta la ubicación según sea necesario


  // --------------------------------------------TEST PASAR A .BASM--------------------------------------------
  /**
   * Prueba para ejecutar el archivo version0.bies y verificar la salida esperada.
   */
  test('Ejecutar version0.bies', (done) => {
    const testFilePath = path.join(__dirname, '../basm/version0.bies');
    exec(`node "${cliPath}" "${testFilePath}" --o "salida.txt" --e "errores.txt"`, (error, stdout, stderr) => {
      expect(error).toBeNull();
      expect(stderr).toBe('');
      expect(stdout).toContain('Testing helloworld Version 0 ***');
      expect(stdout).toContain('Hello World!');
      done();
    });
  });


   /**
   * Prueba para ejecutar el archivo version1.bies y verificar la salida esperada.
   */
  test('Ejecutar version1.bies', (done) => {
    jest.setTimeout(10000);

    const testFilePath = path.join(__dirname, '../basm/version1.bies');
    const cliPath = path.join(__dirname, '../bin/biesc.js');

    exec(`node "${cliPath}" "${testFilePath}" --o "salida.txt" --e "errores.txt"`, (error, stdout, stderr) => {
        expect(error).toBeNull();
        expect(stderr).toBe(''); // No debería haber errores.

        expect(stdout).toContain('$FUN $1 args:0 parent:$0');
        expect(stdout).toContain('LDV "Testing helloworld Version 1 ***"');
        expect(stdout).toContain('PRN');
        expect(stdout).toContain('$END $1');
        expect(stdout).toContain('LDV "Hello World!"');
        expect(stdout).toContain('HLT');

        done();
    });
});

/**
 * Prueba para ejecutar el archivo version2.bies y verificar la salida esperada.
*/
test('Ejecutar version2.bies', (done) => {
  jest.setTimeout(10000);

  const testFilePath = path.join(__dirname, '../basm/version2.bies');
  const cliPath = path.join(__dirname, '../bin/biesc.js'); 

  exec(`node "${cliPath}" "${testFilePath}" --o "salida.txt" --e "errores.txt"`, (error, stdout, stderr) => {
      expect(error).toBeNull();
      expect(stderr).toBe(''); 


      expect(stdout).toContain('$FUN $1 args:1 parent:$0');
      expect(stdout).toContain('BLD 0 0');
      expect(stdout).toContain('PRN');
      expect(stdout).toContain('$END $1');
      expect(stdout).toContain('LDV 666');
      expect(stdout).toContain('LDV 664');
      expect(stdout).toContain('SUB');
      expect(stdout).toContain('LDV "Testing helloworld Version "');
      expect(stdout).toContain('ADD');
      expect(stdout).toContain('HLT');

      done();
  });
});

  /**
   * Prueba para ejecutar el archivo version3.bies y verificar la salida esperada.
   */
test('Ejecutar version3.bies', (done) => {
  jest.setTimeout(10000);

  const testFilePath = path.join(__dirname, '../basm/version3.bies');
  const cliPath = path.join(__dirname, '../bin/biesc.js'); 

  exec(`node "${cliPath}" "${testFilePath}" --o "salida.txt" --e "errores.txt"`, (error, stdout, stderr) => {
      expect(error).toBeNull();
      expect(stderr).toBe(''); 

      expect(stdout).toContain('$FUN $1 args:1 parent:$0 ');
      expect(stdout).toContain('BLD 0 0');
      expect(stdout).toContain('PRN');
      expect(stdout).toContain('$END $1');
      expect(stdout).toContain('$FUN $2 args:0 parent:$0');
      expect(stdout).toContain('LDV "Hello World!"');
      expect(stdout).toContain('$END $2');
      expect(stdout).toContain('ADD');
      expect(stdout).toContain('HLT');

      done();
  });
});

  /**
   * Prueba para ejecutar el archivo version4.bies y verificar la salida esperada.
   */
test('Ejecutar version4.bies', (done) => {
  jest.setTimeout(10000);

  const testFilePath = path.join(__dirname, '../basm/version4.bies');
  const cliPath = path.join(__dirname, '../bin/biesc.js'); 

  exec(`node "${cliPath}" "${testFilePath}" --o "salida.txt" --e "errores.txt"`, (error, stdout, stderr) => {
      expect(error).toBeNull();
      expect(stderr).toBe(''); 

      expect(stdout).toContain('$FUN $2 args:1 parent:$1');
      expect(stdout).toContain('BLD 0 0');
      expect(stdout).toContain('PRN');
      expect(stdout).toContain('$END $2');
      expect(stdout).toContain('$FUN $3 args:0 parent:$1');
      expect(stdout).toContain('LDV "Hello World!"');
      expect(stdout).toContain('$END $3');
      expect(stdout).toContain('MUL');
      expect(stdout).toContain('DIV');
      expect(stdout).toContain('HLT');

      done();
  });
});

  /**
   * Prueba para ejecutar el archivo version5.bies y verificar la salida esperada.
   */
test('Ejecutar version5.bies', (done) => {
  jest.setTimeout(10000);

  const testFilePath = path.join(__dirname, '../basm/version5.bies');
  const cliPath = path.join(__dirname, '../bin/biesc.js');

  exec(`node "${cliPath}" "${testFilePath}" --o "salida.txt" --e "errores.txt"`, (error, stdout, stderr) => {
      expect(error).toBeNull();
      expect(stderr).toBe('');

      expect(stdout).toContain('$FUN $2 args:1 parent:$1');
      expect(stdout).toContain('$FUN $4 args:0 parent:$3');
      expect(stdout).toContain('LDV "Enter greeting>"');
      expect(stdout).toContain('INP');
      expect(stdout).toContain('LEN');
      expect(stdout).toContain('EQ');
      expect(stdout).toContain('BF');
      expect(stdout).toContain('HLT');
      done();
  });
});

  /**
   * Prueba para ejecutar el archivo version6.bies y verificar la salida esperada.
   */
test('Ejecutar version6.bies', (done) => {
  jest.setTimeout(10000);

  const testFilePath = path.join(__dirname, '../basm/version6.bies');
  const cliPath = path.join(__dirname, '../bin/biesc.js');

  exec(`node "${cliPath}" "${testFilePath}" --o "salida.txt" --e "errores.txt"`, (error, stdout, stderr) => {
      expect(error).toBeNull();
      expect(stderr).toBe('');

      expect(stdout).toContain('$FUN $1 args:2 parent:$0');
      expect(stdout).toContain('GT');
      expect(stdout).toContain('BF');
      expect(stdout).toContain('$FUN $2 args:0 parent:$0');
      expect(stdout).toContain('LDV 10');
      expect(stdout).toContain('LDV 20');
      expect(stdout).toContain('PRN');
      expect(stdout).toContain('HLT');
      done();
  });
});

  /**
   * Prueba para ejecutar el archivo version7.bies y verificar la salida esperada.
   */
test('Ejecutar version7.bies', (done) => {
  jest.setTimeout(10000);

  const testFilePath = path.join(__dirname, '../basm/version7.bies');
  const cliPath = path.join(__dirname, '../bin/biesc.js');

  exec(`node "${cliPath}" "${testFilePath}" --o "salida.txt" --e "errores.txt"`, (error, stdout, stderr) => {
      expect(error).toBeNull();
      expect(stderr).toBe('');

      expect(stdout).toContain('$FUN $2 args:1 parent:$1 ');
      expect(stdout).toContain('GT');
      expect(stdout).toContain('BF');
      expect(stdout).toContain('$FUN $1 args:1 parent:$0');
      expect(stdout).toContain('$FUN $3 args:0 parent:$0');
      expect(stdout).toContain('LDV 10');
      expect(stdout).toContain('LDV 20');
      expect(stdout).toContain('PRN');
      expect(stdout).toContain('APP 1');
      expect(stdout).toContain('HLT');
      done();
  });
});

  /**
   * Prueba para ejecutar el archivo version8.bies y verificar la salida esperada.
   */
test('Ejecutar version8.bies', (done) => {
  jest.setTimeout(10000);

  const testFilePath = path.join(__dirname, '../basm/version8.bies');
  const cliPath = path.join(__dirname, '../bin/biesc.js');

  exec(`node "${cliPath}" "${testFilePath}" --o "salida.txt" --e "errores.txt"`, (error, stdout, stderr) => {
      expect(error).toBeNull();
      expect(stderr).toBe('');

      expect(stdout).toContain('$FUN $1 args:0 parent:$0');
      expect(stdout).toContain('LDV []');
      expect(stdout).toContain('LIN');
      expect(stdout).toContain('LDV "*** Testing List Access ("');
      expect(stdout).toContain('LTK'); // Para el acceso a índices en la lista
      expect(stdout).toContain('ADD');
      expect(stdout).toContain('PRN');
      expect(stdout).toContain('HLT');
      done();
  });
});

/**
 * Prueba para ejecutar el archivo version9.bies y verificar la salida esperada.
 */
test('Ejecutar version9.bies', (done) => {
  jest.setTimeout(10000);

  const testFilePath = path.join(__dirname, '../basm/version9.bies');
  const cliPath = path.join(__dirname, '../bin/biesc.js');

  exec(`node "${cliPath}" "${testFilePath}" --o "salida.txt" --e "errores.txt"`, (error, stdout, stderr) => {
      expect(error).toBeNull();
      expect(stderr).toBe('');

      expect(stdout).toContain('$FUN $1 args:4 parent:$0 ');
      expect(stdout).toContain('EQ');
      expect(stdout).toContain('BF');
      expect(stdout).toContain('APP 4'); // Llamada recursiva para `sumList`
      expect(stdout).toContain('$FUN $2 args:2 parent:$0');
      expect(stdout).toContain('$FUN $3 args:0 parent:$0');
      expect(stdout).toContain('LDV []');
      expect(stdout).toContain('LIN'); // Para la construcción de la lista
      expect(stdout).toContain('PRN');
      expect(stdout).toContain('HLT');
      done();
  });
});


//-------------------------------------------------------------------------------------------------------

/**
 * Prueba para manejar un archivo con extensión incorrecta.
 * Verifica que se lance un error y se muestre el mensaje adecuado.
 */
test('Archivo con extensión incorrecta', (done) => {
    const invalidFilePath = path.join(__dirname, '../basm/version0.txt');
    exec(`node "${cliPath}" "${invalidFilePath}"`, (error, stdout, stderr) => {
      expect(error).not.toBeNull();
      expect(stderr).toContain('El archivo debe tener la extensión .bies');
      done();
    });
  });

  /**
 * Prueba para manejar un archivo inexistente.
 * Verifica que se lance un error y se muestre el mensaje adecuado.
 */
  test('Archivo inexistente', (done) => {
    const missingFilePath = path.join(__dirname, '../basm/missing.bies');
    exec(`node "${cliPath}" "${missingFilePath}"`, (error, stdout, stderr) => {
      expect(error).not.toBeNull();
      expect(stderr).toContain('Error al leer el archivo');
      done();
    });
  });

  /**
 * Prueba para generar un archivo .basm a partir de un archivo .bies.
 * Verifica que el archivo .basm se genere correctamente y contenga la estructura esperada.
 */
  test('Generar archivo .basm', (done) => {
    const testFilePath = path.join(__dirname, '../basm/version0.bies');
    const basmFilePath = path.join(__dirname, '../basm/version0.basm');

    exec(`node "${cliPath}" "${testFilePath}"`, (error) => {
      expect(error).toBeNull();
      expect(fs.existsSync(basmFilePath)).toBe(true);
      const basmContent = fs.readFileSync(basmFilePath, 'utf8');
      expect(basmContent).toContain('$FUN'); // Validar estructura del archivo
      done();
    });
  });
});

