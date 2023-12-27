import mongoose from "mongoose";
const { Schema } = mongoose;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  topics: [
    {
      type: String,
    },
  ],
  content: {
    type: String,
    required: true,
  },
  image: [
    {
      type: String,
    },
  ],
  slug: { type: String },
});

const PostModel = mongoose.model("Post", PostSchema);
export default PostModel;
