const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv").config();
const cloudinary = require("cloudinary").v2;

const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const fileRouter = require("./file-router");

app.use(bodyParser.json());
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));

app.use("/api/file-upload", fileRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
