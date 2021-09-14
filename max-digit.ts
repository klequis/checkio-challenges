import assert = require("assert")
const log = console.log

/** */

function maxDigit(value: number): number {
    // your code here
    const a = value.toString().split('')
    const b: number[] = a.map(x => Number(x))
    return Math.max(...b)
}



// These "asserts" are used for self-checking
assert.equal(maxDigit(0), 0);
assert.equal(maxDigit(52), 5);
assert.equal(maxDigit(634), 6);
assert.equal(maxDigit(1), 1);
assert.equal(maxDigit(10000), 1);