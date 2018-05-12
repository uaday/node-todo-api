const {MongoClient,ObjectID}=require('mongodb');

const url='mongodb://localhost:27017';
const dbName='TodoApp';

MongoClient.connect(url,(err,client)=>{
  if (err) {
    return console.log('Unable to connect MongoDB Server');
  }
  console.log('Connected to MongoDB server');
  const db=client.db(dbName);

db.collection('Todos').find({completed:false}).count().then((count)=>{
  console.log(`Todos count: ${count}`);
},(err)=>{
  if (err) {
    console.log('Unable to fetch todos',err);
  }
});
//
// db.collection('Todos').find({$and: [{completed:false},{_id: new ObjectID('5abab042f2098c25c4812cbb')}]}).toArray().then((docs)=>{
//   console.log('Todos');
//   console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//   if (err) {
//     console.log('Unable to fetch todos',err);
//   }
// });


  client.close();
});
