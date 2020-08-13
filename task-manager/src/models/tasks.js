const mongoose = require('mongoose');
const validator = require('validator');

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

module.exports = Task;