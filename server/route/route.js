const express = require("express");
const router = express.Router();

const {
  getPost,
  getPosts,
  createPost,
  deletePost,
  updatePosts,
} = require("../controller/postController");
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.patch("/:id", updatePosts);
router.delete("/:id", deletePost);

module.exports = router;
