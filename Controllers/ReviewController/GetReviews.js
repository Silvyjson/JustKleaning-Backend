const ReviewModel = require("../../Models/ReviewModel");

const handleGetReview = async (req, res) => {
  try {
    const review = await ReviewModel.find();
    return res.status(200).json(review);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { handleGetReview };
