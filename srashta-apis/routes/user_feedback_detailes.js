var express = require('express');
var router = express.Router();
const detailesController = require('../controllers/detailes-controller');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([{ name: 'Express' }, { name: 'abc' }]);

});
router.post('/create',detailesController.create);

module.exports = router;
