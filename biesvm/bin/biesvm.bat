@echo off
        set "file=%~1"
        if "%file%"=="--tests" (
            npm test
        ) else (
            node "C:\Users\leand\Desktop\IIS2024\_Paradigmas_de_programacion\Proyectos\PROYECTO_BIES_C\principal\-Virtual-Machine-BIESVM-\biesvm\bin\biesvm.js" %*
        )