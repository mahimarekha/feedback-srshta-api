var express = require('express');
var router = express.Router();
const registrationController = require('../controllers/registration-controller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send([{ title: 'Express' }]);
});
router.post('/api/register', registrationController.create);
router.post('/api/login', registrationController.login);
module.exports = router;
