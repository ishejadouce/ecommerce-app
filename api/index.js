const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")

dotenv.config();

mongoose
    .connect(process.env.MY_DB)
    .then(() => console.log("Db connection successful!"))
    .catch((err) => {
        console.log(err);
    });

    app.use(express.json())

    app.use("/api/auth", authRoute);
    app.use("/api/users", userRoute);

app.listen(process.env.port || 5000, () => {
    console.log("backend server is successfully running!")
})