const express = require('express');

const router = express.Router();

const chatbotRouter = require('./chatbot');

router.use('/chatbot', chatbotRouter);

module.exports = router;