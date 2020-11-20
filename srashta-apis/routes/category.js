var express = require('express');
var router = express.Router();
const categoryController = require('../controllers/category-controller');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([{ name: 'Express' }, { name: 'abc' }]);

});
router.post('/create',categoryController.create);

module.exports = router;
