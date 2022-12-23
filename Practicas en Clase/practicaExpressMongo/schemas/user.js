const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: String,
    name: String,
    lastName: String,
    age: Number
});

const userModel = mongoose.model('users', userSchema);

mondule.exports = userModel;