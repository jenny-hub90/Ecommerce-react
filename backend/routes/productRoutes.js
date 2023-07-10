import express from "express";
const router = express.Router();
import asyncHandler from "../middleware/asyncHandler.js";
import Product from '../models/productModel.js';

router.get('/',asyncHandler(async (req,res)=>{
    const product = await Product .find({});
    if(product){
       return res.json(product);
    }
    res.status(404).json({message:'Product not found'})
}));

router.get('/:id',asyncHandler(async (req,res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
}));

export default router;