const apiHandlerMap = require('../project/apiHandlerMap');

const query = async (type, params) => {
  console.log('apiController.query', type, params);

  const handler = await apiHandlerMap[type];
  if(undefined === handler){
    return { error:1, msg: `Not found API : ${type}` };
  }

  const result = await handler(params);
  console.log('result', result);
  return result
}
  
module.exports = {
    query,
}
