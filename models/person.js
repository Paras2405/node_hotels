const mongoose=require('mongoose')
const schema =mongoose.Schema;
//Define Person schema

const personSchema=new schema(//schema types
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number
        },
        work:{
            type:String,
            enum:['chef','waiter','manager'],//user can enter only this values
            required:true
        },
        mobile:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        address:{
            type:String,
        },
        salary:{
            type:Number,
            required:true,

        },

        
    }
);
const Person=mongoose.model('Person',personSchema);
module.exports=Person;