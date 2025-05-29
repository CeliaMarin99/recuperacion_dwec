class Hotel{
    constructor(cantidad, precio){
        this.cantidad=cantidad;
        this.precio=precio;
        this.habitaciones=[];
        for(var i=0; i<this.cantidad; i++){
            this.habitaciones[i+1]="libre";
        }
    }


    reservarHabitacion(nombre, numero, entrada, salida){
        if(this.habitaciones[numero] == "libre"){
            this.habitaciones[numero] = {"nombre":nombre, "numero":numero, "entrada":entrada, "salida":salida};
            return "Habitación reservada correctamente";
        }else{
            throw new Error("La habitación ya está reservada");
        }
    }

    get HabitacionesLibres(){
        let contador =0;
         for(var i=0; i<this.cantidad; i++){
            if(this.habitaciones[i+1] == "libre"){
                contador++;
            }
        }

        return "Habitaciones libres: "+contador;
    }

     get HabitacionesOcupadas(){
        let contador =0;
         for(var i=0; i<this.cantidad; i++){
            if(this.habitaciones[i+1] != "libre"){
                contador++;
            }
        }

        return "Habitaciones Ocupadas: "+contador;
    }

    checkoutHabitacion(numero){
         if(this.habitaciones[numero] != "libre"){
            let habitacion =this.habitaciones[numero];
            let entrada = habitacion.entrada;
            let salida = habitacion.salida;
            let noches = this.calcularNoches(entrada, salida);
            let datos = {
                "cliente": habitacion.nombre,
                "noches": noches,
                "coste":this.calcularCoste(noches)
            }
            this.habitaciones[numero]="libre";
            return datos;
         }else{
            throw new Error("La habitacion no tiene reserva");
         }
    }

    calcularNoches(entrada, salida){
         //Calcular numero dias
            let fechEntrada = new Date(entrada.split("/").reverse().join("-"));
            let fechSalida = new Date(salida.split("/").reverse().join("-"));

            let diferencia = Math.abs(fechSalida - fechEntrada);

            let dias = diferencia / (1000 * 60 * 60 * 24);

            return dias;
    }

    calcularCoste(noches){
        return this.precio*noches;
    }
}

let hotel = new Hotel(10, 20);
console.log(hotel.HabitacionesLibres);
console.log(hotel.reservarHabitacion("Celia Marín", 1, "23/05/2025", "25/05/2025"));
console.log(hotel.HabitacionesLibres);
console.log(hotel.checkoutHabitacion(1));


