let fechas =[
    {entrada: ["9/11/2021","9/11/2021"], salida: 0},
    {entrada: ["28/02/2020","1/3/2020"], salida: 2},
    {entrada: ["28/02/2021","1/3/2021"], salida: 1},
]

describe("Testeo de la función numeroDiasFechas", function () {
    it("debería devolver el número de días entre dos fechas en positivo", function () {

        for(var i=0;i<fechas.length;i++){
            let resultado = numeroDiasFechas(fechas[i].entrada[0],fechas[i].entrada[1]);
            expect(resultado).toEqual(fechas[i].salida);
        }

    });
});
