const express = require("express");
const Workout = require("../models/workout");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutCountroller");

const router = express.Router();

//GET method of workouts
router.get("/", getWorkouts);

//GET method of single workout
router.get("/:id", getWorkout);

//POST method of workouts
router.post("/", createWorkout);

//DELETE method of workout
router.delete("/:id", deleteWorkout);

//UPDATE method of workout
router.patch("/:id", updateWorkout);

module.exports = router;
