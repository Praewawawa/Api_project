const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const missionPlannerSchema = new Schema({
    mission_name: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    created_by: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('MissionPlanner', missionPlannerSchema);