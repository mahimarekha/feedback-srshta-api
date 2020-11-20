var express = require('express');
var router = express.Router();
const ratingController = require('../controllers/rating-controller');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([{ name: 'Express' }, { name: 'abc' }]);

});
router.post('/rating/create',ratingController.create);
router.post('/rating/getratinglist',ratingController.getrating);
router.post('/rating/add', function(req, res,next ){
 req.body.sum=req.body.first+req.body.sec;
 req.body.name="sudheer"
    res.send( req.body)
})

module.exports = router;
