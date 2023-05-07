const express = require("express");
const fileController = require("./file-controller");

const router = express.Router();

router.post("/", fileController.fileUpload);

module.exports = router;
