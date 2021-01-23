const mongoose = require('mongoose')

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'Must have name'
        ],
        minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
    },
    imgUrl: {
        type: String,
        required: [
            true,
            'Must have imgUrl'
        ],
        minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
    },
    treasure: {
        type: Number,
        required: [
            true,
            'Must have treasure'
        ]
    },
    position: {
        type: String,
        required: [
            true,
            'Must have name'
        ]
    },
    phreas: {
        type: String,
        required: [
            true,
            'Must have name'
        ]
    },

    pegLeg: {
        type: Boolean,
    },
    eyePatch: {
        type: Boolean,
    },
    hookHand: {
        type: Boolean,
    },
}, { timestamps: true })

module.exports.Pirate = mongoose.model('Pirate', PirateSchema)