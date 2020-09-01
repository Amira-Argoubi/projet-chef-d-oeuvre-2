const Reservation = require("../models/reservationSchema");
module.exports = {
  /*************************** Get reservation ****************** */
  getReservation: async (req, res) => {
    try {
      const reservation = req.query.user_id
        ? await Reservation.find({ user: req.query.user_id }).populate(
            "annonce"
          )
        : await Reservation.find()
            .populate("client")
            .populate("annonce")
            .populate("aide");

      if (!reservation)
        return res.status(404).send({ msg: "There are no ads yet" });
      return res.send(reservation);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  },
  /******************** Add reservation ************************ */

  addReservation: async (req, res) => {
    try {
      const {
        nom,
        age,
        photo,
        sexe,
        num,
        ville,
        dispo,
        exp,
        service,
        annonce,
        client,
        aide,
        tel_client,
        adresse_client,
        devis,
      } = req.body;
      const reservation = new Reservation({
        nom,
        age,
        photo,
        sexe,
        num,
        ville,
        dispo,
        exp,
        service,
        annonce,
        client,
        aide,
        tel_client,
        adresse_client,
        devis,
      });
      reservation.save();
      res.send(reservation);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  },
  /**************************** Edit Decision ********************/
  updateDecision: async (req, res) => {
    console.log("chhhj");
    try {
      decision = await Reservation.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.send(decision);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  },
};
