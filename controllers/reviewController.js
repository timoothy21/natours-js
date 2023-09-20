const Review = require('../models/reviewModel');
const catchAsync = require('../utils/catchAsync');
const catchAysnc = require('../utils/catchAsync');

exports.getAllReviews = catchAysnc(async (req, res, next) => {
  const reviews = await Review.find();

  res.status(200).json({
    message: 'success',
    length: reviews.length,
    data: {
      review: reviews,
    },
  });
});

exports.createReview = catchAsync(async (req, res, next) => {
  const newReview = await Review.create(req.body);

  res.status(201).json({
    message: 'success',
    data: {
      review: newReview,
    },
  });
});
