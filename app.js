import express from 'express'
import session from "express-session";
import cors from 'cors'
import mongoose from "mongoose";
// import dotenv from "dotenv"
import UserController from './controllers/users/users-controller.js';
import AuthController from './controllers/users/auth-controller.js';

// dotenv.config()

const app = express()
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
        origin: '*'
    })
);

app.use(express.json())
UserController(app)
AuthController(app)
const port = process.env.PORT || 4000;
app.listen(port)

// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
const CONNECTION_STRING = "mongodb+srv://testUser:test@cluster0.tbpbyz4.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_STRING).then(
    () => { 
       console.log("Connected to DB!");
   },
    err => { 
      console.log(err);
   }
  );

