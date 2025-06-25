<!--
 * @Description: 
 * @Author: ljl
 * @Date: 2025-06-20 14:37:08
 * @LastEditors: rendc
 * @LastEditTime: 2025-06-23 10:27:10
-->
# ��jQuery ����API��
## 1. jQuery ѡ����
### 1.1 jQuery ����ѡ����
> ԭ�� JS ��ȡԪ�ط�ʽ�ܶ࣬���ӣ����Ҽ����������һ�£�jQuery ��װ�˳��õ�ѡ����������ʹ�á�
> 
> **$("ѡ����") // ����ֱ��дCSSѡ��������Ҫ������**
> 
> **$("div").css('����','ֵ')**

|����|�÷�|����|
|:--:|:--:|:--:|
|idѡ����|$("#id")|ͨ��idѡ��Ԫ��|
|ȫѡѡ����|$(" * ")|ƥ������Ԫ��|
|��ѡ����|$(".class")|ͨ��classѡ��Ԫ��|
|��ǩѡ����|$("div")|ͨ����ǩ��ѡ��Ԫ��|
|����ѡ����|$("div, p")|ͨ������ѡ����Ԫ��|
|����ѡ����|$("div.p")|ѡ��ͬʱ����div��p���Ԫ��|

### 1.2 jQuery �㼶ѡ����
|����|�÷�|����|
|:--:|:--:|:--:|
|��Ԫ��ѡ����|$("ul > li")|ͨ�����ں�ѡ��ֱ����Ԫ��|
|���ѡ����|$("ul li")|ͨ���ո�ѡ����Ԫ��|

### 1.3 ��ʽ�������ص㣩
> �����ڲ�DOMԪ�أ�Ϊ������ʽ���棩�Ĺ���

### 1.4 jQuery ɸѡѡ����
|����|�÷�|����|
|:--:|:--:|:--:|
|:first|$(��li:first��)|ѡ���һ��liԪ��|
|:last|$(��li:last��)|ѡ�����һ��liԪ��|
|:even|$(��li:even��)|ѡ��ż��������liԪ��|
|:odd|$(��li:odd��)|ѡ������������liԪ��|
|:eq(index)|$(��li:eq(2)��)|ѡ������Ϊ2��liԪ��|
|:gt(index)|$(��li:gt(2)��)|ѡ����������2��liԪ��|
|:lt(index)|$(��li:lt(2)��)|ѡ������С��2��liԪ��|

### 1.5 jQuery ɸѡ�������ص㣩
|�﷨|�÷�|˵��|
|:--|:--|:--|
|`parent()`|$("li").parent()|���Ҹ���|
|`children(selector)`|$("ul").children("li")|�������һ�����׶��ӣ�|
|`find(selector)`|$("ul").find("li")|����������Ԫ��|
|`siblings(selector)`|$("li").siblings("li")|�����ֵ�Ԫ��|
|`eq(index)`|$("li").eq(2)|����Ϊ2��Ԫ��|

### 1.6 jQuery �������˼��
��Ҫ��ѡһ��Ч��������˼�룺��ǰԪ��������ʽ�������ֵ�Ԫ�������ʽ��
> $(this).css("color", "red")
> 
> $("this").siblings().css("color", "")
>
> **��ʽ���**
> 
> $(this).css("color", "red").siblings().css("color", "")

## �Ա�����
�ٺ���ԭ����꾭��������ĳ��Сli�������������������ӦͼƬ��ʾ�������ͼƬ���ء�

�� ��Ҫ�õ���ǰСli �������ţ��Ϳ�����ʾ��Ӧ�����ŵ�ͼƬ

�� jQuery �õ���ǰԪ�������� $(this).index() 

�� �м��Ӧ��ͼƬ������ͨ�� eq(index) ����ȥѡ��

�� ��ʾԪ�� show() ����Ԫ�� hide()


## 2. jQuery ��ʽЧ��
### 2.1 ���� CSS ����
jQuery����ʹ��css�������޸ļ�Ԫ����ʽ��Ҳ���Բ����࣬�޸Ķ����ʽ

1. $(this).css("color") // ֻд����������������ֵ
2. $(this).css("color", "red") 
3. $(this).css({"color": "red", "font-size": "20px"})

### 2.2 ��������ʽ����
1. �����
**$("div").addClass("current")**
2. �Ƴ���
**$("div").removeClass("current")**
3. �л���
**$("div").toggleClass("current")**

### ������tab ���л�����
�� ����ϲ���li����ǰli ���current�࣬�����ֵ��Ƴ��ࡣ
�� �����ͬʱ���õ���ǰli ��������
�� ���²�������Ӧ�����ŵ�item��ʾ�������item����
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
        <li class="current">��Ʒ����</li>
        <li>������װ</li>
        <li>�ۺ���</li>
        <li>��Ʒ���ۣ�50000��</li>
        <li>�ֻ�����</li>
      </ul>
    </div>
    <div class="tab_con">
      <div class="item" style="display: block;">
          ��Ʒ����ģ������
      </div>
      <div class="item">
          ������װģ������
      </div>
      <div class="item">
          �ۺ���ģ������
      </div>
      <div class="item">
          ��Ʒ���ۣ�50000��ģ������
      </div>
      <div class="item">
          �ֻ�����ģ������
        </div>

    </div>
</div>
<script>
    $(function() {
      // 1.����ϲ���li����ǰli ���current�࣬�����ֵ��Ƴ���
      $(".tab_list li").click(function() {
        // ��ʽ��̲���
        $(this).addClass("current").siblings().removeClass("current");
        // 2.�����ͬʱ���õ���ǰli ��������
        var index = $(this).index();
        console.log(index);
        // 3.���²�������Ӧ�����ŵ�item��ʾ�������item����
        $(".tab_con .item").eq(index).show().siblings().hide();
      });
    })
</script>
```

### 2.3 �������className����
> ԭ��JS��className�Ḳ��Ԫ��ԭ���������������jQuery��class()�������Ḳ��Ԫ��ԭ�ȵ�����

## 3. jQuery Ч��
jQuery�����Ƿ�װ�˺ܶද��Ч��
![alt text](img/img/image.png)

### 3.1 ��ʾ����Ч��
 1. ��ʾ�﷨�淶
- **show([speed,[easing],[fn]])**
 2. �����﷨�淶
- **hide([speed,[easing],[fn]])**
 3. ��ʾ������
 - ����������ʡ�ԣ��޶���ֱ����ʾ
 - speed������ִ���ٶȣ�Ĭ��Ϊ"normal"����ѡֵ��"slow"��"fast"��������
 - easing��ִ�ж����ķ�ʽ��Ĭ����"swing"����ѡֵ��"linear"��"swing"
 - fn��ִ����ɺ�Ļص�����

### 3.2 ����Ч��
1. �»�Ч���﷨
- **slideDown([speed,[easing],[fn]])**
2. �ϻ�Ч���﷨
- **slideUp([speed,[easing],[fn]])**
3. Ч���﷨
- **slideToggle([speed,[easing],[fn]])**
> ����ͬ3.1һ��

### 3.3 �¼��л�
> **hover([over,]out)**
> 
��1��over:����Ƶ�Ԫ����Ҫ�����ĺ������൱��mouseenter��

��2��out:����Ƴ�Ԫ��Ҫ�����ĺ������൱��mouseleave��

��3�����ֻдһ������������꾭�����뿪���ᴥ����

### 3.4 �������м���ֹͣ�Ŷӷ���
1. ������Ч������
��������Ч��һ�������ͻ�ִ�У���δ�������ɶ���Ŷ�ִ��
2. ֹͣ�Ŷ�
> stop()

(1) stop() ��������ֹͣ������Ч����

(2) ע�⣺ stop() д����������Ч����ǰ�棬 �൱��ֹͣ������һ�εĶ�����

### 3.5 ���뵭��Ч��
> 1. ����Ч���﷨�淶
> - **fadeIn([speed,[easing],[fn]])**
> 2. ����Ч���﷨�淶
> - **fadeOut([speed,[easing],[fn]])**
> 
> ��ʾ������
> - ����������ʡ�ԣ��޶���ֱ����ʾ
> - speed������ִ���ٶȣ�Ĭ��Ϊ"normal"����ѡֵ��"slow"��"fast"��������
> - easing��ִ�ж����ķ�ʽ��Ĭ����"swing"����ѡֵ��"linear"��"swing"
> - fn��ִ����ɺ�Ļص�����

> 1. ������ʽ������ָ���Ĳ�͸��
> **fadeTo([speed],opacity,[easing],[fn])**
> 2. ����˵��
> - speed������ִ���ٶȣ�Ĭ��Ϊ"normal"����ѡֵ��"slow"��"fast"��������
> - opacity��͸����`����`д��ȡֵ 0~1 ֮��
> - easing��ִ�ж����ķ�ʽ��Ĭ����"swing"����ѡֵ��"linear"��"swing"
> - fn���ص��������ڶ������ʱִ�еĺ�����ÿ��Ԫ��ִ��һ�Ρ�

### 3.6 �Զ��嶯�� animate
> 1. �﷨�淶
> - **animate({params},[speed,[easing],[fn]])**
> 2. ����˵��
> - params��Ҫ�ı������ֵ���������ֵ�ö��Ÿ���,����Ǹ�����������Ҫ��ȡ�շ������� borderLeft���������������ʡ��
> - speed������ִ���ٶȣ�Ĭ��Ϊ"normal"����ѡֵ��"slow"��"fast"��������
> - easing��ִ�ж����ķ�ʽ��Ĭ����"swing"����ѡֵ��"linear"
> - fn���ص��������ڶ������ʱִ�еĺ�����ÿ��Ԫ��ִ��һ�Ρ�

## 4. jQuery ���Բ���
### 4.1 ���û��ȡԪ�ع�������ֵ prop ()
��νԪ�ع������Ծ���Ԫ�ر����Դ������ԣ�����`<a>` Ԫ������� `href`, ����`<input>` Ԫ������� `type`��

**1. ��ȡ�����﷨**
```javascript
prop("����")
```

**2. ���������﷨**
```javascript
prop("����","����ֵ")
```

### 4.2 ���û��ȡԪ���Զ�������ֵ attr ()
�û��Լ���Ԫ����ӵ����ԣ����ǳ�Ϊ�Զ������ԣ������ `div` ��� `index ="1"`��
**1. ��ȡ�����﷨**
```javascript
attr("����") // ����ԭ��getAttribute()
```
**2. ���������﷨**
```javascript
attr("����","����ֵ") // ����ԭ��setAttribute()
```
�÷���Ҳ���Ի�ȡ H5 �Զ������ԡ�

### 4.3 ���ݻ��� data ()
data () ����������ָ����Ԫ���ϴ�ȡ���ݣ��������޸� DOM Ԫ�ؽṹ��һ��ҳ��ˢ�£�֮ǰ��ŵ����ݶ������Ƴ���
**1. ���������﷨**
```javascript
data("name","value") // ��ѡԪ�ظ�������
```
**2. ��ȡ�����﷨**
```javascript
data("name") // ��ѡԪ�ػ�ȡ����
```
ͬʱ�������Զ�ȡ HTML5 �Զ������� data-index, �õ����������͡�

## 5. jQuery �ı�����ֵ
> ��Ҫ���Ԫ�ص�`����`����`����ֵ`����

1.��ͨԪ������ html ()(�൱��ԭ�� inner HTML)
 ```javascript
 html() // ��ȡԪ������
 html("����") // ����Ԫ������
 ```
2.��ͨԪ���ı����� text () (�൱��ԭ�� innerText)
```javascript
text() // ��ȡԪ�ص��ı�����
text("�ı�����") // ����Ԫ�ص��ı�����
```
3.��Ԫ�ص�ֵ val () (�൱��ԭ�� value)
 ```javascript
 val() // ��ȡ��Ԫ�ص�ֵ
 val("ֵ") // ���ñ�Ԫ�ص�ֵ
 ```
## 6. jQuery Ԫ�ز���
> ��Ҫ��`����`����������ӡ�ɾ��Ԫ�ز���
### 6.1 ����Ԫ��
jQuery��ʽ�����Ƕ�ͬһ��Ԫ������ͬ���Ĳ����������Ҫ��ͬһ��Ԫ������ͬ�Ĳ�������ô����`����`��
**�﷨1��**
```javascript
$("ѡ����").each(function(index,dom){
    // ����
})
```
> each() ������ÿ��ƥ���Ԫ��ִ��һ�κ�������Ҫ��DOM����eachÿһ��
> 
> index����ǰԪ�ص�����ֵ����0��ʼ��dom��ÿ��DOM���󣬲���jQuery����
> 
> ����Ҫ����jQuery��������Ҫ��domԪ��ת��ΪjQuery����$(dom)

**�﷨2��**
```javascript
$.each(function(index,element){
    // ����
})
```
> $.each()���������ڱ����κζ�����Ҫ�������ݴ����������飬����
>
> index ��ÿ��Ԫ�ص�������; element ��������

### 6.2 ����Ԫ��
**�﷨**
```javascript
$("��ǩ")
```
### 6.3 ���Ԫ��
**�ڲ����**
```javascript
// ͨ��ѡ����ѡ���jQuery����
$("��ǩ").append("����") 
// DOMԪ��ת����jQuery����
element.append("����") 

// �����ݷ���ƥ��Ԫ���ڲ�����棬����ԭ�� appendChild

element.prepend("����")
// ���ݷ���ƥ��Ԫ���ڲ���ǰ�档
```
**�ⲿ���**
```javascript
// �����ݷ���Ŀ��Ԫ�غ���
element.after("����") 

// �����ݷ���Ŀ��Ԫ��ǰ��
element.before("����")
```
> `�ڲ�`���Ԫ�أ�����֮��������`���ӹ�ϵ`��
> 
> `�ⲿ`���Ԫ�أ�����֮��������`�ֵܹ�ϵ`��

### 6.4 ɾ��Ԫ��
```javascript
// ɾ��ƥ��Ԫ�ؼ�����ÿ��Ԫ�ص����к��Ԫ�غ��ı��ڵ�
element.remove()

// ɾ��ƥ��Ԫ�ؼ�����ÿ��Ԫ�صĺ��Ԫ��
element.empty()

// ɾ��ƥ��Ԫ�ؼ�����ÿ��Ԫ�ص�������Ԫ��
element.children().remove()
// ���ƥ���Ԫ������
element.html("")
```
> remove ɾ��Ԫ�ر���
> 
> empt() �� html('''') ���õȼۣ�������ɾ��Ԫ����������ݣ�ֻ���� html �������������ݡ�

## 7. jQuery �ߴ硢λ�ò���
### 7.1 �ߴ�
|�﷨|�÷�|
|:--:|:--:|
|width()/height()|��ȡԪ�ؿ�Ⱥ͸߶�|
|innerWidth()/innerHeight()|��ȡԪ�����ݿ�Ⱥ͸߶�|
|outerWidth()/outerHeight()|��ȡԪ�����ݿ�Ⱥ͸߶�+�ڱ߾�|
|outerWidth(true)/outerHeight(true)|��ȡԪ�����ݿ�Ⱥ͸߶�+�ڱ߾�+�߿�|

### 7.2 λ��
|�﷨|�÷�|
|:--:|:--:|
|offset()|��ȡԪ�ؾ����ĵ���ƫ����|
|position()|��ȡԪ����Ը�Ԫ�ص�λ��|
|scrollTop()/scrollLeft()|��ȡԪ�ع������Ĵ�ֱ/ˮƽ��������|