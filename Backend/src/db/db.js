const mongoose = require("mongoose")

function connectToDB(){
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
            console.log("Database Is Connected")
    }).catch((error)=>{
        console.error("Error While Connecting To Databse",error)
    })
}

module.exports = connectToDB