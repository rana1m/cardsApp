const express = require("express");
const app = express();
const { createCanvas, loadImage, registerFont } = require("canvas");

registerFont(
  "/Users/rana/Downloads/rana1m.github.io/IBMPlexSansArabic-Regular.ttf",
  { family: "CustomFont" }
);

app.get("/generateImage", function (req, res) {
  generateImage(req, res);
});

async function generateImage(name) {
  const canvas = createCanvas(1070, 900);
  const ctx = canvas.getContext("2d");
  
  // Load image
  const image = await loadImage("cardImage.jpg");
  ctx.drawImage(image, 0, 0);
  
  // Write text on the image
  ctx.fillStyle = "#1E4F42";
  ctx.textAlign = "right";
  ctx.direction = "rtl";
  ctx.font = " 32px 'CustomFont'";
  ctx.fillText(name, 1001, 473);
  
  // Convert canvas to buffer
  const buffer = canvas.toBuffer("image/png");

  return buffer;
}

module.exports = generateImage;
