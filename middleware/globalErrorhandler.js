const helper = require('../utils/chatbot');
const dictionary = require('../dictionary');
const { logger } = require('../config/winston');

// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  logger.error(`>>> requestID: ${req.seq} End Badly`);

  if (req.timedout) {
    const response = {
      contents: [{ type: dictionary.componentType.NormalMessage, message: helper.translator.translate(dictionary.messageType.응답지연안내, req.body.lang || dictionary.languageType.KR) }],
      parameters: { fields: {} },
    };

    return res.status(200).send(response);
  }

  return res.send({
    contents: [{
      type: dictionary.componentType.NormalMessage,
      message: helper.translator.translate(dictionary.messageType.에러안내, req.body.lang || dictionary.languageType.KR),
    }],
  });
};