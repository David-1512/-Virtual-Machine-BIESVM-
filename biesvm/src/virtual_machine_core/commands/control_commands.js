/**
 * @file control_commands.js
 * @description Comando para detener la ejecución de la máquina virtual BiesVM.
 * @module CONTROL_COMMANDS
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

/**
 * Clase que representa el comando de detener la ejecución.
 * @extends Command
 */
class HltCommand extends Command {

    /**
     * Ejecuta el comando de finalización de la máquina virtual.
     * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
     * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
     * @returns {boolean} Retorna true para indicar que la ejecución ha sido detenida.
     */
    execute(runner,outputStream) {
        outputStream.write(`Ejecucion finalizada\n`);
        return true;
    }
}

export { HltCommand };