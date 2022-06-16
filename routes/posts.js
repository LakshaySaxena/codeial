const express = require('express');
const router = express.Router();

const PostConrtoller = require('../controllers/postController');

router.get('/likes', PostConrtoller.likes);


module.exports = router;