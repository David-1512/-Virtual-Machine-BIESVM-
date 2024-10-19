grammar biesC;

program: statement+ ;

statement
  : 'let' variable '=' expression
  | 'const' variable '=' expression
  | 'fun' variable '(' (variable (',' variable)*)? ')' '=>' block
  | 'if' '(' expression ')' 'then' block 'else' block
  | 'let' '{' declaration* '}' 'in' block
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

ID: [a-zA-Z_][a-zA-Z0-9_]*;

NUMBER: [0-9]+;

STRING: '"' ( ~["\\] | '\\' . )* '"';

WS: [ \t\r\n]+ -> skip;

// Comentarios
LINE_COMMENT: '//' ~[\r\n]* -> skip;
BLOCK_COMMENT: '/*' .*? '*/' -> skip;
