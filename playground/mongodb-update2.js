const { MongoClient, ObjectID } = require('mongodb');

const url = `mongodb://localhost:27017`;
const dbName = 'TodoApp3';

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log('Unable to connect MongoDB Server');
    }
    const db = client.db(dbName);

    db.collection('Users').findOneAndUpdate({ _id: new ObjectID('5ac79f8358815e20a46da5df') }, {
        $set: {
            name: "Sudipta Ghosh"
        },
        $inc:{
            age:1
        }
    }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });
    //client.close();

});
