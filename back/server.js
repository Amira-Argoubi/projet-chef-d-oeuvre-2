const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cookie = require("cookie-parser");
const multer = require("multer"); //Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form//
const aideRoute = require("./routes/aideRoute");
const authentifRoute = require("./routes/authRoute");

const app = express();
app.use(cookie());

app.use(express.json());
/************ méthode nista3mlouha m3a cookie qui fait le lien entre les ports front -back au lieu du CORS qui est utilisé au cas de local storage******* */
// front - back connection ( cors job ) // this or cors(cors works just with local storage) or proxy(with proxy you put in package.json "proxy" : url of the backend)// NB : this middleware works with cookies and session cause it has the same logic : they both storage the token in the back and send it to the front unlike the local storage which storage the token in the front.

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  );
  next();
});

app.use("/chef-d'oeuvre/aides", aideRoute);
app.use("/chef-d'oeuvre/authentif", authentifRoute);

/******************** Connect to DB *********************** */

const db = config.get("mongo_URI");

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log("amira", err));

/*********************************************************** */
//upload image
const path = require("path");

//upload image/;
app.use(express.static("./public"));

app.get("/", (req, res) => res.send("index"));
// Set The Storage Engine
const storage = multer.diskStorage({
  destination: "./public",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

// Init Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 3000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("file");

app.post("/image", (req, res) => {
  upload(req, res, (err) => {
    console.log("immage", req.file);
    if (err) {
      res.send({ msg: err });
    } else {
      if (req.file == undefined) {
        res.send({ msg: "Error: No File Selected!" });
      } else {
        if (req.file) res.send(req.file.filename);
        else res.send("file undefind");
      }
    }
  });
});

app.listen(8000, () => {
  console.log("you're connected on 8000");
});
/***************** Init Upload *************************/
/*app.use(express.static("./public"));
const storage = multer.diskStorage({
  destination: "./public",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
//Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
const upload = multer({
  //storage: storage,
  limits: { fileSize: 3000000 },
}).single("image");
app.post("/image", (req, res) => {
  upload(req, res, (err) => {
    console.log("immage", req.file);
    if (err) {
      res.send({ msg: err });
    } else {
      if (req.file == undefined) {
        res.send({ msg: "Error: No File Selected!" });
      } else {
        if (req.file) res.send(req.file.filename);
        else res.send("file undefind");
        console.log(req.file);
      }
    }
  });
});

/****************** upload img ******************* */

//   app.use(express.static('./uploads'))
// const storage = multer.diskStorage({
//   destination: "./uploads",
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
// // Init Upload
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 3000000 },
// }).single("imageThree");
// app.post("/", (req, res) => {
//   upload(req, res, (err) => {
//     console.log("immage", req.file);
//     if (err) {
//       res.send({ msg: err });
//     } else {
//       if (req.file == undefined) {
//         res.send({ msg: "Error: No File Selected!" });
//       } else {
//         if (req.file) res.send(req.file.filename);
//         else res.send("file undifind");
//         console.log(req.file);
//       }
//     }
//   });
// });
