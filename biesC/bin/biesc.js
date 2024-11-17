#!/usr/bin/env node

/**
 * @file biesc.js
 * @description Este archivo es el punto de entrada para ejecutar la interfaz de línea de comandos (CLI) del compilador BiesC.
 * Importa y ejecuta la función `runCLI` desde el módulo `cli.js`.
 * 
 * @module biesc
 * 
 * @project biesC
 * Proyecto académico para implementar un compilador para un lenguaje funcional basado en pila (BiesVM).
 * 
 * @author David Serrano Medrano
 * @author Leandro Mora Corrales
 * @author Xiara Suarez Alpizar
 * 
 * @version 1.0.0
 * @since 17-11-2024
 * 
 */
import { runCLI } from '../src/cli/cli.js';

// Ejecuta la interfaz de línea de comandos (CLI) del compilador BiesC.
runCLI();
