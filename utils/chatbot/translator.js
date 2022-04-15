const moment = require('moment');
const { messageType, languageType } = require('../../dictionary');

const translate = (type, language, props = {}) => {
  const isKorean = language === languageType.KR;
  const [mainType] = type.split('/');
  switch (mainType) {
    case messageType.에러안내:
      return language === languageType.KR ? '일시적인 문제가 발생했습니다.<br />다음에 다시 이용해주세요.' : '暂时出错，请下次再使用。';

    case messageType.인트로: {
      // props.name = 'steve';
      let name = '';
      if (props.name) {
        name = language === languageType.KR ? `${props.name}님` : `${props.name} 顾客，`;
      }
      return language === languageType.KR ? `안녕하세요. ${name}<br />신세계면세점 챗봇 신디예요.` : `${name}您好！我是新世界免税店的聊天机器人SINDY。`;
    }
    case messageType.defaultFallBack:
      return language === languageType.KR ? '방금하신 말씀을 잘 이해하지 못했어요.' : '刚才您所说的我没有理解。';

    case messageType.가입안내1:
      return language === languageType.KR ? '신세계멤버십 가입을 원하시면 가까운 매장의 안내데스크를 방문해주세요.<br />고객님의 여권을 보여주시고, 신청서를 작성하면 멤버십 가입이 완료됩니다.' : '如果想注册成为新世界会员, 请访问附近的卖场服务台。<br />出示您的护照，填写申请书，就可以完成会员注册了。';

    case messageType.가입안내2:
      return language === languageType.KR ? '[ 점포별 안내데스크 위치 ]<br />명동점 신관12층, 강남점 1층, 부산점 지하1층<br />인천공항점 인천공항 1터미널점<br />- 동편: 2번 출국 심사장 앞<br />- 서편: 4번 출국 심사장 앞<br />- 탑승동: 중앙에스컬레이터 왼편 라그릴라 옆(115번 게이트 맞은편)<br /><br />인천공항 2터미널점<br />- 동편: 253번 게이트 앞<br />- 서편: 248번 게이트 앞' : '[各店铺服务台位置]<br />明洞店新馆12层，江南店1层，釜山店地下1层<br />仁川机场店仁川机场1号航站楼店<br />- 东侧:2号出境审查处前<br />- 西侧:4号出境审查处前<br />- 登机楼:中央自动扶梯左侧LAGRILLIA旁（115号门对面）<br /><br />仁川机场2号航站楼店<br />- 东侧:253号门前<br />- 西侧:248号门前<br />';

    case messageType.main_type.branch_brand_search:
      return translateForBranchBrandSearch(type, isKorean, props);

    case messageType.main_type.brand_search:
      return translateForBrandSearch(type, isKorean, props);

    case messageType.main_type.order_time_type:
      return translateForOrderTime(type, isKorean, props);

    case messageType.main_type.departure_info:
      return translateForDepartureInfo(type, isKorean, props);

    case messageType.main_type.etc:
      return translateForEtc(type, isKorean, props);

    case messageType.main_type.passport_info:
      return translateForPassport(type, isKorean, props);

    case messageType.main_type.orderInfo:
      return translateForOrderInfo(type, isKorean, props);

    case messageType.main_type.recommend:
      return translateForRecommend(type, isKorean, props);

    default: return '';
  }
};

const translateForPassport = (type, isKorean) => {
  switch (type) {
    case messageType.no_passport: {
      const koreanMessage = '등록된 여권정보가 없어요.<br />여권정보를 등록하시려면 아래 버튼을 선택해주세요.';
      const chineseMessage = '未登录护照信息，请填写护照信息后，请选择下列按键。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.having_passport: {
      const koreanMessage = '여권정보를 변경을 위해 아래 버튼을 선택해주세요.';
      const chineseMessage = '更改护照信息，请选择下列按键。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.apply_passport:
      return isKorean ? '여권정보 등록' : '登录护照信息';

    case messageType.edit_passport:
      return isKorean ? '여권정보 변경' : '更改护照信息';

    case messageType.having_undelivered_order: {
      const koreanMessage = '출국일이 지난 주문내역이 있네요.<br />상담사 채팅으로 문의해주세요.';
      const chineseMessage = '存在已经超过出境日期的订单，<br />请咨询客服中心。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.consult_chat:
      return isKorean ? '상담사 채팅' : '客服咨询';

    default:
      return '';
  }
};

const translateForEtc = (type, isKorean, props = {}) => {
  switch (type) {
    case messageType.원하는서비스: {
      const koreanMessage = '원하시는 서비스를 택해주세요.';
      const chineseMessage = '请选择您所需的服务。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.멤버쉽: {
      const koreanMessage = '멤버십';
      const chineseMessage = '会员制';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.회원정보변경: {
      const koreanMessage = '회원정보 변경';
      const chineseMessage = '更改会员信息';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.면세가이드: {
      const koreanMessage = '면세가이드';
      const chineseMessage = '免税指南';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.멤버쉽문의선택: {
      const koreanMessage = '멤버십에 대해 궁금하신 사항을 선택해주세요.';
      const chineseMessage = '请选择关于会员制想了解的事项';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.내등급확인: {
      const koreanMessage = '내 등급 확인하기';
      const chineseMessage = '确认我的等级';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.멤버십혜택: {
      const koreanMessage = '신세계면세점 멤버십 혜택';
      const chineseMessage = '韩际新世界免税店会员优惠';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.온라인전용혜택: {
      const koreanMessage = '온라인 전용 등급 혜택';
      const chineseMessage = '网上专用等级优惠';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.응답지연안내: {
      const koreanMessage = '신디가 생각하는 데 시간이 좀 걸릴 것 같아요.<br />잠시 후에 다시 물어봐 주시겠어요?';
      const chineseMessage = 'SINDY还需要一些时间想想。<br />稍后再问好吗？';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.등급안내: {
      const koreanMessage = `고객님의 온라인전용 등급은 ${props.level}, <br /> 신세계면세점 멤버십 등급은 ${props.memberLvlNm} 이에요.`;
      const chineseMessage = `您的网上专用等级为 ${props.level}, <br /> 韩际新世界免税店的会员等级为${props.memberLvlNm}。`;
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.등급안내_임원: {
      const koreanMessage = `고객님의 온라인전용 등급은 ${props.level}이에요.`;
      const chineseMessage = `您的网上专用等级为 ${props.level}。`;
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.멤버십혜택안내: {
      const koreanMessage = '신세계면세점 멤버십 혜택을 알려드릴게요.';
      const chineseMessage = '为您介绍韩际新世界免税店的会员优惠。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.자세히: {
      const koreanMessage = '자세히 보기';
      const chineseMessage = '查看详情';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.온라인혜택안내: {
      const koreanMessage = '온라인전용 등급 혜택을 알려드릴게요.';
      const chineseMessage = '为您介绍网上专用等级优惠。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.정보변경안내: {
      const koreanMessage = '회원정보를 변경을 위해 아래 버튼을 선택해주세요.';
      const chineseMessage = '若要更改会员信息请选择下列按钮。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.면세가이드안내: {
      const koreanMessage = '면세가이드를 안내해드릴게요.<br />원하시는 내용을 선택해주세요.';
      const chineseMessage = `为您介绍免税指南。<br />请您选择您想了解的内容。
            `;
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.면세점이용: {
      const koreanMessage = '면세점 이용';
      const chineseMessage = '使用免税店';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.쇼핑절차안내: {
      const koreanMessage = '쇼핑절차/안내';
      const chineseMessage = '订购顺序/指南';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.주문가능시간: {
      const koreanMessage = '주문가능시간';
      const chineseMessage = '可订购时间';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.인도수령안내: {
      const koreanMessage = '인도/수령안내';
      const chineseMessage = '取货/领取指南';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.교환환불: {
      const koreanMessage = '교환/환불/AS';
      const chineseMessage = '交换/退货/AS';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.면세쇼핑멘트: {
      const koreanMessage = '신세계면세점 쇼핑에 대해 안내해 드릴게요.<br /> 아래 버튼을 선택해주세요.';
      const chineseMessage = '为您介绍新世界免税店购物的相关信息。<br>请选择下面的按钮。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.면세쇼핑안내: {
      const koreanMessage = '면세쇼핑안내';
      const chineseMessage = '免税店购物指南';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.한도안내멘트: {
      const koreanMessage = '면세점 이용 한도에 대해 안내해 드릴게요.<br /> 아래 버튼을 선택해주세요.';
      const chineseMessage = '为您介绍免税店使用限额。<br>请选择下面的按钮。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.이용안내: {
      const koreanMessage = '이용안내';
      const chineseMessage = '使用指南';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.면세반입제한멘트: {
      const koreanMessage = '면세품 반입 제한에 대해 안내해 드릴게요.<br /> 아래 버튼을 선택해주세요.';
      const chineseMessage = '为您介绍关于携带进口免税品的限制。<br>请选择下面的按钮';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.면세반입제한: {
      const koreanMessage = '면세상품의 국내반입제한';
      const chineseMessage = '免税商品入境携带限制';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.기내반입제한멘트: {
      const koreanMessage = '기내 반입 제한에 대해 안내해 드릴게요.<br /> 아래 버튼을 선택해주세요.';
      const chineseMessage = '为您介绍关于机内携带物品的限制。<br>请选择下面的按钮。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.기내반입제한: {
      const koreanMessage = '기내반입제한';
      const chineseMessage = '机内携带物品限制';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.쇼핑방법안내멘트: {
      const koreanMessage = '쇼핑 방법에 대해 안내해 드릴게요.<br> 아래 버튼을 선택해주세요.';
      const chineseMessage = '为您介绍购物方法的相关信息。<br>请选择下面的按钮。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.스페셜오더안내멘트: {
      const koreanMessage = '스페셜 오더에 대해 안내해 드릴게요.<br> 아래 버튼을 선택해주세요.';
      const chineseMessage = '为您介绍特别订购的相关信息。请选择下面的按钮。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.스페셜오더안내: {
      const koreanMessage = '스페셜오더안내';
      const chineseMessage = '特别订购指南';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.상품수령안내멘트: {
      const koreanMessage = '상품 인도 및 수령에 대해 안내해 드릴게요.<br> 아래 버튼을 선택해주세요.';
      const chineseMessage = '为您介绍商品取货及签收的相关信息。<br>请选择下面的按钮。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.교환환불안내멘트: {
      const koreanMessage = '교환/환불/AS에 대해 안내해 드릴게요.<br>아래 버튼을 선택해주세요';
      const chineseMessage = '为您介绍关于换货/退款/售后的相关信息<br>请选择下面的按钮。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.상품추천멘트: {
      const koreanMessage = '고객님을 위한 꼭 맞는 상품을 추천해드려요.';
      const chineseMessage = '为顾客推荐适合您的商品。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.테마추천: {
      const koreanMessage = '테마 추천';
      const chineseMessage = '主题推荐';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.뷰티추천: {
      const koreanMessage = '뷰티 추천';
      const chineseMessage = '美肤推荐';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.패션추천: {
      const koreanMessage = '패션 추천';
      const chineseMessage = '时尚推荐';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.키워드상품무: {
      const koreanMessage = '키워드에 맞는 상품을 찾지 못했어요.  <br /> 다른 키워드를 선택해주세요.';
      const chineseMessage = '未查找到符合关键词的相应商品，<br />请选项其他关键词。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.테마키워드선택: {
      const koreanMessage = '아래 추천해드리는 테마 키워드 선택 및 원하는 테마 키워드를 입력해주세요.';
      const chineseMessage = '请选择并输入下列推荐的主题关键词及所需的主题关键词。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.뷰티키워드선택: {
      const koreanMessage = '아래 추천해드리는 뷰티 키워드 선택 및 원하는 뷰티 키워드를 입력해주세요.';
      const chineseMessage = '请选择并输入下列推荐的美肤关键词及所需的美肤关键词。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.패션키워드선택: {
      const koreanMessage = '아래 추천해드리는 패션 키워드 선택 및 원하는 패션 키워드를 입력해주세요.';
      const chineseMessage = '请选择并输入下列推荐的时尚关键词及所需的时尚关键词。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.키워드상품추천: {
      const koreanMessage = '키워드에 맞는 상품을 추천해드려요.';
      const chineseMessage = '为您推荐符合关键词的相应商品。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    default:
      return '';
  }
};

const translateForDepartureInfo = (type, isKorean, props = {}) => {
  switch (type) {
    case messageType.no_departure: {
      const koreanMessage = `등록하신 출국정보가 없네요.<br />${props.hasBenefits ? '출국정보를 등록하고 혜택을 받아보세요.' : '출국정보를 등록하시려면 아래 버튼을 선택해주세요.'}`;
      const chineseMessage = `未登录出境信息，${props.hasBenefits ? '请填写出境信息并享受优惠。' : '填写出境信息后，请选择下列按键。'}`;
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.having_departure: {
      const koreanMessage = '고객님의 출국정보예요.<br /> 변경을 원하시는 출국정보를 선택하세요.';
      const chineseMessage = '这是您的出境信息，请选择想要变更的出境信息。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.complete_order_departure_edit_explanation: {
      const koreanMessage = '이미 결제된 주문의 출국정보는 주문내역에서 변경하실 수 있습니다.';
      const chineseMessage = '已结算订单的出境信息可在订单明细中更改。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.offline_departure_edit_explanation: {
      const koreanMessage = '오프라인 지점 주문의 출국정보 변경은 고객센터로 문의바랍니다.';
      const chineseMessage = '若要修改实体店的订单出境信息，请咨询客服中心。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    default:
      return '';
  }
};

const translateForOrderTime = (type, isKorean, props = {}) => {
  switch (type) {
    case messageType.상품추천:
      return isKorean ? '상품 추천' : '推荐商品';

    case messageType.having_departure_search_ready: {
      const koreanMessage = `고객님의 가장 빠른 출국일로 주문 가능 시간을 조회해보시겠어요? <br /><br /> - 출국장소 : ${props.departurePlace} <br /> - 출국일시 : ${moment(props.departureTime).format('YYYY년 MM월 DD일 HH시 mm분')}`;
      const chineseMessage = `可以查询一下您最近的出境日的可订购时间吗？ <br /><br /> - 出境地点 : ${props.departurePlace} <br /> - 出境时间 : ${moment(props.departureTime).format('YYYY年 MM月 DD日 HH时 mm分')}`;

      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.order_time_search: {
      const koreanMessage = '조회 시, 출국정보가 기 등록되어 있다면 최근 출국정보가 자동 체크되며, 변경을 원하시면 새로고침으로 가능합니다.';
      const chineseMessage = '查询时，如有已填写出境信息，会自动核实最近的出境信息，如需更改可以进行刷新。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.search_order_time:
      return isKorean ? '조회하기' : '查询';

    case messageType.ask_search_order_time:
      return isKorean ? '주문 가능한 시간을 조회해보시겠어요?' : '可以帮我查询一下可订购时间吗？';

    case messageType.departure_apply:
      return isKorean ? '출국정보등록' : '登录出境信息';

    case messageType.order_possible: {
      const {
        departureDate, departureTime, departurePlace, orderApplyTime,
        threeBeforeApplyTime,
      } = props;
      const departureAt = isKorean
        ? moment(`${departureDate} ${departureTime}`).format('YYYY년 MM월 DD일, HH시 mm분')
        : moment(`${departureDate} ${departureTime}`).format('YYYY年 MM月 DD日 HH时 mm分');

      const orderApplyTimeDay = orderApplyTime.substr(0, 2);
      const orderApplyTimeHour = orderApplyTime.substr(2, 2);
      const orderApplyTimeMin = orderApplyTime.substr(4, 2);
      const koreanMessage = [];
      const chineseMessage = [];
      if (!threeBeforeApplyTime) {
        koreanMessage.push(
          `${departureAt}, ${departurePlace} 출국 시, 주문 가능한 시간을 안내 드려요.`,
          `주문 가능 시간은 <b>${orderApplyTimeDay}일 ${orderApplyTimeHour}시간 ${orderApplyTimeMin}분</b> 남았어요.<br />남은 시간 동안 쇼핑을 즐겨보세요.`,
        );

        chineseMessage.push(
          `${departureAt}, 从${departurePlace}出境时的可订购时间`,
          `可订购的时间还剩<b>${orderApplyTimeDay}天 ${orderApplyTimeHour}小时 ${orderApplyTimeMin}分。</b><br />请在剩下的时间里，享受愉快的购物吧。`,
        );
      } else {
        const threeBeforeApplyTimeYear = threeBeforeApplyTime.substr(0, 4);
        const threeBeforeApplyTimeMonth = threeBeforeApplyTime.substr(4, 2);
        const threeBeforeApplyTimeDay = threeBeforeApplyTime.substr(6, 2);
        const threeBeforeApplyTimeHour = threeBeforeApplyTime.substr(8, 2);
        const threeBeforeApplyTimeMinute = threeBeforeApplyTime.substr(10, 2);
        const threeBeforeApply = `${threeBeforeApplyTimeYear}-${threeBeforeApplyTimeMonth}-${threeBeforeApplyTimeDay} ${threeBeforeApplyTimeHour}:${threeBeforeApplyTimeMinute}`;

        koreanMessage.push(
          `${departureAt}, ${departurePlace} 출국 시, 주문 가능한 시간을 안내 드려요.`,
          `주문 가능 시간은 <b>${orderApplyTimeDay}일 ${orderApplyTimeHour}시간 ${orderApplyTimeMin}분</b> 남았어요.<br />(단, 3시간 전 표시 상품은 ${threeBeforeApply} 까지 구매가능)<br /><br />남은 시간 동안 쇼핑을 즐겨보세요.`,
        );

        chineseMessage.push(
          `${departureAt}, 从${departurePlace}出境时的可订购时间`,
          `可订购的时间还剩<b>${orderApplyTimeDay}天 ${orderApplyTimeHour}小时 ${orderApplyTimeMin}分。</b><br />(但，有3小时前标记的商品可在 ${threeBeforeApply}之前订购)<br /><br />请在剩下的时间里，享受愉快的购物吧。`,
        );
      }
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.order_impossible: {
      const koreanMessage = '입력하신 출국정보로는 주문이 불가합니다. 출국정보를 다시 확인해주세요.';
      const chineseMessage = '您输入的出境信息无法订购，请重新确认您的出境信息。';
      return isKorean ? koreanMessage : chineseMessage;
    }

    case messageType.search_order_time_again:
      return isKorean ? '다시 조회하기' : '重新查询';

    default: return '';
  }
};

const translateForBranchBrandSearch = (type, isKorean, props) => {
  switch (type) {
    case messageType.branchSelectionMessage:
      return isKorean ? '원하시는 지점을 선택해주세요.' : '请选择您所找的分店。';
    case messageType.branchSelectionInfo:
      return isKorean ? '가까운 지점 안내는 App에서 위치정보 제공 동의 후 가능합니다.' : '在APP上同意提供您的位置信息后可使用附近的分店指南。';
    case messageType.branchSelectionNearServingMessage:
      return isKorean ? '고객님 위치에서 가장 가까운 지점 안내해드릴게요.' : '为您介绍距离最近的分店。';
    case messageType.branchSelectionServingMessage:
      return isKorean ? `신세계면세점 ${props.branchName} 안내해드릴게요.` : `为您介绍韩际新世界免税店${props.branchName}`;
    case messageType.branchSelectionNoBrand:
      return isKorean ? '브랜드명을 정확히 입력해주세요.' : '请正确输入品牌名称。';
    case messageType.branchSelectionNoBrandInfo:
      return isKorean ? '브랜드명을 정확히 입력해주세요. ex) 구찌, 샤넬' : '请正确输入品牌名称。例如：古奇，香奈儿';
    case messageType.branchSelectionNoDataMessage:
      return isKorean ? '요청하신 브랜드의 매장 정보가 없어요.' : '没有您所要查找品牌的专柜信息。';
    case messageType.branchBrandSearchRollback:
      return isKorean ? '처음으로' : '返回首页';
    case messageType.branchBrandSearch:
      return isKorean ? '브랜드 매장 찾기' : '查找品牌专柜';
    case messageType.branchBrandSearchServingMessage:
      return isKorean ? `${props.branchName} ${props.brand} 매장을 안내해드릴게요.` : `向您介绍${props.branchName}（${props.brand}）专柜`;
    case messageType.branchBrandSearchNoResultMessage:
      return isKorean ? `안타깝게도 ${props.branchName}에 ${props.brand} 매장은 없어요. 찾으시는 브랜드의 다른 지점을 안내해드릴게요.` : `很遗憾，${props.branchName}没有（${props.brand}）的专柜，现在为您介绍您所查找品牌的其他分店。`;
    case messageType.가까운매장안내:
      return isKorean ? `고객님의 위치에서 가장 가까운 ${props.storNm}의 매장을 안내해드려요.` : `为您指引距离您最近的${props.storNm}。`;
    default: return '';
  }
};

const translateForBrandSearch = (type, isKorean, props = {}) => {
  switch (type) {
    case messageType.다른브랜드찾기:
      return isKorean ? '다른 브랜드 찾기' : '其他品牌查找';

    case messageType.행사보여줌:
      return isKorean ? `${props.brand} 행사를 보여드릴게요.` : `为您介绍 ${props.brand} 的促销活动。`;

    case messageType.행사없슴:
      return isKorean ? `${props.brand} 행사가 없어요. 다른 혜택을 추천 받아보세요.` : `${props.brand} 没有促销活动，推荐您选择其他的优惠。`;

    case messageType.행사:
      return isKorean ? '행사' : '活动';

    case messageType.인기상품:
      return isKorean ? '인기상품' : '畅销商品';

    case messageType.인기상품없슴:
      return isKorean ? '요청하신 브랜드의 인기 상품 정보가 없어요' : '没有您所要查找品牌的畅销商品信息。';

    case messageType.브랜드인기상품문자:
      return isKorean ? '브랜드 인기 상품' : '品牌畅销商品';

    case messageType.브랜드인기상품:
      return isKorean ? '요청하신 브랜드의 인기 상품을 보여드릴게요.' : '为您展示所查找的品牌畅销商品。';

    case messageType.브랜드행사:
      return isKorean ? '브랜드행사' : '品牌活动';

    case messageType.no_found:
      return isKorean ? '요청하신 브랜드를 찾지 못했어요.' : '未检索到您所要查找的品牌。';

    case messageType.input_brand:
      return isKorean ? '브랜드명을 정확히 입력해주세요.' : '请输入品牌名称。';

    case messageType.input_brand_info:
      return isKorean ? '브랜드명을 정확히 입력해주세요.<br />ex) 구찌, 샤넬' : '请正确输入品牌名称。<br />例如：古奇，香奈儿';

    case messageType.쇼핑정보:
      return isKorean ? '쇼핑정보' : '购物信息';

    case messageType.search_brand:
      return isKorean ? '브랜드 쇼핑정보' : '品牌购物信息';

    case messageType.브랜드매장찾기:
      return isKorean ? '브랜드 매장찾기' : '查找品牌专柜';

    case messageType.find_again:
      return isKorean ? '다시 찾기' : '重新查找';

    case messageType.show_brand_info:
      return isKorean ? '요청하신 브랜드의 쇼핑 정보를 보여드릴게요.' : '为您展示您所查找的品牌购物信息。';

    case messageType.only_online:
      return isKorean ? '온라인 전용 브랜드입니다.' : '网上专用品牌';

    case messageType.public_store:
      return isKorean ? '공식스토어' : '官方商城';

    case messageType.brand_event:
      return isKorean ? '브랜드행사' : '品牌活动';

    case messageType.brand_mall:
      return isKorean ? '브랜드몰' : '品牌商城';

    case messageType.only_offline:
      return isKorean ? '오프라인 전용 브랜드입니다. <br /> 상품 관련 문의는 매장 전화로 문의 바랍니다.' : '实体店专用品牌，商品相关咨询请拨打商场咨询热线。';

    case messageType.shop_info:
      return isKorean ? '매장정보' : '专柜信息';

    case messageType.found_brand:
      return isKorean ? `비슷한 브랜드를 ${props.count}개 찾았어요. <br />원하시는 브랜드를 선택해주세요.` : `为您检索到${props.count}个相似的品牌，请选择您所查找的品牌。`;

    default: return '';
  }
};

const translateForOrderInfo = (type, isKorean) => {
  switch (type) {
    case messageType.주문정보인사말1:
      return isKorean ? '고객님의 주문내역이에요.<br />주문내역을 선택하시면 해당 주문 상세 화면으로 이동해요.' : '您的订单。请选择订购明细，跳转至该订单详情界面。';

    case messageType.주문정보안내1:
      return isKorean ? '출국정보 변경은 인터넷면세점 주문에 한해 주문 상세 화면에서 가능합니다.' : '更改出境信息仅限于网上免税店，可在订购详情的界面中进行。';

    case messageType.주문정보인사말2:
      return isKorean ? '아직 주문전이시네요.<br />다양한 혜택을 확인하시고, 상품을 주문해보세요.' : '目前处于订购前，请您确认各种优惠后，再订购商品。';

    case messageType.상품추천:
      return isKorean ? '상품 추천' : '推荐商品';

    case messageType.혜택추천:
      return isKorean ? '혜택 추천' : '推荐优惠';

    default: return '';
  }
};

const translateForRecommend = (type, isKorean) => {
  switch (type) {
    case messageType.인사말:
      return isKorean ? '문의하신 상품 추천 결과를보여드릴게요.' : '请浏览一下您咨询的商品推荐结果。';
    case messageType.이해못함:
      return isKorean ? '문의하신 상품 추천 결과가 없어요.' : '咨询的商品推荐结果不存在。';

    default: return '';
  }
};

// deprecated
const translateForEventInfo = (type, language) => {
  const kr = {
    처음으로: '처음으로',
    추천: '고객님에게 맞는 쇼핑 혜택을 추천해드려요.',
    없슴: '고객님을 위한 혜택 추천을 찾지 못했어요.<br>다른 서비스를 이용해보시겠어요?',
    못찾음: '선택하신 혜택을 찾지 못했어요. <br>다른 혜택을 선택해주세요.',
    지점혜택없슴: '선택하신 지점의 혜택을 찾지 못했어요. 다른 지점을 선택해주세요.',
    세일혜택코멘트: '세일 혜택을 알려드릴게요.',
    사은혜택코멘트: '사은 혜택을 알려드릴게요.',
    제휴혜택코멘트: '제휴 혜택을 알려드릴게요.',
    결제혜택코멘트: '결제 혜택을 알려드릴게요.',
    세일혜택: '세일 혜택',
    사은혜택: '사은 혜택',
    결제혜택: '결제 혜택',
    제휴혜택: '제휴 혜택',
    지점별혜택: '지점별 혜택',
    지점선택: '원하시는 지점을 선택하시면 <br>해당 지점의 혜택을 알려드릴게요.',
    본점: '명동점',
    명동점: '명동점',
    강남점: '강남점',
    부산점: '부산점',
    인천1: '인천공항1터미널점',
    인천2: '인천공항2터미널점',
    신세계명동점: '신세계면세점 명동점의 혜택을 알려드릴게요.',
    신세계강남점: '신세계 면세점 강남점은 2021년 7월 17일부로 폐점하였습니다.<br>강남점 문의사항은 챗봇 상담하기 또는 고객센터로 연락 주시기 바랍니다.<br>고객센터 1661-8778 (09:00-18:00 연중무휴)',
    신세계부산점: '신세계면세점 부산점의 혜택을 알려드릴게요.',
    신세계인천1점: '신세계면세점 인천공항 1터미널점 혜택을 알려드릴게요.',
    신세계인천2점: '신세계면세점 인천공항 2터미널점 혜택을 알려드릴게요.',
    세일: '세일',
    사은: '사은',
    결제: '결제',
    제휴: '제휴',
    명동점혜택: '명동점 혜택',
    강남점혜택: '강남점 혜택',
    부산점혜택: '부산점 혜택',
    인천1혜택: '인천공항1터미널점 혜택',
    인천2혜택: '인천공항2터미널점 혜택',
  };
  const cn = {
    처음으로: '返回首页',
    추천: '为顾客推荐量身定做的购物优惠。',
    없슴: '无法为顾客搜索到优惠推荐，您可以尝试使用其他的优惠服务吗？',
    못찾음: '无法搜索到您所选择的优惠，<br>请您尝试选择其他优惠。',
    지점혜택없슴: '无法搜索到您所选的分店优惠活动，请选择其他分店。',
    세일혜택코멘트: '通知减价优惠。',
    사은혜택코멘트: '通知赠品优惠。',
    제휴혜택코멘트: '通知合作优惠。',
    결제혜택코멘트: '通知结算优惠。',
    세일혜택: '减价优惠',
    사은혜택: '赠品优惠',
    결제혜택: '结算优惠',
    제휴혜택: '合作优惠',
    지점별혜택: '各分店优惠',
    지점선택: '若选择您想要去的分店，将为您介绍该分店的优惠活动。',
    본점: '明洞店',
    명동점: '明洞店',
    강남점: '江南店',
    부산점: '釜山店',
    인천1: '仁川机场第一航站楼店',
    인천2: '仁川机场第二航站楼店',
    신세계명동점: '为您介绍韩际新世界免税店明洞店的优惠活动。',
    신세계강남점: '新世界免税店江南店自2021年7月17日起停止营业。<br>有关江南店的咨询事项请咨询聊天机器人或联系客服中心。<br>客服中心 400-842-8868 (09:00-18:00 全年无休)',
    신세계부산점: '为您介绍韩际新世界免税店釜山分店的优惠活动。',
    신세계인천1점: '为您介绍韩际新世界免税店仁川机场第一航站楼店的优惠活动。',
    신세계인천2점: '为您介绍韩际新世界免税店仁川机场第二航站楼店的优惠活动。',
    세일: '减价',
    사은: '赠品',
    결제: '结算',
    제휴: '合作',
    명동점혜택: '明洞店优惠',
    강남점혜택: '江南店优惠',
    부산점혜택: '釜山店优惠',
    인천1혜택: '仁川机场第一航站楼优惠',
    인천2혜택: '仁川机场第二航站楼优惠',
  };

  if (language === languageType.KR) {
    return kr[type];
  }

  return cn[type];
};

module.exports = {
  translate,
  translateForEventInfo,
};