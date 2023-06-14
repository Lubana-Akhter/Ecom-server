const { readdirSync } = require("fs");
const path = require("path");
const express = require('express');
const app = express();
const helmet = require('helmet');
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const cors = require('cors');


// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet())


// routes middleware
readdirSync("./routes").map(r => app.use("/api/v1", require(`./routes/${r}`))) 

// Mongo DB Database Connection
// let URI="mongodb+srv://<username>:<password>@cluster0.7uslu.mongodb.net/todo?retryWrites=true&w=majority";
// let URI="mongodb+srv://lubna93:gy3QxOf6v6gbDIan@cluster0.7uslu.mongodb.net/ecomDB?retryWrites=true&w=majority";
// let OPTION={user:'lubna93',pass:'gy3QxOf6v6gbDIan',autoIndex:true}
// mongoose.connect(URI,OPTION,(error)=>{
//     console.log("Connection Success")
//     console.log(error)
// })


// server
const port = process.env.PORT || 8000;

// Connect to DB and start server
mongoose
    .connect(process.env.DATABASE)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server Running on port ${port}`);
        });
    })
    .catch((err) => console.log(err));

