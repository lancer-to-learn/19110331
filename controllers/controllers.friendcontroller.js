// const {friends} = require('../models/models.mygroup');

// function friendRequest (req, res) {
//     const ID = Number(req.params.friendID);
//     const friend = friends[ID];
//     if (friend) {
//         res.status(200).json(friend);
//     }
//     else {
//         res.status(400).json({error:'No friend'});
//     }
// }

// function friendAdd(req, res) {
//     const mssv = req.params.MSSV;
//     const ID = Number(req.params.ID);
//     const friend = friends[ID];
//     if (friend && friend.id===mssv) {      
//         res.status(400).json({error:'Not valid'});
//     }
//     else {
//         friends.push(friend);
//     }
// }

// function message(req, res) {
    
// }
// module.exports = {
//     friendRequest
// }