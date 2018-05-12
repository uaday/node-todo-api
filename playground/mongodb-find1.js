// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


// var obj=new ObjectID();
// console.log(obj);

const url=`mongodb://localhost:27017`;
const dbName='TodoApp';

MongoClient.connect(url,(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to the MongoDB server');
  const db=client.db(dbName);
  // db.collection('Todos').find({
  //   _id: new ObjectID('5abaaf8939763f2468c2e03e')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch toods',err);
  // });

  db.collection('Todos').find().count().then((count)=>{
    console.log(`Todos count: ${count}`);
    //console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch toods',err);
  });


  //client.close();
});
