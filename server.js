const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/generate", (req, res) => {
  const { topic } = req.body;
  const fakeScript = `Welcome to today's podcast on: ${topic}. This is just a placeholder script.`;

  res.json({ script: fakeScript });
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
