const CandidateModel = require("../models/candidates.model");

exports.insert = (req, res) => {
  CandidateModel.createCandidate(req.body).then((result) => {
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
  CandidateModel.list(limit, page).then((result) => {
    res.status(200).send(result);
  });
};

exports.getById = (req, res) => {
  CandidateModel.findById(req.params.candidateId).then((result) => {
    res.status(200).send(result);
  });
};

exports.patchById = (req, res) => {
  CandidateModel.patchCandidate(req.params.candidateId, req.body).then(
    (result) => {
      res.status(204).send({});
    }
  );
};

exports.deleteById = (req, res) => {
  CandidateModel.deleteById(req.params.candidateId).then((result) => {
    res.status(204).send({});
  });
};
