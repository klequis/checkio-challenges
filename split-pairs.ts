import assert = require("assert")
const log = console.log

/** */

function splitPairs(text: string): string[] {
    // your code here
    const a: string[] = text.split('')
    log('a: ', a)
    const b: string[] = a.reduce((prevVal, curVal): string[] => {
      log('prevVal: ', prevVal)
      log('curVal: ', curVal)
      return [prevVal, curVal]
    })
    log(b)
    return [];
}


// These "asserts" are used for self-checking
assert.deepEqual(splitPairs('abcd'), ['ab', 'cd']);
assert.deepEqual(splitPairs('abc'), ['ab', 'c_']);
assert.deepEqual(splitPairs('abcdf'), ['ab', 'cd', 'f_']);
assert.deepEqual(splitPairs('a'), ['a_']);
assert.deepEqual(splitPairs(''), []);