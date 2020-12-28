// este es un proyecto de una calculadora hecho con el programa javascript.

// se utilizan variables para capturar elementos del DOM y definir cantidades
let pantalla = document.querySelector(".espacio");
let calculadora = document.querySelector(".calculadora");
let vistaPantalla = "";
let contenidoParcial = "";
let contenidoNumerico = 0; 
let ultimaOperacion = null; 

// aquí se construye un escucha para el evennto click en el elemento calculadora
calculadora.addEventListener("click", event => {
    let botonOprimido = event.target, botonPropiedad = botonOprimido.dataset; 
    
    // esta parte del código captura los números y realiza el cálculo de acuerdo a la operación
    if (botonPropiedad.numero) {
        vistaPantalla += botonOprimido.textContent; 
        contenidoParcial += botonOprimido.textContent;
        pantalla.value = vistaPantalla; 
        if (ultimaOperacion!=null & contenidoNumerico != 0) {
            if (ultimaOperacion == "+")  contenidoNumerico += Number(contenidoParcial);
            if (ultimaOperacion == "-")  contenidoNumerico -= Number(contenidoParcial);
            if (ultimaOperacion == "*")  contenidoNumerico *= Number(contenidoParcial);
            if (ultimaOperacion == "/")  Number(contenidoParcial) == 0 ? contenidoNumerico = "Error" : contenidoNumerico /= Number(contenidoParcial);
        } else {contenidoNumerico = Number(contenidoParcial)}
        
    }
    // esta parte del código controla las operaciones
    if (botonPropiedad.operacion) {
        if (botonOprimido.textContent == "+") {
            contenidoParcial = "";
            vistaPantalla += botonOprimido.textContent; 
            pantalla.value = vistaPantalla;
            ultimaOperacion = "+"; 
        }
        if (botonOprimido.textContent == "-") {
            contenidoParcial = "";
            vistaPantalla += botonOprimido.textContent; 
            pantalla.value = vistaPantalla;
            ultimaOperacion = "-"; 
        }
        if (botonOprimido.textContent == "/") {
            contenidoParcial = "";
            vistaPantalla += botonOprimido.textContent; 
            pantalla.value = vistaPantalla; 
            ultimaOperacion = "/"
        }
        if (botonOprimido.textContent == "*") {
            contenidoParcial = "";
            vistaPantalla += botonOprimido.textContent; 
            pantalla.value = vistaPantalla;
            ultimaOperacion = "*" 
        }
    }
    // este código es para mostrar el cálculo general
    if (botonPropiedad.igual) {
        contenidoParcial =  ""; 
        pantalla.value = String(contenidoNumerico); 
    }
    // el operador con la propiedad limpiar, resetea la calculadora
    if (botonPropiedad.limpiar) {
        vistaPantalla = "";
        contenidoParcial = "";
        contenidoNumerico = 0; 
        ultimaOperacion = null;
        pantalla.value = vistaPantalla;  
    }
}); 


