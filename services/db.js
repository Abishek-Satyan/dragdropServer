const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/DragDropApp',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const Todo=mongoose.model('Todo',{
    Taskid:String,
    Task:String,
    Currentindex:String
})
module.exports={
Todo
}