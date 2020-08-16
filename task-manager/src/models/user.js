const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
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

//middlerWare area, when save() is called,this will be executed before save()
userSchema.pre('save', async function (next) {
    //get the current user
    const user = this;

    //only rehash when the password is modified
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8);
    }

    //call next() continue do the rest tings
    next();
})

const User = mongoose.model('User',userSchema);

module.exports = User;