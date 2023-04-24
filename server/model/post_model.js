const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  imageUrl: { type: String },
  createdAt: { type: Date },
  updateAt: { type: Date },
  // updateAt:mongoose.Schema.Types.ObjectId
});
module.exports = mongoose.model("post", postSchema);
