import * as readline from "readline"; //readline allows us to get input from user.
import checkGuess from "./lib/checkGuess.js";
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
    `\n \nWelcome ${name} 😃. 
The game is simple.
I'm going to pick a random number between a range.
You have to guess what the number is.
If you get it right, you earn a point. If you don't, you get another shot.
That simple.
Let's play ${name}!\n \n`);

  //randomly pick a number from range and ask user to input their guess
  checkGuess(range, end, name, points, rl);
});