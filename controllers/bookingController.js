const Booking = require('../models/bookingModel');
const Tour = require('../models/tourModel');
const factory = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync');
const ApiFeature = require('../utils/apiFeatures');

exports.getAllBooking = factory.getAll(Booking);
exports.getBooking = factory.getOne(Booking);
exports.createBooking = factory.createOne(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);

exports.setUsersAndToursIdAndPrice = catchAsync(async (req, res, next) => {
  let tour;
  if (!req.body.user) req.body.user = req.user.id;
  if (req.params.tourId) {
    tour = await Tour.findById(req.params.tourId);
  }
  if (!req.body.tour) req.body.tour = tour.id;
  if (!req.body.price) req.body.price = tour.price;
  next();
});

exports.getMyBooking = catchAsync(async (req, res, next) => {
  const feature = new ApiFeature(Booking.find({ user: req.user.id }), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  // const doc = await feature.query.explain();
  const book = await feature.query;
  res.status(200).json({
    status: 'Success',
    results: book.length,
    data: {
      data: book,
    },
  });
});

exports.createMyBooking = catchAsync(async (req, res, next) => {
  const book = await Booking.create(req.body);
  res.status(201).json({ status: 'Success', data: { data: book } });
});
