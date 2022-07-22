const mongoose = require("mongoose");
Schema = mongoose.Schema;

const platoSchema = new Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
});

module.exports = mongoose.model("Plato", platoSchema);
