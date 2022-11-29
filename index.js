const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

require("dotenv").config();

const app=express();
const port=process.env.PORT||8080;

app.use(cors());
app.use(express.json());

const uri=process.env.ATLAS_URI;

mongoose.connect(uri,{
    useNewUrlParser:true
})

const connection=mongoose.connection;
connection.once("open",()=>console.log('mongodb connected'));

const articlesRouter=require('./routes/articles');
app.use('/articles',articlesRouter);

app.use("/",(req,res)=>{
    res.json("server started");
})

app.listen(port,()=>{console.log(`listening to port http://localhost:${port}`)})