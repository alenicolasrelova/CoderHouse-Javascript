var nombre = prompt("Ingrese su nombre");
var importe =parseInt (prompt("ingrese importe " + nombre));
var interes =parseInt (prompt("ingrese el interes " + nombre));
var cuotas =parseFloat (prompt("ingrese las cuotas " + nombre));

var importeTotal = importe + ((importe * interes) / 100);
var importeCuotas = importeTotal / cuotas;

console.log("Hola " + nombre + " bienvenido");
console.log("El importe ingresado es : " + importe);
console.log("El interes ingresado es : " + interes);
console.log("Las cuotas son : " + cuotas);
console.log("El importe total es : " + importeTotal);
console.log("El calor de las cuotas son de : " + importeCuotas);
console.log("Saludos " + nombre + " hasta luego")

document.getElementById("importe").value = "$ " + importe;
document.getElementById("interes").value = "$ " + interes;
document.getElementById("cuotas").value = cuotas;
document.getElementById("importeTotal").value = "$ " + importeTotal;
document.getElementById("importeCuotas").value = "$ " + importeCuotas;
