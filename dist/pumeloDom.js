var pumeloDom=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([,,,,function(e,t,n){e.exports=Object.assign(n(5))},function(e,t,n){(function(t){e.exports.checkWebp=function(){try{return 0==document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")}catch(e){return!1}},e.exports.setBaseFontSizeByClientWidth=()=>{if(t.client){const e=16,t=document.documentElement.clientWidth/375;document.documentElement.style.fontSize=e*Math.min(t,2)+"px"}},e.exports.getUrlParam=()=>{let e=document.location.search;e=e.split("+").join(" ");for(var t,n={},o=/[?&]?([^=]+)=([^&]*)/g;t=o.exec(e);)n[decodeURIComponent(t[1])]=decodeURIComponent(t[2]);return n},e.exports.ajax=function(e){var t=e||{};t.type=(t.type||"GET").toUpperCase(),t.data=t.data||{},t.headers=t.headers||null;var n=t.jsonp?function(e){var t=e.jsonp,n=document.getElementsByTagName("head")[0];e.data.callback=t;var r=o(e.data),i=document.createElement("script");n.appendChild(i),window[t]=function(o){n.removeChild(i),clearTimeout(i.timer),window[t]=null,e.success&&e.success(o)},i.src=e.url+"?"+r,e.time&&(i.timer=setTimeout(function(){window[t]=null,n.removeChild(i),e.error&&e.error({message:"超时"})},time))}(t):n(t);function n(e){e.data=o(e.data);var t=null;function n(){if(null===e.headers||void 0===e.headers)t.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");else for(var n in e.headers)t.setRequestHeader(n,e.headers[n])}(t=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObjcet("Microsoft.XMLHTTP")).onreadystatechange=function(){if(4==t.readyState){var n=t.status;if(n>=200&&n<300){var o="",r=t.getResponseHeader("Content-type");o=-1!==r.indexOf("xml")&&t.responseXML?t.responseXML:-1!==r.indexOf("application/json")?JSON.parse(t.responseText):t.responseText,e.success&&e.success(o)}else e.error&&e.error(n)}},"GET"==e.type?(t.open(e.type,e.url+"?"+e.data,!0),n(),t.send(null)):"POST"==e.type&&(t.open(e.type,e.url,!0),n(),t.send(e.data))}function o(e){var t=[];for(var n in e)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.push("v="+Math.floor(1e4*Math.random()+500)),t.join("&")}},e.exports.requireJs=function(e,t){var n=document.createElement("script");n.type="text/javascript",n.src=e,document.body.appendChild(n),void 0!==t&&(n.readyState?n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(n.onreadystatechange=null,t())}:n.onload=function(){t()})},e.exports.pullRefresh=function(e){var t,n,o,r=!1,i=!1,a=/hp-tablet/gi.test(navigator.appVersion),c="ontouchstart"in window&&!a,u=document.querySelector(e.container),s=u.firstElementChild,l=s.clientHeight,d=u.parentElement,f={translate:function(e){u.style.webkitTransform="translate3d(0,"+e+"px,0)",u.style.transform="translate3d(0,"+e+"px,0)"},setTransition:function(e){u.style.webkitTransition="all "+e+"s",u.style.transition="all "+e+"s"},back:function(){f.translate(0-l),r=!1},addEvent:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}};function t(e){if(d.scrollTop<=0&&!r){var n="undefined"==typeof event?e:event;r=!0,i=!0,t=c?n.touches[0].pageY:n.pageY,f.setTransition(0),s.innerHTML="下拉可以刷新..."}return!1}function p(e){if(d.scrollTop<=0&&i){var r="undefined"==typeof event?e:event;n=c?r.touches[0].pageY:r.pageY,t<n&&(r.preventDefault(),f.setTransition(0),(n-t-l)/2<=150?(o=(n-t-l)/2,f.translate(o)):(o+=.3,f.translate(o)))}}function n(o){i&&(i=!1,n-t>=l?(f.setTransition(1),f.translate(0),s.innerHTML="加载完成!","function"==typeof e.next&&e.next.call(f,o)):f.back())}f.translate(0-l),f.addEvent(u,"touchstart",t),f.addEvent(u,"touchmove",p),f.addEvent(u,"touchend",n),f.addEvent(u,"mousedown",t),f.addEvent(u,"mousemove",p),f.addEvent(u,"mouseup",n)},e.exports.scrolltobottom=function(e){window.onscroll=function(){var t;t=0,document.documentElement&&document.documentElement.scrollTop?t=document.documentElement.scrollTop:document.body&&(t=document.body.scrollTop),t+(document.body.clientHeight&&document.documentElement.clientHeight?Math.min(document.body.clientHeight,document.documentElement.clientHeight):Math.max(document.body.clientHeight,document.documentElement.clientHeight))==Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)&&e()}},e.exports.historyLength=function(){return window.history.length},e.exports.docReferrer=function(){return document.referrer},e.exports.historyBackRefresh=function(){window.location.href=docReferrer()},e.exports.redirectHtml=function(e){window.location.replace(e)},e.exports.historyGo=function(e){window.history.go(e)}}).call(this,n(6))},function(e,t){var n,o,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(e){o=a}}();var u,s=[],l=!1,d=-1;function f(){l&&u&&(l=!1,u.length?s=u.concat(s):d=-1,s.length&&p())}function p(){if(!l){var e=c(f);l=!0;for(var t=s.length;t;){for(u=s,s=[];++d<t;)u&&u[d].run();d=-1,t=s.length}u=null,l=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||l||c(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}]);