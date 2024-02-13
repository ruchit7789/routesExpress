const express = require("express");
const { adminRoute } = require("./routes/admin/adminRoute");
const { deliveryRoute } = require("./routes/deliveryboy/deliveryboy");

const app = express();

app.use("/admin", adminRoute);
app.use(deliveryRoute);

app.listen(8000, () => {
  console.log("server us running ");
});
