const express = require("express");

const deliveryRoute = express.Router();

deliveryRoute.get("/delivery_boy/task", (req, res) => {
  orderLocation = {
    area: "newdelhi",
    pincode: "110017",
  };
  res.json(orderLocation);
});

module.exports = { deliveryRoute };
