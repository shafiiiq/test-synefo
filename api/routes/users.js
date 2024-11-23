var express = require('express');
const userControler = require('../controllers/user.controler');
var router = express.Router();

router.post('/book', userControler.book)

router.get('/check-availability', userControler.check)

module.exports = router;
