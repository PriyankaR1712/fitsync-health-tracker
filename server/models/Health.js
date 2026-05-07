const mongoose = require("mongoose");

const healthSchema = new mongoose.Schema(
  {
    calories: {
      type: Number,
      required: true,
    },

    waterIntake: {
      type: Number,
      required: true,
    },

    steps: {
      type: Number,
      required: true,
    },

    sleepHours: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Health = mongoose.model("Health", healthSchema);

module.exports = Health;