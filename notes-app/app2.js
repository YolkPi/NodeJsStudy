//validator: npm package, check the validation and sanitation of string
var vali = require('validator');
//chalk: npm package, control output collor and style
var chalk1 = require('chalk');
//import vali2 from 'validator';

//console.log(vali.isEmail('ww.s.add@cc.com'));
console.log(chalk1.red.bold.inverse.bgBlue(vali.isEmail('ww.s.add@cc.com')));