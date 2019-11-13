const mongoose =require('mongoose');
const Schema=mongoose.Schema;



const messageSchema = new Schema({
       _id:mongoose.Schema.Types.ObjectId,
       Name:{type:String,required:true
        },
       Email:{
           type:String, required:true
       },
       Subject:{
           type:String,required:true
       },
      Message:{
           type:String,required:true
       }
      
       


      

   

});
module.exports=mongoose.model('Message',messageSchema);