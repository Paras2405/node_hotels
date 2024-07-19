const express=require('express')
const router=express.Router()
const MenuItem =require('./../models/MenuItem')

router.get('/',async(req,res)=>{
    try{
        const dish= await MenuItem.find();
        console.log('data saved')
        res.status(200).json(dish);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'})
    }
})
router.post('/',async(req,res)=>{
try{
    const item=req.body//assuming the request body contains menu data
    const newitem= new MenuItem(item);//create a new person document using mongoose model

    const response=await newitem.save()//here saving newfooditem data is asynchronous 
    console.log('data saved',response)
    res.status(200).json(response);
}
catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'})
}

})
router.get('/:tasteType',async(req,res)=>{
    try{
   const tasteType=req.params.tasteType;//Extract taste from URL parameter
   if(tasteType=='sweet'|| tasteType=='sour'|| tasteType=='spicy'){
    const response= await MenuItem.find({taste:tasteType});
    console.log('response fetched')
    res.status(200).json(response);

   }
   else{
    console.log('error')
res.status(404).json({error:'Invalid taste type'})
   }

    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'});
    }
})
//comment added for testing purpose

module.exports=router;