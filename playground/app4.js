const yargs1 = require('yargs');
//const yargs = require('yargs');
const { argv } = require('yargs');
//const {argv} = require('yargs');
var name = 'none';

//create a customized command
yargs1.command({
    command: 'setName',
    describle: 'set user name',
    builder: {
        title: {
            describe: 'add new name'
        }
    },
    handler: function(argv) {
        console.log('name setted', argv);
        name = yargs.argv.name;
    }
});

//create a customized command
yargs1.command({
    command: 'setAge',
    describle: 'set user age',

    builder: {
        //title: the name of the argument that needed by command 'setAge'
        title: {
            describe: 'set age',
            //demandOption: whether it's required or not
            demandOption: true,
            //specify the type of the parameter we need
            type: 'string'
        },
        body: {
            describe: 'set age 2',
            demandOption: true,
        }
    },

    handler: function() {
        //console.log('name setted');
        //name = yargs.argv.name;
        console.log('setAge worked', argv);
    }
});

yargs1.version('1.2.0');

//we have to let yards parse arguments at first. To do it, we can
    //1: use console.log(yargs1.argv); 
    //Or 2: use yargs.parse()
//console.log(yargs1.argv);
yargs1.parse();

console.log(name);