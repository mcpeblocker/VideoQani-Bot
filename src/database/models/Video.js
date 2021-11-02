const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    file_id: {
        type: String,
        required: true
    }
});

const Video = mongoose.model('Video', videoSchema);

module.exports = { Video };