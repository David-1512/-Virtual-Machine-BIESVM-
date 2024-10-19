
function hilera(inputString) {
    let c = 0; // contador
    const h = inputString; // la cadena de entrada

    for (let l of h) {
        if (l === "") {
            break; // salimos si encontramos un carácter vacío
        }
        c += 1; // incrementamos el contador por cada carácter
    }

    return c; // retornamos el conteo total de caracteres
}

function invertir(inputString) {
    let r = ""; // cadena resultante
    const l = hilera(inputString); // longitud de la cadena

    for (let i = l - 1; i >= 0; i--) {
        r += inputString[i]; // construimos la cadena invertida
    }

    return r; // retornamos la cadena invertida
}

module.exports = { hilera, invertir }; // exportamos las funciones
