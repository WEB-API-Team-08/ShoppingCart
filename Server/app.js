const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//Middleware
const logHandler = require("./middleware/logger");

//Routes
const home = require("./routes/home");
const items = require("./routes/items");
const orders = require("./routes/orders");
const auth = require("./routes/auth");


mongoose.connect("mongodb://localhost:27017/ShoppingCartDB", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("Connected to db successfully....."))
    .catch((err) => console.log("Error has occured while connecting to db:", err));


const app = express();

app.use(cors()); //Setup CORS policy
app.use(express.json()); // Parse JSON objects in requests
app.use(logHandler); //Request logger middleware

//Route Handlers
app.use('/', home);
app.use('/api/items', items);
app.use('/api/user/orders', orders);
app.use('/api/user/login', auth);


const PORT = 5000; //process.env.PORT;
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));