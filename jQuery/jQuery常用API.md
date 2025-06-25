<!--
 * @Description: 
 * @Author: ljl
 * @Date: 2025-06-20 14:37:08
 * @LastEditors: rendc
 * @LastEditTime: 2025-06-23 10:27:10
-->
# 【jQuery 常用API】
## 1. jQuery 选择器
### 1.1 jQuery 基础选择器
> 原生 JS 获取元素方式很多，很杂，并且兼容性情况不一致，jQuery 封装了常用的选择器，方便使用。
> 
> **$("选择器") // 里面直接写CSS选择器，但要加引号**
> 
> **$("div").css('属性','值')**

|名称|用法|描述|
|:--:|:--:|:--:|
|id选择器|$("#id")|通过id选择元素|
|全选选择器|$(" * ")|匹配所有元素|
|类选择器|$(".class")|通过class选择元素|
|标签选择器|$("div")|通过标签名选择元素|
|并集选择器|$("div, p")|通过逗号选择多个元素|
|交集选择器|$("div.p")|选择同时具有div和p类的元素|

### 1.2 jQuery 层级选择器
|名称|用法|描述|
|:--:|:--:|:--:|
|子元素选择器|$("ul > li")|通过大于号选择直接子元素|
|后代选择器|$("ul li")|通过空格选择后代元素|

### 1.3 隐式迭代（重点）
> 遍历内部DOM元素（为数组形式储存）的过程

### 1.4 jQuery 筛选选择器
|名称|用法|描述|
|:--:|:--:|:--:|
|:first|$(“li:first”)|选择第一个li元素|
|:last|$(“li:last”)|选择最后一个li元素|
|:even|$(“li:even”)|选择偶数索引的li元素|
|:odd|$(“li:odd”)|选择奇数索引的li元素|
|:eq(index)|$(“li:eq(2)”)|选择索引为2的li元素|
|:gt(index)|$(“li:gt(2)”)|选择索引大于2的li元素|
|:lt(index)|$(“li:lt(2)”)|选择索引小于2的li元素|

### 1.5 jQuery 筛选方法（重点）
|语法|用法|说明|
|:--|:--|:--|
|`parent()`|$("li").parent()|查找父级|
|`children(selector)`|$("ul").children("li")|查找最近一级（亲儿子）|
|`find(selector)`|$("ul").find("li")|查找所有子元素|
|`siblings(selector)`|$("li").siblings("li")|查找兄弟元素|
|`eq(index)`|$("li").eq(2)|索引为2的元素|

### 1.6 jQuery 里的排他思想
想要多选一的效果，排他思想：当前元素设置样式，其他兄弟元素清除样式。
> $(this).css("color", "red")
> 
> $("this").siblings().css("color", "")
>
> **链式编程**
> 
> $(this).css("color", "red").siblings().css("color", "")

## 淘宝案例
①核心原理：鼠标经过左侧盒子某个小li，就让内容区盒子相对应图片显示，其余的图片隐藏。

② 需要得到当前小li 的索引号，就可以显示对应索引号的图片

③ jQuery 得到当前元素索引号 $(this).index() 

④ 中间对应的图片，可以通过 eq(index) 方法去选择

⑤ 显示元素 show() 隐藏元素 hide()


## 2. jQuery 样式效果
### 2.1 操作 CSS 方法
jQuery可以使用css方法来修改简单元素样式，也可以操作类，修改多个样式

1. $(this).css("color") // 只写属性名，返回属性值
2. $(this).css("color", "red") 
3. $(this).css({"color": "red", "font-size": "20px"})

### 2.2 设置类样式方法
1. 添加类
**$("div").addClass("current")**
2. 移除类
**$("div").removeClass("current")**
3. 切换类
**$("div").toggleClass("current")**

### 案例：tab 栏切换分析
① 点击上部的li，当前li 添加current类，其余兄弟移除类。
② 点击的同时，得到当前li 的索引号
③ 让下部里面相应索引号的item显示，其余的item隐藏
```html
<head>
<style>
    * {
        margin: 0;
        padding: 0;
    }
    
    li {
        list-style-type: none;
    }
    
    .tab {
        width: 978px;
        margin: 100px auto;
    }
    
    .tab_list {
        height: 39px;
        border: 1px solid #ccc;
        background-color: #f1f1f1;
    }
    
    .tab_list li {
        float: left;
        height: 39px;
        line-height: 39px;
        padding: 0 20px;
        text-align: center;
        cursor: pointer;
    }
    
    .tab_list .current {
        background-color: #c81623;
        color: #fff;
    }
    
    .item_info {
        padding: 20px 0 0 20px;
    }
    
    .item {
        display: none;
    }
</style>
<script src="jquery.min.js"></script>
</head>

<body>
<div class="tab">
    <div class="tab_list">
      <ul>
        <li class="current">商品介绍</li>
        <li>规格与包装</li>
        <li>售后保障</li>
        <li>商品评价（50000）</li>
        <li>手机社区</li>
      </ul>
    </div>
    <div class="tab_con">
      <div class="item" style="display: block;">
          商品介绍模块内容
      </div>
      <div class="item">
          规格与包装模块内容
      </div>
      <div class="item">
          售后保障模块内容
      </div>
      <div class="item">
          商品评价（50000）模块内容
      </div>
      <div class="item">
          手机社区模块内容
        </div>

    </div>
</div>
<script>
    $(function() {
      // 1.点击上部的li，当前li 添加current类，其余兄弟移除类
      $(".tab_list li").click(function() {
        // 链式编程操作
        $(this).addClass("current").siblings().removeClass("current");
        // 2.点击的同时，得到当前li 的索引号
        var index = $(this).index();
        console.log(index);
        // 3.让下部里面相应索引号的item显示，其余的item隐藏
        $(".tab_con .item").eq(index).show().siblings().hide();
      });
    })
</script>
```

### 2.3 类操作与className区别
> 原生JS中className会覆盖元素原先里面的类名，而jQuery中class()方法不会覆盖元素原先的类名

## 3. jQuery 效果
jQuery给我们封装了很多动画效果
![alt text](img/img/image.png)

### 3.1 显示隐藏效果
 1. 显示语法规范
- **show([speed,[easing],[fn]])**
 2. 隐藏语法规范
- **hide([speed,[easing],[fn]])**
 3. 显示参数：
 - 参数都可以省略，无动画直接显示
 - speed：动画执行速度，默认为"normal"，可选值："slow"、"fast"、毫秒数
 - easing：执行动画的方式，默认是"swing"，可选值："linear"、"swing"
 - fn：执行完成后的回调函数

### 3.2 滑动效果
1. 下滑效果语法
- **slideDown([speed,[easing],[fn]])**
2. 上滑效果语法
- **slideUp([speed,[easing],[fn]])**
3. 效果语法
- **slideToggle([speed,[easing],[fn]])**
> 参数同3.1一样

### 3.3 事件切换
> **hover([over,]out)**
> 
（1）over:鼠标移到元素上要触发的函数（相当于mouseenter）

（2）out:鼠标移出元素要触发的函数（相当于mouseleave）

（3）如果只写一个函数，则鼠标经过和离开都会触发它

### 3.4 动画队列及其停止排队方法
1. 动画或效果队列
动画或者效果一旦触发就会执行，多次触发会造成多个排队执行
2. 停止排队
> stop()

(1) stop() 方法用于停止动画或效果。

(2) 注意： stop() 写到动画或者效果的前面， 相当于停止结束上一次的动画。

### 3.5 淡入淡出效果
> 1. 淡入效果语法规范
> - **fadeIn([speed,[easing],[fn]])**
> 2. 淡出效果语法规范
> - **fadeOut([speed,[easing],[fn]])**
> 
> 显示参数：
> - 参数都可以省略，无动画直接显示
> - speed：动画执行速度，默认为"normal"，可选值："slow"、"fast"、毫秒数
> - easing：执行动画的方式，默认是"swing"，可选值："linear"、"swing"
> - fn：执行完成后的回调函数

> 1. 渐进方式调整到指定的不透明
> **fadeTo([speed],opacity,[easing],[fn])**
> 2. 参数说明
> - speed：动画执行速度，默认为"normal"，可选值："slow"、"fast"、毫秒数
> - opacity：透明度`必须`写，取值 0~1 之间
> - easing：执行动画的方式，默认是"swing"，可选值："linear"、"swing"
> - fn：回调函数，在动画完成时执行的函数，每个元素执行一次。

### 3.6 自定义动画 animate
> 1. 语法规范
> - **animate({params},[speed,[easing],[fn]])**
> 2. 参数说明
> - params：要改变的属性值，多个属性值用逗号隔开,如果是复合属性则需要采取驼峰命名法 borderLeft。其余参数都可以省略
> - speed：动画执行速度，默认为"normal"，可选值："slow"、"fast"、毫秒数
> - easing：执行动画的方式，默认是"swing"、可选值："linear"
> - fn：回调函数，在动画完成时执行的函数，每个元素执行一次。

## 4. jQuery 属性操作
### 4.1 设置或获取元素固有属性值 prop ()
所谓元素国有属性就是元素本身自带的属性，比如`<a>` 元素里面的 `href`, 比如`<input>` 元素里面的 `type`。

**1. 获取属性语法**
```javascript
prop("属性")
```

**2. 设置属性语法**
```javascript
prop("属性","属性值")
```

### 4.2 设置或获取元素自定义属性值 attr ()
用户自己给元素添加的属性，我们称为自定义属性，比如给 `div` 添加 `index ="1"`。
**1. 获取属性语法**
```javascript
attr("属性") // 类似原生getAttribute()
```
**2. 设置属性语法**
```javascript
attr("属性","属性值") // 类似原生setAttribute()
```
该方法也可以获取 H5 自定义属性。

### 4.3 数据缓存 data ()
data () 方法可以在指定的元素上存取数据，并不会修改 DOM 元素结构。一旦页面刷新，之前存放的数据都将被移除。
**1. 附加数据语法**
```javascript
data("name","value") // 向被选元素附加数据
```
**2. 获取数据语法**
```javascript
data("name") // 向被选元素获取数据
```
同时，还可以读取 HTML5 自定义属性 data-index, 得到的是数字型。

## 5. jQuery 文本属性值
> 主要针对元素的`内容`还有`表单的值`操作

1.普通元素内容 html ()(相当于原生 inner HTML)
 ```javascript
 html() // 获取元素内容
 html("内容") // 设置元素内容
 ```
2.普通元素文本内容 text () (相当与原生 innerText)
```javascript
text() // 获取元素的文本内容
text("文本内容") // 设置元素的文本内容
```
3.表单元素的值 val () (相当于原生 value)
 ```javascript
 val() // 获取表单元素的值
 val("值") // 设置表单元素的值
 ```
## 6. jQuery 元素操作
> 主要是`遍历`、创建、添加、删除元素操作
### 6.1 遍历元素
jQuery隐式迭代是对同一类元素做了同样的操作。如果想要给同一类元素做不同的操作，那么就需`遍历`。
**语法1：**
```javascript
$("选择器").each(function(index,dom){
    // 代码
})
```
> each() 方法对每个匹配的元素执行一次函数。主要用DOM处理，each每一个
> 
> index：当前元素的索引值，从0开始；dom：每个DOM对象，不是jQuery对象
> 
> 所以要想用jQuery方法，需要给dom元素转化为jQuery对象$(dom)

**语法2：**
```javascript
$.each(function(index,element){
    // 代码
})
```
> $.each()方法可用于遍历任何对象。主要用于数据处理，比如数组，对象
>
> index 是每个元素的索引号; element 遍历内容

### 6.2 创建元素
**语法**
```javascript
$("标签")
```
### 6.3 添加元素
**内部添加**
```javascript
// 通过选择器选择的jQuery对象
$("标签").append("内容") 
// DOM元素转化的jQuery对象
element.append("内容") 

// 把内容放入匹配元素内部最后面，类似原生 appendChild

element.prepend("内容")
// 内容放入匹配元素内部最前面。
```
**外部添加**
```javascript
// 把内容放入目标元素后面
element.after("内容") 

// 把内容放入目标元素前面
element.before("内容")
```
> `内部`添加元素，生成之后，它们是`父子关系`。
> 
> `外部`添加元素，生成之后，他们是`兄弟关系`。

### 6.4 删除元素
```javascript
// 删除匹配元素集合中每个元素的所有后代元素和文本节点
element.remove()

// 删除匹配元素集合中每个元素的后代元素
element.empty()

// 删除匹配元素集合中每个元素的所有子元素
element.children().remove()
// 清楚匹配的元素内容
element.html("")
```
> remove 删除元素本身。
> 
> empt() 和 html('''') 作用等价，都可以删除元素里面的内容，只不过 html 还可以设置内容。

## 7. jQuery 尺寸、位置操作
### 7.1 尺寸
|语法|用法|
|:--:|:--:|
|width()/height()|获取元素宽度和高度|
|innerWidth()/innerHeight()|获取元素内容宽度和高度|
|outerWidth()/outerHeight()|获取元素内容宽度和高度+内边距|
|outerWidth(true)/outerHeight(true)|获取元素内容宽度和高度+内边距+边框|

### 7.2 位置
|语法|用法|
|:--:|:--:|
|offset()|获取元素距离文档的偏移量|
|position()|获取元素相对父元素的位置|
|scrollTop()/scrollLeft()|获取元素滚动条的垂直/水平滚动距离|