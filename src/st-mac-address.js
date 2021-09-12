import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  let validMac = true
  const macParts = n.split('-')

  if (macParts.length !== 6) return false

  for (let part of macParts) {
    part.split('').forEach(val => {
      if (isNaN(Number.parseInt(val, 16))) {
        validMac = false
      }
    })
  }

  return validMac
}
