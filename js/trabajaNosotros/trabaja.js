'use strict'

document.getElementById("nombre").addEventListener('keydown',validacionNombre);
document.getElementById("email").addEventListener('keydown',validacionEmail);


function validacionNombre(){
    let nombre = document.getElementById("nombre").value;
    let regxNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    let validado = document.getElementById("validado");

    if(regxNombre.test(nombre)){
        validado.innerHTML = "formato valido";
        validado.style.color= "blue";
    }else{
        validado.innerHTML = "formato no valido";
        validado.style.color= "red";
    }
}

function validacionEmail(){
    let email = document.getElementById("email").value;
    let regxEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let validadoEmail = document.getElementById("validoEmail");

    if(regxEmail.test(email)){
        validadoEmail.innerHTML ="formato validado";
        validadoEmail.style.color = "blue";
    }else{
        validadoEmail.innerHTML = "formato no valido";
        validadoEmail.style.color = "red";
    }
}



function aceptar(){
    let aceptar = document.getElementById("checkbox1");
    let boton = document.getElementById("boton");

    if(aceptar.checked){
        boton.disabled= false;
    }else{
       
        boton.disabled = true;
    }

}


