/*aquí nos encargaremos de validar los datos que fueron ingresados en los campos por el usuario*/

document.getElementById("botonEnviar").addEventListener("click",function(){

    var formatoCorreo = /^[\w.-]+@[\w.-]+\.(com|edu|org)$/; //patrón regex que valida el formato del correo electrónico 
    //tomamos los valores que el usuario ingresó en los input y quitamos algunos espacios al inicio o al final con trim()
    var nombres = document.getElementById("nombres").value.trim();
    var correoIngresado = document.getElementById("email").value.trim();

    //validamos el email ingresado por el usuario con el patrón 
    if (formatoCorreo.test(correoIngresado)) {
       //si se cumple la condición, reemplazamos todo el contenido por un gift + mensaje de agradecimiento personalizado
       document.getElementById("contenedorContacto").innerHTML = `
            <div class="gif-jungkook">
                <img src="https://media1.tenor.com/m/p_iXcjBroGQAAAAd/milauvjk-milauvjk-jungkook-blowing-kiss-gif.giff" alt="foto">
            </div>
            <h2 class="mt-4 text-center">Gracias ` + nombres + `! 💜</h2>
            <p class="text-center">Nos contactaremos contigo en la brevedad posible.</p>
        `;

        //aquí le daremos un margen superior al nuevo bloque, esto para que el gift no se esconda debajo del encabezado ya fijo
        document.getElementById("contenedorContacto").style.marginTop = "150px"
    } else {
        alert("Los datos son inválidos, inténtelo nuevamente")
    }
});