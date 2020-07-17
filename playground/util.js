console.log("hELLO");

const name = 'AAAaaa';
const name2 = 'ssdd';

const add = function (a, b) {
    return a + b;
}

const pout = function (str) {
    const myFs = require('fs');
    myFs.appendFileSync('notes.txt', str);
    return 'success';
}

//export a function
module.exports = pout;
//module.exports = name;