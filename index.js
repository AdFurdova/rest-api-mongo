const config = require("./common/config/env.config.js");

const express = require("express");
const app = express();
const CandidatesRouter = require("./candidates/routes.config");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Expose-Headers", "Content-Length");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  } else {
    return next();
  }
});

CandidatesRouter.routesConfig(app);

app.use(express.json());

app.listen(config.port, function () {
  console.log("app listening at port %s", config.port);
});
