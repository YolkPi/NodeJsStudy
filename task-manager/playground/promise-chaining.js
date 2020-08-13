require('../src/db/mongoose');
const User = require('../src/models/user');


//ObjectId("5f2e1234b524a8093c7dbb0d")
/**
 * An example of Promise chain.
 * Step1: change the age of user with _id=xxx to 30
 * Step2: count the number of elements with age=23 in the database
 */
// User.findByIdAndUpdate('5f2f2a80c9cbd81852d6553d'
//     ,{age: 30} 
// ).then(
//     (user) => {
//         console.log(user);

//         return User.countDocuments({age: 23});
//     }
// ).then(
//     (result) => {
//         console.log(result);
//     }
// ).catch(
//     (e) => {
//         console.log(e);
//     }
// )

//A async function
const updateAgeAndCount = async (id, age) => {
    const originalCount = await User.countDocuments({age});
    console.log(originalCount);

    const user = await User.findByIdAndUpdate(id
    ,{age});
    console.log(user);

    const newCount = await User.countDocuments({age});
    console.log(newCount);
}

updateAgeAndCount('5f2e1234b524a8093c7dbb0d', 30);