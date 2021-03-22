(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{112:function(e,t,r){"use strict";r.d(t,"a",(function(){return U})),r.d(t,"b",(function(){return R}));var n=r(0),i=r.n(n),o=r(13),a=r.n(o),s=r(113),c=r.n(s),u=r(114),l=r.n(u),f=r(82),p=r.n(f);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function h(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function y(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}var m={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},T=Object.keys(m).map((function(e){return m[e]})),b={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},g=Object.keys(b).reduce((function(e,t){return e[b[t]]=t,e}),{}),v=function(e,t){for(var r=e.length-1;r>=0;r-=1){var n=e[r];if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}return null},A=function(e){var t=v(e,m.TITLE),r=v(e,"titleTemplate");if(Array.isArray(t)&&(t=t.join("")),r&&t)return r.replace(/%s/g,(function(){return t}));var n=v(e,"defaultTitle");return t||n||void 0},C=function(e){return v(e,"onChangeClientState")||function(){}},O=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return d({},e,t)}),{})},E=function(e,t){return t.filter((function(e){return void 0!==e[m.BASE]})).map((function(e){return e[m.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i+=1){var o=n[i].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},w=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&console&&"function"==typeof console.warn&&console.warn("Helmet: "+e+' should be of type "Array". Instead found type "'+typeof t[e]+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r,o=Object.keys(e),a=0;a<o.length;a+=1){var s=o[a],c=s.toLowerCase();-1===t.indexOf(c)||"rel"===r&&"canonical"===e[r].toLowerCase()||"rel"===c&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||"innerHTML"!==s&&"cssText"!==s&&"itemprop"!==s||(r=s)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][u]&&(i[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a+=1){var s=o[a],c=d({},n[s],i[s]);n[s]=c}return e}),[]).reverse()},S=function(e){return Array.isArray(e)?e.join(""):e},x=[m.NOSCRIPT,m.SCRIPT,m.STYLE],j=function(e,t){return void 0===t&&(t=!0),!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},P=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},I=function(e,t){return void 0===t&&(t={}),Object.keys(e).reduce((function(t,r){return t[b[r]||r]=e[r],t}),t)},L=function(e,t,r){switch(e){case m.TITLE:return{toComponent:function(){return r=t.titleAttributes,(n={key:e=t.title})["data-rh"]=!0,o=I(r,n),[i.a.createElement(m.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var i=P(r),o=S(t);return i?"<"+e+' data-rh="true" '+i+">"+j(o,n)+"</"+e+">":"<"+e+' data-rh="true">'+j(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return I(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})["data-rh"]=!0,n);return Object.keys(t).forEach((function(e){var r=b[e]||e;"innerHTML"===r||"cssText"===r?o.dangerouslySetInnerHTML={__html:t.innerHTML||t.cssText}:o[r]=t[e]})),i.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!("innerHTML"===e||"cssText"===e)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+j(n[t],r)+'"';return e?e+" "+i:i}),""),o=n.innerHTML||n.cssText||"",a=-1===x.indexOf(e);return t+"<"+e+' data-rh="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},k=function(e){var t=e.bodyAttributes,r=e.encode,n=e.htmlAttributes,i=e.linkTags,o=e.metaTags,a=e.noscriptTags,s=e.scriptTags,c=e.styleTags,u=e.title,l=void 0===u?"":u,f=e.titleAttributes;return{base:L(m.BASE,e.baseTag,r),bodyAttributes:L("bodyAttributes",t,r),htmlAttributes:L("htmlAttributes",n,r),link:L(m.LINK,i,r),meta:L(m.META,o,r),noscript:L(m.NOSCRIPT,a,r),script:L(m.SCRIPT,s,r),style:L(m.STYLE,c,r),title:L(m.TITLE,{title:l,titleAttributes:f},r)}},M=i.a.createContext({}),H=a.a.shape({setHelmet:a.a.func,helmetInstances:a.a.shape({get:a.a.func,add:a.a.func,remove:a.a.func})}),N="undefined"!=typeof document,R=function(e){function t(r){var n;return(n=e.call(this,r)||this).instances=[],n.value={setHelmet:function(e){n.props.context.helmet=e},helmetInstances:{get:function(){return n.instances},add:function(e){n.instances.push(e)},remove:function(e){var t=n.instances.indexOf(e);n.instances.splice(t,1)}}},t.canUseDOM||(r.context.helmet=k({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),n}return h(t,e),t.prototype.render=function(){return i.a.createElement(M.Provider,{value:this.value},this.props.children)},t}(n.Component);R.canUseDOM=N,R.propTypes={context:a.a.shape({helmet:a.a.shape()}),children:a.a.node.isRequired},R.defaultProps={context:{}},R.displayName="HelmetProvider";var B=function(e,t){var r,n=document.head||document.querySelector(m.HEAD),i=n.querySelectorAll(e+"[data-rh]"),o=[].slice.call(i),a=[];return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&("innerHTML"===i?n.innerHTML=t.innerHTML:"cssText"===i?n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText)):n.setAttribute(i,void 0===t[i]?"":t[i]));n.setAttribute("data-rh","true"),o.some((function(e,t){return r=t,n.isEqualNode(e)}))?o.splice(r,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},D=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-rh"),i=n?n.split(","):[],o=[].concat(i),a=Object.keys(t),s=0;s<a.length;s+=1){var c=a[s],u=t[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===i.indexOf(c)&&i.push(c);var l=o.indexOf(c);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f-=1)r.removeAttribute(o[f]);i.length===o.length?r.removeAttribute("data-rh"):r.getAttribute("data-rh")!==a.join(",")&&r.setAttribute("data-rh",a.join(","))}},Y=function(e,t){var r=e.baseTag,n=e.htmlAttributes,i=e.linkTags,o=e.metaTags,a=e.noscriptTags,s=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,l=e.title,f=e.titleAttributes;D(m.BODY,e.bodyAttributes),D(m.HTML,n),function(e,t){void 0!==e&&document.title!==e&&(document.title=S(e)),D(m.TITLE,t)}(l,f);var p={baseTag:B(m.BASE,r),linkTags:B(m.LINK,i),metaTags:B(m.META,o),noscriptTags:B(m.NOSCRIPT,a),scriptTags:B(m.SCRIPT,c),styleTags:B(m.STYLE,u)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),s(e,d,h)},_=null,q=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).rendered=!1,t}h(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(e){return!p()(e,this.props)},r.componentDidUpdate=function(){this.emitChange()},r.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},r.emitChange=function(){var e,t,r=this.props.context,n=r.setHelmet,i=null,o=(e=r.helmetInstances.get().map((function(e){var t=d({},e.props);return delete t.context,t})),{baseTag:E(["href"],e),bodyAttributes:O("bodyAttributes",e),defer:v(e,"defer"),encode:v(e,"encodeSpecialCharacters"),htmlAttributes:O("htmlAttributes",e),linkTags:w(m.LINK,["rel","href"],e),metaTags:w(m.META,["name","charset","http-equiv","property","itemprop"],e),noscriptTags:w(m.NOSCRIPT,["innerHTML"],e),onChangeClientState:C(e),scriptTags:w(m.SCRIPT,["src","innerHTML"],e),styleTags:w(m.STYLE,["cssText"],e),title:A(e),titleAttributes:O("titleAttributes",e)});R.canUseDOM?(t=o,_&&cancelAnimationFrame(_),t.defer?_=requestAnimationFrame((function(){Y(t,(function(){_=null}))})):(Y(t),_=null)):k&&(i=k(o)),n(i)},r.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},r.render=function(){return this.init(),null},t}(n.Component);q.propTypes={context:H.isRequired},q.displayName="HelmetDispatcher";var U=function(e){function t(){return e.apply(this,arguments)||this}h(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(e){return!c()(this.props,e)},r.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case m.SCRIPT:case m.NOSCRIPT:return{innerHTML:t};case m.STYLE:return{cssText:t};default:throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},r.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren;return d({},n,((t={})[r.type]=[].concat(n[r.type]||[],[d({},e.newChildProps,this.mapNestedChildrenToProps(r,e.nestedChildren))]),t))},r.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(n.type){case m.TITLE:return d({},i,((t={})[n.type]=a,t.titleAttributes=d({},o),t));case m.BODY:return d({},i,{bodyAttributes:d({},o)});case m.HTML:return d({},i,{htmlAttributes:d({},o)});default:return d({},i,((r={})[n.type]=d({},o),r))}},r.mapArrayTypeChildrenToProps=function(e,t){var r=d({},t);return Object.keys(e).forEach((function(t){var n;r=d({},r,((n={})[t]=e[t],n))})),r},r.warnOnInvalidChildren=function(e,t){return l()(T.some((function(t){return e.type===t})),"function"==typeof e.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+T.join(", ")+" are allowed. Helmet does not support rendering <"+e.type+"> elements. Refer to our API for more information."),l()(!t||"string"==typeof t||Array.isArray(t)&&!t.some((function(e){return"string"!=typeof e})),"Helmet expects a string as a child of <"+e.type+">. Did you forget to wrap your children in braces? ( <"+e.type+">{``}</"+e.type+"> ) Refer to our API for more information."),!0},r.mapChildrenToProps=function(e,t){var r=this,n={};return i.a.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=y(i,["children"]),s=Object.keys(a).reduce((function(e,t){return e[g[t]||t]=a[t],e}),{}),c=e.type;switch("symbol"==typeof c?c=c.toString():r.warnOnInvalidChildren(e,o),c){case m.FRAGMENT:t=r.mapChildrenToProps(o,t);break;case m.LINK:case m.META:case m.NOSCRIPT:case m.SCRIPT:case m.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:s,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:o})}}})),this.mapArrayTypeChildrenToProps(n,t)},r.render=function(){var e=this.props,t=e.children,r=d({},y(e,["children"]));return t&&(r=this.mapChildrenToProps(t,r)),i.a.createElement(M.Consumer,null,(function(e){return i.a.createElement(q,d({},r,{context:e}))}))},t}(n.Component);U.propTypes={base:a.a.object,bodyAttributes:a.a.object,children:a.a.oneOfType([a.a.arrayOf(a.a.node),a.a.node]),defaultTitle:a.a.string,defer:a.a.bool,encodeSpecialCharacters:a.a.bool,htmlAttributes:a.a.object,link:a.a.arrayOf(a.a.object),meta:a.a.arrayOf(a.a.object),noscript:a.a.arrayOf(a.a.object),onChangeClientState:a.a.func,script:a.a.arrayOf(a.a.object),style:a.a.arrayOf(a.a.object),title:a.a.string,titleAttributes:a.a.object,titleTemplate:a.a.string},U.defaultProps={defer:!0,encodeSpecialCharacters:!0},U.displayName="Helmet"},113:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,i="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var s,c,u,l;if(Array.isArray(t)){if((s=t.length)!=a.length)return!1;for(c=s;0!=c--;)if(!e(t[c],a[c]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;for(l=t.entries();!(c=l.next()).done;)if(!e(c.value[1],a.get(c.value[0])))return!1;return!0}if(i&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((s=t.length)!=a.length)return!1;for(c=s;0!=c--;)if(t[c]!==a[c])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((s=(u=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,u[c]))return!1;if(r&&t instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!t.$$typeof)&&!e(t[u[c]],a[u[c]]))return!1;return!0}return t!=t&&a!=a}(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},114:function(e,t,r){"use strict";e.exports=function(e,t,r,n,i,o,a,s){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,n,i,o,a,s],l=0;(c=new Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},44:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),o=r(112);t.default=function(){return i.a.createElement(o.b,null,i.a.createElement(o.a,null,i.a.createElement("title",null,"Test Page"),i.a.createElement("link",{rel:"canonical",href:"https://www.tacobell.com/"})),i.a.createElement("div",{className:"shadow-lg flex w-full h-16 bg-white items-center px-4"},i.a.createElement("span",{className:"text-green-600 font-bold text-2xl select-none"},"TEST REACT BUILD"),i.a.createElement("div",{className:"test-img"})))}},82:function(e,t){e.exports=function(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var u=o[c];if(!s(u))return!1;var l=e[u],f=t[u];if(!1===(i=r?r.call(n,l,f,u):void 0)||void 0===i&&l!==f)return!1}return!0}}}]);