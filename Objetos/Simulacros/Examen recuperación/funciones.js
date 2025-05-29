addEventListener('load', inicializarEventos, false);



let conexion1;
function inicializarEventos(e) {
    conexion1 = new XMLHttpRequest();
    conexion1.open('GET', 'api/cargar_categorias_xml.php', true);
    conexion1.timeout = 3000; // Tiempo máximo de espera del API 3sg
    conexion1.addEventListener('readystatechange', procesarDatos); // Añadimos el callback
    conexion1.addEventListener('timeout', tiempoVencido); // El evento ontimeout se dispara cuando se ha superado el tiempo de espera
    conexion1.send();
}


function tiempoVencido() {
    document.getElementById("resultados").innerHTML = "Tiempo de espera vencido";
}

function procesarDatos() {
	if(conexion1.readyState==4){
		    if (conexion1.status == 200) {
        const miDiv = document.getElementById('inputCategorias');
        try {
            let xmlDoc = conexion1.responseXML; // En la propiedad responseXML se almacena el XML (tiene una estructura similar al DOM)
         
            // Obtener todos los elementos <periferico> dentro del XML
            let categorias = xmlDoc.getElementsByTagName("categoria");

            for (let f = 0; f < categorias.length; f++) {
                // Acceder a los datos de cada elemento <periferico>

                //crear div
                var div = document.createElement('div');
                div.className = 'col';
                miDiv.appendChild(div);

                //Crear boton

                var boton = document.createElement('button');

                boton.className = 'btn btn-info';
                let categoria = categorias[f].getElementsByTagName('nombre')[0].textContent;
                boton. innerHTML = 
                div.appendChild(boton);
            }
            
        } catch (ex) {
            document.getElementById("inputCategorias").innerHTML = "Error al cargar extraer del XML: " + ex.message;
        }

    } else {
        // Se ha recibido un código status distinto de 200
        document.getElementById("inputCategorias").innerHTML = "Error al cargar los datos";
    }
	} else {
		document.getElementById("inputCategorias").innerHTML = "Cargando...";
	}
	

}







