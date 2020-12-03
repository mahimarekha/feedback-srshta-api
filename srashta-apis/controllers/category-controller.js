const db = require("../models");
const asyncLoop = require('node-async-loop');
const category = db.categorytype;
module.exports = {
    create: (req, res) => {
        console.log(req.body)
       category.create(req.body)
       .then(data => {
           if (data) {
               res.status(200).send(data)
           }
       }).catch(e => {
           console.log(e)
           res.status(500).send('Category has failed, try again.')
       })
    },
    
    getrating:(req, res) =>{
      
        category.findAll({
            where: {
              userId: req.body.userId           
            }
          }).then(function(queryResult){ 
           res.send(queryResult);
            }).catch(function(error){
                res.send(error);
            });
    },
  
}