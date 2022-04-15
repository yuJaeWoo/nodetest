const domain = process.env.LANDING_PAGE;
module.exports = (lang, type, chnlCd = '', props = {}) => {  
    switch (type) {    
        case '문의하기':      return `${domain}/${lang}/customer/initOnoCounsel`;    
        case '행사더보기':      return `${domain}/${lang}/search/total?collection=benefit&query=${props.brand}`;    
        case '상품검색':      return `${domain}/${lang}/search/total?query=${props.keyword}`;    
        case '브랜드몰':      return `${domain}/${lang}/dispctg/initBranMall?hadl_bran_cd=${props.brandCd}`;    
        case '출국정보변경':      return `${domain}/${lang}/mypage/initMyDpatInfoRegister?reg_seq=${props.reg_seq}`;    
        case '로그인':      return `${domain}/${lang}/login/login?chatbot=Y`;    
        case '회원정보수정':      return `${domain}/${lang}/mypage/initMyInfoChange`;    
        case '온라인멤버쉽안내':      return `${domain}/${lang}/mypage/initMyMemBenefits?idx=1`;    
        case '면세점멤버쉽안내':      return `${domain}/${lang}/mypage/initMyMemBenefits?idx=2`;    
        case '여권정보등록':      return `${domain}/${lang}/mypage/initMyPsptRegistMod`;    
        case '출국정보관리':      return `${domain}/${lang}/mypage/initMyDpatInfo`;    
        case '비밀번호확인':      return `${domain}/${lang}/member/initMemberPwConfirm`;    
        case '쇼핑안내':      
        return lang === 'kr'        
        ? `${domain}/kr/customer/initShoppingGuide?guide_mgmt_no=202010280000019`        
        : `${domain}/cn/customer/initShoppingGuide?guide_mgmt_no=202103040000019`;    
        case '공식스토어':      return `${domain}/${lang}/dispctg/initOfclStoreMain`;    
        case '세일':      return `${domain}/${lang}/shop/initTimeSale`;    
        case '주문내역목록':      return `${domain}/${lang}/mypage/initExitChngOrderList`;    
        case '주문내역':      return `${domain}/${lang}/mypage/initExitChngRegister`;    
        case '출국정보목록':      return `${domain}/${lang}/mypage/initMyDpatInfo`;    
        case '주문취소':      return `${domain}/${lang}/mypage/initOrderCnclReq?ord_no=`;    
        case '주문상세':      return `${domain}/${lang}/mypage/initDtOrderInfo?ord_no=`;    
        case '나의주문목록':      return `${domain}/${lang}/mypage/initMyOrderList`;    
        case '쇼핑절차안내':      
            return lang === 'kr'        
            ? `${domain}/kr/customer/initShoppingGuide?guide_mgmt_no=202010280000009`        
            : `${domain}/cn/customer/initShoppingGuide?guide_mgmt_no=202103040000004`;    
        case '주문가능시간':      
            return lang === 'kr'        
            ? `${domain}/kr/customer/initShoppingGuide?guide_mgmt_no=202102150000061`        
            : `${domain}/cn/customer/initShoppingGuide?guide_mgmt_no=202103040000061`;    
        case '인도수령안내':      
            return lang === 'kr'        
            ? `${domain}/kr/customer/initShoppingGuide?guide_mgmt_no=202010280000017`        
            : `${domain}/cn/customer/initShoppingGuide?guide_mgmt_no=202103040000006`;    
        case '교환환불':      
            return lang === 'kr'        
            ? `${domain}/kr/customer/initShoppingGuide?guide_mgmt_no=202010280000008`        
            : `${domain}/cn/customer/initShoppingGuide?guide_mgmt_no=202103040000008`;    
        case '면세쇼핑안내':      
            return lang === 'kr'        
            ? `${domain}/kr/customer/initShoppingGuide?guide_mgmt_no=202010280000019`        
            : `${domain}/cn/customer/initShoppingGuide?guide_mgmt_no=202103040000019`;    
        case '면세이용한도안내':      
        return lang === 'kr'        
        ? `${domain}/kr/customer/initShoppingGuide?guide_mgmt_no=202010280000020`        
        : `${domain}/cn/customer/initShoppingGuide?guide_mgmt_no=202103040000020`;    
        case '면세반입제한':      
        return lang === 'kr'        
        ? `${domain}/kr/customer/initShoppingGuide?guide_mgmt_no=202010280000021`        
        : `${domain}/cn/customer/initShoppingGuide?guide_mgmt_no=202103040000021`;    
        case '기내반입제한':      
        return lang === 'kr'        
        ? `${domain}/kr/customer/initShoppingGuide?guide_mgmt_no=202010280000022`        
        : `${domain}/cn/customer/initShoppingGuide?guide_mgmt_no=202103040000022`;    
        //case '스페셜오더안내':      return lang === 'kr'        ? `${domain}/kr/customer/initShoppingGuide?guide_mgmt_no=202010280000016`        : `${domain}/cn/customer/initShoppingGuide?guide_mgmt_no=202103040000016`;    case '명동점상세':      return chnlCd === '10'        ? `${domain}/${lang}/customer/initCtStor?tab_no=2&tab_stor_no=05`        : `${domain}/${lang}/customer/initCtStorDtl?tab_no=05`;    case '강남점상세':      return chnlCd === '10'        ? `${domain}/${lang}/customer/initCtStor?tab_no=2&tab_stor_no=08`        : `${domain}/${lang}/customer/initCtStorDtl?tab_no=08`;    case '부산점상세':      return chnlCd === '10'        ? `${domain}/${lang}/customer/initCtStor?tab_no=2&tab_stor_no=01`        : `${domain}/${lang}/customer/initCtStorDtl?tab_no=01`;    case '인천공항1상세':      return chnlCd === '10'        ? `${domain}/${lang}/customer/initCtStor?tab_no=2&tab_stor_no=10`        : `${domain}/${lang}/customer/initCtStorDtl?tab_no=10`;    case '인천공항2상세':      return chnlCd === '10'        ? `${domain}/${lang}/customer/initCtStor?tab_no=2&tab_stor_no=07`        : `${domain}/${lang}/customer/initCtStorDtl?tab_no=07`;    case '제휴':      return `${domain}/${lang}/event/initEventMain?categorytab=picked&rel_dtl_no1=10&rel_dtl_no2=12&rel_dtl_no3=`;    case '결제':      return `${domain}/${lang}/event/initEventMain?categorytab=picked&rel_dtl_no1=10&rel_dtl_no2=11&rel_dtl_no3=`;    case '사은':      return `${domain}/${lang}/event/initEventMain?categorytab=picked&rel_dtl_no1=10&rel_dtl_no2=13&rel_dtl_no3=131`;    case '명동점':      return `${domain}/${lang}/event/initEventMain?categorytab=picked&rel_dtl_no1=20&rel_dtl_no2=20&rel_dtl_no3=201`;    case '강남점':      return `${domain}/${lang}/event/initEventMain?categorytab=picked&rel_dtl_no1=20&rel_dtl_no2=21&rel_dtl_no3=201`;    case '부산점':      return `${domain}/${lang}/event/initEventMain?categorytab=picked&rel_dtl_no1=20&rel_dtl_no2=22&rel_dtl_no3=201`;    case '인천공항1':      return `${domain}/${lang}/event/initEventMain?categorytab=picked&rel_dtl_no1=20&rel_dtl_no2=23&rel_dtl_no3=201`;    case '인천공항2':      return `${domain}/${lang}/event/initEventMain?categorytab=picked&rel_dtl_no1=20&rel_dtl_no2=24&rel_dtl_no3=201`;    default:      return '';  
    }
};