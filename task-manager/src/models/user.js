const mongoose = require('mongoose');
const validator = require('validator');

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

module.exports = User;