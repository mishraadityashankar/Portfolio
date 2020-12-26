const express =require('express');
const app=express();
const message_api=require('./api');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const path= require('path');

const db= process.env.MONGOLAB_URI ;
// const db= "mongodb+srv://aditya:Sriganesh@3@cluster0.qqmtq.mongodb.net/Portfolio?retryWrites=true&w=majority";


// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({
    extended: false
 }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "../client/build")));
// /*React root*/
// app.get("*", (req, res) => {
// res.sendFile(path.join(__dirname + "../client/build/index.html"));
// });

app.use('/',message_api);




if(process.env.NODE_ENV === 'production'){
app.use(express.static(path.join(__dirname,'client','build')));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname,'client', 'build','index.html'));
  });
}


mongoose.Promise=global.Promise;
mongoose.connect(db, { useNewUrlParser: true , useUnifiedTopology: true},function(err){
  if(err){
  	console.error("error! "+err);
  }
});

const port = process.env.PORT || 3050 ;
app.listen(port, () => {
    console.log(`Running on port ${port}`);
  });