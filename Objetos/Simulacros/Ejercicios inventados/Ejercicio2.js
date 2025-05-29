/*Crea una función filtrarMayores que reciba un array de objetos con nombre y edad, 
y devuelva un array con solo los nombres de los mayores de 18 años. */
function filtrarMayoresEdad(array){
    let mayoresEdad = [];

    for(var i = 0; i<array.length; i++){
        if(array[i].edad>=18){
            mayoresEdad.push(array[i].nombre);
        }
    }

    return mayoresEdad;
}

const personas = [
    { nombre: "Celia", edad: 17 },
    { nombre: "Marcos", edad: 21 },
    { nombre: "Ana", edad: 30 }
  ];

  console.log(filtrarMayoresEdad(personas));


/*Crea una función contarElementos que reciba un array de strings y devuelva 
un objeto con la cantidad de veces que aparece cada palabra. */
function contarElementos(array){
  let repetidas ={};
  
  for(var i = 0; i<array.length; i++){
    
    if(!repetidas[array[i]]){
        repetidas[array[i]] = 1;
    }else{
        repetidas[array[i]]++;
    }
}

    return repetidas;
}

console.log(contarElementos(["manzana", "pera", "manzana", "kiwi", "pera", "manzana"]));
