const express = require('express');
const { createMission } = require('../controllers/missionController');
const router = express.Router();

router.post('/mission', createMission);

module.exports = router;