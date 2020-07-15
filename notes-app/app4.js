const yargs1 = require('yargs');
const yargs = require('yargs');
//const {argv} = require('yargs');
var name = 'none';

//create a customized command
yargs1.command({
    command: 'setName',
    describle: 'set user name',
    handler: function() {
        console.log('name setted');
        name = yargs.argv.name;
    }
});

yargs1.version('1.2.0');

console.log(yargs1.argv);

console.log(name);