/**
 * @file code_function.js
 * @description Clase que representa una función en el contexto de la máquina virtual BiesVM. 
 * Maneja las instrucciones de la función y su contexto (variables locales y padre).
 * @module CODE_FUNCTION
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
class CodeFunction{
     /**
     * Crea una instancia de la clase CodeFunction.
     * @param {string} id - Identificador de la función.
     * @param {Array} code - Conjunto de instrucciones que componen la función.
     * @param {CodeFunction|null} parent - Referencia a la función padre, si existe.
     */
    constructor(id, code, parent){
        this.id = id;
        this.instructions = code;
        this.parent = parent;
        this.locals = 0;
    }

    /**
     * Obtiene la instrucción en el índice especificado.
     * @param {number} index - Índice de la instrucción a obtener.
     * @returns {Object} La instrucción en el índice dado.
     */
    getInstructionAt(index){
        return this.instructions[index];
    }

    /**
     * Obtiene todas las instrucciones de la función.
     * @returns {Array} Conjunto de instrucciones de la función.
     */
    getInstructions(){
        return this.instructions;
    }

     /**
     * Obtiene el número total de instrucciones en la función.
     * @returns {number} Número de instrucciones.
     */
    getInstructionCount(){
        return this.instructions.length;
    }

    /**
     * Obtiene el identificador de la función.
     * @returns {string} El id de la función.
     */
    getId(){
        return this.id;
    }
    
    /**
     * Obtiene la función padre.
     * @returns {CodeFunction|null} La función padre, o null si no existe.
     */
    getParent(){
        return this.parent;
    }

     /**
     * Obtiene el número de variables locales de la función.
     * @returns {number} Número de variables locales.
     */
    getLocals(){
        return this.locals;
    }

    /**
     * Incrementa el contador de variables locales.
     */
    incrementLocals(){
        this.locals++;
    }

    /**
     * Convierte la representación de la función a una cadena.
     * @returns {string} Representación en cadena de la función y sus instrucciones.
     */
    toString(){
        let str = '';
        str += `Función ${this.id}:\n`;
        this.instructions.forEach(instr => {
            str += `  ${instr.toString()}\n`;
        });
        return str;
    }
}

export default CodeFunction;