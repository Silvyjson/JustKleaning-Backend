const express = require("express");

const handlePostReview = require("../Controllers/ReviewController/PostReview");
const {
  handleGetReview,
} = require("../Controllers/ReviewController/GetReviews");

const ReviewRouter = express.Router();

ReviewRouter.post("/post-review", handlePostReview);
ReviewRouter.get("/get-review", handleGetReview);

module.exports = ReviewRouter;
