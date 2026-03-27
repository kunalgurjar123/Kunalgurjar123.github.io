/*
    Number Guessing Game Logic
*/

// Generate random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Maximum attempts allowed
let maxAttempts = 10;
let attemptsLeft = maxAttempts;

function checkGuess() {
    let userGuess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");
    let attemptsDisplay = document.getElementById("attempts");

    // Input validation
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = "⚠️ Please enter a number between 1 and 100!";
        return;
    }

    attemptsLeft--;

    // Check guess
    if (userGuess === randomNumber) {
        message.textContent = "🎉 Correct! You guessed the number!";
        endGame();
    } 
    else if (userGuess > randomNumber) {
        message.textContent = "📉 Too high! Try again.";
    } 
    else {
        message.textContent = "📈 Too low! Try again.";
    }

    // Update attempts
    attemptsDisplay.textContent = "Attempts left: " + attemptsLeft;

    // Check if attempts finished
    if (attemptsLeft === 0 && userGuess !== randomNumber) {
        message.textContent = "❌ Game Over! The number was " + randomNumber;
        endGame();
    }
}

// Disable input after game ends
function endGame() {
    document.getElementById("guessInput").disabled = true;
}

// Restart game
function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = maxAttempts;

    document.getElementById("guessInput").disabled = false;
    document.getElementById("guessInput").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
}
