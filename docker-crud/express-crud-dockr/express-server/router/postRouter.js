const postController = require("../controller/postController");

const router = require("express").Router();

router
  .route("/")
  .get(postController.getAllPosts)
  .post(postController.createPost);

router
  .route("/:id")
  .get(postController.getPost)
  .patch(postController.updatePost)
  .delete(postController.deletePost);

module.exports = router;
