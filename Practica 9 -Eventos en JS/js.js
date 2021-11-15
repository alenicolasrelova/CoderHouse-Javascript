/*
// Definir Eventos - Opción 1
let boton = document.getElementById("btnPrincipal");
boton.addEventListener("click", respuestaClick);

function respuestaClick() {
    console.log("Respuesta Evento #1!");
}

function nombre(){
    let nombre = document.getElementById("nombre", ).value;
}
*/

// Definir Eventos - Opción 2
let boton = document.getElementById("btnPrincipal");
boton.onclick = () => {console.log("Respuesta Evento #2!")};


/*
// Eventos del Mouse
let boton = document.getElementById("btnPrincipal");
boton.onclick = () => {console.log("Evento Click!")};
boton.onmousemove = () => {console.log("Evento Move!")};

//boton.addEventListener("click", eventoClick);
//boton.addEventListener("mouseover", eventoOnMouseMove);


function eventoClick() {
    console.log("Evento Click! (Desde la función)");
}

function eventoOnMouseMove() {
    console.log("Evento On Mouse Move! (Desde la función)");
}*/


/*
// Eventos del Teclado
let nombre  = document.getElementById("nombre");
let email  = document.getElementById("email");
nombre.onkeyup = () => {console.log("Evento KeyUp!")};
email.onkeydown = () => {console.log("Evento KeyDown!")};*/


/*
// Eventos Change
let telefono  = document.getElementById("telefono");
//telefono.onchange = () => {console.log("valor1")};

telefono.onchange = () => {
    let telefono_valor = telefono.value;
    console.log("El valor es: " + telefono_valor)
};*/

/*
// Evento submit
let miFormulario = document.getElementById("form1");
miFormulario.addEventListener("submit", validarFormulario);


function validarFormulario(e) {
    e.preventDefault(); // Impide que se envíe el Formulario
    console.log("Formulario Enviado!");    
}*/

/*
// Formulario usando Event
function validarFormulario(e) {
    let formulario = e.target;
    //Obtengo el valor del primero hijo <input type="text">
    console.log(formulario.children[0]); 
    //Obtengo el valor del segundo hijo <input type="number"> 
    console.log(formulario.children[1]);
}*/