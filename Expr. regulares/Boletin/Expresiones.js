
//Correo electrónico
let correo = /[\w-.]+@[a-zA-Z0-9-_]+(\.[a-zA-Z]{2,4}){1,2}/gm;
/*[a-zA-Z0-9-_.]=> cualquier numero o letra mayúscula o minuscula.
[\w-.]=>Sería lo mismo y que \w significa cualquier elemento alfanumérico y _
tambien puede haber guines bajos o puntos. Si el punto está dentro del corchete no hace falta escaparlo.
+=> Significa que pueden haber más de uno.
@=>Lleva una arrova
El punto fuera de los corchetes hay que escaparlo, porque sino significaría otra cosa.
{2,4}=>Significa la cantidad de letras que puede haber.
En el caso en que haya que extraer de un texto los correos habría que añadir ^al principio y $ al final. 
*/
//Contraseña segura
/* De 8 a 16, que incuya minuscula y mayuscula, numeros y un caracter especial*/
let contrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#%&*?!$@])[a-zA-Z\d#%&*?!$@]{8,16}$/gm;
//?=comprueba que existe.

//Matricula
let matricula = /^[0-9]{4}[\s]?[BCDFGHJKLMNPQRSTWYZ]{3}$/;
//1234 BCD
//6678HLC
//Excluir las vocales y la ñ.

//Correo del instituto
let correoInstituto = /^[\w.-]+@iesruizgijon\.(com|es){2,3}$/;