const express = require('express');
require('./db/mongoose');
const User = require("./models/user");
const Task = require("./models/tasks");
const { ObjectId } = require('mongodb');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

//automatically parsing incoming json to an object
app.use(express.json());
app.use(userRouter);
app.use(taskRouter); 

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});