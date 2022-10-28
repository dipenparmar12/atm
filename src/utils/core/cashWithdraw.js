/* eslint-disable operator-assignment */
/**
 * logic to withdraw money from an ATM Machine. Consider a hypothetical ATM machine
  which gives you notes of 10, 20, 50, 100, 500 & 1000 in denomination. If I enter 5,550 Rs. It should give me
  5 notes of 1000, 1 note of 500 and 1 note of 50. ATM machines cannot store coins. So, if the input amount is
  something like 1978 then the machine should print “Invalid Amount”.
  
 * @param {Number} amt
 * @param {String} ordering 'DESC'
 * @returns {Array} Arr [ [bankNote, times] , [bankNote, times] ]
 * @example 
    Input: 2340
    Output:
    2 x 1000 = 2000
    3 x 100 = 300
    2 x 20 = 40
    Total = 2340
    
    Input: 7878
    Output: “Invalid Amount”
 */

function cashWithdraw(amt, order = 'DESC') {
  if (amt <= 0 || amt % 10 !== 0) return {} // 'Invalid Amount'
  const banknotes = [1000, 500, 100, 50, 20, 10]
  const output = {}

  while (amt > 0) {
    const note = banknotes.find((bNote) => (amt >= bNote ? bNote : 0))
    output[note] = Math.floor(amt / note)
    amt = amt % note
  }

  return Object.entries(output).sort((a, b) =>
    order === 'DESC' ? b[0] - a[0] : a[0] - b[0],
  )

  // return Object.entries(output)
  // return output
}

export default cashWithdraw
