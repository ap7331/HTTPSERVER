const express = require("express");
const app = express();
const bodyParser = require("body-parser");

function logger(req, res, next) {
  console.log("Method is " + req.method);
  console.log("Host is " + req.hostname);
  console.log("Route is " + req.url);
  console.log(new Date());
  next();
}

app.use(bodyParser.json()); // if u know the user is sending data is json then use this middleware, then u will get req.body
app.use(logger);

app.get("/sum/:firstArg/:secondArg", function (req, res) {
  let a = parseInt(req.params.firstArg);
  let b = parseInt(req.params.secondArg);
  res.json({
    answer: a + b,
  });
});

// multiply?a=2&b=3
app.post("/multiply", function (req, res) {
  console.log(req.body);
  let a = parseInt(req.body.a);
  let b = parseInt(req.body.b);

  res.json({
    answer: a * b,
  });
});

// /divide?a=10&b=5
app.get("/divide", function (req, res) {
  let a = parseInt(req.query.a);
  let b = parseInt(req.query.b);
  res.json({
    answer: a / b,
  });
});

app.get("/subract", function (req, res) {
  let a = parseInt(req.query.a);
  let b = parseInt(req.query.b);
  res.json({
    answer: a - b,
  });
});

app.listen(3000);
