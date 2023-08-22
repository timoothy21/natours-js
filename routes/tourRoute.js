const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

// middleware use only for tourRoute -> to check the id
// router.param('id', tourController.checkId);

// Create a checkbody middleware
// check if body contains the name and price property
// if not, return 400 (bad request)
// Ad it to the post handler stack

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
