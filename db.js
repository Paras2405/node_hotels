const mongoose=require('mongoose')
require('dotenv').config();

//define mongoDB connection url

//const mongoURL=process.env.DBURL_LOCAL
const mongoURL=process.env.DBURL;
mongoose.connect(mongoURL,{//this step initializes connection process
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db=mongoose.connection;
//db=>it is used to handle events and interact with the database
db.on('connected',()=>{
    console.log('Connected to the MongoDB server');
})
db.on('error',(err)=>{
    console.log('MongoDB connection error',err);
})
db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
})
module.exports=db;//export db connection