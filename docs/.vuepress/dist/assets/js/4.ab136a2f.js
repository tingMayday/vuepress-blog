(window.webpackJsonp=window.webpackJsonp||[]).push([[4,11,12,13,14,15,16,17],{312:function(t,s,e){},313:function(t,s,e){},314:function(t,s,e){},315:function(t,s,e){},316:function(t,s,e){},317:function(t,s,e){},318:function(t,s,e){},357:function(t,s,e){"use strict";var a=e(312);e.n(a).a},358:function(t,s,e){"use strict";var a=e(313);e.n(a).a},359:function(t,s,e){"use strict";var a=e(314);e.n(a).a},360:function(t,s,e){"use strict";var a=e(315);e.n(a).a},361:function(t,s,e){"use strict";var a=e(316);e.n(a).a},362:function(t,s,e){"use strict";var a=e(317);e.n(a).a},363:function(t,s,e){"use strict";var a=e(318);e.n(a).a},364:function(t,s,e){},379:function(t,s,e){"use strict";e.r(s);var a={name:"Meteo"},i=(e(357),e(1)),n=Object(i.a)(a,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"space"},[s("img",{staticClass:"bg",attrs:{src:"/about/bg.jpeg"}}),this._v(" "),this._l(10,(function(t){return s("div",{key:t,class:"star star"+t})}))],2)}),[],!1,null,"24ac57fc",null);s.default=n.exports},380:function(t,s,e){"use strict";e.r(s);var a={methods:{}},i=(e(358),e(1)),n=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main"},[e("div",{staticClass:"bubble"},t._l(6,(function(t){return e("span",{key:t})})),0),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"info"},[t._m(0),t._v(" "),e("div",{staticClass:"name",attrs:{"data-text":"婷/Ating"}},[t._v("婷/Ating")]),t._v(" "),t._m(1),t._v(" "),e("el-button",{staticClass:"download-btn"},[e("i",{staticClass:"el-icon-download"}),t._v(" "),e("span",[t._v("简历下载")])])],1),t._v(" "),e("el-image",{staticClass:"avatar",attrs:{src:"/about/own.png"}})],1)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"job"},[s("i",{staticClass:"el-icon-potato-strips"}),this._v(" "),s("span",[this._v("前端开发工程师")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"intro"},[this._v("\n        5年前端开发经验 热心诚恳、乐观向上、认真细致"),s("br"),this._v("\n        喜欢五月天、爱看侦探小说、懒癌患者\n      ")])}],!1,null,"5d69ce9a",null);s.default=n.exports},381:function(t,s,e){"use strict";e.r(s);var a={props:{experience:Array},data:function(){return{show:!1}}},i=(e(360),e(1)),n=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"exper"},[e("div",{staticClass:"title"},[t._v("5 YEARS EXPERIENCE")]),t._v(" "),e("div",{staticClass:"content"},t._l(t.experience,(function(s,a){return e("div",{key:a,staticClass:"exper-item",on:{mouseenter:function(s){t.show=!0},mouseleave:function(s){t.show=!1}}},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:s.logo}})]),t._v(" "),e("div",{staticClass:"flex1"},[e("div",{staticClass:"company"},[t._v(t._s(s.company))]),t._v(" "),e("div",{staticClass:"job"},[t._v(t._s(s.job))])]),t._v(" "),e("div",{staticClass:"date"},[t._v(t._s(s.date))]),t._v(" "),e("transition-group",{attrs:{name:"slide-fade"}},[t.show?e("div",{key:a,staticClass:"exper-item-hover"},t._l(s.work,(function(s,a){return e("p",{key:a},[t._v(t._s(s))])})),0):t._e()])],1)})),0)])}),[],!1,null,"349fe7d4",null);s.default=n.exports},382:function(t,s,e){"use strict";e.r(s);var a={props:{skills:Array},data:function(){return{gif:null}},mounted:function(){var t=this;setTimeout((function(){t.gif="/about/circle.gif"}),1e3)}},i=(e(361),e(1)),n=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"skill"},[e("div",{staticClass:"title"},[t._v("SKILLS")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"angle top-left"}),t._v(" "),e("div",{staticClass:"skill-list"},t._l(t.skills,(function(s,a){return e("div",{key:a,staticClass:"skill-item"},[e("div",{staticClass:"label"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"bar"},[e("div",{staticClass:"bar-inner",style:"width:"+s.percen+"%"},[e("div",{staticClass:"percen"},[t._v(t._s(s.percen)+"%")]),t._v(" "),e("div",{staticClass:"lines"})])]),t._v(" "),e("el-progress",{attrs:{"text-inside":!0,"stroke-width":20,percentage:s.percen,color:"#a38981"}})],1)})),0),t._v(" "),e("span",{staticClass:"angle bottom-right"})])])}),[],!1,null,"22358430",null);s.default=n.exports},383:function(t,s,e){"use strict";e.r(s);var a={props:{projects:Array}},i=(e(362),e(1)),n=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"project"},[e("div",{staticClass:"title"},[t._v("PROJECTS")]),t._v(" "),e("div",{staticClass:"projects"},t._l(t.projects,(function(s,a){return e("div",{key:a,staticClass:"project-item"},[e("div",{staticClass:"inner"},[e("el-image",{staticClass:"cover",attrs:{src:s.cover,fit:"fill","preview-src-list":[s.cover]}}),t._v(" "),e("div",{staticClass:"mask"},[e("div",{staticClass:"tit"},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"date"},[t._v(t._s(s.date))]),t._v(" "),t._m(0,!0)])],1)])})),0)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"border"},[s("span",{staticClass:"top"}),this._v(" "),s("span",{staticClass:"right"}),this._v(" "),s("span",{staticClass:"bottom"}),this._v(" "),s("span",{staticClass:"left"})])}],!1,null,"5ff04580",null);s.default=n.exports},385:function(t,s,e){"use strict";e.r(s);e(359);var a=e(1),i=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"intro"},[e("div",{staticClass:"title"},[t._v("ABOUT ME")]),t._v(" "),e("div",{staticClass:"own"},[e("img",{attrs:{src:"/about/own.jpg"}})]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"quot"},[t._v("“")]),t._v(" "),e("div",{staticClass:"im"},[t._v("我是"),e("span",[t._v("前端开发工程师")])]),t._v(" "),e("div",[t._v("\n      热心诚恳、乐观向上、认真细致，有良好的团队协作精神；具有网站设计及web端和小程序前端工作经验，能独立完成网站前端的设计开发，能有效配合产品和后台工程师完成网站的数据交互与优化；\n    ")]),t._v(" "),e("div",[t._v("\n      喜欢学习和钻研web前端技术，希望通过不断地学习，掌握更多前沿的前端知识；\n    ")]),t._v(" "),e("div",{staticClass:"motto"},[e("p",{staticClass:"motto-1",attrs:{"data-text":"逆风的方向，更适合飞翔"}},[t._v("\n        逆风的方向，更适合飞翔\n      ")]),t._v(" "),e("p",{staticClass:"motto-2",attrs:{"data-text":"我不怕千万人阻挡，只怕自己投降"}},[t._v("\n        我不怕千万人阻挡，只怕自己投降\n      ")])])])])}],!1,null,"c679a252",null);s.default=i.exports},386:function(t,s,e){"use strict";e.r(s);e(363);var a=e(1),i=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"contact"},[e("div",{staticClass:"title"},[t._v("CONTACT")]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"item"},[e("i",{staticClass:"el-icon-message"}),t._v(" "),e("div",{staticClass:"label"},[t._v("E-MAIL")]),t._v(" "),e("div",{staticClass:"value"},[t._v("144826491@qq.com")])]),t._v(" "),e("div",{staticClass:"item"},[e("i",{staticClass:"el-icon-map-location"}),t._v(" "),e("div",{staticClass:"label"},[t._v("ADDRESS")]),t._v(" "),e("div",{staticClass:"value"},[t._v("Guangzhou, Guangdong Province")])])])])}],!1,null,"1f91b8c9",null);s.default=i.exports},453:function(t,s,e){"use strict";var a=e(364);e.n(a).a},470:function(t,s,e){"use strict";e.r(s);var a=e(379),i=e(380),n=e(385),c=e(381),r=e(382),l=e(383),o=e(386),v={name:"Index",components:{Meteor:a.default,AMain:i.default,Intro:n.default,Exper:c.default,Skill:r.default,Project:l.default,Contact:o.default},data:function(){return{experience:[{logo:"/about/logo-1.png",date:"2018/07~至今",job:"前端开发工程师",company:"杜工智能",work:["客户端程序开发，与C++工程师通过管道控制硬件功能，完成客户端与硬件交互通讯，实现客户端，硬件和后台数据的连通","蓝牙小程序前端开发，与硬件工程师通过蓝牙模块进行与硬件的对接，实现小程序端与蓝牙硬件以及后台数据之间的通讯交流","商城小程序前端开发，与后台配合完成数据通讯，实现商城的购买、拼团、秒杀、砍价、分销、优惠券、支付等功能"]},{logo:"/about/logo-2.png",date:"2016/06~2018/04",job:"前端开发工程师",company:"搜众计算机",work:["负责整理客户需求，进行网站的平面设计及售后修改工作","负责将设计稿切片打包，上传装修客户电商店铺","负责根据设计稿及客户需求进行网站前端UI交互开发，与后台配合进行网站数据交互优化"]},{logo:"/about/logo-3.png",date:"2016/02~2016/06",job:"网页设计师",company:"源厂电子商务",work:["负责整理客户需求，进行网站的平面设计及售后修改工作","负责将设计稿切片打包，上传装修客户电商店铺","负责根据设计稿及客户需求进行网站前端UI交互开发，与后台配合进行网站数据交互优化"]}],skills:[{name:"nodeJs",percen:60},{name:"electron",percen:75},{name:"小程序",percen:80},{name:"vue",percen:80},{name:"javascript",percen:85},{name:"h5+css3",percen:90}],projects:[{title:"sass商城小程序",date:"2020/11~2021/06",cover:"/about/project1-1.png",content:["实现小程序用户授权和获取手机号绑定","实现商城功能：购物车、产品的支付购买、优惠券领取使用、分销赚取收益功能、限时秒杀活动、邀请砍价活动、拼团活动，趣拼团活动等","实现产品的收藏，个人中心可查看优惠券，订单，钱包收益，拼团，砍价记录等"]},{title:"AI客户端",date:"2019/03 ~ 2020/12",cover:"/about/project1-2.png",content:["通过客户端与C++的管道通讯，实现客户端对硬件设备交互与控制，实现硬件数据可视化；进行硬件设备对人体的评估筛查和修复功能","利用管道通讯，通过客户端控制控制硬件设备进行人体健康的评估筛查和修复，并将检测的客户健康数据进行上传保存","客户端个人信息微信认证，通过微信扫码进行微信身份认证绑定账户，实现手机号验证码进行客户信息的保存修改","可使用身份证读卡器读取身份证信息并进行绑定账户，完成实名认证；并可自定义信息的显示隐藏，保障客户个人隐私信息","客户端微信支付和支付宝扫码支付，支持产品和套餐购买，进行账户的充值和扣费，可用于客户评估和修复次数的预扣和生成报告的扣费","可进行评估结果报告的生成查看和下载，并可将报告结果打印和微信推送"]},{title:"蓝牙小程序",date:"2020/04~2020/08",cover:"/about/project1-3.png",content:["包括小程序基本的用户授权和获取手机号绑定，后台存储用户信息","通过小程序蓝牙API连接硬件设备，与硬件工程师约定操作指令，通过API发送不同指令控制设备的开关，暂停等功能","通过API发送指令控制设备运行，展示设备的进程运行进度，获取硬件设备存储的数据，提交保存至后台"]},{title:"小程序自主建站",date:"2017/12~2018/04",cover:"/about/project1-4.png",content:["PC端实现小程序的组件化(banner、购物车、产品列表、文章列表、外卖组件、秒杀、拼团等等)，各功能组件可进行可视化拖拽编辑和排序，美化UI设置，自定义展示与设计","实现后台的数据操作，在对应组件内展示关联数据","PC端小程序页面功能设计完成后，可进行打包生成小程序代码包，对接到小程序端，展示或直接上传小程序"]},{title:"自适应自主建站",date:"2017/07~2017/12",cover:"/about/project1-5.png",content:["实现网站模块的组件化(banner、导航、文章列表、表单提交等等)，可对组件进行拖拽编辑和排序，并可设置UI样式和交互，设计完成网站页面","设计的网站页面可适应不同分辨率的展示，可在不同客户端具有良好的兼容性"]}]}},mounted:function(){},methods:{}},u=(e(453),e(1)),_=Object(u.a)(v,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"about"},[e("Meteor",{attrs:{delay:2,w:2,h:100,rotateDeg:30}}),t._v(" "),e("a-main"),t._v(" "),e("intro"),t._v(" "),e("exper",{attrs:{experience:t.experience}}),t._v(" "),e("skill",{attrs:{skills:t.skills}}),t._v(" "),e("project",{attrs:{projects:t.projects}}),t._v(" "),e("contact")],1)}),[],!1,null,"75c722ec",null);s.default=_.exports}}]);