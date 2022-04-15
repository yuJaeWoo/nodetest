const languageType = require('../dictionary/languageType');

module.exports = ({
  tagIndex,
  lang,
  list,
}) => {
  const language = lang ? lang.toUpperCase() : languageType.KR.toUpperCase();
  return list.map((element, index) => ({
    ...element,
    tagName: `CB_BTN_${language}_${tagIndex + index}`,
  }));
};