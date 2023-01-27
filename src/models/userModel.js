const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      enum: ["High", "Medium", "Low"],
      default: "Low",
    },
    score: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model.users || mongoose.model("user", userSchema);

module.exports = User;
