
function factorial(n) {
    if (n === 0) {
        return 1; // Factorial de 0 es 1
    }
    return n * factorial(n - 1); // Llamada recursiva
}

module.exports = { factorial }; // Exporta la función
