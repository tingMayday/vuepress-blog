(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{479:function(t,e,r){"use strict";r.r(e);var s=r(1),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h3",{attrs:{id:"问题描述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),r("p",[t._v("因项目需求需要用vue-electron脚手架开发一个桌面应用，里面有一个功能是要求点击按钮缩小窗口，只显示下面的操作栏，并设置背景透明化,")]),t._v(" "),r("p",[t._v("代码如下：")]),t._v(" "),r("pre",[r("code",[t._v('minWindows() {\n    this.showPage = false;   //页面内容隐藏\n    remote.getCurrentWindow().setFullScreen(false);     //取消全屏设置\n    remote.getCurrentWindow().setSize(700, 60);         //设置窗口大小\n    remote.getCurrentWindow().setPosition(0, document.body.clientHeight);      //定位窗口显示位置\n    document.querySelector("body").style.background = "transparent";  //body背景设为透明\n}\n')])]),t._v(" "),r("p",[t._v("这是理想的效果（窗口缩小并置顶，背景透明可看到下面窗口内容，点击logo按钮可收缩横条）")]),t._v(" "),r("p",[r("img",{attrs:{src:"/blog/1-1.png",alt:"效果图",title:"效果图"}})]),t._v(" "),r("p",[t._v("本来在开发调试的时候一直都是没问题的（开发的时候背景会显示为白色），可是等调试完成打包好后，在电脑上打开的时候就出现了残影问题")]),t._v(" "),r("p",[r("img",{attrs:{src:"/blog/1-2.png",alt:"BUG",title:"BUG"}})]),t._v(" "),r("p",[t._v("窗口缩小没有问题，可是下面的背景并没有隐藏掉，并且点击按钮收缩的效果也不起效，也就是窗体是正常的，可是渲染的全挂掉了")]),t._v(" "),r("h3",{attrs:{id:"踩坑过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#踩坑过程"}},[t._v("#")]),t._v(" 踩坑过程")]),t._v(" "),r("p",[t._v("刚开始以为是代码错误，检查了一遍没发现什么问题。然后我在代码加上try catch， 在打包的时候打开调试，发现控制台并没有报错，排除代码错误。")]),t._v(" "),r("p",[t._v("然后想到背景渲染问题，试着设置背景不透明，发现可以，设置成其他颜色也是没问题的，就是设置透明的时候会出问题，不管是'transparent'还是'rgba(0,0,0,0)'都不行，这是什么BUG？")]),t._v(" "),r("p",[t._v("实在想不出是什么原因，去请教了一下我以前的老大。刚开始找了很久也没找出是什么原因， 背景图，主进程渲染，电脑显卡配置等等一一排查。结果也是弄了两天没找到， 想死的心都有了  /(ㄒoㄒ)/~~")]),t._v(" "),r("h3",{attrs:{id:"解决方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[t._v("#")]),t._v(" 解决方法")]),t._v(" "),r("p",[t._v("还好在最后第三天找到了方法，直接给修复了一下系统的aero设置就好了。就好了？   前面搞了那么多")]),t._v(" "),r("p",[r("strong",[t._v("步骤一")])]),t._v(" "),r("p",[t._v("电脑开始搜索框输入aero，选择图中所示选项")]),t._v(" "),r("p",[r("img",{attrs:{src:"/blog/1-3.png",alt:"设置1",title:"设置1"}})]),t._v(" "),r("p",[r("strong",[t._v("步骤二")])]),t._v(" "),r("p",[t._v("点开之后显示，直接点下一步，等待检测问题修复")]),t._v(" "),r("p",[r("img",{attrs:{src:"/blog/1-4.png",alt:"设置2",title:"设置2"}}),t._v(" "),r("img",{attrs:{src:"/blog/1-5.png",alt:"设置3",title:"设置3"}})]),t._v(" "),r("p",[r("strong",[t._v("步骤三")])]),t._v(" "),r("p",[t._v("修复完成，关闭后问题就完美解决了，打开应用可以正常显示")]),t._v(" "),r("p",[r("img",{attrs:{src:"/blog/1-6.png",alt:"设置4",title:"设置4"}})])])}),[],!1,null,null,null);e.default=a.exports}}]);