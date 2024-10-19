// Función que simula la raíz cuadrada utilizando el método de aproximaciones sucesivas
function sqrt(n) {
    let r = n;
    let t = 0;

    while (r !== t) {
        t = r;
        r = (t + n / t) / 2;
    }

    return r;
}

// Función que resuelve una ecuación cuadrática usando la fórmula general
function cuadratica(a, b, c) {
    const discriminante = sqrt(b * b - 4 * a * c); // Discriminante = sqrt(b² - 4ac)
    const resultado1 = (-b + discriminante) / (2 * a); // (-b + sqrt(d)) / (2a)
    const resultado2 = (-b - discriminante) / (2 * a); // (-b - sqrt(d)) / (2a)

    return [resultado1, resultado2];
}

// Función principal que ejecuta todo el flujo, simulando la ejecución del BASM
function main() {
    const a = 1;
    const b = -5;
    const c = 6;

    const resultados = cuadratica(a, b, c);
    console.log("Resultados de la ecuación cuadrática: ", resultados);

    return resultados;
}

// Exportar las funciones
module.exports = { sqrt, cuadratica, main };
