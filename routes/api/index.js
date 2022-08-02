const express = require('express');

//The express. Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests. Multiple requests can be easily differentiated with the help of the Router() function in Express. js.
const router = express.Router();

router.use('/v1', require('./v1'));

router.use('/v2', require('./v2'));

module.exports= router;