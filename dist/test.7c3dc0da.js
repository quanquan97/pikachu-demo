parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"K4Xi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n="\n.skin * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n.skin *::before, .skin *::after {\n    box-sizing: border-box;\n}\n\n.skin {\n    position: relative;\n    background-color: #ffe600;\n    min-height: 50vh;\n}\n\n.nose {\n    border: 10px solid red;\n    border-color: black transparent transparent;\n    height: 0px;\n    width: 0px;\n    border-bottom: none;\n    left: 50%;\n    top: 145px;\n    position: relative;\n    margin-left: -10px;\n    z-index: 10;\n}\n\n\n@keyframes wave {\n    0% {\n        transform: rotate(0deg);\n    }\n    33% {\n        transform: rotate(30deg);\n    }\n    66% {\n        transform: rotate(-30deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n\n.nose:hover {\n    transform-origin: center bottom;\n    animation: wave 200ms infinite linear;\n}\n\n.circle {\n    position: absolute;\n    background-color: black;\n    width: 20px;\n    height: 8px;\n    top: -18px;\n    left: -10px;\n    border-radius: 10px 10px 0 0;\n\n}\n\n.eye {\n    position: absolute;\n    border: 2px solid #000;\n    width: 64px;\n    height: 64px;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px;\n    background: #2e2e2e;\n    border-radius: 50%\n}\n\n.eye::before {\n    content: \"\";\n    display: block;\n    /*默认是内联元素  不加这个就没有宽度了 */\n    border: 3px solid black;\n    width: 28px;\n    height: 28px;\n    background-color: white;\n    border-radius: 50%;\n    position: relative;\n    left: 8px;\n    top: 2px;\n\n}\n\n.eye.left {\n    transform: translateX(-120px);\n}\n\n.eye.right {\n    transform: translateX(120px);\n}\n\n\n.mouth {\n    /*border: 1px solid red ;*/\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    margin-left: -100px;\n    top: 170px;\n}\n\n.mouth .up {\n    position: relative;\n    top: -20px;\n    z-index: 1;\n}\n\n\n.mouth .up .lip {\n    position: relative;\n    border: 4px solid black;\n    width: 100px;\n    height: 30px;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n    background-color: #ffe600;\n}\n\n/* 这里的空格很有讲究！！ */\n.mouth .up .lip.left {\n    border-radius: 0 0 0 50px;\n    transform: rotate(-15deg) translateX(-52px);\n}\n\n.mouth .up .lip.right {\n    border-radius: 0 0 50px 0;\n    transform: rotate(15deg) translateX(52px);\n}\n\n\n.mouth .up .lip::before {\n    content: '';\n    display: block;\n    width: 7px;\n    height: 30px;\n    position: absolute;\n    bottom: 0;\n    background-color: #ffe600;\n\n}\n\n/* 这里又因为手滑写错成right浪费了好久！！！ */\n.mouth .up .lip.left::before {\n    /* border:1px solid green; */\n    right: -6px;\n}\n\n.mouth .up .lip.right::before {\n    left: -6px;\n\n}\n\n.mouth .down {\n    /* border:1px solid red; */\n    height: 180px;\n    width: 100%;\n    position: absolute;\n    top: 5px;\n    overflow: hidden;\n}\n\n.mouth .down .circle1 {\n    border: 4px solid black;\n    height: 1000px;\n    width: 100%;\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    border-radius: 0 0 50% 50%;\n    background-color: #9b000a;\n    overflow: hidden;\n\n}\n\n.mouth .down .circle1 .circle2 {\n    border: 1px solid #ff485f;\n    height: 150px;\n    width: 160px;\n    position: absolute;\n    bottom: -3px;\n    left: 50%;\n    margin-left: -80px;\n    border-radius: 70% 70% 0 0;\n    background-color: #ff485f;\n    background-color: #ff485f;\n\n}\n\n\n.face {\n    position: absolute;\n    left: 50%;\n    border: 2px solid black;\n    width: 88px;\n    height: 88px;\n    top: 200px;\n    margin-left: -44px;\n    z-index: 3;\n\n}\n\n.face.left {\n    transform: translateX(-180px);\n    border-radius: 50%;\n    background-color: #ff0000;\n}\n\n.face > img {\n    /* border:1px solid red; */\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    display: none;\n\n}\n\n.face:hover > img {\n    display: block;\n\n}\n\n.face.left > img {\n    transform: rotateY(180deg);\n    transform-origin: 0 0;\n}\n\n.face.right {\n    transform: translateX(180px);\n    border-radius: 50%;\n    background-color: #ff0000;\n}\n\n",o=n;exports.default=o;
},{}],"HdJB":[function(require,module,exports) {
"use strict";var e=n(require("./css.js"));function n(e){return e&&e.__esModule?e:{default:e}}var t={id:void 0,time:10,ui:{demo:document.querySelector("#demo"),demo2:document.querySelector("#demo2")},events:{"#btnPause":"pause","#btnPlay":"play","#btnSlow":"slow","#btnNormal":"normal","#btnFast":"fast"},n:1,init:function(){t.ui.demo.innerText=e.default.substr(0,t.n),t.ui.demo2.innerHTML=e.default.substr(0,t.n),t.bindEvents(),t.play()},bindEvents:function(){for(var e in t.events)if(t.events.hasOwnProperty(e)){var n=t.events[e];document.querySelector(e).onclick=t[n]}},run:function(){t.n+=1,t.n>e.default.length?window.clearInterval(t.id):(t.ui.demo.innerText=e.default.substr(0,t.n),t.ui.demo2.innerHTML=e.default.substr(0,t.n),t.ui.demo.scrollTop=t.ui.demo.scrollHeight)},play:function(){t.id=setInterval(t.run,t.time)},pause:function(){window.clearInterval(t.id)},slow:function(){t.pause(),t.time=50,t.play()},normal:function(){t.pause(),t.time=10,t.play()},fast:function(){t.pause(),t.time=0,t.play()}};t.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.7c3dc0da.js.map