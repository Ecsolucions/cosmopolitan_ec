document.addEventListener("DOMContentLoaded", function () {
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
  window.onscroll = function () {
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

// Obtener los elementos de los logos
var logos = document.querySelectorAll('.logo');

// Agregar event listener a cada logo
logos.forEach(function (logo) {
  logo.addEventListener('click', function () {
    // Al hacer clic en el logo, abrir el modal
    var modal = document.getElementById('miModal');
    modal.style.display = "block";
  });
});

// Obtener las casillas del tablero
const casillas = document.querySelectorAll('.casilla');

// Array para realizar un seguimiento de las jugadas
let juego = [];

// Función para actualizar el estado del juego
function actualizarJuego() {
  // Lógica para verificar si hay un ganador o un empate
  // Puedes implementar tu propia lógica aquí

  // Ejemplo de lógica para verificar si hay un ganador
  const combinacionesGanador = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6] // Diagonales
  ];

  const jugadorGanador = combinacionesGanador.find(combinacion => {
    const [a, b, c] = combinacion;
    return juego[a] && juego[a] === juego[b] && juego[a] === juego[c];
  });

  if (jugadorGanador) {
    alert(`¡El jugador ${juego[jugadorGanador[0]]} ha ganado!`);
    reiniciarJuego();
  } else if (juego.length === 9) {
    alert('¡Empate!');
    reiniciarJuego();
  }
}

// Función para reiniciar el juego
function reiniciarJuego() {
  juego = [];
  casillas.forEach(casilla => {
    casilla.textContent = '';
    casilla.addEventListener('click', () => {
      if (!casilla.textContent) {
        casilla.textContent = 'X';
        juego.push('X');
        actualizarJuego();
      }
    });
  });
}

// Iniciar el juego
reiniciarJuego();

// Event listener para abrir el modal al hacer clic en el logo
document.getElementById('logo1').addEventListener('click', function() {
  var modal = document.getElementById('miModal');
  modal.style.display = "block";
});

// Event listener para cerrar el modal al hacer clic en la "x"
document.querySelector('.close').addEventListener('click', function() {
  var modal = document.getElementById('miModal');
  modal.style.display = "none";
});



// Script para el slider de imagenes
let slideIndex = 1;
showSlides(slideIndex);
// Script para el alert
+    // Function to display a thank you alert and reset a form.
  +    // Returns false to prevent the form from submitting.
  function myFunction() {
    alert("¡Gracias por tu compra!");
    document.getElementById("myForm").reset();
    return false;

  }
// Asociar el evento de clic al botón de envío
document.getElementById("submit").addEventListener("click", validarFormulario);

function validarFormulario() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === '' || password === '') {
    alert('Por favor ingresa un nombre de usuario y contraseña.');
    return false;
  }
  // Aquí podrías enviar los datos al servidor
}



