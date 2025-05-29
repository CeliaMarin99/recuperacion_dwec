function numeroDiasFechas(fechaDesde, fechaHasta){
    //Convertir a objetos fecha
    let fecha1 = new Date(fechaDesde.split("/").reverse().join("-"));
    let fecha2 = new Date(fechaHasta.split("/").reverse().join("-"));

    let diferenciaML= fecha2 - fecha1;

    let dias = diferenciaML / (1000 * 60 * 60 * 24);

    return Math.ceil(dias);

}

console.log(numeroDiasFechas("9/11/2021","9/11/2021"));