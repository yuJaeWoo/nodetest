const winston = require('winston');
const WinstonDaily = require('winston-daily-rotate-file');

const logDir = 'logs'; // logs 디렉토리 하위에 로그 파일 저장
const { combine, timestamp, printf } = winston.format;
const { format } = winston;

// Define log format
const logFormat = printf((info) => `${info.timestamp} ${info.level}: ${info.message}`);

/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const logger = winston.createLogger({
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    logFormat,
    format.splat(),
  ),
  transports: [
    new (WinstonDaily)({
      level: 'info',
      maxFiles: '30d',
      dirname: `${logDir}`,
      filename: 'client-%DATE%.log',
    }),
    new (WinstonDaily)({
      level: 'error',
      maxFiles: '30d',
      dirname: `${logDir}/error`,
      filename: 'client.error-%DATE%.log',
    }),
  ],
});

logger.add(new winston.transports.Console({
  level: process.env.DEBUG_MODE === 'Y' ? 'debug' : 'info',
  format: winston.format.combine(
    winston.format.colorize(), // 색깔 넣어서 출력
    winston.format.simple(), // `${info.level}: ${info.message} JSON.stringify({ ...rest })` 포맷으로 출력
  ),
}));

module.exports = { logger };