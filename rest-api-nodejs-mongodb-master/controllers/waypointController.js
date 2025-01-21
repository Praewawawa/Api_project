const Waypoint = require('../models/Waypoint');

exports.createWaypoint = async (req, res) => {
    const { mission_id, waypoint_order, latitude, longitude, altitude, speed, command, parameters, robot_id } = req.body;
    try {
        const waypoint = new Waypoint({ mission_id, waypoint_order, latitude, longitude, altitude, speed, command, parameters, robot_id });
        await waypoint.save();
        res.status(201).json({ message: 'Waypoint created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};