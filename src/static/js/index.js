let nav = document.querySelector("nav");


    // Agrega un evento de scroll al documento
    window.addEventListener('scroll', function() {
        // Verifica la posición del scroll
        if (window.scrollY > 0) {
          // Cambia el color del fondo cuando el scroll está por encima de la posición 0
          nav.style.backgroundColor = '#1b3358'; /* Cambia al color deseado */
        } else {
          // Restaura el color inicial cuando el scroll está en la posición 0
          nav.style.backgroundColor = '#0c111b00'; /* Cambia al color inicial */
        }
      });
  


  