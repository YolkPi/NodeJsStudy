// setTimeout(
//     () => {
//         console.log('bibiibi');
//     }
//     , 2000);

//     const geocode = function(address, callback){

//     }

const waitAndMul = function(num1, num2, callback){
    setTimeout(
        () =>{
            const data = num1 * num2;
            callback(data);
        }
        , 2000);
}

waitAndMul(3, 5, (data) => {
    console.log(data);
});