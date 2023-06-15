import express from 'express'
import session from "express-session";
import cors from 'cors'
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

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

const port = process.env.PORT || 4000;
app.listen(port)

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
mongoose.connect(CONNECTION_STRING).then(
    () => { 
       console.log("Connected to DB!");
   },
    err => { 
      console.log(err);
   }
  );

