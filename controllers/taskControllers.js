const tasks = require("../json/data-task.json");

exports.getList = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "list of task",
    data: tasks,
  });
};

exports.getListById = (req, res) => {
  const { id } = req.params;
  // const id = req.params.id

  // [].find() ;; array method
  // {id: 1} {id:2} ...
  const index = tasks.findIndex((tasks) => tasks.id === parseInt(id)); // -1

  if (!index) {
    res.status(404).json({
      status: "error",
      message: `task with ID ${id} not found`,
    });
  }

  res.status(200).json({
    status: "success",
    message: `List with ID ${id}`,
    data: tasks[index],
  });
};

exports.addTask = (req, res) => {
  const { task, isComplete } = req.body;

  if (!task) {
    res.status(400).json({
      status: "error",
      message: "Please provide task",
    });
  }

  const id = tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1;

  const newTask = { id, task, isComplete };
  tasks.push(newTask);

  res.status(200).json({
    status: "success",
    message: "Task added",
    data: newTask,
  });
};

exports.updateTask = (req, res) => {
  const { id, task, isComplete } = req.body;

  if (!id || !task || !isComplete) {
    res.status(400).json({
      status: "error",
      message: "Please provide id, task and iscomplete",
    });
  }

  const index = tasks.findIndex((tasks) => tasks.id === id);

  if (index === -1) {
    res.status(404).json({
      status: "error",
      message: ``,
    });
  }

  tasks[index] = { id, task, isComplete };

  res.status(200).json({
    status: "success",
    message: "Task updated",
    data: tasks[index],
  });
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;

  const index = tasks.find((tasks) => tasks.id === parseInt(id));

  if (index === -1) {
    res.status(404).json({
      status: "error",
      message: `Product with ID ${id} not found`,
    });
  }

  tasks.splice(index, 1);

  res.status(204).json({
    status: "success",
    message: "Delete Succes",
  });
};

exports.toggleIsComplete = (req, res) => {
  const { id } = req.params;
  const { isComplete } = req.body;

  const index = tasks.findIndex((tasks) => tasks.id === parseInt(id));

  if (index === -1) {
    res.status(404).json({
      status: "error",
      message: `task with ID ${id} not found`,
    });
  }

  tasks[index].isComplete = true;

  res.status(200).json({
    status: "succes",
    message: "Is complete update",
    data: tasks[index],
  });
};
