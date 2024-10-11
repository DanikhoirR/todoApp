const express = require("express");
const booksControllers = require("../controllers/booksControllers.js");
const booksRouter = express.Router();

booksRouter.get("/", booksControllers.getList);
booksRouter.get("/:id", booksControllers.getListById);
booksRouter.post("/", booksControllers.addTask);
booksRouter.put("/", booksControllers.updateBook);
booksRouter.delete("/", booksControllers.deleteBooks);

module.exports = booksRouter;
