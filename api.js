const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');
const Message=require('./model');

router.post('/addmessage',(req,res) =>{
 
    const message = new Message({
        _id:new mongoose.Types.ObjectId(),
        Name: req.body.Name,
        Email: req.body.Email,
        Subject: req.body.Subject,
        Message: req.body.Message
        
    });

     

   if(mongoose.connection.readyState ==1){
    message.save().then((message)=>{ res.send("message sent") 
        console.log(message)
    }).catch((err)=>{ res.status(500).send("message not sent") 
    console.log(err)});}
    else
    {
        res.status(400).send("Check your connection") 
        console.log("Bad connection")
    }


});

module.exports=router;