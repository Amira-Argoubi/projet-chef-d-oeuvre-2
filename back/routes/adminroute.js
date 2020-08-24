const route = require("express").Router();

const userController = require("../controllers/aideController");

route.post("/usergetall", userController.adduser);
route.delete("/delateuser/:id", userController.delateuser);

module.exports = route;
