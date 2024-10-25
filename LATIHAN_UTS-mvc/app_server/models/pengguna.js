let mongoose = require("mongoose");

let schemaPgn = new mongoose.Schema({
  nama: String,
  npm: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
  },

    password: {
    type: String,
    require: true,
  },

    alamat: {
    type: String,
    require: true,
  },

  tanggal_lahir: {
    type: Date,
  },
  aktif: Boolean,
});

//create Model from Schema
mongoose.model("Pengguna", schemaPgn);