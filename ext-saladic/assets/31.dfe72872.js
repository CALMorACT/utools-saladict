(window.saladictEntry=window.saladictEntry||[]).push([[31],{116:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(0),o=r(31);function i(e,t){var r=Object(o.e)(o.a),i=Object(o.e)((function(){return e(r.current)}));return[Object(n.useRef)((function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];r.current.next(t?t(e):e[0])})).current,i.current]}},128:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return c})),r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return l}));var n=r(0),o=r.n(n),i=r(44);const a=e=>{if(!e.src)return null;const t=e.width||e.height||"1.2em",r=e.height||t;return o.a.createElement("a",{className:"saladict-Speaker",href:e.src,target:"_blank",rel:"noopener noreferrer",style:{width:t,height:r}})};t.c=o.a.memo(a);const c=e=>{const{onPlayStart:t,...r}=e,a=Object(n.useCallback)(e=>{if(e.target&&"A"===e.target.tagName&&e.target.href&&e.target.classList&&e.target.classList.contains("saladict-Speaker")){e.preventDefault(),e.stopPropagation();const r=e.target;r.classList.add("isActive"),Object(i.b)([Object(i.d)(1e3),t(r.href)]).then(()=>{r.classList.remove("isActive")})}},[t]);return o.a.createElement("div",{onClick:a,...r})},s=e=>{if(!e)return"";const t=document.createElement("a");return t.target="_blank",t.href=e,t.className="saladict-Speaker",t},l=e=>e?`<a href="${e}" target="_blank" rel="noopener noreferrer" class="saladict-Speaker"></a>`:""},180:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(31),o=r(0);function i(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=Object(o.useRef)(e);r.current=e;var i=Object(n.d)(),a=Object(o.useRef)(),c=Object(o.useRef)();if(Object(o.useEffect)((function(){c.current=null;var e=r.current[0],t=e.subscribe({next:function(t){if(e===r.current[0])return r.current[1]?r.current[1](t):void 0},error:function(t){if(e===r.current[0]){if(r.current[2])return c.current=null,r.current[2](t);c.current=t,i()}},complete:function(){if(e===r.current[0])return r.current[3]?r.current[3]():void 0}});return a.current=t,function(){t.unsubscribe()}}),[e[0]]),c.current)throw c.current;return a}},31:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return c})),r.d(t,"a",(function(){return s})),r.d(t,"e",(function(){return l})),r.d(t,"d",(function(){return u}));var n=r(0),o=r(91),i=r(160);function a(e){return e}function c(e){return Object(i.a)(0)(e)}function s(){return new o.a}function l(e){var t=Object(n.useRef)(!0),r=Object(n.useRef)(null);return t.current&&(t.current=!1,r.current=e()),r}function u(){var e=Object(n.useState)(0)[1];return Object(n.useRef)((function(){return e(f)})).current}function f(e){return(e+1)%1e6}"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect},507:function(e,t,r){e.exports=function(){"use strict";var e=Object.freeze||function(e){return e},t=e(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),r=e(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),n=e(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),o=e(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),i=e(["#text"]),a=Object.freeze||function(e){return e},c=a(["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","coords","crossorigin","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","integrity","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns"]),s=a(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),l=a(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),u=a(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),f=Object.hasOwnProperty,d=Object.setPrototypeOf,p=("undefined"!=typeof Reflect&&Reflect).apply;function m(e,t){d&&d(e,null);for(var r=t.length;r--;){var n=t[r];if("string"==typeof n){var o=n.toLowerCase();o!==n&&(Object.isFrozen(t)||(t[r]=o),n=o)}e[n]=!0}return e}function h(e){var t={},r=void 0;for(r in e)p(f,e,[r])&&(t[r]=e[r]);return t}p||(p=function(e,t,r){return e.apply(t,r)});var y=Object.seal||function(e){return e},g=y(/\{\{[\s\S]*|[\s\S]*\}\}/gm),b=y(/<%[\s\S]*|[\s\S]*%>/gm),v=y(/^data-[\-\w.\u00B7-\uFFFF]/),T=y(/^aria-[\-\w]+$/),A=y(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),w=y(/^(?:\w+script|data):/i),x=y(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function _(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var S=("undefined"!=typeof Reflect&&Reflect).apply,E=Array.prototype.slice,L=Object.freeze,k=function(){return"undefined"==typeof window?null:window};S||(S=function(e,t,r){return e.apply(t,r)});var N=function(e,t){if("object"!==(void 0===e?"undefined":O(e))||"function"!=typeof e.createPolicy)return null;var r=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(r=t.currentScript.getAttribute("data-tt-policy-suffix"));var n="dompurify"+(r?"#"+r:"");try{return e.createPolicy(n,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+n+" could not be created."),null}};return function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k(),f=function(t){return e(t)};if(f.version="1.0.11",f.removed=[],!a||!a.document||9!==a.document.nodeType)return f.isSupported=!1,f;var d=a.document,p=!1,y=!1,M=a.document,R=a.DocumentFragment,C=a.HTMLTemplateElement,D=a.Node,j=a.NodeFilter,H=a.NamedNodeMap,F=void 0===H?a.NamedNodeMap||a.MozNamedAttrMap:H,z=a.Text,I=a.Comment,q=a.DOMParser,P=a.TrustedTypes;if("function"==typeof C){var U=M.createElement("template");U.content&&U.content.ownerDocument&&(M=U.content.ownerDocument)}var W=N(P,d),B=W?W.createHTML(""):"",G=M,V=G.implementation,K=G.createNodeIterator,Y=G.getElementsByTagName,$=G.createDocumentFragment,X=d.importNode,Z={};f.isSupported=V&&void 0!==V.createHTMLDocument&&9!==M.documentMode;var J=g,Q=b,ee=v,te=T,re=w,ne=x,oe=A,ie=null,ae=m({},[].concat(_(t),_(r),_(n),_(o),_(i))),ce=null,se=m({},[].concat(_(c),_(s),_(l),_(u))),le=null,ue=null,fe=!0,de=!0,pe=!1,me=!1,he=!1,ye=!1,ge=!1,be=!1,ve=!1,Te=!1,Ae=!1,we=!0,xe=!0,Oe=!1,_e={},Se=m({},["audio","head","math","script","style","template","svg","video"]),Ee=m({},["audio","video","img","source","image"]),Le=null,ke=m({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Ne=null,Me=M.createElement("form"),Re=function(e){Ne&&Ne===e||(e&&"object"===(void 0===e?"undefined":O(e))||(e={}),ie="ALLOWED_TAGS"in e?m({},e.ALLOWED_TAGS):ae,ce="ALLOWED_ATTR"in e?m({},e.ALLOWED_ATTR):se,Le="ADD_URI_SAFE_ATTR"in e?m({},e.ADD_URI_SAFE_ATTR):ke,le="FORBID_TAGS"in e?m({},e.FORBID_TAGS):{},ue="FORBID_ATTR"in e?m({},e.FORBID_ATTR):{},_e="USE_PROFILES"in e&&e.USE_PROFILES,fe=!1!==e.ALLOW_ARIA_ATTR,de=!1!==e.ALLOW_DATA_ATTR,pe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,me=e.SAFE_FOR_JQUERY||!1,he=e.SAFE_FOR_TEMPLATES||!1,ye=e.WHOLE_DOCUMENT||!1,ve=e.RETURN_DOM||!1,Te=e.RETURN_DOM_FRAGMENT||!1,Ae=e.RETURN_DOM_IMPORT||!1,be=e.FORCE_BODY||!1,we=!1!==e.SANITIZE_DOM,xe=!1!==e.KEEP_CONTENT,Oe=e.IN_PLACE||!1,oe=e.ALLOWED_URI_REGEXP||oe,he&&(de=!1),Te&&(ve=!0),_e&&(ie=m({},[].concat(_(i))),ce=[],!0===_e.html&&(m(ie,t),m(ce,c)),!0===_e.svg&&(m(ie,r),m(ce,s),m(ce,u)),!0===_e.svgFilters&&(m(ie,n),m(ce,s),m(ce,u)),!0===_e.mathMl&&(m(ie,o),m(ce,l),m(ce,u))),e.ADD_TAGS&&(ie===ae&&(ie=h(ie)),m(ie,e.ADD_TAGS)),e.ADD_ATTR&&(ce===se&&(ce=h(ce)),m(ce,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&m(Le,e.ADD_URI_SAFE_ATTR),xe&&(ie["#text"]=!0),ye&&m(ie,["html","head","body"]),ie.table&&m(ie,["tbody"]),L&&L(e),Ne=e)},Ce=function(e){f.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=B}},De=function(e,t){try{f.removed.push({attribute:t.getAttributeNode(e),from:t})}catch(e){f.removed.push({attribute:null,from:t})}t.removeAttribute(e)},je=function(e){var t=void 0,r=void 0;if(be)e="<remove></remove>"+e;else{var n=e.match(/^[\s]+/);(r=n&&n[0])&&(e=e.slice(r.length))}if(p)try{t=(new q).parseFromString(e,"text/html")}catch(e){}if(y&&m(le,["title"]),!t||!t.documentElement){var o=(t=V.createHTMLDocument("")).body;o.parentNode.removeChild(o.parentNode.firstElementChild),o.outerHTML=W?W.createHTML(e):e}return r&&t.body.insertBefore(M.createTextNode(r),t.body.childNodes[0]||null),Y.call(t,ye?"html":"body")[0]};f.isSupported&&(function(){try{je('<svg><p><style><img src="</style><img src=x onerror=1//">').querySelector("svg img")&&(p=!0)}catch(e){}}(),function(){try{je("<x/><title>&lt;/title&gt;&lt;img&gt;").querySelector("title").innerHTML.match(/<\/title/)&&(y=!0)}catch(e){}}());var He=function(e){return K.call(e.ownerDocument||e,e,j.SHOW_ELEMENT|j.SHOW_COMMENT|j.SHOW_TEXT,(function(){return j.FILTER_ACCEPT}),!1)},Fe=function(e){return!(e instanceof z||e instanceof I||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof F&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute)},ze=function(e){return"object"===(void 0===D?"undefined":O(D))?e instanceof D:e&&"object"===(void 0===e?"undefined":O(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Ie=function(e,t,r){Z[e]&&Z[e].forEach((function(e){e.call(f,t,r,Ne)}))},qe=function(e){var t=void 0;if(Ie("beforeSanitizeElements",e,null),Fe(e))return Ce(e),!0;var r=e.nodeName.toLowerCase();if(Ie("uponSanitizeElement",e,{tagName:r,allowedTags:ie}),!ie[r]||le[r]){if(xe&&!Se[r]&&"function"==typeof e.insertAdjacentHTML)try{var n=e.innerHTML;e.insertAdjacentHTML("AfterEnd",W?W.createHTML(n):n)}catch(e){}return Ce(e),!0}return"noscript"===r&&e.innerHTML.match(/<\/noscript/i)||"noembed"===r&&e.innerHTML.match(/<\/noembed/i)?(Ce(e),!0):(!me||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(f.removed.push({element:e.cloneNode()}),e.innerHTML?e.innerHTML=e.innerHTML.replace(/</g,"&lt;"):e.innerHTML=e.textContent.replace(/</g,"&lt;")),he&&3===e.nodeType&&(t=(t=(t=e.textContent).replace(J," ")).replace(Q," "),e.textContent!==t&&(f.removed.push({element:e.cloneNode()}),e.textContent=t)),Ie("afterSanitizeElements",e,null),!1)},Pe=function(e,t,r){if(we&&("id"===t||"name"===t)&&(r in M||r in Me))return!1;if(de&&ee.test(t));else if(fe&&te.test(t));else{if(!ce[t]||ue[t])return!1;if(Le[t]);else if(oe.test(r.replace(ne,"")));else if("src"!==t&&"xlink:href"!==t||"script"===e||0!==r.indexOf("data:")||!Ee[e])if(pe&&!re.test(r.replace(ne,"")));else if(r)return!1}return!0},Ue=function(e){var t=void 0,r=void 0,n=void 0,o=void 0,i=void 0;Ie("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ce};for(i=a.length;i--;){var s=t=a[i],l=s.name,u=s.namespaceURI;if(r=t.value.trim(),n=l.toLowerCase(),c.attrName=n,c.attrValue=r,c.keepAttr=!0,Ie("uponSanitizeAttribute",e,c),r=c.attrValue,"name"===n&&"IMG"===e.nodeName&&a.id)o=a.id,a=S(E,a,[]),De("id",e),De(l,e),a.indexOf(o)>i&&e.setAttribute("id",o.value);else{if("INPUT"===e.nodeName&&"type"===n&&"file"===r&&c.keepAttr&&(ce[n]||!ue[n]))continue;"id"===l&&e.setAttribute(l,""),De(l,e)}if(c.keepAttr){he&&(r=(r=r.replace(J," ")).replace(Q," "));var d=e.nodeName.toLowerCase();if(Pe(d,n,r))try{u?e.setAttributeNS(u,l,r):e.setAttribute(l,r),f.removed.pop()}catch(e){}}}Ie("afterSanitizeAttributes",e,null)}},We=function e(t){var r=void 0,n=He(t);for(Ie("beforeSanitizeShadowDOM",t,null);r=n.nextNode();)Ie("uponSanitizeShadowNode",r,null),qe(r)||(r.content instanceof R&&e(r.content),Ue(r));Ie("afterSanitizeShadowDOM",t,null)};return f.sanitize=function(e,t){var r=void 0,n=void 0,o=void 0,i=void 0,c=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!ze(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");if("string"!=typeof(e=e.toString()))throw new TypeError("dirty is not a string, aborting")}if(!f.isSupported){if("object"===O(a.toStaticHTML)||"function"==typeof a.toStaticHTML){if("string"==typeof e)return a.toStaticHTML(e);if(ze(e))return a.toStaticHTML(e.outerHTML)}return e}if(ge||Re(t),f.removed=[],Oe);else if(e instanceof D)1===(n=(r=je("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===n.nodeName||"HTML"===n.nodeName?r=n:r.appendChild(n);else{if(!ve&&!he&&!ye&&-1===e.indexOf("<"))return W?W.createHTML(e):e;if(!(r=je(e)))return ve?null:B}r&&be&&Ce(r.firstChild);for(var s=He(Oe?e:r);o=s.nextNode();)3===o.nodeType&&o===i||qe(o)||(o.content instanceof R&&We(o.content),Ue(o),i=o);if(i=null,Oe)return e;if(ve){if(Te)for(c=$.call(r.ownerDocument);r.firstChild;)c.appendChild(r.firstChild);else c=r;return Ae&&(c=X.call(d,c,!0)),c}var l=ye?r.outerHTML:r.innerHTML;return he&&(l=(l=l.replace(J," ")).replace(Q," ")),W?W.createHTML(l):l},f.setConfig=function(e){Re(e),ge=!0},f.clearConfig=function(){Ne=null,ge=!1},f.isValidAttribute=function(e,t,r){Ne||Re({});var n=e.toLowerCase(),o=t.toLowerCase();return Pe(n,o,r)},f.addHook=function(e,t){"function"==typeof t&&(Z[e]=Z[e]||[],Z[e].push(t))},f.removeHook=function(e){Z[e]&&Z[e].pop()},f.removeHooks=function(e){Z[e]&&(Z[e]=[])},f.removeAllHooks=function(){Z={}},f}()}()},6:function(e,t,r){"use strict";r.d(t,"h",(function(){return i})),r.d(t,"g",(function(){return a})),r.d(t,"b",(function(){return c})),r.d(t,"f",(function(){return s})),r.d(t,"d",(function(){return f})),r.d(t,"e",(function(){return d})),r.d(t,"i",(function(){return p})),r.d(t,"j",(function(){return m})),r.d(t,"a",(function(){return h})),r.d(t,"c",(function(){return y}));var n=r(507),o=r.n(n);r(0),r(116),r(180),r(10),r(370),r(636);function i(){return Promise.reject(new Error("NO_RESULT"))}function a(){return Promise.reject(new Error("NETWORK_ERROR"))}async function c(e){return null==e||/zh-TW|zh-HK/i.test(e)?(await r.e(109).then(r.bind(null,1322))).chsToChz:null}function s(e,...t){if(!e)return"";let r="",n=null;for(let e=t.length-1;e>=0;e--)"string"==typeof t[e]?r=t[e]:"function"==typeof t[e]&&(n=t[e]);const o=r?e.querySelector(r):e;if(!o)return"";const i=o.textContent||"";return n?n(i):i}const l={FORBID_TAGS:["style"],FORBID_ATTR:["style"]};function u(e,{mode:t="innerHTML",selector:r,transform:n,host:i,config:a=l}={}){const c=r?e.querySelector(r):e;if(!c)return"";if(i){const e=e=>{e.setAttribute("href",y(i,e,"href")),e.setAttribute("src",y(i,e,"src"))};"A"!==c.tagName&&"IMG"!==c.tagName||e(c),c.querySelectorAll("a").forEach(e),c.querySelectorAll("img").forEach(e)}const s=o.a.sanitize(c,{...a,RETURN_DOM_FRAGMENT:!0}),u=s.firstChild?s.firstChild[t]:"";return n?n(u):u}function f(e,t,r={}){return u(t,"string"==typeof r?{selector:r,host:e,mode:"innerHTML"}:{...r,host:e,mode:"innerHTML"})}function d(e,t,r={}){return u(t,"string"==typeof r?{selector:r,host:e,mode:"outerHTML"}:{...r,host:e,mode:"outerHTML"})}function p(e,t){const r=e.querySelector(t);r&&r.remove()}function m(e,t){e.querySelectorAll(t).forEach(e=>e.remove())}function h(e){e.setAttribute("target","_blank"),e.setAttribute("rel","nofollow noopener noreferrer")}function y(e,t,r){e.endsWith("/")&&(e=e.slice(0,-1));const n=e.startsWith("https")?"https:":"http:",o=t.getAttribute(r);return o?/^[a-zA-Z0-9]+:/.test(o)?o:o.startsWith("//")?n+o:/^.?\/+/.test(o)?e+"/"+o.replace(/^.?\/+/,""):e+"/"+o:""}},60:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a}));r(507);var n=r(130),o=r.n(n);function i(e,t={}){return o()(e,{withCredentials:!1,...t,transformResponse:[e=>e],responseType:"document"}).then(({data:e})=>e)}function a(e,t={}){return o()(e,{withCredentials:!1,...t,transformResponse:[e=>e],responseType:"text"}).then(({data:e})=>e)}},636:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(3),o=r(7);function i(){}var a=r(46);function c(e,t,r){return function(n){return n.lift(new s(e,t,r))}}var s=function(){function e(e,t,r){this.nextOrObserver=e,this.error=t,this.complete=r}return e.prototype.call=function(e,t){return t.subscribe(new l(e,this.nextOrObserver,this.error,this.complete))},e}(),l=function(e){function t(t,r,n,o){var c=e.call(this,t)||this;return c._tapNext=i,c._tapError=i,c._tapComplete=i,c._tapError=n||i,c._tapComplete=o||i,Object(a.a)(r)?(c._context=c,c._tapNext=r):r&&(c._context=r,c._tapNext=r.next||i,c._tapError=r.error||i,c._tapComplete=r.complete||i),c}return n.__extends(t,e),t.prototype._next=function(e){try{this._tapNext.call(this._context,e)}catch(e){return void this.destination.error(e)}this.destination.next(e)},t.prototype._error=function(e){try{this._tapError.call(this._context,e)}catch(e){return void this.destination.error(e)}this.destination.error(e)},t.prototype._complete=function(){try{this._tapComplete.call(this._context)}catch(e){return void this.destination.error(e)}return this.destination.complete()},t}(o.a)},827:function(e,t,r){"use strict";r.r(t),r.d(t,"getSrcPage",(function(){return a})),r.d(t,"search",(function(){return c}));var n=r(60),o=r(6),i=r(128);const a=e=>"https://www.collinsdictionary.com/dictionary/english/"+encodeURIComponent(e.replace(/\s+/g,"-")),c=async(e,t,r,i)=>{e=encodeURIComponent(e.replace(/\s+/g,"-"));const a=await Object(o.b)(t.langCode),{options:c}=r.dicts.all.cobuild,u=[["https://www.collinsdictionary.com/dictionary/english/",l],["http://www.iciba.com/",s]];return c.cibaFirst&&u.reverse(),Object(n.a)(u[0][0]+e).then(e=>u[0][1](e,a)).catch(()=>Object(n.a)(u[1][0]+e).catch(o.g).then(e=>u[1][1](e,a)))};async function s(e,t){const r={type:"ciba",title:"",defs:[]},n={};if(r.title=Object(o.f)(e,".keyword",t),!r.title)return Object(o.h)();r.level=Object(o.f)(e,".base-level");const i=e.querySelector('.word-rate [class^="star"]');if(i){const e=Number(i.className[i.className.length-1]);isNaN(e)||(r.star=e)}const a=e.querySelector(".base-speak");a&&(r.prons=Array.from(a.children).map(e=>{const t=(e.textContent||"").trim(),r=(/http\S+.mp3/.exec(e.innerHTML)||[""])[0];return-1!==t.indexOf("英")?n.uk=r:-1!==t.indexOf("美")&&(n.us=r),{phsym:t,audio:r}}));const c=Array.from(e.querySelectorAll(".info-article")).find(e=>/柯林斯高阶英汉双解学习词典/.test(e.textContent||""));return c&&(r.defs=Array.from(c.querySelectorAll(".prep-order")).map(e=>Object(o.d)("http://www.iciba.com",e,{transform:t}))),r.defs.length>0?{result:r,audio:n}:Object(o.h)()}async function l(e,t){const r={type:"collins",sections:[]},n={};return r.sections=[...e.querySelectorAll("[data-type-block]")].filter(e=>{const t=e.dataset.typeBlock||"";return t&&"Video"!==t&&"Trends"!==t}).map(e=>{const r=e.dataset.typeBlock||"",a=e.dataset.titleBlock||"",c=e.dataset.numBlock||"";if("Learner"===r){if(!n.uk){const t=u(e);t&&(n.uk=t)}}else"English"===r?n.uk=u(e):"American"===r&&(n.us=u(e));return e.querySelectorAll(".audio_play_button").forEach(e=>{e.replaceWith(Object(i.d)(e.dataset.srcMp3))}),e.querySelectorAll("a.type-thesaurus").forEach(o.a),{id:r+a+c,className:e.className||"",type:r,title:a,num:c,content:Object(o.d)("https://www.collinsdictionary.com",e,{transform:t})}}),r.sections.length>0?{result:r,audio:n}:Object(o.h)()}function u(e){const t=e.querySelector(".pron .audio_play_button");if(t){const e=t.dataset.srcMp3;if(e)return e}}}}]);