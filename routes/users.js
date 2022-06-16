const express = require('express');
const router = express.Router();

const usersConrtoller = require('../controllers/userController');

router.get('/profile', usersConrtoller.profile);


module.exports = router;