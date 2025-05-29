// Definición de la clase Persona
class Persona {
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }

    // Getter y setter para _nombre
    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    // Getter y setter para _edad
    get edad() {
        return this._edad;
    }

    set edad(nuevaEdad) {
        this._edad = nuevaEdad;
    }

    // Método toString
    toString() {
        return `Nombre: ${this._nombre}, Edad: ${this._edad}`;
    }
}

// Definición de la clase Empleado que hereda de Persona
class Empleado extends Persona {
    constructor(nombre, edad, sueldo) {
        super(nombre, edad);
        this._sueldo = sueldo;
    }

    // Getter y setter para _sueldo
    get sueldo() {
        return this._sueldo;
    }

    set sueldo(nuevoSueldo) {
        this._sueldo = nuevoSueldo;
    }

    // Método toString
    toString() {
        return `${super.toString()}, Sueldo: ${this._sueldo}`;
    }
}

// Ejemplo de uso
const persona = new Persona("Juan", 30);
console.log(persona.toString()); // Muestra: Nombre: Juan, Edad: 30

const empleado = new Empleado("María", 40, 3000);
console.log(empleado.toString()); // Muestra: Nombre: María, Edad: 40, Sueldo: 3000

// Crear el array de objetos Empleado
const empleados = [
    new Empleado("Juan", 18, 1250),
    new Empleado("Ana", 15, 870),
    new Empleado("Zamudio", 21, 1320),
    new Empleado("María", 19, 1650)
];

// Duplicar el array para ordenarlo por diferentes criterios
const empleadosPorEdad = [...empleados];
const empleadosPorSueldo = [...empleados];
const empleadosPorNombre = [...empleados];

// Ordenar por edad
empleadosPorEdad.sort((a, b) => a.edad - b.edad);
console.log("Ordenado por edad:", empleadosPorEdad.map(emp => emp.toString()));

// Ordenar por sueldo
empleadosPorSueldo.sort((a, b) => a.sueldo - b.sueldo);
console.log("Ordenado por sueldo:", empleadosPorSueldo.map(emp => emp.toString()));

// Ordenar por nombre
empleadosPorNombre.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("Ordenado por nombre:", empleadosPorNombre.map(emp => emp.toString()));
