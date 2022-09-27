const {myGroup} = require('../models/models.mygroup');

class MssvController {
    //Get [/]
    index (req, res) {
        res.status(200).json(myGroup);
    }
}

module.exports = new MssvController;