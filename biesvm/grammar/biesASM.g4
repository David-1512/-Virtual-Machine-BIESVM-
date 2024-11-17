grammar biesASM;

// Reglas del lexer
SIGN: [+-];                                // Signo '+' o '-'
NUMBER: SIGN?INT | SIGN?FLOAT | SIGN?SCI;  // Enteros, flotantes o en notación científica
INT: [0-9]+;                               // Enteros: una o más cifras decimales
FLOAT: [0-9]+ '.' [0-9]+;                  // Flotantes (ej. 3.14)
SCI: [0-9]+ ('.' [0-9]+)? [eE] [+-]? [0-9]+; // Notación científica (ej. 6.2e-23)
STRING: '"' ( '\\"' | ~[\r\n"] )* '"';     // Cadenas de texto entre comillas
ID: '$' [0-9]+;                            // Identificadores con prefijo '$'
WS: [ \t\r\n]+ -> skip;                    // Omitir espacios en blanco
SC: ';' ~[\r\n]* -> skip;                  // Comentarios iniciados por ';'
TYPE: 'number' | 'string' | 'list' | 'bool';        // Tipos de datos soportados

TRUE: 'true';                              // Valor booleano verdadero
FALSE: 'false';                            // Valor booleano falso
NULL: 'null';                              // Valor nulo
// Reglas del parser

// Mnemónicos permitidos
mnemonico:
      'POP' | 'SWP' | 'LDV' | 'BLD' | 'BST'             // Pila y Ambiente
    | 'LDF' | 'APP' | 'RET'                             // Funciones
    | 'ADD' | 'SUB' | 'MUL' | 'DIV'                     // Aritmética
    | 'NEG' | 'SGN'                                     // Aritmética Unaria
    | 'EQ'  | 'GT'  | 'GTE' | 'LT' | 'LTE'              // Relacional
    | 'AND' | 'OR'  | 'XOR' | 'NOT'                     // Lógica
    | 'SNT' | 'CAT' | 'TOS' | 'STK' | 'SRK'             // Operaciones con strings
    | 'BT'  | 'BF'  | 'BR'  | 'NOP'                     // Bifurcaciones
    | 'CST' | 'INO'                                     // Conversiones y verificaciones de tipo
    | 'PRN' | 'INP'                                     // IO Consola
    | 'LIN' | 'LTK' | 'LRK' | 'LNT' | 'TOL'             // Operaciones con listas
    | 'INI' | 'HLT'                                     // Inicialización y finalización
    | 'POW' | 'LEN' | 'NEQ'                             // Potencia, longitud y desigualdad
;

// Programa
program: (funcion | instruction )* EOF; // Secuencia de funciones o instrucciones

// Instrucción con mnemónico y argumentos opcionales
instruction: mnemonico (argument* | type);

// Definición de una función
funcion: funinit instruction* funend;

// Inicialización de una función
funinit: '$FUN' identifier funcDetails;

// Finalización de una función
funend: '$END' identifier;

// Detalles de la función: número de argumentos y el padre léxico
funcDetails: 'args:' NUMBER 'parent:' ID;

// Identificador
identifier: ID;

// Argumentos
argument:
    NUMBER    // Número
  | STRING    // Cadena de texto
  | ID        // Identificador
  | list      // Lista
  | TRUE      // Valor booleano verdadero
  | FALSE     // Valor booleano falso
  | NULL      // Valor nulo
;

// Definición de listas
list: '[' ( argument (',' argument)* )? ']';
type    : TYPE ;
