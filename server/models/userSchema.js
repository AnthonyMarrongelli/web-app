const mongoose = require('mongoose')

//User schema for app users
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"]
        },
        password: {
            type: String,
            required: [true, "Please enter a password"]
        },
        email: {
            type: String,
            required: [true, "Please enter a email"]
        }
    },
    {
        timestamps: true
    }
)

//Creating model to be used in database
const User = mongoose.model('user', userSchema)

module.exports = User;