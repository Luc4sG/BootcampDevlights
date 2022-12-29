const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: String,
    name: String,
    lastName: String,
    age: Number
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;



    //Los modelos o esquemas tienen que ser los siguientes:
// - Users (name, lastName, age, address)
// - Roles (name, description)
// - Tasks (name, description)