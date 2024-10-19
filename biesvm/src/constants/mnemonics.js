/**
 * @file BiesVM Mnemónicos
 * @description Tabla de mnemónicos utilizados por la máquina virtual BiesVM. Contiene los comandos de control, pila, funciones, aritméticos, comparativos, lógicos, bifurcación, entrada/salida, hileras, listas y tipos.
 * @module BiesVM_MNEMONICS
 * 
 * @project biesVM
 * Proyecto académico donde se implementa una máquina virtual basada en pila para un lenguaje funcional de juguete llamado bies.
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

/**
 * Tabla de mnemónicos utilizados por la BiesVM.
 * @constant {Object} MNEMONICS
 */

export const MNEMONICS = {

    HLT: 'HLT',
    INI: 'INI',    

    POP: 'POP',
    SWP: 'SWP',
    LDV: 'LDV',
    BLD: 'BLD',
    BST: 'BST',    

    LDF: 'LDF',
    APP: 'APP',
    RET: 'RET',

    ADD: 'ADD',
    SUB: 'SUB',
    MUL: 'MUL',
    DIV: 'DIV',

    NEG: 'NEG',
    SGN: 'SGN',

    EQ: 'EQ',       
    GT: 'GT',      
    GTE: 'GTE',     
    LT: 'LT',       
    LTE: 'LTE',     

    AND: 'AND',
    OR: 'OR',
    XOR: 'XOR',
    NOT: 'NOT',

    BT: 'BT',
    BF: 'BF',
    BR: 'BR',
    NOP: 'NOP',

    INP: 'INP',
    PRN: 'PRN',

    SNT: 'SNT',         
    CAT: 'CAT',
    TOS: 'TOS',
    STK: 'STK',
    SRK: 'SRK',
    
    LIN: 'LIN',  
    LNT: 'LNT',
    TOL: 'TOL',   
    LTK: 'LTK',
    LRK: 'LRK', 
     
    CST: 'CST',
    INO: 'INO',
};




