!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["sme-log"]=o():e["sme-log"]=o()}("undefined"!=typeof self?self:this,function(){return function(e){var o={};function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=o,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s=0)}([function(e,o,n){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"dev",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none",n=3,r="#ff5335",f="#2994b2",c="#ffb400",u=function(o){switch(o){case"error":n=1;break;case"warn":n=2;break;case"info":n=3;break;default:n="development"===e||"dev"===e?3:1}},i=function(e){return"color:"+(e||"#8b80f9")+";font-weight:bold;"},s=function(o,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(function(e,o,n){return e.level?o:o||"development"===n||"dev"===n})(r,n,e)&&(r.level&&o instanceof Array&&2===o.length?console.log("%c%s%o",i(r.color),o[0]+" ",o[1]):"object"!==(void 0===o?"undefined":t(o))&&"function"!=typeof o?console.log("%c"+o,i(r.color)):console.log("%c%s%o",i(r.color),(r.level||"log")+" ",o))};return s.info=function(e,o){o&&(e=[e,o]),s(e,n>=3,{color:f,level:"info"})},s.warn=function(e,o){o&&(e=[e,o]),s(e,n>=2,{color:c,level:"warn"})},s.error=function(e,o){o&&(e=[e,o]),s(e,n>=1,{color:r,level:"error"})},s.setLevel=u,s.toString=s.valueOf=l("logger"),u(o),s}function l(e){return function(){return e+"() { [native code] }"}}r.toString=r.valueOf=l("logSome"),o.default=r,e.exports=o.default}])});