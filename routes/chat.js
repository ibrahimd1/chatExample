var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  console.log("User:" + req);
  res.render("chat");
});

module.exports = router;
