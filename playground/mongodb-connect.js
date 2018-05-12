// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


// var obj=new ObjectID();
// console.log(obj);

const url=`mongodb://localhost:27017`;
const dbName='TodoApp3';

var user={name:'Sudipta',age:23};
var {name}=user;
console.log(name);
MongoClient.connect(url,(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to the MongoDB server');
  const db=client.db(dbName);
  db.collection('Users').insertOne({
    name:'Sudipta Ghosh',
    age:23,
    location:'Dhaka, Bangladesh'
  },(err,result)=>{
    if(err){
      return console.log('Unable to insert Users',err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
  });
  client.close();
});
