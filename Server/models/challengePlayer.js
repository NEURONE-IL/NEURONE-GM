const mongoose = require('mongoose');
const { Schema } = mongoose;

const ChallengePlayerSchema = new Schema({
    app_code: { type: String, required: true},
    player: { type: Schema.Types.ObjectId, ref: 'Player'},
    challenge: { type: Schema.Types.ObjectId, ref: 'Challenge'},
    completed: {type: Boolean, required: true},
    start_date: {type: Date, required: true},
    end_date: {type: Date, required: true},
    active: {type: Boolean, required: true},
    badge: { type: Schema.Types.ObjectId, ref: 'Badge'},
});

module.exports = mongoose.model('ChallengePlayer', ChallengePlayerSchema);
