<!--
 * @Description: 
 * @Author: ljl
 * @Date: 2025-04-14 17:08:20
 * @LastEditors: rendc
 * @LastEditTime: 2025-04-16 10:29:18
-->
# ��CSS��顢����ѡ�������������ԡ��ı����ԡ����뷽ʽ��
- [��CSS��顢����ѡ�������������ԡ��ı����ԡ����뷽ʽ��](#css������ѡ�������������ı��������뷽ʽ)
- [һ��CSS���](#һcss���)
    - [1.1 HTML�ľ�����](#11-html�ľ�����)
    - [1.2 CSS��ҳ������ʦ](#12-css��ҳ������ʦ)
    - [1.3 CSS�﷨�淶](#13-css�﷨�淶)
    - [1.4 CSS������](#14-css������)
        - [1.4.1 ��ʽ��ʽ��д](#141-��ʽ��ʽ��д)
        - [1.4.2 ��ʽ��С��д](#142-��ʽ��С��д)
        - [1.4.3 �ո�淶](#143-�ո�淶)
- [����CSS����ѡ����](#��css����ѡ����)
    - [2.1 CSSѡ����������](#21-cssѡ����������)
    - [2.2 ѡ�����ķ���](#22-ѡ�����ķ���)
    - [2.3 ��ǩѡ����](#23-��ǩѡ����)
    - [2.4 ��ѡ����](#24-��ѡ����)
    - [2.5 idѡ����](#25-idѡ����)
    - [2.6 ͨ���ѡ����](#26-ͨ���ѡ����)
    - [2.7 ����ѡ�����ܽ�](#27-����ѡ�����ܽ�)
- [����CSS��������](#��css��������)
    - [3.1 ����ϵ��](#31-����ϵ��)
    - [3.2 �����С](#32-�����С)
    - [3.3 �����ϸ](#33-�����ϸ)
    - [3.4 ������ʽ](#34-������ʽ)
    - [3.5 ���帴������](#35-���帴������)
    - [3.6 ���������ܽ�](#36-���������ܽ�)
- [�ġ�CSS�ı�����](#��css�ı�����)
    - [4.1 �ı���ɫ](#41-�ı���ɫ)
    - [4.2 �ı�����](#42-�ı�����)
    - [4.3 �ı�װ��](#43-�ı�װ��)
    - [4.4 �ı�����](#44-�ı�����)
    - [4.5 �м�ࣨ�иߣ�](#45-�м���и�)
    - [4.6 �ı������ܽ�](#46-�ı������ܽ�)
- [�塢CSS���뷽ʽ](#��css���뷽ʽ)
    - [5.1 CSS���������뷽ʽ](#51-css���������뷽ʽ)
    - [5.2 ������ʽ��](#52-������ʽ��)
    - [5.3 �ڲ���ʽ��](#53-�ڲ���ʽ��)
    - [5.4 �ⲿ��ʽ��](#54-�ⲿ��ʽ��)
    - [5.5 CSS���뷽ʽ�ܽ�](#55-css���뷽ʽ�ܽ�)

# һ��CSS���

**CSS ����Ҫʹ�ó������ǲ�����ҳ������ҳ��ġ�**

## 1.1 HTML�ľ�����            

HTML ֻ��ע���ݵ����壬��Ȼ HTML �������򵥵���ʽ�����Ǵ��������޾���ӷ�ס�����������ά������

## 1.2 CSS��ҳ������ʦ

CSS �� `�����ʽ��` �ļ�ơ�

��ʱ����Ҳ���֮Ϊ `CSS��ʽ��` �� `������ʽ��`��

CSS Ҳ��һ�� `�������`��

CSS ��Ҫ�������� HTML ҳ���е��ı���ʽ�����塢��С����ɫ�����뷽ʽ��������ͼƬ��ʽ����ߡ��߿���ʽ���߾࡭�����Լ�����Ĳ��ֺ������ʾ��ʽ��

CSS �����ǵ���ҳ���ӷḻ��ʣ����ָ���������磬����⣺CSS �������� HTML���� HTML ��Ư����ͬʱ��ҳ�沼�ָ��򵥡�

**�ܽ᣺**

- HTML ��ṹ������Ԫ������
- CSS ���� HTML��������ҳԪ��
- CSS ����ֵ���� HTML רעȥ���ṹ���֣���ʽ���� CSS������**�ṹ �� ��ʽ ����**

## 1.3 CSS�﷨�淶

ʹ�� HTML ʱ����Ҫ���һ���Ĺ淶��CSS Ҳ����ˣ�Ҫ��������ʹ�� CSS ����ҳ�������Σ�������Ҫ�˽� CSS ��ʽ����

CSS ������������Ҫ�Ĳ��ֹ��ɣ�`ѡ����` �Լ� `һ�����������`��

- `ѡ����` ������ѡ����Ҫ���� CSS ��ʽ�� HTML ��ǩ��ѡ���������**������**���ǶԸö������õľ�����ʽ
- `����` �� `����ֵ` �� ����ֵ�ԡ� ����ʽ���� `����: ����ֵ;`
- �����Ƕ�ָ���Ķ������õ���ʽ���ԣ����磺�����С���ı���ɫ��
- ���Ժ�����ֵ֮����Ӣ�� `:` �ֿ�
- ��� ����ֵ�ԡ� ֮����Ӣ�� `;` �������֣�ĩβ�ļ�ֵ�Կ��Բ��� `;`��

���е���ʽ���������� `<style>` ��ǩ�ڣ���ʾ����ʽ��

`<style>` һ��д�� `</head>` �

```html
<head>
    <style type="text/css">
        h4 {
            color: bule;
            font-size: 100px;
        }
    </style>
</head>
```

ע�⣺`<style>` ��ǩ����д��������ǩ�ڲ���������ñ�ǩ�����ڣ�����ǿ�Ҳ��Ƽ�����д����

> Ŀǰ `type="text/css"` ����ʡ�ԡ�

## 1.4 CSS������

### 1.4.1 ��ʽ��ʽ��д

- ���ո�ʽ�����Ƽ���

```css
h3 { color: deeppink; font-size: 20px; }
```

- չ����ʽ��**�Ƽ�**��

```css
h3 {
	color: deeppink;
	font-size: 20px;
}
```

ǿ���Ƽ��ڶ��ָ�ʽ����Ϊ��ֱ�ۣ����õ���ռ�ÿռ䣬��Ϊ���ڿ���ͨ������ѹ��������ѹ�����롣

### 1.4.2 ��ʽ��С��д

- ��д�����Ƽ���

```css
H3 {
	COLOR: PINK;
}
```

- Сд��**�Ƽ�**��

```css
h3 {
	color: pink;
}
```

ǿ���Ƽ���ʽѡ������������������ֵ�ؼ���**ȫ��ʹ��Сд��ĸ**������������⡣

> �����㲻ȷ���Ƿ��ô�д�Ķ�һ����Сд�Ͷ��ˣ�

### 1.4.3 �ո�淶

```css
h3 {
	color: pink;
}
```

- **����ֵǰ��**��**ð�ź���**������һ���ո�
- **ѡ��������ǩ����ǰ�������м�**������һ���ո�

# ����CSS����ѡ����

## 2.1 CSSѡ����������

ѡ�������Ǹ��ݲ�ͬ������Ѳ�ͬ�ı�ǩѡ�����������ѡ���������ã�����˵�����ǣ�ѡ���ǩ�õġ�

```css
h1 {
	color: red;
	font-size: 25px;
}
```

���� CSS ���������£�

- �ҵ����е� h1 ��ǩ����ѡ���ˣ�
- ������Щ��ǩ����ʽ����ɫΪ��ɫ�������СΪ 25 ���ء��������£�

## 2.2 ѡ�����ķ���

ѡ������Ϊ `����ѡ����` �� `����ѡ����` �������࣬�������Ƚ���һ�»���ѡ������

- ����ѡ�������� `����` ѡ������ɵ�
- ����ѡ�����ְ�����`��ǩѡ����`��`��ѡ����`��`id ѡ����`��`ͨ���ѡ����`

## 2.3 ��ǩѡ����

`��ǩѡ����`��Ԫ��ѡ��������ָ�� HTML ��ǩ������Ϊѡ����������ǩ���Ʒ��࣬Ϊҳ����ĳһ���ǩָ��ͳһ�� CSS ��ʽ��

**�﷨��**

```css
��ǩ�� {
	����1: ����ֵ1;
	����2: ����ֵ2;
	����3: ����ֵ3;
	...
}
```

**���ã�**

��ǩѡ�������԰�ĳһ���ǩȫ��ѡ��������������е� `<div>` ��ǩ�����е� `<span>` ��ǩ��

**�ŵ㣺**

�ܿ���Ϊҳ����ͬ���͵ı�ǩͳһ������ʽ��

**ȱ�㣺**

������Ʋ��컯��ʽ��ֻ��ѡ��ȫ���ĵ�ǰ��ǩ��

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>����ѡ����֮��ǩѡ����</title>
    <style type="text/css">
        /* ������еĸñ�ǩԪ��������ʽ���ŵ㣺����ͳһ��ȱ�㣺�޷����컯���� */
        p {
            color: green;
        }

        div {
            color: pink;
        }
    </style>
</head>

<body>
    <p>��</p>
    <p>��</p>
    <p>��</p>
    <div>Ů��</div>
    <div>Ů��</div>
    <div>Ů��</div>
</body>

</html>
```

## 2.4 ��ѡ����

�����Ҫ���컯ѡ��ͬ�ı�ǩ������ѡһ������ĳ������ǩ������ʹ�� `��ѡ����`��

**CSS �﷨��**

```css
.���� {
	����1: ����ֵ1;
	...
}
```

���磺������ӵ�� red ��� HTML Ԫ�ؾ�����Ϊ��ɫ��

```css
.red {
	color: red;
}
```

**HTML �﷨��**

```html
<div class="red">���ɫ</div>
```

��ѡ������ HTML ���� class ���Ա�ʾ���� CSS �У���ѡ������һ�� `.` ����ʾ��

**ע�⣺**

- ��ѡ����ʹ�� `.`��Ӣ�ĵ�ţ����б�ʶ����������������Զ��壬�����Լ������ģ�
- �������Ϊ�������ǩ����һ����������ʾ
- �����ƻ�������ʹ��**�к���** `-` ��Ϊ������
- ����ʹ�����еĹؼ�����Ϊ����
- ��Ҫʹ�ô����֡����ĵ�����������ʹ��Ӣ����ĸ����ʾ
- ����Ҫ�����壬����ʹ����һ�۾�֪�����������Ŀ�ģ�**�ɶ��Ե�һ�����ȵڶ����Ƽ�ʹ��Ӣ������ʹ��ƴ����ʹ��ȫƴ**��
- �����淶����������CSS �����淶.md��

����ھ���**��ʽ�㶨��**��**�ṹ�����**��**һ������**��**�������**��

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>����ѡ����֮��ѡ����</title>
    <style type="text/css">
        /* ��ѡ�����ھ�����ʽ . ���壬�ṹ class ���ã�һ��������������� */
        .red {
            width: 100px;
            height: 100px;
            background-color: red;
        }

        .green {
            width: 100px;
            height: 100px;
            background-color: green;
        }
    </style>
</head>

<body>
    <div class="red"> ���� </div>
    <div class="green"> ������ </div>
    <div class="red"> ��Ҳ�Ǻ�ɫ </div>
</body>

</html>
```

**��ѡ��������������**

���ǿ��Ը�һ����ǩָ������������Ӷ��ﵽ�����ѡ��Ŀ�ģ���Щ����������ѡ�������ǩ����������һ����ǩ�ж�����֡�

- �ڱ�ǩ class ������д�������
- ��������м������ `�ո�` �ֿ�
- �����ǩ�Ϳ��Էֱ������Щ��������ʽ

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>����ѡ����֮��ѡ����</title>
    <style type="text/css">
        /* һ����ǩ�������ö����ѡ������֮���ÿո���� */
        .red {
            color: red;
        }

        .font35 {
            font-size: 35px;
        }
    </style>
</head>

<body>
    <div class="red font35">lalal</div>
</body>

</html>
```

**������������ʹ�ó���**

- ���԰�һЩ��ǩԪ����ͬ����ʽ����ͬ�Ĳ��֣��ŵ�һ��������
- ��Щ��ǩ�����Ե�������������࣬Ȼ���ٵ����Լ����е���
- �Ӷ���ʡ CSS ���룬ͳһ�޸�Ҳ�ǳ����㣨**ģ�黯�������û�**��

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>����ѡ����֮��ѡ����</title>
    <style type="text/css">
        /* ��ѡ���������������ڣ����� */
        .box {
            width: 100px;
            height: 100px;
        }

        .red {
            background-color: red;
        }

        .green {
            background-color: green;
        }
    </style>
</head>

<body>
    <div class="box red"></div>
    <div class="box green"></div>
    <div class="box red"></div>
</body>

</html>
```

������ѡ�����ں��ڲ��ֱȽϸ��ӵ�����£���ʹ�õý϶�ġ�

## 2.5 idѡ����

id ѡ��������Ϊ�����ض� id �� HTML Ԫ��ָ���ض�����ʽ��

HTML Ԫ���� id ���������� id ѡ������CSS �� id ѡ������ `#` �����塣

**�﷨��**

```css
#id�� {
	����1: ����ֵ1;
	...
}
```

**���磺**�� id Ϊ nav Ԫ���е���������Ϊ��ɫ��

```css
#nav {
	color: red;
}
```

**ע�⣺**id ����ֻ����ÿ�� HTML �ĵ��г���һ�Ρ�

**�ھ���**��ʽ `#` ���壬�ṹ `id` ���ã�ֻ�ܵ���һ�Σ���������ʹ�á�

**id ѡ��������ѡ����������**

- ��ѡ���� (class) �ñ��˵����֣�һ���˿����ж�����֣�ͬʱһ������Ҳ���Ա������ʹ��
- id ѡ�����ñ��˵����֤���룬ȫ�й���Ψһ�ģ������ظ���ͬһ�� id ѡ����ֻ�ܵ���һ�Σ�
- id ѡ��������ѡ�������Ĳ�ͬ����ʹ�ô�����
- ��ѡ�������޸���ʽ���õ���࣬id ѡ����һ������ҳ��Ψһ�Ե�Ԫ���ϣ������� JavaScript ����ʹ��

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>����ѡ����֮idѡ����</title>
    <style type="text/css">
        /* id ѡ�����ھ�����ʽ # ���壬�ṹ id ���ã�ֻ�ܵ���һ�Σ���������ʹ�� */
        #pink {
            color: pink;
        }
    </style>
</head>

<body>
    <div id="pink">zhoujirui</div>
</body>

</html>
```

�ٴ�ǿ����**ͬһ id ֻ�ܶ���һ�Σ�ͬһ id ѡ����Ҳֻ�ܵ���һ�Σ�**������ CSS �޸���ʽ��˵�����ʹ����ѡ������id ѡ������Ҫ������ JS ����ʹ�ã���

## 2.6 ͨ���ѡ����

�� CSS �У�ͨ���ѡ����ʹ�� `*` ���壬����ʾѡȡҳ����**����Ԫ��**����ǩ����

**�﷨��**

```css
* {
	����1: ����ֵ1;
	...
}
```

- ͨ���ѡ��������Ҫ���ã��Զ��͸����е�Ԫ��ʹ����ʽ
- ���������ʹ�ã����潲��ʹ�ó���

```css
// ����ͨ���ѡ����������е�Ԫ�ر�ǩ������߾࣬���ڽ�
* {
	margin: 0;
	padding: 0;
}
```

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>����ѡ����֮ͨ���ѡ����</title>
    <style type="text/css">
        /* * �� html ��ǩ���е�Ԫ�ض�ʹ����ʽ����������������Զ���ɵģ�����Ҫ�ֶ����� */
        * {
            color: red;
        }
    </style>
</head>

<body>
    <div>�ҵ�</div>
    <span>�ҵ�</span>
    <ul>
        <li>�����ҵ�</li>
    </ul>
</body>

</html>
```

## 2.7 ����ѡ�����ܽ�

| ����ѡ����   | ����                            | �ص�                                                  | ʹ�����       | �÷�                 |
| ------------ | ------------------------------- | ----------------------------------------------------- | -------------- | -------------------- |
| ��ǩѡ����   | ����ѡ��������ͬ�ı�ǩ�����磺p | ���ܲ��컯ѡ��                                        | �϶�           | `p {color: red;}`    |
| ��ѡ����     | ����ѡ�� 1 ������ ��� ��ǩ     | ���Ը�������ѡ��                                      | �ǳ���         | `.nav {color: red;}` |
| id ѡ����    | һ��ֻ��ѡ�� 1 ����ǩ           | ID ����ֻ����ÿ�� HTML �ĵ��г���һ�Σ�Ҳֻ�ܵ���һ�� | һ��� js ���� | `#nav {color: red;}` |
| ͨ���ѡ���� | ѡ�����еı�ǩ                  | ѡ���̫�࣬�в��ֲ���Ҫ                              | �������ʹ��   | `* {color: red;}`    |

- ÿ������ѡ��������ʹ�ó���������Ҫ����
- ������޸���ʽ����ѡ������ʹ������

# ����CSS��������

CSS Fonts�����壩�������ڶ��壺`����ϵ��`��`��С`��`��ϸ`���� `������ʽ`���磺б�壩��

## 3.1 ����ϵ��

CSS ʹ�� font-family ���Զ����ı�������ϵ�С�

```css
p {
	font-family: "Microsoft YaHei";
}

div {
	font-family: Arial, "Microsoft YaHei";
}
```

- ��������֮�����ʹ��Ӣ��״̬�µĶ��Ÿ���
- һ������£�����пո�����Ķ��������ɵ����壬������
- ����ʹ��ϵͳĬ���Դ����壬��֤���κ��û���������ж�����ȷ��ʾ
- ��õ����壺`body {font-family: "Microsoft YaHei", tahoma, arial, sans-serif, "Hiragino Sans GB";}`

> Apple �������壺
>
> ```css
> body {
>        font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif
> }
> ```

> Instagram �������壺
>
> ```css
> body {
>        font-family: -apple-system, BlinkMacSystemFont,"Segoe UI", Roboto, Helvetica, Arial, sans-serif
> }
> ```

>֪���������壺
>
>```css
>body {
>        font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif
>}
>```

> �����չ������壺
>
> ```css
> body {
>        font-family: PingFangSC-Regular, Helvetica, Arial, Microsoft Yahei, sans-serif
> }
> ```

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS��������֮����ϵ��</title>
    <style type="text/css">
        /* �������ӵ�һ�����忪ʼ�������䣬���������������Ļ�����ô��ʹ�ø����壬������һ�����壬
           ����������ԣ���ô�������ʹ���Դ���Ĭ�����壬����ʵ�ʿ�����һ�㽨��ʹ�ñȽϱ�׼�������� */
        h2 {
            /* font-family: '΢���ź�'; ����ʹ�����ģ��������� */
            font-family: "Microsoft YaHei", Arial, sans-serif;
        }

        p {
            font-family: "Times New Roman", Times, serif;
        }
    </style>
</head>

<body>
    <h2>LO������</h2>
    <p>������lalala</p>
    <p>���գ�2003��5��4��</p>
    <p>�Ա�Ů</p>
    <p>����״��������</p>
</body>

</html>
```

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS��������֮����ϵ��</title>
    <style type="text/css">
        /* һЩ����£����Ҫȫ�������������ֱ���� body ��ǩѡ������ָ�� */
        body {
            font-family: "Microsoft YaHei", Arial, sans-serif;
        }
    </style>
</head>

<body>
    <h2>LO������</h2>
    <p>������lalala</p>
    <p>���գ�2003��5��19��</p>
    <p>�Ա�Ů</p>
    <p>����״��������</p>
</body>

</html>
```

ע�⣺����������������û�����ϵͳ�����õģ������������һ�� Windows ϵͳ��װ����ķ�����

> ��Ȼʵ�ʿ�����ͨ�����������ʱ����������ļ��� HTML CSS JS ��һͬ���͵��ͷ��ˡ�


## 3.2 �����С

CSS ʹ�� font-size ���Զ��������С��

```css
p {
	font-size: 20px;
}
```

- px�����أ���С��������ҳ����õĵ�λ
- �ȸ������Ĭ�ϵ����ִ�СΪ��16px
- ��ͬ���������Ĭ����ʾ���ֺŴ�С��һ�£����Ǿ�����һ����ȷֵ��С����ҪĬ�ϴ�С
- ���Ը� body ָ������ҳ�����ֵĴ�С

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS��������֮�����С</title>
    <style type="text/css">
        /* ȫ������ʱ��һ���� body ��ǩѡ������ָ�����ִ�С���ȸ������Ĭ�� 16px��
           ������û���ָ��һ����ȷֵ���Ա�֤�ڲ�ͬ������е�Ч����һ���� */
        body {
            font-size: 24px;
        }

        /* �����ǩ�Ƚ����⣬body �е����ö����ǲ���Ч�ģ���Ҫ����ָ�����ִ�С */
        h2 {
            font-size: 54px;
        }
    </style>
</head>

<body>
    <h2>JERRY������</h2>
    <p>�������ܼ���</p>
    <p>���գ�2000��5��4��</p>
    <p>�Ա���</p>
    <p>����״��������</p>
</body>

</html>
```

## 3.3 �����ϸ

CSS ʹ�� font-weight ���������ı�����Ĵ�ϸ��

```css
p {
	font-weight: bold;
}
```

| ����ֵ    | ����                                                         |
| --------- | ------------------------------------------------------------ |
| `normal`  | Ĭ��ֵ�����Ӵֵģ�                                           |
| `bold`    | ������壨�Ӵֵģ�                                           |
| `100-900` | 400 ��ͬ�� normal���� 700 ��ͬ�� bold������ֵһ�㲻ʹ�ã�ע��������ֺ��治����λ |

- ѧ���üӴֱ�ǩ������ h �� strong �ȣ���Ϊ���Ӵ֣�������������ǩ�Ӵ�
- ʵ�ʿ���ʱ�����Ǹ�ϲ�������ֱ�ʾ��ϸ

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS��������֮�����ϸ</title>
    <style type="text/css">
        .bold {
            /* font-weight: bold; */
            /* ʵ�ʿ����У����Ǹ��ᳫʹ����������ʾ�Ӵֵ�Ч�� */
            /* ��� 700 �ĺ��治Ҫ����λ */
            font-weight: 700;
        }

        /* ʹ���ֲ��Ӵ� */
        h2 {
            /* font-weight: normal; */
            font-weight: 400;
        }
    </style>
</head>

<body>
    <h2>JERRY������</h2>
    <p>�������ܼ���</p>
    <p>���գ�2000��5��4��</p>
    <p>�Ա���</p>
    <p class="bold">����״��������</p>
</body>

</html>
```

## 3.4 ������ʽ

CSS ʹ�� font-style ���������ı��ķ��

```css
p {
	font-style: normal;
}
```

| ����ֵ   | ����                                                   |
| -------- | ------------------------------------------------------ |
| `normal` | Ĭ��ֵ�����������ʾ��׼��������ʽ font-style: normal; |
| `italic` | ���������ʾб���������ʽ                             |

**ע�⣺**ƽʱ���Ǻ��ٸ����ּ�б�壬����Ҫ��б���ǩ (em��i) ��Ϊ����б���塣

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS��������֮������ʽ�����</title>
    <style type="text/css">
        p {
            /* �ò���б��������б */
            font-style: italic;
        }

        em {
            /* ����б�����岻��б */
            font-style: normal;
        }
    </style>
</head>

<body>
    <p>�Ͽ�ʱ�����</p>
    <em>�¿�ʱ�����</em>
</body>

</html>
```

## 3.5 ���帴������

�������Կ��԰�����������ʽ�ۺ���д���������Ը���Լ���롣

```css
body {
	font: font-style font-weight font-size/line-height font-family;
}

body {
	font: normal 400 font-size/line-height "Microsoft YaHei", Arial, sans-serif;
}
```

- ʹ�� font ����ʱ�����밴�����﷨��ʽ�е�˳����д�����ܸ���˳�򣬲��Ҹ������Լ��Կո����
- ����Ҫ���õ����Կ���ʡ�ԣ�ȡĬ��ֵ���������뱣�� font-size �� font-family ���ԣ����� font ���Խ���������

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS��������֮��������</title>
    <style type="text/css">
        /* ��Ҫ div ���ֱ���б���Ӵ֡��ֺ�����Ϊ 16 ���أ�������΢���ź� */
        div {
            /* font-style: italic;
               font-weight: 700;
               font-size: 16px;
               font-family: 'Microsoft YaHei'; */

            /* �������ԣ���д�ķ�ʽ�������˳���ܴ��� �Կո���� */
            /* font: font-style font-weight font-size/line-height font-family; */
            font: italic 700 16px 'Microsoft YaHei';
            /* ע�⣺����Ҫ���õ����Կ���ʡ�ԣ�ȡĬ��ֵ���������뱣�� font-size �� font-family ���ԣ����� font ���Խ��������� */
            /* font: 20px 'Microsoft YaHei'�� */
        }
    </style>
</head>

<body>
    <div>��������ʮ���һ���һ��һ����д���</div>
</body>

</html>
```

## 3.6 ���������ܽ�

| ����          | ��ʾ     | ע���                                                       |
| ------------- | -------- | ------------------------------------------------------------ |
| `font-size`   | �ֺ�     | ����ͨ���õĵ�λ�� px ���أ�һ��Ҫ���ϵ�λ                   |
| `font-family` | ����     | ʵ�ʹ����а����Ŷ�Լ����д����                               |
| `font-weight` | �������� | ��ס�Ӵ��� 700 ���� bold ���Ӵ� �� normal ���� 400 ��ס���ֲ�Ҫ����λ |
| `font-style`  | ������ʽ | ��ס��б�� italic ����б�� normal ������������� normal    |
| `font`        | ������д | 1��������д����˳��Ĳ������⻻λ�ã�2�������ֺź��������ͬʱ���� |

# �ġ�CSS�ı�����

CSS Text���ı������Կɶ����ı��� `���`�����磺`�ı���ɫ`��`�ı�����`��`�ı�װ��`��`�ı�����`��`�м��` �ȡ�

## 4.1 �ı���ɫ

`color` �������ڶ����ı�����ɫ��

```css
div {
	color: red;
}
```

| ��ʾ��ʽ       | ����ֵ                                              |
| -------------- | --------------------------------------------------- |
| Ԥ�������ɫֵ | red��green��blue��black��white��gray                |
| ʮ������       | #FF0000��#FF6600��#29D794��ÿ��λ��Ӧ��#��R��G��B�� |
| RGB ����       | rgb(255, 0, 0) �� rgb(100%, 0%, 0%)                 |

**ע�⣺**��������õ���ʮ�����ơ�

> ��ǿ�������ɫ��
>
> ��ɫ��`black`��`#000000`��`rgb(0, 0, 0)`����ԭɫɶҲû�л�Ͼ�Ϊ�ڣ�
>
> ��ɫ��`white`��`#FFFFFF`��`rgb(255, 255, 255)`����ԭɫȫ����Ͼ�Ϊ�ף�
>
> ��ɫ��`gray`��`#808080`��`rgb(128, 128, 128)`����ԭɫȫ���Ͼ�Ϊ�ң�
>
> ��ɫ��`red`��`#FF0000`��`rgb(255, 0, 0)`
>
> ��ɫ��`green`��`#008000`��`rgb(0, 128, 0)`����ɫ��Ϊ���⣬green ��Ӧ���� #008000��
>
> ��ɫ��`blue`��`#0000FF`��`rgb(0, 0, 255)`
>
> ��ɫ��`yellow`��`#FFFF00`��`rgb(255, 255, 0)`
>
> ��ɫ��`#00FFFF`��`rgb(0, 255, 255)`
>
> ��죺`#FF00FF`��`rgb(255, 0, 255)`
>
> ��ɫ��`orange`
>
> ��ɫ��`pink`
>
> �ҷ�ɫ��`hotpink`��Ũ�ȵͣ���`deeppink`��Ũ�ȸߣ�
>
> ����ɫ��`skyblue`
>
> ��ɫϵ��`dark��ɫ` �磺`darkgreen`
>
> ǳɫϵ��`light��ɫ` �磺`lightgreen`

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS�ı��������֮�ı���ɫ</title>
    <style type="text/css">
        div {
            /* color: deeppink; */
            /* color: #FF1493; ��� */
            color: rgb(255, 20, 147);
        }
    </style>
</head>

<body>
    <div>pink</div>
</body>

</html>
```

## 4.2 �ı�����

`text-align` ������������Ԫ�����ı����ݵ�ˮƽ���뷽ʽ��

```css
div {
	text-align: center;
}
```

| ����ֵ | ����             |
| ------ | ---------------- |
| left   | ����루Ĭ��ֵ�� |
| rigth  | �Ҷ���           |
| center | ���ж���         |

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS�ı����֮�ı�����</title>
    <style type="text/css">
        h1 {
            /* �������� h1 �������������ˮƽ���ж��� */
            /* text-align: center; */
            text-align: right;
        }
    </style>
</head>

<body>
    <h1>�Ҷ���ı���</h1>
</body>

</html>
```

ע�⣺

`text-align` ����ֻ�������� `�鼶Ԫ��`�����øÿ鼶Ԫ���ڵ� `����Ԫ��` ʵ�־��У���һ�������֣���

���������У�h1 Ϊ�鼶Ԫ�أ����Ը� h1 ���� text-align�����������������ı���������滹������Ԫ�صĻ���Ҳ��һͬ���ã���

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS�ı����֮�ı�����</title>
    <style type="text/css">
        div {
            text-align: center;
        }
    </style>
</head>

<body>
   <div>
	   <p>zhoujiruizhoujirui</p>
   </div>
</body>

</html>
```

���������У�Ϊ div ���� text-align ֮�����ܹ�ʹ���ڲ��Ŀ鼶Ԫ�� p ������־��У�ԭ���� p ��̳и�Ԫ�� div �� text-align ���ԣ������൱�ڶ� p ������ text-align��

## 4.3 �ı�װ��

`text-decoration` ���Թ涨��ӵ��ı������Σ����Ը��ı���� `�»���`��`ɾ����`��`�ϻ���` �ȡ�

```css
div {
	text-decoration: underline;
}
```

| ����ֵ         | ����                              |
| -------------- | --------------------------------- |
| `none`         | Ĭ�ϣ�û��װ���ߣ�**���**��    |
| `underline`    | �»��ߣ����� a �Դ��»��ߣ����ã� |
| `overline`     | �ϻ��ߣ��������ã�                |
| `line-through` | ɾ���ߣ������ã�                  |

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS�ı����֮�ı�װ��</title>
    <style type="text/css">
        /* Ĭ��Ϊ none û��װ�� */
        div {
            /* �ϻ��� �������� */
            /* text-decoration: overline; */
            /* ɾ���� ������ */
            /* text-decoration: line-through; */
            /* �»��� ���ã����� a �Դ��»��� */
            text-decoration: underline;
        }

        a {
            /* ȡ�� a Ĭ�ϵ��»��� */
            text-decoration: none;
            color: #333333;
        }
    </style>
</head>

<body>
    <div>�ۺ�ɫ�Ļ���</div>
    <a href="http://jerry-z-j-r.github.io">JERRY</a>
</body>

</html>
```

## 4.4 �ı�����

`text-indent` ��������ָ���ı��ĵ�һ�е�������ͨ���ǽ����������������

```css
div {
	text-indent: 10px;
}
```

ͨ�����ø����ԣ�����Ԫ�صĵ�һ�ж���������һ�������ĳ��ȣ������ó��ȿ����Ǹ�ֵ��

```css
p {
	text-indent: 2em;
}
```

em ��һ����Ե�λ�����ǵ�ǰԪ�� (font-size) 1 �����ֵĴ�С�������ǰԪ��û�����ô�С����ᰴ�ո�Ԫ�ص� 1 �����ִ�С��

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS�ı����֮�ı�����</title>
    <style type="text/css">
        p {
            font-size: 24px;
            /* �ı��������������پ��룬��������Ϊ��ֵ��������Ϊ��ֵ */
            /* text-indent: 48px; */
            /* em Ϊ����ڵ�ǰԪ�صĴ�С��λ */
            text-indent: 2em;
        }
    </style>
</head>

<body>
    <p>�򿪱������Ϻ�����ݵĵ�����ͼ����ῴ�������ݺύ�����·���磬
        ��������й����������׳��й����ͨϵͳ</p>

    <p>�ɼ�ʹ���������ڱ��Ϲ����������Ȼ�ٲ��˶Ե����ı�Թ������̸�������������ӵ����
        �Ժܶ��˶��ԣ�ÿ�μ������Ĺ��̣�������һ��Ӳ�̡����ο��������ǰ��̾Ӷࡣ</p>

    <p>��ô����Խ��Խ��Ķ����������߳���ӭ�������Լ��ĵ������й�����ĵ�������ӵ�����أ�</p>
</body>

</html>
```

## 4.5 �м�ࣨ�иߣ�

`line-height` �������������м�ľ��루�иߣ������Կ�������������֮��ľ��롣

```css
p {
	line-height: 26px;
}
```

- `�м�� = �ϼ�� + �ı��߶� + �¼��`

- `���¼�� = ���м�� - �ı��߶ȣ�/ 2`

- `�ı��߶� = font-size`

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS�ı����֮�м��</title>
    <style type="text/css">
        /* �м�� = �ϼ�� + �ı��߶� + �¼�� */
        /* �м�� = �и� */
        /* �ı��߶� = �������ش�С */
        /* ���¼�� = ���м�� - �ı��߶ȣ�/ 2 */
        p {
            line-height: 25px;
        }
    </style>
</head>

<body>
    <p>�򿪱������Ϻ�����ݵĵ�����ͼ����ῴ�������ݺύ�����·���磬
        ��������й����������׳��й����ͨϵͳ</p>

    <p>�ɼ�ʹ���������ڱ��Ϲ����������Ȼ�ٲ��˶Ե����ı�Թ������̸�������������ӵ����
        �Ժܶ��˶��ԣ�ÿ�μ������Ĺ��̣�������һ��Ӳ�̡����ο��������ǰ��̾Ӷࡣ</p>

    <p>��ô����Խ��Խ��Ķ����������߳���ӭ�������Լ��ĵ������й�����ĵ�������ӵ�����أ�</p>
</body>

</html>
```

**���䣺�м��������ɣ���һ�����ֵĵײ��뱾�����ֵĵײ�֮��ľ�������м�ࡣ**


## 4.6 �ı������ܽ�

| ����              | ��ʾ     | ע���                                                       |
| ----------------- | -------- | ------------------------------------------------------------ |
| `color`           | �ı���ɫ | ����ͨ���� ʮ������ ����ͨ���Ǽ�д��ʽ #fff��6 ��һ�����Լ�д�� |
| `text-align`      | �ı����� | �����趨����ˮƽ�Ķ��뷽ʽ                                   |
| `text-indent`     | �ı����� | ͨ���������ڶ�����������2���ֵľ��� text-indent: 2em;        |
| `text-decoration` | �ı����� | �μ� ����»��� underline ȡ���»��� none                    |
| `line-height`     | �и�     | ����������֮��ľ���                                         |

# �塢CSS���뷽ʽ

## 5.1 CSS���������뷽ʽ

���� CSS ��ʽ��д��λ�ã���������ķ�ʽ����CSS ��ʽ����Է�Ϊ�����ࣺ

- ������ʽ������ʽ��
- �ڲ���ʽ��Ƕ��ʽ��
- �ⲿ��ʽ������ʽ��

## 5.2 ������ʽ��

������ʽ��������ʽ������Ԫ�ر�ǩ�ڲ��� style �������趨 CSS ��ʽ���ʺ����޸ļ���ʽ��

```html
<div style="color: red; font-size: 12px;">
    �ഺ�����ڣ�ץ��̸����
</div>
```

- `style` ��ʵ���Ǳ�ǩ������
- ��˫�����м䣬д��Ҫ���� CSS �淶
- ���Կ��Ƶ�ǰ�ı�ǩ������ʽ
- ������д����������û�����ֳ��ṹ����ʽ������˼�룬���Բ��Ƽ�����ʹ�ã�ֻ�жԵ�ǰԪ����Ӽ���ʽ��ʱ�򣬿��Կ���ʹ��
- ʹ��������ʽ���趨 CSS��ͨ��Ҳ����Ϊ `����ʽ����`

## 5.3 �ڲ���ʽ��

�ڲ���ʽ��Ƕ����ʽ��ʱд�� HTML ҳ���ڲ����ǽ����е� CSS �����ȡ�����������ŵ�һ�� `<style>` ��ǩ�С�

```html
<style type="text/css">
    div {
        color: red;
        font-size: 12px;
    }
</style>
```

- `<style>` ��ǩ�����Ͽ��Է��� HTML �ĵ����κεط�����һ���ŵ��ĵ��� `<head>` ��ǩ��
- Ŀǰ��������Ѿ�֧��**ʡ��** `type` **����**
- ͨ�����ַ�ʽ�����Է�����Ƶ�ǰ����ҳ���е�Ԫ����ʽ����
- ����ṹ���������ǲ�û��ʵ�ֽṹ����ʽ��ȫ����
- ʹ���ڲ���ʽ���趨 CSS��ͨ��Ҳ����Ϊ `Ƕ��ʽ����`�����ַ�ʽ��������ϰʱ���õķ�ʽ

## 5.4 �ⲿ��ʽ��

ʵ�ʿ��������ⲿ��ʽ���ʺ�����ʽ�Ƚ϶������������ǣ���ʽ����д�� CSS �ļ��У�֮��� CSS �ļ����뵽 HTML ҳ����ʹ�á�

�����ⲿ��ʽ���Ϊ������

- �½�һ����׺��Ϊ��`.css` ����ʽ�ļ��������е� CSS ���붼������ļ���
- �� HTML ҳ���У�ʹ�� `<link>` ��ǩ��������ļ�

```html
<link rel="stylesheet" type="text/css" href="css�ļ�·��">
```

| ����   | ����                                                         |
| ------ | ------------------------------------------------------------ |
| `rel`  | ���嵱ǰ�ĵ��뱻�����ĵ�֮��Ĺ�ϵ��������**��Ҫָ��Ϊ "stylesheet"**����ʾ�����ӵ��ĵ���һ����ʽ���ļ� |
| `type` | ���屻�����ĵ��� MIME ���ͣ������������ MIME ������ "text/css"��������������ʽ��Ŀǰ�������**�Ѿ�֧��ʡ�� "type" ����** |
| `href` | �����������ⲿ��ʽ���ļ��� URL�����������·����Ҳ�����Ǿ���·�� |

**ע�⣺**ʹ���ⲿ��ʽ���趨 CSS��ͨ��Ҳ����Ϊ `����ʽ` �� `����ʽ����`�����ַ�ʽ�ǿ����г��õķ�ʽ��

## 5.5 CSS���뷽ʽ�ܽ�

| ��ʽ��               | �ŵ�                     | ȱ��         | ʹ�����       | ���Ʒ�Χ     |
| -------------------- | ------------------------ | ------------ | -------------- | ------------ |
| ������ʽ������ʽ�� | ��д���㣬Ȩ�ظ�         | �ṹ��ʽ��д | ����           | ����һ����ǩ |
| �ڲ���ʽ��Ƕ��ʽ�� | ���ֽṹ����ʽ����       | û�г��׷��� | �϶�           | ����һ��ҳ�� |
| �ⲿ��ʽ������ʽ�� | ��ȫʵ�ֽṹ����ʽ����� | ��Ҫ����     | ��࣬��Ѫ�Ƽ� | ���ƶ��ҳ�� |