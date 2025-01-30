// Paso1: Configuración inicial del juego

// Declaramos Variables
let numberSecret = Math.floor(Math.random()*10)+1;  // Nro aleatorio del 1 al 10
let attempts = 3;   // Nro de intentos
let guessed = false; // Bolean si el jugador ha adivinado o no el nro.

// Elementos de la interfaz
const numberInput = document.getElementById("numberInput");
const guessBtn = document.getElementById("guessBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");
const textAttempts = document.getElementById("attempts");

// Actualizar los intentos restantes
textAttempts.textContent = `Intentos restantes: ${attempts}`;

// Paso2: Funcionalidad del botón "Adivinar"

guessBtn.addEventListener("click", () => {
    if (guessed || attempts === 0) return; // If the game is over, do nothing
    
    // Obtener el nro. ingresado por el jugador
    const numberEntered = parseInt(numberInput.value);

    // Validar que el número esté en el rango correcto
    if (isNaN(numberEntered) || numberEntered < 1 || numberEntered > 10) {
        message.textContent = "Por favor, ingresa un número válido entre 1 y 10!";
        message.style.color = "purple";
        return;
    }

    // Compare the guessed number with the secret number
    if (numberEntered === numberSecret) {
        message.textContent = "Felicidades! Adivinaste el número secreto!";
        message.style.color = "green";
        guessed = true;
    } else {
        attempts--;
        textAttempts.textContent = `Intentos restantes: ${attempts}`;
        if (attempts === 0) {
            message.textContent = `Te quedaste sin intentos! El número secreto era ${numberSecret}.`;
            message.style.color = "red";
        } else {
            message.textContent = `Incorrecto. El número secreto es ${numberEntered < numberSecret ? "Mayor" : "Menor"}.`;
            message.style.color = "orange";
        }
    }

    // Clear the input field
    numberInput.value = "";


});
































