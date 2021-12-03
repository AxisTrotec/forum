const { body, validationResult } = require("express-validator");

var general = require("../models/general");
var offtopic = require("../models/offtopic");
var technology = require("../models/technology");

exports.technology_list = function (req, res) {
  technology
    .find()
    .sort([["date", "ascending"]])
    .exec(function (err, comment) {
      if (err) {
        return next(err);
      }
      res.render("technology_list", {
        title: "Technology",
        comments_list: comment,
      });
    });
};

exports.technology_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: technology delete GET");
};

exports.technology_create_get = function (req, res) {
  res.render("technology_form", { title: "Create post" });
};

exports.technology_create_post = function (req, res) {
  body("username", "Please enter your username.").escape(),
    body("message", "Please enter your message.").escape();

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render("technology_form", {
      title: "Create post",
      errors: errors.array(),
    });
    return;
  } else {
    var post = new technology({
      username: req.body.username,
      message: req.body.message,
    });

    post.save(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/catalog/technology");
    });
  }
};

exports.technology_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: technology delete GET");
};

exports.technology_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: technology delete POST");
};

exports.technology_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: technology update GET");
};

exports.technology_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: technology update POST");
};
