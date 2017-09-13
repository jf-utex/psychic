var guesses = 10;
var wins = 0;
var losses = 0;
var computer = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//GENERATES RANDOM COMPUTER CHOICE FOR USER GUESSING//
var compChoice = computer[Math.floor(Math.random() * computer.length)];

document.onkeyup = function(event) {
  //CHANGES ALL CHARACTERS TO LOWER CASE//
  var userChoice = String.fromCharCode(event.keyCode).toLowerCase();


  console.log(compChoice);
  console.log(userChoice);
  console.log(guesses);
  if (userChoice === compChoice) {

    wins++;
    // console.log(wins);
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    reset();
    document.querySelector("#letters-guessed").innerHTML = " ";



  } else {
    guesses--;
    document.querySelector("#guesses-left").innerHTML = "Guesses left: " + guesses;
    document.querySelector("#letters-guessed").append(" " + userChoice);
    // console.log(guesses);


  };

  if (guesses === 0) {
    losses++;
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
    document.querySelector("#letters-guessed").innerHTML = " ";
    // console.log(losses);
    reset();
  };
};

function reset() {
  guesses = 10;
  document.querySelector("#compChoice").innerHTML = "The computer choice for that round was: " + compChoice;
  compChoice = computer[Math.floor(Math.random() * computer.length)];
};
