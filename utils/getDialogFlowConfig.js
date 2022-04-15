const languageType = require('../dictionary/languageType');

module.exports = (lang) => {
  if (lang === languageType.KR) {
    return {
      projectID: process.env.DIALOGFLOW_KR_PROJECT_ID,
      language: 'ko',
    };
  }

  return {
    projectID: process.env.DIALOGFLOW_CN_PROJECT_ID,
    language: 'zh-CN',
  };
};