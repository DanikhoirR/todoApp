const express = require("express");
const app = express();
const PORT = 3000;
const router = require("./router/router.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the Task API",
    version: "1.0.0",
  });
});

app.get("/books", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the Task Books API",
    version: "1.0.0",
  });
});

app.use("/", router);
app.use("/books", router);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
