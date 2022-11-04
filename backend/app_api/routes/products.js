var express = require("express");
var router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/:category/:id", productsController.getById);

router.get("/:category", productsController.getList);

router.delete("/", productsController.delete);

router.post("/", productsController.add);

router.put("/", productsController.update);

module.exports = router;
