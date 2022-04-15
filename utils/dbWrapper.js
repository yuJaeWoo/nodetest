const oracledb = require('./oracledb');
const { logger } = require('../config/winston');

module.exports = async (callback) => {
  let connection;
  try {
    connection = await oracledb.getConnection();

    const copyExecute = connection.execute;
    connection.execute = async (query, bind = []) => {
      logger.debug(query);
      connection.execute = copyExecute;
      const _result = await connection.execute(query, bind);
      logger.debug('%o', _result);
      return _result;
    };

    const copyExecuteMany = connection.executeMany;
    connection.executeMany = async (query, bind = []) => {
      logger.debug(query);
      connection.executeMany = copyExecuteMany;
      const _result = await connection.executeMany(query, bind);
      logger.debug('%o', _result);
      return _result;
    };

    const result = await callback(connection);
    return result;
  } catch (error) {
    logger.error(error.stack);
    return {
      success: false,
      message: error.message,
    };
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        logger.error(error.stack);
      }
    }
  }
};