(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apiShop-brandlist-main"],{"0c2c":function(t,a,n){var e=n("2992");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=n("4f06").default;i("18ead238",e,!0,{sourceMap:!1,shadowMode:!1})},1901:function(t,a,n){"use strict";n.r(a);var e=n("eff3"),i=n("46af");for(var r in i)"default"!==r&&function(t){n.d(a,t,(function(){return i[t]}))}(r);n("9583");var s,o=n("f0c5"),c=Object(o["a"])(i["default"],e["b"],e["c"],!1,null,"e71eb22a",null,!1,e["a"],s);a["default"]=c.exports},2992:function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.brand .list[data-v-e71eb22a]{width:%?750?%;height:%?416?%;position:relative;margin-bottom:%?4?%}.brand .list img[data-v-e71eb22a]{width:100%;height:100%}.brand .list .info[data-v-e71eb22a]{text-align:center;position:absolute;top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.brand .list .info span[data-v-e71eb22a]{color:#fff;font-size:%?35?%;font-weight:700}.brand .list .info span[data-v-e71eb22a]:nth-child(2){padding:0 %?5?%}',""]),t.exports=a},"46af":function(t,a,n){"use strict";n.r(a);var e=n("ce80"),i=n.n(e);for(var r in e)"default"!==r&&function(t){n.d(a,t,(function(){return e[t]}))}(r);a["default"]=i.a},9583:function(t,a,n){"use strict";var e=n("0c2c"),i=n.n(e);i.a},ce80:function(t,a,n){"use strict";var e=n("ee27");n("99af"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,n("96cf");var i=e(n("c964")),r=n("5b49"),s={onPullDownRefresh:function(){this.page=1,this.getData(!0),uni.stopPullDownRefresh()},onReachBottom:function(){if(this.page=this.page+1,this.page>this.total)return!1;this.getData()},created:function(){},mounted:function(){this.getData(!0)},data:function(){return{listData:[],page:1,total:""}},components:{},methods:{getData:function(t){var a=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,r.brandlistActionApi)({page:a.page});case 2:e=n.sent,a.total=e.data.total,a.listData=t?e.data.data:a.listData.concat(e.data.data);case 5:case"end":return n.stop()}}),n)})))()},branddetail:function(t){uni.navigateTo({url:"/apiShop/branddetail/main?id="+t})}},computed:{}};a.default=s},eff3:function(t,a,n){"use strict";var e,i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",[n("cu-custom",{attrs:{bgColor:"bg-white",isBack:!0}},[n("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),n("template",{attrs:{slot:"content"},slot:"content"},[t._v("品牌列表")])],2),n("div",{staticClass:"brand"},t._l(t.listData,(function(a,e){return n("div",{key:e,staticClass:"list",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.branddetail(a.id)}}},[n("img",{attrs:{src:a.app_list_pic_url,alt:""}}),n("div",{staticClass:"info"},[n("span",[t._v(t._s(a.name))])])])})),0)],1)},r=[];n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return r})),n.d(a,"a",(function(){return e}))}}]);