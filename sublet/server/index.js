const express = require("express");
const cors = require("cors");
const app = express();
const multer = require("multer");
const cookieParser = require("cookie-parser");
const UserRouter = require("./router/usereRoutes");
const PlaceRouter = require("./router/placeRouter");
const connection = require("./connection");
const ImageRouter = require("./router/imageUploads");
require("dotenv").config();
const photosMiddleware = multer({
  dest: "uploads",
});

const start = async () => {
  try {
    await connection(process.env.MONGO_URL);
    app.listen(4000, () => console.log("this is working"));
  } catch (error) {
    console.log(error);
    console.log("there was an error getting the db");
  }
};
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use("/users", UserRouter);
app.use("/upload", photosMiddleware.array("photos", 100), ImageRouter);
app.use("/places", PlaceRouter);
start();
