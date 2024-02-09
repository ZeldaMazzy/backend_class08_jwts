const express = require("express");
const router = express.Router();

const { getSecretData } = require("../controllers/jobs.controller");

router.route("/secretData").get(getSecretData);

module.exports = router;