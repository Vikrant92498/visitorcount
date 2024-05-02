const express= require('express')
const app=express();
const cors = require('cors');
const PORT = 5000;
const mongoose = require('mongoose');
const db = require('./db');
const visitCounter= require('./models/counter')
app.use(express.json())
app.use(cors());

app.get('/',async(req,res)=>{
    const counter = await visitCounter.findOne({});
    counter.count++;
    await counter.save();
    const visit = counter.count;
    const message = `You are visitor number: ${visit}`;
    res.send(message);
})

app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`)
})  