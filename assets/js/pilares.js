var elemento = document.getElementById("pilar1");

// Función para activar la animación hover
function activarHover() {
  elemento.classList.add("areas_full_item");
  elemento.style.transition = '.3s';
  elemento.style.transform = 'scale(1.2)';

  elemento.style.background = 'url(https://ca.res.keymedia.com/files/image/iStock-group-person-happy-work.jpg)';
  elemento.style.backgroundPosition = '50%';
  elemento.style.backgroundRepeat = 'no-repeat';
}

// Función para desactivar la animación hover
function desactivarHover() {
/*   elemento.classList.remove("areas_text_box"); */
  elemento.style.transition = '.3s';
  elemento.style.transform = 'scale(1)';

  elemento.style.background = 'none';
}

// Intervalo de tiempo en milisegundos (ejemplo: cada 3 segundos)
var intervalo = 5000;
var duracionHover = 3000; // Duración de la animación hover en milisegundos (ejemplo: 1 segundo)

// Activar la animación hover cada cierto intervalo de tiempo
var intervaloHover = setInterval(function() {
  activarHover();
  
  // Desactivar la animación hover después de la duración especificada
  setTimeout(function() {
    desactivarHover();
  }, duracionHover);
}, intervalo);
