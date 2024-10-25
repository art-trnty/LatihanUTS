var express = require('latihanuts');
var router = express.Router();

const pgnController = require('../controllers/penggunan');
router.get("/", pgnController.index); 
router.post("/insert", pgnController.insert); 

module.exports = router