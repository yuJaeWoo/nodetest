(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17e6bd30","chunk-ad5c0b30","chunk-71220686","chunk-2d229287"],{"4a81":function(a,e,t){"use strict";t.r(e);var c=t("b54f"),u=function(a){console.log("uiHandler.main",a);var e=a.type;switch(console.log("actionType",e),e){case c["default"].ALERT:console.log(a.data),alert(a.data);break;case c["default"].LINK:window.open(a.url);break}};e["default"]={run:u}},"675c":function(a,e,t){"use strict";t.r(e);var c=t("653a"),u=t("4a81"),n=t("dbf9"),d=function(a){console.log("actionHandler.run",a);var e=a.type;switch(e){case n["default"].MESSAGE:return void c["default"].dispatch("SEND_MESSAGE",a.param);case n["default"].POPUP_SLIDE:c["default"].commit("POPUP_SLIDE",a.param);break;case n["default"].SAVE:c["default"].commit("SAVE",a.param);break;case n["default"].LOAD:c["default"].dispatch("LOAD",a.param);break;case n["default"].CUSTOM:u["default"].run(a.param);break}};e["default"]={actionType:n["default"],run:d}},b54f:function(a,e,t){"use strict";t.r(e);var c=t("5530"),u=t("dbf9");e["default"]=Object(c["a"])(Object(c["a"])({},u["default"]),{},{ALERT:"ALERT"})},dbf9:function(a,e,t){"use strict";t.r(e),e["default"]={MESSAGE:"MESSAGE",LINK:"LINK",POPUP_SLIDE:"POPUP_SLIDE",CUSTOM:"CUSTOM",COPY:"COPY",SAVE:"SAVE",LOAD:"LOAD"}}}]);
//# sourceMappingURL=chunk-17e6bd30.475c3bbd.js.map