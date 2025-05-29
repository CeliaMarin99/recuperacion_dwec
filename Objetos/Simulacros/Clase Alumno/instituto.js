// Escribe aquí tu código
class Alumno {
    constructor(nombre, apellido1, apellido2, dni){
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.dni = dni;
        this.notas = [];
    }

    agregarNotas(...notas){
        for(var i = 0; i<notas.length; i++){
            this.notas.push(notas[i]);
        }
    }

    obtenerCorreoCorporativo(dominio){
        var inicial = this.nombre[0];
        var letras1 = this.apellido1.slice(-3);
        var letras2 = this.apellido2.slice(-3);

        var correo = inicial + letras1 + letras2 + dominio;

        return correo;
    }

    obtenerNotasMedias(){
        let notasPorAsignatura = {}; // Objeto auxiliar para agrupar notas

        for (let i = 0; i < this.notas.length; i++) {
            let asignatura = this.notas[i].asignatura;
            let nota = this.notas[i].nota;

            // Si la asignatura aún no existe en el objeto, la inicializamos con un array vacío
            if (!notasPorAsignatura[asignatura]) {
                notasPorAsignatura[asignatura] = [];
            }

            // Añadimos la nota al array correspondiente
            /*Es un objeto que tiene como nombre de propiedad el nombre de la asignatura 
            y como valor un array con las notas de esa asignatura*/
            notasPorAsignatura[asignatura].push(nota);
        }

        let medias = [];//Array que va a devolver

        for (let asignatura in notasPorAsignatura) {
            let suma = 0;
            let notas = notasPorAsignatura[asignatura];

            // Sumamos todas las notas de la asignatura
            for (let j = 0; j < notas.length; j++) {
                suma += notas[j];
            }

            // Calculamos la media dividiendo la suma entre la cantidad de notas
            let media = suma / notas.length;

            // Guardamos el resultado en el array final
            medias.push({ asignatura: asignatura, notaMedia: media });

        }
 
    }
}

class Aula {
    constructor(numeroAula, nombreAula){
        this.numeroAula = numeroAula;
        this.nombreAula = nombreAula;
        this.alumnos = [];
    }

    AñadirAlumno(alumno){
        this.alumnos.push(alumno);
    }

    get numeroAlumos(){
        return this.alumnos.length;
    }
}

const Alumna = new Alumno("Celia", "Marín", "Álvarez", "123456789N");
Alumna.agregarNotas({asignatura: "Lengua", nota: 6}, {asignatura: "plastica", nota: 8}, {asignatura: "Lengua", nota: 7});

console.log(Alumna.obtenerCorreoCorporativo("@iesruizgijon.com"));

//Crear Aula
const Miaula = new Aula("9B", "2º DAW");
Miaula.AñadirAlumno(Alumna);
console.log(Miaula.numeroAlumos);
