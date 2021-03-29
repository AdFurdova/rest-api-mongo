const CandidatesController = require("./controllers/candidates.controller");

exports.routesConfig = function (app) {
  app.post("/candidates", [CandidatesController.insert]);
  app.get("/candidates", [CandidatesController.list]);
  app.get("/candidates/:candidateId", [CandidatesController.getById]);
  app.patch("/candidates/:candidateId", [CandidatesController.patchById]);
  app.delete("/candidates/:candidateId", [CandidatesController.deleteById]);
  // app.get("/candidates/:candidateId/jobAds/:jobAdId", function (req, res) {
  //   res.send(req.params);
  // });
};
