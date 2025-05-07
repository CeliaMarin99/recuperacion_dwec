let SEGUROS_MEDICOS = [
    {value: 1, texto: 'Adeslas'},
    {value: 2, texto: 'Asisa'},
    {value: 3, texto: 'Caser Salud'},
    {value: 4, texto: 'DKV'},
    {value: 5, texto: 'Mapfre'},
    {value: 6, texto: 'Sanitas'}
];

// Escribe aquí tu código
document.addEventListener('DOMContentLoaded', iniciar);

function iniciar() {
    // Capturamos el formulario
    document.getElementById('enviar').addEventListener('click', validar);
}

// Función para validar todo al enviar el formulario
function validar(evt) {
    if (!validarDNI()) {
        evt.preventDefault(); // Evita que el formulario se envíe si el DNI es inválido
    }
}

// Función para validar el DNI
function validarDNI() {
    let dniInput = document.getElementById('inputDNI'); // El input con el DNI
    let dniValor = dniInput.value;
    let patron = /^\d{8}[A-Z]$/; // Expresión regular del DNI

    if (patron.test(dniValor)) {
       

        let letra = dniValor.charAt(dniValor.length - 1);
        let numeros = parseInt(dniValor.substring(0,8));
        const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S','Q','V','H','L','C','K','E'];
        let resto = numeros % 23;

        for(var i=0; i<22; i++){
            if(i == resto){
                if(letra == letras[i]){
                    dniInput.setCustomValidity(""); // Si es válido, eliminamos el mensaje de error
                    return true;
                }else{
                    dniInput.setCustomValidity("Letra incorrecta"); // Establece el mensaje de error personalizado
                    dniInput.reportValidity(); // Muestra el mensaje de error si no es válido
                    return false;
                }
            }
        }
        
    } else {
        dniInput.setCustomValidity("Formato de DNI incorrecto"); // Establece el mensaje de error personalizado
        dniInput.reportValidity(); // Muestra el mensaje de error si no es válido
        return false;
    }
}

