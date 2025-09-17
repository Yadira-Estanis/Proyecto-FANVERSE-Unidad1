//aquí se validará el registro de un nuevo usuario al darle click al botón "crear cuenta"

document.getElementById("botonCrearCuenta").addEventListener("click", function(){
    //tomamos los valores ingresados por el usuario en los inputs
    var nombres = document.getElementById("inputname").value.trim();
    var apellidos = document.getElementById("inputlastname").value.trim();
    var correo = document.getElementById("inputemail").value.trim();
    var clave = document.getElementById("inputpassword").value.trim();
    var aceptoTerminos = document.getElementById("check").checked;
    var hayError = false; //creamos una nueva variable que detecte si hay error en algún campo
    
    //validamos algunos campos
    var formatoCorreo = /^[\w.-]+@[\w.-]+\.(com|edu|org)$/; //patrón regex que valida el formato del correo electrónico
    /*significa que el correo debe tener:
    -Cualquier caracter (sea numérico, letra, guion o punto)
    -Luego, un arroba @ (obligatoriamente)
    -Cualquier caracter alfanumérico pero ahora que represente al dominio
    -Seguido del dominio, debe tener un punto literal obligatorio.
    -Por último, una extensión (com, org o edu) */
    
    var formatoClave = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; //patrón regex que valida la clave
    /* significa que la clave debe tener: 
    -Al menos una mayúscula 
    -Al menos un número
    -Al menos un caracter especial 
    -8 o más caracteres */ 
    
    //validamos el correo 
    if (!formatoCorreo.test(correo)) { 
        document.getElementById("errorCorreo").innerHTML = "⚠ Correo inválido";
        hayError = true; 
    } 

    //validamos la clave
    if (!formatoClave.test(clave)) {
        document.getElementById("errorClave").innerHTML = "⚠ La clave no cumple con el formato esperado.";
        hayError = true;
    }

    //validamos si le dio click al boton de aceptar terminos y condiciones
    if (!aceptoTerminos) {
        alert("Debes aceptar los términos y condiciones");
        hayError= true;
    }

    if (!hayError) { //si no hubieron errores, entonces le mostraremos el alert
        alert("Has sido registrad@ exitosamente, " + nombres + "!! 🎉");
        document.getElementById("formularioRegistro").reset(); //luego de que se valido que no hayan errores, se borrarán todos los campos
    }
})
