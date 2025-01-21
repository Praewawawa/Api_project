const MissionPlanner = require('../models/MissionPlanner');

exports.createMission = async (req, res) => {
    const { mission_name, created_by } = req.body;
    try {
        const mission = new MissionPlanner({ mission_name, created_by });
        await mission.save();
        res.status(201).json({ message: 'Mission created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};