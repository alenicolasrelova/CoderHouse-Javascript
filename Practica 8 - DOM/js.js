/*

var noticia1 = document.getElementById("noticia1"); //Devuelve 1 solo elemento
console.log(noticia1);
console.log(noticia1.innerHTML);
console.log("titulo: " + document.getElementById("header").innerHTML);


*/
var paises = document.getElementsByClassName("paises"); //Devuelve un Array de Elementos
//console.log(paises);
//console.log(paises[0].innerHTML);
//console.log(paises[1].innerHTML);
//console.log(paises[2].innerHTML);


var div = document.getElementsByTagName("div"); 
//console.log(div[0].innerHTML);
//console.log(div[1].innerHTML);
//console.log(div[2].innerHTML);

var contenedores2 = document.getElementsByTagName("section"); //Devuelve un Array de Elementos
//console.log(contenedores2);
//console.log(contenedores2[0].innerHTML);
//console.log(contenedores2[1].innerHTML);
//console.log(contenedores2[2].innerHTML);

for (const pais of paises) {
    console.log(pais.innerHTML);
}

for (const div of contenedores2) {
    console.log(div.innerHTML);
}
/*
// Agregando Elementos
let parrafo = document.createElement("div");
parrafo.innerHTML = "<h3>Curso de <strong>Javascript</strong> en <strong>Coderhouse</strong></h3>";
//document.body.appendChild(parrafo); //Agregamos al Body

// Podemos agregar adentro de un Section o Div?
var noticia3 = document.getElementById("noticia3");
noticia3.appendChild(parrafo);*/
/*
var paises = document.getElementById("paises");
var li = document.createElement("li");
li.innerHTML = "Brasil";
paises.appendChild(li);*/


/*
// Eliminando Elementos
let parrafo = document.getElementById("parrafo1");
parrafo.parentNode.removeChild(parrafo);
// Otra forma
//var padre = parrafo.parentNode;
//console.log(padre);
//padre.removeChild(parrafo);*/
/*
let paises = document.getElementsByClassName("paises");
paises[1].parentNode.removeChild(paises[1]);*/

/*

// Obtengo valores
var email = document.getElementById("email").value;
var contrasena = document.getElementById("contrasena").value;
console.log("Email: " + email);
console.log("Contraseña: " + contrasena);

// Asignar valores
document.getElementById("email").value = "homero@simpsons.com";
document.getElementById("contrasena").value = "1234";

function obtenerDatos() {
    var email = document.getElementById("email").value;
    var contrasena = document.getElementById("contrasena").value;
    var elemento = document.createElement("p");
    elemento.innerHTML = `Mi email: ${email} y mi contraseña es: ${contrasena}`;
    document.body.appendChild(elemento);
}
*/

/*
// Creando opciones desde un Array
let padre = document.getElementById("personas");
let personas = ["Homero", "Marge", "Bart", "Lisa", "Maggie"];

for (let persona of personas) {
    var elemento = document.createElement("li");
    elemento.innerHTML = persona;
    padre.appendChild(elemento);
}*/


/*
// Plantillas literales
let producto = {id:1, nombre:"Arroz", precio:125};
let concatenado = "#1 - ID: " + producto.id +" - Producto: " + producto.nombre + " - $" + producto.precio;
let plantilla   = `#2 - ID:   ${producto.id} - Producto: ${producto.nombre} - $${producto.precio}`;
//El valor es idéntico pero la construcción de la plantilla es màs sencilla
console.log(concatenado);
console.log(plantilla);*/


/*
// Plantillas literales e innerHTML
let producto   = {id:1,  nombre:"Arroz", precio:125};
let contenedor = document.createElement("div");
//Definimos el innerHTML del elemento con una plantilla de texto
contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                        <p> Producto: ${producto.nombre}</p>
                        <b> $ ${producto.precio}</b>`;
//Agregamos el contenedor creado al body
//document.body.appendChild(contenedor);

var noticia = document.getElementById("noticia4");
noticia.appendChild(contenedor);*/

/*
const productos = [{id:1,  nombre:"Arroz", precio:125}, {id:2,  nombre:"Fideo", precio:150}, {id:3,  nombre:"Pan", precio:175}, {id:4,  nombre:"Flan", precio:200}];

for (const prod of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> ID: ${prod.id}</h3>
                            <p> Producto: ${prod.nombre}</p>
                            <b> $ ${prod.precio}</b>
                            <hr>`;
    document.getElementById("noticia4").appendChild(contenedor);
}*/