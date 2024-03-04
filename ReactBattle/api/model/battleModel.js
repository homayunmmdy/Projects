const mongoose = require('mongoose');

const battleSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    desc: {
        type : String,
        required : true
    },
    imgUrl: {
        type : String,
    },
    videoUrl: {
        type : String,
    }
});

const Battle = mongoose.model('Battle', battleSchema);

module.exports = Battle;