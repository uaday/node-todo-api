var express=require('express');
var bodyParser=require('body-parser');

var {ObjectID}=require('mongodb');
var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');

var app=express();
const port=process.env.PORT||3000;

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo=new Todo({
        text:req.body.text
    });

    todo.save().then((doc)=>{
        res.status(200).send(doc);
    },(e)=>{
        res.status(400).send(e);
        
    })
});

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.status(200).send({
            result:todos,
            message:'Successfull',
            status:200
        });
    },(e)=>{
        res.status(400).send(e);
    })
},(e)=>{
    res.status(400).send(e);
});




//GET /todos/12345

app.get('/todos/:id',(req,res)=>{
    var id=req.params.id;
    if(!ObjectID.isValid(id)){
        res.status(404).send({});
    }else{
        Todo.findById(id).then((todo)=>{
            if(!todo){
                res.status(404).send({});
            }else{
                res.status(200).send({todo});
            }
        },(e)=>{
            res.status(400).send(e);
        })
    }
},(e)=>{
    res.status(400).send(e);
});

app.delete('/todos/:id',(req,res)=>{
    var id=req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send({});
    }else{
        Todo.findByIdAndRemove(id).then((todo)=>{
            if(!todo){
                return res.status(404).send();
            }
            res.status(200).send({todo});
        },(e)=>{
            res.status(400).send(e);
        });
    }
},(e)=>{
    res.status(400).send(e);
});



app.listen(port,()=>{
    console.log(`Started on port ${port}`);
});


module.exports={app};

// const newTodo=new Todo({
//     text:'Testing Text'
// });

// newTodo.save().then((docs)=>{
//     console.log(JSON.stringify(docs,undefined,2));
// },(e)=>{
//     console.log(`Unable to save new Todo`,e);
    
// });