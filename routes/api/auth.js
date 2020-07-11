const express = require('express');
const router = express.Router();

// @route  GET api/auth
// @desc   auth route
// @access Public
router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;
