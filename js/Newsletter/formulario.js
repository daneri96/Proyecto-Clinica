'use strict'

//variables
document.getElementById("email").addEventListener('keydown',validacionEmail);
document.getElementById("nombre").addEventListener('keydown',validacionNombre);
//validaciones
function validacionEmail(){
    let regxEmail = /^(.+\@.+\..+)$/;
    let email = document.getElementById("email").value;
    let validado = document.getElementById("validado");

    if(regxEmail.test(email)){
        validado.innerHTML ="formato válido";
        validado.style.color = "blue";
        
    }else{
        validado.innerHTML ="formato no válido";
        validado.style.color = "red";    
    }
}

function validacionNombre(){
    let regxNombre =/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    let nombre = document.getElementById("nombre").value;
    let vnombre = document.getElementById("validadoNombre");
    
    if(regxNombre.test(nombre)){
        vnombre.innerHTML ="formato válido";
        vnombre.style.color = "blue";
    }else{
        vnombre.innerHTML ="formato no válido";
        vnombre.style.color = "red"; 
    }
}


//confirmacion de politica
function confirmar(){
    let aceptar = document.getElementById("checkbox1");
    let politica = document.getElementById("checkbox2");
    let boton = document.getElementById("boton");
    if(aceptar.checked && politica.checked){
        boton.disabled = false;
    }else{
        boton.disabled = true;
    }
}



