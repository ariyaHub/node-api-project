const express = require('express');
const router = express.Router();
const addController = require('../controllers/addController');

// เปลี่ยนจาก addController.addNumbers เป็น addController
router.post('/add', addController);

module.exports = router;