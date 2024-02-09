const express = require("express");
const router = express.Router();

const { login } = require("../controllers/login.controller");

router.route("/login").post(login);

module.exports = router;