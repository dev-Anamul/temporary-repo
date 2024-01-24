const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    comment: String,
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    documentId: {
      type: Schema.Types.ObjectId,
      refPath: "onModel",
    },
    onModel: {
      type: String,
      enum: ["Post", "Product"],
    },
  },
  {
    timestamps: true,
    methods: {},
    statics: {},
  }
);

const Comment = model("Comment", commentSchema);
module.exports = Comment;
