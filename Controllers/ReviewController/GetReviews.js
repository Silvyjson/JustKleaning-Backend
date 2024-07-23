const ReviewModel = require("../../Models/ReviewModel");

const handleGetReview = async (req, res) => {
  try {
    const review = await ReviewModel.find();
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json(review);
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { handleGetReview };
