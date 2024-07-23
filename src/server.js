const express = require("express"); 

const v1productRouter = require("./v1/routes/productRoutes");
const app = express(); 
const PORT = process.env.PORT || 3000; 

// For testing purposes 
app.use("/api/v1/products", v1productRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});