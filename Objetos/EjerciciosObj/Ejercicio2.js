// Definición de la clase Piloto
class Piloto {
    constructor(nombre) {
        this._nombre = nombre;
    }

    // Getter para el atributo _nombre
    get nombre() {
        return this._nombre;
    }

    // Setter para el atributo _nombre
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
}

// Definición de la clase Aeroplano
class Aeroplano {
    constructor(modelo, piloto, copiloto) {
        this._modelo = modelo;
        this._piloto = piloto;
        this._copiloto = copiloto;
    }

    // Getter para el atributo _modelo
    get modelo() {
        return this._modelo;
    }

    // Setter para el atributo _modelo
    set modelo(nuevoModelo) {
        this._modelo = nuevoModelo;
    }

    // Método de instancia volar()
    volar() {
        return `Volando ${this._modelo} con ${this._piloto.nombre} como piloto y ${this._copiloto.nombre} como copiloto`;
    }
}

// Prueba del código
const piloto1 = new Piloto("Hans Solo");
const piloto2 = new Piloto("Murdock");
const avioneta = new Aeroplano("Airbus C295", piloto1, piloto2);
console.log(avioneta.volar()); // Debería mostrar el texto "Volando Airbus C295 con Hans Solo como piloto y Murdock como copiloto"
