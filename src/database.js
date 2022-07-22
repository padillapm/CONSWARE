const mongoose = require("mongoose");

const URI =
  "mongodb+srv://melowi:<Always1030>@lista.oebpn.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("db is connected"))
  .catch((err) => console.error(err));

module.exports = mongoose;
