const AideSchema = require("../models/aideSchema");
//const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");

module.exports = {
  /*********************ADD aide ****************************** */
  addAide: async (req, res) => {
    /* vérifier si l'annonce existe par le aide pour éviter l'ajout akthir min mara..*/
    const { proprietaire } = req.body;

    let annonce = await AideSchema.find({
      proprietaire: req.body.proprietaire,
    });

    
    if (annonce.length !== 0) {
      res.json({ msg: "is existe" });
      console.log(true);
    } else {
      console.log(false);
      const newAide = new AideSchema(req.body);

      newAide
        .save()
        .then(() => res.status(200).send("user added"))
        .catch((err) => res.status(401).send(err));
    }
  },
  /**************** Get all aides *********************** */
  getAllAideS: async (req, res) => {
    const aide = await AideSchema.find().populate("proprietaire", "-password");

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
      .catch(() => res.status(404).json({ success: false }));
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
