const BRANCH_TYPE = {
    본점: '본점',
    명동점: '명동점',
    강남점: '강남점',
    부산점: '부산점',
    인천공항1: '인천공항1',
    인천공항2: '인천공항2',
    가까운지점: '가까운지점',
  };
  
  const BRANCH_LIST_KR = {
    가까운지점: '가까운지점',
    본점: '본점',
    명동점: '명동점',
    강남점: '강남점',
    부산점: '부산점',
    인천공항1: '인천공항1터미널점',
    인천공항2: '인천공항2터미널점',
  };
  
  const BRANCH_LIST_CN = {
    본점: '总店',
    명동점: '明洞店',
    강남점: '江南店',
    부산점: '釜山店',
    인천공항1: '仁川机场第一航站楼店',
    인천공항2: '仁川机场第二航站楼店',
    가까운지점: '附近的分店',
  };
  
  const WRITER_TYPE = {
    CHATBOT: 'CB', // 챗봇
    USER: 'USER', // 유저
    COUNSELOR: 'C', // 상담사
  };
  
  const REDIS_NAMES = {
    GOOGLE_APIS_KR_TOKEN: 'GOOGLE_APIS_KR_TOKEN',
    GOOGLE_APIS_CN_TOKEN: 'GOOGLE_APIS_CN_TOKEN',
  };
  
  const LOGIN_COOKIE_NAME = 'CB_CL_SSGDFS_SESS_COOKIE';
  
  const DEVICE_TYPE = {
    pc: '10',
    mobile: '30',
    app: '40',
  };
  
  const CHANNEL_TYPE = {
    AP: 'AP',
    PC: 'PC',
    MO: 'MO',
  };
  
  module.exports = {
    BRANCH_LIST_KR,
    BRANCH_LIST_CN,
    WRITER_TYPE,
    BRANCH_TYPE,
    REDIS_NAMES,
    LOGIN_COOKIE_NAME,
    DEVICE_TYPE,
    CHANNEL_TYPE,
  };
  