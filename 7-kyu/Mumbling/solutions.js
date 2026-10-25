/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.


*/

//solution

describe("accum", function() {
    const chai = require('chai'), { assert } = chai;
    chai.config.truncateThreshold = 0;

    function doTest(input, expected) {
        const message = `for s = ${JSON.stringify(input)}\n`;
        const actual = accum(input);
        assert.strictEqual(actual, expected, message);
    }
})