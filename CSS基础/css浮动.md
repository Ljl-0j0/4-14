<!--
 * @Description: 
 * @Author: ljl
 * @Date: 2025-04-17 15:17:23
 * @LastEditors: rendc
 * @LastEditTime: 2025-04-17 15:17:27
-->
# ��CSS������

> ���ĵ��Ǹ��˶� Pink ��ʦ�γ̵��ܽ���ɼ����䣬ת����ע�������� 

# һ��������float��

## 1.1 ��ͳ��ҳ���ֵ����ַ�ʽ

��ҳ���ֵı��ʣ��� CSS ���ڷź��ӣ��Ѻ��Ӱڷŵ���Ӧλ�á�

CSS �ṩ�����ִ�ͳ���ַ�ʽ����˵���Ǻ�����ν������У���

- ��ͨ������׼����
- ����
- ��λ

> ����ָ��ֻ�Ǵ�ͳ���֣���ʵ����һЩ����߼��Ĳ��ַ�ʽ��

## 1.2 ��׼������ͨ��/�ĵ�����

��ν�ı�׼�������Ǳ�ǩ���չ涨�õ�Ĭ�Ϸ�ʽ���С�

1. **�鼶Ԫ�ػ��ռһ�У���������˳�����С�**
2. **����Ԫ�ػᰴ��˳�򣬴�����˳�����У�������Ԫ�ر�Ե���Զ����С�**

���϶��Ǳ�׼�����֣�����ǰ��ѧϰ�ľ��Ǳ�׼������׼����������Ĳ��ַ�ʽ��

�����ֲ��ַ�ʽ���������ڷź��ӵģ����Ӱڷŵ�����λ�ã�������Ȼ������ˡ�

**ע�⣺**ʵ�ʿ����У�һ��ҳ������������������ֲ��ַ�ʽ�������ƶ���ѧϰ�µĲ��ַ�ʽ�� ��

## 1.3 Ϊʲô��Ҫ������

���ʣ������ñ�׼���ܷܺ����ʵ������Ч����

1. **����ö���鼶���ӣ�div��ˮƽ���г�һ�У�**

![](img/jpg)

�Ƚ��ѣ���Ȼת��Ϊ���ڿ�Ԫ�ؿ���ʵ��һ����ʾ����������֮����д��**�հ׷�϶**�����ѿ��ơ�

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>���ڿ��м��з�϶</title>
    <style>
        div {
            width: 150px;
            height: 200px;
            background-color: #d87093;
            display: inline-block;
        }
    </style>
</head>

<body>
    <div>1</div>
    <div>2</div>
    <div>3</div>
</body>

</html>
```

<img src="img/.jpg" style="width:60%;" />

2. **���ʵ���������ӵ����Ҷ��룿**

<img src="img/.jpg" style="width:60%;" />

�ܽ᣺�кܶ�Ĳ���Ч������׼��û�а취��ɣ���ʱ�Ϳ������ø�����ɲ��֣���Ϊ�������Ըı�Ԫ�ر�ǩĬ�ϵ����з�ʽ��

**��������͵�Ӧ�ã������ö���鼶Ԫ��һ����������ʾ��**

**��ҳ���ֵ�һ׼�򣺶���鼶Ԫ�����������ұ�׼��������鼶Ԫ�غ��������Ҹ�����**

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>����鼶Ԫ�غ��������Ҹ���</title>
    <style>
        div {
            float: left;
            width: 150px;
            height: 200px;
            background-color: #d87093;
        }
    </style>
</head>

<body>
    <div>1</div>
    <div>2</div>
    <div>3</div>
</body>

</html>
```

<img src="img/.jpg" style="width:60%;" />

**��չ��**�����ĺ��Ӳ��ᷢ����߾�ϲ���

## 1.4 ʲô�Ǹ�����

`float` �������ڴ��������򣬽����ƶ���һ�ߣ�ֱ�����Ե���ұ�Ե�������������һ��������ı�Ե��

�﷨��

```css
ѡ���� { float: ����ֵ;}
```

| ����  | ����                 |
| ----- | -------------------- |
| none  | Ԫ�ز�������Ĭ��ֵ�� |
| left  | Ԫ�����󸡶�         |
| right | Ԫ�����Ҹ���         |

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ʲô�Ǹ���</title>
    <style>
        .left,
        .right {
            float: left;
            width: 200px;
            height: 200px;
            background-color: pink;
        }
    </style>
</head>

<body>
    <div class="left">������</div>
    <div class="right">�Ұ׻�</div>
</body>

</html>
```

![](img/.jpg)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ʲô�Ǹ���</title>
    <style>
        .left,
        .right {
            float: left;
            width: 200px;
            height: 200px;
            background-color: pink;
        }

        /* ����� */
        .right {
            float: right;
        }
    </style>
</head>

<body>
    <div class="left">������</div>
    <div class="right">�Ұ׻�</div>
</body>

</html>
```

![](img/.jpg)

## 1.5 �������ԣ����ѵ㣩

���˸���֮���Ԫ�أ�����кܶ����ԣ���Ҫ�������ա�

1. ����Ԫ�ػ������׼�����ѱ꣩
2. ������Ԫ�ػ�һ������ʾ����Ԫ�ض�������
3. ������Ԫ�ػ�������ڿ�Ԫ�ص�����

����ֱ���ͣ�

**��1������Ԫ�ػ������׼�����ѱ꣩**

- �����׼��ͨ���Ŀ��ƣ����� �ƶ���ָ��λ�ã����������׳��ѱ꣩
- �����ĺ��Ӳ��ٱ���ԭ�ȵ�λ��

![](img/.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>��������1</title>
    <style>
        /* �����˸�����float����Ԫ�ػ᣺
        1.�����׼��ͨ���Ŀ��ƣ������ƶ���ָ��λ�ã�������
        2.�����ĺ��Ӳ��ٱ���ԭ�ȵ�λ�� */
        .box1 {
            float: left;
            width: 200px;
            height: 200px;
            background-color: pink;
        }

        .box2 {
            width: 300px;
            height: 300px;
            background-color: gray;
        }
    </style>
</head>

<body>
    <div class="box1">�����ĺ���</div>
    <div class="box2">��׼���ĺ���</div>
</body>

</html>
```

![](img/.jpg)

**��2��������Ԫ�ػ�һ������ʾ����Ԫ�ض�������**

- ���������Ӷ������˸����������ǻᰴ������ֵһ������ʾ���Ҷ��˶������С�
- ������Ԫ���ǻ���������һ��ģ������з�϶��������������װ������Щ�����ĺ��ӣ�����ĺ��ӻ�����һ�ж��롣

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>����Ԫ������-����Ԫ��һ����ʾ</title>
    <style>
        div {
            float: left;
            width: 200px;
            height: 200px;
            background-color: pink;
        }

        .two {
            background-color: skyblue;
            height: 249px;
        }

        .four {
            background-color: skyblue;
        }
    </style>
</head>

<body>
    <div>1</div>
    <div class="two">2</div>
    <div>3</div>
    <div class="four">4</div>
</body>

</html>
```

![](img/.jpg)

![](img/.gif)

![](img/��������Ԫ�ػ�������ڿ�Ԫ�ص�����**

�κ�Ԫ�ض����Ը���������ԭ����ʲôģʽ��Ԫ�أ���Ӹ���֮��������ڿ�Ԫ�����Ƶ����ԡ�

- �鼶���ӣ�û�����ÿ��ʱĬ�Ͽ�Ⱥ͸���һ����������Ӹ��������Ĵ�С��������������
- ���ں��ӣ����Ĭ�Ϻ�����һ����ֱ�����ø߿���Ч��������Ӹ��������Ĵ�С����ֱ������
- �����ĺ����м���û�з�϶�ģ��ǽ�����һ���
- **����Ĭ�Ͽ�������ݾ�����ͬʱ֧��ָ���߿�����֮���޿�϶**

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>������Ԫ�ؾ������ڿ�Ԫ���ص�</title>
    <style>
        /* �κ�Ԫ�ض����Ը���������ԭ����ʲôģʽ��Ԫ�أ���Ӹ���֮��������ڿ�Ԫ�����Ƶ����ԡ� */
        span,
        div {
            float: left;
            width: 200px;
            height: 100px;
            background-color: pink;
        }

        /* �������Ԫ�����˸���������Ҫת���鼶\���ڿ�Ԫ�ؾͿ���ֱ�Ӹ��߶ȺͿ�� */
        p {
            float: right;
            height: 200px;
            background-color: skyblue;
        }
    </style>
</head>

<body>
    <span>span1</span>
    <span>span2</span>

    <div>div</div>
    <p>pppppppppppppp</p>
</body>

</html>
```

![](img/.jpg)

ע�⣺֮���Զ���û�ж��룬ԭ���� p ��ǩ�Դ�����߾� > span div �Դ�����߾ࡣ

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>������Ԫ�ؾ������ڿ�Ԫ���ص�</title>
    <style>
        * {
            margin: 0px;
        }

        /* �κ�Ԫ�ض����Ը���������ԭ����ʲôģʽ��Ԫ�أ���Ӹ���֮��������ڿ�Ԫ�����Ƶ����ԡ� */
        span,
        div {
            float: left;
            width: 200px;
            height: 100px;
            background-color: pink;
        }

        /* �������Ԫ�����˸���,����Ҫת���鼶\���ڿ�Ԫ�ؾͿ���ֱ�Ӹ��߶ȺͿ�� */
        p {
            float: right;
            height: 200px;
            background-color: skyblue;
        }
    </style>
</head>

<body>
    <span>span1</span>
    <span>span2</span>

    <div>div</div>
    <p>pppppppppppppp</p>
</body>

</html>
```

![](img/.jpg)

## 1.6 ����Ԫ�ؾ����ͱ�׼����������ʹ��

Ϊ��Լ������Ԫ��λ�ã�������ҳ����һ���ȡ�Ĳ����ǣ�

**���ñ�׼���ĸ�Ԫ����������λ�ã�֮���ڲ���Ԫ�ز�ȡ������������λ�á�������ҳ���ֵ�һ׼�ࡣ**

![](img/.jpg)

Ӧ�þ�����

![](img/.jpg)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>����Ԫ�ش����׼��������1</title>
    <style>
        .box {
            width: 1200px;
            height: 460px;
            background-color: black;
            margin: 0 auto;
        }

        .left {
            float: left;
            width: 230px;
            height: 460px;
            background-color: pink;
        }

        .right {
            float: left;
            width: 970px;
            height: 460px;
            background-color: skyblue;
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="left">���</div>
        <div class="right">�Ҳ�</div>
    </div>
</body>

</html>
```

![](img/.jpg)

---

![](img/.jpg)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>����Ԫ�ش����׼��������2</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        /* ȡ�� li ǰ��Բ�� */
        li {
            list-style: none;
        }

        .box {
            width: 1226px;
            height: 285px;
            background-color: pink;
            /* �ô����ˮƽ���� */
            margin: 0 auto;
        }

        .box li {
            width: 296px;
            height: 285px;
            background-color: gray;
            float: left;
            /* ÿ��С�������ұ߾���� */
            margin-right: 14px;
        }

        /* ȡ�����һ��С���ӵ�����߾� */
        /* �������д .box .last Ҫע��Ȩ�ص�����  20 */
        .box .last {
            margin-right: 0;
        }
    </style>
</head>

<body>
    <ul class="box">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li class="last">4</li>
    </ul>
</body>

</html>
```

![](img/.jpg)

---

![](img/.jpg)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>����������ϰ3</title>
    <style>
        .box {
            width: 1226px;
            height: 615px;
            background-color: pink;
            margin: 0 auto;
        }

        .left {
            float: left;
            width: 234px;
            height: 615px;
            background-color: gray;
        }

        .right {
            float: left;
            width: 992px;
            height: 615px;
            background-color: skyblue;
        }

        .right>div {
            float: left;
            width: 234px;
            height: 300px;
            background-color: pink;
            margin-left: 14px;
            margin-bottom: 14px;
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="left">������</div>
        <div class="right">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
        </div>
    </div>
</body>

</html>
```

![](img/.jpg)

![](img/204568.png)

# ����������ҳ����

## 2.1 ��ʶ������ҳ����

![](img/.jpg)

![](img/.jpg)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>������ҳ����</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        li {
            list-style: none;
        }

        .top {
            height: 50px;
            background-color: gray;
        }

        .banner {
            width: 980px;
            height: 150px;
            background-color: gray;
            margin: 10px auto;
        }

        .box {
            width: 980px;
            margin: 0 auto;
            height: 300px;
            background-color: pink;
        }

        .box li {
            float: left;
            width: 237px;
            height: 300px;
            background-color: gray;
            margin-right: 10px;
        }

        .box .last {
            margin-right: 0;
        }

        /* ֻҪ��ͨ���ĺ��ӣ��������һ��������Ҫָ����� */
        .footer {
            height: 200px;
            background-color: gray;
            margin-top: 10px;
        }
    </style>
</head>

<body>
    <div class="top">top</div>
    <div class="banner">banner</div>
    <div class="box">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li class="last">4</li>
        </ul>
    </div>
    <div class="footer">footer</div>
</body>

</html>
```

![](img/.jpg)

## 2.2 ��������ע���

**��1�������ͱ�׼���ĸ����Ӵ���**

���ñ�׼���ĸ�Ԫ����������λ�ã�֮���ڲ���Ԫ�ز�ȡ������������λ�á�

**��2��һ��Ԫ�ظ����ˣ�������������ֵ�Ԫ��ҲҪ����**

һ�����������ж���Ӻ��ӣ��������һ�����Ӹ����ˣ���ô�����ֵ�ҲӦ�ø������Է�ֹ�������⡣

�����ĺ���ֻ��Ӱ�측�����Ӻ���ı�׼��������Ӱ��ǰ��ı�׼����

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>����ע���</title>
    <style>
        /* ���һ����Ԫ�ظ����ˣ�������������Ҳ������������֤��Щ��Ԫ��һ����ʾ */
        .box {
            width: 900px;
            height: 300px;
            background-color: black;
            margin: 0 auto;
        }

        .damao {
            float: left;
            width: 200px;
            height: 200px;
            background-color: palevioletred;
        }

        .ermao {
            float: left;
            width: 200px;
            height: 150px;
            background-color: palegreen;
        }

        .sanmao {
            float: left;
            width: 300px;
            height: 240px;
            background-color: skyblue;
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="damao">��ë</div>		<!-- float: left; -->
        <div class="ermao">��ë</div>		<!-- float: left; -->
        <div class="sanmao">��ë</div>	<!-- float: left; -->
    </div>
</body>

</html>
```

![](img/.jpg)

---

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>����ע���</title>
    <style>
        /* �����ĺ���ֻ��Ӱ�측�����Ӻ���ı�׼��������Ӱ��ǰ��ı�׼���� */
        /* ��ëΪ��׼�������Դ�ë��ռ�������ڵ�һ�У�����Ķ�ë���㸡��Ҳ�����ܵ���ë�Ϸ���*/
        .box {
            width: 900px;
            height: 300px;
            background-color: black;
            margin: 0 auto;
        }

        .damao {
            /* float: left; */
            width: 200px;
            height: 200px;
            background-color: palevioletred;
        }

        .ermao {
            float: left;
            width: 200px;
            height: 150px;
            background-color: palegreen;
        }

        .sanmao {
            float: left;
            width: 300px;
            height: 240px;
            background-color: skyblue;
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="damao">��ë</div>		<!-- ��׼�� -->
        <div class="ermao">��ë</div>		<!-- float: left; -->
        <div class="sanmao">��ë</div>	<!-- float: left; -->
    </div>
</body>

</html>
```

![](img/.jpg)

---

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>����ע���</title>
    <style>
        /* �����ĺ���ֻ��Ӱ�측�����Ӻ���ı�׼��������Ӱ��ǰ��ı�׼���� */
        .box {
            width: 900px;
            height: 300px;
            background-color: black;
            margin: 0 auto;
        }

        .damao {
            float: left;
            width: 200px;
            height: 200px;
            background-color: palevioletred;
        }

        .ermao {
            /* float: left; */
            width: 200px;
            height: 150px;
            background-color: palegreen;
        }

        .sanmao {
            float: left;
            width: 300px;
            height: 240px;
            background-color: skyblue;
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="damao">��ë</div>		<!-- float: left; -->
        <div class="ermao">��ë</div>		<!-- ��׼�� -->
        <div class="sanmao">��ë</div>	<!-- float: left; -->
    </div>
</body>

</html>
```

![](img/.jpg)

���ڴ�ë�Ǹ����ģ�����ԭ����ë��λ�û�ճ�������ʱ��ë�ͻ����ϲ����λ�����ڶ�ë�߶�С�ڴ�ë�����Զ�ë����ë��ס�ˣ�����Ϊ��ë�Ǳ�׼�������Զ�ë��ռ�����ڵ�һ�У����Ժ��渡������ë��ֻ���ڶ�ë�ĵײ�֮�£������ڴ�ëҲ�Ǹ����ģ�������ë�ͻ�����ڴ�ë�Ҳࡣ

![](img/.jpg)

# �����������

## 3.1 ˼����

����ǰ�渡��Ԫ����һ����׼���ĸ�Ԫ�أ�������һ����ͬ���ص㣬�����и߶ȵġ�

���ǣ����еĸ����Ӷ������и߶���

�𰸣���һ�������磬һ����Ʒ�б�����ʱ�ڵĲ�ͬ����Ʒ����Ҳ��ͬ������ĺ��Ӵ�СҲ����֮�ı䣬��ôֱ�ӹ̶����Ӹ߶ȵ���ʽ��Ȼ���ǲ��еġ��ٱ��磬����֮��ĺ��ӣ���ͬ�����������ǲ���ͬ�ģ���ô��Ȼ����Ҳ����ֱ�ӹ̶��߶ȡ�

�����е�״̬�����Ӻ��ӳſ����ס��ж��ٺ��ӣ��Ҹ����Ӿ��ж�ߡ�

���ǲ��������Ӹ߶Ȼ���������

�𰸣��ᣡ���з�������������������

## 3.2 Ϊʲô��Ҫ���������

���ڸ������Ӻܶ�����²�������߶ȣ������Ӻ��Ӹ����ֲ�ռ��λ�ã���󸸼����Ӹ߶�Ϊ 0 ʱ���ͻ�Ӱ������ı�׼�����ӡ�

![](img/.png)

- ���ڸ���Ԫ�ز���ռ��ԭ�ĵ�����λ�ã���������Ժ����Ԫ���Ű����Ӱ��

- ��ʱһ���������������������ӣ���ô���־ͻᷢ�����ػ��ң�

## 3.3 �����������

- ��������ı������������Ԫ����ɵ�Ӱ��
- ��������ӱ����и߶ȣ�����Ҫ�������
- �������֮�󣬸����ͻ���ݸ������Ӻ����Զ����߶ȡ��������˸߶ȣ��Ͳ���Ӱ������ı�׼����

## 3.4 �������

�﷨��

```css
ѡ���� { clear: ����ֵ; }
```

| ����ֵ | ����                                       |
| ------ | ------------------------------------------ |
| left   | ����������и���Ԫ�أ������ม����Ӱ�죩 |
| right  | �������Ҳ��и���Ԫ�أ�����Ҳม����Ӱ�죩 |
| both   | ͬʱ����������ม����Ӱ��                 |

����ʵ�ʹ����У�����ֻ�� `clear: both;`

��������Ĳ����ǣ��պϸ�����

## 3.5 �����������

1. �����ǩ��Ҳ��Ϊ��ǽ������ W3C �Ƽ���������(ʵ�ʿ������Ƽ�)
2. ������� overflow ����
3. ������� after αԪ��
4. ������� ˫αԪ��

## 3.6 ������� ���� �����ǩ��

�����ǩ��Ҳ��Ϊ��ǽ������ W3C �Ƽ���������

�����ǩ�����ڸ���Ԫ��ĩβ���һ���յı�ǩ������ `<div style="clear: both"></div>`������������ǩ���� `<br>` �ȣ���

- �ŵ㣺 ͨ���׶�����д����
- ȱ�㣺 ������������ı�ǩ���ṹ���ϲ�

ע�⣺ Ҫ������µĿձ�ǩ������**�鼶Ԫ��**��

�ܽ᣺

- ������������ǣ�

��������ı������������Ԫ�������׼����ɵ�Ӱ�졣

- ������������ǣ�

�պϸ�����ֻ�ø����ڸ������ڲ�Ӱ�죬��Ӱ�츸����������������ӡ�

- �����ǩ����

**��ǽ�������������һ����������Ԫ�غ������һ������ձ�ǩ���鼶��ǩ����������������ʽ��**

ʵ�ʹ������ܻ����������ǲ����á�

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>�������֮�����ǩ��</title>
    <style>
        .box {
            width: 800px;
            border: 3px solid black;
            margin: 0 auto;
        }

        .damao {
            float: left;
            width: 300px;
            height: 200px;
            background-color: salmon;
        }

        .ermao {
            float: left;
            width: 200px;
            height: 200px;
            background-color: skyblue;
        }

        .footer {
            height: 200px;
            background-color: gray;
        }

        .clear {
            clear: both;
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="damao">��ë</div>
        <div class="ermao">��ë</div>
        <div class="ermao">��ë</div>
        <div class="ermao">��ë</div>
        <div class="ermao">��ë</div>
        <div class="clear"></div>
        <!-- ��������ĺ���Ҫ������ǿ鼶Ԫ�ز���������Ԫ�� -->
        <!-- <span class="clear"></span> -->
    </div>
    <div class="footer"></div>

</body>

</html>
```

![](img/.jpg)

## 3.7 ������� ���� ������� overflow

���Ը�������� `overflow` ���ԣ���������ֵ����Ϊ `hidden`�� `auto` �� `scroll`��

�Ӳ��̣���֮����ע���Ǹ���Ԫ����Ӵ��롣

- �ŵ㣺������
- ȱ�㣺�޷���ʾ����Ĳ���

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>overflow�������</title>
    <style>
        .box {
            /* ������� */
            overflow: hidden;
            width: 800px;
            border: 1px solid blue;
            margin: 0 auto;
        }

        .damao {
            float: left;
            width: 300px;
            height: 200px;
            background-color: purple;
        }

        .ermao {
            float: left;
            width: 200px;
            height: 200px;
            background-color: pink;
        }

        .footer {
            height: 200px;
            background-color: black;
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="damao">��ë</div>
        <div class="ermao">��ë</div>
    </div>
    <div class="footer"></div>

</body>

</html>
```

![](img/.jpg)

## 3.8 ������� ���� :after αԪ�ط�

`:after` ��ʽ�Ƕ����ǩ���������棬Ҳ�Ǹ���Ԫ����Ӵ��롣

ԭ���Զ��ڸ��������ĩβ���һ�� ���ں��ӣ����ǽ���ת��Ϊ �鼶���ӣ��ͼ��ʵ���˶����ǩ����

```css
.clearfix:after {
	content: "";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
}

.clearfix { 
    /* IE6��7 ר�� */
	*zoom: 1;
}
```

ע�⣺������һ����Ҫ�� clearfix�����ǻ����Ƽ���ôд����߿ɶ��ԡ�

- �ŵ㣺û�����ӱ�ǩ���ṹ����
- ȱ�㣺��Ҫ�����չ˵Ͱ汾�����
- ������վ�� �ٶȡ��Ա��������׵�

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>αԪ���������</title>
    <style>
        .clearfix:after {
            content: "";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
        }

        .clearfix {
            /* IE6��7 ר�� */
            *zoom: 1;
        }

        .box {
            width: 800px;
            border: 1px solid blue;
            margin: 0 auto;
        }

        .damao {
            float: left;
            width: 300px;
            height: 200px;
            background-color: purple;
        }

        .ermao {
            float: left;
            width: 200px;
            height: 200px;
            background-color: pink;
        }

        .footer {
            height: 200px;
            background-color: black;
        }
    </style>
</head>

<body>
    <div class="box clearfix">
        <div class="damao">��ë</div>
        <div class="ermao">��ë</div>
    </div>
    <div class="footer"></div>

</body>

</html>
```

![](img/-164230099450328.jpg)

## 3.9 ������� ���� ˫αԪ���������

�����ǩ���������棬Ҳ�Ǹ�����Ԫ����Ӵ��롣

ԭ���Զ��ڸ����������������������ں��ӣ���������ת��Ϊ ��񣬼��ʵ���˶����ǩ����

```css
.clearfix:before,
.clearfix:after {
	content: "";
	display: table;
}

.clearfix:after {
	clear: both;
}

.clearfix {
    /* IE6��7 ר�� */
	*zoom:1;
}
```

ע�⣺������һ����Ҫ�� clearfix�����ǻ����Ƽ���ôд����߿ɶ��ԡ�

- �ŵ㣺��������
- ȱ�㣺��Ҫ�����չ˵Ͱ汾�����

- ������վ��С�ס���Ѷ��

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>˫αԪ���������</title>
    <style>
        .clearfix:before,
        .clearfix:after {
            content: "";
            display: table;
        }

        .clearfix:after {
            clear: both;
        }

        .clearfix {
            *zoom: 1;
        }

        .box {
            width: 800px;
            border: 1px solid blue;
            margin: 0 auto;
        }

        .damao {
            float: left;
            width: 300px;
            height: 200px;
            background-color: purple;
        }

        .ermao {
            float: left;
            width: 200px;
            height: 200px;
            background-color: pink;
        }

        .footer {
            height: 200px;
            background-color: black;
        }
    </style>
</head>

<body>
    <div class="box clearfix">
        <div class="damao">��ë</div>
        <div class="ermao">��ë</div>
    </div>
    <div class="footer"></div>

</body>

</html>
```

![](img/-164230099808930.jpg)

## 3.10 ��������ܽ�

Ϊʲô��Ҫ���������

- ����û�߶�
- �Ӻ��Ӹ�����
- Ӱ�����沼���ˣ����Ǿ�Ӧ�����������

| ��������ķ�ʽ         | �ŵ�               | ȱ��                                 |
| ---------------------- | ------------------ | ------------------------------------ |
| �����ǩ������ǽ����   | ͨ���׶�����д���� | ������������ı�ǩ���ṹ���ϲ�     |
| ���� overflow: hidden; | ��д��           | �������                             |
| ���� after αԪ��      | �ṹ���廯��ȷ     | ���� IE6~7 ��֧�� :after������������ |
| ����˫αԪ��           | �ṹ���廯��ȷ     | ���� IE6~7 ��֧�� :after������������ |

> after αԪ�ء�˫αԪ�� ���������ԭ���ں���� CSS3 �н��͡�