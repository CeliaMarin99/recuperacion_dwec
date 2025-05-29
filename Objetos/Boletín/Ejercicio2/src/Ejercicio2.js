function esPrimo(n) {
    if (n <= 1) return false;         // 0 y 1 no son primos
    if (n === 2) return true;         // 2 sí es primo
    if (n % 2 === 0) return false;    // pares > 2 no son primos

    // Comprobar desde 3 hasta √n (solo impares)
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }

    return true;
}

function filtrarPrimosMayoresOnce(array){
    resultado = [];
    for(var i=0; i<array.length;i++){
        if(esPrimo(array[i]) && array[i]>11){
           resultado.push(array[i]);
        }
    }

    return resultado;
}

let array = [6, 11, 18, 43, 8, 5, 45, 53, 9, 7, 24, 23];

console.log(filtrarPrimosMayoresOnce(array));