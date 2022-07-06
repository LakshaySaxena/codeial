const express = require('express');
const router = express.Router();
const passport = require('passport');

const PostController = require('../controllers/posts_controller');


//passport.checkAuthentication--> if user is signed in only thrn create form should be visible
router.post('/create',passport.checkAuthentication,PostController.create);


module.exports = router;