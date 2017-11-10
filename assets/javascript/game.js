
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
        if (activeChar.length === 0)
        {

          // Loop length of word
          for (var i = 0; i < computerGuess.length; i++)
          {

            // convert word to characters array
            activeChar.push(computerGuess.charAt([i]));

            // Runs for length of array
            if (activeChar[i] !== -1)
            {

            // Store active characters as underscores
            uS.push("_");
            
            }

          }

        }



    // Displays individual characters as _ replacing commas with spaces
    active.append(uS.join(" "));   
    
      // Only run if not duplicate input
      if (tried.indexOf(userGuess) === -1)
      {

        // Only store wrong guesses for input list
        if (activeChar.indexOf(userGuess) === -1) {

        // Log user inputs
        tried.push(userGuess);

        // Print Used Letters
        user.innerHTML = tried.join(", ");

        }

            // compare correct values and fill in blanks
            for (var i = 0; i < activeChar.length; i++) {

                  // compare user guess input to current word char index
                  if (userGuess === activeChar[i])
                  {

                    console.log("userGuess = activeChar[i]");

                    // update array with matching input
                    uS[i] = activeChar[i];

                    // write to document
                    active.innerHTML = uS.join(" ");

                  }
                
            }
        
            // if incorrect input 
            if (activeChar.indexOf(userGuess) === -1 && cGuess > 0) 
            {

              console.log("subtract guess count")

              cGuess--;

              guess.innerHTML = cGuess;

            }

        }

      }










