const Product = require("../models/Product");
const Categorie = require('../models/Categorie')
// const asyncHandler = require('express-async-handler')

const AddNewProduct = async (req, res) => {
  const newProduct = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
    cat_id: req.body.categorie,
  };

  try {
    const insertProduct = await Product.create(newProduct);
    if (insertProduct) {
      res.status(201).json("new product was added ");
    } else res.json("something wrong");
  } catch (error) {
    throw new Error(error);
  }
};

const DeleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findOneAndDelete({ _id: id });
    res.status(200).json({code: 200, message: 'Product deleted'})
  } catch (error) {
    throw new Error(error)
  }
  

};

const UpdateProduct = async (req, res) =>{
  
}

//get All Product 
// const findAllProduct = asyncHandler(async(req,res)=>{
//       const findAllProduct = await Product.find().populate("Categorie")
//       try {
//         if(findAllProduct) res.json({findAllProduct})
//         else throw new Error("no product found")
//       } catch (error) {
//         throw new Error(error)
//       }

// })


module.exports = {
  AddNewProduct,
  DeleteProduct,
  UpdateProduct,
  // findAllProduct
};
