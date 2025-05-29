let SEGUROS_MEDICOS = [
    {value: 1, texto: 'Adeslas'},
    {value: 2, texto: 'Asisa'},
    {value: 3, texto: 'Caser Salud'},
    {value: 4, texto: 'DKV'},
    {value: 5, texto: 'Mapfre'},
    {value: 6, texto: 'Sanitas'}
];

// Escribe aquí tu código
addEventListener('load', iniciar);

const formulario = document.getElementById('miFormulario');
function iniciar(){
    document.getElementById('enviar').addEventListener('click', validarFormulario);
    poblarSeguros();
    document.getElementById('inputMedicoEspecialista').addEventListener('click', habilitarEspecialidad);
    document.getElementById('inputMedicoFamilia').addEventListener('click', habilitarEspecialidad);

}

function validarFormulario(){

    validarDNI();
    validarDia();
}

function validarDNI(){
    let dni = document.getElementById('inputDNI').value;
    let patron = /^[0-9]{8}[trwagmyfpdxbnjzsqvhlcke]{1}$/;

    if(patron.test(dni.toLowerCase())){//Si devuelve true
        //Obtener la letra
        const letras = ['t','r','w','a','g','m','y','f','p','d','x','b','n','j','z','s','q','v','h','l','c','k','e'];
        let letra = dni.substr(-1);
        let numeros = parseInt(dni.substr(0,dni.length-1));

        let resultado = numeros%23;

        if(letras[resultado] == letra.toLowerCase()){
            document.getElementById('inputDNI').setCustomValidity("");
        }else{
            document.getElementById('inputDNI').setCustomValidity("La letra no corresponde con el número");
        }

    }else{//Si devuelve false
       
        document.getElementById('inputDNI').setCustomValidity("El formato del dni no es válido");

    }
}

function poblarSeguros(){
    let select = document.getElementById('inputSeguroMedico');
    let contenido = ``;
    for(var i = 0; i<SEGUROS_MEDICOS.length; i++){
        contenido+=`<option value="${SEGUROS_MEDICOS[i].value}">${SEGUROS_MEDICOS[i].texto}</option>`;
    }

    select.innerHTML= contenido;
}

function habilitarEspecialidad(){

    let Mespecialista = document.getElementById('inputMedicoEspecialista').checked;

    if(Mespecialista){
        //Habilitamos el desplegable
        document.getElementById('inputEspecialidad').disabled = false;
    
    }else{
        document.getElementById('inputEspecialidad').disabled = true;
    }
}

function validarDia(){

    let fecha = document.getElementById('inputFechaCita').value;
    fechaCita = new Date(fecha);
    let diaSemana = fechaCita.getDay();

    if(diaSemana < 1 || diaSemana > 4){
        document.getElementById('inputFechaCita').setCustomValidity("El día de la cita sólo puede ser de lunes a jueves");
    }else{
        document.getElementById('inputFechaCita').setCustomValidity("");
    }

    validarHora(diaSemana);
}


function validarHora(diaSemana){
    let hora = document.getElementById('inputHoraCita').value;

        let partes = hora.split(':');
        let minutos = parseInt(partes[0])*60+parseInt(partes[1]);

        switch(diaSemana){
            case 4:
                if(minutos>=1110 && minutos<=1200){
                    document.getElementById('inputHoraCita').setCustomValidity("");
                }else{
                    document.getElementById('inputHoraCita').setCustomValidity("La hora debe estar entre 18:30 a 20:00");
                }
            break;
            default:
                if(minutos>=600 && minutos<=855){
                    document.getElementById('inputHoraCita').setCustomValidity("");
                }else{
                    document.getElementById('inputHoraCita').setCustomValidity("La hora debe estar entre 10:00 a 14:15");
                }
            break;
        }
        

       
}