const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  age: { type: Number, required: true },
  photo: { type: String },
  sexe: { type: String, required: true },
  num: { type: Number, required: true },
  ville: { type: String, required: true },
  dispo: [],
  exp: { type: String, required: true },
  service: { type: String, required: true },
  adresse_client: { type: String },
  tel_client: { type: Number },
  annonce: { type: mongoose.Schema.Types.ObjectId, ref: "Aide" },
  client: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  aide: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  decision: { type: String, default: "En attente" },
  devis: { type: String },
  date: { type: String, required: true },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
