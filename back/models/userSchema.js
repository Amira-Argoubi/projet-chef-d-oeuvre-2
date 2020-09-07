const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const UserSchema = new Schema({
  nom_prenom: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },

  role: {
    type: String,
    required: true,
  },
});
/**********************définition de la fonction********* */
UserSchema.methods.generateToken = function () {
  const token = jwt.sign({ _id: this._id }, "privateKey", { expiresIn: "24h" });
  return token;
};

module.exports = mongoose.model("User", UserSchema); //collection de users
