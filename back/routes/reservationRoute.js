const route = require("express").Router();

const reservationController = require("../controllers/reservationController");

route.get("/", reservationController.getReservation);
route.post("/add", reservationController.addReservation);
route.patch("/update/:id", reservationController.updateDecision);

module.exports = route;
