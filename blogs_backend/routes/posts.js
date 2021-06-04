const express = require("express");
const router = express.Router();
const {
  getPosts,
  addPost,
  deletePost,
  updatePost,
} = require("../controller/postsController");
router.route("/").get(getPosts).post(addPost);
router.route("/:id").delete(deletePost).put(updatePost);
// router.route("/update").post(updatePost);
module.exports = router;
