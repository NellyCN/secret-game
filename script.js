// Paso1: Configuración inicial del juego

// Declaramos Variables
let numberSecret = Math.floor(Math.random()*10)+1;  // Nro aleatorio del 1 al 10
let attempts = 3;   // Nro de intentos
let guessed = false; // Bolean si el jugador ha adivinado o no el nro.

// Elementos de la interfaz
const numberInput = document.getElementById("numberInput"); // Input del nro. a ingresar
const guessBtn = document.getElementById("guessBtn"); // Botón adivinar
const resetBtn = document.getElementById("resetBtn");   // Botón reiniciar
const message = document.getElementById("message"); // Mensaje de respuesta
const textAttempts = document.getElementById("attempts"); // Nro. de intentos restantes

// Actualizar los intentos restantes
textAttempts.textContent = `Intentos restantes: ${attempts}`;

// Paso2: Funcionalidad del botón "Adivinar"

guessBtn.addEventListener("click", () => {
    // Verificar si el juego ha terminado
    if (guessed || attempts === 0) return;
    
    // Obtener el nro. ingresado por el jugador
    const numberEntered = parseInt(numberInput.value);

    // Validar que el número esté en el rango correcto
    if (isNaN(numberEntered) || numberEntered < 1 || numberEntered > 10) {
        message.textContent = "Por favor, ingresa un número válido entre 1 y 10!";
        message.style.color = "purple";
        return;
    }

    // Compare el número ingresado con el número secreto
    if (numberEntered === numberSecret) {
        message.textContent = "Felicidades! Adivinaste el número secreto!";
        message.style.color = "green";
        guessed = true;
    } else {
        
        // Disminuir el nro. de intentos
        attempts--;
        textAttempts.textContent = `Intentos restantes: ${attempts}`;

        // Verificar si el jugador se quedó sin intentos
        if (attempts === 0) {
            message.textContent = `Te quedaste sin intentos! El número secreto era ${numberSecret}.`;
            message.style.color = "red";
        } else {
            // Mostrar un mensaje de pista para el jugador
            message.textContent = `Incorrecto. El número secreto es ${numberEntered < numberSecret ? "Mayor" : "Menor"}.`;
            message.style.color = "orange";
        }
    }

    // Limpiar el input de entrada
    numberInput.value = "";
});
































