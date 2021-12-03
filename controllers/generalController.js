const { body, validationResult } = require("express-validator");

var general = require("../models/general");
var offtopic = require("../models/offtopic");
var technology = require("../models/technology");

exports.index = function (req, res) {
  res.render("index", { title: "FORUM" });
};

exports.general_list = function (req, res) {
  general
    .find()
    .sort([["date", "ascending"]])
    .exec(function (err, comment) {
      if (err) {
        return next(err);
      }
      res.render("general_list", { title: "General", comments_list: comment });
    });
};

exports.general_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: spendings delete GET");
};

exports.general_create_get = function (req, res) {
  res.render("general_form", { title: "Create post" });
};

exports.general_create_post = function (req, res) {
  body("username", "Please enter your username.").escape(),
    body("message", "Please enter your message.").escape();

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render("general_form", {
      title: "Create post",
      errors: errors.array(),
    });
    return;
  } else {
    var post = new general({
      username: req.body.username,
      message: req.body.message,
    });

    post.save(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/catalog/general");
    });
  }
};

exports.general_delete_get = function (req, res) {
  async.parallel(
    {
      general: function (callback) {
        general.findById(req.params.id).exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.author == null) {
        // No results.
        res.redirect("/catalog/general");
      }
      // Successful, so render.
      res.render("general_delete", {
        title: "Delete",
        username: results.username,
        message: results.message,
      });
    }
  );
};

exports.general_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: spendings delete POST");
};

exports.general_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: spendings update POST");
};

exports.general_update_post = function (req, res, next) {
  body("username", "Please enter your username.").escape(),
    body("message", "Please enter your message.").escape();

  const errors = validationResult(req);

  var general = new general({
    username: req.body.username,
    message: req.body.message,
    _id: req.params.id,
  });

  if (!errors.isEmpty()) {
    res.render("general_form", {
      title: "Update Book",
      authors: results.authors,
      genres: results.genres,
      book: book,
      errors: errors.array(),
    });
    return;
  } else {
    // Data from form is valid. Update the record.
    general.findByIdAndUpdate(
      req.params.id,
      book,
      {},
      function (err, thegeneral) {
        if (err) {
          return next(err);
        }
        // Successful - redirect to book detail page.
        res.redirect("/catalog/general");
      }
    );
  }
};
