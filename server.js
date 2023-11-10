const express = require("express");
const mongoose = require("mongoose");
const subscribersRouter = require("./routes/subscribers.js")
require("dotenv").config()

mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on("error", (error) => console.error());
db.once("open", () => console.log("Connected to database"));
 
const port = 4444;
const app = express();
app.use(express.json());

app.use("/subscribers", subscribersRouter)


app.get("/", (req, res) => res.send("Server is ready"));
app.listen(port, () => console.log(`Server started on port ${port}`));