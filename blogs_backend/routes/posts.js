const express = require("express");
const router = express.Router();
const {
  getPosts,
  addPost,
  deletePost,
  updatePost,
} = require("../controller/postsController");
router.route("/").get(getPosts).post(addPost).delete(deletePost);
router.route("/update").post(updatePost);
module.exports = router;
