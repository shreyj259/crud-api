const express=require('express');
const app=express();
const tasks=require('./routes/tasks')
const connectDb=require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware= require('./middleware/error-handler')
require('dotenv').config()

const port=3000

app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const start=async()=>{
    try{
        await connectDb(process.env.MONGO_URL)
        app.listen(port,()=>{
            console.log("Server is listening to port 3000")
        })
    }catch(err){
        console.log(console.err);
    }
}


start()