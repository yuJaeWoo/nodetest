(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-658c1b98","chunk-2d0a473d"],{"0700":function(t,e,n){"use strict";n.r(e),e["default"]={INTENT:"INTENT",CONNECT_INTENT_RESPONSE:"CONNECT_INTENT_RESPONSE",RESPONSE:"RESPONSE",API:"API",COMPONENT:"COMPONENT",DIRECT:"DIRECT"}},"1d80b":function(t,e,n){"use strict";n("750c")},"750c":function(t,e,n){},"8d69":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overlay-content",staticStyle:{border:"solid"}},[n("label",[t._v("컴포넌트 이름을 영문 한단어로 입력하세요")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"ex> productInfo"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("br"),n("input",{staticStyle:{width:"100%",height:"30px"},attrs:{type:"button",value:"등록"},on:{click:function(e){return t.click("등록")}}}),n("p",{staticStyle:{color:"red"}},[t._v(t._s(t.info))])])},o=[],c=(n("498a"),n("b0c0"),n("0fe6")),i=n("0700"),r=n("cf45"),s={name:"ComponentRegi",props:{data:Object},data:function(){return{name:"",api:"",component:"",info:""}},mounted:function(){console.log("ApiRegi.mounted",this.data)},computed:{},filters:{},methods:{click:function(t){switch(t){case"등록":var e=this.name.trim();if(""===e)return void(this.info="이름을 입력하세요.");var n={action:i["default"].COMPONENT,name:e};console.log("data",n),r["default"].callResponse(c["default"].MGBUILDER,n);break}}}},u=s,l=(n("1d80b"),n("2877")),d=Object(l["a"])(u,a,o,!1,null,"6664ca4e",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-658c1b98.3e04a4a8.js.map