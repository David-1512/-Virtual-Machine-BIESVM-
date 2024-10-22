grammar biesC;

INT: [-]?[0-9]+;
FLOAT: [-]?[0-9]+ '.' [0-9]+; 
SCI: [-]?[0-9]+ ('.' [0-9]+)? [eE] [+-]? [0-9]+;
STRING: '"' ( ~["\\] | '\\' . )* '"';
WS: [ \t\r\n]+ -> skip;
LC: '//' ~[\r\n]* -> skip;
BC: '/*' .*? '*/' -> skip;
ID: [a-zA-Z_][a-zA-Z0-9_]*;

NUMBER: INT | FLOAT | SCI; 

program: statement+ EOF;

statement
  : declaration
  | 'fun' variable '(' (variable (',' variable)*)? ')' '=>' block
  | 'if' '(' expression ')' 'then' block 'else' block
  | 'let' '{' declaration* '}' 'in' block
  | 'print' '(' expression+ ')'  // Ajuste para permitir expresiones dentro de print
  | block
  ;

declaration
  : ('const' | 'let') variable '=' expression
  ;

expression
  : expression ('+' | '-') expression
  | expression ('*' | '/') expression
  | expression ('==' | '!=' | '>' | '>=' | '<' | '<=') expression
  | '(' expression ')'
  | NUMBER
  | STRING
  | 'true' | 'false'
  | 'null'
  | 'input' '(' STRING ')' // Para manejar la entrada
  | variable
  | list
  | lambda
  ;

lambda
  : '(' (variable (',' variable)*)? ')' '=>' block
  ;

list
  : '[' (expression (',' expression)*)? ']'
  ;

block: '{' statement* '}' ;

variable: ID;




