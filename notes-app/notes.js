const chalk = require('chalk');
const fs = require('fs');
const { array } = require('yargs');
const { NODATA } = require('dns');

const getNotes = function () {
    return 'your notes';
}

const addNote = function (title, body) {
    //get previous note
    const notes = loadNotes();

    //test code
    //console.log(notes);

    //filter the note with if title = titleInParameter
    // const duplicateArray = notes.filter(function (note){
    //     return note.title === title;
    // });

    // if(duplicateArray.length !== 0){
    //     console.log(chalk.red.bold.bgCyan('title duplicated'));
    //     return;
    // }

    const duplicateNote = notes.find((note) => note.title === title);
    if(duplicateNote){
        console.log(chalk.red.bold.bgCyan('title duplicated'));
        return;
    }

    //add new array
    notes.push({
        title: title,
        body: body
    });

    saveNotes(notes);

    console.log(chalk.bold.bgGreen('a new note added'));
    console.log('*title: ' + title);
    console.log('*body:' + body);
}

const readNote = function (title) {
    const note = loadNotes().find(
        (note) => title === note.title
    )

    if(!note){
        console.log(chalk.bold.redBright('note did not find'));
    }
    else{
        console.log(chalk.bold('title: ') + note.title
        + chalk.bold('   body: ') + note.body);
    }
}

const removeNotes = function (title) {
    const notes = loadNotes();

    var found = false;

    for(var i = 0; i < notes.length; i++){
        if(notes[i].title === title){
            notes.splice(i, 1);
            //fix the coordinate after delete(splice)
            i--;
            found = true;
        }
    }

    if(found){
        saveNotes(notes);
        console.log(chalk.red.bold.bgCyan('delete successful'));
    }
    else{
        console.log(chalk.red.bold.bgCyan('note with title: "' + title + '" is not found'));
    }
}

const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.redBright.bold.bgGreen('All notes:'));

    notes.forEach(element => {
        console.log(chalk.bold('  title: ') + element.title
         + chalk.bold('  body: ') + element.body);
    });
}

const saveNotes = function (notes) {
    const dataJsonString = JSON.stringify(notes);
    //write to file
    fs.writeFileSync('notes.json', dataJsonString);
}

const loadNotes = function () {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJsonString = dataBuffer.toString();
        
        return JSON.parse(dataJsonString);  
    } catch (e) {
        console.log('ERROR: loadNotes failed, return a blank array')
        //return a empty array
        return [];   
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listAllNotes: listNotes,
    readNote: readNote
}