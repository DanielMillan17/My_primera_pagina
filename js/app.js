//Primera actividad de entrega
//Generar una pagina web que se va a componer de , html, css y js
//inicio: header, footer: escribir el nombre <h1> y una breve descripción <p>
// boton de input: Adivina mi numero favorito, si adivino poner excelente adivinaste si no poner si es mas alto o mas bajo el numero  <p>
//selector: mostrar sus pasiones (lo que le gusta) Futbol: Real Madrid que cntenga una foto de acuerdo a lo que seleccione
//boton: comentario que le quieran hacer al profesor y que se muestre en un alert

const favorite = document.getElementById("favorite");
const resultado = document.getElementById("resultado");

favorite.addEventListener("input", function () {

    let valor = Number(favorite.value);

    if (valor >= 18) {
        resultado.textContent = "Intenta de nuevo con un número menor ";
    } else if (valor === 17) {
        resultado.textContent = "Excelente, adivinaste";
    } else {
        resultado.textContent = "Intenta de nuevo con un número mayor";
    }

});

const pasion = document.getElementById("pasion");
const imagen = document.getElementById("imagen");
const texto = document.getElementById("texto");

pasion.addEventListener("change", function () {

    if (pasion.value === "fut") {
        imagen.src = "https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
        texto.textContent = "Mi hobbie favorito es jugar futbol en mis tiempos libres";
    
    }
    else if (pasion.value === "programacion") {
        imagen.src = "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
        texto.textContent = "Mi hobbie favorito es retroalimentar mis conocimientos en programación";
    }
    else if (pasion.value === "dibujo") {
        imagen.src = "https://plus.unsplash.com/premium_photo-1673514503544-1b8c10dd8019?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
        texto.textContent = "Mi hobbie favorito es dibujar cuando veo paisajes o algo que me guste";
    }
    else if (pasion.value === "musica") {
        imagen.src = "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
        texto.textContent = "Me gusta escuchar musica mientras hago el resto de mis hobbies";
    }
    else {
        imagen.src = "";
    }

});


const boton = document.getElementById("boton");

boton.addEventListener("click", function() {
    alert("Poneme a ganar 👍" );
});



