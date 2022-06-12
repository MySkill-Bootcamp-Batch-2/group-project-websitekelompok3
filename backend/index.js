const express = require("express");
const {artikelRouter} = require("./routers/index.js");
const cors = require("cors");
 
const app = express();  
 
try {
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
   
app.use(cors());
app.use(express.json());
app.use('/home', artikelRouter);
 
app.listen(5000, () => console.log('Server running at port 5000'));