<!--
 * @Description: 
 * @Author: ljl
 * @Date: 2025-05-12 19:54:34
 * @LastEditors: rendc
 * @LastEditTime: 2025-05-14 15:22:12
-->

# ���ƶ�Web����֮rem���䲼�֡�

��˼����

1. ҳ�沼�������ܷ�������Ļ��С�仯���仯��
2. ��ʽ���ֺ� flex ������Ҫ����ڿ�Ȳ��֣��Ǹ߶�������ã�
3. ��ô������Ļ�����仯��ʱ��Ԫ�ظ߶ȺͿ�ȵȱ������ţ�

- [���ƶ�Web����֮rem���䲼�֡�](#�ƶ�web����֮rem���䲼��)
- [һ��rem��λ](#һrem��λ)
    - [1.1 rem ��λ](#11-rem-��λ)
- [����ý���ѯ](#��ý���ѯ)
    - [2.1 ʲô��ý���ѯ](#21-ʲô��ý���ѯ)
    - [2.2 �﷨�淶](#22-�﷨�淶)
        - [2.2.1 mediatype ��ѯ����](#221-mediatype-��ѯ����)
        - [2.2.2 �ؼ���](#222-�ؼ���)
        - [2.2.3 ý������](#223-ý������)
    - [2.3 ý���ѯ+remʵ��Ԫ�ض�̬��С�仯](#23-ý���ѯremʵ��Ԫ�ض�̬��С�仯)
    - [2.4 ������Դ����⣩](#24-������Դ���)
- [����Less����](#��less����)
    - [3.1 ά��CSS�ı׶�](#31-ά��css�ı׶�)
    - [3.2 Less����](#32-less����)
    - [3.3 Less��װ��ע�����ʹ��VSCode���谲װLess��](#33-less��װע�����ʹ��vscode���谲װless)
    - [3.4 Less����](#34-less����)
        - [3.4.1 ���������淶](#341-���������淶)
        - [3.4.2 ����ʹ�ù淶](#342-����ʹ�ù淶)
    - [3.5 Less����](#35-less����)
    - [3.6 LessǶ��](#36-lessǶ��)
    - [3.7 Less����](#37-less����)
- [�ġ�rem���䷽��](#��rem���䷽��)
    - [4.1 remʵ�ʿ������䷽��](#41-remʵ�ʿ������䷽��)
    - [4.2 rem���䷽������ʹ�ã��г�������](#42-rem���䷽������ʹ���г�����)
    - [4.3 remʵ�ʿ������䷽��1](#43-remʵ�ʿ������䷽��1)
- [�塢��������ҳ��������](#����������ҳ��������)
- [����rem���䷽��2](#��rem���䷽��2)
    - [6.1 ����Ч��rem���䷽��flexible.js](#61-����Ч��rem���䷽��flexiblejs)
    - [6.2 ʹ�����䷽��2���������ƶ�����ҳ](#62-ʹ�����䷽��2���������ƶ�����ҳ)


# һ��rem��λ 

## 1.1 rem ��λ

`rem`��root em����һ����Ե�λ�������� `em`��em �Ǹ�Ԫ�������С��

��ͬ���� rem �Ļ�׼��**����� html Ԫ�ص������С**��

���磬��Ԫ�أ�html������ `font-size=12px`���Ǹ�Ԫ������ `width: 2rem;` �򻻳� px ��ʾ���� 24px��

rem �����ƣ���Ԫ�����ִ�С���ܲ�һ�£���������ҳ��ֻ��һ�� `html`�����Ժܺ�����������ҳ���Ԫ�ش�С���������ﵽͳһ����ȫ�������С��Ч������

> ע�⣺rem ���ƵĲ������������С�����ܿ�������Ԫ�صĴ�С��

```css
/* �� html Ϊ 12px */
html {
    font-size: 12px;
}
/* ��ʱ div �������С���� 24px */
div {
    font-size: 2rem��
}
```

��������

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>rem��λ</title>
    <style>
        html {
            font-size: 12px;
        }

        div {
            font-size: 12px;
            width: 15rem;
            height: 15rem;
            background-color: purple;
        }

        p {
            /* 1. em ����ڸ�Ԫ�ص������С��˵�� */
            /* 
            width: 10em;
            height: 10em;
            */
            /* 2. rem ����� html Ԫ�������С��˵�� */
            width: 10rem;
            height: 10rem;
            background-color: pink;
            /* 3.rem ���ŵ���ǿ���ͨ���޸� html ��������ִ�С���ı�ҳ����Ԫ�صĴ�С����������� */
        }
    </style>
</head>

<body>
    <div>
        <p></p>
    </div>
</body>

</html>
```

ע����Ȼʹ�� rem ֮��ʵ����ȫ�������С��ͳһ���ƣ��������ɲ��ܸ��ݴ��ڴ�С�Զ����䣬�������ǻ�Ҫѧϰý���ѯ��

# ����ý���ѯ

## 2.1 ʲô��ý���ѯ

ý���ѯ��Media Query���� CSS3 ���﷨��

- ʹ�� `@media` ��ѯ���������Բ�ͬ��ý�����Ͷ��岻ͬ����ʽ
- `@media` �������Բ�ͬ����Ļ�ߴ����ò�ͬ����ʽ
- ���������������С�Ĺ����У�ҳ��Ҳ�����������Ŀ�Ⱥ͸߶�������Ⱦҳ��
- Ŀǰ��Ժܶ�ƻ���ֻ���Android �ֻ���ƽ����豸���õõ�ý���ѯ

## 2.2 �﷨�淶

```css
@media mediatype and|not|only (media feature) {
    CSS-Code;
}
```

- �� @media ��ͷ��ע�� `@` ����
- mediatype ý������
- �ؼ��� and not only
- media feature ý�����ԣ�������С���Ű���

### 2.2.1 mediatype ��ѯ����

����ͬ���ն��豸���ֳɲ�ͬ�����ͣ���Ϊý�����͡�

| ֵ      | ����˵��                           |
| ------- | ---------------------------------- |
| `all`   | ���������豸                       |
| `print` | ���ڴ�ӡ���ʹ�ӡԤ��               |
| `scree` | ���ڵ�����Ļ��ƽ����ԡ������ֻ��� |

### 2.2.2 �ؼ���

�ؼ��ֽ�ý�����ͻ���ý���������ӵ�һ����Ϊý���ѯ��������

- and�����Խ����ý���������ӵ�һ���൱�� ���ҡ� ����˼��
- not���ų�ĳ��ý�����ͣ��൱�� ���ǡ� ����˼������ʡ�ԡ�
- only��ָ��ĳ���ض���ý�����ͣ�����ʡ�ԡ�

### 2.2.3 ý������

ÿ��ý�����Ͷ����и��Բ�ͬ�����ԣ����ݲ�ͬý�����͵�ý���������ò�ͬ��չʾ������������˽�������ע������Ҫ��С���Ű�����

| ֵ          | ����˵��                           |
| ----------- | ---------------------------------- |
| `width`     | ��������豸��ҳ��ɼ�����Ŀ��   |
| `min-width` | ��������豸��ҳ����С�ɼ������� |
| `max-width` | ��������豸��ҳ�����ɼ������� |

��������

����ҳ���ȸı䱳����ɫ��

ʵ��˼·��

- ���� **�Ӵ�С** �Ļ��� **��С����** ��˼·
- ע�����������ֵ `max-width` ����Сֵ `min-width` ����**��������**��
- ����ĻС�� 540 ���أ�������ɫ��Ϊ��ɫ��x <= 539��
- ����Ļ���ڵ��� 540 ���ز���С�ڵ��� 969 ���ص�ʱ�򱳾���ɫΪ��ɫ��540 <= x <= 969��
- ����Ļ���ڵ��� 970 ���ص�ʱ�򣬱�����ɫΪ��ɫ��x >= 970��

ע�⣺Ϊ�˷�ֹ���ң�ý���ѯ����Ҫ���մ�С������ߴӴ�С��˳����д������������ϲ���Ļ���**��С����**��д�������������ࡣ

������

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ý���ѯ�����޸ı�����ɫ</title>
    <style>
        /* 1. ý���ѯһ�㰴�մӴ�С���ߴ�С�����˳���� */
        /* 2. С�� 540px ҳ��ı�����ɫ��Ϊ��ɫ */
        @media screen and (max-width: 539px) {
            body {
                background-color: blue;
            }
        }

        /* 3. 540 ~ 970 ���ǵ�ҳ����ɫ��Ϊ��ɫ */
        /* @media screen and (min-width: 540px) and (max-width: 969px) {
            body {
                background-color: green;
            }
        } */
        /* ��С���󣨲���ԣ� */
        @media screen and (min-width: 540px) {
            body {
                background-color: green;
            }
        }

        /* 4. ���ڵ��� 970px ����ҳ�����ɫ��Ϊ��ɫ */
        @media screen and (min-width: 970px) {
            body {
                background-color: red;
            }
        }

        /* 5. screen ���� and ������ϲ���ʡ�Ե� */
        /* 6. ���ǵ����ֺ���������λ 970px ��� px ����ʡ�Ե� */
    </style>
</head>

<body>

</body>

</html>
```

Ч��ͼ��

![](mark-img/fe17e956fc9240abb9f1fd5a0f078ca4-16425672282032.gif)

ý���ѯ��С�������ƴ��������

![](mark-img/5a71a41d1a774eed989c89ac6bdeaa67.png)

## 2.3 ý���ѯ+remʵ��Ԫ�ض�̬��С�仯

`rem` ��λ�Ǹ��� html ���ߵģ����� rem ҳ��Ԫ�ؿ������ò�ͬ��С�ߴ硣

ý���ѯ���Ը��ݲ�ͬ�豸������޸���ʽ��

`ý���ѯ + rem` �Ϳ���ʵ�ֲ�ͬ�豸��ȣ�ʵ��ҳ��Ԫ�ش�С�Ķ�̬�仯��

��������

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ý���ѯ+remʵ��Ԫ�ض�̬�仯</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        /* html {
            font-size: 100px;
        } */
        /* ��С�����˳�� */

        @media screen and (min-width: 320px) {
            html {
                font-size: 50px;
            }
        }

        @media screen and (min-width: 640px) {
            html {
                font-size: 100px;
            }
        }

        .top {
            height: 1rem;
            font-size: .5rem;
            background-color: green;
            color: #fff;
            text-align: center;
            line-height: 1rem;
        }
    </style>
</head>

<body>
    <div class="top">���ﳵ</div>
</body>

</html>
```

![](mark-img/9dae0ae46a98435a8ca29752112c16de.gif)

## 2.4 ������Դ����⣩

����ʽ�ȽϷ����ʱ�����ǿ�����Բ�ͬ��ý��ʹ�ò�ͬ stylesheet����ʽ����

> ���磺�� PC ����ʽ���ƶ�����ʽʱ����÷ֿ�д��ʽ��

ԭ������ֱ���� link ���ж��豸���豸�ĳߴ磬Ȼ�����ò�ͬ�� CSS �ļ���

��1���﷨�淶

```html
<link rel="stylesheet" media="mediatype and|not|only (media feature)" href="mystylesheet.css">
```

��2��ʵ��

```html
<link rel="stylesheet" media="screen and (min-width: 400px)" href="styleA.css">
```

��������

- html

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>������Դ</title>
    <style>
        /* ��������Ļ���ڵ��� 640px ���ϵģ������� div һ����ʾ 2 �� */
        /* ��������ĻС�� 640px ������ div һ����ʾһ�� */
        /* һ�����飺����ý���ѯ��õķ����Ǵ�С���� */
        /* ������Դ��������ڲ�ͬ����Ļ�ߴ���ò�ͬ�� css �ļ� */
    </style>
    <link rel="stylesheet" href="style320.css" media="screen and (min-width: 320px)">
    <link rel="stylesheet" href="style640.css" media="screen and (min-width: 640px)">
</head>

<body>
    <div>1</div>
    <div>2</div>
</body>

</html>
```

- style320.css

```css
div {
  width: 100%;
  height: 100px;
}

div:nth-child(1) {
  background-color: pink;
}

div:nth-child(2) {
  background-color: purple;
}
```

- style640.css

```css
div {
  float: left;
  width: 50%;
  height: 100px;
}

div:nth-child(1) {
  background-color: pink;
}

div:nth-child(2) {
  background-color: purple;
}
```

- Ч��

![](mark-img/ccefc55643bc4f0c81e7a3432455411e.gif)

# ����Less����

## 3.1 ά��CSS�ı׶�

CSS ��һ�ŷǳ���ʽ���ԣ�û�б�����������SCOPE�������򣩵ȸ��

- CSS ��Ҫ��д��������û���߼��Ĵ��룬CSS ������ǱȽϸߵ�
- ������ά������չ�������ڸ���
- CSS û�кܺõļ�������
- ��ǰ�˿�������ʦ��������������Ϊȱ�� CSS ��д���������д����֯����������ά���� CSS ������Ŀ

## 3.2 Less����

Less��Leaner Style Sheets ����д����һ�� CSS ��չ���ԣ�Ҳ��Ϊ CSS Ԥ��������

��Ϊ CSS ��һ����ʽ����չ������û�м��� CSS �Ĺ��ܣ����������е� CSS �﷨�ϣ�Ϊ CSS �������ʽ���Ե����ԡ�

���� CSS ���﷨�����ϣ������˱�����Mixin�����룩�������Լ������ȹ��ܣ������� CSS �ı�д�����ҽ����� CSS ��ά���ɱ�����������������˵��������Less �����������ø��ٵĴ�������������顣

Less ������ַ��http://lesscss.cn/

������ CSS Ԥ��������Sass��Less��Stylus

һ�仰��Less ��һ�� CSS Ԥ�������ԣ�����չ�� CSS �Ķ�̬���ԡ�

## 3.3 Less��װ��ע�����ʹ��VSCode���谲װLess��

1. ��װ node.js����ѡ��汾��8.0������ַ��http://nodejs.cn/download/
2. ����Ƿ�װ�ɹ���ʹ�� cmd �������� `node -v` �鿴�汾����
3. ���� node.js ���߰�װ Less��ʹ�� cmd �������� `npm install -g less` ����
4. ����Ƿ�װ�ɹ���ʹ�� cmd ���� `lessc -v` �鿴�汾����

��Less ʹ�á�

���������½�һ����׺Ϊ `.less` ���ļ���������ļ�������д less ���

- Less ����
- Less ����
- Less Ƕ��
- Less ����

## 3.4 Less����

������ָû�й̶�ֵ�����Ըı�ġ���Ϊ���� CSS �е�һЩ��ɫ����ֵ�Ⱦ���ʹ�á�

`@������: ֵ;`

### 3.4.1 ���������淶

- ������ `@` Ϊǰ׺
- ���ܰ��������ַ�
- ���������ֿ�ͷ
- ��Сд����

`@color: pink;`

### 3.4.2 ����ʹ�ù淶

```less
// ֱ��ʹ��
body {
    color: @color;
}

a:hover {
    color: @color;
}
```

## 3.5 Less����

�����ϣ�Less ����һ���Զ�����﷨��һ�����������û�������Щ�﷨�����Լ�����ʽ������Щ�������ջ�ͨ�����������������ɶ�Ӧ�� CSS �ļ���

���ԣ�������Ҫ�����ǵ� Less �ļ�����������Ϊ CSS �ļ����������ǵ� HTML ҳ�����ʹ�á�

��VSCode Less �����

`Easy LESS` ��������� less �ļ�����Ϊ css �ļ���

��װ��ϲ�������¼����� VSCode��ֻҪ����һ�� less �ļ������Զ����� CSS �ļ���

## 3.6 LessǶ��

�����Ǿ����õ�ѡ������Ƕ�ס�

```css
#header .logo {
    width: 300px;
}
```

��less Ƕ��д����

```less
#header {
    .logo {
        width: 300px;
    }
}
```

������������� | α�� | αԪ��ѡ������

- �ڲ�ѡ������ǰ��û�� `&` ���ţ�����������Ϊ��ѡ�����ĺ��
- ����� `&` ���ţ����ͱ�����Ϊ��Ԫ�������Ԫ�ص�α��

```css
a:hover {
    color: red;
}
```

��less Ƕ��д����

```less
a {
    &:hover {
        color: red;
    }
}
```

## 3.7 Less����

�κ����֡���ɫ���߱��������Բ������㡣���� Less �ṩ�˼ӣ�+��������-�����ˣ�*��������/���������㡣

```less
/* Less ����д */
@width: 10px + 5;

div {
    border: @width solid red;
}

/* Less �������������� */
width: (@width + 5) * 2;
```

�����ɵ� css��

```css
div {
    border: 15px solid red;
}
```

ע�⣺

- �˺ţ�*���ͳ��ţ�/����д��Ҫ�μ�
- ������м����ұ����и��ո���� `1px + 5`
- ���°汾�� Less �У������б䶯��Ӧ�� `100px / 10` ��Ϊ `(100px / 10)`������û��Ч��
- ����������ͬ�ĵ�λ��ֵ֮������㣬��������ֵȡ��һ��ֵ�ĵ�λ
- �������ֵ֮��ֻ��һ��ֵ�е�λ������������ȡ�õ�λ

��������

- my.less

```less
// ����һ����ɫ�ı���
@color: pink;
// ����ı����� @1color @color~@#
// ���������ִ�Сд @color �� @Color ��������ͬ�ı���
// ������һ������Ϊ 14 ���صı���
@font14: 14px;

body {
  background-color: @color;
}

div {
  color: @color;
  font-size: @font14;
}

a {
  font-size: @font14;
}
```

- �����õ��� my.css

```css
body {
  background-color: pink;
}

div {
  color: pink;
  font-size: 14px;
}

a {
  font-size: 14px;
}
```

- nest.less

```less
.header {
  width: 200px;
  height: 200px;
  background-color: pink;

  // 1. lessǶ�� ��Ԫ�ص���ʽֱ��д����Ԫ������ͺ���
  a {
    color: red;

    // 2. �����α�ࡢ����ѡ������αԪ��ѡ���� �����ڲ�ѡ������ǰ����Ҫ�� &
    &:hover {
      color: blue;
    }
  }
}

.nav {
  .logo {
    color: green;
  }

  &::before {
    content: "";
  }
}
```

- ����õ��� nest.css

```css
.header {
  width: 200px;
  height: 200px;
  background-color: pink;
}

.header a {
  color: red;
}

.header a:hover {
  color: blue;
}

.nav .logo {
  color: green;
}

.nav::before {
  content: "";
}
```

- count.less

```less
@baseFont: 50px;

html {
  font-size: @baseFont;
}

@border: 5px + 5;

div {
  width: 200px - 50;
  height: (200px + 50px) * 2;
  border: @border solid red;
  background-color: #666 - #222;
}

img {
  width: 82rem / @baseFont;
  height: 82rem / @baseFont;
}

// 1. ������������������������һ���ո����
// 2. �������������㣬���ֻ��һ�����е�λ�������Ľ�����������λΪ׼
// 3. �������������㣬������������е�λ�����Ҳ�һ���ĵ�λ�����Ľ���Ե�һ����λΪ׼
```

- �����õ��� count.css

```css
html {
  font-size: 50px;
}

div {
  width: 150px;
  height: 500px;
  border: 10px solid red;
  background-color: #444444;
}

img {
  width: 82rem / 50px;
  height: 82rem / 50px;
}
```

# �ġ�rem���䷽��

��˼����

1. ���������Ŀ����ʲô��
2. ��ôȥ�ﵽ���Ŀ��ģ�
3. ��ʵ�ʵĿ������ʵ�֣�

���𰸡�

1. ��һЩ���ܵȱ�����Ӧ��Ԫ�أ��ﵽ���豸�ߴ緢���ı��ʱ�򣬵ȱ������䵱ǰ�豸��
2. ʹ��ý���ѯ���ݲ�ͬ���豸���������� html �������С��Ȼ��ҳ��Ԫ��ʹ�� rem ���ߴ絥λ���� html ���ߴ絥λ���� html �����С�仯Ԫ�سߴ�Ҳ�ᷢ���仯���Ӷ��ﵽ�ȱ����ŵ����䡣

## 4.1 remʵ�ʿ������䷽��

��1��������Ƹ����豸��ȵı�������̬���㲢���� html ����ǩ�� font-size ��С��ý���ѯ����

��2��CSS �У���Ƹ�Ԫ�صĿ��ߡ����λ�õ�ȡֵ������ͬ�ȱ�������Ϊ rem Ϊ��λ��ֵ��

![](mark-img/9435637e10964d7db3c17d685a9f3149-16425702425997.png)

## 4.2 rem���䷽������ʹ�ã��г�������

��1����������1

- less
- ý���ѯ
- rem

��2����������2

- flexible.js
- rem

�ܽ᣺

1. ���ַ����ĵײ�ԭ����һ����
2. ���ַ���Ŀǰ����ʹ��
3. ����2 ���򵥣��ֽ׶δ�������˽������ js ����

## 4.3 remʵ�ʿ������䷽��1

rem + ý���ѯ + less

**��1����Ƹ峣���ߴ���**

| �豸           | �������                                                     |
| -------------- | ------------------------------------------------------------ |
| iphone 4 5     | 640px                                                        |
| iphone 6 7 8   | 750px                                                        |
| iphone x 11 12 | 1170px                                                       |
| Android        | ���� 320px��360px��375px��384px��400px��414px��500px��720px��1080px |

һ������£�������һ�׻�����Ч��ͼ��Ӧ�󲿷ֵ���Ļ��������������������Ž���������һЩЧ�������ڻ����� 750px Ϊ׼����ĿǰӦ���� 1080px 2021�꣩

**��2����̬���� html ��ǩ font-size ��С**

1. ������Ƹ��� 750px
2. �������ǰ�������Ļ����Ϊ 15 �ȷݣ����ֱ�׼��һ�������� 20 �ݣ�Ҳ������ 10 �ȷݣ�
3. ÿһ����Ϊ html �����С��������� 750/15 = 50px
4. ��ô�� 320px �豸��ʱ�������СΪ 320/15 = 21.33px
5. ������ҳ��Ԫ�صĴ�С���Բ�ͬ�� html �����С�ᷢ�����Ǳ���������ͬ��
6. ���������� 750px ��Ƹ�
7. ��ʱ��ʵ���˲�ͬ��Ļ��ҳ��Ԫ�غ��ӵȱ������ŵ�Ч��

**��3��Ԫ�ش�Сȡֵ����**

1. ���Ĺ�ʽ��`ҳ��Ԫ�ص� rem ֵ = ҳ��Ԫ��ֵ��px�� / ����Ļ��� / ���ַ�����`
2. `��Ļ��� / ���ַ��� = html font-size �Ĵ�С`
3. ���ߣ�`ҳ��Ԫ�ص� rem ֵ = ҳ��Ԫ��ֵ��px�� / html font-size �����С`

��������

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>rem���䷽��</title>
    <style>
        @media screen and (min-width: 320px) {
            html {
                font-size: 21.33px;
            }
        }

        @media screen and (min-width: 750px) {
            html {
                font-size: 50px;
            }
        }

        div {
            width: 2rem;
            height: 2rem;
            background-color: pink;
        }

        /* 1. ��������ѡһ�ױ�׼�ߴ� 750px Ϊ׼ 
           2. ��������Ļ�ߴ� ���� ���ǻ��ֵķ��� �õ��� html ��������ִ�С ��������֪����ͬ��Ļ�µõ������ִ�С�ǲ�һ���� */
        /* 3. ҳ��Ԫ�ص� remֵ =  ҳ��Ԫ���� 750 ���ص���pxֵ / html ��������ִ�С */
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

![](mark-img/c4c2188152c1492fae4aacd85a57b2a3.gif)

# �塢��������ҳ��������

���������������ƶ�����ҳ��

���ʵ�ַ��https://m.suning.com/

������ѡ�͡�

���������ǲ�ȡ���������ƶ�ҳ�淽��

���������ֲ�ȡ rem ���䲼�֣�less + rem + ý���ѯ��

���ͼ�������ͼ���� 750px ��Ƴߴ�

�������ļ��нṹ��

<img src="mark-img/6270ce05173f439a8a53df94e5e69762.png" style="zoom:50%;" />

�������ӿڱ�ǩ�Լ������ʼ����ʽ��

```html
<meta name="viewport" content="width=device-width, user-scalable=no,
initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<link rel="stylesheet" href="css/normalize.css">
```

�����ù��� common.less �ļ���

1. �½� common.less ���ú��������Ļ�ߴ磬����ý���ѯ���ò�ͬ�� html �����С����Ϊ������ҳ����ҳ��Ҳ��Ҫ
2. ���ǹ��ĵĳߴ��� 320px��360px��375px��384px��400px��414px��424px��480px��540px��720px��750px��1080px
3. ���ֵķ������Ƕ�λ 15 �ȷ�
4. ��Ϊ���� PC ��Ҳ���Դ����������ƶ�����ҳ������Ĭ�� html �����СΪ 50px��ע����仰д�������棩

���½� index.less �ļ���

1. �½� index.less��������д��ҳ����ʽ

2. ���ղ����úõ� common.less ���뵽 index.less ���棬�﷨���£�

   ```less
   // �� index.less �е��� common.less �ļ�
   @inport "common";
   ```

3. ���� index.css ���뵽 index.html ����

��body ��ʽ��

```css
body {
	min-width: 320px;
	width: 15rem;
	margin: 0 auto;
	line-height: 1.5;
	font-family: Arial, Helvetica;
	background: #F2F2F2;
}
```

���������롿

- common.less

```less
// ���ó�������Ļ�ߴ� �޸������html���ִ�С
a {
    text-decoration: none;
}

// һ��Ҫд��������
html {
    font-size: 50px;
}

// ���Ǵ˴ζ���Ļ��ֵķ��� Ϊ 15
@no: 15;

// 320
@media screen and (min-width: 320px) {
    html {
        font-size: (320px / @no);
    }
}

// 360
@media screen and (min-width: 360px) {
    html {
        font-size: (360px / @no);
    }
}

// 375 iphone 678
@media screen and (min-width: 375px) {
    html {
        font-size: (375px / @no);
    }
}

// 384
@media screen and (min-width: 384px) {
    html {
        font-size: (384px / @no);
    }
}

// 400
@media screen and (min-width: 400px) {
    html {
        font-size: (400px / @no);
    }
}

// 414
@media screen and (min-width: 414px) {
    html {
        font-size: (414px / @no);
    }
}

// 424
@media screen and (min-width: 424px) {
    html {
        font-size: (424px / @no);
    }
}

// 480
@media screen and (min-width: 480px) {
    html {
        font-size: (480px / @no);
    }
}

// 540
@media screen and (min-width: 540px) {
    html {
        font-size: (540px / @no);
    }
}

// 720
@media screen and (min-width: 720px) {
    html {
        font-size: (720px / @no);
    }
}

// 750
@media screen and (min-width: 750px) {
    html {
        font-size: (750px / @no);
    }
}
```

- index.less

```less
// ��ҳ����ʽless�ļ�
@import "common";

// @import �������˼ ���԰�һ����ʽ�ļ����뵽����һ����ʽ�ļ�����
// link �ǰ�һ�� ��ʽ�ļ����뵽 htmlҳ������
body {
    min-width: 320px;
    width: 15rem;
    margin: 0 auto;
    line-height: 1.5;
    font-family: Arial, Helvetica;
    background: #F2F2F2;
}

// ҳ��Ԫ��rem���㹫ʽ�� ҳ��Ԫ�ص�px / html �����С 50
// search-content
@baseFont: 50;

.search-content {
    display: flex;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 15rem;
    height: (88rem / @baseFont);
    background-color: #FFC001;

    .classify {
        width: (44rem / @baseFont);
        height: (70rem / @baseFont);
        margin: (11rem / @baseFont) (25rem / @baseFont) (7rem / @baseFont) (24rem / @baseFont);
        background: url(../images/classify.png) no-repeat;
        // ��������
        background-size: (44rem / @baseFont) (70rem / @baseFont);
    }

    .search {
        flex: 1;

        input {
            outline: none;
            width: 100%;
            border: 0;
            height: (66rem / @baseFont);
            border-radius: (33rem / @baseFont);
            background-color: #FFF2CC;
            margin-top: (12rem / @baseFont);
            font-size: (25rem / @baseFont);
            padding-left: (55rem / @baseFont);
            color: #757575;
        }
    }

    .login {
        width: (75rem / @baseFont);
        height: (70rem / @baseFont);
        line-height: (70rem / @baseFont);
        margin: (10rem / @baseFont);
        font-size: (25rem / @baseFont);
        text-align: center;
        color: #fff;
    }
}

// banner
.banner {
    width: (750rem / @baseFont);
    height: (368rem / @baseFont);

    img {
        width: 100%;
        height: 100%;
    }
}

// ad
.ad {
    display: flex;

    a {
        flex: 1;

        img {
            width: 100%;
        }
    }
}

// nav
nav {
    width: (750rem / @baseFont);

    a {
        float: left;
        width: (150rem / @baseFont);
        height: (140rem / @baseFont);
        text-align: center;

        img {
            display: block;
            width: (82rem / @baseFont);
            height: (82rem / @baseFont);
            margin: (10rem / @baseFont) auto 0;
        }

        span {
            font-size: (25rem / @baseFont);
            color: #333;
        }
    }
}
```

- normalize.css

```css
/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */

/**
 * 1. Change the default font family in all browsers (opinionated).
 * 2. Correct the line height in all browsers.
 * 3. Prevent adjustments of font size after orientation changes in
 *    IE on Windows Phone and in iOS.
 */

/* Document
   ========================================================================== */

html {
  font-family: sans-serif;
  /* 1 */
  line-height: 1.15;
  /* 2 */
  -ms-text-size-adjust: 100%;
  /* 3 */
  -webkit-text-size-adjust: 100%;
  /* 3 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers (opinionated).
 */

body {
  margin: 0;
}

/**
 * Add the correct display in IE 9-.
 */

article,
aside,
footer,
header,
nav,
section {
  display: block;
}

/**
 * Correct the font size and margin on `h1` elements within `section` and
 * `article` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * Add the correct display in IE 9-.
 * 1. Add the correct display in IE.
 */

figcaption,
figure,
main {
  /* 1 */
  display: block;
}

/**
 * Add the correct margin in IE 8.
 */

figure {
  margin: 1em 40px;
}

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box;
  /* 1 */
  height: 0;
  /* 1 */
  overflow: visible;
  /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * 1. Remove the gray background on active links in IE 10.
 * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
 */

a {
  background-color: transparent;
  /* 1 */
  -webkit-text-decoration-skip: objects;
  /* 2 */
}

/**
 * Remove the outline on focused links when they are also active or hovered
 * in all browsers (opinionated).
 */

a:active,
a:hover {
  outline-width: 0;
}

/**
 * 1. Remove the bottom border in Firefox 39-.
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none;
  /* 1 */
  text-decoration: underline;
  /* 2 */
  text-decoration: underline dotted;
  /* 2 */
}

/**
 * Prevent the duplicate application of `bolder` by the next rule in Safari 6.
 */

b,
strong {
  font-weight: inherit;
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

/**
 * Add the correct font style in Android 4.3-.
 */

dfn {
  font-style: italic;
}

/**
 * Add the correct background and color in IE 9-.
 */

mark {
  background-color: #ff0;
  color: #000;
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Add the correct display in IE 9-.
 */

audio,
video {
  display: inline-block;
}

/**
 * Add the correct display in iOS 4-7.
 */

audio:not([controls]) {
  display: none;
  height: 0;
}

/**
 * Remove the border on images inside links in IE 10-.
 */

img {
  border-style: none;
}

/**
 * Hide the overflow in IE.
 */

svg:not(:root) {
  overflow: hidden;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers (opinionated).
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: sans-serif;
  /* 1 */
  font-size: 100%;
  /* 1 */
  line-height: 1.15;
  /* 1 */
  margin: 0;
  /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input {
  /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select {
  /* 1 */
  text-transform: none;
}

/**
 * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`
 *    controls in Android 4.
 * 2. Correct the inability to style clickable types in iOS and Safari.
 */

button,
html [type="button"],
/* 1 */
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
  /* 2 */
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Change the border, margin, and padding in all browsers (opinionated).
 */

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers.
 */

legend {
  box-sizing: border-box;
  /* 1 */
  color: inherit;
  /* 2 */
  display: table;
  /* 1 */
  max-width: 100%;
  /* 1 */
  padding: 0;
  /* 3 */
  white-space: normal;
  /* 1 */
}

/**
 * 1. Add the correct display in IE 9-.
 * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  display: inline-block;
  /* 1 */
  vertical-align: baseline;
  /* 2 */
}

/**
 * Remove the default vertical scrollbar in IE.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10-.
 * 2. Remove the padding in IE 10-.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  /* 1 */
  padding: 0;
  /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/**
 * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in IE 9-.
 * 1. Add the correct display in Edge, IE, and Firefox.
 */

details,
/* 1 */
menu {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Scripting
   ========================================================================== */

/**
 * Add the correct display in IE 9-.
 */

canvas {
  display: inline-block;
}

/**
 * Add the correct display in IE.
 */

template {
  display: none;
}

/* Hidden
   ========================================================================== */

/**
 * Add the correct display in IE 10-.
 */

[hidden] {
  display: none;
}
```

- index.html

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/index.css">
    <title>Document</title>
</head>

<body>
    <!-- ���������� -->
    <div class="search-content">
        <a href="#" class="classify"></a>
        <div class="search">
            <form action="">
                <input type="search" value="������ů�� ������">
            </form>
        </div>
        <a href="#" class="login">��¼</a>
    </div>
    <!-- banner���� -->
    <div class="banner">
        <img src="upload/banner.gif" alt="">
    </div>
    <!-- ��沿�� -->
    <div class="ad">
        <a href="#"><img src="upload/ad1.gif" alt=""></a>
        <a href="#"><img src="upload/ad2.gif" alt=""></a>
        <a href="#"><img src="upload/ad3.gif" alt=""></a>
    </div>
    <!-- navģ�� -->
    <nav>
        <a href="#">
            <img src="upload/nav1.png" alt="">
            <span>�����ֻ�</span>
        </a>
        <a href="#">
            <img src="upload/nav1.png" alt="">
            <span>�����ֻ�</span>
        </a>
        <a href="#">
            <img src="upload/nav1.png" alt="">
            <span>�����ֻ�</span>
        </a>
        <a href="#">
            <img src="upload/nav1.png" alt="">
            <span>�����ֻ�</span>
        </a>
        <a href="#">
            <img src="upload/nav1.png" alt="">
            <span>�����ֻ�</span>
        </a>
        <a href="#">
            <img src="upload/nav1.png" alt="">
            <span>�����ֻ�</span>
        </a>
        <a href="#">
            <img src="upload/nav1.png" alt="">
            <span>�����ֻ�</span>
        </a>
        <a href="#">
            <img src="upload/nav1.png" alt="">
            <span>�����ֻ�</span>
        </a>
        <a href="#">
            <img src="upload/nav1.png" alt="">
            <span>�����ֻ�</span>
        </a>
        <a href="#">
            <img src="upload/nav1.png" alt="">
            <span>�����ֻ�</span>
        </a>

    </nav>
</body>

</html>
```

- Ч��ͼ

<img src="mark-img/746ec6bda83e449b9889798e54bf73b8.jpg" style="zoom:33%;" />



# ����rem���䷽��2

## 6.1 ����Ч��rem���䷽��flexible.js

�ֻ��Ա��Ŷӳ��ļ���Ч���ƶ��������

������Ҳ����Ҫ��д��ͬ��Ļ��ý���ѯ����Ϊ���� js ���˴���

����ԭ���ǰѵ�ǰ�豸����Ϊ 10 �ȷݣ����ǲ�ͬ�豸�£���������һ�µ�

����Ҫ���ģ�����ȷ�������ǵ�ǰ�豸�� html ���ִ�С�Ϳ�����

���統ǰ��Ƹ��� 750px����ô����ֻ��Ҫ�� html ���ִ�С����Ϊ 75px��750 / 10���Ϳ���

����ҳ��Ԫ�� rem ֵ��ҳ��Ԫ�ص� px ֵ / 75

ʣ��ģ��� flexible.js ��ȥ��

github ��ַ��https://github.com/amfe/lib-flexible/

## 6.2 ʹ�����䷽��2���������ƶ�����ҳ

������ѡ�͡�

���������ǲ�ȡ���������ƶ�ҳ�淽��

���������ֲ�ȡ rem ���䲼��2��flexible.js + rem��

���ͼ�������ͼ���� 750px ��Ƴߴ�

�������ļ��нṹ��

<img src="mark-img/dd39c883c1334ece911cfdb43d8db16c.png" style="zoom:50%;" />

�������ӿڱ�ǩ�Լ������ʼ����ʽ���� js �ļ���

```html
<meta name="viewport" content="width=device-width, user-scalable=no,
initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<link rel="stylesheet" href="css/normalize.css">
<link rel="stylesheet" href="css/index.css">
```

������ҳ����Ҫ������� js �ļ���

```html
<!-- �� index.html �� ���� flexible.js ����ļ� -->
<script src=��js/flexible.js��> </script>
```

��body ��ʽ��

```css
body {
	min-width: 320px;
    max-width: 750px;
    /* flexible �����ǻ����� 10 �ȷ� */
	width: 10rem;
	margin: 0 auto;
	line-height: 1.5;
	font-family: Arial,Helvetica;
	background: #F2F2F2;
}
```

��VSCode px ת rem ��� cssrem��

cssrem ���Ĭ�ϵ� html ���ִ�С��cssroot��Ϊ `16px`������`16px = 1rem`��

���ԣ�������Ҫ���ݾ�������޸� html �����С��׼ֵ��

���磺750px �� 10 �ȷ�ʱ `750px / 10 = 75px`�����Ǿ���Ҫ�����׼ֵ����Ϊ `75px`��

1. �򿪲�������ð�ť
2. �ҵ���׼
3. �޸�ֵ
4. ���� VSCode

���������롿

- index.css

```css
body {
  min-width: 320px;
  /* flexible Ĭ�������������Ϊ 10 �ȷݵĻ���������������Ҫ������һ������� */
  max-width: 750px;
  /* flexible �����ǻ����� 10 �ȷ� */
  width: 10rem;
  margin: 0 auto;
  line-height: 1.5;
  font-family: Arial, Helvetica;
  background: #f2f2f2;
}

a {
  text-decoration: none;
  font-size: 0.333333rem;
}

/* cssrem ���Ĭ�ϵ� html ���ִ�С cssroot 16px */

/* 
img {
    width: 5.125rem;
    height: 4rem;
    width: 1rem;
    width: 1.093333rem;
    height: 1rem;
} */

/* ������ǵ���Ļ������ 750px ��ô���ǾͰ��� 750 ��Ƹ����� ����������ҳ�泬�� 750px */

@media screen and (min-width: 750px) {
  html {
    font-size: 75px !important;
  }
}

/* search-content */

.search-content {
  display: flex;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 10rem;
  height: 1.173333rem;
  background-color: #ffc001;
}

.classify {
  width: 0.586667rem;
  height: 0.933333rem;
  margin: 0.146667rem 0.333333rem 0.133333rem;
  background: url(../images/classify.png) no-repeat;
  background-size: 0.586667rem 0.933333rem;
}

.search {
  flex: 1;
}

.search input {
  outline: none;
  border: 0;
  width: 100%;
  height: 0.88rem;
  font-size: 0.333333rem;
  background-color: #fff2cc;
  margin-top: 0.133333rem;
  border-radius: 0.44rem;
  color: #757575;
  padding-left: 0.733333rem;
}

.login {
  width: 1rem;
  height: 0.933333rem;
  margin: 0.133333rem;
  color: #fff;
  text-align: center;
  line-height: 0.933333rem;
  font-size: 0.333333rem;
}
```

- flexible.js��ע�⣺��Ϊ���ȷ��ǿ����� js ���޸ĵģ�

```javascript
(function flexible(window, document) {
  var docEl = document.documentElement;
  var dpr = window.devicePixelRatio || 1;

  // adjust body font size
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + "px";
    } else {
      document.addEventListener("DOMContentLoaded", setBodyFontSize);
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10
  function setRemUnit() {
    var rem = docEl.clientWidth / 10;
    docEl.style.fontSize = rem + "px";
  }

  setRemUnit();

  // reset rem unit on page resize
  window.addEventListener("resize", setRemUnit);
  window.addEventListener("pageshow", function (e) {
    if (e.persisted) {
      setRemUnit();
    }
  });

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement("body");
    var testElement = document.createElement("div");
    testElement.style.border = ".5px solid transparent";
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) {
      docEl.classList.add("hairlines");
    }
    docEl.removeChild(fakeBody);
  }
})(window, document);
```

- index.html

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, user-scalable=no,initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/index.css">
    <!-- �������ǵ� flexible.js �ļ� -->
    <script src="js/flexible.js"></script>
    <title>Document</title>
</head>

<body>
    <div class="search-content">
        <a href="#" class="classify"></a>
        <div class="search">
            <form action="">
                <input type="search" value="rem���䷽��2�ܿ���Ŷ">
            </form>
        </div>
        <a href="#" class="login">��¼</a>
    </div>
</body>

</html>
```

- Ч��ͼ

![](mark-img/5a3ca61b12864cd78b087df54411b8ae.png)
