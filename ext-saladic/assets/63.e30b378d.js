(window.saladictEntry=window.saladictEntry||[]).push([[63],{1353:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),c="undefined"!=typeof window?a.useLayoutEffect:a.useEffect;const l=e=>{const{tag:t="div",html:n,...l}=e,i=Object(a.useMemo)(()=>{try{const e=document.createDocumentFragment(),t=(new DOMParser).parseFromString(n,"text/html");return Array.from(t.body.childNodes).forEach(t=>{e.appendChild(t)}),e}catch(e){!1}return null},[n]),[o,s]=Object(a.useState)(null);return c(()=>{if(i&&o){for(;o.childNodes.length>0;)o.childNodes[0].remove();o.appendChild(i)}},[i,o]),r.a.createElement(t,{...l,ref:s})}},1355:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=e=>{const{title:t,className:n,children:a,...c}=e;return r.a.createElement("div",{className:"entryBox-Wrap"+(n?" "+n:""),...c},r.a.createElement("section",{className:"entryBox"},r.a.createElement("h1",{className:"entryBox-Title"},t),r.a.createElement("div",null,a)))}},679:function(e,t,n){"use strict";n.r(t),n.d(t,"DictWeblioejje",(function(){return i}));var a=n(0),r=n.n(a),c=n(1355),l=n(1353);const i=({result:e})=>r.a.createElement("div",null,e.map((e,t)=>e.title?r.a.createElement(c.a,{key:e.title+t,title:e.title},r.a.createElement(l.a,{html:e.content})):r.a.createElement(l.a,{key:t,className:"dictWeblioejje-Box",html:e.content})));t.default=i}}]);