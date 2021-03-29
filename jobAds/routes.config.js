const JobAdsController = require("./controllers/jobAds.controller");

exports.routesConfig = function (app) {
  app.post("/job_ads", [JobAdsController.insert]);
  app.get("/job_ads", [JobAdsController.list]);
  app.get("/job_ads/:jobAdId", [JobAdsController.getById]);
  app.patch("/job_ads/:jobAdId", [JobAdsController.patchById]);
  app.delete("/job_ads/:jobAdId", [JobAdsController.deleteById]);
};
