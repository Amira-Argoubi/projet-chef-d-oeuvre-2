const mongoose = require("mongoose");
const AideSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  age: { type: Number, required: true },
  photo: { type: String },
  sexe: { type: String, required: true },
  num: { type: Number, required: true },
  ville: { type: String, required: true },
  dispo: { type: String, required: true },
  exp: { type: String, required: true },
  service: { type: String, required: true },
});
module.exports = mongoose.model("Aide", AideSchema);
