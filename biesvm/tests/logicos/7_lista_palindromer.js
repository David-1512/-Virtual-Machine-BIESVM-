
function largolista(list) {
    let c = 0; // contador de caracteres
    for (let char of list) {
        if (char === "") {
            break; // se detiene si se encuentra un carácter vacío
        }
        c += 1; // incrementa el contador por cada carácter
    }
    return c; // retorna el conteo total de caracteres
}

function rec(l, r, list) {
    if (l >= r) {
        return 1; // si se cruzan o son iguales, es un palíndromo
    }
    
    if (list[l] !== list[r]) {
        return 0; // no es un palíndromo
    }
    
    return rec(l + 1, r - 1, list); // llamada recursiva
}

function pal(list) {
    const r = largolista(list) - 1; // longitud - 1
    return rec(0, r, list); // llama a la función rec
}

module.exports = { largolista, rec, pal }; // exporta las funciones
