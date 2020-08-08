//CRUD: create, read, update and delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
//use destrcutre to simplify code
const { MongoClient, ObjectId} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

//we can know the id of the new inserted element/ we can specify the _id
const id = new ObjectId();
console.log(id);

MongoClient.connect(connectionURL, {useNewUrlParser: true}, 
    (error, client) =>{
        if(error){
            return console.log('Database connection failed');
        }

        console.log('Database Connect successful');

        const db = client.db(databaseName);

        /*
        update database
        */
        // const updatePrimise = db.collection('users').updateOne(
        //     {_id: new ObjectId("5f2bb61033cc3f199f9992f3")}
        //     , {
        //         $set:{
        //             greeting: 'I divorced three times!!!'
        //         }
        //     }
        // );

        // updatePrimise.then((result) => {
        //     console.log(result);
        // }).catch(
        //     (error) => {
        //         console.log('error: ' + error);
        //     }
        // );

        // db.collection('users').updateOne(
        //     {_id: new ObjectId("5f2bb61033cc3f199f9992f3")}
        //     , {
        //         $set:{
        //             greeting: 'I divorced three times!'
        //         }
        //     }
        // ).then((result) => {
        //     console.log(result);
        // }).catch(
        //     (error) => {
        //         console.log('error: ' + error);
        //     }
        // );

        /*
        delete element in database
        */
       db.collection('users').deleteMany({
           name: "Joey"
       })
       .then((result) => {
           console.log(result);
       })
       .catch(
            (error) => {
                console.log(error);
            }
       );



        // const taskId = new ObjectId("5f2bba741677be1a375ed8b3");
        // db.collection('tasks').findOne({_id: taskId}, 
        //     (error, task) => {
        //         if(error) return console.log(error);
        //         console.log(task);
        //     }
        // );

        // db.collection('tasks').find({completed: false}).toArray(
        //     (error, tasks) => {
        //         console.log(tasks);
        //     }
        // );

        /*
        find a single element
        */
        // db.collection('users').findOne({_id: new ObjectId("5f2bb004c849b518ad06f271")}, (error, user) => {
        //     if(error){
        //         return console.log('Unable to fetch');
        //     }

        //     console.log(user);
        // });

        /*
        find multiple elements that content the query
        */
        // db.collection('users').find({age: 31}).toArray(
        //     (error, users) => {
        //         console.log(users);
        //     }
        // );
        /*
        count the number
        */
        // db.collection('users').find({age: 31}).count(
        //     (error, count) => {
        //         console.log(count);
        //     }
        // );


        // db.collection('users').insertOne({
        //     _id: id,
        //     name: 'Rachel',
        //     age: 31,
        //     greeting: 'What\'s up!'
        // }
        // , (error, result) => {
        //     if(error){
        //         return console.log('insert element failed');
        //     }

        //     console.log(result.ops);
        // });

        // db.collection('users').insertMany([
        //     {
        //         name: 'Joey',
        //         age: 31,
        //         greeting: 'How you doing~'
        //     },
        //     {
        //         name: 'Ross',
        //         age: 30,
        //         greeting: 'I divorced three times!'
        //     }
        // ]
        // , (error, result) => {
        //     if(error){
        //         return console.log('insert element failed');
        //     }

        //     console.log(result.ops);
        // });

        // db.collection('tasks ').insertMany([
        //     {
        //         description: 'bake some cookie',
        //         completed: false
        //     },
        //     {
        //         description: 'buy condum',
        //         completed: false
        //     },
        //     {
        //         description: 'buy jelly',
        //         completed: true
        //     }
        // ]
        // , (error, result) => {
        //     if(error){
        //         return console.log('insert element failed');
        //     }

        //     console.log(result.ops);
        // });
});