var express = require('express');
var router = express.Router();

const pgnController = require('../controllers/pengguna');
router.get("/", pgnController.index); 
router.post("/insert", pgnController.insert); 

module.exports = router;