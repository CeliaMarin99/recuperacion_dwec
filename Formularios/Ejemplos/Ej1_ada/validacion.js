//1ºSeleccionar formulario

//Conociendo el id
var formulario = document.getElementById("miFomulario");
var formulario2 = document.forms["miFormulario"];

//Conociendo el número de formulario que es en la página
var formulario3 = document.getElementsByTagName("form")[0];
var formulario4 = document.forms[0];

//2ºSeleccionar elementos del formulario
//.elements[] array con todos los inputs.
//Por el id
//por TagName("etiqueta") array con elementos de un tipo de etiqueta
//getElementsByName("nombre") array con elementos del mismo nombre

window.onload = iniciar;

function iniciar(){
    //Ejecuta la función validar al presionar enviar
    document.getElementById("Enviar").addEventListener('click', validar, false);
}

function validaNombre(){
    var elemento = document.getElementById("nombre");
    //Si el campo está vacío da error
    if(elemento.value == ""){
        alert("El campo no puede ser vacío");
        error(elemento);
        return false;
    }
    return true;
}

function validaTelefono(){
    var elemento = document.getElementById("telefono");
  //Si no es un número
    if(isNaN(elemento.value)){
        alert("El campo teléfono tiene que ser numérico");
        return false;
    }
    return true;

}

function validaFecha(){
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var anio = document.getElementById("anio").value;

    var fecha = new Date(anio, mes, dia);
    if (isNaN(fecha)){
        alert("Los campos de la fecha son incorrectos");
        return false;
    }
    return true;
}

function validaCheck(){
    var campoCheck = document.getElementById("mayor");
    if(!campoCheck.checked){
        alert("Debe ser mayor de edad");
        return false;
    }
    return true;


}

function error(elemento){
    elemento.className = "error";
    elemento.focus();
}

function limpiarError(){
    elemento.className = "";
    
}

function validar(e){
    if (validaNombre() && validaTelefono() && validaFecha() && validaCheck() && confirm("Pulsa aceptar si deseas enviar los datos")){
        return true;
    }else{
        //Evitar que se envíe el formulario
        e.preventDefault();//Elimina el evento por defecto
        return false;
    }
}