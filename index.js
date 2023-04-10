const express = require("express");
const app = express();
const generateImage = require("./generateImage"); 
const PORT = process.env.PORT || 3000

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

app.get("/", function (req, res) {
  res.send('hello');
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