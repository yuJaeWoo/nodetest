(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-434fb9e1","chunk-2d0a473d"],{"0700":function(e,t,n){"use strict";n.r(t),t["default"]={INTENT:"INTENT",CONNECT_INTENT_RESPONSE:"CONNECT_INTENT_RESPONSE",RESPONSE:"RESPONSE",API:"API",COMPONENT:"COMPONENT",DIRECT:"DIRECT"}},"43ab":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"overlay-content",staticStyle:{border:"solid"}},[n("label",[e._v("Api 이름을 영문 한단어로 입력하세요")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"ex> productInfo"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("br"),n("input",{staticStyle:{width:"100%"},attrs:{type:"button",value:"등록"},on:{click:function(t){return e.click("등록")}}}),n("p",{staticStyle:{color:"red"}},[e._v(e._s(e.info))])])},o=[],i=(n("498a"),n("b0c0"),n("0fe6")),c=n("0700"),s=n("cf45"),u={name:"ApiRegi",props:{data:Object},data:function(){return{name:"",api:"",component:"",info:""}},mounted:function(){console.log("ApiRegi.mounted",this.data)},computed:{},filters:{},methods:{click:function(e){switch(e){case"등록":var t=this.name.trim();if(""===t)return void(this.info="이름을 입력하세요.");var n={action:c["default"].API,name:t};console.log("data",n),s["default"].callResponse(i["default"].MGBUILDER,n);break}},close:function(){this.$uiHandler.closePopup()}}},l=u,r=(n("6e31"),n("2877")),d=Object(r["a"])(l,a,o,!1,null,"e648be0e",null);t["default"]=d.exports},"6e31":function(e,t,n){"use strict";n("ba55")},ba55:function(e,t,n){}}]);
//# sourceMappingURL=chunk-434fb9e1.aa6acf42.js.map