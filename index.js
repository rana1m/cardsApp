const express = require("express");
const app = express();
const generateImage = require("./generateImage"); 
const PORT = process.env.PORT || 3000

// ... Other imports
const path = require("path");

// Other app.use middleware
app.use(express.static(path.join(__dirname, "client", "build")));

// Right before your app.listen(), add this:
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.get("/download", async function (req, res) {
  const { name } = req.query;
  const buffer = await generateImage(name); 

  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Disposition": "attachment; filename=test.png",
  });
  res.end(buffer, "binary");
});

app.get("/", async function (req, res) {
  const { name } = req.query;
  const buffer = await generateImage(name); 

  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Disposition": "attachment; filename=test.png",
  });
  res.end(buffer, "binary");
});

app.get("/view", async function (req, res) {
  const { name } = req.query;
  const buffer = await generateImage(name);

  res.writeHead(200, {
    "Content-Type": "image/png",
  });
  res.end(buffer);
});

app.listen(PORT, function () {
  console.log("Example app listening on port 3000!");
});