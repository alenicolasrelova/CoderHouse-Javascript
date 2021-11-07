/*
// Inicializo las variables con Local Storage
localStorage.setItem("bienvenida", "Hola Coderhouse!");
localStorage.setItem("esValido", true);
localStorage.setItem("unNumero", 0303456);

let mensaje = localStorage.getItem("bienvenida");
let bandera = localStorage.getItem("esValido");
let numero = localStorage.getItem("unNumero");

console.log(typeof mensaje);
console.log(typeof bandera);
console.log(typeof numero);*/


/*
// Inicializo las variables con Session Storage
sessionStorage.setItem("seleccionados", [1, 2, 3]);
sessionStorage.setItem("esValido", false);
sessionStorage.setItem("email", "info@coderhouse.com");

let lista = sessionStorage.getItem("seleccionados").split(",");
let bandera = (sessionStorage.getItem("esValido") == true);
let email = sessionStorage.getItem("email");

console.log(typeof lista);
console.log(typeof bandera);
console.log(typeof email);*/


/*
localStorage.numeroPrueba = 5;
alert("es: " + localStorage.numeroPrueba);

let clave = "toString";
localStorage[clave] = "6";
alert("es: " + localStorage.[clave]);
alert("es: " + localStorage.clave);*/


/*
for (let i=0; i<localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: " + clave);
    console.log("Valor: " + localStorage.getItem(clave));
}*/


//localStorage.removeItem("bienvenida"); // Elimina 1 ítem
//localStorage.clear(); // Elimina todos los ítems
//sessionStorage.removeItem("seleccionados"); // Elimina 1 ítem
//sessionStorage.clear(); // Elimina todos los ítems


/*
const multiplicar = (a, b) => a * b;
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor)};

let ingresarNumero = parseInt(prompt("Ingresar número"));

for (let i=0; i<=10; i++) {
    guardarLocal(i, multiplicar(ingresarNumero, i));
}*/


/*
const producto1 = {id:1, producto:"Arroz"};
localStorage.setItem("producto1", producto1);
console.log("Es: " + localStorage.getItem("producto1"));

const enJSON = '{"id":2, "producto":"Arroz"}';
const producto1 = JSON.parse(enJSON);
console.log(typeof enJSON);
console.log(typeof producto1);
console.log(producto1.producto);

const producto2 = JSON.parse(localStorage.getItem("producto1"));
console.log("ID" + producto2.id);*/
