// models/CurrentAffair.js
import mongoose from 'mongoose';

const currentAffairSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const CurrentAffair = mongoose.model('CurrentAffair', currentAffairSchema);
export default CurrentAffair;
