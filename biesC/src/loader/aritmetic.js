// aritmetic.js
import antlr4 from 'antlr4';
import biesCVisitor from '../../parser/grammar/biesCVisitor.js';
import { MNEMONICS } from '../code_generator/mnemonics.js';

export default class BytecodeGenerator extends biesCVisitor {
    constructor() {
        super();
        this.bytecode = [];
    }

    generate(tree) {
        this.visit(tree);
        return this.bytecode;
    }

    visitProgram(ctx) {
        return this.visitChildren(ctx);
    }

    visitChildren(ctx) {
        let result = null;
        if (ctx.children) {
            ctx.children.forEach(child => {
                if (child.accept) {
                    result = child.accept(this);
                }
            });
        }
        return result;
    }

    visitStatement(ctx) {
        return this.visitChildren(ctx);
    }

    visitExpression(ctx) {
        return this.visit(ctx.logicalOrExpression());
    }

    visitBuiltinFunction(ctx) {
        const funcName = ctx.children[0].getText();
        const args = ctx.expression();

        if (Array.isArray(args)) {
            args.forEach(arg => this.visit(arg));
        } else if (args) {
            this.visit(args);
        }

        switch (funcName) {
            case 'print':
                this.bytecode.push(MNEMONICS.PRN);
                break;
            default:
                throw new Error(`Función integrada desconocida: ${funcName}`);
        }

        return null;
    }

    visitAdditiveExpression(ctx) {
        if (ctx.multiplicativeExpression().length === 1) {
            return this.visit(ctx.multiplicativeExpression(0));
        }

        this.visit(ctx.multiplicativeExpression(0));
        for (let i = 1; i < ctx.multiplicativeExpression().length; i++) {
            this.visit(ctx.multiplicativeExpression(i));
            const operator = ctx.children[2 * i - 1].getText();
            if (operator === '+') {
                this.bytecode.push(MNEMONICS.ADD);
            } else {
                this.bytecode.push(MNEMONICS.SUB);
            }
        }
        return null;
    }

    visitMultiplicativeExpression(ctx) {
        if (ctx.exponentialExpression().length === 1) {
            return this.visit(ctx.exponentialExpression(0));
        }

        this.visit(ctx.exponentialExpression(0));
        for (let i = 1; i < ctx.exponentialExpression().length; i++) {
            this.visit(ctx.exponentialExpression(i));
            const operator = ctx.children[2 * i - 1].getText();
            if (operator === '*') {
                this.bytecode.push(MNEMONICS.MUL);
            } else {
                this.bytecode.push(MNEMONICS.DIV);
            }
        }
        return null;
    }

    visitExponentialExpression(ctx) {
        if (ctx.unaryExpression().length === 1) {
            return this.visit(ctx.unaryExpression(0));
        }

        this.visit(ctx.unaryExpression(0));
        for (let i = 1; i < ctx.unaryExpression().length; i++) {
            this.visit(ctx.unaryExpression(i));
            this.bytecode.push('POW');
        }
        return null;
    }

    visitUnaryExpression(ctx) {
        if (ctx.getText().startsWith('-')) {
            this.visit(ctx.unaryExpression());
            this.bytecode.push(MNEMONICS.NEG);
        } else {
            return this.visitChildren(ctx);
        }
    }

    visitPrimaryExpression(ctx) {
        if (ctx.literal()) {
            return this.visit(ctx.literal());
        }
        return this.visitChildren(ctx);
    }

    visitLiteral(ctx) {
        if (ctx.NUMBER()) {
            this.bytecode.push(`${MNEMONICS.LDV} ${ctx.NUMBER().getText()}`);
        } else if (ctx.BOOLEAN()) {
            this.bytecode.push(`${MNEMONICS.LDV} ${ctx.BOOLEAN().getText()}`);
        } else if (ctx.STRING()) {
            this.bytecode.push(`${MNEMONICS.LDV} ${ctx.STRING().getText()}`);
        }
        return null;
    }
}