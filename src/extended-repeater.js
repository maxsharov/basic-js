import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (!options.separator) {
    options.separator = '+'
  }

  let addition = ''

  if (options.addition !== undefined && String(options.addition)) {
    if (!options.additionSeparator) {
      options.additionSeparator = '|'
    }

    addition = Array(options.additionRepeatTimes).fill(String(options.addition)).join(options.additionSeparator)
    if (String(options.addition) === 'null') {
      console.log('addition', addition)
      console.log('hello')
    }
  }
  
  const output = Array(options.repeatTimes).fill(String(str) + String(addition)).join(options.separator)

  

  // for(let i = 0; i < options.repeatTimes; i++) {
  //   outputArr
  // }

  // * `repeatTimes` sets the `number` of repetitions of the `str`;
  // * `separator` is a `string` separating repetitions of the `str`;
  // * `addition` is an additional `string` that will be added to each repetition of the `str`;
  // * `additionRepeatTimes` sets the `number` of repetitions of the `addition`;
  // * `additionSeparator` is a `string` separating repetitions of the `addition`.
  return output
}
