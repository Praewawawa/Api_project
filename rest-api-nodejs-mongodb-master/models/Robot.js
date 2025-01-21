const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const robotSchema = new Schema({
    namerobot: { type: String, required: true },
    wind_speed: { type: Number, required: true },
    wind_direction: { type: String, enum: ['N', 'S', 'E', 'W'], required: true },
    chemical_level: { type: Number, required: true },
    battery_level: { type: Number, required: true },
    spray_system: { type: Boolean, required: true },
    mission_id: { type: Schema.Types.ObjectId, ref: 'MissionPlanner' }
    
});

module.exports = mongoose.model('Robot', robotSchema);