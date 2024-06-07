import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from 'cors';
import compression from "compression";
import mongoose from "mongoose";

import router from "./router";


var app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/yaala_test');
mongoose.connection.on('error',(error: Error) => console.log(error));

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
})

app.use('/', router());