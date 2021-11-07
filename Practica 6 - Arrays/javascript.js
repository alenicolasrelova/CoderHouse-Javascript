
/*
const array1 = ["qwert"];
const array2 = [1,2,3,4,5,6,7,8,9,10];
const array3 =[array1,array2];
const array4 = ["a","b","c","d"];
const arrayBool = [true,false,false,true];
const arrayDatos = ["alejandro", "Relova", 25];

for (var i = 0 ; i < array2.length ; i++){
    console.log("Hola mundo " + array2[i]);
}

for (i = 0 ; i < array3.length ; i++){
    console.log( array3[i]);
}

//Bucle anidado de Arrays
for (i = 0 ; i < array4.length ; i++){
    console.log(" ");
    for(var j =0 ; j<array2.length ; j++){
        console.log(array4[i] + " " +  array2[j]);
    }
}

console.log(arrayDatos.toString().toUpperCase());
console.log(arrayDatos.toString().toLocaleLowerCase());


const arrayPersona = ["Nombre", "Apellido", "edad"];
arrayPersona.push("dni");
console.log(arrayPersona.length);
console.log(arrayPersona.toString().toLowerCase());

const arrayConcat = array2.concat(array4);
console.log(arrayConcat.toString()); 

*/

class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    presetacionDePersonas(nombre,apellido,edad){
        console.log(personas.toString());
    }
    
}

const personas= [];
personas.push(new Persona("Alejandro","Relova",25));
personas.push(new Persona("Alejand","Relo",2));
personas.push(new Persona("Alejandro","Relova",10));
personas.push(new Persona("Aleja","Rel",25));
personas.push(new Persona("Ale","Re",10));

for (const persona of personas){
    persona.presetacionDePersonas(persona.nombre,persona.apellido,persona.edad);
}




