const AideSchema = require("../models/aideSchema");
const jwt = require("jsonwebtoken");

module.exports = {
  /*********************ADD aide ****************************** */
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
  /**************** Get all aides *********************** */
  getAllAideS: async (req, res) => {
    const aide = await AideSchema.find();

    res.json(aide);
  },
  /******************** Get one aide ********************** */
  getOneaide: async (req, res) => {
    console.log(req.cookies.token);
    const token = req.cookies.token;
    if (!token) return res.send("error");
    let decodeToken = jwt.verify(token, "privateKey");
    console.log("id", decodeToken._id); //décodage de token par privatekey

    await AideSchema.find({
      prproprietaire: decodeToken._id,
    }).then((user) => res.json(user));
  },
  /************************ Edit aide **********************/
  updateAide: async (req, res) => {
    console.log("chhhj");
    try {
      aide = await AideSchema.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.send(aide);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  },
  /******************* delete aide ***********************/
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
