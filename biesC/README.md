# Proyecto: biesVM

## Descripción

Proyecto académico donde se implementa una compialdor virtual basada en pila para un lenguaje funcional de juguete llamado bies. El objetivo principal es implementar un intérprete (biesVM) que procese y ejecute código ensamblador generado para este lenguaje.

## Autores

-   **David Serrano Medrano**
-   **Leandro Mora Corrales**
-   **Xiara Suarez Alpizar**
-   **Bryan Hernandez Hernández**

## Requisitos del sistema

Node.js v16.0.0 o superior
npm v7.0.0 o superior
Java 8 o superior (para ejecutar ANTLR4)

## Configuración y Ejecución del Proyecto

1. Clona el repositorio en tu máquina local:
   git clone <URL-DEL-REPOSITORIO>
   cd <NOMBRE-DEL-REPOSITORIO>

2. Instalar dependencias
   node --version
   npm --version
   npm install

3. Configurar ANTLR4
   npm run antlr4

## Crear JSDoc

1. Instalar
   npm install --save-dev jsdoc

2. Crear Documentacion
   npm run jsdoc

## Ejecutar

    npx biesvm --o salida.txt --e errores.txt --trace 1 ./nombre_archivo.basm

## Licencia

Este proyecto está licenciado bajo los términos de la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Agradecimientos

Este proyecto se benefició de la asistencia de ChatGPT, un modelo de lenguaje desarrollado por OpenAI, en la generación de ideas y la solución de problemas técnicos.

ChatGPT fue un apoyo valioso en varias fases del desarrollo del proyecto biesVM. Nos ayudó a identificar y aplicar patrones de diseño que facilitaron la estructura y modularidad del código, lo que permitió implementar los distintos comandos de la máquina virtual de manera clara y eficiente. También fue clave en la documentación del proyecto, generando y revisando comentarios y descripciones que mejoraron la comprensión y mantenimiento del código.

Además, ChatGPT nos asistió en la integración de ANTLR, brindando claridad en el manejo de gramáticas y asegurando una implementación más fluida. Nos ayudó a optimizar la estructura del proyecto y las configuraciones, facilitando la instalación y configuración de dependencias. Durante el desarrollo, también contribuyó a la optimización del código, sugiriendo mejoras que hicieron el proceso de desarrollo más ágil. ChatGPT fue una herramienta útil tanto en la planificación como en la ejecución del proyecto, ayudando en aspectos clave como la estructura del código, el uso de comandos, la documentación y las configuraciones.
