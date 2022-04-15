const directHandlerMap = require('../project/directHandlerMap')

const query = async (type, params) => {
    console.log('directHandler',type, params);

    const handler = directHandlerMap[type];
    if(!handler){
        return {error:1, msg:'Not Found PostType : ' + type};
    }

    return handler(params);
};

module.exports = {
    query,
};
