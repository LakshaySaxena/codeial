const express = require('express');

//The express. Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests. Multiple requests can be easily differentiated with the help of the Router() function in Express. js.
const router = express.Router();



router.use('/posts', require('./posts'));

module.exports= router;