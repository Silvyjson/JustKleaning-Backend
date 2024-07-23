const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const ReviewRoutes = require("./Routes/ReviewRoute");

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(cors({ origin: "*" }));

const PORT = process.env.PORT || 8080;
const MONGODB_URL = process.env.MONGODB_URL;

mongoose
  .connect(MONGODB_URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.log(error.message));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/", ReviewRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Page not found",
  });
});
