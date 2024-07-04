const express = require('express');
const { login, signup } = require('../controllers/authController');
const router = express.Router();

router.get("/auth"  , login)
router.get("/auth"  , signup)





module.exports = router; 