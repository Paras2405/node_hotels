const mongoose=require('mongoose')
const schema =mongoose.Schema;
//Define menu schema

const menuSchema=new schema(//schema types
    {
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        is_drink:{
            type:Boolean,
            default:false,
        },
        taste:{
            type:String,
            enum:['sweet','spicy','sour'],
            required:true
        },
        ingredients:{
            type:[String],
            default:[],
            
        },
        num_sales:{
            type:Number,
            default:0,
        },
      

        
    }
);
const MenuItem=mongoose.model('MenuItem',menuSchema);
module.exports=MenuItem;