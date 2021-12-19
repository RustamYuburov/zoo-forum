var express = require('express');
var router = express.Router();

// Models
const Message = require('../models/message');

// Controllers
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const messageController = require('../controllers/messageController');

/* GET home page. */
router.get('/', async (req, res) => {
  try{
   const allMessages = await Message
      .find()
      .sort([['post_date', 'descending']])
      .populate('user');

   console.log('user :' + res.locals.currentUser);
   return res.render('index',{ title: 'Homepage', user: res.locals.currentUser, messages: allMessages});
  } catch(err){
    return next (err) 
  }
});

// Authentication routes
router.get('/sign-up', authController.sign_up_get);
router.post('/sign-up', authController.sign_up_post);
router.get('/log-in', authController.log_in_get);
router.post('/log-in', authController.log_in_post);
router.get('/log-out', authController.log_out_get);

// User routes
router.get('/membership', userController.become_member_get);
router.post('/membership', userController.become_member_post);
router.get('/cancel-membership', userController.cancel_membership_get);
router.post('/cancel-membership', userController.cancel_membership_post);
router.get('/adminship', userController.become_admin_get);
router.post('/adminship', userController.become_admin_post);
router.get('/cancel-adminship', userController.cancel_adminship_get);
router.post('/cancel-adminship', userController.cancel_adminship_post);

// Message routes

router.get('/create-message', messageController.create_message_get);
router.post('/create-message', messageController.create_message_post);
router.post('/', messageController.delete_message_post);

module.exports = router;
