class Parking {

    static ERROR_PLAZA_SIN_VEHICULO = "No hay ningún vehículo en esa plaza";
    constructor(plazas, coste){
        this.Numplazas=plazas;
        this.coste=coste;
        this.plazas=[];

        //inicializar array
        for(var i=1; i<=this.Numplazas;i++){
            this.plazas[i]="libre";
        }
    }

   
    verPlazas(){
        return this.plazas;
    }
    entradaVehiculo(matricula, plaza, entrada){
        if(this.plazas[plaza] != "libre"){
            throw new Error("La plaza ya está ocupada");
        }else{
            this.plazas[plaza]= {matricula: matricula, entrada:entrada};
        }
    }

    get plazasLibres(){
        let contador=0;
        for(var i=1; i<this.plazas.length; i++){
            if(this.plazas[i]== "libre"){
                contador++;
            }
        }

        return contador;
    }

     get plazasOcupadas(){
        let contador=0;
        for(var i=1; i<this.plazas.length; i++){
            if(this.plazas[i]!= "libre"){
                contador++;
            }
        }

        return contador;
    }

    salidaVehiculo(plaza, salida){
        if(this.plazas[plaza]== "libre"){
                throw new Error(Parking.ERROR_PLAZA_SIN_VEHICULO);
        }else{
            let matricula = this.plazas[plaza].matricula;

            let entrada =this.plazas[plaza].entrada.split(" ")[1];
            let horaSalida = salida.split(" ")[1];

            let entradaEnMinutos = (parseInt(entrada.split(":")[0])*60)+ parseInt(entrada.split(":")[1]) ;
            let salidaEnMinutos = (parseInt(horaSalida.split(":")[0])*60)+ parseInt(horaSalida.split(":")[1])
           
            let totalMinutos = salidaEnMinutos - entradaEnMinutos;

            this.plazas[plaza]="libre";

           let vehiculo = {
            matricula: matricula, 
            minutosEstacionamiento:totalMinutos, 
            costeEstacionamiento: totalMinutos*this.coste
          };
        
            return vehiculo;
        }
    }

}


