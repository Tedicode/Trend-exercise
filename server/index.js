const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// // at production - after build
app.use(express.static(path.resolve(__dirname, "../client/build")));
// app.use(express.static(path.join(__dirname, "../client/public")));

app.get("/api", (req, res) => {
  res.json({ message: "hello!" });
});

// at production - after build
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
//   res.sendFile(path.join(__dirname, "../client/public", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`server is listening  on port ${PORT}`);
});
