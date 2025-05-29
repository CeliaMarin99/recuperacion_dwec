// Escribe aquí tu código
addEventListener('load', iniciar);

function iniciar(){
    const boton = document.getElementById('crear-pasaturnos');
    boton.addEventListener('click', crearPasaturnos);
    

}

let numero = 0;
const contenedor = document.getElementById("pasaturnos");

function crearPasaturnos(){

     //Recoger valor inicial
     let valorInicial = document.getElementById('input-valor-inicial').value;

     if(valorInicial>20 || valorInicial<0){
         alert("El valor debe esar entre 0 y 20");
     }else{
   
    let div = document.createElement('div');

    //Asignaru id al div
    numero ++;
    div.id = numero;
    
    //Asignar color de  fondo en el div
    //1º recoger el color de fondo
    let colorFondo = document.getElementById('input-color-fondo').value;
    div.style.backgroundColor = colorFondo;

    //Asignar color texto
    //Recoger color y asignar en el div
    let colorTexto = document.getElementById('input-color-texto').value;
    div.style.color = colorTexto;

    //Añadir clase forma
    div.className = 'forma';

    //Añadir div al contenedor
    contenedor.appendChild(div);

    //Elegir texto de pasaturnos
    let texto = document.getElementById('input-texto').value;

   
           //Crear tabla
            let tabla = document.createElement('table');

        //Crear contenido de la tabla
         let contenidoTabla = '<tr><td colspan="3">'+texto+'</td></tr>';
        contenidoTabla += '<tr><td id="contador" colspan="3" style="font-size: 6rem; align-self: center;">'+valorInicial+'</td></tr>';
        contenidoTabla += '<tr><td> <input type="button" onclick="decrementar()" id ="decrementar" value="-"></td><td> <input type="button" id="incrementar" onclick="incrementar()" value="+"></td><td> </td></tr>';
        contenidoTabla+= '<tr><td colspan="3"><input type="button" onclick="eliminarPasaturnos()" value="Eliminar"></td></tr>';

        //Añadir contenido a la tabla
         tabla.innerHTML = contenidoTabla;

        //Añadir tabla al div
        div.appendChild(tabla);
    }

 

}


function decrementar(){
    var valor = document.getElementById('contador').innerHTML;
    if(valor > 0){

        valor --;
    
        let contador = document.getElementById('contador');
        contador.innerHTML = valor;

    }else{
        alert("El número no se puede reducir más");
    }
   
}

function incrementar(){


    var valor = document.getElementById('contador').innerHTML;
    if (valor < 20){
        valor ++;
    
        let contador = document.getElementById('contador');
        contador.innerHTML = valor;
    }else{
        
        contador.innerHTML = 0;
    }
   
}

function eliminarPasaturnos(){

    let pasaturno = document.getElementById();
}