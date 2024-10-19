/**
 * @file environment.js
 * @description Clase que representa el entorno de ejecución para la máquina virtual BiesVM. Maneja los frames que contienen las variables y su contexto.
 * @module ENVIRONMENT
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
class Environment{
    /**
     * Crea una instancia de la clase Environment, inicializando una lista de frames.
     */
    constructor(){
        this.frames = [];
    }
}