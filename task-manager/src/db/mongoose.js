const mongoose = require('mongoose');
const validator = require('validator');

const connectionURL = 'mongodb://127.0.0.1:27017';

/**
 * connectionURL: mongodb url
 * '/task-manager-api': name of the database to be connected
 */
mongoose.connect(connectionURL + '/task-manager-api', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
});

/**
 * creating a mongoose model
 */

 const Task = mongoose.model('Task',{
    description: {
        type: String,
        required: true,
        trim: true,
        //validator: check if the value of this field is content the requirment in the validate
        validate(value){
            if(value.length < 10){
                throw new Error('length of description must great than 10 characters')
            }
        }
    },
    completed: {
        type: Boolean,
        default: false
    }
 });

 const task = new Task(
    {
        description: 'Remembe222',
        completed: false
    }
 );

 task.save().then(
     () => {
         console.log(task);
     }
 ).catch(
    (error) => {
        console.log(error);
    }
 );

const User = mongoose.model('User', {
    name:{
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        //automatically transform to lowercase
        lowercase: true,
        trim: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('invalid Email');
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value){
            if(value.includes('password')) {
                throw new Error('Password cannot contain "password"');
            }
        }
    },
    age: {
        type: Number,
        default: 0
    }
});

const me = new User({
    name: 'Chenchen2',
    email: 'CCddC@xinxn.com',
    password: 'love1234',
    age: 23
});

// me.save().then(() => {
//     console.log('success');
// }).catch((error) => {
//     console.log(error);
// });