let mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    body: {
        type: String
    },
    img: {
        type: String
    },
    date: {
        type: String
    },
    time: {
        type: String
    }
});

module.exports = mongoose.model("Post", schema);