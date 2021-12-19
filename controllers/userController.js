const User = require('../models/user');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

exports.become_member_get = function (req, res) {
  if (!res.locals.currentUser) {
    return res.redirect('/log-in');
  }
  return res.render('confirmation-form', {
    title: 'Become a member',
    confirmationText: 'Please enter password to become a member',
    adviceText: "Click on 'Check the code !' down there to find secret password",
  });
};

exports.become_member_post = [
  body('password').trim().isLength({ min: 1 }).escape().withMessage('Password must be specified.'),

  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // If there is an error submitting the member validation form, re-render the form with an error
      return res.render('confirmation-form', {
        title: 'Become a member',
        confirmationText: 'Please enter password to become a member',
        adviceText: "Click on 'Check the code !' down there to find secret password",
        errors: errors.array(),
      });
    } else if (req.body.password !== process.env.MEMBER_PASSWORD) {
      return res.render('confirmation-form', {
        title: 'Become a member',
        confirmationText: 'Please enter password to become a member',
        adviceText: "Click on 'Check the code !' down there to find secret password",
        error: 'The password you entered is incorrect.',
      });
    }

    await User.findByIdAndUpdate(
      req.user._id,
      { $set: { member: true } },
      {},
      function (err, result) {
        if (err) return next(err);
        res.redirect('/');
      }
    );
  },
];

exports.cancel_membership_get = function (req, res) {
  if (!res.locals.currentUser) {
    return res.redirect('/log-in');
  }
  return res.render('confirmation-form', {
    title: 'Cancel membership',
    confirmationText: 'Please enter password to cancel membership',
    adviceText: "Click on 'Check the code !' down there to find secret password",
  });
};

exports.cancel_membership_post = [
  body('password').trim().isLength({ min: 1 }).escape().withMessage('Password must be specified.'),

  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // If there is an error submitting the member validation form, re-render the form with an error
      return res.render('confirmation-form', {
        title: 'Cancel membership',
        confirmationText: 'Please enter password to cancel membership',
        adviceText: "Click on 'Check the code !' down there to find secret password",
        errors: errors.array(),
      });
    } else if (req.body.password !== process.env.MEMBER_PASSWORD) {
      return res.render('confirmation-form', {
        title: 'Cancel membership',
        confirmationText: 'Please enter password to cancel membership',
        adviceText: "Click on 'Check the code !' down there to find secret password",
        error: 'The password you entered is incorrect.',
      });
    }

    await User.findByIdAndUpdate(
      req.user._id,
      { $set: { member: false } },
      {},
      function (err, result) {
        if (err) return next(err);
        res.redirect('/');
      }
    );
  },
];

exports.become_admin_get = function (req, res) {
  if (!res.locals.currentUser) {
    return res.redirect('/log-in');
  }
  return res.render('confirmation-form', {
    title: 'Become an admin',
    confirmationText: 'Please enter password to become an admin',
    adviceText: "Click on 'Check the code !' down there to find secret password",
  });
};

exports.become_admin_post = [
  body('password').trim().isLength({ min: 1 }).escape().withMessage('Password must be specified.'),

  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // If there is an error submitting the admin validation form, re-render the form with an error
      return res.render('confirmation-form', {
        title: 'Become an admin',
        confirmationText: 'Please enter password to become an admin',
        adviceText: "Click on 'Check the code !' down there to find secret password",
        errors: errors.array(),
      });
    } else if (req.body.password !== process.env.ADMIN_PASSWORD) {
      return res.render('confirmation-form', {
        title: 'Become an admin',
        confirmationText: 'Please enter password to become an admin',
        adviceText: "Click on 'Check the code !' down there to find secret password",
        error: 'The password you entered is incorrect.',
      });
    }

    await User.findByIdAndUpdate(
      req.user._id,
      { $set: { admin: true } },
      {},
      function (err, result) {
        if (err) return next(err);
        res.redirect('/');
      }
    );
  },
];

exports.cancel_adminship_get = function (req, res) {
  if (!res.locals.currentUser) {
    return res.redirect('/log-in');
  }
  return res.render('confirmation-form', {
    title: 'Cancel adminship',
    confirmationText: 'Please enter password to cancel adminship',
    adviceText: "Click on 'Check the code !' down there to find secret password",
  });
};

exports.cancel_adminship_post = [
  body('password').trim().isLength({ min: 1 }).escape().withMessage('Password must be specified.'),

  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // If there is an error submitting the admin validation form, re-render the form with an error
      return res.render('confirmation-form', {
        title: 'Cancel adminship',
        confirmationText: 'Please enter password to cancel adminship',
        adviceText: "Click on 'Check the code !' down there to find secret password",
        errors: errors.array(),
      });
    } else if (req.body.password !== process.env.ADMIN_PASSWORD) {
      return res.render('confirmation-form', {
        title: 'Cancel adminship',
        confirmationText: 'Please enter password to cancel adminship',
        adviceText: "Click on 'Check the code !' down there to find secret password",
        error: 'The password you entered is incorrect.',
      });
    }

    await User.findByIdAndUpdate(
      req.user._id,
      { $set: { admin: false } },
      {},
      function (err, result) {
        if (err) return next(err);
        res.redirect('/');
      }
    );
  },
];
