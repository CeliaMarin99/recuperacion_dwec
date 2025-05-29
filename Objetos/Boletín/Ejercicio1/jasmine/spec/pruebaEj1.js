describe("Test de la función areaPiramide", function () {
    it("debería calcular correctamente el área para lado=2 y altura=3", function () {
        let resultado = areaPiramide(2, 3);
        expect(resultado).toBeCloseTo(16.64911, 5); // usa toBeCloseTo para decimales
    });

    it("debería lanzar un error si el lado es negativo", function () {
        expect(function () {
            areaPiramide(-2, 3);
        }).toThrowError("Deben ser valores positivos");
    });

    it("debería lanzar un error si la altura es negativa", function () {
        expect(function () {
            areaPiramide(2, -3);
        }).toThrowError("Deben ser valores positivos");
    });

    it("debería lanzar un error si ambos son negativos", function () {
        expect(function () {
            areaPiramide(-2, -3);
        }).toThrowError("Deben ser valores positivos");
    });
});
