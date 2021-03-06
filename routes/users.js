const express = require('express');
const router = express.Router();
const passport= require('passport');


const userController = require('../controllers/userController');

router.get('/profile/:id',passport.checkAuthentication, userController.profile);
router.post('/update/:id', passport.checkAuthentication, userController.update);

router.get('/signup', userController.signup);

router.get('/login', userController.login);


router.post('/create', userController.create);

router.post('/create-session', passport.authenticate(
'local',
{failureRedirect:'/users/login'},
),userController.createsession);


router.get('/sign-out', userController.DestroySession);

module.exports = router;