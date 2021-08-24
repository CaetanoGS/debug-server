const express = require('express');
const router = express.Router();
const gigyaAccRegister = require('../controllers/sendAccountRegisterRequest');


router.post('/gigya/account/register', gigyaAccRegister.registerAcc);



module.exports = router;