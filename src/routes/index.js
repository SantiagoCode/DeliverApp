const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/deliver", (req, res) => {
  res.render("deliver");
});

module.exports = router;
