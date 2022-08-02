const express = require('express');

//The express. Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests. Multiple requests can be easily differentiated with the help of the Router() function in Express. js.
const router = express.Router();
const api= require('../../../controllers/api/v2/posts_api')


router.get('/', api.index);
module.exports= router;