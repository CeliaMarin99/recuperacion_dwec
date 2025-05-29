// Definición de objeto literal para una cuenta bancaria
let cuenta1 = {
    titular: "Javier",
    saldo: 3000,
    ingresar(cantidad) {
        this.saldo += cantidad;
    },
    extraer(cantidad) {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
        } else {
            throw new Error("La cantidad no puede ser mayor al saldo");
        }
    },
    transferir(cuenta, cantidad) {
        if (cantidad <= this.saldo) {
            this.extraer(cantidad);
            cuenta.ingresar(cantidad);
        } else {
            throw new Error("La cantidad no puede ser mayor al saldo");
        }
    },
    toString() {
        return `${this.titular}: ${this.saldo}€`;
    }
};

let cuenta2 = {
    titular: "Rocío",
    saldo: 5000,
    ingresar(cantidad) {
        this.saldo += cantidad;
    },
    extraer(cantidad) {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
        } else {
            console.log("Fondos insuficientes");
        }
    },
    transferir(cuenta, cantidad) {
        if (cantidad <= this.saldo) {
            this.extraer(cantidad);
            cuenta.ingresar(cantidad);
        } else {
            console.log("Fondos insuficientes para transferir");
        }
    },
    toString() {
        return `${this.titular}: ${this.saldo}€`;
    }
};

// Transferir 500€ desde cuenta1 a cuenta2
cuenta1.transferir(cuenta2, 500);

// Comprobación de saldos
console.log(cuenta1.toString()); // Debería mostrar "Javier: 2500€"
console.log(cuenta2.toString()); // Debería mostrar "Rocío: 5500€"

// Creación de un array de cuentas
let cuentas = [
    { titular: "Carlos", saldo: 10000 },
    { titular: "Lidia", saldo: 12500 },
    { titular: "Alicia", saldo: 8500 },
    { titular: "Felipe", saldo: 9000 }
];

//Duplica el array cuentas
let cuentas2=cuentas.slice();

// Ordenar el array de cuentas de menor a mayor saldo
cuentas.sort((a, b) => a.saldo - b.saldo);
//Ordenar alfabéticamente
cuentas.sort((c1,c2)=> c1.titular.localeCompare(c2.titular));
// Mostrar el resultado ordenado
console.log(cuentas);
