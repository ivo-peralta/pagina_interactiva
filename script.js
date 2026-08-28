const buscador = document.getElementById("buscador");
const animales = document.querySelectorAll(".animal");
const contador = document.getElementById("contador");
const mensaje = document.getElementById("mensaje");

buscador.addEventListener("input", buscarAnimal);

function buscarAnimal() {

    let texto = buscador.value.toLowerCase();
    let cantidad = 0;

    animales.forEach(function(animal) {

        let nombre = animal.querySelector("h3").textContent.toLowerCase();

        if (nombre.includes(texto)) {
            animal.style.display = "block";
            cantidad++;
        } else {
            animal.style.display = "none";
        }

    });

    contador.textContent = cantidad + 
        (cantidad == 1 ? " especie" : " especies");

    if (cantidad == 0) {
        mensaje.textContent = "No encontramos ese animal";
    } else {
        mensaje.textContent = "";
    }
}