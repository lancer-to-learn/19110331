const express = require('express');
const router = express.Router();
const mssvController = require('../controllers/MssvControllers');


router.get('/:id', mssvController.getByID);

router.post('/:id', mssvController.postItem)



module.exports = router;