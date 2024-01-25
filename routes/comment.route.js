const express = require("express");
const { commentController } = require("../controllers");

const route = express.Router();
route.get("/get", commentController.getComment);
route.post("/add", commentController.addComment);
route.delete("/delete/:id", commentController.deleteComment);
route.put("/update/:id", commentController.updateComment);

module.exports = route;
