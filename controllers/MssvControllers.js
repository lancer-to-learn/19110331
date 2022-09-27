const {myGroup} = require('../models/models.mygroup');

function check(id){
    for (var i=0;i<myGroup.length;i++) {
        if (myGroup[i].id===id) {
            return i;
        }
    }
    return -1;
}

class MssvController {

    
    //Get [19110331/:id]
    getByID(req, res) {
        const ID = req.params.id;
        let i = check(ID);
        if (i>-1) {
            res.status(200).json(myGroup[i]);
        } 
        else {
            res.status(400).json({error: 'not valid'});
        }
        
    }

    //Post [19110331/:id]
    postItem(req,res) {
        console.log(`${req.body}`);
        const ID = req.body.id;
        if (check(ID)>-1 || (ID !== '19110331' && ID !== '19110494' && ID !== '19110493')) {
            res.status(400).json({error: 'Not valid'});
        } else {
            const tv = {id:req.body.id, name:req.body.name};
            myGroup.push(tv);
            res.status(200).json(myGroup);
        }
       
    }
}

module.exports = new MssvController;