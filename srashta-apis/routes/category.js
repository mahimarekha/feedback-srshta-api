var express = require('express');
var router = express.Router();
const categoryController = require('../controllers/category-controller');
const detailesController = require('../controllers/detailes-controller')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([{ name: 'Express' }, { name: 'abc' }]);

});
router.post('/create',categoryController.create);
router.post('/getrating', categoryController.getrating);
router.post('/getCategoryByQA', detailesController.getCategoryByQA );
module.exports = router;
