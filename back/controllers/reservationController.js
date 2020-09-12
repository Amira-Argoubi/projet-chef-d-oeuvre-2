const Reservation = require("../models/reservationSchema");
/********************* package installé pour date ****************** */
const moment = require("moment");
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
        date_start,
        date_end,
      } = req.body;
      let ancienreservation = await Reservation.find();

      let existAnnonce = ancienreservation.filter(
        (el) =>
          el.client._id.toString() === client._id.toString() &&
          el.annonce._id.toString() === annonce._id.toString()
      );

      // let existAnnonce = existeClient.filter(
      //   (el) => el.annonce._id.toString() === annonce._id.toString()
      // );
      /******************* méthode pour enregistrer la format de date ******************* */
      const date = moment().format("YYYY-MM-DD");
      const dateoff = moment(date, "YYYY-MM-DD")
        .add(5, "days")
        .format("YYYY-MM-DD");

      if (existAnnonce.length !== 0) {
        res.json({ msg: "you have already add this reservation" });
      } else {
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
          dateoff,
          date_start,
          date_end,
        });
        reservation.save();
        res.send(reservation);
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  },
  /******************** Delete reservation ************************ */
  deleteReservation: (req, res) => {
    Reservation.findOneAndDelete({ _id: req.params.id }) ///
      .then(() => res.json({ success: true }))
      .catch(() => res.status(404).json({ success: false }));
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
