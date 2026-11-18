function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 1 / 3) {
        return "piedra";
    } else if (randomNumber < 2 / 3) {
        return "papel";
    } else {
        return "tijera";
    }
}

function getHumanChoice() {
    let choice = prompt("Elige: piedra, papel o tijera");

    if (choice === null) {
        return null;
    }
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const human = humanChoice.toLowerCase();
        const computer = computerChoice.toLowerCase();

        if (human === computer) {
            console.log(`¡Empate! Ambos eligieron ${human}.`);
        } else if (
            (human === "piedra" && computer === "tijera") ||
            (human === "papel" && computer === "piedra") ||
            (human === "tijera" && computer === "papel")
        ) {
            console.log(`¡Ganaste! ${human} vence a ${computer}.`);
            humanScore++;
        } else {
            console.log(`¡Perdiste! ${computer} vence a ${human}.`);
            computerScore++;
        }
    }

    for (let i = 1; i <= 5; i++) {
        console.log(`\n--- RONDA ${i} ---`);
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        console.log(`Marcador actual: Tú ${humanScore} - Computadora ${computerScore}`);
    }

    console.log("\n--- FIN DEL JUEGO ---");
    if (humanScore > computerScore) {
        console.log("🏆 ¡Felicidades! Ganaste el juego.");
    } else if (computerScore > humanScore) {
        console.log("💻 La computadora ganó el juego. ¡Inténtalo de nuevo!");
    } else {
        console.log("🤝 El juego terminó en empate.");
    }
}

playGame();