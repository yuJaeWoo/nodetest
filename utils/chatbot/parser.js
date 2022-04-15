const parseResponse = (response) => {
    try {
      const parsedResult = JSON.parse(response);
      if (parsedResult.header.rspMsgCn !== 'SUCCESS') {
        throw new Error('FAIL_REQUEST_RESPONSE');
      }
  
      return parsedResult.data;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  module.exports = {
    parseResponse,
  };