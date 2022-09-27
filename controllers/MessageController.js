const {myGroup} = require('../models/models.mygroup');

function check(id){
    for (var i=0;i<myGroup.length;i++) {
        if (myGroup[i].id===id) {
            return i;
        }
    }
    return -1;
}

class MessageController {
    //Get [message/]
    index(req, res) { 
        var s = "";
        for (var i=0;i<myGroup.length;i++) {
            s += `<li>${myGroup[i].name}</li>`;
        }        
        res.send(`<html><body><ul>${s}</ul></body></html>`);            
    }
    
    //Get [message/:id]
    getMessage(req, res) {
        const ID = req.params.id;
                if (check(ID)>-1) {                   
                    res.send(`<html><head><meta charset="utf-8"><title>19110331</title></head><body><ul><li>${myGroup[check(ID)].name}</li></ul></body></html>`);
                }
                else {
                    res.send(`<html><head><meta charset="utf-8"><title>19110331</title></head><body><ul><li>Not valid</li></ul></body></html>`);
                }
        
    }
}

module.exports = new MessageController;