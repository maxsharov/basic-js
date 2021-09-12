import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1
    if (arr.length === 0) return depth

    let avialableDepths = []

    for(let arrEl of arr) {
      let start = 0
      if(Array.isArray(arrEl)) {
        start += this.calculateDepth(arrEl)
      }
      avialableDepths.push(start)
    }

    return depth + Math.max(...avialableDepths)
  }
}
