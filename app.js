import express from "express";
import express from "express";
import session from "express-session";
import cors from "cors";
import cors from "cors";
import mongoose from "mongoose";
import UserController from "./controllers/users/users-controller.js";
import AuthController from "./controllers/users/auth-controller.js";

const app = express();
import UserController from "./controllers/users/users-controller.js";
import AuthController from "./controllers/users/auth-controller.js";

const CONNECTION_STRING =
  "mongodb+srv://testUser:test@cluster0.tbpbyz4.mongodb.net/project?retryWrites=true&w=majority";

app.use(
  session({
    secret: "any string",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(express.json());
const port = process.env.PORT || 4000;
UserController(app);
AuthController(app);
app.listen(port);
UserController(app);
AuthController(app);
app.listen(port);

mongoose.connect(CONNECTION_STRING).then(
  () => {
    console.log("Connected to DB!");
  },
  (err) => {
    console.log(err);
  }
);
