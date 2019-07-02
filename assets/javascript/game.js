

    // Creating an array for all the computer options
    var computerChoices = "abcdefghijklmnopqrstuvwxyz".split("");

    // Creating variables to hold the number of wins, losses, guesses left and current guesses
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var currentGuess = "";

    // Creating variables that hold references to the places in the HTML where we want to display things
    var directionsText = document.getElementById("directions-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("guessesLeft-text");
    var currentGuessText = document.getElementById("currentGuess-text");
    currentGuessText.textContent = "Your Guesses so Far: ";

    

    // This function is run whenever the user presses a key.



    document.onkeyup = function(event){

    
    
    // Determines which key was pressed.
    var currentGuess = event.key;

    // Randomly chooses an option for the computer from the array. This is the computers choice that the user is trying to guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    


    

    // Setting Conditions
// while(guessesLeft > 0){
    if (currentGuess == computerGuess){
        wins++;
        guessesLeft=8;
        currentGuessText.textContent = "Your Guesses so Far: ";
        console.log("user wins");
        alert("You won! The letter was: " + currentGuess);
        
    } 
        else if (guessesLeft === 0){
            alert("You Lost! Try again.");
            losses++;
            guessesLeft=8;
            currentGuessText.textContent = "Your Guesses so Far: " + "";
        }
        else { 
        guessesLeft -- ;
        console.log("user loses");
    }
 
// }




    // Display the wins and losses
        
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent = "Guesses left: " + guessesLeft;
        currentGuessText.textContent += currentGuess + ', ';


};
    
    
    
    
    
    
    
    
    

