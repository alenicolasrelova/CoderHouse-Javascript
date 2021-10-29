 function bienvenido (){
    alert("Hola Mundo");
}

function persona(){
    var nombre = prompt("Ingrese su nombre");
    var apellido = prompt("ingrese su apellido");
        alert("Adios " + nombre + " " + apellido);
}
bienvenido();
persona();

function funcionConParametros(parametro1, parametro2){
    alert("Aldios " + parametro1 + " " + parametro2);
}

var nombre1 = prompt("Ingrese su nombre");
var apellido1 = prompt("Ingrese su apellido");

funcionConParametros(nombre1, apellido1);

function calculadora(num1, num2, operador){
    var resultado;
    if(operador == 1){
        resultado = num1 + num2;
        console.log ("La suma es : " + resultado);
    }else if( operador == 2){
        console.log ("La resta es : " + (num1 - num2));
    }else if(operador == 3){
        console.log ("La divicion es : " + (num1 / num2));
    }else if(operador == 4){
        console.log("La Multiplicacion es : " + ( num1 * num2));
    }else{
        console.log("La opcion ingresada no esa valida. Saludos")
    }

}

var operador = prompt("1 sumar, 2 restart, 3 dividir, 4 multiplicar");
calculadora(5, 5, operador);


const suma = (a, b) => { return (a + b)};
const resta = (a, b) => { return (a - b)};

console.log(suma(12,12));
console.log(resta(12,1));
