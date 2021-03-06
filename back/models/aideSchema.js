const mongoose = require("mongoose");
const AideSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  age: { type: String, required: true },
  photo: { type: String },
  sexe: { type: String, required: true },
  num: { type: Number, required: true },
  ville: { type: String, required: true },
  dispo: [],
  exp: { type: String, required: true },
  service: { type: String, required: true },
  // notes: { type: Number, required: true },
  // nb_per_note: { type: Number, required: true },
  proprietaire: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // attribut pour contenir l'id de l'aide pour apporter ces propres informations
});
module.exports = mongoose.model("Aide", AideSchema);
