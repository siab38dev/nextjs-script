//document.addEventListener("DOMContentLoaded", function () {
let buttonElement = document.querySelector(".button");

// Crea un elemento de botón
let newButton = document.createElement("button");
newButton.textContent = "Nuevo Botón"; // Texto del botón

// Agrega un manejador de eventos al botón
newButton.addEventListener("click", function () {
  alert("¡Hiciste clic en el botón!");
});

// Agrega el botón como hijo del elemento 'button'
buttonElement.appendChild(newButton);
//});
