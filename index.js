const express=require('express')
const app=express()
app.listen(3000,()=>{
    console.log("server started at port 3000")
})
app.use(express.json())
const cors=require('cors')
app.use(cors({
    origin:'http://localhost:4200',
    credentials:true
}))
const dataservice=require('./services/dataservices')
app.get('/',(req,res)=>{
    res.send("This is a get method")
})
app.post('/addData',(req,res)=>{
    dataservice.addData(req.body.task,req.body.taskid,req.body.currentindex).then(result=>{
      res.status(result.statusCode).json(result)
    })
    
})
app.post('/showData',(req,res)=>{
    todoarray=[]
    dataservice.showData().then(result=>{
      todoarray=result.todolist
      console.log(todoarray)
      i=todoarray.length
      console.log(i)
      res.status(result.statusCode).json(result)
    })  
   
})
app.post('/updateDatabase',(req,res)=>{
    dataservice.updateDatabase(req.body.delement,req.body.delementindex,req.body.selement,req.body.selementindex).then(result=>{
        res.status(result.statusCode).json(result)
      })
}) 