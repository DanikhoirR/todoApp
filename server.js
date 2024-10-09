const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;


app.get("/", (req, res) => {
  res.status(200).json
});


app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
