/**
 * @file arithmetic_commands.js
 * @description Implementación de comandos aritméticos para la máquina virtual BiesVM.
 * @module ARITHMETIC_COMMANDS
 * 
 * @project biesVM
 * Proyecto académico donde se implementa una máquina virtual basada en pila para un lenguaje funcional llamado bies. 
 * El objetivo principal es implementar un intérprete (biesVM) que procese y ejecute código ensamblador generado para este lenguaje.
 * 
 *  @author David Serrano Medrano
 *  @author Leandro Mora Corrales
 *  @author Xiara Suarez Alpizar
 *  @author Bryan Hernandez Hernández
 * 
 *  @version 1.0.0
 * 
 *  @since 15-10-2024
 */

import Command from './command.js';

/**
 * Clase que representa un comando de operación binaria.
 * @extends Command
 */
class OperationCommand extends Command {

    /**
     * @param {Function} operation - Función que representa la operación binaria a realizar.
     */
    constructor(operation) {
        super();
        this.operation = operation;
    }

    /**
     * Ejecuta la operación binaria sobre los dos elementos superiores de la pila.
     * @param {Object} runner - Instancia del corredor que maneja el estado de la máquina virtual.
     * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
     * @param {WritableStream} errorStream - Flujo de salida para escribir los errores.
     * @throws {Error} Si los valores no pueden ser convertidos a números.
     */
    execute(runner,outputStream, errorStream) {
        const m = (runner.stack.pop()); //Quitamos el numero
        const n = (runner.stack.pop()); //Quitamos el numero
        outputStream.write(`Operando ${n} y ${m} = ${this.operation(n, m)}\n`);
        runner.stack.push(this.operation(n, m));
    
    }
}

/**
 * Clase que representa un comando de operación unaria.
 * @extends Command
 */
class UnaryOperationCommand extends Command {
    /**
     * @param {Function} operation - Función que representa la operación unaria a realizar.
     */
    constructor(operation) {
        super();
        this.operation = operation;
    }

    /**
    * Ejecuta la operación unaria sobre el elemento superior de la pila.
    * @param {Object} runner - Instancia del corredor que maneja el estado de la máquina virtual.
    * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
    * @param {WritableStream} errorStream - Flujo de salida para escribir los errores.
    * @throws {Error} Si el valor no puede ser convertido a un número.
    */
    execute(runner,outputStream,errorStream) {
        const n1 = (runner.stack.pop()); //Quitamos el casteo numero
        outputStream.write(`Operando ${n1}  = ${this.operation(n1)}\n`);
        runner.stack.push(this.operation(n1));
    }

}

export { OperationCommand, UnaryOperationCommand };
