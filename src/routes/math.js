const express = require('express');
const router = express.Router();
const addController = require('../controllers/addController');
const subtractController = require('../controllers/subtractController');
const multiplyController = require('../controllers/multiplyController');

// Routes for addition, subtraction, and multiplication
router.post('/add', addController);
router.post('/subtract', subtractController);
router.post('/multiply', multiplyController);

module.exports = router;
