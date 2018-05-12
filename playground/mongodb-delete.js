const {MongoClient,ObjectID}=require('mongodb');

const url=`mongodb://localhost:27017`;
const dbName='TodoApp';

MongoClient.connect(url,(err,client)=>{
  if(err){
    return console.log('Unable to connect MongoDB Server');
  }
  const db=client.db(dbName);
  //deleteMany
  // db.collection('Todos').deleteMany({text:'Something to do'}).then((result)=>{
  //   console.log(result);
  // });

  //deleteOne

// db.collection('Todos').deleteOne({text:'Somethings to do'}).then((result)=>{
//   console.log(result);
// });



//findOneAndDelete

db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  console.log(result);
});

//client.close();

});
