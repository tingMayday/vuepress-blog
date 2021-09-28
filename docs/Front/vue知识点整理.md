---
title: vue知识点整理
date: 2020-04-02
sidebar: 'auto'
tags:
- vue
categories: 
- Front
---

> vue的一些特性和原理整理

## 一、什么是MVVM
![MVVM](/blog/4-1.png "MVVM")
MVVM是Model-View-ViewModel的简写。即模型-视图-视图模型。View通过View-Model的DOM Listeners将事件绑定到Model上，而Model则通过Data Bindings来管理View中的数据，View-Model从中起到一个连接桥的作用。

MVVM最早由微软提出来，它借鉴了桌面应用程序的MVC思想，在前端页面中，把Model用纯JavaScript对象表示，View负责显示，两者做到了最大限度的分离。
把Model和View关联起来的就是ViewModel。ViewModel负责把Model的数据同步到View显示出来，还负责把View的修改同步回Model。

<!-- ### MVVM模式的组成部分 -->
- 模型：
模型是指代表真实状态内容的领域模型（面向对象），或指代表内容的数据访问层（以数据为中心）。
- 视图：
就像在MVC和MVP模式中一样，视图是用户在屏幕上看到的结构、布局和外观（UI）。
- 视图模型：
视图模型是暴露公共属性和命令的视图的抽象。MVVM没有MVC模式的控制器，也没有MVP模式的presenter，有的是一个绑定器。在视图模型中，绑定器在视图和数据绑定器之间进行通信。
- 绑定器：
声明性数据和命令绑定隐含在MVVM模式中。在Microsoft解决方案堆中，绑定器是一种名为XAML的标记语言。绑定器使开发人员免于被迫编写样板式逻辑来同步视图模型和视图。在微软的堆之外实现时，声明性数据绑定技术的出现是实现该模式的一个关键因素。

<!-- ### MVVM的三个核心点：
- 响应式：vue如何监听data的属性变化
- 模板解析：vue的模板是如何被解析的
- 渲染：vue模板是如何被渲染成HTML的 -->

<!-- ### MVVM优点
MVVM模式和MVC模式一样，主要目的是分离视图（View）和模型（Model），有几大优点:
1. 低耦合。视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。
2. 可重用性。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。
3. 独立开发。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计，使用Expression Blend可以很容易设计界面并生成xaml代码。
4. 可测试。界面素来是比较难于测试的，测试可以针对ViewModel来写。 -->

## 二、vue生命周期
从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、销毁等一系列过程，称之为 Vue 的生命周期。总共分为8个阶段：创建前/后, 载入前/后,更新前/后,销毁前/销毁后。官方文档的生命周期图示：
![vue生命周期](/blog/4-2.png "vue生命周期")
<p class="point">特别值得注意的是created钩子函数和mounted钩子函数的区别</p>
- beforeCreate（创建前） 在数据观测和初始化事件还未开始
- created（创建后） 完成数据观测，属性和方法的运算，初始化事件，$el属性还没有显示出来
- beforeMount（载入前） 在挂载开始之前被调用，相关的render函数首次被调用。实例已完成以下的配置：编译模板，把data里面的数据和模板生成html。注意此时还没有挂载html到页面上。
- mounted（载入后） 在el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用。实例已完成以下的配置：用上面编译好的html内容替换el属性指向的DOM对象。完成模板中的html渲染到html页面中。此过程中进行ajax交互。
- beforeUpdate（更新前） 在数据更新之前调用，发生在虚拟DOM重新渲染和打补丁之前。可以在该钩子中进一步地更改状态，不会触发附加的重渲染过程。
- updated（更新后） 在由于数据更改导致的虚拟DOM重新渲染和打补丁之后调用。调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作。然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。
- beforeDestroy（销毁前） 在实例销毁之前调用。实例仍然完全可用。
- destroyed（销毁后） 在实例销毁之后调用。调用后，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。

## 三、vue的双向数据绑定的原理(Object.defineProperty())
Vue是采用数据劫持结合发布/订阅模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。
![vue双向绑定](/blog/4-3.png "vue双向绑定")

vue的双向数据绑定整合了整合Observer，Compile和Watcher三者，通过Observer监听数据的变化，通过Compile来编辑解析指令，通过Watcher搭起Observer和Compile的通信桥梁。

1.监听器Observer，用来劫持并监听所有属性，如果属性发生变化的，就通知订阅者。

2.订阅者watcher， 每一个Watcher都绑定一个更新函数，watcher接受属性变化的通知并执行相应的函数。

3.解析器compile，可以扫描和解析每个节点的相关指令（v-model，v-on等指令），如果节点存在v-model，v-on等指令，则解析器Compile初始化这类节点的模板数据，使之可以显示在视图上，然后初始化相应的订阅者（Watcher）。

## 四、v-if和v-show的 区别
- v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

相比之下，v-show 就简单得多——不管初始条件是什么，带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS 属性 display。

一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

## 五、v-for中key的作用
- 如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法。
- 使用 key 时，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。
<p class="point">注意：key的取值必须是number 或 string，不能是对象，而且使用 v-for 循环的每一项的值，都要保证唯一性,重复的 key 会造成渲染错误。</p>


## 六、vue组件间的通讯

1. 父组件向子组件输送数据
    父组件用props的方式向子组件传递数据，props 可以是数组或对象

``` 
  // 父组件
  <template>
  <div>{{childText}}</div>
  <child :childData="childText" :childArr="childArr" />
  </template> 
  <script>
  import Child from "./components/Child"
  export default {
    data(){
      return{ 
        childText: '子组件文字',
        childArr: ['字段1','字段2','字段3',]
      }
    },
    components:{ Child }
  }
  </script>

```
这是父组件，childData是父组件想要传递给子组件的值,通过:childText(v-bind:childText),:childArr(v-bind:childArr)给子组件传递对象或数组

``` 
  // 子组件 Child.vue
  <template>
  <div>{{childText}}</div>
  <div>
      <span v-for="(item, index) in childArr" :key="index">{{item}}</span>
  </div>
  </template> 
  <script>
  export default {
    props: {
      childText: String,
      childArr: Arrary
    }
  }
  </script>

```
子组件中使用props接收传入的参数,无需再data中定义

<p class="point">prop 只可以从上一级组件传递到下一级组件（父子组件），即所谓的单向数据流。而且 prop 只读，不可被修改，所有修改都会失效并警告。</p>


2.子组件传给父组件：$emit方法传递参数,父组件通过v-on来监听子组件触发的事件获取参数
```
  // 父组件
  <template>
  <div>{{message}}</div>
  <child @childToParentMsg="childToParentMsg" />
  </template> 
  <script>
  import Child from "./components/Child"
  export default {
    data(){
      return{ message: '' }
    },
    components:{ Child },
    methods:{
      childToParentMsg(msg) {
        this.message = msg
      }
    }
  }
  </script>
```
父组件通过v-on指令监听子组件通过$emit自定义的变量名称，并且自定义方法，在该方法中接收子组件传递来的数据。

```
  // 子组件
  <template>
  <button @click="childToParentMsg">
  </template> 
  <script>
  export default {
    methods: {
      childToParentMsg() {
        this.$emit('childToParentMsg, '子组件传递给父组件的数据')
      }
    }
  }
  </script>
```
子组件通过$emit自定义方法，将数据传递到父页面

3.非父子组件间的数据传递，兄弟组件传值

1）借助中央事件总线，eventBus，就是创建一个事件中心，相当于中转站，可以用它来传递事件和接受事件，项目比较小时，用这个比较合适；

新建一个js文件，bus.js

```
  import Vue from 'vue'
  export default new Vue()
```

然后再在个兄弟组件内引用这个js或者两个组件作为子组件被同一个父组件所引用

Component1.vue里监听事件
```
  import eventBus from './bus'
  created () {
    eventBus.$on('busEvent', args => {
      //...
    }) 
  }
```
Component2.vue中触发事件

```
  import eventBus from './bus'
  //...
  watch: {
    list(newValue, oldValue) {
      eventBus.$emit('my-event', newValue)
    }
  }
```

2）VueX，创建一个数据仓库，整个项目全局都可以往这个仓库存放数据和读取数据

3）利用HTML5的localStorage特性方法将数据存储到本地，不同组件间可以都可以存储和读取数据
```
  //存储数据
  localStorage.setItem('name', '张三')
```
```
  //取出数据
  localStorage.getItem('name')
```
```
  //删除存储的数据
  localStorage.removeItem('name')
```
```
  //更改缓存数据
  localStorage.setItem('name', '更改后的数据')
```

## 七、keep-alive的作用
keep-alive是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。

keep-alive包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。keep-alive 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在组件的父组件链中。

当组件在 keep-alive 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。

使用方法
```
  <keep-alive include='include_components' exclude='exclude_components'>
    <component>
      <!-- 该组件是否缓存取决于include和exclude属性 -->
    </component>
  </keep-alive>
```

include - 字符串或正则表达式。只有名称匹配的组件会被缓存；exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。

include 和 exclude 属性允许组件有条件地缓存。二者都可以用逗号分隔字符串、正则表达式或一个数组来表示：
```
  <!-- 逗号分隔字符串 -->
  <keep-alive include="a,b">
    <component :is="view"></component>
  </keep-alive>

  <!-- 正则表达式 (使用 `v-bind`) -->
  <keep-alive :include="/a|b/">
    <component :is="view"></component>
  </keep-alive>

  <!-- 数组 (使用 `v-bind`) -->
  <keep-alive :include="['a', 'b']">
    <component :is="view"></component>
  </keep-alive>
```
max - 数字。最多可以缓存多少组件实例。一旦这个数字达到了，在新实例被创建之前，已缓存组件中最久没有被访问的实例会被销毁掉。
``` 
  <keep-alive :max="10">
    <component :is="view"></component>
  </keep-alive>
```
<p class="point">keep-alive 不会在函数式组件中正常工作，因为它们没有缓存实例。</p>

## 八、$nextTick的作用
vue中dom的更新并不是实时的，而是**异步**执行的

### 持续更新中...

<!-- ## axios

## vue-router 路由
## $nextTick
## vuex
## vue-cli -->
