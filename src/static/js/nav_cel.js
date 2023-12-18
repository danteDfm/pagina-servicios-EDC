let pantalla = document.querySelector(".nav_cel");
let navMovil = document.querySelector(".content_nav_cel");
let btn = document.querySelector(".btn_nav");

let comprobacion = true;


btn.addEventListener("click", ()=>{

    if(comprobacion == false){
        console.log("adios");
        document.querySelector("body").style.overflowY = "scroll";
        pantalla.style.transform = "translateX(100%)";
        navMovil.style.transform = "translateX(100%)";

        comprobacion = true;
        return;
    }


    console.log("hola");
    document.querySelector("body").style.overflow = "hidden";

    pantalla.style.transform = "translateX(0%)";
    navMovil.style.transform = "translateX(0%)";
    
    comprobacion = false;


});