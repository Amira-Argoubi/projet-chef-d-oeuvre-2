const route = require("express").Router();

const ratingController = require("../controllers/ratingController");

route.get("/get", ratingController.getRating);
route.post("/add", ratingController.addRating);


module.exports = route;
