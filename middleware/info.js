const { v4: uuidv4 } = require('uuid');
const { logger } = require('../config/winston');

module.exports = (req, res, next) => {
  const requestID = uuidv4();
  req.seq = requestID; // for enomixRepository
  // logger.info(`>>> requestID: ${requestID} Start`);
  console.log(`info> ${requestID} Start`);
  // logger.info(`>>> ${JSON.stringify(req.method)} ${req.originalUrl}, B: ${JSON.stringify(req.body)}, P: ${JSON.stringify(req.params)}, Q: ${JSON.stringify(req.query)}`);

  const oldSend = res.send;

  res.send = function (data) {
    logger.info(`>>> requestID: ${requestID} End Successfully`);
    res.send = oldSend; // set function back to avoid the 'double-send'
    return res.send(data); // just call as normal with data
  };

  next();
};