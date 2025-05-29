/*Crea una función obtenerNombres que reciba un array de objetos personas, donde 
cada objeto tiene las propiedades nombre y edad, y devuelva un array con solo los nombres. */
function obtenerNombres(array){
    let nombres = [];
    for (var i=0; i<array.length; i++){
        nombres.push(array[i].nombre)
    }

    return nombres;
}

const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 },
    { nombre: "Marta", edad: 28 }
  ];

  console.log(obtenerNombres(personas));

/*Crea una función diasHastaNavidad() 
que calcule cuántos días faltan para el 25 de diciembre del año actual. */
function diasHastaNavidad(){
    
    let fechaActual = new Date();
    let anioActual = fechaActual.getFullYear();
    let fechaNavidad = new Date(anioActual, 11, 25); // Mes 11 = diciembre (enero es 0)
    
    // Si ya pasó Navidad este año, usa la del año siguiente
    if (fechaActual > fechaNavidad) {
        fechaNavidad = new Date(anioActual + 1, 11, 25);
    }

    let diferencia = fechaNavidad - fechaActual;
    let dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
    return "Quedan " + dias + " días para Navidad";
}

console.log(diasHastaNavidad());

/*Crea una función contarPalabra(texto, palabra) que reciba un texto
 y una palabra, y devuelva cuántas veces aparece esa palabra en el texto */

function contarPalabra(texto, palabra){
    let contador = 0;
    let partes = texto.split(" ");
    for (var i=0; i<partes.length; i++){
        if(partes[i].toLowerCase() === palabra.toLowerCase()){
            contador++;
        }
    }

    return contador;
}

console.log(contarPalabra("Hola me llamo Celia mi nombre es Celia my name is Celia", "Celia"));