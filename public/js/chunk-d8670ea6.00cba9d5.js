(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8670ea6","chunk-2d0a473d"],{"0700":function(e,t,n){"use strict";n.r(t),t["default"]={INTENT:"INTENT",CONNECT_INTENT_RESPONSE:"CONNECT_INTENT_RESPONSE",RESPONSE:"RESPONSE",API:"API",COMPONENT:"COMPONENT",DIRECT:"DIRECT"}},"2d94":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"overlay-content",staticStyle:{border:"solid"}},[n("label",[e._v("DirectHandler 이름을 영문 한단어로 입력하세요")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"ex> myresponse"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("label",{attrs:{for:"cars"}},[e._v("API 선택")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.api,expression:"api"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.api=t.target.multiple?n:n[0]}}},e._l(e.data.apis,(function(t,a){return n("option",{key:a},[e._v(e._s(t))])})),0),n("br"),n("input",{staticStyle:{width:"100%"},attrs:{type:"button",value:"등록"},on:{click:function(t){return e.click("등록")}}}),n("p",{staticStyle:{color:"red"}},[e._v(e._s(e.info))])])},o=[],i=(n("498a"),n("b0c0"),n("0fe6")),r=n("0700"),s=n("cf45"),c={name:"DirectRegi",props:{data:Object},data:function(){return{name:"",api:"",component:"",info:""}},mounted:function(){console.log("ResponseRegi.mounted",this.data)},computed:{},filters:{},methods:{click:function(e){switch(e){case"등록":var t=this.name.trim();if(""===t)return void(this.info="Response 이름을 입력하세요.");console.log("response>",this.api);var n={action:r["default"].DIRECT,name:t,api:this.api};console.log("data",n),s["default"].callResponse(i["default"].MGBUILDER,n);break}}}},l=c,u=(n("e65f"),n("2877")),p=Object(u["a"])(l,a,o,!1,null,"7fe21d98",null);t["default"]=p.exports},beb2:function(e,t,n){},e65f:function(e,t,n){"use strict";n("beb2")}}]);
//# sourceMappingURL=chunk-d8670ea6.00cba9d5.js.map