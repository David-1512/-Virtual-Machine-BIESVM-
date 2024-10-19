/**
 * @file closure.js
 * @description Clase que representa una clausura en la máquina virtual BiesVM. 
 * Maneja una referencia a una función y su entorno léxico asociado.
 * @module CLOSURE
 * 
 * @project biesVM
 * Proyecto académico donde se implementa una máquina virtual basada en pila para un lenguaje funcional llamado bies.
 * El objetivo principal es implementar un intérprete (biesVM) que procese y ejecute código ensamblador generado para este lenguaje.
 * 
 * @author David Serrano Medrano
 * @author Leandro Mora Corrales
 * @author Xiara Suarez Alpízar
 * @author Bryan Hernandez Hernández
 * 
 * @version 1.0.0
 * @since 15-10-2024
 */

class Closure {
     /**
     * Crea una instancia de Closure.
     * @param {Function} fn - Función que representa el bytecode asociado a la clausura.
     * @param {Object} lexicalEnv - Entorno léxico donde se creó la función.
     */
    constructor(fn, lexicalEnv) {
        this.fn = fn;             
        this.lexicalEnv = lexicalEnv;  
    }
}


export default Closure;