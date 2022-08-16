const mongoose = require('mongoose');

const SocialSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true,
        unique: true,
    },
    img: {
        type: String,
        required: true
    },
    text: {
        type: String,
        default: false
    },
    url: {
        type: String,
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Social', SocialSchema);