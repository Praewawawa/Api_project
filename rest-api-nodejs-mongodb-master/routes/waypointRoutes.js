const express = require('express');
const { createWaypoint } = require('../controllers/waypointController');
const router = express.Router();

router.post('/waypoint', createWaypoint);

module.exports = router;