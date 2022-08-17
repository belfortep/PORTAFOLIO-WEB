const Router = require('express')
const router = Router();
const socialController = require('../controllers/socialController');


router.get('/', socialController.getAllSocial);




module.exports = router