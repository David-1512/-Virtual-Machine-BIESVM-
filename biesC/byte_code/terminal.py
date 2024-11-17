import subprocess
import tempfile
import os
import sys
import shutil
import platform

# Determine if the operating system is Windows
def is_windows():
    return platform.system() == "Windows"

# Check if 'biesc' and 'biesvm' are in PATH
BIESC_PATH = shutil.which('biesc')
BIESVM_PATH = shutil.which('biesvm')

if not BIESC_PATH:
    print("Error: 'biesc' command not found. Please ensure it is installed and added to your PATH.")
    sys.exit(1)

if not BIESVM_PATH:
    print("Error: 'biesvm' command not found. Please ensure it is installed and added to your PATH.")
    sys.exit(1)

CURRENT_FILE = '../byte_code/current.bies'
BACKUP_FILE = '../byte_code/backup.bies'

# Commands to remove from current.bies after execution
COMMANDS_TO_REMOVE = ['input', 'print']

def initialize_files():
    """Initialize current.bies and backup.bies if they don't exist."""
    if not os.path.exists(CURRENT_FILE):
        with open(CURRENT_FILE, 'w') as f:
            pass
    if not os.path.exists(BACKUP_FILE):
        with open(BACKUP_FILE, 'w') as f:
            pass

def append_to_current(line):
    """Append a new line to current.bies."""
    with open(CURRENT_FILE, 'a') as f:
        f.write(line + '\n')

def append_multiple_to_current(lines):
    """Append multiple lines to current.bies."""
    with open(CURRENT_FILE, 'a') as f:
        for line in lines:
            f.write(line + '\n')

def backup_current():
    """Backup current.bies to backup.bies."""
    shutil.copyfile(CURRENT_FILE, BACKUP_FILE)    

def restore_backup():
    """Restore current.bies from backup.bies and inform the user about the last valid line excluding 'input' and 'print'."""
    shutil.copyfile(BACKUP_FILE, CURRENT_FILE)
    print("Restaurando desde backup...")
    with open(CURRENT_FILE, 'r') as f:
        lines = f.readlines()
        if lines:
            # Iterar en reversa para encontrar la última línea válida que no comience con 'input' o 'print'
            last_valid = None
            for line in reversed(lines):
                stripped_line = line.strip()
                # Convertir a minúsculas para comparación insensible a mayúsculas
                stripped_line_lower = stripped_line.lower()
                if not any(stripped_line_lower.startswith(cmd) for cmd in COMMANDS_TO_REMOVE):
                    last_valid = stripped_line
                    break
            if last_valid:
                print(f"Última línea válida: {last_valid}")
            else:
                print("No hay líneas válidas que no sean 'input' o 'print'.")
        else:
            print("No hay líneas válidas.")

def remove_commands(commands):
    """Remove lines starting with specified commands from current.bies."""
    try:
        with open(CURRENT_FILE, 'r') as f:
            lines = f.readlines()
        
        # Filtrar líneas que no comienzan con ningún comando especificado (insensible a mayúsculas)
        filtered_lines = [
            line for line in lines
            if not any(line.lstrip().lower().startswith(cmd) for cmd in commands)
        ]
        
        with open(CURRENT_FILE, 'w') as f:
            f.writelines(filtered_lines)        
        
    except Exception as e:
        print(f"Error al eliminar comandos: {e}")

def compile_bies():
    """Compile the current.bies file into a .basm file."""
    try:
        compile_cmd = [BIESC_PATH, CURRENT_FILE]
        result = subprocess.run(
            compile_cmd,
            check=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            shell=is_windows()
        )
        basm_path = CURRENT_FILE.replace('.bies', '.basm')        
        return basm_path
    except subprocess.CalledProcessError as e:
        error_msg = e.stderr.decode().strip()
        print(f"Compilation Error: {error_msg}")
        restore_backup()
        return None
    except FileNotFoundError:
        print("Error: 'biesc' command not found. Please ensure it is installed and added to your PATH.")
        return None

def execute_basm(basm_path):
    """Execute the compiled .basm file using biesvm."""
    try:
        execute_cmd = [BIESVM_PATH, basm_path]
        result = subprocess.run(
            execute_cmd,
            check=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            shell=is_windows()
        )
        output = result.stdout.decode().strip()
        if output:
            print(output)
        # Primero eliminar comandos antes de hacer backup
        remove_commands(COMMANDS_TO_REMOVE)
        # Luego realizar backup con current.bies limpio
        backup_current()
    except subprocess.CalledProcessError as e:
        error_msg = e.stderr.decode().strip()
        print(f"Execution Error: {error_msg}")
        restore_backup()
    except FileNotFoundError:
        print("Error: 'biesvm' command not found. Please ensure it is installed and added to your PATH.")
    finally:
        if os.path.exists(basm_path):
            os.remove(basm_path)

def repl():
    """Read-Eval-Print Loop for the Bies language with multi-line support."""
    initialize_files()
    print("Bies REPL. Escribe 'hlt' para salir.")
    print("Para escribir múltiples líneas, escribe ':start'. Finaliza con ':end'.")
    
    multi_line_mode = False
    multi_line_buffer = []
    
    while True:
        try:
            if not multi_line_mode:
                prompt = ">> "
            else:
                prompt = "... "

            source = input(prompt)
            
            if not multi_line_mode:
                if source.strip().lower() == "hlt":
                    print("\nSaliendo de la REPL.")
                    # Reset files for next session
                    with open(CURRENT_FILE, 'w') as f:
                        pass
                    with open(BACKUP_FILE, 'w') as f:
                        pass
                    break
                elif source.strip().lower() == ":start":
                    multi_line_mode = True
                    multi_line_buffer = []
                    print("Modo multi-línea iniciado. Escribe ':end' para ejecutar.")
                    continue
                elif not source.strip():
                    continue
                else:
                    append_to_current(source)
                    basm = compile_bies()
                    if basm:
                        execute_basm(basm)
            else:
                if source.strip().lower() == ":end":
                    multi_line_mode = False
                    if multi_line_buffer:
                        append_multiple_to_current(multi_line_buffer)
                        joined_code = '\n'.join(multi_line_buffer)
                        print("\nEjecutando múltiples líneas...")
                        basm = compile_bies()
                        if basm:
                            execute_basm(basm)
                    else:
                        print("No se ingresaron líneas para ejecutar.")
                    continue
                else:
                    multi_line_buffer.append(source)
        except KeyboardInterrupt:
            print("\nSaliendo de la REPL.")
            # Reset files for next session
            with open(CURRENT_FILE, 'w') as f:
                pass
            with open(BACKUP_FILE, 'w') as f:
                pass
            break
        except Exception as e:
            print(f"Error: {e}")

if __name__ == "__main__":
    repl()