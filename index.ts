// const assert = require("assert");
import assert = require("assert");
const log = console.log;
import { last } from "lib/last";
import { init } from "lib/init";

/* -------------------------------- */
log(last([1, 2, 3]));
log(init([4, 5, 6]));

// These "asserts" are used for self-checking
// assert.deepEqual(removeAllBefore([1, 2, 3, 4, 5], 3), [3, 4, 5]);
// assert.deepEqual(removeAllBefore([1, 1, 2, 2, 3, 3], 2), [2, 2, 3, 3]);
// assert.deepEqual(removeAllBefore([1, 1, 2, 4, 2, 3, 4], 2), [2, 4, 2, 3, 4]);
// assert.deepEqual(removeAllBefore([1, 1, 5, 6, 7], 2), [1, 1, 5, 6, 7]);
// assert.deepEqual(removeAllBefore([], 0), []);
// assert.deepEqual(removeAllBefore([7, 7, 7, 7, 7, 7, 7, 7, 7], 7), [7, 7, 7, 7, 7, 7, 7, 7, 7]);
