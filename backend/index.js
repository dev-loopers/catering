const express  = require("express");
const app = express();
const dotenv = require('dotenv');
const db_conn = require('./config/database');
const path = require('path');
var cors = require('cors')

// routes 
const dishRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');


// import user for dummy data only
const UserModel = require("./models/UserModel");
const usersdata = require('./dummy/usersData');
const dishdata = require("./dummy/dishData");
const DishModel = require("./models/DishModel");

dotenv.config({path: path.resolve(__dirname+'/.env')});
db_conn();

//middlewares 
app.use(cors());
app.use(express.json());
//routes config 
app.use('/api',dishRoutes);
app.use('/api/auth',authRoutes);

app.get('/',(res,req)=>{
    req.send("hello");

});

// insert dummy users 
app.get('/insert_users',async(res,req)=>{
    const users = await UserModel.insertMany(usersdata);
    const adminuser = users[0]._id;
    const sampleDishData = dishdata.map((product)=>{
        return{...product,user:adminuser}

    });
    await DishModel.insertMany(sampleDishData);
    req.send("data inserted ");

})


app.listen(process.env.PORT || 8080,()=>{
    console.log("node server running on port "+process.env.PORT );
})