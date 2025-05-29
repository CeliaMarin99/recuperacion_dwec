
 let datos = [ 
        { entrada: [6, 11, 18, 43, 8, 5, 45, 53, 9, 7, 24, 23], salida: [43, 53, 23] }, 
        { entrada: [6, 5, 24, 47, 8, 11, 18, 41, 9, 2, 35, 19], salida: [47, 41, 19] }, 
        { entrada: [4, 5, 45, 47, 6, 7, 27, 43, 10, 11, 35, 23], salida: [47, 43, 23] }
    ];

describe("Test de la función filtrarPrimosMayoresOnce", function () {
    it("debería devolver un array con números primos mayores que once", function () {
        for (let i = 0; i < datos.length; i++) {
            let resultado = filtrarPrimosMayoresOnce(datos[i].entrada);
            expect(resultado).toEqual(datos[i].salida);
        }
    });
});
