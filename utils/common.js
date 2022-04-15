const dictionary = require('../dictionary');
const languageType = require('../dictionary/languageType');

const jsonParse = (str) => {
  try {
    return JSON.parse(str);
  } catch (error) {
    console.error(error);
    return null;
  }
};

const removeBreakLine = (str) => str.replace(/(\r\n|\n|\r)/gm, '');

const getBranchName = (name, lang) => {
  if (lang === languageType.KR) {
    return dictionary.common.BRANCH_LIST_KR[name];
  }

  return dictionary.common.BRANCH_LIST_CN[name];
};

module.exports = {
  jsonParse,
  removeBreakLine,
  getBranchName,
};