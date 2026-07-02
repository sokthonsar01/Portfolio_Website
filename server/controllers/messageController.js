const Message = require('../models/Message');

// @desc    Submit a new contact message
// @route   POST /api/messages
// @access  Public
const submitMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;
    
    const newMessage = await Message.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({ message: 'Message submitted successfully', data: newMessage });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ message: 'Validation Error', errors: messages });
    }
    next(error);
  }
};

// @desc    Get all messages
// @route   GET /api/messages
// @access  Private (should be protected in a real app)
const getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find({}).sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitMessage,
  getMessages,
};
