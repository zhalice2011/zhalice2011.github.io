(self.webpackChunkblog=self.webpackChunkblog||[]).push([[398],{3265:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#181818","images":{"fallback":{"src":"/static/2d665f40de5b545ae1f91e1fdab7cd54/edb2b/profile-pic.jpg","srcSet":"/static/2d665f40de5b545ae1f91e1fdab7cd54/edb2b/profile-pic.jpg 80w,\\n/static/2d665f40de5b545ae1f91e1fdab7cd54/39164/profile-pic.jpg 160w","sizes":"80px"},"sources":[{"srcSet":"/static/2d665f40de5b545ae1f91e1fdab7cd54/d9027/profile-pic.avif 80w,\\n/static/2d665f40de5b545ae1f91e1fdab7cd54/8a7fe/profile-pic.avif 160w","type":"image/avif","sizes":"80px"},{"srcSet":"/static/2d665f40de5b545ae1f91e1fdab7cd54/a5f1e/profile-pic.webp 80w,\\n/static/2d665f40de5b545ae1f91e1fdab7cd54/36fad/profile-pic.webp 160w","type":"image/webp","sizes":"80px"}]},"width":80,"height":80}')},7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),a=r(6860),o=r(379),i=r(8206);e.exports=function(e){return n(e)||a(e)||o(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},7246:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294),a=r(5444),o=r(6125),i=function(){var e,t,i=(0,a.useStaticQuery)("3257411868"),l=null===(e=i.site.siteMetadata)||void 0===e?void 0:e.author,u=null===(t=i.site.siteMetadata)||void 0===t?void 0:t.social;return n.createElement("div",{className:"bio"},n.createElement(o.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../../images/profile-pic.jpeg",width:80,height:80,quality:95,alt:"Profile picture",__imageData:r(3265)}),(null==l?void 0:l.name)&&n.createElement("p",null,"Personal blog by  "," ",n.createElement("a",{href:"https://github.com/"+((null==u?void 0:u.twitter)||"")},l.name),n.createElement("br",null),(null==l?void 0:l.summary)||null))}},9348:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(9756),a=r(7294),o=r(5444),i=["url","text","count"];function l(e){var t,r=e.url,l=e.text,u=e.count;(0,n.Z)(e,i);return null!=u&&(t="  ("+u+")"),a.createElement(o.Link,{className:"tag",to:r},"#",l,t)}l.defaultProps={count:null};var u=l},2485:function(e,t,r){"use strict";r.r(t);var n=r(7294),a=r(8415),o=r(5414),i=r(7246),l=r(3419),u=r(9348),s=r(4183),c=r(5512),f={tagListDiv:{marginLeft:"3rem",lineHeight:1.5}};t.default=function(e){var t=e.data,r=t.allMarkdownRemark.group,d=t.site.siteMetadata.title,p=e.location,m=(0,s.Jr)().homeLink,b=(0,c.w)("tTags");return n.createElement(l.Z,{location:p,title:d,breadcrumbs:[{text:b}]},n.createElement("aside",null,n.createElement(i.Z,null)),n.createElement(o.q,{title:b}),n.createElement("div",null,n.createElement("h1",null,b),n.createElement("ul",{style:f.tagListDiv},r.map((function(e){return n.createElement("li",null,n.createElement(u.Z,{key:e.fieldValue,text:e.fieldValue,count:e.totalCount,url:m+"tags/"+(0,a.kebabCase)(e.fieldValue)+"/"}))})))))}},8415:function(e,t,r){var n=r(319);e.exports={formatReadingTime:function(e){var t=Math.round(e),r=Math.round(e/5);return r>5?new Array(Math.round(r/Math.E)).fill("🍱").join("")+" "+t+" min read":new Array(r||1).fill("☕️").join("")+" "+t+" min read"},formatPostDate:function(e,t){var r;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var a=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(r=e).toLocaleDateString.apply(r,n(a))},haveSameItem:function(e,t){if(void 0===e&&(e=[]),void 0===t&&(t=[]),null==e||null==t)return!1;var r=new Set([].concat(n(e),n(t)));return n(r).length<e.length+t.length},getPreviousNextNode:function(e,t){var r,n;return e.length>0&&t>-1&&(r=t<=0?null:e[t-1].node,n=t===e.length-1?null:e[t+1].node),{previous:r,next:n}},kebabCase:function(e){return function(e){return/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g.test(e)}(e)?e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-"):e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase()}}},5512:function(e,t,r){"use strict";r.d(t,{w:function(){return a}});var n=r(4183),a=(r(8415),function(e){var t=(0,n.Jr)(),r=t.lang,a=t.messages,o=a[e];if(null==o)return console.error("MessageId ["+e+"] is not exist!!\n    You should add it to config/locales/"+r+".js"),e;if("function"==typeof o){for(var i=arguments.length,l=new Array(i>1?i-1:0),u=1;u<i;u++)l[u-1]=arguments[u];return o.apply(void 0,l)}return o})}}]);
//# sourceMappingURL=component---src-templates-tags-index-js-140f39e5d03dc10e55a6.js.map