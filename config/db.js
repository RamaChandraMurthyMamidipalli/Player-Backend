const mongoose = require("mongoose")

const connectDb = async () => {
    try {

        await mongoose.connect("mongodb+srv://mamidipalliramachandramurthy_db_user:swVpRfVS5SqBZMTP@express1.tygsyyq.mongodb.net/?appName=Express1")

        console.log("DB Connected")

    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDb