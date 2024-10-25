const mongoose = require("mongoose");
const Pengguna = mongoose.model("Pengguna");

//untuk menghandle request get all Pengguna
const index = (req, res, next) => {
    Pengguna.find({}, { __v: 0 })
      .then((pgn) => {
        const responseMessage = {
            code: 200,
            success: true,
            message: "Successfull",
            data: pgn
        };
        res.status(200).json(responseMessage);
      })
      .catch((e) => {
        const responseMessage = {
            code: 400,
            success: false,
            message: "Failed"
        };
        res.status(400).json(responseMessage);
      });
};

//untuk menghandle request insert pengguna
const insert = (req, res, next) => {
    const pgn = new Pengguna({
      nama: req.body.nama,
      npm: req.body.npm,
      email: req.body.email,
      password: req.body.password,
      alamat: req.body.alamat,
      tanggal_lahir: req.body.tanggal_lahir,
      aktif: true
    });
  
    pgn
      .save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: true,
                message: "Failed"
            };
            res.status(400).json(responseMessage);
        });
};