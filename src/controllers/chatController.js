// create controller for postActivity
const db = require("../models");


const Chat = db.chat;
exports.create = async (req, res, next) => {
  try {
    // Validate request
    if (!req.body.message) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    // Create a game
    const chat = {
      message: req.body.message,
      datetime_chat: req.body.datetime_chat,
      user_id: req.body.user_id, // ส่งรูปเกมไปเก็บในระบบ
      post_games_id: req.body.post_games_id,
    };

    // Save game in the database async
    const data = await Chat.create(chat);
    res
      .status(201)
      .json({ message: "Game was created successfully.", data: data });
  } catch (error) {
    next(error);
  }
};

// Retrieve all games from the database.
exports.findAll = (req, res) => {
  Chat.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({
        message:
          error.message || "Some error occurred while retrieving games.",
      });
    });
};

// Find a single game with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Chat.findByPk(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({
        message: "Error retrieving game with id=" + id,
      });
    });
};

// Update a game by the id in the request
exports.update = async (req, res, next) => {
  const id = req.params.id;

  try {
    const data = await Chat.update(req.body, {
      where: { chat_id: id },
    });
    if (data == 1) {
      res.status(200).json({
        message: "Game was updated successfully.",
      });
    } else {
      res.status(400).json({
        message: `Cannot update game with id=${id}. Maybe game was not found or req.body is empty!`,
      });
    }
  } catch (error) {
    next(error);
  }
};

// Delete a game with the specified id in the request
exports.delete = async (req, res, next) => {
  const id = req.params.id;

  try {
    const data = await Chat.destroy({
      where: { chat_id: id },
    });
    if (data == 1) {
      res.status(200).json({
        message: "Game was deleted successfully!",
      });
    } else {
      res.status(400).json({
        message: `Cannot delete game with id=${id}. Maybe game was not found!`,
      });
    }
  } catch (error) {
    next(error);
  }
};

// Delete all games from the database.
exports.deleteAll = async (req, res, next) => {
  try {
    const data = await Chat.destroy({
      where: {},
      truncate: false,
    });
    res.status(200).json({ message: `${data} Games were deleted successfully!` });
  } catch (error) {
    next(error);
  }
};

// Find all published games
exports.findAllPublished = (req, res) => {
  Chat.findAll({ where: { published: true } })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({
        message:
          error.message || "Some error occurred while retrieving games.",
      });
    });
};

// Find all games by user
exports.findAllByUser = (req, res) => {
  const user_id = req.params.user_id;
  Chat.findAll({ where: { user_id: user_id } })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({
        message:
          error.message || "Some error occurred while retrieving games.",
      });
    });
};

// Find all games by post_games_id
exports.findAllByPostGamesId = (req, res) => {
  const post_games_id = req.params.post_games_id;
  Chat.findAll({ where: { post_games_id: post_games_id } })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({
        message:
          error.message || "Some error occurred while retrieving games.",
      });
    });
};
 

