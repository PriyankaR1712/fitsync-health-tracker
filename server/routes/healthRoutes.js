const express = require("express");

const Health = require("../models/Health");

const router = express.Router();


// ADD HEALTH DATA
router.post("/add", async (req, res) => {
  try {

    const {
      calories,
      waterIntake,
      steps,
      sleepHours,
    } = req.body;

    const healthData = await Health.create({
      calories,
      waterIntake,
      steps,
      sleepHours,
    });

    res.status(201).json({
      message: "Health data added",
      healthData,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error",
    });

  }
});


// GET ALL HEALTH DATA
router.get("/", async (req, res) => {
  try {

    const healthRecords = await Health.find();

    res.status(200).json(healthRecords);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error",
    });

  }
});

module.exports = router;