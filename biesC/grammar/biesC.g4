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


program
    : statement* EOF
    ;

statement
    : expression
    | declaration
    ;

declaration
    : 'let' ID '=' (lambda | aritmeticExpression | value | list)
    | const
;

value:
STRING
| ID
| NUMBER
| len
| listAccess
| input
;


conditionalExpression:
 value ('==' | '!=' | '>' | '>=' | '<' | '<=' | '!') value
;

aritmeticExpression:
  value ('*' | '/' | '+' | '-' |  '**')  (value |  aritmeticExpression)
  | '(' aritmeticExpression ')'
;


lambda
    : params '=>'  (expression | lambda | value)
    ;

params
    : '(' ')'
    | '(' value (',' value)* ')'
    | ID
    ;

expression
 :  print
 | functionCallChain
 | letInDeclaration
 | ifExpression
;

letInDeclaration
    : 'let' blockDeclaration 'in' blockExpression
    ;

const:
  'const' ID '=' (lambda | aritmeticExpression | value | list)
;

input:
 'input' '(' STRING ')'
;

blockDeclaration
    : '{' (const)* '}'
    ;

blockExpression
    : '{' (statement)* '}'
    | expression
    ;

ifExpression
    : 'if' '(' conditionalExpression ')' 'then'? value 'else' (value | expression)
    ;

len:
 'len' '(' ID ')'
;
functionCallChain
    :  ID '(' (value| aritmeticExpression) (',' (value | aritmeticExpression))* ')'
    | functionCallChain '(' value ')'
    ;

print:
 'print' '(' (value | functionCallChain | aritmeticExpression ) ')'
;

list
    : '[' ']'
    | '[' value (',' value)* ']'
    ;


listAccess
    : ID '['(aritmeticExpression | NUMBER | ID )']'
    ;