$(document).ready(function() {
    // Detectar el ancho de la ventana al cargar y redimensionar
    function checkWindowSize() {
      var windowWidth = $(window).width();
      
      if (windowWidth < 860) {
        $('.slider__img').hide();
        $('.slider__img-mobile').show();
      } else {
        $('.slider__img').show();
        $('.slider__img-mobile').hide();
      }
    }
    
    // Verificar el tamaño de la ventana al cargar la página
    checkWindowSize();
    
    // Verificar el tamaño de la ventana al redimensionar
    $(window).resize(function() {
      checkWindowSize();
    });
  });