const mongoose = require("mongoose");

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.compassurl);
        console.log("Database Connected");
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = dbConnection;