const express = require("express");
const mongoose = require("mongoose");

//Middleware
const logHandler = require("./middleware/logger");

//Routes
const items = require("./routes/items");


mongoose.connect("mongodb://localhost:27017/ShoppingCartDB", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("Connected to db successfully....."))
    .catch((err) => console.log("Error has occured while connecting to db:", err));


const app = express();

app.use(express.json()); // Parse JSON objects in requests
app.use(logHandler); //Request logger middleware

//Route Handlers
app.get("/", (req, res) => {
    res.send("Hello");
});
app.use('/api/items', items);


const PORT = 5000; //process.env.PORT;
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));