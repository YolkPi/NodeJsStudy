const express = require('express');
const User = require('../models/user');
const { update } = require('../models/user');
const router = new express.Router();

//automatically parsing incoming json to an object
//app.use(express.json());

router.post('/users', (req, res) => {
    const user = new User(req.body);

    user.save().then(() => {
        console.log('new user added');
        res.send(user);
    }).catch((error) => {
        console.log('ERROR: ' + error);
        //set response status
        res.status(400);
        res.send(error);
    })
})

router.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users);
    }
    ).catch(
        (error) => {
            res.status(500).send();
        }
    );
});

router.get('/users/:id', (req, res) => {
    const _id = req.params.id;

    User.findById(_id).then((user) => {
        if(!user) {
            return res.status(404).send();
        }
        
        res.send(user);
    }
    ).catch(
        (error) => {
            res.status(500).send();
        }
    );
});

router.patch('/users/:id', async (req, res) => {
    //updates: all keys in the request body. We do not use it, just
    //to study how to get req.body and keys
    const updates = Object.keys(req.body);

    try {
        const user = await User.findById(req.params.id);

        updates.forEach((update) => user[update] = req.body[update]);

        await user.save();

        // //{new: true} means that we want updated user be returned but not the old one
        // const user = await User.findByIdAndUpdate(req.params.id
        //     , req.body, {new: true, runValidators: true});

        if(!user){
            return res.status(404).send();
        }

        console.log(user);

        res.send(user);
    } catch (e) {
        return res.status(500).send();
    }
});

router.delete('/users/:id', 
    async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);

            if(!user){
                return res.status(404).send();
            }

            res.status(200).send(user);
        } catch (e) {
            res.status(500).send();
        }
    }
);

module.exports = router;