const express = require('express');

//The express. Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests. Multiple requests can be easily differentiated with the help of the Router() function in Express. js.
const router = express.Router();
const homeController=require("../controllers/homeController");

console.log('router loaded');

router.get('/', homeController.home);

router.get('/welcome', homeController.welcome);

router.use('/users', require('./users'));

router.use('/posts', require('./posts'));
router.use('/comments', require('./comments'));

router.use('/api', require('./api'));

// for anty further routes, access from here
// router.use('/routerName', require('./routerfile));

//exporting this router so it will be available to index.js
module.exports = router;