const express = require('express');
const router = express.Router();
const messageController = require('../controllers/MessageController');

router.get('/', messageController.index);

router.get('/:id', messageController.getMessage);



module.exports = router;