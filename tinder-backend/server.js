 import express from 'express';
 import cors from 'cors';
 import mongoose from 'mongoose';
import Cards from './dbCards.js'
 //App Config
const app=express();
const port=process.env.PORT || 8001;
const connection_url='mongodb+srv://Admin:ux6PuB3xY5r77SWe@cluster0.t59uxlr.mongodb.net/tinderdb?retryWrites=true&w=majority'
 //Middlewares
app.use(express.json());
app.use(cors());
//DB CONFIG
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
 //API ENDPOINTS




 //To get data
 app.get('/',(req,res)=>res.status(200).send("Hello World"));
 
 //To upload data
app.post("/tinder/cards",(req,res)=>{
    const dbCard=req.body;
    Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
});

 //To get data
 app.get("/tinder/cards",(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })
 });




//LISTENER
app.listen(port,()=>console.log(`listening on localhost: ${port}`));