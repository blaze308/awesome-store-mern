const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;
const app = express();
require("dotenv").config();
const cors = require("cors");
const productRouter = require("./routes/product");
const authRouter = require("./routes/auth");

app.use(express.json());
app.use(cors());
app.use(productRouter);
app.use(authRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Mongo Connected"))
  .catch((e) => console.log(e));

app.listen(PORT, "0.0.0.0", console.log(`connected at PORT ${PORT}`));
