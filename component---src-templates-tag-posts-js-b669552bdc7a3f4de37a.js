(self.webpackChunkblog=self.webpackChunkblog||[]).push([[580],{3265:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#181818","images":{"fallback":{"src":"/static/2d665f40de5b545ae1f91e1fdab7cd54/edb2b/profile-pic.jpg","srcSet":"/static/2d665f40de5b545ae1f91e1fdab7cd54/edb2b/profile-pic.jpg 80w,\\n/static/2d665f40de5b545ae1f91e1fdab7cd54/39164/profile-pic.jpg 160w","sizes":"80px"},"sources":[{"srcSet":"/static/2d665f40de5b545ae1f91e1fdab7cd54/d9027/profile-pic.avif 80w,\\n/static/2d665f40de5b545ae1f91e1fdab7cd54/8a7fe/profile-pic.avif 160w","type":"image/avif","sizes":"80px"},{"srcSet":"/static/2d665f40de5b545ae1f91e1fdab7cd54/a5f1e/profile-pic.webp 80w,\\n/static/2d665f40de5b545ae1f91e1fdab7cd54/36fad/profile-pic.webp 160w","type":"image/webp","sizes":"80px"}]},"width":80,"height":80}')},7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),a=r(6860),o=r(379),i=r(8206);e.exports=function(e){return n(e)||a(e)||o(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},7246:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294),a=r(5444),o=r(6125),i=function(){var e,t,i=(0,a.useStaticQuery)("3257411868"),l=null===(e=i.site.siteMetadata)||void 0===e?void 0:e.author,s=null===(t=i.site.siteMetadata)||void 0===t?void 0:t.social;return n.createElement("div",{className:"bio"},n.createElement(o.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../../images/profile-pic.jpeg",width:80,height:80,quality:95,alt:"Profile picture",__imageData:r(3265)}),(null==l?void 0:l.name)&&n.createElement("p",null,"Personal blog by  "," ",n.createElement("a",{href:"https://github.com/"+((null==s?void 0:s.twitter)||"")},l.name),n.createElement("br",null),(null==l?void 0:l.summary)||null))}},5945:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(7294),a=r(5444),o=r(8415);function i(e){var t=e.slug,r=e.title,i=e.date,l=e.timeToRead,s=e.excerpt;return n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h2",null,n.createElement(a.Link,{to:t,itemProp:"url"},n.createElement("span",{itemProp:"headline"},r))),n.createElement("small",null,i," • ",(0,o.formatReadingTime)(l))),n.createElement("section",null,n.createElement("p",{dangerouslySetInnerHTML:{__html:s},itemProp:"description"})))}i.defaultProps={title:null,excerpt:null};var l=i},7523:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(7294),a=r(5414),o=r(5444),i=function(e){var t,r,i,l=e.description,s=e.lang,c=e.meta,u=e.title,d=(0,o.useStaticQuery)("2841359383").site,f=l||d.siteMetadata.description,p=null===(t=d.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(a.q,{htmlAttributes:{lang:s},title:u,titleTemplate:p?"%s | "+p:null,meta:[{name:"description",content:f},{property:"og:title",content:u},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=d.siteMetadata)||void 0===r||null===(i=r.social)||void 0===i?void 0:i.twitter)||""},{name:"twitter:title",content:u},{name:"twitter:description",content:f}].concat(c)})};i.defaultProps={lang:"en",meta:[],description:""};var l=i},3226:function(e,t,r){"use strict";r.r(t);var n=r(7294),a=r(7246),o=r(3419),i=r(7523),l=r(5945),s=r(4183),c=r(5512);t.default=function(e){var t=e.pageContext,r=e.data,u=e.location,d=t.tag,f=r.allMarkdownRemark,p=f.edges,m=f.totalCount,g=r.site.siteMetadata.title,v=(0,s.Jr)(),b=v.lang,y=v.homeLink,h=(0,c.w)("tfTagHeader",m,d);return n.createElement(o.Z,{location:u,title:g,breadcrumbs:[{text:(0,c.w)("tTags"),url:y+"tags"},{text:d}]},n.createElement(i.Z,{title:h,description:h}),n.createElement("h1",null,h),n.createElement("main",null,n.createElement("ol",{style:{listStyle:"none",margin:0}},p.map((function(e){var t=e.node,r=t.frontmatter.title||t.fields.slug;return n.createElement(l.Z,{key:t.fields.slug,lang:b,slug:t.fields.slug,date:t.frontmatter.date,timeToRead:t.fields.readingTime.minutes,title:r,excerpt:t.frontmatter.description||t.excerpt})})))),n.createElement("div",{style:{marginTop:50}}),n.createElement("aside",null,n.createElement(a.Z,null)))}},8415:function(e,t,r){var n=r(319);e.exports={formatReadingTime:function(e){var t=Math.round(e),r=Math.round(e/5);return r>5?new Array(Math.round(r/Math.E)).fill("🍱").join("")+" "+t+" min read":new Array(r||1).fill("☕️").join("")+" "+t+" min read"},formatPostDate:function(e,t){var r;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var a=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(r=e).toLocaleDateString.apply(r,n(a))},haveSameItem:function(e,t){if(void 0===e&&(e=[]),void 0===t&&(t=[]),null==e||null==t)return!1;var r=new Set([].concat(n(e),n(t)));return n(r).length<e.length+t.length},getPreviousNextNode:function(e,t){var r,n;return e.length>0&&t>-1&&(r=t<=0?null:e[t-1].node,n=t===e.length-1?null:e[t+1].node),{previous:r,next:n}},kebabCase:function(e){return function(e){return/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g.test(e)}(e)?e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-"):e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase()}}},5512:function(e,t,r){"use strict";r.d(t,{w:function(){return a}});var n=r(4183),a=(r(8415),function(e){var t=(0,n.Jr)(),r=t.lang,a=t.messages,o=a[e];if(null==o)return console.error("MessageId ["+e+"] is not exist!!\n    You should add it to config/locales/"+r+".js"),e;if("function"==typeof o){for(var i=arguments.length,l=new Array(i>1?i-1:0),s=1;s<i;s++)l[s-1]=arguments[s];return o.apply(void 0,l)}return o})}}]);
//# sourceMappingURL=component---src-templates-tag-posts-js-b669552bdc7a3f4de37a.js.map