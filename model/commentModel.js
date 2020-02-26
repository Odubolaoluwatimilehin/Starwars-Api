
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
      },
    commentDate: {
      type: Date,
      minlength: 500,
      default: new Date().toISOString()
    }
});


module.exports = Comment = mongoose.model("Comment", commentSchema);

