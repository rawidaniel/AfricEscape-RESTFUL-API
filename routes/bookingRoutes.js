const express = require('express');
const bookingController = require('../controllers/bookingController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect);

router.route('/myBooking').get(bookingController.getMyBooking);
router.post(
  '/:tourId/myBooking',
  bookingController.setUsersAndToursIdAndPrice,
  bookingController.createMyBooking
);

router
  .route('/:id')
  .delete(
    authController.restrictTo('admin', 'lead-guide', 'user'),
    bookingController.deleteBooking
  );
router.use(authController.restrictTo('admin', 'lead-guide'));

router
  .route('/')
  .get(bookingController.getAllBooking)
  .post(bookingController.createBooking);

router
  .route('/:id')
  .get(bookingController.getBooking)
  .patch(bookingController.updateBooking);

module.exports = router;
