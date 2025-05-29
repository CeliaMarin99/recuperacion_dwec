class Parquimetro {
    constructor(usuario, fecha, horaLlegada, horaSalida){
        this.usuario = usuario;
        this.fechaEstacionamiento = fecha;
        this.horaLlegada = horaLlegada;
        this.horaSalida = horaSalida;
    }

    //b)getter que devuelve el nombre del usuario
    get nombre(){
        let usuario = this.usuario;
        let arrayUsuario = usuario.split("(");
        return arrayUsuario[0].trim();
    }

    
    //c)getter que devuelva la matrícula
    get matricula(){
        let usuario = this.usuario;
        let arrayUsuario = usuario.split("(");
        let matricula = arrayUsuario[1];
        let matriculaFinal = matricula.slice(0, matricula.length-1);
        return matriculaFinal;
    }

    //d)Implementa un método llamado minutosEstancia que devuelva los minutos que el vehiculo ha estado estacionado, introduciendo la hora de la llegada y salida.
    //12:30


   

    //f)Calcula el coste de estacionamiento, se cobre por cada minuto y depende si es fin de semana o no.
    //Entre semana 0.2 y finde 0.5
    costeEstacionamiento(){
        let minutos = minutosEstancia(this.horaLlegada, this.horaSalida);
        let costeTotal = 0;
        if(esFinde(this.fechaEstacionamiento)){
            costeTotal = minutos * 0.5;
        }else{
            costeTotal = minutos*0.2;
        }

        return "Coste total= "+costeTotal+ " $";
    }
 
}

   //e)metodo que devuelva si la fecha es findesemana
    // 11/05/1999
    function esFinde(fecha){
       //convertir a objeto fecha
       let fechaValida = new Date(fecha.split('/').reverse().join('-'));

       let dia = fechaValida.getDay();

       if(dia == 0 || dia == 6){
            console.log("Es finde");
            return true;
       }else{
            console.log("No es finde");
            return false;
       }
    }

     function minutosEstancia(horaLlegada, horaSalida){
       let partesLlegada = horaLlegada.split(':');
       let partesSalida = horaSalida.split(':');

        let minutosLlegada = (parseInt(partesLlegada[0])*60)+parseInt(partesLlegada[1]);
        let minutosSalida = (parseInt(partesSalida[0])*60)+parseInt(partesSalida[1]);

            return minutosSalida - minutosLlegada;
    }

    const parquimetro1 = new Parquimetro("Celia Consolacion Marin (1221321HLV)", "11/05/2025", "11:00", "13:30");

    console.log("Nombre:", parquimetro1.nombre);
    console.log("Matrícula:", parquimetro1.matricula);
    console.log(minutosEstancia("11:00", "13:30"));
    console.log(esFinde("11/05/2025"));//esfinde
    console.log(parquimetro1.costeEstacionamiento());