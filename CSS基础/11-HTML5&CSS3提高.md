<!--
 * @Description: 
 * @Author: ljl
 * @Date: 2025-04-23 20:18:13
 * @LastEditors: rendc
 * @LastEditTime: 2025-04-23 20:18:18
-->
# ��HTML5&CSS3��ߡ�
- [��HTML5\&CSS3��ߡ�](#html5css3���)
- [һ��HTML5��������](#һhtml5��������)
    - [1.1 HTML5���������廯��ǩ](#11-html5���������廯��ǩ)
    - [1.2 HTML5�����Ķ�ý���ǩ](#12-html5�����Ķ�ý���ǩ)
        - [1.2.1 ��Ƶ](#121-��Ƶ)
        - [1.2.2 ��Ƶ](#122-��Ƶ)
        - [1.2.3 ��ý���ǩ�ܽ�](#123-��ý���ǩ�ܽ�)
    - [1.3 HTML5������input����](#13-html5������input����)
    - [1.4 HTML5�����ı�����](#14-html5�����ı�����)
- [����CSS3��������](#��css3��������)
    - [2.1 CSS3����״](#21-css3����״)
    - [2.2 CSS3����ѡ����](#22-css3����ѡ����)
        - [2.2.1 ����ѡ����](#221-����ѡ����)
        - [2.2.2 �ṹα��ѡ����](#222-�ṹα��ѡ����)
        - [2.2.3 αԪ��ѡ�������ص㣩](#223-αԪ��ѡ�����ص�)
    - [2.3 CSS3����ģ��](#23-css3����ģ��)
    - [2.4 CSS3�������ԣ��˽⣩](#24-css3���������˽�)
        - [2.4.1 CSS3�˾� filter](#241-css3�˾�-filter)
        - [2.4.2 CSS3 calc ����](#242-css3-calc-����)
    - [2.5 CSS3���ɣ��ص㣩](#25-css3�����ص�)
        - [2.5.1 ����](#251-����)
        - [2.5.2 ����������](#252-����������)
    - [2.6 CSS3 ����](#26-css3-����)
- [��������� HTML5 CSS3](#�������-html5-css3)
- [�ġ������ HTML5](#�Ĺ����-html5)


# һ��HTML5��������

HTML5 ������������Ҫ���������ǰ�Ĳ��㣬������һЩ�µı�ǩ���µı����µı����Եȡ�

��Щ�����Զ��м��������⣬������ IE9+ ���ϰ汾���������֧�֣���������Ǽ��������⣨���磺�ƶ��ˣ�������Դ���ʹ����Щ�����ԡ�

> �����������������˺ܶ࣬��������ֻ��רע�ڿ������õ������Լ���

## 1.1 HTML5���������廯��ǩ

��ǰ���֣����ǻ����� div ������div ��������������˵����û������ġ�

```html
<div class=��header��> </div>
<div class=��nav��> </div>
<div class=��content��> </div>
<div class=��footer��> </div>
```

![](mark-img/20210422144246555.png)

- `<header>`��ͷ����ǩ
- `<nav>`��������ǩ
- `<article>`�����ݱ�ǩ
- `<section>`�������ĵ���ĳ������
- `<aside>`���������ǩ
- `<footer>`��β����ǩ

ע�⣺

- �������廯��׼��Ҫ��������������
- ��Щ�±�ǩҳ���п���ʹ�ö��
- �� IE9 �У���Ҫ����ЩԪ��ת��Ϊ�鼶Ԫ��
- ��ʵ�������ƶ��˸�ϲ��ʹ����Щ��ǩ
- HTML5 �������˺ܶ�������ǩ�����Ǻ���������ѧ

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML5�������廯��ǩ</title>
    <style>
        header, nav {
            height: 120px;
            background-color: pink;
            border-radius: 15px;
            width: 800px;
            margin: 15px auto;
        }

        section {
            width: 500px;
            height: 300px;
            background-color: skyblue;
        }
    </style>
</head>
<body>
<header>ͷ����ǩ</header>
<nav>��������ǩ</nav>
<section>ĳ������</section>
</body>
</html>
```

![](mark-img/20210422144908912.png)

## 1.2 HTML5�����Ķ�ý���ǩ

�����Ķ�ý���ǩ��Ҫ����������

1. ��Ƶ��`<audio>`
2. ��Ƶ��`<video>`

ʹ�����ǿ��Ժܷ������ҳ����Ƕ����Ƶ����Ƶ��������ȥʹ�� flash ����������������

### 1.2.1 ��Ƶ

HTML5 �ڲ�ʹ�ò��������£�Ҳ����ԭ����֧����Ƶ��ʽ�ļ��Ĳ��š���Ȼ��֧�ֵĸ�ʽ�����޵ġ�

��ǰ `<video>` Ԫ��֧��������Ƶ��ʽ������ʹ�� mp4 ��ʽ��

![](mark-img/20210422150454844.png)

�﷨��

```html
<video src="�ļ���ַ" controls="controls"></video>
```

```html
<video controls="controls" width="300"> 
    <source src="move.ogg" type="video/ogg"> 
    <source src="move.mp4" type="video/mp4"> 
    ����������ݲ�֧�� <video> ��ǩ������Ƶ
</ video >
```

�������ԣ�

![](mark-img/20210422150845591.png)

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML5������Ƶ��ǩ</title>
    <style>
        video {
            width: 100%;
        }
    </style>
</head>
<body>
<video src="media/mi.mp4" autoplay="autoplay" muted="muted" loop="loop" poster="media/mi9.jpg"></video>
</body>
</html>
```

![](mark-img/20210422145552748.png)

������Ƶ���Զ����š�

### 1.2.2 ��Ƶ

HTML5 �ڲ�ʹ�ò��������£�Ҳ����ԭ����֧����Ƶ��ʽ�ļ��Ĳ��š���Ȼ��֧�ֵĸ�ʽ�����޵ġ�

��ǰ `<audio>` Ԫ��֧��������Ƶ��ʽ������ʹ�� mp3 ��ʽ��

![](mark-img/20210422151256515.png)

�﷨��

```html
<audio src="�ļ���ַ" controls="controls"></audio>
```

```html
<audio controls="controls">
	<source src="happy.mp3" type="audio/mpeg">
	<source src="happy.ogg" type="audio/ogg">
	����������ݲ�֧�� <audio> ��ǩ��
</audio>
```

�������ԣ�

![](mark-img/20210422151722831.png)

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML5������Ƶ��ǩ</title>
</head>
<body>
<audio src="media/music.mp3" autoplay="autoplay" controls="controls"></audio>
</body>
</html>
```

![](mark-img/20210422145736892.png)

### 1.2.3 ��ý���ǩ�ܽ�

- ��Ƶ��ǩ����Ƶ��ǩʹ�÷�ʽ����һ��
- �����֧�������ͬ
- �ȸ����������Ƶ����Ƶ�Զ����Ž�ֹ��
- ���ǿ��Ը���Ƶ��ǩ��� muted ����������������Ƶ����Ƶ�����ԣ�����ͨ�� JavaScript �����
- ��Ƶ��ǩ���ص㣬���Ǿ��������Զ����ţ���ʹ�� controls �ؼ���ѭ�������ô�С����

## 1.3 HTML5������input����

![](mark-img/20210422152350339.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
<!-- ������֤��ʱ��������form���� -->
<form action="">
    <ul>
        <li>����: <input type="email"/></li>
        <li>��ַ: <input type="url"/></li>
        <li>����: <input type="date"/></li>
        <li>ʱ��: <input type="time"/></li>
        <li>����: <input type="number"/></li>
        <li>�ֻ�����: <input type="tel"/></li>
        <li>����: <input type="search"/></li>
        <li>��ɫ: <input type="color"/></li>
        <!-- �����ǵ���ύ��ť�Ϳ�����֤���� -->
        <li><input type="submit" value="�ύ"></li>
    </ul>
</form>
</body>

</html>
```

<img src="mark-img/20210422153038412.png" style="zoom:50%;" />

<img src="mark-img/20210422153108799.png" style="zoom:50%;" />

<img src="mark-img/20210422153142478.png" style="zoom:50%;" />

<img src="mark-img/20210422153215652.png" style="zoom:50%;" />

ע�⣺HTML5 ���ṩ�� input ���Ϳ������ݾ����ϵͳ�������������ʽ��

<img src="mark-img/202104221541335.jpg" style="zoom:33%;" />

<img src="mark-img/20210422154149869.jpg" style="zoom:33%;" />

<img src="mark-img/20210422154207436.jpg" style="zoom:33%;" />

<img src="mark-img/20210422154222156.jpg" style="zoom:33%;" />

<img src="mark-img/20210422154236689.jpg" style="zoom:33%;" />

��Ϊ��ֵ��ʱ�����뷨�Զ������ּ��̣�

<img src="mark-img/20210422154252598.jpg" style="zoom:33%;" />

## 1.4 HTML5�����ı�����

![](mark-img/20210422155356572.png)

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML5����������</title>
    <style>
        input::placeholder {
            color: hotpink;
        }
    </style>
</head>
<body>
<form action="">
    <input type="search" name="sear" id="one" required="required" placeholder="pink��ʦ" autofocus="autofocus"
           autocomplete="off">
    <input type="file" name="" id="two" multiple="multiple">
    <input type="submit" value="�ύ">
</form>

</body>
</html>
```

![](mark-img/202104221601401.gif)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML5����������</title>
    <style>
        input::placeholder {
            color: hotpink;
        }
    </style>
</head>

<body>
    <form action="">
        <input type="search" name="sear" id="one" required="required" placeholder="pink��ʦ" autofocus="autofocus"
            autocomplete="on">
        <input type="submit" value="�ύ">
    </form>

</body>

</html>
```

![](mark-img/97f447da3ca0483f9358c26cf286aea5.gif)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML5����������</title>
    <style>
        input::placeholder {
            color: hotpink;
        }
    </style>
</head>

<body>
    <form action="">
        <input type="search" name="sear" id="one" required="required" placeholder="pink��ʦ" autofocus="autofocus"
            autofocus="autofocus">
        <input type="submit" value="�ύ">
    </form>

</body>

</html>
```

�Զ��۽���

![](mark-img/b903916cbc5d4dfeb5f21741362564ba.gif)

# ����CSS3��������

## 2.1 CSS3����״

- ������ CSS3 �����м��������⣬IE9+ ��֧��
- �ƶ���֧������ PC ��
- ���ϸĽ���
- Ӧ����Թ㷺
- �ֽ׶���Ҫѧϰ������ѡ����������ģ�� �Լ� ��������

## 2.2 CSS3����ѡ����

CSS3 ������������ѡ���������Ը��ӱ�ݣ��������ɵ�ѡ��Ŀ��Ԫ�ء�

1. ����ѡ����
2. �ṹα��ѡ����
3. αԪ��ѡ����

### 2.2.1 ����ѡ����

����ѡ�������Ը���Ԫ���ض�������ѡ��Ԫ�ء������Ϳ��Բ��ý���������� id ѡ������

| ѡ���          | ���                                        |
| --------------- | ------------------------------------------- |
| `E[att]`        | ѡ����� att ���Ե� E Ԫ��                  |
| `E[att="val"]`  | ѡ����� att ����������ֵ���� val �� E Ԫ�� |
| `E[att^="val"]` | ƥ����� att ������ֵ�� val ��ͷ�� E Ԫ��   |
| `E[arr$="val"]` | ƥ����� att ������ֵ�� val ��β�� E Ԫ��   |
| `E[att*="val"]` | ƥ����� att ������ֵ�к��� val �� E Ԫ��   |

ע�⣺��ѡ����������ѡ������α��ѡ������Ȩ��Ϊ 10��

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS3��������ѡ����</title>
    <style>
        /* ������ input ͬʱ���� value �������ѡ�����Ԫ��[] */
        /*input[value] {*/
        /*    color: hotpink;*/
        /*}*/

        /* ֻѡ�� type=text �ı���� input ѡȡ���� */
        input[type=text] {
            color: hotpink;
        }

        /* ѡ�������� div Ȼ����� class ���ԣ���������ֵ������ icon ��ͷ����ЩԪ�� */
        div[class^=icon] {
            color: red;
        }

        /* ѡ�������� section Ȼ����� class ���ԣ���������ֵ������ data ��β����ЩԪ�� */
        section[class$=data] {
            color: blue;
        }

        /* ��ѡ���� ����ѡ���� α��ѡ���� Ȩ�ض��� 10 */
        div.icon1 {
            color: skyblue;
        }
    </style>
</head>
<body>
<!-- 1. ��������ѡ�����Ϳ��Բ��ý���������� id ѡ���� -->
<!--<input type="text" value="�������û���">-->
<!--<input type="text">-->
<!-- 2. ����ѡ����������ѡ������=ֵ��ĳЩԪ�� �ص�������� -->
<input type="text" name="" id="one">
<input type="password" name="" id="two">
<!-- 3. ����ѡ��������ѡ������ֵ��ͷ��ĳЩԪ�� -->
<div class="icon1">Сͼ��1</div>
<div class="icon2">Сͼ��2</div>
<div class="icon3">Сͼ��3</div>
<div class="icon4">Сͼ��4</div>
<div>���Ǵ��͵�</div>
<!-- 4. ����ѡ��������ѡ������ֵ��β��ĳЩԪ�� -->
<section class="icon1-data">���ǰ�����</section>
<section class="icon2-data">���Ǹ�˹��</section>
<section class="icon3-ico">������˭</section>

</body>
</html>
```

![](mark-img/20210423145746508.gif)

### 2.2.2 �ṹα��ѡ����

`nth-child(n)` ѡ��ĳ����Ԫ�ص�һ�������ض�����Ԫ�أ��ص㣩��

- n ���������֣��ؼ��ֺ͹�ʽ
- n ��������֣�����ѡ��� n ����Ԫ�أ��������ִ� 1 ��ʼ����
- n �����ǹؼ��֣�even ż����odd ����
- n �����ǹ�ʽ�������Ĺ�ʽ���£���� n �ǹ�ʽ����� n = 0 ��ʼ���㣬���ǵ� 0 ��Ԫ�غͳ�����Ԫ�صĸ����ᱻ���ԣ�

| ��ʽ   | ȡֵ                               |
| ------ | ---------------------------------- |
| `2n`   | ż����2��4��6��������                |
| `2n+1` | ������1��3��5��������                |
| `5n`   | 5   10   15...                     |
| `n+5`  | �ӵ� 5 ����ʼ�������� 5 ��������� |
| `-n+5` | ǰ 5 ���������� 5 ����             |

�ṹα��ѡ������Ҫ�����ĵ��ṹ��ѡ��Ԫ�أ������ڸ��ݸ�����ѡ������Ԫ�ء�

| ѡ����             | ���                          |
| ------------------ | ----------------------------- |
| `E:first-child`    | ƥ�丸Ԫ���еĵ�һ����Ԫ�� E  |
| `E:last-child`     | ƥ�丸Ԫ�������һ�� E Ԫ��   |
| `E:nth-child(n)`   | ƥ�丸Ԫ���еĵ� n ����Ԫ�� E |
| `E:first-of-type`  | ָ������ E �ĵ�һ��           |
| `E:last-of-type`   | ָ������ E �����һ��         |
| `E:nth-of-type(n)` | ָ������ E �ĵ� n ��          |

����

1. nth-child �Ը�Ԫ���������к�������ѡ������ǹ̶��ģ� ���ҵ��� n �����ӣ�Ȼ�󿴿��Ƿ�� E ƥ��
2. nth-of-type �Ը�Ԫ������ָ����Ԫ�ؽ�������ѡ�� ��ȥƥ�� E��Ȼ���ٸ��� E �ҵ� n ������

С�᣺

- �ṹα��ѡ����һ������ѡ�񸸼�����ĵڼ�������
- **nth-child �Ը�Ԫ���������к�������ѡ������ǹ̶��ģ� ���ҵ��� n �����ӣ�Ȼ�󿴿��Ƿ�� E ƥ��**
- **nth-of-type �Ը�Ԫ������ָ����Ԫ�ؽ�������ѡ�� ��ȥƥ�� E��Ȼ���ٸ��� E �ҵ� n ������**
- **����Ԫ���ڶ���ͬһ�ֱ�ǩ���磺�б��������� nth-child�������ֻ��ʹ�� nth-of-type**
- ��ѡ����������ѡ������α��ѡ������Ȩ��Ϊ 10

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS3�����ṹα��ѡ����</title>
    <style>
        /* 1. ѡ�� ul ����ĵ�һ������ С li */
        ul li:first-child {
            background-color: pink;
        }

        /* 2. ѡ�� ul ��������һ������ С li */
        ul li:last-child {
            background-color: pink;
        }

        /* 3. ѡ�� ul ����ĵ� 2 ������ С li */
        ul li:nth-child(2) {
            background-color: skyblue;
        }

        /* 3. ѡ�� ul ����ĵ� 6 ������ С li */
        ul li:nth-child(6) {
            background-color: skyblue;
        }
    </style>
</head>
<body>
<ul>
    <li>���ǵ�1������</li>
    <li>���ǵ�2������</li>
    <li>���ǵ�3������</li>
    <li>���ǵ�4������</li>
    <li>���ǵ�5������</li>
    <li>���ǵ�6������</li>
    <li>���ǵ�7������</li>
    <li>���ǵ�8������</li>
</ul>
</body>
</html>
```

![](mark-img/20210423150342544.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS3�����ṹα��ѡ����-nth-child</title>
    <style>
        /* 1.�����е�ż�� even �ĺ���ѡ���� */
        ul li:nth-child(even) {
            background-color: #ccc;
        }

        /* 2.�����е����� odd �ĺ���ѡ���� */
        ul li:nth-child(odd) {
            background-color: gray;
        }

        /* 3.nth-child(n) �� 0 ��ʼÿ�μ� 1 ��������㣬����������� n����������������ĸ���˴�ѡ�������еĺ��� */
        /* ol li:nth-child(n) {*/
        /*    background-color: pink;*/
        /*}*/
        /* 4.nth-child(2n) ĸѡ�������е�ż������ �ȼ��� even */
        /*ol li:nth-child(2n) {*/
        /*    background-color: pink;*/
        /*}*/
        /* 5.nth-child(2n+1) ĸѡ�������е��������� �ȼ��� odd */
        /*ol li:nth-child(2n+1) {*/
        /*    background-color: skyblue;*/
        /*} */
        /* 6.�ӵ� 3 ����ʼ�������� 3 ��������� */
        /*ol li:nth-child(n+3) {*/
        /*    background-color: pink;*/
        /*} */
        /*7.ǰ 3 ���������� 3 ����*/
        ol li:nth-child(-n+3) {
            background-color: pink;
        }
    </style>
</head>

<body>
<ul>
    <li>���ǵ�1������</li>
    <li>���ǵ�2������</li>
    <li>���ǵ�3������</li>
    <li>���ǵ�4������</li>
    <li>���ǵ�5������</li>
    <li>���ǵ�6������</li>
    <li>���ǵ�7������</li>
    <li>���ǵ�8������</li>
</ul>
<ol>
    <li>���ǵ�1������</li>
    <li>���ǵ�2������</li>
    <li>���ǵ�3������</li>
    <li>���ǵ�4������</li>
    <li>���ǵ�5������</li>
    <li>���ǵ�6������</li>
    <li>���ǵ�7������</li>
    <li>���ǵ�8������</li>
</ol>
</body>

</html>
```

![](mark-img/20210423151246867.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS3����ѡ����nth-type-of</title>
    <style>
        ul li:first-of-type {
            background-color: pink;
        }

        ul li:last-of-type {
            background-color: pink;
        }

        ul li:nth-of-type(even) {
            background-color: skyblue;
        }

        /* nth-child ������еĺ��Ӷ�������� */
        /* ִ�е�ʱ�����ȿ� :nth-child(1) ֮���ȥ�� ǰ�� div */
        /* ���Դ˴�������*/
        /* 1�ţ�<p>��ͷǿ</p> */
        /* 2�ţ�<div>�ܴ�</div> */
        /* 3�ţ�<div>�ܶ�</div> */
        /* �ٻع�ͷ������ʱ�ᷢ�֣�1�Ų����� div�����Բ���Ч��*/

        section div:nth-child(1) {
            background-color: red;	/* ����Ч */
        }

        /* nth-of-type ���ָ��Ԫ�صĺ���������� */
        /* ִ�е�ʱ�����ȿ� div ָ����Ԫ�� ֮���ȥ�� :nth-of-type(1) �ڼ������� */
        section div:nth-of-type(1) {
            background-color: blue;
        }
    </style>
</head>

<body>
<ul>
    <li>���ǵ�1������</li>
    <li>���ǵ�2������</li>
    <li>���ǵ�3������</li>
    <li>���ǵ�4������</li>
    <li>���ǵ�5������</li>
    <li>���ǵ�6������</li>
    <li>���ǵ�7������</li>
    <li>���ǵ�8������</li>
</ul>
<!-- ���� -->
<section>
    <p>��ͷǿ</p>
    <div>�ܴ�</div>
    <div>�ܶ�</div>
</section>
</body>

</html>
```

![](mark-img/20210423152631225.png)

### 2.2.3 αԪ��ѡ�������ص㣩

αԪ��ѡ�������԰����������� CSS �����±�ǩԪ�أ�������Ҫ HTML ��ǩ���Ӷ��� HTML �ṹ��

| ѡ����     | ���                     |
| ---------- | ------------------------ |
| `::before` | ��Ԫ�����ݵ�ǰ��������� |
| `::after`  | ��Ԫ�����ݵĺ���������� |

ע�⣺

- before �� after ����һ��Ԫ�أ���������Ԫ��
- �´��������Ԫ�����ĵ��������Ҳ����ģ��������ǳ�ΪαԪ��
- �﷨��`element::before{}`
- before �� after ������ content ����
- before �ڸ�Ԫ�����ݵ�ǰ�洴��Ԫ�أ�after �ڸ�Ԫ�����ݵĺ��洴��Ԫ��
- αԪ��ѡ�����ͱ�ǩѡ����һ����Ȩ��Ϊ 1

**��1��αԪ��ѡ����ʹ�ó���1��αԪ������ͼ��**

```css
p::before {
	position: absolute;
	right: 20px;
	top: 10px;
	content: '\e91e';
	font-size: 20px;
}
```

**��2��αԪ��ѡ����ʹ�ó���2��������Ч��**

```css
/* ��������꾭���� ����������ӣ��������� before ���ֲ���ʾ���� */
.tudou:hover::before {
	/* ������ʾԪ�� */
    display: block;
}
```

**��3��αԪ��ѡ����ʹ�ó���3��αԪ���������**

1. �����ǩ��Ҳ��Ϊ��ǽ������ W3C �Ƽ�������
2. ������� overflow ����
3. ������� after αԪ��
4. �������˫αԪ��

�����ǩ��Ҳ��Ϊ��ǽ������ W3C �Ƽ���������

![](mark-img/20210423160929744.png)

ע�⣺Ҫ������µĿձ�ǩ�����ǿ鼶Ԫ�ء�

��������αԪ������������ǵ�һ�ֶ����ǩ����һ���������Ż���

```css
.clearfix:after {
	content: "";			/* αԪ�ر���д������ */
	display: block;			/* �����Ԫ�ر����ǿ鼶 */
	height: 0;				/* ��Ҫ�������Ԫ�� */
	clear: both;			/* ���Ĵ���������� */
	visibility: hidden;		/* ��Ҫ�������Ԫ�� */
}
```

```css
.clearfix:before,
.clearfix:after {
	content: "";
	display: table;			/* ת��Ϊ�鼶Ԫ�ز���һ����ʾ */
}

.clearfix:after {
	clear: both;
}
```

������

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>αԪ��ѡ����before��after</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: salmon;
        }

        /* div::before Ȩ���� 2 */
        div::before {
            /* ��� content �Ǳ���Ҫд�� */
            /* display: inline-block; */
            content: '��';
            /* width: 30px;
            height: 40px;
            background-color: purple; */
        }

        div::after {
            content: 'С������';
        }
    </style>
</head>
<body>
<div>
    ��
</div>
</body>
</html>
```

![](mark-img/20210423153316679.gif)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>αԪ��ѡ����ʹ�ó���-����ͼ��</title>
    <style>
        @font-face {
            font-family: 'icomoon';
            src: url('fonts/icomoon.eot?1lv3na');
            src: url('fonts/icomoon.eot?1lv3na#iefix') format('embedded-opentype'),
            url('fonts/icomoon.ttf?1lv3na') format('truetype'),
            url('fonts/icomoon.woff?1lv3na') format('woff'),
            url('fonts/icomoon.svg?1lv3na#icomoon') format('svg');
            font-weight: normal;
            font-style: normal;
            font-display: block;
        }

        div {
            position: relative;
            width: 200px;
            height: 35px;
            border: 1px solid red;
        }

        div::after {
            position: absolute;
            top: 10px;
            right: 10px;
            font-family: 'icomoon';
            /* content: '?'; */
            content: '\e91e';
            color: red;
            font-size: 18px;
        }
    </style>
</head>

<body>
<div></div>
</body>

</html>
```

![](mark-img/20210423153507576.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>αԪ��ѡ����ʹ�ó���2-����������ʾ�������ְ���</title>
    <style>
        .tudou {
            position: relative;
            width: 444px;
            height: 320px;
            background-color: pink;
            margin: 30px auto;
        }

        .tudou img {
            width: 100%;
            height: 100%;
        }

        .tudou::before {
            content: '';
            /* �������ֲ� */
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .4) url(images/arr.png) no-repeat center;
        }

        /* ��������꾭��������������ӣ��������� before ���ֲ���ʾ���� */
        .tudou:hover::before {
            /* ������ʾԪ�� */
            display: block;
        }
    </style>
</head>

<body>
<div class="tudou">
    <img src="images/tudou.jpg" alt="">
</div>
</body>

</html>
```

![](mark-img/20210423153911315.gif)

## 2.3 CSS3����ģ��

CSS3 �п���ͨ�� box-sizing ��ָ����ģ�ͣ��� 2 ��ֵ������ָ��Ϊ content-box��border-box���������Ǽ�����Ӵ�С�ķ�ʽ�ͷ����˸ı䡣

���Էֳ����������

1. box-sizing: content-box ���Ӵ�СΪ width + padding + border ����ǰĬ�ϵģ�
2. box-sizing: border-box ���Ӵ�СΪ width

�������ģ�����Ǹ�Ϊ�� box-sizing: border-box�� �� padding �� border �Ͳ���Ŵ�����ˣ�ǰ�� padding �� border ���ᳬ�� width ��ȣ�

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS3����ģ��</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            border: 20px solid red;
            padding: 15px;
            box-sizing: content-box;
        }

        p {
            width: 200px;
            height: 200px;
            background-color: pink;
            border: 20px solid red;
            padding: 15px;
            /* css3 ����ģ�� �������յĴ�С���� width 200 �Ĵ�С */
            box-sizing: border-box;
        }
    </style>
</head>
<body>
<div>
    С������
</div>
<p>
    С������
</p>
</body>
</html>
```

<img src="mark-img/20210423154934685.gif" style="zoom:50%;" />

![](mark-img/image-20220117012150036.png)

![image-20220117012211829](mark-img/image-20220117012211829.png)

## 2.4 CSS3�������ԣ��˽⣩

1. ͼƬ��ģ��
2. ������ӿ�� width:calc ����

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ͼƬģ������filter</title>
    <style>
        img {
            /* blur ��һ������ С����������ֵԽ��ͼƬԽģ�� ע����ֵҪ�� px ��λ */
            filter: blur(15px);
        }

        img:hover {
            filter: blur(0);
        }
    </style>
</head>
<body>
<img src="images/pink.jpg" alt="">
</body>
</html>
```

![](mark-img/20210423155143395.gif)

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS3����calc����</title>
    <style>
        .father {
            width: 500px;
            height: 500px;
            background-color: black;
        }

        .son {
            /* width: 300px; */
            /* width: calc(500px - 100px); */
            width: calc(100% - 100px);
            height: 200px;
            background-color: salmon;
        }
    </style>
</head>
<body>
<!-- �������ǵ��Ӻ��ӿ����Զ�ȸ�����С 100 ���� -->
<div class="father">
    <div class="son"></div>
</div>
</body>
</html>
```

<img src="mark-img/20210423155710297-164235395082836.png" style="zoom:50%;" />

### 2.4.1 CSS3�˾� filter

filter CSS ���Խ�ģ������ɫƫ�Ƶ�ͼ��Ч��Ӧ����Ԫ�ء�

```css
filter: ����(); ���磺filter: blur(5px); blur ģ��������ֵԽ��Խģ��
```

![](mark-img/20210423161020807.png)

### 2.4.2 CSS3 calc ����

calc() �� CSS �������������� CSS ����ֵʱִ��һЩ���㡣

```css
width: calc(100% - 80px);
```

�����������ʹ�� `+` `-` `*` `/` �����м��㡣

## 2.5 CSS3���ɣ��ص㣩

### 2.5.1 ����

���ɣ�transition���� CSS3 �о��е߸��Ե�����֮һ�����ǿ����ڲ�ʹ�� Flash ������ JavaScript ������£���Ԫ�ش�һ����ʽ�任Ϊ��һ����ʽʱΪԪ�����Ч����

���ɶ������Ǵ�һ��״̬**����**�Ĺ��ɵ�����һ��״̬��

����������ҳ����ÿ���������ʮ�㣬��Ȼ�Ͱ汾�������֧�֣�IE9 ���°汾�� ���ǲ���Ӱ��ҳ�沼�֡�

�������ھ����� `:hover` һ�����ʹ�á�

�﷨��

```css
transition: Ҫ���ɵ����� ����ʱ�� �˶����� ��ʱ��ʼ;
```

1. ���ԣ���Ҫ�仯�� css ���ԣ���ȸ߶ȡ�������ɫ������߾඼���� �������Ҫ���е����Զ��仯���ɣ�дһ�� `all` �Ϳ���
2. ����ʱ�䣺��λ���루����д��λ������ `0.5s`
3. �˶����ߣ�Ĭ���� `ease`������ʡ�ԣ�
4. ��ʱ��ʼ����λ���루����д��λ�����������ӳٴ���ʱ��Ĭ���� `0s`������ʡ�ԣ�

<img src="mark-img/2021042316110482.png" style="zoom: 25%;" />

��ס���ɵ�ʹ�ÿھ���**˭�����ɸ�˭�ӣ�**

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS3����Ч��</title>
    <style>
        div {
            width: 200px;
            height: 100px;
            background-color: black;
            /* transition: �仯������ ����ʱ�� �˶����� ��ʱ��ʼ; */
            /* transition: width .5s ease 0s, height .5s ease 1s; */
            /* �����Ҫд������ԣ����ö��Ž��зָ� */
            /* transition: width .5s, height .5s; */
            /* �����Ҫ������Զ��仯������д all �Ϳ����� */
            /* transition: height .5s ease 1s; */
            /* ˭�����ɣ���˭�� */
            transition: all 0.5s;
        }

        div:hover {
            width: 400px;
            height: 200px;
            background-color: gray;
        }
    </style>
</head>
<body>
<div></div>
</body>
</html>
```

![](mark-img/20210423160022413.gif)

### 2.5.2 ����������

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS3������ϰ-������</title>
    <style>
        .bar {
            width: 150px;
            height: 15px;
            border: 1px solid red;
            border-radius: 7px;
            padding: 1px;
        }

        .bar_in {
            width: 50%;
            height: 100%;
            border-radius: 7px;
            background-color: red;
            /* ˭�����ɸ�˭�� */
            transition: all .7s;
        }

        .bar:hover .bar_in {
            width: 100%;
        }
    </style>
</head>
<body>
<div class="bar">
    <div class="bar_in"></div>
</div>
</body>
</html>
```

![](mark-img/20210423160237686.gif)

## 2.6 CSS3 ����

`var()` �������ڲ��� CSS ������ֵ��

ʹ�� CSS ������һ�ֺ÷����漰��Ƶ���ɫ�������Խ����Ƿ��ڱ����У�������һ����һ��ظ��ƺ�ճ����ͬ����ɫ��

����ͳ��ʽ��

����������ʾ������ʽ���ж���һЩ��ɫ�Ĵ�ͳ��ʽ��ͨ��Ϊÿ���ض�Ԫ�ض���Ҫʹ�õ���ɫ����

```html
<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: #1e90ff;
}

h2 {
  border-bottom: 2px solid #1e90ff;
}

.container {
  color: #1e90ff;
  background-color: #ffffff;
  padding: 15px;
}

button {
  background-color: #ffffff;
  color: #1e90ff;
  border: 1px solid #1e90ff;
  padding: 5px;
}
</style>
</head>
<body>

<h1>��ͳ��ʽ</h1>

<div class="container">
  <h2>Welcome to Shanghai!</h2>
  <p>Shanghai is one of the four direct-administered municipalities of the People's Republic of China.</p>
  <p>Shanghai is one of the four direct-administered municipalities of the People's Republic of China.</p>
  <p>
    <button>Yes</button>
    <button>No</button>
  </p>
</div>

</body>
</html>
```

��var() �������﷨��

var() �������ڲ��� CSS ������ֵ��

var() �������﷨���£�

```css
var(name, value)
```

| ֵ      | ����                                     |
| :------ | :--------------------------------------- |
| *name*  | ���衣�����������������ۺ� `--` ��ͷ���� |
| *value* | ��ѡ������ֵ����δ�ҵ�����ʱʹ�ã���     |

**ע�ͣ�**�������Ʊ������������ۺ� `--` ��ͷ�������ִ�Сд��

��var() ��ι�����

���ȣ�CSS ����������ȫ�ֻ�ֲ�������

ȫ�ֱ��������������ĵ��н��з���/ʹ�ã����ֲ�����ֻ������������ѡ�����ڲ�ʹ�á�

���贴������ȫ��������ı��������� `:root` ѡ��������������`:root` ѡ����ƥ���ĵ��ĸ�Ԫ�ء�

���贴�����оֲ�������ı��������ڽ�Ҫʹ������ѡ��������������

����������������������ͬ����������������ʹ�� var() ������

���ȣ�������������ȫ�ֱ�����--blue �� --white����Ȼ������ʹ�� var() �����Ժ�����ʽ���в��������ֵ��

```html
<!DOCTYPE html>
<html>
<head>
<style>
:root {
  --blue: #1e90ff;
  --white: #ffffff; 
}

body {
  background-color: var(--blue);
}

h2 {
  border-bottom: 2px solid var(--blue);
}

.container {
  color: var(--blue);
  background-color: var(--white);
  padding: 15px;
}

button {
  background-color: var(--white);
  color: var(--blue);
  border: 1px solid var(--blue);
  padding: 5px;
}
</style>
</head>
<body>

<h1>ʹ�� var() ����</h1>

<div class="container">
  <h2>Welcome to Shanghai!</h2>
  <p>Shanghai is one of the four direct-administered municipalities of the People's Republic of China.</p>
  <p>Shanghai is one of the four direct-administered municipalities of the People's Republic of China.</p>
  <p>
    <button>Yes</button>
    <button>No</button>
  </p>
</div>

</body>
</html>
```

ʹ�� var() ���������ƣ�

- ʹ����������Ķ�����������⣩
- ʹ�޸���ɫֵ��������

���轫��ɫ�Ͱ�ɫ��Ϊ����͵���ɫ�Ͱ�ɫ����ֻ��Ҫ�޸���������ֵ��

```css
:root {
  --blue: #6495ed;
  --white: #faf0e6;
}

body { background-color: var(--blue); }

h2 { border-bottom: 2px solid var(--blue); }

.container {
  color: var(--blue);
  background-color: var(--white);
  padding: 15px;
}

button {
  background-color: var(--white);
  color: var(--blue);
  border: 1px solid var(--blue);
  padding: 5px;
}
```

# ��������� HTML5 CSS3

1. HTML5 �ṹ����

   ![](mark-img/20210423162839681.png)

2. CSS3 �����ʽ

   ![](mark-img/20210423162919534.png)

# �ġ������ HTML5

1. ����� HTML5 �� HTML5 + CSS3 + JavaScript
2. ���������ʱ��Ϊ H5
3. ��Ȼ HTML5 ��һЩ������Ȼ����ĳЩ�����֧�֣���������һ�ַ�չ����