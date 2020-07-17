//get model
const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes.js');
const chalk = require('chalk');

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'notes.title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'notes.body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function () {
        // console.log('a new note added')
        // console.log('*title: ' + yargs.argv.title);
        // console.log('*body:' + yargs.argv.body);

        notes.addNote(yargs.argv.title, yargs.argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'remove a note by title',
    builder: {
        title: {
            describe: 'notes.title',
            demandOption: true,
            tpye: 'string'
        }
    },
    handler: function () {
        notes.removeNotes(yargs.argv.title);
    }
});

yargs.parse();