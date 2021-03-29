const mongoose = require("../../common/services/mongoose.service").mongoose;
const Schema = mongoose.Schema;

const jobAdSchema = new Schema({
  jobTitle: String,
  jobSalary: Number,
  fullAdText: String,
});

jobAdSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

jobAdSchema.set("toJSON", {
  virtuals: true,
});

jobAdSchema.findById = function (cb) {
  return this.model("JobAds").find({ id: this.id }, cb);
};

const JobAd = mongoose.model("JobAds", jobAdSchema);

exports.findById = (id) => {
  return JobAd.findById(id).then((result) => {
    result = result.toJSON();
    delete result._id;
    delete result.__v;
    return result;
  });
};

exports.createJobAd = (jobAdData) => {
  const jobAd = new JobAd(jobAdData);
  return jobAd.save();
};

exports.list = (perPage, page) => {
  return new Promise((resolve, reject) => {
    JobAd.find()
      .limit(perPage)
      .skip(perPage * page)
      .exec(function (err, jobAds) {
        if (err) {
          reject(err);
        } else {
          resolve(jobAds);
        }
      });
  });
};

exports.patchJobAd = (id, jobAdData) => {
  return JobAd.findOneAndUpdate(
    {
      _id: id,
    },
    jobAdData
  );
};

exports.deleteById = (jobAdId) => {
  return new Promise((resolve, reject) => {
    JobAd.deleteMany({ _id: jobAdId }, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(err);
      }
    });
  });
};
