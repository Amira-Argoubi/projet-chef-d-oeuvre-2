const RatingSchema = require("../models/ratingSchema");

 /**************** Get Rating *********************** */
 module.exports={
     getRating: async (req, res) => {
    const star = await RatingSchema.find();

    res.json(star);
  },
  /**********************************ADD rating ************************* */
addRating:(req,res)=>{
console.log(req.body)
    const newRating = new RatingSchema(req.body);

    newRating
      .save()
      .then(() => res.status(200).send("rating added"))
      .catch((err) => res.status(401).send(err));
}
}