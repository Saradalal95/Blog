const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("data/db.json");
const db = low(adapter);
exports.getPosts = (req, res) => {
  try {
    const posts = db.get("posts").value();
    res.status(200).send(posts);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.addPost = (req, res, next) => {
  try {
    if (req.body.name === "") {
      const error = new Error("there is no post to add");
      error.status = 400;
      error.stack = null;
      next(error);
    } else {
      const post = req.body;
      db.get("posts")
        .push(post)
        .last()
        .assign({ id: Math.floor(Math.random() * 10).toString() })
        .write();
      res.status(201).send(post);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.deletePost = (req, res, next) => {
  try {
    const inputId = req.body.id;
    db.get("posts").remove({ id: inputId }).write();
    res.status(200).send("Success");
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.updatePost = (req, res, next) => {
  try {
    const postId = req.body.id;
    const post = db.get("posts").find({ id: postId }).value();
    db.get("posts")
      .find({ id: postId })
      .assign({
        title: req.body.title,
        content: req.body.content,
      })
      .write();
    res.status(200).send(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
