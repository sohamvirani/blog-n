const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"userSchema"
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"adminSchema"
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"blogSchema"
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  property: {
    type: String,
    required: true,
    trim: true,
  },
});

const comment = mongoose.model("commentSchema", commentSchema);

module.exports = comment;

