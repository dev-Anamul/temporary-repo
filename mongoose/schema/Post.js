const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    title: String,
    description: String,
    image: String,
    category: String,
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    methods: {},
    statics: {},
  }
);

const Post = model("Post", postSchema);
module.exports = Post;
