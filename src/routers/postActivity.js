// create router for postActivity
const express = require("express");
const router = express.Router();
const postActivityController = require("../controllers/postActivityController");
const authentication = require("../middleware/authentication");
const passportJWT = require('../middleware/passportJWT');


router.post("/", [ passportJWT.isLogin,authentication.isUser ] , postActivityController.create);
router.get("/", [ passportJWT.isLogin,authentication.isUser ] , postActivityController.findAll);
router.get("/:id", [ passportJWT.isLogin,authentication.isUser ] , postActivityController.findOne);
router.put("/:id", [ passportJWT.isLogin,authentication.isUser ] , postActivityController.update);
router.delete("/:id", [ passportJWT.isLogin,authentication.isUser ] , postActivityController.delete);

module.exports = router;