/**
 * @file all_commands.js
 * @description Implementación de la CLI para la máquina virtual BiesVM, encargada de ejecutar archivos `.basm`.
 * @module ALL_COMMANDS
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

// Exportación de comandos de control
/**
 * @function HltCommand
 * @description Comando para detener la ejecución de la máquina virtual.
 */
export { HltCommand } from './control_commands.js';

// Exportación de comandos relacionados con la pila
/**
 * @function PopCommand
 * @description Comando para eliminar el elemento superior de la pila.
 */
/**
 * @function SwpCommand
 * @description Comando para intercambiar los dos elementos superiores de la pila.
 */
/**
 * @function LdvCommand
 * @description Comando para cargar un valor en el tope de la pila.
 */
/**
 * @function BldCommand
 * @description Comando para cargar un valor desde la memoria a la pila.
 */
/**
 * @function BstCommand
 * @description Comando para almacenar el valor superior de la pila en la memoria.
 */
export { PopCommand, SwpCommand, LdvCommand, BldCommand, BstCommand } from './stack_commands.js';

// Exportación de comandos relacionados con funciones

/**
 * @function LdfCommand
 * @description Comando para cargar una función.
 */

/**
 * @function AppCommand
 * @description Comando para aplicar una función.
 */

/**
 * @function RetCommand
 * @description Comando para retornar de una función.
 */
/**
 * @function RetCommand
 * @description Comando para retornar de una función.
 */
export { LdfCommand, AppCommand, RetCommand } from './function_commands.js';

// Exportación de comandos aritméticos y unarios

/**
 * @function OperationCommand
 * @description Comando para realizar una operación aritmética binaria.
 */

/**
 * @function UnaryOperationCommand
 * @description Comando para realizar una operación aritmética unaria.
 */
export { OperationCommand, UnaryOperationCommand } from './arithmetic_commands.js';

// Exportación de comandos de comparación y lógica

/**
 * @function ComparisonCommand
 * @description Comando para realizar una operación de comparación.
 */

/**
 * @function EQCommand
 * @description Comando para realizar una operación de igualdad.
 */
export { ComparisonCommand, EQCommand } from './comparison_commands.js';

// Exportación de comandos de bifurcación

/**
 * @function BrCommand
 * @description Comando para realizar una bifurcación incondicional.
 */

/**
 * @function BtCommand
 * @description Comando para realizar una bifurcación condicional verdadera.
 */

/**
 * @function BfCommand
 * @description Comando para realizar una bifurcación condicional falsa.
 */
export { BrCommand, BtCommand, BfCommand } from './branch_commands.js';

// Exportación de comandos de entrada/salida

/**
 * @function PrnCommand
 * @description Comando para imprimir en la consola.
 */

/**
 * @function InpCommand
 * @description Comando para leer de la entrada de la consola.
 */
export { PrnCommand, InpCommand } from './io_commands.js';

// Exportación de comandos relacionados con strings

/**
 * @function SntCommand
 * @description Comando para test de nulidad de un string.
 */

/**
 * @function ConcatCommand
 * @description Comando para concatenar dos strings.
 */

/**
 * @function TosCommand
 * @description Comando para convertir un valor a string.
 */

/**
 * @function StkCommand
 * @description Comando para trabajar con el token de string.
 */

/**
 * @function SrkCommand
 * @description Comando para trabajar con el token de string al revés.
 */
export { SntCommand, ConcatCommand, TosCommand, StkCommand, SrkCommand } from './string_commands.js';

// Exportación de comandos relacionados con listas

/**
 * @function LntCommand
 * @description Comando para test de nulidad de una lista.
 */

/**
 * @function LinCommand
 * @description Comando para insertar un valor al inicio de una lista.
 */

/**
 * @function LtkCommand
 * @description Comando para tomar el k-ésimo elemento de una lista.
 */

/**
 * @function LrkCommand
 * @description Comando para tomar el resto de la lista después del k-ésimo elemento.
 */

/**
 * @function TolCommand
 * @description Comando para convertir un valor a una lista.
 */
export { LntCommand, LinCommand, LtkCommand, LrkCommand, TolCommand } from './list_commands.js';

// Exportación de comandos relacionados con tipos

/**
 * @function CstCommand
 * @description Comando para realizar un casting de tipo.
 */

/**
 * @function InoCommand
 * @description Comando para verificar instancia de un tipo.
 */
export { CstCommand, InoCommand } from './type_commands.js';
