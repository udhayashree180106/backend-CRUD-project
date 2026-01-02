const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Temporary data storage
let users = [];

/* CREATE - POST */
app.post("/addUser", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send("User added successfully");
});

/* READ - GET */
app.get("/users", (req, res) => {
  res.json(users);
});

/* UPDATE - PUT */
app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  users[id] = req.body;
  res.send("User updated successfully");
});

/* DELETE - DELETE */
app.delete("/deleteUser/:id", (req, res) => {
  users.splice(req.params.id, 1);
  res.send("User deleted successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});