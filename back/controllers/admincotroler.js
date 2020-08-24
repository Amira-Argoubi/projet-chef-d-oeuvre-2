
module.exports = {
getoneAide: async (req, res) => {
    const aide = await AideSchema.findById(req.params.id)
    res.status(200).send(aide);
  },
  delateaide: (req, res) => {
    AideSchema.findByIdAndDelete(req.params.id, (req, donner) => {
      res.status(200).send(donner);
    });
  }
}