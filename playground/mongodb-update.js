const {MongoClient,ObjectID}=require('mongodb');

const url=`mongodb://localhost:27017`;
const dbName='TodoApp';

MongoClient.connect(url,(err,client)=>{
  if(err){
    return console.log('Unable to connect MongoDB Server');
  }
  const db=client.db(dbName);

  db.collection('Todos').findOneAndUpdate({ _id: new ObjectID('5ad5078bf008f754dcc56af2')},{
    $set:{
      completed:true
    }
  },{
      returnOrginal: false
  }).then((result)=>{
    console.log(result);
  });
//client.close();

});
