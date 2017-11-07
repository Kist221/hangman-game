
// Variables needed for hangman game
    var gameChoices = ["indigo", "crimson", "violet", "aqua", "beige", "brown", "purple", "yellow", "green", "chartreuse", "gold", "honeydew"];
    var user = document.getElementById("user");
    var guess = document.getElementById("guess");
    var win = document.getElementById("win");
    var lose = document.getElementById("lose");
    var cWin = 0;
    var cLose = 0;
    var cGuess = 9;
    var tried = [];

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = gameChoices[Math.floor(Math.random() * gameChoices.length)];

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) 
    {

    // Determines which key was pressed.
    var userGuess = event.key;

    }


// Display computer random gameChoice as blanks


// Collect userInput into array and check against words (use .charAt[?])


// Fill in inputs into blanks
