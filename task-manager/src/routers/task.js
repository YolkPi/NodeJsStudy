const express = require('express');
const Task = require("../models/tasks");
const { update } = require('../models/tasks');
const router = new express.Router();

router.post('/tasks', (req, res) => {
    const task = new Task(req.body);

    task.save().then(() => {
        console.log('new task added');
        res.send(task);
    }).catch((error) => {
        console.log('ERROR: ' + error);
        //set response status
        res.status(400);
        res.send(error);
    })
})

router.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        res.send(tasks);
    }
    ).catch(
        (error) => {
            res.status(500).send();
        }
    );
});

router.get('/tasks/:id', (req, res) => {
    const _id = req.params.id;

    Task.findById(_id).then((task) => {
        if(!task) {
            return res.status(404).send();
        }
        
        res.send(task);
    }
    ).catch(
        (error) => {
            res.status(500).send();
        }
    );
});

router.patch('/tasks/:id', 
    async (req, res) => {

        const updates = Object.keys(req.body);

        try {
            const task = await Task.findById(req.params.id);

            updates.forEach((update) => task[update] = req.body[update]);

            await task.save();
            // const task = await Task.findByIdAndUpdate(req.params.id
            //     , req.body, {new: true, runValidators: true});

            if(!task){
                return res.status(404).send();
            }

            console.log(task);

            res.send(task);
        } catch(e) {
            return res.status(500).send();
        }
    }
);

router.delete('/tasks/:id', 
    async (req, res) => {
        try {
            const task = await Task.findByIdAndDelete(req.params.id);

            if(!task){
                return res.status(404).send();
            }

            res.status(200).send(task);
        } catch (e) {
            res.status(500).send();
        }
    }
);

module.exports = router;