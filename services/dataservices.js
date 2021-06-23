const db=require('./db')
const addData=(Task,Taskid,Currentindex)=>{
return db.Todo.findOne({Task}).then(result=>{
   if(result){
       return{
           statusCode:422,
           status:false,
           message:"task already exists"
       }    
   } 
   if(!result){
       const newTodo=new db.Todo({
           Task,
           Taskid,
           Currentindex
       })
       newTodo.save()
       return{
        statusCode:200,
        status:true,
        message:"Todo added"
    } 
   }
})
}
const showData=()=>{ 
    return db.Todo.find().sort({Currentindex:1}).then(result=>{
        return{
            statusCode:200,
            status:true,
            message:"Storing data to array",
            todolist:result
        }
    })

}
const updateDatabase=(delement,delementindex,selement,selementindex)=>{
 return db.Todo.bulkWrite([
  {updateOne : {
    "filter" : { Task : delement },
    "update" : { $set : { Currentindex:delementindex  } }
 } },
 {updateOne : {
    "filter" : { Task : selement },
    "update" : { $set : { Currentindex:selementindex  } }
 } }
 
 ]).then(result=>{
     if(result){
    return{
        statusCode:200,
        status:true,
        message:"Updating database",
        todolist:result
    }
 }
 })
}
module.exports={
    addData,
    showData,
    updateDatabase
}