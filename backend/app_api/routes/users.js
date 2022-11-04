var express = require("express");
var router = express.Router();

const usersController = require("../controllers/usersController");

router.get("/", usersController.getList);

router.post("/signup", usersController.signup);

router.post("/login", usersController.login);

module.exports = router;
