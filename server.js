const express =require('express');
const app=express();
const message_api=require('./api');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const path= require('path');

// const db= process.env.MONGOLAB_URI ;
const db= "mongodb://aditya1:aditya3@ds063240.mlab.com:63240/myportfolio";
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({
    extended: false
 }));
app.use(bodyParser.json());

app.use('/',message_api);




// if(process.env.NODE_ENV === 'production'){
// app.use(express.static(path.join(__dirname,'client','build')));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname,'client', 'build','index.html'));
//   });
// }


mongoose.Promise=global.Promise;
mongoose.connect(db, { useNewUrlParser: true },function(err){
  if(err){
  	console.error("error! "+err);
  }
});
 
app.listen(3050, () => {
    console.log('Running on port 3050');
})