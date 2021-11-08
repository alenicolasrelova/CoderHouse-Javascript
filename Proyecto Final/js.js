var operacion = parseInt(prompt("1_Suma, 2_Resta, 3_dividir ,4_Multiplicar, 5_elevar, 6_RaizCuadrada"));
if( operacion != 6){
    var x = parseInt(prompt("Ingrese el primer digito"));
    var y = prompt("Ingrese su segundo digito");
}else{
    var x = parseInt(prompt("Ingrese el primer digito"));
}
calculadora(operacion, x, y);

function calculadora(operador, num1, num2) {
    var resultado;
    if (operador == 1) {
        resultado = num1 + num2;
        console.log("La suma es : " + resultado);
    } else if (operador == 2) {
        console.log("La resta es : " + (num1 - num2));
    } else if (operador == 3) {
        console.log("La divicion es : " + (num1 / num2));
    } else if (operador == 4) {
        console.log("La Multiplicacion es : " + (num1 * num2));
    } else if (operador == 5) {
        potencia(num1, num2);
    } else if (operador == 6){
        raizCuadrada(num1);
    } else {
        console.log("La opcion ingresada no esa valida. Saludos");
    }

}

function potencia(n1, n2) {
    result = n1;
    for (var i = 1; i < n2; i++) {
        result *= n1;
    }
    console.log("Resultado de la potencia : " + result);
}
//A verificar 
function raizCuadrada(n1){
    j=1;
    for(i = 0 ; i<n1 ; i++){
        result = j * j;
        if(n1<result){
            console.log("Resultado de la raiz cuadrada es : " + j);
        } else{
            j += 1;
        }
    }    

}