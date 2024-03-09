// create router for comment

const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const authentication = require("../middleware/authentication");
const passportJWT = require('../middleware/passportJWT');

// Create a new comment
router.post("/",[passportJWT.isLogin,authentication.isUser], commentController.create);

// Retrieve all comments
router.get("/",[passportJWT.isLogin,authentication.isUser], commentController.findAll);

// Retrieve a single comment with id
router.get("/:id",[passportJWT.isLogin,authentication.isUser], commentController.findOne);

// Update a comment with id
router.put("/:id",[passportJWT.isLogin,authentication.isUser], commentController.update);

// Delete a comment with id
router.delete("/:id",[passportJWT.isLogin,authentication.isUser], commentController.delete);

// Delete all comments
router.delete("/",[passportJWT.isLogin,authentication.isUser], commentController.deleteAll);

// Retrieve all comments by post_games_id
router.get("/post/:id",[passportJWT.isLogin,authentication.isUser], commentController.findAllByPostGamesId);

module.exports = router;