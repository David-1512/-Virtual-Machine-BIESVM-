/**
 * @file command.js
 * @description Definición de la clase base Command, que debe ser extendida por todos los comandos de la máquina virtual BiesVM. Cada subclase debe implementar el método `execute`.
 * @module COMMAND
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
class Command {

    /**
     * Método que debe ser implementado por las subclases para ejecutar un comando.
     * @abstract
     * @param {Object} runner - Instancia que maneja el estado de la máquina virtual.
     * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
     * @param {WritableStream} errorStream - Flujo de salida para escribir los errores.
     * @param {Array} params - Parámetros específicos del comando.
     * @param {Array} code - Código fuente que puede ser utilizado durante la ejecución (si aplica).
     * @throws {Error} Lanza un error si no es implementado por una subclase.
     */
    execute(runner, outputStream, errorStream ,params, code) {
        throw new Error('Este método debe ser implementado por las subclases');
    }
}


export default Command;
