// Write a javascript program  to generate a random number and store it in a variable.The program them takes an input from the user to tell them whether the guess was correct,greater or lesser than the original number.100 - (no. of guesses) is the score of the user the program is expected to terminate once the number is guessed.Number should be between 1-100.
let randomNum = Math.floor(Math.random() * 100);
randomNum = Number.parseInt(randomNum);

let chance = 0;
let a;
console.log("GUESS THE NUMBER :)\n" + "-------------\n");
while (a != randomNum) {
  a = prompt("guess the no. between 1 to 100 ");
  a = Number.parseInt(a);
  if (a < 0 || a > 100) {
    console.log("\nEnter a valid no. between 1 to 100.\n");
    chance++;
  } else if (a < randomNum) {
    console.log(
      "\n You have entered a smaller number,enter a BIGGER number.\n"
    );

    chance++;
  } else if (a > randomNum) {
    console.log("\nYou have entered a bigger number,Enter a SMALLER number.\n");
    chance++;
  }
}
chance++;
console.log(
  "\nCongratulations!!!\nYou have guessed the correct number \nYour score is: " +
    (100 - chance) +
    "\nThe number is: " +
    a +
    "\n\n------------------------------------------------------------"
);
console.log("                      PLAY AGAIN");
