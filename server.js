//var fs=require('fs');
//var os=require('os');//information of the system


/*var data=["people","1",1,"Ajay",2,"2","Arjun","people"];
var filter=a.uniq(data);
console.log(filter)

const notes=require('./notes.js')

var age=notes.age;
console.log(age);
var result=notes.addNumber(age,10);
console.log(result)
console.log('server hanged')
/*

//var user=os.userInfo();//this method of os gives info of the user
//console.log(user);

//fs.appendFile('greeting.txt','Hi'+user.username+'!\n',()=>{console.log('file is created ok')});// creates a file 
//fs.appendFile('noobie.txt','hi Paras are you friend of'+user.username+'?',()=>{console.log('yippee')})

*/
/*const jsonString='{"name":"Paras","age":19,"City":"New york"}';
const jsonObject=JSON.parse(jsonString)                             //JSON string=>object
console.log(jsonObject)*/

/*const jsonObject={
    name:"Alice",
    age:23
};
const json=JSON.stringify(jsonObject)
console.log(json)*/      //JSON object=>string

//Endpoints: it is the limited info that a server has
//Eg->Menu is api while menu-items are endpoints and waiter is server
//express js: it is a framework used to create a server
//localhost=>own computer
//There are various apps running in our computer that is running on localhost to specify which page we
//have to run we have to use a specific port number 


//server

//client requests data from server
//server responds to the request
//There are lots of methods to send receive data
//GET//POST//PATCH//DELETE  //HTTP methods in rest api


const express=require('express')//server imported from express library
const app=express()//app created
const db=require('./db');
const bodyParser=require('body-parser');
app.use(bodyParser.json());//body parser accepts data from user in all forms and converts data into json 
require('dotenv').config();
const PORT= process.env.PORT;


const personRoutes=require('./routes/personRoutes')
const menuRoutes=require('./routes/menuRoutes')
app.use('/person',personRoutes)
app.use('/menu',menuRoutes)




app.get('/',function(req,res){
    res.send('Welcome to my hotel')//response send by the waiter //server   /=>is the menu
})





app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})

//Database:chef which has knowledge of each and every item
//node.js server and  database server are seperate but work together to create 
//dynamic web-apps