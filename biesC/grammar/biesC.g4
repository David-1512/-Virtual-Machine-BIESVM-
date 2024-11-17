grammar biesC;

program
    : statement* EOF
    ;

statement
    : declaration
    | expression
    ;

declaration
    : constDeclaration
    | varDeclaration
    | letDeclaration
    | funDeclaration
    | nullInitDeclaration
    | reasignation
    ;

reasignation
    : ID '=' expression
    ;

nullInitDeclaration
    : VAR ID
    | LET ID
    ;

constDeclaration
    : CONST ID '=' expression
    ;

varDeclaration
    : VAR ID '=' expression
    ;

letDeclaration
    : LET ID '=' expression
    ;

funDeclaration
    : FUN ID paramsFun ARROW letInDeclaration
    | FUN ID paramsFun ARROW blockExpression
    ;
    
    paramsFun
    : '(' (ID (',' ID)*)? ')'
    ;


expression
    : logicalOrExpression
    ;

logicalOrExpression
    : logicalAndExpression ( '||' logicalAndExpression )*
    ;

logicalAndExpression
    : equalityExpression ( '&&' equalityExpression )*
    ;

equalityExpression
    : relationalExpression ( ('==' | '!=') relationalExpression )*
    ;

relationalExpression
    : additiveExpression ( ('>' | '>=' | '<' | '<=') additiveExpression )*
    ;

additiveExpression
    : multiplicativeExpression ( ('+' | '-') multiplicativeExpression )*
    ;

multiplicativeExpression
    : exponentialExpression ( ('*' | '/') exponentialExpression )*
    ;

exponentialExpression
    : unaryExpression ( '**' unaryExpression )*
    ;

unaryExpression
    : ('!' | '-') unaryExpression
    | primaryExpression
    ;

primaryExpression
    : list
    | functionCallChain
    | literal
    | '(' expression ')'
    | listAccess
    | ifExpression
    | lambda
    | builtinFunction
    ;

literal
    : STRING
    | ID
    | NUMBER
    | TRUE
    | FALSE
    | NULL
    ;

functionCallChain
    : ID funtionArgs ( funtionArgs )*
    ;

funtionArgs
    : '(' argumentList? ')'
    ;

argumentList
    : expression (',' expression)*
    ;

params
    : '(' (ID (',' ID)*)? ')'
    | ID
    ;

list
    : '[' (expression (',' expression)*)? ']'
    ;

listAccess
    : ID '[' expression ']'
    ;

ifExpression
    : IF '(' expression ')' thenExpr ELSE elseExpr
    ;

thenExpr
    : THEN? blockExpression
    ;

elseExpr
    : blockExpression
    ;

letInDeclaration
    : LET blockDeclaration IN blockExpression
    ;

blockDeclaration
    : '{' (constDeclaration)* '}'
    ;
    
blockExpression
    : '{' statement* '}'
    | expression
    ;

lambda
    : params ARROW blockExpression
    | letInDeclaration
    ;

builtinFunction
    : ( PRINT | INPUT | LEN | INT | STR | BOOL | LIST )'(' expression ')'
    ;


// ==============================
// Reglas Léxicas (Tokens)
// ==============================

// Palabras Clave
CONST   : 'const';
VAR     : 'var';
FUN     : 'fun';
LET     : 'let';
IN      : 'in';

IF      : 'if';
THEN    : 'then';
ELSE    : 'else';

TRUE    : 'true';
FALSE   : 'false';
NULL    : 'null';

PRINT   : 'print';
INPUT   : 'input';
LEN     : 'len';
INT     : 'int';
STR     : 'str';
BOOL    : 'bool';
LIST    : 'list';

// Operadores
ARROW   : '=>';

// Literales
NUMBER
    : INTEGER
    | FLOAT
    | SCI
    ;

INTEGER
    : [0-9]+
    ;

FLOAT
    : [0-9]+ '.' [0-9]+
    ;

SCI
    : [0-9]+ ('.' [0-9]+)? [eE] [+-]? [0-9]+
    ;

STRING
    : '"' ( ~["\\] | '\\' . )* '"'
    ;

// Identificadores
ID
    : [a-zA-Z_][a-zA-Z0-9_]*
    ;

// Comentarios y Espacios en Blanco
LC
    : '//' ~[\r\n]* -> skip
    ;

BC
    : '/*' .*? '*/' -> skip
    ;

WS
    : [ \t\r\n]+ -> skip
    ;