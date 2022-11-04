var express = require("express");
var router = express.Router();

const ordersController = require("../controllers/ordersController");

router.get("/", ordersController.getList);

router.get("/:id", ordersController.getById);

router.delete("/", ordersController.delete);

router.post("/add", ordersController.add);

router.put("/", ordersController.update);

module.exports = router;
