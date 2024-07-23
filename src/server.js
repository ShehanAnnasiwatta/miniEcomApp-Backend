const express = require("express"); 

const v1productRouter = require("./v1/routes/productRoutes");
const app = express(); 
const PORT = process.env.PORT || 3000; 

const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const fs = require('fs');

// For testing purposes 
app.use("/api/v1/products", v1productRouter);

// Testing multer image upload
app.post('/upload', upload.single('file'), (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).send('No files uploaded.');
      }
  
      const fileBuffer = req.file.buffer;

      // Log the buffer or convert it to a string (optional)
      console.log(fileBuffer.toString());
  
      res.status(200).send('Files uploaded and read from memory successfully.');
    } catch (error) {
      console.error(error);
      res.status(500).send('Something went wrong.');
    }
  });

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});