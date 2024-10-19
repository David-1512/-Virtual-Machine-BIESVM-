
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

module.exports = { hilera }; // exportamos la función
