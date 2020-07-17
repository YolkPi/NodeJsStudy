// const square = function(x){
//     return x * x;
// }

const square = (x) => {
    return x * x;
}

console.log(square(2.3));

//version1:
// const event = {
//     name: 'print by anonymous',
//     print: function(){
//         console.log('prrrrrint');
//     }
// }

//version2:
// const event = {
//     name: 'print by anonymous',
//     print: () => {
//         console.log('prrrrrint');
//     }
// }

//version3:
const event = {
    name: 'print by anonymous',

    nameList: ['Andrew', 'Jen', 'Anna'],

    print(){
        console.log(this.name);

        this.nameList.forEach((singleName) => {
            console.log(singleName + ' ' + this.name);
        });
    }
}

event.print();