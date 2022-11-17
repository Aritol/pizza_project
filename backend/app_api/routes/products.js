var express = require("express");
var router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/:id", productsController.getById);

router.get("/", productsController.getList);

router.delete("/", productsController.delete);

router.post("/", productsController.add);

router.put("/", productsController.update);

module.exports = router;
