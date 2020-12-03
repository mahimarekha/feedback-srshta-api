const db = require("../models");
const asyncLoop = require('node-async-loop');
const userDetailes = db.user_feedback_detailes;
const QAMODAL = db.qa;
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
    },
    getuser:(req, res)=>{
        QAMODAL.findAll({
            where: {
              CategoryId: req.body.CategoryId,
            } 
        }).then(function(queryResult){
            res.send(queryResult);
        }).catch(function(error){
            res.send(error);
        })       
    },
    getCategoryByQA:(req, res)=>{
        QAMODAL.findAll({
            where: {
                categoryId: req.body.categoryId, 
                userId :req.body.userId         
            }
          }).then(function(queryResult){ 
           res.send(queryResult);
            }).catch(function(error){
                res.send(error);
            });
    }
}