const path = require('path');
const { google } = require('googleapis');
const fs = require('fs');
const CryptoJS = require('crypto-js');
const { jsonParse, removeBreakLine } = require('./common');
// const redis = require('./redis');
const dictionary = require('../dictionary');

const { logger } = require('../config/winston');

const request = require('./request');

// const key = fs.readFileSync(path.join(__dirname, '../../config/.key'), { encoding: 'utf8' });
const key = 'xxxxxxxx';

const cnKeyData = ''; // fs.readFileSync(path.join(__dirname, '../../config/.dialogflowCN'), { encoding: 'utf8' });
const krKeyData = ''; // fs.readFileSync(path.join(__dirname, '../../config/.dialogflowKR'), { encoding: 'utf8' });

const cnKey = ''; // jsonParse(CryptoJS.AES.decrypt(removeBreakLine(cnKeyData.trim()), key.trim()).toString(CryptoJS.enc.Utf8));
const krKey = ''; // jsonParse(CryptoJS.AES.decrypt(removeBreakLine(krKeyData.trim()), key.trim()).toString(CryptoJS.enc.Utf8));

class DialogflowClass {
  async getToken(credentials) {
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: [
        'https://www.googleapis.com/auth/cloud-platform',
        'https://www.googleapis.com/auth/dialogflow',
      ],
    });

    const token = await auth.getAccessToken();
    return token;
  }

  async detectIntent(text, options = {}) {
    const hour = 60 * 30 * 1;
    let tokenKr = await redis.get(dictionary.common.REDIS_NAMES.GOOGLE_APIS_KR_TOKEN);
    let tokenCn = await redis.get(dictionary.common.REDIS_NAMES.GOOGLE_APIS_CN_TOKEN);

    if (!tokenKr) {
      tokenKr = await this.getToken(krKey);
      redis.set(dictionary.common.REDIS_NAMES.GOOGLE_APIS_KR_TOKEN, this.tokenKr, hour);
    }
    if (!tokenCn) {
      tokenCn = await this.getToken(cnKey);
      redis.set(dictionary.common.REDIS_NAMES.GOOGLE_APIS_CN_TOKEN, this.tokenCn, hour);
    }

    const token = options.language === 'ko' ? tokenKr : tokenCn;
    const uri = `https://dialogflow.googleapis.com/v2/projects/${options.projectID}/agent/sessions/${options.sessionID}:detectIntent`;
    const requestOptions = {
      method: 'POST',
      uri,
      body: {
        queryInput: {
          text: {
            text,
            languageCode: options.language,
          },
        },
      },
      // timeout: 1000 * 10,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json; charset=utf-8',
      },
      json: true, // Automatically stringifies the body to JSON
    };

    try {
      const { queryResult: result } = await request.googlePost(requestOptions);
      if (!result.intent) {
        logger.error('dialogflow.Error0');
        return {
          matched: false,
          query: result.queryText,
          parameters: {},
          intent: null,
          isFallback: result.intent.isFallback,
          response: null,
        };
      }

      return {
        matched: true,
        query: result.queryText,
        parameters: {
          fields: Object.keys(result.parameters || {}).reduce((acc, keyName) => ({
            ...acc,
            [keyName]: {
              stringValue: Array.isArray(result.parameters[keyName]) ? null : result.parameters[keyName],
              arrayValue: Array.isArray(result.parameters[keyName]) ? result.parameters[keyName] : null,
            },
          }), {}),
        },
        intent: result.intent.displayName,
        isFallback: result.intent.isFallback,
        response: result.fulfillmentText,
      };
    } catch (error) {
      logger.debug('%o', error);

      return {
        matched: false,
        query: text,
        parameters: {},
        intent: null,
        response: null,
      };
    }
  }
}

module.exports = new DialogflowClass();