const express = require("express");
const mongoose = require('mongoose')
const v1productRouter = require("./v1/routes/productRoutes");
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors')
const PORT = process.env.PORT || 3000;
const connect = require('./config/db/mongoConnect')
// const multer = require('multer');
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

connect();

// For testing purposes 
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())
app.use("/api/v1/products", v1productRouter);



mongoose.connection.once("open", () => {
    console.log("Connected to DB");
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});