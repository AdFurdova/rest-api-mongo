const JobAdsController = require("./controllers/jobAds.controller");

exports.routesConfig = function (app) {
  app.post("/jobAds", [JobAdsController.insert]);
  app.get("/jobAds", [JobAdsController.list]);
  app.get("/jobAds/:jobAdId", [JobAdsController.getById]);
  app.patch("/jobAds/:jobAdId", [JobAdsController.patchById]);
  app.delete("/jobAds/:jobAdId", [JobAdsController.deleteById]);
};
