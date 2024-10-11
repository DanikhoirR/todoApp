const express = require("express");
const taskRoutes = require("./taskRoutes.js");
const booksRouter = require("./booksRouter.js");
const router = express.Router();


router.use("/api/v1/books", booksRouter);
router.use("/api/v1/task", taskRoutes);

module.exports = router;
