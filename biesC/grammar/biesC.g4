grammar biesC;


NUMBER: INT | FLOAT | SCI; 
BOOLEAN: 'true' | 'false';
INT: [-]?[0-9]+;
FLOAT: [-]?[0-9]+ '.' [0-9]+;
SCI: [-]?[0-9]+ ('.' [0-9]+)? [eE] [+-]? [0-9]+;
STRING: '"' ( ~["\\] | '\\' . )* '"';
WS: [ \t\r\n]+ -> skip;
LC: '//' ~[\r\n]* -> skip;
BC: '/*' .*? '*/' -> skip;
ID: [a-zA-Z_][a-zA-Z0-9_]*;


program: statement+ EOF;

statement
  : declaration
  | 'fun' variable '(' (variable (',' variable)*)? ')' '=>' block
  | 'if' '(' expression ')' 'then' block 'else' block
  | 'let' '{' declaration* '}' 'in' block
  | print 
  | block
  | variable  '(' (expression (',' expression)*)? ')'
  ;

print: 
'print' '(' expression+ ')' 
;

declaration
  : 'let' variable '=' expression
  ;

expression
  : expression ('+' | '-') expression
  | expression ('*' | '/') expression
  | expression ('==' | '!=' | '>' | '>=' | '<' | '<=') expression
  | '(' expression ')'
  | NUMBER
  | STRING
  | BOOLEAN
  | 'null'
  | 'input' '(' STRING ')' // Para manejar la entrada
  | variable
  | list
  | lambda
  ;

lambda
  : '(' (variable (',' variable)*)? ')' '=>' statement
  ;

list
  : '[' (expression (',' expression)*)? ']'
  ;

block: '{' statement* '}' ;

variable: ID;




