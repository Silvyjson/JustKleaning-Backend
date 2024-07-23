const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  image: { type: String },
  author: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  date: { type: Date, default: Date.now },
});

const ReviewModel = mongoose.model("Reviews", ReviewSchema);

module.exports = ReviewModel;
