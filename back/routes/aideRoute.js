const route = require("express").Router();

const aideController = require("../controllers/aideController");

route.post("/add", aideController.addAide);
route.get("/getallaide", aideController.getAllAideS);
route.patch("/updateAide/:id", aideController.updateAide);
route.delete("/deleteAide/:id", aideController.deleteAide);

module.exports = route;

// route.delete("/delateaide/:id", aideController.delateaide);
