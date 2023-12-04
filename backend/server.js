const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");
const errorHandler = require("./middleWare/errorMiddleware");

const app = express()

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://pinvent-app.vercel.app"],
    credentials: true,
  })
);




// Route middleware

app.use("/api/users",userRoute)
app.use("/api/orders", orderRoute);

// routes
app. get("/",(req,res)=> {
    res.send("Home Page");
});

// error middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5005;

//connect to DB and start sever

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {

        app.listen(PORT,() => {
            console.log(`server Running on port ${PORT}`)
        })

    })
    .catch((err) => console.log(err))


    