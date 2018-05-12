const MongoClient=require('mongodb').MongoClient;

const url=`mongodb://localhost:27017`;
const dbName='TodoApp3';
MongoClient.connect(url,(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to the MongoDB server');
  const db=client.db(dbName);
  db.collection('Toods').insertOne({
    text:'New Edition',
    completed:true
  },(err,result)=>{
    if(err){
      return console.log('Unable to insert todo',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });
  client.close();
});
