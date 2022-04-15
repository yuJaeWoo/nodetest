const wrapper = require('../utils/asyncWrapper');
const DialogFlow = require('../utils/dialogflow');
const intentHandler = require('../project/intentHandler');
const getDialogFlowConfig = require('../utils/getDialogFlowConfig');
const dictionary = require('../dictionary');
const { logger } = require('../config/winston');
const redis = require('../utils/redis');
const {onUserText} = require('../project/chatbotController');
const responseHandler = require('../project/responseHandler');
const directHandler = require('./directHandler');
// const helper = require('../utils/chatbot');
const intentResponseMap = require('../project/intentResponseMap');
const intentType = require('../project/intentType');
const chatbotController = require('../project/chatbotController')
const responseInput = require('../responses/responseInput')
const notFoundIntent = require('../responses/notFoundIntent')

const getIntentExpireTime = (intent) => {
  const smallTalkIntent = `${intent || ''}`.startsWith('ST_');
  const faqIntent = `${intent || ''}`.startsWith('FAQ_');

  // 6 hours
  if (smallTalkIntent || faqIntent) {
    return 60 * 60 * 6;
  }

  if (intent === dictionary.intentType.DefaultFallbackIntent) {
    return -1;
  }

  // 24 hours
  return 60 * 60 * 24;
};

const onIntent = async (intentResult) => {
  console.log('onIntent.intentResult', intentResult)
  /**
   * expected
   * {
   *  intent: 'INT_XXX', 
   *  param: {}
   * }
   */
  
  // NLU 제품와 상관 없이 intent_name에 담겨와야 한다.
  const { intent:temp } = intentResult;
  console.log('intent', temp);

  const intent = temp.replace(/-/g, '_'); // '-'를 사용하면 안된다.

  if (false == intentType.hasOwnProperty(intent)) {
    return notFoundIntent.main(intent);
  }

  const responseType = intentResponseMap[intent];
  console.log('responseType', responseType);
  if(responseType){
    intentResult.responseType = responseType;
    return await responseHandler.run(intentResult);
  }

  // Response 타입이 없다.
  return notFoundIntent.main(intent);
}

const errorReply = (label, message, url) => {
  console.log('intentHandler.not found response')
  const contents = [
    {
      type: dictionary.componentType.NormalMessage,
      data: {
        message,
      }
    }, 
    {
      type: dictionary.componentType.QuickReplies,
      data: [
        {
          label,
          type: dictionary.actionType.CUSTOM,
          param:
          {
            type: dictionary.actionType.LINK,
            url
          }
        },   
      ]
    }
  ];

  return {
    contents,
  };  
}

module.exports.errorReply = errorReply;

function getChatbotResponseText(contents) {
  return 'hello';
  // return contents
  //   .filter((item) => item.type === dictionary.componentType.NormalMessage)
  //   .map((item) => item.message)
  //   .join('\n');
}

module.exports.handleChatbot = wrapper(async (req) => {
  const { text, lang, options = {} } = req.body;
  console.log('req.body', req.body);

  // session test code 
  // vue.js 에서 접근하는 주소가 public 로딩 주소와 동일해야 작동한다.
  {
    console.log('chatbotController.req.session.userInfo', req.session.userInfo);
    if(req.session.userInfo){
      req.session.userInfo.temp++;
    } 
    else{
      req.session.userInfo = {};
      req.session.userInfo.temp = 1;
    } 
    console.log('chatbotController.req.session.userInfo end', req.session.userInfo);
  }
  
  const str = text;
  
  console.log('options', options);

  // directType 요청인가?
  if(options.directType) 
  {
    console.log('directType', options.directType, options.params)
    return await directHandler.query(options.directType, options.params);
  }

  // Response요청의 경우
  if(options.responseType){
    console.log('options.response>', options.responseType)
    return await responseHandler.run(options);
  }

  // 지정 인텐트 요청
  if(options.componentType){
    console.log('options.intent>', options.intent);
    return await onIntent(options);
  }

  // let response;
  if( str ) // 발화내용이 있으면 NLU에 쿼리
  { 
    let response = await onUserText(req); // 사용자 발화 가로채기
    if(response) return response;
  
    // todo
    const result = await intentHandler.query(str, options) // { intent: 'xxx', params: {} 
    console.log('intentHandler.query.result', result);
    return await onIntent(result);

      /**
   * 챗봇 응답에 메세지가 존재하는지 파악
   */ 
    const CBText = getChatbotResponseText(response.contents);
    if (CBText === '') return response;

    {
      // conversationService.generateConversation({
      //   sessionID,
      //   customerID,
      //   lang,
      //   text: CBText,
      //   dialogflowResult: {
      //     intent: result.intent,
      //     parameters: {
      //       fields: {},
      //     },
      //   },
      //   CHAT_CLS_CD: dictionary.common.WRITER_TYPE.CHATBOT,
      //   LGIN_CHL_CD,
      // });  
    }

    return response;
  }
});
