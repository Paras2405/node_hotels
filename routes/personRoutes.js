const express=require('express')
const Person = require('./../models/person');
const router=express.Router()

router.post('/',async(req,res)=>{
    try{
        const data=req.body//assuming the request body contains person data
    const newPerson= new Person(data);//create a new person document using mongoose model

    const response=await newPerson.save()//here saving new person's data is asynchronous 
    console.log('data saved',response)
    res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'})
    }


})
router.get('/',async(req,res)=>{
    try{
const data= await Person.find();
console.log('data saved')
res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'})
    }
})
router.get('/:workType',async(req,res)=>{
    try{
   const workType=req.params.workType;//Extract worlType from URL parameter
   if(workType=='chef'|| workType=='manager'|| workType=='waiter'){
    const response= await Person.find({work:workType});
    console.log('response fetched')
    res.status(200).json(response);

   }
   else{
res.status(404).json({error:'Invalid work type'})
   }

    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'});
    }
})
router.put('/:id',async(req,res)=>{
    try{
    const personId=req.params.id;//Extract the id from Url Parameter
    const updatedPersonData=req.body;//Updated data for the person
    
    const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
        new:true,//Return updated Document
        runValidators:true//Run Mongoose Validation
    })
    
    if(!response){
      return  res.status(404).json({error:'Person not found'})
    }
    console.log('data updated')
    res.status(200).json(response)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server error'})
    }
    })
    router.delete('/:id',async(req,res)=>{
        try{
            const personId=req.params.id;//Extract the id from Url Parameter
            const response=await Person.findByIdAndRemove(personId);
            if(!response){
                return  res.status(404).json({error:'Person not found'})
            }
            console.log('data deleted');
            res.status(200).json({message:'Person-id deleted successfully'});
        }
        catch(err){
            console.log(err)
            res.status(500).json({error:'Internal server error'})
        }
    })
module.exports=router;