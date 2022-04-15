const moment = require('moment');
const crypto = require('crypto');
const dictionary = require('../dictionary');
const { logger } = require('../config/winston');

const getDevices = (userAgent) => {
  const iniOS = userAgent.match(/SSGDFS_IOS/i) != null;
  const inAndroid = userAgent.match(/SSGDFS_AOS/i) != null;
  const fromApp = iniOS || inAndroid;
  let chnlCd = fromApp ? dictionary.common.DEVICE_TYPE.app : dictionary.common.DEVICE_TYPE.pc;
  let LGIN_CHL_CD = fromApp ? dictionary.common.CHANNEL_TYPE.AP : dictionary.common.CHANNEL_TYPE.PC;

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
    if (!fromApp) {
      chnlCd = dictionary.common.DEVICE_TYPE.mobile;
      LGIN_CHL_CD = dictionary.common.CHANNEL_TYPE.MO;
    }
  }

  return {
    chnlCd,
    iniOS,
    inAndroid,
    fromApp,
    LGIN_CHL_CD,
  };
};

const getCustomerID = (APP_SID) => {
  try {
    const _id = process.env.SERVICE_MODE.trim() === 'local' ? 'QbR4cbwqzaUSgSKxWwPVXMEr6bZvRnmTEH25%2BuKz8wuluHf2S1%2BfbhoQVJZKkQKPcZXRU9m4pipWEMtMEg%3D%3D' : APP_SID;
    if (!_id) {
      return null;
    }

    // AES/GCM/nOPADING 복호화
    const masterKey = 'SSGDFS_SLO_KEY!@';
    const decrypt = (encdata) => {
      try {
        // base64 decoding
        const bData = Buffer.from(encdata, 'base64');
        const iv = bData.slice(0, 12);
        const text = bData.slice(12, bData.length - 16);
        const tag = bData.slice(bData.length - 16);

        const decipher = crypto.createDecipheriv('aes-128-gcm', masterKey, iv);
        decipher.setAuthTag(tag);
        return decipher.update(text, 'binary', 'utf8') + decipher.final('utf8');
      } catch (err) {
        logger.error('>>>쿠키 복호화 실패 error: ', err);
        return err;
      }
    };
    const decToken = decrypt(decodeURIComponent(_id));
    const customerID = decToken.split('&')[1].split('=')[1];

    // null 체크가 문자열로만 가능
    if (!customerID || customerID === 'null') {
      return null;
    }

    return customerID;
  } catch (err) {
    logger.error('>>>진입 SESSION error: ', err);
    return null;
  }
};

module.exports = async (req, res, next) => {
  // console.log('middleware.session', req)
  const { lang } = req.body;
  const { fromApp } = getDevices(req.headers['user-agent']);

  {
    console.log('middlware.req.session', req.session.userInfo);
    if(req.session.userInfo) req.session.userInfo.temp++
    else{
      req.session.userInfo = {};
      req.session.userInfo.temp = 1;
    } 
  }

  // const customerID = getCustomerID(req.cookies.APP_SID);
  // if (!customerID) {
  //   logger.error('>>> 쿠키 미전달로 인한 로그인 불가');
  //   res.send({
  //     intent: dictionary.intentType.USER_NOT_LOGIN,
  //     url: dictionary.urls(lang, '로그인'),
  //     fromApp,
  //   });
  //   return;
  // }

  // 로그인이 되어 있을 경우 바로 API 라우터로 넘어간다.
  // if (req.session.login && req.session.userInfo.customerID === customerID) {
    if(true){
    next();
    return;
  }

  // const result = await membershipRepository.findOne(customerID);
  // if (!result) {
  //   logger.error('>>> SAA008인터페이스 정보 미전달로 인한 로그인 불가');
  //   res.send({
  //     intent: dictionary.intentType.USER_NOT_LOGIN,
  //     url: dictionary.urls(lang, '로그인'),
  //     fromApp,
  //   });
  //   return;
  // }
  // const passNo = await membershipRepository.decryptPassNo(result.passNo);

  // const location = {};
  // if (req.cookies.userLatitude && req.cookies.userLongitude) {
  //   location.userLatitude = +req.cookies.userLatitude;
  //   location.userLongitude = +req.cookies.userLongitude;
  // }

  // const {
  //   chnlCd, iniOS, inAndroid, LGIN_CHL_CD,
  // } = getDevices(req.headers['user-agent']);

  // req.session.login = true;
  // req.session.createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  // req.session.updatedAt = moment().format('YYYY-MM-DD HH:mm:ss');
  // req.session.userInfo = {
  //   customerID,
  //   chnlCd,
  //   fromApp,
  //   inAndroid,
  //   iniOS,
  //   location,
  //   lang,
  //   LGIN_CHL_CD,
  //   passNo,
  //   onlineLvlNm: result.onlineLvlNm,
  //   memberLvlNm: result.memberLvlNm,
  //   memberYn: result.memberYn,
  //   mbrEnNm: result.mbrEnNm,
  //   mbrNm: result.mbrNm,
  //   loginId: result.loginId,
  //   telNo: result.telNo,
  //   sessionID: req.session.id,
  // };

  // next();
};