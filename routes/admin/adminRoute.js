const express = require("express");
const { adminCustomer } = require("./controllers/main.js");

const adminRoute = express.Router();

adminRoute.get("/get_customer", (req, res) => {
  let customerdata = {
    name: "ruchit",
    surname: "joshi",
  };
  res.json(customerdata);
});

adminRoute.get("/get_orders", adminCustomer);

module.exports = { adminRoute };
