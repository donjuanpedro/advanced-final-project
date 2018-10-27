let mongoose = require("mongoose");

const schema = new.mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    body: {
        required: true,
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