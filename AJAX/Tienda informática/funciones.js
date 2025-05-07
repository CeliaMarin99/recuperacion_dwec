// Escribe aquí tu código
addEventListener('load', iniciar);

function iniciar(){
    cargarAjax();
}


function cargarAjax(){

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 200){
                let xml = this.responseXML;
                document.getElementById('inputCategorias').innerHTML= cargarCategorias(xml);
            }else{
                document.getElementById('inputCategorias').innerHTML= "Error";
            }
        }else{
            document.getElementById('inputCategorias').innerHTML= "Cargando...";
        }
    }

    xhr.open('GET', 'api/cargarCategorias.php', true);
    xhr.send();
}

function cargarCategorias(xml){
    let categorias = xml.getElementsByTagName("categoria");//array con categorias
    let salida = "";
    for (let i = 0; i < categorias.length; i++) {
        let categoria = categorias[i];
        let id = categoria.getElementsByTagName("id")[0].textContent;
        let nombre = categoria.getElementsByTagName("nombre")[0].textContent;

        salida+=`<div class="col"><button class="btn btn-info" onclick="presionBoton(${id})">${nombre}</button></div>`;
    }
    return salida;
}

function presionBoton(id){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 200){
                let productos = JSON.parse(this.responseText);
                document.getElementById('inputProductos').innerHTML= cargarProductos(productos);
            }else{
                document.getElementById('inputProductos').innerHTML= "Error";
            }
        }else{
            document.getElementById('inputProductos').innerHTML= "Cargando...";
        }
    }

    xhr.open('GET', `api/cargarProductos.php?id=${id}`, true);
    xhr.send();
}

function cargarProductos(productos){
    let salida = "";
    for (let f = 0; f < productos.length; f++) {
        let producto = productos[f];
        let imagen= producto.imagen;
        let nombre = producto.nombre;
        let precio = producto.precio;

        salida+=` <div class="card col m-2" style="width: 18rem;">
              <img src="images/${imagen}" class="card-img-top" alt="">
              <div class="card-body">
                <h3 class="card-title">${nombre}</h3>
                <h4 class="card-text">${precio}</h4>
                <a class="btn btn-primary" onclick="cargarDetalles(this)" data-descripcion="${producto.descripcion}">Detalles</a>
              </div>
            </div>`;

    }

    return salida;
}

function cargarDetalles(producto){
    let descripcion = producto.getAttribute('data-descripcion');
    document.getElementById('inputDescripcion').innerHTML = descripcion;
}