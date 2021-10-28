let nombre = "homero";
let edad = 39;
let direccion= "av siempre viva 213";

const persona = {
    nombre: "Homero",
    edad: 39,
    direccion: "av siempre viva 123" 
}

console.log(persona);
console.log("El nombre de la persona es  : " + persona.nombre);
console.log("La edad de mi persona es : " + persona.edad);
console.log("La direccion de mi persona es : " + persona.direccion);


function Persona1 (nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}

const personaFuncion1 = new Persona1 ("Alejandro",25,"Calle falsa 123");
const personaFuncion2 = new Persona1 ("Nicolas",24,"qwerty");

console.log(personaFuncion1.nombre);
console.log(personaFuncion2.nombre);


let people = { nombre:"marge", edad:23};
const people1 = new Persona1(people);
console.log(people.nombre);
console.log(people1.nombre);


let cadena = "Hello coder";

console.log(cadena.length);
console.log("La cadena se vera en minuscula : " + cadena.toLowerCase());
console.log("La cadena se vera en mayuscula : " + cadena.toUpperCase());



function Producto( nombreProd, precio){
    this.nombreProd = nombreProd;
    this.precio = precio;
    this.exponer = function() { return this.precio * 0.21};
}

const producto1 = new Producto ("Celular", 200);



const persona2 = { nombre:"Nicolas", edad:40, calle:"ni idea"};
console.log("nombre " in persona2);
console.log("edad" in persona2);

for( const prop in persona2){
    console.log(persona2[prop]);
    console.log("Tipo de datos: " + typeof persona2[prop]);
}

class Humano {
    constructor(nombre, apellido, dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
    presentarse(){
        console.log("Mi nombre es " + this.nombre + " Mi apellido es " + this.apellido + " y mi DNI es " + this.dni);
    }
}

const humano1 = new Humano("Bart","Simpson",123123123);
console.log(humano1);
humano1.presentarse();



const humano2 = new Humano;
humano2.nombre = prompt("Ingrese su nombre: ");
humano2.apellido = prompt("Ingrese su apellido: ");
humano2.dni = prompt("Ingrese su dni");

humano2.presentarse();