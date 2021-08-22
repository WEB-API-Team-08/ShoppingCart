const express = require("express");
const mongoose = require("mongoose");

//Routes
const items = require("./routes/items");

const app = express();

mongoose.connect("mongodb://localhost:27017/ShoppingCartDB", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("Connected to db successfully....."))
    .catch((err) => console.log("Error has occured while connecting to db:", err));

app.use(express.json()); // Parse JSON objects in requests

//Route Handlers
app.use('/api/items', items);

app.get("/", (req, res) => {
    res.send("Hello");
});

const PORT = 5000; //process.env.PORT;
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));