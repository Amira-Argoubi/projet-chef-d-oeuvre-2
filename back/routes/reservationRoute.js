const route = require("express").Router();

const reservationController = require("../controllers/reservationController");

route.get("/", reservationController.getReservation);
route.post("/add", reservationController.addReservation);
route.patch("/update/:id", reservationController.updateDecision);
route.delete("/delete/:id", reservationController.deleteReservation);

module.exports = route;
