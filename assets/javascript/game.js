
// Variables needed for hangman game
    var gameChoices = ["indigo", "crimson", "violet", "aqua", "beige", "brown", "purple", "yellow", "green", "chartreuse", "gold", "honeydew"];
    var user = document.getElementById("user");
    var guess = document.getElementById("guess");
    var win = document.getElementById("win");
    var lose = document.getElementById("lose");
    var active = document.getElementById("activeWord");
    var cWin = 0;
    var cLose = 0;
    var cGuess = 9;
    var uS = [];
    var activeChar = [];
    var tried = [];
    var userGuess;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = gameChoices[Math.floor(Math.random() * gameChoices.length)];

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

    // Determines which key was pressed.
    userGuess = event.key;

    // Clear startup language
    active.innerHTML = "";

    // Runs on new game / No computer guess
    if (activeChar.length === 0) {

      for (var i = 0; i < computerGuess.length; i++) {

        // convert word to characters array
        activeChar.push(computerGuess.charAt([i]));

        // Runs for length of array
        if (activeChar[i] !== -1) {

        // Display active characters as underscores
        uS.push("_");
        
        }

      }

    }

    active.append(uS.join(" "));

  


    }