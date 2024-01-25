document.addEventListener("DOMContentLoaded", function() {
  // Inicializa el slider utilizando Slick
  $('.slider').slick({
    autoplay: true, // Habilita el autoplay
    autoplaySpeed: 2000, // Velocidad de cambio de las imágenes en milisegundos
    arrows: true, // Muestra las flechas de navegación
    dots: true // Muestra los puntos de navegación
    // Puedes añadir más opciones según tus necesidades
  });

  // Obtener el encabezado
  var header = document.querySelector("header");

  // Agregar un evento de desplazamiento
  window.onscroll = function() {
    // Obtener la posición actual de desplazamiento
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    // Cambiar el color de fondo del encabezado al hacer scroll
    if (scrollTop > 100) {
      header.style.backgroundColor = "#ffffff"; // Nuevo color de fondo al hacer scroll
    } else {
      header.style.backgroundColor = ""; // Restaurar el color de fondo predeterminado
    }
  };
});