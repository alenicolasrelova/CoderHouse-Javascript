function enviarDatos() {
    var correo = document.getElementById("correo").value;
    var password = document.getElementById("password").value;
    var direccion = document.getElementById("direccion").value;
    var ciudad = document.getElementById("ciudad").value;
    var zona = document.getElementById("zona").value;

    localStorage.setItem("datos_formulario", JSON.stringify([correo, password, direccion, ciudad, zona]));
    if (correo == "" || password == "" || direccion == "" || ciudad == "" || zona == "" || ciudad == "") {
        document.getElementById("resultado").innerHTML = "<p>ERROR</p>";
    }else{
        document.getElementById("resultado").innerHTML = "<p> Los datos se enviaron correctamente</p>";

    }
}

function cargarDatos() {
    var datos = JSON.parse(localStorage.getItem("datos_formulario"));
    document.getElementById("correo").value = datos[0];
    document.getElementById("password").value = datos[1];
    document.getElementById("direccion").value = datos[2];
    document.getElementById("ciudad").value = datos[3];
    document.getElementById("zona").value = datos[4];
}



document.getElementById("enviarDatos").addEventListener("click", enviarDatos);
document.getElementById("cargarDatos").addEventListener("click", cargarDatos);