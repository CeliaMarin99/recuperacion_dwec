class Reserva{
    static MSG_ERROR_FECHA_ENTRADA_POSTERIOR_A_SALIDA = "La fecha de salida debe ser posterior a la fecha de entrada";
    static MSG_ERROR_ESTANCIA_MINIMA_INFERIOR_UN_DIA = "Las fechas deben de ser de mínimo un día";

    constructor(nombre, dni, entrada, salida){
        this.nombre = nombre //Marin;Alvarez;Celia
        this.dni = dni;
        this.modificarFechas(entrada, salida);
    }

    get codigoCliente(){
        let nombrePila = this.nombre.split(";")[2];
       
        let codigo = nombrePila.charAt(0)+this.nombre.split(";")[0]+this.dni.substr(5,3);

        return codigo.toUpperCase();
    }

    get numeroDiasEstancia(){
        let fechaEntrada = new Date(this.entrada.split("/").reverse().join('-'));
        let fechaSalida = new Date(this.salida.split("/").reverse().join('-'));

        let diferenciaMilisegundos = fechaSalida - fechaEntrada;

        let dias = diferenciaMilisegundos / (1000 * 60 * 60 * 24);

        return dias;
        
    }

    modificarFechas(fecha1, fecha2){
        let fechaEntrada = new Date(fecha1.split("/").reverse().join('-'));
        let fechaSalida = new Date(fecha2.split("/").reverse().join('-'));

        let diferenciaMilisegundos = fechaSalida - fechaEntrada;
        let dias = diferenciaMilisegundos / (1000 * 60 * 60 * 24);

        if(diferenciaMilisegundos<0){
            throw new Error(Reserva.MSG_ERROR_FECHA_ENTRADA_POSTERIOR_A_SALIDA);
        }else if(dias <= 0){
            throw new Error(Reserva.MSG_ERROR_ESTANCIA_MINIMA_INFERIOR_UN_DIA);
        }else{
            this.entrada = fecha1;
            this.salida = fecha2;
            return "Fecha modificada corectamente"
        }

    }

    costeEstancia() {
        let fechaEntrada = new Date(this.entrada.split("/").reverse().join('-'));
        let fechaSalida = new Date(this.salida.split("/").reverse().join('-'));
    
        let coste = 0;
    
        while (fechaEntrada < fechaSalida) {
            let dia = fechaEntrada.getDay();
    
            if (dia === 6) { // Sábado
                coste += 36;
            } else if (dia === 0) { // Domingo
                coste += 43;
            } else { // Lunes a viernes
                coste += 24;
            }
    
            // Sumar un día
            fechaEntrada.setDate(fechaEntrada.getDate() + 1);
        }
    
        return coste;
    }
    
}
/*
let reserva1= new Reserva("García;Ortiz;Juan Antonio","44958625A", "27/02/2020", "03/03/2020");
console.log(reserva1.codigoCliente);
console.log(reserva1.numeroDiasEstancia);
console.log(reserva1.costeEstancia());//151

console.log(reserva1.modificarFechas("2/11/2021","7/11/2021"));//correcto
console.log(reserva1.modificarFechas("2/11/2021","23/10/2021"));//Fecha salida posterior
console.log(reserva1.modificarFechas("2/11/2021","2/11/2021"));//1 dia
*/