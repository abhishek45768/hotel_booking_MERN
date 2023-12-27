const mongoose = require('mongoose');


const ClientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    repassword: { type: String, required: true, validate: confirmPassword },
});

async function confirmPassword(value) {
    if (this.password !== value) {
        throw new Error("Passwords do not match");
    }
}



const ClientModel = mongoose.model('Client', ClientSchema);

module.exports = ClientModel;
