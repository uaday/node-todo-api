const {ObjectID}=require('mongodb');
const {mongoose}= require('./../server/db/mongoose');
const {Todo}= require('./../server/models/todo');

var id ='5ae4e297d4df151db075672b';


if(!ObjectID.isValid(id)){
    console.log('ID not Valid');
}

Todo.find({
    _id:id
}).then((todos)=>{
    console.log('Todos: ', JSON.stringify(todos,undefined,2));
});

Todo.findOne({
    _id:id
}).then((todo)=>{
    console.log('Todo: ', JSON.stringify(todo, undefined, 2));
});


Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log('ID not Found');
        
    }
    console.log('To do by ID: ', JSON.stringify(todo, undefined, 2));
});