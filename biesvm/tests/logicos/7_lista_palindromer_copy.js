
// Función para calcular la longitud de una lista
function largolista(lista) {
    let count = 0; // Inicializar el contador

    for (let i = 0; i < lista.length; i++) {
        count++; // Incrementar el contador por cada elemento en la lista
    }

    return count; // Retornar la longitud de la lista
}

// Función para verificar si una lista es un palíndromo
function pal(lista) {
    const length = largolista(lista); // Obtener la longitud de la lista

    // Función recursiva interna para comparar los elementos
    function rec(l, r) {
        if (l >= r) {
            return true; // Si l es mayor o igual que r, es un palíndromo
        }
        if (lista[l] !== lista[r]) {
            return false; // Si los elementos no son iguales, no es un palíndromo
        }
        return rec(l + 1, r - 1); // Llamada recursiva, avanzando hacia el centro
    }

    return rec(0, length - 1); // Iniciar la comparación desde los extremos de la lista
}

// Exportar las funciones para que puedan ser utilizadas en otros archivos
module.exports = { largolista, pal };
