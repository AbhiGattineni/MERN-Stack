const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const workoutRouter = require("./routes/workout");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json());

app.use("/api/workouts", workoutRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening to port", process.env.PORT);
    });
  })
  .catch((e) => console.log("error", e));
