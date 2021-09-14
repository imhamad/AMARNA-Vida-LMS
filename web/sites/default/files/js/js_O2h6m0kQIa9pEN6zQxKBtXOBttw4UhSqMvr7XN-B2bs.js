/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
;
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
;(function(root, factory) {
	// https://github.com/umdjs/umd/blob/master/returnExports.js
	if (typeof exports == 'object') {
		// For Node.js.
		module.exports = factory(root);
	} else if (typeof define == 'function' && define.amd) {
		// For AMD. Register as an anonymous module.
		define([], factory.bind(root, root));
	} else {
		// For browser globals (not exposing the function separately).
		factory(root);
	}
}(typeof global != 'undefined' ? global : this, function(root) {

	if (root.CSS && root.CSS.escape) {
		return root.CSS.escape;
	}

	// https://drafts.csswg.org/cssom/#serialize-an-identifier
	var cssEscape = function(value) {
		if (arguments.length == 0) {
			throw new TypeError('`CSS.escape` requires an argument.');
		}
		var string = String(value);
		var length = string.length;
		var index = -1;
		var codeUnit;
		var result = '';
		var firstCodeUnit = string.charCodeAt(0);
		while (++index < length) {
			codeUnit = string.charCodeAt(index);
			// Note: there’s no need to special-case astral symbols, surrogate
			// pairs, or lone surrogates.

			// If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
			// (U+FFFD).
			if (codeUnit == 0x0000) {
				result += '\uFFFD';
				continue;
			}

			if (
				// If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
				// U+007F, […]
				(codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
				// If the character is the first character and is in the range [0-9]
				// (U+0030 to U+0039), […]
				(index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
				// If the character is the second character and is in the range [0-9]
				// (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
				(
					index == 1 &&
					codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
					firstCodeUnit == 0x002D
				)
			) {
				// https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
				result += '\\' + codeUnit.toString(16) + ' ';
				continue;
			}

			if (
				// If the character is the first character and is a `-` (U+002D), and
				// there is no second character, […]
				index == 0 &&
				length == 1 &&
				codeUnit == 0x002D
			) {
				result += '\\' + string.charAt(index);
				continue;
			}

			// If the character is not handled by one of the above rules and is
			// greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
			// is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
			// U+005A), or [a-z] (U+0061 to U+007A), […]
			if (
				codeUnit >= 0x0080 ||
				codeUnit == 0x002D ||
				codeUnit == 0x005F ||
				codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
				codeUnit >= 0x0041 && codeUnit <= 0x005A ||
				codeUnit >= 0x0061 && codeUnit <= 0x007A
			) {
				// the character itself
				result += string.charAt(index);
				continue;
			}

			// Otherwise, the escaped character.
			// https://drafts.csswg.org/cssom/#escape-a-character
			result += '\\' + string.charAt(index);

		}
		return result;
	};

	if (!root.CSS) {
		root.CSS = {};
	}

	root.CSS.escape = cssEscape;
	return cssEscape;

}));
;
!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define("underscore",r):(n="undefined"!=typeof globalThis?globalThis:n||self,function(){var t=n._,e=n._=r();e.noConflict=function(){return n._=t,e}}())}(this,(function(){
//     Underscore.js 1.13.1
//     https://underscorejs.org
//     (c) 2009-2021 Jeremy Ashkenas, Julian Gonggrijp, and DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
var n="1.13.1",r="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},t=Array.prototype,e=Object.prototype,u="undefined"!=typeof Symbol?Symbol.prototype:null,o=t.push,i=t.slice,a=e.toString,f=e.hasOwnProperty,c="undefined"!=typeof ArrayBuffer,l="undefined"!=typeof DataView,s=Array.isArray,p=Object.keys,v=Object.create,h=c&&ArrayBuffer.isView,y=isNaN,d=isFinite,g=!{toString:null}.propertyIsEnumerable("toString"),b=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],m=Math.pow(2,53)-1;function j(n,r){return r=null==r?n.length-1:+r,function(){for(var t=Math.max(arguments.length-r,0),e=Array(t),u=0;u<t;u++)e[u]=arguments[u+r];switch(r){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var o=Array(r+1);for(u=0;u<r;u++)o[u]=arguments[u];return o[r]=e,n.apply(this,o)}}function _(n){var r=typeof n;return"function"===r||"object"===r&&!!n}function w(n){return void 0===n}function A(n){return!0===n||!1===n||"[object Boolean]"===a.call(n)}function x(n){var r="[object "+n+"]";return function(n){return a.call(n)===r}}var S=x("String"),O=x("Number"),M=x("Date"),E=x("RegExp"),B=x("Error"),N=x("Symbol"),I=x("ArrayBuffer"),T=x("Function"),k=r.document&&r.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof k&&(T=function(n){return"function"==typeof n||!1});var D=T,R=x("Object"),F=l&&R(new DataView(new ArrayBuffer(8))),V="undefined"!=typeof Map&&R(new Map),P=x("DataView");var q=F?function(n){return null!=n&&D(n.getInt8)&&I(n.buffer)}:P,U=s||x("Array");function W(n,r){return null!=n&&f.call(n,r)}var z=x("Arguments");!function(){z(arguments)||(z=function(n){return W(n,"callee")})}();var L=z;function $(n){return O(n)&&y(n)}function C(n){return function(){return n}}function K(n){return function(r){var t=n(r);return"number"==typeof t&&t>=0&&t<=m}}function J(n){return function(r){return null==r?void 0:r[n]}}var G=J("byteLength"),H=K(G),Q=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;var X=c?function(n){return h?h(n)&&!q(n):H(n)&&Q.test(a.call(n))}:C(!1),Y=J("length");function Z(n,r){r=function(n){for(var r={},t=n.length,e=0;e<t;++e)r[n[e]]=!0;return{contains:function(n){return r[n]},push:function(t){return r[t]=!0,n.push(t)}}}(r);var t=b.length,u=n.constructor,o=D(u)&&u.prototype||e,i="constructor";for(W(n,i)&&!r.contains(i)&&r.push(i);t--;)(i=b[t])in n&&n[i]!==o[i]&&!r.contains(i)&&r.push(i)}function nn(n){if(!_(n))return[];if(p)return p(n);var r=[];for(var t in n)W(n,t)&&r.push(t);return g&&Z(n,r),r}function rn(n,r){var t=nn(r),e=t.length;if(null==n)return!e;for(var u=Object(n),o=0;o<e;o++){var i=t[o];if(r[i]!==u[i]||!(i in u))return!1}return!0}function tn(n){return n instanceof tn?n:this instanceof tn?void(this._wrapped=n):new tn(n)}function en(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,G(n))}tn.VERSION=n,tn.prototype.value=function(){return this._wrapped},tn.prototype.valueOf=tn.prototype.toJSON=tn.prototype.value,tn.prototype.toString=function(){return String(this._wrapped)};var un="[object DataView]";function on(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var o=typeof n;return("function"===o||"object"===o||"object"==typeof r)&&function n(r,t,e,o){r instanceof tn&&(r=r._wrapped);t instanceof tn&&(t=t._wrapped);var i=a.call(r);if(i!==a.call(t))return!1;if(F&&"[object Object]"==i&&q(r)){if(!q(t))return!1;i=un}switch(i){case"[object RegExp]":case"[object String]":return""+r==""+t;case"[object Number]":return+r!=+r?+t!=+t:0==+r?1/+r==1/t:+r==+t;case"[object Date]":case"[object Boolean]":return+r==+t;case"[object Symbol]":return u.valueOf.call(r)===u.valueOf.call(t);case"[object ArrayBuffer]":case un:return n(en(r),en(t),e,o)}var f="[object Array]"===i;if(!f&&X(r)){if(G(r)!==G(t))return!1;if(r.buffer===t.buffer&&r.byteOffset===t.byteOffset)return!0;f=!0}if(!f){if("object"!=typeof r||"object"!=typeof t)return!1;var c=r.constructor,l=t.constructor;if(c!==l&&!(D(c)&&c instanceof c&&D(l)&&l instanceof l)&&"constructor"in r&&"constructor"in t)return!1}o=o||[];var s=(e=e||[]).length;for(;s--;)if(e[s]===r)return o[s]===t;if(e.push(r),o.push(t),f){if((s=r.length)!==t.length)return!1;for(;s--;)if(!on(r[s],t[s],e,o))return!1}else{var p,v=nn(r);if(s=v.length,nn(t).length!==s)return!1;for(;s--;)if(p=v[s],!W(t,p)||!on(r[p],t[p],e,o))return!1}return e.pop(),o.pop(),!0}(n,r,t,e)}function an(n){if(!_(n))return[];var r=[];for(var t in n)r.push(t);return g&&Z(n,r),r}function fn(n){var r=Y(n);return function(t){if(null==t)return!1;var e=an(t);if(Y(e))return!1;for(var u=0;u<r;u++)if(!D(t[n[u]]))return!1;return n!==hn||!D(t[cn])}}var cn="forEach",ln="has",sn=["clear","delete"],pn=["get",ln,"set"],vn=sn.concat(cn,pn),hn=sn.concat(pn),yn=["add"].concat(sn,cn,ln),dn=V?fn(vn):x("Map"),gn=V?fn(hn):x("WeakMap"),bn=V?fn(yn):x("Set"),mn=x("WeakSet");function jn(n){for(var r=nn(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e}function _n(n){for(var r={},t=nn(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r}function wn(n){var r=[];for(var t in n)D(n[t])&&r.push(t);return r.sort()}function An(n,r){return function(t){var e=arguments.length;if(r&&(t=Object(t)),e<2||null==t)return t;for(var u=1;u<e;u++)for(var o=arguments[u],i=n(o),a=i.length,f=0;f<a;f++){var c=i[f];r&&void 0!==t[c]||(t[c]=o[c])}return t}}var xn=An(an),Sn=An(nn),On=An(an,!0);function Mn(n){if(!_(n))return{};if(v)return v(n);var r=function(){};r.prototype=n;var t=new r;return r.prototype=null,t}function En(n){return _(n)?U(n)?n.slice():xn({},n):n}function Bn(n){return U(n)?n:[n]}function Nn(n){return tn.toPath(n)}function In(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0}function Tn(n,r,t){var e=In(n,Nn(r));return w(e)?t:e}function kn(n){return n}function Dn(n){return n=Sn({},n),function(r){return rn(r,n)}}function Rn(n){return n=Nn(n),function(r){return In(r,n)}}function Fn(n,r,t){if(void 0===r)return n;switch(null==t?3:t){case 1:return function(t){return n.call(r,t)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,o){return n.call(r,t,e,u,o)}}return function(){return n.apply(r,arguments)}}function Vn(n,r,t){return null==n?kn:D(n)?Fn(n,r,t):_(n)&&!U(n)?Dn(n):Rn(n)}function Pn(n,r){return Vn(n,r,1/0)}function qn(n,r,t){return tn.iteratee!==Pn?tn.iteratee(n,r):Vn(n,r,t)}function Un(){}function Wn(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}tn.toPath=Bn,tn.iteratee=Pn;var zn=Date.now||function(){return(new Date).getTime()};function Ln(n){var r=function(r){return n[r]},t="(?:"+nn(n).join("|")+")",e=RegExp(t),u=RegExp(t,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,r):n}}var $n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Cn=Ln($n),Kn=Ln(_n($n)),Jn=tn.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Gn=/(.)^/,Hn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Qn=/\\|'|\r|\n|\u2028|\u2029/g;function Xn(n){return"\\"+Hn[n]}var Yn=/^\s*(\w|\$)+\s*$/;var Zn=0;function nr(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var o=Mn(n.prototype),i=n.apply(o,u);return _(i)?i:o}var rr=j((function(n,r){var t=rr.placeholder,e=function(){for(var u=0,o=r.length,i=Array(o),a=0;a<o;a++)i[a]=r[a]===t?arguments[u++]:r[a];for(;u<arguments.length;)i.push(arguments[u++]);return nr(n,e,this,this,i)};return e}));rr.placeholder=tn;var tr=j((function(n,r,t){if(!D(n))throw new TypeError("Bind must be called on a function");var e=j((function(u){return nr(n,e,r,this,t.concat(u))}));return e})),er=K(Y);function ur(n,r,t,e){if(e=e||[],r||0===r){if(r<=0)return e.concat(n)}else r=1/0;for(var u=e.length,o=0,i=Y(n);o<i;o++){var a=n[o];if(er(a)&&(U(a)||L(a)))if(r>1)ur(a,r-1,t,e),u=e.length;else for(var f=0,c=a.length;f<c;)e[u++]=a[f++];else t||(e[u++]=a)}return e}var or=j((function(n,r){var t=(r=ur(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=tr(n[e],n)}return n}));var ir=j((function(n,r,t){return setTimeout((function(){return n.apply(null,t)}),r)})),ar=rr(ir,tn,1);function fr(n){return function(){return!n.apply(this,arguments)}}function cr(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}var lr=rr(cr,2);function sr(n,r,t){r=qn(r,t);for(var e,u=nn(n),o=0,i=u.length;o<i;o++)if(r(n[e=u[o]],e,n))return e}function pr(n){return function(r,t,e){t=qn(t,e);for(var u=Y(r),o=n>0?0:u-1;o>=0&&o<u;o+=n)if(t(r[o],o,r))return o;return-1}}var vr=pr(1),hr=pr(-1);function yr(n,r,t,e){for(var u=(t=qn(t,e,1))(r),o=0,i=Y(n);o<i;){var a=Math.floor((o+i)/2);t(n[a])<u?o=a+1:i=a}return o}function dr(n,r,t){return function(e,u,o){var a=0,f=Y(e);if("number"==typeof o)n>0?a=o>=0?o:Math.max(o+f,a):f=o>=0?Math.min(o+1,f):o+f+1;else if(t&&o&&f)return e[o=t(e,u)]===u?o:-1;if(u!=u)return(o=r(i.call(e,a,f),$))>=0?o+a:-1;for(o=n>0?a:f-1;o>=0&&o<f;o+=n)if(e[o]===u)return o;return-1}}var gr=dr(1,vr,yr),br=dr(-1,hr);function mr(n,r,t){var e=(er(n)?vr:sr)(n,r,t);if(void 0!==e&&-1!==e)return n[e]}function jr(n,r,t){var e,u;if(r=Fn(r,t),er(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var o=nn(n);for(e=0,u=o.length;e<u;e++)r(n[o[e]],o[e],n)}return n}function _r(n,r,t){r=qn(r,t);for(var e=!er(n)&&nn(n),u=(e||n).length,o=Array(u),i=0;i<u;i++){var a=e?e[i]:i;o[i]=r(n[a],a,n)}return o}function wr(n){var r=function(r,t,e,u){var o=!er(r)&&nn(r),i=(o||r).length,a=n>0?0:i-1;for(u||(e=r[o?o[a]:a],a+=n);a>=0&&a<i;a+=n){var f=o?o[a]:a;e=t(e,r[f],f,r)}return e};return function(n,t,e,u){var o=arguments.length>=3;return r(n,Fn(t,u,4),e,o)}}var Ar=wr(1),xr=wr(-1);function Sr(n,r,t){var e=[];return r=qn(r,t),jr(n,(function(n,t,u){r(n,t,u)&&e.push(n)})),e}function Or(n,r,t){r=qn(r,t);for(var e=!er(n)&&nn(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(!r(n[i],i,n))return!1}return!0}function Mr(n,r,t){r=qn(r,t);for(var e=!er(n)&&nn(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(r(n[i],i,n))return!0}return!1}function Er(n,r,t,e){return er(n)||(n=jn(n)),("number"!=typeof t||e)&&(t=0),gr(n,r,t)>=0}var Br=j((function(n,r,t){var e,u;return D(r)?u=r:(r=Nn(r),e=r.slice(0,-1),r=r[r.length-1]),_r(n,(function(n){var o=u;if(!o){if(e&&e.length&&(n=In(n,e)),null==n)return;o=n[r]}return null==o?o:o.apply(n,t)}))}));function Nr(n,r){return _r(n,Rn(r))}function Ir(n,r,t){var e,u,o=-1/0,i=-1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=er(n)?n:jn(n)).length;a<f;a++)null!=(e=n[a])&&e>o&&(o=e);else r=qn(r,t),jr(n,(function(n,t,e){((u=r(n,t,e))>i||u===-1/0&&o===-1/0)&&(o=n,i=u)}));return o}function Tr(n,r,t){if(null==r||t)return er(n)||(n=jn(n)),n[Wn(n.length-1)];var e=er(n)?En(n):jn(n),u=Y(e);r=Math.max(Math.min(r,u),0);for(var o=u-1,i=0;i<r;i++){var a=Wn(i,o),f=e[i];e[i]=e[a],e[a]=f}return e.slice(0,r)}function kr(n,r){return function(t,e,u){var o=r?[[],[]]:{};return e=qn(e,u),jr(t,(function(r,u){var i=e(r,u,t);n(o,r,i)})),o}}var Dr=kr((function(n,r,t){W(n,t)?n[t].push(r):n[t]=[r]})),Rr=kr((function(n,r,t){n[t]=r})),Fr=kr((function(n,r,t){W(n,t)?n[t]++:n[t]=1})),Vr=kr((function(n,r,t){n[t?0:1].push(r)}),!0),Pr=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function qr(n,r,t){return r in t}var Ur=j((function(n,r){var t={},e=r[0];if(null==n)return t;D(e)?(r.length>1&&(e=Fn(e,r[1])),r=an(n)):(e=qr,r=ur(r,!1,!1),n=Object(n));for(var u=0,o=r.length;u<o;u++){var i=r[u],a=n[i];e(a,i,n)&&(t[i]=a)}return t})),Wr=j((function(n,r){var t,e=r[0];return D(e)?(e=fr(e),r.length>1&&(t=r[1])):(r=_r(ur(r,!1,!1),String),e=function(n,t){return!Er(r,t)}),Ur(n,e,t)}));function zr(n,r,t){return i.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))}function Lr(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[0]:zr(n,n.length-r)}function $r(n,r,t){return i.call(n,null==r||t?1:r)}var Cr=j((function(n,r){return r=ur(r,!0,!0),Sr(n,(function(n){return!Er(r,n)}))})),Kr=j((function(n,r){return Cr(n,r)}));function Jr(n,r,t,e){A(r)||(e=t,t=r,r=!1),null!=t&&(t=qn(t,e));for(var u=[],o=[],i=0,a=Y(n);i<a;i++){var f=n[i],c=t?t(f,i,n):f;r&&!t?(i&&o===c||u.push(f),o=c):t?Er(o,c)||(o.push(c),u.push(f)):Er(u,f)||u.push(f)}return u}var Gr=j((function(n){return Jr(ur(n,!0,!0))}));function Hr(n){for(var r=n&&Ir(n,Y).length||0,t=Array(r),e=0;e<r;e++)t[e]=Nr(n,e);return t}var Qr=j(Hr);function Xr(n,r){return n._chain?tn(r).chain():r}function Yr(n){return jr(wn(n),(function(r){var t=tn[r]=n[r];tn.prototype[r]=function(){var n=[this._wrapped];return o.apply(n,arguments),Xr(this,t.apply(tn,n))}})),tn}jr(["pop","push","reverse","shift","sort","splice","unshift"],(function(n){var r=t[n];tn.prototype[n]=function(){var t=this._wrapped;return null!=t&&(r.apply(t,arguments),"shift"!==n&&"splice"!==n||0!==t.length||delete t[0]),Xr(this,t)}})),jr(["concat","join","slice"],(function(n){var r=t[n];tn.prototype[n]=function(){var n=this._wrapped;return null!=n&&(n=r.apply(n,arguments)),Xr(this,n)}}));var Zr=Yr({__proto__:null,VERSION:n,restArguments:j,isObject:_,isNull:function(n){return null===n},isUndefined:w,isBoolean:A,isElement:function(n){return!(!n||1!==n.nodeType)},isString:S,isNumber:O,isDate:M,isRegExp:E,isError:B,isSymbol:N,isArrayBuffer:I,isDataView:q,isArray:U,isFunction:D,isArguments:L,isFinite:function(n){return!N(n)&&d(n)&&!isNaN(parseFloat(n))},isNaN:$,isTypedArray:X,isEmpty:function(n){if(null==n)return!0;var r=Y(n);return"number"==typeof r&&(U(n)||S(n)||L(n))?0===r:0===Y(nn(n))},isMatch:rn,isEqual:function(n,r){return on(n,r)},isMap:dn,isWeakMap:gn,isSet:bn,isWeakSet:mn,keys:nn,allKeys:an,values:jn,pairs:function(n){for(var r=nn(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},invert:_n,functions:wn,methods:wn,extend:xn,extendOwn:Sn,assign:Sn,defaults:On,create:function(n,r){var t=Mn(n);return r&&Sn(t,r),t},clone:En,tap:function(n,r){return r(n),n},get:Tn,has:function(n,r){for(var t=(r=Nn(r)).length,e=0;e<t;e++){var u=r[e];if(!W(n,u))return!1;n=n[u]}return!!t},mapObject:function(n,r,t){r=qn(r,t);for(var e=nn(n),u=e.length,o={},i=0;i<u;i++){var a=e[i];o[a]=r(n[a],a,n)}return o},identity:kn,constant:C,noop:Un,toPath:Bn,property:Rn,propertyOf:function(n){return null==n?Un:function(r){return Tn(n,r)}},matcher:Dn,matches:Dn,times:function(n,r,t){var e=Array(Math.max(0,n));r=Fn(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},random:Wn,now:zn,escape:Cn,unescape:Kn,templateSettings:Jn,template:function(n,r,t){!r&&t&&(r=t),r=On({},r,tn.templateSettings);var e=RegExp([(r.escape||Gn).source,(r.interpolate||Gn).source,(r.evaluate||Gn).source].join("|")+"|$","g"),u=0,o="__p+='";n.replace(e,(function(r,t,e,i,a){return o+=n.slice(u,a).replace(Qn,Xn),u=a+r.length,t?o+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":e?o+="'+\n((__t=("+e+"))==null?'':__t)+\n'":i&&(o+="';\n"+i+"\n__p+='"),r})),o+="';\n";var i,a=r.variable;if(a){if(!Yn.test(a))throw new Error("variable is not a bare identifier: "+a)}else o="with(obj||{}){\n"+o+"}\n",a="obj";o="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{i=new Function(a,"_",o)}catch(n){throw n.source=o,n}var f=function(n){return i.call(this,n,tn)};return f.source="function("+a+"){\n"+o+"}",f},result:function(n,r,t){var e=(r=Nn(r)).length;if(!e)return D(t)?t.call(n):t;for(var u=0;u<e;u++){var o=null==n?void 0:n[r[u]];void 0===o&&(o=t,u=e),n=D(o)?o.call(n):o}return n},uniqueId:function(n){var r=++Zn+"";return n?n+r:r},chain:function(n){var r=tn(n);return r._chain=!0,r},iteratee:Pn,partial:rr,bind:tr,bindAll:or,memoize:function(n,r){var t=function(e){var u=t.cache,o=""+(r?r.apply(this,arguments):e);return W(u,o)||(u[o]=n.apply(this,arguments)),u[o]};return t.cache={},t},delay:ir,defer:ar,throttle:function(n,r,t){var e,u,o,i,a=0;t||(t={});var f=function(){a=!1===t.leading?0:zn(),e=null,i=n.apply(u,o),e||(u=o=null)},c=function(){var c=zn();a||!1!==t.leading||(a=c);var l=r-(c-a);return u=this,o=arguments,l<=0||l>r?(e&&(clearTimeout(e),e=null),a=c,i=n.apply(u,o),e||(u=o=null)):e||!1===t.trailing||(e=setTimeout(f,l)),i};return c.cancel=function(){clearTimeout(e),a=0,e=u=o=null},c},debounce:function(n,r,t){var e,u,o,i,a,f=function(){var c=zn()-u;r>c?e=setTimeout(f,r-c):(e=null,t||(i=n.apply(a,o)),e||(o=a=null))},c=j((function(c){return a=this,o=c,u=zn(),e||(e=setTimeout(f,r),t&&(i=n.apply(a,o))),i}));return c.cancel=function(){clearTimeout(e),e=o=a=null},c},wrap:function(n,r){return rr(r,n)},negate:fr,compose:function(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}},after:function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},before:cr,once:lr,findKey:sr,findIndex:vr,findLastIndex:hr,sortedIndex:yr,indexOf:gr,lastIndexOf:br,find:mr,detect:mr,findWhere:function(n,r){return mr(n,Dn(r))},each:jr,forEach:jr,map:_r,collect:_r,reduce:Ar,foldl:Ar,inject:Ar,reduceRight:xr,foldr:xr,filter:Sr,select:Sr,reject:function(n,r,t){return Sr(n,fr(qn(r)),t)},every:Or,all:Or,some:Mr,any:Mr,contains:Er,includes:Er,include:Er,invoke:Br,pluck:Nr,where:function(n,r){return Sr(n,Dn(r))},max:Ir,min:function(n,r,t){var e,u,o=1/0,i=1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=er(n)?n:jn(n)).length;a<f;a++)null!=(e=n[a])&&e<o&&(o=e);else r=qn(r,t),jr(n,(function(n,t,e){((u=r(n,t,e))<i||u===1/0&&o===1/0)&&(o=n,i=u)}));return o},shuffle:function(n){return Tr(n,1/0)},sample:Tr,sortBy:function(n,r,t){var e=0;return r=qn(r,t),Nr(_r(n,(function(n,t,u){return{value:n,index:e++,criteria:r(n,t,u)}})).sort((function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(t>e||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index})),"value")},groupBy:Dr,indexBy:Rr,countBy:Fr,partition:Vr,toArray:function(n){return n?U(n)?i.call(n):S(n)?n.match(Pr):er(n)?_r(n,kn):jn(n):[]},size:function(n){return null==n?0:er(n)?n.length:nn(n).length},pick:Ur,omit:Wr,first:Lr,head:Lr,take:Lr,initial:zr,last:function(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[n.length-1]:$r(n,Math.max(0,n.length-r))},rest:$r,tail:$r,drop:$r,compact:function(n){return Sr(n,Boolean)},flatten:function(n,r){return ur(n,r,!1)},without:Kr,uniq:Jr,unique:Jr,union:Gr,intersection:function(n){for(var r=[],t=arguments.length,e=0,u=Y(n);e<u;e++){var o=n[e];if(!Er(r,o)){var i;for(i=1;i<t&&Er(arguments[i],o);i++);i===t&&r.push(o)}}return r},difference:Cr,unzip:Hr,transpose:Hr,zip:Qr,object:function(n,r){for(var t={},e=0,u=Y(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t},range:function(n,r,t){null==r&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),o=0;o<e;o++,n+=t)u[o]=n;return u},chunk:function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(i.call(n,e,e+=r));return t},mixin:Yr,default:tn});return Zr._=Zr,Zr}));;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function value(predicate) {
      if (this == null) {
        throw TypeError('"this" is null or not defined');
      }

      var o = Object(this);
      var len = o.length >>> 0;

      if (typeof predicate !== 'function') {
        throw TypeError('predicate must be a function');
      }

      var thisArg = arguments[1];
      var k = 0;

      while (k < len) {
        var kValue = o[k];

        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }

        k++;
      }

      return undefined;
    },
    configurable: true,
    writable: true
  });
};
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}(this,function(){"use strict";function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function e(t){return"function"==typeof t}function n(t){W=t}function r(t){z=t}function o(){return function(){return process.nextTick(a)}}function i(){return"undefined"!=typeof U?function(){U(a)}:c()}function s(){var t=0,e=new H(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}function c(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<N;t+=2){var e=Q[t],n=Q[t+1];e(n),Q[t]=void 0,Q[t+1]=void 0}N=0}function f(){try{var t=Function("return this")().require("vertx");return U=t.runOnLoop||t.runOnContext,i()}catch(e){return c()}}function l(t,e){var n=this,r=new this.constructor(p);void 0===r[V]&&x(r);var o=n._state;if(o){var i=arguments[o-1];z(function(){return T(o,r,i,n._result)})}else j(n,r,t,e);return r}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return w(n,t),n}function p(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function _(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function y(t,e,n){z(function(t){var r=!1,o=_(n,e,function(n){r||(r=!0,e!==n?w(t,n):A(t,n))},function(e){r||(r=!0,S(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,S(t,o))},t)}function m(t,e){e._state===Z?A(t,e._result):e._state===$?S(t,e._result):j(e,void 0,function(e){return w(t,e)},function(e){return S(t,e)})}function b(t,n,r){n.constructor===t.constructor&&r===l&&n.constructor.resolve===h?m(t,n):void 0===r?A(t,n):e(r)?y(t,n,r):A(t,n)}function w(e,n){if(e===n)S(e,v());else if(t(n)){var r=void 0;try{r=n.then}catch(o){return void S(e,o)}b(e,n,r)}else A(e,n)}function g(t){t._onerror&&t._onerror(t._result),E(t)}function A(t,e){t._state===X&&(t._result=e,t._state=Z,0!==t._subscribers.length&&z(E,t))}function S(t,e){t._state===X&&(t._state=$,t._result=e,z(g,t))}function j(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+Z]=n,o[i+$]=r,0===i&&t._state&&z(E,t)}function E(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?T(n,r,o,i):o(i);t._subscribers.length=0}}function T(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=!0;if(i){try{s=r(o)}catch(a){c=!1,u=a}if(n===s)return void S(n,d())}else s=o;n._state!==X||(i&&c?w(n,s):c===!1?S(n,u):t===Z?A(n,s):t===$&&S(n,s))}function M(t,e){try{e(function(e){w(t,e)},function(e){S(t,e)})}catch(n){S(t,n)}}function P(){return tt++}function x(t){t[V]=tt++,t._state=void 0,t._result=void 0,t._subscribers=[]}function C(){return new Error("Array Methods must be provided an Array")}function O(t){return new et(this,t).promise}function k(t){var e=this;return new e(L(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function F(t){var e=this,n=new e(p);return S(n,t),n}function Y(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function q(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function D(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=nt}var K=void 0;K=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var L=K,N=0,U=void 0,W=void 0,z=function(t,e){Q[N]=t,Q[N+1]=e,N+=2,2===N&&(W?W(a):R())},B="undefined"!=typeof window?window:void 0,G=B||{},H=G.MutationObserver||G.WebKitMutationObserver,I="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),J="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Q=new Array(1e3),R=void 0;R=I?o():H?s():J?u():void 0===B&&"function"==typeof require?f():c();var V=Math.random().toString(36).substring(2),X=void 0,Z=1,$=2,tt=0,et=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[V]||x(this.promise),L(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?A(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&A(this.promise,this._result))):S(this.promise,C())}return t.prototype._enumerate=function(t){for(var e=0;this._state===X&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(u){s=!0,i=u}if(o===l&&t._state!==X)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===nt){var c=new n(p);s?S(c,i):b(c,t,o),this._willSettleAt(c,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===X&&(this._remaining--,t===$?S(r,n):this._result[e]=n),0===this._remaining&&A(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;j(t,void 0,function(t){return n._settledAt(Z,e,t)},function(t){return n._settledAt($,e,t)})},t}(),nt=function(){function t(e){this[V]=P(),this._result=this._state=void 0,this._subscribers=[],p!==e&&("function"!=typeof e&&Y(),this instanceof t?M(this,e):q())}return t.prototype["catch"]=function(t){return this.then(null,t)},t.prototype["finally"]=function(t){var n=this,r=n.constructor;return e(t)?n.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})}):n.then(t,t)},t}();return nt.prototype.then=l,nt.all=O,nt.race=k,nt.resolve=h,nt.reject=F,nt._setScheduler=n,nt._setAsap=r,nt._asap=z,nt.polyfill=D,nt.Promise=nt,nt.polyfill(),nt});
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (typeof Object.assign !== 'function') {
  Object.defineProperty(Object, 'assign', {
    value: function assign(target, varArgs) {
      'use strict';

      if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource !== null && nextSource !== undefined) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    },
    writable: true,
    configurable: true
  });
};
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
};
/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

(function(t){var e=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,n,r){e.Backbone=t(e,r,i,n)})}else if(typeof exports!=="undefined"){var i=require("underscore"),n;try{n=require("jquery")}catch(r){}t(e,exports,i,n)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,n){var r=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.4.0";e.$=n;e.noConflict=function(){t.Backbone=r;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=e.Events={};var o=/\s+/;var h;var u=function(t,e,n,r,s){var a=0,h;if(n&&typeof n==="object"){if(r!==void 0&&"context"in s&&s.context===void 0)s.context=r;for(h=i.keys(n);a<h.length;a++){e=u(t,e,h[a],n[h[a]],s)}}else if(n&&o.test(n)){for(h=n.split(o);a<h.length;a++){e=t(e,h[a],r,s)}}else{e=t(e,n,r,s)}return e};a.on=function(t,e,i){this._events=u(l,this._events||{},t,e,{context:i,ctx:this,listening:h});if(h){var n=this._listeners||(this._listeners={});n[h.id]=h;h.interop=false}return this};a.listenTo=function(t,e,n){if(!t)return this;var r=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=h=s[r];if(!a){this._listenId||(this._listenId=i.uniqueId("l"));a=h=s[r]=new g(this,t)}var o=c(t,e,n,this);h=void 0;if(o)throw o;if(a.interop)a.on(e,n);return this};var l=function(t,e,i,n){if(i){var r=t[e]||(t[e]=[]);var s=n.context,a=n.ctx,o=n.listening;if(o)o.count++;r.push({callback:i,context:s,ctx:s||a,listening:o})}return t};var c=function(t,e,i,n){try{t.on(e,i,n)}catch(r){return r}};a.off=function(t,e,i){if(!this._events)return this;this._events=u(f,this._events,t,e,{context:i,listeners:this._listeners});return this};a.stopListening=function(t,e,n){var r=this._listeningTo;if(!r)return this;var s=t?[t._listenId]:i.keys(r);for(var a=0;a<s.length;a++){var o=r[s[a]];if(!o)break;o.obj.off(e,n,this);if(o.interop)o.off(e,n)}if(i.isEmpty(r))this._listeningTo=void 0;return this};var f=function(t,e,n,r){if(!t)return;var s=r.context,a=r.listeners;var o=0,h;if(!e&&!s&&!n){for(h=i.keys(a);o<h.length;o++){a[h[o]].cleanup()}return}h=e?[e]:i.keys(t);for(;o<h.length;o++){e=h[o];var u=t[e];if(!u)break;var l=[];for(var c=0;c<u.length;c++){var f=u[c];if(n&&n!==f.callback&&n!==f.callback._callback||s&&s!==f.context){l.push(f)}else{var d=f.listening;if(d)d.off(e,n)}}if(l.length){t[e]=l}else{delete t[e]}}return t};a.once=function(t,e,i){var n=u(d,{},t,e,this.off.bind(this));if(typeof t==="string"&&i==null)e=void 0;return this.on(n,e,i)};a.listenToOnce=function(t,e,i){var n=u(d,{},e,i,this.stopListening.bind(this,t));return this.listenTo(t,n)};var d=function(t,e,n,r){if(n){var s=t[e]=i.once(function(){r(e,s);n.apply(this,arguments)});s._callback=n}return t};a.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var n=0;n<e;n++)i[n]=arguments[n+1];u(v,this._events,t,void 0,i);return this};var v=function(t,e,i,n){if(t){var r=t[e];var s=t.all;if(r&&s)s=s.slice();if(r)p(r,n);if(s)p(s,[e].concat(n))}return t};var p=function(t,e){var i,n=-1,r=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++n<r)(i=t[n]).callback.call(i.ctx);return;case 1:while(++n<r)(i=t[n]).callback.call(i.ctx,s);return;case 2:while(++n<r)(i=t[n]).callback.call(i.ctx,s,a);return;case 3:while(++n<r)(i=t[n]).callback.call(i.ctx,s,a,o);return;default:while(++n<r)(i=t[n]).callback.apply(i.ctx,e);return}};var g=function(t,e){this.id=t._listenId;this.listener=t;this.obj=e;this.interop=true;this.count=0;this._events=void 0};g.prototype.on=a.on;g.prototype.off=function(t,e){var i;if(this.interop){this._events=u(f,this._events,t,e,{context:void 0,listeners:void 0});i=!this._events}else{this.count--;i=this.count===0}if(i)this.cleanup()};g.prototype.cleanup=function(){delete this.listener._listeningTo[this.obj._listenId];if(!this.interop)delete this.obj._listeners[this.id]};a.bind=a.on;a.unbind=a.off;i.extend(e,a);var m=e.Model=function(t,e){var n=t||{};e||(e={});this.preinitialize.apply(this,arguments);this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)n=this.parse(n,e)||{};var r=i.result(this,"defaults");n=i.defaults(i.extend({},r,n),r);this.set(n,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(m.prototype,a,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",preinitialize:function(){},initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,n){if(t==null)return this;var r;if(typeof t==="object"){r=t;n=e}else{(r={})[t]=e}n||(n={});if(!this._validate(r,n))return false;var s=n.unset;var a=n.silent;var o=[];var h=this._changing;this._changing=true;if(!h){this._previousAttributes=i.clone(this.attributes);this.changed={}}var u=this.attributes;var l=this.changed;var c=this._previousAttributes;for(var f in r){e=r[f];if(!i.isEqual(u[f],e))o.push(f);if(!i.isEqual(c[f],e)){l[f]=e}else{delete l[f]}s?delete u[f]:u[f]=e}if(this.idAttribute in r)this.id=this.get(this.idAttribute);if(!a){if(o.length)this._pending=n;for(var d=0;d<o.length;d++){this.trigger("change:"+o[d],this,u[o[d]],n)}}if(h)return this;if(!a){while(this._pending){n=this._pending;this._pending=false;this.trigger("change",this,n)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var n in this.attributes)e[n]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var n={};var r;for(var s in t){var a=t[s];if(i.isEqual(e[s],a))continue;n[s]=a;r=true}return r?n:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var n=t.success;t.success=function(i){var r=t.parse?e.parse(i,t):i;if(!e.set(r,t))return false;if(n)n.call(t.context,e,i,t);e.trigger("sync",e,i,t)};G(this,t);return this.sync("read",this,t)},save:function(t,e,n){var r;if(t==null||typeof t==="object"){r=t;n=e}else{(r={})[t]=e}n=i.extend({validate:true,parse:true},n);var s=n.wait;if(r&&!s){if(!this.set(r,n))return false}else if(!this._validate(r,n)){return false}var a=this;var o=n.success;var h=this.attributes;n.success=function(t){a.attributes=h;var e=n.parse?a.parse(t,n):t;if(s)e=i.extend({},r,e);if(e&&!a.set(e,n))return false;if(o)o.call(n.context,a,t,n);a.trigger("sync",a,t,n)};G(this,n);if(r&&s)this.attributes=i.extend({},h,r);var u=this.isNew()?"create":n.patch?"patch":"update";if(u==="patch"&&!n.attrs)n.attrs=r;var l=this.sync(u,this,n);this.attributes=h;return l},destroy:function(t){t=t?i.clone(t):{};var e=this;var n=t.success;var r=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(r)s();if(n)n.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{G(this,t);a=this.sync("delete",this,t)}if(!r)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||V();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend({},t,{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var n=this.validationError=this.validate(t,e)||null;if(!n)return true;this.trigger("invalid",this,n,i.extend(e,{validationError:n}));return false}});var _=e.Collection=function(t,e){e||(e={});this.preinitialize.apply(this,arguments);if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var y={add:true,remove:true,merge:true};var b={add:true,remove:false};var x=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var n=Array(t.length-i);var r=e.length;var s;for(s=0;s<n.length;s++)n[s]=t[s+i];for(s=0;s<r;s++)t[s+i]=e[s];for(s=0;s<n.length;s++)t[s+r+i]=n[s]};i.extend(_.prototype,a,{model:m,preinitialize:function(){},initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,b))},remove:function(t,e){e=i.extend({},e);var n=!i.isArray(t);t=n?[t]:t.slice();var r=this._removeModels(t,e);if(!e.silent&&r.length){e.changes={added:[],merged:[],removed:r};this.trigger("update",this,e)}return n?r[0]:r},set:function(t,e){if(t==null)return;e=i.extend({},y,e);if(e.parse&&!this._isModel(t)){t=this.parse(t,e)||[]}var n=!i.isArray(t);t=n?[t]:t.slice();var r=e.at;if(r!=null)r=+r;if(r>this.length)r=this.length;if(r<0)r+=this.length+1;var s=[];var a=[];var o=[];var h=[];var u={};var l=e.add;var c=e.merge;var f=e.remove;var d=false;var v=this.comparator&&r==null&&e.sort!==false;var p=i.isString(this.comparator)?this.comparator:null;var g,m;for(m=0;m<t.length;m++){g=t[m];var _=this.get(g);if(_){if(c&&g!==_){var b=this._isModel(g)?g.attributes:g;if(e.parse)b=_.parse(b,e);_.set(b,e);o.push(_);if(v&&!d)d=_.hasChanged(p)}if(!u[_.cid]){u[_.cid]=true;s.push(_)}t[m]=_}else if(l){g=t[m]=this._prepareModel(g,e);if(g){a.push(g);this._addReference(g,e);u[g.cid]=true;s.push(g)}}}if(f){for(m=0;m<this.length;m++){g=this.models[m];if(!u[g.cid])h.push(g)}if(h.length)this._removeModels(h,e)}var w=false;var E=!v&&l&&f;if(s.length&&E){w=this.length!==s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;x(this.models,s,0);this.length=this.models.length}else if(a.length){if(v)d=true;x(this.models,a,r==null?this.length:r);this.length=this.models.length}if(d)this.sort({silent:true});if(!e.silent){for(m=0;m<a.length;m++){if(r!=null)e.index=r+m;g=a[m];g.trigger("add",g,this,e)}if(d||w)this.trigger("sort",this,e);if(a.length||h.length||o.length){e.changes={added:a,removed:h,merged:o};this.trigger("update",this,e)}}return n?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var n=0;n<this.models.length;n++){this._removeReference(this.models[n],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[this.modelId(this._isModel(t)?t.attributes:t)]||t.cid&&this._byId[t.cid]},has:function(t){return this.get(t)!=null},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var n=e.length;if(i.isFunction(e))e=e.bind(this);if(n===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return this.map(t+"")},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var n=this;t.success=function(i){var r=t.reset?"reset":"set";n[r](i,t);if(e)e.call(t.context,n,i,t);n.trigger("sync",n,i,t)};G(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var n=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!n)this.add(t,e);var r=this;var s=e.success;e.success=function(t,e,i){if(n)r.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},values:function(){return new E(this,k)},keys:function(){return new E(this,I)},entries:function(){return new E(this,S)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var n=new this.model(t,e);if(!n.validationError)return n;this.trigger("invalid",this,n.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var n=0;n<t.length;n++){var r=this.get(t[n]);if(!r)continue;var s=this.indexOf(r);this.models.splice(s,1);this.length--;delete this._byId[r.cid];var a=this.modelId(r.attributes);if(a!=null)delete this._byId[a];if(!e.silent){e.index=s;r.trigger("remove",r,this,e)}i.push(r);this._removeReference(r,e)}return i},_isModel:function(t){return t instanceof m},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,n){if(e){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,n);if(t==="change"){var r=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(r!==s){if(r!=null)delete this._byId[r];if(s!=null)this._byId[s]=e}}}this.trigger.apply(this,arguments)}});var w=typeof Symbol==="function"&&Symbol.iterator;if(w){_.prototype[w]=_.prototype.values}var E=function(t,e){this._collection=t;this._kind=e;this._index=0};var k=1;var I=2;var S=3;if(w){E.prototype[w]=function(){return this}}E.prototype.next=function(){if(this._collection){if(this._index<this._collection.length){var t=this._collection.at(this._index);this._index++;var e;if(this._kind===k){e=t}else{var i=this._collection.modelId(t.attributes);if(this._kind===I){e=i}else{e=[i,t]}}return{value:e,done:false}}this._collection=void 0}return{value:void 0,done:true}};var T=e.View=function(t){this.cid=i.uniqueId("view");this.preinitialize.apply(this,arguments);i.extend(this,i.pick(t,H));this._ensureElement();this.initialize.apply(this,arguments)};var P=/^(\S+)\s*(.*)$/;var H=["model","collection","el","id","attributes","className","tagName","events"];i.extend(T.prototype,a,{tagName:"div",$:function(t){return this.$el.find(t)},preinitialize:function(){},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var n=t[e];if(!i.isFunction(n))n=this[n];if(!n)continue;var r=e.match(P);this.delegate(r[1],r[2],n.bind(this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});var $=function(t,e,i,n){switch(e){case 1:return function(){return t[i](this[n])};case 2:return function(e){return t[i](this[n],e)};case 3:return function(e,r){return t[i](this[n],C(e,this),r)};case 4:return function(e,r,s){return t[i](this[n],C(e,this),r,s)};default:return function(){var e=s.call(arguments);e.unshift(this[n]);return t[i].apply(t,e)}}};var A=function(t,e,n,r){i.each(n,function(i,n){if(e[n])t.prototype[n]=$(e,i,n,r)})};var C=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return R(t);if(i.isString(t))return function(e){return e.get(t)};return t};var R=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var M={forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3};var N={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};i.each([[_,M,"models"],[m,N,"attributes"]],function(t){var e=t[0],n=t[1],r=t[2];e.mixin=function(t){var n=i.reduce(i.functions(t),function(t,e){t[e]=0;return t},{});A(e,t,n,r)};A(e,i,n,r)});e.sync=function(t,n,r){var s=j[t];i.defaults(r||(r={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!r.url){a.url=i.result(n,"url")||V()}if(r.data==null&&n&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(r.attrs||n.toJSON(r))}if(r.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(r.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(r.emulateJSON)a.data._method=s;var o=r.beforeSend;r.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!r.emulateJSON){a.processData=false}var h=r.error;r.error=function(t,e,i){r.textStatus=e;r.errorThrown=i;if(h)h.call(r.context,t,e,i)};var u=r.xhr=e.ajax(i.extend(a,r));n.trigger("request",n,u,r);return u};var j={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var O=e.Router=function(t){t||(t={});this.preinitialize.apply(this,arguments);if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var U=/\((.*?)\)/g;var z=/(\(\?)?:\w+/g;var q=/\*\w+/g;var F=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend(O.prototype,a,{preinitialize:function(){},initialize:function(){},route:function(t,n,r){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(n)){r=n;n=""}if(!r)r=this[n];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(r,a,n)!==false){s.trigger.apply(s,["route:"+n].concat(a));s.trigger("route",n,a);e.history.trigger("route",s,n,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(F,"\\$&").replace(U,"(?:$1)?").replace(z,function(t,e){return e?t:"([^/?]+)"}).replace(q,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var n=t.exec(e).slice(1);return i.map(n,function(t,e){if(e===n.length-1)return t||null;return t?decodeURIComponent(t):null})}});var B=e.History=function(){this.handlers=[];this.checkUrl=this.checkUrl.bind(this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var J=/^[#\/]|\s+$/g;var L=/^\/+|\/+$/g;var W=/#.*$/;B.started=false;i.extend(B.prototype,a,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(J,"")},start:function(t){if(B.started)throw new Error("Backbone.history has already been started");B.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(L,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var n=document.body;var r=n.insertBefore(this.iframe,n.firstChild).contentWindow;r.document.open();r.document.close();r.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);B.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!B.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var n=i+t;t=t.replace(W,"");var r=this.decodeFragment(t);if(this.fragment===r)return;this.fragment=r;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,n)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var s=this.iframe.contentWindow;if(!e.replace){s.document.open();s.document.close()}this._updateHash(s.location,t,e.replace)}}else{return this.location.assign(n)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var n=t.href.replace(/(javascript:|#).*$/,"");t.replace(n+"#"+e)}else{t.hash="#"+e}}});e.history=new B;var D=function(t,e){var n=this;var r;if(t&&i.has(t,"constructor")){r=t.constructor}else{r=function(){return n.apply(this,arguments)}}i.extend(r,n,e);r.prototype=i.create(n.prototype,t);r.prototype.constructor=r;r.__super__=n.prototype;return r};m.extend=_.extend=O.extend=T.extend=B.extend=D;var V=function(){throw new Error('A "url" property or function must be specified')};var G=function(t,e){var i=e.error;e.error=function(n){if(i)i.call(e.context,t,n,e);t.trigger("error",t,n,e)}};return e});

/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once=function(){"use strict";var n=/[\11\12\14\15\40]+/,e="data-once",t=document;function r(n,t,r){return n[t+"Attribute"](e,r)}function o(e){if("string"!=typeof e)throw new TypeError("once ID must be a string");if(""===e||n.test(e))throw new RangeError("once ID must not be empty or contain spaces");return'[data-once~="'+e+'"]'}function u(n){if(!(n instanceof Element))throw new TypeError("The element must be an instance of Element");return!0}function i(n,e){void 0===e&&(e=t);var r=n;if(null===n)r=[];else{if(!n)throw new TypeError("Selector must not be empty");"string"!=typeof n||e!==t&&!u(e)?n instanceof Element&&(r=[n]):r=e.querySelectorAll(n)}return Array.prototype.slice.call(r)}function c(n,e,t){return e.filter((function(e){var r=u(e)&&e.matches(n);return r&&t&&t(e),r}))}function f(e,t){var o=t.add,u=t.remove,i=[];r(e,"has")&&r(e,"get").trim().split(n).forEach((function(n){i.indexOf(n)<0&&n!==u&&i.push(n)})),o&&i.push(o);var c=i.join(" ");r(e,""===c?"remove":"set",c)}function a(n,e,t){return c(":not("+o(n)+")",i(e,t),(function(e){return f(e,{add:n})}))}return a.remove=function(n,e,t){return c(o(n),i(e,t),(function(e){return f(e,{remove:n})}))},a.filter=function(n,e,t){return c(o(n),i(e,t))},a.find=function(n,e){return i(n?o(n):"[data-once]",e)},a}();

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = {
  behaviors: {},
  locale: {}
};

(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};
    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });
    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});
      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }

    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);
    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }

    var baseUrl = "".concat(protocol, "//").concat(window.location.host).concat(drupalSettings.path.baseUrl.slice(0, -1));

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}

    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf("".concat(baseUrl, "/")) === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;
    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn("[Deprecation] ".concat(message));
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
        deprecatedProperty = _ref2.deprecatedProperty,
        message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        if (key === deprecatedProperty) {
          Drupal.deprecationError({
            message: message
          });
        }

        for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return "<em class=\"placeholder\">".concat(Drupal.checkPlain(str), "</em>");
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    var listener = function listener() {
      callback();
      document.removeEventListener('DOMContentLoaded', listener);
    };

    if (document.readyState !== 'loading') {
      setTimeout(callback, 0);
    } else {
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}((function(e){return e.ui=e.ui||{},e.ui.version="1.12.1"}));;
/*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(i){"function"==typeof define&&define.amd?define(["jquery","./version"],i):i(jQuery)}((function(i){return i.fn.extend({uniqueId:(n=0,function(){return this.each((function(){this.id||(this.id="ui-id-"+ ++n)}))}),removeUniqueId:function(){return this.each((function(){/^ui-id-\d+$/.test(this.id)&&i(this).removeAttr("id")}))}});var n}));;
/*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo((function(n){return function(t){return!!e.data(t,n)}})):function(n,t,r){return!!e.data(n,r[3])}})}));;
/*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.fn.extend({disableSelection:(n="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(n+".ui-disableSelection",(function(e){e.preventDefault()}))}),enableSelection:function(){return this.off(".ui-disableSelection")}});var n}));;
!function(n){"function"==typeof define&&define.amd?define(["jquery","./version"],n):n(jQuery)}((function(n){return n.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):n(this[0].form)}}));;
/*!
 * jQuery UI Support for jQuery core 1.7.x 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],(function(n,i){var e="Width"===i?["Left","Right"]:["Top","Bottom"],r=i.toLowerCase(),h={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};function s(n,i,r,h){return t.each(e,(function(){i-=parseFloat(t.css(n,"padding"+this))||0,r&&(i-=parseFloat(t.css(n,"border"+this+"Width"))||0),h&&(i-=parseFloat(t.css(n,"margin"+this))||0)})),i}t.fn["inner"+i]=function(n){return void 0===n?h["inner"+i].call(this):this.each((function(){t(this).css(r,s(this,n)+"px")}))},t.fn["outer"+i]=function(n,e){return"number"!=typeof n?h["outer"+i].call(this,n):this.each((function(){t(this).css(r,s(this,n,!0,e)+"px")}))}})),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))})}));;
/*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.fn.scrollParent=function(t){var n=this.css("position"),o="absolute"===n,s=t?/(auto|scroll|hidden)/:/(auto|scroll)/,i=this.parents().filter((function(){var t=e(this);return(!o||"static"!==t.css("position"))&&s.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))})).eq(0);return"fixed"!==n&&i.length?i:e(this[0].ownerDocument||document)}}));;
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())}));;
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.escapeSelector=(n=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g,function(e){return e.replace(n,"\\$1")});var n}));;
/*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.focusable=function(i,t){var n,a,r,s,o,u=i.nodeName.toLowerCase();return"area"===u?(a=(n=i.parentNode).name,!(!i.href||!a||"map"!==n.nodeName.toLowerCase())&&((r=e("img[usemap='#"+a+"']")).length>0&&r.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(u)?(s=!i.disabled)&&(o=e(i).closest("fieldset")[0])&&(s=!o.disabled):s="a"===u&&i.href||t,s&&e(i).is(":visible")&&function(e){var i=e.css("visibility");for(;"inherit"===i;)i=(e=e.parent()).css("visibility");return"hidden"!==i}(e(i)))},e.extend(e.expr[":"],{focusable:function(i){return e.ui.focusable(i,null!=e.attr(i,"tabindex"))}}),e.ui.focusable}));;
/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(E){"function"==typeof define&&define.amd?define(["jquery","./version"],E):E(jQuery)}((function(E){return E.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}));;
!function(n){"function"==typeof define&&define.amd?define(["jquery","./version"],n):n(jQuery)}((function(n){return n.ui.plugin={add:function(e,i,o){var t,u=n.ui[e].prototype;for(t in o)u.plugins[t]=u.plugins[t]||[],u.plugins[t].push([i,o[t]])},call:function(n,e,i,o){var t,u=n.plugins[e];if(u&&(o||n.element[0].parentNode&&11!==n.element[0].parentNode.nodeType))for(t=0;t<u.length;t++)n.options[u[t][0]]&&u[t][1].apply(n.element,i)}}}));;
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.safeActiveElement=function(e){var n;try{n=e.activeElement}catch(t){n=e.body}return n||(n=e.body),n.nodeName||(n=e.body),n}}));;
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.safeBlur=function(n){n&&"body"!==n.nodeName.toLowerCase()&&e(n).trigger("blur")}}));;
/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){var e,i=0,s=Array.prototype.slice;return t.cleanData=(e=t.cleanData,function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{(s=t._data(n,"events"))&&s.remove&&t(n).triggerHandler("remove")}catch(t){}e(i)}),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0],u=l+"-"+(e=e.split(".")[1]);return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][u.toLowerCase()]=function(e){return!!t.data(e,u)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){if(!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),(a=new i).options=t.widget.extend({},a.options),t.each(s,(function(e,s){t.isFunction(s)?r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}():r[e]=s})),o.prototype=t.widget.extend(a,{widgetEventPrefix:n&&a.widgetEventPrefix||e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:u}),n?(t.each(n._childConstructors,(function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)})),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,n,o=s.call(arguments,1),a=0,r=o.length;a<r;a++)for(i in o[a])n=o[a][i],o[a].hasOwnProperty(i)&&void 0!==n&&(t.isPlainObject(n)?e[i]=t.isPlainObject(e[i])?t.widget.extend({},e[i],n):t.widget.extend({},n):e[i]=n);return e},t.widget.bridge=function(e,i){var n=i.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=s.call(arguments,1),l=this;return a?this.length||"instance"!==o?this.each((function(){var i,s=t.data(this,n);return"instance"===o?(l=s,!1):s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(i=s[o].apply(s,r))!==s&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0:t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+o+"'")})):l=void 0:(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each((function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new i(o,this))}))),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,(function(t,i){e._removeClass(i,t)})),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;o<s.length-1;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){var i=[],s=this;function n(n,o){var a,r;for(r=0;r<n.length;r++)a=s.classesElementLookup[n[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),s.classesElementLookup[n[r]]=a,i.push(n[r]),o&&e.classes[n[r]]&&i.push(e.classes[n[r]])}return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&n(e.keys.match(/\S+/g)||[],!0),e.extra&&n(e.extra.match(/\S+/g)||[]),i.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,(function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))}))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,(function(s,a){function r(){if(e||!0!==o.options.disabled&&!t(this).hasClass("ui-state-disabled"))return("string"==typeof a?o[a]:a).apply(o,arguments)}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+o.eventNamespace,h=l[2];h?n.on(u,h,r):i.on(u,r)}))},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){var i=this;return setTimeout((function(){return("string"==typeof t?i[t]:t).apply(i,arguments)}),e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},(i=t.Event(i)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&!1===a.apply(this.element[0],[i].concat(s))||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},(function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){var a;"string"==typeof n&&(n={effect:n});var r=n?!0===n||"number"==typeof n?i:n.effect||i:e;"number"==typeof(n=n||{})&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue((function(i){t(this)[e](),o&&o.call(s[0]),i()}))}})),t.widget}));;
/*!
 * jQuery UI Controlgroup 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","../widget"],t):t(jQuery)}((function(t){var e=/ui-corner-([a-z]){2,6}/g;return t.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var e=this,i=[];t.each(this.options.items,(function(n,o){var s,l={};if(o)return"controlgroupLabel"===n?((s=e.element.find(o)).each((function(){var e=t(this);e.children(".ui-controlgroup-label-contents").length||e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")})),e._addClass(s,null,"ui-widget ui-widget-content ui-state-default"),void(i=i.concat(s.get()))):void(t.fn[n]&&(l=e["_"+n+"Options"]?e["_"+n+"Options"]("middle"):{classes:{}},e.element.find(o).each((function(){var o=t(this),s=o[n]("instance"),r=t.widget.extend({},l);if("button"!==n||!o.parent(".ui-spinner").length){s||(s=o[n]()[n]("instance")),s&&(r.classes=e._resolveClassesValues(r.classes,s)),o[n](r);var u=o[n]("widget");t.data(u[0],"ui-controlgroup-data",s||o[n]("instance")),i.push(u[0])}}))))})),this.childWidgets=t(t.unique(i)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each((function(){var i=t(this).data("ui-controlgroup-data");i&&i[e]&&i[e]()}))},_updateCornerClass:function(t,e){var i=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,"ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"),this._addClass(t,null,i)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,n={classes:{}};return n.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],n},_spinnerOptions:function(t){var e=this._buildSimpleOptions(t,"ui-spinner");return e.classes["ui-spinner-up"]="",e.classes["ui-spinner-down"]="",e},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:!!e&&"auto",classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(i,n){var o={};return t.each(i,(function(s){var l=n.options.classes[s]||"";l=t.trim(l.replace(e,"")),o[s]=(l+" "+i[s]).replace(/\s+/g," ")})),o},_setOption:function(t,e){"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"!==t?this.refresh():this._callChildMethod(e?"disable":"enable")},refresh:function(){var e,i=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),e=this.childWidgets,this.options.onlyVisible&&(e=e.filter(":visible")),e.length&&(t.each(["first","last"],(function(t,n){var o=e[n]().data("ui-controlgroup-data");if(o&&i["_"+o.widgetName+"Options"]){var s=i["_"+o.widgetName+"Options"](1===e.length?"only":n);s.classes=i._resolveClassesValues(s.classes,o),o.element[o.widgetName](s)}else i._updateCornerClass(e[n](),n)})),this._callChildMethod("refresh"))}})}));;
/*!
 * jQuery UI Form Reset Mixin 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./form","./version"],e):e(jQuery)}((function(e){return e.ui.formResetMixin={_formResetHandler:function(){var t=e(this);setTimeout((function(){var r=t.data("ui-form-reset-instances");e.each(r,(function(){this.refresh()}))}))},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var e=this.form.data("ui-form-reset-instances")||[];e.length||this.form.on("reset.ui-form-reset",this._formResetHandler),e.push(this),this.form.data("ui-form-reset-instances",e)}},_unbindFormResetHandler:function(){if(this.form.length){var t=this.form.data("ui-form-reset-instances");t.splice(e.inArray(this,t),1),t.length?this.form.data("ui-form-reset-instances",t):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}}}));;
/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","../ie","../version","../widget"],e):e(jQuery)}((function(e){var t=!1;return e(document).on("mouseup",(function(){t=!1})),e.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.on("mousedown."+this.widgetName,(function(e){return t._mouseDown(e)})).on("click."+this.widgetName,(function(i){if(!0===e.data(i.target,t.widgetName+".preventClickEvent"))return e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1})),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,o=1===i.which,n=!("string"!=typeof this.options.cancel||!i.target.nodeName)&&e(i.target).closest(this.options.cancel).length;return!(o&&!n&&this._mouseCapture(i))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout((function(){s.mouseDelayMet=!0}),this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=!1!==this._mouseStart(i),!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0))}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button)return this._mouseUp(t);if(!t.which)if(t.originalEvent.altKey||t.originalEvent.ctrlKey||t.originalEvent.metaKey||t.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,t),this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(i){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,i.target===this._mouseDownEvent.target&&e.data(i.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(i)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,t=!1,i.preventDefault()},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}));;
/*!
 * jQuery UI Menu 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","../keycode","../position","../safe-active-element","../unique-id","../version","../widget"],e):e(jQuery)}((function(e){return e.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault()},"click .ui-menu-item":function(t){var i=e(t.target),s=e(e.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&s.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var i=e(t.target).closest(".ui-menu-item"),s=e(t.currentTarget);i[0]===s[0]&&(this._removeClass(s.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(t,s))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this.element.find(this.options.items).eq(0);t||this.focus(e,i)},blur:function(t){this._delay((function(){!e.contains(this.element[0],e.ui.safeActiveElement(this.document[0]))&&this.collapseAll(t)}))},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){var t=this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),t.children().each((function(){var t=e(this);t.data("ui-menu-submenu-caret")&&t.remove()}))},_keydown:function(t){var i,s,n,a,u=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:u=!1,s=this.previousFilter||"",a=!1,n=t.keyCode>=96&&t.keyCode<=105?(t.keyCode-96).toString():String.fromCharCode(t.keyCode),clearTimeout(this.filterTimer),n===s?a=!0:n=s+n,i=this._filterMenuItems(n),(i=a&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i).length||(n=String.fromCharCode(t.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(t,i),this.previousFilter=n,this.filterTimer=this._delay((function(){delete this.previousFilter}),1e3)):delete this.previousFilter}u&&t.preventDefault()},_activate:function(e){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(e):this.select(e))},refresh:function(){var t,i,s,n,a=this,u=this.options.icons.submenu,o=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),i=o.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each((function(){var t=e(this),i=t.prev(),s=e("<span>").data("ui-menu-submenu-caret",!0);a._addClass(s,"ui-menu-icon","ui-icon "+u),i.attr("aria-haspopup","true").prepend(s),t.attr("aria-labelledby",i.attr("id"))})),this._addClass(i,"ui-menu","ui-widget ui-widget-content ui-front"),(t=o.add(this.element).find(this.options.items)).not(".ui-menu-item").each((function(){var t=e(this);a._isDivider(t)&&a._addClass(t,"ui-menu-divider","ui-widget-content")})),n=(s=t.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(s,"ui-menu-item")._addClass(n,"ui-menu-item-wrapper"),t.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){if("icons"===e){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,t.submenu)}this._super(e,t)},_setOptionDisabled:function(e){this._super(e),this.element.attr("aria-disabled",String(e)),this._toggleClass(null,"ui-state-disabled",!!e)},focus:function(e,t){var i,s,n;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),s=this.active.children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),n=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay((function(){this._close()}),this.delay),(i=t.children(".ui-menu")).length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,s,n,a,u,o;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,n=t.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),u=this.activeMenu.height(),o=t.outerHeight(),n<0?this.activeMenu.scrollTop(a+n):n+o>u&&this.activeMenu.scrollTop(a+n-u+o))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",e,{item:this.active}),this.active=null)},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay((function(){this._close(),this._open(e)}),this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay((function(){var s=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(t),this._removeClass(s.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=s}),this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();t&&t.length&&(this._open(t.parent()),this._delay((function(){this.focus(e,t)})))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,i){var s;this.active&&(s="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[t]()),this.focus(i,s)},nextPage:function(t){var i,s,n;this.active?this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each((function(){return(i=e(this)).offset().top-s-n<0})),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())):this.next(t)},previousPage:function(t){var i,s,n;this.active?this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each((function(){return(i=e(this)).offset().top-s+n>0})),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items).first())):this.next(t)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)},_filterMenuItems:function(t){var i=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=new RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter((function(){return s.test(e.trim(e(this).children(".ui-menu-item-wrapper").text()))}))}})}));;
/*!
 * jQuery UI Labels 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version","./escape-selector"],e):e(jQuery)}((function(e){return e.fn.labels=function(){var t,s,i,n,a;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),(i=this.attr("id"))&&(a=(t=this.eq(0).parents().last()).add(t.length?t.siblings():this.siblings()),s="label[for='"+e.ui.escapeSelector(i)+"']",n=n.add(a.find(s).addBack(s))),this.pushStack(n))}}));;
/*!
 * jQuery UI Autocomplete 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./menu","../keycode","../position","../safe-active-element","../version","../widget"],e):e(jQuery)}((function(e){return e.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,u="input"===n;this.isMultiLine=o||!u&&this._isContentEditable(this.element),this.valueMethod=this.element[o||u?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,void(i=!0);t=!1,s=!1,i=!1;var o=e.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:t=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case o.UP:t=!0,this._keyEvent("previous",n);break;case o.DOWN:t=!0,this._keyEvent("next",n);break;case o.ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,void(this.isMultiLine&&!this.menu.element.is(":visible")||s.preventDefault());if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){if(s)return s=!1,void e.preventDefault();this._searchTimeout(e)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){this.cancelBlur?delete this.cancelBlur:(clearTimeout(this.searching),this.close(e),this._change(e))}}),this._initSource(),this.menu=e("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay((function(){delete this.cancelBlur,this.element[0]!==e.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")}))},menufocus:function(t,i){var s,n;if(this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type)))return this.menu.blur(),void this.document.one("mousemove",(function(){e(t.target).trigger(t.originalEvent)}));n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:n})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(n.value),(s=i.item.attr("aria-label")||n.value)&&e.trim(s).length&&(this.liveRegion.children().hide(),e("<div>").text(s).appendTo(this.liveRegion))},menuselect:function(t,i){var s=i.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==e.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=n,this._delay((function(){this.previous=n,this.selectedItem=s}))),!1!==this._trigger("select",t,{item:s})&&this._value(s.value),this.term=this._value(),this.close(t),this.selectedItem=s}}),this.liveRegion=e("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(t){var i=this.menu.element[0];return t.target===this.element[0]||t.target===i||e.contains(i,t.target)},_closeOnClickOutside:function(e){this._isEventTargetInWidget(e)||this.close()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front, dialog")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay((function(){var t=this.term===this._value(),i=this.menu.element.is(":visible"),s=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey;t&&(!t||i||s)||(this.selectedItem=null,this.search(null,e))}),this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):!1!==this._trigger("search",t)?this._search(e):void 0},_search:function(e){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy((function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")}),this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,(function(t){return"string"==typeof t?{label:t,value:t}:e.extend({},t,{label:t.label||t.value,value:t.value||t.label})}))},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,(function(e,i){s._renderItemData(t,i)}))},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").append(e("<div>").text(i.label)).appendTo(t)},_move:function(e,t){if(this.menu.element.is(":visible"))return this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[e](t);this.search(null,t)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){this.isMultiLine&&!this.menu.element.is(":visible")||(this._move(e,t),t.preventDefault())},_isContentEditable:function(e){if(!e.length)return!1;var t=e.prop("contentEditable");return"inherit"===t?this._isContentEditable(e.parent()):"true"===t}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=new RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,(function(e){return s.test(e.label||e.value||e)}))}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.children().hide(),e("<div>").text(i).appendTo(this.liveRegion))}}),e.ui.autocomplete}));;
/*!
 * jQuery UI Checkboxradio 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","../escape-selector","../form-reset-mixin","../labels","../widget"],e):e(jQuery)}((function(e){return e.widget("ui.checkboxradio",[e.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var i,t,s=this,o=this._super()||{};return this._readType(),t=this.element.labels(),this.label=e(t[t.length-1]),this.label.length||e.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each((function(){s.originalLabel+=3===this.nodeType?e(this).text():this.outerHTML})),this.originalLabel&&(o.label=this.originalLabel),null!=(i=this.element[0].disabled)&&(o.disabled=i),o},_create:function(){var e=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),e&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var i=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===i&&/radio|checkbox/.test(this.type)||e.error("Can't create checkboxradio on element.nodeName="+i+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var i=this.element[0].name,t="input[name='"+e.ui.escapeSelector(i)+"']";return i?(this.form.length?e(this.form[0].elements).filter(t):e(t).filter((function(){return 0===e(this).form().length}))).not(this.element):e([])},_toggleClasses:function(){var i=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",i),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",i)._toggleClass(this.icon,null,"ui-icon-blank",!i),"radio"===this.type&&this._getRadioGroup().each((function(){var i=e(this).checkboxradio("instance");i&&i._removeClass(i.label,"ui-checkboxradio-checked","ui-state-active")}))},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(e,i){if("label"!==e||i){if(this._super(e,i),"disabled"===e)return this._toggleClass(this.label,null,"ui-state-disabled",i),void(this.element[0].disabled=i);this.refresh()}},_updateIcon:function(i){var t="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=e("<span>"),this.iconSpace=e("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(t+=i?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,i?"ui-icon-blank":"ui-icon-check")):t+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",t),i||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var e=this.label.contents().not(this.element[0]);this.icon&&(e=e.not(this.icon[0])),this.iconSpace&&(e=e.not(this.iconSpace[0])),e.remove(),this.label.append(this.options.label)},refresh:function(){var e=this.element[0].checked,i=this.element[0].disabled;this._updateIcon(e),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",e),null!==this.options.label&&this._updateLabel(),i!==this.options.disabled&&this._setOptions({disabled:i})}}]),e.ui.checkboxradio}));;
/*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./mouse","../data","../plugin","../safe-active-element","../safe-blur","../scroll-parent","../version","../widget"],t):t(jQuery)}((function(t){return t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){(this.helper||this.element).is(".ui-draggable-dragging")?this.destroyOnClear=!0:(this._removeHandleClassName(),this._mouseDestroy())},_mouseCapture:function(e){var s=this.options;return!(this.helper||s.disabled||t(e.target).closest(".ui-resizable-handle").length>0)&&(this.handle=this._getHandle(e),!!this.handle&&(this._blurActiveElement(e),this._blockFrames(!0===s.iframeFix?"iframe":s.iframeFix),!0))},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map((function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]}))},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var s=t.ui.safeActiveElement(this.document[0]);t(e.target).closest(s).length||t.ui.safeBlur(s)},_mouseStart:function(e){var s=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter((function(){return"fixed"===t(this).css("position")})).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,s.cursorAt&&this._adjustOffsetFromHelper(s.cursorAt),this._setContainment(),!1===this._trigger("start",e)?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!s.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,s){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!s){var i=this._uiHash();if(!1===this._trigger("drag",e,i))return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=i.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var s=this,i=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(i=t.ui.ddmanager.drop(this,e)),this.dropped&&(i=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!i||"valid"===this.options.revert&&i||!0===this.options.revert||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,i)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),(function(){!1!==s._trigger("stop",e)&&s._clear()})):!1!==this._trigger("stop",e)&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return!this.options.handle||!!t(e.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var s=this.options,i=t.isFunction(s.helper),o=i?t(s.helper.apply(this.element[0],[e])):"clone"===s.helper?this.element.clone().removeAttr("id"):this.element;return o.parents("body").length||o.appendTo("parent"===s.appendTo?this.element[0].parentNode:s.appendTo),i&&o[0]===this.element[0]&&this._setPositionRelative(),o[0]===this.element[0]||/(fixed|absolute)/.test(o.css("position"))||o.css("position","absolute"),o},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),s=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==s&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,s,i,o=this.options,n=this.document[0];this.relativeContainer=null,o.containment?"window"!==o.containment?"document"!==o.containment?o.containment.constructor!==Array?("parent"===o.containment&&(o.containment=this.helper[0].parentNode),(i=(s=t(o.containment))[0])&&(e=/(scroll|auto)/.test(s.css("overflow")),this.containment=[(parseInt(s.css("borderLeftWidth"),10)||0)+(parseInt(s.css("paddingLeft"),10)||0),(parseInt(s.css("borderTopWidth"),10)||0)+(parseInt(s.css("paddingTop"),10)||0),(e?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(s.css("borderRightWidth"),10)||0)-(parseInt(s.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(s.css("borderBottomWidth"),10)||0)-(parseInt(s.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=s)):this.containment=o.containment:this.containment=[0,0,t(n).width()-this.helperProportions.width-this.margins.left,(t(n).height()||n.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||n.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=null},_convertPositionTo:function(t,e){e||(e=this.position);var s="absolute"===t?1:-1,i=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.offset.scroll.top:i?0:this.offset.scroll.top)*s,left:e.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.offset.scroll.left:i?0:this.offset.scroll.left)*s}},_generatePosition:function(t,e){var s,i,o,n,r=this.options,l=this._isRootNode(this.scrollParent[0]),a=t.pageX,h=t.pageY;return l&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(i=this.relativeContainer.offset(),s=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]):s=this.containment,t.pageX-this.offset.click.left<s[0]&&(a=s[0]+this.offset.click.left),t.pageY-this.offset.click.top<s[1]&&(h=s[1]+this.offset.click.top),t.pageX-this.offset.click.left>s[2]&&(a=s[2]+this.offset.click.left),t.pageY-this.offset.click.top>s[3]&&(h=s[3]+this.offset.click.top)),r.grid&&(o=r.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/r.grid[1])*r.grid[1]:this.originalPageY,h=s?o-this.offset.click.top>=s[1]||o-this.offset.click.top>s[3]?o:o-this.offset.click.top>=s[1]?o-r.grid[1]:o+r.grid[1]:o,n=r.grid[0]?this.originalPageX+Math.round((a-this.originalPageX)/r.grid[0])*r.grid[0]:this.originalPageX,a=s?n-this.offset.click.left>=s[0]||n-this.offset.click.left>s[2]?n:n-this.offset.click.left>=s[0]?n-r.grid[0]:n+r.grid[0]:n),"y"===r.axis&&(a=this.originalPageX),"x"===r.axis&&(h=this.originalPageY)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:l?0:this.offset.scroll.top),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:l?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,s,i){return i=i||this._uiHash(),t.ui.plugin.call(this,e,[s,i,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),i.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,s,i)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,s,i){var o=t.extend({},s,{item:i.element});i.sortables=[],t(i.options.connectToSortable).each((function(){var s=t(this).sortable("instance");s&&!s.options.disabled&&(i.sortables.push(s),s.refreshPositions(),s._trigger("activate",e,o))}))},stop:function(e,s,i){var o=t.extend({},s,{item:i.element});i.cancelHelperRemoval=!1,t.each(i.sortables,(function(){var t=this;t.isOver?(t.isOver=0,i.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,o))}))},drag:function(e,s,i){t.each(i.sortables,(function(){var o=!1,n=this;n.positionAbs=i.positionAbs,n.helperProportions=i.helperProportions,n.offset.click=i.offset.click,n._intersectsWith(n.containerCache)&&(o=!0,t.each(i.sortables,(function(){return this.positionAbs=i.positionAbs,this.helperProportions=i.helperProportions,this.offset.click=i.offset.click,this!==n&&this._intersectsWith(this.containerCache)&&t.contains(n.element[0],this.element[0])&&(o=!1),o}))),o?(n.isOver||(n.isOver=1,i._parent=s.helper.parent(),n.currentItem=s.helper.appendTo(n.element).data("ui-sortable-item",!0),n.options._helper=n.options.helper,n.options.helper=function(){return s.helper[0]},e.target=n.currentItem[0],n._mouseCapture(e,!0),n._mouseStart(e,!0,!0),n.offset.click.top=i.offset.click.top,n.offset.click.left=i.offset.click.left,n.offset.parent.left-=i.offset.parent.left-n.offset.parent.left,n.offset.parent.top-=i.offset.parent.top-n.offset.parent.top,i._trigger("toSortable",e),i.dropped=n.element,t.each(i.sortables,(function(){this.refreshPositions()})),i.currentItem=i.element,n.fromOutside=i),n.currentItem&&(n._mouseDrag(e),s.position=n.position)):n.isOver&&(n.isOver=0,n.cancelHelperRemoval=!0,n.options._revert=n.options.revert,n.options.revert=!1,n._trigger("out",e,n._uiHash(n)),n._mouseStop(e,!0),n.options.revert=n.options._revert,n.options.helper=n.options._helper,n.placeholder&&n.placeholder.remove(),s.helper.appendTo(i._parent),i._refreshOffsets(e),s.position=i._generatePosition(e,!0),i._trigger("fromSortable",e),i.dropped=!1,t.each(i.sortables,(function(){this.refreshPositions()})))}))}}),t.ui.plugin.add("draggable","cursor",{start:function(e,s,i){var o=t("body"),n=i.options;o.css("cursor")&&(n._cursor=o.css("cursor")),o.css("cursor",n.cursor)},stop:function(e,s,i){var o=i.options;o._cursor&&t("body").css("cursor",o._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,s,i){var o=t(s.helper),n=i.options;o.css("opacity")&&(n._opacity=o.css("opacity")),o.css("opacity",n.opacity)},stop:function(e,s,i){var o=i.options;o._opacity&&t(s.helper).css("opacity",o._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,s){s.scrollParentNotHidden||(s.scrollParentNotHidden=s.helper.scrollParent(!1)),s.scrollParentNotHidden[0]!==s.document[0]&&"HTML"!==s.scrollParentNotHidden[0].tagName&&(s.overflowOffset=s.scrollParentNotHidden.offset())},drag:function(e,s,i){var o=i.options,n=!1,r=i.scrollParentNotHidden[0],l=i.document[0];r!==l&&"HTML"!==r.tagName?(o.axis&&"x"===o.axis||(i.overflowOffset.top+r.offsetHeight-e.pageY<o.scrollSensitivity?r.scrollTop=n=r.scrollTop+o.scrollSpeed:e.pageY-i.overflowOffset.top<o.scrollSensitivity&&(r.scrollTop=n=r.scrollTop-o.scrollSpeed)),o.axis&&"y"===o.axis||(i.overflowOffset.left+r.offsetWidth-e.pageX<o.scrollSensitivity?r.scrollLeft=n=r.scrollLeft+o.scrollSpeed:e.pageX-i.overflowOffset.left<o.scrollSensitivity&&(r.scrollLeft=n=r.scrollLeft-o.scrollSpeed))):(o.axis&&"x"===o.axis||(e.pageY-t(l).scrollTop()<o.scrollSensitivity?n=t(l).scrollTop(t(l).scrollTop()-o.scrollSpeed):t(window).height()-(e.pageY-t(l).scrollTop())<o.scrollSensitivity&&(n=t(l).scrollTop(t(l).scrollTop()+o.scrollSpeed))),o.axis&&"y"===o.axis||(e.pageX-t(l).scrollLeft()<o.scrollSensitivity?n=t(l).scrollLeft(t(l).scrollLeft()-o.scrollSpeed):t(window).width()-(e.pageX-t(l).scrollLeft())<o.scrollSensitivity&&(n=t(l).scrollLeft(t(l).scrollLeft()+o.scrollSpeed)))),!1!==n&&t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(i,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,s,i){var o=i.options;i.snapElements=[],t(o.snap.constructor!==String?o.snap.items||":data(ui-draggable)":o.snap).each((function(){var e=t(this),s=e.offset();this!==i.element[0]&&i.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:s.top,left:s.left})}))},drag:function(e,s,i){var o,n,r,l,a,h,p,c,f,d,g=i.options,u=g.snapTolerance,m=s.offset.left,v=m+i.helperProportions.width,_=s.offset.top,P=_+i.helperProportions.height;for(f=i.snapElements.length-1;f>=0;f--)h=(a=i.snapElements[f].left-i.margins.left)+i.snapElements[f].width,c=(p=i.snapElements[f].top-i.margins.top)+i.snapElements[f].height,v<a-u||m>h+u||P<p-u||_>c+u||!t.contains(i.snapElements[f].item.ownerDocument,i.snapElements[f].item)?(i.snapElements[f].snapping&&i.options.snap.release&&i.options.snap.release.call(i.element,e,t.extend(i._uiHash(),{snapItem:i.snapElements[f].item})),i.snapElements[f].snapping=!1):("inner"!==g.snapMode&&(o=Math.abs(p-P)<=u,n=Math.abs(c-_)<=u,r=Math.abs(a-v)<=u,l=Math.abs(h-m)<=u,o&&(s.position.top=i._convertPositionTo("relative",{top:p-i.helperProportions.height,left:0}).top),n&&(s.position.top=i._convertPositionTo("relative",{top:c,left:0}).top),r&&(s.position.left=i._convertPositionTo("relative",{top:0,left:a-i.helperProportions.width}).left),l&&(s.position.left=i._convertPositionTo("relative",{top:0,left:h}).left)),d=o||n||r||l,"outer"!==g.snapMode&&(o=Math.abs(p-_)<=u,n=Math.abs(c-P)<=u,r=Math.abs(a-m)<=u,l=Math.abs(h-v)<=u,o&&(s.position.top=i._convertPositionTo("relative",{top:p,left:0}).top),n&&(s.position.top=i._convertPositionTo("relative",{top:c-i.helperProportions.height,left:0}).top),r&&(s.position.left=i._convertPositionTo("relative",{top:0,left:a}).left),l&&(s.position.left=i._convertPositionTo("relative",{top:0,left:h-i.helperProportions.width}).left)),!i.snapElements[f].snapping&&(o||n||r||l||d)&&i.options.snap.snap&&i.options.snap.snap.call(i.element,e,t.extend(i._uiHash(),{snapItem:i.snapElements[f].item})),i.snapElements[f].snapping=o||n||r||l||d)}}),t.ui.plugin.add("draggable","stack",{start:function(e,s,i){var o,n=i.options,r=t.makeArray(t(n.stack)).sort((function(e,s){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(s).css("zIndex"),10)||0)}));r.length&&(o=parseInt(t(r[0]).css("zIndex"),10)||0,t(r).each((function(e){t(this).css("zIndex",o+e)})),this.css("zIndex",o+r.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,s,i){var o=t(s.helper),n=i.options;o.css("zIndex")&&(n._zIndex=o.css("zIndex")),o.css("zIndex",n.zIndex)},stop:function(e,s,i){var o=i.options;o._zIndex&&t(s.helper).css("zIndex",o._zIndex)}}),t.ui.draggable}));;
/*!
 * jQuery UI Resizable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./mouse","../disable-selection","../plugin","../version","../widget"],t):t(jQuery)}((function(t){return t.widget("ui.resizable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(i,e){if("hidden"===t(i).css("overflow"))return!1;var s,h=e&&"left"===e?"scrollLeft":"scrollTop";return i[h]>0||(i[h]=1,s=i[h]>0,i[h]=0,s)},_create:function(){var i,e=this.options,s=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!e.aspectRatio,aspectRatio:e.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:e.helper||e.ghost||e.animate?e.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,i={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(i),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(i),this._proportionallyResize()),this._setupHandles(),e.autoHide&&t(this.element).on("mouseenter",(function(){e.disabled||(s._removeClass("ui-resizable-autohide"),s._handles.show())})).on("mouseleave",(function(){e.disabled||s.resizing||(s._addClass("ui-resizable-autohide"),s._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var i,e=function(i){t(i).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(e(this.element),i=this.element,this.originalElement.css({position:i.css("position"),width:i.outerWidth(),height:i.outerHeight(),top:i.css("top"),left:i.css("left")}).insertAfter(i),i.remove()),this.originalElement.css("resize",this.originalResizeStyle),e(this.originalElement),this},_setOption:function(t,i){switch(this._super(t,i),t){case"handles":this._removeHandles(),this._setupHandles()}},_setupHandles:function(){var i,e,s,h,n,o=this.options,a=this;if(this.handles=o.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),s=this.handles.split(","),this.handles={},e=0;e<s.length;e++)h="ui-resizable-"+(i=t.trim(s[e])),n=t("<div>"),this._addClass(n,"ui-resizable-handle "+h),n.css({zIndex:o.zIndex}),this.handles[i]=".ui-resizable-"+i,this.element.append(n);this._renderAxis=function(i){var e,s,h,n;for(e in i=i||this.element,this.handles)this.handles[e].constructor===String?this.handles[e]=this.element.children(this.handles[e]).first().show():(this.handles[e].jquery||this.handles[e].nodeType)&&(this.handles[e]=t(this.handles[e]),this._on(this.handles[e],{mousedown:a._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=t(this.handles[e],this.element),n=/sw|ne|nw|se|n|s/.test(e)?s.outerHeight():s.outerWidth(),h=["padding",/ne|nw|n/.test(e)?"Top":/se|sw|s/.test(e)?"Bottom":/^e$/.test(e)?"Right":"Left"].join(""),i.css(h,n),this._proportionallyResize()),this._handles=this._handles.add(this.handles[e])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",(function(){a.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),a.axis=n&&n[1]?n[1]:"se")})),o.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(i){var e,s,h=!1;for(e in this.handles)((s=t(this.handles[e])[0])===i.target||t.contains(s,i.target))&&(h=!0);return!this.options.disabled&&h},_mouseStart:function(i){var e,s,h,n=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),e=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),n.containment&&(e+=t(n.containment).scrollLeft()||0,s+=t(n.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:e,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:e,top:s},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof n.aspectRatio?n.aspectRatio:this.originalSize.width/this.originalSize.height||1,h=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===h?this.axis+"-resize":h),this._addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(i){var e,s,h=this.originalMousePosition,n=this.axis,o=i.pageX-h.left||0,a=i.pageY-h.top||0,l=this._change[n];return this._updatePrevProperties(),!!l&&(e=l.apply(this,[i,o,a]),this._updateVirtualBoundaries(i.shiftKey),(this._aspectRatio||i.shiftKey)&&(e=this._updateRatio(e,i)),e=this._respectSize(e,i),this._updateCache(e),this._propagate("resize",i),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",i,this.ui()),this._applyChanges()),!1)},_mouseStop:function(i){this.resizing=!1;var e,s,h,n,o,a,l,r=this.options,p=this;return this._helper&&(h=(s=(e=this._proportionallyResizeElements).length&&/textarea/i.test(e[0].nodeName))&&this._hasScroll(e[0],"left")?0:p.sizeDiff.height,n=s?0:p.sizeDiff.width,o={width:p.helper.width()-n,height:p.helper.height()-h},a=parseFloat(p.element.css("left"))+(p.position.left-p.originalPosition.left)||null,l=parseFloat(p.element.css("top"))+(p.position.top-p.originalPosition.top)||null,r.animate||this.element.css(t.extend(o,{top:l,left:a})),p.helper.height(p.size.height),p.helper.width(p.size.width),this._helper&&!r.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",i),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var i,e,s,h,n,o=this.options;n={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||t)&&(i=n.minHeight*this.aspectRatio,s=n.minWidth/this.aspectRatio,e=n.maxHeight*this.aspectRatio,h=n.maxWidth/this.aspectRatio,i>n.minWidth&&(n.minWidth=i),s>n.minHeight&&(n.minHeight=s),e<n.maxWidth&&(n.maxWidth=e),h<n.maxHeight&&(n.maxHeight=h)),this._vBoundaries=n},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var i=this.position,e=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=i.left+(e.width-t.width),t.top=null),"nw"===s&&(t.top=i.top+(e.height-t.height),t.left=i.left+(e.width-t.width)),t},_respectSize:function(t){var i=this._vBoundaries,e=this.axis,s=this._isNumber(t.width)&&i.maxWidth&&i.maxWidth<t.width,h=this._isNumber(t.height)&&i.maxHeight&&i.maxHeight<t.height,n=this._isNumber(t.width)&&i.minWidth&&i.minWidth>t.width,o=this._isNumber(t.height)&&i.minHeight&&i.minHeight>t.height,a=this.originalPosition.left+this.originalSize.width,l=this.originalPosition.top+this.originalSize.height,r=/sw|nw|w/.test(e),p=/nw|ne|n/.test(e);return n&&(t.width=i.minWidth),o&&(t.height=i.minHeight),s&&(t.width=i.maxWidth),h&&(t.height=i.maxHeight),n&&r&&(t.left=a-i.minWidth),s&&r&&(t.left=a-i.maxWidth),o&&p&&(t.top=l-i.minHeight),h&&p&&(t.top=l-i.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var i=0,e=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],h=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];i<4;i++)e[i]=parseFloat(s[i])||0,e[i]+=parseFloat(h[i])||0;return{height:e[0]+e[2],width:e[1]+e[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,i=0,e=this.helper||this.element;i<this._proportionallyResizeElements.length;i++)t=this._proportionallyResizeElements[i],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:e.height()-this.outerDimensions.height||0,width:e.width()-this.outerDimensions.width||0})},_renderProxy:function(){var i=this.element,e=this.options;this.elementOffset=i.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++e.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,i){return{width:this.originalSize.width+i}},w:function(t,i){var e=this.originalSize;return{left:this.originalPosition.left+i,width:e.width-i}},n:function(t,i,e){var s=this.originalSize;return{top:this.originalPosition.top+e,height:s.height-e}},s:function(t,i,e){return{height:this.originalSize.height+e}},se:function(i,e,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[i,e,s]))},sw:function(i,e,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[i,e,s]))},ne:function(i,e,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[i,e,s]))},nw:function(i,e,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[i,e,s]))}},_propagate:function(i,e){t.ui.plugin.call(this,i,[e,this.ui()]),"resize"!==i&&this._trigger(i,e,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(i){var e=t(this).resizable("instance"),s=e.options,h=e._proportionallyResizeElements,n=h.length&&/textarea/i.test(h[0].nodeName),o=n&&e._hasScroll(h[0],"left")?0:e.sizeDiff.height,a=n?0:e.sizeDiff.width,l={width:e.size.width-a,height:e.size.height-o},r=parseFloat(e.element.css("left"))+(e.position.left-e.originalPosition.left)||null,p=parseFloat(e.element.css("top"))+(e.position.top-e.originalPosition.top)||null;e.element.animate(t.extend(l,p&&r?{top:p,left:r}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseFloat(e.element.css("width")),height:parseFloat(e.element.css("height")),top:parseFloat(e.element.css("top")),left:parseFloat(e.element.css("left"))};h&&h.length&&t(h[0]).css({width:s.width,height:s.height}),e._updateCache(s),e._propagate("resize",i)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var i,e,s,h,n,o,a,l=t(this).resizable("instance"),r=l.options,p=l.element,d=r.containment,g=d instanceof t?d.get(0):/parent/.test(d)?p.parent().get(0):d;g&&(l.containerElement=t(g),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(i=t(g),e=[],t(["Top","Right","Left","Bottom"]).each((function(t,s){e[t]=l._num(i.css("padding"+s))})),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-e[3],width:i.innerWidth()-e[1]},s=l.containerOffset,h=l.containerSize.height,n=l.containerSize.width,o=l._hasScroll(g,"left")?g.scrollWidth:n,a=l._hasScroll(g)?g.scrollHeight:h,l.parentData={element:g,left:s.left,top:s.top,width:o,height:a}))},resize:function(i){var e,s,h,n,o=t(this).resizable("instance"),a=o.options,l=o.containerOffset,r=o.position,p=o._aspectRatio||i.shiftKey,d={top:0,left:0},g=o.containerElement,u=!0;g[0]!==document&&/static/.test(g.css("position"))&&(d=l),r.left<(o._helper?l.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-l.left:o.position.left-d.left),p&&(o.size.height=o.size.width/o.aspectRatio,u=!1),o.position.left=a.helper?l.left:0),r.top<(o._helper?l.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-l.top:o.position.top),p&&(o.size.width=o.size.height*o.aspectRatio,u=!1),o.position.top=o._helper?l.top:0),h=o.containerElement.get(0)===o.element.parent().get(0),n=/relative|absolute/.test(o.containerElement.css("position")),h&&n?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),e=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-d.left:o.offset.left-l.left)),s=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-d.top:o.offset.top-l.top)),e+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-e,p&&(o.size.height=o.size.width/o.aspectRatio,u=!1)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,p&&(o.size.width=o.size.height*o.aspectRatio,u=!1)),u||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var i=t(this).resizable("instance"),e=i.options,s=i.containerOffset,h=i.containerPosition,n=i.containerElement,o=t(i.helper),a=o.offset(),l=o.outerWidth()-i.sizeDiff.width,r=o.outerHeight()-i.sizeDiff.height;i._helper&&!e.animate&&/relative/.test(n.css("position"))&&t(this).css({left:a.left-h.left-s.left,width:l,height:r}),i._helper&&!e.animate&&/static/.test(n.css("position"))&&t(this).css({left:a.left-h.left-s.left,width:l,height:r})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var i=t(this).resizable("instance").options;t(i.alsoResize).each((function(){var i=t(this);i.data("ui-resizable-alsoresize",{width:parseFloat(i.width()),height:parseFloat(i.height()),left:parseFloat(i.css("left")),top:parseFloat(i.css("top"))})}))},resize:function(i,e){var s=t(this).resizable("instance"),h=s.options,n=s.originalSize,o=s.originalPosition,a={height:s.size.height-n.height||0,width:s.size.width-n.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0};t(h.alsoResize).each((function(){var i=t(this),s=t(this).data("ui-resizable-alsoresize"),h={},n=i.parents(e.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(n,(function(t,i){var e=(s[i]||0)+(a[i]||0);e&&e>=0&&(h[i]=e||null)})),i.css(h)}))},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var i=t(this).resizable("instance"),e=i.size;i.ghost=i.originalElement.clone(),i.ghost.css({opacity:.25,display:"block",position:"relative",height:e.height,width:e.width,margin:0,left:0,top:0}),i._addClass(i.ghost,"ui-resizable-ghost"),!1!==t.uiBackCompat&&"string"==typeof i.options.ghost&&i.ghost.addClass(this.options.ghost),i.ghost.appendTo(i.helper)},resize:function(){var i=t(this).resizable("instance");i.ghost&&i.ghost.css({position:"relative",height:i.size.height,width:i.size.width})},stop:function(){var i=t(this).resizable("instance");i.ghost&&i.helper&&i.helper.get(0).removeChild(i.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var i,e=t(this).resizable("instance"),s=e.options,h=e.size,n=e.originalSize,o=e.originalPosition,a=e.axis,l="number"==typeof s.grid?[s.grid,s.grid]:s.grid,r=l[0]||1,p=l[1]||1,d=Math.round((h.width-n.width)/r)*r,g=Math.round((h.height-n.height)/p)*p,u=n.width+d,f=n.height+g,c=s.maxWidth&&s.maxWidth<u,m=s.maxHeight&&s.maxHeight<f,z=s.minWidth&&s.minWidth>u,w=s.minHeight&&s.minHeight>f;s.grid=l,z&&(u+=r),w&&(f+=p),c&&(u-=r),m&&(f-=p),/^(se|s|e)$/.test(a)?(e.size.width=u,e.size.height=f):/^(ne)$/.test(a)?(e.size.width=u,e.size.height=f,e.position.top=o.top-g):/^(sw)$/.test(a)?(e.size.width=u,e.size.height=f,e.position.left=o.left-d):((f-p<=0||u-r<=0)&&(i=e._getPaddingPlusBorderDimensions(this)),f-p>0?(e.size.height=f,e.position.top=o.top-g):(f=p-i.height,e.size.height=f,e.position.top=o.top+n.height-f),u-r>0?(e.size.width=u,e.position.left=o.left-d):(u=r-i.width,e.size.width=u,e.position.left=o.left+n.width-u))}}),t.ui.resizable}));;
/*!
 * jQuery UI Button 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./controlgroup","./checkboxradio","../keycode","../widget"],t):t(jQuery)}((function(t){var i;return t.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,i=this._super()||{};return this.isInput=this.element.is("input"),null!=(t=this.element[0].disabled)&&(i.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(i.label=this.originalLabel),i},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(i){i.keyCode===t.ui.keyCode.SPACE&&(i.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(i,o){var s="iconPosition"!==i,n=s?this.options.iconPosition:o,e="top"===n||"bottom"===n;this.icon?s&&this._removeClass(this.icon,null,this.options.icon):(this.icon=t("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),s&&this._addClass(this.icon,null,o),this._attachIcon(n),e?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(n))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var i=void 0===t.showLabel?this.options.showLabel:t.showLabel,o=void 0===t.icon?this.options.icon:t.icon;i||o||(t.showLabel=!0),this._super(t)},_setOption:function(t,i){"icon"===t&&(i?this._updateIcon(t,i):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,i),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!i),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(i):(this.element.html(i),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,i),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",i),this.element[0].disabled=i,i&&this.element.blur())},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),!1!==t.uiBackCompat&&(t.widget("ui.button",t.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,i){"text"!==t?("showLabel"===t&&(this.options.text=i),"icon"===t&&(this.options.icons.primary=i),"icons"===t&&(i.primary?(this._super("icon",i.primary),this._super("iconPosition","beginning")):i.secondary&&(this._super("icon",i.secondary),this._super("iconPosition","end"))),this._superApply(arguments)):this._super("showLabel",i)}}),t.fn.button=(i=t.fn.button,function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?i.apply(this,arguments):(t.ui.checkboxradio||t.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}),t.fn.buttonset=function(){return t.ui.controlgroup||t.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),t.ui.button}));;
/*!
 * jQuery UI Dialog 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(i){"function"==typeof define&&define.amd?define(["jquery","./button","./draggable","./mouse","./resizable","../focusable","../keycode","../position","../safe-active-element","../safe-blur","../unique-id","../version","../widget"],i):i(jQuery)}((function(i){return i.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var e=i(this).css(t).offset().top;e<0&&i(this).css("top",t.top-e)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&i.fn.draggable&&this._makeDraggable(),this.options.resizable&&i.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?i(t):this.document.find(t||"body").eq(0)},_destroy:function(){var i,t=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),(i=t.parent.children().eq(t.index)).length&&i[0]!==this.element[0]?i.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:i.noop,enable:i.noop,close:function(t){var e=this;this._isOpen&&!1!==this._trigger("beforeClose",t)&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||i.ui.safeBlur(i.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,(function(){e._trigger("close",t)})))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,e){var o=!1,s=this.uiDialog.siblings(".ui-front:visible").map((function(){return+i(this).css("z-index")})).get(),n=Math.max.apply(null,s);return n>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",n+1),o=!0),o&&!e&&this._trigger("focus",t),o},open:function(){var t=this;this._isOpen?this._moveToTop()&&this._focusTabbable():(this._isOpen=!0,this.opener=i(i.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,(function(){t._focusTabbable(),t._trigger("focus")})),this._makeFocusTarget(),this._trigger("open"))},_focusTabbable:function(){var i=this._focusedElement;i||(i=this.element.find("[autofocus]")),i.length||(i=this.element.find(":tabbable")),i.length||(i=this.uiDialogButtonPane.find(":tabbable")),i.length||(i=this.uiDialogTitlebarClose.filter(":tabbable")),i.length||(i=this.uiDialog),i.eq(0).trigger("focus")},_keepFocus:function(t){function e(){var t=i.ui.safeActiveElement(this.document[0]);this.uiDialog[0]===t||i.contains(this.uiDialog[0],t)||this._focusTabbable()}t.preventDefault(),e.call(this),this._delay(e)},_createWrapper:function(){this.uiDialog=i("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===i.ui.keyCode.ESCAPE)return t.preventDefault(),void this.close(t);if(t.keyCode===i.ui.keyCode.TAB&&!t.isDefaultPrevented()){var e=this.uiDialog.find(":tabbable"),o=e.filter(":first"),s=e.filter(":last");t.target!==s[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==o[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(this._delay((function(){s.trigger("focus")})),t.preventDefault()):(this._delay((function(){o.trigger("focus")})),t.preventDefault())}},mousedown:function(i){this._moveToTop(i)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=i("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(t){i(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=i("<button type='button'></button>").button({label:i("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(i){i.preventDefault(),this.close(i)}}),t=i("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(t,"ui-dialog-title"),this._title(t),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(i){this.options.title?i.text(this.options.title):i.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=i("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=i("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var t=this,e=this.options.buttons;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),i.isEmptyObject(e)||i.isArray(e)&&!e.length?this._removeClass(this.uiDialog,"ui-dialog-buttons"):(i.each(e,(function(e,o){var s,n;o=i.isFunction(o)?{click:o,text:e}:o,o=i.extend({type:"button"},o),s=o.click,n={icon:o.icon,iconPosition:o.iconPosition,showLabel:o.showLabel,icons:o.icons,text:o.text},delete o.click,delete o.icon,delete o.iconPosition,delete o.showLabel,delete o.icons,"boolean"==typeof o.text&&delete o.text,i("<button></button>",o).button(n).appendTo(t.uiButtonSet).on("click",(function(){s.apply(t.element[0],arguments)}))})),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){var t=this,e=this.options;function o(i){return{position:i.position,offset:i.offset}}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(e,s){t._addClass(i(this),"ui-dialog-dragging"),t._blockFrames(),t._trigger("dragStart",e,o(s))},drag:function(i,e){t._trigger("drag",i,o(e))},stop:function(s,n){var a=n.offset.left-t.document.scrollLeft(),l=n.offset.top-t.document.scrollTop();e.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" top"+(l>=0?"+":"")+l,of:t.window},t._removeClass(i(this),"ui-dialog-dragging"),t._unblockFrames(),t._trigger("dragStop",s,o(n))}})},_makeResizable:function(){var t=this,e=this.options,o=e.resizable,s=this.uiDialog.css("position"),n="string"==typeof o?o:"n,e,s,w,se,sw,ne,nw";function a(i){return{originalPosition:i.originalPosition,originalSize:i.originalSize,position:i.position,size:i.size}}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:this._minHeight(),handles:n,start:function(e,o){t._addClass(i(this),"ui-dialog-resizing"),t._blockFrames(),t._trigger("resizeStart",e,a(o))},resize:function(i,e){t._trigger("resize",i,a(e))},stop:function(o,s){var n=t.uiDialog.offset(),l=n.left-t.document.scrollLeft(),h=n.top-t.document.scrollTop();e.height=t.uiDialog.height(),e.width=t.uiDialog.width(),e.position={my:"left top",at:"left"+(l>=0?"+":"")+l+" top"+(h>=0?"+":"")+h,of:t.window},t._removeClass(i(this),"ui-dialog-resizing"),t._unblockFrames(),t._trigger("resizeStop",o,a(s))}}).css("position",s)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=i(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),e=i.inArray(this,t);-1!==e&&t.splice(e,1)},_trackingInstances:function(){var i=this.document.data("ui-dialog-instances");return i||(i=[],this.document.data("ui-dialog-instances",i)),i},_minHeight:function(){var i=this.options;return"auto"===i.height?i.minHeight:Math.min(i.minHeight,i.height)},_position:function(){var i=this.uiDialog.is(":visible");i||this.uiDialog.show(),this.uiDialog.position(this.options.position),i||this.uiDialog.hide()},_setOptions:function(t){var e=this,o=!1,s={};i.each(t,(function(i,t){e._setOption(i,t),i in e.sizeRelatedOptions&&(o=!0),i in e.resizableRelatedOptions&&(s[i]=t)})),o&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",s)},_setOption:function(t,e){var o,s,n=this.uiDialog;"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:i("<a>").text(""+this.options.closeText).html()}),"draggable"===t&&((o=n.is(":data(ui-draggable)"))&&!e&&n.draggable("destroy"),!o&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&((s=n.is(":data(ui-resizable)"))&&!e&&n.resizable("destroy"),s&&"string"==typeof e&&n.resizable("option","handles",e),s||!1===e||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var i,t,e,o=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),o.minWidth>o.width&&(o.width=o.minWidth),i=this.uiDialog.css({height:"auto",width:o.width}).outerHeight(),t=Math.max(0,o.minHeight-i),e="number"==typeof o.maxHeight?Math.max(0,o.maxHeight-i):"none","auto"===o.height?this.element.css({minHeight:t,maxHeight:e,height:"auto"}):this.element.height(Math.max(0,o.height-i)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map((function(){var t=i(this);return i("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]}))},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return!!i(t.target).closest(".ui-dialog").length||!!i(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=!0;this._delay((function(){t=!1})),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(i){t||this._allowInteraction(i)||(i.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=i("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var i=this.document.data("ui-dialog-overlays")-1;i?this.document.data("ui-dialog-overlays",i):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),!1!==i.uiBackCompat&&i.widget("ui.dialog",i.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(i,t){"dialogClass"===i&&this.uiDialog.removeClass(this.options.dialogClass).addClass(t),this._superApply(arguments)}}),i.ui.dialog}));;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, _, Backbone, JSON, storage) {
  var options = $.extend(drupalSettings.contextual, {
    strings: {
      open: Drupal.t('Open'),
      close: Drupal.t('Close')
    }
  });
  var cachedPermissionsHash = storage.getItem('Drupal.contextual.permissionsHash');
  var permissionsHash = drupalSettings.user.permissionsHash;

  if (cachedPermissionsHash !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage).keys().each(function (key) {
        if (key.substring(0, 18) === 'Drupal.contextual.') {
          storage.removeItem(key);
        }
      });
    }

    storage.setItem('Drupal.contextual.permissionsHash', permissionsHash);
  }

  function adjustIfNestedAndOverlapping($contextual) {
    var $contextuals = $contextual.parents('.contextual-region').eq(-1).find('.contextual');

    if ($contextuals.length <= 1) {
      return;
    }

    var firstTop = $contextuals.eq(0).offset().top;
    var secondTop = $contextuals.eq(1).offset().top;

    if (firstTop === secondTop) {
      var $nestedContextual = $contextuals.eq(1);
      var height = 0;
      var $trigger = $nestedContextual.find('.trigger');
      $trigger.removeClass('visually-hidden');
      height = $nestedContextual.height();
      $trigger.addClass('visually-hidden');
      $nestedContextual.css({
        top: $nestedContextual.position().top + height
      });
    }
  }

  function initContextual($contextual, html) {
    var $region = $contextual.closest('.contextual-region');
    var contextual = Drupal.contextual;
    $contextual.html(html).addClass('contextual').prepend(Drupal.theme('contextualTrigger'));
    var destination = "destination=".concat(Drupal.encodePath(Drupal.url(drupalSettings.path.currentPath)));
    $contextual.find('.contextual-links a').each(function () {
      var url = this.getAttribute('href');
      var glue = url.indexOf('?') === -1 ? '?' : '&';
      this.setAttribute('href', url + glue + destination);
    });
    var model = new contextual.StateModel({
      title: $region.find('h2').eq(0).text().trim()
    });
    var viewOptions = $.extend({
      el: $contextual,
      model: model
    }, options);
    contextual.views.push({
      visual: new contextual.VisualView(viewOptions),
      aural: new contextual.AuralView(viewOptions),
      keyboard: new contextual.KeyboardView(viewOptions)
    });
    contextual.regionViews.push(new contextual.RegionView($.extend({
      el: $region,
      model: model
    }, options)));
    contextual.collection.add(model);
    $(document).trigger('drupalContextualLinkAdded', {
      $el: $contextual,
      $region: $region,
      model: model
    });
    adjustIfNestedAndOverlapping($contextual);
  }

  Drupal.behaviors.contextual = {
    attach: function attach(context) {
      var $context = $(context);
      var $placeholders = $context.find('[data-contextual-id]').once('contextual-render');

      if ($placeholders.length === 0) {
        return;
      }

      var ids = [];
      $placeholders.each(function () {
        ids.push({
          id: $(this).attr('data-contextual-id'),
          token: $(this).attr('data-contextual-token')
        });
      });
      var uncachedIDs = [];
      var uncachedTokens = [];
      ids.forEach(function (contextualID) {
        var html = storage.getItem("Drupal.contextual.".concat(contextualID.id));

        if (html && html.length) {
          window.setTimeout(function () {
            initContextual($context.find("[data-contextual-id=\"".concat(contextualID.id, "\"]:empty")).eq(0), html);
          });
          return;
        }

        uncachedIDs.push(contextualID.id);
        uncachedTokens.push(contextualID.token);
      });

      if (uncachedIDs.length > 0) {
        $.ajax({
          url: Drupal.url('contextual/render'),
          type: 'POST',
          data: {
            'ids[]': uncachedIDs,
            'tokens[]': uncachedTokens
          },
          dataType: 'json',
          success: function success(results) {
            _.each(results, function (html, contextualID) {
              storage.setItem("Drupal.contextual.".concat(contextualID), html);

              if (html.length > 0) {
                $placeholders = $context.find("[data-contextual-id=\"".concat(contextualID, "\"]"));

                for (var i = 0; i < $placeholders.length; i++) {
                  initContextual($placeholders.eq(i), html);
                }
              }
            });
          }
        });
      }
    }
  };
  Drupal.contextual = {
    views: [],
    regionViews: []
  };
  Drupal.contextual.collection = new Backbone.Collection([], {
    model: Drupal.contextual.StateModel
  });

  Drupal.theme.contextualTrigger = function () {
    return '<button class="trigger visually-hidden focusable" type="button"></button>';
  };

  $(document).on('drupalContextualLinkAdded', function (event, data) {
    Drupal.ajax.bindAjaxLinks(data.$el[0]);
  });
})(jQuery, Drupal, drupalSettings, _, Backbone, window.JSON, window.sessionStorage);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.StateModel = Backbone.Model.extend({
    defaults: {
      title: '',
      regionIsHovered: false,
      hasFocus: false,
      isOpen: false,
      isLocked: false
    },
    toggleOpen: function toggleOpen() {
      var newIsOpen = !this.get('isOpen');
      this.set('isOpen', newIsOpen);

      if (newIsOpen) {
        this.focus();
      }

      return this;
    },
    close: function close() {
      this.set('isOpen', false);
      return this;
    },
    focus: function focus() {
      this.set('hasFocus', true);
      var cid = this.cid;
      this.collection.each(function (model) {
        if (model.cid !== cid) {
          model.close().blur();
        }
      });
      return this;
    },
    blur: function blur() {
      if (!this.get('isOpen')) {
        this.set('hasFocus', false);
      }

      return this;
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.AuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.options = options;
      this.listenTo(this.model, 'change', this.render);
      this.render();
    },
    render: function render() {
      var isOpen = this.model.get('isOpen');
      this.$el.find('.contextual-links').prop('hidden', !isOpen);
      this.$el.find('.trigger').text(Drupal.t('@action @title configuration options', {
        '@action': !isOpen ? this.options.strings.open : this.options.strings.close,
        '@title': this.model.get('title')
      })).attr('aria-pressed', isOpen);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.KeyboardView = Backbone.View.extend({
    events: {
      'focus .trigger': 'focus',
      'focus .contextual-links a': 'focus',
      'blur .trigger': function blurTrigger() {
        this.model.blur();
      },
      'blur .contextual-links a': function blurContextualLinksA() {
        var that = this;
        this.timer = window.setTimeout(function () {
          that.model.close().blur();
        }, 150);
      }
    },
    initialize: function initialize() {
      this.timer = NaN;
    },
    focus: function focus() {
      window.clearTimeout(this.timer);
      this.model.focus();
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone, Modernizr) {
  Drupal.contextual.RegionView = Backbone.View.extend({
    events: function events() {
      var mapping = {
        mouseenter: function mouseenter() {
          this.model.set('regionIsHovered', true);
        },
        mouseleave: function mouseleave() {
          this.model.close().blur().set('regionIsHovered', false);
        }
      };

      if (Modernizr.touchevents) {
        mapping = {};
      }

      return mapping;
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change:hasFocus', this.render);
    },
    render: function render() {
      this.$el.toggleClass('focus', this.model.get('hasFocus'));
      return this;
    }
  });
})(Drupal, Backbone, Modernizr);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone, Modernizr) {
  Drupal.contextual.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      var mapping = {
        'click .trigger': function clickTrigger() {
          this.model.toggleOpen();
        },
        'touchend .trigger': touchEndToClick,
        'click .contextual-links a': function clickContextualLinksA() {
          this.model.close().blur();
        },
        'touchend .contextual-links a': touchEndToClick
      };

      if (!Modernizr.touchevents) {
        mapping.mouseenter = function () {
          this.model.focus();
        };
      }

      return mapping;
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function render() {
      var isOpen = this.model.get('isOpen');
      var isVisible = this.model.get('isLocked') || this.model.get('regionIsHovered') || isOpen;
      this.$el.toggleClass('open', isOpen).find('.trigger').toggleClass('visually-hidden', !isVisible);

      if ('isOpen' in this.model.changed) {
        this.$el.closest('.contextual-region').find('.contextual .trigger:not(:first)').toggle(!isOpen);
      }

      return this;
    }
  });
})(Drupal, Backbone, Modernizr);;
/*!
* tabbable 5.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):(e="undefined"!=typeof globalThis?globalThis:e||self,function(){var n=e.tabbable,r=e.tabbable={};t(r),r.noConflict=function(){return e.tabbable=n,r}}())}(this,(function(e){"use strict";var t=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],n=t.join(","),r="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,o=function(e,t,o){var i=Array.prototype.slice.apply(e.querySelectorAll(n));return t&&r.call(e,n)&&i.unshift(e),i=i.filter(o)},i=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName&&"DETAILS"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t},a=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},u=function(e){return"INPUT"===e.tagName},l=function(e){return function(e){return u(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||e.ownerDocument,r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},c=function(e,t){return!(t.disabled||function(e){return u(e)&&"hidden"===e.type}(t)||function(e,t){if("hidden"===getComputedStyle(e).visibility)return!0;var n=r.call(e,"details>summary:first-of-type")?e.parentElement:e;if(r.call(n,"details:not([open]) *"))return!0;if(t&&"full"!==t){if("non-zero-area"===t){var o=e.getBoundingClientRect(),i=o.width,a=o.height;return 0===i&&0===a}}else for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(t,e.displayCheck)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t))},d=function(e,t){return!(!c(e,t)||l(t)||i(t)<0)},f=t.concat("iframe").join(",");e.focusable=function(e,t){return o(e,(t=t||{}).includeContainer,c.bind(null,t))},e.isFocusable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,f)&&c(t,e)},e.isTabbable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,n)&&d(t,e)},e.tabbable=function(e,t){var n=[],r=[];return o(e,(t=t||{}).includeContainer,d.bind(null,t)).forEach((function(e,t){var o=i(e);0===o?n.push(e):r.push({documentOrder:t,tabIndex:o,node:e})})),r.sort(a).map((function(e){return e.node})).concat(n)},Object.defineProperty(e,"__esModule",{value:!0})}));

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return "<div id=\"".concat(id, "\" class=\"progress\" aria-live=\"polite\">") + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };

  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;
    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', "".concat(percentage, "%"));
        $(this.element).find('div.progress__percentage').html("".concat(percentage, "%"));
      }

      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);

      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);
      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      if (this.uri) {
        var pb = this;
        var uri = this.uri;

        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }

        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }

            pb.setProgress(progress.percentage, progress.message, progress.label);
            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError("<pre>".concat(e.message, "</pre>"));
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function ($, window, Drupal, drupalSettings, _ref) {
  var isFocusable = _ref.isFocusable,
      tabbable = _ref.tabbable;
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];

        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = "#".concat(base);
        }

        $(elementSettings.selector).once('drupal-ajax').each(function () {
          elementSettings.element = this;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }

      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });
      Drupal.ajax.bindAjaxLinks(document.body);
      $('.use-ajax-submit').once('ajax').each(function () {
        var elementSettings = {};
        elementSettings.url = $(this.form).attr('action');
        elementSettings.setClick = true;
        elementSettings.event = 'click';
        elementSettings.progress = {
          type: 'throbber'
        };
        elementSettings.base = $(this).attr('id');
        elementSettings.element = this;
        Drupal.ajax(elementSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };

  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode;
    var statusText;
    var responseText;

    if (xmlhttp.status) {
      statusCode = "\n".concat(Drupal.t('An AJAX HTTP error occurred.'), "\n").concat(Drupal.t('HTTP Result Code: !status', {
        '!status': xmlhttp.status
      }));
    } else {
      statusCode = "\n".concat(Drupal.t('An AJAX HTTP request terminated abnormally.'));
    }

    statusCode += "\n".concat(Drupal.t('Debugging information follows.'));
    var pathText = "\n".concat(Drupal.t('Path: !uri', {
      '!uri': uri
    }));
    statusText = '';

    try {
      statusText = "\n".concat(Drupal.t('StatusText: !statusText', {
        '!statusText': $.trim(xmlhttp.statusText)
      }));
    } catch (e) {}

    responseText = '';

    try {
      responseText = "\n".concat(Drupal.t('ResponseText: !responseText', {
        '!responseText': $.trim(xmlhttp.responseText)
      }));
    } catch (e) {}

    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');
    var readyStateText = xmlhttp.status === 0 ? "\n".concat(Drupal.t('ReadyState: !readyState', {
      '!readyState': xmlhttp.readyState
    })) : '';
    customMessage = customMessage ? "\n".concat(Drupal.t('CustomMessage: !customMessage', {
      '!customMessage': customMessage
    })) : '';
    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;
    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }

    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);
    return ajax;
  };

  Drupal.ajax.instances = [];

  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };

  Drupal.ajax.bindAjaxLinks = function (element) {
    $(element).find('.use-ajax').once('ajax').each(function (i, ajaxLink) {
      var $linkElement = $(ajaxLink);
      var elementSettings = {
        progress: {
          type: 'throbber'
        },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink
      };
      var href = $linkElement.attr('href');

      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }

      Drupal.ajax(elementSettings);
    });
  };

  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? "#".concat(base) : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };
    $.extend(this, defaults, elementSettings);
    this.commands = new Drupal.AjaxCommands();
    this.instanceIndex = false;

    if (this.wrapper) {
      this.wrapper = "#".concat(this.wrapper);
    }

    this.element = element;
    this.element_settings = elementSettings;
    this.elementSettings = elementSettings;

    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }

    if (!this.url) {
      var $element = $(this.element);

      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    var originalUrl = this.url;
    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');

    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    var ajax = this;
    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function complete(xmlhttprequest, status) {
        ajax.ajaxing = false;

        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },
      dataType: 'json',
      jsonp: false,
      type: 'POST'
    };

    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }

    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }

    var wrapper = "drupal_".concat(elementSettings.dialogType || 'ajax');

    if (elementSettings.dialogRenderer) {
      wrapper += ".".concat(elementSettings.dialogRenderer);
    }

    ajax.options.url += "".concat(Drupal.ajax.WRAPPER_FORMAT, "=").concat(wrapper);
    $(ajax.element).on(elementSettings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
          '!url': ajax.url
        }));
      }

      return ajax.eventResponse(this, event);
    });

    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };

  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';
  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);
      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert("An error occurred while attempting to process ".concat(this.options.url, ": ").concat(e.message));
      return $.Deferred().reject();
    }
  };

  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;

    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };

  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();
    var ajax = this;

    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert("An error occurred while attempting to process ".concat(ajax.options.url, ": ").concat(e.message));
    }
  };

  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;
    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {};

  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};
      options.extraData.ajax_iframe_upload = '1';
      var v = $.fieldValue(this.element);

      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    var progressIndicatorMethod = "setProgressIndicator".concat(this.progress.type.slice(0, 1).toUpperCase()).concat(this.progress.type.slice(1).toLowerCase());

    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };

  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
    var throbber = '<div class="throbber">&nbsp;</div>';
    return "<div class=\"ajax-progress ajax-progress-throbber\">".concat(throbber).concat(messageMarkup, "</div>");
  };

  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
  };

  Drupal.theme.ajaxProgressMessage = function (message) {
    return "<div class=\"message\">".concat(message, "</div>");
  };

  Drupal.theme.ajaxProgressBar = function ($element) {
    return $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar("ajax-progress-".concat(this.element.id), $.noop, this.progress.method, $.noop);

    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }

    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }

    this.progress.element = $(Drupal.theme('ajaxProgressBar', progressBar.element));
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
    $('body').append(this.progress.element);
  };

  Drupal.Ajax.prototype.success = function (response, status) {
    var _this = this;

    if (this.progress.element) {
      $(this.progress.element).remove();
    }

    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.element).prop('disabled', false);
    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();
    var focusChanged = false;
    Object.keys(response || {}).forEach(function (i) {
      if (response[i].command && _this.commands[response[i].command]) {
        _this.commands[response[i].command](_this, response[i], status);

        if (response[i].command === 'invoke' && response[i].method === 'focus' || response[i].command === 'focusFirst') {
          focusChanged = true;
        }
      }
    });

    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n >= 0; n--) {
        target = document.querySelector("[data-drupal-selector=\"".concat(elementParents[n].getAttribute('data-drupal-selector'), "\"]"));
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    this.settings = null;
  };

  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;
    var effect = {};

    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = "".concat(type, "Toggle");
      effect.hideEffect = "".concat(type, "Toggle");
      effect.showSpeed = speed;
    }

    return effect;
  };

  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }

    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.wrapper).show();
    $(this.element).prop('disabled', false);

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  Drupal.theme.ajaxWrapperNewContent = function ($newContent, ajax, response) {
    return (response.effect || ajax.effect) !== 'none' && $newContent.filter(function (i) {
      return !($newContent[i].nodeName === '#comment' || $newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent));
    }).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
  };

  Drupal.theme.ajaxWrapperMultipleRootElements = function ($elements) {
    return $('<div></div>').append($elements);
  };

  Drupal.AjaxCommands = function () {};

  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);
      var settings = response.settings || ajax.settings || drupalSettings;
      var $newContent = $($.parseHTML(response.data, document, true));
      $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);

      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;

        default:
          break;
      }

      $wrapper[method]($newContent);

      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }

      var $ajaxNewContent = $newContent.find('.ajax-new-content');

      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }

      if ($newContent.parents('html').length) {
        $newContent.each(function (index, element) {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);

      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');

        if (response.asterisk) {
          $element.find(response.asterisk).append(" <abbr class=\"ajax-changed\" title=\"".concat(Drupal.t('Changed'), "\">*</abbr> "));
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text);
    },
    announce: function announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else {
        Drupal.announce(response.text);
      }
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {
          if (instance.selector) {
            var selector = instance.selector.replace('#', '');

            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    focusFirst: function focusFirst(ajax, response, status) {
      var focusChanged = false;
      var container = document.querySelector(response.selector);

      if (container) {
        var tabbableElements = tabbable(container);

        if (tabbableElements.length) {
          tabbableElements[0].focus();
          focusChanged = true;
        } else if (isFocusable(container)) {
          container.focus();
          focusChanged = true;
        }
      }

      if (ajax.hasOwnProperty('element') && !focusChanged) {
        ajax.element.focus();
      }
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      $("input[name=\"form_build_id\"][value=\"".concat(response.old, "\"]")).val(response.new);
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);
    },
    message: function message(ajax, response) {
      var messages = new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));

      if (response.clearPrevious) {
        messages.clear();
      }

      messages.add(response.message, response.messageOptions);
    }
  };
})(jQuery, window, Drupal, drupalSettings, window.tabbable);;
/* eslint-disable func-names */

(function ($, Drupal) {
  Drupal.behaviors.opignoLearningPathGlobal = {
    attach: function (context, settings) {
      if (this.inIframe()) {
        $('html').addClass('inIframe');
      }
    },
    inIframe: function () {
      try {
        return window.self !== window.top;
      }
      catch (e) {
        return true;
      }
    }
  };
}(jQuery, Drupal));
;
/**
 * @file
 * JS UI logic for SCORM player.
 *
 * @see js/lib/player.js
 * @see js/lib/api.js
 */

;(function($, Drupal, window, undefined) {

  Drupal.behaviors.opignoScormIOS13 = {
    attach: function(context, settings) {
      function iOSversion() {
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
          // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
          var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
          return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
        }
      }

      var iOSversion = iOSversion();
      if (typeof iOSversion !== 'undefined' &&
        iOSversion[0] == 13
      ) {
        var $iframe = $('.scorm-ui-player-iframe-wrapper > iframe');
        var defaultIframeHeight = $iframe.height();
        var loop = 0;

        $('.scorm-ui-player-iframe-wrapper')
          .css('height', defaultIframeHeight)
          .css('overflow', 'auto');

        var checkIframe = setInterval(function() {

          var $pageWrap = $iframe
            .contents()
            .find('iframe[name="scormdriver_content"]')
            .contents()
            .find('.page-wrap');

          var $pageOverview = $iframe
            .contents()
            .find('iframe[name="scormdriver_content"]')
            .contents()
            .find('.overview');

          if ($pageWrap.length) {
            loop++;

            var height = ($pageWrap.children('main').length) ? $pageWrap.children('main').outerHeight() : null;

            // Remove min-height: 100vh
            $pageWrap
              .find('.page__wrapper, .quiz__item, .quiz__wrap, .quiz__item--active, .quiz__item-wrap, .quiz-card, .page')
              .css('min-height', 0);

            // Scroll element to top
            if (loop == 1) {
              setTimeout(function() {
                var scrollTop = $pageWrap.scrollTop(0);
                console.log('scroll to top');
              }, 100);
            }

            // Set Iframe height to remove scrollbar
            $iframe
              .height(height)
              .attr('scrolling', 'no');

            // console.log('set iframe height to ' + height + 'px');

            // And remove scrollbar inside scorm
            $pageWrap.css('overflow', 'hidden');
            $pageWrap.find('.quiz-card__container').css('min-height', 0);
          }
          // If quiz home
          else if ($pageOverview.length) {
            $pageOverview
              .css('height', 'auto')
              .css('overflow', 'auto');

            var height = $pageOverview.outerHeight();

            // Set Iframe height to remove scrollbar
            $iframe
              .height(height)
              .attr('scrolling', 'no');

            // console.log('set iframe height to ' + height + 'px');
          }
        }, 500);
      }
    }
  };

})(jQuery, Drupal, window);
;
/*!
 * jQuery Form Plugin
 * version: 4.3.0
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!function(r){"function"==typeof define&&define.amd?define(["jquery"],r):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),r(t),t}:r(jQuery)}(function(q){"use strict";var m=/\r?\n/g,S={};S.fileapi=void 0!==q('<input type="file">').get(0).files,S.formdata=void 0!==window.FormData;var _=!!q.fn.prop;function o(e){var t=e.data;e.isDefaultPrevented()||(e.preventDefault(),q(e.target).closest("form").ajaxSubmit(t))}function i(e){var t=e.target,r=q(t);if(!r.is("[type=submit],[type=image]")){var a=r.closest("[type=submit]");if(0===a.length)return;t=a[0]}var n,o=t.form;"image"===(o.clk=t).type&&(void 0!==e.offsetX?(o.clk_x=e.offsetX,o.clk_y=e.offsetY):"function"==typeof q.fn.offset?(n=r.offset(),o.clk_x=e.pageX-n.left,o.clk_y=e.pageY-n.top):(o.clk_x=e.pageX-t.offsetLeft,o.clk_y=e.pageY-t.offsetTop)),setTimeout(function(){o.clk=o.clk_x=o.clk_y=null},100)}function N(){var e;q.fn.ajaxSubmit.debug&&(e="[jquery.form] "+Array.prototype.join.call(arguments,""),window.console&&window.console.log?window.console.log(e):window.opera&&window.opera.postError&&window.opera.postError(e))}q.fn.attr2=function(){if(!_)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},q.fn.ajaxSubmit=function(M,e,t,r){if(!this.length)return N("ajaxSubmit: skipping submit process - no element selected"),this;var O,a,n,o,X=this;"function"==typeof M?M={success:M}:"string"==typeof M||!1===M&&0<arguments.length?(M={url:M,data:e,dataType:t},"function"==typeof r&&(M.success=r)):void 0===M&&(M={}),O=M.method||M.type||this.attr2("method"),n=(n=(n="string"==typeof(a=M.url||this.attr2("action"))?q.trim(a):"")||window.location.href||"")&&(n.match(/^([^#]+)/)||[])[1],o=/(MSIE|Trident)/.test(navigator.userAgent||"")&&/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",M=q.extend(!0,{url:n,success:q.ajaxSettings.success,type:O||q.ajaxSettings.type,iframeSrc:o},M);var i={};if(this.trigger("form-pre-serialize",[this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(M.beforeSerialize&&!1===M.beforeSerialize(this,M))return N("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var s=M.traditional;void 0===s&&(s=q.ajaxSettings.traditional);var u,c,C=[],l=this.formToArray(M.semantic,C,M.filtering);if(M.data&&(c=q.isFunction(M.data)?M.data(l):M.data,M.extraData=c,u=q.param(c,s)),M.beforeSubmit&&!1===M.beforeSubmit(l,this,M))return N("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[l,this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var f=q.param(l,s);u&&(f=f?f+"&"+u:u),"GET"===M.type.toUpperCase()?(M.url+=(0<=M.url.indexOf("?")?"&":"?")+f,M.data=null):M.data=f;var d,m,p,h=[];M.resetForm&&h.push(function(){X.resetForm()}),M.clearForm&&h.push(function(){X.clearForm(M.includeHidden)}),!M.dataType&&M.target?(d=M.success||function(){},h.push(function(e,t,r){var a=arguments,n=M.replaceTarget?"replaceWith":"html";q(M.target)[n](e).each(function(){d.apply(this,a)})})):M.success&&(q.isArray(M.success)?q.merge(h,M.success):h.push(M.success)),M.success=function(e,t,r){for(var a=M.context||this,n=0,o=h.length;n<o;n++)h[n].apply(a,[e,t,r||X,X])},M.error&&(m=M.error,M.error=function(e,t,r){var a=M.context||this;m.apply(a,[e,t,r,X])}),M.complete&&(p=M.complete,M.complete=function(e,t){var r=M.context||this;p.apply(r,[e,t,X])});var v=0<q("input[type=file]:enabled",this).filter(function(){return""!==q(this).val()}).length,g="multipart/form-data",x=X.attr("enctype")===g||X.attr("encoding")===g,y=S.fileapi&&S.formdata;N("fileAPI :"+y);var b,T=(v||x)&&!y;!1!==M.iframe&&(M.iframe||T)?M.closeKeepAlive?q.get(M.closeKeepAlive,function(){b=w(l)}):b=w(l):b=(v||x)&&y?function(e){for(var r=new FormData,t=0;t<e.length;t++)r.append(e[t].name,e[t].value);if(M.extraData){var a=function(e){var t,r,a=q.param(e,M.traditional).split("&"),n=a.length,o=[];for(t=0;t<n;t++)a[t]=a[t].replace(/\+/g," "),r=a[t].split("="),o.push([decodeURIComponent(r[0]),decodeURIComponent(r[1])]);return o}(M.extraData);for(t=0;t<a.length;t++)a[t]&&r.append(a[t][0],a[t][1])}M.data=null;var n=q.extend(!0,{},q.ajaxSettings,M,{contentType:!1,processData:!1,cache:!1,type:O||"POST"});M.uploadProgress&&(n.xhr=function(){var e=q.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",function(e){var t=0,r=e.loaded||e.position,a=e.total;e.lengthComputable&&(t=Math.ceil(r/a*100)),M.uploadProgress(e,r,a,t)},!1),e});n.data=null;var o=n.beforeSend;return n.beforeSend=function(e,t){M.formData?t.data=M.formData:t.data=r,o&&o.call(this,e,t)},q.ajax(n)}(l):q.ajax(M),X.removeData("jqxhr").data("jqxhr",b);for(var j=0;j<C.length;j++)C[j]=null;return this.trigger("form-submit-notify",[this,M]),this;function w(e){var t,r,l,f,o,d,m,p,a,n,h,v,i=X[0],g=q.Deferred();if(g.abort=function(e){p.abort(e)},e)for(r=0;r<C.length;r++)t=q(C[r]),_?t.prop("disabled",!1):t.removeAttr("disabled");(l=q.extend(!0,{},q.ajaxSettings,M)).context=l.context||l,o="jqFormIO"+(new Date).getTime();var s=i.ownerDocument,u=X.closest("body");if(l.iframeTarget?(n=(d=q(l.iframeTarget,s)).attr2("name"))?o=n:d.attr2("name",o):(d=q('<iframe name="'+o+'" src="'+l.iframeSrc+'" />',s)).css({position:"absolute",top:"-1000px",left:"-1000px"}),m=d[0],p={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(e){var t="timeout"===e?"timeout":"aborted";N("aborting upload... "+t),this.aborted=1;try{m.contentWindow.document.execCommand&&m.contentWindow.document.execCommand("Stop")}catch(e){}d.attr("src",l.iframeSrc),p.error=t,l.error&&l.error.call(l.context,p,t,e),f&&q.event.trigger("ajaxError",[p,l,t]),l.complete&&l.complete.call(l.context,p,t)}},(f=l.global)&&0==q.active++&&q.event.trigger("ajaxStart"),f&&q.event.trigger("ajaxSend",[p,l]),l.beforeSend&&!1===l.beforeSend.call(l.context,p,l))return l.global&&q.active--,g.reject(),g;if(p.aborted)return g.reject(),g;(a=i.clk)&&(n=a.name)&&!a.disabled&&(l.extraData=l.extraData||{},l.extraData[n]=a.value,"image"===a.type&&(l.extraData[n+".x"]=i.clk_x,l.extraData[n+".y"]=i.clk_y));var x=1,y=2;function b(t){var r=null;try{t.contentWindow&&(r=t.contentWindow.document)}catch(e){N("cannot get iframe.contentWindow document: "+e)}if(r)return r;try{r=t.contentDocument?t.contentDocument:t.document}catch(e){N("cannot get iframe.contentDocument: "+e),r=t.document}return r}var c=q("meta[name=csrf-token]").attr("content"),T=q("meta[name=csrf-param]").attr("content");function j(){var e=X.attr2("target"),t=X.attr2("action"),r=X.attr("enctype")||X.attr("encoding")||"multipart/form-data";i.setAttribute("target",o),O&&!/post/i.test(O)||i.setAttribute("method","POST"),t!==l.url&&i.setAttribute("action",l.url),l.skipEncodingOverride||O&&!/post/i.test(O)||X.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),l.timeout&&(v=setTimeout(function(){h=!0,A(x)},l.timeout));var a=[];try{if(l.extraData)for(var n in l.extraData)l.extraData.hasOwnProperty(n)&&(q.isPlainObject(l.extraData[n])&&l.extraData[n].hasOwnProperty("name")&&l.extraData[n].hasOwnProperty("value")?a.push(q('<input type="hidden" name="'+l.extraData[n].name+'">',s).val(l.extraData[n].value).appendTo(i)[0]):a.push(q('<input type="hidden" name="'+n+'">',s).val(l.extraData[n]).appendTo(i)[0]));l.iframeTarget||d.appendTo(u),m.attachEvent?m.attachEvent("onload",A):m.addEventListener("load",A,!1),setTimeout(function e(){try{var t=b(m).readyState;N("state = "+t),t&&"uninitialized"===t.toLowerCase()&&setTimeout(e,50)}catch(e){N("Server abort: ",e," (",e.name,")"),A(y),v&&clearTimeout(v),v=void 0}},15);try{i.submit()}catch(e){document.createElement("form").submit.apply(i)}}finally{i.setAttribute("action",t),i.setAttribute("enctype",r),e?i.setAttribute("target",e):X.removeAttr("target"),q(a).remove()}}T&&c&&(l.extraData=l.extraData||{},l.extraData[T]=c),l.forceSync?j():setTimeout(j,10);var w,S,k,D=50;function A(e){if(!p.aborted&&!k){if((S=b(m))||(N("cannot access response document"),e=y),e===x&&p)return p.abort("timeout"),void g.reject(p,"timeout");if(e===y&&p)return p.abort("server abort"),void g.reject(p,"error","server abort");if(S&&S.location.href!==l.iframeSrc||h){m.detachEvent?m.detachEvent("onload",A):m.removeEventListener("load",A,!1);var t,r="success";try{if(h)throw"timeout";var a="xml"===l.dataType||S.XMLDocument||q.isXMLDoc(S);if(N("isXml="+a),!a&&window.opera&&(null===S.body||!S.body.innerHTML)&&--D)return N("requeing onLoad callback, DOM not available"),void setTimeout(A,250);var n=S.body?S.body:S.documentElement;p.responseText=n?n.innerHTML:null,p.responseXML=S.XMLDocument?S.XMLDocument:S,a&&(l.dataType="xml"),p.getResponseHeader=function(e){return{"content-type":l.dataType}[e.toLowerCase()]},n&&(p.status=Number(n.getAttribute("status"))||p.status,p.statusText=n.getAttribute("statusText")||p.statusText);var o,i,s,u=(l.dataType||"").toLowerCase(),c=/(json|script|text)/.test(u);c||l.textarea?(o=S.getElementsByTagName("textarea")[0])?(p.responseText=o.value,p.status=Number(o.getAttribute("status"))||p.status,p.statusText=o.getAttribute("statusText")||p.statusText):c&&(i=S.getElementsByTagName("pre")[0],s=S.getElementsByTagName("body")[0],i?p.responseText=i.textContent?i.textContent:i.innerText:s&&(p.responseText=s.textContent?s.textContent:s.innerText)):"xml"===u&&!p.responseXML&&p.responseText&&(p.responseXML=F(p.responseText));try{w=E(p,u,l)}catch(e){r="parsererror",p.error=t=e||r}}catch(e){N("error caught: ",e),r="error",p.error=t=e||r}p.aborted&&(N("upload aborted"),r=null),p.status&&(r=200<=p.status&&p.status<300||304===p.status?"success":"error"),"success"===r?(l.success&&l.success.call(l.context,w,"success",p),g.resolve(p.responseText,"success",p),f&&q.event.trigger("ajaxSuccess",[p,l])):r&&(void 0===t&&(t=p.statusText),l.error&&l.error.call(l.context,p,r,t),g.reject(p,"error",t),f&&q.event.trigger("ajaxError",[p,l,t])),f&&q.event.trigger("ajaxComplete",[p,l]),f&&!--q.active&&q.event.trigger("ajaxStop"),l.complete&&l.complete.call(l.context,p,r),k=!0,l.timeout&&clearTimeout(v),setTimeout(function(){l.iframeTarget?d.attr("src",l.iframeSrc):d.remove(),p.responseXML=null},100)}}}var F=q.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},L=q.parseJSON||function(e){return window.eval("("+e+")")},E=function(e,t,r){var a=e.getResponseHeader("content-type")||"",n=("xml"===t||!t)&&0<=a.indexOf("xml"),o=n?e.responseXML:e.responseText;return n&&"parsererror"===o.documentElement.nodeName&&q.error&&q.error("parsererror"),r&&r.dataFilter&&(o=r.dataFilter(o,t)),"string"==typeof o&&(("json"===t||!t)&&0<=a.indexOf("json")?o=L(o):("script"===t||!t)&&0<=a.indexOf("javascript")&&q.globalEval(o)),o};return g}},q.fn.ajaxForm=function(e,t,r,a){if(("string"==typeof e||!1===e&&0<arguments.length)&&(e={url:e,data:t,dataType:r},"function"==typeof a&&(e.success=a)),(e=e||{}).delegation=e.delegation&&q.isFunction(q.fn.on),e.delegation||0!==this.length)return e.delegation?(q(document).off("submit.form-plugin",this.selector,o).off("click.form-plugin",this.selector,i).on("submit.form-plugin",this.selector,e,o).on("click.form-plugin",this.selector,e,i),this):(e.beforeFormUnbind&&e.beforeFormUnbind(this,e),this.ajaxFormUnbind().on("submit.form-plugin",e,o).on("click.form-plugin",e,i));var n={s:this.selector,c:this.context};return!q.isReady&&n.s?(N("DOM not ready, queuing ajaxForm"),q(function(){q(n.s,n.c).ajaxForm(e)})):N("terminating; zero elements found by selector"+(q.isReady?"":" (DOM not ready)")),this},q.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},q.fn.formToArray=function(e,t,r){var a=[];if(0===this.length)return a;var n,o,i,s,u,c,l,f,d,m,p=this[0],h=this.attr("id"),v=(v=e||void 0===p.elements?p.getElementsByTagName("*"):p.elements)&&q.makeArray(v);if(h&&(e||/(Edge|Trident)\//.test(navigator.userAgent))&&(n=q(':input[form="'+h+'"]').get()).length&&(v=(v||[]).concat(n)),!v||!v.length)return a;for(q.isFunction(r)&&(v=q.map(v,r)),o=0,c=v.length;o<c;o++)if((m=(u=v[o]).name)&&!u.disabled)if(e&&p.clk&&"image"===u.type)p.clk===u&&(a.push({name:m,value:q(u).val(),type:u.type}),a.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y}));else if((s=q.fieldValue(u,!0))&&s.constructor===Array)for(t&&t.push(u),i=0,l=s.length;i<l;i++)a.push({name:m,value:s[i]});else if(S.fileapi&&"file"===u.type){t&&t.push(u);var g=u.files;if(g.length)for(i=0;i<g.length;i++)a.push({name:m,value:g[i],type:u.type});else a.push({name:m,value:"",type:u.type})}else null!=s&&(t&&t.push(u),a.push({name:m,value:s,type:u.type,required:u.required}));return e||!p.clk||(m=(d=(f=q(p.clk))[0]).name)&&!d.disabled&&"image"===d.type&&(a.push({name:m,value:f.val()}),a.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y})),a},q.fn.formSerialize=function(e){return q.param(this.formToArray(e))},q.fn.fieldSerialize=function(n){var o=[];return this.each(function(){var e=this.name;if(e){var t=q.fieldValue(this,n);if(t&&t.constructor===Array)for(var r=0,a=t.length;r<a;r++)o.push({name:e,value:t[r]});else null!=t&&o.push({name:this.name,value:t})}}),q.param(o)},q.fn.fieldValue=function(e){for(var t=[],r=0,a=this.length;r<a;r++){var n=this[r],o=q.fieldValue(n,e);null==o||o.constructor===Array&&!o.length||(o.constructor===Array?q.merge(t,o):t.push(o))}return t},q.fieldValue=function(e,t){var r=e.name,a=e.type,n=e.tagName.toLowerCase();if(void 0===t&&(t=!0),t&&(!r||e.disabled||"reset"===a||"button"===a||("checkbox"===a||"radio"===a)&&!e.checked||("submit"===a||"image"===a)&&e.form&&e.form.clk!==e||"select"===n&&-1===e.selectedIndex))return null;if("select"!==n)return q(e).val().replace(m,"\r\n");var o=e.selectedIndex;if(o<0)return null;for(var i=[],s=e.options,u="select-one"===a,c=u?o+1:s.length,l=u?o:0;l<c;l++){var f=s[l];if(f.selected&&!f.disabled){var d=(d=f.value)||(f.attributes&&f.attributes.value&&!f.attributes.value.specified?f.text:f.value);if(u)return d;i.push(d)}}return i},q.fn.clearForm=function(e){return this.each(function(){q("input,select,textarea",this).clearFields(e)})},q.fn.clearFields=q.fn.clearInputs=function(r){var a=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var e=this.type,t=this.tagName.toLowerCase();a.test(e)||"textarea"===t?this.value="":"checkbox"===e||"radio"===e?this.checked=!1:"select"===t?this.selectedIndex=-1:"file"===e?/MSIE/.test(navigator.userAgent)?q(this).replaceWith(q(this).clone(!0)):q(this).val(""):r&&(!0===r&&/hidden/.test(e)||"string"==typeof r&&q(this).is(r))&&(this.value="")})},q.fn.resetForm=function(){return this.each(function(){var t=q(this),e=this.tagName.toLowerCase();switch(e){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var r=t.parents("select");return r.length&&r[0].multiple?"option"===e?this.selected=this.defaultSelected:t.find("option").resetForm():r.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var a=q(t.attr("for")),n=t.find("input,select,textarea");return a[0]&&n.unshift(a[0]),n.resetForm(),!0;case"form":return"function"!=typeof this.reset&&("object"!=typeof this.reset||this.reset.nodeType)||this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},q.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},q.fn.selected=function(r){return void 0===r&&(r=!0),this.each(function(){var e,t=this.type;"checkbox"===t||"radio"===t?this.checked=r:"option"===this.tagName.toLowerCase()&&(e=q(this).parent("select"),r&&e[0]&&"select-one"===e[0].type&&e.find("option").selected(!1),this.selected=r)})},q.fn.ajaxSubmit.debug=!1});

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

Drupal.debounce = function (func, wait, immediate) {
  var timeout;
  var result;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;

    var later = function later() {
      timeout = null;

      if (!immediate) {
        result = func.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      result = func.apply(context, args);
    }

    return result;
  };
};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  var offsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  function getRawOffset(el, edge) {
    var $el = $(el);
    var documentElement = document.documentElement;
    var displacement = 0;
    var horizontal = edge === 'left' || edge === 'right';
    var placement = $el.offset()[horizontal ? 'left' : 'top'];
    placement -= window["scroll".concat(horizontal ? 'X' : 'Y')] || document.documentElement["scroll".concat(horizontal ? 'Left' : 'Top')] || 0;

    switch (edge) {
      case 'top':
        displacement = placement + $el.outerHeight();
        break;

      case 'left':
        displacement = placement + $el.outerWidth();
        break;

      case 'bottom':
        displacement = documentElement.clientHeight - placement;
        break;

      case 'right':
        displacement = documentElement.clientWidth - placement;
        break;

      default:
        displacement = 0;
    }

    return displacement;
  }

  function calculateOffset(edge) {
    var edgeOffset = 0;
    var displacingElements = document.querySelectorAll("[data-offset-".concat(edge, "]"));
    var n = displacingElements.length;

    for (var i = 0; i < n; i++) {
      var el = displacingElements[i];

      if (el.style.display === 'none') {
        continue;
      }

      var displacement = parseInt(el.getAttribute("data-offset-".concat(edge)), 10);

      if (isNaN(displacement)) {
        displacement = getRawOffset(el, edge);
      }

      edgeOffset = Math.max(edgeOffset, displacement);
    }

    return edgeOffset;
  }

  function calculateOffsets() {
    return {
      top: calculateOffset('top'),
      right: calculateOffset('right'),
      bottom: calculateOffset('bottom'),
      left: calculateOffset('left')
    };
  }

  function displace(broadcast) {
    offsets = calculateOffsets();
    Drupal.displace.offsets = offsets;

    if (typeof broadcast === 'undefined' || broadcast) {
      $(document).trigger('drupalViewportOffsetChange', offsets);
    }

    return offsets;
  }

  Drupal.behaviors.drupalDisplace = {
    attach: function attach() {
      if (this.displaceProcessed) {
        return;
      }

      this.displaceProcessed = true;
      $(window).on('resize.drupalDisplace', debounce(displace, 200));
    }
  };
  Drupal.displace = displace;
  $.extend(Drupal.displace, {
    offsets: offsets,
    calculateOffset: calculateOffset
  });
})(jQuery, Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  $.fn.drupalGetSummary = function () {
    var callback = this.data('summaryCallback');
    return this[0] && callback ? $.trim(callback(this[0])) : '';
  };

  $.fn.drupalSetSummary = function (callback) {
    var self = this;

    if (typeof callback !== 'function') {
      var val = callback;

      callback = function callback() {
        return val;
      };
    }

    return this.data('summaryCallback', callback).off('formUpdated.summary').on('formUpdated.summary', function () {
      self.trigger('summaryUpdated');
    }).trigger('summaryUpdated');
  };

  Drupal.behaviors.formSingleSubmit = {
    attach: function attach() {
      function onFormSubmit(e) {
        var $form = $(e.currentTarget);
        var formValues = $form.serialize();
        var previousValues = $form.attr('data-drupal-form-submit-last');

        if (previousValues === formValues) {
          e.preventDefault();
        } else {
          $form.attr('data-drupal-form-submit-last', formValues);
        }
      }

      $('body').once('form-single-submit').on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
    }
  };

  function triggerFormUpdated(element) {
    $(element).trigger('formUpdated');
  }

  function fieldsList(form) {
    var $fieldList = $(form).find('[name]').map(function (index, element) {
      return element.getAttribute('id');
    });
    return $.makeArray($fieldList);
  }

  Drupal.behaviors.formUpdated = {
    attach: function attach(context) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      var $forms = (contextIsForm ? $context : $context.find('form')).once('form-updated');
      var formFields;

      if ($forms.length) {
        $.makeArray($forms).forEach(function (form) {
          var events = 'change.formUpdated input.formUpdated ';
          var eventHandler = debounce(function (event) {
            triggerFormUpdated(event.target);
          }, 300);
          formFields = fieldsList(form).join(',');
          form.setAttribute('data-drupal-form-fields', formFields);
          $(form).on(events, eventHandler);
        });
      }

      if (contextIsForm) {
        formFields = fieldsList(context).join(',');
        var currentFields = $(context).attr('data-drupal-form-fields');

        if (formFields !== currentFields) {
          triggerFormUpdated(context);
        }
      }
    },
    detach: function detach(context, settings, trigger) {
      var $context = $(context);
      var contextIsForm = $context.is('form');

      if (trigger === 'unload') {
        var $forms = (contextIsForm ? $context : $context.find('form')).removeOnce('form-updated');

        if ($forms.length) {
          $.makeArray($forms).forEach(function (form) {
            form.removeAttribute('data-drupal-form-fields');
            $(form).off('.formUpdated');
          });
        }
      }
    }
  };
  Drupal.behaviors.fillUserInfoFromBrowser = {
    attach: function attach(context, settings) {
      var userInfo = ['name', 'mail', 'homepage'];
      var $forms = $('[data-user-info-from-browser]').once('user-info-from-browser');

      if ($forms.length) {
        userInfo.forEach(function (info) {
          var $element = $forms.find("[name=".concat(info, "]"));
          var browserData = localStorage.getItem("Drupal.visitor.".concat(info));
          var emptyOrDefault = $element.val() === '' || $element.attr('data-drupal-default-value') === $element.val();

          if ($element.length && emptyOrDefault && browserData) {
            $element.val(browserData);
          }
        });
      }

      $forms.on('submit', function () {
        userInfo.forEach(function (info) {
          var $element = $forms.find("[name=".concat(info, "]"));

          if ($element.length) {
            localStorage.setItem("Drupal.visitor.".concat(info), $element.val());
          }
        });
      });
    }
  };

  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e) {
    var url;

    if (e.type === 'click') {
      url = e.currentTarget.location ? e.currentTarget.location : e.currentTarget;
    } else {
      url = window.location;
    }

    var hash = url.hash.substr(1);

    if (hash) {
      var $target = $("#".concat(hash));
      $('body').trigger('formFragmentLinkClickOrHashChange', [$target]);
      setTimeout(function () {
        return $target.trigger('focus');
      }, 300);
    }
  };

  var debouncedHandleFragmentLinkClickOrHashChange = debounce(handleFragmentLinkClickOrHashChange, 300, true);
  $(window).on('hashchange.form-fragment', debouncedHandleFragmentLinkClickOrHashChange);
  $(document).on('click.form-fragment', 'a[href*="#"]', debouncedHandleFragmentLinkClickOrHashChange);
})(jQuery, Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, _ref) {
  var isTabbable = _ref.isTabbable;
  $.extend($.expr[':'], {
    tabbable: function tabbable(element) {
      Drupal.deprecationError({
        message: 'The :tabbable selector is deprecated in Drupal 9.2.0 and will be removed in Drupal 10.0.0. Use the core/tabbable library instead. See https://www.drupal.org/node/3183730'
      });

      if (element.tagName === 'SUMMARY' || element.tagName === 'DETAILS') {
        var tabIndex = element.getAttribute('tabIndex');

        if (tabIndex === null || tabIndex < 0) {
          return false;
        }
      }

      return isTabbable(element);
    }
  });
})(jQuery, Drupal, window.tabbable);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($) {
  var cachedScrollbarWidth = null;
  var max = Math.max,
      abs = Math.abs;
  var regexHorizontal = /left|center|right/;
  var regexVertical = /top|center|bottom/;
  var regexOffset = /[+-]\d+(\.[\d]+)?%?/;
  var regexPosition = /^\w+/;
  var regexPercent = /%$/;
  var _position = $.fn.position;

  function getOffsets(offsets, width, height) {
    return [parseFloat(offsets[0]) * (regexPercent.test(offsets[0]) ? width / 100 : 1), parseFloat(offsets[1]) * (regexPercent.test(offsets[1]) ? height / 100 : 1)];
  }

  function parseCss(element, property) {
    return parseInt($.css(element, property), 10) || 0;
  }

  function getDimensions(elem) {
    var raw = elem[0];

    if (raw.nodeType === 9) {
      return {
        width: elem.width(),
        height: elem.height(),
        offset: {
          top: 0,
          left: 0
        }
      };
    }

    if ($.isWindow(raw)) {
      return {
        width: elem.width(),
        height: elem.height(),
        offset: {
          top: elem.scrollTop(),
          left: elem.scrollLeft()
        }
      };
    }

    if (raw.preventDefault) {
      return {
        width: 0,
        height: 0,
        offset: {
          top: raw.pageY,
          left: raw.pageX
        }
      };
    }

    return {
      width: elem.outerWidth(),
      height: elem.outerHeight(),
      offset: elem.offset()
    };
  }

  var collisions = {
    fit: {
      left: function left(position, data) {
        var within = data.within;
        var withinOffset = within.isWindow ? within.scrollLeft : within.offset.left;
        var outerWidth = within.width;
        var collisionPosLeft = position.left - data.collisionPosition.marginLeft;
        var overLeft = withinOffset - collisionPosLeft;
        var overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset;
        var newOverRight;

        if (data.collisionWidth > outerWidth) {
          if (overLeft > 0 && overRight <= 0) {
            newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
            position.left += overLeft - newOverRight;
          } else if (overRight > 0 && overLeft <= 0) {
            position.left = withinOffset;
          } else if (overLeft > overRight) {
            position.left = withinOffset + outerWidth - data.collisionWidth;
          } else {
            position.left = withinOffset;
          }
        } else if (overLeft > 0) {
          position.left += overLeft;
        } else if (overRight > 0) {
          position.left -= overRight;
        } else {
          position.left = max(position.left - collisionPosLeft, position.left);
        }
      },
      top: function top(position, data) {
        var within = data.within;
        var withinOffset = within.isWindow ? within.scrollTop : within.offset.top;
        var outerHeight = data.within.height;
        var collisionPosTop = position.top - data.collisionPosition.marginTop;
        var overTop = withinOffset - collisionPosTop;
        var overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset;
        var newOverBottom;

        if (data.collisionHeight > outerHeight) {
          if (overTop > 0 && overBottom <= 0) {
            newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
            position.top += overTop - newOverBottom;
          } else if (overBottom > 0 && overTop <= 0) {
            position.top = withinOffset;
          } else if (overTop > overBottom) {
            position.top = withinOffset + outerHeight - data.collisionHeight;
          } else {
            position.top = withinOffset;
          }
        } else if (overTop > 0) {
          position.top += overTop;
        } else if (overBottom > 0) {
          position.top -= overBottom;
        } else {
          position.top = max(position.top - collisionPosTop, position.top);
        }
      }
    },
    flip: {
      left: function left(position, data) {
        var within = data.within;
        var withinOffset = within.offset.left + within.scrollLeft;
        var outerWidth = within.width;
        var offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left;
        var collisionPosLeft = position.left - data.collisionPosition.marginLeft;
        var overLeft = collisionPosLeft - offsetLeft;
        var overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft;
        var myOffset = data.my[0] === 'left' ? -data.elemWidth : data.my[0] === 'right' ? data.elemWidth : 0;
        var atOffset = data.at[0] === 'left' ? data.targetWidth : data.at[0] === 'right' ? -data.targetWidth : 0;
        var offset = -2 * data.offset[0];
        var newOverRight;
        var newOverLeft;

        if (overLeft < 0) {
          newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;

          if (newOverRight < 0 || newOverRight < abs(overLeft)) {
            position.left += myOffset + atOffset + offset;
          }
        } else if (overRight > 0) {
          newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;

          if (newOverLeft > 0 || abs(newOverLeft) < overRight) {
            position.left += myOffset + atOffset + offset;
          }
        }
      },
      top: function top(position, data) {
        var within = data.within;
        var withinOffset = within.offset.top + within.scrollTop;
        var outerHeight = within.height;
        var offsetTop = within.isWindow ? within.scrollTop : within.offset.top;
        var collisionPosTop = position.top - data.collisionPosition.marginTop;
        var overTop = collisionPosTop - offsetTop;
        var overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop;
        var top = data.my[1] === 'top';
        var myOffset = top ? -data.elemHeight : data.my[1] === 'bottom' ? data.elemHeight : 0;
        var atOffset = data.at[1] === 'top' ? data.targetHeight : data.at[1] === 'bottom' ? -data.targetHeight : 0;
        var offset = -2 * data.offset[1];
        var newOverTop;
        var newOverBottom;

        if (overTop < 0) {
          newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;

          if (newOverBottom < 0 || newOverBottom < abs(overTop)) {
            position.top += myOffset + atOffset + offset;
          }
        } else if (overBottom > 0) {
          newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;

          if (newOverTop > 0 || abs(newOverTop) < overBottom) {
            position.top += myOffset + atOffset + offset;
          }
        }
      }
    },
    flipfit: {
      left: function left() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        collisions.flip.left.apply(this, args);
        collisions.fit.left.apply(this, args);
      },
      top: function top() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        collisions.flip.top.apply(this, args);
        collisions.fit.top.apply(this, args);
      }
    }
  };
  $.position = {
    scrollbarWidth: function scrollbarWidth() {
      if (cachedScrollbarWidth !== undefined) {
        return cachedScrollbarWidth;
      }

      var div = $('<div ' + "style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>" + "<div style='height:100px;width:auto;'></div></div>");
      var innerDiv = div.children()[0];
      $('body').append(div);
      var w1 = innerDiv.offsetWidth;
      div.css('overflow', 'scroll');
      var w2 = innerDiv.offsetWidth;

      if (w1 === w2) {
        w2 = div[0].clientWidth;
      }

      div.remove();
      cachedScrollbarWidth = w1 - w2;
      return cachedScrollbarWidth;
    },
    getScrollInfo: function getScrollInfo(within) {
      var overflowX = within.isWindow || within.isDocument ? '' : within.element.css('overflow-x');
      var overflowY = within.isWindow || within.isDocument ? '' : within.element.css('overflow-y');
      var hasOverflowX = overflowX === 'scroll' || overflowX === 'auto' && within.width < within.element[0].scrollWidth;
      var hasOverflowY = overflowY === 'scroll' || overflowY === 'auto' && within.height < within.element[0].scrollHeight;
      return {
        width: hasOverflowY ? $.position.scrollbarWidth() : 0,
        height: hasOverflowX ? $.position.scrollbarWidth() : 0
      };
    },
    getWithinInfo: function getWithinInfo(element) {
      var withinElement = $(element || window);
      var isWindow = $.isWindow(withinElement[0]);
      var isDocument = !!withinElement[0] && withinElement[0].nodeType === 9;
      var hasOffset = !isWindow && !isDocument;
      return {
        element: withinElement,
        isWindow: isWindow,
        isDocument: isDocument,
        offset: hasOffset ? $(element).offset() : {
          left: 0,
          top: 0
        },
        scrollLeft: withinElement.scrollLeft(),
        scrollTop: withinElement.scrollTop(),
        width: withinElement.outerWidth(),
        height: withinElement.outerHeight()
      };
    }
  };

  $.fn.position = function (options) {
    if (!options || !options.of) {
      return _position.apply(this, arguments);
    }

    options = $.extend({}, options);
    var within = $.position.getWithinInfo(options.within);
    var scrollInfo = $.position.getScrollInfo(within);
    var collision = (options.collision || 'flip').split(' ');
    var offsets = {};
    var target = $(options.of);
    var dimensions = getDimensions(target);
    var targetWidth = dimensions.width;
    var targetHeight = dimensions.height;
    var targetOffset = dimensions.offset;

    if (target[0].preventDefault) {
      options.at = 'left top';
    }

    var basePosition = $.extend({}, targetOffset);
    $.each(['my', 'at'], function () {
      var pos = (options[this] || '').split(' ');

      if (pos.length === 1) {
        pos = regexHorizontal.test(pos[0]) ? pos.concat(['center']) : regexVertical.test(pos[0]) ? ['center'].concat(pos) : ['center', 'center'];
      }

      pos[0] = regexHorizontal.test(pos[0]) ? pos[0] : 'center';
      pos[1] = regexVertical.test(pos[1]) ? pos[1] : 'center';
      var horizontalOffset = regexOffset.exec(pos[0]);
      var verticalOffset = regexOffset.exec(pos[1]);
      offsets[this] = [horizontalOffset ? horizontalOffset[0] : 0, verticalOffset ? verticalOffset[0] : 0];
      options[this] = [regexPosition.exec(pos[0])[0], regexPosition.exec(pos[1])[0]];
    });

    if (collision.length === 1) {
      collision[1] = collision[0];
    }

    if (options.at[0] === 'right') {
      basePosition.left += targetWidth;
    } else if (options.at[0] === 'center') {
      basePosition.left += targetWidth / 2;
    }

    if (options.at[1] === 'bottom') {
      basePosition.top += targetHeight;
    } else if (options.at[1] === 'center') {
      basePosition.top += targetHeight / 2;
    }

    var atOffset = getOffsets(offsets.at, targetWidth, targetHeight);
    basePosition.left += atOffset[0];
    basePosition.top += atOffset[1];
    return this.each(function () {
      var using;
      var elem = $(this);
      var elemWidth = elem.outerWidth();
      var elemHeight = elem.outerHeight();
      var marginLeft = parseCss(this, 'marginLeft');
      var marginTop = parseCss(this, 'marginTop');
      var collisionWidth = elemWidth + marginLeft + parseCss(this, 'marginRight') + scrollInfo.width;
      var collisionHeight = elemHeight + marginTop + parseCss(this, 'marginBottom') + scrollInfo.height;
      var position = $.extend({}, basePosition);
      var myOffset = getOffsets(offsets.my, elem.outerWidth(), elem.outerHeight());

      if (options.my[0] === 'right') {
        position.left -= elemWidth;
      } else if (options.my[0] === 'center') {
        position.left -= elemWidth / 2;
      }

      if (options.my[1] === 'bottom') {
        position.top -= elemHeight;
      } else if (options.my[1] === 'center') {
        position.top -= elemHeight / 2;
      }

      position.left += myOffset[0];
      position.top += myOffset[1];
      var collisionPosition = {
        marginLeft: marginLeft,
        marginTop: marginTop
      };
      $.each(['left', 'top'], function (i, dir) {
        if (collisions[collision[i]]) {
          collisions[collision[i]][dir](position, {
            targetWidth: targetWidth,
            targetHeight: targetHeight,
            elemWidth: elemWidth,
            elemHeight: elemHeight,
            collisionPosition: collisionPosition,
            collisionWidth: collisionWidth,
            collisionHeight: collisionHeight,
            offset: [atOffset[0] + myOffset[0], atOffset[1] + myOffset[1]],
            my: options.my,
            at: options.at,
            within: within,
            elem: elem
          });
        }
      });

      if (options.using) {
        using = function using(props) {
          var left = targetOffset.left - position.left;
          var right = left + targetWidth - elemWidth;
          var top = targetOffset.top - position.top;
          var bottom = top + targetHeight - elemHeight;
          var feedback = {
            target: {
              element: target,
              left: targetOffset.left,
              top: targetOffset.top,
              width: targetWidth,
              height: targetHeight
            },
            element: {
              element: elem,
              left: position.left,
              top: position.top,
              width: elemWidth,
              height: elemHeight
            },
            horizontal: right < 0 ? 'left' : left > 0 ? 'right' : 'center',
            vertical: bottom < 0 ? 'top' : top > 0 ? 'bottom' : 'middle'
          };

          if (targetWidth < elemWidth && abs(left + right) < targetWidth) {
            feedback.horizontal = 'center';
          }

          if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) {
            feedback.vertical = 'middle';
          }

          if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) {
            feedback.important = 'horizontal';
          } else {
            feedback.important = 'vertical';
          }

          options.using.call(this, props, feedback);
        };
      }

      elem.offset($.extend(position, {
        using: using
      }));
    });
  };

  if (!$.hasOwnProperty('ui')) {
    $.ui = {};
  }

  $.ui.position = collisions;
})(jQuery);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  drupalSettings.dialog = {
    autoOpen: true,
    dialogClass: '',
    buttonClass: 'button',
    buttonPrimaryClass: 'button--primary',
    close: function close(event) {
      Drupal.dialog(event.target).close();
      Drupal.detachBehaviors(event.target, null, 'unload');
    }
  };

  Drupal.dialog = function (element, options) {
    var undef;
    var $element = $(element);
    var dialog = {
      open: false,
      returnValue: undef
    };

    function openDialog(settings) {
      settings = $.extend({}, drupalSettings.dialog, options, settings);
      $(window).trigger('dialog:beforecreate', [dialog, $element, settings]);
      $element.dialog(settings);
      dialog.open = true;
      $(window).trigger('dialog:aftercreate', [dialog, $element, settings]);
    }

    function closeDialog(value) {
      $(window).trigger('dialog:beforeclose', [dialog, $element]);
      $element.dialog('close');
      dialog.returnValue = value;
      dialog.open = false;
      $(window).trigger('dialog:afterclose', [dialog, $element]);
    }

    dialog.show = function () {
      openDialog({
        modal: false
      });
    };

    dialog.showModal = function () {
      openDialog({
        modal: true
      });
    };

    dialog.close = closeDialog;
    return dialog;
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, debounce, displace) {
  drupalSettings.dialog = $.extend({
    autoResize: true,
    maxHeight: '95%'
  }, drupalSettings.dialog);

  function resetPosition(options) {
    var offsets = displace.offsets;
    var left = offsets.left - offsets.right;
    var top = offsets.top - offsets.bottom;
    var leftString = "".concat((left > 0 ? '+' : '-') + Math.abs(Math.round(left / 2)), "px");
    var topString = "".concat((top > 0 ? '+' : '-') + Math.abs(Math.round(top / 2)), "px");
    options.position = {
      my: "center".concat(left !== 0 ? leftString : '', " center").concat(top !== 0 ? topString : ''),
      of: window
    };
    return options;
  }

  function resetSize(event) {
    var positionOptions = ['width', 'height', 'minWidth', 'minHeight', 'maxHeight', 'maxWidth', 'position'];
    var adjustedOptions = {};
    var windowHeight = $(window).height();
    var option;
    var optionValue;
    var adjustedValue;

    for (var n = 0; n < positionOptions.length; n++) {
      option = positionOptions[n];
      optionValue = event.data.settings[option];

      if (optionValue) {
        if (typeof optionValue === 'string' && /%$/.test(optionValue) && /height/i.test(option)) {
          windowHeight -= displace.offsets.top + displace.offsets.bottom;
          adjustedValue = parseInt(0.01 * parseInt(optionValue, 10) * windowHeight, 10);

          if (option === 'height' && event.data.$element.parent().outerHeight() < adjustedValue) {
            adjustedValue = 'auto';
          }

          adjustedOptions[option] = adjustedValue;
        }
      }
    }

    if (!event.data.settings.modal) {
      adjustedOptions = resetPosition(adjustedOptions);
    }

    event.data.$element.dialog('option', adjustedOptions).trigger('dialogContentResize');
  }

  $(window).on({
    'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
      var autoResize = debounce(resetSize, 20);
      var eventData = {
        settings: settings,
        $element: $element
      };

      if (settings.autoResize === true || settings.autoResize === 'true') {
        $element.dialog('option', {
          resizable: false,
          draggable: false
        }).dialog('widget').css('position', 'fixed');
        $(window).on('resize.dialogResize scroll.dialogResize', eventData, autoResize).trigger('resize.dialogResize');
        $(document).on('drupalViewportOffsetChange.dialogResize', eventData, autoResize);
      }
    },
    'dialog:beforeclose': function dialogBeforeclose(event, dialog, $element) {
      $(window).off('.dialogResize');
      $(document).off('.dialogResize');
    }
  });
})(jQuery, Drupal, drupalSettings, Drupal.debounce, Drupal.displace);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _ref) {
  var tabbable = _ref.tabbable,
      isTabbable = _ref.isTabbable;
  $.widget('ui.dialog', $.ui.dialog, {
    options: {
      buttonClass: 'button',
      buttonPrimaryClass: 'button--primary'
    },
    _createButtons: function _createButtons() {
      var opts = this.options;
      var primaryIndex;
      var index;
      var il = opts.buttons.length;

      for (index = 0; index < il; index++) {
        if (opts.buttons[index].primary && opts.buttons[index].primary === true) {
          primaryIndex = index;
          delete opts.buttons[index].primary;
          break;
        }
      }

      this._super();

      var $buttons = this.uiButtonSet.children().addClass(opts.buttonClass);

      if (typeof primaryIndex !== 'undefined') {
        $buttons.eq(index).addClass(opts.buttonPrimaryClass);
      }
    },
    _focusTabbable: function _focusTabbable() {
      var hasFocus = this._focusedElement ? this._focusedElement.get(0) : null;

      if (!hasFocus) {
        hasFocus = this.element.find('[autofocus]').get(0);
      }

      if (!hasFocus) {
        var $elements = [this.element, this.uiDialogButtonPane];

        for (var i = 0; i < $elements.length; i++) {
          var element = $elements[i].get(0);

          if (element) {
            var elementTabbable = tabbable(element);
            hasFocus = elementTabbable.length ? elementTabbable[0] : null;
          }

          if (hasFocus) {
            break;
          }
        }
      }

      if (!hasFocus) {
        var closeBtn = this.uiDialogTitlebarClose.get(0);
        hasFocus = closeBtn && isTabbable(closeBtn) ? closeBtn : null;
      }

      if (!hasFocus) {
        hasFocus = this.uiDialog.get(0);
      }

      $(hasFocus).eq(0).trigger('focus');
    }
  });
})(jQuery, window.tabbable);;
/**
 * @popperjs/core v2.9.2 - MIT License
 */

"use strict";!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Popper={})}(this,(function(e){function t(e){return{width:(e=e.getBoundingClientRect()).width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function n(e){return null==e?window:"[object Window]"!==e.toString()?(e=e.ownerDocument)&&e.defaultView||window:e}function o(e){return{scrollLeft:(e=n(e)).pageXOffset,scrollTop:e.pageYOffset}}function r(e){return e instanceof n(e).Element||e instanceof Element}function i(e){return e instanceof n(e).HTMLElement||e instanceof HTMLElement}function a(e){return"undefined"!=typeof ShadowRoot&&(e instanceof n(e).ShadowRoot||e instanceof ShadowRoot)}function s(e){return e?(e.nodeName||"").toLowerCase():null}function f(e){return((r(e)?e.ownerDocument:e.document)||window.document).documentElement}function p(e){return t(f(e)).left+o(e).scrollLeft}function c(e){return n(e).getComputedStyle(e)}function l(e){return e=c(e),/auto|scroll|overlay|hidden/.test(e.overflow+e.overflowY+e.overflowX)}function u(e,r,a){void 0===a&&(a=!1);var c=f(r);e=t(e);var u=i(r),d={scrollLeft:0,scrollTop:0},m={x:0,y:0};return(u||!u&&!a)&&(("body"!==s(r)||l(c))&&(d=r!==n(r)&&i(r)?{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}:o(r)),i(r)?((m=t(r)).x+=r.clientLeft,m.y+=r.clientTop):c&&(m.x=p(c))),{x:e.left+d.scrollLeft-m.x,y:e.top+d.scrollTop-m.y,width:e.width,height:e.height}}function d(e){var n=t(e),o=e.offsetWidth,r=e.offsetHeight;return 1>=Math.abs(n.width-o)&&(o=n.width),1>=Math.abs(n.height-r)&&(r=n.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:r}}function m(e){return"html"===s(e)?e:e.assignedSlot||e.parentNode||(a(e)?e.host:null)||f(e)}function h(e){return 0<=["html","body","#document"].indexOf(s(e))?e.ownerDocument.body:i(e)&&l(e)?e:h(m(e))}function v(e,t){var o;void 0===t&&(t=[]);var r=h(e);return e=r===(null==(o=e.ownerDocument)?void 0:o.body),o=n(r),r=e?[o].concat(o.visualViewport||[],l(r)?r:[]):r,t=t.concat(r),e?t:t.concat(v(m(r)))}function g(e){return i(e)&&"fixed"!==c(e).position?e.offsetParent:null}function y(e){for(var t=n(e),o=g(e);o&&0<=["table","td","th"].indexOf(s(o))&&"static"===c(o).position;)o=g(o);if(o&&("html"===s(o)||"body"===s(o)&&"static"===c(o).position))return t;if(!o)e:{if(o=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),-1===navigator.userAgent.indexOf("Trident")||!i(e)||"fixed"!==c(e).position)for(e=m(e);i(e)&&0>["html","body"].indexOf(s(e));){var r=c(e);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||o&&"filter"===r.willChange||o&&r.filter&&"none"!==r.filter){o=e;break e}e=e.parentNode}o=null}return o||t}function b(e){function t(e){o.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){o.has(e)||(e=n.get(e))&&t(e)})),r.push(e)}var n=new Map,o=new Set,r=[];return e.forEach((function(e){n.set(e.name,e)})),e.forEach((function(e){o.has(e.name)||t(e)})),r}function w(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function x(e){return e.split("-")[0]}function O(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&a(n))do{if(t&&e.isSameNode(t))return!0;t=t.parentNode||t.host}while(t);return!1}function j(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function E(e,r){if("viewport"===r){r=n(e);var a=f(e);r=r.visualViewport;var s=a.clientWidth;a=a.clientHeight;var l=0,u=0;r&&(s=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(l=r.offsetLeft,u=r.offsetTop)),e=j(e={width:s,height:a,x:l+p(e),y:u})}else i(r)?((e=t(r)).top+=r.clientTop,e.left+=r.clientLeft,e.bottom=e.top+r.clientHeight,e.right=e.left+r.clientWidth,e.width=r.clientWidth,e.height=r.clientHeight,e.x=e.left,e.y=e.top):(u=f(e),e=f(u),s=o(u),r=null==(a=u.ownerDocument)?void 0:a.body,a=_(e.scrollWidth,e.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),l=_(e.scrollHeight,e.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),u=-s.scrollLeft+p(u),s=-s.scrollTop,"rtl"===c(r||e).direction&&(u+=_(e.clientWidth,r?r.clientWidth:0)-a),e=j({width:a,height:l,x:u,y:s}));return e}function D(e,t,n){return t="clippingParents"===t?function(e){var t=v(m(e)),n=0<=["absolute","fixed"].indexOf(c(e).position)&&i(e)?y(e):e;return r(n)?t.filter((function(e){return r(e)&&O(e,n)&&"body"!==s(e)})):[]}(e):[].concat(t),(n=(n=[].concat(t,[n])).reduce((function(t,n){return n=E(e,n),t.top=_(n.top,t.top),t.right=U(n.right,t.right),t.bottom=U(n.bottom,t.bottom),t.left=_(n.left,t.left),t}),E(e,n[0]))).width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}function L(e){return 0<=["top","bottom"].indexOf(e)?"x":"y"}function P(e){var t=e.reference,n=e.element,o=(e=e.placement)?x(e):null;e=e?e.split("-")[1]:null;var r=t.x+t.width/2-n.width/2,i=t.y+t.height/2-n.height/2;switch(o){case"top":r={x:r,y:t.y-n.height};break;case"bottom":r={x:r,y:t.y+t.height};break;case"right":r={x:t.x+t.width,y:i};break;case"left":r={x:t.x-n.width,y:i};break;default:r={x:t.x,y:t.y}}if(null!=(o=o?L(o):null))switch(i="y"===o?"height":"width",e){case"start":r[o]-=t[i]/2-n[i]/2;break;case"end":r[o]+=t[i]/2-n[i]/2}return r}function M(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function k(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function A(e,n){void 0===n&&(n={});var o=n;n=void 0===(n=o.placement)?e.placement:n;var i=o.boundary,a=void 0===i?"clippingParents":i,s=void 0===(i=o.rootBoundary)?"viewport":i;i=void 0===(i=o.elementContext)?"popper":i;var p=o.altBoundary,c=void 0!==p&&p;o=M("number"!=typeof(o=void 0===(o=o.padding)?0:o)?o:k(o,C));var l=e.elements.reference;p=e.rects.popper,a=D(r(c=e.elements[c?"popper"===i?"reference":"popper":i])?c:c.contextElement||f(e.elements.popper),a,s),c=P({reference:s=t(l),element:p,strategy:"absolute",placement:n}),p=j(Object.assign({},p,c)),s="popper"===i?p:s;var u={top:a.top-s.top+o.top,bottom:s.bottom-a.bottom+o.bottom,left:a.left-s.left+o.left,right:s.right-a.right+o.right};if(e=e.modifiersData.offset,"popper"===i&&e){var d=e[n];Object.keys(u).forEach((function(e){var t=0<=["right","bottom"].indexOf(e)?1:-1,n=0<=["top","bottom"].indexOf(e)?"y":"x";u[e]+=d[n]*t}))}return u}function W(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function B(e){void 0===e&&(e={});var t=e.defaultModifiers,n=void 0===t?[]:t,o=void 0===(e=e.defaultOptions)?F:e;return function(e,t,i){function a(){f.forEach((function(e){return e()})),f=[]}void 0===i&&(i=o);var s={placement:"bottom",orderedModifiers:[],options:Object.assign({},F,o),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],p=!1,c={state:s,setOptions:function(i){return a(),s.options=Object.assign({},o,s.options,i),s.scrollParents={reference:r(e)?v(e):e.contextElement?v(e.contextElement):[],popper:v(t)},i=function(e){var t=b(e);return I.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,s.options.modifiers))),s.orderedModifiers=i.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options;n=void 0===n?{}:n,"function"==typeof(e=e.effect)&&(t=e({state:s,name:t,instance:c,options:n}),f.push(t||function(){}))})),c.update()},forceUpdate:function(){if(!p){var e=s.elements,t=e.reference;if(W(t,e=e.popper))for(s.rects={reference:u(t,y(e),"fixed"===s.options.strategy),popper:d(e)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)})),t=0;t<s.orderedModifiers.length;t++)if(!0===s.reset)s.reset=!1,t=-1;else{var n=s.orderedModifiers[t];e=n.fn;var o=n.options;o=void 0===o?{}:o,n=n.name,"function"==typeof e&&(s=e({state:s,options:o,name:n,instance:c})||s)}}},update:w((function(){return new Promise((function(e){c.forceUpdate(),e(s)}))})),destroy:function(){a(),p=!0}};return W(e,t)?(c.setOptions(i).then((function(e){!p&&i.onFirstUpdate&&i.onFirstUpdate(e)})),c):c}}function T(e){var t,o=e.popper,r=e.popperRect,i=e.placement,a=e.offsets,s=e.position,p=e.gpuAcceleration,l=e.adaptive;if(!0===(e=e.roundOffsets)){e=a.y;var u=window.devicePixelRatio||1;e={x:z(z(a.x*u)/u)||0,y:z(z(e*u)/u)||0}}else e="function"==typeof e?e(a):a;e=void 0===(e=(u=e).x)?0:e,u=void 0===(u=u.y)?0:u;var d=a.hasOwnProperty("x");a=a.hasOwnProperty("y");var m,h="left",v="top",g=window;if(l){var b=y(o),w="clientHeight",x="clientWidth";b===n(o)&&("static"!==c(b=f(o)).position&&(w="scrollHeight",x="scrollWidth")),"top"===i&&(v="bottom",u-=b[w]-r.height,u*=p?1:-1),"left"===i&&(h="right",e-=b[x]-r.width,e*=p?1:-1)}return o=Object.assign({position:s},l&&J),p?Object.assign({},o,((m={})[v]=a?"0":"",m[h]=d?"0":"",m.transform=2>(g.devicePixelRatio||1)?"translate("+e+"px, "+u+"px)":"translate3d("+e+"px, "+u+"px, 0)",m)):Object.assign({},o,((t={})[v]=a?u+"px":"",t[h]=d?e+"px":"",t.transform="",t))}function H(e){return e.replace(/left|right|bottom|top/g,(function(e){return $[e]}))}function R(e){return e.replace(/start|end/g,(function(e){return ee[e]}))}function S(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function q(e){return["top","right","bottom","left"].some((function(t){return 0<=e[t]}))}var C=["top","bottom","right","left"],N=C.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),V=[].concat(C,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),I="beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),_=Math.max,U=Math.min,z=Math.round,F={placement:"bottom",modifiers:[],strategy:"absolute"},X={passive:!0},Y={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,o=e.instance,r=(e=e.options).scroll,i=void 0===r||r,a=void 0===(e=e.resize)||e,s=n(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach((function(e){e.addEventListener("scroll",o.update,X)})),a&&s.addEventListener("resize",o.update,X),function(){i&&f.forEach((function(e){e.removeEventListener("scroll",o.update,X)})),a&&s.removeEventListener("resize",o.update,X)}},data:{}},G={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state;t.modifiersData[e.name]=P({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},J={top:"auto",right:"auto",bottom:"auto",left:"auto"},K={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options;e=void 0===(e=n.gpuAcceleration)||e;var o=n.adaptive;o=void 0===o||o,n=void 0===(n=n.roundOffsets)||n,e={placement:x(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:e},null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,T(Object.assign({},e,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:n})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,T(Object.assign({},e,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:n})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},Q={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];i(r)&&s(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],r=t.attributes[e]||{};e=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{}),i(o)&&s(o)&&(Object.assign(o.style,e),Object.keys(r).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]},Z={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.name,o=void 0===(e=e.options.offset)?[0,0]:e,r=(e=V.reduce((function(e,n){var r=t.rects,i=x(n),a=0<=["left","top"].indexOf(i)?-1:1,s="function"==typeof o?o(Object.assign({},r,{placement:n})):o;return r=(r=s[0])||0,s=((s=s[1])||0)*a,i=0<=["left","right"].indexOf(i)?{x:s,y:r}:{x:r,y:s},e[n]=i,e}),{}))[t.placement],i=r.x;r=r.y,null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=r),t.modifiersData[n]=e}},$={left:"right",right:"left",bottom:"top",top:"bottom"},ee={start:"end",end:"start"},te={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options;if(e=e.name,!t.modifiersData[e]._skip){var o=n.mainAxis;o=void 0===o||o;var r=n.altAxis;r=void 0===r||r;var i=n.fallbackPlacements,a=n.padding,s=n.boundary,f=n.rootBoundary,p=n.altBoundary,c=n.flipVariations,l=void 0===c||c,u=n.allowedAutoPlacements;c=x(n=t.options.placement),i=i||(c!==n&&l?function(e){if("auto"===x(e))return[];var t=H(e);return[R(e),t,R(t)]}(n):[H(n)]);var d=[n].concat(i).reduce((function(e,n){return e.concat("auto"===x(n)?function(e,t){void 0===t&&(t={});var n=t.boundary,o=t.rootBoundary,r=t.padding,i=t.flipVariations,a=t.allowedAutoPlacements,s=void 0===a?V:a,f=t.placement.split("-")[1];0===(i=(t=f?i?N:N.filter((function(e){return e.split("-")[1]===f})):C).filter((function(e){return 0<=s.indexOf(e)}))).length&&(i=t);var p=i.reduce((function(t,i){return t[i]=A(e,{placement:i,boundary:n,rootBoundary:o,padding:r})[x(i)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}(t,{placement:n,boundary:s,rootBoundary:f,padding:a,flipVariations:l,allowedAutoPlacements:u}):n)}),[]);n=t.rects.reference,i=t.rects.popper;var m=new Map;c=!0;for(var h=d[0],v=0;v<d.length;v++){var g=d[v],y=x(g),b="start"===g.split("-")[1],w=0<=["top","bottom"].indexOf(y),O=w?"width":"height",j=A(t,{placement:g,boundary:s,rootBoundary:f,altBoundary:p,padding:a});if(b=w?b?"right":"left":b?"bottom":"top",n[O]>i[O]&&(b=H(b)),O=H(b),w=[],o&&w.push(0>=j[y]),r&&w.push(0>=j[b],0>=j[O]),w.every((function(e){return e}))){h=g,c=!1;break}m.set(g,w)}if(c)for(o=function(e){var t=d.find((function(t){if(t=m.get(t))return t.slice(0,e).every((function(e){return e}))}));if(t)return h=t,"break"},r=l?3:1;0<r&&"break"!==o(r);r--);t.placement!==h&&(t.modifiersData[e]._skip=!0,t.placement=h,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},ne={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options;e=e.name;var o=n.mainAxis,r=void 0===o||o,i=void 0!==(o=n.altAxis)&&o;o=void 0===(o=n.tether)||o;var a=n.tetherOffset,s=void 0===a?0:a,f=A(t,{boundary:n.boundary,rootBoundary:n.rootBoundary,padding:n.padding,altBoundary:n.altBoundary});n=x(t.placement);var p=t.placement.split("-")[1],c=!p,l=L(n);n="x"===l?"y":"x",a=t.modifiersData.popperOffsets;var u=t.rects.reference,m=t.rects.popper,h="function"==typeof s?s(Object.assign({},t.rects,{placement:t.placement})):s;if(s={x:0,y:0},a){if(r||i){var v="y"===l?"top":"left",g="y"===l?"bottom":"right",b="y"===l?"height":"width",w=a[l],O=a[l]+f[v],j=a[l]-f[g],E=o?-m[b]/2:0,D="start"===p?u[b]:m[b];p="start"===p?-m[b]:-u[b],m=t.elements.arrow,m=o&&m?d(m):{width:0,height:0};var P=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0};v=P[v],g=P[g],m=_(0,U(u[b],m[b])),D=c?u[b]/2-E-m-v-h:D-m-v-h,u=c?-u[b]/2+E+m+g+h:p+m+g+h,c=t.elements.arrow&&y(t.elements.arrow),h=t.modifiersData.offset?t.modifiersData.offset[t.placement][l]:0,c=a[l]+D-h-(c?"y"===l?c.clientTop||0:c.clientLeft||0:0),u=a[l]+u-h,r&&(r=o?U(O,c):O,j=o?_(j,u):j,r=_(r,U(w,j)),a[l]=r,s[l]=r-w),i&&(r=(i=a[n])+f["x"===l?"top":"left"],f=i-f["x"===l?"bottom":"right"],r=o?U(r,c):r,o=o?_(f,u):f,o=_(r,U(i,o)),a[n]=o,s[n]=o-i)}t.modifiersData[e]=s}},requiresIfExists:["offset"]},oe={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,o=e.name,r=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=x(n.placement);if(e=L(s),s=0<=["left","right"].indexOf(s)?"height":"width",i&&a){r=M("number"!=typeof(r="function"==typeof(r=r.padding)?r(Object.assign({},n.rects,{placement:n.placement})):r)?r:k(r,C));var f=d(i),p="y"===e?"top":"left",c="y"===e?"bottom":"right",l=n.rects.reference[s]+n.rects.reference[e]-a[e]-n.rects.popper[s];a=a[e]-n.rects.reference[e],a=(i=(i=y(i))?"y"===e?i.clientHeight||0:i.clientWidth||0:0)/2-f[s]/2+(l/2-a/2),s=_(r[p],U(a,i-f[s]-r[c])),n.modifiersData[o]=((t={})[e]=s,t.centerOffset=s-a,t)}},effect:function(e){var t=e.state;if(null!=(e=void 0===(e=e.options.element)?"[data-popper-arrow]":e)){if("string"==typeof e&&!(e=t.elements.popper.querySelector(e)))return;O(t.elements.popper,e)&&(t.elements.arrow=e)}},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},re={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state;e=e.name;var n=t.rects.reference,o=t.rects.popper,r=t.modifiersData.preventOverflow,i=A(t,{elementContext:"reference"}),a=A(t,{altBoundary:!0});n=S(i,n),o=S(a,o,r),r=q(n),a=q(o),t.modifiersData[e]={referenceClippingOffsets:n,popperEscapeOffsets:o,isReferenceHidden:r,hasPopperEscaped:a},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":r,"data-popper-escaped":a})}},ie=B({defaultModifiers:[Y,G,K,Q]}),ae=[Y,G,K,Q,Z,te,ne,oe,re],se=B({defaultModifiers:ae});e.applyStyles=Q,e.arrow=oe,e.computeStyles=K,e.createPopper=se,e.createPopperLite=ie,e.defaultModifiers=ae,e.detectOverflow=A,e.eventListeners=Y,e.flip=te,e.hide=re,e.offset=Z,e.popperGenerator=B,e.popperOffsets=G,e.preventOverflow=ne,Object.defineProperty(e,"__esModule",{value:!0})}));

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal, drupalSettings, JSON, storage) {
  var options = $.extend(drupalSettings.quickedit, {
    strings: {
      quickEdit: Drupal.t('Quick edit')
    }
  });
  var fieldsMetadataQueue = [];
  var fieldsAvailableQueue = [];
  var contextualLinksQueue = [];
  var entityInstancesTracker = {};

  function initQuickEdit(bodyElement) {
    Drupal.quickedit.collections.entities = new Drupal.quickedit.EntityCollection();
    Drupal.quickedit.collections.fields = new Drupal.quickedit.FieldCollection();
    Drupal.quickedit.app = new Drupal.quickedit.AppView({
      el: bodyElement,
      model: new Drupal.quickedit.AppModel(),
      entitiesCollection: Drupal.quickedit.collections.entities,
      fieldsCollection: Drupal.quickedit.collections.fields
    });
  }

  function processEntity(entityElement) {
    var entityID = entityElement.getAttribute('data-quickedit-entity-id');

    if (!entityInstancesTracker.hasOwnProperty(entityID)) {
      entityInstancesTracker[entityID] = 0;
    } else {
      entityInstancesTracker[entityID]++;
    }

    var entityInstanceID = entityInstancesTracker[entityID];
    entityElement.setAttribute('data-quickedit-entity-instance-id', entityInstanceID);
  }

  function initializeField(fieldElement, fieldID, entityID, entityInstanceID) {
    var entity = Drupal.quickedit.collections.entities.findWhere({
      entityID: entityID,
      entityInstanceID: entityInstanceID
    });
    $(fieldElement).addClass('quickedit-field');
    var field = new Drupal.quickedit.FieldModel({
      el: fieldElement,
      fieldID: fieldID,
      id: "".concat(fieldID, "[").concat(entity.get('entityInstanceID'), "]"),
      entity: entity,
      metadata: Drupal.quickedit.metadata.get(fieldID),
      acceptStateChange: _.bind(Drupal.quickedit.app.acceptEditorStateChange, Drupal.quickedit.app)
    });
    Drupal.quickedit.collections.fields.add(field);
  }

  function loadMissingEditors(callback) {
    var loadedEditors = _.keys(Drupal.quickedit.editors);

    var missingEditors = [];
    Drupal.quickedit.collections.fields.each(function (fieldModel) {
      var metadata = Drupal.quickedit.metadata.get(fieldModel.get('fieldID'));

      if (metadata.access && _.indexOf(loadedEditors, metadata.editor) === -1) {
        missingEditors.push(metadata.editor);
        Drupal.quickedit.editors[metadata.editor] = false;
      }
    });
    missingEditors = _.uniq(missingEditors);

    if (missingEditors.length === 0) {
      callback();
      return;
    }

    var loadEditorsAjax = Drupal.ajax({
      url: Drupal.url('quickedit/attachments'),
      submit: {
        'editors[]': missingEditors
      }
    });
    var realInsert = Drupal.AjaxCommands.prototype.insert;

    loadEditorsAjax.commands.insert = function (ajax, response, status) {
      _.defer(callback);

      realInsert(ajax, response, status);
    };

    loadEditorsAjax.execute();
  }

  function initializeEntityContextualLink(contextualLink) {
    var metadata = Drupal.quickedit.metadata;

    function hasFieldWithPermission(fieldIDs) {
      for (var i = 0; i < fieldIDs.length; i++) {
        var fieldID = fieldIDs[i];

        if (metadata.get(fieldID, 'access') === true) {
          return true;
        }
      }

      return false;
    }

    function allMetadataExists(fieldIDs) {
      return fieldIDs.length === metadata.intersection(fieldIDs).length;
    }

    var fields = _.where(fieldsAvailableQueue, {
      entityID: contextualLink.entityID,
      entityInstanceID: contextualLink.entityInstanceID
    });

    var fieldIDs = _.pluck(fields, 'fieldID');

    if (fieldIDs.length === 0) {
      return false;
    }

    if (hasFieldWithPermission(fieldIDs)) {
      var entityModel = new Drupal.quickedit.EntityModel({
        el: contextualLink.region,
        entityID: contextualLink.entityID,
        entityInstanceID: contextualLink.entityInstanceID,
        id: "".concat(contextualLink.entityID, "[").concat(contextualLink.entityInstanceID, "]"),
        label: Drupal.quickedit.metadata.get(contextualLink.entityID, 'label')
      });
      Drupal.quickedit.collections.entities.add(entityModel);
      var entityDecorationView = new Drupal.quickedit.EntityDecorationView({
        el: contextualLink.region,
        model: entityModel
      });
      entityModel.set('entityDecorationView', entityDecorationView);

      _.each(fields, function (field) {
        initializeField(field.el, field.fieldID, contextualLink.entityID, contextualLink.entityInstanceID);
      });

      fieldsAvailableQueue = _.difference(fieldsAvailableQueue, fields);

      var initContextualLink = _.once(function () {
        var $links = $(contextualLink.el).find('.contextual-links');
        var contextualLinkView = new Drupal.quickedit.ContextualLinkView($.extend({
          el: $('<li class="quickedit"><a href="" role="button" aria-pressed="false"></a></li>').prependTo($links),
          model: entityModel,
          appModel: Drupal.quickedit.app.model
        }, options));
        entityModel.set('contextualLinkView', contextualLinkView);
      });

      loadMissingEditors(initContextualLink);
      return true;
    }

    if (allMetadataExists(fieldIDs)) {
      return true;
    }

    return false;
  }

  function extractEntityID(fieldID) {
    return fieldID.split('/').slice(0, 2).join('/');
  }

  function processField(fieldElement) {
    var metadata = Drupal.quickedit.metadata;
    var fieldID = fieldElement.getAttribute('data-quickedit-field-id');
    var entityID = extractEntityID(fieldID);
    var entityElementSelector = "[data-quickedit-entity-id=\"".concat(entityID, "\"]");
    var $entityElement = $(entityElementSelector);

    if (!$entityElement.length) {
      throw new Error("Quick Edit could not associate the rendered entity field markup (with [data-quickedit-field-id=\"".concat(fieldID, "\"]) with the corresponding rendered entity markup: no parent DOM node found with [data-quickedit-entity-id=\"").concat(entityID, "\"]. This is typically caused by the theme's template for this entity type forgetting to print the attributes."));
    }

    var entityElement = $(fieldElement).closest($entityElement);

    if (entityElement.length === 0) {
      var $lowestCommonParent = $entityElement.parents().has(fieldElement).first();
      entityElement = $lowestCommonParent.find($entityElement);
    }

    var entityInstanceID = entityElement.get(0).getAttribute('data-quickedit-entity-instance-id');

    if (!metadata.has(fieldID)) {
      fieldsMetadataQueue.push({
        el: fieldElement,
        fieldID: fieldID,
        entityID: entityID,
        entityInstanceID: entityInstanceID
      });
      return;
    }

    if (metadata.get(fieldID, 'access') !== true) {
      return;
    }

    if (Drupal.quickedit.collections.entities.findWhere({
      entityID: entityID,
      entityInstanceID: entityInstanceID
    })) {
      initializeField(fieldElement, fieldID, entityID, entityInstanceID);
    } else {
        fieldsAvailableQueue.push({
          el: fieldElement,
          fieldID: fieldID,
          entityID: entityID,
          entityInstanceID: entityInstanceID
        });
      }
  }

  function deleteContainedModelsAndQueues($context) {
    $context.find('[data-quickedit-entity-id]').addBack('[data-quickedit-entity-id]').each(function (index, entityElement) {
      var entityModel = Drupal.quickedit.collections.entities.findWhere({
        el: entityElement
      });

      if (entityModel) {
        var contextualLinkView = entityModel.get('contextualLinkView');
        contextualLinkView.undelegateEvents();
        contextualLinkView.remove();
        entityModel.get('entityDecorationView').remove();
        entityModel.destroy();
      }

      function hasOtherRegion(contextualLink) {
        return contextualLink.region !== entityElement;
      }

      contextualLinksQueue = _.filter(contextualLinksQueue, hasOtherRegion);
    });
    $context.find('[data-quickedit-field-id]').addBack('[data-quickedit-field-id]').each(function (index, fieldElement) {
      Drupal.quickedit.collections.fields.chain().filter(function (fieldModel) {
        return fieldModel.get('el') === fieldElement;
      }).invoke('destroy');

      function hasOtherFieldElement(field) {
        return field.el !== fieldElement;
      }

      fieldsMetadataQueue = _.filter(fieldsMetadataQueue, hasOtherFieldElement);
      fieldsAvailableQueue = _.filter(fieldsAvailableQueue, hasOtherFieldElement);
    });
  }

  function fetchMissingMetadata(callback) {
    if (fieldsMetadataQueue.length) {
      var fieldIDs = _.pluck(fieldsMetadataQueue, 'fieldID');

      var fieldElementsWithoutMetadata = _.pluck(fieldsMetadataQueue, 'el');

      var entityIDs = _.uniq(_.pluck(fieldsMetadataQueue, 'entityID'), true);

      entityIDs = _.difference(entityIDs, Drupal.quickedit.metadata.intersection(entityIDs));
      fieldsMetadataQueue = [];
      $.ajax({
        url: Drupal.url('quickedit/metadata'),
        type: 'POST',
        data: {
          'fields[]': fieldIDs,
          'entities[]': entityIDs
        },
        dataType: 'json',
        success: function success(results) {
          _.each(results, function (fieldMetadata, fieldID) {
            Drupal.quickedit.metadata.add(fieldID, fieldMetadata);
          });

          callback(fieldElementsWithoutMetadata);
        }
      });
    }
  }

  Drupal.behaviors.quickedit = {
    attach: function attach(context) {
      $('body').once('quickedit-init').each(initQuickEdit);
      var $fields = $(context).find('[data-quickedit-field-id]').once('quickedit');

      if ($fields.length === 0) {
        return;
      }

      $(context).find('[data-quickedit-entity-id]').once('quickedit').each(function (index, entityElement) {
        processEntity(entityElement);
      });
      $fields.each(function (index, fieldElement) {
        processField(fieldElement);
      });
      contextualLinksQueue = _.filter(contextualLinksQueue, function (contextualLink) {
        return !initializeEntityContextualLink(contextualLink);
      });
      fetchMissingMetadata(function (fieldElementsWithFreshMetadata) {
        _.each(fieldElementsWithFreshMetadata, processField);

        contextualLinksQueue = _.filter(contextualLinksQueue, function (contextualLink) {
          return !initializeEntityContextualLink(contextualLink);
        });
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        deleteContainedModelsAndQueues($(context));
      }
    }
  };
  Drupal.quickedit = {
    app: null,
    collections: {
      entities: null,
      fields: null
    },
    editors: {},
    metadata: {
      has: function has(fieldID) {
        return storage.getItem(this._prefixFieldID(fieldID)) !== null;
      },
      add: function add(fieldID, metadata) {
        storage.setItem(this._prefixFieldID(fieldID), JSON.stringify(metadata));
      },
      get: function get(fieldID, key) {
        var metadata = JSON.parse(storage.getItem(this._prefixFieldID(fieldID)));
        return typeof key === 'undefined' ? metadata : metadata[key];
      },
      _prefixFieldID: function _prefixFieldID(fieldID) {
        return "Drupal.quickedit.metadata.".concat(fieldID);
      },
      _unprefixFieldID: function _unprefixFieldID(fieldID) {
        return fieldID.substring(26);
      },
      intersection: function intersection(fieldIDs) {
        var prefixedFieldIDs = _.map(fieldIDs, this._prefixFieldID);

        var intersection = _.intersection(prefixedFieldIDs, _.keys(sessionStorage));

        return _.map(intersection, this._unprefixFieldID);
      }
    }
  };

  var permissionsHashKey = Drupal.quickedit.metadata._prefixFieldID('permissionsHash');

  var permissionsHashValue = storage.getItem(permissionsHashKey);
  var permissionsHash = drupalSettings.user.permissionsHash;

  if (permissionsHashValue !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage).keys().each(function (key) {
        if (key.substring(0, 26) === 'Drupal.quickedit.metadata.') {
          storage.removeItem(key);
        }
      });
    }

    storage.setItem(permissionsHashKey, permissionsHash);
  }

  $(document).on('drupalContextualLinkAdded', function (event, data) {
    if (data.$region.is('[data-quickedit-entity-id]')) {
      if (!data.$region.is('[data-quickedit-entity-instance-id]')) {
        data.$region.once('quickedit');
        processEntity(data.$region.get(0));
      }

      var contextualLink = {
        entityID: data.$region.attr('data-quickedit-entity-id'),
        entityInstanceID: data.$region.attr('data-quickedit-entity-instance-id'),
        el: data.$el[0],
        region: data.$region[0]
      };

      if (!initializeEntityContextualLink(contextualLink)) {
        contextualLinksQueue.push(contextualLink);
      }
    }
  });
})(jQuery, _, Backbone, Drupal, drupalSettings, window.JSON, window.sessionStorage);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.quickedit.util = Drupal.quickedit.util || {};
  Drupal.quickedit.util.constants = {};
  Drupal.quickedit.util.constants.transitionEnd = 'transitionEnd.quickedit webkitTransitionEnd.quickedit transitionend.quickedit msTransitionEnd.quickedit oTransitionEnd.quickedit';

  Drupal.quickedit.util.buildUrl = function (id, urlFormat) {
    var parts = id.split('/');
    return Drupal.formatString(decodeURIComponent(urlFormat), {
      '!entity_type': parts[0],
      '!id': parts[1],
      '!field_name': parts[2],
      '!langcode': parts[3],
      '!view_mode': parts[4]
    });
  };

  Drupal.quickedit.util.networkErrorModal = function (title, message) {
    var $message = $("<div>".concat(message, "</div>"));
    var networkErrorModal = Drupal.dialog($message.get(0), {
      title: title,
      dialogClass: 'quickedit-network-error',
      buttons: [{
        text: Drupal.t('OK'),
        click: function click() {
          networkErrorModal.close();
        },
        primary: true
      }],
      create: function create() {
        $(this).parent().find('.ui-dialog-titlebar-close').remove();
      },
      close: function close(event) {
        $(event.target).remove();
      }
    });
    networkErrorModal.showModal();
  };

  Drupal.quickedit.util.form = {
    load: function load(options, callback) {
      var fieldID = options.fieldID;
      var formLoaderAjax = Drupal.ajax({
        url: Drupal.quickedit.util.buildUrl(fieldID, Drupal.url('quickedit/form/!entity_type/!id/!field_name/!langcode/!view_mode')),
        submit: {
          nocssjs: options.nocssjs,
          reset: options.reset
        },
        error: function error(xhr, url) {
          var fieldLabel = Drupal.quickedit.metadata.get(fieldID, 'label');
          var message = Drupal.t('Could not load the form for <q>@field-label</q>, either due to a website problem or a network connection problem.<br>Please try again.', {
            '@field-label': fieldLabel
          });
          Drupal.quickedit.util.networkErrorModal(Drupal.t('Network problem!'), message);
          var fieldModel = Drupal.quickedit.app.model.get('activeField');
          fieldModel.set('state', 'candidate');
        }
      });

      formLoaderAjax.commands.quickeditFieldForm = function (ajax, response, status) {
        callback(response.data, ajax);
        Drupal.ajax.instances[this.instanceIndex] = null;
      };

      formLoaderAjax.execute();
    },
    ajaxifySaving: function ajaxifySaving(options, $submit) {
      var settings = {
        url: $submit.closest('form').attr('action'),
        setClick: true,
        event: 'click.quickedit',
        progress: false,
        submit: {
          nocssjs: options.nocssjs,
          other_view_modes: options.other_view_modes
        },
        success: function success(response, status) {
          var _this = this;

          Object.keys(response || {}).forEach(function (i) {
            if (response[i].command && _this.commands[response[i].command]) {
              _this.commands[response[i].command](_this, response[i], status);
            }
          });
        },
        base: $submit.attr('id'),
        element: $submit[0]
      };
      return Drupal.ajax(settings);
    },
    unajaxifySaving: function unajaxifySaving(ajax) {
      $(ajax.element).off('click.quickedit');
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (Drupal, Backbone) {
  Drupal.quickedit.BaseModel = Backbone.Model.extend({
    initialize: function initialize(options) {
      this.__initialized = true;
      return Backbone.Model.prototype.initialize.call(this, options);
    },
    set: function set(key, val, options) {
      if (this.__initialized) {
        if (_typeof(key) === 'object') {
          key.validate = true;
        } else {
          if (!options) {
            options = {};
          }

          options.validate = true;
        }
      }

      return Backbone.Model.prototype.set.call(this, key, val, options);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.quickedit.AppModel = Backbone.Model.extend({
    defaults: {
      highlightedField: null,
      activeField: null,
      activeModal: null
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (_, $, Backbone, Drupal) {
  Drupal.quickedit.EntityModel = Drupal.quickedit.BaseModel.extend({
    defaults: {
      el: null,
      entityID: null,
      entityInstanceID: null,
      id: null,
      label: null,
      fields: null,
      isActive: false,
      inTempStore: false,
      isDirty: false,
      isCommitting: false,
      state: 'closed',
      fieldsInTempStore: [],
      reload: false
    },
    initialize: function initialize() {
      this.set('fields', new Drupal.quickedit.FieldCollection());
      this.listenTo(this, 'change:state', this.stateChange);
      this.listenTo(this.get('fields'), 'change:state', this.fieldStateChange);
      Drupal.quickedit.BaseModel.prototype.initialize.call(this);
    },
    stateChange: function stateChange(entityModel, state, options) {
      var to = state;

      switch (to) {
        case 'closed':
          this.set({
            isActive: false,
            inTempStore: false,
            isDirty: false
          });
          break;

        case 'launching':
          break;

        case 'opening':
          entityModel.get('fields').each(function (fieldModel) {
            fieldModel.set('state', 'candidate', options);
          });
          break;

        case 'opened':
          this.set('isActive', true);
          break;

        case 'committing':
          {
            var fields = this.get('fields');
            fields.chain().filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], ['active']).length;
            }).each(function (fieldModel) {
              fieldModel.set('state', 'candidate');
            });
            fields.chain().filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], Drupal.quickedit.app.changedFieldStates).length;
            }).each(function (fieldModel) {
              fieldModel.set('state', 'saving');
            });
            break;
          }

        case 'deactivating':
          {
            var changedFields = this.get('fields').filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], ['changed', 'invalid']).length;
            });

            if ((changedFields.length || this.get('fieldsInTempStore').length) && !options.saved && !options.confirmed) {
              this.set('state', 'opened', {
                confirming: true
              });

              _.defer(function () {
                Drupal.quickedit.app.confirmEntityDeactivation(entityModel);
              });
            } else {
              var invalidFields = this.get('fields').filter(function (fieldModel) {
                return _.intersection([fieldModel.get('state')], ['invalid']).length;
              });
              entityModel.set('reload', this.get('fieldsInTempStore').length || invalidFields.length);
              entityModel.get('fields').each(function (fieldModel) {
                if (_.intersection([fieldModel.get('state')], ['candidate', 'highlighted']).length) {
                  fieldModel.trigger('change:state', fieldModel, fieldModel.get('state'), options);
                } else {
                  fieldModel.set('state', 'candidate', options);
                }
              });
            }

            break;
          }

        case 'closing':
          options.reason = 'stop';
          this.get('fields').each(function (fieldModel) {
            fieldModel.set({
              inTempStore: false,
              state: 'inactive'
            }, options);
          });
          break;
      }
    },
    _updateInTempStoreAttributes: function _updateInTempStoreAttributes(entityModel, fieldModel) {
      var current = fieldModel.get('state');
      var previous = fieldModel.previous('state');
      var fieldsInTempStore = entityModel.get('fieldsInTempStore');

      if (current === 'saved') {
        entityModel.set('inTempStore', true);
        fieldModel.set('inTempStore', true);
        fieldsInTempStore.push(fieldModel.get('fieldID'));
        fieldsInTempStore = _.uniq(fieldsInTempStore);
        entityModel.set('fieldsInTempStore', fieldsInTempStore);
      } else if (current === 'candidate' && previous === 'inactive') {
          fieldModel.set('inTempStore', _.intersection([fieldModel.get('fieldID')], fieldsInTempStore).length > 0);
        }
    },
    fieldStateChange: function fieldStateChange(fieldModel, state) {
      var entityModel = this;
      var fieldState = state;

      switch (this.get('state')) {
        case 'closed':
        case 'launching':
          break;

        case 'opening':
          _.defer(function () {
            entityModel.set('state', 'opened', {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            });
          });

          break;

        case 'opened':
          if (fieldState === 'changed') {
            entityModel.set('isDirty', true);
          } else {
            this._updateInTempStoreAttributes(entityModel, fieldModel);
          }

          break;

        case 'committing':
          {
            if (fieldState === 'invalid') {
              _.defer(function () {
                entityModel.set('state', 'opened', {
                  reason: 'invalid'
                });
              });
            } else {
              this._updateInTempStoreAttributes(entityModel, fieldModel);
            }

            var options = {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            };

            if (entityModel.set('isCommitting', true, options)) {
              entityModel.save({
                success: function success() {
                  entityModel.set({
                    state: 'deactivating',
                    isCommitting: false
                  }, {
                    saved: true
                  });
                },
                error: function error() {
                  entityModel.set('isCommitting', false);
                  entityModel.set('state', 'opened', {
                    reason: 'networkerror'
                  });
                  var message = Drupal.t('Your changes to <q>@entity-title</q> could not be saved, either due to a website problem or a network connection problem.<br>Please try again.', {
                    '@entity-title': entityModel.get('label')
                  });
                  Drupal.quickedit.util.networkErrorModal(Drupal.t('Network problem!'), message);
                }
              });
            }

            break;
          }

        case 'deactivating':
          _.defer(function () {
            entityModel.set('state', 'closing', {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            });
          });

          break;

        case 'closing':
          _.defer(function () {
            entityModel.set('state', 'closed', {
              'accept-field-states': ['inactive']
            });
          });

          break;
      }
    },
    save: function save(options) {
      var entityModel = this;
      var entitySaverAjax = Drupal.ajax({
        url: Drupal.url("quickedit/entity/".concat(entityModel.get('entityID'))),
        error: function error() {
          options.error.call(entityModel);
        }
      });

      entitySaverAjax.commands.quickeditEntitySaved = function (ajax, response, status) {
        entityModel.get('fields').each(function (fieldModel) {
          fieldModel.set('inTempStore', false);
        });
        entityModel.set('inTempStore', false);
        entityModel.set('fieldsInTempStore', []);

        if (options.success) {
          options.success.call(entityModel);
        }
      };

      entitySaverAjax.execute();
    },
    validate: function validate(attrs, options) {
      var acceptedFieldStates = options['accept-field-states'] || [];
      var currentState = this.get('state');
      var nextState = attrs.state;

      if (currentState !== nextState) {
        if (_.indexOf(this.constructor.states, nextState) === -1) {
          return "\"".concat(nextState, "\" is an invalid state");
        }

        if (!this._acceptStateChange(currentState, nextState, options)) {
          return 'state change not accepted';
        }

        if (!this._fieldsHaveAcceptableStates(acceptedFieldStates)) {
          return 'state change not accepted because fields are not in acceptable state';
        }
      }

      var currentIsCommitting = this.get('isCommitting');
      var nextIsCommitting = attrs.isCommitting;

      if (currentIsCommitting === false && nextIsCommitting === true) {
        if (!this._fieldsHaveAcceptableStates(acceptedFieldStates)) {
          return 'isCommitting change not accepted because fields are not in acceptable state';
        }
      } else if (currentIsCommitting === true && nextIsCommitting === true) {
        return 'isCommitting is a mutex, hence only changes are allowed';
      }
    },
    _acceptStateChange: function _acceptStateChange(from, to, context) {
      var accept = true;

      if (!this.constructor.followsStateSequence(from, to)) {
        accept = false;

        if (from === 'closing' && to === 'closed') {
          accept = true;
        } else if (from === 'committing' && to === 'opened' && context.reason && (context.reason === 'invalid' || context.reason === 'networkerror')) {
            accept = true;
          } else if (from === 'deactivating' && to === 'opened' && context.confirming) {
              accept = true;
            } else if (from === 'opened' && to === 'deactivating' && context.confirmed) {
                accept = true;
              }
      }

      return accept;
    },
    _fieldsHaveAcceptableStates: function _fieldsHaveAcceptableStates(acceptedFieldStates) {
      var accept = true;

      if (acceptedFieldStates.length > 0) {
        var fieldStates = this.get('fields').pluck('state') || [];

        if (_.difference(fieldStates, acceptedFieldStates).length) {
          accept = false;
        }
      }

      return accept;
    },
    destroy: function destroy(options) {
      Drupal.quickedit.BaseModel.prototype.destroy.call(this, options);
      this.stopListening();
      this.get('fields').reset();
    },
    sync: function sync() {}
  }, {
    states: ['closed', 'launching', 'opening', 'opened', 'committing', 'deactivating', 'closing'],
    followsStateSequence: function followsStateSequence(from, to) {
      return _.indexOf(this.states, from) < _.indexOf(this.states, to);
    }
  });
  Drupal.quickedit.EntityCollection = Backbone.Collection.extend({
    model: Drupal.quickedit.EntityModel
  });
})(_, jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (_, Backbone, Drupal) {
  Drupal.quickedit.FieldModel = Drupal.quickedit.BaseModel.extend({
    defaults: {
      el: null,
      fieldID: null,
      id: null,
      entity: null,
      metadata: null,
      acceptStateChange: null,
      logicalFieldID: null,
      state: 'inactive',
      isChanged: false,
      inTempStore: false,
      html: null,
      htmlForOtherViewModes: null
    },
    initialize: function initialize(options) {
      this.set('html', options.el.outerHTML);
      this.get('entity').get('fields').add(this);
      this.set('logicalFieldID', this.get('fieldID').split('/').slice(0, 4).join('/'));
      Drupal.quickedit.BaseModel.prototype.initialize.call(this, options);
    },
    destroy: function destroy(options) {
      if (this.get('state') !== 'inactive') {
        throw new Error('FieldModel cannot be destroyed if it is not inactive state.');
      }

      Drupal.quickedit.BaseModel.prototype.destroy.call(this, options);
    },
    sync: function sync() {},
    validate: function validate(attrs, options) {
      var current = this.get('state');
      var next = attrs.state;

      if (current !== next) {
        if (_.indexOf(this.constructor.states, next) === -1) {
          return "\"".concat(next, "\" is an invalid state");
        }

        if (!this.get('acceptStateChange')(current, next, options, this)) {
          return 'state change not accepted';
        }
      }
    },
    getEntityID: function getEntityID() {
      return this.get('fieldID').split('/').slice(0, 2).join('/');
    },
    getViewMode: function getViewMode() {
      return this.get('fieldID').split('/').pop();
    },
    findOtherViewModes: function findOtherViewModes() {
      var currentField = this;
      var otherViewModes = [];
      Drupal.quickedit.collections.fields.where({
        logicalFieldID: currentField.get('logicalFieldID')
      }).forEach(function (field) {
        if (field !== currentField && field.get('fieldID') !== currentField.get('fieldID')) {
          otherViewModes.push(field.getViewMode());
        }
      });
      return otherViewModes;
    }
  }, {
    states: ['inactive', 'candidate', 'highlighted', 'activating', 'active', 'changed', 'saving', 'saved', 'invalid'],
    followsStateSequence: function followsStateSequence(from, to) {
      return _.indexOf(this.states, from) < _.indexOf(this.states, to);
    }
  });
  Drupal.quickedit.FieldCollection = Backbone.Collection.extend({
    model: Drupal.quickedit.FieldModel
  });
})(_, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.quickedit.EditorModel = Backbone.Model.extend({
    defaults: {
      originalValue: null,
      currentValue: null,
      validationErrors: null
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal) {
  var reload = false;
  Drupal.quickedit.AppView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.activeFieldStates = ['activating', 'active'];
      this.singleFieldStates = ['highlighted', 'activating', 'active'];
      this.changedFieldStates = ['changed', 'saving', 'saved', 'invalid'];
      this.readyFieldStates = ['candidate', 'highlighted'];
      this.listenTo(options.entitiesCollection, 'change:state', this.appStateChange);
      this.listenTo(options.entitiesCollection, 'change:isActive', this.enforceSingleActiveEntity);
      this.listenTo(options.fieldsCollection, 'change:state', this.editorStateChange);
      this.listenTo(options.fieldsCollection, 'change:html', this.renderUpdatedField);
      this.listenTo(options.fieldsCollection, 'change:html', this.propagateUpdatedField);
      this.listenTo(options.fieldsCollection, 'add', this.rerenderedFieldToCandidate);
      this.listenTo(options.fieldsCollection, 'destroy', this.teardownEditor);
    },
    appStateChange: function appStateChange(entityModel, state) {
      var app = this;
      var entityToolbarView;

      switch (state) {
        case 'launching':
          reload = false;
          entityToolbarView = new Drupal.quickedit.EntityToolbarView({
            model: entityModel,
            appModel: this.model
          });
          entityModel.toolbarView = entityToolbarView;
          entityModel.get('fields').each(function (fieldModel) {
            app.setupEditor(fieldModel);
          });

          _.defer(function () {
            entityModel.set('state', 'opening');
          });

          break;

        case 'closed':
          entityToolbarView = entityModel.toolbarView;
          entityModel.get('fields').each(function (fieldModel) {
            app.teardownEditor(fieldModel);
          });

          if (entityToolbarView) {
            entityToolbarView.remove();
            delete entityModel.toolbarView;
          }

          if (reload) {
            reload = false;
            window.location.reload();
          }

          break;
      }
    },
    acceptEditorStateChange: function acceptEditorStateChange(from, to, context, fieldModel) {
      var accept = true;

      if (context && (context.reason === 'stop' || context.reason === 'rerender')) {
        if (from === 'candidate' && to === 'inactive') {
          accept = true;
        }
      } else {
          if (!Drupal.quickedit.FieldModel.followsStateSequence(from, to)) {
            accept = false;

            if (_.indexOf(this.activeFieldStates, from) !== -1 && to === 'candidate') {
              accept = true;
            } else if ((from === 'changed' || from === 'invalid') && to === 'candidate') {
                accept = true;
              } else if (from === 'highlighted' && to === 'candidate') {
                  accept = true;
                } else if (from === 'saved' && to === 'candidate') {
                    accept = true;
                  } else if (from === 'invalid' && to === 'saving') {
                      accept = true;
                    } else if (from === 'invalid' && to === 'activating') {
                        accept = true;
                      }
          }

          if (accept) {
            var activeField;
            var activeFieldState;

            if ((this.readyFieldStates.indexOf(from) !== -1 || from === 'invalid') && this.activeFieldStates.indexOf(to) !== -1) {
              activeField = this.model.get('activeField');

              if (activeField && activeField !== fieldModel) {
                activeFieldState = activeField.get('state');

                if (this.activeFieldStates.indexOf(activeFieldState) !== -1) {
                  activeField.set('state', 'candidate');
                } else if (activeFieldState === 'changed' || activeFieldState === 'invalid') {
                  activeField.set('state', 'saving');
                }

                if (from === 'invalid') {
                  this.model.set('activeField', fieldModel);
                  accept = false;
                }
              }
            } else if (_.indexOf(this.activeFieldStates, from) !== -1 && to === 'candidate') {
                if (context && context.reason === 'mouseleave') {
                  accept = false;
                }
              } else if ((from === 'changed' || from === 'invalid') && to === 'candidate') {
                  if (context && context.reason === 'mouseleave') {
                    accept = false;
                  } else if (context && context.confirmed) {
                      accept = true;
                    }
                }
          }
        }

      return accept;
    },
    setupEditor: function setupEditor(fieldModel) {
      var entityModel = fieldModel.get('entity');
      var entityToolbarView = entityModel.toolbarView;
      var fieldToolbarRoot = entityToolbarView.getToolbarRoot();
      var editorName = fieldModel.get('metadata').editor;
      var editorModel = new Drupal.quickedit.EditorModel();
      var editorView = new Drupal.quickedit.editors[editorName]({
        el: $(fieldModel.get('el')),
        model: editorModel,
        fieldModel: fieldModel
      });
      var toolbarView = new Drupal.quickedit.FieldToolbarView({
        el: fieldToolbarRoot,
        model: fieldModel,
        $editedElement: $(editorView.getEditedElement()),
        editorView: editorView,
        entityModel: entityModel
      });
      var decorationView = new Drupal.quickedit.FieldDecorationView({
        el: $(editorView.getEditedElement()),
        model: fieldModel,
        editorView: editorView
      });
      fieldModel.editorView = editorView;
      fieldModel.toolbarView = toolbarView;
      fieldModel.decorationView = decorationView;
    },
    teardownEditor: function teardownEditor(fieldModel) {
      if (typeof fieldModel.editorView === 'undefined') {
        return;
      }

      fieldModel.toolbarView.remove();
      delete fieldModel.toolbarView;
      fieldModel.decorationView.remove();
      delete fieldModel.decorationView;
      fieldModel.editorView.remove();
      delete fieldModel.editorView;
    },
    confirmEntityDeactivation: function confirmEntityDeactivation(entityModel) {
      var that = this;
      var discardDialog;

      function closeDiscardDialog(action) {
        discardDialog.close(action);
        that.model.set('activeModal', null);

        if (action === 'save') {
          entityModel.set('state', 'committing', {
            confirmed: true
          });
        } else {
          entityModel.set('state', 'deactivating', {
            confirmed: true
          });

          if (entityModel.get('reload')) {
            reload = true;
            entityModel.set('reload', false);
          }
        }
      }

      if (!this.model.get('activeModal')) {
        var $unsavedChanges = $("<div>".concat(Drupal.t('You have unsaved changes'), "</div>"));
        discardDialog = Drupal.dialog($unsavedChanges.get(0), {
          title: Drupal.t('Discard changes?'),
          dialogClass: 'quickedit-discard-modal',
          resizable: false,
          buttons: [{
            text: Drupal.t('Save'),
            click: function click() {
              closeDiscardDialog('save');
            },
            primary: true
          }, {
            text: Drupal.t('Discard changes'),
            click: function click() {
              closeDiscardDialog('discard');
            }
          }],
          closeOnEscape: false,
          create: function create() {
            $(this).parent().find('.ui-dialog-titlebar-close').remove();
          },
          beforeClose: false,
          close: function close(event) {
            $(event.target).remove();
          }
        });
        this.model.set('activeModal', discardDialog);
        discardDialog.showModal();
      }
    },
    editorStateChange: function editorStateChange(fieldModel, state) {
      var from = fieldModel.previous('state');
      var to = state;

      if (_.indexOf(this.singleFieldStates, to) !== -1 && this.model.get('highlightedField') !== fieldModel) {
        this.model.set('highlightedField', fieldModel);
      } else if (this.model.get('highlightedField') === fieldModel && to === 'candidate') {
        this.model.set('highlightedField', null);
      }

      if (_.indexOf(this.activeFieldStates, to) !== -1 && this.model.get('activeField') !== fieldModel) {
        this.model.set('activeField', fieldModel);
      } else if (this.model.get('activeField') === fieldModel && to === 'candidate') {
        if (from === 'changed' || from === 'invalid') {
          fieldModel.editorView.revert();
        }

        this.model.set('activeField', null);
      }
    },
    renderUpdatedField: function renderUpdatedField(fieldModel, html, options) {
      var $fieldWrapper = $(fieldModel.get('el'));
      var $context = $fieldWrapper.parent();

      var renderField = function renderField() {
        fieldModel.destroy();
        $fieldWrapper.replaceWith(html);
        Drupal.attachBehaviors($context.get(0));
      };

      if (!options.propagation) {
        _.defer(function () {
          fieldModel.set('state', 'candidate');

          _.defer(function () {
            fieldModel.set('state', 'inactive', {
              reason: 'rerender'
            });
            renderField();
          });
        });
      } else {
        renderField();
      }
    },
    propagateUpdatedField: function propagateUpdatedField(updatedField, html, options) {
      if (options.propagation) {
        return;
      }

      var htmlForOtherViewModes = updatedField.get('htmlForOtherViewModes');
      Drupal.quickedit.collections.fields.where({
        logicalFieldID: updatedField.get('logicalFieldID')
      }).forEach(function (field) {
        if (field === updatedField) {} else if (field.getViewMode() === updatedField.getViewMode()) {
            field.set('html', updatedField.get('html'));
          } else if (field.getViewMode() in htmlForOtherViewModes) {
              field.set('html', htmlForOtherViewModes[field.getViewMode()], {
                propagation: true
              });
            }
      });
    },
    rerenderedFieldToCandidate: function rerenderedFieldToCandidate(fieldModel) {
      var activeEntity = Drupal.quickedit.collections.entities.findWhere({
        isActive: true
      });

      if (!activeEntity) {
        return;
      }

      if (fieldModel.get('entity') === activeEntity) {
        this.setupEditor(fieldModel);
        fieldModel.set('state', 'candidate');
      }
    },
    enforceSingleActiveEntity: function enforceSingleActiveEntity(changedEntityModel) {
      if (changedEntityModel.get('isActive') === false) {
        return;
      }

      changedEntityModel.collection.chain().filter(function (entityModel) {
        return entityModel.get('isActive') === true && entityModel !== changedEntityModel;
      }).each(function (entityModel) {
        entityModel.set('state', 'deactivating');
      });
    }
  });
})(jQuery, _, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.quickedit.FieldDecorationView = Backbone.View.extend({
    _widthAttributeIsEmpty: null,
    events: {
      'mouseenter.quickedit': 'onMouseEnter',
      'mouseleave.quickedit': 'onMouseLeave',
      click: 'onClick',
      'tabIn.quickedit': 'onMouseEnter',
      'tabOut.quickedit': 'onMouseLeave'
    },
    initialize: function initialize(options) {
      this.editorView = options.editorView;
      this.listenTo(this.model, 'change:state', this.stateChange);
      this.listenTo(this.model, 'change:isChanged change:inTempStore', this.renderChanged);
    },
    remove: function remove() {
      this.setElement();
      Backbone.View.prototype.remove.call(this);
    },
    stateChange: function stateChange(model, state) {
      var from = model.previous('state');
      var to = state;

      switch (to) {
        case 'inactive':
          this.undecorate();
          break;

        case 'candidate':
          this.decorate();

          if (from !== 'inactive') {
            this.stopHighlight();

            if (from !== 'highlighted') {
              this.model.set('isChanged', false);
              this.stopEdit();
            }
          }

          this._unpad();

          break;

        case 'highlighted':
          this.startHighlight();
          break;

        case 'activating':
          this.prepareEdit();
          break;

        case 'active':
          if (from !== 'activating') {
            this.prepareEdit();
          }

          if (this.editorView.getQuickEditUISettings().padding) {
            this._pad();
          }

          break;

        case 'changed':
          this.model.set('isChanged', true);
          break;

        case 'saving':
          break;

        case 'saved':
          break;

        case 'invalid':
          break;
      }
    },
    renderChanged: function renderChanged() {
      this.$el.toggleClass('quickedit-changed', this.model.get('isChanged') || this.model.get('inTempStore'));
    },
    onMouseEnter: function onMouseEnter(event) {
      var that = this;
      that.model.set('state', 'highlighted');
      event.stopPropagation();
    },
    onMouseLeave: function onMouseLeave(event) {
      var that = this;
      that.model.set('state', 'candidate', {
        reason: 'mouseleave'
      });
      event.stopPropagation();
    },
    onClick: function onClick(event) {
      this.model.set('state', 'activating');
      event.preventDefault();
      event.stopPropagation();
    },
    decorate: function decorate() {
      this.$el.addClass('quickedit-candidate quickedit-editable');
    },
    undecorate: function undecorate() {
      this.$el.removeClass('quickedit-candidate quickedit-editable quickedit-highlighted quickedit-editing');
    },
    startHighlight: function startHighlight() {
      var that = this;
      that.$el.addClass('quickedit-highlighted');
    },
    stopHighlight: function stopHighlight() {
      this.$el.removeClass('quickedit-highlighted');
    },
    prepareEdit: function prepareEdit() {
      this.$el.addClass('quickedit-editing');

      if (this.editorView.getQuickEditUISettings().popup) {
        this.$el.addClass('quickedit-editor-is-popup');
      }
    },
    stopEdit: function stopEdit() {
      this.$el.removeClass('quickedit-highlighted quickedit-editing');

      if (this.editorView.getQuickEditUISettings().popup) {
        this.$el.removeClass('quickedit-editor-is-popup');
      }

      $('.quickedit-candidate').addClass('quickedit-editable');
    },
    _pad: function _pad() {
      if (this.$el.data('quickedit-padded')) {
        return;
      }

      var self = this;

      if (this.$el[0].style.width === '') {
        this._widthAttributeIsEmpty = true;
        this.$el.addClass('quickedit-animate-disable-width').css('width', this.$el.width());
      }

      var posProp = this._getPositionProperties(this.$el);

      setTimeout(function () {
        self.$el.removeClass('quickedit-animate-disable-width');
        self.$el.css({
          position: 'relative',
          top: "".concat(posProp.top - 5, "px"),
          left: "".concat(posProp.left - 5, "px"),
          'padding-top': "".concat(posProp['padding-top'] + 5, "px"),
          'padding-left': "".concat(posProp['padding-left'] + 5, "px"),
          'padding-right': "".concat(posProp['padding-right'] + 5, "px"),
          'padding-bottom': "".concat(posProp['padding-bottom'] + 5, "px"),
          'margin-bottom': "".concat(posProp['margin-bottom'] - 10, "px")
        }).data('quickedit-padded', true);
      }, 0);
    },
    _unpad: function _unpad() {
      if (!this.$el.data('quickedit-padded')) {
        return;
      }

      var self = this;

      if (this._widthAttributeIsEmpty) {
        this.$el.addClass('quickedit-animate-disable-width').css('width', '');
      }

      var posProp = this._getPositionProperties(this.$el);

      setTimeout(function () {
        self.$el.removeClass('quickedit-animate-disable-width');
        self.$el.css({
          position: 'relative',
          top: "".concat(posProp.top + 5, "px"),
          left: "".concat(posProp.left + 5, "px"),
          'padding-top': "".concat(posProp['padding-top'] - 5, "px"),
          'padding-left': "".concat(posProp['padding-left'] - 5, "px"),
          'padding-right': "".concat(posProp['padding-right'] - 5, "px"),
          'padding-bottom': "".concat(posProp['padding-bottom'] - 5, "px"),
          'margin-bottom': "".concat(posProp['margin-bottom'] + 10, "px")
        });
      }, 0);
      this.$el.removeData('quickedit-padded');
    },
    _getPositionProperties: function _getPositionProperties($e) {
      var p;
      var r = {};
      var props = ['top', 'left', 'bottom', 'right', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom', 'margin-bottom'];
      var propCount = props.length;

      for (var i = 0; i < propCount; i++) {
        p = props[i];
        r[p] = parseInt(this._replaceBlankPosition($e.css(p)), 10);
      }

      return r;
    },
    _replaceBlankPosition: function _replaceBlankPosition(pos) {
      if (pos === 'auto' || !pos) {
        pos = '0px';
      }

      return pos;
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, $, Backbone) {
  Drupal.quickedit.EntityDecorationView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function render() {
      this.$el.toggleClass('quickedit-entity-active', this.model.get('isActive'));
    },
    remove: function remove() {
      this.setElement(null);
      Backbone.View.prototype.remove.call(this);
    }
  });
})(Drupal, jQuery, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal, debounce, Popper) {
  Drupal.quickedit.EntityToolbarView = Backbone.View.extend({
    _fieldToolbarRoot: null,
    events: function events() {
      var map = {
        'click button.action-save': 'onClickSave',
        'click button.action-cancel': 'onClickCancel',
        mouseenter: 'onMouseenter'
      };
      return map;
    },
    initialize: function initialize(options) {
      var that = this;
      this.appModel = options.appModel;
      this.$entity = $(this.model.get('el'));
      this.listenTo(this.model, 'change:isActive change:isDirty change:state', this.render);
      this.listenTo(this.appModel, 'change:highlightedField change:activeField', this.render);
      this.listenTo(this.model.get('fields'), 'change:state', this.fieldStateChange);
      $(window).on('resize.quickedit scroll.quickedit drupalViewportOffsetChange.quickedit', debounce($.proxy(this.windowChangeHandler, this), 150));
      $(document).on('drupalViewportOffsetChange.quickedit', function (event, offsets) {
        if (that.$fence) {
          that.$fence.css(offsets);
        }
      });
      var $toolbar = this.buildToolbarEl();
      this.setElement($toolbar);
      this._fieldToolbarRoot = $toolbar.find('.quickedit-toolbar-field').get(0);
      this.render();
    },
    render: function render() {
      if (this.model.get('isActive')) {
        var $body = $('body');

        if ($body.children('#quickedit-entity-toolbar').length === 0) {
          $body.append(this.$el);
        }

        if ($body.children('#quickedit-toolbar-fence').length === 0) {
          this.$fence = $(Drupal.theme('quickeditEntityToolbarFence')).css(Drupal.displace()).appendTo($body);
        }

        this.label();
        this.show('ops');
        this.position();
      }

      var $button = this.$el.find('.quickedit-button.action-save');
      var isDirty = this.model.get('isDirty');

      switch (this.model.get('state')) {
        case 'opened':
          $button.removeClass('action-saving icon-throbber icon-end').text(Drupal.t('Save')).removeAttr('disabled').attr('aria-hidden', !isDirty);
          break;

        case 'committing':
          $button.addClass('action-saving icon-throbber icon-end').text(Drupal.t('Saving')).attr('disabled', 'disabled');
          break;

        default:
          $button.attr('aria-hidden', true);
          break;
      }

      return this;
    },
    remove: function remove() {
      this.$fence.remove();
      $(window).off('resize.quickedit scroll.quickedit drupalViewportOffsetChange.quickedit');
      $(document).off('drupalViewportOffsetChange.quickedit');
      Backbone.View.prototype.remove.call(this);
    },
    windowChangeHandler: function windowChangeHandler(event) {
      this.position();
    },
    fieldStateChange: function fieldStateChange(model, state) {
      switch (state) {
        case 'active':
          this.render();
          break;

        case 'invalid':
          this.render();
          break;
      }
    },
    position: function position(element) {
      clearTimeout(this.timer);
      var that = this;
      var edge = document.documentElement.dir === 'rtl' ? 'right' : 'left';
      var delay = 0;
      var check = 0;
      var horizontalPadding = 0;
      var of;
      var activeField;
      var highlightedField;

      do {
        switch (check) {
          case 0:
            of = element;
            break;

          case 1:
            activeField = Drupal.quickedit.app.model.get('activeField');
            of = activeField && activeField.editorView && activeField.editorView.$formContainer && activeField.editorView.$formContainer.find('.quickedit-form');
            break;

          case 2:
            of = activeField && activeField.editorView && activeField.editorView.getEditedElement();

            if (activeField && activeField.editorView && activeField.editorView.getQuickEditUISettings().padding) {
              horizontalPadding = 5;
            }

            break;

          case 3:
            highlightedField = Drupal.quickedit.app.model.get('highlightedField');
            of = highlightedField && highlightedField.editorView && highlightedField.editorView.getEditedElement();
            delay = 250;
            break;

          default:
            {
              var fieldModels = this.model.get('fields').models;
              var topMostPosition = 1000000;
              var topMostField = null;

              for (var i = 0; i < fieldModels.length; i++) {
                var pos = fieldModels[i].get('el').getBoundingClientRect().top;

                if (pos < topMostPosition) {
                  topMostPosition = pos;
                  topMostField = fieldModels[i];
                }
              }

              of = topMostField.get('el');
              delay = 50;
              break;
            }
        }

        check++;
      } while (!of);

      function refinePopper(_ref) {
        var state = _ref.state;
        var isBelow = state.placement.split('-')[0] === 'bottom';
        var classListMethod = isBelow ? 'add' : 'remove';
        state.elements.popper.classList[classListMethod]('quickedit-toolbar-pointer-top');
      }

      function positionToolbar() {
        var popperElement = that.el;
        var referenceElement = of;
        var boundariesElement = that.$fence[0];
        var popperedge = edge === 'left' ? 'start' : 'end';

        if (referenceElement !== undefined) {
          if (!popperElement.classList.contains('js-popper-processed')) {
            that.popper = Popper.createPopper(referenceElement, popperElement, {
              placement: "top-".concat(popperedge),
              modifiers: [{
                name: 'flip',
                options: {
                  boundary: boundariesElement
                }
              }, {
                name: 'preventOverflow',
                options: {
                  boundary: boundariesElement,
                  tether: false,
                  altAxis: true,
                  padding: {
                    top: 5,
                    bottom: 5
                  }
                }
              }, {
                name: 'computeStyles',
                options: {
                  adaptive: false
                }
              }, {
                name: 'refinePopper',
                phase: 'write',
                enabled: true,
                fn: refinePopper
              }]
            });
            popperElement.classList.add('js-popper-processed');
          } else {
            that.popper.state.elements.reference = referenceElement[0] ? referenceElement[0] : referenceElement;
            that.popper.forceUpdate();
          }
        }

        that.$el.css({
          'max-width': document.documentElement.clientWidth < 450 ? document.documentElement.clientWidth : 450,
          'min-width': document.documentElement.clientWidth < 240 ? document.documentElement.clientWidth : 240,
          width: '100%'
        });
      }

      this.timer = setTimeout(function () {
        _.defer(positionToolbar);
      }, delay);
    },
    onClickSave: function onClickSave(event) {
      event.stopPropagation();
      event.preventDefault();
      this.model.set('state', 'committing');
    },
    onClickCancel: function onClickCancel(event) {
      event.preventDefault();
      this.model.set('state', 'deactivating');
    },
    onMouseenter: function onMouseenter(event) {
      clearTimeout(this.timer);
    },
    buildToolbarEl: function buildToolbarEl() {
      var $toolbar = $(Drupal.theme('quickeditEntityToolbar', {
        id: 'quickedit-entity-toolbar'
      }));
      $toolbar.find('.quickedit-toolbar-entity').prepend(Drupal.theme('quickeditToolgroup', {
        classes: ['ops'],
        buttons: [{
          label: Drupal.t('Save'),
          type: 'submit',
          classes: 'action-save quickedit-button icon',
          attributes: {
            'aria-hidden': true
          }
        }, {
          label: Drupal.t('Close'),
          classes: 'action-cancel quickedit-button icon icon-close icon-only'
        }]
      }));
      $toolbar.css({
        left: this.$entity.offset().left,
        top: this.$entity.offset().top
      });
      return $toolbar;
    },
    getToolbarRoot: function getToolbarRoot() {
      return this._fieldToolbarRoot;
    },
    label: function label() {
      var label = '';
      var entityLabel = this.model.get('label');
      var activeField = Drupal.quickedit.app.model.get('activeField');
      var activeFieldLabel = activeField && activeField.get('metadata').label;
      var highlightedField = Drupal.quickedit.app.model.get('highlightedField');
      var highlightedFieldLabel = highlightedField && highlightedField.get('metadata').label;

      if (activeFieldLabel) {
        label = Drupal.theme('quickeditEntityToolbarLabel', {
          entityLabel: entityLabel,
          fieldLabel: activeFieldLabel
        });
      } else if (highlightedFieldLabel) {
        label = Drupal.theme('quickeditEntityToolbarLabel', {
          entityLabel: entityLabel,
          fieldLabel: highlightedFieldLabel
        });
      } else {
        label = Drupal.checkPlain(entityLabel);
      }

      this.$el.find('.quickedit-toolbar-label').html(label);
    },
    addClass: function addClass(toolgroup, classes) {
      this._find(toolgroup).addClass(classes);
    },
    removeClass: function removeClass(toolgroup, classes) {
      this._find(toolgroup).removeClass(classes);
    },
    _find: function _find(toolgroup) {
      return this.$el.find(".quickedit-toolbar .quickedit-toolgroup.".concat(toolgroup));
    },
    show: function show(toolgroup) {
      this.$el.removeClass('quickedit-animate-invisible');
    }
  });
})(jQuery, _, Backbone, Drupal, Drupal.debounce, Popper);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.quickedit.ContextualLinkView = Backbone.View.extend({
    events: function events() {
      function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      }

      return {
        'click a': function clickA(event) {
          event.preventDefault();
          this.model.set('state', 'launching');
        },
        'touchEnd a': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.$el.find('a').text(options.strings.quickEdit);
      this.render();
      this.listenTo(this.model, 'change:isActive', this.render);
    },
    render: function render(entityModel, isActive) {
      this.$el.find('a').attr('aria-pressed', isActive);
      this.$el.closest('.contextual').toggle(!isActive);
      return this;
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal) {
  Drupal.quickedit.FieldToolbarView = Backbone.View.extend({
    $editedElement: null,
    editorView: null,
    _id: null,
    initialize: function initialize(options) {
      this.$editedElement = options.$editedElement;
      this.editorView = options.editorView;
      this.$root = this.$el;
      this._id = "quickedit-toolbar-for-".concat(this.model.id.replace(/[/[\]]/g, '_'));
      this.listenTo(this.model, 'change:state', this.stateChange);
    },
    render: function render() {
      this.setElement($(Drupal.theme('quickeditFieldToolbar', {
        id: this._id
      })));
      this.$el.prependTo(this.$root);
      return this;
    },
    stateChange: function stateChange(model, state) {
      var from = model.previous('state');
      var to = state;

      switch (to) {
        case 'inactive':
          break;

        case 'candidate':
          if (from !== 'inactive' && from !== 'highlighted') {
            this.$el.remove();
            this.setElement();
          }

          break;

        case 'highlighted':
          break;

        case 'activating':
          this.render();

          if (this.editorView.getQuickEditUISettings().fullWidthToolbar) {
            this.$el.addClass('quickedit-toolbar-fullwidth');
          }

          if (this.editorView.getQuickEditUISettings().unifiedToolbar) {
            this.insertWYSIWYGToolGroups();
          }

          break;

        case 'active':
          break;

        case 'changed':
          break;

        case 'saving':
          break;

        case 'saved':
          break;

        case 'invalid':
          break;
      }
    },
    insertWYSIWYGToolGroups: function insertWYSIWYGToolGroups() {
      this.$el.append(Drupal.theme('quickeditToolgroup', {
        id: this.getFloatedWysiwygToolgroupId(),
        classes: ['wysiwyg-floated', 'quickedit-animate-slow', 'quickedit-animate-invisible', 'quickedit-animate-delay-veryfast'],
        buttons: []
      })).append(Drupal.theme('quickeditToolgroup', {
        id: this.getMainWysiwygToolgroupId(),
        classes: ['wysiwyg-main', 'quickedit-animate-slow', 'quickedit-animate-invisible', 'quickedit-animate-delay-veryfast'],
        buttons: []
      }));
      this.show('wysiwyg-floated');
      this.show('wysiwyg-main');
    },
    getId: function getId() {
      return "quickedit-toolbar-for-".concat(this._id);
    },
    getFloatedWysiwygToolgroupId: function getFloatedWysiwygToolgroupId() {
      return "quickedit-wysiwyg-floated-toolgroup-for-".concat(this._id);
    },
    getMainWysiwygToolgroupId: function getMainWysiwygToolgroupId() {
      return "quickedit-wysiwyg-main-toolgroup-for-".concat(this._id);
    },
    _find: function _find(toolgroup) {
      return this.$el.find(".quickedit-toolgroup.".concat(toolgroup));
    },
    show: function show(toolgroup) {
      var $group = this._find(toolgroup);

      $group.on(Drupal.quickedit.util.constants.transitionEnd, function (event) {
        $group.off(Drupal.quickedit.util.constants.transitionEnd);
      });
      window.setTimeout(function () {
        $group.removeClass('quickedit-animate-invisible');
      }, 0);
    }
  });
})(jQuery, _, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.quickedit.EditorView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.fieldModel = options.fieldModel;
      this.listenTo(this.fieldModel, 'change:state', this.stateChange);
    },
    remove: function remove() {
      this.setElement();
      Backbone.View.prototype.remove.call(this);
    },
    getEditedElement: function getEditedElement() {
      return this.$el;
    },
    getQuickEditUISettings: function getQuickEditUISettings() {
      return {
        padding: false,
        unifiedToolbar: false,
        fullWidthToolbar: false,
        popup: false
      };
    },
    stateChange: function stateChange(fieldModel, state) {
      var from = fieldModel.previous('state');
      var to = state;

      switch (to) {
        case 'inactive':
          break;

        case 'candidate':
          if (from === 'invalid') {
            this.removeValidationErrors();
          }

          break;

        case 'highlighted':
          break;

        case 'activating':
          {
            var loadDependencies = function loadDependencies(callback) {
              callback();
            };

            loadDependencies(function () {
              fieldModel.set('state', 'active');
            });
            break;
          }

        case 'active':
          break;

        case 'changed':
          break;

        case 'saving':
          if (from === 'invalid') {
            this.removeValidationErrors();
          }

          this.save();
          break;

        case 'saved':
          break;

        case 'invalid':
          this.showValidationErrors();
          break;
      }
    },
    revert: function revert() {},
    save: function save() {
      var fieldModel = this.fieldModel;
      var editorModel = this.model;
      var backstageId = "quickedit_backstage-".concat(this.fieldModel.id.replace(/[/[\]_\s]/g, '-'));

      function fillAndSubmitForm(value) {
        var $form = $("#".concat(backstageId)).find('form');
        $form.find(':input[type!="hidden"][type!="submit"]:not(select)').not('[name$="\\[summary\\]"]').val(value);
        $form.find('.quickedit-form-submit').trigger('click.quickedit');
      }

      var formOptions = {
        fieldID: this.fieldModel.get('fieldID'),
        $el: this.$el,
        nocssjs: true,
        other_view_modes: fieldModel.findOtherViewModes(),
        reset: !this.fieldModel.get('entity').get('inTempStore')
      };
      var self = this;
      Drupal.quickedit.util.form.load(formOptions, function (form, ajax) {
        var $backstage = $(Drupal.theme('quickeditBackstage', {
          id: backstageId
        })).appendTo('body');
        var $form = $(form).appendTo($backstage);
        $form.prop('novalidate', true);
        var $submit = $form.find('.quickedit-form-submit');
        self.formSaveAjax = Drupal.quickedit.util.form.ajaxifySaving(formOptions, $submit);

        function removeHiddenForm() {
          Drupal.quickedit.util.form.unajaxifySaving(self.formSaveAjax);
          delete self.formSaveAjax;
          $backstage.remove();
        }

        self.formSaveAjax.commands.quickeditFieldFormSaved = function (ajax, response, status) {
          removeHiddenForm();
          fieldModel.set('state', 'saved');
          fieldModel.set('htmlForOtherViewModes', response.other_view_modes);
          fieldModel.set('html', response.data);
        };

        self.formSaveAjax.commands.quickeditFieldFormValidationErrors = function (ajax, response, status) {
          removeHiddenForm();
          editorModel.set('validationErrors', response.data);
          fieldModel.set('state', 'invalid');
        };

        self.formSaveAjax.commands.quickeditFieldForm = function () {};

        fillAndSubmitForm(editorModel.get('currentValue'));
      });
    },
    showValidationErrors: function showValidationErrors() {
      var $errors = $('<div class="quickedit-validation-errors"></div>').append(this.model.get('validationErrors'));
      this.getEditedElement().addClass('quickedit-validation-error').after($errors);
    },
    removeValidationErrors: function removeValidationErrors() {
      this.getEditedElement().removeClass('quickedit-validation-error').next('.quickedit-validation-errors').remove();
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.quickeditBackstage = function (settings) {
    var html = '';
    html += "<div id=\"".concat(settings.id, "\"></div>");
    return html;
  };

  Drupal.theme.quickeditEntityToolbar = function (settings) {
    var html = '';
    html += "<div id=\"".concat(settings.id, "\" class=\"quickedit quickedit-toolbar-container clearfix\">");
    html += '<i class="quickedit-toolbar-pointer"></i>';
    html += '<div class="quickedit-toolbar-content">';
    html += '<div class="quickedit-toolbar quickedit-toolbar-entity clearfix icon icon-pencil">';
    html += '<div class="quickedit-toolbar-label"></div>';
    html += '</div>';
    html += '<div class="quickedit-toolbar quickedit-toolbar-field clearfix"></div>';
    html += '</div><div class="quickedit-toolbar-lining"></div></div>';
    return html;
  };

  Drupal.theme.quickeditEntityToolbarLabel = function (settings) {
    return "<span class=\"field\">".concat(Drupal.checkPlain(settings.fieldLabel), "</span>").concat(Drupal.checkPlain(settings.entityLabel));
  };

  Drupal.theme.quickeditEntityToolbarFence = function () {
    return '<div id="quickedit-toolbar-fence"></div>';
  };

  Drupal.theme.quickeditFieldToolbar = function (settings) {
    return "<div id=\"".concat(settings.id, "\"></div>");
  };

  Drupal.theme.quickeditToolgroup = function (settings) {
    var classes = settings.classes || [];
    classes.unshift('quickedit-toolgroup');
    var html = '';
    html += "<div class=\"".concat(classes.join(' '), "\"");

    if (settings.id) {
      html += " id=\"".concat(settings.id, "\"");
    }

    html += '>';
    html += Drupal.theme('quickeditButtons', {
      buttons: settings.buttons
    });
    html += '</div>';
    return html;
  };

  Drupal.theme.quickeditButtons = function (settings) {
    var html = '';

    var _loop = function _loop(i) {
      var button = settings.buttons[i];

      if (!button.hasOwnProperty('type')) {
        button.type = 'button';
      }

      var attributes = [];
      var attrMap = settings.buttons[i].attributes || {};
      Object.keys(attrMap).forEach(function (attr) {
        attributes.push(attr + (attrMap[attr] ? "=\"".concat(attrMap[attr], "\"") : ''));
      });
      html += "<button type=\"".concat(button.type, "\" class=\"").concat(button.classes, "\" ").concat(attributes.join(' '), ">").concat(button.label, "</button>");
    };

    for (var i = 0; i < settings.buttons.length; i++) {
      _loop(i);
    }

    return html;
  };

  Drupal.theme.quickeditFormContainer = function (settings) {
    var html = '';
    html += "<div id=\"".concat(settings.id, "\" class=\"quickedit-form-container\">");
    html += '  <div class="quickedit-form">';
    html += '    <div class="placeholder">';
    html += settings.loadingMsg;
    html += '    </div>';
    html += '  </div>';
    html += '</div>';
    return html;
  };
})(jQuery, Drupal);;
!function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="../",i(i.s=8)}([function(e,t){e.exports=jQuery},function(e,t,i){"use strict";i.r(t),function(e){
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var i="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,n=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(i&&navigator.userAgent.indexOf(e[t])>=0)return 1;return 0}();var o=i&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then((function(){t=!1,e()})))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout((function(){t=!1,e()}),n))}};function s(e){return e&&"[object Function]"==={}.toString.call(e)}function r(e,t){if(1!==e.nodeType)return[];var i=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?i[t]:i}function a(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function l(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=r(e),i=t.overflow,n=t.overflowX,o=t.overflowY;return/(auto|scroll|overlay)/.test(i+o+n)?e:l(a(e))}function c(e){return e&&e.referenceNode?e.referenceNode:e}var d=i&&!(!window.MSInputMethodContext||!document.documentMode),u=i&&/MSIE 10/.test(navigator.userAgent);function h(e){return 11===e?d:10===e?u:d||u}function f(e){if(!e)return document.documentElement;for(var t=h(10)?document.body:null,i=e.offsetParent||null;i===t&&e.nextElementSibling;)i=(e=e.nextElementSibling).offsetParent;var n=i&&i.nodeName;return n&&"BODY"!==n&&"HTML"!==n?-1!==["TH","TD","TABLE"].indexOf(i.nodeName)&&"static"===r(i,"position")?f(i):i:e?e.ownerDocument.documentElement:document.documentElement}function p(e){return null!==e.parentNode?p(e.parentNode):e}function m(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var i=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=i?e:t,o=i?t:e,s=document.createRange();s.setStart(n,0),s.setEnd(o,0);var r,a,l=s.commonAncestorContainer;if(e!==l&&t!==l||n.contains(o))return"BODY"===(a=(r=l).nodeName)||"HTML"!==a&&f(r.firstElementChild)!==r?f(l):l;var c=p(e);return c.host?m(c.host,t):m(e,p(t).host)}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",i="top"===t?"scrollTop":"scrollLeft",n=e.nodeName;if("BODY"===n||"HTML"===n){var o=e.ownerDocument.documentElement,s=e.ownerDocument.scrollingElement||o;return s[i]}return e[i]}function v(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=g(t,"top"),o=g(t,"left"),s=i?-1:1;return e.top+=n*s,e.bottom+=n*s,e.left+=o*s,e.right+=o*s,e}function b(e,t){var i="x"===t?"Left":"Top",n="Left"===i?"Right":"Bottom";return parseFloat(e["border"+i+"Width"])+parseFloat(e["border"+n+"Width"])}function _(e,t,i,n){return Math.max(t["offset"+e],t["scroll"+e],i["client"+e],i["offset"+e],i["scroll"+e],h(10)?parseInt(i["offset"+e])+parseInt(n["margin"+("Height"===e?"Top":"Left")])+parseInt(n["margin"+("Height"===e?"Bottom":"Right")]):0)}function w(e){var t=e.body,i=e.documentElement,n=h(10)&&getComputedStyle(i);return{height:_("Height",t,i,n),width:_("Width",t,i,n)}}var y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},E=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),C=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e},I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};function k(e){return I({},e,{right:e.left+e.width,bottom:e.top+e.height})}function T(e){var t={};try{if(h(10)){t=e.getBoundingClientRect();var i=g(e,"top"),n=g(e,"left");t.top+=i,t.left+=n,t.bottom+=i,t.right+=n}else t=e.getBoundingClientRect()}catch(e){}var o={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},s="HTML"===e.nodeName?w(e.ownerDocument):{},a=s.width||e.clientWidth||o.width,l=s.height||e.clientHeight||o.height,c=e.offsetWidth-a,d=e.offsetHeight-l;if(c||d){var u=r(e);c-=b(u,"x"),d-=b(u,"y"),o.width-=c,o.height-=d}return k(o)}function x(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=h(10),o="HTML"===t.nodeName,s=T(e),a=T(t),c=l(e),d=r(t),u=parseFloat(d.borderTopWidth),f=parseFloat(d.borderLeftWidth);i&&o&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var p=k({top:s.top-a.top-u,left:s.left-a.left-f,width:s.width,height:s.height});if(p.marginTop=0,p.marginLeft=0,!n&&o){var m=parseFloat(d.marginTop),g=parseFloat(d.marginLeft);p.top-=u-m,p.bottom-=u-m,p.left-=f-g,p.right-=f-g,p.marginTop=m,p.marginLeft=g}return(n&&!i?t.contains(c):t===c&&"BODY"!==c.nodeName)&&(p=v(p,t)),p}function S(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e.ownerDocument.documentElement,n=x(e,i),o=Math.max(i.clientWidth,window.innerWidth||0),s=Math.max(i.clientHeight,window.innerHeight||0),r=t?0:g(i),a=t?0:g(i,"left"),l={top:r-n.top+n.marginTop,left:a-n.left+n.marginLeft,width:o,height:s};return k(l)}function N(e){var t=e.nodeName;if("BODY"===t||"HTML"===t)return!1;if("fixed"===r(e,"position"))return!0;var i=a(e);return!!i&&N(i)}function O(e){if(!e||!e.parentElement||h())return document.documentElement;for(var t=e.parentElement;t&&"none"===r(t,"transform");)t=t.parentElement;return t||document.documentElement}function D(e,t,i,n){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0},r=o?O(e):m(e,c(t));if("viewport"===n)s=S(r,o);else{var d=void 0;"scrollParent"===n?"BODY"===(d=l(a(t))).nodeName&&(d=e.ownerDocument.documentElement):d="window"===n?e.ownerDocument.documentElement:n;var u=x(d,r,o);if("HTML"!==d.nodeName||N(r))s=u;else{var h=w(e.ownerDocument),f=h.height,p=h.width;s.top+=u.top-u.marginTop,s.bottom=f+u.top,s.left+=u.left-u.marginLeft,s.right=p+u.left}}var g="number"==typeof(i=i||0);return s.left+=g?i:i.left||0,s.top+=g?i:i.top||0,s.right-=g?i:i.right||0,s.bottom-=g?i:i.bottom||0,s}function A(e){return e.width*e.height}function L(e,t,i,n,o){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var r=D(i,n,s,o),a={top:{width:r.width,height:t.top-r.top},right:{width:r.right-t.right,height:r.height},bottom:{width:r.width,height:r.bottom-t.bottom},left:{width:t.left-r.left,height:r.height}},l=Object.keys(a).map((function(e){return I({key:e},a[e],{area:A(a[e])})})).sort((function(e,t){return t.area-e.area})),c=l.filter((function(e){var t=e.width,n=e.height;return t>=i.clientWidth&&n>=i.clientHeight})),d=c.length>0?c[0].key:l[0].key,u=e.split("-")[1];return d+(u?"-"+u:"")}function $(e,t,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=n?O(t):m(t,c(i));return x(i,o,n)}function H(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),i=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),n=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+n,height:e.offsetHeight+i}}function P(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}function z(e,t,i){i=i.split("-")[0];var n=H(e),o={width:n.width,height:n.height},s=-1!==["right","left"].indexOf(i),r=s?"top":"left",a=s?"left":"top",l=s?"height":"width",c=s?"width":"height";return o[r]=t[r]+t[l]/2-n[l]/2,o[a]=i===a?t[a]-n[c]:t[P(a)],o}function j(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function R(e,t,i){return(void 0===i?e:e.slice(0,function(e,t,i){if(Array.prototype.findIndex)return e.findIndex((function(e){return e[t]===i}));var n=j(e,(function(e){return e[t]===i}));return e.indexOf(n)}(e,"name",i))).forEach((function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var i=e.function||e.fn;e.enabled&&s(i)&&(t.offsets.popper=k(t.offsets.popper),t.offsets.reference=k(t.offsets.reference),t=i(t,e))})),t}function M(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=$(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=L(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=z(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=R(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function B(e,t){return e.some((function(e){var i=e.name;return e.enabled&&i===t}))}function W(e){for(var t=[!1,"ms","Webkit","Moz","O"],i=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var o=t[n],s=o?""+o+i:e;if(void 0!==document.body.style[s])return s}return null}function F(){return this.state.isDestroyed=!0,B(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[W("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function U(e){var t=e.ownerDocument;return t?t.defaultView:window}function q(e,t,i,n){i.updateBound=n,U(e).addEventListener("resize",i.updateBound,{passive:!0});var o=l(e);return function e(t,i,n,o){var s="BODY"===t.nodeName,r=s?t.ownerDocument.defaultView:t;r.addEventListener(i,n,{passive:!0}),s||e(l(r.parentNode),i,n,o),o.push(r)}(o,"scroll",i.updateBound,i.scrollParents),i.scrollElement=o,i.eventsEnabled=!0,i}function V(){this.state.eventsEnabled||(this.state=q(this.reference,this.options,this.state,this.scheduleUpdate))}function Q(){var e,t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,U(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach((function(e){e.removeEventListener("scroll",t.updateBound)})),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function K(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function Y(e,t){Object.keys(t).forEach((function(i){var n="";-1!==["width","height","top","right","bottom","left"].indexOf(i)&&K(t[i])&&(n="px"),e.style[i]=t[i]+n}))}var G=i&&/Firefox/i.test(navigator.userAgent);function X(e,t,i){var n=j(e,(function(e){return e.name===t})),o=!!n&&e.some((function(e){return e.name===i&&e.enabled&&e.order<n.order}));if(!o){var s="`"+t+"`",r="`"+i+"`";console.warn(r+" modifier is required by "+s+" modifier in order to work, be sure to include it before "+s+"!")}return o}var J=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Z=J.slice(3);function ee(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=Z.indexOf(e),n=Z.slice(i+1).concat(Z.slice(0,i));return t?n.reverse():n}var te="flip",ie="clockwise",ne="counterclockwise";function oe(e,t,i,n){var o=[0,0],s=-1!==["right","left"].indexOf(n),r=e.split(/(\+|\-)/).map((function(e){return e.trim()})),a=r.indexOf(j(r,(function(e){return-1!==e.search(/,|\s/)})));r[a]&&-1===r[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1!==a?[r.slice(0,a).concat([r[a].split(l)[0]]),[r[a].split(l)[1]].concat(r.slice(a+1))]:[r];return(c=c.map((function(e,n){var o=(1===n?!s:s)?"height":"width",r=!1;return e.reduce((function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,r=!0,e):r?(e[e.length-1]+=t,r=!1,e):e.concat(t)}),[]).map((function(e){return function(e,t,i,n){var o=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),s=+o[1],r=o[2];if(!s)return e;if(0===r.indexOf("%")){var a=void 0;switch(r){case"%p":a=i;break;case"%":case"%r":default:a=n}return k(a)[t]/100*s}if("vh"===r||"vw"===r){return("vh"===r?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*s}return s}(e,o,t,i)}))}))).forEach((function(e,t){e.forEach((function(i,n){K(i)&&(o[t]+=i*("-"===e[n-1]?-1:1))}))})),o}var se={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,i=t.split("-")[0],n=t.split("-")[1];if(n){var o=e.offsets,s=o.reference,r=o.popper,a=-1!==["bottom","top"].indexOf(i),l=a?"left":"top",c=a?"width":"height",d={start:C({},l,s[l]),end:C({},l,s[l]+s[c]-r[c])};e.offsets.popper=I({},r,d[n])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var i=t.offset,n=e.placement,o=e.offsets,s=o.popper,r=o.reference,a=n.split("-")[0],l=void 0;return l=K(+i)?[+i,0]:oe(i,s,r,a),"left"===a?(s.top+=l[0],s.left-=l[1]):"right"===a?(s.top+=l[0],s.left+=l[1]):"top"===a?(s.left+=l[0],s.top-=l[1]):"bottom"===a&&(s.left+=l[0],s.top+=l[1]),e.popper=s,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var i=t.boundariesElement||f(e.instance.popper);e.instance.reference===i&&(i=f(i));var n=W("transform"),o=e.instance.popper.style,s=o.top,r=o.left,a=o[n];o.top="",o.left="",o[n]="";var l=D(e.instance.popper,e.instance.reference,t.padding,i,e.positionFixed);o.top=s,o.left=r,o[n]=a,t.boundaries=l;var c=t.priority,d=e.offsets.popper,u={primary:function(e){var i=d[e];return d[e]<l[e]&&!t.escapeWithReference&&(i=Math.max(d[e],l[e])),C({},e,i)},secondary:function(e){var i="right"===e?"left":"top",n=d[i];return d[e]>l[e]&&!t.escapeWithReference&&(n=Math.min(d[i],l[e]-("right"===e?d.width:d.height))),C({},i,n)}};return c.forEach((function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";d=I({},d,u[t](e))})),e.offsets.popper=d,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,i=t.popper,n=t.reference,o=e.placement.split("-")[0],s=Math.floor,r=-1!==["top","bottom"].indexOf(o),a=r?"right":"bottom",l=r?"left":"top",c=r?"width":"height";return i[a]<s(n[l])&&(e.offsets.popper[l]=s(n[l])-i[c]),i[l]>s(n[a])&&(e.offsets.popper[l]=s(n[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var i;if(!X(e.instance.modifiers,"arrow","keepTogether"))return e;var n=t.element;if("string"==typeof n){if(!(n=e.instance.popper.querySelector(n)))return e}else if(!e.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var o=e.placement.split("-")[0],s=e.offsets,a=s.popper,l=s.reference,c=-1!==["left","right"].indexOf(o),d=c?"height":"width",u=c?"Top":"Left",h=u.toLowerCase(),f=c?"left":"top",p=c?"bottom":"right",m=H(n)[d];l[p]-m<a[h]&&(e.offsets.popper[h]-=a[h]-(l[p]-m)),l[h]+m>a[p]&&(e.offsets.popper[h]+=l[h]+m-a[p]),e.offsets.popper=k(e.offsets.popper);var g=l[h]+l[d]/2-m/2,v=r(e.instance.popper),b=parseFloat(v["margin"+u]),_=parseFloat(v["border"+u+"Width"]),w=g-e.offsets.popper[h]-b-_;return w=Math.max(Math.min(a[d]-m,w),0),e.arrowElement=n,e.offsets.arrow=(C(i={},h,Math.round(w)),C(i,f,""),i),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(B(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var i=D(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split("-")[0],o=P(n),s=e.placement.split("-")[1]||"",r=[];switch(t.behavior){case te:r=[n,o];break;case ie:r=ee(n);break;case ne:r=ee(n,!0);break;default:r=t.behavior}return r.forEach((function(a,l){if(n!==a||r.length===l+1)return e;n=e.placement.split("-")[0],o=P(n);var c=e.offsets.popper,d=e.offsets.reference,u=Math.floor,h="left"===n&&u(c.right)>u(d.left)||"right"===n&&u(c.left)<u(d.right)||"top"===n&&u(c.bottom)>u(d.top)||"bottom"===n&&u(c.top)<u(d.bottom),f=u(c.left)<u(i.left),p=u(c.right)>u(i.right),m=u(c.top)<u(i.top),g=u(c.bottom)>u(i.bottom),v="left"===n&&f||"right"===n&&p||"top"===n&&m||"bottom"===n&&g,b=-1!==["top","bottom"].indexOf(n),_=!!t.flipVariations&&(b&&"start"===s&&f||b&&"end"===s&&p||!b&&"start"===s&&m||!b&&"end"===s&&g),w=!!t.flipVariationsByContent&&(b&&"start"===s&&p||b&&"end"===s&&f||!b&&"start"===s&&g||!b&&"end"===s&&m),y=_||w;(h||v||y)&&(e.flipped=!0,(h||v)&&(n=r[l+1]),y&&(s=function(e){return"end"===e?"start":"start"===e?"end":e}(s)),e.placement=n+(s?"-"+s:""),e.offsets.popper=I({},e.offsets.popper,z(e.instance.popper,e.offsets.reference,e.placement)),e=R(e.instance.modifiers,e,"flip"))})),e},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,i=t.split("-")[0],n=e.offsets,o=n.popper,s=n.reference,r=-1!==["left","right"].indexOf(i),a=-1===["top","left"].indexOf(i);return o[r?"left":"top"]=s[i]-(a?o[r?"width":"height"]:0),e.placement=P(t),e.offsets.popper=k(o),e}},hide:{order:800,enabled:!0,fn:function(e){if(!X(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,i=j(e.instance.modifiers,(function(e){return"preventOverflow"===e.name})).boundaries;if(t.bottom<i.top||t.left>i.right||t.top>i.bottom||t.right<i.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var i=t.x,n=t.y,o=e.offsets.popper,s=j(e.instance.modifiers,(function(e){return"applyStyle"===e.name})).gpuAcceleration;void 0!==s&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var r=void 0!==s?s:t.gpuAcceleration,a=f(e.instance.popper),l=T(a),c={position:o.position},d=function(e,t){var i=e.offsets,n=i.popper,o=i.reference,s=Math.round,r=Math.floor,a=function(e){return e},l=s(o.width),c=s(n.width),d=-1!==["left","right"].indexOf(e.placement),u=-1!==e.placement.indexOf("-"),h=t?d||u||l%2==c%2?s:r:a,f=t?s:a;return{left:h(l%2==1&&c%2==1&&!u&&t?n.left-1:n.left),top:f(n.top),bottom:f(n.bottom),right:h(n.right)}}(e,window.devicePixelRatio<2||!G),u="bottom"===i?"top":"bottom",h="right"===n?"left":"right",p=W("transform"),m=void 0,g=void 0;if(g="bottom"===u?"HTML"===a.nodeName?-a.clientHeight+d.bottom:-l.height+d.bottom:d.top,m="right"===h?"HTML"===a.nodeName?-a.clientWidth+d.right:-l.width+d.right:d.left,r&&p)c[p]="translate3d("+m+"px, "+g+"px, 0)",c[u]=0,c[h]=0,c.willChange="transform";else{var v="bottom"===u?-1:1,b="right"===h?-1:1;c[u]=g*v,c[h]=m*b,c.willChange=u+", "+h}var _={"x-placement":e.placement};return e.attributes=I({},_,e.attributes),e.styles=I({},c,e.styles),e.arrowStyles=I({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,i;return Y(e.instance.popper,e.styles),t=e.instance.popper,i=e.attributes,Object.keys(i).forEach((function(e){!1!==i[e]?t.setAttribute(e,i[e]):t.removeAttribute(e)})),e.arrowElement&&Object.keys(e.arrowStyles).length&&Y(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,i,n,o){var s=$(o,t,e,i.positionFixed),r=L(i.placement,s,t,e,i.modifiers.flip.boundariesElement,i.modifiers.flip.padding);return t.setAttribute("x-placement",r),Y(t,{position:i.positionFixed?"fixed":"absolute"}),i},gpuAcceleration:void 0}}},re=function(){function e(t,i){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};y(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=o(this.update.bind(this)),this.options=I({},e.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=i&&i.jquery?i[0]:i,this.options.modifiers={},Object.keys(I({},e.Defaults.modifiers,r.modifiers)).forEach((function(t){n.options.modifiers[t]=I({},e.Defaults.modifiers[t]||{},r.modifiers?r.modifiers[t]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(e){return I({name:e},n.options.modifiers[e])})).sort((function(e,t){return e.order-t.order})),this.modifiers.forEach((function(e){e.enabled&&s(e.onLoad)&&e.onLoad(n.reference,n.popper,n.options,e,n.state)})),this.update();var a=this.options.eventsEnabled;a&&this.enableEventListeners(),this.state.eventsEnabled=a}return E(e,[{key:"update",value:function(){return M.call(this)}},{key:"destroy",value:function(){return F.call(this)}},{key:"enableEventListeners",value:function(){return V.call(this)}},{key:"disableEventListeners",value:function(){return Q.call(this)}}]),e}();re.Utils=("undefined"!=typeof window?window:e).PopperUtils,re.placements=J,re.Defaults=se,t.default=re}.call(this,i(3))},function(e,t,i){
/*!
  * Bootstrap v4.6.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(e,t,i){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=n(t),s=n(i);function r(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function c(e){var t=this,i=!1;return o.default(this).one(d.TRANSITION_END,(function(){i=!0})),setTimeout((function(){i||d.triggerTransitionEnd(t)}),e),this}var d={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");if(!t||"#"===t){var i=e.getAttribute("href");t=i&&"#"!==i?i.trim():""}try{return document.querySelector(t)?t:null}catch(e){return null}},getTransitionDurationFromElement:function(e){if(!e)return 0;var t=o.default(e).css("transition-duration"),i=o.default(e).css("transition-delay"),n=parseFloat(t),s=parseFloat(i);return n||s?(t=t.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(t)+parseFloat(i))):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(e){o.default(e).trigger("transitionend")},supportsTransitionEnd:function(){return Boolean("transitionend")},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,i){for(var n in i)if(Object.prototype.hasOwnProperty.call(i,n)){var o=i[n],s=t[n],r=s&&d.isElement(s)?"element":null==(a=s)?""+a:{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(o).test(r))throw new Error(e.toUpperCase()+': Option "'+n+'" provided type "'+r+'" but expected type "'+o+'".')}var a},findShadowRoot:function(e){if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){var t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?d.findShadowRoot(e.parentNode):null},jQueryDetection:function(){if(void 0===o.default)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=o.default.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};d.jQueryDetection(),o.default.fn.emulateTransitionEnd=c,o.default.event.special[d.TRANSITION_END]={bindType:"transitionend",delegateType:"transitionend",handle:function(e){if(o.default(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}};var u="alert",h=o.default.fn[u],f=function(){function e(e){this._element=e}var t=e.prototype;return t.close=function(e){var t=this._element;e&&(t=this._getRootElement(e)),this._triggerCloseEvent(t).isDefaultPrevented()||this._removeElement(t)},t.dispose=function(){o.default.removeData(this._element,"bs.alert"),this._element=null},t._getRootElement=function(e){var t=d.getSelectorFromElement(e),i=!1;return t&&(i=document.querySelector(t)),i||(i=o.default(e).closest(".alert")[0]),i},t._triggerCloseEvent=function(e){var t=o.default.Event("close.bs.alert");return o.default(e).trigger(t),t},t._removeElement=function(e){var t=this;if(o.default(e).removeClass("show"),o.default(e).hasClass("fade")){var i=d.getTransitionDurationFromElement(e);o.default(e).one(d.TRANSITION_END,(function(i){return t._destroyElement(e,i)})).emulateTransitionEnd(i)}else this._destroyElement(e)},t._destroyElement=function(e){o.default(e).detach().trigger("closed.bs.alert").remove()},e._jQueryInterface=function(t){return this.each((function(){var i=o.default(this),n=i.data("bs.alert");n||(n=new e(this),i.data("bs.alert",n)),"close"===t&&n[t](this)}))},e._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},a(e,null,[{key:"VERSION",get:function(){return"4.6.0"}}]),e}();o.default(document).on("click.bs.alert.data-api",'[data-dismiss="alert"]',f._handleDismiss(new f)),o.default.fn[u]=f._jQueryInterface,o.default.fn[u].Constructor=f,o.default.fn[u].noConflict=function(){return o.default.fn[u]=h,f._jQueryInterface};var p=o.default.fn.button,m=function(){function e(e){this._element=e,this.shouldAvoidTriggerChange=!1}var t=e.prototype;return t.toggle=function(){var e=!0,t=!0,i=o.default(this._element).closest('[data-toggle="buttons"]')[0];if(i){var n=this._element.querySelector('input:not([type="hidden"])');if(n){if("radio"===n.type)if(n.checked&&this._element.classList.contains("active"))e=!1;else{var s=i.querySelector(".active");s&&o.default(s).removeClass("active")}e&&("checkbox"!==n.type&&"radio"!==n.type||(n.checked=!this._element.classList.contains("active")),this.shouldAvoidTriggerChange||o.default(n).trigger("change")),n.focus(),t=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(t&&this._element.setAttribute("aria-pressed",!this._element.classList.contains("active")),e&&o.default(this._element).toggleClass("active"))},t.dispose=function(){o.default.removeData(this._element,"bs.button"),this._element=null},e._jQueryInterface=function(t,i){return this.each((function(){var n=o.default(this),s=n.data("bs.button");s||(s=new e(this),n.data("bs.button",s)),s.shouldAvoidTriggerChange=i,"toggle"===t&&s[t]()}))},a(e,null,[{key:"VERSION",get:function(){return"4.6.0"}}]),e}();o.default(document).on("click.bs.button.data-api",'[data-toggle^="button"]',(function(e){var t=e.target,i=t;if(o.default(t).hasClass("btn")||(t=o.default(t).closest(".btn")[0]),!t||t.hasAttribute("disabled")||t.classList.contains("disabled"))e.preventDefault();else{var n=t.querySelector('input:not([type="hidden"])');if(n&&(n.hasAttribute("disabled")||n.classList.contains("disabled")))return void e.preventDefault();"INPUT"!==i.tagName&&"LABEL"===t.tagName||m._jQueryInterface.call(o.default(t),"toggle","INPUT"===i.tagName)}})).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',(function(e){var t=o.default(e.target).closest(".btn")[0];o.default(t).toggleClass("focus",/^focus(in)?$/.test(e.type))})),o.default(window).on("load.bs.button.data-api",(function(){for(var e=[].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')),t=0,i=e.length;t<i;t++){var n=e[t],o=n.querySelector('input:not([type="hidden"])');o.checked||o.hasAttribute("checked")?n.classList.add("active"):n.classList.remove("active")}for(var s=0,r=(e=[].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;s<r;s++){var a=e[s];"true"===a.getAttribute("aria-pressed")?a.classList.add("active"):a.classList.remove("active")}})),o.default.fn.button=m._jQueryInterface,o.default.fn.button.Constructor=m,o.default.fn.button.noConflict=function(){return o.default.fn.button=p,m._jQueryInterface};var g="carousel",v=".bs.carousel",b=o.default.fn[g],_={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},w={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},y={TOUCH:"touch",PEN:"pen"},E=function(){function e(e,t){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._element=e,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=e.prototype;return t.next=function(){this._isSliding||this._slide("next")},t.nextWhenVisible=function(){var e=o.default(this._element);!document.hidden&&e.is(":visible")&&"hidden"!==e.css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide("prev")},t.pause=function(e){e||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(d.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(e){var t=this;this._activeElement=this._element.querySelector(".active.carousel-item");var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)o.default(this._element).one("slid.bs.carousel",(function(){return t.to(e)}));else{if(i===e)return this.pause(),void this.cycle();var n=e>i?"next":"prev";this._slide(n,this._items[e])}},t.dispose=function(){o.default(this._element).off(v),o.default.removeData(this._element,"bs.carousel"),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(e){return e=l({},_,e),d.typeCheckConfig(g,e,w),e},t._handleSwipe=function(){var e=Math.abs(this.touchDeltaX);if(!(e<=40)){var t=e/this.touchDeltaX;this.touchDeltaX=0,t>0&&this.prev(),t<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&o.default(this._element).on("keydown.bs.carousel",(function(t){return e._keydown(t)})),"hover"===this._config.pause&&o.default(this._element).on("mouseenter.bs.carousel",(function(t){return e.pause(t)})).on("mouseleave.bs.carousel",(function(t){return e.cycle(t)})),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var e=this;if(this._touchSupported){var t=function(t){e._pointerEvent&&y[t.originalEvent.pointerType.toUpperCase()]?e.touchStartX=t.originalEvent.clientX:e._pointerEvent||(e.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){e._pointerEvent&&y[t.originalEvent.pointerType.toUpperCase()]&&(e.touchDeltaX=t.originalEvent.clientX-e.touchStartX),e._handleSwipe(),"hover"===e._config.pause&&(e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout((function(t){return e.cycle(t)}),500+e._config.interval))};o.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel",(function(e){return e.preventDefault()})),this._pointerEvent?(o.default(this._element).on("pointerdown.bs.carousel",(function(e){return t(e)})),o.default(this._element).on("pointerup.bs.carousel",(function(e){return i(e)})),this._element.classList.add("pointer-event")):(o.default(this._element).on("touchstart.bs.carousel",(function(e){return t(e)})),o.default(this._element).on("touchmove.bs.carousel",(function(t){return function(t){t.originalEvent.touches&&t.originalEvent.touches.length>1?e.touchDeltaX=0:e.touchDeltaX=t.originalEvent.touches[0].clientX-e.touchStartX}(t)})),o.default(this._element).on("touchend.bs.carousel",(function(e){return i(e)})))}},t._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next()}},t._getItemIndex=function(e){return this._items=e&&e.parentNode?[].slice.call(e.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(e)},t._getItemByDirection=function(e,t){var i="next"===e,n="prev"===e,o=this._getItemIndex(t),s=this._items.length-1;if((n&&0===o||i&&o===s)&&!this._config.wrap)return t;var r=(o+("prev"===e?-1:1))%this._items.length;return-1===r?this._items[this._items.length-1]:this._items[r]},t._triggerSlideEvent=function(e,t){var i=this._getItemIndex(e),n=this._getItemIndex(this._element.querySelector(".active.carousel-item")),s=o.default.Event("slide.bs.carousel",{relatedTarget:e,direction:t,from:n,to:i});return o.default(this._element).trigger(s),s},t._setActiveIndicatorElement=function(e){if(this._indicatorsElement){var t=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));o.default(t).removeClass("active");var i=this._indicatorsElement.children[this._getItemIndex(e)];i&&o.default(i).addClass("active")}},t._updateInterval=function(){var e=this._activeElement||this._element.querySelector(".active.carousel-item");if(e){var t=parseInt(e.getAttribute("data-interval"),10);t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval}},t._slide=function(e,t){var i,n,s,r=this,a=this._element.querySelector(".active.carousel-item"),l=this._getItemIndex(a),c=t||a&&this._getItemByDirection(e,a),u=this._getItemIndex(c),h=Boolean(this._interval);if("next"===e?(i="carousel-item-left",n="carousel-item-next",s="left"):(i="carousel-item-right",n="carousel-item-prev",s="right"),c&&o.default(c).hasClass("active"))this._isSliding=!1;else if(!this._triggerSlideEvent(c,s).isDefaultPrevented()&&a&&c){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(c),this._activeElement=c;var f=o.default.Event("slid.bs.carousel",{relatedTarget:c,direction:s,from:l,to:u});if(o.default(this._element).hasClass("slide")){o.default(c).addClass(n),d.reflow(c),o.default(a).addClass(i),o.default(c).addClass(i);var p=d.getTransitionDurationFromElement(a);o.default(a).one(d.TRANSITION_END,(function(){o.default(c).removeClass(i+" "+n).addClass("active"),o.default(a).removeClass("active "+n+" "+i),r._isSliding=!1,setTimeout((function(){return o.default(r._element).trigger(f)}),0)})).emulateTransitionEnd(p)}else o.default(a).removeClass("active"),o.default(c).addClass("active"),this._isSliding=!1,o.default(this._element).trigger(f);h&&this.cycle()}},e._jQueryInterface=function(t){return this.each((function(){var i=o.default(this).data("bs.carousel"),n=l({},_,o.default(this).data());"object"==typeof t&&(n=l({},n,t));var s="string"==typeof t?t:n.slide;if(i||(i=new e(this,n),o.default(this).data("bs.carousel",i)),"number"==typeof t)i.to(t);else if("string"==typeof s){if(void 0===i[s])throw new TypeError('No method named "'+s+'"');i[s]()}else n.interval&&n.ride&&(i.pause(),i.cycle())}))},e._dataApiClickHandler=function(t){var i=d.getSelectorFromElement(this);if(i){var n=o.default(i)[0];if(n&&o.default(n).hasClass("carousel")){var s=l({},o.default(n).data(),o.default(this).data()),r=this.getAttribute("data-slide-to");r&&(s.interval=!1),e._jQueryInterface.call(o.default(n),s),r&&o.default(n).data("bs.carousel").to(r),t.preventDefault()}}},a(e,null,[{key:"VERSION",get:function(){return"4.6.0"}},{key:"Default",get:function(){return _}}]),e}();o.default(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",E._dataApiClickHandler),o.default(window).on("load.bs.carousel.data-api",(function(){for(var e=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),t=0,i=e.length;t<i;t++){var n=o.default(e[t]);E._jQueryInterface.call(n,n.data())}})),o.default.fn[g]=E._jQueryInterface,o.default.fn[g].Constructor=E,o.default.fn[g].noConflict=function(){return o.default.fn[g]=b,E._jQueryInterface};var C="collapse",I=o.default.fn[C],k={toggle:!0,parent:""},T={toggle:"boolean",parent:"(string|element)"},x=function(){function e(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var i=[].slice.call(document.querySelectorAll('[data-toggle="collapse"]')),n=0,o=i.length;n<o;n++){var s=i[n],r=d.getSelectorFromElement(s),a=[].slice.call(document.querySelectorAll(r)).filter((function(t){return t===e}));null!==r&&a.length>0&&(this._selector=r,this._triggerArray.push(s))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=e.prototype;return t.toggle=function(){o.default(this._element).hasClass("show")?this.hide():this.show()},t.show=function(){var t,i,n=this;if(!(this._isTransitioning||o.default(this._element).hasClass("show")||(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(e){return"string"==typeof n._config.parent?e.getAttribute("data-parent")===n._config.parent:e.classList.contains("collapse")}))).length&&(t=null),t&&(i=o.default(t).not(this._selector).data("bs.collapse"))&&i._isTransitioning))){var s=o.default.Event("show.bs.collapse");if(o.default(this._element).trigger(s),!s.isDefaultPrevented()){t&&(e._jQueryInterface.call(o.default(t).not(this._selector),"hide"),i||o.default(t).data("bs.collapse",null));var r=this._getDimension();o.default(this._element).removeClass("collapse").addClass("collapsing"),this._element.style[r]=0,this._triggerArray.length&&o.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded",!0),this.setTransitioning(!0);var a="scroll"+(r[0].toUpperCase()+r.slice(1)),l=d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END,(function(){o.default(n._element).removeClass("collapsing").addClass("collapse show"),n._element.style[r]="",n.setTransitioning(!1),o.default(n._element).trigger("shown.bs.collapse")})).emulateTransitionEnd(l),this._element.style[r]=this._element[a]+"px"}}},t.hide=function(){var e=this;if(!this._isTransitioning&&o.default(this._element).hasClass("show")){var t=o.default.Event("hide.bs.collapse");if(o.default(this._element).trigger(t),!t.isDefaultPrevented()){var i=this._getDimension();this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",d.reflow(this._element),o.default(this._element).addClass("collapsing").removeClass("collapse show");var n=this._triggerArray.length;if(n>0)for(var s=0;s<n;s++){var r=this._triggerArray[s],a=d.getSelectorFromElement(r);null!==a&&(o.default([].slice.call(document.querySelectorAll(a))).hasClass("show")||o.default(r).addClass("collapsed").attr("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[i]="";var l=d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END,(function(){e.setTransitioning(!1),o.default(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")})).emulateTransitionEnd(l)}}},t.setTransitioning=function(e){this._isTransitioning=e},t.dispose=function(){o.default.removeData(this._element,"bs.collapse"),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(e){return(e=l({},k,e)).toggle=Boolean(e.toggle),d.typeCheckConfig(C,e,T),e},t._getDimension=function(){return o.default(this._element).hasClass("width")?"width":"height"},t._getParent=function(){var t,i=this;d.isElement(this._config.parent)?(t=this._config.parent,void 0!==this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var n='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',s=[].slice.call(t.querySelectorAll(n));return o.default(s).each((function(t,n){i._addAriaAndCollapsedClass(e._getTargetFromElement(n),[n])})),t},t._addAriaAndCollapsedClass=function(e,t){var i=o.default(e).hasClass("show");t.length&&o.default(t).toggleClass("collapsed",!i).attr("aria-expanded",i)},e._getTargetFromElement=function(e){var t=d.getSelectorFromElement(e);return t?document.querySelector(t):null},e._jQueryInterface=function(t){return this.each((function(){var i=o.default(this),n=i.data("bs.collapse"),s=l({},k,i.data(),"object"==typeof t&&t?t:{});if(!n&&s.toggle&&"string"==typeof t&&/show|hide/.test(t)&&(s.toggle=!1),n||(n=new e(this,s),i.data("bs.collapse",n)),"string"==typeof t){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t]()}}))},a(e,null,[{key:"VERSION",get:function(){return"4.6.0"}},{key:"Default",get:function(){return k}}]),e}();o.default(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',(function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var t=o.default(this),i=d.getSelectorFromElement(this),n=[].slice.call(document.querySelectorAll(i));o.default(n).each((function(){var e=o.default(this),i=e.data("bs.collapse")?"toggle":t.data();x._jQueryInterface.call(e,i)}))})),o.default.fn[C]=x._jQueryInterface,o.default.fn[C].Constructor=x,o.default.fn[C].noConflict=function(){return o.default.fn[C]=I,x._jQueryInterface};var S="dropdown",N=o.default.fn[S],O=new RegExp("38|40|27"),D={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},A={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},L=function(){function e(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=e.prototype;return t.toggle=function(){if(!this._element.disabled&&!o.default(this._element).hasClass("disabled")){var t=o.default(this._menu).hasClass("show");e._clearMenus(),t||this.show(!0)}},t.show=function(t){if(void 0===t&&(t=!1),!(this._element.disabled||o.default(this._element).hasClass("disabled")||o.default(this._menu).hasClass("show"))){var i={relatedTarget:this._element},n=o.default.Event("show.bs.dropdown",i),r=e._getParentFromElement(this._element);if(o.default(r).trigger(n),!n.isDefaultPrevented()){if(!this._inNavbar&&t){if(void 0===s.default)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var a=this._element;"parent"===this._config.reference?a=r:d.isElement(this._config.reference)&&(a=this._config.reference,void 0!==this._config.reference.jquery&&(a=this._config.reference[0])),"scrollParent"!==this._config.boundary&&o.default(r).addClass("position-static"),this._popper=new s.default(a,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===o.default(r).closest(".navbar-nav").length&&o.default(document.body).children().on("mouseover",null,o.default.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),o.default(this._menu).toggleClass("show"),o.default(r).toggleClass("show").trigger(o.default.Event("shown.bs.dropdown",i))}}},t.hide=function(){if(!this._element.disabled&&!o.default(this._element).hasClass("disabled")&&o.default(this._menu).hasClass("show")){var t={relatedTarget:this._element},i=o.default.Event("hide.bs.dropdown",t),n=e._getParentFromElement(this._element);o.default(n).trigger(i),i.isDefaultPrevented()||(this._popper&&this._popper.destroy(),o.default(this._menu).toggleClass("show"),o.default(n).toggleClass("show").trigger(o.default.Event("hidden.bs.dropdown",t)))}},t.dispose=function(){o.default.removeData(this._element,"bs.dropdown"),o.default(this._element).off(".bs.dropdown"),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;o.default(this._element).on("click.bs.dropdown",(function(t){t.preventDefault(),t.stopPropagation(),e.toggle()}))},t._getConfig=function(e){return e=l({},this.constructor.Default,o.default(this._element).data(),e),d.typeCheckConfig(S,e,this.constructor.DefaultType),e},t._getMenuElement=function(){if(!this._menu){var t=e._getParentFromElement(this._element);t&&(this._menu=t.querySelector(".dropdown-menu"))}return this._menu},t._getPlacement=function(){var e=o.default(this._element.parentNode),t="bottom-start";return e.hasClass("dropup")?t=o.default(this._menu).hasClass("dropdown-menu-right")?"top-end":"top-start":e.hasClass("dropright")?t="right-start":e.hasClass("dropleft")?t="left-start":o.default(this._menu).hasClass("dropdown-menu-right")&&(t="bottom-end"),t},t._detectNavbar=function(){return o.default(this._element).closest(".navbar").length>0},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var e={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(e.modifiers.applyStyle={enabled:!1}),l({},e,this._config.popperConfig)},e._jQueryInterface=function(t){return this.each((function(){var i=o.default(this).data("bs.dropdown");if(i||(i=new e(this,"object"==typeof t?t:null),o.default(this).data("bs.dropdown",i)),"string"==typeof t){if(void 0===i[t])throw new TypeError('No method named "'+t+'"');i[t]()}}))},e._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var i=[].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')),n=0,s=i.length;n<s;n++){var r=e._getParentFromElement(i[n]),a=o.default(i[n]).data("bs.dropdown"),l={relatedTarget:i[n]};if(t&&"click"===t.type&&(l.clickEvent=t),a){var c=a._menu;if(o.default(r).hasClass("show")&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&o.default.contains(r,t.target))){var d=o.default.Event("hide.bs.dropdown",l);o.default(r).trigger(d),d.isDefaultPrevented()||("ontouchstart"in document.documentElement&&o.default(document.body).children().off("mouseover",null,o.default.noop),i[n].setAttribute("aria-expanded","false"),a._popper&&a._popper.destroy(),o.default(c).removeClass("show"),o.default(r).removeClass("show").trigger(o.default.Event("hidden.bs.dropdown",l)))}}}},e._getParentFromElement=function(e){var t,i=d.getSelectorFromElement(e);return i&&(t=document.querySelector(i)),t||e.parentNode},e._dataApiKeydownHandler=function(t){if(!(/input|textarea/i.test(t.target.tagName)?32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||o.default(t.target).closest(".dropdown-menu").length):!O.test(t.which))&&!this.disabled&&!o.default(this).hasClass("disabled")){var i=e._getParentFromElement(this),n=o.default(i).hasClass("show");if(n||27!==t.which){if(t.preventDefault(),t.stopPropagation(),!n||27===t.which||32===t.which)return 27===t.which&&o.default(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"),void o.default(this).trigger("click");var s=[].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(e){return o.default(e).is(":visible")}));if(0!==s.length){var r=s.indexOf(t.target);38===t.which&&r>0&&r--,40===t.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}}},a(e,null,[{key:"VERSION",get:function(){return"4.6.0"}},{key:"Default",get:function(){return D}},{key:"DefaultType",get:function(){return A}}]),e}();o.default(document).on("keydown.bs.dropdown.data-api",'[data-toggle="dropdown"]',L._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api",".dropdown-menu",L._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api",L._clearMenus).on("click.bs.dropdown.data-api",'[data-toggle="dropdown"]',(function(e){e.preventDefault(),e.stopPropagation(),L._jQueryInterface.call(o.default(this),"toggle")})).on("click.bs.dropdown.data-api",".dropdown form",(function(e){e.stopPropagation()})),o.default.fn[S]=L._jQueryInterface,o.default.fn[S].Constructor=L,o.default.fn[S].noConflict=function(){return o.default.fn[S]=N,L._jQueryInterface};var $=o.default.fn.modal,H={backdrop:!0,keyboard:!0,focus:!0,show:!0},P={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},z=function(){function e(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=e.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=e.prototype;return t.toggle=function(e){return this._isShown?this.hide():this.show(e)},t.show=function(e){var t=this;if(!this._isShown&&!this._isTransitioning){o.default(this._element).hasClass("fade")&&(this._isTransitioning=!0);var i=o.default.Event("show.bs.modal",{relatedTarget:e});o.default(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),o.default(this._element).on("click.dismiss.bs.modal",'[data-dismiss="modal"]',(function(e){return t.hide(e)})),o.default(this._dialog).on("mousedown.dismiss.bs.modal",(function(){o.default(t._element).one("mouseup.dismiss.bs.modal",(function(e){o.default(e.target).is(t._element)&&(t._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return t._showElement(e)})))}},t.hide=function(e){var t=this;if(e&&e.preventDefault(),this._isShown&&!this._isTransitioning){var i=o.default.Event("hide.bs.modal");if(o.default(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var n=o.default(this._element).hasClass("fade");if(n&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),o.default(document).off("focusin.bs.modal"),o.default(this._element).removeClass("show"),o.default(this._element).off("click.dismiss.bs.modal"),o.default(this._dialog).off("mousedown.dismiss.bs.modal"),n){var s=d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END,(function(e){return t._hideModal(e)})).emulateTransitionEnd(s)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach((function(e){return o.default(e).off(".bs.modal")})),o.default(document).off("focusin.bs.modal"),o.default.removeData(this._element,"bs.modal"),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(e){return e=l({},H,e),d.typeCheckConfig("modal",e,P),e},t._triggerBackdropTransition=function(){var e=this,t=o.default.Event("hidePrevented.bs.modal");if(o.default(this._element).trigger(t),!t.isDefaultPrevented()){var i=this._element.scrollHeight>document.documentElement.clientHeight;i||(this._element.style.overflowY="hidden"),this._element.classList.add("modal-static");var n=d.getTransitionDurationFromElement(this._dialog);o.default(this._element).off(d.TRANSITION_END),o.default(this._element).one(d.TRANSITION_END,(function(){e._element.classList.remove("modal-static"),i||o.default(e._element).one(d.TRANSITION_END,(function(){e._element.style.overflowY=""})).emulateTransitionEnd(e._element,n)})).emulateTransitionEnd(n),this._element.focus()}},t._showElement=function(e){var t=this,i=o.default(this._element).hasClass("fade"),n=this._dialog?this._dialog.querySelector(".modal-body"):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),o.default(this._dialog).hasClass("modal-dialog-scrollable")&&n?n.scrollTop=0:this._element.scrollTop=0,i&&d.reflow(this._element),o.default(this._element).addClass("show"),this._config.focus&&this._enforceFocus();var s=o.default.Event("shown.bs.modal",{relatedTarget:e}),r=function(){t._config.focus&&t._element.focus(),t._isTransitioning=!1,o.default(t._element).trigger(s)};if(i){var a=d.getTransitionDurationFromElement(this._dialog);o.default(this._dialog).one(d.TRANSITION_END,r).emulateTransitionEnd(a)}else r()},t._enforceFocus=function(){var e=this;o.default(document).off("focusin.bs.modal").on("focusin.bs.modal",(function(t){document!==t.target&&e._element!==t.target&&0===o.default(e._element).has(t.target).length&&e._element.focus()}))},t._setEscapeEvent=function(){var e=this;this._isShown?o.default(this._element).on("keydown.dismiss.bs.modal",(function(t){e._config.keyboard&&27===t.which?(t.preventDefault(),e.hide()):e._config.keyboard||27!==t.which||e._triggerBackdropTransition()})):this._isShown||o.default(this._element).off("keydown.dismiss.bs.modal")},t._setResizeEvent=function(){var e=this;this._isShown?o.default(window).on("resize.bs.modal",(function(t){return e.handleUpdate(t)})):o.default(window).off("resize.bs.modal")},t._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop((function(){o.default(document.body).removeClass("modal-open"),e._resetAdjustments(),e._resetScrollbar(),o.default(e._element).trigger("hidden.bs.modal")}))},t._removeBackdrop=function(){this._backdrop&&(o.default(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(e){var t=this,i=o.default(this._element).hasClass("fade")?"fade":"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",i&&this._backdrop.classList.add(i),o.default(this._backdrop).appendTo(document.body),o.default(this._element).on("click.dismiss.bs.modal",(function(e){t._ignoreBackdropClick?t._ignoreBackdropClick=!1:e.target===e.currentTarget&&("static"===t._config.backdrop?t._triggerBackdropTransition():t.hide())})),i&&d.reflow(this._backdrop),o.default(this._backdrop).addClass("show"),!e)return;if(!i)return void e();var n=d.getTransitionDurationFromElement(this._backdrop);o.default(this._backdrop).one(d.TRANSITION_END,e).emulateTransitionEnd(n)}else if(!this._isShown&&this._backdrop){o.default(this._backdrop).removeClass("show");var s=function(){t._removeBackdrop(),e&&e()};if(o.default(this._element).hasClass("fade")){var r=d.getTransitionDurationFromElement(this._backdrop);o.default(this._backdrop).one(d.TRANSITION_END,s).emulateTransitionEnd(r)}else s()}else e&&e()},t._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(e.left+e.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),i=[].slice.call(document.querySelectorAll(".sticky-top"));o.default(t).each((function(t,i){var n=i.style.paddingRight,s=o.default(i).css("padding-right");o.default(i).data("padding-right",n).css("padding-right",parseFloat(s)+e._scrollbarWidth+"px")})),o.default(i).each((function(t,i){var n=i.style.marginRight,s=o.default(i).css("margin-right");o.default(i).data("margin-right",n).css("margin-right",parseFloat(s)-e._scrollbarWidth+"px")}));var n=document.body.style.paddingRight,s=o.default(document.body).css("padding-right");o.default(document.body).data("padding-right",n).css("padding-right",parseFloat(s)+this._scrollbarWidth+"px")}o.default(document.body).addClass("modal-open")},t._resetScrollbar=function(){var e=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));o.default(e).each((function(e,t){var i=o.default(t).data("padding-right");o.default(t).removeData("padding-right"),t.style.paddingRight=i||""}));var t=[].slice.call(document.querySelectorAll(".sticky-top"));o.default(t).each((function(e,t){var i=o.default(t).data("margin-right");void 0!==i&&o.default(t).css("margin-right",i).removeData("margin-right")}));var i=o.default(document.body).data("padding-right");o.default(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},t._getScrollbarWidth=function(){var e=document.createElement("div");e.className="modal-scrollbar-measure",document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},e._jQueryInterface=function(t,i){return this.each((function(){var n=o.default(this).data("bs.modal"),s=l({},H,o.default(this).data(),"object"==typeof t&&t?t:{});if(n||(n=new e(this,s),o.default(this).data("bs.modal",n)),"string"==typeof t){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t](i)}else s.show&&n.show(i)}))},a(e,null,[{key:"VERSION",get:function(){return"4.6.0"}},{key:"Default",get:function(){return H}}]),e}();o.default(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(e){var t,i=this,n=d.getSelectorFromElement(this);n&&(t=document.querySelector(n));var s=o.default(t).data("bs.modal")?"toggle":l({},o.default(t).data(),o.default(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var r=o.default(t).one("show.bs.modal",(function(e){e.isDefaultPrevented()||r.one("hidden.bs.modal",(function(){o.default(i).is(":visible")&&i.focus()}))}));z._jQueryInterface.call(o.default(t),s,this)})),o.default.fn.modal=z._jQueryInterface,o.default.fn.modal.Constructor=z,o.default.fn.modal.noConflict=function(){return o.default.fn.modal=$,z._jQueryInterface};var j=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],R={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},M=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,B=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function W(e,t,i){if(0===e.length)return e;if(i&&"function"==typeof i)return i(e);for(var n=(new window.DOMParser).parseFromString(e,"text/html"),o=Object.keys(t),s=[].slice.call(n.body.querySelectorAll("*")),r=function(e,i){var n=s[e],r=n.nodeName.toLowerCase();if(-1===o.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var a=[].slice.call(n.attributes),l=[].concat(t["*"]||[],t[r]||[]);a.forEach((function(e){(function(e,t){var i=e.nodeName.toLowerCase();if(-1!==t.indexOf(i))return-1===j.indexOf(i)||Boolean(e.nodeValue.match(M)||e.nodeValue.match(B));for(var n=t.filter((function(e){return e instanceof RegExp})),o=0,s=n.length;o<s;o++)if(i.match(n[o]))return!0;return!1})(e,l)||n.removeAttribute(e.nodeName)}))},a=0,l=s.length;a<l;a++)r(a);return n.body.innerHTML}var F="tooltip",U=o.default.fn[F],q=new RegExp("(^|\\s)bs-tooltip\\S+","g"),V=["sanitize","whiteList","sanitizeFn"],Q={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},K={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Y={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",customClass:"",sanitize:!0,sanitizeFn:null,whiteList:R,popperConfig:null},G={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},X=function(){function e(e,t){if(void 0===s.default)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=e,this.config=this._getConfig(t),this.tip=null,this._setListeners()}var t=e.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(e){if(this._isEnabled)if(e){var t=this.constructor.DATA_KEY,i=o.default(e.currentTarget).data(t);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),o.default(e.currentTarget).data(t,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(o.default(this.getTipElement()).hasClass("show"))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),o.default.removeData(this.element,this.constructor.DATA_KEY),o.default(this.element).off(this.constructor.EVENT_KEY),o.default(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&o.default(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===o.default(this.element).css("display"))throw new Error("Please use show on visible elements");var t=o.default.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){o.default(this.element).trigger(t);var i=d.findShadowRoot(this.element),n=o.default.contains(null!==i?i:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!n)return;var r=this.getTipElement(),a=d.getUID(this.constructor.NAME);r.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&o.default(r).addClass("fade");var l="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,c=this._getAttachment(l);this.addAttachmentClass(c);var u=this._getContainer();o.default(r).data(this.constructor.DATA_KEY,this),o.default.contains(this.element.ownerDocument.documentElement,this.tip)||o.default(r).appendTo(u),o.default(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new s.default(this.element,r,this._getPopperConfig(c)),o.default(r).addClass("show"),o.default(r).addClass(this.config.customClass),"ontouchstart"in document.documentElement&&o.default(document.body).children().on("mouseover",null,o.default.noop);var h=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,o.default(e.element).trigger(e.constructor.Event.SHOWN),"out"===t&&e._leave(null,e)};if(o.default(this.tip).hasClass("fade")){var f=d.getTransitionDurationFromElement(this.tip);o.default(this.tip).one(d.TRANSITION_END,h).emulateTransitionEnd(f)}else h()}},t.hide=function(e){var t=this,i=this.getTipElement(),n=o.default.Event(this.constructor.Event.HIDE),s=function(){"show"!==t._hoverState&&i.parentNode&&i.parentNode.removeChild(i),t._cleanTipClass(),t.element.removeAttribute("aria-describedby"),o.default(t.element).trigger(t.constructor.Event.HIDDEN),null!==t._popper&&t._popper.destroy(),e&&e()};if(o.default(this.element).trigger(n),!n.isDefaultPrevented()){if(o.default(i).removeClass("show"),"ontouchstart"in document.documentElement&&o.default(document.body).children().off("mouseover",null,o.default.noop),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,o.default(this.tip).hasClass("fade")){var r=d.getTransitionDurationFromElement(i);o.default(i).one(d.TRANSITION_END,s).emulateTransitionEnd(r)}else s();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(e){o.default(this.getTipElement()).addClass("bs-tooltip-"+e)},t.getTipElement=function(){return this.tip=this.tip||o.default(this.config.template)[0],this.tip},t.setContent=function(){var e=this.getTipElement();this.setElementContent(o.default(e.querySelectorAll(".tooltip-inner")),this.getTitle()),o.default(e).removeClass("fade show")},t.setElementContent=function(e,t){"object"!=typeof t||!t.nodeType&&!t.jquery?this.config.html?(this.config.sanitize&&(t=W(t,this.config.whiteList,this.config.sanitizeFn)),e.html(t)):e.text(t):this.config.html?o.default(t).parent().is(e)||e.empty().append(t):e.text(o.default(t).text())},t.getTitle=function(){var e=this.element.getAttribute("data-original-title");return e||(e="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),e},t._getPopperConfig=function(e){var t=this;return l({},{placement:e,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){return t._handlePopperPlacementChange(e)}},this.config.popperConfig)},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:d.isElement(this.config.container)?o.default(this.config.container):o.default(document).find(this.config.container)},t._getAttachment=function(e){return K[e.toUpperCase()]},t._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach((function(t){if("click"===t)o.default(e.element).on(e.constructor.Event.CLICK,e.config.selector,(function(t){return e.toggle(t)}));else if("manual"!==t){var i="hover"===t?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,n="hover"===t?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;o.default(e.element).on(i,e.config.selector,(function(t){return e._enter(t)})).on(n,e.config.selector,(function(t){return e._leave(t)}))}})),this._hideModalHandler=function(){e.element&&e.hide()},o.default(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var e=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==e)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(e,t){var i=this.constructor.DATA_KEY;(t=t||o.default(e.currentTarget).data(i))||(t=new this.constructor(e.currentTarget,this._getDelegateConfig()),o.default(e.currentTarget).data(i,t)),e&&(t._activeTrigger["focusin"===e.type?"focus":"hover"]=!0),o.default(t.getTipElement()).hasClass("show")||"show"===t._hoverState?t._hoverState="show":(clearTimeout(t._timeout),t._hoverState="show",t.config.delay&&t.config.delay.show?t._timeout=setTimeout((function(){"show"===t._hoverState&&t.show()}),t.config.delay.show):t.show())},t._leave=function(e,t){var i=this.constructor.DATA_KEY;(t=t||o.default(e.currentTarget).data(i))||(t=new this.constructor(e.currentTarget,this._getDelegateConfig()),o.default(e.currentTarget).data(i,t)),e&&(t._activeTrigger["focusout"===e.type?"focus":"hover"]=!1),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState="out",t.config.delay&&t.config.delay.hide?t._timeout=setTimeout((function(){"out"===t._hoverState&&t.hide()}),t.config.delay.hide):t.hide())},t._isWithActiveTrigger=function(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1},t._getConfig=function(e){var t=o.default(this.element).data();return Object.keys(t).forEach((function(e){-1!==V.indexOf(e)&&delete t[e]})),"number"==typeof(e=l({},this.constructor.Default,t,"object"==typeof e&&e?e:{})).delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),d.typeCheckConfig(F,e,this.constructor.DefaultType),e.sanitize&&(e.template=W(e.template,e.whiteList,e.sanitizeFn)),e},t._getDelegateConfig=function(){var e={};if(this.config)for(var t in this.config)this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t]);return e},t._cleanTipClass=function(){var e=o.default(this.getTipElement()),t=e.attr("class").match(q);null!==t&&t.length&&e.removeClass(t.join(""))},t._handlePopperPlacementChange=function(e){this.tip=e.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement))},t._fixTransition=function(){var e=this.getTipElement(),t=this.config.animation;null===e.getAttribute("x-placement")&&(o.default(e).removeClass("fade"),this.config.animation=!1,this.hide(),this.show(),this.config.animation=t)},e._jQueryInterface=function(t){return this.each((function(){var i=o.default(this),n=i.data("bs.tooltip"),s="object"==typeof t&&t;if((n||!/dispose|hide/.test(t))&&(n||(n=new e(this,s),i.data("bs.tooltip",n)),"string"==typeof t)){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t]()}}))},a(e,null,[{key:"VERSION",get:function(){return"4.6.0"}},{key:"Default",get:function(){return Y}},{key:"NAME",get:function(){return F}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return G}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return Q}}]),e}();o.default.fn[F]=X._jQueryInterface,o.default.fn[F].Constructor=X,o.default.fn[F].noConflict=function(){return o.default.fn[F]=U,X._jQueryInterface};var J="popover",Z=o.default.fn[J],ee=new RegExp("(^|\\s)bs-popover\\S+","g"),te=l({},X.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),ie=l({},X.DefaultType,{content:"(string|element|function)"}),ne={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},oe=function(e){var t,i;function n(){return e.apply(this,arguments)||this}i=e,(t=n).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i;var s=n.prototype;return s.isWithContent=function(){return this.getTitle()||this._getContent()},s.addAttachmentClass=function(e){o.default(this.getTipElement()).addClass("bs-popover-"+e)},s.getTipElement=function(){return this.tip=this.tip||o.default(this.config.template)[0],this.tip},s.setContent=function(){var e=o.default(this.getTipElement());this.setElementContent(e.find(".popover-header"),this.getTitle());var t=this._getContent();"function"==typeof t&&(t=t.call(this.element)),this.setElementContent(e.find(".popover-body"),t),e.removeClass("fade show")},s._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},s._cleanTipClass=function(){var e=o.default(this.getTipElement()),t=e.attr("class").match(ee);null!==t&&t.length>0&&e.removeClass(t.join(""))},n._jQueryInterface=function(e){return this.each((function(){var t=o.default(this).data("bs.popover"),i="object"==typeof e?e:null;if((t||!/dispose|hide/.test(e))&&(t||(t=new n(this,i),o.default(this).data("bs.popover",t)),"string"==typeof e)){if(void 0===t[e])throw new TypeError('No method named "'+e+'"');t[e]()}}))},a(n,null,[{key:"VERSION",get:function(){return"4.6.0"}},{key:"Default",get:function(){return te}},{key:"NAME",get:function(){return J}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return ne}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return ie}}]),n}(X);o.default.fn[J]=oe._jQueryInterface,o.default.fn[J].Constructor=oe,o.default.fn[J].noConflict=function(){return o.default.fn[J]=Z,oe._jQueryInterface};var se="scrollspy",re=o.default.fn[se],ae={offset:10,method:"auto",target:""},le={offset:"number",method:"string",target:"(string|element)"},ce=function(){function e(e,t){var i=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(t),this._selector=this._config.target+" .nav-link,"+this._config.target+" .list-group-item,"+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,o.default(this._scrollElement).on("scroll.bs.scrollspy",(function(e){return i._process(e)})),this.refresh(),this._process()}var t=e.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?"offset":"position",i="auto"===this._config.method?t:this._config.method,n="position"===i?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map((function(e){var t,s=d.getSelectorFromElement(e);if(s&&(t=document.querySelector(s)),t){var r=t.getBoundingClientRect();if(r.width||r.height)return[o.default(t)[i]().top+n,s]}return null})).filter((function(e){return e})).sort((function(e,t){return e[0]-t[0]})).forEach((function(t){e._offsets.push(t[0]),e._targets.push(t[1])}))},t.dispose=function(){o.default.removeData(this._element,"bs.scrollspy"),o.default(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(e){if("string"!=typeof(e=l({},ae,"object"==typeof e&&e?e:{})).target&&d.isElement(e.target)){var t=o.default(e.target).attr("id");t||(t=d.getUID(se),o.default(e.target).attr("id",t)),e.target="#"+t}return d.typeCheckConfig(se,e,le),e},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),i=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=i){var n=this._targets[this._targets.length-1];this._activeTarget!==n&&this._activate(n)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;)this._activeTarget!==this._targets[o]&&e>=this._offsets[o]&&(void 0===this._offsets[o+1]||e<this._offsets[o+1])&&this._activate(this._targets[o])}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map((function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'})),i=o.default([].slice.call(document.querySelectorAll(t.join(","))));i.hasClass("dropdown-item")?(i.closest(".dropdown").find(".dropdown-toggle").addClass("active"),i.addClass("active")):(i.addClass("active"),i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"),i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),o.default(this._scrollElement).trigger("activate.bs.scrollspy",{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter((function(e){return e.classList.contains("active")})).forEach((function(e){return e.classList.remove("active")}))},e._jQueryInterface=function(t){return this.each((function(){var i=o.default(this).data("bs.scrollspy");if(i||(i=new e(this,"object"==typeof t&&t),o.default(this).data("bs.scrollspy",i)),"string"==typeof t){if(void 0===i[t])throw new TypeError('No method named "'+t+'"');i[t]()}}))},a(e,null,[{key:"VERSION",get:function(){return"4.6.0"}},{key:"Default",get:function(){return ae}}]),e}();o.default(window).on("load.bs.scrollspy.data-api",(function(){for(var e=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),t=e.length;t--;){var i=o.default(e[t]);ce._jQueryInterface.call(i,i.data())}})),o.default.fn[se]=ce._jQueryInterface,o.default.fn[se].Constructor=ce,o.default.fn[se].noConflict=function(){return o.default.fn[se]=re,ce._jQueryInterface};var de=o.default.fn.tab,ue=function(){function e(e){this._element=e}var t=e.prototype;return t.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&o.default(this._element).hasClass("active")||o.default(this._element).hasClass("disabled"))){var t,i,n=o.default(this._element).closest(".nav, .list-group")[0],s=d.getSelectorFromElement(this._element);if(n){var r="UL"===n.nodeName||"OL"===n.nodeName?"> li > .active":".active";i=(i=o.default.makeArray(o.default(n).find(r)))[i.length-1]}var a=o.default.Event("hide.bs.tab",{relatedTarget:this._element}),l=o.default.Event("show.bs.tab",{relatedTarget:i});if(i&&o.default(i).trigger(a),o.default(this._element).trigger(l),!l.isDefaultPrevented()&&!a.isDefaultPrevented()){s&&(t=document.querySelector(s)),this._activate(this._element,n);var c=function(){var t=o.default.Event("hidden.bs.tab",{relatedTarget:e._element}),n=o.default.Event("shown.bs.tab",{relatedTarget:i});o.default(i).trigger(t),o.default(e._element).trigger(n)};t?this._activate(t,t.parentNode,c):c()}}},t.dispose=function(){o.default.removeData(this._element,"bs.tab"),this._element=null},t._activate=function(e,t,i){var n=this,s=(!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?o.default(t).children(".active"):o.default(t).find("> li > .active"))[0],r=i&&s&&o.default(s).hasClass("fade"),a=function(){return n._transitionComplete(e,s,i)};if(s&&r){var l=d.getTransitionDurationFromElement(s);o.default(s).removeClass("show").one(d.TRANSITION_END,a).emulateTransitionEnd(l)}else a()},t._transitionComplete=function(e,t,i){if(t){o.default(t).removeClass("active");var n=o.default(t.parentNode).find("> .dropdown-menu .active")[0];n&&o.default(n).removeClass("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}if(o.default(e).addClass("active"),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),d.reflow(e),e.classList.contains("fade")&&e.classList.add("show"),e.parentNode&&o.default(e.parentNode).hasClass("dropdown-menu")){var s=o.default(e).closest(".dropdown")[0];if(s){var r=[].slice.call(s.querySelectorAll(".dropdown-toggle"));o.default(r).addClass("active")}e.setAttribute("aria-expanded",!0)}i&&i()},e._jQueryInterface=function(t){return this.each((function(){var i=o.default(this),n=i.data("bs.tab");if(n||(n=new e(this),i.data("bs.tab",n)),"string"==typeof t){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t]()}}))},a(e,null,[{key:"VERSION",get:function(){return"4.6.0"}}]),e}();o.default(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',(function(e){e.preventDefault(),ue._jQueryInterface.call(o.default(this),"show")})),o.default.fn.tab=ue._jQueryInterface,o.default.fn.tab.Constructor=ue,o.default.fn.tab.noConflict=function(){return o.default.fn.tab=de,ue._jQueryInterface};var he=o.default.fn.toast,fe={animation:"boolean",autohide:"boolean",delay:"number"},pe={animation:!0,autohide:!0,delay:500},me=function(){function e(e,t){this._element=e,this._config=this._getConfig(t),this._timeout=null,this._setListeners()}var t=e.prototype;return t.show=function(){var e=this,t=o.default.Event("show.bs.toast");if(o.default(this._element).trigger(t),!t.isDefaultPrevented()){this._clearTimeout(),this._config.animation&&this._element.classList.add("fade");var i=function(){e._element.classList.remove("showing"),e._element.classList.add("show"),o.default(e._element).trigger("shown.bs.toast"),e._config.autohide&&(e._timeout=setTimeout((function(){e.hide()}),e._config.delay))};if(this._element.classList.remove("hide"),d.reflow(this._element),this._element.classList.add("showing"),this._config.animation){var n=d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END,i).emulateTransitionEnd(n)}else i()}},t.hide=function(){if(this._element.classList.contains("show")){var e=o.default.Event("hide.bs.toast");o.default(this._element).trigger(e),e.isDefaultPrevented()||this._close()}},t.dispose=function(){this._clearTimeout(),this._element.classList.contains("show")&&this._element.classList.remove("show"),o.default(this._element).off("click.dismiss.bs.toast"),o.default.removeData(this._element,"bs.toast"),this._element=null,this._config=null},t._getConfig=function(e){return e=l({},pe,o.default(this._element).data(),"object"==typeof e&&e?e:{}),d.typeCheckConfig("toast",e,this.constructor.DefaultType),e},t._setListeners=function(){var e=this;o.default(this._element).on("click.dismiss.bs.toast",'[data-dismiss="toast"]',(function(){return e.hide()}))},t._close=function(){var e=this,t=function(){e._element.classList.add("hide"),o.default(e._element).trigger("hidden.bs.toast")};if(this._element.classList.remove("show"),this._config.animation){var i=d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END,t).emulateTransitionEnd(i)}else t()},t._clearTimeout=function(){clearTimeout(this._timeout),this._timeout=null},e._jQueryInterface=function(t){return this.each((function(){var i=o.default(this),n=i.data("bs.toast");if(n||(n=new e(this,"object"==typeof t&&t),i.data("bs.toast",n)),"string"==typeof t){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t](this)}}))},a(e,null,[{key:"VERSION",get:function(){return"4.6.0"}},{key:"DefaultType",get:function(){return fe}},{key:"Default",get:function(){return pe}}]),e}();o.default.fn.toast=me._jQueryInterface,o.default.fn.toast.Constructor=me,o.default.fn.toast.noConflict=function(){return o.default.fn.toast=he,me._jQueryInterface},e.Alert=f,e.Button=m,e.Carousel=E,e.Collapse=x,e.Dropdown=L,e.Modal=z,e.Popover=oe,e.Scrollspy=ce,e.Tab=ue,e.Toast=me,e.Tooltip=X,e.Util=d,Object.defineProperty(e,"__esModule",{value:!0})}(t,i(0),i(1))},function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t,i){var n,o;
/*!
 * Bootstrap-select v1.13.18 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2020 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */void 0===this&&void 0!==window&&window,n=[i(0)],void 0===(o=function(e){return function(e){!function(e){"use strict";var t=["sanitize","whiteList","sanitizeFn"],i=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],n={"*":["class","dir","id","lang","role","tabindex","style",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},o=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,s=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function r(t,n){var r=t.nodeName.toLowerCase();if(-1!==e.inArray(r,n))return-1===e.inArray(r,i)||Boolean(t.nodeValue.match(o)||t.nodeValue.match(s));for(var a=e(n).filter((function(e,t){return t instanceof RegExp})),l=0,c=a.length;l<c;l++)if(r.match(a[l]))return!0;return!1}function a(e,t,i){if(i&&"function"==typeof i)return i(e);for(var n=Object.keys(t),o=0,s=e.length;o<s;o++)for(var a=e[o].querySelectorAll("*"),l=0,c=a.length;l<c;l++){var d=a[l],u=d.nodeName.toLowerCase();if(-1!==n.indexOf(u))for(var h=[].slice.call(d.attributes),f=[].concat(t["*"]||[],t[u]||[]),p=0,m=h.length;p<m;p++){var g=h[p];r(g,f)||d.removeAttribute(g.nodeName)}else d.parentNode.removeChild(d)}}"classList"in document.createElement("_")||function(t){if("Element"in t){var i=t.Element.prototype,n=Object,o=function(){var t=e(this);return{add:function(e){return e=Array.prototype.slice.call(arguments).join(" "),t.addClass(e)},remove:function(e){return e=Array.prototype.slice.call(arguments).join(" "),t.removeClass(e)},toggle:function(e,i){return t.toggleClass(e,i)},contains:function(e){return t.hasClass(e)}}};if(n.defineProperty){var s={get:o,enumerable:!0,configurable:!0};try{n.defineProperty(i,"classList",s)}catch(e){void 0!==e.number&&-2146823252!==e.number||(s.enumerable=!1,n.defineProperty(i,"classList",s))}}else n.prototype.__defineGetter__&&i.__defineGetter__("classList",o)}}(window);var l,c,d,u=document.createElement("_");if(u.classList.add("c1","c2"),!u.classList.contains("c2")){var h=DOMTokenList.prototype.add,f=DOMTokenList.prototype.remove;DOMTokenList.prototype.add=function(){Array.prototype.forEach.call(arguments,h.bind(this))},DOMTokenList.prototype.remove=function(){Array.prototype.forEach.call(arguments,f.bind(this))}}if(u.classList.toggle("c3",!1),u.classList.contains("c3")){var p=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:p.call(this,e)}}function m(e,t){var i,n=e.selectedOptions,o=[];if(t){for(var s=0,r=n.length;s<r;s++)(i=n[s]).disabled||"OPTGROUP"===i.parentNode.tagName&&i.parentNode.disabled||o.push(i);return o}return n}function g(e,t){for(var i,n=[],o=t||e.selectedOptions,s=0,r=o.length;s<r;s++)(i=o[s]).disabled||"OPTGROUP"===i.parentNode.tagName&&i.parentNode.disabled||n.push(i.value);return e.multiple?n:n.length?n[0]:null}u=null,String.prototype.startsWith||(l=function(){try{var e={},t=Object.defineProperty,i=t(e,e,e)&&t}catch(e){}return i}(),c={}.toString,d=function(e){if(null==this)throw new TypeError;var t=String(this);if(e&&"[object RegExp]"==c.call(e))throw new TypeError;var i=t.length,n=String(e),o=n.length,s=arguments.length>1?arguments[1]:void 0,r=s?Number(s):0;r!=r&&(r=0);var a=Math.min(Math.max(r,0),i);if(o+a>i)return!1;for(var l=-1;++l<o;)if(t.charCodeAt(a+l)!=n.charCodeAt(l))return!1;return!0},l?l(String.prototype,"startsWith",{value:d,configurable:!0,writable:!0}):String.prototype.startsWith=d),Object.keys||(Object.keys=function(e,t,i){for(t in i=[],e)i.hasOwnProperty.call(e,t)&&i.push(t);return i}),HTMLSelectElement&&!HTMLSelectElement.prototype.hasOwnProperty("selectedOptions")&&Object.defineProperty(HTMLSelectElement.prototype,"selectedOptions",{get:function(){return this.querySelectorAll(":checked")}});var v={useDefault:!1,_set:e.valHooks.select.set};e.valHooks.select.set=function(t,i){return i&&!v.useDefault&&e(t).data("selected",!0),v._set.apply(this,arguments)};var b=null,_=function(){try{return new Event("change"),!0}catch(e){return!1}}();function w(e,t,i,n){for(var o=["display","subtext","tokens"],s=!1,r=0;r<o.length;r++){var a=o[r],l=e[a];if(l&&(l=l.toString(),"display"===a&&(l=l.replace(/<[^>]+>/g,"")),n&&(l=T(l)),l=l.toUpperCase(),s="contains"===i?l.indexOf(t)>=0:l.startsWith(t)))break}return s}function y(e){return parseInt(e,10)||0}e.fn.triggerNative=function(e){var t,i=this[0];i.dispatchEvent?(_?t=new Event(e,{bubbles:!0}):(t=document.createEvent("Event")).initEvent(e,!0,!1),i.dispatchEvent(t)):i.fireEvent?((t=document.createEventObject()).eventType=e,i.fireEvent("on"+e,t)):this.trigger(e)};var E={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},C=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,I=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]","g");function k(e){return E[e]}function T(e){return(e=e.toString())&&e.replace(C,k).replace(I,"")}var x,S,N,O,D,A=(x={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},S=function(e){return x[e]},N="(?:"+Object.keys(x).join("|")+")",O=RegExp(N),D=RegExp(N,"g"),function(e){return e=null==e?"":""+e,O.test(e)?e.replace(D,S):e}),L={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"},$=27,H=13,P=32,z=9,j=38,R=40,M={success:!1,major:"3"};try{M.full=(e.fn.dropdown.Constructor.VERSION||"").split(" ")[0].split("."),M.major=M.full[0],M.success=!0}catch(e){}var B=0,W=".bs.select",F={DISABLED:"disabled",DIVIDER:"divider",SHOW:"open",DROPUP:"dropup",MENU:"dropdown-menu",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left",BUTTONCLASS:"btn-default",POPOVERHEADER:"popover-title",ICONBASE:"glyphicon",TICKICON:"glyphicon-ok"},U={MENU:"."+F.MENU},q={div:document.createElement("div"),span:document.createElement("span"),i:document.createElement("i"),subtext:document.createElement("small"),a:document.createElement("a"),li:document.createElement("li"),whitespace:document.createTextNode(" "),fragment:document.createDocumentFragment()};q.noResults=q.li.cloneNode(!1),q.noResults.className="no-results",q.a.setAttribute("role","option"),q.a.className="dropdown-item",q.subtext.className="text-muted",q.text=q.span.cloneNode(!1),q.text.className="text",q.checkMark=q.span.cloneNode(!1);var V=new RegExp(j+"|"+R),Q=new RegExp("^"+z+"$|"+$),K={li:function(e,t,i){var n=q.li.cloneNode(!1);return e&&(1===e.nodeType||11===e.nodeType?n.appendChild(e):n.innerHTML=e),void 0!==t&&""!==t&&(n.className=t),null!=i&&n.classList.add("optgroup-"+i),n},a:function(e,t,i){var n=q.a.cloneNode(!0);return e&&(11===e.nodeType?n.appendChild(e):n.insertAdjacentHTML("beforeend",e)),void 0!==t&&""!==t&&n.classList.add.apply(n.classList,t.split(/\s+/)),i&&n.setAttribute("style",i),n},text:function(e,t){var i,n,o=q.text.cloneNode(!1);if(e.content)o.innerHTML=e.content;else{if(o.textContent=e.text,e.icon){var s=q.whitespace.cloneNode(!1);(n=(!0===t?q.i:q.span).cloneNode(!1)).className=this.options.iconBase+" "+e.icon,q.fragment.appendChild(n),q.fragment.appendChild(s)}e.subtext&&((i=q.subtext.cloneNode(!1)).textContent=e.subtext,o.appendChild(i))}if(!0===t)for(;o.childNodes.length>0;)q.fragment.appendChild(o.childNodes[0]);else q.fragment.appendChild(o);return q.fragment},label:function(e){var t,i,n=q.text.cloneNode(!1);if(n.innerHTML=e.display,e.icon){var o=q.whitespace.cloneNode(!1);(i=q.span.cloneNode(!1)).className=this.options.iconBase+" "+e.icon,q.fragment.appendChild(i),q.fragment.appendChild(o)}return e.subtext&&((t=q.subtext.cloneNode(!1)).textContent=e.subtext,n.appendChild(t)),q.fragment.appendChild(n),q.fragment}};function Y(e,t){e.length||(q.noResults.innerHTML=this.options.noneResultsText.replace("{0}",'"'+A(t)+'"'),this.$menuInner[0].firstChild.appendChild(q.noResults))}var G=function(t,i){var n=this;v.useDefault||(e.valHooks.select.set=v._set,v.useDefault=!0),this.$element=e(t),this.$newElement=null,this.$button=null,this.$menu=null,this.options=i,this.selectpicker={main:{},search:{},current:{},view:{},isSearching:!1,keydown:{keyHistory:"",resetKeyHistory:{start:function(){return setTimeout((function(){n.selectpicker.keydown.keyHistory=""}),800)}}}},this.sizeInfo={},null===this.options.title&&(this.options.title=this.$element.attr("title"));var o=this.options.windowPadding;"number"==typeof o&&(this.options.windowPadding=[o,o,o,o]),this.val=G.prototype.val,this.render=G.prototype.render,this.refresh=G.prototype.refresh,this.setStyle=G.prototype.setStyle,this.selectAll=G.prototype.selectAll,this.deselectAll=G.prototype.deselectAll,this.destroy=G.prototype.destroy,this.remove=G.prototype.remove,this.show=G.prototype.show,this.hide=G.prototype.hide,this.init()};function X(i){var n,o=arguments,s=i;if([].shift.apply(o),!M.success){try{M.full=(e.fn.dropdown.Constructor.VERSION||"").split(" ")[0].split(".")}catch(e){G.BootstrapVersion?M.full=G.BootstrapVersion.split(" ")[0].split("."):(M.full=[M.major,"0","0"],console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.",e))}M.major=M.full[0],M.success=!0}if("4"===M.major){var r=[];G.DEFAULTS.style===F.BUTTONCLASS&&r.push({name:"style",className:"BUTTONCLASS"}),G.DEFAULTS.iconBase===F.ICONBASE&&r.push({name:"iconBase",className:"ICONBASE"}),G.DEFAULTS.tickIcon===F.TICKICON&&r.push({name:"tickIcon",className:"TICKICON"}),F.DIVIDER="dropdown-divider",F.SHOW="show",F.BUTTONCLASS="btn-light",F.POPOVERHEADER="popover-header",F.ICONBASE="",F.TICKICON="bs-ok-default";for(var a=0;a<r.length;a++)i=r[a],G.DEFAULTS[i.name]=F[i.className]}var l=this.each((function(){var i=e(this);if(i.is("select")){var r=i.data("selectpicker"),a="object"==typeof s&&s;if(r){if(a)for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(r.options[l]=a[l])}else{var c=i.data();for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&-1!==e.inArray(d,t)&&delete c[d];var u=e.extend({},G.DEFAULTS,e.fn.selectpicker.defaults||{},c,a);u.template=e.extend({},G.DEFAULTS.template,e.fn.selectpicker.defaults?e.fn.selectpicker.defaults.template:{},c.template,a.template),i.data("selectpicker",r=new G(this,u))}"string"==typeof s&&(n=r[s]instanceof Function?r[s].apply(r,o):r.options[s])}}));return void 0!==n?n:l}G.VERSION="1.13.18",G.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(e,t){return 1==e?"{0} item selected":"{0} items selected"},maxOptionsText:function(e,t){return[1==e?"Limit reached ({n} item max)":"Limit reached ({n} items max)",1==t?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:!1,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:F.BUTTONCLASS,size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,liveSearchPlaceholder:null,liveSearchNormalize:!1,liveSearchStyle:"contains",actionsBox:!1,iconBase:F.ICONBASE,tickIcon:F.TICKICON,showTick:!1,template:{caret:'<span class="caret"></span>'},maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1,windowPadding:0,virtualScroll:600,display:!1,sanitize:!0,sanitizeFn:null,whiteList:n},G.prototype={constructor:G,init:function(){var e=this,t=this.$element.attr("id"),i=this.$element[0],n=i.form;B++,this.selectId="bs-select-"+B,i.classList.add("bs-select-hidden"),this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),i.classList.contains("show-tick")&&(this.options.showTick=!0),this.$newElement=this.createDropdown(),this.buildData(),this.$element.after(this.$newElement).prependTo(this.$newElement),n&&null===i.form&&(n.id||(n.id="form-"+this.selectId),i.setAttribute("form",n.id)),this.$button=this.$newElement.children("button"),this.$menu=this.$newElement.children(U.MENU),this.$menuInner=this.$menu.children(".inner"),this.$searchbox=this.$menu.find("input"),i.classList.remove("bs-select-hidden"),!0===this.options.dropdownAlignRight&&this.$menu[0].classList.add(F.MENURIGHT),void 0!==t&&this.$button.attr("data-id",t),this.checkDisabled(),this.clickListener(),this.options.liveSearch?(this.liveSearchListener(),this.focusedParent=this.$searchbox[0]):this.focusedParent=this.$menuInner[0],this.setStyle(),this.render(),this.setWidth(),this.options.container?this.selectPosition():this.$element.on("hide"+W,(function(){if(e.isVirtual()){var t=e.$menuInner[0],i=t.firstChild.cloneNode(!1);t.replaceChild(i,t.firstChild),t.scrollTop=0}})),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile(),this.$newElement.on({"hide.bs.dropdown":function(t){e.$element.trigger("hide"+W,t)},"hidden.bs.dropdown":function(t){e.$element.trigger("hidden"+W,t)},"show.bs.dropdown":function(t){e.$element.trigger("show"+W,t)},"shown.bs.dropdown":function(t){e.$element.trigger("shown"+W,t)}}),i.hasAttribute("required")&&this.$element.on("invalid"+W,(function(){e.$button[0].classList.add("bs-invalid"),e.$element.on("shown"+W+".invalid",(function(){e.$element.val(e.$element.val()).off("shown"+W+".invalid")})).on("rendered"+W,(function(){this.validity.valid&&e.$button[0].classList.remove("bs-invalid"),e.$element.off("rendered"+W)})),e.$button.on("blur"+W,(function(){e.$element.trigger("focus").trigger("blur"),e.$button.off("blur"+W)}))})),setTimeout((function(){e.buildList(),e.$element.trigger("loaded"+W)}))},createDropdown:function(){var t=this.multiple||this.options.showTick?" show-tick":"",i=this.multiple?' aria-multiselectable="true"':"",n="",o=this.autofocus?" autofocus":"";M.major<4&&this.$element.parent().hasClass("input-group")&&(n=" input-group-btn");var s,r="",a="",l="",c="";return this.options.header&&(r='<div class="'+F.POPOVERHEADER+'"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>"),this.options.liveSearch&&(a='<div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+A(this.options.liveSearchPlaceholder)+'"')+' role="combobox" aria-label="Search" aria-controls="'+this.selectId+'" aria-autocomplete="list"></div>'),this.multiple&&this.options.actionsBox&&(l='<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn '+F.BUTTONCLASS+'">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn '+F.BUTTONCLASS+'">'+this.options.deselectAllText+"</button></div></div>"),this.multiple&&this.options.doneButton&&(c='<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm '+F.BUTTONCLASS+'">'+this.options.doneButtonText+"</button></div></div>"),s='<div class="dropdown bootstrap-select'+t+n+'"><button type="button" tabindex="-1" class="'+this.options.styleBase+' dropdown-toggle" '+("static"===this.options.display?'data-display="static"':"")+'data-toggle="dropdown"'+o+' role="combobox" aria-owns="'+this.selectId+'" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>'+("4"===M.major?"":'<span class="bs-caret">'+this.options.template.caret+"</span>")+'</button><div class="'+F.MENU+" "+("4"===M.major?"":F.SHOW)+'">'+r+a+l+'<div class="inner '+F.SHOW+'" role="listbox" id="'+this.selectId+'" tabindex="-1" '+i+'><ul class="'+F.MENU+" inner "+("4"===M.major?F.SHOW:"")+'" role="presentation"></ul></div>'+c+"</div></div>",e(s)},setPositionData:function(){this.selectpicker.view.canHighlight=[],this.selectpicker.view.size=0,this.selectpicker.view.firstHighlightIndex=!1;for(var e=0;e<this.selectpicker.current.data.length;e++){var t=this.selectpicker.current.data[e],i=!0;"divider"===t.type?(i=!1,t.height=this.sizeInfo.dividerHeight):"optgroup-label"===t.type?(i=!1,t.height=this.sizeInfo.dropdownHeaderHeight):t.height=this.sizeInfo.liHeight,t.disabled&&(i=!1),this.selectpicker.view.canHighlight.push(i),i&&(this.selectpicker.view.size++,t.posinset=this.selectpicker.view.size,!1===this.selectpicker.view.firstHighlightIndex&&(this.selectpicker.view.firstHighlightIndex=e)),t.position=(0===e?0:this.selectpicker.current.data[e-1].position)+t.height}},isVirtual:function(){return!1!==this.options.virtualScroll&&this.selectpicker.main.elements.length>=this.options.virtualScroll||!0===this.options.virtualScroll},createView:function(t,i,n){var o,s,r=this,l=0,c=[];if(this.selectpicker.isSearching=t,this.selectpicker.current=t?this.selectpicker.search:this.selectpicker.main,this.setPositionData(),i)if(n)l=this.$menuInner[0].scrollTop;else if(!r.multiple){var d=r.$element[0],u=(d.options[d.selectedIndex]||{}).liIndex;if("number"==typeof u&&!1!==r.options.size){var h=r.selectpicker.main.data[u],f=h&&h.position;f&&(l=f-(r.sizeInfo.menuInnerHeight+r.sizeInfo.liHeight)/2)}}function p(e,i){var n,l,d,u,h,f,p,m,g,v,b=r.selectpicker.current.elements.length,_=[],w=!0,y=r.isVirtual();r.selectpicker.view.scrollTop=e,n=Math.ceil(r.sizeInfo.menuInnerHeight/r.sizeInfo.liHeight*1.5),l=Math.round(b/n)||1;for(var E=0;E<l;E++){var C=(E+1)*n;if(E===l-1&&(C=b),_[E]=[E*n+(E?1:0),C],!b)break;void 0===h&&e-1<=r.selectpicker.current.data[C-1].position-r.sizeInfo.menuInnerHeight&&(h=E)}if(void 0===h&&(h=0),f=[r.selectpicker.view.position0,r.selectpicker.view.position1],d=Math.max(0,h-1),u=Math.min(l-1,h+1),r.selectpicker.view.position0=!1===y?0:Math.max(0,_[d][0])||0,r.selectpicker.view.position1=!1===y?b:Math.min(b,_[u][1])||0,p=f[0]!==r.selectpicker.view.position0||f[1]!==r.selectpicker.view.position1,void 0!==r.activeIndex&&(s=r.selectpicker.main.elements[r.prevActiveIndex],c=r.selectpicker.main.elements[r.activeIndex],o=r.selectpicker.main.elements[r.selectedIndex],i&&(r.activeIndex!==r.selectedIndex&&r.defocusItem(c),r.activeIndex=void 0),r.activeIndex&&r.activeIndex!==r.selectedIndex&&r.defocusItem(o)),void 0!==r.prevActiveIndex&&r.prevActiveIndex!==r.activeIndex&&r.prevActiveIndex!==r.selectedIndex&&r.defocusItem(s),(i||p)&&(m=r.selectpicker.view.visibleElements?r.selectpicker.view.visibleElements.slice():[],r.selectpicker.view.visibleElements=!1===y?r.selectpicker.current.elements:r.selectpicker.current.elements.slice(r.selectpicker.view.position0,r.selectpicker.view.position1),r.setOptionStatus(),(t||!1===y&&i)&&(g=m,v=r.selectpicker.view.visibleElements,w=!(g.length===v.length&&g.every((function(e,t){return e===v[t]})))),(i||!0===y)&&w)){var I,k,T=r.$menuInner[0],x=document.createDocumentFragment(),S=T.firstChild.cloneNode(!1),N=r.selectpicker.view.visibleElements,O=[];T.replaceChild(S,T.firstChild),E=0;for(var D=N.length;E<D;E++){var A,L,$=N[E];r.options.sanitize&&(A=$.lastChild)&&(L=r.selectpicker.current.data[E+r.selectpicker.view.position0])&&L.content&&!L.sanitized&&(O.push(A),L.sanitized=!0),x.appendChild($)}if(r.options.sanitize&&O.length&&a(O,r.options.whiteList,r.options.sanitizeFn),!0===y?(I=0===r.selectpicker.view.position0?0:r.selectpicker.current.data[r.selectpicker.view.position0-1].position,k=r.selectpicker.view.position1>b-1?0:r.selectpicker.current.data[b-1].position-r.selectpicker.current.data[r.selectpicker.view.position1-1].position,T.firstChild.style.marginTop=I+"px",T.firstChild.style.marginBottom=k+"px"):(T.firstChild.style.marginTop=0,T.firstChild.style.marginBottom=0),T.firstChild.appendChild(x),!0===y&&r.sizeInfo.hasScrollBar){var H=T.firstChild.offsetWidth;if(i&&H<r.sizeInfo.menuInnerInnerWidth&&r.sizeInfo.totalMenuWidth>r.sizeInfo.selectWidth)T.firstChild.style.minWidth=r.sizeInfo.menuInnerInnerWidth+"px";else if(H>r.sizeInfo.menuInnerInnerWidth){r.$menu[0].style.minWidth=0;var P=T.firstChild.offsetWidth;P>r.sizeInfo.menuInnerInnerWidth&&(r.sizeInfo.menuInnerInnerWidth=P,T.firstChild.style.minWidth=r.sizeInfo.menuInnerInnerWidth+"px"),r.$menu[0].style.minWidth=""}}}if(r.prevActiveIndex=r.activeIndex,r.options.liveSearch){if(t&&i){var z,j=0;r.selectpicker.view.canHighlight[j]||(j=1+r.selectpicker.view.canHighlight.slice(1).indexOf(!0)),z=r.selectpicker.view.visibleElements[j],r.defocusItem(r.selectpicker.view.currentActive),r.activeIndex=(r.selectpicker.current.data[j]||{}).index,r.focusItem(z)}}else r.$menuInner.trigger("focus")}p(l,!0),this.$menuInner.off("scroll.createView").on("scroll.createView",(function(e,t){r.noScroll||p(this.scrollTop,t),r.noScroll=!1})),e(window).off("resize"+W+"."+this.selectId+".createView").on("resize"+W+"."+this.selectId+".createView",(function(){r.$newElement.hasClass(F.SHOW)&&p(r.$menuInner[0].scrollTop)}))},focusItem:function(e,t,i){if(e){t=t||this.selectpicker.main.data[this.activeIndex];var n=e.firstChild;n&&(n.setAttribute("aria-setsize",this.selectpicker.view.size),n.setAttribute("aria-posinset",t.posinset),!0!==i&&(this.focusedParent.setAttribute("aria-activedescendant",n.id),e.classList.add("active"),n.classList.add("active")))}},defocusItem:function(e){e&&(e.classList.remove("active"),e.firstChild&&e.firstChild.classList.remove("active"))},setPlaceholder:function(){var e=this,t=!1;if(this.options.title&&!this.multiple){this.selectpicker.view.titleOption||(this.selectpicker.view.titleOption=document.createElement("option")),t=!0;var i=this.$element[0],n=!1,o=!this.selectpicker.view.titleOption.parentNode,s=i.selectedIndex,r=i.options[s],a=window.performance&&window.performance.getEntriesByType("navigation"),l=a&&a.length?"back_forward"!==a[0].type:2!==window.performance.navigation.type;o&&(this.selectpicker.view.titleOption.className="bs-title-option",this.selectpicker.view.titleOption.value="",n=!r||0===s&&!1===r.defaultSelected&&void 0===this.$element.data("selected")),(o||0!==this.selectpicker.view.titleOption.index)&&i.insertBefore(this.selectpicker.view.titleOption,i.firstChild),n&&l?i.selectedIndex=0:"complete"!==document.readyState&&window.addEventListener("pageshow",(function(){e.selectpicker.view.displayedValue!==i.value&&e.render()}))}return t},buildData:function(){var e=':not([hidden]):not([data-hidden="true"])',t=[],i=0,n=this.setPlaceholder()?1:0;this.options.hideDisabled&&(e+=":not(:disabled)");var o=this.$element[0].querySelectorAll("select > *"+e);function s(e){var i=t[t.length-1];i&&"divider"===i.type&&(i.optID||e.optID)||((e=e||{}).type="divider",t.push(e))}function r(e,i){if((i=i||{}).divider="true"===e.getAttribute("data-divider"),i.divider)s({optID:i.optID});else{var n=t.length,o=e.style.cssText,r=o?A(o):"",a=(e.className||"")+(i.optgroupClass||"");i.optID&&(a="opt "+a),i.optionClass=a.trim(),i.inlineStyle=r,i.text=e.textContent,i.content=e.getAttribute("data-content"),i.tokens=e.getAttribute("data-tokens"),i.subtext=e.getAttribute("data-subtext"),i.icon=e.getAttribute("data-icon"),e.liIndex=n,i.display=i.content||i.text,i.type="option",i.index=n,i.option=e,i.selected=!!e.selected,i.disabled=i.disabled||!!e.disabled,t.push(i)}}function a(o,a){var l=a[o],c=!(o-1<n)&&a[o-1],d=a[o+1],u=l.querySelectorAll("option"+e);if(u.length){var h,f,p={display:A(l.label),subtext:l.getAttribute("data-subtext"),icon:l.getAttribute("data-icon"),type:"optgroup-label",optgroupClass:" "+(l.className||"")};i++,c&&s({optID:i}),p.optID=i,t.push(p);for(var m=0,g=u.length;m<g;m++){var v=u[m];0===m&&(f=(h=t.length-1)+g),r(v,{headerIndex:h,lastIndex:f,optID:p.optID,optgroupClass:p.optgroupClass,disabled:l.disabled})}d&&s({optID:i})}}for(var l=o.length,c=n;c<l;c++){var d=o[c];"OPTGROUP"!==d.tagName?r(d,{}):a(c,o)}this.selectpicker.main.data=this.selectpicker.current.data=t},buildList:function(){var e=this,t=this.selectpicker.main.data,i=[],n=0;function o(t){var o,s=0;switch(t.type){case"divider":o=K.li(!1,F.DIVIDER,t.optID?t.optID+"div":void 0);break;case"option":(o=K.li(K.a(K.text.call(e,t),t.optionClass,t.inlineStyle),"",t.optID)).firstChild&&(o.firstChild.id=e.selectId+"-"+t.index);break;case"optgroup-label":o=K.li(K.label.call(e,t),"dropdown-header"+t.optgroupClass,t.optID)}t.element=o,i.push(o),t.display&&(s+=t.display.length),t.subtext&&(s+=t.subtext.length),t.icon&&(s+=1),s>n&&(n=s,e.selectpicker.view.widestOption=i[i.length-1])}!e.options.showTick&&!e.multiple||q.checkMark.parentNode||(q.checkMark.className=this.options.iconBase+" "+e.options.tickIcon+" check-mark",q.a.appendChild(q.checkMark));for(var s=t.length,r=0;r<s;r++)o(t[r]);this.selectpicker.main.elements=this.selectpicker.current.elements=i},findLis:function(){return this.$menuInner.find(".inner > li")},render:function(){var e,t,i=this.$element[0],n=this.setPlaceholder()&&0===i.selectedIndex,o=m(i,this.options.hideDisabled),s=o.length,r=this.$button[0],l=r.querySelector(".filter-option-inner-inner"),c=document.createTextNode(this.options.multipleSeparator),d=q.fragment.cloneNode(!1),u=!1;if(r.classList.toggle("bs-placeholder",this.multiple?!s:!g(i,o)),this.multiple||1!==o.length||(this.selectpicker.view.displayedValue=g(i,o)),"static"===this.options.selectedTextFormat)d=K.text.call(this,{text:this.options.title},!0);else if((e=this.multiple&&-1!==this.options.selectedTextFormat.indexOf("count")&&s>1)&&(e=(t=this.options.selectedTextFormat.split(">")).length>1&&s>t[1]||1===t.length&&s>=2),!1===e){if(!n){for(var h=0;h<s&&h<50;h++){var f=o[h],p=this.selectpicker.main.data[f.liIndex],v={};this.multiple&&h>0&&d.appendChild(c.cloneNode(!1)),f.title?v.text=f.title:p&&(p.content&&this.options.showContent?(v.content=p.content.toString(),u=!0):(this.options.showIcon&&(v.icon=p.icon),this.options.showSubtext&&!this.multiple&&p.subtext&&(v.subtext=" "+p.subtext),v.text=f.textContent.trim())),d.appendChild(K.text.call(this,v,!0))}s>49&&d.appendChild(document.createTextNode("..."))}}else{var b=':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])';this.options.hideDisabled&&(b+=":not(:disabled)");var _=this.$element[0].querySelectorAll("select > option"+b+", optgroup"+b+" option"+b).length,w="function"==typeof this.options.countSelectedText?this.options.countSelectedText(s,_):this.options.countSelectedText;d=K.text.call(this,{text:w.replace("{0}",s.toString()).replace("{1}",_.toString())},!0)}if(null==this.options.title&&(this.options.title=this.$element.attr("title")),d.childNodes.length||(d=K.text.call(this,{text:void 0!==this.options.title?this.options.title:this.options.noneSelectedText},!0)),r.title=d.textContent.replace(/<[^>]*>?/g,"").trim(),this.options.sanitize&&u&&a([d],this.options.whiteList,this.options.sanitizeFn),l.innerHTML="",l.appendChild(d),M.major<4&&this.$newElement[0].classList.contains("bs3-has-addon")){var y=r.querySelector(".filter-expand"),E=l.cloneNode(!0);E.className="filter-expand",y?r.replaceChild(E,y):r.appendChild(E)}this.$element.trigger("rendered"+W)},setStyle:function(e,t){var i,n=this.$button[0],o=this.$newElement[0],s=this.options.style.trim();this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,"")),M.major<4&&(o.classList.add("bs3"),o.parentNode.classList&&o.parentNode.classList.contains("input-group")&&(o.previousElementSibling||o.nextElementSibling)&&(o.previousElementSibling||o.nextElementSibling).classList.contains("input-group-addon")&&o.classList.add("bs3-has-addon")),i=e?e.trim():s,"add"==t?i&&n.classList.add.apply(n.classList,i.split(" ")):"remove"==t?i&&n.classList.remove.apply(n.classList,i.split(" ")):(s&&n.classList.remove.apply(n.classList,s.split(" ")),i&&n.classList.add.apply(n.classList,i.split(" ")))},liHeight:function(t){if(t||!1!==this.options.size&&!Object.keys(this.sizeInfo).length){var i,n=q.div.cloneNode(!1),o=q.div.cloneNode(!1),s=q.div.cloneNode(!1),r=document.createElement("ul"),a=q.li.cloneNode(!1),l=q.li.cloneNode(!1),c=q.a.cloneNode(!1),d=q.span.cloneNode(!1),u=this.options.header&&this.$menu.find("."+F.POPOVERHEADER).length>0?this.$menu.find("."+F.POPOVERHEADER)[0].cloneNode(!0):null,h=this.options.liveSearch?q.div.cloneNode(!1):null,f=this.options.actionsBox&&this.multiple&&this.$menu.find(".bs-actionsbox").length>0?this.$menu.find(".bs-actionsbox")[0].cloneNode(!0):null,p=this.options.doneButton&&this.multiple&&this.$menu.find(".bs-donebutton").length>0?this.$menu.find(".bs-donebutton")[0].cloneNode(!0):null,m=this.$element.find("option")[0];if(this.sizeInfo.selectWidth=this.$newElement[0].offsetWidth,d.className="text",c.className="dropdown-item "+(m?m.className:""),n.className=this.$menu[0].parentNode.className+" "+F.SHOW,n.style.width=0,"auto"===this.options.width&&(o.style.minWidth=0),o.className=F.MENU+" "+F.SHOW,s.className="inner "+F.SHOW,r.className=F.MENU+" inner "+("4"===M.major?F.SHOW:""),a.className=F.DIVIDER,l.className="dropdown-header",d.appendChild(document.createTextNode("​")),this.selectpicker.current.data.length)for(var g=0;g<this.selectpicker.current.data.length;g++){var v=this.selectpicker.current.data[g];if("option"===v.type){i=v.element;break}}else i=q.li.cloneNode(!1),c.appendChild(d),i.appendChild(c);if(l.appendChild(d.cloneNode(!0)),this.selectpicker.view.widestOption&&r.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)),r.appendChild(i),r.appendChild(a),r.appendChild(l),u&&o.appendChild(u),h){var b=document.createElement("input");h.className="bs-searchbox",b.className="form-control",h.appendChild(b),o.appendChild(h)}f&&o.appendChild(f),s.appendChild(r),o.appendChild(s),p&&o.appendChild(p),n.appendChild(o),document.body.appendChild(n);var _,w=i.offsetHeight,E=l?l.offsetHeight:0,C=u?u.offsetHeight:0,I=h?h.offsetHeight:0,k=f?f.offsetHeight:0,T=p?p.offsetHeight:0,x=e(a).outerHeight(!0),S=!!window.getComputedStyle&&window.getComputedStyle(o),N=o.offsetWidth,O=S?null:e(o),D={vert:y(S?S.paddingTop:O.css("paddingTop"))+y(S?S.paddingBottom:O.css("paddingBottom"))+y(S?S.borderTopWidth:O.css("borderTopWidth"))+y(S?S.borderBottomWidth:O.css("borderBottomWidth")),horiz:y(S?S.paddingLeft:O.css("paddingLeft"))+y(S?S.paddingRight:O.css("paddingRight"))+y(S?S.borderLeftWidth:O.css("borderLeftWidth"))+y(S?S.borderRightWidth:O.css("borderRightWidth"))},A={vert:D.vert+y(S?S.marginTop:O.css("marginTop"))+y(S?S.marginBottom:O.css("marginBottom"))+2,horiz:D.horiz+y(S?S.marginLeft:O.css("marginLeft"))+y(S?S.marginRight:O.css("marginRight"))+2};s.style.overflowY="scroll",_=o.offsetWidth-N,document.body.removeChild(n),this.sizeInfo.liHeight=w,this.sizeInfo.dropdownHeaderHeight=E,this.sizeInfo.headerHeight=C,this.sizeInfo.searchHeight=I,this.sizeInfo.actionsHeight=k,this.sizeInfo.doneButtonHeight=T,this.sizeInfo.dividerHeight=x,this.sizeInfo.menuPadding=D,this.sizeInfo.menuExtras=A,this.sizeInfo.menuWidth=N,this.sizeInfo.menuInnerInnerWidth=N-D.horiz,this.sizeInfo.totalMenuWidth=this.sizeInfo.menuWidth,this.sizeInfo.scrollBarWidth=_,this.sizeInfo.selectHeight=this.$newElement[0].offsetHeight,this.setPositionData()}},getSelectPosition:function(){var t,i=e(window),n=this.$newElement.offset(),o=e(this.options.container);this.options.container&&o.length&&!o.is("body")?((t=o.offset()).top+=parseInt(o.css("borderTopWidth")),t.left+=parseInt(o.css("borderLeftWidth"))):t={top:0,left:0};var s=this.options.windowPadding;this.sizeInfo.selectOffsetTop=n.top-t.top-i.scrollTop(),this.sizeInfo.selectOffsetBot=i.height()-this.sizeInfo.selectOffsetTop-this.sizeInfo.selectHeight-t.top-s[2],this.sizeInfo.selectOffsetLeft=n.left-t.left-i.scrollLeft(),this.sizeInfo.selectOffsetRight=i.width()-this.sizeInfo.selectOffsetLeft-this.sizeInfo.selectWidth-t.left-s[1],this.sizeInfo.selectOffsetTop-=s[0],this.sizeInfo.selectOffsetLeft-=s[3]},setMenuSize:function(e){this.getSelectPosition();var t,i,n,o,s,r,a,l,c=this.sizeInfo.selectWidth,d=this.sizeInfo.liHeight,u=this.sizeInfo.headerHeight,h=this.sizeInfo.searchHeight,f=this.sizeInfo.actionsHeight,p=this.sizeInfo.doneButtonHeight,m=this.sizeInfo.dividerHeight,g=this.sizeInfo.menuPadding,v=0;if(this.options.dropupAuto&&(a=d*this.selectpicker.current.elements.length+g.vert,l=this.sizeInfo.selectOffsetTop-this.sizeInfo.selectOffsetBot>this.sizeInfo.menuExtras.vert&&a+this.sizeInfo.menuExtras.vert+50>this.sizeInfo.selectOffsetBot,!0===this.selectpicker.isSearching&&(l=this.selectpicker.dropup),this.$newElement.toggleClass(F.DROPUP,l),this.selectpicker.dropup=l),"auto"===this.options.size)o=this.selectpicker.current.elements.length>3?3*this.sizeInfo.liHeight+this.sizeInfo.menuExtras.vert-2:0,i=this.sizeInfo.selectOffsetBot-this.sizeInfo.menuExtras.vert,n=o+u+h+f+p,r=Math.max(o-g.vert,0),this.$newElement.hasClass(F.DROPUP)&&(i=this.sizeInfo.selectOffsetTop-this.sizeInfo.menuExtras.vert),s=i,t=i-u-h-f-p-g.vert;else if(this.options.size&&"auto"!=this.options.size&&this.selectpicker.current.elements.length>this.options.size){for(var b=0;b<this.options.size;b++)"divider"===this.selectpicker.current.data[b].type&&v++;t=(i=d*this.options.size+v*m+g.vert)-g.vert,s=i+u+h+f+p,n=r=""}this.$menu.css({"max-height":s+"px",overflow:"hidden","min-height":n+"px"}),this.$menuInner.css({"max-height":t+"px","overflow-y":"auto","min-height":r+"px"}),this.sizeInfo.menuInnerHeight=Math.max(t,1),this.selectpicker.current.data.length&&this.selectpicker.current.data[this.selectpicker.current.data.length-1].position>this.sizeInfo.menuInnerHeight&&(this.sizeInfo.hasScrollBar=!0,this.sizeInfo.totalMenuWidth=this.sizeInfo.menuWidth+this.sizeInfo.scrollBarWidth),"auto"===this.options.dropdownAlignRight&&this.$menu.toggleClass(F.MENURIGHT,this.sizeInfo.selectOffsetLeft>this.sizeInfo.selectOffsetRight&&this.sizeInfo.selectOffsetRight<this.sizeInfo.totalMenuWidth-c),this.dropdown&&this.dropdown._popper&&this.dropdown._popper.update()},setSize:function(t){if(this.liHeight(t),this.options.header&&this.$menu.css("padding-top",0),!1!==this.options.size){var i=this,n=e(window);this.setMenuSize(),this.options.liveSearch&&this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize",(function(){return i.setMenuSize()})),"auto"===this.options.size?n.off("resize"+W+"."+this.selectId+".setMenuSize scroll"+W+"."+this.selectId+".setMenuSize").on("resize"+W+"."+this.selectId+".setMenuSize scroll"+W+"."+this.selectId+".setMenuSize",(function(){return i.setMenuSize()})):this.options.size&&"auto"!=this.options.size&&this.selectpicker.current.elements.length>this.options.size&&n.off("resize"+W+"."+this.selectId+".setMenuSize scroll"+W+"."+this.selectId+".setMenuSize")}this.createView(!1,!0,t)},setWidth:function(){var e=this;"auto"===this.options.width?requestAnimationFrame((function(){e.$menu.css("min-width","0"),e.$element.on("loaded"+W,(function(){e.liHeight(),e.setMenuSize();var t=e.$newElement.clone().appendTo("body"),i=t.css("width","auto").children("button").outerWidth();t.remove(),e.sizeInfo.selectWidth=Math.max(e.sizeInfo.totalMenuWidth,i),e.$newElement.css("width",e.sizeInfo.selectWidth+"px")}))})):"fit"===this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width","")),this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement[0].classList.remove("fit-width")},selectPosition:function(){this.$bsContainer=e('<div class="bs-container" />');var t,i,n,o=this,s=e(this.options.container),r=function(r){var a={},l=o.options.display||!!e.fn.dropdown.Constructor.Default&&e.fn.dropdown.Constructor.Default.display;o.$bsContainer.addClass(r.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass(F.DROPUP,r.hasClass(F.DROPUP)),t=r.offset(),s.is("body")?i={top:0,left:0}:((i=s.offset()).top+=parseInt(s.css("borderTopWidth"))-s.scrollTop(),i.left+=parseInt(s.css("borderLeftWidth"))-s.scrollLeft()),n=r.hasClass(F.DROPUP)?0:r[0].offsetHeight,(M.major<4||"static"===l)&&(a.top=t.top-i.top+n,a.left=t.left-i.left),a.width=r[0].offsetWidth,o.$bsContainer.css(a)};this.$button.on("click.bs.dropdown.data-api",(function(){o.isDisabled()||(r(o.$newElement),o.$bsContainer.appendTo(o.options.container).toggleClass(F.SHOW,!o.$button.hasClass(F.SHOW)).append(o.$menu))})),e(window).off("resize"+W+"."+this.selectId+" scroll"+W+"."+this.selectId).on("resize"+W+"."+this.selectId+" scroll"+W+"."+this.selectId,(function(){o.$newElement.hasClass(F.SHOW)&&r(o.$newElement)})),this.$element.on("hide"+W,(function(){o.$menu.data("height",o.$menu.height()),o.$bsContainer.detach()}))},setOptionStatus:function(e){if(this.noScroll=!1,this.selectpicker.view.visibleElements&&this.selectpicker.view.visibleElements.length)for(var t=0;t<this.selectpicker.view.visibleElements.length;t++){var i=this.selectpicker.current.data[t+this.selectpicker.view.position0],n=i.option;n&&(!0!==e&&this.setDisabled(i.index,i.disabled),this.setSelected(i.index,n.selected))}},setSelected:function(e,t){var i,n,o=this.selectpicker.main.elements[e],s=this.selectpicker.main.data[e],r=void 0!==this.activeIndex,a=this.activeIndex===e||t&&!this.multiple&&!r;s.selected=t,n=o.firstChild,t&&(this.selectedIndex=e),o.classList.toggle("selected",t),a?(this.focusItem(o,s),this.selectpicker.view.currentActive=o,this.activeIndex=e):this.defocusItem(o),n&&(n.classList.toggle("selected",t),t?n.setAttribute("aria-selected",!0):this.multiple?n.setAttribute("aria-selected",!1):n.removeAttribute("aria-selected")),a||r||!t||void 0===this.prevActiveIndex||(i=this.selectpicker.main.elements[this.prevActiveIndex],this.defocusItem(i))},setDisabled:function(e,t){var i,n=this.selectpicker.main.elements[e];this.selectpicker.main.data[e].disabled=t,i=n.firstChild,n.classList.toggle(F.DISABLED,t),i&&("4"===M.major&&i.classList.toggle(F.DISABLED,t),t?(i.setAttribute("aria-disabled",t),i.setAttribute("tabindex",-1)):(i.removeAttribute("aria-disabled"),i.setAttribute("tabindex",0)))},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){this.isDisabled()?(this.$newElement[0].classList.add(F.DISABLED),this.$button.addClass(F.DISABLED).attr("aria-disabled",!0)):this.$button[0].classList.contains(F.DISABLED)&&(this.$newElement[0].classList.remove(F.DISABLED),this.$button.removeClass(F.DISABLED).attr("aria-disabled",!1))},clickListener:function(){var t=this,i=e(document);function n(){t.options.liveSearch?t.$searchbox.trigger("focus"):t.$menuInner.trigger("focus")}function o(){t.dropdown&&t.dropdown._popper&&t.dropdown._popper.state.isCreated?n():requestAnimationFrame(o)}i.data("spaceSelect",!1),this.$button.on("keyup",(function(e){/(32)/.test(e.keyCode.toString(10))&&i.data("spaceSelect")&&(e.preventDefault(),i.data("spaceSelect",!1))})),this.$newElement.on("show.bs.dropdown",(function(){M.major>3&&!t.dropdown&&(t.dropdown=t.$button.data("bs.dropdown"),t.dropdown._menu=t.$menu[0])})),this.$button.on("click.bs.dropdown.data-api",(function(){t.$newElement.hasClass(F.SHOW)||t.setSize()})),this.$element.on("shown"+W,(function(){t.$menuInner[0].scrollTop!==t.selectpicker.view.scrollTop&&(t.$menuInner[0].scrollTop=t.selectpicker.view.scrollTop),M.major>3?requestAnimationFrame(o):n()})),this.$menuInner.on("mouseenter","li a",(function(e){var i=this.parentElement,n=t.isVirtual()?t.selectpicker.view.position0:0,o=Array.prototype.indexOf.call(i.parentElement.children,i),s=t.selectpicker.current.data[o+n];t.focusItem(i,s,!0)})),this.$menuInner.on("click","li a",(function(i,n){var o=e(this),s=t.$element[0],r=t.isVirtual()?t.selectpicker.view.position0:0,a=t.selectpicker.current.data[o.parent().index()+r],l=a.index,c=g(s),d=s.selectedIndex,u=s.options[d],h=!0;if(t.multiple&&1!==t.options.maxOptions&&i.stopPropagation(),i.preventDefault(),!t.isDisabled()&&!o.parent().hasClass(F.DISABLED)){var f=a.option,p=e(f),v=f.selected,_=p.parent("optgroup"),w=_.find("option"),y=t.options.maxOptions,E=_.data("maxOptions")||!1;if(l===t.activeIndex&&(n=!0),n||(t.prevActiveIndex=t.activeIndex,t.activeIndex=void 0),t.multiple){if(f.selected=!v,t.setSelected(l,!v),t.focusedParent.focus(),!1!==y||!1!==E){var C=y<m(s).length,I=E<_.find("option:selected").length;if(y&&C||E&&I)if(y&&1==y)s.selectedIndex=-1,f.selected=!0,t.setOptionStatus(!0);else if(E&&1==E){for(var k=0;k<w.length;k++){var T=w[k];T.selected=!1,t.setSelected(T.liIndex,!1)}f.selected=!0,t.setSelected(l,!0)}else{var x="string"==typeof t.options.maxOptionsText?[t.options.maxOptionsText,t.options.maxOptionsText]:t.options.maxOptionsText,S="function"==typeof x?x(y,E):x,N=S[0].replace("{n}",y),O=S[1].replace("{n}",E),D=e('<div class="notify"></div>');S[2]&&(N=N.replace("{var}",S[2][y>1?0:1]),O=O.replace("{var}",S[2][E>1?0:1])),f.selected=!1,t.$menu.append(D),y&&C&&(D.append(e("<div>"+N+"</div>")),h=!1,t.$element.trigger("maxReached"+W)),E&&I&&(D.append(e("<div>"+O+"</div>")),h=!1,t.$element.trigger("maxReachedGrp"+W)),setTimeout((function(){t.setSelected(l,!1)}),10),D[0].classList.add("fadeOut"),setTimeout((function(){D.remove()}),1050)}}}else u&&(u.selected=!1),f.selected=!0,t.setSelected(l,!0);!t.multiple||t.multiple&&1===t.options.maxOptions?t.$button.trigger("focus"):t.options.liveSearch&&t.$searchbox.trigger("focus"),h&&(t.multiple||d!==s.selectedIndex)&&(b=[f.index,p.prop("selected"),c],t.$element.triggerNative("change"))}})),this.$menu.on("click","li."+F.DISABLED+" a, ."+F.POPOVERHEADER+", ."+F.POPOVERHEADER+" :not(.close)",(function(i){i.currentTarget==this&&(i.preventDefault(),i.stopPropagation(),t.options.liveSearch&&!e(i.target).hasClass("close")?t.$searchbox.trigger("focus"):t.$button.trigger("focus"))})),this.$menuInner.on("click",".divider, .dropdown-header",(function(e){e.preventDefault(),e.stopPropagation(),t.options.liveSearch?t.$searchbox.trigger("focus"):t.$button.trigger("focus")})),this.$menu.on("click","."+F.POPOVERHEADER+" .close",(function(){t.$button.trigger("click")})),this.$searchbox.on("click",(function(e){e.stopPropagation()})),this.$menu.on("click",".actions-btn",(function(i){t.options.liveSearch?t.$searchbox.trigger("focus"):t.$button.trigger("focus"),i.preventDefault(),i.stopPropagation(),e(this).hasClass("bs-select-all")?t.selectAll():t.deselectAll()})),this.$button.on("focus"+W,(function(e){var i=t.$element[0].getAttribute("tabindex");void 0!==i&&e.originalEvent&&e.originalEvent.isTrusted&&(this.setAttribute("tabindex",i),t.$element[0].setAttribute("tabindex",-1),t.selectpicker.view.tabindex=i)})).on("blur"+W,(function(e){void 0!==t.selectpicker.view.tabindex&&e.originalEvent&&e.originalEvent.isTrusted&&(t.$element[0].setAttribute("tabindex",t.selectpicker.view.tabindex),this.setAttribute("tabindex",-1),t.selectpicker.view.tabindex=void 0)})),this.$element.on("change"+W,(function(){t.render(),t.$element.trigger("changed"+W,b),b=null})).on("focus"+W,(function(){t.options.mobile||t.$button[0].focus()}))},liveSearchListener:function(){var e=this;this.$button.on("click.bs.dropdown.data-api",(function(){e.$searchbox.val()&&(e.$searchbox.val(""),e.selectpicker.search.previousValue=void 0)})),this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api",(function(e){e.stopPropagation()})),this.$searchbox.on("input propertychange",(function(){var t=e.$searchbox[0].value;if(e.selectpicker.search.elements=[],e.selectpicker.search.data=[],t){var i=[],n=t.toUpperCase(),o={},s=[],r=e._searchStyle(),a=e.options.liveSearchNormalize;a&&(n=T(n));for(var l=0;l<e.selectpicker.main.data.length;l++){var c=e.selectpicker.main.data[l];o[l]||(o[l]=w(c,n,r,a)),o[l]&&void 0!==c.headerIndex&&-1===s.indexOf(c.headerIndex)&&(c.headerIndex>0&&(o[c.headerIndex-1]=!0,s.push(c.headerIndex-1)),o[c.headerIndex]=!0,s.push(c.headerIndex),o[c.lastIndex+1]=!0),o[l]&&"optgroup-label"!==c.type&&s.push(l)}l=0;for(var d=s.length;l<d;l++){var u=s[l],h=s[l-1],f=(c=e.selectpicker.main.data[u],e.selectpicker.main.data[h]);("divider"!==c.type||"divider"===c.type&&f&&"divider"!==f.type&&d-1!==l)&&(e.selectpicker.search.data.push(c),i.push(e.selectpicker.main.elements[u]))}e.activeIndex=void 0,e.noScroll=!0,e.$menuInner.scrollTop(0),e.selectpicker.search.elements=i,e.createView(!0),Y.call(e,i,t)}else e.selectpicker.search.previousValue&&(e.$menuInner.scrollTop(0),e.createView(!1));e.selectpicker.search.previousValue=t}))},_searchStyle:function(){return this.options.liveSearchStyle||"contains"},val:function(e){var t=this.$element[0];if(void 0!==e){var i=g(t);if(b=[null,null,i],this.$element.val(e).trigger("changed"+W,b),this.$newElement.hasClass(F.SHOW))if(this.multiple)this.setOptionStatus(!0);else{var n=(t.options[t.selectedIndex]||{}).liIndex;"number"==typeof n&&(this.setSelected(this.selectedIndex,!1),this.setSelected(n,!0))}return this.render(),b=null,this.$element}return this.$element.val()},changeAll:function(e){if(this.multiple){void 0===e&&(e=!0);var t=this.$element[0],i=0,n=0,o=g(t);t.classList.add("bs-select-hidden");for(var s=0,r=this.selectpicker.current.data,a=r.length;s<a;s++){var l=r[s],c=l.option;c&&!l.disabled&&"divider"!==l.type&&(l.selected&&i++,c.selected=e,!0===e&&n++)}t.classList.remove("bs-select-hidden"),i!==n&&(this.setOptionStatus(),b=[null,null,o],this.$element.triggerNative("change"))}},selectAll:function(){return this.changeAll(!0)},deselectAll:function(){return this.changeAll(!1)},toggle:function(e){(e=e||window.event)&&e.stopPropagation(),this.$button.trigger("click.bs.dropdown.data-api")},keydown:function(t){var i,n,o,s,r,a=e(this),l=a.hasClass("dropdown-toggle"),c=(l?a.closest(".dropdown"):a.closest(U.MENU)).data("this"),d=c.findLis(),u=!1,h=t.which===z&&!l&&!c.options.selectOnTab,f=V.test(t.which)||h,p=c.$menuInner[0].scrollTop,m=!0===c.isVirtual()?c.selectpicker.view.position0:0;if(!(t.which>=112&&t.which<=123))if(!(n=c.$newElement.hasClass(F.SHOW))&&(f||t.which>=48&&t.which<=57||t.which>=96&&t.which<=105||t.which>=65&&t.which<=90)&&(c.$button.trigger("click.bs.dropdown.data-api"),c.options.liveSearch))c.$searchbox.trigger("focus");else{if(t.which===$&&n&&(t.preventDefault(),c.$button.trigger("click.bs.dropdown.data-api").trigger("focus")),f){if(!d.length)return;-1!==(i=(o=c.selectpicker.main.elements[c.activeIndex])?Array.prototype.indexOf.call(o.parentElement.children,o):-1)&&c.defocusItem(o),t.which===j?(-1!==i&&i--,i+m<0&&(i+=d.length),c.selectpicker.view.canHighlight[i+m]||-1==(i=c.selectpicker.view.canHighlight.slice(0,i+m).lastIndexOf(!0)-m)&&(i=d.length-1)):(t.which===R||h)&&(++i+m>=c.selectpicker.view.canHighlight.length&&(i=c.selectpicker.view.firstHighlightIndex),c.selectpicker.view.canHighlight[i+m]||(i=i+1+c.selectpicker.view.canHighlight.slice(i+m+1).indexOf(!0))),t.preventDefault();var g=m+i;t.which===j?0===m&&i===d.length-1?(c.$menuInner[0].scrollTop=c.$menuInner[0].scrollHeight,g=c.selectpicker.current.elements.length-1):u=(r=(s=c.selectpicker.current.data[g]).position-s.height)<p:(t.which===R||h)&&(i===c.selectpicker.view.firstHighlightIndex?(c.$menuInner[0].scrollTop=0,g=c.selectpicker.view.firstHighlightIndex):u=(r=(s=c.selectpicker.current.data[g]).position-c.sizeInfo.menuInnerHeight)>p),o=c.selectpicker.current.elements[g],c.activeIndex=c.selectpicker.current.data[g].index,c.focusItem(o),c.selectpicker.view.currentActive=o,u&&(c.$menuInner[0].scrollTop=r),c.options.liveSearch?c.$searchbox.trigger("focus"):a.trigger("focus")}else if(!a.is("input")&&!Q.test(t.which)||t.which===P&&c.selectpicker.keydown.keyHistory){var v,b,_=[];t.preventDefault(),c.selectpicker.keydown.keyHistory+=L[t.which],c.selectpicker.keydown.resetKeyHistory.cancel&&clearTimeout(c.selectpicker.keydown.resetKeyHistory.cancel),c.selectpicker.keydown.resetKeyHistory.cancel=c.selectpicker.keydown.resetKeyHistory.start(),b=c.selectpicker.keydown.keyHistory,/^(.)\1+$/.test(b)&&(b=b.charAt(0));for(var y=0;y<c.selectpicker.current.data.length;y++){var E=c.selectpicker.current.data[y];w(E,b,"startsWith",!0)&&c.selectpicker.view.canHighlight[y]&&_.push(E.index)}if(_.length){var C=0;d.removeClass("active").find("a").removeClass("active"),1===b.length&&(-1===(C=_.indexOf(c.activeIndex))||C===_.length-1?C=0:C++),v=_[C],p-(s=c.selectpicker.main.data[v]).position>0?(r=s.position-s.height,u=!0):(r=s.position-c.sizeInfo.menuInnerHeight,u=s.position>p+c.sizeInfo.menuInnerHeight),o=c.selectpicker.main.elements[v],c.activeIndex=_[C],c.focusItem(o),o&&o.firstChild.focus(),u&&(c.$menuInner[0].scrollTop=r),a.trigger("focus")}}n&&(t.which===P&&!c.selectpicker.keydown.keyHistory||t.which===H||t.which===z&&c.options.selectOnTab)&&(t.which!==P&&t.preventDefault(),c.options.liveSearch&&t.which===P||(c.$menuInner.find(".active a").trigger("click",!0),a.trigger("focus"),c.options.liveSearch||(t.preventDefault(),e(document).data("spaceSelect",!0))))}},mobile:function(){this.options.mobile=!0,this.$element[0].classList.add("mobile-device")},refresh:function(){var t=e.extend({},this.options,this.$element.data());this.options=t,this.checkDisabled(),this.buildData(),this.setStyle(),this.render(),this.buildList(),this.setWidth(),this.setSize(!0),this.$element.trigger("refreshed"+W)},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()},destroy:function(){this.$newElement.before(this.$element).remove(),this.$bsContainer?this.$bsContainer.remove():this.$menu.remove(),this.selectpicker.view.titleOption&&this.selectpicker.view.titleOption.parentNode&&this.selectpicker.view.titleOption.parentNode.removeChild(this.selectpicker.view.titleOption),this.$element.off(W).removeData("selectpicker").removeClass("bs-select-hidden selectpicker"),e(window).off(W+"."+this.selectId)}};var J=e.fn.selectpicker;function Z(){if(e.fn.dropdown){var t=e.fn.dropdown.Constructor._dataApiKeydownHandler||e.fn.dropdown.Constructor.prototype.keydown;return t.apply(this,arguments)}}e.fn.selectpicker=X,e.fn.selectpicker.Constructor=G,e.fn.selectpicker.noConflict=function(){return e.fn.selectpicker=J,this},e(document).off("keydown.bs.dropdown.data-api").on("keydown.bs.dropdown.data-api",':not(.bootstrap-select) > [data-toggle="dropdown"]',Z).on("keydown.bs.dropdown.data-api",":not(.bootstrap-select) > .dropdown-menu",Z).on("keydown"+W,'.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',G.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',(function(e){e.stopPropagation()})),e(window).on("load"+W+".data-api",(function(){e(".selectpicker").each((function(){var t=e(this);X.call(t,t.data())}))}))}(e)}(e)}.apply(t,n))||(e.exports=o)},function(e,t,i){var n=i(6),o=i(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var s={insert:"head",singleton:!1};n(o,s);e.exports=o.locals||{}},function(e,t,i){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},s=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),r=[];function a(e){for(var t=-1,i=0;i<r.length;i++)if(r[i].identifier===e){t=i;break}return t}function l(e,t){for(var i={},n=[],o=0;o<e.length;o++){var s=e[o],l=t.base?s[0]+t.base:s[0],c=i[l]||0,d="".concat(l," ").concat(c);i[l]=c+1;var u=a(d),h={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(r[u].references++,r[u].updater(h)):r.push({identifier:d,updater:g(h,t),references:1}),n.push(d)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=i.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var r=s(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function h(e,t,i,n){var o=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var s=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}function f(e,t,i){var n=i.css,o=i.media,s=i.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,m=0;function g(e,t){var i,n,o;if(t.singleton){var s=m++;i=p||(p=c(t)),n=h.bind(null,i,s,!1),o=h.bind(null,i,s,!0)}else i=c(t),n=f.bind(null,i,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var i=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<i.length;n++){var o=a(i[n]);r[o].references--}for(var s=l(e,t),c=0;c<i.length;c++){var d=a(i[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}i=s}}}},function(e,t,i){},function(e,t,i){"use strict";i.r(t);i(2),i(4);!function(e,t,i){e.resizeAction=function(t,i){var n=!0;e(window).on("resize",(function(){t.call(this)?n&&(i.call(this,n),n=!n):n||(i.call(this,n),n=!n)}))},t.behaviors.toggleGrid={attach:function(t,i){e(".view-style a.style-btn",t).click((function(t){t.preventDefault(),e(this).hasClass("line")?e(this).closest(".view").addClass("style-line"):e(this).closest(".view").removeClass("style-line")}))}},t.behaviors.mobileMenu={attach:function(t,i){e(".mobile-menu-btn",t).on("click",(function(){e("body",t).toggleClass("menu-open"),e(".mobile-header-wrapper").slideToggle()}))}},t.behaviors.toggleFeed={attach:function(t,i){e(".feed-link",t).on("click",(function(){e("body",t).addClass("open-feed"),window.scrollTo({top:0})}))}},t.behaviors.toggleGrid={attach:function(t,i){var n=e("body",t);e(".show-filter",t).on("click",(function(t){t.preventDefault(),n.addClass("open-filter"),window.scrollTo({top:0}),e(".catalog-filter").fadeIn()})),e(".close-btn",t).on("click",(function(){n.hasClass("open-filter")&&e(".catalog-filter").fadeOut(),n.removeClass("open-feed open-filter")}))}},t.behaviors.catalogFilters={attach:function(t){e(".apply-catalog-filters",t).once().on("click",(function(){var t=e("#catalog-filter-parent .close-btn:visible");0!==t.length&&t.click()}))}},t.behaviors.socialFeed={attach:function(t,i){var n=e("body");if(e(t).hasClass("dashboard")){var o=e(t);o.on("click",".feed-link",(function(){n.addClass("open-feed"),window.scrollTo({top:0})})),o.on("click",".close-btn",(function(){n.removeClass("open-feed")}))}}},t.behaviors.activitiesListDropdown={attach:function(t,i){e(".opigno-lp-step-module",t).on("click",".module-title",(function(){var t=e(this);t.toggleClass("open"),t.siblings(".passed-activities").slideToggle(),t.siblings(".activities-list").slideToggle()})),e(".show-activity-list",t).on("click",(function(){window.innerWidth<=991&&(e(this).fadeOut((function(){e(this).siblings(".opigno-lp-step-activity",t).fadeIn()})),e(".lp_progress_wrapper, .opigno_activity__wrapper",t).fadeOut())}))}},t.behaviors.expandInnerTable={attach:function(t,i){e(".details-btn",t).on("click",(function(t){t.preventDefault(),e(this).toggleClass("active").closest("tr").siblings().find(".inner-table").slideToggle()}))}},t.behaviors.frontpageSlider={attach:function(t,i){if(e("body.anonymous-slider",t).length){var n=0,o=0;e(".anonymous-slider .slider-item",t).not(":eq(".concat(n,")")).addClass("hide").hide(),e(".anonymous-slider .slider-item",t).each((function(){e(this).attr("data-id",n),n+=1})),setInterval((function(){o=o<n-1?o+=1:o=0,e('.anonymous-slider .slider-item:not([data-id="'.concat(o,'"])')).addClass("hide").fadeOut("slow"),e('.anonymous-slider .slider-item[data-id="'.concat(o,'"]')).removeClass("hide").fadeIn("slow")}),2e3)}}},t.behaviors.anonymousUserForms={attach:function(t,i){e("body.anonymous-slider").length&&e("#user-sidebar .switch-link a",t).once().click((function(i){var n=e(this).attr("href");e('.form-wrapper[data-target="'.concat(n,'"]'),t).length&&(i.preventDefault(),e(".form-wrapper[data-target]",t).not('.form-wrapper[data-target="'.concat(n,'"]')).hide(),e('.form-wrapper[data-target="'.concat(n,'"]'),t).show())}))}},t.behaviors.messges={attach:function(t,i){var n=e(".private-message-thread-messages",t);n.scrollTop(n.prop("scrollHeight")),e(".show-message-list",t).on("click",(function(i){i.preventDefault(),e("body",t).toggleClass("open-message-list")}))}},t.behaviors.activateSelectpicker={attach:function(t){e(".selectpicker",t).each((function(){e(this).hasClass("processed")||(e(this).selectpicker(),e(this).addClass("processed"))}))}},e.resizeAction((function(){return window.innerWidth>991}),(function(t){t&&(e("body").removeClass("open-filter menu-open open-message-list"),e(".catalog-filter, .opigno-lp-step-activity, .lp_progress_wrapper, .opigno_activity__wrapper").removeAttr("style"))}))}(jQuery,Drupal,drupalSettings);i(5)}]);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, drupalSettings) {
  Drupal.behaviors.activeLinks = {
    attach: function attach(context) {
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? "[data-drupal-link-query='".concat(queryString, "']") : ':not([data-drupal-link-query])';
      var originalSelectors = ["[data-drupal-link-system-path=\"".concat(path.currentPath, "\"]")];
      var selectors;

      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }

      selectors = [].concat(originalSelectors.map(function (selector) {
        return "".concat(selector, ":not([hreflang])");
      }), originalSelectors.map(function (selector) {
        return "".concat(selector, "[hreflang=\"").concat(path.currentLanguage, "\"]");
      }));
      selectors = selectors.map(function (current) {
        return current + querySelector;
      });
      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;

      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;

        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };
})(Drupal, drupalSettings);;
(function ($, Drupal) {
  // Fixes multiselect issue 2123241.
  if (Drupal.behaviors.multiSelect
      && !Drupal.behaviors.multiSelect.detach
  ) {
    Drupal.behaviors.multiSelect.detach = function (context, settings, trigger) {
      if (trigger === 'serialize') {
        $('select.multiselect-selected').selectAll();
      }
    };
  }
}(jQuery, Drupal));
;
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Vue=t()}(this,function(){"use strict";var e=Object.freeze({});function t(e){return null==e}function n(e){return null!=e}function r(e){return!0===e}function i(e){return"string"==typeof e||"number"==typeof e||"symbol"==typeof e||"boolean"==typeof e}function o(e){return null!==e&&"object"==typeof e}var a=Object.prototype.toString;function s(e){return"[object Object]"===a.call(e)}function c(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function u(e){return n(e)&&"function"==typeof e.then&&"function"==typeof e.catch}function l(e){return null==e?"":Array.isArray(e)||s(e)&&e.toString===a?JSON.stringify(e,null,2):String(e)}function f(e){var t=parseFloat(e);return isNaN(t)?e:t}function p(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}var d=p("slot,component",!0),v=p("key,ref,slot,slot-scope,is");function h(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function y(e,t){return m.call(e,t)}function g(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}var _=/-(\w)/g,b=g(function(e){return e.replace(_,function(e,t){return t?t.toUpperCase():""})}),$=g(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),w=/\B([A-Z])/g,C=g(function(e){return e.replace(w,"-$1").toLowerCase()});var x=Function.prototype.bind?function(e,t){return e.bind(t)}:function(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n};function k(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function A(e,t){for(var n in t)e[n]=t[n];return e}function O(e){for(var t={},n=0;n<e.length;n++)e[n]&&A(t,e[n]);return t}function S(e,t,n){}var T=function(e,t,n){return!1},N=function(e){return e};function E(e,t){if(e===t)return!0;var n=o(e),r=o(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),a=Array.isArray(t);if(i&&a)return e.length===t.length&&e.every(function(e,n){return E(e,t[n])});if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||a)return!1;var s=Object.keys(e),c=Object.keys(t);return s.length===c.length&&s.every(function(n){return E(e[n],t[n])})}catch(e){return!1}}function j(e,t){for(var n=0;n<e.length;n++)if(E(e[n],t))return n;return-1}function D(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var L="data-server-rendered",I=["component","directive","filter"],M=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],F={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:T,isReservedAttr:T,isUnknownElement:T,getTagNamespace:S,parsePlatformTagName:N,mustUseProp:T,async:!0,_lifecycleHooks:M},P=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function R(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var H=new RegExp("[^"+P.source+".$_\\d]");var B,U="__proto__"in{},V="undefined"!=typeof window,z="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,K=z&&WXEnvironment.platform.toLowerCase(),J=V&&window.navigator.userAgent.toLowerCase(),q=J&&/msie|trident/.test(J),W=J&&J.indexOf("msie 9.0")>0,Z=J&&J.indexOf("edge/")>0,G=(J&&J.indexOf("android"),J&&/iphone|ipad|ipod|ios/.test(J)||"ios"===K),X=(J&&/chrome\/\d+/.test(J),J&&/phantomjs/.test(J),J&&J.match(/firefox\/(\d+)/)),Y={}.watch,Q=!1;if(V)try{var ee={};Object.defineProperty(ee,"passive",{get:function(){Q=!0}}),window.addEventListener("test-passive",null,ee)}catch(e){}var te=function(){return void 0===B&&(B=!V&&!z&&"undefined"!=typeof global&&(global.process&&"server"===global.process.env.VUE_ENV)),B},ne=V&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function re(e){return"function"==typeof e&&/native code/.test(e.toString())}var ie,oe="undefined"!=typeof Symbol&&re(Symbol)&&"undefined"!=typeof Reflect&&re(Reflect.ownKeys);ie="undefined"!=typeof Set&&re(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ae=S,se=0,ce=function(){this.id=se++,this.subs=[]};ce.prototype.addSub=function(e){this.subs.push(e)},ce.prototype.removeSub=function(e){h(this.subs,e)},ce.prototype.depend=function(){ce.target&&ce.target.addDep(this)},ce.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},ce.target=null;var ue=[];function le(e){ue.push(e),ce.target=e}function fe(){ue.pop(),ce.target=ue[ue.length-1]}var pe=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},de={child:{configurable:!0}};de.child.get=function(){return this.componentInstance},Object.defineProperties(pe.prototype,de);var ve=function(e){void 0===e&&(e="");var t=new pe;return t.text=e,t.isComment=!0,t};function he(e){return new pe(void 0,void 0,void 0,String(e))}function me(e){var t=new pe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var ye=Array.prototype,ge=Object.create(ye);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=ye[e];R(ge,e,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=t.apply(this,n),a=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&a.observeArray(i),a.dep.notify(),o})});var _e=Object.getOwnPropertyNames(ge),be=!0;function $e(e){be=e}var we=function(e){var t;this.value=e,this.dep=new ce,this.vmCount=0,R(e,"__ob__",this),Array.isArray(e)?(U?(t=ge,e.__proto__=t):function(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];R(e,o,t[o])}}(e,ge,_e),this.observeArray(e)):this.walk(e)};function Ce(e,t){var n;if(o(e)&&!(e instanceof pe))return y(e,"__ob__")&&e.__ob__ instanceof we?n=e.__ob__:be&&!te()&&(Array.isArray(e)||s(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new we(e)),t&&n&&n.vmCount++,n}function xe(e,t,n,r,i){var o=new ce,a=Object.getOwnPropertyDescriptor(e,t);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set;s&&!c||2!==arguments.length||(n=e[t]);var u=!i&&Ce(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=s?s.call(e):n;return ce.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(t)&&function e(t){for(var n=void 0,r=0,i=t.length;r<i;r++)(n=t[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&e(n)}(t))),t},set:function(t){var r=s?s.call(e):n;t===r||t!=t&&r!=r||s&&!c||(c?c.call(e,t):n=t,u=!i&&Ce(t),o.notify())}})}}function ke(e,t,n){if(Array.isArray(e)&&c(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(xe(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function Ae(e,t){if(Array.isArray(e)&&c(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||y(e,t)&&(delete e[t],n&&n.dep.notify())}}we.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)xe(e,t[n])},we.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Ce(e[t])};var Oe=F.optionMergeStrategies;function Se(e,t){if(!t)return e;for(var n,r,i,o=oe?Reflect.ownKeys(t):Object.keys(t),a=0;a<o.length;a++)"__ob__"!==(n=o[a])&&(r=e[n],i=t[n],y(e,n)?r!==i&&s(r)&&s(i)&&Se(r,i):ke(e,n,i));return e}function Te(e,t,n){return n?function(){var r="function"==typeof t?t.call(n,n):t,i="function"==typeof e?e.call(n,n):e;return r?Se(r,i):i}:t?e?function(){return Se("function"==typeof t?t.call(this,this):t,"function"==typeof e?e.call(this,this):e)}:t:e}function Ne(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(n):n}function Ee(e,t,n,r){var i=Object.create(e||null);return t?A(i,t):i}Oe.data=function(e,t,n){return n?Te(e,t,n):t&&"function"!=typeof t?e:Te(e,t)},M.forEach(function(e){Oe[e]=Ne}),I.forEach(function(e){Oe[e+"s"]=Ee}),Oe.watch=function(e,t,n,r){if(e===Y&&(e=void 0),t===Y&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var o in A(i,e),t){var a=i[o],s=t[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},Oe.props=Oe.methods=Oe.inject=Oe.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return A(i,e),t&&A(i,t),i},Oe.provide=Te;var je=function(e,t){return void 0===t?e:t};function De(e,t,n){if("function"==typeof t&&(t=t.options),function(e,t){var n=e.props;if(n){var r,i,o={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(o[b(i)]={type:null});else if(s(n))for(var a in n)i=n[a],o[b(a)]=s(i)?i:{type:i};e.props=o}}(t),function(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(s(n))for(var o in n){var a=n[o];r[o]=s(a)?A({from:o},a):{from:a}}}}(t),function(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}(t),!t._base&&(t.extends&&(e=De(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=De(e,t.mixins[r],n);var o,a={};for(o in e)c(o);for(o in t)y(e,o)||c(o);function c(r){var i=Oe[r]||je;a[r]=i(e[r],t[r],n,r)}return a}function Le(e,t,n,r){if("string"==typeof n){var i=e[t];if(y(i,n))return i[n];var o=b(n);if(y(i,o))return i[o];var a=$(o);return y(i,a)?i[a]:i[n]||i[o]||i[a]}}function Ie(e,t,n,r){var i=t[e],o=!y(n,e),a=n[e],s=Re(Boolean,i.type);if(s>-1)if(o&&!y(i,"default"))a=!1;else if(""===a||a===C(e)){var c=Re(String,i.type);(c<0||s<c)&&(a=!0)}if(void 0===a){a=function(e,t,n){if(!y(t,"default"))return;var r=t.default;if(e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n])return e._props[n];return"function"==typeof r&&"Function"!==Fe(t.type)?r.call(e):r}(r,i,e);var u=be;$e(!0),Ce(a),$e(u)}return a}var Me=/^\s*function (\w+)/;function Fe(e){var t=e&&e.toString().match(Me);return t?t[1]:""}function Pe(e,t){return Fe(e)===Fe(t)}function Re(e,t){if(!Array.isArray(t))return Pe(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(Pe(t[n],e))return n;return-1}function He(e,t,n){le();try{if(t)for(var r=t;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,e,t,n))return}catch(e){Ue(e,r,"errorCaptured hook")}}Ue(e,t,n)}finally{fe()}}function Be(e,t,n,r,i){var o;try{(o=n?e.apply(t,n):e.call(t))&&!o._isVue&&u(o)&&!o._handled&&(o.catch(function(e){return He(e,r,i+" (Promise/async)")}),o._handled=!0)}catch(e){He(e,r,i)}return o}function Ue(e,t,n){if(F.errorHandler)try{return F.errorHandler.call(null,e,t,n)}catch(t){t!==e&&Ve(t,null,"config.errorHandler")}Ve(e,t,n)}function Ve(e,t,n){if(!V&&!z||"undefined"==typeof console)throw e;console.error(e)}var ze,Ke=!1,Je=[],qe=!1;function We(){qe=!1;var e=Je.slice(0);Je.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!=typeof Promise&&re(Promise)){var Ze=Promise.resolve();ze=function(){Ze.then(We),G&&setTimeout(S)},Ke=!0}else if(q||"undefined"==typeof MutationObserver||!re(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ze="undefined"!=typeof setImmediate&&re(setImmediate)?function(){setImmediate(We)}:function(){setTimeout(We,0)};else{var Ge=1,Xe=new MutationObserver(We),Ye=document.createTextNode(String(Ge));Xe.observe(Ye,{characterData:!0}),ze=function(){Ge=(Ge+1)%2,Ye.data=String(Ge)},Ke=!0}function Qe(e,t){var n;if(Je.push(function(){if(e)try{e.call(t)}catch(e){He(e,t,"nextTick")}else n&&n(t)}),qe||(qe=!0,ze()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){n=e})}var et=new ie;function tt(e){!function e(t,n){var r,i;var a=Array.isArray(t);if(!a&&!o(t)||Object.isFrozen(t)||t instanceof pe)return;if(t.__ob__){var s=t.__ob__.dep.id;if(n.has(s))return;n.add(s)}if(a)for(r=t.length;r--;)e(t[r],n);else for(i=Object.keys(t),r=i.length;r--;)e(t[i[r]],n)}(e,et),et.clear()}var nt=g(function(e){var t="&"===e.charAt(0),n="~"===(e=t?e.slice(1):e).charAt(0),r="!"===(e=n?e.slice(1):e).charAt(0);return{name:e=r?e.slice(1):e,once:n,capture:r,passive:t}});function rt(e,t){function n(){var e=arguments,r=n.fns;if(!Array.isArray(r))return Be(r,null,arguments,t,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)Be(i[o],null,e,t,"v-on handler")}return n.fns=e,n}function it(e,n,i,o,a,s){var c,u,l,f;for(c in e)u=e[c],l=n[c],f=nt(c),t(u)||(t(l)?(t(u.fns)&&(u=e[c]=rt(u,s)),r(f.once)&&(u=e[c]=a(f.name,u,f.capture)),i(f.name,u,f.capture,f.passive,f.params)):u!==l&&(l.fns=u,e[c]=l));for(c in n)t(e[c])&&o((f=nt(c)).name,n[c],f.capture)}function ot(e,i,o){var a;e instanceof pe&&(e=e.data.hook||(e.data.hook={}));var s=e[i];function c(){o.apply(this,arguments),h(a.fns,c)}t(s)?a=rt([c]):n(s.fns)&&r(s.merged)?(a=s).fns.push(c):a=rt([s,c]),a.merged=!0,e[i]=a}function at(e,t,r,i,o){if(n(t)){if(y(t,r))return e[r]=t[r],o||delete t[r],!0;if(y(t,i))return e[r]=t[i],o||delete t[i],!0}return!1}function st(e){return i(e)?[he(e)]:Array.isArray(e)?function e(o,a){var s=[];var c,u,l,f;for(c=0;c<o.length;c++)t(u=o[c])||"boolean"==typeof u||(l=s.length-1,f=s[l],Array.isArray(u)?u.length>0&&(ct((u=e(u,(a||"")+"_"+c))[0])&&ct(f)&&(s[l]=he(f.text+u[0].text),u.shift()),s.push.apply(s,u)):i(u)?ct(f)?s[l]=he(f.text+u):""!==u&&s.push(he(u)):ct(u)&&ct(f)?s[l]=he(f.text+u.text):(r(o._isVList)&&n(u.tag)&&t(u.key)&&n(a)&&(u.key="__vlist"+a+"_"+c+"__"),s.push(u)));return s}(e):void 0}function ct(e){return n(e)&&n(e.text)&&!1===e.isComment}function ut(e,t){if(e){for(var n=Object.create(null),r=oe?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){for(var a=e[o].from,s=t;s;){if(s._provided&&y(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s&&"default"in e[o]){var c=e[o].default;n[o]="function"==typeof c?c.call(t):c}}}return n}}function lt(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==t&&o.fnContext!==t||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(ft)&&delete n[u];return n}function ft(e){return e.isComment&&!e.asyncFactory||" "===e.text}function pt(e){return e.isComment&&e.asyncFactory}function dt(t,n,r){var i,o=Object.keys(n).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==e&&s===r.$key&&!o&&!r.$hasNormal)return r;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=vt(n,c,t[c]))}else i={};for(var u in n)u in i||(i[u]=ht(n,u));return t&&Object.isExtensible(t)&&(t._normalized=i),R(i,"$stable",a),R(i,"$key",s),R(i,"$hasNormal",o),i}function vt(e,t,n){var r=function(){var e=arguments.length?n.apply(null,arguments):n({}),t=(e=e&&"object"==typeof e&&!Array.isArray(e)?[e]:st(e))&&e[0];return e&&(!t||1===e.length&&t.isComment&&!pt(t))?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function ht(e,t){return function(){return e[t]}}function mt(e,t){var r,i,a,s,c;if(Array.isArray(e)||"string"==typeof e)for(r=new Array(e.length),i=0,a=e.length;i<a;i++)r[i]=t(e[i],i);else if("number"==typeof e)for(r=new Array(e),i=0;i<e;i++)r[i]=t(i+1,i);else if(o(e))if(oe&&e[Symbol.iterator]){r=[];for(var u=e[Symbol.iterator](),l=u.next();!l.done;)r.push(t(l.value,r.length)),l=u.next()}else for(s=Object.keys(e),r=new Array(s.length),i=0,a=s.length;i<a;i++)c=s[i],r[i]=t(e[c],c,i);return n(r)||(r=[]),r._isVList=!0,r}function yt(e,t,n,r){var i,o=this.$scopedSlots[e];o?(n=n||{},r&&(n=A(A({},r),n)),i=o(n)||("function"==typeof t?t():t)):i=this.$slots[e]||("function"==typeof t?t():t);var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function gt(e){return Le(this.$options,"filters",e)||N}function _t(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function bt(e,t,n,r,i){var o=F.keyCodes[t]||n;return i&&r&&!F.keyCodes[t]?_t(i,r):o?_t(o,e):r?C(r)!==t:void 0===e}function $t(e,t,n,r,i){if(n)if(o(n)){var a;Array.isArray(n)&&(n=O(n));var s=function(o){if("class"===o||"style"===o||v(o))a=e;else{var s=e.attrs&&e.attrs.type;a=r||F.mustUseProp(t,s,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=b(o),u=C(o);c in a||u in a||(a[o]=n[o],i&&((e.on||(e.on={}))["update:"+o]=function(e){n[o]=e}))};for(var c in n)s(c)}else;return e}function wt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t?r:(xt(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),"__static__"+e,!1),r)}function Ct(e,t,n){return xt(e,"__once__"+t+(n?"_"+n:""),!0),e}function xt(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&kt(e[r],t+"_"+r,n);else kt(e,t,n)}function kt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function At(e,t){if(t)if(s(t)){var n=e.on=e.on?A({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function Ot(e,t,n,r){t=t||{$stable:!n};for(var i=0;i<e.length;i++){var o=e[i];Array.isArray(o)?Ot(o,t,n):o&&(o.proxy&&(o.fn.proxy=!0),t[o.key]=o.fn)}return r&&(t.$key=r),t}function St(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"==typeof r&&r&&(e[t[n]]=t[n+1])}return e}function Tt(e,t){return"string"==typeof e?t+e:e}function Nt(e){e._o=Ct,e._n=f,e._s=l,e._l=mt,e._t=yt,e._q=E,e._i=j,e._m=wt,e._f=gt,e._k=bt,e._b=$t,e._v=he,e._e=ve,e._u=Ot,e._g=At,e._d=St,e._p=Tt}function Et(t,n,i,o,a){var s,c=this,u=a.options;y(o,"_uid")?(s=Object.create(o))._original=o:(s=o,o=o._original);var l=r(u._compiled),f=!l;this.data=t,this.props=n,this.children=i,this.parent=o,this.listeners=t.on||e,this.injections=ut(u.inject,o),this.slots=function(){return c.$slots||dt(t.scopedSlots,c.$slots=lt(i,o)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return dt(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=dt(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(e,t,n,r){var i=Ht(s,e,t,n,r,f);return i&&!Array.isArray(i)&&(i.fnScopeId=u._scopeId,i.fnContext=o),i}:this._c=function(e,t,n,r){return Ht(s,e,t,n,r,f)}}function jt(e,t,n,r,i){var o=me(e);return o.fnContext=n,o.fnOptions=r,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function Dt(e,t){for(var n in t)e[b(n)]=t[n]}Nt(Et.prototype);var Lt={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var r=e;Lt.prepatch(r,r)}else{(e.componentInstance=function(e,t){var r={_isComponent:!0,_parentVnode:e,parent:t},i=e.data.inlineTemplate;n(i)&&(r.render=i.render,r.staticRenderFns=i.staticRenderFns);return new e.componentOptions.Ctor(r)}(e,Zt)).$mount(t?e.elm:void 0,t)}},prepatch:function(t,n){var r=n.componentOptions;!function(t,n,r,i,o){var a=i.data.scopedSlots,s=t.$scopedSlots,c=!!(a&&!a.$stable||s!==e&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key||!a&&t.$scopedSlots.$key),u=!!(o||t.$options._renderChildren||c);t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i);if(t.$options._renderChildren=o,t.$attrs=i.data.attrs||e,t.$listeners=r||e,n&&t.$options.props){$e(!1);for(var l=t._props,f=t.$options._propKeys||[],p=0;p<f.length;p++){var d=f[p],v=t.$options.props;l[d]=Ie(d,v,n,t)}$e(!0),t.$options.propsData=n}r=r||e;var h=t.$options._parentListeners;t.$options._parentListeners=r,Wt(t,r,h),u&&(t.$slots=lt(o,i.context),t.$forceUpdate())}(n.componentInstance=t.componentInstance,r.propsData,r.listeners,n,r.children)},insert:function(e){var t,n=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,Qt(r,"mounted")),e.data.keepAlive&&(n._isMounted?((t=r)._inactive=!1,tn.push(t)):Yt(r,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?function e(t,n){if(n&&(t._directInactive=!0,Xt(t)))return;if(!t._inactive){t._inactive=!0;for(var r=0;r<t.$children.length;r++)e(t.$children[r]);Qt(t,"deactivated")}}(t,!0):t.$destroy())}},It=Object.keys(Lt);function Mt(i,a,s,c,l){if(!t(i)){var f=s.$options._base;if(o(i)&&(i=f.extend(i)),"function"==typeof i){var p;if(t(i.cid)&&void 0===(i=function(e,i){if(r(e.error)&&n(e.errorComp))return e.errorComp;if(n(e.resolved))return e.resolved;var a=Ut;a&&n(e.owners)&&-1===e.owners.indexOf(a)&&e.owners.push(a);if(r(e.loading)&&n(e.loadingComp))return e.loadingComp;if(a&&!n(e.owners)){var s=e.owners=[a],c=!0,l=null,f=null;a.$on("hook:destroyed",function(){return h(s,a)});var p=function(e){for(var t=0,n=s.length;t<n;t++)s[t].$forceUpdate();e&&(s.length=0,null!==l&&(clearTimeout(l),l=null),null!==f&&(clearTimeout(f),f=null))},d=D(function(t){e.resolved=Vt(t,i),c?s.length=0:p(!0)}),v=D(function(t){n(e.errorComp)&&(e.error=!0,p(!0))}),m=e(d,v);return o(m)&&(u(m)?t(e.resolved)&&m.then(d,v):u(m.component)&&(m.component.then(d,v),n(m.error)&&(e.errorComp=Vt(m.error,i)),n(m.loading)&&(e.loadingComp=Vt(m.loading,i),0===m.delay?e.loading=!0:l=setTimeout(function(){l=null,t(e.resolved)&&t(e.error)&&(e.loading=!0,p(!1))},m.delay||200)),n(m.timeout)&&(f=setTimeout(function(){f=null,t(e.resolved)&&v(null)},m.timeout)))),c=!1,e.loading?e.loadingComp:e.resolved}}(p=i,f)))return function(e,t,n,r,i){var o=ve();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}(p,a,s,c,l);a=a||{},wn(i),n(a.model)&&function(e,t){var r=e.model&&e.model.prop||"value",i=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[r]=t.model.value;var o=t.on||(t.on={}),a=o[i],s=t.model.callback;n(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[i]=[s].concat(a)):o[i]=s}(i.options,a);var d=function(e,r,i){var o=r.options.props;if(!t(o)){var a={},s=e.attrs,c=e.props;if(n(s)||n(c))for(var u in o){var l=C(u);at(a,c,u,l,!0)||at(a,s,u,l,!1)}return a}}(a,i);if(r(i.options.functional))return function(t,r,i,o,a){var s=t.options,c={},u=s.props;if(n(u))for(var l in u)c[l]=Ie(l,u,r||e);else n(i.attrs)&&Dt(c,i.attrs),n(i.props)&&Dt(c,i.props);var f=new Et(i,c,a,o,t),p=s.render.call(null,f._c,f);if(p instanceof pe)return jt(p,i,f.parent,s);if(Array.isArray(p)){for(var d=st(p)||[],v=new Array(d.length),h=0;h<d.length;h++)v[h]=jt(d[h],i,f.parent,s);return v}}(i,d,a,s,c);var v=a.on;if(a.on=a.nativeOn,r(i.options.abstract)){var m=a.slot;a={},m&&(a.slot=m)}!function(e){for(var t=e.hook||(e.hook={}),n=0;n<It.length;n++){var r=It[n],i=t[r],o=Lt[r];i===o||i&&i._merged||(t[r]=i?Ft(o,i):o)}}(a);var y=i.options.name||l;return new pe("vue-component-"+i.cid+(y?"-"+y:""),a,void 0,void 0,void 0,s,{Ctor:i,propsData:d,listeners:v,tag:l,children:c},p)}}}function Ft(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}var Pt=1,Rt=2;function Ht(e,a,s,c,u,l){return(Array.isArray(s)||i(s))&&(u=c,c=s,s=void 0),r(l)&&(u=Rt),function(e,i,a,s,c){if(n(a)&&n(a.__ob__))return ve();n(a)&&n(a.is)&&(i=a.is);if(!i)return ve();Array.isArray(s)&&"function"==typeof s[0]&&((a=a||{}).scopedSlots={default:s[0]},s.length=0);c===Rt?s=st(s):c===Pt&&(s=function(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}(s));var u,l;if("string"==typeof i){var f;l=e.$vnode&&e.$vnode.ns||F.getTagNamespace(i),u=F.isReservedTag(i)?new pe(F.parsePlatformTagName(i),a,s,void 0,void 0,e):a&&a.pre||!n(f=Le(e.$options,"components",i))?new pe(i,a,s,void 0,void 0,e):Mt(f,a,e,s,i)}else u=Mt(i,a,e,s);return Array.isArray(u)?u:n(u)?(n(l)&&function e(i,o,a){i.ns=o;"foreignObject"===i.tag&&(o=void 0,a=!0);if(n(i.children))for(var s=0,c=i.children.length;s<c;s++){var u=i.children[s];n(u.tag)&&(t(u.ns)||r(a)&&"svg"!==u.tag)&&e(u,o,a)}}(u,l),n(a)&&function(e){o(e.style)&&tt(e.style);o(e.class)&&tt(e.class)}(a),u):ve()}(e,a,s,c,u)}var Bt,Ut=null;function Vt(e,t){return(e.__esModule||oe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),o(e)?t.extend(e):e}function zt(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var r=e[t];if(n(r)&&(n(r.componentOptions)||pt(r)))return r}}function Kt(e,t){Bt.$on(e,t)}function Jt(e,t){Bt.$off(e,t)}function qt(e,t){var n=Bt;return function r(){null!==t.apply(null,arguments)&&n.$off(e,r)}}function Wt(e,t,n){Bt=e,it(t,n||{},Kt,Jt,qt,e),Bt=void 0}var Zt=null;function Gt(e){var t=Zt;return Zt=e,function(){Zt=t}}function Xt(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function Yt(e,t){if(t){if(e._directInactive=!1,Xt(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Yt(e.$children[n]);Qt(e,"activated")}}function Qt(e,t){le();var n=e.$options[t],r=t+" hook";if(n)for(var i=0,o=n.length;i<o;i++)Be(n[i],e,null,e,r);e._hasHookEvent&&e.$emit("hook:"+t),fe()}var en=[],tn=[],nn={},rn=!1,on=!1,an=0;var sn=0,cn=Date.now;if(V&&!q){var un=window.performance;un&&"function"==typeof un.now&&cn()>document.createEvent("Event").timeStamp&&(cn=function(){return un.now()})}function ln(){var e,t;for(sn=cn(),on=!0,en.sort(function(e,t){return e.id-t.id}),an=0;an<en.length;an++)(e=en[an]).before&&e.before(),t=e.id,nn[t]=null,e.run();var n=tn.slice(),r=en.slice();an=en.length=tn.length=0,nn={},rn=on=!1,function(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Yt(e[t],!0)}(n),function(e){var t=e.length;for(;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Qt(r,"updated")}}(r),ne&&F.devtools&&ne.emit("flush")}var fn=0,pn=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++fn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ie,this.newDepIds=new ie,this.expression="","function"==typeof t?this.getter=t:(this.getter=function(e){if(!H.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}(t),this.getter||(this.getter=S)),this.value=this.lazy?void 0:this.get()};pn.prototype.get=function(){var e;le(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;He(e,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&tt(e),fe(),this.cleanupDeps()}return e},pn.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},pn.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},pn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(e){var t=e.id;if(null==nn[t]){if(nn[t]=!0,on){for(var n=en.length-1;n>an&&en[n].id>e.id;)n--;en.splice(n+1,0,e)}else en.push(e);rn||(rn=!0,Qe(ln))}}(this)},pn.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||o(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'+this.expression+'"';Be(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},pn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},pn.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()},pn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||h(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var dn={enumerable:!0,configurable:!0,get:S,set:S};function vn(e,t,n){dn.get=function(){return this[t][n]},dn.set=function(e){this[t][n]=e},Object.defineProperty(e,n,dn)}function hn(e){e._watchers=[];var t=e.$options;t.props&&function(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[];e.$parent&&$e(!1);var o=function(o){i.push(o);var a=Ie(o,t,n,e);xe(r,o,a),o in e||vn(e,"_props",o)};for(var a in t)o(a);$e(!0)}(e,t.props),t.methods&&function(e,t){e.$options.props;for(var n in t)e[n]="function"!=typeof t[n]?S:x(t[n],e)}(e,t.methods),t.data?function(e){var t=e.$options.data;s(t=e._data="function"==typeof t?function(e,t){le();try{return e.call(t,t)}catch(e){return He(e,t,"data()"),{}}finally{fe()}}(t,e):t||{})||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);for(;i--;){var o=n[i];r&&y(r,o)||(a=void 0,36!==(a=(o+"").charCodeAt(0))&&95!==a&&vn(e,"_data",o))}var a;Ce(t,!0)}(e):Ce(e._data={},!0),t.computed&&function(e,t){var n=e._computedWatchers=Object.create(null),r=te();for(var i in t){var o=t[i],a="function"==typeof o?o:o.get;r||(n[i]=new pn(e,a||S,S,mn)),i in e||yn(e,i,o)}}(e,t.computed),t.watch&&t.watch!==Y&&function(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)bn(e,n,r[i]);else bn(e,n,r)}}(e,t.watch)}var mn={lazy:!0};function yn(e,t,n){var r=!te();"function"==typeof n?(dn.get=r?gn(t):_n(n),dn.set=S):(dn.get=n.get?r&&!1!==n.cache?gn(t):_n(n.get):S,dn.set=n.set||S),Object.defineProperty(e,t,dn)}function gn(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),ce.target&&t.depend(),t.value}}function _n(e){return function(){return e.call(this,this)}}function bn(e,t,n,r){return s(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}var $n=0;function wn(e){var t=e.options;if(e.super){var n=wn(e.super);if(n!==e.superOptions){e.superOptions=n;var r=function(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}(e);r&&A(e.extendOptions,r),(t=e.options=De(n,e.extendOptions)).name&&(t.components[t.name]=e)}}return t}function Cn(e){this._init(e)}function xn(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,a=function(e){this._init(e)};return(a.prototype=Object.create(n.prototype)).constructor=a,a.cid=t++,a.options=De(n.options,e),a.super=n,a.options.props&&function(e){var t=e.options.props;for(var n in t)vn(e.prototype,"_props",n)}(a),a.options.computed&&function(e){var t=e.options.computed;for(var n in t)yn(e.prototype,n,t[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,I.forEach(function(e){a[e]=n[e]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=A({},a.options),i[r]=a,a}}function kn(e){return e&&(e.Ctor.options.name||e.tag)}function An(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"==typeof e?e.split(",").indexOf(t)>-1:(n=e,"[object RegExp]"===a.call(n)&&e.test(t));var n}function On(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var a=n[o];if(a){var s=a.name;s&&!t(s)&&Sn(n,o,r,i)}}}function Sn(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,h(n,t)}!function(t){t.prototype._init=function(t){var n=this;n._uid=$n++,n._isVue=!0,t&&t._isComponent?function(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}(n,t):n.$options=De(wn(n.constructor),t||{},n),n._renderProxy=n,n._self=n,function(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}(n),function(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Wt(e,t)}(n),function(t){t._vnode=null,t._staticTrees=null;var n=t.$options,r=t.$vnode=n._parentVnode,i=r&&r.context;t.$slots=lt(n._renderChildren,i),t.$scopedSlots=e,t._c=function(e,n,r,i){return Ht(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return Ht(t,e,n,r,i,!0)};var o=r&&r.data;xe(t,"$attrs",o&&o.attrs||e,null,!0),xe(t,"$listeners",n._parentListeners||e,null,!0)}(n),Qt(n,"beforeCreate"),function(e){var t=ut(e.$options.inject,e);t&&($e(!1),Object.keys(t).forEach(function(n){xe(e,n,t[n])}),$e(!0))}(n),hn(n),function(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}(n),Qt(n,"created"),n.$options.el&&n.$mount(n.$options.el)}}(Cn),function(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=ke,e.prototype.$delete=Ae,e.prototype.$watch=function(e,t,n){if(s(t))return bn(this,e,t,n);(n=n||{}).user=!0;var r=new pn(this,e,t,n);if(n.immediate){var i='callback for immediate watcher "'+r.expression+'"';le(),Be(t,this,[r.value],this,i),fe()}return function(){r.teardown()}}}(Cn),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var i=0,o=e.length;i<o;i++)r.$on(e[i],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)n.$off(e[r],t);return n}var o,a=n._events[e];if(!a)return n;if(!t)return n._events[e]=null,n;for(var s=a.length;s--;)if((o=a[s])===t||o.fn===t){a.splice(s,1);break}return n},e.prototype.$emit=function(e){var t=this._events[e];if(t){t=t.length>1?k(t):t;for(var n=k(arguments,1),r='event handler for "'+e+'"',i=0,o=t.length;i<o;i++)Be(t[i],this,n,this,r)}return this}}(Cn),function(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=Gt(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Qt(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||h(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Qt(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}(Cn),function(e){Nt(e.prototype),e.prototype.$nextTick=function(e){return Qe(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,i=n._parentVnode;i&&(t.$scopedSlots=dt(i.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=i;try{Ut=t,e=r.call(t._renderProxy,t.$createElement)}catch(n){He(n,t,"render"),e=t._vnode}finally{Ut=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof pe||(e=ve()),e.parent=i,e}}(Cn);var Tn=[String,RegExp,Array],Nn={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Tn,exclude:Tn,max:[String,Number]},methods:{cacheVNode:function(){var e=this.cache,t=this.keys,n=this.vnodeToCache,r=this.keyToCache;if(n){var i=n.tag,o=n.componentInstance,a=n.componentOptions;e[r]={name:kn(a),tag:i,componentInstance:o},t.push(r),this.max&&t.length>parseInt(this.max)&&Sn(e,t[0],t,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Sn(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",function(t){On(e,function(e){return An(t,e)})}),this.$watch("exclude",function(t){On(e,function(e){return!An(t,e)})})},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=zt(e),n=t&&t.componentOptions;if(n){var r=kn(n),i=this.include,o=this.exclude;if(i&&(!r||!An(i,r))||o&&r&&An(o,r))return t;var a=this.cache,s=this.keys,c=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;a[c]?(t.componentInstance=a[c].componentInstance,h(s,c),s.push(c)):(this.vnodeToCache=t,this.keyToCache=c),t.data.keepAlive=!0}return t||e&&e[0]}}};!function(e){var t={get:function(){return F}};Object.defineProperty(e,"config",t),e.util={warn:ae,extend:A,mergeOptions:De,defineReactive:xe},e.set=ke,e.delete=Ae,e.nextTick=Qe,e.observable=function(e){return Ce(e),e},e.options=Object.create(null),I.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,A(e.options.components,Nn),function(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=k(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this}}(e),function(e){e.mixin=function(e){return this.options=De(this.options,e),this}}(e),xn(e),function(e){I.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&s(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}(e)}(Cn),Object.defineProperty(Cn.prototype,"$isServer",{get:te}),Object.defineProperty(Cn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Cn,"FunctionalRenderContext",{value:Et}),Cn.version="2.6.14";var En=p("style,class"),jn=p("input,textarea,option,select,progress"),Dn=function(e,t,n){return"value"===n&&jn(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Ln=p("contenteditable,draggable,spellcheck"),In=p("events,caret,typing,plaintext-only"),Mn=function(e,t){return Bn(t)||"false"===t?"false":"contenteditable"===e&&In(t)?t:"true"},Fn=p("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Pn="http://www.w3.org/1999/xlink",Rn=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Hn=function(e){return Rn(e)?e.slice(6,e.length):""},Bn=function(e){return null==e||!1===e};function Un(e){for(var t=e.data,r=e,i=e;n(i.componentInstance);)(i=i.componentInstance._vnode)&&i.data&&(t=Vn(i.data,t));for(;n(r=r.parent);)r&&r.data&&(t=Vn(t,r.data));return function(e,t){if(n(e)||n(t))return zn(e,Kn(t));return""}(t.staticClass,t.class)}function Vn(e,t){return{staticClass:zn(e.staticClass,t.staticClass),class:n(e.class)?[e.class,t.class]:t.class}}function zn(e,t){return e?t?e+" "+t:e:t||""}function Kn(e){return Array.isArray(e)?function(e){for(var t,r="",i=0,o=e.length;i<o;i++)n(t=Kn(e[i]))&&""!==t&&(r&&(r+=" "),r+=t);return r}(e):o(e)?function(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}(e):"string"==typeof e?e:""}var Jn={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},qn=p("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Wn=p("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Zn=function(e){return qn(e)||Wn(e)};function Gn(e){return Wn(e)?"svg":"math"===e?"math":void 0}var Xn=Object.create(null);var Yn=p("text,number,password,search,email,tel,url");function Qn(e){if("string"==typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}var er=Object.freeze({createElement:function(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)},createElementNS:function(e,t){return document.createElementNS(Jn[e],t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},setStyleScope:function(e,t){e.setAttribute(t,"")}}),tr={create:function(e,t){nr(t)},update:function(e,t){e.data.ref!==t.data.ref&&(nr(e,!0),nr(t))},destroy:function(e){nr(e,!0)}};function nr(e,t){var r=e.data.ref;if(n(r)){var i=e.context,o=e.componentInstance||e.elm,a=i.$refs;t?Array.isArray(a[r])?h(a[r],o):a[r]===o&&(a[r]=void 0):e.data.refInFor?Array.isArray(a[r])?a[r].indexOf(o)<0&&a[r].push(o):a[r]=[o]:a[r]=o}}var rr=new pe("",{},[]),ir=["create","activate","update","remove","destroy"];function or(e,i){return e.key===i.key&&e.asyncFactory===i.asyncFactory&&(e.tag===i.tag&&e.isComment===i.isComment&&n(e.data)===n(i.data)&&function(e,t){if("input"!==e.tag)return!0;var r,i=n(r=e.data)&&n(r=r.attrs)&&r.type,o=n(r=t.data)&&n(r=r.attrs)&&r.type;return i===o||Yn(i)&&Yn(o)}(e,i)||r(e.isAsyncPlaceholder)&&t(i.asyncFactory.error))}function ar(e,t,r){var i,o,a={};for(i=t;i<=r;++i)n(o=e[i].key)&&(a[o]=i);return a}var sr={create:cr,update:cr,destroy:function(e){cr(e,rr)}};function cr(e,t){(e.data.directives||t.data.directives)&&function(e,t){var n,r,i,o=e===rr,a=t===rr,s=lr(e.data.directives,e.context),c=lr(t.data.directives,t.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,pr(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(pr(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)pr(u[n],"inserted",t,e)};o?ot(t,"insert",f):f()}l.length&&ot(t,"postpatch",function(){for(var n=0;n<l.length;n++)pr(l[n],"componentUpdated",t,e)});if(!o)for(n in s)c[n]||pr(s[n],"unbind",e,e,a)}(e,t)}var ur=Object.create(null);function lr(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++)(r=e[n]).modifiers||(r.modifiers=ur),i[fr(r)]=r,r.def=Le(t.$options,"directives",r.name);return i}function fr(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function pr(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(r){He(r,n.context,"directive "+e.name+" "+t+" hook")}}var dr=[tr,sr];function vr(e,r){var i=r.componentOptions;if(!(n(i)&&!1===i.Ctor.options.inheritAttrs||t(e.data.attrs)&&t(r.data.attrs))){var o,a,s=r.elm,c=e.data.attrs||{},u=r.data.attrs||{};for(o in n(u.__ob__)&&(u=r.data.attrs=A({},u)),u)a=u[o],c[o]!==a&&hr(s,o,a,r.data.pre);for(o in(q||Z)&&u.value!==c.value&&hr(s,"value",u.value),c)t(u[o])&&(Rn(o)?s.removeAttributeNS(Pn,Hn(o)):Ln(o)||s.removeAttribute(o))}}function hr(e,t,n,r){r||e.tagName.indexOf("-")>-1?mr(e,t,n):Fn(t)?Bn(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):Ln(t)?e.setAttribute(t,Mn(t,n)):Rn(t)?Bn(n)?e.removeAttributeNS(Pn,Hn(t)):e.setAttributeNS(Pn,t,n):mr(e,t,n)}function mr(e,t,n){if(Bn(n))e.removeAttribute(t);else{if(q&&!W&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var yr={create:vr,update:vr};function gr(e,r){var i=r.elm,o=r.data,a=e.data;if(!(t(o.staticClass)&&t(o.class)&&(t(a)||t(a.staticClass)&&t(a.class)))){var s=Un(r),c=i._transitionClasses;n(c)&&(s=zn(s,Kn(c))),s!==i._prevClass&&(i.setAttribute("class",s),i._prevClass=s)}}var _r,br,$r,wr,Cr,xr,kr={create:gr,update:gr},Ar=/[\w).+\-_$\]]/;function Or(e){var t,n,r,i,o,a=!1,s=!1,c=!1,u=!1,l=0,f=0,p=0,d=0;for(r=0;r<e.length;r++)if(n=t,t=e.charCodeAt(r),a)39===t&&92!==n&&(a=!1);else if(s)34===t&&92!==n&&(s=!1);else if(c)96===t&&92!==n&&(c=!1);else if(u)47===t&&92!==n&&(u=!1);else if(124!==t||124===e.charCodeAt(r+1)||124===e.charCodeAt(r-1)||l||f||p){switch(t){case 34:s=!0;break;case 39:a=!0;break;case 96:c=!0;break;case 40:p++;break;case 41:p--;break;case 91:f++;break;case 93:f--;break;case 123:l++;break;case 125:l--}if(47===t){for(var v=r-1,h=void 0;v>=0&&" "===(h=e.charAt(v));v--);h&&Ar.test(h)||(u=!0)}}else void 0===i?(d=r+1,i=e.slice(0,r).trim()):m();function m(){(o||(o=[])).push(e.slice(d,r).trim()),d=r+1}if(void 0===i?i=e.slice(0,r).trim():0!==d&&m(),o)for(r=0;r<o.length;r++)i=Sr(i,o[r]);return i}function Sr(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";var r=t.slice(0,n),i=t.slice(n+1);return'_f("'+r+'")('+e+(")"!==i?","+i:i)}function Tr(e,t){console.error("[Vue compiler]: "+e)}function Nr(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function Er(e,t,n,r,i){(e.props||(e.props=[])).push(Hr({name:t,value:n,dynamic:i},r)),e.plain=!1}function jr(e,t,n,r,i){(i?e.dynamicAttrs||(e.dynamicAttrs=[]):e.attrs||(e.attrs=[])).push(Hr({name:t,value:n,dynamic:i},r)),e.plain=!1}function Dr(e,t,n,r){e.attrsMap[t]=n,e.attrsList.push(Hr({name:t,value:n},r))}function Lr(e,t,n,r,i,o,a,s){(e.directives||(e.directives=[])).push(Hr({name:t,rawName:n,value:r,arg:i,isDynamicArg:o,modifiers:a},s)),e.plain=!1}function Ir(e,t,n){return n?"_p("+t+',"'+e+'")':e+t}function Mr(t,n,r,i,o,a,s,c){var u;(i=i||e).right?c?n="("+n+")==='click'?'contextmenu':("+n+")":"click"===n&&(n="contextmenu",delete i.right):i.middle&&(c?n="("+n+")==='click'?'mouseup':("+n+")":"click"===n&&(n="mouseup")),i.capture&&(delete i.capture,n=Ir("!",n,c)),i.once&&(delete i.once,n=Ir("~",n,c)),i.passive&&(delete i.passive,n=Ir("&",n,c)),i.native?(delete i.native,u=t.nativeEvents||(t.nativeEvents={})):u=t.events||(t.events={});var l=Hr({value:r.trim(),dynamic:c},s);i!==e&&(l.modifiers=i);var f=u[n];Array.isArray(f)?o?f.unshift(l):f.push(l):u[n]=f?o?[l,f]:[f,l]:l,t.plain=!1}function Fr(e,t,n){var r=Pr(e,":"+t)||Pr(e,"v-bind:"+t);if(null!=r)return Or(r);if(!1!==n){var i=Pr(e,t);if(null!=i)return JSON.stringify(i)}}function Pr(e,t,n){var r;if(null!=(r=e.attrsMap[t]))for(var i=e.attrsList,o=0,a=i.length;o<a;o++)if(i[o].name===t){i.splice(o,1);break}return n&&delete e.attrsMap[t],r}function Rr(e,t){for(var n=e.attrsList,r=0,i=n.length;r<i;r++){var o=n[r];if(t.test(o.name))return n.splice(r,1),o}}function Hr(e,t){return t&&(null!=t.start&&(e.start=t.start),null!=t.end&&(e.end=t.end)),e}function Br(e,t,n){var r=n||{},i=r.number,o="$$v";r.trim&&(o="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(o="_n("+o+")");var a=Ur(t,o);e.model={value:"("+t+")",expression:JSON.stringify(t),callback:"function ($$v) {"+a+"}"}}function Ur(e,t){var n=function(e){if(e=e.trim(),_r=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<_r-1)return(wr=e.lastIndexOf("."))>-1?{exp:e.slice(0,wr),key:'"'+e.slice(wr+1)+'"'}:{exp:e,key:null};br=e,wr=Cr=xr=0;for(;!zr();)Kr($r=Vr())?qr($r):91===$r&&Jr($r);return{exp:e.slice(0,Cr),key:e.slice(Cr+1,xr)}}(e);return null===n.key?e+"="+t:"$set("+n.exp+", "+n.key+", "+t+")"}function Vr(){return br.charCodeAt(++wr)}function zr(){return wr>=_r}function Kr(e){return 34===e||39===e}function Jr(e){var t=1;for(Cr=wr;!zr();)if(Kr(e=Vr()))qr(e);else if(91===e&&t++,93===e&&t--,0===t){xr=wr;break}}function qr(e){for(var t=e;!zr()&&(e=Vr())!==t;);}var Wr,Zr="__r",Gr="__c";function Xr(e,t,n){var r=Wr;return function i(){null!==t.apply(null,arguments)&&ei(e,i,n,r)}}var Yr=Ke&&!(X&&Number(X[1])<=53);function Qr(e,t,n,r){if(Yr){var i=sn,o=t;t=o._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return o.apply(this,arguments)}}Wr.addEventListener(e,t,Q?{capture:n,passive:r}:n)}function ei(e,t,n,r){(r||Wr).removeEventListener(e,t._wrapper||t,n)}function ti(e,r){if(!t(e.data.on)||!t(r.data.on)){var i=r.data.on||{},o=e.data.on||{};Wr=r.elm,function(e){if(n(e[Zr])){var t=q?"change":"input";e[t]=[].concat(e[Zr],e[t]||[]),delete e[Zr]}n(e[Gr])&&(e.change=[].concat(e[Gr],e.change||[]),delete e[Gr])}(i),it(i,o,Qr,ei,Xr,r.context),Wr=void 0}}var ni,ri={create:ti,update:ti};function ii(e,r){if(!t(e.data.domProps)||!t(r.data.domProps)){var i,o,a=r.elm,s=e.data.domProps||{},c=r.data.domProps||{};for(i in n(c.__ob__)&&(c=r.data.domProps=A({},c)),s)i in c||(a[i]="");for(i in c){if(o=c[i],"textContent"===i||"innerHTML"===i){if(r.children&&(r.children.length=0),o===s[i])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===i&&"PROGRESS"!==a.tagName){a._value=o;var u=t(o)?"":String(o);oi(a,u)&&(a.value=u)}else if("innerHTML"===i&&Wn(a.tagName)&&t(a.innerHTML)){(ni=ni||document.createElement("div")).innerHTML="<svg>"+o+"</svg>";for(var l=ni.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;l.firstChild;)a.appendChild(l.firstChild)}else if(o!==s[i])try{a[i]=o}catch(e){}}}}function oi(e,t){return!e.composing&&("OPTION"===e.tagName||function(e,t){var n=!0;try{n=document.activeElement!==e}catch(e){}return n&&e.value!==t}(e,t)||function(e,t){var r=e.value,i=e._vModifiers;if(n(i)){if(i.number)return f(r)!==f(t);if(i.trim)return r.trim()!==t.trim()}return r!==t}(e,t))}var ai={create:ii,update:ii},si=g(function(e){var t={},n=/:(.+)/;return e.split(/;(?![^(]*\))/g).forEach(function(e){if(e){var r=e.split(n);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t});function ci(e){var t=ui(e.style);return e.staticStyle?A(e.staticStyle,t):t}function ui(e){return Array.isArray(e)?O(e):"string"==typeof e?si(e):e}var li,fi=/^--/,pi=/\s*!important$/,di=function(e,t,n){if(fi.test(t))e.style.setProperty(t,n);else if(pi.test(n))e.style.setProperty(C(t),n.replace(pi,""),"important");else{var r=hi(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},vi=["Webkit","Moz","ms"],hi=g(function(e){if(li=li||document.createElement("div").style,"filter"!==(e=b(e))&&e in li)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<vi.length;n++){var r=vi[n]+t;if(r in li)return r}});function mi(e,r){var i=r.data,o=e.data;if(!(t(i.staticStyle)&&t(i.style)&&t(o.staticStyle)&&t(o.style))){var a,s,c=r.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},f=u||l,p=ui(r.data.style)||{};r.data.normalizedStyle=n(p.__ob__)?A({},p):p;var d=function(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=ci(i.data))&&A(r,n);(n=ci(e.data))&&A(r,n);for(var o=e;o=o.parent;)o.data&&(n=ci(o.data))&&A(r,n);return r}(r,!0);for(s in f)t(d[s])&&di(c,s,"");for(s in d)(a=d[s])!==f[s]&&di(c,s,null==a?"":a)}}var yi={create:mi,update:mi},gi=/\s+/;function _i(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(gi).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function bi(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(gi).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?e.setAttribute("class",n):e.removeAttribute("class")}}function $i(e){if(e){if("object"==typeof e){var t={};return!1!==e.css&&A(t,wi(e.name||"v")),A(t,e),t}return"string"==typeof e?wi(e):void 0}}var wi=g(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),Ci=V&&!W,xi="transition",ki="animation",Ai="transition",Oi="transitionend",Si="animation",Ti="animationend";Ci&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Ai="WebkitTransition",Oi="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Si="WebkitAnimation",Ti="webkitAnimationEnd"));var Ni=V?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function Ei(e){Ni(function(){Ni(e)})}function ji(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),_i(e,t))}function Di(e,t){e._transitionClasses&&h(e._transitionClasses,t),bi(e,t)}function Li(e,t,n){var r=Mi(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===xi?Oi:Ti,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),e.addEventListener(s,l)}var Ii=/\b(transform|all)(,|$)/;function Mi(e,t){var n,r=window.getComputedStyle(e),i=(r[Ai+"Delay"]||"").split(", "),o=(r[Ai+"Duration"]||"").split(", "),a=Fi(i,o),s=(r[Si+"Delay"]||"").split(", "),c=(r[Si+"Duration"]||"").split(", "),u=Fi(s,c),l=0,f=0;return t===xi?a>0&&(n=xi,l=a,f=o.length):t===ki?u>0&&(n=ki,l=u,f=c.length):f=(n=(l=Math.max(a,u))>0?a>u?xi:ki:null)?n===xi?o.length:c.length:0,{type:n,timeout:l,propCount:f,hasTransform:n===xi&&Ii.test(r[Ai+"Property"])}}function Fi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Pi(t)+Pi(e[n])}))}function Pi(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Ri(e,r){var i=e.elm;n(i._leaveCb)&&(i._leaveCb.cancelled=!0,i._leaveCb());var a=$i(e.data.transition);if(!t(a)&&!n(i._enterCb)&&1===i.nodeType){for(var s=a.css,c=a.type,u=a.enterClass,l=a.enterToClass,p=a.enterActiveClass,d=a.appearClass,v=a.appearToClass,h=a.appearActiveClass,m=a.beforeEnter,y=a.enter,g=a.afterEnter,_=a.enterCancelled,b=a.beforeAppear,$=a.appear,w=a.afterAppear,C=a.appearCancelled,x=a.duration,k=Zt,A=Zt.$vnode;A&&A.parent;)k=A.context,A=A.parent;var O=!k._isMounted||!e.isRootInsert;if(!O||$||""===$){var S=O&&d?d:u,T=O&&h?h:p,N=O&&v?v:l,E=O&&b||m,j=O&&"function"==typeof $?$:y,L=O&&w||g,I=O&&C||_,M=f(o(x)?x.enter:x),F=!1!==s&&!W,P=Ui(j),R=i._enterCb=D(function(){F&&(Di(i,N),Di(i,T)),R.cancelled?(F&&Di(i,S),I&&I(i)):L&&L(i),i._enterCb=null});e.data.show||ot(e,"insert",function(){var t=i.parentNode,n=t&&t._pending&&t._pending[e.key];n&&n.tag===e.tag&&n.elm._leaveCb&&n.elm._leaveCb(),j&&j(i,R)}),E&&E(i),F&&(ji(i,S),ji(i,T),Ei(function(){Di(i,S),R.cancelled||(ji(i,N),P||(Bi(M)?setTimeout(R,M):Li(i,c,R)))})),e.data.show&&(r&&r(),j&&j(i,R)),F||P||R()}}}function Hi(e,r){var i=e.elm;n(i._enterCb)&&(i._enterCb.cancelled=!0,i._enterCb());var a=$i(e.data.transition);if(t(a)||1!==i.nodeType)return r();if(!n(i._leaveCb)){var s=a.css,c=a.type,u=a.leaveClass,l=a.leaveToClass,p=a.leaveActiveClass,d=a.beforeLeave,v=a.leave,h=a.afterLeave,m=a.leaveCancelled,y=a.delayLeave,g=a.duration,_=!1!==s&&!W,b=Ui(v),$=f(o(g)?g.leave:g),w=i._leaveCb=D(function(){i.parentNode&&i.parentNode._pending&&(i.parentNode._pending[e.key]=null),_&&(Di(i,l),Di(i,p)),w.cancelled?(_&&Di(i,u),m&&m(i)):(r(),h&&h(i)),i._leaveCb=null});y?y(C):C()}function C(){w.cancelled||(!e.data.show&&i.parentNode&&((i.parentNode._pending||(i.parentNode._pending={}))[e.key]=e),d&&d(i),_&&(ji(i,u),ji(i,p),Ei(function(){Di(i,u),w.cancelled||(ji(i,l),b||(Bi($)?setTimeout(w,$):Li(i,c,w)))})),v&&v(i,w),_||b||w())}}function Bi(e){return"number"==typeof e&&!isNaN(e)}function Ui(e){if(t(e))return!1;var r=e.fns;return n(r)?Ui(Array.isArray(r)?r[0]:r):(e._length||e.length)>1}function Vi(e,t){!0!==t.data.show&&Ri(t)}var zi=function(e){var o,a,s={},c=e.modules,u=e.nodeOps;for(o=0;o<ir.length;++o)for(s[ir[o]]=[],a=0;a<c.length;++a)n(c[a][ir[o]])&&s[ir[o]].push(c[a][ir[o]]);function l(e){var t=u.parentNode(e);n(t)&&u.removeChild(t,e)}function f(e,t,i,o,a,c,l){if(n(e.elm)&&n(c)&&(e=c[l]=me(e)),e.isRootInsert=!a,!function(e,t,i,o){var a=e.data;if(n(a)){var c=n(e.componentInstance)&&a.keepAlive;if(n(a=a.hook)&&n(a=a.init)&&a(e,!1),n(e.componentInstance))return d(e,t),v(i,e.elm,o),r(c)&&function(e,t,r,i){for(var o,a=e;a.componentInstance;)if(a=a.componentInstance._vnode,n(o=a.data)&&n(o=o.transition)){for(o=0;o<s.activate.length;++o)s.activate[o](rr,a);t.push(a);break}v(r,e.elm,i)}(e,t,i,o),!0}}(e,t,i,o)){var f=e.data,p=e.children,m=e.tag;n(m)?(e.elm=e.ns?u.createElementNS(e.ns,m):u.createElement(m,e),g(e),h(e,p,t),n(f)&&y(e,t),v(i,e.elm,o)):r(e.isComment)?(e.elm=u.createComment(e.text),v(i,e.elm,o)):(e.elm=u.createTextNode(e.text),v(i,e.elm,o))}}function d(e,t){n(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,m(e)?(y(e,t),g(e)):(nr(e),t.push(e))}function v(e,t,r){n(e)&&(n(r)?u.parentNode(r)===e&&u.insertBefore(e,t,r):u.appendChild(e,t))}function h(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)f(t[r],n,e.elm,null,!0,t,r);else i(e.text)&&u.appendChild(e.elm,u.createTextNode(String(e.text)))}function m(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return n(e.tag)}function y(e,t){for(var r=0;r<s.create.length;++r)s.create[r](rr,e);n(o=e.data.hook)&&(n(o.create)&&o.create(rr,e),n(o.insert)&&t.push(e))}function g(e){var t;if(n(t=e.fnScopeId))u.setStyleScope(e.elm,t);else for(var r=e;r;)n(t=r.context)&&n(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t),r=r.parent;n(t=Zt)&&t!==e.context&&t!==e.fnContext&&n(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t)}function _(e,t,n,r,i,o){for(;r<=i;++r)f(n[r],o,e,t,!1,n,r)}function b(e){var t,r,i=e.data;if(n(i))for(n(t=i.hook)&&n(t=t.destroy)&&t(e),t=0;t<s.destroy.length;++t)s.destroy[t](e);if(n(t=e.children))for(r=0;r<e.children.length;++r)b(e.children[r])}function $(e,t,r){for(;t<=r;++t){var i=e[t];n(i)&&(n(i.tag)?(w(i),b(i)):l(i.elm))}}function w(e,t){if(n(t)||n(e.data)){var r,i=s.remove.length+1;for(n(t)?t.listeners+=i:t=function(e,t){function n(){0==--n.listeners&&l(e)}return n.listeners=t,n}(e.elm,i),n(r=e.componentInstance)&&n(r=r._vnode)&&n(r.data)&&w(r,t),r=0;r<s.remove.length;++r)s.remove[r](e,t);n(r=e.data.hook)&&n(r=r.remove)?r(e,t):t()}else l(e.elm)}function C(e,t,r,i){for(var o=r;o<i;o++){var a=t[o];if(n(a)&&or(e,a))return o}}function x(e,i,o,a,c,l){if(e!==i){n(i.elm)&&n(a)&&(i=a[c]=me(i));var p=i.elm=e.elm;if(r(e.isAsyncPlaceholder))n(i.asyncFactory.resolved)?O(e.elm,i,o):i.isAsyncPlaceholder=!0;else if(r(i.isStatic)&&r(e.isStatic)&&i.key===e.key&&(r(i.isCloned)||r(i.isOnce)))i.componentInstance=e.componentInstance;else{var d,v=i.data;n(v)&&n(d=v.hook)&&n(d=d.prepatch)&&d(e,i);var h=e.children,y=i.children;if(n(v)&&m(i)){for(d=0;d<s.update.length;++d)s.update[d](e,i);n(d=v.hook)&&n(d=d.update)&&d(e,i)}t(i.text)?n(h)&&n(y)?h!==y&&function(e,r,i,o,a){for(var s,c,l,p=0,d=0,v=r.length-1,h=r[0],m=r[v],y=i.length-1,g=i[0],b=i[y],w=!a;p<=v&&d<=y;)t(h)?h=r[++p]:t(m)?m=r[--v]:or(h,g)?(x(h,g,o,i,d),h=r[++p],g=i[++d]):or(m,b)?(x(m,b,o,i,y),m=r[--v],b=i[--y]):or(h,b)?(x(h,b,o,i,y),w&&u.insertBefore(e,h.elm,u.nextSibling(m.elm)),h=r[++p],b=i[--y]):or(m,g)?(x(m,g,o,i,d),w&&u.insertBefore(e,m.elm,h.elm),m=r[--v],g=i[++d]):(t(s)&&(s=ar(r,p,v)),t(c=n(g.key)?s[g.key]:C(g,r,p,v))?f(g,o,e,h.elm,!1,i,d):or(l=r[c],g)?(x(l,g,o,i,d),r[c]=void 0,w&&u.insertBefore(e,l.elm,h.elm)):f(g,o,e,h.elm,!1,i,d),g=i[++d]);p>v?_(e,t(i[y+1])?null:i[y+1].elm,i,d,y,o):d>y&&$(r,p,v)}(p,h,y,o,l):n(y)?(n(e.text)&&u.setTextContent(p,""),_(p,null,y,0,y.length-1,o)):n(h)?$(h,0,h.length-1):n(e.text)&&u.setTextContent(p,""):e.text!==i.text&&u.setTextContent(p,i.text),n(v)&&n(d=v.hook)&&n(d=d.postpatch)&&d(e,i)}}}function k(e,t,i){if(r(i)&&n(e.parent))e.parent.data.pendingInsert=t;else for(var o=0;o<t.length;++o)t[o].data.hook.insert(t[o])}var A=p("attrs,class,staticClass,staticStyle,key");function O(e,t,i,o){var a,s=t.tag,c=t.data,u=t.children;if(o=o||c&&c.pre,t.elm=e,r(t.isComment)&&n(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(n(c)&&(n(a=c.hook)&&n(a=a.init)&&a(t,!0),n(a=t.componentInstance)))return d(t,i),!0;if(n(s)){if(n(u))if(e.hasChildNodes())if(n(a=c)&&n(a=a.domProps)&&n(a=a.innerHTML)){if(a!==e.innerHTML)return!1}else{for(var l=!0,f=e.firstChild,p=0;p<u.length;p++){if(!f||!O(f,u[p],i,o)){l=!1;break}f=f.nextSibling}if(!l||f)return!1}else h(t,u,i);if(n(c)){var v=!1;for(var m in c)if(!A(m)){v=!0,y(t,i);break}!v&&c.class&&tt(c.class)}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,i,o,a){if(!t(i)){var c,l=!1,p=[];if(t(e))l=!0,f(i,p);else{var d=n(e.nodeType);if(!d&&or(e,i))x(e,i,p,null,null,a);else{if(d){if(1===e.nodeType&&e.hasAttribute(L)&&(e.removeAttribute(L),o=!0),r(o)&&O(e,i,p))return k(i,p,!0),e;c=e,e=new pe(u.tagName(c).toLowerCase(),{},[],void 0,c)}var v=e.elm,h=u.parentNode(v);if(f(i,p,v._leaveCb?null:h,u.nextSibling(v)),n(i.parent))for(var y=i.parent,g=m(i);y;){for(var _=0;_<s.destroy.length;++_)s.destroy[_](y);if(y.elm=i.elm,g){for(var w=0;w<s.create.length;++w)s.create[w](rr,y);var C=y.data.hook.insert;if(C.merged)for(var A=1;A<C.fns.length;A++)C.fns[A]()}else nr(y);y=y.parent}n(h)?$([e],0,0):n(e.tag)&&b(e)}}return k(i,p,l),i.elm}n(e)&&b(e)}}({nodeOps:er,modules:[yr,kr,ri,ai,yi,V?{create:Vi,activate:Vi,remove:function(e,t){!0!==e.data.show?Hi(e,t):t()}}:{}].concat(dr)});W&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&Yi(e,"input")});var Ki={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?ot(n,"postpatch",function(){Ki.componentUpdated(e,t,n)}):Ji(e,t,n.context),e._vOptions=[].map.call(e.options,Zi)):("textarea"===n.tag||Yn(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",Gi),e.addEventListener("compositionend",Xi),e.addEventListener("change",Xi),W&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Ji(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,Zi);if(i.some(function(e,t){return!E(e,r[t])}))(e.multiple?t.value.some(function(e){return Wi(e,i)}):t.value!==t.oldValue&&Wi(t.value,i))&&Yi(e,"change")}}};function Ji(e,t,n){qi(e,t,n),(q||Z)&&setTimeout(function(){qi(e,t,n)},0)}function qi(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=j(r,Zi(a))>-1,a.selected!==o&&(a.selected=o);else if(E(Zi(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function Wi(e,t){return t.every(function(t){return!E(t,e)})}function Zi(e){return"_value"in e?e._value:e.value}function Gi(e){e.target.composing=!0}function Xi(e){e.target.composing&&(e.target.composing=!1,Yi(e.target,"input"))}function Yi(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Qi(e){return!e.componentInstance||e.data&&e.data.transition?e:Qi(e.componentInstance._vnode)}var eo={model:Ki,show:{bind:function(e,t,n){var r=t.value,i=(n=Qi(n)).data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,Ri(n,function(){e.style.display=o})):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value;!r!=!t.oldValue&&((n=Qi(n)).data&&n.data.transition?(n.data.show=!0,r?Ri(n,function(){e.style.display=e.__vOriginalDisplay}):Hi(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}}},to={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function no(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?no(zt(t.children)):e}function ro(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[b(o)]=i[o];return t}function io(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}var oo=function(e){return e.tag||pt(e)},ao=function(e){return"show"===e.name},so={name:"transition",props:to,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(oo)).length){var r=this.mode,o=n[0];if(function(e){for(;e=e.parent;)if(e.data.transition)return!0}(this.$vnode))return o;var a=no(o);if(!a)return o;if(this._leaving)return io(e,o);var s="__transition-"+this._uid+"-";a.key=null==a.key?a.isComment?s+"comment":s+a.tag:i(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=ro(this),u=this._vnode,l=no(u);if(a.data.directives&&a.data.directives.some(ao)&&(a.data.show=!0),l&&l.data&&!function(e,t){return t.key===e.key&&t.tag===e.tag}(a,l)&&!pt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var f=l.data.transition=A({},c);if("out-in"===r)return this._leaving=!0,ot(f,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),io(e,o);if("in-out"===r){if(pt(a))return u;var p,d=function(){p()};ot(c,"afterEnter",d),ot(c,"enterCancelled",d),ot(f,"delayLeave",function(e){p=e})}}return o}}},co=A({tag:String,moveClass:String},to);function uo(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function lo(e){e.data.newPos=e.elm.getBoundingClientRect()}function fo(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}delete co.mode;var po={Transition:so,TransitionGroup:{props:co,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=Gt(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=ro(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?u.push(p):l.push(p)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(uo),e.forEach(lo),e.forEach(fo),this._reflow=document.body.offsetHeight,e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;ji(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Oi,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Oi,e),n._moveCb=null,Di(n,t))})}}))},methods:{hasMove:function(e,t){if(!Ci)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){bi(n,e)}),_i(n,t),n.style.display="none",this.$el.appendChild(n);var r=Mi(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};Cn.config.mustUseProp=Dn,Cn.config.isReservedTag=Zn,Cn.config.isReservedAttr=En,Cn.config.getTagNamespace=Gn,Cn.config.isUnknownElement=function(e){if(!V)return!0;if(Zn(e))return!1;if(e=e.toLowerCase(),null!=Xn[e])return Xn[e];var t=document.createElement(e);return e.indexOf("-")>-1?Xn[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Xn[e]=/HTMLUnknownElement/.test(t.toString())},A(Cn.options.directives,eo),A(Cn.options.components,po),Cn.prototype.__patch__=V?zi:S,Cn.prototype.$mount=function(e,t){return function(e,t,n){var r;return e.$el=t,e.$options.render||(e.$options.render=ve),Qt(e,"beforeMount"),r=function(){e._update(e._render(),n)},new pn(e,r,S,{before:function(){e._isMounted&&!e._isDestroyed&&Qt(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,Qt(e,"mounted")),e}(this,e=e&&V?Qn(e):void 0,t)},V&&setTimeout(function(){F.devtools&&ne&&ne.emit("init",Cn)},0);var vo=/\{\{((?:.|\r?\n)+?)\}\}/g,ho=/[-.*+?^${}()|[\]\/\\]/g,mo=g(function(e){var t=e[0].replace(ho,"\\$&"),n=e[1].replace(ho,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")});var yo={staticKeys:["staticClass"],transformNode:function(e,t){t.warn;var n=Pr(e,"class");n&&(e.staticClass=JSON.stringify(n));var r=Fr(e,"class",!1);r&&(e.classBinding=r)},genData:function(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}};var go,_o={staticKeys:["staticStyle"],transformNode:function(e,t){t.warn;var n=Pr(e,"style");n&&(e.staticStyle=JSON.stringify(si(n)));var r=Fr(e,"style",!1);r&&(e.styleBinding=r)},genData:function(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}},bo=function(e){return(go=go||document.createElement("div")).innerHTML=e,go.textContent},$o=p("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),wo=p("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),Co=p("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),xo=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,ko=/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Ao="[a-zA-Z_][\\-\\.0-9_a-zA-Z"+P.source+"]*",Oo="((?:"+Ao+"\\:)?"+Ao+")",So=new RegExp("^<"+Oo),To=/^\s*(\/?)>/,No=new RegExp("^<\\/"+Oo+"[^>]*>"),Eo=/^<!DOCTYPE [^>]+>/i,jo=/^<!\--/,Do=/^<!\[/,Lo=p("script,style,textarea",!0),Io={},Mo={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t","&#39;":"'"},Fo=/&(?:lt|gt|quot|amp|#39);/g,Po=/&(?:lt|gt|quot|amp|#39|#10|#9);/g,Ro=p("pre,textarea",!0),Ho=function(e,t){return e&&Ro(e)&&"\n"===t[0]};function Bo(e,t){var n=t?Po:Fo;return e.replace(n,function(e){return Mo[e]})}var Uo,Vo,zo,Ko,Jo,qo,Wo,Zo,Go=/^@|^v-on:/,Xo=/^v-|^@|^:|^#/,Yo=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Qo=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,ea=/^\(|\)$/g,ta=/^\[.*\]$/,na=/:(.*)$/,ra=/^:|^\.|^v-bind:/,ia=/\.[^.\]]+(?=[^\]]*$)/g,oa=/^v-slot(:|$)|^#/,aa=/[\r\n]/,sa=/[ \f\t\r\n]+/g,ca=g(bo),ua="_empty_";function la(e,t,n){return{type:1,tag:e,attrsList:t,attrsMap:ya(t),rawAttrsMap:{},parent:n,children:[]}}function fa(e,t){Uo=t.warn||Tr,qo=t.isPreTag||T,Wo=t.mustUseProp||T,Zo=t.getTagNamespace||T;t.isReservedTag;zo=Nr(t.modules,"transformNode"),Ko=Nr(t.modules,"preTransformNode"),Jo=Nr(t.modules,"postTransformNode"),Vo=t.delimiters;var n,r,i=[],o=!1!==t.preserveWhitespace,a=t.whitespace,s=!1,c=!1;function u(e){if(l(e),s||e.processed||(e=pa(e,t)),i.length||e===n||n.if&&(e.elseif||e.else)&&va(n,{exp:e.elseif,block:e}),r&&!e.forbidden)if(e.elseif||e.else)a=e,(u=function(e){var t=e.length;for(;t--;){if(1===e[t].type)return e[t];e.pop()}}(r.children))&&u.if&&va(u,{exp:a.elseif,block:a});else{if(e.slotScope){var o=e.slotTarget||'"default"';(r.scopedSlots||(r.scopedSlots={}))[o]=e}r.children.push(e),e.parent=r}var a,u;e.children=e.children.filter(function(e){return!e.slotScope}),l(e),e.pre&&(s=!1),qo(e.tag)&&(c=!1);for(var f=0;f<Jo.length;f++)Jo[f](e,t)}function l(e){if(!c)for(var t;(t=e.children[e.children.length-1])&&3===t.type&&" "===t.text;)e.children.pop()}return function(e,t){for(var n,r,i=[],o=t.expectHTML,a=t.isUnaryTag||T,s=t.canBeLeftOpenTag||T,c=0;e;){if(n=e,r&&Lo(r)){var u=0,l=r.toLowerCase(),f=Io[l]||(Io[l]=new RegExp("([\\s\\S]*?)(</"+l+"[^>]*>)","i")),p=e.replace(f,function(e,n,r){return u=r.length,Lo(l)||"noscript"===l||(n=n.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),Ho(l,n)&&(n=n.slice(1)),t.chars&&t.chars(n),""});c+=e.length-p.length,e=p,A(l,c-u,c)}else{var d=e.indexOf("<");if(0===d){if(jo.test(e)){var v=e.indexOf("--\x3e");if(v>=0){t.shouldKeepComment&&t.comment(e.substring(4,v),c,c+v+3),C(v+3);continue}}if(Do.test(e)){var h=e.indexOf("]>");if(h>=0){C(h+2);continue}}var m=e.match(Eo);if(m){C(m[0].length);continue}var y=e.match(No);if(y){var g=c;C(y[0].length),A(y[1],g,c);continue}var _=x();if(_){k(_),Ho(_.tagName,e)&&C(1);continue}}var b=void 0,$=void 0,w=void 0;if(d>=0){for($=e.slice(d);!(No.test($)||So.test($)||jo.test($)||Do.test($)||(w=$.indexOf("<",1))<0);)d+=w,$=e.slice(d);b=e.substring(0,d)}d<0&&(b=e),b&&C(b.length),t.chars&&b&&t.chars(b,c-b.length,c)}if(e===n){t.chars&&t.chars(e);break}}function C(t){c+=t,e=e.substring(t)}function x(){var t=e.match(So);if(t){var n,r,i={tagName:t[1],attrs:[],start:c};for(C(t[0].length);!(n=e.match(To))&&(r=e.match(ko)||e.match(xo));)r.start=c,C(r[0].length),r.end=c,i.attrs.push(r);if(n)return i.unarySlash=n[1],C(n[0].length),i.end=c,i}}function k(e){var n=e.tagName,c=e.unarySlash;o&&("p"===r&&Co(n)&&A(r),s(n)&&r===n&&A(n));for(var u=a(n)||!!c,l=e.attrs.length,f=new Array(l),p=0;p<l;p++){var d=e.attrs[p],v=d[3]||d[4]||d[5]||"",h="a"===n&&"href"===d[1]?t.shouldDecodeNewlinesForHref:t.shouldDecodeNewlines;f[p]={name:d[1],value:Bo(v,h)}}u||(i.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:f,start:e.start,end:e.end}),r=n),t.start&&t.start(n,f,u,e.start,e.end)}function A(e,n,o){var a,s;if(null==n&&(n=c),null==o&&(o=c),e)for(s=e.toLowerCase(),a=i.length-1;a>=0&&i[a].lowerCasedTag!==s;a--);else a=0;if(a>=0){for(var u=i.length-1;u>=a;u--)t.end&&t.end(i[u].tag,n,o);i.length=a,r=a&&i[a-1].tag}else"br"===s?t.start&&t.start(e,[],!0,n,o):"p"===s&&(t.start&&t.start(e,[],!1,n,o),t.end&&t.end(e,n,o))}A()}(e,{warn:Uo,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,canBeLeftOpenTag:t.canBeLeftOpenTag,shouldDecodeNewlines:t.shouldDecodeNewlines,shouldDecodeNewlinesForHref:t.shouldDecodeNewlinesForHref,shouldKeepComment:t.comments,outputSourceRange:t.outputSourceRange,start:function(e,o,a,l,f){var p=r&&r.ns||Zo(e);q&&"svg"===p&&(o=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];ga.test(r.name)||(r.name=r.name.replace(_a,""),t.push(r))}return t}(o));var d,v=la(e,o,r);p&&(v.ns=p),"style"!==(d=v).tag&&("script"!==d.tag||d.attrsMap.type&&"text/javascript"!==d.attrsMap.type)||te()||(v.forbidden=!0);for(var h=0;h<Ko.length;h++)v=Ko[h](v,t)||v;s||(!function(e){null!=Pr(e,"v-pre")&&(e.pre=!0)}(v),v.pre&&(s=!0)),qo(v.tag)&&(c=!0),s?function(e){var t=e.attrsList,n=t.length;if(n)for(var r=e.attrs=new Array(n),i=0;i<n;i++)r[i]={name:t[i].name,value:JSON.stringify(t[i].value)},null!=t[i].start&&(r[i].start=t[i].start,r[i].end=t[i].end);else e.pre||(e.plain=!0)}(v):v.processed||(da(v),function(e){var t=Pr(e,"v-if");if(t)e.if=t,va(e,{exp:t,block:e});else{null!=Pr(e,"v-else")&&(e.else=!0);var n=Pr(e,"v-else-if");n&&(e.elseif=n)}}(v),function(e){null!=Pr(e,"v-once")&&(e.once=!0)}(v)),n||(n=v),a?u(v):(r=v,i.push(v))},end:function(e,t,n){var o=i[i.length-1];i.length-=1,r=i[i.length-1],u(o)},chars:function(e,t,n){if(r&&(!q||"textarea"!==r.tag||r.attrsMap.placeholder!==e)){var i,u,l,f=r.children;if(e=c||e.trim()?"script"===(i=r).tag||"style"===i.tag?e:ca(e):f.length?a?"condense"===a&&aa.test(e)?"":" ":o?" ":"":"")c||"condense"!==a||(e=e.replace(sa," ")),!s&&" "!==e&&(u=function(e,t){var n=t?mo(t):vo;if(n.test(e)){for(var r,i,o,a=[],s=[],c=n.lastIndex=0;r=n.exec(e);){(i=r.index)>c&&(s.push(o=e.slice(c,i)),a.push(JSON.stringify(o)));var u=Or(r[1].trim());a.push("_s("+u+")"),s.push({"@binding":u}),c=i+r[0].length}return c<e.length&&(s.push(o=e.slice(c)),a.push(JSON.stringify(o))),{expression:a.join("+"),tokens:s}}}(e,Vo))?l={type:2,expression:u.expression,tokens:u.tokens,text:e}:" "===e&&f.length&&" "===f[f.length-1].text||(l={type:3,text:e}),l&&f.push(l)}},comment:function(e,t,n){if(r){var i={type:3,text:e,isComment:!0};r.children.push(i)}}}),n}function pa(e,t){var n,r;(r=Fr(n=e,"key"))&&(n.key=r),e.plain=!e.key&&!e.scopedSlots&&!e.attrsList.length,function(e){var t=Fr(e,"ref");t&&(e.ref=t,e.refInFor=function(e){var t=e;for(;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}(e))}(e),function(e){var t;"template"===e.tag?(t=Pr(e,"scope"),e.slotScope=t||Pr(e,"slot-scope")):(t=Pr(e,"slot-scope"))&&(e.slotScope=t);var n=Fr(e,"slot");n&&(e.slotTarget='""'===n?'"default"':n,e.slotTargetDynamic=!(!e.attrsMap[":slot"]&&!e.attrsMap["v-bind:slot"]),"template"===e.tag||e.slotScope||jr(e,"slot",n,function(e,t){return e.rawAttrsMap[":"+t]||e.rawAttrsMap["v-bind:"+t]||e.rawAttrsMap[t]}(e,"slot")));if("template"===e.tag){var r=Rr(e,oa);if(r){var i=ha(r),o=i.name,a=i.dynamic;e.slotTarget=o,e.slotTargetDynamic=a,e.slotScope=r.value||ua}}else{var s=Rr(e,oa);if(s){var c=e.scopedSlots||(e.scopedSlots={}),u=ha(s),l=u.name,f=u.dynamic,p=c[l]=la("template",[],e);p.slotTarget=l,p.slotTargetDynamic=f,p.children=e.children.filter(function(e){if(!e.slotScope)return e.parent=p,!0}),p.slotScope=s.value||ua,e.children=[],e.plain=!1}}}(e),function(e){"slot"===e.tag&&(e.slotName=Fr(e,"name"))}(e),function(e){var t;(t=Fr(e,"is"))&&(e.component=t);null!=Pr(e,"inline-template")&&(e.inlineTemplate=!0)}(e);for(var i=0;i<zo.length;i++)e=zo[i](e,t)||e;return function(e){var t,n,r,i,o,a,s,c,u=e.attrsList;for(t=0,n=u.length;t<n;t++)if(r=i=u[t].name,o=u[t].value,Xo.test(r))if(e.hasBindings=!0,(a=ma(r.replace(Xo,"")))&&(r=r.replace(ia,"")),ra.test(r))r=r.replace(ra,""),o=Or(o),(c=ta.test(r))&&(r=r.slice(1,-1)),a&&(a.prop&&!c&&"innerHtml"===(r=b(r))&&(r="innerHTML"),a.camel&&!c&&(r=b(r)),a.sync&&(s=Ur(o,"$event"),c?Mr(e,'"update:"+('+r+")",s,null,!1,0,u[t],!0):(Mr(e,"update:"+b(r),s,null,!1,0,u[t]),C(r)!==b(r)&&Mr(e,"update:"+C(r),s,null,!1,0,u[t])))),a&&a.prop||!e.component&&Wo(e.tag,e.attrsMap.type,r)?Er(e,r,o,u[t],c):jr(e,r,o,u[t],c);else if(Go.test(r))r=r.replace(Go,""),(c=ta.test(r))&&(r=r.slice(1,-1)),Mr(e,r,o,a,!1,0,u[t],c);else{var l=(r=r.replace(Xo,"")).match(na),f=l&&l[1];c=!1,f&&(r=r.slice(0,-(f.length+1)),ta.test(f)&&(f=f.slice(1,-1),c=!0)),Lr(e,r,i,o,f,c,a,u[t])}else jr(e,r,JSON.stringify(o),u[t]),!e.component&&"muted"===r&&Wo(e.tag,e.attrsMap.type,r)&&Er(e,r,"true",u[t])}(e),e}function da(e){var t;if(t=Pr(e,"v-for")){var n=function(e){var t=e.match(Yo);if(!t)return;var n={};n.for=t[2].trim();var r=t[1].trim().replace(ea,""),i=r.match(Qo);i?(n.alias=r.replace(Qo,"").trim(),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=r;return n}(t);n&&A(e,n)}}function va(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function ha(e){var t=e.name.replace(oa,"");return t||"#"!==e.name[0]&&(t="default"),ta.test(t)?{name:t.slice(1,-1),dynamic:!0}:{name:'"'+t+'"',dynamic:!1}}function ma(e){var t=e.match(ia);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function ya(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}var ga=/^xmlns:NS\d+/,_a=/^NS\d+:/;function ba(e){return la(e.tag,e.attrsList.slice(),e.parent)}var $a=[yo,_o,{preTransformNode:function(e,t){if("input"===e.tag){var n,r=e.attrsMap;if(!r["v-model"])return;if((r[":type"]||r["v-bind:type"])&&(n=Fr(e,"type")),r.type||n||!r["v-bind"]||(n="("+r["v-bind"]+").type"),n){var i=Pr(e,"v-if",!0),o=i?"&&("+i+")":"",a=null!=Pr(e,"v-else",!0),s=Pr(e,"v-else-if",!0),c=ba(e);da(c),Dr(c,"type","checkbox"),pa(c,t),c.processed=!0,c.if="("+n+")==='checkbox'"+o,va(c,{exp:c.if,block:c});var u=ba(e);Pr(u,"v-for",!0),Dr(u,"type","radio"),pa(u,t),va(c,{exp:"("+n+")==='radio'"+o,block:u});var l=ba(e);return Pr(l,"v-for",!0),Dr(l,":type",n),pa(l,t),va(c,{exp:i,block:l}),a?c.else=!0:s&&(c.elseif=s),c}}}}];var wa,Ca,xa={expectHTML:!0,modules:$a,directives:{model:function(e,t,n){var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;if(e.component)return Br(e,r,i),!1;if("select"===o)!function(e,t,n){var r='var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(n&&n.number?"_n(val)":"val")+"});";r=r+" "+Ur(t,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),Mr(e,"change",r,null,!0)}(e,r,i);else if("input"===o&&"checkbox"===a)!function(e,t,n){var r=n&&n.number,i=Fr(e,"value")||"null",o=Fr(e,"true-value")||"true",a=Fr(e,"false-value")||"false";Er(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1"+("true"===o?":("+t+")":":_q("+t+","+o+")")),Mr(e,"change","var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+Ur(t,"$$a.concat([$$v])")+")}else{$$i>-1&&("+Ur(t,"$$a.slice(0,$$i).concat($$a.slice($$i+1))")+")}}else{"+Ur(t,"$$c")+"}",null,!0)}(e,r,i);else if("input"===o&&"radio"===a)!function(e,t,n){var r=n&&n.number,i=Fr(e,"value")||"null";Er(e,"checked","_q("+t+","+(i=r?"_n("+i+")":i)+")"),Mr(e,"change",Ur(t,i),null,!0)}(e,r,i);else if("input"===o||"textarea"===o)!function(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?Zr:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=Ur(t,l);c&&(f="if($event.target.composing)return;"+f),Er(e,"value","("+t+")"),Mr(e,u,f,null,!0),(s||a)&&Mr(e,"blur","$forceUpdate()")}(e,r,i);else if(!F.isReservedTag(o))return Br(e,r,i),!1;return!0},text:function(e,t){t.value&&Er(e,"textContent","_s("+t.value+")",t)},html:function(e,t){t.value&&Er(e,"innerHTML","_s("+t.value+")",t)}},isPreTag:function(e){return"pre"===e},isUnaryTag:$o,mustUseProp:Dn,canBeLeftOpenTag:wo,isReservedTag:Zn,getTagNamespace:Gn,staticKeys:function(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}($a)},ka=g(function(e){return p("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap"+(e?","+e:""))});function Aa(e,t){e&&(wa=ka(t.staticKeys||""),Ca=t.isReservedTag||T,function e(t){t.static=function(e){if(2===e.type)return!1;if(3===e.type)return!0;return!(!e.pre&&(e.hasBindings||e.if||e.for||d(e.tag)||!Ca(e.tag)||function(e){for(;e.parent;){if("template"!==(e=e.parent).tag)return!1;if(e.for)return!0}return!1}(e)||!Object.keys(e).every(wa)))}(t);if(1===t.type){if(!Ca(t.tag)&&"slot"!==t.tag&&null==t.attrsMap["inline-template"])return;for(var n=0,r=t.children.length;n<r;n++){var i=t.children[n];e(i),i.static||(t.static=!1)}if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++){var s=t.ifConditions[o].block;e(s),s.static||(t.static=!1)}}}(e),function e(t,n){if(1===t.type){if((t.static||t.once)&&(t.staticInFor=n),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return void(t.staticRoot=!0);if(t.staticRoot=!1,t.children)for(var r=0,i=t.children.length;r<i;r++)e(t.children[r],n||!!t.for);if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++)e(t.ifConditions[o].block,n)}}(e,!1))}var Oa=/^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,Sa=/\([^)]*?\);*$/,Ta=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,Na={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Ea={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]},ja=function(e){return"if("+e+")return null;"},Da={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:ja("$event.target !== $event.currentTarget"),ctrl:ja("!$event.ctrlKey"),shift:ja("!$event.shiftKey"),alt:ja("!$event.altKey"),meta:ja("!$event.metaKey"),left:ja("'button' in $event && $event.button !== 0"),middle:ja("'button' in $event && $event.button !== 1"),right:ja("'button' in $event && $event.button !== 2")};function La(e,t){var n=t?"nativeOn:":"on:",r="",i="";for(var o in e){var a=Ia(e[o]);e[o]&&e[o].dynamic?i+=o+","+a+",":r+='"'+o+'":'+a+","}return r="{"+r.slice(0,-1)+"}",i?n+"_d("+r+",["+i.slice(0,-1)+"])":n+r}function Ia(e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map(function(e){return Ia(e)}).join(",")+"]";var t=Ta.test(e.value),n=Oa.test(e.value),r=Ta.test(e.value.replace(Sa,""));if(e.modifiers){var i="",o="",a=[];for(var s in e.modifiers)if(Da[s])o+=Da[s],Na[s]&&a.push(s);else if("exact"===s){var c=e.modifiers;o+=ja(["ctrl","shift","alt","meta"].filter(function(e){return!c[e]}).map(function(e){return"$event."+e+"Key"}).join("||"))}else a.push(s);return a.length&&(i+=function(e){return"if(!$event.type.indexOf('key')&&"+e.map(Ma).join("&&")+")return null;"}(a)),o&&(i+=o),"function($event){"+i+(t?"return "+e.value+".apply(null, arguments)":n?"return ("+e.value+").apply(null, arguments)":r?"return "+e.value:e.value)+"}"}return t||n?e.value:"function($event){"+(r?"return "+e.value:e.value)+"}"}function Ma(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=Na[e],r=Ea[e];return"_k($event.keyCode,"+JSON.stringify(e)+","+JSON.stringify(n)+",$event.key,"+JSON.stringify(r)+")"}var Fa={on:function(e,t){e.wrapListeners=function(e){return"_g("+e+","+t.value+")"}},bind:function(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+","+(t.modifiers&&t.modifiers.prop?"true":"false")+(t.modifiers&&t.modifiers.sync?",true":"")+")"}},cloak:S},Pa=function(e){this.options=e,this.warn=e.warn||Tr,this.transforms=Nr(e.modules,"transformCode"),this.dataGenFns=Nr(e.modules,"genData"),this.directives=A(A({},Fa),e.directives);var t=e.isReservedTag||T;this.maybeComponent=function(e){return!!e.component||!t(e.tag)},this.onceId=0,this.staticRenderFns=[],this.pre=!1};function Ra(e,t){var n=new Pa(t);return{render:"with(this){return "+(e?"script"===e.tag?"null":Ha(e,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function Ha(e,t){if(e.parent&&(e.pre=e.pre||e.parent.pre),e.staticRoot&&!e.staticProcessed)return Ba(e,t);if(e.once&&!e.onceProcessed)return Ua(e,t);if(e.for&&!e.forProcessed)return za(e,t);if(e.if&&!e.ifProcessed)return Va(e,t);if("template"!==e.tag||e.slotTarget||t.pre){if("slot"===e.tag)return function(e,t){var n=e.slotName||'"default"',r=Wa(e,t),i="_t("+n+(r?",function(){return "+r+"}":""),o=e.attrs||e.dynamicAttrs?Xa((e.attrs||[]).concat(e.dynamicAttrs||[]).map(function(e){return{name:b(e.name),value:e.value,dynamic:e.dynamic}})):null,a=e.attrsMap["v-bind"];!o&&!a||r||(i+=",null");o&&(i+=","+o);a&&(i+=(o?"":",null")+","+a);return i+")"}(e,t);var n;if(e.component)n=function(e,t,n){var r=t.inlineTemplate?null:Wa(t,n,!0);return"_c("+e+","+Ka(t,n)+(r?","+r:"")+")"}(e.component,e,t);else{var r;(!e.plain||e.pre&&t.maybeComponent(e))&&(r=Ka(e,t));var i=e.inlineTemplate?null:Wa(e,t,!0);n="_c('"+e.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<t.transforms.length;o++)n=t.transforms[o](e,n);return n}return Wa(e,t)||"void 0"}function Ba(e,t){e.staticProcessed=!0;var n=t.pre;return e.pre&&(t.pre=e.pre),t.staticRenderFns.push("with(this){return "+Ha(e,t)+"}"),t.pre=n,"_m("+(t.staticRenderFns.length-1)+(e.staticInFor?",true":"")+")"}function Ua(e,t){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return Va(e,t);if(e.staticInFor){for(var n="",r=e.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+Ha(e,t)+","+t.onceId+++","+n+")":Ha(e,t)}return Ba(e,t)}function Va(e,t,n,r){return e.ifProcessed=!0,function e(t,n,r,i){if(!t.length)return i||"_e()";var o=t.shift();return o.exp?"("+o.exp+")?"+a(o.block)+":"+e(t,n,r,i):""+a(o.block);function a(e){return r?r(e,n):e.once?Ua(e,n):Ha(e,n)}}(e.ifConditions.slice(),t,n,r)}function za(e,t,n,r){var i=e.for,o=e.alias,a=e.iterator1?","+e.iterator1:"",s=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,(r||"_l")+"(("+i+"),function("+o+a+s+"){return "+(n||Ha)(e,t)+"})"}function Ka(e,t){var n="{",r=function(e,t){var n=e.directives;if(!n)return;var r,i,o,a,s="directives:[",c=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var u=t.directives[o.name];u&&(a=!!u(e,o,t.warn)),a&&(c=!0,s+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?",arg:"+(o.isDynamicArg?o.arg:'"'+o.arg+'"'):"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}if(c)return s.slice(0,-1)+"]"}(e,t);r&&(n+=r+","),e.key&&(n+="key:"+e.key+","),e.ref&&(n+="ref:"+e.ref+","),e.refInFor&&(n+="refInFor:true,"),e.pre&&(n+="pre:true,"),e.component&&(n+='tag:"'+e.tag+'",');for(var i=0;i<t.dataGenFns.length;i++)n+=t.dataGenFns[i](e);if(e.attrs&&(n+="attrs:"+Xa(e.attrs)+","),e.props&&(n+="domProps:"+Xa(e.props)+","),e.events&&(n+=La(e.events,!1)+","),e.nativeEvents&&(n+=La(e.nativeEvents,!0)+","),e.slotTarget&&!e.slotScope&&(n+="slot:"+e.slotTarget+","),e.scopedSlots&&(n+=function(e,t,n){var r=e.for||Object.keys(t).some(function(e){var n=t[e];return n.slotTargetDynamic||n.if||n.for||Ja(n)}),i=!!e.if;if(!r)for(var o=e.parent;o;){if(o.slotScope&&o.slotScope!==ua||o.for){r=!0;break}o.if&&(i=!0),o=o.parent}var a=Object.keys(t).map(function(e){return qa(t[e],n)}).join(",");return"scopedSlots:_u(["+a+"]"+(r?",null,true":"")+(!r&&i?",null,false,"+function(e){var t=5381,n=e.length;for(;n;)t=33*t^e.charCodeAt(--n);return t>>>0}(a):"")+")"}(e,e.scopedSlots,t)+","),e.model&&(n+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var o=function(e,t){var n=e.children[0];if(n&&1===n.type){var r=Ra(n,t.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}(e,t);o&&(n+=o+",")}return n=n.replace(/,$/,"")+"}",e.dynamicAttrs&&(n="_b("+n+',"'+e.tag+'",'+Xa(e.dynamicAttrs)+")"),e.wrapData&&(n=e.wrapData(n)),e.wrapListeners&&(n=e.wrapListeners(n)),n}function Ja(e){return 1===e.type&&("slot"===e.tag||e.children.some(Ja))}function qa(e,t){var n=e.attrsMap["slot-scope"];if(e.if&&!e.ifProcessed&&!n)return Va(e,t,qa,"null");if(e.for&&!e.forProcessed)return za(e,t,qa);var r=e.slotScope===ua?"":String(e.slotScope),i="function("+r+"){return "+("template"===e.tag?e.if&&n?"("+e.if+")?"+(Wa(e,t)||"undefined")+":undefined":Wa(e,t)||"undefined":Ha(e,t))+"}",o=r?"":",proxy:true";return"{key:"+(e.slotTarget||'"default"')+",fn:"+i+o+"}"}function Wa(e,t,n,r,i){var o=e.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag){var s=n?t.maybeComponent(a)?",1":",0":"";return""+(r||Ha)(a,t)+s}var c=n?function(e,t){for(var n=0,r=0;r<e.length;r++){var i=e[r];if(1===i.type){if(Za(i)||i.ifConditions&&i.ifConditions.some(function(e){return Za(e.block)})){n=2;break}(t(i)||i.ifConditions&&i.ifConditions.some(function(e){return t(e.block)}))&&(n=1)}}return n}(o,t.maybeComponent):0,u=i||Ga;return"["+o.map(function(e){return u(e,t)}).join(",")+"]"+(c?","+c:"")}}function Za(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function Ga(e,t){return 1===e.type?Ha(e,t):3===e.type&&e.isComment?(r=e,"_e("+JSON.stringify(r.text)+")"):"_v("+(2===(n=e).type?n.expression:Ya(JSON.stringify(n.text)))+")";var n,r}function Xa(e){for(var t="",n="",r=0;r<e.length;r++){var i=e[r],o=Ya(i.value);i.dynamic?n+=i.name+","+o+",":t+='"'+i.name+'":'+o+","}return t="{"+t.slice(0,-1)+"}",n?"_d("+t+",["+n.slice(0,-1)+"])":t}function Ya(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b");function Qa(e,t){try{return new Function(e)}catch(n){return t.push({err:n,code:e}),S}}function es(e){var t=Object.create(null);return function(n,r,i){(r=A({},r)).warn;delete r.warn;var o=r.delimiters?String(r.delimiters)+n:n;if(t[o])return t[o];var a=e(n,r),s={},c=[];return s.render=Qa(a.render,c),s.staticRenderFns=a.staticRenderFns.map(function(e){return Qa(e,c)}),t[o]=s}}var ts,ns,rs=(ts=function(e,t){var n=fa(e.trim(),t);!1!==t.optimize&&Aa(n,t);var r=Ra(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}},function(e){function t(t,n){var r=Object.create(e),i=[],o=[];if(n)for(var a in n.modules&&(r.modules=(e.modules||[]).concat(n.modules)),n.directives&&(r.directives=A(Object.create(e.directives||null),n.directives)),n)"modules"!==a&&"directives"!==a&&(r[a]=n[a]);r.warn=function(e,t,n){(n?o:i).push(e)};var s=ts(t.trim(),r);return s.errors=i,s.tips=o,s}return{compile:t,compileToFunctions:es(t)}})(xa),is=(rs.compile,rs.compileToFunctions);function os(e){return(ns=ns||document.createElement("div")).innerHTML=e?'<a href="\n"/>':'<div a="\n"/>',ns.innerHTML.indexOf("&#10;")>0}var as=!!V&&os(!1),ss=!!V&&os(!0),cs=g(function(e){var t=Qn(e);return t&&t.innerHTML}),us=Cn.prototype.$mount;return Cn.prototype.$mount=function(e,t){if((e=e&&Qn(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=cs(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=function(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}(e));if(r){var i=is(r,{outputSourceRange:!1,shouldDecodeNewlines:as,shouldDecodeNewlinesForHref:ss,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return us.call(this,e,t)},Cn.compile=is,Cn});;
(function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e(require("vue")):"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports["userselect"]=e(require("vue")):t["userselect"]=e(t["Vue"])})("undefined"!==typeof self?self:this,(function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"00ee":function(t,e,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},"0366":function(t,e,n){var r=n("1c0b");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==o.call(t)?a(t):i(r(t))}},"06cf":function(t,e,n){var r=n("83ab"),i=n("d1e7"),o=n("5c6c"),u=n("fc6a"),a=n("c04e"),c=n("5135"),s=n("0cfb"),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=u(t),e=a(e,!0),s)try{return f(t,e)}catch(n){}if(c(t,e))return o(!i.f.call(t,e),t[e])}},"0cfb":function(t,e,n){var r=n("83ab"),i=n("d039"),o=n("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d3b":function(t,e,n){var r=n("d039"),i=n("b622"),o=n("c430"),u=i("iterator");t.exports=!r((function(){var t=new URL("b?a=1&b=2&c=3","http://a"),e=t.searchParams,n="";return t.pathname="c%20d",e.forEach((function(t,r){e["delete"]("b"),n+=r+t})),o&&!t.toJSON||!e.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[u]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host}))},"107c":function(t,e,n){var r=n("d039");t.exports=r((function(){var t=RegExp("(?<a>b)","string".charAt(5));return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1276:function(t,e,n){"use strict";var r=n("d784"),i=n("44e7"),o=n("825a"),u=n("1d80"),a=n("4840"),c=n("8aa5"),s=n("50c4"),f=n("14c3"),l=n("9263"),p=n("9f7f"),h=n("d039"),d=p.UNSUPPORTED_Y,v=[].push,g=Math.min,y=4294967295,m=!h((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));r("split",(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(u(this)),o=void 0===n?y:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,o);var a,c,s,f=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,d=new RegExp(t.source,p+"g");while(a=l.call(d,r)){if(c=d.lastIndex,c>h&&(f.push(r.slice(h,a.index)),a.length>1&&a.index<r.length&&v.apply(f,a.slice(1)),s=a[0].length,h=c,f.length>=o))break;d.lastIndex===a.index&&d.lastIndex++}return h===r.length?!s&&d.test("")||f.push(""):f.push(r.slice(h)),f.length>o?f.slice(0,o):f}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=u(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,i,n):r.call(String(i),e,n)},function(t,i){var u=n(r,this,t,i,r!==e);if(u.done)return u.value;var l=o(this),p=String(t),h=a(l,RegExp),v=l.unicode,m=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(d?"g":"y"),b=new h(d?"^(?:"+l.source+")":l,m),_=void 0===i?y:i>>>0;if(0===_)return[];if(0===p.length)return null===f(b,p)?[p]:[];var w=0,x=0,j=[];while(x<p.length){b.lastIndex=d?0:x;var k,O=f(b,d?p.slice(x):p);if(null===O||(k=g(s(b.lastIndex+(d?x:0)),p.length))===w)x=c(p,x,v);else{if(j.push(p.slice(w,x)),j.length===_)return j;for(var S=1;S<=O.length-1;S++)if(j.push(O[S]),j.length===_)return j;x=w=k}}return j.push(p.slice(w)),j}]}),!m,d)},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("17c2"),u=n("9112");for(var a in i){var c=r[a],s=c&&c.prototype;if(s&&s.forEach!==o)try{u(s,"forEach",o)}catch(f){s.forEach=o}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=i("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"19aa":function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c0b":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1c7e":function(t,e,n){var r=n("b622"),i=r("iterator"),o=!1;try{var u=0,a={next:function(){return{done:!!u++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},"1cdc":function(t,e,n){var r=n("342f");t.exports=/(?:iphone|ipod|ipad).*applewebkit/i.test(r)},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),o=n("2d00"),u=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[u]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2266:function(t,e,n){var r=n("825a"),i=n("e95a"),o=n("50c4"),u=n("0366"),a=n("35a1"),c=n("2a62"),s=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var f,l,p,h,d,v,g,y=n&&n.that,m=!(!n||!n.AS_ENTRIES),b=!(!n||!n.IS_ITERATOR),_=!(!n||!n.INTERRUPTED),w=u(e,y,1+m+_),x=function(t){return f&&c(f),new s(!0,t)},j=function(t){return m?(r(t),_?w(t[0],t[1],x):w(t[0],t[1])):_?w(t,x):w(t)};if(b)f=t;else{if(l=a(t),"function"!=typeof l)throw TypeError("Target is not iterable");if(i(l)){for(p=0,h=o(t.length);h>p;p++)if(d=j(t[p]),d&&d instanceof s)return d;return new s(!1)}f=l.call(t)}v=f.next;while(!(g=v.call(f)).done){try{d=j(g.value)}catch(k){throw c(f),k}if("object"==typeof d&&d&&d instanceof s)return d}return new s(!1)}},"23cb":function(t,e,n){var r=n("a691"),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},"23e7":function(t,e,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),u=n("6eeb"),a=n("ce4e"),c=n("e893"),s=n("94ca");t.exports=function(t,e){var n,f,l,p,h,d,v=t.target,g=t.global,y=t.stat;if(f=g?r:y?r[v]||a(v,{}):(r[v]||{}).prototype,f)for(l in e){if(h=e[l],t.noTargetGet?(d=i(f,l),p=d&&d.value):p=f[l],n=s(g?l:v+(y?".":"#")+l,t.forced),!n&&void 0!==p){if(typeof h===typeof p)continue;c(h,p)}(t.sham||p&&p.sham)&&o(h,"sham",!0),u(f,l,h,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},2532:function(t,e,n){"use strict";var r=n("23e7"),i=n("5a34"),o=n("1d80"),u=n("ab13");r({target:"String",proto:!0,forced:!u("includes")},{includes:function(t){return!!~String(o(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},2626:function(t,e,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),u=n("83ab"),a=o("species");t.exports=function(t){var e=r(t),n=i.f;u&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},"2a62":function(t,e,n){var r=n("825a");t.exports=function(t){var e=t["return"];if(void 0!==e)return r(e.call(t)).value}},"2b3d":function(t,e,n){"use strict";n("3ca3");var r,i=n("23e7"),o=n("83ab"),u=n("0d3b"),a=n("da84"),c=n("37e8"),s=n("6eeb"),f=n("19aa"),l=n("5135"),p=n("60da"),h=n("4df4"),d=n("6547").codeAt,v=n("5fb2"),g=n("d44e"),y=n("9861"),m=n("69f3"),b=a.URL,_=y.URLSearchParams,w=y.getState,x=m.set,j=m.getterFor("URL"),k=Math.floor,O=Math.pow,S="Invalid authority",A="Invalid scheme",E="Invalid host",I="Invalid port",C=/[A-Za-z]/,L=/[\d+-.A-Za-z]/,T=/\d/,R=/^0x/i,U=/^[0-7]+$/,P=/^\d+$/,G=/^[\dA-Fa-f]+$/,B=/[\0\t\n\r #%/:<>?@[\\\]^|]/,$=/[\0\t\n\r #/:<>?@[\\\]^|]/,M=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,F=/[\t\n\r]/g,N=function(t,e){var n,r,i;if("["==e.charAt(0)){if("]"!=e.charAt(e.length-1))return E;if(n=z(e.slice(1,-1)),!n)return E;t.host=n}else if(X(t)){if(e=v(e),B.test(e))return E;if(n=D(e),null===n)return E;t.host=n}else{if($.test(e))return E;for(n="",r=h(e),i=0;i<r.length;i++)n+=Y(r[i],W);t.host=n}},D=function(t){var e,n,r,i,o,u,a,c=t.split(".");if(c.length&&""==c[c.length-1]&&c.pop(),e=c.length,e>4)return t;for(n=[],r=0;r<e;r++){if(i=c[r],""==i)return t;if(o=10,i.length>1&&"0"==i.charAt(0)&&(o=R.test(i)?16:8,i=i.slice(8==o?1:2)),""===i)u=0;else{if(!(10==o?P:8==o?U:G).test(i))return t;u=parseInt(i,o)}n.push(u)}for(r=0;r<e;r++)if(u=n[r],r==e-1){if(u>=O(256,5-e))return null}else if(u>255)return null;for(a=n.pop(),r=0;r<n.length;r++)a+=n[r]*O(256,3-r);return a},z=function(t){var e,n,r,i,o,u,a,c=[0,0,0,0,0,0,0,0],s=0,f=null,l=0,p=function(){return t.charAt(l)};if(":"==p()){if(":"!=t.charAt(1))return;l+=2,s++,f=s}while(p()){if(8==s)return;if(":"!=p()){e=n=0;while(n<4&&G.test(p()))e=16*e+parseInt(p(),16),l++,n++;if("."==p()){if(0==n)return;if(l-=n,s>6)return;r=0;while(p()){if(i=null,r>0){if(!("."==p()&&r<4))return;l++}if(!T.test(p()))return;while(T.test(p())){if(o=parseInt(p(),10),null===i)i=o;else{if(0==i)return;i=10*i+o}if(i>255)return;l++}c[s]=256*c[s]+i,r++,2!=r&&4!=r||s++}if(4!=r)return;break}if(":"==p()){if(l++,!p())return}else if(p())return;c[s++]=e}else{if(null!==f)return;l++,s++,f=s}}if(null!==f){u=s-f,s=7;while(0!=s&&u>0)a=c[s],c[s--]=c[f+u-1],c[f+--u]=a}else if(8!=s)return;return c},V=function(t){for(var e=null,n=1,r=null,i=0,o=0;o<8;o++)0!==t[o]?(i>n&&(e=r,n=i),r=null,i=0):(null===r&&(r=o),++i);return i>n&&(e=r,n=i),e},q=function(t){var e,n,r,i;if("number"==typeof t){for(e=[],n=0;n<4;n++)e.unshift(t%256),t=k(t/256);return e.join(".")}if("object"==typeof t){for(e="",r=V(t),n=0;n<8;n++)i&&0===t[n]||(i&&(i=!1),r===n?(e+=n?":":"::",i=!0):(e+=t[n].toString(16),n<7&&(e+=":")));return"["+e+"]"}return t},W={},H=p({},W,{" ":1,'"':1,"<":1,">":1,"`":1}),K=p({},H,{"#":1,"?":1,"{":1,"}":1}),Z=p({},K,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),Y=function(t,e){var n=d(t,0);return n>32&&n<127&&!l(e,t)?t:encodeURIComponent(t)},J={ftp:21,file:null,http:80,https:443,ws:80,wss:443},X=function(t){return l(J,t.scheme)},Q=function(t){return""!=t.username||""!=t.password},tt=function(t){return!t.host||t.cannotBeABaseURL||"file"==t.scheme},et=function(t,e){var n;return 2==t.length&&C.test(t.charAt(0))&&(":"==(n=t.charAt(1))||!e&&"|"==n)},nt=function(t){var e;return t.length>1&&et(t.slice(0,2))&&(2==t.length||"/"===(e=t.charAt(2))||"\\"===e||"?"===e||"#"===e)},rt=function(t){var e=t.path,n=e.length;!n||"file"==t.scheme&&1==n&&et(e[0],!0)||e.pop()},it=function(t){return"."===t||"%2e"===t.toLowerCase()},ot=function(t){return t=t.toLowerCase(),".."===t||"%2e."===t||".%2e"===t||"%2e%2e"===t},ut={},at={},ct={},st={},ft={},lt={},pt={},ht={},dt={},vt={},gt={},yt={},mt={},bt={},_t={},wt={},xt={},jt={},kt={},Ot={},St={},At=function(t,e,n,i){var o,u,a,c,s=n||ut,f=0,p="",d=!1,v=!1,g=!1;n||(t.scheme="",t.username="",t.password="",t.host=null,t.port=null,t.path=[],t.query=null,t.fragment=null,t.cannotBeABaseURL=!1,e=e.replace(M,"")),e=e.replace(F,""),o=h(e);while(f<=o.length){switch(u=o[f],s){case ut:if(!u||!C.test(u)){if(n)return A;s=ct;continue}p+=u.toLowerCase(),s=at;break;case at:if(u&&(L.test(u)||"+"==u||"-"==u||"."==u))p+=u.toLowerCase();else{if(":"!=u){if(n)return A;p="",s=ct,f=0;continue}if(n&&(X(t)!=l(J,p)||"file"==p&&(Q(t)||null!==t.port)||"file"==t.scheme&&!t.host))return;if(t.scheme=p,n)return void(X(t)&&J[t.scheme]==t.port&&(t.port=null));p="","file"==t.scheme?s=bt:X(t)&&i&&i.scheme==t.scheme?s=st:X(t)?s=ht:"/"==o[f+1]?(s=ft,f++):(t.cannotBeABaseURL=!0,t.path.push(""),s=kt)}break;case ct:if(!i||i.cannotBeABaseURL&&"#"!=u)return A;if(i.cannotBeABaseURL&&"#"==u){t.scheme=i.scheme,t.path=i.path.slice(),t.query=i.query,t.fragment="",t.cannotBeABaseURL=!0,s=St;break}s="file"==i.scheme?bt:lt;continue;case st:if("/"!=u||"/"!=o[f+1]){s=lt;continue}s=dt,f++;break;case ft:if("/"==u){s=vt;break}s=jt;continue;case lt:if(t.scheme=i.scheme,u==r)t.username=i.username,t.password=i.password,t.host=i.host,t.port=i.port,t.path=i.path.slice(),t.query=i.query;else if("/"==u||"\\"==u&&X(t))s=pt;else if("?"==u)t.username=i.username,t.password=i.password,t.host=i.host,t.port=i.port,t.path=i.path.slice(),t.query="",s=Ot;else{if("#"!=u){t.username=i.username,t.password=i.password,t.host=i.host,t.port=i.port,t.path=i.path.slice(),t.path.pop(),s=jt;continue}t.username=i.username,t.password=i.password,t.host=i.host,t.port=i.port,t.path=i.path.slice(),t.query=i.query,t.fragment="",s=St}break;case pt:if(!X(t)||"/"!=u&&"\\"!=u){if("/"!=u){t.username=i.username,t.password=i.password,t.host=i.host,t.port=i.port,s=jt;continue}s=vt}else s=dt;break;case ht:if(s=dt,"/"!=u||"/"!=p.charAt(f+1))continue;f++;break;case dt:if("/"!=u&&"\\"!=u){s=vt;continue}break;case vt:if("@"==u){d&&(p="%40"+p),d=!0,a=h(p);for(var y=0;y<a.length;y++){var m=a[y];if(":"!=m||g){var b=Y(m,Z);g?t.password+=b:t.username+=b}else g=!0}p=""}else if(u==r||"/"==u||"?"==u||"#"==u||"\\"==u&&X(t)){if(d&&""==p)return S;f-=h(p).length+1,p="",s=gt}else p+=u;break;case gt:case yt:if(n&&"file"==t.scheme){s=wt;continue}if(":"!=u||v){if(u==r||"/"==u||"?"==u||"#"==u||"\\"==u&&X(t)){if(X(t)&&""==p)return E;if(n&&""==p&&(Q(t)||null!==t.port))return;if(c=N(t,p),c)return c;if(p="",s=xt,n)return;continue}"["==u?v=!0:"]"==u&&(v=!1),p+=u}else{if(""==p)return E;if(c=N(t,p),c)return c;if(p="",s=mt,n==yt)return}break;case mt:if(!T.test(u)){if(u==r||"/"==u||"?"==u||"#"==u||"\\"==u&&X(t)||n){if(""!=p){var _=parseInt(p,10);if(_>65535)return I;t.port=X(t)&&_===J[t.scheme]?null:_,p=""}if(n)return;s=xt;continue}return I}p+=u;break;case bt:if(t.scheme="file","/"==u||"\\"==u)s=_t;else{if(!i||"file"!=i.scheme){s=jt;continue}if(u==r)t.host=i.host,t.path=i.path.slice(),t.query=i.query;else if("?"==u)t.host=i.host,t.path=i.path.slice(),t.query="",s=Ot;else{if("#"!=u){nt(o.slice(f).join(""))||(t.host=i.host,t.path=i.path.slice(),rt(t)),s=jt;continue}t.host=i.host,t.path=i.path.slice(),t.query=i.query,t.fragment="",s=St}}break;case _t:if("/"==u||"\\"==u){s=wt;break}i&&"file"==i.scheme&&!nt(o.slice(f).join(""))&&(et(i.path[0],!0)?t.path.push(i.path[0]):t.host=i.host),s=jt;continue;case wt:if(u==r||"/"==u||"\\"==u||"?"==u||"#"==u){if(!n&&et(p))s=jt;else if(""==p){if(t.host="",n)return;s=xt}else{if(c=N(t,p),c)return c;if("localhost"==t.host&&(t.host=""),n)return;p="",s=xt}continue}p+=u;break;case xt:if(X(t)){if(s=jt,"/"!=u&&"\\"!=u)continue}else if(n||"?"!=u)if(n||"#"!=u){if(u!=r&&(s=jt,"/"!=u))continue}else t.fragment="",s=St;else t.query="",s=Ot;break;case jt:if(u==r||"/"==u||"\\"==u&&X(t)||!n&&("?"==u||"#"==u)){if(ot(p)?(rt(t),"/"==u||"\\"==u&&X(t)||t.path.push("")):it(p)?"/"==u||"\\"==u&&X(t)||t.path.push(""):("file"==t.scheme&&!t.path.length&&et(p)&&(t.host&&(t.host=""),p=p.charAt(0)+":"),t.path.push(p)),p="","file"==t.scheme&&(u==r||"?"==u||"#"==u))while(t.path.length>1&&""===t.path[0])t.path.shift();"?"==u?(t.query="",s=Ot):"#"==u&&(t.fragment="",s=St)}else p+=Y(u,K);break;case kt:"?"==u?(t.query="",s=Ot):"#"==u?(t.fragment="",s=St):u!=r&&(t.path[0]+=Y(u,W));break;case Ot:n||"#"!=u?u!=r&&("'"==u&&X(t)?t.query+="%27":t.query+="#"==u?"%23":Y(u,W)):(t.fragment="",s=St);break;case St:u!=r&&(t.fragment+=Y(u,H));break}f++}},Et=function(t){var e,n,r=f(this,Et,"URL"),i=arguments.length>1?arguments[1]:void 0,u=String(t),a=x(r,{type:"URL"});if(void 0!==i)if(i instanceof Et)e=j(i);else if(n=At(e={},String(i)),n)throw TypeError(n);if(n=At(a,u,null,e),n)throw TypeError(n);var c=a.searchParams=new _,s=w(c);s.updateSearchParams(a.query),s.updateURL=function(){a.query=String(c)||null},o||(r.href=Ct.call(r),r.origin=Lt.call(r),r.protocol=Tt.call(r),r.username=Rt.call(r),r.password=Ut.call(r),r.host=Pt.call(r),r.hostname=Gt.call(r),r.port=Bt.call(r),r.pathname=$t.call(r),r.search=Mt.call(r),r.searchParams=Ft.call(r),r.hash=Nt.call(r))},It=Et.prototype,Ct=function(){var t=j(this),e=t.scheme,n=t.username,r=t.password,i=t.host,o=t.port,u=t.path,a=t.query,c=t.fragment,s=e+":";return null!==i?(s+="//",Q(t)&&(s+=n+(r?":"+r:"")+"@"),s+=q(i),null!==o&&(s+=":"+o)):"file"==e&&(s+="//"),s+=t.cannotBeABaseURL?u[0]:u.length?"/"+u.join("/"):"",null!==a&&(s+="?"+a),null!==c&&(s+="#"+c),s},Lt=function(){var t=j(this),e=t.scheme,n=t.port;if("blob"==e)try{return new Et(e.path[0]).origin}catch(r){return"null"}return"file"!=e&&X(t)?e+"://"+q(t.host)+(null!==n?":"+n:""):"null"},Tt=function(){return j(this).scheme+":"},Rt=function(){return j(this).username},Ut=function(){return j(this).password},Pt=function(){var t=j(this),e=t.host,n=t.port;return null===e?"":null===n?q(e):q(e)+":"+n},Gt=function(){var t=j(this).host;return null===t?"":q(t)},Bt=function(){var t=j(this).port;return null===t?"":String(t)},$t=function(){var t=j(this),e=t.path;return t.cannotBeABaseURL?e[0]:e.length?"/"+e.join("/"):""},Mt=function(){var t=j(this).query;return t?"?"+t:""},Ft=function(){return j(this).searchParams},Nt=function(){var t=j(this).fragment;return t?"#"+t:""},Dt=function(t,e){return{get:t,set:e,configurable:!0,enumerable:!0}};if(o&&c(It,{href:Dt(Ct,(function(t){var e=j(this),n=String(t),r=At(e,n);if(r)throw TypeError(r);w(e.searchParams).updateSearchParams(e.query)})),origin:Dt(Lt),protocol:Dt(Tt,(function(t){var e=j(this);At(e,String(t)+":",ut)})),username:Dt(Rt,(function(t){var e=j(this),n=h(String(t));if(!tt(e)){e.username="";for(var r=0;r<n.length;r++)e.username+=Y(n[r],Z)}})),password:Dt(Ut,(function(t){var e=j(this),n=h(String(t));if(!tt(e)){e.password="";for(var r=0;r<n.length;r++)e.password+=Y(n[r],Z)}})),host:Dt(Pt,(function(t){var e=j(this);e.cannotBeABaseURL||At(e,String(t),gt)})),hostname:Dt(Gt,(function(t){var e=j(this);e.cannotBeABaseURL||At(e,String(t),yt)})),port:Dt(Bt,(function(t){var e=j(this);tt(e)||(t=String(t),""==t?e.port=null:At(e,t,mt))})),pathname:Dt($t,(function(t){var e=j(this);e.cannotBeABaseURL||(e.path=[],At(e,t+"",xt))})),search:Dt(Mt,(function(t){var e=j(this);t=String(t),""==t?e.query=null:("?"==t.charAt(0)&&(t=t.slice(1)),e.query="",At(e,t,Ot)),w(e.searchParams).updateSearchParams(e.query)})),searchParams:Dt(Ft),hash:Dt(Nt,(function(t){var e=j(this);t=String(t),""!=t?("#"==t.charAt(0)&&(t=t.slice(1)),e.fragment="",At(e,t,St)):e.fragment=null}))}),s(It,"toJSON",(function(){return Ct.call(this)}),{enumerable:!0}),s(It,"toString",(function(){return Ct.call(this)}),{enumerable:!0}),b){var zt=b.createObjectURL,Vt=b.revokeObjectURL;zt&&s(Et,"createObjectURL",(function(t){return zt.apply(b,arguments)})),Vt&&s(Et,"revokeObjectURL",(function(t){return Vt.apply(b,arguments)}))}g(Et,"URL"),i({global:!0,forced:!u,sham:!o},{URL:Et})},"2cf4":function(t,e,n){var r,i,o,u=n("da84"),a=n("d039"),c=n("0366"),s=n("1be4"),f=n("cc12"),l=n("1cdc"),p=n("605d"),h=u.location,d=u.setImmediate,v=u.clearImmediate,g=u.process,y=u.MessageChannel,m=u.Dispatch,b=0,_={},w="onreadystatechange",x=function(t){if(_.hasOwnProperty(t)){var e=_[t];delete _[t],e()}},j=function(t){return function(){x(t)}},k=function(t){x(t.data)},O=function(t){u.postMessage(t+"",h.protocol+"//"+h.host)};d&&v||(d=function(t){var e=[],n=1;while(arguments.length>n)e.push(arguments[n++]);return _[++b]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},r(b),b},v=function(t){delete _[t]},p?r=function(t){g.nextTick(j(t))}:m&&m.now?r=function(t){m.now(j(t))}:y&&!l?(i=new y,o=i.port2,i.port1.onmessage=k,r=c(o.postMessage,o,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts&&h&&"file:"!==h.protocol&&!a(O)?(r=O,u.addEventListener("message",k,!1)):r=w in f("script")?function(t){s.appendChild(f("script"))[w]=function(){s.removeChild(this),x(t)}}:function(t){setTimeout(j(t),0)}),t.exports={set:d,clear:v}},"2d00":function(t,e,n){var r,i,o=n("da84"),u=n("342f"),a=o.process,c=a&&a.versions,s=c&&c.v8;s?(r=s.split("."),i=r[0]<4?1:r[0]+r[1]):u&&(r=u.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/),r&&(i=r[1]))),t.exports=i&&+i},"2ef0":function(t,e,n){(function(t,r){var i;
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(){var o,u="4.17.21",a=200,c="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",s="Expected a function",f="Invalid `variable` option passed into `_.template`",l="__lodash_hash_undefined__",p=500,h="__lodash_placeholder__",d=1,v=2,g=4,y=1,m=2,b=1,_=2,w=4,x=8,j=16,k=32,O=64,S=128,A=256,E=512,I=30,C="...",L=800,T=16,R=1,U=2,P=3,G=1/0,B=9007199254740991,$=17976931348623157e292,M=NaN,F=4294967295,N=F-1,D=F>>>1,z=[["ary",S],["bind",b],["bindKey",_],["curry",x],["curryRight",j],["flip",E],["partial",k],["partialRight",O],["rearg",A]],V="[object Arguments]",q="[object Array]",W="[object AsyncFunction]",H="[object Boolean]",K="[object Date]",Z="[object DOMException]",Y="[object Error]",J="[object Function]",X="[object GeneratorFunction]",Q="[object Map]",tt="[object Number]",et="[object Null]",nt="[object Object]",rt="[object Promise]",it="[object Proxy]",ot="[object RegExp]",ut="[object Set]",at="[object String]",ct="[object Symbol]",st="[object Undefined]",ft="[object WeakMap]",lt="[object WeakSet]",pt="[object ArrayBuffer]",ht="[object DataView]",dt="[object Float32Array]",vt="[object Float64Array]",gt="[object Int8Array]",yt="[object Int16Array]",mt="[object Int32Array]",bt="[object Uint8Array]",_t="[object Uint8ClampedArray]",wt="[object Uint16Array]",xt="[object Uint32Array]",jt=/\b__p \+= '';/g,kt=/\b(__p \+=) '' \+/g,Ot=/(__e\(.*?\)|\b__t\)) \+\n'';/g,St=/&(?:amp|lt|gt|quot|#39);/g,At=/[&<>"']/g,Et=RegExp(St.source),It=RegExp(At.source),Ct=/<%-([\s\S]+?)%>/g,Lt=/<%([\s\S]+?)%>/g,Tt=/<%=([\s\S]+?)%>/g,Rt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ut=/^\w*$/,Pt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Gt=/[\\^$.*+?()[\]{}|]/g,Bt=RegExp(Gt.source),$t=/^\s+/,Mt=/\s/,Ft=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Nt=/\{\n\/\* \[wrapped with (.+)\] \*/,Dt=/,? & /,zt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Vt=/[()=,{}\[\]\/\s]/,qt=/\\(\\)?/g,Wt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ht=/\w*$/,Kt=/^[-+]0x[0-9a-f]+$/i,Zt=/^0b[01]+$/i,Yt=/^\[object .+?Constructor\]$/,Jt=/^0o[0-7]+$/i,Xt=/^(?:0|[1-9]\d*)$/,Qt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,te=/($^)/,ee=/['\n\r\u2028\u2029\\]/g,ne="\\ud800-\\udfff",re="\\u0300-\\u036f",ie="\\ufe20-\\ufe2f",oe="\\u20d0-\\u20ff",ue=re+ie+oe,ae="\\u2700-\\u27bf",ce="a-z\\xdf-\\xf6\\xf8-\\xff",se="\\xac\\xb1\\xd7\\xf7",fe="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",le="\\u2000-\\u206f",pe=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",he="A-Z\\xc0-\\xd6\\xd8-\\xde",de="\\ufe0e\\ufe0f",ve=se+fe+le+pe,ge="['’]",ye="["+ne+"]",me="["+ve+"]",be="["+ue+"]",_e="\\d+",we="["+ae+"]",xe="["+ce+"]",je="[^"+ne+ve+_e+ae+ce+he+"]",ke="\\ud83c[\\udffb-\\udfff]",Oe="(?:"+be+"|"+ke+")",Se="[^"+ne+"]",Ae="(?:\\ud83c[\\udde6-\\uddff]){2}",Ee="[\\ud800-\\udbff][\\udc00-\\udfff]",Ie="["+he+"]",Ce="\\u200d",Le="(?:"+xe+"|"+je+")",Te="(?:"+Ie+"|"+je+")",Re="(?:"+ge+"(?:d|ll|m|re|s|t|ve))?",Ue="(?:"+ge+"(?:D|LL|M|RE|S|T|VE))?",Pe=Oe+"?",Ge="["+de+"]?",Be="(?:"+Ce+"(?:"+[Se,Ae,Ee].join("|")+")"+Ge+Pe+")*",$e="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Me="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Fe=Ge+Pe+Be,Ne="(?:"+[we,Ae,Ee].join("|")+")"+Fe,De="(?:"+[Se+be+"?",be,Ae,Ee,ye].join("|")+")",ze=RegExp(ge,"g"),Ve=RegExp(be,"g"),qe=RegExp(ke+"(?="+ke+")|"+De+Fe,"g"),We=RegExp([Ie+"?"+xe+"+"+Re+"(?="+[me,Ie,"$"].join("|")+")",Te+"+"+Ue+"(?="+[me,Ie+Le,"$"].join("|")+")",Ie+"?"+Le+"+"+Re,Ie+"+"+Ue,Me,$e,_e,Ne].join("|"),"g"),He=RegExp("["+Ce+ne+ue+de+"]"),Ke=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ze=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Ye=-1,Je={};Je[dt]=Je[vt]=Je[gt]=Je[yt]=Je[mt]=Je[bt]=Je[_t]=Je[wt]=Je[xt]=!0,Je[V]=Je[q]=Je[pt]=Je[H]=Je[ht]=Je[K]=Je[Y]=Je[J]=Je[Q]=Je[tt]=Je[nt]=Je[ot]=Je[ut]=Je[at]=Je[ft]=!1;var Xe={};Xe[V]=Xe[q]=Xe[pt]=Xe[ht]=Xe[H]=Xe[K]=Xe[dt]=Xe[vt]=Xe[gt]=Xe[yt]=Xe[mt]=Xe[Q]=Xe[tt]=Xe[nt]=Xe[ot]=Xe[ut]=Xe[at]=Xe[ct]=Xe[bt]=Xe[_t]=Xe[wt]=Xe[xt]=!0,Xe[Y]=Xe[J]=Xe[ft]=!1;var Qe={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},tn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},en={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},nn={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},rn=parseFloat,on=parseInt,un="object"==typeof t&&t&&t.Object===Object&&t,an="object"==typeof self&&self&&self.Object===Object&&self,cn=un||an||Function("return this")(),sn=e&&!e.nodeType&&e,fn=sn&&"object"==typeof r&&r&&!r.nodeType&&r,ln=fn&&fn.exports===sn,pn=ln&&un.process,hn=function(){try{var t=fn&&fn.require&&fn.require("util").types;return t||pn&&pn.binding&&pn.binding("util")}catch(e){}}(),dn=hn&&hn.isArrayBuffer,vn=hn&&hn.isDate,gn=hn&&hn.isMap,yn=hn&&hn.isRegExp,mn=hn&&hn.isSet,bn=hn&&hn.isTypedArray;function _n(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function wn(t,e,n,r){var i=-1,o=null==t?0:t.length;while(++i<o){var u=t[i];e(r,u,n(u),t)}return r}function xn(t,e){var n=-1,r=null==t?0:t.length;while(++n<r)if(!1===e(t[n],n,t))break;return t}function jn(t,e){var n=null==t?0:t.length;while(n--)if(!1===e(t[n],n,t))break;return t}function kn(t,e){var n=-1,r=null==t?0:t.length;while(++n<r)if(!e(t[n],n,t))return!1;return!0}function On(t,e){var n=-1,r=null==t?0:t.length,i=0,o=[];while(++n<r){var u=t[n];e(u,n,t)&&(o[i++]=u)}return o}function Sn(t,e){var n=null==t?0:t.length;return!!n&&$n(t,e,0)>-1}function An(t,e,n){var r=-1,i=null==t?0:t.length;while(++r<i)if(n(e,t[r]))return!0;return!1}function En(t,e){var n=-1,r=null==t?0:t.length,i=Array(r);while(++n<r)i[n]=e(t[n],n,t);return i}function In(t,e){var n=-1,r=e.length,i=t.length;while(++n<r)t[i+n]=e[n];return t}function Cn(t,e,n,r){var i=-1,o=null==t?0:t.length;r&&o&&(n=t[++i]);while(++i<o)n=e(n,t[i],i,t);return n}function Ln(t,e,n,r){var i=null==t?0:t.length;r&&i&&(n=t[--i]);while(i--)n=e(n,t[i],i,t);return n}function Tn(t,e){var n=-1,r=null==t?0:t.length;while(++n<r)if(e(t[n],n,t))return!0;return!1}var Rn=Dn("length");function Un(t){return t.split("")}function Pn(t){return t.match(zt)||[]}function Gn(t,e,n){var r;return n(t,(function(t,n,i){if(e(t,n,i))return r=n,!1})),r}function Bn(t,e,n,r){var i=t.length,o=n+(r?1:-1);while(r?o--:++o<i)if(e(t[o],o,t))return o;return-1}function $n(t,e,n){return e===e?dr(t,e,n):Bn(t,Fn,n)}function Mn(t,e,n,r){var i=n-1,o=t.length;while(++i<o)if(r(t[i],e))return i;return-1}function Fn(t){return t!==t}function Nn(t,e){var n=null==t?0:t.length;return n?Wn(t,e)/n:M}function Dn(t){return function(e){return null==e?o:e[t]}}function zn(t){return function(e){return null==t?o:t[e]}}function Vn(t,e,n,r,i){return i(t,(function(t,i,o){n=r?(r=!1,t):e(n,t,i,o)})),n}function qn(t,e){var n=t.length;t.sort(e);while(n--)t[n]=t[n].value;return t}function Wn(t,e){var n,r=-1,i=t.length;while(++r<i){var u=e(t[r]);u!==o&&(n=n===o?u:n+u)}return n}function Hn(t,e){var n=-1,r=Array(t);while(++n<t)r[n]=e(n);return r}function Kn(t,e){return En(e,(function(e){return[e,t[e]]}))}function Zn(t){return t?t.slice(0,mr(t)+1).replace($t,""):t}function Yn(t){return function(e){return t(e)}}function Jn(t,e){return En(e,(function(e){return t[e]}))}function Xn(t,e){return t.has(e)}function Qn(t,e){var n=-1,r=t.length;while(++n<r&&$n(e,t[n],0)>-1);return n}function tr(t,e){var n=t.length;while(n--&&$n(e,t[n],0)>-1);return n}function er(t,e){var n=t.length,r=0;while(n--)t[n]===e&&++r;return r}var nr=zn(Qe),rr=zn(tn);function ir(t){return"\\"+nn[t]}function or(t,e){return null==t?o:t[e]}function ur(t){return He.test(t)}function ar(t){return Ke.test(t)}function cr(t){var e,n=[];while(!(e=t.next()).done)n.push(e.value);return n}function sr(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function fr(t,e){return function(n){return t(e(n))}}function lr(t,e){var n=-1,r=t.length,i=0,o=[];while(++n<r){var u=t[n];u!==e&&u!==h||(t[n]=h,o[i++]=n)}return o}function pr(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}function hr(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=[t,t]})),n}function dr(t,e,n){var r=n-1,i=t.length;while(++r<i)if(t[r]===e)return r;return-1}function vr(t,e,n){var r=n+1;while(r--)if(t[r]===e)return r;return r}function gr(t){return ur(t)?_r(t):Rn(t)}function yr(t){return ur(t)?wr(t):Un(t)}function mr(t){var e=t.length;while(e--&&Mt.test(t.charAt(e)));return e}var br=zn(en);function _r(t){var e=qe.lastIndex=0;while(qe.test(t))++e;return e}function wr(t){return t.match(qe)||[]}function xr(t){return t.match(We)||[]}var jr=function t(e){e=null==e?cn:kr.defaults(cn.Object(),e,kr.pick(cn,Ze));var n=e.Array,r=e.Date,i=e.Error,Mt=e.Function,zt=e.Math,ne=e.Object,re=e.RegExp,ie=e.String,oe=e.TypeError,ue=n.prototype,ae=Mt.prototype,ce=ne.prototype,se=e["__core-js_shared__"],fe=ae.toString,le=ce.hasOwnProperty,pe=0,he=function(){var t=/[^.]+$/.exec(se&&se.keys&&se.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),de=ce.toString,ve=fe.call(ne),ge=cn._,ye=re("^"+fe.call(le).replace(Gt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),me=ln?e.Buffer:o,be=e.Symbol,_e=e.Uint8Array,we=me?me.allocUnsafe:o,xe=fr(ne.getPrototypeOf,ne),je=ne.create,ke=ce.propertyIsEnumerable,Oe=ue.splice,Se=be?be.isConcatSpreadable:o,Ae=be?be.iterator:o,Ee=be?be.toStringTag:o,Ie=function(){try{var t=Hu(ne,"defineProperty");return t({},"",{}),t}catch(e){}}(),Ce=e.clearTimeout!==cn.clearTimeout&&e.clearTimeout,Le=r&&r.now!==cn.Date.now&&r.now,Te=e.setTimeout!==cn.setTimeout&&e.setTimeout,Re=zt.ceil,Ue=zt.floor,Pe=ne.getOwnPropertySymbols,Ge=me?me.isBuffer:o,Be=e.isFinite,$e=ue.join,Me=fr(ne.keys,ne),Fe=zt.max,Ne=zt.min,De=r.now,qe=e.parseInt,We=zt.random,He=ue.reverse,Ke=Hu(e,"DataView"),Qe=Hu(e,"Map"),tn=Hu(e,"Promise"),en=Hu(e,"Set"),nn=Hu(e,"WeakMap"),un=Hu(ne,"create"),an=nn&&new nn,sn={},fn=Ta(Ke),pn=Ta(Qe),hn=Ta(tn),Rn=Ta(en),Un=Ta(nn),zn=be?be.prototype:o,dr=zn?zn.valueOf:o,_r=zn?zn.toString:o;function wr(t){if(Sf(t)&&!sf(t)&&!(t instanceof Ar)){if(t instanceof Sr)return t;if(le.call(t,"__wrapped__"))return Ua(t)}return new Sr(t)}var jr=function(){function t(){}return function(e){if(!Of(e))return{};if(je)return je(e);t.prototype=e;var n=new t;return t.prototype=o,n}}();function Or(){}function Sr(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=o}function Ar(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=F,this.__views__=[]}function Er(){var t=new Ar(this.__wrapped__);return t.__actions__=iu(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=iu(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=iu(this.__views__),t}function Ir(){if(this.__filtered__){var t=new Ar(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function Cr(){var t=this.__wrapped__.value(),e=this.__dir__,n=sf(t),r=e<0,i=n?t.length:0,o=Xu(0,i,this.__views__),u=o.start,a=o.end,c=a-u,s=r?a:u-1,f=this.__iteratees__,l=f.length,p=0,h=Ne(c,this.__takeCount__);if(!n||!r&&i==c&&h==c)return Mo(t,this.__actions__);var d=[];t:while(c--&&p<h){s+=e;var v=-1,g=t[s];while(++v<l){var y=f[v],m=y.iteratee,b=y.type,_=m(g);if(b==U)g=_;else if(!_){if(b==R)continue t;break t}}d[p++]=g}return d}function Lr(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function Tr(){this.__data__=un?un(null):{},this.size=0}function Rr(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}function Ur(t){var e=this.__data__;if(un){var n=e[t];return n===l?o:n}return le.call(e,t)?e[t]:o}function Pr(t){var e=this.__data__;return un?e[t]!==o:le.call(e,t)}function Gr(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=un&&e===o?l:e,this}function Br(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function $r(){this.__data__=[],this.size=0}function Mr(t){var e=this.__data__,n=fi(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Oe.call(e,n,1),--this.size,!0}function Fr(t){var e=this.__data__,n=fi(e,t);return n<0?o:e[n][1]}function Nr(t){return fi(this.__data__,t)>-1}function Dr(t,e){var n=this.__data__,r=fi(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function zr(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function Vr(){this.size=0,this.__data__={hash:new Lr,map:new(Qe||Br),string:new Lr}}function qr(t){var e=qu(this,t)["delete"](t);return this.size-=e?1:0,e}function Wr(t){return qu(this,t).get(t)}function Hr(t){return qu(this,t).has(t)}function Kr(t,e){var n=qu(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Zr(t){var e=-1,n=null==t?0:t.length;this.__data__=new zr;while(++e<n)this.add(t[e])}function Yr(t){return this.__data__.set(t,l),this}function Jr(t){return this.__data__.has(t)}function Xr(t){var e=this.__data__=new Br(t);this.size=e.size}function Qr(){this.__data__=new Br,this.size=0}function ti(t){var e=this.__data__,n=e["delete"](t);return this.size=e.size,n}function ei(t){return this.__data__.get(t)}function ni(t){return this.__data__.has(t)}function ri(t,e){var n=this.__data__;if(n instanceof Br){var r=n.__data__;if(!Qe||r.length<a-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new zr(r)}return n.set(t,e),this.size=n.size,this}function ii(t,e){var n=sf(t),r=!n&&cf(t),i=!n&&!r&&df(t),o=!n&&!r&&!i&&Nf(t),u=n||r||i||o,a=u?Hn(t.length,ie):[],c=a.length;for(var s in t)!e&&!le.call(t,s)||u&&("length"==s||i&&("offset"==s||"parent"==s)||o&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||ua(s,c))||a.push(s);return a}function oi(t){var e=t.length;return e?t[mo(0,e-1)]:o}function ui(t,e){return Ia(iu(t),gi(e,0,t.length))}function ai(t){return Ia(iu(t))}function ci(t,e,n){(n!==o&&!of(t[e],n)||n===o&&!(e in t))&&di(t,e,n)}function si(t,e,n){var r=t[e];le.call(t,e)&&of(r,n)&&(n!==o||e in t)||di(t,e,n)}function fi(t,e){var n=t.length;while(n--)if(of(t[n][0],e))return n;return-1}function li(t,e,n,r){return xi(t,(function(t,i,o){e(r,t,n(t),o)})),r}function pi(t,e){return t&&ou(e,jl(e),t)}function hi(t,e){return t&&ou(e,kl(e),t)}function di(t,e,n){"__proto__"==e&&Ie?Ie(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function vi(t,e){var r=-1,i=e.length,u=n(i),a=null==t;while(++r<i)u[r]=a?o:yl(t,e[r]);return u}function gi(t,e,n){return t===t&&(n!==o&&(t=t<=n?t:n),e!==o&&(t=t>=e?t:e)),t}function yi(t,e,n,r,i,u){var a,c=e&d,s=e&v,f=e&g;if(n&&(a=i?n(t,r,i,u):n(t)),a!==o)return a;if(!Of(t))return t;var l=sf(t);if(l){if(a=ea(t),!c)return iu(t,a)}else{var p=Ju(t),h=p==J||p==X;if(df(t))return Ko(t,c);if(p==nt||p==V||h&&!i){if(a=s||h?{}:na(t),!c)return s?au(t,hi(a,t)):uu(t,pi(a,t))}else{if(!Xe[p])return i?t:{};a=ra(t,p,c)}}u||(u=new Xr);var y=u.get(t);if(y)return y;u.set(t,a),$f(t)?t.forEach((function(r){a.add(yi(r,e,n,r,t,u))})):Af(t)&&t.forEach((function(r,i){a.set(i,yi(r,e,n,i,t,u))}));var m=f?s?Fu:Mu:s?kl:jl,b=l?o:m(t);return xn(b||t,(function(r,i){b&&(i=r,r=t[i]),si(a,i,yi(r,e,n,i,t,u))})),a}function mi(t){var e=jl(t);return function(n){return bi(n,t,e)}}function bi(t,e,n){var r=n.length;if(null==t)return!r;t=ne(t);while(r--){var i=n[r],u=e[i],a=t[i];if(a===o&&!(i in t)||!u(a))return!1}return!0}function _i(t,e,n){if("function"!=typeof t)throw new oe(s);return Oa((function(){t.apply(o,n)}),e)}function wi(t,e,n,r){var i=-1,o=Sn,u=!0,c=t.length,s=[],f=e.length;if(!c)return s;n&&(e=En(e,Yn(n))),r?(o=An,u=!1):e.length>=a&&(o=Xn,u=!1,e=new Zr(e));t:while(++i<c){var l=t[i],p=null==n?l:n(l);if(l=r||0!==l?l:0,u&&p===p){var h=f;while(h--)if(e[h]===p)continue t;s.push(l)}else o(e,p,r)||s.push(l)}return s}wr.templateSettings={escape:Ct,evaluate:Lt,interpolate:Tt,variable:"",imports:{_:wr}},wr.prototype=Or.prototype,wr.prototype.constructor=wr,Sr.prototype=jr(Or.prototype),Sr.prototype.constructor=Sr,Ar.prototype=jr(Or.prototype),Ar.prototype.constructor=Ar,Lr.prototype.clear=Tr,Lr.prototype["delete"]=Rr,Lr.prototype.get=Ur,Lr.prototype.has=Pr,Lr.prototype.set=Gr,Br.prototype.clear=$r,Br.prototype["delete"]=Mr,Br.prototype.get=Fr,Br.prototype.has=Nr,Br.prototype.set=Dr,zr.prototype.clear=Vr,zr.prototype["delete"]=qr,zr.prototype.get=Wr,zr.prototype.has=Hr,zr.prototype.set=Kr,Zr.prototype.add=Zr.prototype.push=Yr,Zr.prototype.has=Jr,Xr.prototype.clear=Qr,Xr.prototype["delete"]=ti,Xr.prototype.get=ei,Xr.prototype.has=ni,Xr.prototype.set=ri;var xi=fu(Li),ji=fu(Ti,!0);function ki(t,e){var n=!0;return xi(t,(function(t,r,i){return n=!!e(t,r,i),n})),n}function Oi(t,e,n){var r=-1,i=t.length;while(++r<i){var u=t[r],a=e(u);if(null!=a&&(c===o?a===a&&!Ff(a):n(a,c)))var c=a,s=u}return s}function Si(t,e,n,r){var i=t.length;n=Zf(n),n<0&&(n=-n>i?0:i+n),r=r===o||r>i?i:Zf(r),r<0&&(r+=i),r=n>r?0:Yf(r);while(n<r)t[n++]=e;return t}function Ai(t,e){var n=[];return xi(t,(function(t,r,i){e(t,r,i)&&n.push(t)})),n}function Ei(t,e,n,r,i){var o=-1,u=t.length;n||(n=oa),i||(i=[]);while(++o<u){var a=t[o];e>0&&n(a)?e>1?Ei(a,e-1,n,r,i):In(i,a):r||(i[i.length]=a)}return i}var Ii=lu(),Ci=lu(!0);function Li(t,e){return t&&Ii(t,e,jl)}function Ti(t,e){return t&&Ci(t,e,jl)}function Ri(t,e){return On(e,(function(e){return xf(t[e])}))}function Ui(t,e){e=Vo(e,t);var n=0,r=e.length;while(null!=t&&n<r)t=t[La(e[n++])];return n&&n==r?t:o}function Pi(t,e,n){var r=e(t);return sf(t)?r:In(r,n(t))}function Gi(t){return null==t?t===o?st:et:Ee&&Ee in ne(t)?Ku(t):ba(t)}function Bi(t,e){return t>e}function $i(t,e){return null!=t&&le.call(t,e)}function Mi(t,e){return null!=t&&e in ne(t)}function Fi(t,e,n){return t>=Ne(e,n)&&t<Fe(e,n)}function Ni(t,e,r){var i=r?An:Sn,u=t[0].length,a=t.length,c=a,s=n(a),f=1/0,l=[];while(c--){var p=t[c];c&&e&&(p=En(p,Yn(e))),f=Ne(p.length,f),s[c]=!r&&(e||u>=120&&p.length>=120)?new Zr(c&&p):o}p=t[0];var h=-1,d=s[0];t:while(++h<u&&l.length<f){var v=p[h],g=e?e(v):v;if(v=r||0!==v?v:0,!(d?Xn(d,g):i(l,g,r))){c=a;while(--c){var y=s[c];if(!(y?Xn(y,g):i(t[c],g,r)))continue t}d&&d.push(g),l.push(v)}}return l}function Di(t,e,n,r){return Li(t,(function(t,i,o){e(r,n(t),i,o)})),r}function zi(t,e,n){e=Vo(e,t),t=wa(t,e);var r=null==t?t:t[La(oc(e))];return null==r?o:_n(r,t,n)}function Vi(t){return Sf(t)&&Gi(t)==V}function qi(t){return Sf(t)&&Gi(t)==pt}function Wi(t){return Sf(t)&&Gi(t)==K}function Hi(t,e,n,r,i){return t===e||(null==t||null==e||!Sf(t)&&!Sf(e)?t!==t&&e!==e:Ki(t,e,n,r,Hi,i))}function Ki(t,e,n,r,i,o){var u=sf(t),a=sf(e),c=u?q:Ju(t),s=a?q:Ju(e);c=c==V?nt:c,s=s==V?nt:s;var f=c==nt,l=s==nt,p=c==s;if(p&&df(t)){if(!df(e))return!1;u=!0,f=!1}if(p&&!f)return o||(o=new Xr),u||Nf(t)?Pu(t,e,n,r,i,o):Gu(t,e,c,n,r,i,o);if(!(n&y)){var h=f&&le.call(t,"__wrapped__"),d=l&&le.call(e,"__wrapped__");if(h||d){var v=h?t.value():t,g=d?e.value():e;return o||(o=new Xr),i(v,g,n,r,o)}}return!!p&&(o||(o=new Xr),Bu(t,e,n,r,i,o))}function Zi(t){return Sf(t)&&Ju(t)==Q}function Yi(t,e,n,r){var i=n.length,u=i,a=!r;if(null==t)return!u;t=ne(t);while(i--){var c=n[i];if(a&&c[2]?c[1]!==t[c[0]]:!(c[0]in t))return!1}while(++i<u){c=n[i];var s=c[0],f=t[s],l=c[1];if(a&&c[2]){if(f===o&&!(s in t))return!1}else{var p=new Xr;if(r)var h=r(f,l,s,t,e,p);if(!(h===o?Hi(l,f,y|m,r,p):h))return!1}}return!0}function Ji(t){if(!Of(t)||la(t))return!1;var e=xf(t)?ye:Yt;return e.test(Ta(t))}function Xi(t){return Sf(t)&&Gi(t)==ot}function Qi(t){return Sf(t)&&Ju(t)==ut}function to(t){return Sf(t)&&kf(t.length)&&!!Je[Gi(t)]}function eo(t){return"function"==typeof t?t:null==t?Lp:"object"==typeof t?sf(t)?ao(t[0],t[1]):uo(t):Vp(t)}function no(t){if(!ha(t))return Me(t);var e=[];for(var n in ne(t))le.call(t,n)&&"constructor"!=n&&e.push(n);return e}function ro(t){if(!Of(t))return ma(t);var e=ha(t),n=[];for(var r in t)("constructor"!=r||!e&&le.call(t,r))&&n.push(r);return n}function io(t,e){return t<e}function oo(t,e){var r=-1,i=lf(t)?n(t.length):[];return xi(t,(function(t,n,o){i[++r]=e(t,n,o)})),i}function uo(t){var e=Wu(t);return 1==e.length&&e[0][2]?va(e[0][0],e[0][1]):function(n){return n===t||Yi(n,t,e)}}function ao(t,e){return ca(t)&&da(e)?va(La(t),e):function(n){var r=yl(n,t);return r===o&&r===e?bl(n,t):Hi(e,r,y|m)}}function co(t,e,n,r,i){t!==e&&Ii(e,(function(u,a){if(i||(i=new Xr),Of(u))so(t,e,a,n,co,r,i);else{var c=r?r(ja(t,a),u,a+"",t,e,i):o;c===o&&(c=u),ci(t,a,c)}}),kl)}function so(t,e,n,r,i,u,a){var c=ja(t,n),s=ja(e,n),f=a.get(s);if(f)ci(t,n,f);else{var l=u?u(c,s,n+"",t,e,a):o,p=l===o;if(p){var h=sf(s),d=!h&&df(s),v=!h&&!d&&Nf(s);l=s,h||d||v?sf(c)?l=c:pf(c)?l=iu(c):d?(p=!1,l=Ko(s,!0)):v?(p=!1,l=Qo(s,!0)):l=[]:Pf(s)||cf(s)?(l=c,cf(c)?l=Xf(c):Of(c)&&!xf(c)||(l=na(s))):p=!1}p&&(a.set(s,l),i(l,s,r,u,a),a["delete"](s)),ci(t,n,l)}}function fo(t,e){var n=t.length;if(n)return e+=e<0?n:0,ua(e,n)?t[e]:o}function lo(t,e,n){e=e.length?En(e,(function(t){return sf(t)?function(e){return Ui(e,1===t.length?t[0]:t)}:t})):[Lp];var r=-1;e=En(e,Yn(Vu()));var i=oo(t,(function(t,n,i){var o=En(e,(function(e){return e(t)}));return{criteria:o,index:++r,value:t}}));return qn(i,(function(t,e){return eu(t,e,n)}))}function po(t,e){return ho(t,e,(function(e,n){return bl(t,n)}))}function ho(t,e,n){var r=-1,i=e.length,o={};while(++r<i){var u=e[r],a=Ui(t,u);n(a,u)&&ko(o,Vo(u,t),a)}return o}function vo(t){return function(e){return Ui(e,t)}}function go(t,e,n,r){var i=r?Mn:$n,o=-1,u=e.length,a=t;t===e&&(e=iu(e)),n&&(a=En(t,Yn(n)));while(++o<u){var c=0,s=e[o],f=n?n(s):s;while((c=i(a,f,c,r))>-1)a!==t&&Oe.call(a,c,1),Oe.call(t,c,1)}return t}function yo(t,e){var n=t?e.length:0,r=n-1;while(n--){var i=e[n];if(n==r||i!==o){var o=i;ua(i)?Oe.call(t,i,1):Go(t,i)}}return t}function mo(t,e){return t+Ue(We()*(e-t+1))}function bo(t,e,r,i){var o=-1,u=Fe(Re((e-t)/(r||1)),0),a=n(u);while(u--)a[i?u:++o]=t,t+=r;return a}function _o(t,e){var n="";if(!t||e<1||e>B)return n;do{e%2&&(n+=t),e=Ue(e/2),e&&(t+=t)}while(e);return n}function wo(t,e){return Sa(_a(t,e,Lp),t+"")}function xo(t){return oi(Dl(t))}function jo(t,e){var n=Dl(t);return Ia(n,gi(e,0,n.length))}function ko(t,e,n,r){if(!Of(t))return t;e=Vo(e,t);var i=-1,u=e.length,a=u-1,c=t;while(null!=c&&++i<u){var s=La(e[i]),f=n;if("__proto__"===s||"constructor"===s||"prototype"===s)return t;if(i!=a){var l=c[s];f=r?r(l,s,c):o,f===o&&(f=Of(l)?l:ua(e[i+1])?[]:{})}si(c,s,f),c=c[s]}return t}var Oo=an?function(t,e){return an.set(t,e),t}:Lp,So=Ie?function(t,e){return Ie(t,"toString",{configurable:!0,enumerable:!1,value:Ap(e),writable:!0})}:Lp;function Ao(t){return Ia(Dl(t))}function Eo(t,e,r){var i=-1,o=t.length;e<0&&(e=-e>o?0:o+e),r=r>o?o:r,r<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;var u=n(o);while(++i<o)u[i]=t[i+e];return u}function Io(t,e){var n;return xi(t,(function(t,r,i){return n=e(t,r,i),!n})),!!n}function Co(t,e,n){var r=0,i=null==t?r:t.length;if("number"==typeof e&&e===e&&i<=D){while(r<i){var o=r+i>>>1,u=t[o];null!==u&&!Ff(u)&&(n?u<=e:u<e)?r=o+1:i=o}return i}return Lo(t,e,Lp,n)}function Lo(t,e,n,r){var i=0,u=null==t?0:t.length;if(0===u)return 0;e=n(e);var a=e!==e,c=null===e,s=Ff(e),f=e===o;while(i<u){var l=Ue((i+u)/2),p=n(t[l]),h=p!==o,d=null===p,v=p===p,g=Ff(p);if(a)var y=r||v;else y=f?v&&(r||h):c?v&&h&&(r||!d):s?v&&h&&!d&&(r||!g):!d&&!g&&(r?p<=e:p<e);y?i=l+1:u=l}return Ne(u,N)}function To(t,e){var n=-1,r=t.length,i=0,o=[];while(++n<r){var u=t[n],a=e?e(u):u;if(!n||!of(a,c)){var c=a;o[i++]=0===u?0:u}}return o}function Ro(t){return"number"==typeof t?t:Ff(t)?M:+t}function Uo(t){if("string"==typeof t)return t;if(sf(t))return En(t,Uo)+"";if(Ff(t))return _r?_r.call(t):"";var e=t+"";return"0"==e&&1/t==-G?"-0":e}function Po(t,e,n){var r=-1,i=Sn,o=t.length,u=!0,c=[],s=c;if(n)u=!1,i=An;else if(o>=a){var f=e?null:Iu(t);if(f)return pr(f);u=!1,i=Xn,s=new Zr}else s=e?[]:c;t:while(++r<o){var l=t[r],p=e?e(l):l;if(l=n||0!==l?l:0,u&&p===p){var h=s.length;while(h--)if(s[h]===p)continue t;e&&s.push(p),c.push(l)}else i(s,p,n)||(s!==c&&s.push(p),c.push(l))}return c}function Go(t,e){return e=Vo(e,t),t=wa(t,e),null==t||delete t[La(oc(e))]}function Bo(t,e,n,r){return ko(t,e,n(Ui(t,e)),r)}function $o(t,e,n,r){var i=t.length,o=r?i:-1;while((r?o--:++o<i)&&e(t[o],o,t));return n?Eo(t,r?0:o,r?o+1:i):Eo(t,r?o+1:0,r?i:o)}function Mo(t,e){var n=t;return n instanceof Ar&&(n=n.value()),Cn(e,(function(t,e){return e.func.apply(e.thisArg,In([t],e.args))}),n)}function Fo(t,e,r){var i=t.length;if(i<2)return i?Po(t[0]):[];var o=-1,u=n(i);while(++o<i){var a=t[o],c=-1;while(++c<i)c!=o&&(u[o]=wi(u[o]||a,t[c],e,r))}return Po(Ei(u,1),e,r)}function No(t,e,n){var r=-1,i=t.length,u=e.length,a={};while(++r<i){var c=r<u?e[r]:o;n(a,t[r],c)}return a}function Do(t){return pf(t)?t:[]}function zo(t){return"function"==typeof t?t:Lp}function Vo(t,e){return sf(t)?t:ca(t,e)?[t]:Ca(tl(t))}var qo=wo;function Wo(t,e,n){var r=t.length;return n=n===o?r:n,!e&&n>=r?t:Eo(t,e,n)}var Ho=Ce||function(t){return cn.clearTimeout(t)};function Ko(t,e){if(e)return t.slice();var n=t.length,r=we?we(n):new t.constructor(n);return t.copy(r),r}function Zo(t){var e=new t.constructor(t.byteLength);return new _e(e).set(new _e(t)),e}function Yo(t,e){var n=e?Zo(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}function Jo(t){var e=new t.constructor(t.source,Ht.exec(t));return e.lastIndex=t.lastIndex,e}function Xo(t){return dr?ne(dr.call(t)):{}}function Qo(t,e){var n=e?Zo(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function tu(t,e){if(t!==e){var n=t!==o,r=null===t,i=t===t,u=Ff(t),a=e!==o,c=null===e,s=e===e,f=Ff(e);if(!c&&!f&&!u&&t>e||u&&a&&s&&!c&&!f||r&&a&&s||!n&&s||!i)return 1;if(!r&&!u&&!f&&t<e||f&&n&&i&&!r&&!u||c&&n&&i||!a&&i||!s)return-1}return 0}function eu(t,e,n){var r=-1,i=t.criteria,o=e.criteria,u=i.length,a=n.length;while(++r<u){var c=tu(i[r],o[r]);if(c){if(r>=a)return c;var s=n[r];return c*("desc"==s?-1:1)}}return t.index-e.index}function nu(t,e,r,i){var o=-1,u=t.length,a=r.length,c=-1,s=e.length,f=Fe(u-a,0),l=n(s+f),p=!i;while(++c<s)l[c]=e[c];while(++o<a)(p||o<u)&&(l[r[o]]=t[o]);while(f--)l[c++]=t[o++];return l}function ru(t,e,r,i){var o=-1,u=t.length,a=-1,c=r.length,s=-1,f=e.length,l=Fe(u-c,0),p=n(l+f),h=!i;while(++o<l)p[o]=t[o];var d=o;while(++s<f)p[d+s]=e[s];while(++a<c)(h||o<u)&&(p[d+r[a]]=t[o++]);return p}function iu(t,e){var r=-1,i=t.length;e||(e=n(i));while(++r<i)e[r]=t[r];return e}function ou(t,e,n,r){var i=!n;n||(n={});var u=-1,a=e.length;while(++u<a){var c=e[u],s=r?r(n[c],t[c],c,n,t):o;s===o&&(s=t[c]),i?di(n,c,s):si(n,c,s)}return n}function uu(t,e){return ou(t,Zu(t),e)}function au(t,e){return ou(t,Yu(t),e)}function cu(t,e){return function(n,r){var i=sf(n)?wn:li,o=e?e():{};return i(n,t,Vu(r,2),o)}}function su(t){return wo((function(e,n){var r=-1,i=n.length,u=i>1?n[i-1]:o,a=i>2?n[2]:o;u=t.length>3&&"function"==typeof u?(i--,u):o,a&&aa(n[0],n[1],a)&&(u=i<3?o:u,i=1),e=ne(e);while(++r<i){var c=n[r];c&&t(e,c,r,u)}return e}))}function fu(t,e){return function(n,r){if(null==n)return n;if(!lf(n))return t(n,r);var i=n.length,o=e?i:-1,u=ne(n);while(e?o--:++o<i)if(!1===r(u[o],o,u))break;return n}}function lu(t){return function(e,n,r){var i=-1,o=ne(e),u=r(e),a=u.length;while(a--){var c=u[t?a:++i];if(!1===n(o[c],c,o))break}return e}}function pu(t,e,n){var r=e&b,i=vu(t);function o(){var e=this&&this!==cn&&this instanceof o?i:t;return e.apply(r?n:this,arguments)}return o}function hu(t){return function(e){e=tl(e);var n=ur(e)?yr(e):o,r=n?n[0]:e.charAt(0),i=n?Wo(n,1).join(""):e.slice(1);return r[t]()+i}}function du(t){return function(e){return Cn(xp(Zl(e).replace(ze,"")),t,"")}}function vu(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var n=jr(t.prototype),r=t.apply(n,e);return Of(r)?r:n}}function gu(t,e,r){var i=vu(t);function u(){var a=arguments.length,c=n(a),s=a,f=zu(u);while(s--)c[s]=arguments[s];var l=a<3&&c[0]!==f&&c[a-1]!==f?[]:lr(c,f);if(a-=l.length,a<r)return Au(t,e,bu,u.placeholder,o,c,l,o,o,r-a);var p=this&&this!==cn&&this instanceof u?i:t;return _n(p,this,c)}return u}function yu(t){return function(e,n,r){var i=ne(e);if(!lf(e)){var u=Vu(n,3);e=jl(e),n=function(t){return u(i[t],t,i)}}var a=t(e,n,r);return a>-1?i[u?e[a]:a]:o}}function mu(t){return $u((function(e){var n=e.length,r=n,i=Sr.prototype.thru;t&&e.reverse();while(r--){var u=e[r];if("function"!=typeof u)throw new oe(s);if(i&&!a&&"wrapper"==Du(u))var a=new Sr([],!0)}r=a?r:n;while(++r<n){u=e[r];var c=Du(u),f="wrapper"==c?Nu(u):o;a=f&&fa(f[0])&&f[1]==(S|x|k|A)&&!f[4].length&&1==f[9]?a[Du(f[0])].apply(a,f[3]):1==u.length&&fa(u)?a[c]():a.thru(u)}return function(){var t=arguments,r=t[0];if(a&&1==t.length&&sf(r))return a.plant(r).value();var i=0,o=n?e[i].apply(this,t):r;while(++i<n)o=e[i].call(this,o);return o}}))}function bu(t,e,r,i,u,a,c,s,f,l){var p=e&S,h=e&b,d=e&_,v=e&(x|j),g=e&E,y=d?o:vu(t);function m(){var o=arguments.length,b=n(o),_=o;while(_--)b[_]=arguments[_];if(v)var w=zu(m),x=er(b,w);if(i&&(b=nu(b,i,u,v)),a&&(b=ru(b,a,c,v)),o-=x,v&&o<l){var j=lr(b,w);return Au(t,e,bu,m.placeholder,r,b,j,s,f,l-o)}var k=h?r:this,O=d?k[t]:t;return o=b.length,s?b=xa(b,s):g&&o>1&&b.reverse(),p&&f<o&&(b.length=f),this&&this!==cn&&this instanceof m&&(O=y||vu(O)),O.apply(k,b)}return m}function _u(t,e){return function(n,r){return Di(n,t,e(r),{})}}function wu(t,e){return function(n,r){var i;if(n===o&&r===o)return e;if(n!==o&&(i=n),r!==o){if(i===o)return r;"string"==typeof n||"string"==typeof r?(n=Uo(n),r=Uo(r)):(n=Ro(n),r=Ro(r)),i=t(n,r)}return i}}function xu(t){return $u((function(e){return e=En(e,Yn(Vu())),wo((function(n){var r=this;return t(e,(function(t){return _n(t,r,n)}))}))}))}function ju(t,e){e=e===o?" ":Uo(e);var n=e.length;if(n<2)return n?_o(e,t):e;var r=_o(e,Re(t/gr(e)));return ur(e)?Wo(yr(r),0,t).join(""):r.slice(0,t)}function ku(t,e,r,i){var o=e&b,u=vu(t);function a(){var e=-1,c=arguments.length,s=-1,f=i.length,l=n(f+c),p=this&&this!==cn&&this instanceof a?u:t;while(++s<f)l[s]=i[s];while(c--)l[s++]=arguments[++e];return _n(p,o?r:this,l)}return a}function Ou(t){return function(e,n,r){return r&&"number"!=typeof r&&aa(e,n,r)&&(n=r=o),e=Kf(e),n===o?(n=e,e=0):n=Kf(n),r=r===o?e<n?1:-1:Kf(r),bo(e,n,r,t)}}function Su(t){return function(e,n){return"string"==typeof e&&"string"==typeof n||(e=Jf(e),n=Jf(n)),t(e,n)}}function Au(t,e,n,r,i,u,a,c,s,f){var l=e&x,p=l?a:o,h=l?o:a,d=l?u:o,v=l?o:u;e|=l?k:O,e&=~(l?O:k),e&w||(e&=~(b|_));var g=[t,e,i,d,p,v,h,c,s,f],y=n.apply(o,g);return fa(t)&&ka(y,g),y.placeholder=r,Aa(y,t,e)}function Eu(t){var e=zt[t];return function(t,n){if(t=Jf(t),n=null==n?0:Ne(Zf(n),292),n&&Be(t)){var r=(tl(t)+"e").split("e"),i=e(r[0]+"e"+(+r[1]+n));return r=(tl(i)+"e").split("e"),+(r[0]+"e"+(+r[1]-n))}return e(t)}}var Iu=en&&1/pr(new en([,-0]))[1]==G?function(t){return new en(t)}:Mp;function Cu(t){return function(e){var n=Ju(e);return n==Q?sr(e):n==ut?hr(e):Kn(e,t(e))}}function Lu(t,e,n,r,i,u,a,c){var f=e&_;if(!f&&"function"!=typeof t)throw new oe(s);var l=r?r.length:0;if(l||(e&=~(k|O),r=i=o),a=a===o?a:Fe(Zf(a),0),c=c===o?c:Zf(c),l-=i?i.length:0,e&O){var p=r,h=i;r=i=o}var d=f?o:Nu(t),v=[t,e,n,r,i,p,h,u,a,c];if(d&&ya(v,d),t=v[0],e=v[1],n=v[2],r=v[3],i=v[4],c=v[9]=v[9]===o?f?0:t.length:Fe(v[9]-l,0),!c&&e&(x|j)&&(e&=~(x|j)),e&&e!=b)g=e==x||e==j?gu(t,e,c):e!=k&&e!=(b|k)||i.length?bu.apply(o,v):ku(t,e,n,r);else var g=pu(t,e,n);var y=d?Oo:ka;return Aa(y(g,v),t,e)}function Tu(t,e,n,r){return t===o||of(t,ce[n])&&!le.call(r,n)?e:t}function Ru(t,e,n,r,i,u){return Of(t)&&Of(e)&&(u.set(e,t),co(t,e,o,Ru,u),u["delete"](e)),t}function Uu(t){return Pf(t)?o:t}function Pu(t,e,n,r,i,u){var a=n&y,c=t.length,s=e.length;if(c!=s&&!(a&&s>c))return!1;var f=u.get(t),l=u.get(e);if(f&&l)return f==e&&l==t;var p=-1,h=!0,d=n&m?new Zr:o;u.set(t,e),u.set(e,t);while(++p<c){var v=t[p],g=e[p];if(r)var b=a?r(g,v,p,e,t,u):r(v,g,p,t,e,u);if(b!==o){if(b)continue;h=!1;break}if(d){if(!Tn(e,(function(t,e){if(!Xn(d,e)&&(v===t||i(v,t,n,r,u)))return d.push(e)}))){h=!1;break}}else if(v!==g&&!i(v,g,n,r,u)){h=!1;break}}return u["delete"](t),u["delete"](e),h}function Gu(t,e,n,r,i,o,u){switch(n){case ht:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case pt:return!(t.byteLength!=e.byteLength||!o(new _e(t),new _e(e)));case H:case K:case tt:return of(+t,+e);case Y:return t.name==e.name&&t.message==e.message;case ot:case at:return t==e+"";case Q:var a=sr;case ut:var c=r&y;if(a||(a=pr),t.size!=e.size&&!c)return!1;var s=u.get(t);if(s)return s==e;r|=m,u.set(t,e);var f=Pu(a(t),a(e),r,i,o,u);return u["delete"](t),f;case ct:if(dr)return dr.call(t)==dr.call(e)}return!1}function Bu(t,e,n,r,i,u){var a=n&y,c=Mu(t),s=c.length,f=Mu(e),l=f.length;if(s!=l&&!a)return!1;var p=s;while(p--){var h=c[p];if(!(a?h in e:le.call(e,h)))return!1}var d=u.get(t),v=u.get(e);if(d&&v)return d==e&&v==t;var g=!0;u.set(t,e),u.set(e,t);var m=a;while(++p<s){h=c[p];var b=t[h],_=e[h];if(r)var w=a?r(_,b,h,e,t,u):r(b,_,h,t,e,u);if(!(w===o?b===_||i(b,_,n,r,u):w)){g=!1;break}m||(m="constructor"==h)}if(g&&!m){var x=t.constructor,j=e.constructor;x==j||!("constructor"in t)||!("constructor"in e)||"function"==typeof x&&x instanceof x&&"function"==typeof j&&j instanceof j||(g=!1)}return u["delete"](t),u["delete"](e),g}function $u(t){return Sa(_a(t,o,Ka),t+"")}function Mu(t){return Pi(t,jl,Zu)}function Fu(t){return Pi(t,kl,Yu)}var Nu=an?function(t){return an.get(t)}:Mp;function Du(t){var e=t.name+"",n=sn[e],r=le.call(sn,e)?n.length:0;while(r--){var i=n[r],o=i.func;if(null==o||o==t)return i.name}return e}function zu(t){var e=le.call(wr,"placeholder")?wr:t;return e.placeholder}function Vu(){var t=wr.iteratee||Tp;return t=t===Tp?eo:t,arguments.length?t(arguments[0],arguments[1]):t}function qu(t,e){var n=t.__data__;return sa(e)?n["string"==typeof e?"string":"hash"]:n.map}function Wu(t){var e=jl(t),n=e.length;while(n--){var r=e[n],i=t[r];e[n]=[r,i,da(i)]}return e}function Hu(t,e){var n=or(t,e);return Ji(n)?n:o}function Ku(t){var e=le.call(t,Ee),n=t[Ee];try{t[Ee]=o;var r=!0}catch(u){}var i=de.call(t);return r&&(e?t[Ee]=n:delete t[Ee]),i}var Zu=Pe?function(t){return null==t?[]:(t=ne(t),On(Pe(t),(function(e){return ke.call(t,e)})))}:Kp,Yu=Pe?function(t){var e=[];while(t)In(e,Zu(t)),t=xe(t);return e}:Kp,Ju=Gi;function Xu(t,e,n){var r=-1,i=n.length;while(++r<i){var o=n[r],u=o.size;switch(o.type){case"drop":t+=u;break;case"dropRight":e-=u;break;case"take":e=Ne(e,t+u);break;case"takeRight":t=Fe(t,e-u);break}}return{start:t,end:e}}function Qu(t){var e=t.match(Nt);return e?e[1].split(Dt):[]}function ta(t,e,n){e=Vo(e,t);var r=-1,i=e.length,o=!1;while(++r<i){var u=La(e[r]);if(!(o=null!=t&&n(t,u)))break;t=t[u]}return o||++r!=i?o:(i=null==t?0:t.length,!!i&&kf(i)&&ua(u,i)&&(sf(t)||cf(t)))}function ea(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&le.call(t,"index")&&(n.index=t.index,n.input=t.input),n}function na(t){return"function"!=typeof t.constructor||ha(t)?{}:jr(xe(t))}function ra(t,e,n){var r=t.constructor;switch(e){case pt:return Zo(t);case H:case K:return new r(+t);case ht:return Yo(t,n);case dt:case vt:case gt:case yt:case mt:case bt:case _t:case wt:case xt:return Qo(t,n);case Q:return new r;case tt:case at:return new r(t);case ot:return Jo(t);case ut:return new r;case ct:return Xo(t)}}function ia(t,e){var n=e.length;if(!n)return t;var r=n-1;return e[r]=(n>1?"& ":"")+e[r],e=e.join(n>2?", ":" "),t.replace(Ft,"{\n/* [wrapped with "+e+"] */\n")}function oa(t){return sf(t)||cf(t)||!!(Se&&t&&t[Se])}function ua(t,e){var n=typeof t;return e=null==e?B:e,!!e&&("number"==n||"symbol"!=n&&Xt.test(t))&&t>-1&&t%1==0&&t<e}function aa(t,e,n){if(!Of(n))return!1;var r=typeof e;return!!("number"==r?lf(n)&&ua(e,n.length):"string"==r&&e in n)&&of(n[e],t)}function ca(t,e){if(sf(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Ff(t))||(Ut.test(t)||!Rt.test(t)||null!=e&&t in ne(e))}function sa(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function fa(t){var e=Du(t),n=wr[e];if("function"!=typeof n||!(e in Ar.prototype))return!1;if(t===n)return!0;var r=Nu(n);return!!r&&t===r[0]}function la(t){return!!he&&he in t}(Ke&&Ju(new Ke(new ArrayBuffer(1)))!=ht||Qe&&Ju(new Qe)!=Q||tn&&Ju(tn.resolve())!=rt||en&&Ju(new en)!=ut||nn&&Ju(new nn)!=ft)&&(Ju=function(t){var e=Gi(t),n=e==nt?t.constructor:o,r=n?Ta(n):"";if(r)switch(r){case fn:return ht;case pn:return Q;case hn:return rt;case Rn:return ut;case Un:return ft}return e});var pa=se?xf:Zp;function ha(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||ce;return t===n}function da(t){return t===t&&!Of(t)}function va(t,e){return function(n){return null!=n&&(n[t]===e&&(e!==o||t in ne(n)))}}function ga(t){var e=Fs(t,(function(t){return n.size===p&&n.clear(),t})),n=e.cache;return e}function ya(t,e){var n=t[1],r=e[1],i=n|r,o=i<(b|_|S),u=r==S&&n==x||r==S&&n==A&&t[7].length<=e[8]||r==(S|A)&&e[7].length<=e[8]&&n==x;if(!o&&!u)return t;r&b&&(t[2]=e[2],i|=n&b?0:w);var a=e[3];if(a){var c=t[3];t[3]=c?nu(c,a,e[4]):a,t[4]=c?lr(t[3],h):e[4]}return a=e[5],a&&(c=t[5],t[5]=c?ru(c,a,e[6]):a,t[6]=c?lr(t[5],h):e[6]),a=e[7],a&&(t[7]=a),r&S&&(t[8]=null==t[8]?e[8]:Ne(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=i,t}function ma(t){var e=[];if(null!=t)for(var n in ne(t))e.push(n);return e}function ba(t){return de.call(t)}function _a(t,e,r){return e=Fe(e===o?t.length-1:e,0),function(){var i=arguments,o=-1,u=Fe(i.length-e,0),a=n(u);while(++o<u)a[o]=i[e+o];o=-1;var c=n(e+1);while(++o<e)c[o]=i[o];return c[e]=r(a),_n(t,this,c)}}function wa(t,e){return e.length<2?t:Ui(t,Eo(e,0,-1))}function xa(t,e){var n=t.length,r=Ne(e.length,n),i=iu(t);while(r--){var u=e[r];t[r]=ua(u,n)?i[u]:o}return t}function ja(t,e){if(("constructor"!==e||"function"!==typeof t[e])&&"__proto__"!=e)return t[e]}var ka=Ea(Oo),Oa=Te||function(t,e){return cn.setTimeout(t,e)},Sa=Ea(So);function Aa(t,e,n){var r=e+"";return Sa(t,ia(r,Ra(Qu(r),n)))}function Ea(t){var e=0,n=0;return function(){var r=De(),i=T-(r-n);if(n=r,i>0){if(++e>=L)return arguments[0]}else e=0;return t.apply(o,arguments)}}function Ia(t,e){var n=-1,r=t.length,i=r-1;e=e===o?r:e;while(++n<e){var u=mo(n,i),a=t[u];t[u]=t[n],t[n]=a}return t.length=e,t}var Ca=ga((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Pt,(function(t,n,r,i){e.push(r?i.replace(qt,"$1"):n||t)})),e}));function La(t){if("string"==typeof t||Ff(t))return t;var e=t+"";return"0"==e&&1/t==-G?"-0":e}function Ta(t){if(null!=t){try{return fe.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function Ra(t,e){return xn(z,(function(n){var r="_."+n[0];e&n[1]&&!Sn(t,r)&&t.push(r)})),t.sort()}function Ua(t){if(t instanceof Ar)return t.clone();var e=new Sr(t.__wrapped__,t.__chain__);return e.__actions__=iu(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}function Pa(t,e,r){e=(r?aa(t,e,r):e===o)?1:Fe(Zf(e),0);var i=null==t?0:t.length;if(!i||e<1)return[];var u=0,a=0,c=n(Re(i/e));while(u<i)c[a++]=Eo(t,u,u+=e);return c}function Ga(t){var e=-1,n=null==t?0:t.length,r=0,i=[];while(++e<n){var o=t[e];o&&(i[r++]=o)}return i}function Ba(){var t=arguments.length;if(!t)return[];var e=n(t-1),r=arguments[0],i=t;while(i--)e[i-1]=arguments[i];return In(sf(r)?iu(r):[r],Ei(e,1))}var $a=wo((function(t,e){return pf(t)?wi(t,Ei(e,1,pf,!0)):[]})),Ma=wo((function(t,e){var n=oc(e);return pf(n)&&(n=o),pf(t)?wi(t,Ei(e,1,pf,!0),Vu(n,2)):[]})),Fa=wo((function(t,e){var n=oc(e);return pf(n)&&(n=o),pf(t)?wi(t,Ei(e,1,pf,!0),o,n):[]}));function Na(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===o?1:Zf(e),Eo(t,e<0?0:e,r)):[]}function Da(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===o?1:Zf(e),e=r-e,Eo(t,0,e<0?0:e)):[]}function za(t,e){return t&&t.length?$o(t,Vu(e,3),!0,!0):[]}function Va(t,e){return t&&t.length?$o(t,Vu(e,3),!0):[]}function qa(t,e,n,r){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&aa(t,e,n)&&(n=0,r=i),Si(t,e,n,r)):[]}function Wa(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:Zf(n);return i<0&&(i=Fe(r+i,0)),Bn(t,Vu(e,3),i)}function Ha(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=r-1;return n!==o&&(i=Zf(n),i=n<0?Fe(r+i,0):Ne(i,r-1)),Bn(t,Vu(e,3),i,!0)}function Ka(t){var e=null==t?0:t.length;return e?Ei(t,1):[]}function Za(t){var e=null==t?0:t.length;return e?Ei(t,G):[]}function Ya(t,e){var n=null==t?0:t.length;return n?(e=e===o?1:Zf(e),Ei(t,e)):[]}function Ja(t){var e=-1,n=null==t?0:t.length,r={};while(++e<n){var i=t[e];r[i[0]]=i[1]}return r}function Xa(t){return t&&t.length?t[0]:o}function Qa(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:Zf(n);return i<0&&(i=Fe(r+i,0)),$n(t,e,i)}function tc(t){var e=null==t?0:t.length;return e?Eo(t,0,-1):[]}var ec=wo((function(t){var e=En(t,Do);return e.length&&e[0]===t[0]?Ni(e):[]})),nc=wo((function(t){var e=oc(t),n=En(t,Do);return e===oc(n)?e=o:n.pop(),n.length&&n[0]===t[0]?Ni(n,Vu(e,2)):[]})),rc=wo((function(t){var e=oc(t),n=En(t,Do);return e="function"==typeof e?e:o,e&&n.pop(),n.length&&n[0]===t[0]?Ni(n,o,e):[]}));function ic(t,e){return null==t?"":$e.call(t,e)}function oc(t){var e=null==t?0:t.length;return e?t[e-1]:o}function uc(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=r;return n!==o&&(i=Zf(n),i=i<0?Fe(r+i,0):Ne(i,r-1)),e===e?vr(t,e,i):Bn(t,Fn,i,!0)}function ac(t,e){return t&&t.length?fo(t,Zf(e)):o}var cc=wo(sc);function sc(t,e){return t&&t.length&&e&&e.length?go(t,e):t}function fc(t,e,n){return t&&t.length&&e&&e.length?go(t,e,Vu(n,2)):t}function lc(t,e,n){return t&&t.length&&e&&e.length?go(t,e,o,n):t}var pc=$u((function(t,e){var n=null==t?0:t.length,r=vi(t,e);return yo(t,En(e,(function(t){return ua(t,n)?+t:t})).sort(tu)),r}));function hc(t,e){var n=[];if(!t||!t.length)return n;var r=-1,i=[],o=t.length;e=Vu(e,3);while(++r<o){var u=t[r];e(u,r,t)&&(n.push(u),i.push(r))}return yo(t,i),n}function dc(t){return null==t?t:He.call(t)}function vc(t,e,n){var r=null==t?0:t.length;return r?(n&&"number"!=typeof n&&aa(t,e,n)?(e=0,n=r):(e=null==e?0:Zf(e),n=n===o?r:Zf(n)),Eo(t,e,n)):[]}function gc(t,e){return Co(t,e)}function yc(t,e,n){return Lo(t,e,Vu(n,2))}function mc(t,e){var n=null==t?0:t.length;if(n){var r=Co(t,e);if(r<n&&of(t[r],e))return r}return-1}function bc(t,e){return Co(t,e,!0)}function _c(t,e,n){return Lo(t,e,Vu(n,2),!0)}function wc(t,e){var n=null==t?0:t.length;if(n){var r=Co(t,e,!0)-1;if(of(t[r],e))return r}return-1}function xc(t){return t&&t.length?To(t):[]}function jc(t,e){return t&&t.length?To(t,Vu(e,2)):[]}function kc(t){var e=null==t?0:t.length;return e?Eo(t,1,e):[]}function Oc(t,e,n){return t&&t.length?(e=n||e===o?1:Zf(e),Eo(t,0,e<0?0:e)):[]}function Sc(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===o?1:Zf(e),e=r-e,Eo(t,e<0?0:e,r)):[]}function Ac(t,e){return t&&t.length?$o(t,Vu(e,3),!1,!0):[]}function Ec(t,e){return t&&t.length?$o(t,Vu(e,3)):[]}var Ic=wo((function(t){return Po(Ei(t,1,pf,!0))})),Cc=wo((function(t){var e=oc(t);return pf(e)&&(e=o),Po(Ei(t,1,pf,!0),Vu(e,2))})),Lc=wo((function(t){var e=oc(t);return e="function"==typeof e?e:o,Po(Ei(t,1,pf,!0),o,e)}));function Tc(t){return t&&t.length?Po(t):[]}function Rc(t,e){return t&&t.length?Po(t,Vu(e,2)):[]}function Uc(t,e){return e="function"==typeof e?e:o,t&&t.length?Po(t,o,e):[]}function Pc(t){if(!t||!t.length)return[];var e=0;return t=On(t,(function(t){if(pf(t))return e=Fe(t.length,e),!0})),Hn(e,(function(e){return En(t,Dn(e))}))}function Gc(t,e){if(!t||!t.length)return[];var n=Pc(t);return null==e?n:En(n,(function(t){return _n(e,o,t)}))}var Bc=wo((function(t,e){return pf(t)?wi(t,e):[]})),$c=wo((function(t){return Fo(On(t,pf))})),Mc=wo((function(t){var e=oc(t);return pf(e)&&(e=o),Fo(On(t,pf),Vu(e,2))})),Fc=wo((function(t){var e=oc(t);return e="function"==typeof e?e:o,Fo(On(t,pf),o,e)})),Nc=wo(Pc);function Dc(t,e){return No(t||[],e||[],si)}function zc(t,e){return No(t||[],e||[],ko)}var Vc=wo((function(t){var e=t.length,n=e>1?t[e-1]:o;return n="function"==typeof n?(t.pop(),n):o,Gc(t,n)}));function qc(t){var e=wr(t);return e.__chain__=!0,e}function Wc(t,e){return e(t),t}function Hc(t,e){return e(t)}var Kc=$u((function(t){var e=t.length,n=e?t[0]:0,r=this.__wrapped__,i=function(e){return vi(e,t)};return!(e>1||this.__actions__.length)&&r instanceof Ar&&ua(n)?(r=r.slice(n,+n+(e?1:0)),r.__actions__.push({func:Hc,args:[i],thisArg:o}),new Sr(r,this.__chain__).thru((function(t){return e&&!t.length&&t.push(o),t}))):this.thru(i)}));function Zc(){return qc(this)}function Yc(){return new Sr(this.value(),this.__chain__)}function Jc(){this.__values__===o&&(this.__values__=Hf(this.value()));var t=this.__index__>=this.__values__.length,e=t?o:this.__values__[this.__index__++];return{done:t,value:e}}function Xc(){return this}function Qc(t){var e,n=this;while(n instanceof Or){var r=Ua(n);r.__index__=0,r.__values__=o,e?i.__wrapped__=r:e=r;var i=r;n=n.__wrapped__}return i.__wrapped__=t,e}function ts(){var t=this.__wrapped__;if(t instanceof Ar){var e=t;return this.__actions__.length&&(e=new Ar(this)),e=e.reverse(),e.__actions__.push({func:Hc,args:[dc],thisArg:o}),new Sr(e,this.__chain__)}return this.thru(dc)}function es(){return Mo(this.__wrapped__,this.__actions__)}var ns=cu((function(t,e,n){le.call(t,n)?++t[n]:di(t,n,1)}));function rs(t,e,n){var r=sf(t)?kn:ki;return n&&aa(t,e,n)&&(e=o),r(t,Vu(e,3))}function is(t,e){var n=sf(t)?On:Ai;return n(t,Vu(e,3))}var os=yu(Wa),us=yu(Ha);function as(t,e){return Ei(gs(t,e),1)}function cs(t,e){return Ei(gs(t,e),G)}function ss(t,e,n){return n=n===o?1:Zf(n),Ei(gs(t,e),n)}function fs(t,e){var n=sf(t)?xn:xi;return n(t,Vu(e,3))}function ls(t,e){var n=sf(t)?jn:ji;return n(t,Vu(e,3))}var ps=cu((function(t,e,n){le.call(t,n)?t[n].push(e):di(t,n,[e])}));function hs(t,e,n,r){t=lf(t)?t:Dl(t),n=n&&!r?Zf(n):0;var i=t.length;return n<0&&(n=Fe(i+n,0)),Mf(t)?n<=i&&t.indexOf(e,n)>-1:!!i&&$n(t,e,n)>-1}var ds=wo((function(t,e,r){var i=-1,o="function"==typeof e,u=lf(t)?n(t.length):[];return xi(t,(function(t){u[++i]=o?_n(e,t,r):zi(t,e,r)})),u})),vs=cu((function(t,e,n){di(t,n,e)}));function gs(t,e){var n=sf(t)?En:oo;return n(t,Vu(e,3))}function ys(t,e,n,r){return null==t?[]:(sf(e)||(e=null==e?[]:[e]),n=r?o:n,sf(n)||(n=null==n?[]:[n]),lo(t,e,n))}var ms=cu((function(t,e,n){t[n?0:1].push(e)}),(function(){return[[],[]]}));function bs(t,e,n){var r=sf(t)?Cn:Vn,i=arguments.length<3;return r(t,Vu(e,4),n,i,xi)}function _s(t,e,n){var r=sf(t)?Ln:Vn,i=arguments.length<3;return r(t,Vu(e,4),n,i,ji)}function ws(t,e){var n=sf(t)?On:Ai;return n(t,Ns(Vu(e,3)))}function xs(t){var e=sf(t)?oi:xo;return e(t)}function js(t,e,n){e=(n?aa(t,e,n):e===o)?1:Zf(e);var r=sf(t)?ui:jo;return r(t,e)}function ks(t){var e=sf(t)?ai:Ao;return e(t)}function Os(t){if(null==t)return 0;if(lf(t))return Mf(t)?gr(t):t.length;var e=Ju(t);return e==Q||e==ut?t.size:no(t).length}function Ss(t,e,n){var r=sf(t)?Tn:Io;return n&&aa(t,e,n)&&(e=o),r(t,Vu(e,3))}var As=wo((function(t,e){if(null==t)return[];var n=e.length;return n>1&&aa(t,e[0],e[1])?e=[]:n>2&&aa(e[0],e[1],e[2])&&(e=[e[0]]),lo(t,Ei(e,1),[])})),Es=Le||function(){return cn.Date.now()};function Is(t,e){if("function"!=typeof e)throw new oe(s);return t=Zf(t),function(){if(--t<1)return e.apply(this,arguments)}}function Cs(t,e,n){return e=n?o:e,e=t&&null==e?t.length:e,Lu(t,S,o,o,o,o,e)}function Ls(t,e){var n;if("function"!=typeof e)throw new oe(s);return t=Zf(t),function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=o),n}}var Ts=wo((function(t,e,n){var r=b;if(n.length){var i=lr(n,zu(Ts));r|=k}return Lu(t,r,e,n,i)})),Rs=wo((function(t,e,n){var r=b|_;if(n.length){var i=lr(n,zu(Rs));r|=k}return Lu(e,r,t,n,i)}));function Us(t,e,n){e=n?o:e;var r=Lu(t,x,o,o,o,o,o,e);return r.placeholder=Us.placeholder,r}function Ps(t,e,n){e=n?o:e;var r=Lu(t,j,o,o,o,o,o,e);return r.placeholder=Ps.placeholder,r}function Gs(t,e,n){var r,i,u,a,c,f,l=0,p=!1,h=!1,d=!0;if("function"!=typeof t)throw new oe(s);function v(e){var n=r,u=i;return r=i=o,l=e,a=t.apply(u,n),a}function g(t){return l=t,c=Oa(b,e),p?v(t):a}function y(t){var n=t-f,r=t-l,i=e-n;return h?Ne(i,u-r):i}function m(t){var n=t-f,r=t-l;return f===o||n>=e||n<0||h&&r>=u}function b(){var t=Es();if(m(t))return _(t);c=Oa(b,y(t))}function _(t){return c=o,d&&r?v(t):(r=i=o,a)}function w(){c!==o&&Ho(c),l=0,r=f=i=c=o}function x(){return c===o?a:_(Es())}function j(){var t=Es(),n=m(t);if(r=arguments,i=this,f=t,n){if(c===o)return g(f);if(h)return Ho(c),c=Oa(b,e),v(f)}return c===o&&(c=Oa(b,e)),a}return e=Jf(e)||0,Of(n)&&(p=!!n.leading,h="maxWait"in n,u=h?Fe(Jf(n.maxWait)||0,e):u,d="trailing"in n?!!n.trailing:d),j.cancel=w,j.flush=x,j}var Bs=wo((function(t,e){return _i(t,1,e)})),$s=wo((function(t,e,n){return _i(t,Jf(e)||0,n)}));function Ms(t){return Lu(t,E)}function Fs(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new oe(s);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var u=t.apply(this,r);return n.cache=o.set(i,u)||o,u};return n.cache=new(Fs.Cache||zr),n}function Ns(t){if("function"!=typeof t)throw new oe(s);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function Ds(t){return Ls(2,t)}Fs.Cache=zr;var zs=qo((function(t,e){e=1==e.length&&sf(e[0])?En(e[0],Yn(Vu())):En(Ei(e,1),Yn(Vu()));var n=e.length;return wo((function(r){var i=-1,o=Ne(r.length,n);while(++i<o)r[i]=e[i].call(this,r[i]);return _n(t,this,r)}))})),Vs=wo((function(t,e){var n=lr(e,zu(Vs));return Lu(t,k,o,e,n)})),qs=wo((function(t,e){var n=lr(e,zu(qs));return Lu(t,O,o,e,n)})),Ws=$u((function(t,e){return Lu(t,A,o,o,o,e)}));function Hs(t,e){if("function"!=typeof t)throw new oe(s);return e=e===o?e:Zf(e),wo(t,e)}function Ks(t,e){if("function"!=typeof t)throw new oe(s);return e=null==e?0:Fe(Zf(e),0),wo((function(n){var r=n[e],i=Wo(n,0,e);return r&&In(i,r),_n(t,this,i)}))}function Zs(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new oe(s);return Of(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Gs(t,e,{leading:r,maxWait:e,trailing:i})}function Ys(t){return Cs(t,1)}function Js(t,e){return Vs(zo(e),t)}function Xs(){if(!arguments.length)return[];var t=arguments[0];return sf(t)?t:[t]}function Qs(t){return yi(t,g)}function tf(t,e){return e="function"==typeof e?e:o,yi(t,g,e)}function ef(t){return yi(t,d|g)}function nf(t,e){return e="function"==typeof e?e:o,yi(t,d|g,e)}function rf(t,e){return null==e||bi(t,e,jl(e))}function of(t,e){return t===e||t!==t&&e!==e}var uf=Su(Bi),af=Su((function(t,e){return t>=e})),cf=Vi(function(){return arguments}())?Vi:function(t){return Sf(t)&&le.call(t,"callee")&&!ke.call(t,"callee")},sf=n.isArray,ff=dn?Yn(dn):qi;function lf(t){return null!=t&&kf(t.length)&&!xf(t)}function pf(t){return Sf(t)&&lf(t)}function hf(t){return!0===t||!1===t||Sf(t)&&Gi(t)==H}var df=Ge||Zp,vf=vn?Yn(vn):Wi;function gf(t){return Sf(t)&&1===t.nodeType&&!Pf(t)}function yf(t){if(null==t)return!0;if(lf(t)&&(sf(t)||"string"==typeof t||"function"==typeof t.splice||df(t)||Nf(t)||cf(t)))return!t.length;var e=Ju(t);if(e==Q||e==ut)return!t.size;if(ha(t))return!no(t).length;for(var n in t)if(le.call(t,n))return!1;return!0}function mf(t,e){return Hi(t,e)}function bf(t,e,n){n="function"==typeof n?n:o;var r=n?n(t,e):o;return r===o?Hi(t,e,o,n):!!r}function _f(t){if(!Sf(t))return!1;var e=Gi(t);return e==Y||e==Z||"string"==typeof t.message&&"string"==typeof t.name&&!Pf(t)}function wf(t){return"number"==typeof t&&Be(t)}function xf(t){if(!Of(t))return!1;var e=Gi(t);return e==J||e==X||e==W||e==it}function jf(t){return"number"==typeof t&&t==Zf(t)}function kf(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=B}function Of(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Sf(t){return null!=t&&"object"==typeof t}var Af=gn?Yn(gn):Zi;function Ef(t,e){return t===e||Yi(t,e,Wu(e))}function If(t,e,n){return n="function"==typeof n?n:o,Yi(t,e,Wu(e),n)}function Cf(t){return Uf(t)&&t!=+t}function Lf(t){if(pa(t))throw new i(c);return Ji(t)}function Tf(t){return null===t}function Rf(t){return null==t}function Uf(t){return"number"==typeof t||Sf(t)&&Gi(t)==tt}function Pf(t){if(!Sf(t)||Gi(t)!=nt)return!1;var e=xe(t);if(null===e)return!0;var n=le.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&fe.call(n)==ve}var Gf=yn?Yn(yn):Xi;function Bf(t){return jf(t)&&t>=-B&&t<=B}var $f=mn?Yn(mn):Qi;function Mf(t){return"string"==typeof t||!sf(t)&&Sf(t)&&Gi(t)==at}function Ff(t){return"symbol"==typeof t||Sf(t)&&Gi(t)==ct}var Nf=bn?Yn(bn):to;function Df(t){return t===o}function zf(t){return Sf(t)&&Ju(t)==ft}function Vf(t){return Sf(t)&&Gi(t)==lt}var qf=Su(io),Wf=Su((function(t,e){return t<=e}));function Hf(t){if(!t)return[];if(lf(t))return Mf(t)?yr(t):iu(t);if(Ae&&t[Ae])return cr(t[Ae]());var e=Ju(t),n=e==Q?sr:e==ut?pr:Dl;return n(t)}function Kf(t){if(!t)return 0===t?t:0;if(t=Jf(t),t===G||t===-G){var e=t<0?-1:1;return e*$}return t===t?t:0}function Zf(t){var e=Kf(t),n=e%1;return e===e?n?e-n:e:0}function Yf(t){return t?gi(Zf(t),0,F):0}function Jf(t){if("number"==typeof t)return t;if(Ff(t))return M;if(Of(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Of(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=Zn(t);var n=Zt.test(t);return n||Jt.test(t)?on(t.slice(2),n?2:8):Kt.test(t)?M:+t}function Xf(t){return ou(t,kl(t))}function Qf(t){return t?gi(Zf(t),-B,B):0===t?t:0}function tl(t){return null==t?"":Uo(t)}var el=su((function(t,e){if(ha(e)||lf(e))ou(e,jl(e),t);else for(var n in e)le.call(e,n)&&si(t,n,e[n])})),nl=su((function(t,e){ou(e,kl(e),t)})),rl=su((function(t,e,n,r){ou(e,kl(e),t,r)})),il=su((function(t,e,n,r){ou(e,jl(e),t,r)})),ol=$u(vi);function ul(t,e){var n=jr(t);return null==e?n:pi(n,e)}var al=wo((function(t,e){t=ne(t);var n=-1,r=e.length,i=r>2?e[2]:o;i&&aa(e[0],e[1],i)&&(r=1);while(++n<r){var u=e[n],a=kl(u),c=-1,s=a.length;while(++c<s){var f=a[c],l=t[f];(l===o||of(l,ce[f])&&!le.call(t,f))&&(t[f]=u[f])}}return t})),cl=wo((function(t){return t.push(o,Ru),_n(El,o,t)}));function sl(t,e){return Gn(t,Vu(e,3),Li)}function fl(t,e){return Gn(t,Vu(e,3),Ti)}function ll(t,e){return null==t?t:Ii(t,Vu(e,3),kl)}function pl(t,e){return null==t?t:Ci(t,Vu(e,3),kl)}function hl(t,e){return t&&Li(t,Vu(e,3))}function dl(t,e){return t&&Ti(t,Vu(e,3))}function vl(t){return null==t?[]:Ri(t,jl(t))}function gl(t){return null==t?[]:Ri(t,kl(t))}function yl(t,e,n){var r=null==t?o:Ui(t,e);return r===o?n:r}function ml(t,e){return null!=t&&ta(t,e,$i)}function bl(t,e){return null!=t&&ta(t,e,Mi)}var _l=_u((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=de.call(e)),t[e]=n}),Ap(Lp)),wl=_u((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=de.call(e)),le.call(t,e)?t[e].push(n):t[e]=[n]}),Vu),xl=wo(zi);function jl(t){return lf(t)?ii(t):no(t)}function kl(t){return lf(t)?ii(t,!0):ro(t)}function Ol(t,e){var n={};return e=Vu(e,3),Li(t,(function(t,r,i){di(n,e(t,r,i),t)})),n}function Sl(t,e){var n={};return e=Vu(e,3),Li(t,(function(t,r,i){di(n,r,e(t,r,i))})),n}var Al=su((function(t,e,n){co(t,e,n)})),El=su((function(t,e,n,r){co(t,e,n,r)})),Il=$u((function(t,e){var n={};if(null==t)return n;var r=!1;e=En(e,(function(e){return e=Vo(e,t),r||(r=e.length>1),e})),ou(t,Fu(t),n),r&&(n=yi(n,d|v|g,Uu));var i=e.length;while(i--)Go(n,e[i]);return n}));function Cl(t,e){return Tl(t,Ns(Vu(e)))}var Ll=$u((function(t,e){return null==t?{}:po(t,e)}));function Tl(t,e){if(null==t)return{};var n=En(Fu(t),(function(t){return[t]}));return e=Vu(e),ho(t,n,(function(t,n){return e(t,n[0])}))}function Rl(t,e,n){e=Vo(e,t);var r=-1,i=e.length;i||(i=1,t=o);while(++r<i){var u=null==t?o:t[La(e[r])];u===o&&(r=i,u=n),t=xf(u)?u.call(t):u}return t}function Ul(t,e,n){return null==t?t:ko(t,e,n)}function Pl(t,e,n,r){return r="function"==typeof r?r:o,null==t?t:ko(t,e,n,r)}var Gl=Cu(jl),Bl=Cu(kl);function $l(t,e,n){var r=sf(t),i=r||df(t)||Nf(t);if(e=Vu(e,4),null==n){var o=t&&t.constructor;n=i?r?new o:[]:Of(t)&&xf(o)?jr(xe(t)):{}}return(i?xn:Li)(t,(function(t,r,i){return e(n,t,r,i)})),n}function Ml(t,e){return null==t||Go(t,e)}function Fl(t,e,n){return null==t?t:Bo(t,e,zo(n))}function Nl(t,e,n,r){return r="function"==typeof r?r:o,null==t?t:Bo(t,e,zo(n),r)}function Dl(t){return null==t?[]:Jn(t,jl(t))}function zl(t){return null==t?[]:Jn(t,kl(t))}function Vl(t,e,n){return n===o&&(n=e,e=o),n!==o&&(n=Jf(n),n=n===n?n:0),e!==o&&(e=Jf(e),e=e===e?e:0),gi(Jf(t),e,n)}function ql(t,e,n){return e=Kf(e),n===o?(n=e,e=0):n=Kf(n),t=Jf(t),Fi(t,e,n)}function Wl(t,e,n){if(n&&"boolean"!=typeof n&&aa(t,e,n)&&(e=n=o),n===o&&("boolean"==typeof e?(n=e,e=o):"boolean"==typeof t&&(n=t,t=o)),t===o&&e===o?(t=0,e=1):(t=Kf(t),e===o?(e=t,t=0):e=Kf(e)),t>e){var r=t;t=e,e=r}if(n||t%1||e%1){var i=We();return Ne(t+i*(e-t+rn("1e-"+((i+"").length-1))),e)}return mo(t,e)}var Hl=du((function(t,e,n){return e=e.toLowerCase(),t+(n?Kl(e):e)}));function Kl(t){return wp(tl(t).toLowerCase())}function Zl(t){return t=tl(t),t&&t.replace(Qt,nr).replace(Ve,"")}function Yl(t,e,n){t=tl(t),e=Uo(e);var r=t.length;n=n===o?r:gi(Zf(n),0,r);var i=n;return n-=e.length,n>=0&&t.slice(n,i)==e}function Jl(t){return t=tl(t),t&&It.test(t)?t.replace(At,rr):t}function Xl(t){return t=tl(t),t&&Bt.test(t)?t.replace(Gt,"\\$&"):t}var Ql=du((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()})),tp=du((function(t,e,n){return t+(n?" ":"")+e.toLowerCase()})),ep=hu("toLowerCase");function np(t,e,n){t=tl(t),e=Zf(e);var r=e?gr(t):0;if(!e||r>=e)return t;var i=(e-r)/2;return ju(Ue(i),n)+t+ju(Re(i),n)}function rp(t,e,n){t=tl(t),e=Zf(e);var r=e?gr(t):0;return e&&r<e?t+ju(e-r,n):t}function ip(t,e,n){t=tl(t),e=Zf(e);var r=e?gr(t):0;return e&&r<e?ju(e-r,n)+t:t}function op(t,e,n){return n||null==e?e=0:e&&(e=+e),qe(tl(t).replace($t,""),e||0)}function up(t,e,n){return e=(n?aa(t,e,n):e===o)?1:Zf(e),_o(tl(t),e)}function ap(){var t=arguments,e=tl(t[0]);return t.length<3?e:e.replace(t[1],t[2])}var cp=du((function(t,e,n){return t+(n?"_":"")+e.toLowerCase()}));function sp(t,e,n){return n&&"number"!=typeof n&&aa(t,e,n)&&(e=n=o),n=n===o?F:n>>>0,n?(t=tl(t),t&&("string"==typeof e||null!=e&&!Gf(e))&&(e=Uo(e),!e&&ur(t))?Wo(yr(t),0,n):t.split(e,n)):[]}var fp=du((function(t,e,n){return t+(n?" ":"")+wp(e)}));function lp(t,e,n){return t=tl(t),n=null==n?0:gi(Zf(n),0,t.length),e=Uo(e),t.slice(n,n+e.length)==e}function pp(t,e,n){var r=wr.templateSettings;n&&aa(t,e,n)&&(e=o),t=tl(t),e=rl({},e,r,Tu);var u,a,c=rl({},e.imports,r.imports,Tu),s=jl(c),l=Jn(c,s),p=0,h=e.interpolate||te,d="__p += '",v=re((e.escape||te).source+"|"+h.source+"|"+(h===Tt?Wt:te).source+"|"+(e.evaluate||te).source+"|$","g"),g="//# sourceURL="+(le.call(e,"sourceURL")?(e.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Ye+"]")+"\n";t.replace(v,(function(e,n,r,i,o,c){return r||(r=i),d+=t.slice(p,c).replace(ee,ir),n&&(u=!0,d+="' +\n__e("+n+") +\n'"),o&&(a=!0,d+="';\n"+o+";\n__p += '"),r&&(d+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),p=c+e.length,e})),d+="';\n";var y=le.call(e,"variable")&&e.variable;if(y){if(Vt.test(y))throw new i(f)}else d="with (obj) {\n"+d+"\n}\n";d=(a?d.replace(jt,""):d).replace(kt,"$1").replace(Ot,"$1;"),d="function("+(y||"obj")+") {\n"+(y?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(u?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+d+"return __p\n}";var m=jp((function(){return Mt(s,g+"return "+d).apply(o,l)}));if(m.source=d,_f(m))throw m;return m}function hp(t){return tl(t).toLowerCase()}function dp(t){return tl(t).toUpperCase()}function vp(t,e,n){if(t=tl(t),t&&(n||e===o))return Zn(t);if(!t||!(e=Uo(e)))return t;var r=yr(t),i=yr(e),u=Qn(r,i),a=tr(r,i)+1;return Wo(r,u,a).join("")}function gp(t,e,n){if(t=tl(t),t&&(n||e===o))return t.slice(0,mr(t)+1);if(!t||!(e=Uo(e)))return t;var r=yr(t),i=tr(r,yr(e))+1;return Wo(r,0,i).join("")}function yp(t,e,n){if(t=tl(t),t&&(n||e===o))return t.replace($t,"");if(!t||!(e=Uo(e)))return t;var r=yr(t),i=Qn(r,yr(e));return Wo(r,i).join("")}function mp(t,e){var n=I,r=C;if(Of(e)){var i="separator"in e?e.separator:i;n="length"in e?Zf(e.length):n,r="omission"in e?Uo(e.omission):r}t=tl(t);var u=t.length;if(ur(t)){var a=yr(t);u=a.length}if(n>=u)return t;var c=n-gr(r);if(c<1)return r;var s=a?Wo(a,0,c).join(""):t.slice(0,c);if(i===o)return s+r;if(a&&(c+=s.length-c),Gf(i)){if(t.slice(c).search(i)){var f,l=s;i.global||(i=re(i.source,tl(Ht.exec(i))+"g")),i.lastIndex=0;while(f=i.exec(l))var p=f.index;s=s.slice(0,p===o?c:p)}}else if(t.indexOf(Uo(i),c)!=c){var h=s.lastIndexOf(i);h>-1&&(s=s.slice(0,h))}return s+r}function bp(t){return t=tl(t),t&&Et.test(t)?t.replace(St,br):t}var _p=du((function(t,e,n){return t+(n?" ":"")+e.toUpperCase()})),wp=hu("toUpperCase");function xp(t,e,n){return t=tl(t),e=n?o:e,e===o?ar(t)?xr(t):Pn(t):t.match(e)||[]}var jp=wo((function(t,e){try{return _n(t,o,e)}catch(n){return _f(n)?n:new i(n)}})),kp=$u((function(t,e){return xn(e,(function(e){e=La(e),di(t,e,Ts(t[e],t))})),t}));function Op(t){var e=null==t?0:t.length,n=Vu();return t=e?En(t,(function(t){if("function"!=typeof t[1])throw new oe(s);return[n(t[0]),t[1]]})):[],wo((function(n){var r=-1;while(++r<e){var i=t[r];if(_n(i[0],this,n))return _n(i[1],this,n)}}))}function Sp(t){return mi(yi(t,d))}function Ap(t){return function(){return t}}function Ep(t,e){return null==t||t!==t?e:t}var Ip=mu(),Cp=mu(!0);function Lp(t){return t}function Tp(t){return eo("function"==typeof t?t:yi(t,d))}function Rp(t){return uo(yi(t,d))}function Up(t,e){return ao(t,yi(e,d))}var Pp=wo((function(t,e){return function(n){return zi(n,t,e)}})),Gp=wo((function(t,e){return function(n){return zi(t,n,e)}}));function Bp(t,e,n){var r=jl(e),i=Ri(e,r);null!=n||Of(e)&&(i.length||!r.length)||(n=e,e=t,t=this,i=Ri(e,jl(e)));var o=!(Of(n)&&"chain"in n)||!!n.chain,u=xf(t);return xn(i,(function(n){var r=e[n];t[n]=r,u&&(t.prototype[n]=function(){var e=this.__chain__;if(o||e){var n=t(this.__wrapped__),i=n.__actions__=iu(this.__actions__);return i.push({func:r,args:arguments,thisArg:t}),n.__chain__=e,n}return r.apply(t,In([this.value()],arguments))})})),t}function $p(){return cn._===this&&(cn._=ge),this}function Mp(){}function Fp(t){return t=Zf(t),wo((function(e){return fo(e,t)}))}var Np=xu(En),Dp=xu(kn),zp=xu(Tn);function Vp(t){return ca(t)?Dn(La(t)):vo(t)}function qp(t){return function(e){return null==t?o:Ui(t,e)}}var Wp=Ou(),Hp=Ou(!0);function Kp(){return[]}function Zp(){return!1}function Yp(){return{}}function Jp(){return""}function Xp(){return!0}function Qp(t,e){if(t=Zf(t),t<1||t>B)return[];var n=F,r=Ne(t,F);e=Vu(e),t-=F;var i=Hn(r,e);while(++n<t)e(n);return i}function th(t){return sf(t)?En(t,La):Ff(t)?[t]:iu(Ca(tl(t)))}function eh(t){var e=++pe;return tl(t)+e}var nh=wu((function(t,e){return t+e}),0),rh=Eu("ceil"),ih=wu((function(t,e){return t/e}),1),oh=Eu("floor");function uh(t){return t&&t.length?Oi(t,Lp,Bi):o}function ah(t,e){return t&&t.length?Oi(t,Vu(e,2),Bi):o}function ch(t){return Nn(t,Lp)}function sh(t,e){return Nn(t,Vu(e,2))}function fh(t){return t&&t.length?Oi(t,Lp,io):o}function lh(t,e){return t&&t.length?Oi(t,Vu(e,2),io):o}var ph=wu((function(t,e){return t*e}),1),hh=Eu("round"),dh=wu((function(t,e){return t-e}),0);function vh(t){return t&&t.length?Wn(t,Lp):0}function gh(t,e){return t&&t.length?Wn(t,Vu(e,2)):0}return wr.after=Is,wr.ary=Cs,wr.assign=el,wr.assignIn=nl,wr.assignInWith=rl,wr.assignWith=il,wr.at=ol,wr.before=Ls,wr.bind=Ts,wr.bindAll=kp,wr.bindKey=Rs,wr.castArray=Xs,wr.chain=qc,wr.chunk=Pa,wr.compact=Ga,wr.concat=Ba,wr.cond=Op,wr.conforms=Sp,wr.constant=Ap,wr.countBy=ns,wr.create=ul,wr.curry=Us,wr.curryRight=Ps,wr.debounce=Gs,wr.defaults=al,wr.defaultsDeep=cl,wr.defer=Bs,wr.delay=$s,wr.difference=$a,wr.differenceBy=Ma,wr.differenceWith=Fa,wr.drop=Na,wr.dropRight=Da,wr.dropRightWhile=za,wr.dropWhile=Va,wr.fill=qa,wr.filter=is,wr.flatMap=as,wr.flatMapDeep=cs,wr.flatMapDepth=ss,wr.flatten=Ka,wr.flattenDeep=Za,wr.flattenDepth=Ya,wr.flip=Ms,wr.flow=Ip,wr.flowRight=Cp,wr.fromPairs=Ja,wr.functions=vl,wr.functionsIn=gl,wr.groupBy=ps,wr.initial=tc,wr.intersection=ec,wr.intersectionBy=nc,wr.intersectionWith=rc,wr.invert=_l,wr.invertBy=wl,wr.invokeMap=ds,wr.iteratee=Tp,wr.keyBy=vs,wr.keys=jl,wr.keysIn=kl,wr.map=gs,wr.mapKeys=Ol,wr.mapValues=Sl,wr.matches=Rp,wr.matchesProperty=Up,wr.memoize=Fs,wr.merge=Al,wr.mergeWith=El,wr.method=Pp,wr.methodOf=Gp,wr.mixin=Bp,wr.negate=Ns,wr.nthArg=Fp,wr.omit=Il,wr.omitBy=Cl,wr.once=Ds,wr.orderBy=ys,wr.over=Np,wr.overArgs=zs,wr.overEvery=Dp,wr.overSome=zp,wr.partial=Vs,wr.partialRight=qs,wr.partition=ms,wr.pick=Ll,wr.pickBy=Tl,wr.property=Vp,wr.propertyOf=qp,wr.pull=cc,wr.pullAll=sc,wr.pullAllBy=fc,wr.pullAllWith=lc,wr.pullAt=pc,wr.range=Wp,wr.rangeRight=Hp,wr.rearg=Ws,wr.reject=ws,wr.remove=hc,wr.rest=Hs,wr.reverse=dc,wr.sampleSize=js,wr.set=Ul,wr.setWith=Pl,wr.shuffle=ks,wr.slice=vc,wr.sortBy=As,wr.sortedUniq=xc,wr.sortedUniqBy=jc,wr.split=sp,wr.spread=Ks,wr.tail=kc,wr.take=Oc,wr.takeRight=Sc,wr.takeRightWhile=Ac,wr.takeWhile=Ec,wr.tap=Wc,wr.throttle=Zs,wr.thru=Hc,wr.toArray=Hf,wr.toPairs=Gl,wr.toPairsIn=Bl,wr.toPath=th,wr.toPlainObject=Xf,wr.transform=$l,wr.unary=Ys,wr.union=Ic,wr.unionBy=Cc,wr.unionWith=Lc,wr.uniq=Tc,wr.uniqBy=Rc,wr.uniqWith=Uc,wr.unset=Ml,wr.unzip=Pc,wr.unzipWith=Gc,wr.update=Fl,wr.updateWith=Nl,wr.values=Dl,wr.valuesIn=zl,wr.without=Bc,wr.words=xp,wr.wrap=Js,wr.xor=$c,wr.xorBy=Mc,wr.xorWith=Fc,wr.zip=Nc,wr.zipObject=Dc,wr.zipObjectDeep=zc,wr.zipWith=Vc,wr.entries=Gl,wr.entriesIn=Bl,wr.extend=nl,wr.extendWith=rl,Bp(wr,wr),wr.add=nh,wr.attempt=jp,wr.camelCase=Hl,wr.capitalize=Kl,wr.ceil=rh,wr.clamp=Vl,wr.clone=Qs,wr.cloneDeep=ef,wr.cloneDeepWith=nf,wr.cloneWith=tf,wr.conformsTo=rf,wr.deburr=Zl,wr.defaultTo=Ep,wr.divide=ih,wr.endsWith=Yl,wr.eq=of,wr.escape=Jl,wr.escapeRegExp=Xl,wr.every=rs,wr.find=os,wr.findIndex=Wa,wr.findKey=sl,wr.findLast=us,wr.findLastIndex=Ha,wr.findLastKey=fl,wr.floor=oh,wr.forEach=fs,wr.forEachRight=ls,wr.forIn=ll,wr.forInRight=pl,wr.forOwn=hl,wr.forOwnRight=dl,wr.get=yl,wr.gt=uf,wr.gte=af,wr.has=ml,wr.hasIn=bl,wr.head=Xa,wr.identity=Lp,wr.includes=hs,wr.indexOf=Qa,wr.inRange=ql,wr.invoke=xl,wr.isArguments=cf,wr.isArray=sf,wr.isArrayBuffer=ff,wr.isArrayLike=lf,wr.isArrayLikeObject=pf,wr.isBoolean=hf,wr.isBuffer=df,wr.isDate=vf,wr.isElement=gf,wr.isEmpty=yf,wr.isEqual=mf,wr.isEqualWith=bf,wr.isError=_f,wr.isFinite=wf,wr.isFunction=xf,wr.isInteger=jf,wr.isLength=kf,wr.isMap=Af,wr.isMatch=Ef,wr.isMatchWith=If,wr.isNaN=Cf,wr.isNative=Lf,wr.isNil=Rf,wr.isNull=Tf,wr.isNumber=Uf,wr.isObject=Of,wr.isObjectLike=Sf,wr.isPlainObject=Pf,wr.isRegExp=Gf,wr.isSafeInteger=Bf,wr.isSet=$f,wr.isString=Mf,wr.isSymbol=Ff,wr.isTypedArray=Nf,wr.isUndefined=Df,wr.isWeakMap=zf,wr.isWeakSet=Vf,wr.join=ic,wr.kebabCase=Ql,wr.last=oc,wr.lastIndexOf=uc,wr.lowerCase=tp,wr.lowerFirst=ep,wr.lt=qf,wr.lte=Wf,wr.max=uh,wr.maxBy=ah,wr.mean=ch,wr.meanBy=sh,wr.min=fh,wr.minBy=lh,wr.stubArray=Kp,wr.stubFalse=Zp,wr.stubObject=Yp,wr.stubString=Jp,wr.stubTrue=Xp,wr.multiply=ph,wr.nth=ac,wr.noConflict=$p,wr.noop=Mp,wr.now=Es,wr.pad=np,wr.padEnd=rp,wr.padStart=ip,wr.parseInt=op,wr.random=Wl,wr.reduce=bs,wr.reduceRight=_s,wr.repeat=up,wr.replace=ap,wr.result=Rl,wr.round=hh,wr.runInContext=t,wr.sample=xs,wr.size=Os,wr.snakeCase=cp,wr.some=Ss,wr.sortedIndex=gc,wr.sortedIndexBy=yc,wr.sortedIndexOf=mc,wr.sortedLastIndex=bc,wr.sortedLastIndexBy=_c,wr.sortedLastIndexOf=wc,wr.startCase=fp,wr.startsWith=lp,wr.subtract=dh,wr.sum=vh,wr.sumBy=gh,wr.template=pp,wr.times=Qp,wr.toFinite=Kf,wr.toInteger=Zf,wr.toLength=Yf,wr.toLower=hp,wr.toNumber=Jf,wr.toSafeInteger=Qf,wr.toString=tl,wr.toUpper=dp,wr.trim=vp,wr.trimEnd=gp,wr.trimStart=yp,wr.truncate=mp,wr.unescape=bp,wr.uniqueId=eh,wr.upperCase=_p,wr.upperFirst=wp,wr.each=fs,wr.eachRight=ls,wr.first=Xa,Bp(wr,function(){var t={};return Li(wr,(function(e,n){le.call(wr.prototype,n)||(t[n]=e)})),t}(),{chain:!1}),wr.VERSION=u,xn(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(t){wr[t].placeholder=wr})),xn(["drop","take"],(function(t,e){Ar.prototype[t]=function(n){n=n===o?1:Fe(Zf(n),0);var r=this.__filtered__&&!e?new Ar(this):this.clone();return r.__filtered__?r.__takeCount__=Ne(n,r.__takeCount__):r.__views__.push({size:Ne(n,F),type:t+(r.__dir__<0?"Right":"")}),r},Ar.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),xn(["filter","map","takeWhile"],(function(t,e){var n=e+1,r=n==R||n==P;Ar.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:Vu(t,3),type:n}),e.__filtered__=e.__filtered__||r,e}})),xn(["head","last"],(function(t,e){var n="take"+(e?"Right":"");Ar.prototype[t]=function(){return this[n](1).value()[0]}})),xn(["initial","tail"],(function(t,e){var n="drop"+(e?"":"Right");Ar.prototype[t]=function(){return this.__filtered__?new Ar(this):this[n](1)}})),Ar.prototype.compact=function(){return this.filter(Lp)},Ar.prototype.find=function(t){return this.filter(t).head()},Ar.prototype.findLast=function(t){return this.reverse().find(t)},Ar.prototype.invokeMap=wo((function(t,e){return"function"==typeof t?new Ar(this):this.map((function(n){return zi(n,t,e)}))})),Ar.prototype.reject=function(t){return this.filter(Ns(Vu(t)))},Ar.prototype.slice=function(t,e){t=Zf(t);var n=this;return n.__filtered__&&(t>0||e<0)?new Ar(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),e!==o&&(e=Zf(e),n=e<0?n.dropRight(-e):n.take(e-t)),n)},Ar.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},Ar.prototype.toArray=function(){return this.take(F)},Li(Ar.prototype,(function(t,e){var n=/^(?:filter|find|map|reject)|While$/.test(e),r=/^(?:head|last)$/.test(e),i=wr[r?"take"+("last"==e?"Right":""):e],u=r||/^find/.test(e);i&&(wr.prototype[e]=function(){var e=this.__wrapped__,a=r?[1]:arguments,c=e instanceof Ar,s=a[0],f=c||sf(e),l=function(t){var e=i.apply(wr,In([t],a));return r&&p?e[0]:e};f&&n&&"function"==typeof s&&1!=s.length&&(c=f=!1);var p=this.__chain__,h=!!this.__actions__.length,d=u&&!p,v=c&&!h;if(!u&&f){e=v?e:new Ar(this);var g=t.apply(e,a);return g.__actions__.push({func:Hc,args:[l],thisArg:o}),new Sr(g,p)}return d&&v?t.apply(this,a):(g=this.thru(l),d?r?g.value()[0]:g.value():g)})})),xn(["pop","push","shift","sort","splice","unshift"],(function(t){var e=ue[t],n=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",r=/^(?:pop|shift)$/.test(t);wr.prototype[t]=function(){var t=arguments;if(r&&!this.__chain__){var i=this.value();return e.apply(sf(i)?i:[],t)}return this[n]((function(n){return e.apply(sf(n)?n:[],t)}))}})),Li(Ar.prototype,(function(t,e){var n=wr[e];if(n){var r=n.name+"";le.call(sn,r)||(sn[r]=[]),sn[r].push({name:e,func:n})}})),sn[bu(o,_).name]=[{name:"wrapper",func:o}],Ar.prototype.clone=Er,Ar.prototype.reverse=Ir,Ar.prototype.value=Cr,wr.prototype.at=Kc,wr.prototype.chain=Zc,wr.prototype.commit=Yc,wr.prototype.next=Jc,wr.prototype.plant=Qc,wr.prototype.reverse=ts,wr.prototype.toJSON=wr.prototype.valueOf=wr.prototype.value=es,wr.prototype.first=wr.prototype.head,Ae&&(wr.prototype[Ae]=Xc),wr},kr=jr();cn._=kr,i=function(){return kr}.call(e,n,e,r),i===o||(r.exports=i)}).call(this)}).call(this,n("c8ba"),n("62e4")(t))},"2f62":function(t,e,n){"use strict";(function(t){
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function r(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}n.d(e,"b",(function(){return G})),n.d(e,"c",(function(){return P})),n.d(e,"d",(function(){return R}));var i="undefined"!==typeof window?window:"undefined"!==typeof t?t:{},o=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function u(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){o.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){o.emit("vuex:action",t,e)}),{prepend:!0}))}function a(t,e){return t.filter(e)[0]}function c(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=a(e,(function(e){return e.original===t}));if(n)return n.copy;var r=Array.isArray(t)?[]:{};return e.push({original:t,copy:r}),Object.keys(t).forEach((function(n){r[n]=c(t[n],e)})),r}function s(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function f(t){return null!==t&&"object"===typeof t}function l(t){return t&&"function"===typeof t.then}function p(t,e){return function(){return t(e)}}var h=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},d={namespaced:{configurable:!0}};d.namespaced.get=function(){return!!this._rawModule.namespaced},h.prototype.addChild=function(t,e){this._children[t]=e},h.prototype.removeChild=function(t){delete this._children[t]},h.prototype.getChild=function(t){return this._children[t]},h.prototype.hasChild=function(t){return t in this._children},h.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},h.prototype.forEachChild=function(t){s(this._children,t)},h.prototype.forEachGetter=function(t){this._rawModule.getters&&s(this._rawModule.getters,t)},h.prototype.forEachAction=function(t){this._rawModule.actions&&s(this._rawModule.actions,t)},h.prototype.forEachMutation=function(t){this._rawModule.mutations&&s(this._rawModule.mutations,t)},Object.defineProperties(h.prototype,d);var v=function(t){this.register([],t,!1)};function g(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;g(t.concat(r),e.getChild(r),n.modules[r])}}v.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},v.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},v.prototype.update=function(t){g([],this.root,t)},v.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new h(e,n);if(0===t.length)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}e.modules&&s(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},v.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},v.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var y;var m=function(t){var e=this;void 0===t&&(t={}),!y&&"undefined"!==typeof window&&window.Vue&&T(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new v(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new y,this._makeLocalGettersCache=Object.create(null);var i=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(t,e){return a.call(i,t,e)},this.commit=function(t,e,n){return c.call(i,t,e,n)},this.strict=r;var s=this._modules.root.state;j(this,s,[],this._modules.root),x(this,s),n.forEach((function(t){return t(e)}));var f=void 0!==t.devtools?t.devtools:y.config.devtools;f&&u(this)},b={state:{configurable:!0}};function _(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function w(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;j(t,n,[],t._modules.root,!0),x(t,n,e)}function x(t,e,n){var r=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={};s(i,(function(e,n){o[n]=p(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var u=y.config.silent;y.config.silent=!0,t._vm=new y({data:{$$state:e},computed:o}),y.config.silent=u,t.strict&&I(t),r&&(n&&t._withCommit((function(){r._data.$$state=null})),y.nextTick((function(){return r.$destroy()})))}function j(t,e,n,r,i){var o=!n.length,u=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[u],t._modulesNamespaceMap[u]=r),!o&&!i){var a=C(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){y.set(a,c,r.state)}))}var s=r.context=k(t,u,n);r.forEachMutation((function(e,n){var r=u+n;S(t,r,e,s)})),r.forEachAction((function(e,n){var r=e.root?n:u+n,i=e.handler||e;A(t,r,i,s)})),r.forEachGetter((function(e,n){var r=u+n;E(t,r,e,s)})),r.forEachChild((function(r,o){j(t,e,n.concat(o),r,i)}))}function k(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var o=L(n,r,i),u=o.payload,a=o.options,c=o.type;return a&&a.root||(c=e+c),t.dispatch(c,u)},commit:r?t.commit:function(n,r,i){var o=L(n,r,i),u=o.payload,a=o.options,c=o.type;a&&a.root||(c=e+c),t.commit(c,u,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return O(t,e)}},state:{get:function(){return C(t.state,n)}}}),i}function O(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function S(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function A(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return l(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function E(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function I(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function C(t,e){return e.reduce((function(t,e){return t[e]}),t)}function L(t,e,n){return f(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function T(t){y&&t===y||(y=t,r(y))}b.state.get=function(){return this._vm._data.$$state},b.state.set=function(t){0},m.prototype.commit=function(t,e,n){var r=this,i=L(t,e,n),o=i.type,u=i.payload,a=(i.options,{type:o,payload:u}),c=this._mutations[o];c&&(this._withCommit((function(){c.forEach((function(t){t(u)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},m.prototype.dispatch=function(t,e){var n=this,r=L(t,e),i=r.type,o=r.payload,u={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(u,n.state)}))}catch(s){0}var c=a.length>1?Promise.all(a.map((function(t){return t(o)}))):a[0](o);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(u,n.state)}))}catch(s){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(u,n.state,t)}))}catch(s){0}e(t)}))}))}},m.prototype.subscribe=function(t,e){return _(t,this._subscribers,e)},m.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return _(n,this._actionSubscribers,e)},m.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch((function(){return t(r.state,r.getters)}),e,n)},m.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},m.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),j(this,this.state,t,this._modules.get(t),n.preserveState),x(this,this.state)},m.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=C(e.state,t.slice(0,-1));y.delete(n,t[t.length-1])})),w(this)},m.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},m.prototype.hotUpdate=function(t){this._modules.update(t),w(this,!0)},m.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(m.prototype,b);var R=F((function(t,e){var n={};return $(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=N(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),U=F((function(t,e){var n={};return $(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var o=N(this.$store,"mapMutations",t);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),P=F((function(t,e){var n={};return $(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||N(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n})),G=F((function(t,e){var n={};return $(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var o=N(this.$store,"mapActions",t);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),B=function(t){return{mapState:R.bind(null,t),mapGetters:P.bind(null,t),mapMutations:U.bind(null,t),mapActions:G.bind(null,t)}};function $(t){return M(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function M(t){return Array.isArray(t)||f(t)}function F(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function N(t,e,n){var r=t._modulesNamespaceMap[n];return r}function D(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var r=t.transformer;void 0===r&&(r=function(t){return t});var i=t.mutationTransformer;void 0===i&&(i=function(t){return t});var o=t.actionFilter;void 0===o&&(o=function(t,e){return!0});var u=t.actionTransformer;void 0===u&&(u=function(t){return t});var a=t.logMutations;void 0===a&&(a=!0);var s=t.logActions;void 0===s&&(s=!0);var f=t.logger;return void 0===f&&(f=console),function(t){var l=c(t.state);"undefined"!==typeof f&&(a&&t.subscribe((function(t,o){var u=c(o);if(n(t,l,u)){var a=q(),s=i(t),p="mutation "+t.type+a;z(f,p,e),f.log("%c prev state","color: #9E9E9E; font-weight: bold",r(l)),f.log("%c mutation","color: #03A9F4; font-weight: bold",s),f.log("%c next state","color: #4CAF50; font-weight: bold",r(u)),V(f)}l=u})),s&&t.subscribeAction((function(t,n){if(o(t,n)){var r=q(),i=u(t),a="action "+t.type+r;z(f,a,e),f.log("%c action","color: #03A9F4; font-weight: bold",i),V(f)}})))}}function z(t,e,n){var r=n?t.groupCollapsed:t.group;try{r.call(t,e)}catch(i){t.log(e)}}function V(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function q(){var t=new Date;return" @ "+H(t.getHours(),2)+":"+H(t.getMinutes(),2)+":"+H(t.getSeconds(),2)+"."+H(t.getMilliseconds(),3)}function W(t,e){return new Array(e+1).join(t)}function H(t,e){return W("0",e-t.toString().length)+t}var K={Store:m,install:T,version:"3.6.2",mapState:R,mapMutations:U,mapGetters:P,mapActions:G,createNamespacedHelpers:B,createLogger:D};e["a"]=K}).call(this,n("c8ba"))},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,e,n){var r=n("f5df"),i=n("3f8c"),o=n("b622"),u=o("iterator");t.exports=function(t){if(void 0!=t)return t[u]||t["@@iterator"]||i[r(t)]}},"37e8":function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("825a"),u=n("df75");t.exports=r?Object.defineProperties:function(t,e){o(t);var n,r=u(e),a=r.length,c=0;while(a>c)i.f(t,n=r[c++],e[n]);return t}},"3bbe":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("69f3"),o=n("7dd0"),u="String Iterator",a=i.set,c=i.getterFor(u);o(String,"String",(function(t){a(this,{type:u,string:String(t),index:0})}),(function(){var t,e=c(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},"3f8c":function(t,e){t.exports={}},"428f":function(t,e,n){var r=n("da84");t.exports=r},"44ad":function(t,e,n){var r=n("d039"),i=n("c6b6"),o="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},"44d2":function(t,e,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),u=r("unscopables"),a=Array.prototype;void 0==a[u]&&o.f(a,u,{configurable:!0,value:i(null)}),t.exports=function(t){a[u][t]=!0}},"44de":function(t,e,n){var r=n("da84");t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),o=n("b622"),u=o("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[u])?!!e:"RegExp"==i(t))}},4840:function(t,e,n){var r=n("825a"),i=n("1c0b"),o=n("b622"),u=o("species");t.exports=function(t,e){var n,o=r(t).constructor;return void 0===o||void 0==(n=r(o)[u])?e:i(n)}},4930:function(t,e,n){var r=n("2d00"),i=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(t,e,n){var r=n("fc6a"),i=n("50c4"),o=n("23cb"),u=function(t){return function(e,n,u){var a,c=r(e),s=i(c.length),f=o(u,s);if(t&&n!=n){while(s>f)if(a=c[f++],a!=a)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),u=o("filter");r({target:"Array",proto:!0,forced:!u},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,n){"use strict";var r=n("0366"),i=n("7b0b"),o=n("9bdd"),u=n("e95a"),a=n("50c4"),c=n("8418"),s=n("35a1");t.exports=function(t){var e,n,f,l,p,h,d=i(t),v="function"==typeof this?this:Array,g=arguments.length,y=g>1?arguments[1]:void 0,m=void 0!==y,b=s(d),_=0;if(m&&(y=r(y,g>2?arguments[2]:void 0,2)),void 0==b||v==Array&&u(b))for(e=a(d.length),n=new v(e);e>_;_++)h=m?y(d[_],_):d[_],c(n,_,h);else for(l=b.call(d),p=l.next,n=new v;!(f=p.call(l)).done;_++)h=m?o(l,y,[f.value,_],!0):f.value,c(n,_,h);return n.length=_,n}},"50c4":function(t,e,n){var r=n("a691"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},5135:function(t,e,n){var r=n("7b0b"),i={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return i.call(r(t),e)}},5692:function(t,e,n){var r=n("c430"),i=n("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.15.2",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),i=n("241c"),o=n("7418"),u=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(u(t)),n=o.f;return n?e.concat(n(t)):e}},"5a34":function(t,e,n){var r=n("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5fb2":function(t,e,n){"use strict";var r=2147483647,i=36,o=1,u=26,a=38,c=700,s=72,f=128,l="-",p=/[^\0-\u007E]/,h=/[.\u3002\uFF0E\uFF61]/g,d="Overflow: input needs wider integers to process",v=i-o,g=Math.floor,y=String.fromCharCode,m=function(t){var e=[],n=0,r=t.length;while(n<r){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=t.charCodeAt(n++);56320==(64512&o)?e.push(((1023&i)<<10)+(1023&o)+65536):(e.push(i),n--)}else e.push(i)}return e},b=function(t){return t+22+75*(t<26)},_=function(t,e,n){var r=0;for(t=n?g(t/c):t>>1,t+=g(t/e);t>v*u>>1;r+=i)t=g(t/v);return g(r+(v+1)*t/(t+a))},w=function(t){var e=[];t=m(t);var n,a,c=t.length,p=f,h=0,v=s;for(n=0;n<t.length;n++)a=t[n],a<128&&e.push(y(a));var w=e.length,x=w;w&&e.push(l);while(x<c){var j=r;for(n=0;n<t.length;n++)a=t[n],a>=p&&a<j&&(j=a);var k=x+1;if(j-p>g((r-h)/k))throw RangeError(d);for(h+=(j-p)*k,p=j,n=0;n<t.length;n++){if(a=t[n],a<p&&++h>r)throw RangeError(d);if(a==p){for(var O=h,S=i;;S+=i){var A=S<=v?o:S>=v+u?u:S-v;if(O<A)break;var E=O-A,I=i-A;e.push(y(b(A+E%I))),O=g(E/I)}e.push(y(b(O))),v=_(h,k,x==w),h=0,++x}}++h,++p}return e.join("")};t.exports=function(t){var e,n,r=[],i=t.toLowerCase().replace(h,".").split(".");for(e=0;e<i.length;e++)n=i[e],r.push(p.test(n)?"xn--"+w(n):n);return r.join(".")}},"605d":function(t,e,n){var r=n("c6b6"),i=n("da84");t.exports="process"==r(i.process)},6069:function(t,e){t.exports="object"==typeof window},"60da":function(t,e,n){"use strict";var r=n("83ab"),i=n("d039"),o=n("df75"),u=n("7418"),a=n("d1e7"),c=n("7b0b"),s=n("44ad"),f=Object.assign,l=Object.defineProperty;t.exports=!f||i((function(){if(r&&1!==f({b:1},f(l({},"a",{enumerable:!0,get:function(){l(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=f({},t)[n]||o(f({},e)).join("")!=i}))?function(t,e){var n=c(t),i=arguments.length,f=1,l=u.f,p=a.f;while(i>f){var h,d=s(arguments[f++]),v=l?o(d).concat(l(d)):o(d),g=v.length,y=0;while(g>y)h=v[y++],r&&!p.call(d,h)||(n[h]=d[h])}return n}:f},"62e4":function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),o=function(t){return function(e,n){var o,u,a=String(i(e)),c=r(n),s=a.length;return c<0||c>=s?t?"":void 0:(o=a.charCodeAt(c),o<55296||o>56319||c+1===s||(u=a.charCodeAt(c+1))<56320||u>57343?t?a.charAt(c):o:t?a.slice(c,c+2):u-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),o=n("b622"),u=o("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[u],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"69f3":function(t,e,n){var r,i,o,u=n("7f9a"),a=n("da84"),c=n("861d"),s=n("9112"),f=n("5135"),l=n("c6cd"),p=n("f772"),h=n("d012"),d="Object already initialized",v=a.WeakMap,g=function(t){return o(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(u||l.state){var m=l.state||(l.state=new v),b=m.get,_=m.has,w=m.set;r=function(t,e){if(_.call(m,t))throw new TypeError(d);return e.facade=t,w.call(m,t,e),e},i=function(t){return b.call(m,t)||{}},o=function(t){return _.call(m,t)}}else{var x=p("state");h[x]=!0,r=function(t,e){if(f(t,x))throw new TypeError(d);return e.facade=t,s(t,x,e),e},i=function(t){return f(t,x)?t[x]:{}},o=function(t){return f(t,x)}}t.exports={set:r,get:i,has:o,enforce:g,getterFor:y}},"6eeb":function(t,e,n){var r=n("da84"),i=n("9112"),o=n("5135"),u=n("ce4e"),a=n("8925"),c=n("69f3"),s=c.get,f=c.enforce,l=String(String).split("String");(t.exports=function(t,e,n,a){var c,s=!!a&&!!a.unsafe,p=!!a&&!!a.enumerable,h=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||o(n,"name")||i(n,"name",e),c=f(n),c.source||(c.source=l.join("string"==typeof e?e:""))),t!==r?(s?!h&&t[e]&&(p=!0):delete t[e],p?t[e]=n:i(t,e,n)):p?t[e]=n:u(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a(this)}))},7418:function(t,e){e.f=Object.getOwnPropertySymbols},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),o=n("e538"),u=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||u(e,t,{value:o.f(t)})}},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))}},"7c73":function(t,e,n){var r,i=n("825a"),o=n("37e8"),u=n("7839"),a=n("d012"),c=n("1be4"),s=n("cc12"),f=n("f772"),l=">",p="<",h="prototype",d="script",v=f("IE_PROTO"),g=function(){},y=function(t){return p+d+l+t+p+"/"+d+l},m=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=s("iframe"),n="java"+d+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},_=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(e){}_=r?m(r):b();var t=u.length;while(t--)delete _[h][u[t]];return _()};a[v]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(g[h]=i(t),n=new g,g[h]=null,n[v]=t):n=_(),void 0===e?n:o(n,e)}},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),i=n("9ed3"),o=n("e163"),u=n("d2bb"),a=n("d44e"),c=n("9112"),s=n("6eeb"),f=n("b622"),l=n("c430"),p=n("3f8c"),h=n("ae93"),d=h.IteratorPrototype,v=h.BUGGY_SAFARI_ITERATORS,g=f("iterator"),y="keys",m="values",b="entries",_=function(){return this};t.exports=function(t,e,n,f,h,w,x){i(n,e,f);var j,k,O,S=function(t){if(t===h&&L)return L;if(!v&&t in I)return I[t];switch(t){case y:return function(){return new n(this,t)};case m:return function(){return new n(this,t)};case b:return function(){return new n(this,t)}}return function(){return new n(this)}},A=e+" Iterator",E=!1,I=t.prototype,C=I[g]||I["@@iterator"]||h&&I[h],L=!v&&C||S(h),T="Array"==e&&I.entries||C;if(T&&(j=o(T.call(new t)),d!==Object.prototype&&j.next&&(l||o(j)===d||(u?u(j,d):"function"!=typeof j[g]&&c(j,g,_)),a(j,A,!0,!0),l&&(p[A]=_))),h==m&&C&&C.name!==m&&(E=!0,L=function(){return C.call(this)}),l&&!x||I[g]===L||c(I,g,L),p[e]=L,h)if(k={values:S(m),keys:w?L:S(y),entries:S(b)},x)for(O in k)(v||E||!(O in I))&&s(I,O,k[O]);else r({target:e,proto:!0,forced:v||E},k);return k}},"7f9a":function(t,e,n){var r=n("da84"),i=n("8925"),o=r.WeakMap;t.exports="function"===typeof o&&/native code/.test(i(o))},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(t,e,n){"use strict";var r=n("c04e"),i=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var u=r(e);u in t?i.f(t,u,o(0,n)):t[u]=n}},"85fe":function(t,e,n){"use strict";(function(t){function n(t){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function u(t){return a(t)||c(t)||s()}function a(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){var e;return e="function"===typeof t?{callback:t}:t,e}function l(t,e){var n,r,i,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=function(a){for(var c=arguments.length,s=new Array(c>1?c-1:0),f=1;f<c;f++)s[f-1]=arguments[f];if(i=s,!n||a!==r){var l=o.leading;"function"===typeof l&&(l=l(a,r)),n&&a===r||!l||t.apply(void 0,[a].concat(u(i))),r=a,clearTimeout(n),n=setTimeout((function(){t.apply(void 0,[a].concat(u(i))),n=0}),e)}};return a._clear=function(){clearTimeout(n),n=null},a}function p(t,e){if(t===e)return!0;if("object"===n(t)){for(var r in t)if(!p(t[r],e[r]))return!1;return!0}return!1}var h=function(){function t(e,n,i){r(this,t),this.el=e,this.observer=null,this.frozen=!1,this.createObserver(n,i)}return o(t,[{key:"createObserver",value:function(t,e){var n=this;if(this.observer&&this.destroyObserver(),!this.frozen){if(this.options=f(t),this.callback=function(t,e){n.options.callback(t,e),t&&n.options.once&&(n.frozen=!0,n.destroyObserver())},this.callback&&this.options.throttle){var r=this.options.throttleOptions||{},i=r.leading;this.callback=l(this.callback,this.options.throttle,{leading:function(t){return"both"===i||"visible"===i&&t||"hidden"===i&&!t}})}this.oldResult=void 0,this.observer=new IntersectionObserver((function(t){var e=t[0];if(t.length>1){var r=t.find((function(t){return t.isIntersecting}));r&&(e=r)}if(n.callback){var i=e.isIntersecting&&e.intersectionRatio>=n.threshold;if(i===n.oldResult)return;n.oldResult=i,n.callback(i,e)}}),this.options.intersection),e.context.$nextTick((function(){n.observer&&n.observer.observe(n.el)}))}}},{key:"destroyObserver",value:function(){this.observer&&(this.observer.disconnect(),this.observer=null),this.callback&&this.callback._clear&&(this.callback._clear(),this.callback=null)}},{key:"threshold",get:function(){return this.options.intersection&&"number"===typeof this.options.intersection.threshold?this.options.intersection.threshold:0}}]),t}();function d(t,e,n){var r=e.value;if(r)if("undefined"===typeof IntersectionObserver)console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");else{var i=new h(t,r,n);t._vue_visibilityState=i}}function v(t,e,n){var r=e.value,i=e.oldValue;if(!p(r,i)){var o=t._vue_visibilityState;r?o?o.createObserver(r,n):d(t,{value:r},n):g(t)}}function g(t){var e=t._vue_visibilityState;e&&(e.destroyObserver(),delete t._vue_visibilityState)}var y={bind:d,update:v,unbind:g};function m(t){t.directive("observe-visibility",y)}var b={version:"1.0.0",install:m},_=null;"undefined"!==typeof window?_=window.Vue:"undefined"!==typeof t&&(_=t.Vue),_&&_.use(b),e["a"]=b}).call(this,n("c8ba"))},"861d":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},8875:function(t,e,n){var r,i,o;(function(n,u){i=[],r=u,o="function"===typeof r?r.apply(e,i):r,void 0===o||(t.exports=o)})("undefined"!==typeof self&&self,(function(){function t(){var e=Object.getOwnPropertyDescriptor(document,"currentScript");if(!e&&"currentScript"in document&&document.currentScript)return document.currentScript;if(e&&e.get!==t&&document.currentScript)return document.currentScript;try{throw new Error}catch(h){var n,r,i,o=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,u=/@([^@]*):(\d+):(\d+)\s*$/gi,a=o.exec(h.stack)||u.exec(h.stack),c=a&&a[1]||!1,s=a&&a[2]||!1,f=document.location.href.replace(document.location.hash,""),l=document.getElementsByTagName("script");c===f&&(n=document.documentElement.outerHTML,r=new RegExp("(?:[^\\n]+?\\n){0,"+(s-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),i=n.replace(r,"$1").trim());for(var p=0;p<l.length;p++){if("interactive"===l[p].readyState)return l[p];if(l[p].src===c)return l[p];if(c===f&&l[p].innerHTML&&l[p].innerHTML.trim()===i)return l[p]}return null}}return t}))},8925:function(t,e,n){var r=n("c6cd"),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return i.call(t)}),t.exports=r.inspectSource},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"8bbf":function(e,n){e.exports=t},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),o=n("5692"),u=n("7c73"),a=n("69f3").get,c=n("fce3"),s=n("107c"),f=RegExp.prototype.exec,l=o("native-string-replace",String.prototype.replace),p=f,h=function(){var t=/a/,e=/b*/g;return f.call(t,"a"),f.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),d=i.UNSUPPORTED_Y||i.BROKEN_CARET,v=void 0!==/()??/.exec("")[1],g=h||v||d||c||s;g&&(p=function(t){var e,n,i,o,c,s,g,y=this,m=a(y),b=m.raw;if(b)return b.lastIndex=y.lastIndex,e=p.call(b,t),y.lastIndex=b.lastIndex,e;var _=m.groups,w=d&&y.sticky,x=r.call(y),j=y.source,k=0,O=t;if(w&&(x=x.replace("y",""),-1===x.indexOf("g")&&(x+="g"),O=String(t).slice(y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==t[y.lastIndex-1])&&(j="(?: "+j+")",O=" "+O,k++),n=new RegExp("^(?:"+j+")",x)),v&&(n=new RegExp("^"+j+"$(?!\\s)",x)),h&&(i=y.lastIndex),o=f.call(w?n:y,O),w?o?(o.input=o.input.slice(k),o[0]=o[0].slice(k),o.index=y.lastIndex,y.lastIndex+=o[0].length):y.lastIndex=0:h&&o&&(y.lastIndex=y.global?o.index+o[0].length:i),v&&o&&o.length>1&&l.call(o[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)})),o&&_)for(o.groups=s=u(null),c=0;c<_.length;c++)g=_[c],s[g[0]]=o[g[1]];return o}),t.exports=p},"94ca":function(t,e,n){var r=n("d039"),i=/#|\.prototype\./,o=function(t,e){var n=a[u(t)];return n==s||n!=c&&("function"==typeof e?r(e):!!e)},u=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=o.data={},c=o.NATIVE="N",s=o.POLYFILL="P";t.exports=o},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(T){c=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),u=new I(r||[]);return o._invoke=O(t,n,u),o}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(T){return{type:"throw",arg:T}}}t.wrap=s;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function g(){}function y(){}function m(){}var b={};c(b,o,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(C([])));w&&w!==n&&r.call(w,o)&&(b=w);var x=m.prototype=g.prototype=Object.create(b);function j(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(i,o,u,a){var c=f(t[i],t,o);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,u,a)}),(function(t){n("throw",t,u,a)})):e.resolve(l).then((function(t){s.value=t,u(s)}),(function(t){return n("throw",t,u,a)}))}a(c.arg)}var i;function o(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function O(t,e,n){var r=l;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return L()}n.method=i,n.arg=o;while(1){var u=n.delegate;if(u){var a=S(u,n);if(a){if(a===v)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=f(t,e,n);if("normal"===c.type){if(r=n.done?d:p,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=f(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function C(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,u=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return u.next=u}}return{next:L}}function L(){return{value:e,done:!0}}return y.prototype=m,c(x,"constructor",m),c(m,"constructor",y),y.displayName=c(m,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,a,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},j(k.prototype),c(k.prototype,u,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var u=new k(s(e,n,r,i),o);return t.isGeneratorFunction(n)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},j(x),c(x,a,"Generator"),c(x,o,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=C,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o],a=u.completion;if("root"===u.tryLoc)return i("end");if(u.tryLoc<=this.prev){var c=r.call(u,"catchLoc"),s=r.call(u,"finallyLoc");if(c&&s){if(this.prev<u.catchLoc)return i(u.catchLoc,!0);if(this.prev<u.finallyLoc)return i(u.finallyLoc)}else if(c){if(this.prev<u.catchLoc)return i(u.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return i(u.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:C(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},9861:function(t,e,n){"use strict";n("e260");var r=n("23e7"),i=n("d066"),o=n("0d3b"),u=n("6eeb"),a=n("e2cc"),c=n("d44e"),s=n("9ed3"),f=n("69f3"),l=n("19aa"),p=n("5135"),h=n("0366"),d=n("f5df"),v=n("825a"),g=n("861d"),y=n("7c73"),m=n("5c6c"),b=n("9a1f"),_=n("35a1"),w=n("b622"),x=i("fetch"),j=i("Headers"),k=w("iterator"),O="URLSearchParams",S=O+"Iterator",A=f.set,E=f.getterFor(O),I=f.getterFor(S),C=/\+/g,L=Array(4),T=function(t){return L[t-1]||(L[t-1]=RegExp("((?:%[\\da-f]{2}){"+t+"})","gi"))},R=function(t){try{return decodeURIComponent(t)}catch(e){return t}},U=function(t){var e=t.replace(C," "),n=4;try{return decodeURIComponent(e)}catch(r){while(n)e=e.replace(T(n--),R);return e}},P=/[!'()~]|%20/g,G={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},B=function(t){return G[t]},$=function(t){return encodeURIComponent(t).replace(P,B)},M=function(t,e){if(e){var n,r,i=e.split("&"),o=0;while(o<i.length)n=i[o++],n.length&&(r=n.split("="),t.push({key:U(r.shift()),value:U(r.join("="))}))}},F=function(t){this.entries.length=0,M(this.entries,t)},N=function(t,e){if(t<e)throw TypeError("Not enough arguments")},D=s((function(t,e){A(this,{type:S,iterator:b(E(t).entries),kind:e})}),"Iterator",(function(){var t=I(this),e=t.kind,n=t.iterator.next(),r=n.value;return n.done||(n.value="keys"===e?r.key:"values"===e?r.value:[r.key,r.value]),n})),z=function(){l(this,z,O);var t,e,n,r,i,o,u,a,c,s=arguments.length>0?arguments[0]:void 0,f=this,h=[];if(A(f,{type:O,entries:h,updateURL:function(){},updateSearchParams:F}),void 0!==s)if(g(s))if(t=_(s),"function"===typeof t){e=t.call(s),n=e.next;while(!(r=n.call(e)).done){if(i=b(v(r.value)),o=i.next,(u=o.call(i)).done||(a=o.call(i)).done||!o.call(i).done)throw TypeError("Expected sequence with length 2");h.push({key:u.value+"",value:a.value+""})}}else for(c in s)p(s,c)&&h.push({key:c,value:s[c]+""});else M(h,"string"===typeof s?"?"===s.charAt(0)?s.slice(1):s:s+"")},V=z.prototype;a(V,{append:function(t,e){N(arguments.length,2);var n=E(this);n.entries.push({key:t+"",value:e+""}),n.updateURL()},delete:function(t){N(arguments.length,1);var e=E(this),n=e.entries,r=t+"",i=0;while(i<n.length)n[i].key===r?n.splice(i,1):i++;e.updateURL()},get:function(t){N(arguments.length,1);for(var e=E(this).entries,n=t+"",r=0;r<e.length;r++)if(e[r].key===n)return e[r].value;return null},getAll:function(t){N(arguments.length,1);for(var e=E(this).entries,n=t+"",r=[],i=0;i<e.length;i++)e[i].key===n&&r.push(e[i].value);return r},has:function(t){N(arguments.length,1);var e=E(this).entries,n=t+"",r=0;while(r<e.length)if(e[r++].key===n)return!0;return!1},set:function(t,e){N(arguments.length,1);for(var n,r=E(this),i=r.entries,o=!1,u=t+"",a=e+"",c=0;c<i.length;c++)n=i[c],n.key===u&&(o?i.splice(c--,1):(o=!0,n.value=a));o||i.push({key:u,value:a}),r.updateURL()},sort:function(){var t,e,n,r=E(this),i=r.entries,o=i.slice();for(i.length=0,n=0;n<o.length;n++){for(t=o[n],e=0;e<n;e++)if(i[e].key>t.key){i.splice(e,0,t);break}e===n&&i.push(t)}r.updateURL()},forEach:function(t){var e,n=E(this).entries,r=h(t,arguments.length>1?arguments[1]:void 0,3),i=0;while(i<n.length)e=n[i++],r(e.value,e.key,this)},keys:function(){return new D(this,"keys")},values:function(){return new D(this,"values")},entries:function(){return new D(this,"entries")}},{enumerable:!0}),u(V,k,V.entries),u(V,"toString",(function(){var t,e=E(this).entries,n=[],r=0;while(r<e.length)t=e[r++],n.push($(t.key)+"="+$(t.value));return n.join("&")}),{enumerable:!0}),c(z,O),r({global:!0,forced:!o},{URLSearchParams:z}),o||"function"!=typeof x||"function"!=typeof j||r({global:!0,enumerable:!0,forced:!0},{fetch:function(t){var e,n,r,i=[t];return arguments.length>1&&(e=arguments[1],g(e)&&(n=e.body,d(n)===O&&(r=e.headers?new j(e.headers):new j,r.has("content-type")||r.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),e=y(e,{body:m(0,String(n)),headers:m(0,r)}))),i.push(e)),x.apply(this,i)}}),t.exports={URLSearchParams:z,getState:E}},"99af":function(t,e,n){"use strict";var r=n("23e7"),i=n("d039"),o=n("e8b5"),u=n("861d"),a=n("7b0b"),c=n("50c4"),s=n("8418"),f=n("65f0"),l=n("1dde"),p=n("b622"),h=n("2d00"),d=p("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",y=h>=51||!i((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),m=l("concat"),b=function(t){if(!u(t))return!1;var e=t[d];return void 0!==e?!!e:o(t)},_=!y||!m;r({target:"Array",proto:!0,forced:_},{concat:function(t){var e,n,r,i,o,u=a(this),l=f(u,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?u:arguments[e],b(o)){if(i=c(o.length),p+i>v)throw TypeError(g);for(n=0;n<i;n++,p++)n in o&&s(l,p,o[n])}else{if(p>=v)throw TypeError(g);s(l,p++,o)}return l.length=p,l}})},"9a1f":function(t,e,n){var r=n("825a"),i=n("35a1");t.exports=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(String(t)+" is not iterable");return r(e.call(t))}},"9bdd":function(t,e,n){var r=n("825a"),i=n("2a62");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(u){throw i(t),u}}},"9bf2":function(t,e,n){var r=n("83ab"),i=n("0cfb"),o=n("825a"),u=n("c04e"),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(o(t),e=u(e,!0),o(n),i)try{return a(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),u=n("d44e"),a=n("3f8c"),c=function(){return this};t.exports=function(t,e,n){var s=e+" Iterator";return t.prototype=i(r,{next:o(1,n)}),u(t,s,!1,!0),a[s]=c,t}},"9f7f":function(t,e,n){var r=n("d039"),i=function(t,e){return RegExp(t,e)};e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a116:function(t){t.exports=JSON.parse('{"users":{"2":{"id":"2","name":"user1","email":"user1@localhost","avatar":"https://cdn.fakercloud.com/avatars/jarsen_128.jpg","member":[2,1]},"3":{"id":"3","name":"Cloned 56","email":"user1@localhost","avatar":"https://cdn.fakercloud.com/avatars/jarsen_128.jpg","member":[4,3,1]},"4":{"id":"4","name":"Cloned 2","email":"user1@localhost","avatar":"https://cdn.fakercloud.com/avatars/jarsen_128.jpg","member":[4,3]},"5":{"id":"5","name":"Cloned 3","email":"user1@localhost","avatar":"https://cdn.fakercloud.com/avatars/jarsen_128.jpg","member":[4,3]},"6":{"id":"6","name":"Cloned 4","email":"user1@localhost","avatar":"https://cdn.fakercloud.com/avatars/jarsen_128.jpg","member":[4,3]},"7":{"id":"7","name":"Cloned 5","email":"user1@localhost","avatar":"https://cdn.fakercloud.com/avatars/jarsen_128.jpg","member":[4,3]},"8":{"id":"8","name":"yuboychenko22","email":"yuboychenko+22@gmail.com","avatar":"https://cdn.fakercloud.com/avatars/jarsen_128.jpg","member":[3,1]}},"members":{"1":{"id":"1","type":"training","info":{"name":"Learning path 1","avatar":"https://cdn.fakercloud.com/avatars/jarsen_128.jpg"},"key":"training_1","loaded":true,"members":[1,2,8,3]},"2":{"id":"2","type":"class","info":{"name":"Class 1","avatar":"https://cdn.fakercloud.com/avatars/jarsen_128.jpg"},"key":"class_2","loaded":true,"members":[1,2]},"3":{"id":"3","type":"training","info":{"name":"Learning path 0","avatar":"https://cdn.fakercloud.com/avatars/jarsen_128.jpg"},"key":"training_3","loaded":true,"members":[1,8,3,4,5,6,7]},"4":{"id":"4","type":"class","info":{"name":"Class 4","avatar":"https://cdn.fakercloud.com/avatars/jarsen_128.jpg"},"key":"class_4","loaded":true,"members":[3,4,5,6,7]}}}')},a15b:function(t,e,n){"use strict";var r=n("23e7"),i=n("44ad"),o=n("fc6a"),u=n("a640"),a=[].join,c=i!=Object,s=u("join",",");r({target:"Array",proto:!0,forced:c||!s},{join:function(t){return a.call(o(this),void 0===t?",":t)}})},a4b4:function(t,e,n){var r=n("342f");t.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),u=n("c430"),a=n("83ab"),c=n("4930"),s=n("fdbf"),f=n("d039"),l=n("5135"),p=n("e8b5"),h=n("861d"),d=n("825a"),v=n("7b0b"),g=n("fc6a"),y=n("c04e"),m=n("5c6c"),b=n("7c73"),_=n("df75"),w=n("241c"),x=n("057f"),j=n("7418"),k=n("06cf"),O=n("9bf2"),S=n("d1e7"),A=n("9112"),E=n("6eeb"),I=n("5692"),C=n("f772"),L=n("d012"),T=n("90e3"),R=n("b622"),U=n("e538"),P=n("746f"),G=n("d44e"),B=n("69f3"),$=n("b727").forEach,M=C("hidden"),F="Symbol",N="prototype",D=R("toPrimitive"),z=B.set,V=B.getterFor(F),q=Object[N],W=i.Symbol,H=o("JSON","stringify"),K=k.f,Z=O.f,Y=x.f,J=S.f,X=I("symbols"),Q=I("op-symbols"),tt=I("string-to-symbol-registry"),et=I("symbol-to-string-registry"),nt=I("wks"),rt=i.QObject,it=!rt||!rt[N]||!rt[N].findChild,ot=a&&f((function(){return 7!=b(Z({},"a",{get:function(){return Z(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=K(q,e);r&&delete q[e],Z(t,e,n),r&&t!==q&&Z(q,e,r)}:Z,ut=function(t,e){var n=X[t]=b(W[N]);return z(n,{type:F,tag:t,description:e}),a||(n.description=e),n},at=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},ct=function(t,e,n){t===q&&ct(Q,e,n),d(t);var r=y(e,!0);return d(n),l(X,r)?(n.enumerable?(l(t,M)&&t[M][r]&&(t[M][r]=!1),n=b(n,{enumerable:m(0,!1)})):(l(t,M)||Z(t,M,m(1,{})),t[M][r]=!0),ot(t,r,n)):Z(t,r,n)},st=function(t,e){d(t);var n=g(e),r=_(n).concat(dt(n));return $(r,(function(e){a&&!lt.call(n,e)||ct(t,e,n[e])})),t},ft=function(t,e){return void 0===e?b(t):st(b(t),e)},lt=function(t){var e=y(t,!0),n=J.call(this,e);return!(this===q&&l(X,e)&&!l(Q,e))&&(!(n||!l(this,e)||!l(X,e)||l(this,M)&&this[M][e])||n)},pt=function(t,e){var n=g(t),r=y(e,!0);if(n!==q||!l(X,r)||l(Q,r)){var i=K(n,r);return!i||!l(X,r)||l(n,M)&&n[M][r]||(i.enumerable=!0),i}},ht=function(t){var e=Y(g(t)),n=[];return $(e,(function(t){l(X,t)||l(L,t)||n.push(t)})),n},dt=function(t){var e=t===q,n=Y(e?Q:g(t)),r=[];return $(n,(function(t){!l(X,t)||e&&!l(q,t)||r.push(X[t])})),r};if(c||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),n=function(t){this===q&&n.call(Q,t),l(this,M)&&l(this[M],e)&&(this[M][e]=!1),ot(this,e,m(1,t))};return a&&it&&ot(q,e,{configurable:!0,set:n}),ut(e,t)},E(W[N],"toString",(function(){return V(this).tag})),E(W,"withoutSetter",(function(t){return ut(T(t),t)})),S.f=lt,O.f=ct,k.f=pt,w.f=x.f=ht,j.f=dt,U.f=function(t){return ut(R(t),t)},a&&(Z(W[N],"description",{configurable:!0,get:function(){return V(this).description}}),u||E(q,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:W}),$(_(nt),(function(t){P(t)})),r({target:F,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=W(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:ft,defineProperty:ct,defineProperties:st,getOwnPropertyDescriptor:pt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ht,getOwnPropertySymbols:dt}),r({target:"Object",stat:!0,forced:f((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(v(t))}}),H){var vt=!c||f((function(){var t=W();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));r({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,n){var r,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(r=e,(h(e)||void 0!==t)&&!at(t))return p(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!at(e))return e}),i[1]=e,H.apply(null,i)}})}W[N][D]||A(W[N],D,W[N].valueOf),G(W,F),L[M]=!0},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),o=n("1c7e"),u=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:u},{from:i})},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a691:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},ab13:function(t,e,n){var r=n("b622"),i=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,"/./"[t](e)}catch(r){}}return!1}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae93:function(t,e,n){"use strict";var r,i,o,u=n("d039"),a=n("e163"),c=n("9112"),s=n("5135"),f=n("b622"),l=n("c430"),p=f("iterator"),h=!1,d=function(){return this};[].keys&&(o=[].keys(),"next"in o?(i=a(a(o)),i!==Object.prototype&&(r=i)):h=!0);var v=void 0==r||u((function(){var t={};return r[p].call(t)!==t}));v&&(r={}),l&&!v||s(r,p)||c(r,p,d),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:h}},b041:function(t,e,n){"use strict";var r=n("00ee"),i=n("f5df");t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,o=Function.prototype,u=o.toString,a=/^\s*function ([^ (]*)/,c="name";r&&!(c in o)&&i(o,c,{configurable:!0,get:function(){try{return u.call(this).match(a)[1]}catch(t){return""}}})},b575:function(t,e,n){var r,i,o,u,a,c,s,f,l=n("da84"),p=n("06cf").f,h=n("2cf4").set,d=n("1cdc"),v=n("a4b4"),g=n("605d"),y=l.MutationObserver||l.WebKitMutationObserver,m=l.document,b=l.process,_=l.Promise,w=p(l,"queueMicrotask"),x=w&&w.value;x||(r=function(){var t,e;g&&(t=b.domain)&&t.exit();while(i){e=i.fn,i=i.next;try{e()}catch(n){throw i?u():o=void 0,n}}o=void 0,t&&t.enter()},d||g||v||!y||!m?_&&_.resolve?(s=_.resolve(void 0),s.constructor=_,f=s.then,u=function(){f.call(s,r)}):u=g?function(){b.nextTick(r)}:function(){h.call(l,r)}:(a=!0,c=m.createTextNode(""),new y(r).observe(c,{characterData:!0}),u=function(){c.data=a=!a})),t.exports=x||function(t){var e={fn:t,next:void 0};o&&(o.next=e),i||(i=e,u()),o=e}},b622:function(t,e,n){var r=n("da84"),i=n("5692"),o=n("5135"),u=n("90e3"),a=n("4930"),c=n("fdbf"),s=i("wks"),f=r.Symbol,l=c?f:f&&f.withoutSetter||u;t.exports=function(t){return o(s,t)&&(a||"string"==typeof s[t])||(a&&o(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),u=n("d039"),a=u((function(){o(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return o(i(t))}})},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),u=n("50c4"),a=n("65f0"),c=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,l=6==t,p=7==t,h=5==t||l;return function(d,v,g,y){for(var m,b,_=o(d),w=i(_),x=r(v,g,3),j=u(w.length),k=0,O=y||a,S=e?O(d,j):n||p?O(d,0):void 0;j>k;k++)if((h||k in w)&&(m=w[k],b=x(m,k,_),t))if(e)S[k]=b;else if(b)switch(t){case 3:return!0;case 5:return m;case 6:return k;case 2:c.call(S,m)}else switch(t){case 4:return!1;case 7:c.call(S,m)}return l?-1:s||f?f:S}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},c04e:function(t,e,n){var r=n("861d");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",u=r[o]||i(o,{});t.exports=u},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("5135"),i=n("fc6a"),o=n("4d64").indexOf,u=n("d012");t.exports=function(t,e){var n,a=i(t),c=0,s=[];for(n in a)!r(u,n)&&r(a,n)&&s.push(n);while(e.length>c)r(a,n=e[c++])&&(~o(s,n)||s.push(n));return s}},caad:function(t,e,n){"use strict";var r=n("23e7"),i=n("4d64").includes,o=n("44d2");r({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},cc12:function(t,e,n){var r=n("da84"),i=n("861d"),o=r.document,u=i(o)&&i(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(t,e,n){var r=n("825a"),i=n("861d"),o=n("f069");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t),u=n.resolve;return u(e),n.promise}},ce4e:function(t,e,n){var r=n("da84"),i=n("9112");t.exports=function(t,e){try{i(r,t,e)}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("428f"),i=n("da84"),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t])||o(i[t]):r[t]&&r[t][e]||i[t]&&i[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},d28b:function(t,e,n){var r=n("746f");r("iterator")},d2bb:function(t,e,n){var r=n("825a"),i=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(n,[]),e=n instanceof Array}catch(o){}return function(n,o){return r(n),i(o),e?t.call(n,o):n.__proto__=o,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,i=n("5135"),o=n("b622"),u=o("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,u)&&r(t,u,{configurable:!0,value:e})}},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("9263"),o=n("d039"),u=n("b622"),a=n("9112"),c=u("species"),s=RegExp.prototype;t.exports=function(t,e,n,f){var l=u(t),p=!o((function(){var e={};return e[l]=function(){return 7},7!=""[t](e)})),h=p&&!o((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[l]=/./[l]),n.exec=function(){return e=!0,null},n[l](""),!e}));if(!p||!h||n){var d=/./[l],v=e(l,""[t],(function(t,e,n,r,o){var u=e.exec;return u===i||u===s.exec?p&&!o?{done:!0,value:d.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}));r(String.prototype,t,v[0]),r(s,l,v[1])}f&&a(s[l],"sham",!0)}},d81d:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").map,o=n("1dde"),u=o("map");r({target:"Array",proto:!0,forced:!u},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),u=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=u(t),i=a.f,s=o(r),f={},l=0;while(s.length>l)n=i(r,e=s[l++]),void 0!==n&&c(f,e,n);return f}})},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("e260"),u=n("9112"),a=n("b622"),c=a("iterator"),s=a("toStringTag"),f=o.values;for(var l in i){var p=r[l],h=p&&p.prototype;if(h){if(h[c]!==f)try{u(h,c,f)}catch(v){h[c]=f}if(h[s]||u(h,s,l),i[l])for(var d in o)if(h[d]!==o[d])try{u(h,d,o[d])}catch(v){h[d]=o[d]}}}},df75:function(t,e,n){var r=n("ca84"),i=n("7839");t.exports=Object.keys||function(t){return r(t,i)}},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),u=n("5135"),a=n("861d"),c=n("9bf2").f,s=n("e893"),f=o.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};s(p,f);var h=p.prototype=f.prototype;h.constructor=p;var d=h.toString,v="Symbol(test)"==String(f("test")),g=/^Symbol\((.*)\)[^)]+$/;c(h,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=d.call(t);if(u(l,t))return"";var n=v?e.slice(7,-1):e.replace(g,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},e163:function(t,e,n){var r=n("5135"),i=n("7b0b"),o=n("f772"),u=n("e177"),a=o("IE_PROTO"),c=Object.prototype;t.exports=u?Object.getPrototypeOf:function(t){return t=i(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),u=n("69f3"),a=n("7dd0"),c="Array Iterator",s=u.set,f=u.getterFor(c);t.exports=a(Array,"Array",(function(t,e){s(this,{type:c,target:r(t),index:0,kind:e})}),(function(){var t=f(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},e2cc:function(t,e,n){var r=n("6eeb");t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),u=n("06cf").f,a=n("83ab"),c=i((function(){u(1)})),s=!a||c;r({target:"Object",stat:!0,forced:s,sham:!a},{getOwnPropertyDescriptor:function(t,e){return u(o(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e6cf:function(t,e,n){"use strict";var r,i,o,u,a=n("23e7"),c=n("c430"),s=n("da84"),f=n("d066"),l=n("fea9"),p=n("6eeb"),h=n("e2cc"),d=n("d2bb"),v=n("d44e"),g=n("2626"),y=n("861d"),m=n("1c0b"),b=n("19aa"),_=n("8925"),w=n("2266"),x=n("1c7e"),j=n("4840"),k=n("2cf4").set,O=n("b575"),S=n("cdf9"),A=n("44de"),E=n("f069"),I=n("e667"),C=n("69f3"),L=n("94ca"),T=n("b622"),R=n("6069"),U=n("605d"),P=n("2d00"),G=T("species"),B="Promise",$=C.get,M=C.set,F=C.getterFor(B),N=l&&l.prototype,D=l,z=N,V=s.TypeError,q=s.document,W=s.process,H=E.f,K=H,Z=!!(q&&q.createEvent&&s.dispatchEvent),Y="function"==typeof PromiseRejectionEvent,J="unhandledrejection",X="rejectionhandled",Q=0,tt=1,et=2,nt=1,rt=2,it=!1,ot=L(B,(function(){var t=_(D),e=t!==String(D);if(!e&&66===P)return!0;if(c&&!z["finally"])return!0;if(P>=51&&/native code/.test(t))return!1;var n=new D((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},i=n.constructor={};return i[G]=r,it=n.then((function(){}))instanceof r,!it||!e&&R&&!Y})),ut=ot||!x((function(t){D.all(t)["catch"]((function(){}))})),at=function(t){var e;return!(!y(t)||"function"!=typeof(e=t.then))&&e},ct=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;O((function(){var r=t.value,i=t.state==tt,o=0;while(n.length>o){var u,a,c,s=n[o++],f=i?s.ok:s.fail,l=s.resolve,p=s.reject,h=s.domain;try{f?(i||(t.rejection===rt&&pt(t),t.rejection=nt),!0===f?u=r:(h&&h.enter(),u=f(r),h&&(h.exit(),c=!0)),u===s.promise?p(V("Promise-chain cycle")):(a=at(u))?a.call(u,l,p):l(u)):p(r)}catch(d){h&&!c&&h.exit(),p(d)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&ft(t)}))}},st=function(t,e,n){var r,i;Z?(r=q.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),s.dispatchEvent(r)):r={promise:e,reason:n},!Y&&(i=s["on"+t])?i(r):t===J&&A("Unhandled promise rejection",n)},ft=function(t){k.call(s,(function(){var e,n=t.facade,r=t.value,i=lt(t);if(i&&(e=I((function(){U?W.emit("unhandledRejection",r,n):st(J,n,r)})),t.rejection=U||lt(t)?rt:nt,e.error))throw e.value}))},lt=function(t){return t.rejection!==nt&&!t.parent},pt=function(t){k.call(s,(function(){var e=t.facade;U?W.emit("rejectionHandled",e):st(X,e,t.value)}))},ht=function(t,e,n){return function(r){t(e,r,n)}},dt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=et,ct(t,!0))},vt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw V("Promise can't be resolved itself");var r=at(e);r?O((function(){var n={done:!1};try{r.call(e,ht(vt,n,t),ht(dt,n,t))}catch(i){dt(n,i,t)}})):(t.value=e,t.state=tt,ct(t,!1))}catch(i){dt({done:!1},i,t)}}};if(ot&&(D=function(t){b(this,D,B),m(t),r.call(this);var e=$(this);try{t(ht(vt,e),ht(dt,e))}catch(n){dt(e,n)}},z=D.prototype,r=function(t){M(this,{type:B,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:Q,value:void 0})},r.prototype=h(z,{then:function(t,e){var n=F(this),r=H(j(this,D));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=U?W.domain:void 0,n.parent=!0,n.reactions.push(r),n.state!=Q&&ct(n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r,e=$(t);this.promise=t,this.resolve=ht(vt,e),this.reject=ht(dt,e)},E.f=H=function(t){return t===D||t===o?new i(t):K(t)},!c&&"function"==typeof l&&N!==Object.prototype)){u=N.then,it||(p(N,"then",(function(t,e){var n=this;return new D((function(t,e){u.call(n,t,e)})).then(t,e)}),{unsafe:!0}),p(N,"catch",z["catch"],{unsafe:!0}));try{delete N.constructor}catch(gt){}d&&d(N,z)}a({global:!0,wrap:!0,forced:ot},{Promise:D}),v(D,B,!1,!0),g(B),o=f(B),a({target:B,stat:!0,forced:ot},{reject:function(t){var e=H(this);return e.reject.call(void 0,t),e.promise}}),a({target:B,stat:!0,forced:c||ot},{resolve:function(t){return S(c&&this===o?D:this,t)}}),a({target:B,stat:!0,forced:ut},{all:function(t){var e=this,n=H(e),r=n.resolve,i=n.reject,o=I((function(){var n=m(e.resolve),o=[],u=0,a=1;w(t,(function(t){var c=u++,s=!1;o.push(void 0),a++,n.call(e,t).then((function(t){s||(s=!0,o[c]=t,--a||r(o))}),i)})),--a||r(o)}));return o.error&&i(o.value),n.promise},race:function(t){var e=this,n=H(e),r=n.reject,i=I((function(){var i=m(e.resolve);w(t,(function(t){i.call(e,t).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e893:function(t,e,n){var r=n("5135"),i=n("56ef"),o=n("06cf"),u=n("9bf2");t.exports=function(t,e){for(var n=i(e),a=u.f,c=o.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||a(t,f,c(e,f))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e95a:function(t,e,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),u=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||u[o]===t)}},f069:function(t,e,n){"use strict";var r=n("1c0b"),i=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new i(t)}},f5df:function(t,e,n){var r=n("00ee"),i=n("c6b6"),o=n("b622"),u=o("toStringTag"),a="Arguments"==i(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(n){}};t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=c(e=Object(t),u))?n:a?i(e):"Object"==(r=i(e))&&"function"==typeof e.callee?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),i=n("90e3"),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},fb15:function(t,e,n){"use strict";if(n.r(e),"undefined"!==typeof window){var r=window.document.currentScript,i=n("8875");r=i(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:i});var o=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);o&&(n.p=o[1])}var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"app"},[n("div",{staticClass:"navi navi-pills"},t._l({users:"Users",classes:"Classes",trainings:"Trainings"},(function(e,r){return n("div",{key:r,staticClass:"navi-item",class:{active:t.active==r},on:{click:function(e){return e.stopPropagation(),t.onClickTab(r)}}},[n("span",{staticClass:"navi-link"},[t._v(t._s(e))])])})),0),n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"form-control",attrs:{placeholder:"Filter by "+(t.group?"users":t.active)},domProps:{value:t.filter},on:{input:function(e){e.target.composing||(t.filter=e.target.value)}}})]),t._e(),n("EntitySelected",{attrs:{selectedIds:t.selectedIds,selectedGroupsIds:t.selectedGroupsIds},on:{onUserClicked:function(e,n){return t.$emit("onUserClicked",e,n)},onGroupClicked:function(e,n){return t.$emit("onGroupClicked",e,n)}}}),n("transition",{attrs:{name:"mode-fade",mode:"out-in"}},["users"==t.active||t.group?n("div",{key:"user",staticClass:"card-container"},[n("div",{staticClass:"card-body"},[n("UserList",{attrs:{group:t.group,"user-list":t.applyFiltersToUsers,"user-filter":!1,"grouped-display":!t.group&&!t.filter},on:{onUserClicked:function(e,n){return t.$emit("onUserClicked",e,n)},backToGroup:t.backToGroup}})],1)]):"classes"!=t.active||t.group?"trainings"!=t.active||t.group?t._e():n("div",{key:"trainings",staticClass:"card-container"},[n("div",{staticClass:"card-body"},[n("GroupList",{attrs:{"user-list":t.applyFiltersToGroupTrainings,"user-filter":!1},on:{viewGroup:t.setGroupID,onGroupClicked:function(e,n){return t.$emit("onGroupClicked",e,n)}}})],1)]):n("div",{key:"classes",staticClass:"card-container"},[n("div",{staticClass:"card-body"},[n("GroupList",{attrs:{"user-list":t.applyFiltersToGroupClasses,"user-filter":!1},on:{viewGroup:t.setGroupID,onGroupClicked:function(e,n){return t.$emit("onGroupClicked",e,n)}}})],1)])]),t.debug?n("div",[t._v(" "+t._s([t.selectedIds,t.selectedGroupsIds,t.getStoringValuesByEntity]))]):t._e(),n("select",{directives:[{name:"show",rawName:"v-show",value:t.debug,expression:"debug"},{name:"model",rawName:"v-model",value:t.getStoringValuesByEntity,expression:"getStoringValuesByEntity"}],staticClass:"form-select",attrs:{id:t.dataId,name:t.dataName,multiple:!0},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.getStoringValuesByEntity=e.target.multiple?n:n[0]}}},t._l(t.getAllAllowed,(function(e,r){return n("option",{key:r,domProps:{value:t.getStoringIdByEntity(e)}},[t._v(t._s(e.getDisplayName()))])})),0),t._e()],1)},a=[];function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t){if(Array.isArray(t))return c(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("e260"),n("3ca3"),n("ddb0"),n("a630");function f(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}n("fb6a"),n("b0c0");function l(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(t){return s(t)||f(t)||l(t)||p()}n("b64b"),n("4de4"),n("e439"),n("159b"),n("dbb4");function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n("caad"),n("2532"),n("99af"),n("d81d");var y=n("8bbf"),m=n.n(y),b=n("2ef0"),_=n.n(b),w=n("2f62"),x=n("85fe");n("e6cf");function j(t,e,n,r,i,o,u){try{var a=t[o](u),c=a.value}catch(s){return void n(s)}a.done?e(c):Promise.resolve(c).then(r,i)}function k(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function u(t){j(o,r,i,u,a,"next",t)}function a(t){j(o,r,i,u,a,"throw",t)}u(void 0)}))}}n("96cf"),n("cca6");function O(t,e){return S(t)||A(t,e)||E(t,e)||C()}function S(t){if(Array.isArray(t))return t}function A(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done);r=!0)if(n.push(u.value),e&&n.length===e)break}catch(c){i=!0,o=c}finally{try{r||null==a["return"]||a["return"]()}finally{if(i)throw o}}return n}}function E(t,e){if(t){if("string"===typeof t)return I(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(t,e):void 0}}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function C(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function L(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.reduce((function(t,e){var n=e.split(".").slice(-1)[0];if(t[n])throw new Error("The key `".concat(n,"` is already in use."));return t[n]=e,t}),{})}function T(t){return Object.keys(t).map((function(e){return[e,t[e]]}))}function R(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i="string"===typeof n[0]?[].concat(n):[""].concat(n),o=O(i,4),u=o[0],a=o[1],c=o[2],s=o[3];return u.length&&"/"!==u.charAt(u.length-1)&&(u+="/"),c="".concat(u).concat(c||"getField"),s="".concat(u).concat(s||"updateField"),t(u,a,c,s)}}function U(t){return function(e){return e.split(/[.[\]]+/).reduce((function(t,e){return t[e]}),t)}}function P(t,e){var n=e.path,r=e.value;n.split(/[.[\]]+/).reduce((function(t,e,n,i){return i.length===n+1&&(t[e]=r),t[e]}),t)}var G=R((function(t,e,n,r){var i=Array.isArray(e)?L(e):e;return Object.keys(i).reduce((function(t,e){var o=i[e],u={get:function(){return this.$store.getters[n](o)},set:function(t){this.$store.commit(r,{path:o,value:t})}};return t[e]=u,t}),{})}));R((function(t,e,n,r){var i=Array.isArray(e)?L(e):e;return Object.keys(i).reduce((function(t,e){var o=i[e];return t[e]={get:function(){var t=this.$store,e=T(t.getters[n](o));return e.map((function(e){return Object.keys(e[1]).reduce((function(i,u){var a="".concat(o,"[").concat(e[0],"].").concat(u);return Object.defineProperty(i,u,{get:function(){return t.getters[n](a)},set:function(e){t.commit(r,{path:a,value:e})}})}),{})}))}},t}),{})}));function B(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function M(t,e,n){return e&&$(t.prototype,e),n&&$(t,n),t}function F(t){return parseInt(t)||t}var N=function(){function t(e){B(this,t),Object.assign(this,e,{id:F(e.id)})}return M(t,[{key:"getName",value:function(){return _.a.get(this,"info.name","name")}},{key:"getMember",value:function(){return _.a.map(_.a.get(this,"info.member",[]))}},{key:"getAvatar",value:function(){return _.a.get(this,"info.avatar","avatar")}},{key:"getMail",value:function(){return _.a.get(this,"info.email","email")}},{key:"isLoaded",value:function(){return _.a.get(this,"loaded","loaded")}},{key:"getDisplayName",value:function(){return _.a.get(this,"info.name","name")}}]),t}(),D=(n("2b3d"),n("a15b"),n("ac1f"),n("1276"),!1),z=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=new URL([D?"http://opigno3.docksal":window.location.origin,t].join(""));if(e){var r={token:e};Object.keys(r).forEach((function(t){return n.searchParams.append(t,r[t])}))}return n},V=function(t){var e=t.split("_");return{id:e.pop(),type:e.join("_")||"user"}},q={dataToken:"",selectedIds:[],selectedGroupsIds:[],dataUserList:{},dataAutocompletePath:"",dataUserDefault:[],groupsOfEntity:{user:{},group:{}}},W={getField:U,getAllAllowed:function(t,e){var n=e.groupsOfEntity;return _()(t.dataUserList).mapValues((function(t,e){return V(e)})).mapValues((function(t){var e=t.id,r=t.type;return _.a.get(n,"[".concat("user"==r?"user":"group","][").concat(e,"]"))})).value()},getAllDefault:function(t,e){var n=e.groupsOfEntity;return _()(t.dataUserDefault).mapValues((function(t){return V(t)})).mapValues((function(t){var e=t.id,r=t.type;return _.a.get(n,"[".concat("user"==r?"user":"group","][").concat(e,"]"))})).value()},groupsOfEntity:function(t){return t.groupsOfEntity},getAllAllowedUsers:function(t){return t.groupsOfEntity["user"]},getAllAllowedGroups:function(t){return t.groupsOfEntity["group"]},getAllAllowedClasses:function(t){return _.a.pickBy(t.groupsOfEntity["group"],{type:"class"})},getAllAllowedTrainings:function(t){return _.a.pickBy(t.groupsOfEntity["group"],{type:"training"})}},H={updateField:P,setInitialGroupedByType:function(t,e){var n=_()(e).groupBy((function(t){return"user"==t.type?"user":"group"})).mapValues((function(t){return _.a.mapKeys(t,(function(t){return t.id}))})).value();t.groupsOfEntity=g(g({},t.groupsOfEntity),n)},setInitialValues:function(t,e){var n=e.dataUserList,r=e.dataUserDefault,i=e.dataToken,o=e.dataAutocompletePath;t.dataUserList=n,t.dataUserDefault=r,t.dataToken=i,t.dataAutocompletePath=o},setSelectedFromDefault:function(t,e){var n=e.selectedIds,r=e.selectedGroupsIds;t.selectedIds=_.a.map(n,F),t.selectedGroupsIds=_.a.map(r,F)},updateUsersInfo:function(t,e){_.a.forEach(_.a.values(e),(function(e){t.groupsOfEntity["user"][e.id]=new N({id:e.id,key:"user_".concat(e.id),type:"user",loaded:!0,info:e})}))},updateGroupInfo:function(t,e){_.a.forEach(_.a.values(e),(function(e){var n=_.a.intersection(_.a.map(t.groupsOfEntity["user"],"id"),_.a.map(e.members));q.groupsOfEntity["group"]=Object.assign({},q.groupsOfEntity["group"],d({},e.id,new N(g(g({},e),{},{members:n}))))}))}},K={initLoad:function(){var t=k(regeneratorRuntime.mark((function t(e,n){var r,i,o,u,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,i=n.dataUserList,o=n.dataUserDefault,u=n.dataToken,a=n.dataAutocompletePath,t.next=4,r("putInitialValues",{dataUserDefault:o,dataUserList:i,dataToken:u,dataAutocompletePath:a});case 4:return t.next=6,r("loadAllUsersInfo");case 6:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),setSelectedFromDefault:function(t){var e=t.commit,n=t.getters.getAllDefault;e("setSelectedFromDefault",{selectedIds:_.a.map(_.a.pickBy(n,{type:"user"}),(function(t){return t.id})),selectedGroupsIds:_.a.map(_.a.pickBy(n,{type:"class"}),(function(t){return t.id}))})},loadAllUsersInfo:function(){var t=k(regeneratorRuntime.mark((function t(e){var r,i,o,u,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,i=e.commit,o=e.rootGetters,u=e.rootState.dataAutocompletePath,a=_.a.keys(o.getAllAllowedUsers),t.next=4,fetch(z(u),{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).catch((function(){return D?n("a116"):{}}));case 4:c=t.sent,i("updateUsersInfo",c.users),i("updateGroupInfo",c.members),r("setSelectedFromDefault");case 8:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),putInitialValues:function(t,e){var n=t.state,r=t.commit;r("setInitialValues",e);var i=_()(n.dataUserList).mapValues((function(t,e){return V(e)})).mapValues((function(t){var e=t.id,n=t.type;return new N({id:e,key:"".concat(n,"_").concat(e),type:n,loaded:!1})})).value();r("setInitialGroupedByType",i)},findByNameAndEmail:function(t,e){return!!e.length&&["user_1"]}},Z={state:q,getters:W,mutations:H,actions:K},Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"user-list"},[t.group?n("div",{staticClass:"back-to-group",on:{click:function(e){return t.$emit("backToGroup")}}},[n("i",{staticClass:"fi fi-rr-arrow-left"}),t._v(t._s(t.group.getName()))]):t._e(),t._l(t.getFilteredUsersGroupBy,(function(e,r){return t.groupedDisplay?n("div",{staticClass:"group-label"},[n("div",{staticClass:"group-letter"},[t._v(t._s(r))]),t._l(e,(function(e){return n("UserView",{key:e.key,attrs:{entity:e},on:{onUserClicked:function(e,n){return t.$emit("onUserClicked",e,n)}}})}))],2):t._e()})),t._l(t.getFilteredUsers,(function(e){return t.groupedDisplay?t._e():n("UserView",{key:e.key,attrs:{entity:e},on:{onUserClicked:function(e,n){return t.$emit("onUserClicked",e,n)}}})}))],2)},J=[],X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.entity.loaded?n("div",{staticClass:"user-view",class:{selected:t.isUserSelected},on:{click:function(e){return e.stopPropagation(),t.$emit("onUserClicked",t.entity,t.isUserSelected)}}},[n("img",{attrs:{src:t.entity.getAvatar()}}),n("div",{staticClass:"name"},[t._v(t._s(t.entity.getName()))]),t.isUserSelected?n("i",{staticClass:"fi fi-rr-check"}):t._e()]):t._e()},Q=[],tt={name:"user-view",props:["entity"],mounted:function(){},data:function(){return{name:"loading"}},methods:{},computed:g(g({},Object(w["d"])(["selectedIds"])),{},{isUserSelected:function(){var t=_.a.includes(this.selectedIds,this.entity.id);return t}})},et=tt;function nt(t,e,n,r,i,o,u,a){var c,s="function"===typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),o&&(s._scopeId="data-v-"+o),u?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},s._ssrRegister=c):i&&(c=a?function(){i.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(s.functional){s._injectStyles=c;var f=s.render;s.render=function(t,e){return c.call(e),f(t,e)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:s}}var rt=nt(et,X,Q,!1,null,null,null),it=rt.exports,ot={name:"user-list",components:{UserView:it},props:{group:{},userList:{},userFilter:{},groupedDisplay:{type:Boolean,default:!1},selectedIds:{type:Array}},data:function(){return{}},computed:{getFilteredUsers:function(){var t=this;return _.a.sortBy(_.a.pickBy(this.userList,(function(e,n){return!1===t.userFilter||_.a.includes(t.userFilter,n)})),(function(t){return t.getName()}))},getFilteredUsersGroupBy:function(){var t=_()(this.getFilteredUsers).filter({loaded:!0}).groupBy((function(t){var e=t.getName().charAt(0);return _.a.capitalize(e)})).value();return t=_.a.reduce(_.a.sortBy(_.a.keys(t)),(function(e,n){return e[n]=_.a.sortBy(t[n],(function(t){return t.getName()})),e}),{}),t}},mounted:function(){},methods:{}},ut=ot,at=nt(ut,Y,J,!1,null,null,null),ct=at.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"group-list"},t._l(t.getFilteredUsers,(function(e){return n("GroupView",{key:e.key,attrs:{entity:e},on:{viewGroup:function(e){return t.$emit("viewGroup",e)},onGroupClicked:function(e,n){return t.$emit("onGroupClicked",e,n)}}})})),1)},ft=[],lt={name:"user-list",components:{UserView:it},props:{group:{},userList:{},userFilter:{},groupedDisplay:{type:Boolean,default:!1},selectedIds:{type:Array}},data:function(){return{}},computed:{getFilteredUsers:function(){var t=this;return _.a.sortBy(_.a.pickBy(this.userList,(function(e,n){return!1===t.userFilter||_.a.includes(t.userFilter,n)})),(function(t){return t.getName()}))},getFilteredUsersGroupBy:function(){var t=_()(this.getFilteredUsers).filter({loaded:!0}).groupBy((function(t){var e=t.getName().charAt(0);return _.a.capitalize(e)})).value();return t=_.a.reduce(_.a.sortBy(_.a.keys(t)),(function(e,n){return e[n]=_.a.sortBy(t[n],(function(t){return t.getName()})),e}),{}),t}},mounted:function(){},methods:{}},pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.entity.loaded?n("section",{staticClass:"group-view",class:{selected:t.isGroupSelected},on:{click:t.onGroupClicked}},[n("img",{attrs:{src:t.entity.getAvatar()}}),n("div",{staticClass:"name"},[t._v(t._s(t.entity.getName()))]),n("i",{staticClass:"fi fi-rr-users",on:{click:function(e){return e.stopPropagation(),t.setGroupID.apply(null,arguments)}}}),t.isGroupSelected?n("i",{staticClass:"fi fi-rr-check"}):t._e()]):t._e()},ht=[],dt={name:"group-view",props:["entity"],mounted:function(){},data:function(){return{}},methods:{onGroupClicked:function(){this.$emit("onGroupClicked",this.entity,this.isGroupSelected)},setGroupID:function(){this.$emit("viewGroup",this.entity)},isGroupKeyInSelected:function(){return _.a.includes(this.selectedGroupsIds,this.entity.id)},isAllUsersIdInSelected:function(){var t=_.a.intersection(h(this.selectedIds),_.a.map(this.entity.members));return t.length==_.a.map(this.entity.members).length}},computed:g(g({},Object(w["d"])(["selectedIds","selectedGroupsIds"])),{},{isGroupSelected:function(){return this.isGroupKeyInSelected()&&this.isAllUsersIdInSelected()}})},vt=dt,gt=nt(vt,pt,ht,!1,null,null,null),yt=gt.exports,mt={name:"group-list",extends:lt,components:{GroupView:yt},props:[],data:function(){return{}},computed:{},mounted:function(){},methods:{}},bt=mt,_t=nt(bt,st,ft,!1,null,null,null),wt=_t.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition-group",{staticClass:"entity-selected",attrs:{name:"mode-fade",mode:"out-in"}},t._l(t.getFilteredUsers,(function(e,r){return e.loaded?n("div",{key:e.key,staticClass:"label-wrapper",on:{click:function(){return t.onClickEntity(e)}}},[n("div",{staticClass:"label"},[n("img",{attrs:{src:e.getAvatar()}}),n("div",{staticClass:"text"},[t._v(t._s(e.getName()))]),n("div",{staticClass:"close"},[n("i",{staticClass:"fi fi-rr-cross-small"})])])]):t._e()})),0)},jt=[],kt={methods:{getEntityById:function(t,e){return this.groupsOfEntity[t][e]}}},Ot={name:"entity-selected",extends:kt,components:{UserView:it,GroupView:yt},props:["selectedIds","selectedGroupsIds"],mounted:function(){},data:function(){return{}},methods:{getAll:function(){var t=[].concat(h(this.selectedIds),h(this.selectedGroupsIds));return t},isUser:function(t){return"user"===t.type},onClickEntity:function(t){this.$emit(this.isUser(t)?"onUserClicked":"onGroupClicked",t,!0)}},computed:g(g(g({},Object(w["d"])(["groupsOfEntity"])),Object(w["c"])(["getAllAllowedUsers"])),{},{getFilteredUsers:function(){var t=this,e=_()(this.selectedIds).map((function(e){return t.getEntityById("user",e)})).filter().filter((function(e){return!_.a.intersection(t.selectedGroupsIds,e.getMember()).length})).value(),n=_()(this.selectedGroupsIds).map((function(e){return t.getEntityById("group",e)})).filter().value();return[].concat(h(e),h(n))}})},St=Ot,At=nt(St,xt,jt,!1,null,null,null),Et=At.exports;m.a.use(x["a"]),m.a.use(w["a"]);var It=new w["a"].Store(g({},Z)),Ct={name:"app",extends:kt,store:It,components:{UserList:ct,GroupList:wt,EntitySelected:Et},props:{"data-type":{type:String,default:"id"},"data-token":{},"data-autocomplete-path":{},"data-drupal-selector":{},"data-multiple":{},"data-name":{},"data-id":{},"data-class":{},"data-user-load":{},"data-user-list":{type:Object,default:function(){return{}}},"data-user-default":{type:Array,default:function(){return[]}}},data:function(){return{debug:D,active:"users",filter:"",group:""}},computed:g(g(g({},G(["selectedIds","selectedGroupsIds"])),Object(w["c"])(["getAllAllowed","groupsOfEntity","getAllAllowedUsers","getAllAllowedClasses","getAllAllowedTrainings"])),{},{applyFiltersToUsers:function(){var t=this;return _.a.pickBy(this.getAllAllowedUsers,(function(e){var n=e.getMember(),r=t.group.id;return(!r||_.a.includes(n,r))&&(_.a.includes(_.a.lowerCase(e.getName()),_.a.lowerCase(t.filter))||_.a.includes(_.a.lowerCase(e.getMail()),_.a.lowerCase(t.filter)))}))},applyFiltersToGroupClasses:function(){return this.applyFiltersToGroup(this.getAllAllowedClasses)},applyFiltersToGroupTrainings:function(){return this.applyFiltersToGroup(this.getAllAllowedTrainings)},getStoringValuesByEntity:{get:function(){var t=this,e=this.dataType;return[].concat(h(_.a.map(this.selectedIds,(function(n){return t.getEntityById("user",n)[e]}))),h(_.a.map(this.selectedGroupsIds,(function(n){return t.getEntityById("group",n)[e]}))))},set:function(){}}}),mounted:function(){this.initLoad(g({},this.$props)),this.$on("onUserClicked",this.onUserClicked),this.$on("onGroupClicked",this.onGroupClicked)},filters:{},methods:g(g({},Object(w["b"])(["initLoad","putInitialValues","findByNameAndEmail","findByGroup"])),{},{selectedIdsInput:function(t){return t},applyFiltersToGroup:function(t){var e=this;return _.a.sortBy(_.a.pickBy(t,(function(t){return _.a.includes(_.a.lowerCase(t.getName()),_.a.toLower(e.filter))})),(function(t){return t.getName()}))},setGroupID:function(t){this.filter="",this.group=t},backToGroup:function(){this.filter="",this.group=""},onClickTab:function(t){this.active=t,this.group="",this.filter=""},onUserClicked:function(t,e){m.a.set(this,"selectedIds",_.a.xor(this.selectedIds,[t.id])),e&&m.a.set(this,"selectedGroupsIds",_.a.difference(this.selectedGroupsIds,t.getMember()))},onGroupClicked:function(t,e){var n=_.a.map(t.members);if(e){m.a.set(this,"selectedIds",_.a.xor(this.selectedIds,n));var r=_.a.pick(this.getAllAllowedUsers,n),i=_.a.concat.apply(_.a,h(_.a.map(r,(function(t){return t.getMember()}))));m.a.set(this,"selectedGroupsIds",_.a.difference(this.selectedGroupsIds,[t.id].concat(h(i))))}else m.a.set(this,"selectedIds",_.a.union(this.selectedIds,n)),m.a.set(this,"selectedGroupsIds",_.a.union(this.selectedGroupsIds,[t.id]))},getStoringIdByEntity:function(t){return t[this.dataType]}})},Lt=Ct,Tt=nt(Lt,u,a,!1,null,null,null),Rt=Tt.exports;e["default"]=Rt},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("861d"),o=n("e8b5"),u=n("23cb"),a=n("50c4"),c=n("fc6a"),s=n("8418"),f=n("b622"),l=n("1dde"),p=l("slice"),h=f("species"),d=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!p},{slice:function(t,e){var n,r,f,l=c(this),p=a(l.length),g=u(t,p),y=u(void 0===e?p:e,p);if(o(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?i(n)&&(n=n[h],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return d.call(l,g,y);for(r=new(void 0===n?Array:n)(v(y-g,0)),f=0;g<y;g++,f++)g in l&&s(r,f,l[g]);return r.length=f,r}})},fc6a:function(t,e,n){var r=n("44ad"),i=n("1d80");t.exports=function(t){return r(i(t))}},fce3:function(t,e,n){var r=n("d039");t.exports=r((function(){var t=RegExp(".","string".charAt(0));return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,e,n){var r=n("da84");t.exports=r.Promise}})["default"]}));;
'use strict';

(function ($) {

  $.fn.generateProps = function () {
    var props = {};
    $(this).each(function () {
      $.each(this.attributes, function () {
        if (this.specified) {
          props['data-' + this.name] = this.value;
        }
      });
      var user_data_list = {}
      $('option', this).each(function (i, e) {
        user_data_list[jQuery(e).val()] = $(e).text()
      })
      props['data-user-list'] = user_data_list;
      props['data-user-default'] = jQuery(this).val();
    });
    return props;
  };

  Drupal.behaviors.opignoUserSelection = {
    attach: function (context, settings) {
      var userselect = window.userselect || false;
      if(!userselect) {
        return;
      }

      $('[data-user-load]', context).each(function (index, element) {
        var properties = $(element).generateProps();
        new Vue({
          el: element,
          render: function (h) {
            return h(userselect, {
              props: properties,
            })
          }
        })
      });

    },
  }
}(jQuery));
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.filterGuidelines = {
    attach: function attach(context) {
      function updateFilterGuidelines(event) {
        var $this = $(event.target);
        var value = $this.val();
        $this.closest('.js-filter-wrapper').find('[data-drupal-format-id]').hide().filter("[data-drupal-format-id=\"".concat(value, "\"]")).show();
      }

      $(context).find('.js-filter-guidelines').once('filter-guidelines').find(':header').hide().closest('.js-filter-wrapper').find('select.js-filter-list').on('change.filterGuidelines', updateFilterGuidelines).trigger('change.filterGuidelines');
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  function findFieldForFormatSelector($formatSelector) {
    var fieldId = $formatSelector.attr('data-editor-for');
    return $("#".concat(fieldId)).get(0);
  }

  function filterXssWhenSwitching(field, format, originalFormatID, callback) {
    if (format.editor.isXssSafe) {
      callback(field, format);
    } else {
        $.ajax({
          url: Drupal.url("editor/filter_xss/".concat(format.format)),
          type: 'POST',
          data: {
            value: field.value,
            original_format_id: originalFormatID
          },
          dataType: 'json',
          success: function success(xssFilteredValue) {
            if (xssFilteredValue !== false) {
              field.value = xssFilteredValue;
            }

            callback(field, format);
          }
        });
      }
  }

  function changeTextEditor(field, newFormatID) {
    var previousFormatID = field.getAttribute('data-editor-active-text-format');

    if (drupalSettings.editor.formats[previousFormatID]) {
      Drupal.editorDetach(field, drupalSettings.editor.formats[previousFormatID]);
    } else {
        $(field).off('.editor');
      }

    if (drupalSettings.editor.formats[newFormatID]) {
      var format = drupalSettings.editor.formats[newFormatID];
      filterXssWhenSwitching(field, format, previousFormatID, Drupal.editorAttach);
    }

    field.setAttribute('data-editor-active-text-format', newFormatID);
  }

  function onTextFormatChange(event) {
    var $select = $(event.target);
    var field = event.data.field;
    var activeFormatID = field.getAttribute('data-editor-active-text-format');
    var newFormatID = $select.val();

    if (newFormatID === activeFormatID) {
      return;
    }

    var supportContentFiltering = drupalSettings.editor.formats[newFormatID] && drupalSettings.editor.formats[newFormatID].editorSupportsContentFiltering;
    var hasContent = field.value !== '';

    if (hasContent && supportContentFiltering) {
      var message = Drupal.t('Changing the text format to %text_format will permanently remove content that is not allowed in that text format.<br><br>Save your changes before switching the text format to avoid losing data.', {
        '%text_format': $select.find('option:selected').text()
      });
      var confirmationDialog = Drupal.dialog("<div>".concat(message, "</div>"), {
        title: Drupal.t('Change text format?'),
        dialogClass: 'editor-change-text-format-modal',
        resizable: false,
        buttons: [{
          text: Drupal.t('Continue'),
          class: 'button button--primary',
          click: function click() {
            changeTextEditor(field, newFormatID);
            confirmationDialog.close();
          }
        }, {
          text: Drupal.t('Cancel'),
          class: 'button',
          click: function click() {
            $select.val(activeFormatID);
            confirmationDialog.close();
          }
        }],
        closeOnEscape: false,
        create: function create() {
          $(this).parent().find('.ui-dialog-titlebar-close').remove();
        },
        beforeClose: false,
        close: function close(event) {
          $(event.target).remove();
        }
      });
      confirmationDialog.showModal();
    } else {
      changeTextEditor(field, newFormatID);
    }
  }

  Drupal.editors = {};
  Drupal.behaviors.editor = {
    attach: function attach(context, settings) {
      if (!settings.editor) {
        return;
      }

      $(context).find('[data-editor-for]').once('editor').each(function () {
        var $this = $(this);
        var field = findFieldForFormatSelector($this);

        if (!field) {
          return;
        }

        var activeFormatID = $this.val();
        field.setAttribute('data-editor-active-text-format', activeFormatID);

        if (settings.editor.formats[activeFormatID]) {
          Drupal.editorAttach(field, settings.editor.formats[activeFormatID]);
        }

        $(field).on('change.editor keypress.editor', function () {
          field.setAttribute('data-editor-value-is-changed', 'true');
          $(field).off('.editor');
        });

        if ($this.is('select')) {
          $this.on('change.editorAttach', {
            field: field
          }, onTextFormatChange);
        }

        $this.parents('form').on('submit', function (event) {
          if (event.isDefaultPrevented()) {
            return;
          }

          if (settings.editor.formats[activeFormatID]) {
            Drupal.editorDetach(field, settings.editor.formats[activeFormatID], 'serialize');
          }
        });
      });
    },
    detach: function detach(context, settings, trigger) {
      var editors;

      if (trigger === 'serialize') {
        editors = $(context).find('[data-editor-for]').findOnce('editor');
      } else {
        editors = $(context).find('[data-editor-for]').removeOnce('editor');
      }

      editors.each(function () {
        var $this = $(this);
        var activeFormatID = $this.val();
        var field = findFieldForFormatSelector($this);

        if (field && activeFormatID in settings.editor.formats) {
          Drupal.editorDetach(field, settings.editor.formats[activeFormatID], trigger);
        }
      });
    }
  };

  Drupal.editorAttach = function (field, format) {
    if (format.editor) {
      Drupal.editors[format.editor].attach(field, format);
      Drupal.editors[format.editor].onChange(field, function () {
        $(field).trigger('formUpdated');
        field.setAttribute('data-editor-value-is-changed', 'true');
      });
    }
  };

  Drupal.editorDetach = function (field, format, trigger) {
    if (format.editor) {
      Drupal.editors[format.editor].detach(field, format, trigger);

      if (field.getAttribute('data-editor-value-is-changed') === 'false') {
        field.value = field.getAttribute('data-editor-value-original');
      }
    }
  };
})(jQuery, Drupal, drupalSettings);;
