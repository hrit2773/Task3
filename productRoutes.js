const express = require('express');
const Product =require('./productsModel.js')
const router = express.Router();

router.post('/',async (req,res)=>{
    try{
        const {name,price,quantity}=req.body
        const newTask=new Product({name,price,quantity})
        await newTask.save()
        const products= await Product.find()
        res.json(products)
    }
    catch (error){
        res.status(500).json([{message:"Could not add product",error}])
    }
})

router.get('/gettotal',async (req,res)=>{
    try{
        const products= await Product.find()
        const totalprice=products.reduce((acc,curr)=>{
            return acc+(curr.price*curr.quantity)
        },0)
        return res.json({total_price:totalprice})
    }
    catch (error){
        res.status(500).json([{message:"Could not find the total",error}])
    }
});

module.exports=router