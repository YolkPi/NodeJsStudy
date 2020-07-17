const fs = require('fs');

const getNotes = function () {
    return 'your notes';
}

const addNote = function (title, body) {
    //get previous note
    const notes = loadNotes();

    //test code
    //console.log(notes);

    //filter the note with if title = titleInParameter
    const duplicateArray = notes.filter(function (note){
        return note.title === title;
    });

    if(duplicateArray.length !== 0){
        console.log('title duplicated');
        return;
    }

    //add new array
    notes.push({
        title: title,
        body: body
    });

    saveNotes(notes);

    console.log('a new note added')
    console.log('*title: ' + title);
    console.log('*body:' + body);
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
    addNote: addNote
}