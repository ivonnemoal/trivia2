const name = document.getElementById("name").value;
const boton = document.getElementById("btn");
const pintar = document.getElementById("p");

boton.addEventListener("click", () => {
  pintar.innerHTML = "!Bienvenida a la trivia"+" "+ name + "¡";
});