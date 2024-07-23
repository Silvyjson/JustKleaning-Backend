const cloudinary = require("cloudinary").v2;
const ReviewModel = require("../../Models/ReviewModel");

cloudinary.config({
  cloudinary_url: process.env.CLOUDINARY_URL,
});

const handlePostReview = async (req, res) => {
  try {
    const { image, author, email, message, rating } = req.body;

    if (!image || !author || !email || !message || !rating) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const uploadResponse = await cloudinary.uploader.upload(image, {
      folder: "reviews",
    });

    const imageUrl = uploadResponse.secure_url;

    console.log(imageUrl);

    const date = new Date().toLocaleString();

    const newReview = new ReviewModel({
      image: imageUrl,
      author,
      email,
      message,
      rating,
      date,
    });

    await newReview.save();

    res.setHeader("Content-Type", "application/json");
    return res
      .status(200)
      .json({ success_message: "Review posted successfully" });
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    return res.status(400).json({ error_message: error.message });
  }
};

module.exports = handlePostReview;
