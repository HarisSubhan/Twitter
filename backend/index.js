const express = require("express");
const errorhandler = require("./middlewares/errorMiddlewares");
const connectDB = require("./config/connection");
require("dotenv").config();
require("colors");
const cors = require("cors");
const app = express();

app.use(cors());

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", require("./routers/registerUser"));
app.use("/api/tweets", require("./routers/tweetRoutes"));

app.use(errorhandler);

app.listen(process.env.PORT, () =>
  console.log(`Sever started on Port: ${process.env.PORT.bgCyan}`)
);
