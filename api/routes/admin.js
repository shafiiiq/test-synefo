var express = require('express');
const adminControler = require('../controllers/admin.controler');
var router = express.Router();

router.post('/add-rooms', adminControler.addRoom)

module.exports = router;
