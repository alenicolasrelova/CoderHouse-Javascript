
var numero = prompt("Ingrese un digito mayor a mil: ");


if(numero >= 1000){
    console.log("Es mayor a 1000");
    alert("Es mayor O igual a 1000");
}else{
    console.log("NO mayor a 1000");
    alert("Es MENOR a 1000");
}


var saludo = prompt("Ingrese hola");

if(saludo == "hola"){
    alert("El texto ingresado fue un : " + saludo);
}else{
    alert("Texto ingresado erroneo");
}







var mayorMenor = prompt("Ingrese un digito entre 10 y 50");

if(mayorMenor > 10 && mayorMenor <50){
    alert("esta entre 10 y 50");
}else{
    alert("No entra en el rango de 10 a 50");
}

/*
var numero1= 5;
for (var i= 0 ; i >= 5 ; i++ ){
    console.log("Hola");
}

var color = "rojo";
if(color == "verde"){
    console.log("Es color verde");
}else if(color == "azul"){
    console.log(color == "azul")
}else if(color == "rojo"){
    console.log("rojo")
}else{
    console.log("No es un color primario");
}
*/
