const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const waypointSchema = new Schema({
    mission_id: { type: Schema.Types.ObjectId, ref: 'MissionPlanner' },
    waypoint_order: { type: Number, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    altitude: { type: Number, required: true },
    speed: { type: Number, required: true },
    command: { type: String, required: true },
    parameters: { type: String, required: true },
    robot_id: { type: Schema.Types.ObjectId, ref: 'Robot' }
});

module.exports = mongoose.model('Waypoint', waypointSchema);