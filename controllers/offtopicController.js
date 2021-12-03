const { body, validationResult } = require("express-validator");

var general = require("../models/general");
var offtopic = require("../models/offtopic");
var technology = require("../models/technology");

exports.offtopic_list = function (req, res) {
  offtopic
    .find()
    .sort([["date", "ascending"]])
    .exec(function (err, comment) {
      if (err) {
        return next(err);
      }
      res.render("offtopic_list", {
        title: "Off-Topic",
        comments_list: comment,
      });
    });
};

exports.offtopic_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: offtopic delete GET");
};

exports.offtopic_create_get = function (req, res) {
  res.render("offtopic_form", { title: "Create post" });
};

exports.offtopic_create_post = function (req, res) {
  body("username", "Please enter your username.").escape(),
    body("message", "Please enter your message.").escape();

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render("offtopic_form", {
      title: "Create post",
      errors: errors.array(),
    });
    return;
  } else {
    var post = new offtopic({
      username: req.body.username,
      message: req.body.message,
    });

    post.save(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/catalog/offtopic");
    });
  }
};

exports.offtopic_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: offtopic delete GET");
};

exports.offtopic_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: offtopic delete POST");
};

exports.offtopic_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: offtopic update GET");
};

exports.offtopic_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: offtopic update POST");
};
