const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
// const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.get(
  '/',
  // bookingController.createBookingCheckout,
  authController.IsLoggedIn,
  viewsController.getOverview
);
router.get('/login', authController.IsLoggedIn, viewsController.getLoginForm);
router.get('/tour/:slug', authController.IsLoggedIn, viewsController.getTour);
router.get('/me', authController.protect, viewsController.getAccount);
router.get('/my-tours', authController.protect, viewsController.getMyTours);

router.post(
  '/submit-user-data',
  authController.protect,
  viewsController.updateUserData
);

module.exports = router;
