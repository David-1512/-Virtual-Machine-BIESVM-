
function largolista(list) {
    let c = 0; // contador
    for (let i of list) {
        if (i === "") {
            break; // salimos si encontramos un carácter vacío
        }
        c += 1; // incrementamos el contador por cada elemento
    }
    return c; // retornamos el conteo total de elementos
}

function pal(list) {
    const l = largolista(list); // longitud de la lista
    const r = l - 1; // último índice

    for (let i = 0; i < Math.floor(l / 2); i++) {
        if (list[i] !== list[r - i]) {
            return 0; // no es un palíndromo
        }
    }
    return 1; // es un palíndromo
}

module.exports = { largolista, pal }; // exportamos las funciones
