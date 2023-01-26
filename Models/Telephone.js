const mongoose = require("mongoose");

const telephoneSchema = mongoose.Schema({

    marque:{type:"String",required:true},
    modele:{type:"String",required:true},
    couleur:{type:"String"},
    description:{type:"String"},
    reference:{type:"String"}





})



module.exports = mongoose.model("Telephone", telephoneSchema)