const Plato = require("../models/plato");

const platoCtrl = {};

platoCtrl.getPlatos = async (req, res, next) => {
  const plato = await Plato.find();
  res.json(plato);
};

platoCtrl.createPlato = async (req, res, next) => {
  const plato = new Plato({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  });
  await plato.save();
  res.json({ status: "plato created" });
};

platoCtrl.getPlato = async (req, res, next) => {
  const { id } = req.params;
  const plato = await Plato.findById(id);
  res.json(plato);
};

platoCtrl.editPlato = async (req, res, next) => {
  const { id } = req.params;
  await Plato.findByIdAndUpdate(id, { $set: req.body }, { new: true });
  res.json({ status: "Plato Updated" });
};

platoCtrl.deletePlato = async (req, res, next) => {
  await Plato.findByIdAndRemove(req.params.id);
  res.json({ status: "Plato Deleted" });
};

module.exports = platoCtrl;
