<!--
 * @Description: 
 * @Author: ljl
 * @Date: 2025-04-23 20:16:10
 * @LastEditors: rendc
 * @LastEditTime: 2025-04-26 10:22:04
-->
# ��CSS����ͼ������ͼ�ꡢ���ǡ������ʽ���û�������ʽ�����ʡ�Ժš�
- [��CSS����ͼ������ͼ�ꡢ���ǡ������ʽ���û�������ʽ�����ʡ�Ժš�](#css����ͼ����ͼ�����������ʽ�û�������ʽ���ʡ�Ժ�)
- [һ������ͼ](#һ����ͼ)
    - [1.1 Ϊʲô��Ҫ����ͼ��](#11-Ϊʲô��Ҫ����ͼ)
    - [1.2 ����ͼ��sprites����ʹ��](#12-����ͼsprites��ʹ��)
    - [1.3 ������ƴ����](#13-����ƴ����)
- [��������ͼ��](#������ͼ��)
    - [2.1 ����ͼ��Ĳ���](#21-����ͼ��Ĳ���)
    - [2.2 ����ͼ����ŵ�](#22-����ͼ����ŵ�)
    - [2.3 ����ͼ�������](#23-����ͼ�������)
    - [2.4 ����ͼ�������](#24-����ͼ�������)
    - [2.5 ����ͼ���׷��](#25-����ͼ���׷��)
    - [2.6 ����ͼ����ص�ԭ��](#26-����ͼ����ص�ԭ��)
- [����CSS����](#��css����)
- [�ġ�CSS�û�������ʽ](#��css�û�������ʽ)
    - [4.1 ʲô�ǽ�����ʽ](#41-ʲô�ǽ�����ʽ)
    - [4.2 �����ʽ cursor](#42-�����ʽ-cursor)
    - [4.3 ������ outline](#43-������-outline)
    - [4.4 ��ֹ��ק�ı��� resize](#44-��ֹ��ק�ı���-resize)
- [�塢vertical-align ����Ӧ��](#��vertical-align-����Ӧ��)
    - [5.1 ͼƬ���������ֶ���](#51-ͼƬ�������ֶ���)
    - [5.2  ���ͼƬ�ײ�Ĭ�Ͽհ׷�϶����](#52--���ͼƬ�ײ�Ĭ�Ͽհ׷�϶����)
- [�������������ʡ�Ժ���ʾ](#�����������ʡ�Ժ���ʾ)
    - [6.1 �����ı����ʡ�Ժ���ʾ](#61-�����ı����ʡ�Ժ���ʾ)
    - [6.2 �����ı����ʡ�Ժ���ʾ](#62-�����ı����ʡ�Ժ���ʾ)


# һ������ͼ

## 1.1 Ϊʲô��Ҫ����ͼ��

һ����ҳ��������Ӧ�úܶ�С�ı���ͼ����Ϊ���Σ�����ҳ�е�ͼ�����ʱ���������ͻ�Ƶ���ؽ��պͷ���
����ͼƬ����ɷ���������ѹ�������⽫��󽵵�ҳ��ļ����ٶȡ�

��ˣ�Ϊ����Ч�ؼ��ٷ��������պͷ�������Ĵ��������ҳ��ļ����ٶȣ������� CSS ���鼼����Ҳ��
CSS Sprites��CSS ѩ�̣���

����ԭ������ҳ�е�һЩС����ͼ�����ϵ�һ�Ŵ�ͼ�� ������������ֻ��Ҫһ������Ϳ����ˡ�

���鼼��Ŀ�ģ�Ϊ����Ч�ؼ��ٷ��������պͷ�������Ĵ��������ҳ��ļ����ٶȡ�

## 1.2 ����ͼ��sprites����ʹ��

ʹ�þ���ͼ���ģ�

1. ���鼼����Ҫ����ڱ���ͼƬʹ�á����ǰѶ��С����ͼƬ���ϵ�һ�Ŵ�ͼƬ��
2. �����ͼƬҲ��Ϊ sprites ����ͼ ���� ѩ��ͼ
3. �ƶ�����ͼƬλ���Կ�����ʾ���� ��ʱ����ʹ�� `background-position`
4. �ƶ��ľ���������Ŀ��ͼƬ�� `x` �� `y` ���ꡣע����ҳ�е�����������ͬ
5. ��Ϊһ������¶��ǽ�����ͼ���������ƶ�����������������ֵ�����Ǹ�ֵ
6. ʹ�þ���ͼ��ʱ����Ҫ��ȷ������ÿ��С����ͼƬ�Ĵ�С��λ��

ʹ�þ���ͼ�����ܽ᣺

1. ����ͼ��Ҫ�����С�ı���ͼƬʹ��
2. ��Ҫ�����ڱ���λ����ʵ�� `background-position`
3. һ������¾���ͼ���Ǹ�ֵ��ǧ��ע����ҳ�е����꣺ x���ұ�������ֵ��������Ǹ�ֵ�� y��ͬ�� 

��������ҫ������

![](img/20210420081150387.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>����ͼʹ��</title>
    <style>
        .box1 {
            width: 60px;
            height: 60px;
            margin: 100px auto;
            background: url(images/sprites.png) no-repeat -182px 0;

        }

        .box2 {
            width: 27px;
            height: 25px;
            /* background-color: pink; */
            margin: 200px;
            background: url(images/sprites.png) no-repeat -155px -106px;

        }
    </style>
</head>

<body>
    <div class="box1"></div>
    <div class="box2"></div>
</body>

</html>
```

![](img/20210420081150457.jpg)

## 1.3 ������ƴ����

<img src="img/20210420081150458.jpg" style="zoom:67%;" />

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>���þ���ͼƴ���Լ�����</title>
    <style>
        span {
            display: inline-block;
            background: url(images/abcd.jpg) no-repeat;
        }

        .p {
            width: 100px;
            height: 112px;
            /* background-color: pink; */
            background-position: -493px -276px;
        }

        .i {
            width: 60px;
            height: 108px;
            /* background-color: pink; */
            background-position: -327px -142px;
        }

        .n {
            width: 115px;
            height: 112px;
            /* background-color: pink; */
            background-position: -255px -275px;
        }

        .k {
            width: 105px;
            height: 114px;
            /* background-color: pink; */
            background-position: -495px -142px;
        }
    </style>
</head>

<body>
    <span class="p">p</span>
    <span class="i">i</span>
    <span class="n">n</span>
    <span class="k">k</span>
</body>

</html>
```

![](img/20210424224831926.png)

��PS ��Ƭ���ߵ�ʹ�á�

<img src="img/20210420083302981.png" style="zoom: 50%;" />

![](img/8141d1fc65ba4b31acfc903b948a09a8.png)

![](img/b9b0bf21c37a40a6a37a09f759218c16.png)

![](img/d8fea6eba89048dfb6cf0421f620d04e.png)

# ��������ͼ��

## 2.1 ����ͼ��Ĳ���

����ͼ��ʹ�ó�������Ҫ������ʾ��ҳ��ͨ�á����õ�һЩСͼ�ꡣ

����ͼ��������ŵ�ģ�����ȱ������ԡ�

1. ͼƬ�ļ����ǱȽϴ��
2. ͼƬ����Ŵ����С��ʧ��
3. һ��ͼƬ���������Ҫ�����ǳ�����

��ʱ����һ�ּ����ĳ��ֺܺõĽ�����������⣬��������ͼ�� iconfont��

����ͼ�����Ϊǰ�˹���ʦ�ṩһ�ַ����Ч��ͼ��ʹ�÷�ʽ��չʾ����ͼ�꣬������ȴ�������塣

## 2.2 ����ͼ����ŵ�

- ��������һ��ͼ������Ҫ��һϵ�е�ͼ��ҪС��һ����������ˣ�ͼ��ͻ�������Ⱦ�����������˷���������
- ����ԣ�������ʵ�����֣����Ժ�����ĸı���ɫ��������Ӱ��͸��Ч������ת��
- �����ԣ�����֧�����е�������������ʹ��

ע�⣺ ����ͼ�겻��������鼼����ֻ�ǶԹ�����ͼ�겿�ּ������������Ż���

�ܽ᣺

1. �������һЩ�ṹ����ʽ�Ƚϼ򵥵�Сͼ�꣬��������ͼ��
2. �������һЩ�ṹ����ʽ����һ���СͼƬ�����þ���ͼ

����ͼ����һЩ��ҳ������Сͼ�꣬����ֱ���������ؼ��ɡ� ���ʹ�ÿ��Է�Ϊ��

1. ����ͼ�������
2. ����ͼ������루���뵽���� html ҳ���У�
3. ����ͼ���׷�ӣ���ԭ�еĻ���������µ�Сͼ�꣩

## 2.3 ����ͼ�������

�Ƽ�������վ��

- icomoon �ֿ� [https://icomoon.io/](https://icomoon.io/)

IcoMoon ������ 2011 �꣬�Ƴ��˵�һ���Զ���ͼ���������������������û�ѡ������Ҫ��ͼ�꣬ʹ���ǳ�һ���͡����ֿ��������෱�࣬�ǳ�ȫ�棬Ψһ���ź��ǹ���������������ٽ�����

- ���� iconfont �ֿ� [https://www.iconfont.cn/](https://www.iconfont.cn/)

����ǰ������� M2UX ��һ�� iconfont ����ͼ���ֿ⣬�������Ա�ͼ���Ͱ�������ͼ��⡣����ʹ�� AI ����ͼ���ϴ����ɡ� �ص��ǣ���ѣ�

> ���������� icomoon �ֿ� Ϊ����

## 2.4 ����ͼ�������

�������֮��ע��ԭ�ȵ��ļ���Ҫɾ��������ã�

1. **�����ذ������ fonts �ļ��з���ҳ���Ŀ¼��**

��ͬ�������֧�ֵ������ʽ�ǲ�һ���ģ�����ͼ��֮���Լ��ݣ�������Ϊ���������������֧�ֵ������ļ���

- TureType (.ttf) ��ʽ .ttf ������ Windows �� Mac ����������壬֧������������������ IE9+��Firefox3.5+��Chrome4+��Safari3+��Opera10+��iOS Mobile��Safari4.2+��
- Web Open Font Format (.woff) ��ʽ woff ���壬֧������������������ IE9+��Firefox3.5+��Chrome6+��Safari3.6+��Opera11.1+��
- Embedded Open Type (.eot) ��ʽ .eot ������ IE ר�����壬֧������������������ IE4+��
- SVG (.svg) ��ʽ .svg �����ǻ��� SVG ������Ⱦ��һ�ָ�ʽ��֧������������������ Chrome4+��Safari3.1+��Opera10.0+��iOS Mobile Safari3.2+��

2. **�� CSS ��ʽ��ȫ���������壺��������Щ�����ļ�ͨ�� css ���뵽����ҳ����**

һ��ע�������ļ�·�������⡣

```css
@font-face {
	font-family: 'icomoon';
	src: url('fonts/icomoon.eot?7kkyc2');
	src: url('fonts/icomoon.eot?7kkyc2#iefix') format('embedded-opentype'),
	url('fonts/icomoon.ttf?7kkyc2') format('truetype'),
	url('fonts/icomoon.woff?7kkyc2') format('woff'),
	url('fonts/icomoon.svg?7kkyc2#icomoon') format('svg');
	font-weight: normal;
	font-style: normal;
}
```

3. **html ��ǩ�����Сͼ��**

����Сͼ���Ӧ���ַ���һ��С���򣩵� html �У�һ�㽨����� `<span></span>` ��ǩ� 

4. **����ǩ��������**

```css
span {
	font-family: "icomoon";
}
```

ע�⣺��ر�֤������������ @font-face ��������屣��һ�£�Ĭ��Ϊ��icomoon����

## 2.5 ����ͼ���׷��

��������У�ԭ��������ͼ�겻�����ˣ����Ǳ���Ҫ����µ�����ͼ�굽ԭ���������ļ��С�

ѡ�� Import Icons ��ť����ԭѹ��������� selection.json �����ϴ���Ȼ��ѡ���Լ���Ҫ�µ�ͼ�꣬��������ѹ���������滻ԭ�����ļ����ɡ�

## 2.6 ����ͼ����ص�ԭ��

������ֻ�����һ��������������Խ� fonts �ļ�һ���Է��أ���˶�����ҳ�������õ� fonts ����ͼ��Ĳ��ֱ�һ���Լ��غ��ˣ��������˷�����ѹ����

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>����ͼ���ʹ��</title>
  <style>
    /* �������� */
    @font-face {
        font-family: 'icomoon';
        src:  url('fonts/icomoon.eot?qmzf4o');
        src:  url('fonts/icomoon.eot?qmzf4o#iefix') format('embedded-opentype'),
            url('fonts/icomoon.ttf?qmzf4o') format('truetype'),
            url('fonts/icomoon.woff?qmzf4o') format('woff'),
            url('fonts/icomoon.svg?qmzf4o#icomoon') format('svg');
        font-weight: normal;
        font-style: normal;
        font-display: block;
    }

    span{
        font-family: "icomoon";
        display: inline-block;
        color: purple;
        font-size: 100px;
    }
  </style>
</head>

<body>
      <span>?</span>
</body>

</html>
```

![](img/20210420093539188.png)

# ����CSS����

��ҳ�г���һЩ�����Σ�ʹ�� CSS ֱ�ӻ������Ϳ��ԣ���������ͼƬ��������ͼ�ꡣ

![](img/20210420102851826.png)

CSS ��������ô���ģ�ԭ�����£�

��һ��û�д�С�ĺ������ñ߿���ôֻҪ�߿��㹻�֣��Ϳ��Գ�������Ч����

���ֻ��Ҫһ�����ǣ���ô�����������߿�����͸��ɫ���ɡ�

ͨ�� CSS ����Ҫ��϶�λ�����֡�

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box1{
            width: 0;
            height: 0;
            border-top: 10px solid pink;
            border-right: 10px solid skyblue;
            border-bottom: 10px solid purple;
            border-left: 10px solid red;
        }
        .box2{
            width: 0;
            height: 0;
            border: 50px solid transparent;
            /* border-top-color: pink; */
            border-right-color: skyblue;
            margin: 100px auto;
        }
        .jd{
            position: relative;
            width: 120px;
            height: 249px;
            background-color: antiquewhite;
        }
        .jd span{
            position: absolute;
            right: 15px;
            top: -20px;
            width: 0;
            height: 0;
            /* Ϊ�˿��Ǽ����� */
            line-height: 0;
            font-size: 0;
            border: 10px solid transparent;
            border-bottom-color: antiquewhite;
        }
    </style>
</head>
<body>
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="jd">
        <span></span>
    </div>
</body>
</html>
```

![](img/20210420104336278.png)

# �ġ�CSS�û�������ʽ

## 4.1 ʲô�ǽ�����ʽ

��ν�Ľ�����ʽ�����Ǹ���һЩ�û�������ʽ������߸��õ��û����顣

- �����û��������ʽ
- ������
- ��ֹ������ק

## 4.2 �����ʽ cursor

```css
li { cursor: pointer; }
```

���û�����ڶ������ƶ������ָ����ú���ϵͳԤ����Ĺ����״��

| ����ֵ        | ����     |
| ------------- | -------- |
| `default`     | Ĭ�ϼ�ͷ |
| `pointer`     | С��     |
| `move`        | ʮ���ƶ� |
| `text`        | �ı����� |
| `not-allowed` | ��ֹ     |

ע�⣺�����������ͣ����������ܶ����͡�

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>�û�������ʽ-�����ʽ</title>
</head>

<body>
    <ul>
        <li style="cursor: default;">����Ĭ�ϵ�С�������ʽ</li>
        <li style="cursor: pointer;">�������С����ʽ</li>
        <li style="cursor: move;">��������ƶ���ʽ</li>
        <li style="cursor: text;">��������ı���ʽ</li>
        <li style="cursor: not-allowed;">��������ֹ��ʽ</li>
    </ul>
</body>

</html>
```

![](img/2021042011003289.gif)

## 4.3 ������ outline

������� `outline: 0;` ���� `outline: none;` ��ʽ֮�󣬾Ϳ���ȥ��Ĭ�ϵı߿�

```css
input { outline: none; }
```

Ĭ����ʽ��

![](img/20210420111135354.gif)

�޸ĺ���ʽ��

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>������ outline</title>
    <style>
        /* ȡ�������� */
        input{
            outline: none;
        }
        textarea{
            /* ��ֹ������С */
            resize: none;
            outline: none;
        }
    </style>
</head>

<body>
    <!-- ȡ�������� -->
    <input type="text">
    <textarea name="" id="" cols="30" rows="10"></textarea>
</body>

</html>
```

## 4.4 ��ֹ��ק�ı��� resize

ʵ�ʿ����У������ı������½��ǲ�������ק�ġ������ƻ����֣���

```css
textarea { resize: none; }
```

Ĭ����ʽ��

![](img/6.gif)

�޸ĺ���ʽ��

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>��ֹ��ק�ı��� resize</title>
    <style>
        textarea {
            /* ȡ�������� */
            outline: none;
            /* ��ֹ��ק�ı��� */
            resize: none;
        }
    </style>
</head>

<body>
    <!-- ��ֹ��ק�ı��� -->
    <!-- <textarea></textarea>��ʼ��ǩ�������һ�У���Ϊ�������ᵼ���ı���������ǰ�пհף�
    ���ڿ���ר��ͨ�� padding �������ı���Χ������ -->
    <textarea name="" id="" cols="30" rows="10"></textarea>
</body>

</html>
```

![](img/20210420111315285.gif)

# �塢vertical-align ����Ӧ��

CSS �� vertical-align ����ʹ�ó�����������������ͼƬ���߱������ڿ�Ԫ�أ������ִ�ֱ���롣

�ٷ����ͣ���������һ��Ԫ�صĴ�ֱ���뷽ʽ��������ֻ���������Ԫ�ػ������ڿ�Ԫ����Ч��

�﷨��

```css
vertical-align: baseline | top | middle | bottom
```

| ֵ         | ����                                   |
| ---------- | -------------------------------------- |
| `baseline` | Ĭ�ϡ�Ԫ�ط����ڸ�Ԫ�صĻ�����         |
| `top`      | ��Ԫ�صĶ������������Ԫ�صĶ��˶���   |
| `middle`   | �Ѵ�Ԫ�ط����ڸ�Ԫ�ص��в�             |
| `bottom`   | ��Ԫ�صĶ�����������͵�Ԫ�صĶ��˶��� |

![](img/20210420124542850.png)

## 5.1 ͼƬ���������ֶ���

ͼƬ�������������ڿ�Ԫ�أ�Ĭ�ϵ� vertical-align �ǻ��߶��롣

��ʱ���Ը�ͼƬ������Щ���ڿ�Ԫ�ص� vertical-align ��������Ϊ middle �Ϳ��������ֺ�ͼƬ��ֱ���ж����ˡ�

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>����vertical-alignʵ��ͼƬ���ִ�ֱ���ж���</title>
    <style>
        img {
            /* vertical-align: bottom; */
            /* ��ͼƬ�����ִ�ֱ���� */
            vertical-align: middle;
            /* vertical-align: top; */
        }

        textarea {
            vertical-align: middle;
        }
    </style>
</head>

<body>
    <img src="images/ldh.jpg" alt=""> pink��ʦ�����»�

    <br>
    <textarea name="" id="" cols="30" rows="10"></textarea> ��������
</body>

</html>
```

![](img/20210420124932560.png)

> �����ص㣺
>
> ����֪�������Ժ������� `line-height: ���Ӹ߶�;` ʱ�������ڵ� `����` �ᴹֱ���У���ʵ��ֻ�����ֿ��Դ�ֱ���У������ڵ�ͼƬͬ��Ҳ�ܴ�ֱ���У�ֻ����ͼƬĬ���ǻ��ڻ��߶���ģ�����Ҫ����ʵ�� `��ֱ����` ��Ҫ��ͼƬ���ϣ�`vertical-align: middle;`

## 5.2  ���ͼƬ�ײ�Ĭ�Ͽհ׷�϶����

ͼƬ�ײ����һ���հ׷�϶��ԭ�������ڿ�Ԫ�ػ�����ֵĻ��߶��롣

![](img/20210420125635475.png)

��Ҫ������������֣�

1. ��ͼƬ��� `vertical-align: middle | top | bottom` �ȣ��Ƽ���
2. ��ͼƬת��Ϊ�鼶Ԫ�� `display: block;`

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ͼƬ�ײ�հ׷�϶�������</title>
    <style>
        div {
            border: 2px solid black;
        }

        img {
            /* ���ַ��� */
            vertical-align: middle;
            /* display: block; */
        }
    </style>
</head>

<body>
    <div>
        <img src="images/ldh.jpg" alt="">
    </div>
</body>

</html>
```

![](img/20210420125750954.png)

# �������������ʡ�Ժ���ʾ

## 6.1 �����ı����ʡ�Ժ���ʾ

������Ҫ������

```css
/* 1. ��ǿ��һ������ʾ�ı� */ 
white-space: nowrap; 	/*�� Ĭ�� normal �Զ����У�*/ 
/* 2. �����Ĳ������� */ 
overflow: hidden; 
/* 3. ������ʡ�Ժ���������Ĳ��� */ 
text-overflow: ellipsis;
```

������

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>�����ı������ʾʡ�Ժ�</title>
    <style>
        div {
            width: 150px;
            height: 80px;
            background-color: pink;
            margin: 100px auto;
            /* ������ʵ���˼�����������ʾ�����Զ����� */
            /* white-space: normal; */
            /* 1.������ʵ���˼�����������ʾ����Ҳ����ǿ��һ������ʾ */
            white-space: nowrap;
            /* 2.����Ĳ����������� */
            overflow: hidden;
            /* 3.���������ʱ����ʡ�Ժ�����ʾ */
            text-overflow: ellipsis;
        }
    </style>
</head>

<body>
    <div>
        ɶҲ��˵���˴�ʡ��һ����
    </div>
</body>

</html>
```

![](img/20210420132753998.png)

## 6.2 �����ı����ʡ�Ժ���ʾ

�����ı������ʾʡ�Ժţ��нϴ���������⣬ �ʺ��� webkit ��������ƶ��ˣ��ƶ��˴󲿷��� webkit �ںˣ���

```css
overflow: hidden;
text-overflow: ellipsis;
/* ������������ģ����ʾ */
display: -webkit-box;
/* ������һ����Ԫ����ʾ���ı������� */
-webkit-line-clamp: 2;
/* ���û���������ж������Ԫ�ص����з�ʽ */
-webkit-box-orient: vertical;
```

���Ƽ��ú�̨��Ա�������Ч������Ϊ��̨��Ա����������ʾ���ٸ��֣��������򵥡�

������

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>�����ı������ʾʡ�Ժ�</title>
    <style>
        div {
            width: 150px;
            height: 65px;
            background-color: pink;
            margin: 100px auto;
            overflow: hidden;
            text-overflow: ellipsis;
            /* ������������ģ����ʾ */
            display: -webkit-box;
            /* ������һ����Ԫ����ʾ���ı������� */
            -webkit-line-clamp: 3;
            /* ���û���������ж������Ԫ�ص����з�ʽ */
            -webkit-box-orient: vertical;
        }
    </style>
</head>

<body>
    <div>
        ɶҲ��˵���˴�ʡ��һ����,ɶҲ��˵���˴�ʡ��һ���ִ˴�ʡ��һ����
    </div>
</body>

</html>
```

Chrome �����Ч����

![](img/20210420132822674.png)