
const mongoose = require('mongoose');
const connDb = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connDb;