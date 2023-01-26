const mongoose = require("mongoose");

const UtilisateurSchema = mongoose.Schema({
    Firstname : { type: String, required: true},
    Lastname : { type: String, required: true},
    Gender: { type: String},
    Opinion : { type: String, required: true},
    Email : {type: String, required: true }
})

module.exports = mongoose.model("Utilisateur", UtilisateurSchema)