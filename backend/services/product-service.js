const Product = require('../models/product-model');
class ProductService{
    static async AddProduct(name,description,price,category,sizesAvailable,colorsAvailable,images,stockQuantity){
        try{
            const product=await Product.create({name,description,price,category,sizesAvailable,colorsAvailable,images,stockQuantity});
            console.log(product);
            return product;
        }
        catch(err){
            throw err;
        }
    }

    static async GetAllProducts(){
        try{
            const products = await Product.find({});
            return products;
        }
        catch(err){
            throw err;
        }
    }

    static async ModifyProduct(name,updatedProduct){
        try{
            const product=await Product.findOneAndUpdate({name},updatedProduct,{new:true});
            return product;
    }
    catch(err){
        throw err;
    }
    }
    static async DeleteProduct(name){
        try{
            const product=await Product.findOneAndDelete({name});
        }
        catch(err){
            throw err;
        }
    }
    static async GetProductsByCategory(category){
        try{
            const products=await Product.find({category});
            return products;
        }
        catch(err){
            throw err;
        }
    }
    static async GetNewArrivals(){
        try{
            const products=await Product.find({}).sort({createdAt:-1}).limit(3);    
            return products;
        }
        catch(err){
            throw err;
        }
    }
}
module.exports = ProductService;