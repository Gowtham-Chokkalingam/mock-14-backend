const express = require("express");
const {  userRegister, generateRandomWord, upadateUser } = require("../controllers/userController");

const router = express.Router();
//> User Route
router.post("/register", userRegister);
router.post("/register/:id", upadateUser);
router.get("/playzone/:id", generateRandomWord );
module.exports = router;
