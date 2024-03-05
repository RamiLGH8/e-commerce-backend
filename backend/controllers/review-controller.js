const ReviewService = require('../services/review-service');
exports.AddReview = async (req, res) => {
    try {
        const { userId, productId, rating, reviewText } = req.body;
        const review = await ReviewService.AddReview(userId, productId, rating, reviewText);
        return res.status(200).json({ review });
    }
    catch (err) {
        return res.status(500).json({ err });
    }
}
exports.GetReviewsByProductId = async (req, res) => {
    try {
        const { productId } = req.params;
        const reviews = await ReviewService.GetReviewsByProductId(productId);
        return res.status(200).json({ reviews });
    }
    catch (err) {
        return res.status(500).json({ err });
    }
}
exports.GetReviewsByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const reviews = await ReviewService.GetReviewsByUserId(userId);
        return res.status(200).json({ reviews });
    }
    catch (err) {
        return res.status(500).json({ err });
    }
}
exports.DeleteReview = async (req, res) => {
    try {
        const { reviewId } = req.params;
        const review = await ReviewService.DeleteReview(reviewId);
        return res.status(200).json({ review });
    }
    catch (err) {
        return res.status(500).json({ err });
    }
}
