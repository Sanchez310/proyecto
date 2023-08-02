document.addEventListener('DOMContentLoaded', function() {
    // Evento de clic para mostrar los productos destacados
    var botonProductosDestacados = document.querySelector('#productos button:first-of-type');
    var listaProductosDestacados = document.querySelector('#productos button:first-of-type + br');
  
    botonProductosDestacados.addEventListener('click', function() {
      listaProductosDestacados.style.display = 'block';
    });
  
    // Eventos de clic para los botones de categorías
    var botonesCategorias = document.querySelectorAll('#productos button:not(:first-of-type)');
  
    botonesCategorias.forEach(function(botonCategoria) {
      botonCategoria.addEventListener('click', function() {
        var categoria = botonCategoria.textContent;
        alert('Has hecho clic en la categoría: ' + categoria);
      });
    });
  });
  document.getElementById('login-link').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace recargue la página
  
    document.getElementById('login-form').style.display = 'block';
  });

  // Agregar un evento de clic al enlace "Inicia sesión"
  loginLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que el enlace siga el href '#'

    // Mostrar u ocultar el formulario de inicio de sesión
    if (loginForm.style.display === 'none') {
      loginForm.style.display = 'block';
    } else {
      loginForm.style.display = 'none';
    }
  });
