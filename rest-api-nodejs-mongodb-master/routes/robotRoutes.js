const express = require('express');
const { getAllRobots, createRobot, deleteRobot } = require('../controllers/robotController');
const router = express.Router();



router.post('/robot', createRobot);
router.get('/robots', getAllRobots);
router.delete('/robot/:id', deleteRobot);

module.exports = router;