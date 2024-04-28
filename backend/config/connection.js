const mongoose = require('mongoose')

const connectDB = async()=>{
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`datebase connected on host:${mongoose.connection.host.bgCyan}`)
}

module.exports = connectDB