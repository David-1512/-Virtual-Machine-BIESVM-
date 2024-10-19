
function fibonacci(n) {
    let a = 0; // Primer número de Fibonacci
    let b = 1; // Segundo número de Fibonacci

    if (n === 0) return a; // Caso base para n = 0
    if (n === 1) return b; // Caso base para n = 1

    for (let i = 2; i <= n; i++) {
        const t = a + b; // Sumar los dos últimos números
        a = b; // Actualizar a
        b = t; // Actualizar b
    }

    return b; // Retornar el n-ésimo número de Fibonacci
}

module.exports = { fibonacci }; // Exportar la función
