(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apiUtil-logisticstrack-main"],{"1efb":function(t,e,n){"use strict";var i=n("d0b2"),a=n.n(i);a.a},"2a7b":function(t,e,n){"use strict";var i=n("2fbb"),a=n.n(i);a.a},"2fbb":function(t,e,n){var i=n("4214");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("5bb035ac",i,!0,{sourceMap:!1,shadowMode:!1})},"3d77":function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("c964")),o=i(n("fc1a")),s=n("2aa1"),c=n("5b49"),r={components:{trackNode:o.default},data:function(){return{tracesData:[],order_id:""}},onLoad:function(t){this.id=t.id},onShow:function(){(0,s.toLogin)(),this.order_id=this.id,this.logisticsInfo()},methods:{logisticsInfo:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,c.LogisticsInfoApi)({order_id:t.order_id});case 2:n=e.sent,0==n.data.status?uni.showToast({title:n.data.msg,duration:2e3,icon:"none",mask:!0}):t.tracesData=n.data.response;case 4:case"end":return e.stop()}}),e)})))()}}};e.default=r},"3e23":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"total-wrap",style:{marginTop:t.isMainNode?"22rpx":"6rpx"}},[n("div",{staticClass:"node-container"},[n("div",{staticClass:"node-container-left"},[n("div",{staticClass:"tag-container"},[t.isMainNode?n("img",{attrs:{src:t.nodeIconUrl}}):n("div",{staticClass:"node-tag-container"},[n("div",{staticClass:"node-tag"})])]),n("div",{staticClass:"line-container",style:{height:t.isMainNode?"142rpx":"88rpx",paddingTop:t.isMainNode?"22rpx":"8rpx"}},[t.isFirst?t._e():n("div",{staticClass:"line",style:{height:t.isMainNode?"120rpx":"80rpx"}})])]),n("div",{staticClass:"node-container-right",style:{paddingTop:t.isMainNode?"0":"8rpx"}},[t.isMainNode?n("div",{staticClass:"node-title",style:{color:t.isNewest?"#222":"#999"}},[t._v(t._s(t.nodeData.statusName))]):t._e(),n("div",{staticClass:"node-desc",style:{color:t.isNewest?"#4b4b4b":"#999",marginTop:t.isMainNode?"10rpx":"0"}},[t._v(t._s(t.AcceptStationFixed))]),t.nodeData.phone?n("div",{staticClass:"node-phone"},[t._v(t._s(t.nodeData.phone))]):t._e(),n("div",{staticClass:"node-time"},[t._v(t._s(t.nodeData.AcceptTime))])])])])},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},4214:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.total-wrap[data-v-3d96ae64]{width:100vw;height:auto;box-sizing:border-box;padding:%?0?% %?40?% %?0?%}.total-wrap .logistics-title[data-v-3d96ae64]{height:%?72?%;box-sizing:border-box;padding:%?36?% 0 %?8?%;line-height:%?28?%;color:#4b4b4b;font-size:%?26?%;font-family:PingFangSC-Medium;text-align:left}',""]),t.exports=e},4661:function(t,e,n){"use strict";n.r(e);var i=n("5914"),a=n("7392");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("2a7b");var s,c=n("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"3d96ae64",null,!1,i["a"],s);e["default"]=r.exports},5381:function(t,e,n){"use strict";n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{isNewest:{type:Boolean,default:!1},isFirst:{type:Boolean,default:!1},isMainNode:{type:Boolean,default:!1},nodeData:{type:Object,default:function(){return{status:"",statusName:"",createTime:"2019-01-01 00:00:00",AcceptStation:"xxxxxx"}}}},computed:{nodeIconUrl:function(){return"WATTING_PAY"===this.nodeData.status?this.isNewest?"http://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/ic-order-commit.png":"http://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/ic-order-commit-G.png":"PAYED"===this.nodeData.status?this.isNewest?"http://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/ic-paied.png":"http://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/ic-paied-G.png":"WATTING_DELIVER"===this.nodeData.status?this.isNewest?"http://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/ic-pacakaging.png":"http://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/ic-pacakaging-G.png":"DELIVERING"===this.nodeData.status?this.isNewest?"http://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/ic-sending.png":"http://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/ic-sending-G.png":"COMPLETE"===this.nodeData.status?this.isNewest?"http://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/ic-delivering.png":"http://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/ic-delivering-G.png":void 0},AcceptStationFixed:function(){return this.nodeData.AcceptStation?this.nodeData.AcceptStation.replace(/(\d{3})\d{4}(\d{4})/,""):""}}};e.default=i},5914:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("cu-custom",{attrs:{bgColor:"bg-white",isBack:!0}},[n("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),n("template",{attrs:{slot:"content"},slot:"content"},[t._v("物流跟踪")])],2),n("div",{staticClass:"total-wrap"},[n("div",{staticClass:"logistics-title"},[t._v("物流跟踪")]),t._l(t.tracesData,(function(e,i){return[n("trackNode",{key:i+"_0",attrs:{"is-first":i===t.tracesData.length-1,"is-newest":0===i,"is-main-node":e.isMainNode,"node-data":e}})]}))],2)],1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},"6f56":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.total-wrap[data-v-57174998]{margin-top:%?22?%;width:100%}.total-wrap .node-container[data-v-57174998]{width:100%;height:auto;display:-webkit-box;display:-webkit-flex;display:flex}.total-wrap .node-container-left[data-v-57174998]{width:%?44?%;height:auto}.total-wrap .node-container-left .tag-container[data-v-57174998]{width:%?44?%;height:%?44?%}.total-wrap .node-container-left .tag-container img[data-v-57174998]{width:%?44?%;height:%?44?%}.total-wrap .node-container-left .tag-container .node-tag-container[data-v-57174998]{width:%?44?%;height:%?44?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.total-wrap .node-container-left .tag-container .node-tag-container .node-tag[data-v-57174998]{width:%?14?%;height:%?14?%;background-color:#dcdcdc;border-radius:50%}.total-wrap .node-container-left .line-container[data-v-57174998]{box-sizing:border-box;width:%?44?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.total-wrap .node-container-left .line-container .line[data-v-57174998]{width:%?2?%;background-color:#dcdcdc}.total-wrap .node-container-right[data-v-57174998]{-webkit-box-flex:1;-webkit-flex:1;flex:1;box-sizing:border-box;padding:0 %?10?% 0 %?24?%}.total-wrap .node-container-right .node-title[data-v-57174998]{width:100%;height:%?40?%;line-height:%?44?%;color:#222;font-size:%?28?%;font-family:PingFangSC-Medium}.total-wrap .node-container-right .node-desc[data-v-57174998]{margin-top:%?16?%;width:100%;min-height:%?30?%;line-height:%?30?%;color:#222;font-size:%?24?%;font-family:PingFangSC-Regular;word-wrap:break-word;word-break:normal}.total-wrap .node-container-right .node-phone[data-v-57174998]{margin-top:%?8?%;width:100%;height:%?26?%;line-height:%?26?%;color:#fe4e2c;font-size:%?26?%;font-family:Avenir-Medium}.total-wrap .node-container-right .node-time[data-v-57174998]{margin-top:%?12?%;width:100%;height:%?34?%;line-height:%?34?%;color:#999;font-size:%?24?%;font-family:Avenir-Book}',""]),t.exports=e},7392:function(t,e,n){"use strict";n.r(e);var i=n("3d77"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},d0b2:function(t,e,n){var i=n("6f56");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("56baec33",i,!0,{sourceMap:!1,shadowMode:!1})},fc1a:function(t,e,n){"use strict";n.r(e);var i=n("3e23"),a=n("ff29");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("1efb");var s,c=n("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"57174998",null,!1,i["a"],s);e["default"]=r.exports},ff29:function(t,e,n){"use strict";n.r(e);var i=n("5381"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a}}]);