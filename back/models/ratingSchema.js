const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RatingSchema = new Schema({
  id_client: {
    type: String,
    required: true,
  },

  nom_prenom: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },

  msg: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Star", RatingSchema); 
