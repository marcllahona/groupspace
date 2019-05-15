/**
 * Returns a boolean indicating if the string is valid input or not.
 * @param {string} s
 * @returns {boolean}
 */

export function invalidInputString(s) {
  return !s || /^\s*$/.test(s);
}

/**
 * Returns a boolean indicating if the string is valid input or not.
 * @param {Array<string>} inputs
 * @returns {boolean}
 */
export function invalidInputRegistration(inputs) {
  return inputs.some(invalidInputString);
}

/**
 * Returns nested field of an Object if exists, otherwise return undefined.
 * @param {Object} obj The object to query
 * @param {string} chain The path to the field we want to check
 * @return {undefined|*} The field from path or undefined
 */
export function optionalChaining(obj, chain) {
  return chain
      .split('.')
      .reduce(function(acc, val) {
        return acc ? acc[val] : undefined;
      }, obj);
}

/**
 * Gets the first element of `array`.
 *
 * @param {Array} array The array to query.
 * @returns {undefined|*} Returns the first element of `array`.
 */
export function first(array) {
    return (array != null && array.length)
        ? array[0]
        : undefined
}

/**
 * Function that returns initials from user's fullName
 *
 * @param {string} fullName
 * @return {string}
 */
export function userInitials(fullName) {
    if (fullName){
        return fullName.split(" ").map((s) => s[0]).reduce(add, "");
    }
    return  "";
}

/**
 * Function that add to numbers or strings
 *
 * @param {number|string} total
 * @param {number|string} num
 * @return {number|string}
 */
function add(total, num) {
    return total + num;
}
