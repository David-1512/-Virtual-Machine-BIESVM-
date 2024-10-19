
function factorial(n) {
    let result = 1; // Inicializa el resultado
    for (let i = 2; i <= n; i++) {
        result *= i; // Multiplica result por i
    }
    return result; // Retorna el resultado final
}

module.exports = { factorial }; // Exporta la función
