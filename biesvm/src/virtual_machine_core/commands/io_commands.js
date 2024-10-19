/**
 * @file io_commands.js
 * @description Implementación de comandos de entrada/salida para la máquina virtual BiesVM. Incluye comandos para imprimir en consola y leer entrada del usuario.
 * @module IO_COMMANDS
 * 
 * @project biesVM
 * Proyecto académico donde se implementa una máquina virtual basada en pila para un lenguaje funcional llamado bies.
 * El objetivo principal es implementar un intérprete (biesVM) que procese y ejecute código ensamblador generado para este lenguaje.
 * 
 * @author David Serrano Medrano
 * @author Leandro Mora Corrales
 * @author Xiara Suarez Alpizar
 * @author Bryan Hernandez Hernández
 * 
 * @version 1.0.0
 * @since 15-10-2024
 */

import Command from './command.js';
import readlineSync from 'readline-sync';

/**
 * Clase que representa el comando para imprimir en consola.
 * @extends Command
 */
class PrnCommand extends Command {
    /**
     * Ejecuta el comando de impresión, sacando el valor de la pila y mostrándolo en la consola.
     * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
     * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
     */
    execute(runner,outputStream) {
        const valor = runner.stack.pop();
        outputStream.write(`Imprimiendo en consola: ${valor}\n`);
        console.log(valor);
    }
}

/**
 * Clase que representa el comando para leer entrada del usuario.
 * @extends Command
 */
class InpCommand extends Command {
    /**
     * Ejecuta el comando de entrada, solicitando un valor al usuario y empujándolo a la pila.
     * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
     * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
     */
    execute(runner,outputStream) {        
        const input = readlineSync.question('');  
        outputStream.write(`Entrando por teclado: ${input || ''}\n`);
        runner.stack.push(input || ''); 

    }
}

export { PrnCommand, InpCommand };