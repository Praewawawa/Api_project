const Robot = require('../models/Robot');

exports.getAllRobots = async (req, res) => {
    try {
        const robots = await Robot.find();
        res.status(200).json(robots);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createRobot = async (req, res) => {
    const { namerobot, wind_speed, wind_direction, chemical_level, battery_level, spray_system, mission_id } = req.body;
    try {
        const robot = new Robot({ namerobot, wind_speed, wind_direction, chemical_level, battery_level, spray_system, mission_id });
        await robot.save();
        res.status(201).json({ message: 'Robot created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteRobot = async (req, res) => {
    const { id } = req.params;
    try {
        await Robot.findByIdAndDelete(id);
        res.status(200).json({ message: 'Robot deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};