const express = require('express');

const router = express.Router();
const chatbotController = require('../../controllers/chatbotController');

router.post('/', chatbotController.handleChatbot);

// router.post('/analytics', analyticsController.pushAnalytics);

// router.post('/analytics/visit', analyticsController.pushVisit);

module.exports = router;