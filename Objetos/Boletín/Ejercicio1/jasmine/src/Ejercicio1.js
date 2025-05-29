function areaPiramide(lado, altura){

    if(lado<0 || altura<0){
        throw new Error("Deben ser valores positivos");
    }else{
        let area= lado*(lado+Math.sqrt(4*Math.pow(altura, 2)+Math.pow(lado, 2)));

        return redondearDecimales(area,5);
    }

}

console.log(areaPiramide(4, 10));

function redondearDecimales(numero,decimales){

    return  Math.round(numero * Math.pow(10,decimales)) / Math.pow(10,decimales);

}