const JobAdModel = require("../models/jobAds.model");

exports.insert = (req, res) => {
  JobAdModel.createJobAd(req.body).then((result) => {
    res.status(201).send({ id: result._id });
  });
};

exports.list = (req, res) => {
  let limit =
    req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
  let page = 0;
  if (req.query) {
    if (req.query.page) {
      req.query.page = parseInt(req.query.page);
      page = Number.isInteger(req.query.page) ? req.query.page : 0;
    }
  }
  JobAdModel.list(limit, page).then((result) => {
    res.status(200).send(result);
  });
};

exports.getById = (req, res) => {
  JobAdModel.findById(req.params.jobAdId).then((result) => {
    res.status(200).send(result);
  });
};
exports.patchById = (req, res) => {
  JobAdModel.patchCandidate(req.params.jobAdId, req.body).then((result) => {
    res.status(204).send({});
  });
};

exports.deleteById = (req, res) => {
  JobAdModel.deleteById(req.params.jobAdId).then((result) => {
    res.status(204).send({});
  });
};
