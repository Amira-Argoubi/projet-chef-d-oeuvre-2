const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const _ = require("lodash");
require("cookie-parser")();
const User = require("../models/userSchema");

module.exports = {
  /********************************inscription************************* */
  register: async (req, res) => {
    try {
      const { nom_prenom, email, password, role } = req.body;

      user = new User({
        nom_prenom,
        email,
        password,
        role,
      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      /********************************/
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error"); // 500 données fausses
    }
  },
  /****************************************** CONNEXION ***************** ***/
  login: async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send("email ou password sont incorrects");
    }

    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!checkPassword) {
      return res.status(401).send("email ou password sont incorrects");
    }
    try {
      console.log(user);

      let token = user.generateToken();

      res
        .cookie("token", token, {
          expires: new Date(Date.now() + 900000000),
          httpOnly: true,
        })
        .send(_.pick(user, ["nom_prenom", "email", "role"])); //////////////
    } catch (err) {
      console.log(err);
    }
  },

  /********************************* get profil *********************** */
  getProfil: async (req, res) => {
    const token = req.cookies.token; // ijib token fil header mta3 req
    if (!token) return res.send("error");
    try {
      let decodeToken = jwt.verify(token, "privateKey"); //décodage de token par privatekey
      req.user = decodeToken;

      const user = await User.findOne({ _id: req.user._id }).select(
        "-password"
      ); //vérification(ilawij 3al user :identification)
      res.send(user); // ijib user
    } catch (e) {
      res.send("token wrong ");
    }
  },
  logout: async (req, res) => {
    res.clearCookie("token").send("token deleted"); //cookie mnin yitb3ath yitfassa5 donc fil back
  },
  /********************************* EDIT profil *********************** */

  // updateProfil: async (req, res) => {
  //   console.log("edit pro", req.body);
  //   let { nom_prenom, email, password, newpPassword, role, _id } = req.body;
  //   let user = await User.findById(_id);
  //   try {
  //     if (password) {
  //       bcrypt.compare(password, user.password, async function (err, result) {
  //         if (result == true) {
  //           let salt = await bcrypt.genSalt(10);
  //           passwordnew = await bcrypt.hash(newpPassword, salt);
  //           user = await User.findByIdAndUpdate(req.params.id, {
  //             nom_prenom,
  //             email,
  //             password: passwordnew,
  //             role,
  //           });
  //           res.send(user);
  //         } else res.send("mot de passe non identique");
  //       });
  //     } else {
  //       user = await User.findByIdAndUpdate(req.params.id, {
  //         nom_prenom,
  //         email,
  //       });
  //       res.send(user);
  //     }
  //   } catch (err) {
  //     console.error(err.message);
  //     res.status(500).send("Server error");
  //   }
  // },
};

//fil browser fama storage pour le stockage parmi les on trouve local, cookie....
