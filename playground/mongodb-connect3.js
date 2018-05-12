const {MongoClient,ObjectID}=require('mongodb');

const url=`mongodb://localhost:27017`;
const dbName='TodoApp3';

MongoClient.connect(url,(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db=client.db(dbName);
  db.collection('Users2').insertOne({
    name:'Sudipta Ghosh',
    age:23,
    address:'Green Road, Staff Quarter, Dhaka Bangladesh',
    mobile:'+880 1830-697059',
    status:1
  },(err,result)=>{
    if(err){
      return console.log('Unable to insert Users',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });
  client.close();
});
