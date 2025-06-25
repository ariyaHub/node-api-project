const express = require('express');
const router = express.Router();
const addController = require('../controllers/addController');
const subtractController = require('../controllers/subtractController');

// Routes for addition and subtraction
router.post('/add', addController);
router.post('/subtract', subtractController);

module.exports = router;
