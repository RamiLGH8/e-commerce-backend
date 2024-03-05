const Review = require('../models/review-model');
class ReviewService{
    static async AddReview(userId, productId, rating, reviewText){
        try{
            const review = await Review.create({ user: userId, product: productId, rating, reviewText });
            return review;
        }
        catch(err){
            throw err;
        }
    }
    static async GetReviewsByProductId(productId){
        try{
            const reviews = await Review.find({ product: productId }).populate('user');
            return reviews;
        }
        catch(err){
            throw err;
        }
    }

    static async GetReviewsByUserId(userId){
        try{
            const reviews = await Review.find({ user: userId }).populate('product');
            return reviews;
        }
        catch(err){
            throw err;
        }
    }
    
    static async DeleteReview(reviewId){
        try{
            const review = await Review.findByIdAndDelete(reviewId);
            return review;
        }
        catch(err){
            throw err;
        }
    }
}