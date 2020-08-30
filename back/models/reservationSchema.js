const mongoose = require("mongoose");
const ReservationSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  time: { type: String },
  age: { type: Number, required: true },
  photo: { type: String },
  sexe: { type: String, required: true },
  num: { type: Number, required: true },
  ville: { type: String, required: true },
  dispo: [],
  exp: { type: String, required: true },
  service: { type: String, required: true },
  //adresse_client: { type: String, required: true },
  //tel_client: { type: String, required: true },
  annonce: { type: mongoose.Schema.Types.ObjectId, ref: "Aide" },
  client: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  aide: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  //decision: { type: String, default: "En attente" },
});
module.exports = mongoose.model("Reservation", ReservationSchema);
