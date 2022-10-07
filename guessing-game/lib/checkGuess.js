import createRange from "./createRange.js"; //function to create range of numbers

/**
 * Randomly picks a number from the range provided and asks the user to guess what number it is.
 * If the user guesses it right, it increases the range by one and continues with the game.
 * If the user guesses it wrong, it prompts them to give another try.
 *
 * @param {Array} range
 * @param {number} end
 * @param {string} name
 * @param {number} points
 * @param {readline.Interface} rl
 */
export default function checkGuess(range, end, name, points, rl) {
  let random = range[Math.floor(Math.random() * range.length)];

  rl.question(
    `Guess a number between 1 and ${end} (type 0 to exit the game): \n`,
    (answer) => {
      answer = parseInt(answer); // parse the string input to an number
      if (answer == random) {
        points += 1; //update player's points.
        console.log(
          `You guessed right! 🥳 Your score stands at ${points}.
Let's do that again. The guessing range just increased by 1\n`);
        end += 1; // update end
        range = createRange(1, end); // update range
        checkGuess(range, end, name, points, rl);
      } else if (answer != 0 && answer <= end) {
        console.log("So close! The guess wasn't right 😞. Try again?\n");
        checkGuess(range, end, name, points, rl);
      } else if (answer == 0) {
        console.log(`Thanks for playing ${name}. You final score is ${points} points. 😃`);
        process.exit(0);
      } else {
        console.log(`⛔ Whoa! Guess not valid!!`);
        checkGuess(range, end, name, points, rl)
      }
    }
  );
}