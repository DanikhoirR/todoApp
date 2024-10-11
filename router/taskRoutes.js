const express = require("express");
const taskControllers = require("../controllers/taskControllers.js")
const taskRoutes = express.Router();

taskRoutes.get('/', taskControllers.getList);
taskRoutes.get('/:id', taskControllers.getListById);
taskRoutes.post('/', taskControllers.addTask);
taskRoutes.put('/', taskControllers.updateTask);
taskRoutes.put('/:id/complete', taskControllers.toggleIsComplete);
taskRoutes.delete('/', taskControllers.deleteTask);

module.exports = taskRoutes;
