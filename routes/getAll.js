const express = require('express');
const router = express.Router();
const getController = require('../controllers/GetController');


router.get('/', getController.index);



module.exports = router;