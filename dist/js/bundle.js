!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){var r=n(1),i=n(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);t.exports=i.locals||{}},function(t,e,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),s=[];function a(t){for(var e=-1,n=0;n<s.length;n++)if(s[n].identifier===t){e=n;break}return e}function u(t,e){for(var n={},r=[],i=0;i<t.length;i++){var o=t[i],u=e.base?o[0]+e.base:o[0],c=n[u]||0,l="".concat(u," ").concat(c);n[u]=c+1;var f=a(l),h={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(s[f].references++,s[f].updater(h)):s.push({identifier:l,updater:y(h,e),references:1}),r.push(l)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var s=o(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var l,f=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function h(t,e,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function d(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var p=null,m=0;function y(t,e){var n,r,i;if(e.singleton){var o=m++;n=p||(p=c(e)),r=h.bind(null,n,o,!1),i=h.bind(null,n,o,!0)}else n=c(e),r=d.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=u(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var i=a(n[r]);s[i].references--}for(var o=u(t,e),c=0;c<n.length;c++){var l=a(n[c]);0===s[l].references&&(s[l].updater(),s.splice(l,1))}n=o}}}},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(0);var r=function(){function t(t){this.array=t,this.indexesToSwapArray=[]}return t.prototype.resetIndexesToSwap=function(){this.indexesToSwapArray=[]},t.prototype.getIndexesToSwapArray=function(){return this.indexesToSwapArray},t.prototype.setArray=function(t){this.array=t},t.prototype.getArray=function(){return this.array},t.prototype.sortArray=function(){this.resetIndexesToSwap();for(var t=this.array.length,e=0;e<t;e+=1){for(var n=e,r=e+1;r<t;r+=1)this.array[r]<this.array[n]&&(n=r);if(e!==n){var i=this.array[e];this.array[e]=this.array[n],this.array[n]=i,this.indexesToSwapArray.push([n,e])}}},t}(),i=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function s(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((r=r.apply(t,e||[])).next())}))},o=function(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},s=function(){function t(t){var e=this;this.moveElementToXCoord=function(t,e){return new Promise((function(n){var r=function(){t.removeEventListener("transitionend",r),t.classList.remove("selection-sort__item--swap-transition"),t.setAttribute("style","translate: '0'"),n()};t.addEventListener("transitionend",r),t.classList.add("selection-sort__item--swap-transition"),t.setAttribute("style","transform: translateX("+e+"px)")}))},this.swapElementsText=function(t,e){var n=t.querySelector(".selection-sort__item-value"),r=e.querySelector(".selection-sort__item-value"),i=n.textContent;n.textContent=r.textContent,r.textContent=i},this.markSortedSequence=function(t){return new Promise((function(n){for(var r=e.parentElement.querySelectorAll(".selection-sort__item-bg"),i=void 0!==t?t:r.length-1,o=0;o<=i;o+=1)r[o].classList.contains("selection-sort__item-bg--sorted")||r[o].classList.add("selection-sort__item-bg--sorted");var s=function(){r[i].removeEventListener("transitionend",s),n()};r[i].addEventListener("transitionend",s)}))},this.parentElement=t,this.lItems=[]}return t.prototype.getXCoord=function(t){var e=this.parentElement.getBoundingClientRect().left;return t.getBoundingClientRect().left-e},t.prototype.renderArray=function(t){var e=this;this.parentElement.innerHTML="",this.lItems=[];var n=document.createDocumentFragment();t.forEach((function(t){var r=document.createElement("li");r.classList.add("selection-sort__item");var i=document.createElement("div");i.classList.add("selection-sort__item-bg");var o=document.createElement("span");o.classList.add("selection-sort__item-value"),o.textContent=t.toString(),r.append(i,o),n.append(r),e.lItems.push(r)})),this.parentElement.append(n)},t.prototype.swapAnimation=function(t,e){return i(this,void 0,void 0,(function(){var n,r,i,s=this;return o(this,(function(o){switch(o.label){case 0:return n=this.lItems[t],r=this.lItems[e],i={first:this.getXCoord(r)-this.getXCoord(n),second:this.getXCoord(n)-this.getXCoord(r)},[4,Promise.all([this.moveElementToXCoord.call(this,n,i.first),this.moveElementToXCoord.call(this,r,i.second)]).then((function(){s.swapElementsText(n,r)}))];case 1:return o.sent(),[2]}}))}))},t}(),a=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function s(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((r=r.apply(t,e||[])).next())}))},u=function(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},c=function(){function t(t,e){this.model=t,this.view=e}return t.prototype.sortArray=function(){return a(this,void 0,void 0,(function(){var t,e,n,r,i,o;return u(this,(function(s){switch(s.label){case 0:this.model.sortArray(),t=this.model.getIndexesToSwapArray(),e=t.length,n=0,s.label=1;case 1:return n<e?(r=t[n],i=r[0],o=r[1],[4,this.view.swapAnimation(i,o)]):[3,7];case 2:return s.sent(),n!==e-1?[3,4]:[4,this.view.markSortedSequence()];case 3:return s.sent(),[3,6];case 4:return[4,this.view.markSortedSequence(o)];case 5:s.sent(),s.label=6;case 6:return n+=1,[3,1];case 7:return[2]}}))}))},t.prototype.init=function(t){this.model.setArray(t),this.view.renderArray(t),this.sortArray()},t}(),l=function(){function t(t,e,n){this.inputElement=n,this.model=new r(t),this.view=new s(e),this.controller=new c(this.model,this.view),this.inputElement.addEventListener("change",this.onInputChange.bind(this))}return t.prototype.isCorrectValues=function(t){return!t.some((function(t){return Number.isNaN(t)}))},t.prototype.onInputChange=function(){var t=new RegExp(",?\\s"),e=this.inputElement.value;""!==e&&(e=e.split(t).map((function(t){return parseInt(t,10)})),this.isCorrectValues(e)?(this.inputElement.setCustomValidity(""),this.controller.init(e)):this.inputElement.setCustomValidity("please, enter correct values"))},t}(),f=function(){function t(t,e,n){this.isDeleting=!1,this.wordIndex=0,this.txt="",this.element=t,this.words=e,this.duration=n,this.type()}return t.prototype.type=function(){var t=this,e=this.wordIndex%this.words.length,n=this.words[e];this.isDeleting?this.txt=n.substring(0,this.txt.length-1):this.txt=n.substring(0,this.txt.length+1),this.element.textContent=this.txt;var r=this.duration/10;this.isDeleting&&(r/=2),this.isDeleting||this.txt!==n?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.wordIndex+=1):(r=this.duration,this.isDeleting=!0),setTimeout((function(){return t.type()}),r)},t}(),h=function(){function t(t){this.authorElement=t,this.init()}return t.prototype.init=function(){var t=this.authorElement.querySelector(".author__advantages");if(t){var e=t.getAttribute("data-advantages");null!==e&&(e=JSON.parse(e),this.typeWritter=new f(t,e,3e3))}},t}();new l([0,0,0],document.querySelector(".selection-sort__array"),document.querySelector(".selection-sort__input-field")),new h(document.querySelector(".author"))}]);