import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./router/userRouter";

import bodyParser from "body-parser";

const app = express();

//middleware
app.use(cors());
app.use(morgan("tiny"));
//read form data using express

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* app.use(express.json());
app.use(express.urlencoded({ extended: true })); */

dotenv.config({ path: "./config/config.env" });
const PORT = 8000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("<h1>FreshBastek application running Successfully</h1>");
});

//Routers
app.use("/user", userRouter);

mongoose
  .connect(process.env.MONGODB_LOCAL_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((response) => {
    console.log("Mongo DB connected Successfully");
  })
  .catch((err) => {
    console.log("Error");
  });

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server is running on port number ${PORT}`);
});
