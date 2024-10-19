
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

function indice(haystack, needle) {
    const sl = hilera(needle); // longitud de la subcadena
    const hl = hilera(haystack); // longitud de la cadena de búsqueda

    for (let i = 0; i < hl; i++) {
        let found = 1;

        for (let j = 0; j < sl; j++) {
            if (haystack[i + j] !== needle[j]) {
                found = 0; // no coincide
                break;
            }
        }

        if (found) {
            return i; // retorno del índice
        }
    }

    return -1; // no encontrado
}

module.exports = { hilera, indice }; // exportamos las funciones
