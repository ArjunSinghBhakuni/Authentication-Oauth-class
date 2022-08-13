const mongoose = require("mongoose")

const userSchma = new mongoose.Schema({
 email:String,
 password:String,
 age:Number
})

const UserModel = mongoose.model("user",userSchma)

module.exports = UserModel;