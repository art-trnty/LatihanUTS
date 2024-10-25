const mongoose = require("mongoose");
const Pengguna = mongoose.models("Pengguna");

const index = (req, res, next) => {
    Pengguna.find({}, { __v: 0 })
      .then((pgn) => {
        const responseMessage = {
            code: 200,
            success: true,
            message: "Successfull",
            data: mhs
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

    const pgn = new Pengguna({
      nama: req.body.nama,
      email: req.body.email,
      password: req.body.password,
      alamat: req.body.alamat,
      tanggal_daftar: req.body.tanggal_daftar,
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

