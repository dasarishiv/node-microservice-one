const express = require('express');
const searchRoutes = require('./searchRoute');
const router = express.Router();

router.use('/search', searchRoutes);

module.exports = router;