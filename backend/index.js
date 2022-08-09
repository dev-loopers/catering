const express  = require("express");
const app = express();
const dotenv = require('dotenv');
const db_conn = require('./config/database');
const path = require('path');
// routes 
const dishRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');


dotenv.config({path: path.resolve(__dirname+'/.env')});
db_conn();

//routes config 
app.use('/api',dishRoutes);
app.use('/auth',authRoutes);

app.get('/',(res,req)=>{
    req.send("hello");

})


app.listen(process.env.PORT || 8080,()=>{
    console.log("node server running on port "+process.env.PORT );
})