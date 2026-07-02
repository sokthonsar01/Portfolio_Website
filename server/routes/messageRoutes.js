const express = require('express');
const router = express.Router();
const { getMessages, submitMessage } = require('../controllers/messageController');

router.route('/')
  .get(getMessages)
  .post(submitMessage);

module.exports = router;
