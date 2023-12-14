// Obtén el elemento que deseas observar
var miForm = document.querySelector(".form_soli");

// Función de devolución de llamada cuando el elemento está en la vista
function manejarInterseccion(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
          miForm.style.animation = "aparecerDesdeLaIzquierda 1s ease-out forwards";
          return;

        } else {
            console.log("El elemento ya no está en la vista");
        }
    });
}

// Configura el IntersectionObserver
var observer = new IntersectionObserver(manejarInterseccion);

// Observa el elemento
observer.observe(miForm);





// Obtén el elemento que deseas observar
var mititle = document.querySelector(".mision");

// Función de devolución de llamada cuando el elemento está en la vista
function manejarInterTitle(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

          mititle.style.animation = "aparecerDesdeLaIzquierda 1s ease-out forwards";
          return;

        } else {
            console.log("El elemento ya no está en la vista");
        }
    });
}

// Configura el IntersectionObserver
var observer = new IntersectionObserver(manejarInterTitle);

// Observa el elemento
observer.observe(mititle);






// Obtén el elemento que deseas observar
var miElemento = document.querySelector(".title_services");

// Función de devolución de llamada cuando el elemento está en la vista
function manejar(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          miElemento.style.animation = "aparecerDesdeLaIzquierda 1s ease-out forwards";
          return;

        } else {
            console.log("El elemento ya no está en la vista");
        }
    });
}

// Configura el IntersectionObserver
var observer = new IntersectionObserver(manejar);

// Observa el elemento
observer.observe(miElemento);