var planSelect = document.getElementById("plan");
var duracionSelect = document.getElementById("duracion");
var estudiantesInput = document.getElementById("estudiantes");
var resultadoDiv = document.getElementById("resultado");

function actualizarCotizacion(){
    var plan = planSelect.value; //plan estudiante
    var precioBase;

    if(plan == "estudiante"){ //condicional
        precioBase = 50.00;

    }
    if(plan == "amigo"){
        precioBase = 70.00
    }
    else if(plan == "vips"){
        precioBase = 120.00;
    }

    var duracion = parseInt(duracionSelect.value);
    var estudiantes = parseInt(estudiantesInput.value);

    var descuento = 0;

    if(duracion == 6){
        descuento = 0.20;
    }

    else if(duracion == 12){
        descuento = 0.40;
    }


    var precioConDescuento = precioBase - (precioBase*descuento) //precio a pagar por 1 estudiante por un mes

    var totalConDescuento = precioConDescuento * estudiantes * duracion;

    var totalSinDescuento = precioBase * estudiantes * duracion;

    var ahorro = totalSinDescuento - totalConDescuento;

    resultadoDiv.innerHTML = `<p>💸 <b>Precio mensual:</b> S/${precioBase.toFixed(2)}</p> 
                <p>🎉 <b>Descuento aplicado</b>: S/${descuento*100}%</p>
                <p>💲<b>Precio con descuento:</b>S/${precioConDescuento.toFixed(2)}</p>
                <p>👥<b>Personas</b>:${estudiantes}</p>
                <p>⏳<b>Duracion:</b> ${duracion} meses</p>
                <br>
                <p>🧾 Total a pagar: <b>S/${totalSinDescuento.toFixed(2)}</b></p>
                <p>💰 Ahorro estimado: <b>S/${ahorro.toFixed(2)}</b></p>` 


 //tofixed para decirle que solo coloque dos decimales
   

};

//boton flotante

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.configura form'); // tu formulario de cotización
  const botonFlotante = document.getElementById('mensajeFlotante');
  const planSelect = document.getElementById('plan'); // select del plan
  const precioTotal = document.getElementById('precio'); // span donde calculas el precio

  let hideTimeout = null;

  if (!form || !botonFlotante) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // evita recargar la página

    // Obtener valores del formulario
    const planElegido = planSelect.options[planSelect.selectedIndex].text;
    const total = precioTotal.textContent || "0";

    // Texto dinámico del botón
    botonFlotante.textContent = `✅ ${planElegido} registrado\nTotal: ${total}`;

    // Mostrar el botón flotante
    botonFlotante.classList.add('show');
    botonFlotante.setAttribute('aria-hidden', 'false');

    // Ocultar automáticamente después de 3s
    if (hideTimeout) clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      botonFlotante.classList.remove('show');
      botonFlotante.setAttribute('aria-hidden', 'true');
      hideTimeout = null;
    }, 3000);
  });

  // Cerrar al hacer clic
  botonFlotante.addEventListener('click', () => {
    if (hideTimeout) clearTimeout(hideTimeout);
    botonFlotante.classList.remove('show');
    botonFlotante.setAttribute('aria-hidden', 'true');
    hideTimeout = null;
  });
});

// Capturamos el formulario por su ID
    document.getElementById("Form").addEventListener("submit", function(event) {
      event.preventDefault(); // Evita que se envíe el formulario

      alert("¡Felicitaciones🎉!,se registro tu plan exitosamente👍✨");
    });




planSelect.addEventListener("change", function(){
    actualizarCotizacion();
});

duracionSelect.addEventListener("change", function(){
    actualizarCotizacion();
});

estudiantesInput.addEventListener("input", function(){
    actualizarCotizacion();
});
