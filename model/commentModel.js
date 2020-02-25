
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
      }
});


module.exports = Comment = mongoose.model("Comment", commentSchema);

