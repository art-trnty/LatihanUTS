var express = require('latihanuts');
var router = express.Router();

const pgnController = require('../controllers/penggunan');
router.get("/", pgnController.index); //list mahasiswa
router.post("/insert", pgnController.insert); //insert mahasiswa

module.exports = router