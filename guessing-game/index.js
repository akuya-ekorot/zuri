import * as readline from "readline"; //readline allows us to get input from user.
import createRange from "./lib/createRange.js"; //function to create range of numbers

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let end = 2; //initial end of guessing range of 2
let range = createRange(1, end); //store the range of numbers in an array called range
let points = 0; //set initial player points to 0

console.log(
  `Welcome to the guessing game 🤔.
Let's start by knowing each other.
My name is Guessy 👋.`); //welcome message

//ask for user's name and explain the rules of the game.
rl.question("What's your name? ", (name) => {
  console.log(
    `Welcome ${name} 😃. 
The game is simple.
I'm going to pick a random number between a range.
You have to guess what the number is. That simple.
Let's play ${name}!`);

  //randomly pick a number from range and ask user to input their guess
  checkGuess(range, name);
});


/**
 * Randomly picks a number from the range provided and asks the user to guess what number it is.
 * If the user guesses it right, it increases the range by one and continues with the game.
 * If the user guesses it wrong, it prompts them to give another try.
 *
 * @param {Array} range
 */
export default function checkGuess(range, name) {
  let random = range[Math.floor(Math.random() * range.length)];

  rl.question(
    `Guess a number between 1 and ${end} (type 0 to exit the game): \n`,
    (answer) => {
      answer = parseInt(answer); // parse the string input to an number
      if (answer == random) {
        points += 1; //update player's points.
        console.log(
          `You guessed right! 🥳 Your score stands at ${points}.
Let's do that again. The guessing range just increased by 1`);
        end += 1; // update end
        range = createRange(1, end); // update range
        checkGuess(range, name);
      } else if (answer != 0 && answer <= end) {
        console.log("So close! The guess wasn't right 😞. Try again?");
        checkGuess(range, name);
      } else if (answer == 0) {
        console.log(`Thanks for playing ${name}. You final score is ${points} points. 😃`);
        process.exit(0);
      } else {
        console.log(`⛔ Whoa! Guess too big!!`);
        checkGuess(range, name)
      }
    }
  );
}