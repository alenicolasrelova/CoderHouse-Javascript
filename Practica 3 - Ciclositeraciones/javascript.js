var numero= prompt("Ingrese las veces que se ejecutara el ciclo FOR ");
for (var i= 1 ; i >= numero ; i++ ){
    alert("Ejecucion numero : " + i);
}


var numero1 = prompt("Ingrese las veces que se ejecutara el ciclo  while");
var i1 = 1;
while( i1 >= numero1){
    alert("Ejecucion numero : " + i1);
    i1++;
}

var saludo = prompt("ingresa un saludo");
var i2 = 1;
if(saludo =="hola"){
    do {
        console.log("Ingresa la primera vez sin la condicion del while");
        i2++;
    } while (i2 > 3);
}else{
    console.log("El texto ingresado no fue un hola");
}
