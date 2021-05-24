var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var postsRouter = require("./routes/posts");
const Lowdb = require("lowdb");
const { setCors } = require("./middleware/security");
var app = express();

app.use(logger("dev"));
const adapter = new FileSync("data/db.json");
const db = low(adapter);
db.defaults({
  posts: [],
}).write();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(setCors);
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use((err, req, res, next) => {
  res.status(500).send({
    error: {
      message: err.message,
    },
  });
});
module.exports = app;
