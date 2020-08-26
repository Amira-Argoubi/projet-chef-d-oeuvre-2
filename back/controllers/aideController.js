const AideSchema = require("../models/aideSchema");

module.exports = {
  addAide: (req, res) => {
    /* vérifier si l'annonce existe par le aide pour éviter l'ajout akthir min mara..*/
    const annonce = AideSchema.findById({
      proprietaire: req.body.proprietaire,
    });
    if (annonce) res.status(200).send({ msg: "annonce existe" });
    else {
      const newAide = new AideSchema(req.body);
      console.log(newAide);
      newAide
        .save()
        .then(() => res.status(200).send("user added"))
        .catch((err) => res.status(401).send(err));
    }
  },
  getAllAideS: async (req, res) => {
    const aide = await AideSchema.find();

    res.json(aide);
  },
  updateAide: (req, res) => {
    console.log("chhhj");
    AideSchema.findByIdAndUpdate(req.params.id, req.body)
      .then((user) => res.status(200).send(user))
      .catch((err) => res.status(401).send(err));
  },
  deleteAide: (req, res) => {
    AideSchema.findOneAndDelete({ _id: req.params.id }) ///
      .then(() => res.json({ success: true }))
      .catch((err) => res.status(404).json({ success: false }));
  },

  // getoneAide: async (req, res) => {
  //   const aide = await AideSchema.findById(req.params.id);
  //   res.status(200).send(aide);
  // }
};

// patchAide: (req, res) => {
//   AideSchema.findByIdAndUpdate(req.params.id, req.body, (req, donner) => {
//     /* .then((user) => res.status(200).send(user))
//     .catch((err) => res.status(401).send(err))*/
//     res.status(200).send(donner);
//   });
// },
// delateaide: (req, res) => {
//   AideSchema.findByIdAndDelete(req.params.id, (req, donner) => {
//     res.status(200).send(donner);
//   });
// },
