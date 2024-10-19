
function fibonacci(n) {
    if (n === 0) return 0; // Caso base para n = 0
    if (n === 1) return 1; // Caso base para n = 1

    return fibonacci(n - 1) + fibonacci(n - 2); // Llamadas recursivas
}

module.exports = { fibonacci }; // Exportar la función
