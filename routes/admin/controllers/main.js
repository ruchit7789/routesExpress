let adminOrder = (req, res) => {
  let orderData = {
    name: "aata",
    price: "500",
  };
  res.status(200).json(orderData);
};

exports.adminCustomer = adminOrder;
