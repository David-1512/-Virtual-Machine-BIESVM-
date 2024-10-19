/**
 * @file execution_context.js
 * @description Clases que representan el contexto de ejecución y la pila de contextos para la máquina virtual BiesVM.
 * @module CONTEXT
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

/**
 * Clase que representa el contexto de ejecución en la máquina virtual.
 */
class ExecutionContext {
     /**
     * Crea una instancia de ExecutionContext.
     * @param {number} pc - Contador de programa que indica la posición actual en el código.
     * @param {Object} environment - Estado actual del entorno léxico (Frame).
     * @param {string} funcId - Identificador de la función actual.
     */
    constructor(pc, environment, funcId) {
        this.pc = pc;              
        this.environment = environment; 
        this.funcId = funcId;      
    }
}

/**
 * Clase que representa una pila de contextos para la máquina virtual.
 */
class ContextStack {
     /**
     * Crea una instancia de ContextStack.
     */
    constructor() {
        this.stack = [];
    }

     /**
     * Agrega un nuevo contexto a la pila.
     * @param {number} pc - Contador de programa que indica la posición actual en el código.
     * @param {Object} environment - Estado actual del entorno léxico (Frame).
     * @param {string} funcId - Identificador de la función actual.
     */
    pushContext(pc, environment, funcId) {
        const context = new ExecutionContext(pc, environment, funcId);
        this.stack.push(context);
    }

    /**
     * Elimina y retorna el contexto superior de la pila.
     * @returns {ExecutionContext} El contexto eliminado.
     * @throws {Error} Si la pila de contextos está vacía.
     */    
    popContext() {
        if (this.stack.length === 0) {
            throw new Error("La pila de contextos está vacía");
        }
        return this.stack.pop();
    }

     /**
     * Verifica si la pila de contextos está vacía.
     * @returns {boolean} Verdadero si la pila está vacía, falso en caso contrario.
     */
    isEmpty() {
        return this.stack.length === 0;
    }
}


export { ExecutionContext, ContextStack };
