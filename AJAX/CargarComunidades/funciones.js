addEventListener('load', iniciar);

function iniciar(){
    cargarAyax();
    document.getElementById("comunidades").addEventListener('change', function() {
        let id = this.value;
        if (id) {
            cargarProvincias(id);
        } else {
            document.getElementById("prov").innerHTML = "<option>Seleccionar...</option>";
        }
    });
}

function cargarAyax(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 200){
                let comunidades = JSON.parse(this.responseText);
                poblarComunidades(comunidades);
            } else {
                document.getElementById("comunidades").innerHTML = "<option>Error al cargar</option>";
            }
        }
    };

    xhr.open('GET', 'cargarComunidades.php', true);
    xhr.send();
}

function poblarComunidades(comunidades){
    let salida = "<option value=''>Seleccionar...</option>";
    for (let f = 0; f < comunidades.length; f++) {
        let comunidad = comunidades[f];
        salida += `<option value="${comunidad.id}">${comunidad.nombre}</option>`;
    }
    document.getElementById("comunidades").innerHTML = salida;
}

function cargarProvincias(id){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'cargarProvincias.php?id=' + encodeURIComponent(id), true);

    xhr.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 200){
                let provinciasXML = this.responseXML;
                poblarProvincias(provinciasXML);
            } else {
                document.getElementById("prov").innerHTML = "<option>Error al cargar provincias</option>";
            }
        }
    };

    xhr.send();
}

function poblarProvincias(xml){
    let provincias = xml.getElementsByTagName("provincia");
    let salida = "<option value=''>Seleccionar...</option>";
    for (let i = 0; i < provincias.length; i++) {
        let id = provincias[i].getElementsByTagName("id")[0].textContent;
        let nombre = provincias[i].getElementsByTagName("nombre")[0].textContent;
        salida += `<option value="${id}">${nombre}</option>`;
    }
    document.getElementById("prov").innerHTML = salida;
}
