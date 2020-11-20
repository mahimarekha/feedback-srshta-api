const db = require("../models");
const asyncLoop = require('node-async-loop');
const userDetailes = db.user_feedback_detailes;
module.exports = {
    create: (req, res) => {
        userDetailes.create(req.body)
       .then(data => {
           if (data) {
               res.status(200).send(data)
           }
       }).catch(e => {
           console.log(e)
           res.status(500).send('feedback has failed, try again.')
       })
    },
    getrating:(req, res) =>{
        QAMODAL.findAll({
            where: {
              userId: req.body.userId,
              ratingTypeId: req.body.ratingType
            }
          }).then(function(queryResult){ 
           res.send(queryResult);
            }).catch(function(error){
                res.send(error);
            });
    }
}