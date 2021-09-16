import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let currentLetter = str.charAt(0)

  let newString = ''

  let i = 0

  for (let char of str.split('')) {
    if (char !== currentLetter) {
      newString += (i > 1 ? i : '') + currentLetter
      i = 1
      currentLetter = char
    } else {
      i++
    }
  }

  if (i) {
    newString += (i > 1 ? i : '') + currentLetter
  }

  return newString

}


// npm run test -- test/transform-array.test.js