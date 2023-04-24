const mongoose = require("mongoose");
const Joi = require("@hapi/joi"); // for validation
const post = require("../model/post_model");
const getPosts = (req, res) => {
  res.send("Get all Post");
};

const getPost = (req, res) => {
  res.send("Get Single Post");
};

const createPost = async (req, res) => {
  let data = req.body;
  let { title, body } = data;
  const schema = Joi.object({
    title: Joi.string().min(4).max(30).required(),
    body: Joi.string().min(5).max(100).required(),
  });
  try {
    const validationErr = schema.validate(data, { abortEarly: false });
    if (validationErr && validationErr.error) {
      let message = validationErr.error.details.map((dat) => {
        return dat.message;
      });
      return res.status(422).json({ message });
    }
    data.createPost = Date.now();
    let newpost = post(data);
    let result = await newpost.save(data);
    res.status(200).json({
      status: "Ok",
      newpost: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deletePost = (req, res) => {
  res.send("Delete all Post");
};

const updatePosts = (req, res) => {
  res.send("Update all Post");
};

module.exports = {
  getPost,
  getPosts,
  createPost,
  deletePost,
  updatePosts,
};
