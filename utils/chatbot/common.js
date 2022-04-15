const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
const { logger } = require('../../config/winston');

const languageType = require('../../dictionary/languageType');
const componentType = require('../../dictionary/componentType');

const getLanguage = (language) => {
  const isKorean = language === languageType.KR;
  return isKorean ? languageType.KR.toLocaleUpperCase() : languageType.CN.toLocaleUpperCase();
};

const generatePayload = (interfaceCode, language, data = {}) => {
  // const endpoint = process.env.EAI_ONLINE_ENDPOINT;
  const endpoint = 'http://localhost:3000/api'

  // 아래의 경우 다 안된다.. 이유는 모르겠슴... 404 나온다.. 머지.. 왜지...
  // const endpoint = 'http://localhost:8080/cb/api/chatbot/api'
  // const endpoint = 'http://localhost:8080/cb/api/chatbot'
  // const endpoint = 'http://notie.me'
  // const endpoint = 'http://localhost:8081/cb/kr'
  // const endpoint = 'http://172.30.1.49:8080/cb/api/chatbot/api'
  
  const payload = {
    data: {
      ...data,
      langDiv: getLanguage(language),
    },
    header: {
      uuid: uuidv4(),
      guid: '',
      stdWrtDtti: moment().format('YYYYMMDDHHMMSS'),
      stdCrtSysNm: 'ONLINE',
      susSysCd: 'CB',
      trsSysCd: 'OB',
      infId: interfaceCode,
      reqsDvcd: '1',
      gramRspDtti: '',
      prcsRsltDvcd: '',
      rspMsgCd: '',
      rspMsgCn: '',
    },
  };

  logger.debug('payload> %o', payload);

  return {
    endpoint,
    payload,
  };
};

// language 없는 버전
const generatePayload2 = (interfaceCode, data = {}) => {
  const endpoint = process.env.EAI_ONLINE_ENDPOINT;
  const payload = {
    data: {
      ...data,
    },
    header: {
      uuid: uuidv4(),
      guid: '',
      stdWrtDtti: moment().format('YYYYMMDDHHMMSS'),
      stdCrtSysNm: 'ONLINE',
      susSysCd: 'CB',
      trsSysCd: 'OB',
      infId: interfaceCode,
      reqsDvcd: '1',
      gramRspDtti: '',
      prcsRsltDvcd: '',
      rspMsgCd: '',
      rspMsgCn: '',
    },
  };

  logger.debug('payload> %o', payload);

  return {
    endpoint,
    payload,
  };
};

const normalMessage = (message) => {
  // ex : return normalMessage('이미 존재하는 이름입니다.');
  const contents = [
    // 메시지
    {
      type: componentType.NormalMessage,
      data: {
        message,
      }                  
    },
  ];
  return { contents } ;    
}

module.exports = {
  getLanguage,
  generatePayload,
  generatePayload2,
  normalMessage
};