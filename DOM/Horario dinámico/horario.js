let dias = [
    { id: 1, nombre: 'L' },
    { id: 2, nombre: 'M' },
    { id: 3, nombre: 'X' },
    { id: 4, nombre: 'J' },
    { id: 5, nombre: 'V' }
];

let tramos = [
    { id: 1, hora: '8:00-9:00', descripcion: '1ª Hora' },
    { id: 2, hora: '9:00-10:00', descripcion: '2ª Hora' },
    { id: 3, hora: '10:00-11:00', descripcion: '3ª Hora' },
    { id: 4, hora: '11:00-11:30', descripcion: 'RECREO' },
    { id: 5, hora: '11:30-12:30', descripcion: '4ª Hora' },
    { id: 6, hora: '12:30-13:30', descripcion: '5ª Hora' },
    { id: 7, hora: '13:30-14:30', descripcion: '6ª Hora' }
];

let asignaturas = [
    { id: 1, nombre: '', grupo:'', aula: '', color: 'white' },
    { id: 2, nombre: 'Música', grupo:'1º ESO A', aula: 'Aula 6', color: 'blue' },
    { id: 3, nombre: 'Entorno Desarrollo', grupo:'1ºDAW', aula: 'Aula 9C', color: 'magenta' },
	{ id: 4, nombre: 'Comput. y robótica', grupo:'1ºESO D', aula: 'Aula 10A', color: 'cyan' },
	{ id: 5, nombre: 'Comput. y robótica', grupo:'1ºESO B', aula: 'Aula VII', color: 'yellow' },
	{ id: 6, nombre: 'Despl. Aplic. Web', grupo:'2ºDAW', aula: 'Aula 10B', color: 'green' },
	{ id: 7, nombre: 'Guardia Mant.', grupo:'', aula: 'Taller Informática', color: 'SteelBlue' },
    { id: 8, nombre: 'Música', grupo:'1º ESO B', aula: 'Aula 7', color: 'brown' },
    { id: 9, nombre: 'RECREO', grupo:'', aula: '', color: 'LightGrey' },
];


let horario = [
    {
        idTramo: 1, asignaturas: [
            { idDia: 1, idAsignatura: 2},
            { idDia: 2, idAsignatura: 3},
            { idDia: 3, idAsignatura: 3},
            { idDia: 4, idAsignatura: 1},
            { idDia: 5, idAsignatura: 7}
        ]
    },
	{
        idTramo: 2, asignaturas: [
            { idDia: 1, idAsignatura: 7},
            { idDia: 2, idAsignatura: 2},
            { idDia: 3, idAsignatura: 3},
            { idDia: 4, idAsignatura: 1},
            { idDia: 5, idAsignatura: 4}
        ]
    },
	{
        idTramo: 3, asignaturas: [
            { idDia: 1, idAsignatura: 1},
            { idDia: 2, idAsignatura: 4},
            { idDia: 3, idAsignatura: 7},
            { idDia: 4, idAsignatura: 1},
            { idDia: 5, idAsignatura: 5}
        ]
    },
	{
        idTramo: 4, asignaturas: [
            { idDia: 1, idAsignatura: 9},
            { idDia: 2, idAsignatura: 9},
            { idDia: 3, idAsignatura: 9},
            { idDia: 4, idAsignatura: 9},
            { idDia: 5, idAsignatura: 9}
        ]
    },
	{
        idTramo: 5, asignaturas: [
            { idDia: 1, idAsignatura: 1},
            { idDia: 2, idAsignatura: 1},
            { idDia: 3, idAsignatura: 1},
            { idDia: 4, idAsignatura: 8},
            { idDia: 5, idAsignatura: 6}
        ]
    },
	{
        idTramo: 6, asignaturas: [
            { idDia: 1, idAsignatura: 1},
            { idDia: 2, idAsignatura: 1},
            { idDia: 3, idAsignatura: 1},
            { idDia: 4, idAsignatura: 8},
            { idDia: 5, idAsignatura: 6}
        ]
    },
	{
        idTramo: 7, asignaturas: [
            { idDia: 1, idAsignatura: 1},
            { idDia: 2, idAsignatura: 1},
            { idDia: 3, idAsignatura: 1},
            { idDia: 4, idAsignatura: 1},
            { idDia: 5, idAsignatura: 6}
        ]
    }
];

// Escribe aquí tu código
function obtenerAsignatura(id) {
    for (let i = 0; i < asignaturas.length; i++) {
        if (asignaturas[i].id === id) {
            return asignaturas[i]; // Devuelve la asignatura si la encuentra
        }
    }
    return { nombre: "" }; // Evita errores retornando un objeto por defecto
}


function devolverDiaSemana(id) {
    for (var i = 0; i < dias.length; i++) {  // Corrección aquí: i < dias.length
        if (dias[i].id === id) {
            return dias[i];
        }
    }
    return null;  // Retorna null si no se encuentra el día
}

function obtenerHora(id) {
    for (let i = 0; i < tramos.length; i++) {
        if (tramos[i].id === id) {
            return tramos[i]; // Devuelve el tramo si lo encuentra
        }
    }
    return { hora: "Hora no encontrada" }; // Evita errores retornando un objeto por defecto
}

function obtenerTramo(id) {
    for (var i = 0; i < horario.length; i++) {
        if (horario[i].idTramo === id) {
            return horario[i].asignaturas;  // Devuelve las asignaturas si encuentra el id
        }
    }
    return [];  // Devuelve [] solo si no encontró ningún tramo con ese id
}

addEventListener('load', iniciar);

const tabla = document.getElementById('horario');

function iniciar(){
    document.getElementById('inputCrearHorario').addEventListener('click', crearHorario);
}

function crearHorario() {
    let contenido = "<thead><tr><th></th>";
    
    // Crear la cabecera con los días de la semana
    for (let i = 0; i < dias.length; i++) {  // Empieza desde 0 para incluir todos los días
        let dia = devolverDiaSemana(i + 1);  // Se usa i + 1 porque los ID empiezan en 1
        contenido += "<th>" + dia.nombre + "</th>";
    }

    contenido += "</tr></thead><tbody>";

    // Cuerpo de la tabla
    for (let i = 0; i < horario.length; i++) {  // Se empieza en 0 para incluir todos los tramos
        let tramo = obtenerTramo(i + 1);  // Se usa i + 1 porque los ID empiezan en 1
        let hora = obtenerHora(i + 1);    // Lo mismo para la hora

        contenido += "<tr>";
        contenido += "<td>" + hora.hora + "</td>";  // Agrega la hora en la primera celda

        // Recorre el tramo
       // Recorre el tramo
       for (let j = 0; j < tramo.length; j++) {
        let id = tramo[j].idAsignatura;
        let asignatura = obtenerAsignatura(id);
        let color = asignatura.color;

        contenido += `<td onmouseover="mostrarAula(${id})" style="background-color:${color}; text-align:center;">${asignatura.nombre} <br> ${asignatura.grupo}</td>`;
    }

    contenido += "</tr>";
}

    contenido += "</tbody>";
    tabla.innerHTML = contenido;
}

   
function mostrarAula(id){
    const div = document.getElementById('aula');
    var aula = obtenerAsignatura(id).aula;
    div.innerHTML = "<p>"+aula+"</p>";
}
       

    
