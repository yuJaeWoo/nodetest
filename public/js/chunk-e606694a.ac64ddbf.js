(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e606694a","chunk-17e6bd30","chunk-ad5c0b30","chunk-71220686","chunk-2d229287","chunk-2d231549"],{"2a7d":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"chatButton"},t._l(t.data,(function(a,n){return e("div",{key:n},[e("button",{on:{click:function(e){return t.onClick(a)}}},[t._v(" "+t._s(a.label)+" ")])])})),0)},u=[],c=e("efa3"),r=e("675c"),l={name:"Button",props:{data:Array},mixins:[c["default"]],methods:{onClick:function(t){console.log("Quickreply click",t),this.isOnConsulting||(t.tagName&&this.$analyticsHandler.apply(t.tagName),r["default"].run(t))}}},i=l,o=e("2877"),s=Object(o["a"])(i,n,u,!1,null,null,null);a["default"]=s.exports},"4a81":function(t,a,e){"use strict";e.r(a);var n=e("b54f"),u=function(t){console.log("uiHandler.main",t);var a=t.type;switch(console.log("actionType",a),a){case n["default"].ALERT:console.log(t.data),alert(t.data);break;case n["default"].LINK:window.open(t.url);break}};a["default"]={run:u}},"675c":function(t,a,e){"use strict";e.r(a);var n=e("653a"),u=e("4a81"),c=e("dbf9"),r=function(t){console.log("actionHandler.run",t);var a=t.type;switch(a){case c["default"].MESSAGE:return void n["default"].dispatch("SEND_MESSAGE",t.param);case c["default"].POPUP_SLIDE:n["default"].commit("POPUP_SLIDE",t.param);break;case c["default"].SAVE:n["default"].commit("SAVE",t.param);break;case c["default"].LOAD:n["default"].dispatch("LOAD",t.param);break;case c["default"].CUSTOM:u["default"].run(t.param);break}};a["default"]={actionType:c["default"],run:r}},b54f:function(t,a,e){"use strict";e.r(a);var n=e("5530"),u=e("dbf9");a["default"]=Object(n["a"])(Object(n["a"])({},u["default"]),{},{ALERT:"ALERT"})},dbf9:function(t,a,e){"use strict";e.r(a),a["default"]={MESSAGE:"MESSAGE",LINK:"LINK",POPUP_SLIDE:"POPUP_SLIDE",CUSTOM:"CUSTOM",COPY:"COPY",SAVE:"SAVE",LOAD:"LOAD"}},efa3:function(t,a,e){"use strict";e.r(a),a["default"]={computed:{isOnConsulting:function(){return this.$store.state.mode===this.$dictionary.writerType.COUNSELOR}}}}}]);
//# sourceMappingURL=chunk-e606694a.ac64ddbf.js.map