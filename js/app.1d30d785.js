(function(t){function e(e){for(var a,r,i=e[0],l=e[1],c=e[2],u=0,d=[];u<i.length;u++)r=i[u],o[r]&&d.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},r={app:0},o={app:0},s=[];function i(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-6d661bf4":"87035d79","chunk-e313811c":"f09b67fc"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-6d661bf4":1,"chunk-e313811c":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-6d661bf4":"d605696a","chunk-e313811c":"48e09901"}[t]+".css",o=l.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],u=c.getAttribute("data-href");if(u===a||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.request=a,delete r[t],p.parentNode.removeChild(p),n(s)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)}).then(function(){r[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=s);var c,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=i(t),c=function(e){d.onerror=d.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");s.type=a,s.request=r,n[1](s)}o[t]=void 0}};var p=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,u.appendChild(d)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s=(n("034f"),n("2877")),i={},l=Object(s["a"])(i,r,o,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,u=n("8c4f");n("bb51");a["default"].use(u["a"]);var d=new u["a"]({mode:"history",base:"/iview-layoutui/",routes:[{path:"/",name:"home",component:function(){return n.e("chunk-e313811c").then(n.bind(null,"ebad"))},children:[{path:"",name:"home",component:function(){return Promise.resolve().then(n.bind(null,"bb51"))}},{path:"/home",name:"test",component:function(){return Promise.resolve().then(n.bind(null,"bb51"))}}]},{path:"/login",name:"login",meta:{title:"登录"},component:function(){return n.e("chunk-6d661bf4").then(n.bind(null,"a55b"))}}]}),p=n("e069"),m=n.n(p);n("dcad");a["default"].config.productionTip=!1,a["default"].use(m.a),new a["default"]({router:d,render:function(t){return t(c)}}).$mount("#app")},"5b11":function(t,e,n){},"64a9":function(t,e,n){},"7ec5":function(t,e,n){},bb51:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"home-container"},[n("MasterPage",{attrs:{title:"标题"}},[n("div",{attrs:{slot:"title-icon"},slot:"title-icon"},[n("Icon",{attrs:{type:"ios-game-controller-b"}})],1),n("div",{attrs:{slot:"title-toolbar"},slot:"title-toolbar"},[n("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:function(t){}}},[t._v("新增")])],1),n("div",{staticClass:"search-content-slot",attrs:{slot:"searchContent"},slot:"searchContent"},[n("Form",{attrs:{model:t.formItem,"label-width":80}},[n("Row",[n("Col",{attrs:{span:"12"}},[n("FormItem",{attrs:{label:"输入框："}},[n("Input",{attrs:{placeholder:"Enter something..."},model:{value:t.formItem.input,callback:function(e){t.$set(t.formItem,"input",e)},expression:"formItem.input"}})],1)],1),n("Col",{attrs:{span:"12"}},[n("FormItem",{attrs:{label:"选择框："}},[n("Select",{model:{value:t.formItem.select,callback:function(e){t.$set(t.formItem,"select",e)},expression:"formItem.select"}},[n("Option",{attrs:{value:"beijing"}},[t._v("New York")]),n("Option",{attrs:{value:"shanghai"}},[t._v("London")]),n("Option",{attrs:{value:"shenzhen"}},[t._v("Sydney")])],1)],1)],1)],1),n("Row",[n("Col",{attrs:{span:"12"}},[n("FormItem",{attrs:{label:"日期插件："}},[n("DatePicker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"请选择"},model:{value:t.formItem.date,callback:function(e){t.$set(t.formItem,"date",e)},expression:"formItem.date"}})],1)],1),n("Col",{attrs:{span:"12"}},[n("FormItem",{attrs:{label:"时间插件："}},[n("TimePicker",{staticStyle:{width:"100%"},attrs:{type:"time",placeholder:"请选择"},model:{value:t.formItem.time,callback:function(e){t.$set(t.formItem,"time",e)},expression:"formItem.time"}})],1)],1)],1)],1)],1),n("div",{attrs:{slot:"search"},slot:"search"},[n("Button",{attrs:{type:"info",icon:"ios-search"}},[t._v("查询")])],1),n("div",{attrs:{slot:"btns"},slot:"btns"},[n("Button",{attrs:{type:"primary",icon:"md-add"}},[t._v("添加")])],1),n("div",{attrs:{slot:"paddingContent"},slot:"paddingContent"},[n("Table",{attrs:{columns:t.columns1,data:t.data1}})],1),n("div",{attrs:{slot:"pager"},slot:"pager"},[n("Page",{attrs:{total:100}})],1)])],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"master-page-container"},[n("div",{staticClass:"master-page-wrap"},[t.title?n("div",{staticClass:"title-header"},[n("div",{staticClass:"title-content"},[n("div",{staticClass:"title-icon"},[t._t("title-icon")],2),n("p",{staticClass:"title"},[t._v(t._s(t.title))])]),n("div",{staticClass:"title-toolbar"},[t._t("title-toolbar")],2)]):t._e(),t.$slots.searchContent?n("div",{staticClass:"master-page-search-content"},[t._t("searchContent")],2):t._e(),t.$slots.search||t.$slots.btns?n("div",{staticClass:"master-page-content-toolbar"},[n("div",{staticClass:"bar-search"},[t._t("search")],2),n("div",{staticClass:"bar-group"},[t._t("btns")],2)]):t._e(),t.$slots.paddingContent?n("div",{staticClass:"master-page-padding-content"},[t._t("paddingContent")],2):t._e(),t.$slots.content?n("div",{staticClass:"master-page-nopadding-content"},[t._t("content")],2):t._e(),n("div",{staticClass:"page-wrapper"},[t._t("pager")],2)])])},s=[],i={data:function(){return{}},props:{title:{type:String}},mounted:function(){console.log("paddingContent=",this.$slots)},methods:{}},l=i,c=(n("d133"),n("2877")),u=Object(c["a"])(l,o,s,!1,null,"67412749",null);u.options.__file="Master.vue";var d=u.exports,p={components:{MasterPage:d},data:function(){return{formItem:{input:"",select:"",radio:"male",checkbox:[],switch:!0,date:"",time:"",slider:[20,50],textarea:""},columns1:[{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"}],data1:[{name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"},{name:"Jim Green",age:24,address:"London No. 1 Lake Park",date:"2016-10-01"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",date:"2016-10-02"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",date:"2016-10-04"}]}},methods:{}},m=p,f=(n("d2fd"),Object(c["a"])(m,a,r,!1,null,"32ee427c",null));f.options.__file="Home.vue";e["default"]=f.exports},d133:function(t,e,n){"use strict";var a=n("7ec5"),r=n.n(a);r.a},d2fd:function(t,e,n){"use strict";var a=n("5b11"),r=n.n(a);r.a}});
//# sourceMappingURL=app.1d30d785.js.map