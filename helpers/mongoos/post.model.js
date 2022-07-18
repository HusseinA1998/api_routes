import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: {
    require: true,
    type: String,
  },
  body: {
    require: true,
    type: String,
  },
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;
