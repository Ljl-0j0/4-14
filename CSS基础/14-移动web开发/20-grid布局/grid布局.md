# ���ƶ�Web����֮grid���֡�

> ���������ĵ���Ҫ�������ԣ�[CSS Grid ���񲼾ֽ̳� - ��һ���������־ (ruanyifeng.com)](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

- [���ƶ�Web����֮grid���֡�](#�ƶ�web����֮grid����)
- [һ������](#һ����)
- [������������](#����������)
  - [2.1 ��������Ŀ](#21-��������Ŀ)
  - [2.2 �к���](#22-�к���)
  - [2.3 ��Ԫ��](#23-��Ԫ��)
  - [2.4 ������](#24-������)
- [������������](#����������)
  - [3.1 display ����](#31-display-����)
  - [3.2 grid-template-columns ���ԣ�grid-template-rows ����](#32-grid-template-columns-����grid-template-rows-����)
  - [3.3 grid-row-gap ���ԣ�grid-column-gap ���ԣ�grid-gap ����](#33-grid-row-gap-����grid-column-gap-����grid-gap-����)
  - [3.4 grid-template-areas ����](#34-grid-template-areas-����)
  - [3.5 grid-auto-flow ����](#35-grid-auto-flow-����)
  - [3.6 justify-items ���ԣ�align-items ���ԣ�place-items ����](#36-justify-items-����align-items-����place-items-����)
  - [3.7 justify-content ���ԣ�align-content ���ԣ�place-content ����](#37-justify-content-����align-content-����place-content-����)
  - [3.8 grid-auto-columns ���ԣ�grid-auto-rows ����](#38-grid-auto-columns-����grid-auto-rows-����)
  - [3.9 grid-template ���ԣ�grid ����](#39-grid-template-����grid-����)
- [�ġ���Ŀ����](#����Ŀ����)
  - [4.1 grid-column-start ���ԣ�grid-column-end ���ԣ�grid-row-start ���ԣ�grid-row-end ����](#41-grid-column-start-����grid-column-end-����grid-row-start-����grid-row-end-����)
  - [4.2 grid-column ���ԣ�grid-row ����](#42-grid-column-����grid-row-����)
  - [4.3 grid-area ����](#43-grid-area-����)
  - [4.4 justify-self ���ԣ�align-self ���ԣ�place-self ����](#44-justify-self-����align-self-����place-self-����)
- [�塢grid ���ֹ���](#��grid-���ֹ���)

# һ������

���񲼾֣�Grid������ǿ��� CSS ���ַ�����

������ҳ���ֳ�һ�������񣬿���������ϲ�ͬ�������������ָ����Ĳ��֡���ǰ��ֻ��ͨ�����ӵ� CSS ��ܴﵽ��Ч������������������ˡ�

<img src="mark-img/1_bg2019032501.png" alt="img" style="zoom:50%;" />

��ͼ�����Ĳ��֣����� Grid ���ֵ����ֺ�Ϸ��

Grid ������ Flex ������һ���������ԣ�������ָ�������ڶ����Ŀ��λ�á���������Ҳ�����ش�����

Flex ���������߲��֣�ֻ��ָ�� ����Ŀ�� ������ߵ�λ�ã����Կ�����**һά����**��Grid �������ǽ��������ֳ� ���С� �� ���С� ������Ԫ��Ȼ��ָ�� ����Ŀ���ڡ� �ĵ�Ԫ�񣬿��Կ�����**��ά����**��Grid ����Զ�� Flex ����ǿ��

> Ŀǰ Grid ���ֵ�����������Բ���̫�ã��ƶ��˱� PC ��Ҫ�õöࡣ

# ������������

![webp](mark-img/webp.jpg)

## 2.1 ��������Ŀ

�������񲼾ֵ����򣬳�Ϊ ����������container���������ڲ���������λ����Ԫ�أ���Ϊ ����Ŀ����item����

```html
<div>
  <div><p>1</p></div>
  <div><p>2</p></div>
  <div><p>3</p></div>
</div>
```

��������У������� `<div>` Ԫ�ؾ����������ڲ������ `<div>` Ԫ�ؾ�����Ŀ��

ע�⣺��Ŀֻ���������Ķ�����Ԫ�أ���������Ŀ����Ԫ�أ������������� `<p>` Ԫ�ؾͲ�����Ŀ��Grid ����ֻ����Ŀ��Ч��

## 2.2 �к���

���������ˮƽ�����Ϊ ���С���row������ֱ�����Ϊ ���С���column����

<img src="mark-img/1_bg2019032502.png" alt="img" style="zoom:50%;" />

��ͼ�У�ˮƽ����ɫ������� ���С�����ֱ����ɫ������� ���С���

## 2.3 ��Ԫ��

�к��еĽ������򣬳�Ϊ ����Ԫ�񡱣�cell����

��������£�`n` �к� `m` �л���� `n x m` ����Ԫ�񡣱��磬3 �� 3 �л���� 9 ����Ԫ��

## 2.4 ������

����������ߣ���Ϊ �������ߡ���grid line����ˮƽ�����߻��ֳ��У���ֱ�����߻��ֳ��С�

��������£�`n` ���� `n + 1` ��ˮƽ�����ߣ�`m` ���� `m + 1` ����ֱ�����ߣ��������о����ĸ�ˮƽ�����ߡ�

<img src="mark-img/1_bg2019032503.png" alt="img" style="zoom: 67%;" />

��ͼ��һ�� 4 x 4 �����񣬹��� 5 ��ˮƽ�����ߺ� 5 ����ֱ�����ߡ�

# ������������

Grid ���ֵ����Էֳ����ࡣһ�ඨ�����������棬��Ϊ**��������**����һ�ඨ������Ŀ���棬��Ϊ**��Ŀ����**���ⲿ���Ƚ����������ԡ�

## 3.1 display ����

`display: grid` ָ��һ�������������񲼾֡�

- Ĭ������£�����Ԫ�ض��ǿ鼶Ԫ��

![img](mark-img/bg2019032504.png)

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          name="viewport">
    <meta content="ie=edge" http-equiv="X-UA-Compatible">
    <title>Ĭ������£�����Ԫ�ض��ǿ鼶Ԫ��</title>
    <style>
        span {
            font-size: 2em;
        }

        #container {
            display: grid;
            /* grid-template-columns���Զ���ÿһ�е��п� */
            grid-template-columns: 50px 50px 50px;
            /* grid-template-rows���Զ���ÿһ�е��и� */
            grid-template-rows: 50px 50px 50px;
        }

        .item {
            font-size: 2em;
            text-align: center;
            border: 1px solid #e5e4e9;
        }

        .item-1 {
            background-color: #ef342a;
        }

        .item-2 {
            background-color: #f68f26;
        }

        .item-3 {
            background-color: #4ba946;
        }

        .item-4 {
            background-color: #0376c2;
        }

        .item-5 {
            background-color: #c077af;
        }

        .item-6 {
            background-color: #f8d29d;
        }

        .item-7 {
            background-color: #b5a87f;
        }

        .item-8 {
            background-color: #d0e4a9;
        }

        .item-9 {
            background-color: #4dc7ec;
        }
    </style>
</head>
<body>
<span>foo</span>
<div id="container">
    <div class="item item-1">1</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3</div>
    <div class="item item-4">4</div>
    <div class="item item-5">5</div>
    <div class="item item-6">6</div>
    <div class="item item-7">7</div>
    <div class="item item-8">8</div>
    <div class="item item-9">9</div>
</div>
<span>bar</span>
</body>
</html>
```

- ����Ԫ��Ҳ�����������Ԫ�ء�

![img](mark-img/bg2019032505.png)

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          name="viewport">
    <meta content="ie=edge" http-equiv="X-UA-Compatible">
    <title>����Ԫ��Ҳ��������Ϊ����Ԫ��</title>
    <style>
        span {
            font-size: 2em;
        }

        #container {
            display: inline-grid;
            /* grid-template-columns���Զ���ÿһ�е��п� */
            grid-template-columns: 50px 50px 50px;
            /* grid-template-rows���Զ���ÿһ�е��и� */
            grid-template-rows: 50px 50px 50px;
        }

        .item {
            font-size: 2em;
            text-align: center;
            border: 1px solid #e5e4e9;
        }

        .item-1 {
            background-color: #ef342a;
        }

        .item-2 {
            background-color: #f68f26;
        }

        .item-3 {
            background-color: #4ba946;
        }

        .item-4 {
            background-color: #0376c2;
        }

        .item-5 {
            background-color: #c077af;
        }

        .item-6 {
            background-color: #f8d29d;
        }

        .item-7 {
            background-color: #b5a87f;
        }

        .item-8 {
            background-color: #d0e4a9;
        }

        .item-9 {
            background-color: #4dc7ec;
        }
    </style>
</head>
<body>
<span>foo</span>
<div id="container">
    <div class="item item-1">1</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3</div>
    <div class="item item-4">4</div>
    <div class="item item-5">5</div>
    <div class="item item-6">6</div>
    <div class="item item-7">7</div>
    <div class="item item-8">8</div>
    <div class="item item-9">9</div>
</div>
<span>bar</span>
</body>
</html>
```

> ע�⣬��Ϊ���񲼾��Ժ�������Ԫ�أ���Ŀ���� `float`��`display: inline-block`��`display: table-cell`��`vertical-align` �� `column-*` �����ö���ʧЧ��

## 3.2 grid-template-columns ���ԣ�grid-template-rows ����

����ָ�������񲼾��Ժ󣬽��ž�Ҫ�����к��С�`grid-template-columns` ���Զ���ÿһ�е��п�`grid-template-rows` ���Զ���ÿһ�е��иߡ�

> ��ָֻ���� `grid-template-columns`��û��ָ�� `grid-template-rows` ����ָ����  `grid-template-rows` ������������ô��������Զ���������ȷ����װ���������������Ŀ�������еĸ߶�����������о�����һ���еĸ߶�Ϊ��ǡ����װ����Ŀ���ݣ���

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}
```

�������ָ����һ���������е������п���и߶��� `100px`��

<img src="mark-img/bg2019032506.png" alt="img" style="zoom:50%;" />

����ʹ�þ��Ե�λ��Ҳ����ʹ�ðٷֱȡ�

> �ٷֱ��ǻ���������ȵı�����

```css
.container {
  display: grid;
  /* 100 �� 3 �� 33.33333333333333��һ�㱣����λС�����ɣ�*/
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 33.33% 33.33% 33.33%;
}
```

**��1��repeat()**

��ʱ���ظ�дͬ����ֵ�ǳ��鷳����������ܶ�ʱ����ʱ������ʹ�� `repeat()` ���������ظ���ֵ������Ĵ����� `repeat()` ��д���¡�

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);
}
```

`repeat()` ����������������һ���������ظ��Ĵ�����������3�����ڶ�����������Ҫ�ظ���ֵ��

`repeat()` �ظ�ĳ��ģʽҲ�ǿ��Եġ�

```css
grid-template-columns: repeat(2, 100px 20px 80px);
/* 100px 20px 80px 100px 20px 80px */
```

������붨���� 6 �У���һ�к͵����еĿ��Ϊ `100px`���ڶ��к͵�����Ϊ `20px`�������к͵�����Ϊ `80px`��

<img src="mark-img/bg2019032507.png" alt="img" style="zoom:50%;" />

**��2��auto-fill �ؼ���**

��ʱ����Ԫ��Ĵ�С�ǹ̶��ģ����������Ĵ�С��ȷ�������ϣ��ÿһ�У���ÿһ�У����ɾ����ܶ�ĵ�Ԫ����ʱ����ʹ�� `auto-fill` �ؼ��ֱ�ʾ�Զ���䡣

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
}
```

��������ʾÿ�п�� `100px`��Ȼ���Զ���䣬ֱ���������ܷ��ø�����У�Ȼ���м����������С�

<img src="mark-img/bg2019032508.png" alt="img" style="zoom:50%;" />

**��3��fr �ؼ���**

Ϊ�˷����ʾ������ϵ�����񲼾��ṩ�� `fr` �ؼ��֣�fraction ����д����Ϊ ��Ƭ�Ρ�����������еĿ�ȷֱ�Ϊ `1fr` �� `2fr`���ͱ�ʾ������ǰ�ߵ�������

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

��������ʾ������ͬ��ȵ��С�

<img src="mark-img/1_bg2019032509.png" alt="img" style="zoom: 33%;" />

`fr` ��������Գ��ȵĵ�λ���ʹ�ã���ʱ��ǳ����㡣

```css
.container {
  display: grid;
  grid-template-columns: 150px 1fr 2fr;
}
```

��������ʾ����һ�еĿ��Ϊ 150 ���أ��ڶ��еĿ���ǵ����е�һ�롣

<img src="mark-img/image-20220227180532881-164595711490010.png" alt="image-20220227180532881" style="zoom:33%;" />

**��4��minmax()**

`minmax()` ��������һ�����ȷ�Χ����ʾ���Ⱦ��������Χ֮�С������������������ֱ�Ϊ��Сֵ�����ֵ��

```css
grid-template-columns: 1fr 1fr minmax(100px, 1fr);
```

��������У�`minmax(100px, 1fr)` ��ʾ�п�С�� `100px`�������� `1fr`��

![1](mark-img/1.gif)

**��5��auto �ؼ���**

`auto` �ؼ��ֱ�ʾ��������Լ��������ȡ�

```css
grid-template-columns: 100px auto 100px;
```

��������У��ڶ��еĿ�ȣ������ϵ��ڸ��е�Ԫ�������ȣ����ǵ�Ԫ������������ `min-width`�������ֵ��������ȡ�

**��6�������ߵ�����**

`grid-template-columns` ���Ժ� `grid-template-rows` �������棬������ʹ�÷����ţ�ָ��ÿһ�������ߵ����֣������Ժ�����á�

```css
.container {
  display: grid;
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
}
```

�������ָ�����񲼾�Ϊ 3 �� 3 �У������ 4 ����ֱ�����ߺ� 4 ��ˮƽ�����ߡ�������������������˸��ߵ����֡�

���񲼾�����ͬһ�����ж�����֣����� `[fifth-line row-5]`��

**��7������ʵ��**

`grid-template-columns` ���Զ�����ҳ���ַǳ����á�����ʽ����ֻ��Ҫһ�д��롣

```css
.wrapper {
  display: grid;
  grid-template-columns: 70% 30%;
}
```

������뽫�������Ϊ 70%���ұ�����Ϊ 30%��

��ͳ��ʮ�����񲼾֣�д����Ҳ�����ס�

```css
grid-template-columns: repeat(12, 1fr);
```

## 3.3 grid-row-gap ���ԣ�grid-column-gap ���ԣ�grid-gap ����

`grid-row-gap` �������������еļ�����м�ࣩ��`grid-column-gap` �������������еļ�����м�ࣩ��

```css
.container {
  grid-row-gap: 20px;
  grid-column-gap: 20px;
}
```

��������У�`grid-row-gap` ���������м�࣬`grid-column-gap` ���������м�ࡣ

<img src="mark-img/bg2019032511.png" alt="img" style="zoom:50%;" />

`grid-gap` ������ `grid-column-gap` �� `grid-row-gap` �ĺϲ���д��ʽ���﷨���¡�

```css
grid-gap: <grid-row-gap> <grid-column-gap>;
```

��ˣ�����һ�� CSS �����ͬ������Ĵ��롣

```css
.container {
  grid-gap: 20px 20px;
}
```

��� `grid-gap` ʡ���˵ڶ���ֵ���������Ϊ�ڶ���ֵ���ڵ�һ��ֵ��

> �������±�׼������������������ `grid-` ǰ׺�Ѿ�ɾ����`grid-column-gap` �� `grid-row-gap` д�� `column-gap` �� `row-gap`��`grid-gap` д�� `gap`��

## 3.4 grid-template-areas ����

���񲼾�����ָ�� �����򡱣�area����һ�������ɵ���������Ԫ����ɡ�`grid-template-areas` �������ڶ�������

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas: 'a b c'
                       'd e f'
                       'g h i';
}
```

��������Ȼ��ֳ�9����Ԫ��Ȼ���䶨��Ϊ `a` �� `i` �ľŸ����򣬷ֱ��Ӧ��Ÿ���Ԫ��

�����Ԫ��ϲ���һ�������д�����¡�

```css
grid-template-areas: 'a a a'
                     'b b b'
                     'c c c';
```

������뽫 9 ����Ԫ��ֳ� `a`��`b`��`c` ��������

������һ������ʵ����

```css
grid-template-areas: "header header header"
                     "main main sidebar"
                     "footer footer footer";
```

��������У�������ҳü���� `header`���ײ���ҳ������ `footer`���м䲿����Ϊ `main` �� `sidebar`��

���ĳЩ������Ҫ���ã���ʹ�� ���㡱��`.`����ʾ��

```css
grid-template-areas: 'a . c'
                     'd . f'
                     'g . i';
```

��������У��м�һ��Ϊ�㣬��ʾû���õ��õ�Ԫ�񣬻��߸õ�Ԫ�������κ�����

> ע�⣬�����������Ӱ�쵽�����ߡ�ÿ���������ʼ�����ߣ����Զ�����Ϊ `������-start`����ֹ�������Զ�����Ϊ `������-end`��
>
> ���磬������Ϊ `header`������ʼλ�õ�ˮƽ�����ߺʹ�ֱ�����߽��� `header-start`����ֹλ�õ�ˮƽ�����ߺʹ�ֱ�����߽��� `header-end`��

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>����</title>
    <style>
        .container {
            width: 980px;
            height: 600px;
            margin: 10px auto;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            grid-template-areas:
                                "header header header"
                                "main main sidebar"
                                "footer footer footer";
        }

        .header {
            grid-area: header;
            background-color: red;
        }

        .main {
            grid-area: main;
            background-color: green;
        }

        .sidebar {
            grid-area: sidebar;
            background-color: blue;
        }

        .footer {
            grid-area: footer;
            background-color: gray;
        }
    </style>
</head>
<body>
<div class="container">
    <div class="header"></div>
    <div class="main"></div>
    <div class="sidebar"></div>
    <div class="footer"></div>
</div>
</body>
</html>
```

![image-20220227184302178](mark-img/image-20220227184302178.png)

## 3.5 grid-auto-flow ����

���������Ժ���������Ԫ�ػᰴ��˳���Զ�������ÿһ������Ĭ�ϵķ���˳���� �����к��С�������������һ�У��ٿ�ʼ����ڶ��У�����ͼ���ֵ�˳��

<img src="mark-img/bg2019032506-164595896089512.png" alt="img" style="zoom:50%;" />

���˳���� `grid-auto-flow` ���Ծ�����Ĭ��ֵ�� `row`���� �����к��С���Ҳ���Խ������ `column`����� �����к��С���

```css
grid-auto-flow: column;
```

������������� `column` �Ժ󣬷���˳��ͱ������ͼ��

<img src="mark-img/bg2019032512.png" alt="img" style="zoom:50%;" />

`grid-auto-flow` ���Գ������ó� `row` �� `column`����������� `row dense` �� `column dense`��������ֵ��Ҫ���ڣ�ĳЩ��Ŀָ��λ���Ժ�ʣ�µ���Ŀ��ô�Զ����á�

����������� 1 ����Ŀ�� 2 ����Ŀ��ռ��������Ԫ��Ȼ����Ĭ�ϵ� `grid-auto-flow: row` ����£���������������Ĳ��֡�

<img src="mark-img/bg2019032513.png" alt="img" style="zoom:50%;" />

��ͼ�У�1 ����Ŀ�����λ���ǿյģ�������Ϊ 3 ����ĿĬ�ϸ��� 2 ����Ŀ�����Ի����� 2 ����Ŀ���档

�����޸����ã���Ϊ `row dense`����ʾ �����к��С������Ҿ����ܽ������������������ֿո�

```css
grid-auto-flow: row dense;
```

��������Ч�����¡�

<img src="mark-img/bg2019032514.png" alt="img" style="zoom:50%;" />

��ͼ����������һ�У��������ڶ��У����� 3 ����Ŀ�ͻ������ 1 ����Ŀ�ĺ��档8 ����Ŀ�� 9 ����Ŀ�ͻ��ŵ������С�

��������ø�Ϊ `column dense`����ʾ �����к��С������Ҿ��������ո�

```css
grid-auto-flow: column dense;
```

��������Ч�����¡�

<img src="mark-img/bg2019032515.png" alt="img" style="zoom:50%;" />

��ͼ����������һ�У��������� 2 �У����� 3 ����Ŀ�ڵ�һ�У�4 ����Ŀ�ڵڶ��С�8 ����Ŀ�� 9 ����Ŀ�������˵����С�

## 3.6 justify-items ���ԣ�align-items ���ԣ�place-items ����

`justify-items` �������õ�Ԫ�����ݵ�ˮƽλ�ã������ң���`align-items` �������õ�Ԫ�����ݵĴ�ֱλ�ã������£���

```css
.container {
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
}
```

���������Ե�д����ȫ��ͬ��������ȡ������Щֵ��

> - start�����뵥Ԫ�����ʼ��Ե��
> - end�����뵥Ԫ��Ľ�����Ե��
> - center����Ԫ���ڲ����С�
> - stretch�����죬ռ����Ԫ���������ȣ�Ĭ��ֵ����

```css
.container {
  justify-items: start;
}
```

��������ʾ����Ԫ�����������룬Ч������ͼ��

![img](mark-img/bg2019032516.png)

```css
.container {
  align-items: start;
}
```

��������ʾ����Ԫ�������ͷ�����룬Ч������ͼ��

![img](mark-img/bg2019032517.png)

`place-items` ������ `align-items` ���Ժ� `justify-items` ���Եĺϲ���д��ʽ��

```css
place-items: <align-items> <justify-items>;
```

������һ�����ӡ�

```css
place-items: start end;
```

���ʡ�Եڶ���ֵ�����������Ϊ���һ��ֵ��ȡ�

## 3.7 justify-content ���ԣ�align-content ���ԣ�place-content ����

`justify-content` �����������������������������ˮƽλ�ã������ң���`align-content` ������������������Ĵ�ֱλ�ã������£���

```css
.container {
	justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
	align-content: start | end | center | stretch | space-around | space-between | space-evenly;  
}
```

���������Ե�д����ȫ��ͬ��������ȡ������Щֵ���������ͼ���� `justify-content` ����Ϊ����`align-content` ���Ե�ͼ��ȫһ����ֻ�ǽ�ˮƽ����ĳɴ�ֱ���򡣣�

> - start - ������������ʼ�߿�

![img](mark-img/bg2019032519.png)

> - end - ���������Ľ����߿�

![img](mark-img/bg2019032518.png)

> - center - �����ڲ����С�

![img](mark-img/bg2019032520.png)

> - stretch - ��Ŀ��Сû��ָ��ʱ������ռ����������������

![img](mark-img/bg2019032521.png)

> - space-around - ÿ����Ŀ����ļ����ȡ����ԣ���Ŀ֮��ļ������Ŀ�������߿�ļ����һ����

![img](mark-img/bg2019032522.png)

> - space-between - ��Ŀ����Ŀ�ļ����ȣ���Ŀ�������߿�֮��û�м����

![img](mark-img/bg2019032523.png)

> - space-evenly - ��Ŀ����Ŀ�ļ����ȣ���Ŀ�������߿�֮��Ҳ��ͬ�����ȵļ����

![img](mark-img/bg2019032524.png)

`place-content` ������ `align-content` ���Ժ� `justify-content` ���Եĺϲ���д��ʽ��

```css
place-content: <align-content> <justify-content>
```

������һ�����ӡ�

```css
place-content: space-around space-evenly;
```
���ʡ�Եڶ���ֵ��������ͻ�ٶ��ڶ���ֵ���ڵ�һ��ֵ��

## 3.8 grid-auto-columns ���ԣ�grid-auto-rows ����

��ʱ��һЩ��Ŀ��ָ��λ�ã�������������ⲿ����������ֻ�� 3 �У�����ĳһ����Ŀָ���ڵ� 5 �С���ʱ����������Զ����ɶ���������Ա������Ŀ��

`grid-auto-columns` ���Ժ� `grid-auto-rows` �����������ã�������Զ������Ķ���������п���иߡ����ǵ�д���� `grid-template-columns` �� `grid-template-rows` ��ȫ��ͬ�������ָ�����������ԣ��������ȫ���ݵ�Ԫ�����ݵĴ�С����������������п���иߡ�

������������棬���ֺõ������� 3 �� 3 �У����ǣ�8 ����Ŀָ���ڵ� 4 �У�9 ����Ŀָ���ڵ� 5 �С�

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>grid-auto</title>
    <style>
        #container {
            display: grid;
            grid-template-columns: 100px 100px 100px;
            grid-template-rows: 100px 100px 100px;
            grid-auto-rows: 50px;
        }

        .item {
            font-size: 2em;
            text-align: center;
            border: 1px solid #e5e4e9;
        }

        .item-1 {
            background-color: #ef342a;
        }

        .item-2 {
            background-color: #f68f26;
        }

        .item-3 {
            background-color: #4ba946;
        }

        .item-4 {
            background-color: #0376c2;
        }

        .item-5 {
            background-color: #c077af;
        }

        .item-6 {
            background-color: #f8d29d;
        }

        .item-7 {
            background-color: #b5a87f;
        }

        .item-8 {
            background-color: #d0e4a9;
            grid-row-start: 4;
            grid-column-start: 2;
        }

        .item-9 {
            background-color: #4dc7ec;
            grid-row-start: 5;
            grid-column-start: 3;
        }
    </style>
</head>
<body>
<div id="container">
    <div class="item item-1">1</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3</div>
    <div class="item item-4">4</div>
    <div class="item item-5">5</div>
    <div class="item item-6">6</div>
    <div class="item item-7">7</div>
    <div class="item item-8">8</div>
    <div class="item item-9">9</div>
</div>
</body>
</html>
```

�������ָ���������и�ͳһΪ 50px��ԭʼ���и�Ϊ 100px����

<img src="mark-img/bg2019032525.png" alt="img" style="zoom:50%;" />

## 3.9 grid-template ���ԣ�grid ����

`grid-template` ������ `grid-template-columns`��`grid-template-rows` �� `grid-template-areas` ���������Եĺϲ���д��ʽ��

`grid` ������ `grid-template-rows`��`grid-template-columns`��`grid-template-areas`�� `grid-auto-rows`��`grid-auto-columns`��`grid-auto-flow` ���������Եĺϲ���д��ʽ��

���׶���д�ĽǶȿ��ǣ����ǽ��鲻Ҫ�ϲ����ԣ���������Ͳ���ϸ���������������ˡ�

# �ġ���Ŀ����

> ������Щ���Զ�������Ŀ���档

## 4.1 grid-column-start ���ԣ�grid-column-end ���ԣ�grid-row-start ���ԣ�grid-row-end ����

��Ŀ��λ���ǿ���ָ���ģ����巽������ָ����Ŀ���ĸ��߿򣬷ֱ�λ���ĸ������ߡ�

- `grid-column-start` ���ԣ���߿����ڵĴ�ֱ������
- `grid-column-end` ���ԣ��ұ߿����ڵĴ�ֱ������
- `grid-row-start` ���ԣ��ϱ߿����ڵ�ˮƽ������
- `grid-row-end` ���ԣ��±߿����ڵ�ˮƽ������

```css
.item-1 {
  grid-column-start: 2;
  grid-column-end: 4;
}
```

�������ָ����1 ����Ŀ����߿��ǵڶ�����ֱ�����ߣ��ұ߿��ǵ��ĸ���ֱ�����ߡ�

<img src="mark-img/bg2019032526-164601330014529.png" alt="img" style="zoom:50%;" />

��ͼ�У�ָֻ���� 1 ����Ŀ�����ұ߿�û��ָ�����±߿����Ի����Ĭ��λ�ã����ϱ߿��ǵ�һ��ˮƽ�����ߣ��±߿��ǵڶ���ˮƽ�����ߡ�

���� 1 ����Ŀ���⣬������Ŀ��û��ָ��λ�ã���������Զ����֣���ʱ���ǵ�λ���������� `grid-auto-flow` ���Ծ�����������Ե�Ĭ��ֵ�� `row`����˻� �����к��С� �������С����߿��԰�������Ե�ֵ�ֱ�ĳ� `column`��`row dense` �� `column dense`������������Ŀ��λ�÷����������ı仯��

�����������ָ���ĸ��߿�λ�õ�Ч����

```css
.item-1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
}
```

<img src="mark-img/bg2019032527.png" alt="img" style="zoom:50%;" />

���ĸ����Ե�ֵ������ָ��Ϊ�ڼ��������ߣ�������ָ��Ϊ�����ߵ����֡�

```css
.item-1 {
  grid-column-start: header-start;
  grid-column-end: header-end;
}
```

��������У���߿���ұ߿��λ�ã���ָ��Ϊ�����ߵ����֡�

���ĸ����Ե�ֵ������ʹ�� `span` �ؼ��֣���ʾ ����Խ���������ұ߿����±߿�֮���Խ���ٸ�����

```css
.item-1 {
  grid-column-start: span 2;
}
```

��������ʾ��1 ����Ŀ����߿�����ұ߿��Խ 2 ������

<img src="mark-img/bg2019032528.png" alt="img" style="zoom:50%;" />

��������Ĵ���Ч����ȫһ����

```css
.item-1 {
  grid-column-end: span 2;
}
```

> ʹ�����ĸ����ԣ������������Ŀ���ص�����ʹ�� `z-index` ����ָ����Ŀ���ص�˳��
>
> > �� CSS Grid �����У����ǿ���ͨ��������Ŀ���õķ�ʽ���ò�ͬ��Ԫ���ص���һ�𣬲���ͨ�� CSS �� `z-index` ������������Ŀ�� `z` ���ϵĲ��˳��Ҳ����˵��������Ҫʹ�� CSS �� [`position` �ľ��Զ�λ��`absolute`����ʵ�ֵĲ���](https://www.w3cplus.com/css/css-position-and-z-index.html)�����ڿ���ֱ��ʹ�� CSS Grid �������
> > ԭ��: https://www.w3cplus.com/css/overlapping-grid-layout.html ? [w3cplus.com](https://www.w3cplus.com/)
> >
> > <img src="mark-img/css-grid-case-overlay-1-164602172605438.jpg" alt="img" style="zoom: 25%;" />
> >
> > <img src="mark-img/css-grid-case-overlay-5.jpg" alt="img" style="zoom:25%;" />

## 4.2 grid-column ���ԣ�grid-row ����

`grid-column` ������ `grid-column-start` �� `grid-column-end` �ĺϲ���д��ʽ��`grid-row` ������`grid-row-start` ���Ժ� `grid-row-end` �ĺϲ���д��ʽ��

```css
.item {
  grid-column: <start-line> / <end-line>;
  grid-row: <start-line> / <end-line>;
}
```

������һ�����ӡ�

```css
.item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
/* ��ͬ�� */
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
```

��������У���Ŀ `item-1` ռ�ݵ�һ�У��ӵ�һ�����ߵ����������ߡ�

����������֮�У�Ҳ����ʹ�� `span` �ؼ��֣���ʾ��Խ���ٸ�����

```css
.item-1 {
  background: #b03532;
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
/* ��ͬ�� */
.item-1 {
  background: #b03532;
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}
```

��������У���Ŀ `item-1` ռ�ݵ����򣬰�����һ�� + �ڶ��С���һ�� + �ڶ��С�

<img src="mark-img/bg2019032529.png" alt="img" style="zoom:50%;" />

б���Լ�����Ĳ��ֿ���ʡ�ԣ�Ĭ�Ͽ�Խһ������

```css
.item-1 {
  grid-column: 1;
  grid-row: 1;
}
```

��������У���Ŀ `item-1` ռ�����Ͻǵ�һ������

## 4.3 grid-area ����

`grid-area` ����ָ����Ŀ������һ������

```css
.item-1 {
    grid-area: e;
}
```

��������У�1 ����Ŀλ�� `e` ����Ч������ͼ��

<img src="mark-img/bg2019032530.png" alt="img" style="zoom:50%;" />

`grid-area` ���Ի������� `grid-row-start`��`grid-column-start`��`grid-row-end`��`grid-column-end` �ĺϲ���д��ʽ��ֱ��ָ����Ŀ��λ�á�

```css
.item {
	grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
}
```

������һ�����ӡ�

```css
.item-1 {
  grid-area: 1 / 1 / 3 / 3;
}
```

<img src="mark-img/image-20220228102207300.png" alt="image-20220228102207300" style="zoom: 33%;" />

## 4.4 justify-self ���ԣ�align-self ���ԣ�place-self ����

`justify-self` �������õ�Ԫ�����ݵ�ˮƽλ�ã������ң����� `justify-items` ���Ե��÷���ȫһ�£���ֻ�����ڵ�����Ŀ��

`align-self` �������õ�Ԫ�����ݵĴ�ֱλ�ã������£����� `align-items` ���Ե��÷���ȫһ�£�Ҳ��ֻ�����ڵ�����Ŀ��

```css
.item {
    justify-self: start | end | center | stretch;
    align-self: start | end | center | stretch;
}
```

���������Զ�����ȡ�����ĸ�ֵ��

- start�����뵥Ԫ�����ʼ��Ե��
- end�����뵥Ԫ��Ľ�����Ե��
- center����Ԫ���ڲ����С�
- stretch�����죬ռ����Ԫ���������ȣ�Ĭ��ֵ����

������ `justify-self: start` �����ӡ�

```css
.item-1  {
    justify-self: start;
}
```

![img](mark-img/bg2019032532.png)

`place-self` ������ `align-self` ���Ժ� `justify-self` ���Եĺϲ���д��ʽ��

```css
place-self: <align-self> <justify-self>;
```

������һ�����ӡ�

```css
place-self: center center;
```

���ʡ�Եڶ���ֵ��`place-self` ���Ի���Ϊ������ֵ��ȡ�

# �塢grid ���ֹ���

[����� - ���߿������CSS��ҳ���� (lingdaima.com)](https://www.lingdaima.com/grid/)

![image-20220228120835928](mark-img/image-20220228120835928.png)