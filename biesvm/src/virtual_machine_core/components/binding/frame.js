
/**
 * @file frame.js
 * @description Clase que representa un marco (frame) en el entorno de ejecución de la máquina virtual BiesVM. 
 * Maneja las variables locales y proporciona acceso a las variables del marco padre.
 * @module FRAME
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

class Frame{
     /**
     * Crea una instancia de la clase Frame.
     * @param {Frame|null} parent - Referencia al marco padre. Por defecto es null.
     */
    constructor(parent = null){
        this.id = null;
        this.locals = {};
        this.parent = parent;
    }
    
    /**
     * Establece el valor de una variable en el marco actual o en el marco padre.
     * @param {number} env - Índice del entorno (0 para el marco actual, otros para el marco padre).
     * @param {string} key - Nombre de la variable a establecer.
     * @param {any} value - Valor de la variable a establecer.
     */
    setVariable(env, key, value){
        if (Number(env) === 0){
            this.locals[key] = value;
        }        
        else{
            this.parent.setVariable(Number(env) - 1, key, value);
        }
    }

    /**
     * Obtiene el valor de una variable del marco actual o del marco padre.
     * @param {number} env - Índice del entorno (0 para el marco actual, otros para el marco padre).
     * @param {string} key - Nombre de la variable a obtener.
     * @returns {any} El valor de la variable solicitada.
     * @throws {Error} Si la variable no está definida en el marco actual o en los marcos padres.
     */
    getVariable(env, key){       
        if (Number(env) === 0 && key in this.locals){
            return this.locals[key];
        }
        else if (this.parent){
            return this.parent.getVariable(Number(env) - 1, key);
        }
        else{
            throw new Error(`Variable ${id} no está definida`);
        }
    }

     /**
     * Convierte las variables locales del marco en una cadena para su visualización.
     * @returns {string} Representación en cadena de las variables locales y sus valores.
     */
    toString(){
        let str = '';
        for (const key in this.locals){
            str += `${key}: ${this.locals[key]}\n`;
        }
            if(this.parent){
            str += this.parent.toString();
        }
        return str;
    }
}

export default Frame;