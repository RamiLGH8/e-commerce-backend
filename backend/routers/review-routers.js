const router= require('express').Router();
const {AddReview,GetReviewsByProductId,DeleteReview}=require('../controllers/review-controller');
router.post('/addReview',AddReview);
router.get('/getReviewsByProductId/:productId',GetReviewsByProductId);
router.delete('/deleteReview/:reviewId',DeleteReview);
module.exports=router;