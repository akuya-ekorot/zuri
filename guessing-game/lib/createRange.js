/**
 * Return an array of numbers from the two parameters provided.
 * eg. if start is 1 and end is 3, the function returns the array [1,2,3]
 *
 * @name createRange
 * @param {number} start
 * @param {number} end
 *
 * @returns {Array} list of numbers.
 */
export default function createRange(start, end) {
  if (start === end) {
    return [start];
  }
  return [start, ...createRange(start + 1, end)];
}