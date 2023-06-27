import express from "express";
import session from "express-session";
import cors from "cors";
import mongoose from "mongoose";
import AuthController from "./controllers/users/auth-controller.js";
import UserController from "./controllers/users/users-controller.js";
import RecipeController from "./controllers/recipes/recipes-controller.js";

const app = express();

const CONNECTION_STRING =
  "mongodb+srv://testUser:test@cluster0.tbpbyz4.mongodb.net/project?retryWrites=true&w=majority";

app.set("trust proxy", 1);

/* app.use(
  session({
    secret: "any string",
    resave: false,
    saveUninitialized: true,
  })
); */
app.use(
  cors({
    credentials: true,
    origin: "http://deploybranch--meek-starburst-e084c8.netlify.app",
    //[
    //   "http://localhost:3000",
    //   "http://deploybranch--meek-starburst-e084c8.netlify.app",
    //   "http://api.spoonacular.com"
    // ],
  })
);
app.use(
  session({
    secret: "any string",
    resave: false,
    proxy: true,
    saveUninitialized: false,
    cookie: {
      sameSite: "none",
      secure: true,
    },
  })
);

app.use(express.json());
app.use(express.json());
const port = process.env.PORT || 4000;
UserController(app);
AuthController(app);
RecipeController(app);
app.listen(port);

mongoose.connect(CONNECTION_STRING).then(
  () => {
    console.log("Connected to DB!");
  },
  (err) => {
    console.log(err);
  }
);
