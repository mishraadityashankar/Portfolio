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

     

   
    message.save().then((message)=>{ res.send(message) 
        console.log(message)
    }).catch(err=>console.log('the error is' +err));


});

module.exports=router;