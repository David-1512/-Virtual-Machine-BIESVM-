# biesC

## Descripción

**biesC** es un compilador que transforma archivos `.bies` escritos en el lenguaje funcional de juguete *bies* en archivos `.basm`, los cuales son ejecutables por la máquina virtual `biesVM`. Este proyecto académico implementa un compilador basado en pila para facilitar la ejecución de programas escritos en *bies*.

## Autores

- **David Serrano Medrano**
- **Leandro Mora Corrales**
- **Xiara Suarez Alpizar**
- **Bryan Hernandez Hernández**

## Requisitos del sistema

- **Node.js** v16.0.0 o superior, verificable con `node --version` 
- **npm** v7.0.0 o superior, verificable con `npm --version`
- **Java** 8 o superior (para ejecutar ANTLR4), verificable con `java -version`
- **ANTLR4** v4.9.2 o superior, verificable con `antlr4`
- **biesvm** instalar la máquina virtual `biesVM` para ejecutar los archivos `.basm` generados por el compilador. La máquina virtual `biesVM` viene adjunta al compilador, más adelante se detallará su instalación básica. Para mayor detalle revisa el archivo `README.md` de la máquina virtual `biesVM`.


## Configuración y Ejecución del Proyecto

### 1. Clona el repositorio en tu máquina local
```bash
git clone <URL-DEL-REPOSITORIO>
cd <NOMBRE-DEL-REPOSITORIO>
```

### 2. Instalación de la `biesVM`
Desde una terminal navega al directorio raiz de la biesvm y ejecuta el siguiente comando como administrador para configurar el proyecto a nivel del sistema:
```bash
   npm run configure
```
Este comando copiará el proyecto a una ubicación específica en tu sistema, instalará las dependencias necesarias y configurará el comando `biesvm` utilizado desde cualquier terminal y ejecutar archivos `.basm`.

### 3. Instalacion de `biesc` y sus dependencias
Desde una terminal navega al directorio raiz del proyecto biesc y ejecuta el siguiente comando como administrador para configurar el proyecto a nivel del sistema:

```bash
   npm run configure
```
Este comando copiará el proyecto a una ubicación específica en tu sistema, instalará las dependencias necesarias y configurará los comandos `bies` y `biesc` para que pueda ser utilizado desde cualquier terminal.

### a. Uso de los Comandos `bies` y `biesc`
Después de la configuración, puedes utilizar los comandos `bies` y `biesc` desde cualquier terminal de la siguiente manera:

#### **bies**: Compila y ejecuta programas en código `bies` con un archivo `.bies` como argumento.
```bash
bies <ARCHIVO.bies>
```
también se pueden usar las siguientes opciones:
```bash
bies  --o <ARCHIVO.txt> --e <ERRORES.txt> --trace <NIVEL> <ARCHIVO.bies>
```
- --o: Especifica el nombre del archivo de salida .basm.
- --e: Especifica el nombre del archivo de errores.
- --trace: Activa (1) o desactiva (0) el trace de ejecución.

para ejecutar una un conjunto de tests_cases se puede ejecutar el siguiente comando:
```bash
bies --tests
```
El cual ejecutará todos los test_cases que se encuentran en la carpeta `test_cases` (defaults) y mostrará el resultado de cada uno de ellos. 

para ejecutar unas series de test_cases en específico se puede ejecutar el siguiente comando:
```bash
bies --tests <CARPETA_TEST_CASES> (carpeta con archivos .bies)
```

#### **biesc**: Compila un archivo `.bies` en un archivo `.basm`.
```bash
biesc <ARCHIVO.bies>
```
también se pueden usar las siguientes opciones:
```bash
biesc  --o <ARCHIVO.basm> --e <ERRORES.txt> --trace <NIVEL> <ARCHIVO.bies>
```
- --o: Especifica el nombre del archivo de salida .basm.
- --e: Especifica el nombre del archivo de errores.
- --trace: Activa (1) o desactiva (0) el trace de ejecución.

y posee dos comandos adicionales para generar la documentación del proyecto y para ejecutar los test_cases:
```bash
biesc --jsdoc <CARPETA> (carpeta donde se generará la documentación)
```

```bash
biesc --tests 
```
El cual ejecutará todos los jtets del proyecto y mostrará el resultado de cada uno de ellos.

## Jest

1. Instalar Jest
   npm install --save-dev jest

2. Actualizar npm a la versión más reciente
   npm install -g npm@10.9.0

3. Configurar Babel para Jest
   npm install --save-dev @babel/core @babel/preset-env babel-jest

4. Ejecutar test (debe de estar en /biesC para poder ejecutarlo)
   npm test

## Licencia

Este proyecto está licenciado bajo los términos de la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Agradecimientos

Este proyecto se benefició de la asistencia de ChatGPT, un modelo de lenguaje desarrollado por OpenAI, en la generación de ideas y la solución de problemas técnicos.

ChatGPT fue un apoyo valioso en varias fases del desarrollo del proyecto biesC. Nos ayudó a identificar y aplicar patrones de diseño que facilitaron la estructura y modularidad del código, lo que permitió implementar los distintos comandos de la máquina virtual de manera clara y eficiente. También fue clave en la documentación del proyecto, generando y revisando comentarios y descripciones que mejoraron la comprensión y mantenimiento del código.

Además, ChatGPT nos asistió en la integración de ANTLR, brindando claridad en el manejo de gramáticas y asegurando una implementación más fluida. Nos ayudó a optimizar la estructura del proyecto y las configuraciones, facilitando la instalación y configuración de dependencias. Durante el desarrollo, también contribuyó a la optimización del código, sugiriendo mejoras que hicieron el proceso de desarrollo más ágil. ChatGPT fue una herramienta útil tanto en la planificación como en la ejecución del proyecto, ayudando en aspectos clave como la estructura del código, el uso de comandos, la documentación y las configuraciones.
