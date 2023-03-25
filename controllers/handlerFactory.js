const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const ApiFeature = require('../utils/apiFeatures');

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    let filter = {};
    if (req.originalUrl.endsWith('/users/reviews'))
      filter = { user: req.user.id };
    if (req.params.tourId) filter = { tour: req.params.tourId };
    const feature = new ApiFeature(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    // const doc = await feature.query.explain();
    const doc = await feature.query;
    res.status(200).json({
      status: 'Success',
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });

exports.getOne = (Model, populateOption) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (populateOption) {
      query = query.populate(populateOption);
    }
    const doc = await query;
    if (!doc) return next(new AppError('No document found with that ID', 404));
    res.status(200).json({ status: 'Success', data: { data: doc } });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(201).json({ status: 'Success', data: { data: doc } });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) return next(new AppError('No document found with that ID', 404));
    res.status(200).json({ status: 'Success', data: { data: doc } });
  });

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) return next(new AppError('No document found with that ID', 404));
    res.status(204).json({ status: 'Success', data: null });
  });
