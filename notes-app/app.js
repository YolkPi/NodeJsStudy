//get model
const myFs = require('fs');

myFs.appendFileSync('notes.txt', '\nßAdAAThis file was created');

const myFs2 = require('./util.js')

var res = myFs2('sdsad');

console.log(res);