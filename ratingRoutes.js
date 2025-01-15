const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/ratingController');
const { protect } = require('../middlewares/authMiddleware');

// 구체적인 경로를 먼저 배치
router.get('/average', ratingController.getAverageRating);
router.get('/checkUserRatingToday', protect, ratingController.checkUserRatingToday);

// 일반적인 CRUD 라우트
router.post('/', protect, ratingController.createRating);
router.get('/', ratingController.getRatings);

// ID를 사용하는 라우트는 마지막에 배치
router.get('/:id', ratingController.getRatingById);
router.delete('/:id', protect, ratingController.deleteRating);
router.post('/:id/like', protect, ratingController.likeRating);
router.post('/:id/dislike', protect, ratingController.dislikeRating);

module.exports = router;