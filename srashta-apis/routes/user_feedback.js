var express = require('express');
var router = express.Router();
const feedbackController = require('../controllers/feedback-controller');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([{ name: 'Express' }, { name: 'abc' }]);

});
router.post('/create',feedbackController.create);

module.exports = router;
