(window.saladictEntry=window.saladictEntry||[]).push([[33],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),o=n(30);function i(e,t){var n=Object(o.e)(o.a),i=Object(o.e)((function(){return e(n.current)}));return[Object(r.useRef)((function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];n.current.next(t?t(e):e[0])})).current,i.current]}},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return d}));var r=n(0),o=n.n(r),i=n(389),a=n(46);const c=o.a.createContext(async()=>{}),s=e=>{const[t,n]=Object(r.useState)(()=>"string"==typeof e.src?e.src:"#"),a=Object(r.useContext)(c);if(Object(i.a)(()=>{n("string"==typeof e.src?e.src:"#")},[e.src]),!e.src)return null;const s=e.width||e.height||"1.2em",l=e.height||s;return o.a.createElement("a",{className:"saladict-Speaker",href:t,target:"_blank",rel:"noopener noreferrer",style:{width:s,height:l},onClick:async r=>{if("#"===t&&"function"==typeof e.src){r.stopPropagation(),r.preventDefault();const t=await e.src();a(t),n(t)}}})};t.c=o.a.memo(s);const l=e=>{const{onPlayStart:t,...n}=e,i=Object(r.useCallback)(e=>{if(e.target&&"A"===e.target.tagName&&e.target.href&&"#"!==e.target.href&&e.target.classList&&e.target.classList.contains("saladict-Speaker")){e.preventDefault(),e.stopPropagation();const n=e.target;n.classList.add("isActive"),Object(a.b)([Object(a.d)(1e3),t(n.href)]).then(()=>{n.classList.remove("isActive")})}},[t]);return o.a.createElement(c.Provider,{value:t},o.a.createElement("div",{onClick:i,...n}))},u=e=>{if(!e)return"";const t=document.createElement("a");return t.target="_blank",t.href=e,t.className="saladict-Speaker",t},d=e=>e?`<a href="${e}" target="_blank" rel="noopener noreferrer" class="saladict-Speaker"></a>`:""},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(30),o=n(0);function i(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Object(o.useRef)(e);n.current=e;var i=Object(r.d)(),a=Object(o.useRef)(),c=Object(o.useRef)();if(Object(o.useEffect)((function(){c.current=null;var e=n.current[0],t=e.subscribe({next:function(t){if(e===n.current[0])return n.current[1]?n.current[1](t):void 0},error:function(t){if(e===n.current[0]){if(n.current[2])return c.current=null,n.current[2](t);c.current=t,i()}},complete:function(){if(e===n.current[0])return n.current[3]?n.current[3]():void 0}});return a.current=t,function(){t.unsubscribe()}}),[e[0]]),c.current)throw c.current;return a}},30:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return u}));var r=n(0),o=n(91),i=n(161);function a(e){return e}function c(e){return Object(i.a)(0)(e)}function s(){return new o.a}function l(e){var t=Object(r.useRef)(!0),n=Object(r.useRef)(null);return t.current&&(t.current=!1,n.current=e()),n}function u(){var e=Object(r.useState)(0)[1];return Object(r.useRef)((function(){return e(d)})).current}function d(e){return(e+1)%1e6}"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect},389:function(e,t,n){"use strict";var r=n(0);t.a=function(e,t){var n=Object(r.useRef)(!0);Object(r.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)}},5:function(e,t,n){"use strict";n.d(t,"h",(function(){return i})),n.d(t,"g",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return f})),n.d(t,"i",(function(){return p})),n.d(t,"j",(function(){return m})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return y}));var r=n(507),o=n.n(r);n(0),n(116),n(182),n(10),n(371),n(634);function i(){return Promise.reject(new Error("NO_RESULT"))}function a(){return Promise.reject(new Error("NETWORK_ERROR"))}async function c(e){return null==e||/zh-TW|zh-HK/i.test(e)?(await n.e(109).then(n.bind(null,1321))).chsToChz:null}function s(e,...t){if(!e)return"";let n="",r=null;for(let e=t.length-1;e>=0;e--)"string"==typeof t[e]?n=t[e]:"function"==typeof t[e]&&(r=t[e]);const o=n?e.querySelector(n):e;if(!o)return"";const i=o.textContent||"";return r?r(i):i}const l={FORBID_TAGS:["style"],FORBID_ATTR:["style"]};function u(e,{mode:t="innerHTML",selector:n,transform:r,host:i,config:a=l}={}){const c=n?e.querySelector(n):e;if(!c)return"";if(i){const e=e=>{e.setAttribute("href",y(i,e,"href")),e.setAttribute("src",y(i,e,"src"))};"A"!==c.tagName&&"IMG"!==c.tagName||e(c),c.querySelectorAll("a").forEach(e),c.querySelectorAll("img").forEach(e)}const s=o.a.sanitize(c,{...a,RETURN_DOM_FRAGMENT:!0}),u=s.firstChild?s.firstChild[t]:"";return r?r(u):u}function d(e,t,n={}){return u(t,"string"==typeof n?{selector:n,host:e,mode:"innerHTML"}:{...n,host:e,mode:"innerHTML"})}function f(e,t,n={}){return u(t,"string"==typeof n?{selector:n,host:e,mode:"outerHTML"}:{...n,host:e,mode:"outerHTML"})}function p(e,t){const n=e.querySelector(t);n&&n.remove()}function m(e,t){e.querySelectorAll(t).forEach(e=>e.remove())}function h(e){e.setAttribute("target","_blank"),e.setAttribute("rel","nofollow noopener noreferrer")}function y(e,t,n){e.endsWith("/")&&(e=e.slice(0,-1));const r=e.startsWith("https")?"https:":"http:",o=t.getAttribute(n);return o?/^[a-zA-Z0-9]+:/.test(o)?o:o.startsWith("//")?r+o:/^.?\/+/.test(o)?e+"/"+o.replace(/^.?\/+/,""):e+"/"+o:""}},507:function(e,t,n){e.exports=function(){"use strict";var e=Object.freeze||function(e){return e},t=e(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),n=e(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),r=e(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),o=e(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),i=e(["#text"]),a=Object.freeze||function(e){return e},c=a(["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","coords","crossorigin","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","integrity","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","minlength","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns"]),s=a(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),l=a(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),u=a(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),d=Object.hasOwnProperty,f=Object.setPrototypeOf,p=("undefined"!=typeof Reflect&&Reflect).apply;function m(e,t){f&&f(e,null);for(var n=t.length;n--;){var r=t[n];if("string"==typeof r){var o=r.toLowerCase();o!==r&&(Object.isFrozen(t)||(t[n]=o),r=o)}e[r]=!0}return e}function h(e){var t={},n=void 0;for(n in e)p(d,e,[n])&&(t[n]=e[n]);return t}p||(p=function(e,t,n){return e.apply(t,n)});var y=Object.seal||function(e){return e},g=y(/\{\{[\s\S]*|[\s\S]*\}\}/gm),v=y(/<%[\s\S]*|[\s\S]*%>/gm),b=y(/^data-[\-\w.\u00B7-\uFFFF]/),x=y(/^aria-[\-\w]+$/),T=y(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),w=y(/^(?:\w+script|data):/i),A=y(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function O(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var _=("undefined"!=typeof Reflect&&Reflect).apply,E=Array.prototype.slice,L=Object.freeze,R=function(){return"undefined"==typeof window?null:window};_||(_=function(e,t,n){return e.apply(t,n)});var j=function(e,t){if("object"!==(void 0===e?"undefined":S(e))||"function"!=typeof e.createPolicy)return null;var n=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(n=t.currentScript.getAttribute("data-tt-policy-suffix"));var r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};return function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R(),d=function(t){return e(t)};if(d.version="2.0.7",d.removed=[],!a||!a.document||9!==a.document.nodeType)return d.isSupported=!1,d;var f=a.document,p=!1,y=!1,k=a.document,M=a.DocumentFragment,N=a.HTMLTemplateElement,C=a.Node,D=a.NodeFilter,H=a.NamedNodeMap,z=void 0===H?a.NamedNodeMap||a.MozNamedAttrMap:H,F=a.Text,I=a.Comment,P=a.DOMParser,U=a.TrustedTypes;if("function"==typeof N){var q=k.createElement("template");q.content&&q.content.ownerDocument&&(k=q.content.ownerDocument)}var W=j(U,f),B=W?W.createHTML(""):"",G=k,J=G.implementation,$=G.createNodeIterator,V=G.getElementsByTagName,K=G.createDocumentFragment,Y=f.importNode,X={};d.isSupported=J&&void 0!==J.createHTMLDocument&&9!==k.documentMode;var Z=g,Q=v,ee=b,te=x,ne=w,re=A,oe=T,ie=null,ae=m({},[].concat(O(t),O(n),O(r),O(o),O(i))),ce=null,se=m({},[].concat(O(c),O(s),O(l),O(u))),le=null,ue=null,de=!0,fe=!0,pe=!1,me=!1,he=!1,ye=!1,ge=!1,ve=!1,be=!1,xe=!1,Te=!1,we=!1,Ae=!0,Se=!0,Oe=!1,_e={},Ee=m({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","plaintext","script","style","svg","template","thead","title","video","xmp"]),Le=m({},["audio","video","img","source","image"]),Re=null,je=m({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),ke=null,Me=k.createElement("form"),Ne=function(e){ke&&ke===e||(e&&"object"===(void 0===e?"undefined":S(e))||(e={}),ie="ALLOWED_TAGS"in e?m({},e.ALLOWED_TAGS):ae,ce="ALLOWED_ATTR"in e?m({},e.ALLOWED_ATTR):se,Re="ADD_URI_SAFE_ATTR"in e?m(h(je),e.ADD_URI_SAFE_ATTR):je,le="FORBID_TAGS"in e?m({},e.FORBID_TAGS):{},ue="FORBID_ATTR"in e?m({},e.FORBID_ATTR):{},_e="USE_PROFILES"in e&&e.USE_PROFILES,de=!1!==e.ALLOW_ARIA_ATTR,fe=!1!==e.ALLOW_DATA_ATTR,pe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,me=e.SAFE_FOR_JQUERY||!1,he=e.SAFE_FOR_TEMPLATES||!1,ye=e.WHOLE_DOCUMENT||!1,be=e.RETURN_DOM||!1,xe=e.RETURN_DOM_FRAGMENT||!1,Te=e.RETURN_DOM_IMPORT||!1,we=e.RETURN_TRUSTED_TYPE||!1,ve=e.FORCE_BODY||!1,Ae=!1!==e.SANITIZE_DOM,Se=!1!==e.KEEP_CONTENT,Oe=e.IN_PLACE||!1,oe=e.ALLOWED_URI_REGEXP||oe,he&&(fe=!1),xe&&(be=!0),_e&&(ie=m({},[].concat(O(i))),ce=[],!0===_e.html&&(m(ie,t),m(ce,c)),!0===_e.svg&&(m(ie,n),m(ce,s),m(ce,u)),!0===_e.svgFilters&&(m(ie,r),m(ce,s),m(ce,u)),!0===_e.mathMl&&(m(ie,o),m(ce,l),m(ce,u))),e.ADD_TAGS&&(ie===ae&&(ie=h(ie)),m(ie,e.ADD_TAGS)),e.ADD_ATTR&&(ce===se&&(ce=h(ce)),m(ce,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&m(Re,e.ADD_URI_SAFE_ATTR),Se&&(ie["#text"]=!0),ye&&m(ie,["html","head","body"]),ie.table&&(m(ie,["tbody"]),delete le.tbody),L&&L(e),ke=e)},Ce=function(e){d.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=B}},De=function(e,t){try{d.removed.push({attribute:t.getAttributeNode(e),from:t})}catch(e){d.removed.push({attribute:null,from:t})}t.removeAttribute(e)},He=function(e){var t=void 0,n=void 0;if(ve)e="<remove></remove>"+e;else{var r=e.match(/^[\s]+/);(n=r&&r[0])&&(e=e.slice(n.length))}if(p)try{t=(new P).parseFromString(e,"text/html")}catch(e){}if(y&&m(le,["title"]),!t||!t.documentElement){var o=(t=J.createHTMLDocument("")).body;o.parentNode.removeChild(o.parentNode.firstElementChild),o.outerHTML=W?W.createHTML(e):e}return e&&n&&t.body.insertBefore(k.createTextNode(n),t.body.childNodes[0]||null),V.call(t,ye?"html":"body")[0]};d.isSupported&&(function(){try{He('<svg><p><textarea><img src="</textarea><img src=x abc=1//">').querySelector("svg img")&&(p=!0)}catch(e){}}(),function(){try{var e=He("<x/><title>&lt;/title&gt;&lt;img&gt;");/<\/title/.test(e.querySelector("title").innerHTML)&&(y=!0)}catch(e){}}());var ze=function(e){return $.call(e.ownerDocument||e,e,D.SHOW_ELEMENT|D.SHOW_COMMENT|D.SHOW_TEXT,(function(){return D.FILTER_ACCEPT}),!1)},Fe=function(e){return!(e instanceof F||e instanceof I||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof z&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI)},Ie=function(e){return"object"===(void 0===C?"undefined":S(C))?e instanceof C:e&&"object"===(void 0===e?"undefined":S(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Pe=function(e,t,n){X[e]&&X[e].forEach((function(e){e.call(d,t,n,ke)}))},Ue=function(e){var t=void 0;if(Pe("beforeSanitizeElements",e,null),Fe(e))return Ce(e),!0;var n=e.nodeName.toLowerCase();if(Pe("uponSanitizeElement",e,{tagName:n,allowedTags:ie}),("svg"===n||"math"===n)&&0!==e.querySelectorAll("p, br").length)return Ce(e),!0;if(!ie[n]||le[n]){if(Se&&!Ee[n]&&"function"==typeof e.insertAdjacentHTML)try{var r=e.innerHTML;e.insertAdjacentHTML("AfterEnd",W?W.createHTML(r):r)}catch(e){}return Ce(e),!0}return"noscript"===n&&/<\/noscript/i.test(e.innerHTML)||"noembed"===n&&/<\/noembed/i.test(e.innerHTML)?(Ce(e),!0):(!me||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(d.removed.push({element:e.cloneNode()}),e.innerHTML?e.innerHTML=e.innerHTML.replace(/</g,"&lt;"):e.innerHTML=e.textContent.replace(/</g,"&lt;")),he&&3===e.nodeType&&(t=(t=(t=e.textContent).replace(Z," ")).replace(Q," "),e.textContent!==t&&(d.removed.push({element:e.cloneNode()}),e.textContent=t)),Pe("afterSanitizeElements",e,null),!1)},qe=function(e,t,n){if(Ae&&("id"===t||"name"===t)&&(n in k||n in Me))return!1;if(fe&&ee.test(t));else if(de&&te.test(t));else{if(!ce[t]||ue[t])return!1;if(Re[t]);else if(oe.test(n.replace(re,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==n.indexOf("data:")||!Le[e])if(pe&&!ne.test(n.replace(re,"")));else if(n)return!1}return!0},We=function(e){var t=void 0,n=void 0,r=void 0,o=void 0,i=void 0;Pe("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ce};for(i=a.length;i--;){var s=t=a[i],l=s.name,u=s.namespaceURI;if(n=t.value.trim(),r=l.toLowerCase(),c.attrName=r,c.attrValue=n,c.keepAttr=!0,Pe("uponSanitizeAttribute",e,c),n=c.attrValue,"name"===r&&"IMG"===e.nodeName&&a.id)o=a.id,a=_(E,a,[]),De("id",e),De(l,e),a.indexOf(o)>i&&e.setAttribute("id",o.value);else{if("INPUT"===e.nodeName&&"type"===r&&"file"===n&&c.keepAttr&&(ce[r]||!ue[r]))continue;"id"===l&&e.setAttribute(l,""),De(l,e)}if(c.keepAttr)if(/svg|math/i.test(e.namespaceURI)&&new RegExp("</("+Object.keys(Ee).join("|")+")","i").test(n))De(l,e);else{he&&(n=(n=n.replace(Z," ")).replace(Q," "));var f=e.nodeName.toLowerCase();if(qe(f,r,n))try{u?e.setAttributeNS(u,l,n):e.setAttribute(l,n),d.removed.pop()}catch(e){}}}Pe("afterSanitizeAttributes",e,null)}},Be=function e(t){var n=void 0,r=ze(t);for(Pe("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Pe("uponSanitizeShadowNode",n,null),Ue(n)||(n.content instanceof M&&e(n.content),We(n));Pe("afterSanitizeShadowDOM",t,null)};return d.sanitize=function(e,t){var n=void 0,r=void 0,o=void 0,i=void 0,c=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!Ie(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");if("string"!=typeof(e=e.toString()))throw new TypeError("dirty is not a string, aborting")}if(!d.isSupported){if("object"===S(a.toStaticHTML)||"function"==typeof a.toStaticHTML){if("string"==typeof e)return a.toStaticHTML(e);if(Ie(e))return a.toStaticHTML(e.outerHTML)}return e}if(ge||Ne(t),d.removed=[],Oe);else if(e instanceof C)1===(r=(n=He("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===r.nodeName||"HTML"===r.nodeName?n=r:n.appendChild(r);else{if(!be&&!he&&!ye&&we&&-1===e.indexOf("<"))return W?W.createHTML(e):e;if(!(n=He(e)))return be?null:B}n&&ve&&Ce(n.firstChild);for(var s=ze(Oe?e:n);o=s.nextNode();)3===o.nodeType&&o===i||Ue(o)||(o.content instanceof M&&Be(o.content),We(o),i=o);if(i=null,Oe)return e;if(be){if(xe)for(c=K.call(n.ownerDocument);n.firstChild;)c.appendChild(n.firstChild);else c=n;return Te&&(c=Y.call(f,c,!0)),c}var l=ye?n.outerHTML:n.innerHTML;return he&&(l=(l=l.replace(Z," ")).replace(Q," ")),W&&we?W.createHTML(l):l},d.setConfig=function(e){Ne(e),ge=!0},d.clearConfig=function(){ke=null,ge=!1},d.isValidAttribute=function(e,t,n){ke||Ne({});var r=e.toLowerCase(),o=t.toLowerCase();return qe(r,o,n)},d.addHook=function(e,t){"function"==typeof t&&(X[e]=X[e]||[],X[e].push(t))},d.removeHook=function(e){X[e]&&X[e].pop()},d.removeHooks=function(e){X[e]&&(X[e]=[])},d.removeAllHooks=function(){X={}},d}()}()},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));n(507);var r=n(131),o=n.n(r);function i(e,t={}){return o()(e,{withCredentials:!1,...t,transformResponse:[e=>e],responseType:"document"}).then(({data:e})=>e)}function a(e,t={}){return o()(e,{withCredentials:!1,...t,transformResponse:[e=>e],responseType:"text"}).then(({data:e})=>e)}},634:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(3),o=n(7);function i(){}var a=n(45);function c(e,t,n){return function(r){return r.lift(new s(e,t,n))}}var s=function(){function e(e,t,n){this.nextOrObserver=e,this.error=t,this.complete=n}return e.prototype.call=function(e,t){return t.subscribe(new l(e,this.nextOrObserver,this.error,this.complete))},e}(),l=function(e){function t(t,n,r,o){var c=e.call(this,t)||this;return c._tapNext=i,c._tapError=i,c._tapComplete=i,c._tapError=r||i,c._tapComplete=o||i,Object(a.a)(n)?(c._context=c,c._tapNext=n):n&&(c._context=n,c._tapNext=n.next||i,c._tapError=n.error||i,c._tapComplete=n.complete||i),c}return r.__extends(t,e),t.prototype._next=function(e){try{this._tapNext.call(this._context,e)}catch(e){return void this.destination.error(e)}this.destination.next(e)},t.prototype._error=function(e){try{this._tapError.call(this._context,e)}catch(e){return void this.destination.error(e)}this.destination.error(e)},t.prototype._complete=function(){try{this._tapComplete.call(this._context)}catch(e){return void this.destination.error(e)}return this.destination.complete()},t}(o.a)},832:function(e,t,n){"use strict";n.r(t),n.d(t,"getSrcPage",(function(){return c})),n.d(t,"search",(function(){return l}));var r=n(24),o=n(5),i=n(119),a=n(61);const c=(e,t,n)=>`https://www.hjdict.com/${d(e,n)}/${encodeURIComponent(e)}`,s="https://www.hjdict.com",l=async(e,t,n,r)=>{const c={HJ_SITEID:3,HJ_UID:f(),HJ_SID:f(),HJ_SSID:f(),HJID:0,HJ_VT:2,HJ_SST:1,HJ_CSST:1,HJ_ST:1,HJ_CST:1,HJ_T:+new Date,_:f(16)};await Promise.all(Object.keys(c).map(e=>browser.cookies.set({url:"https://www.hjdict.com",domain:"hjdict.com",name:e,value:String(c[e])})));const l=r.langCode||d(e,n);return Object(a.a)(`https://www.hjdict.com/${l}/${encodeURIComponent(e)}`,{withCredentials:!0}).catch(o.g).then(e=>function(e,t,n){if(e.querySelector(".word-notfound"))return u(n);const r=e.querySelector(".word-suggestions");if(r)return t.related?{result:{type:"related",langCode:n,content:Object(o.d)(s,r)}}:u(n);let a="";const c=e.querySelector(".word-details-multi .word-details-header");c&&(c.querySelectorAll(".word-details-tab").forEach((e,t)=>{e.dataset.categories=String(t)}),a=Object(o.d)(s,c));e.querySelectorAll(".word-audio").forEach(e=>{e.replaceWith(Object(i.d)(e.dataset.src))});const l=[...e.querySelectorAll(".word-details-pane")].map((e,t)=>`\n      <div class="word-details-pane${0===t?" word-details-pane-active":""}">\n        <div class="word-details-pane-header">\n          ${Object(o.d)(s,e,".word-details-pane-header")}\n        </div>\n        <div class="word-details-pane-content">\n          ${Object(o.d)(s,e,".word-details-pane-content")}\n        </div>\n      </div>\n    `);return l.length>0?{result:{type:"lex",header:a,entries:l,langCode:n}}:u(n)}(e,n.dicts.all.hjdict.options,l))};function u(e){return{result:{type:"related",langCode:e,content:'<p style="text-align:center;">No Result</p>'}}}function d(e,t){return/\u00fc/i.test(e)?t.dicts.all.hjdict.options.uas:/\u00e4/i.test(e)?t.dicts.all.hjdict.options.aas:/\u00e9/i.test(e)?t.dicts.all.hjdict.options.eas:Object(r.f)(e)?"fr":Object(r.d)(e)?"de":Object(r.i)(e)?"es":Object(r.e)(e)?t.dicts.all.hjdict.options.engas:Object(r.g)(e)?"jp/jc":Object(r.h)(e)?"kr":Object(r.c)(e)?t.dicts.all.hjdict.options.chsas:"w"}function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,n="";if("number"==typeof e)for(let t=0;t<e;t++){n+=Math.floor(10*Math.random())%2==0?"x":"y"}else n=e||"xxxxxxxx-xyxx-yxxx-xxxy-xxyxxxxxxxxx";return("number"!=typeof t||t<2||t>36)&&(t=16),n.replace(/[xy]/g,(function(e){const n=Math.random()*t|0;return("x"===e?n:3&n|8).toString(t)}))}}}]);