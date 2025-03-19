/*let mensajealerta = "Hola bienvenido"
alert(mensajealerta)
let añoNacimiento = 2009
let añoActual = 2025
let edad = añoActual - añoNacimiento
alert("mi edad es " + edad)
alert("tenes que pasar al boliche, decime tu nobre  para ver si estas en lista y tu edad")
let nombreAlumno = prompt ("ingresa tu nombre")
let edadd = prompt("ingresa tu edad solo numeros")
if (edadd >= 18) {
    alert("podes pasar")

}
*/
let ExamenTeorico = prompt ("aprobaste tu examen teorico para la licencia de conducir, pone 1 si lo aprobaste y 2 si desapobraste")
let ExamenPractico = prompt ("aprobaste tu examen practico para la licencia de conducir, pone 1 si lo aprobaste y 2 si desapobraste")

if ((ExamenTeorico == 1) && (ExamenPractico == 1)) {
    alert("aca tenes tu licencia")
} else {
    alert("no aprobaste repeti la prueba")
}