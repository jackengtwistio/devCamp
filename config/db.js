const mongoose = require('mongoose')

const connectDB = async () => {
    const connectedDatabase = await mongoose.connect(
        process.env.MONGO_URI
    )
    console.log(`mongodb connected: ${connectedDatabase.connection.host}`)
}

module.exports = connectDB