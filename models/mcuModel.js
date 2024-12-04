const mongoose = require("mongoose");

const mcuSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  film: {
    type: String,
  },
  year: {
    type: Number,
  },
});

const Mcu = mongoose.model("debuts", mcuSchema);

module.exports = Mcu;
