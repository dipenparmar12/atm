/*
 * Type check
 * */
const Assertion = {
  isString(x) {
    return Object.prototype.toString.call(x) === '[object String]'
  },
  isObject(x) {
    return Object.prototype.toString.call(x) === '[object Object]'
    //  return typeof x === 'object' && x !== null && !Array.isArray(x)
  },
}

export default Assertion
export const { isString, isObject } = Assertion
