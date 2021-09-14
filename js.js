const assert = require("assert")
const log = console.log

/* -------------------------------- */

const last = val => val.slice(val.length - 1)
const getPrevLast = val => last(val)
// const replaceLast = arr => 
const addLetter = (preVal, curVal) => {
  const a = getPrevLast(preVal)
  const b = a.length === 1 ? `${a}${curVal}` : a

}


const add_ = (arr) => {
  log('text', text)
  log('idx', idx)

  // if (value.length === 1) {
  //   if (text.length === idx-1) {

  //   }
  // }
  const a = last(arr)
  const b = a.lenght === 2 ? a : add_(a)
  log('b: ', b)

  
  return value
}

/*
   1. convert text: string to string[]
   2. if prevVal.length === 0 return ['curVal']
   3. a = getPrevLast(val)
   4. 
   1. get the last value of prevVal
   2. if it's length === 1 & curVal

*/

function splitPairs(text) {
    // your code here
    log('text: ', text)
    const a = text.split('')
    // log('a', a)
    const b = a.reduce((prevVal, curVal, idx) => {
      log('curVal', curVal)
      log('prevVal', prevVal)
      if (prevVal.length === 0) {
        
        const r1 = [curVal]
        
        // log('r1: ', r1)
        return r1
      }
      const len = prevVal.length
      const lastEl = prevVal[len - 1]
      if (lastEl.length === 1) {
        const m = `${lastEl}${curVal}`
        const n = last(prevVal)// .slice(0, prevVal.length - 1)
        const r2 = [...n, m]
        // log('r2: ', r2)
        return r2
      }
      if (curVal.length === 1 && idx + 1 === text.length) {
        return [...prevVal, `${curVal}_`]
      }
      const r3 = [...prevVal, curVal]
      // log('r3: ', r3)
      return r3

    }, [])
    log('bb', b)
    return add_(b)
}


splitPairs('abcd')
splitPairs('abc')
splitPairs('abcdf')
splitPairs('a')
splitPairs('')

// const zz = [1, 2, 3, 4]
// log(zz.slice(0, zz.length-1 ))
// log('***', splitPairs('abcd'))
// assert.deepEqual(splitPairs('abcd'), ['ab', 'cd']);
// assert.deepEqual(splitPairs('abc'), ['ab', 'c_']);
// assert.deepEqual(splitPairs('abcdf'), ['ab', 'cd', 'f_']);
// assert.deepEqual(splitPairs('a'), ['a_']);
// assert.deepEqual(splitPairs(''), []);