const express = require("express");

const router = express.Router();

const tranalateController = require("../controller/translate_controller");

//* api/v1//translate
router.get("/", tranalateController.translate);

module.exports = router;
