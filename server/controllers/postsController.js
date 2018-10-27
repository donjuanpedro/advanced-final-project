let PostModel = require("../models/postModel");

module.exports.list = function list(req, res) {
    PostModel.find({}).exec()
    .then(post => {
        res.json(post);
    });
}
module.exports.show = function show(req, res) {
    PostModel.findById(req.params.id).exec()
    .then(post => {
        res.json(post);
    });
}
module.exports.create = function create(req,res) {
    const newPost = new PostModel(req.body);
    newPost.save()
    .then(savedPost =>{
        res.json(savedPost);
    });
}