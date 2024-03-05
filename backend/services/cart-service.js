const Cart = require('../models/cart-model');
class CartService {
    static async AddProductToCart(userId, productId, quantity) {
        try {
            const cart = await Cart.findOne({ user: userId });
            if (cart) {
                const productIndex = cart.products.findIndex(product => product.product == productId);
                if (productIndex >= 0) {
                    cart.products[productIndex].quantity += quantity;
                }
                else {
                    cart.products.push({ product: productId, quantity });
                }
                await cart.save();
                return cart;
            }
            else {
                const newCart = await Cart.create({ user: userId, products: [{ product: productId, quantity }] });
                return newCart;
            }
        }
        catch (err) {
            throw err;
        }

    }
    static async GetCartByUserId(userId) {
        try {
            const cart = await Cart.findOne({ user: userId }).populate('products.product');
            return cart;
        }
        catch (err) {
            throw err;
        }
    }
    static async DeleteProductFromCart(userId, productId) {
        try {
            const cart = await Cart.findOne({ user: userId });
            const productIndex = cart.products.findIndex(product => product.product == productId);
            if (productIndex >= 0) {
                cart.products.splice(productIndex, 1);
                await cart.save();
                return cart;
            }
            else {
                return cart;
            }
        }
        catch (err) {
            throw err;
        }
    }
    static async UpdateProductQuantity(cartId, productId, quantity) {
        try {
            const cart = await Cart.findOne({ _id: cartId});
            const productIndex = cart.products.findIndex(product => product.product == productId);
            if (productIndex >= 0) {
                cart.products[productIndex].quantity = quantity;
                await cart.save();
                return cart;
            }
            else {
                return cart;
            }
        }
        catch (err) {
            throw err;
        }
    }
    static async EmptyCart(userId) {
        try {
            const cart = await Cart.findOne({ user: userId });
            cart.products = [];
            await cart.save();
            return cart;
        }
        catch (err) {
            throw err;
        }
    }
    static async DeleteCart(userId) {
        try {
            const cart = await Cart.findOneAndDelete({ user: userId });
            return cart;
        }
        catch (err) {
            throw err;
        }
    }
}
module.exports = CartService;