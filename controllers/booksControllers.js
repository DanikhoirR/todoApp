const books = require("../json/data-books.json");

exports.getList = (req, res) => {
  res.status(200).json({
    status: "succes",
    message: "list of books",
    data: books,
  });
};

exports.getListById = (req, res) => {
  const { id } = req.params;
  const index = books.findIndex((books) => books.id === parseInt(id));

  console.log(index);
  if (index === -1) {
    res.status(404).json({
      status: "error",
      message: `task with ID ${id} not found`,
    });
  }

  res.status(200).json({
    status: "succes",
    message: `List with ID ${id}`,
    data: books[index],
  });
};

exports.addTask = (req, res) => {
  const { book } = req.body;

  if (!book) {
    res.status(400).json({
      status: "error",
      message: "Please provide book",
    });
  }

  const id = books.length === 0 ? 1 : books[books.length - 1].id + 1;

  const newBook = { id, book };
  books.push(newBook);

  res.status(200).json({
    status: "success",
    message: "Task added",
    data: newBook,
  });
};

exports.updateBook = (req, res) => {
  const { id, book } = req.body;

  if (!id || !book) {
    res.status(400).json({
      status: "error",
      message: "Please provide id and book ",
    });
  }

  const index = books.findIndex((books) => books.id === id);

  if (index === -1) {
    res.status(404).json({
      status: "error",
      message: `Index ${index} not found`,
    });
  }

  books[index] = { id, book };

  res.status(200).json({
    status: "success",
    message: "Update succes",
    data: books[index],
  });
};

exports.deleteBooks = (req, res) => {
  const { id } = req.body;

  const index = books.findIndex((books) => books.id === id);

  if (index === -1) {
    res.status(404).json({
      status: "error",
      message: `Index ${index} not found`,
    });
  }

  books.splice(index, 1);

  res.status(204).json({
    status: "success",
    message: "Delete Success",
  });
};
