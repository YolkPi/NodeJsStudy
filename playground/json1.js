const book = {
    title: 'note1',
    author: 'Myself',
    value: 6.33
}

//take a object and return a json string
console.log(JSON.stringify(book));

var jsonStr = JSON.stringify(book);
//parse a obkect from a string in json format
console.log(JSON.parse(jsonStr));

//write the json string to file
var fs = require('fs');
fs.writeFileSync('json1.json', jsonStr);

//read from the file and transiton it to an object
//step1: get serialized data
var databuffer = fs.readFileSync('json1.json');
//step2: transform it to string
var dataJson = databuffer.toString();
//step3: parse it to a object
var book2 = JSON.parse(dataJson);
console.log(book2);
//extract a specific element
console.log(book2.title);
//modify the book2.value and wirte back to the json file
book2.value += 1;
fs.writeFileSync('json1.json', JSON.stringify(book2));
