const productService = require('../services/product-service');
exports.AddProduct = async (req, res) => {
    try {
        const { name, description, price, category, sizesAvailable, colorsAvailable, images, stockQuantity } = req.body;
        const product = await productService.AddProduct(name, description, price, category, sizesAvailable, colorsAvailable, images, stockQuantity);
        return res.status(200).json({ product });
    } catch (err) {
        return res.status(500).json({ err });
    }
}
exports.GetAllProducts = async (req, res) => {
    try {
        const products = await productService.GetAllProducts();
        return res.status(200).json({ products });
    } catch (err) {
        return res.status(500).json({ err });
    }
}
exports.ModifyProduct = async (req, res) => {
    try {
        const { name } = req.params;
        const updatedProduct = req.body;
        const product = await productService.ModifyProduct(name, updatedProduct);
        return res.status(200).json({ product });
    } catch (err) {
        return res.status(500).json({ err });
    }
}
exports.Deleteproduct =async (req,res)=>{
    try{
        const {name}=req.params;
        const product=await productService.DeleteProduct(name);
        return res.status(200).json({product});
    }
    catch(err){
        return res.status(500).json({err});
    }
}
exports.GetProductsByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const products = await productService.GetProductsByCategory(category);
        return res.status(200).json({ products });
    } catch (err) {
        return res.status(500).json({ err });
    }
}
exports.GetNewArrivals = async (req, res) => {
    try {
        const products = await productService.GetNewArrivals();
        return res.status(200).json({ products });
    } catch (err) {
        return res.status(500).json({ err });
    }
}