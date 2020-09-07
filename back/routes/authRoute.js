const route = require("express").Router();

const authentifController = require("../controllers/userController");
/***************** User Authentification ************ */
route.post("/register", authentifController.register);
route.post("/login", authentifController.login);
route.get("/profil", authentifController.getProfil);
route.post("/logout", authentifController.logout);
//route.patch("/update/:id", authentifController.updateProfil);
module.exports = route;
