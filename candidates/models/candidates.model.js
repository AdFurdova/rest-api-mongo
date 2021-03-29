const mongoose = require("../../common/services/mongoose.service").mongoose;
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
  fullName: String,
  expectedSalary: Number,
  listOfSkills: [String],
});

candidateSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

candidateSchema.set("toJSON", {
  virtuals: true,
});

candidateSchema.findById = function (cb) {
  return this.model("Candidates").find({ id: this.id }, cb);
};

const Candidate = mongoose.model("Candidates", candidateSchema);

exports.findById = (id) => {
  return Candidate.findById(id).then((result) => {
    result = result.toJSON();
    delete result._id;
    delete result.__v;
    return result;
  });
};

exports.createCandidate = (candidateData) => {
  const candidate = new Candidate(candidateData);
  return candidate.save();
};

exports.list = (perPage, page) => {
  return new Promise((resolve, reject) => {
    Candidate.find()
      .limit(perPage)
      .skip(perPage * page)
      .exec(function (err, candidates) {
        if (err) {
          reject(err);
        } else {
          resolve(candidates);
        }
      });
  });
};

exports.patchCandidate = (id, candidateData) => {
  return Candidate.findOneAndUpdate(
    {
      _id: id,
    },
    candidateData
  );
};

exports.deleteById = (candidateId) => {
  return new Promise((resolve, reject) => {
    Candidate.deleteMany({ _id: candidateId }, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(err);
      }
    });
  });
};
