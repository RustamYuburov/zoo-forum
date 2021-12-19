const Message = require('../models/message');

const { body, validationResult } = require('express-validator');

exports.create_message_get = function (req, res) {
  if (!res.locals.currentUser) {
    return res.redirect('/log-in');
  }
  return res.render('message-form', { title: 'Create a new message' });
};

exports.create_message_post = [
  body('title', 'Title should be at least 2 characters long.')
    .trim()
    .isLength({ min: 2, max: 100 })
    .escape(),
  body('text', 'Message text must be specified.').trim().isLength({ min: 2, max: 2000 }).escape(),

  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render('message-form', { title: 'Create a new message', errors: errors.array() });
    }

    const message = new Message({
      user: req.user._id,
      title: req.body.title,
      text: req.body.text,
    });

    await message.save((err) => {
      if (err) return next(err);
      res.redirect('/');
    });
  },
];

exports.delete_message_post = (req, res, next) => {
  if (!res.locals.currentUser) {
    return res.redirect('/log-in');
  } else if (res.locals.currentUser && !res.locals.currentUser.admin) {
    return res.redirect('/become-admin');
  } else {
    // Remove the message using the id from the database
    Message.findByIdAndRemove(req.body.messageid, function deleteMessage(err) {
      if (err) return next(err);
      return res.redirect('/');
    });
  }
};
