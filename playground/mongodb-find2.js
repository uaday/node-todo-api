const {MongoClient,ObjectID}=require('mongodb');

const url='mongodb://localhost:27017';
const dbName='TodoApp3';

MongoClient.connect(url,(err,client)=>{
  if (err) {
    return console.log('Unable to connect MongoDB Server');
  }
  console.log('Connected to MongoDB server');
  const db=client.db(dbName);

  db.collection('Users').find({name: 'Sudipta Ghosh'}).toArray().then((data)=>{
    console.log('Data Found');
    console.log(JSON.stringify(data,undefined,2));
  },(err)=>{
    console.log(`Unable to fetch the result form Users: ${err}`);
  });


  client.close();
});
