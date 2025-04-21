<!--
 * @Description: 
 * @Author: ljl
 * @Date: 2025-04-17 14:47:35
 * @LastEditors: rendc
 * @LastEditTime: 2025-04-17 19:53:29
-->
# ��CSS����ģ�͡�

ҳ�沼��Ҫѧϰ**�������**��**����ģ��**��**����**��**��λ**��

ѧϰ�ú���ģ���ܷǳ��õİ������ǲ���ҳ�档

# һ����͸��ҳ���ֵı���

��ҳ���ֹ��̣�

- ��׼������ص���ҳԪ�أ���ҳԪ�ػ������Ǻ���

- ���� CSS ���úú�����ʽ��Ȼ��ڷŵ���Ӧλ��

- ����������װ����

��ҳ**���ֵĺ���**���ʣ� ����**���� CSS �ں��ӣ�**

# ��������ģ�ͣ�Box Model�����

��ν����ģ�ͣ����ǰ� HTML ҳ���еĲ���Ԫ�ؿ�����һ�����εĺ��ӣ�Ҳ����һ��ʢ**װ���ݵ�����**��

CSS ����ģ�ͱ�������һ�����ӣ���װ��Χ�� HTML Ԫ�أ���������`��߾�`��`�߿�`��`�ڱ߾�`���� `����`��

![](img/image3.png)
![](img/image4.png)

# �����߿�border��

`border` ��������Ԫ�صı߿�

�߿�����������ɣ�`�߿��ȣ���ϸ��`��`�߿���ʽ`��`�߿���ɫ`��

**�﷨��**

```css
border: border-width || border-style || border-color
```

| ����           | ����                      |
| -------------- | ------------------------- |
| `border-width` | ����߿��ϸ����λ�� `px` |
| `border-style` | �߿����ʽ                |
| `border-color` | �߿���ɫ                  |


�߿���ʽ border-style ������������ֵ��

- `none`��û�б߿򣬼��������б߿�Ŀ�ȣ�Ĭ��ֵ��
- `solid`���߿�Ϊ��ʵ�ߣ���Ϊ���õģ�
- `dashed`���߿�Ϊ����
- `dotted`���߿�Ϊ����

**�߿��д��**

```css
border: 1px solid red; 	/* û��˳�� */
```

**�߿�ֿ�д����**

```css
border-top: 1px solid red; 		/* ֻ�趨�ϱ߿�����ͬ�� */
```

**������**

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>����ģ��֮�߿�ĸ���д��</title>
    <style>
        div {
            width: 300px;
            height: 200px;
            /* 
            -- border-width �߿�Ĵ�ϸ��һ�������ʹ�� px --
            border-width: 5px;
            -- border-width �߿����ʽ solid ʵ�߱߿� dashed ���߱߿� dotted ���߱߿� --
            border-style: solid;
            background-color: pink;
            */
            /* �߿�ĸ���д�� ��д�� */
            border: 10px dotted skyblue;
            /* ���� CSS ����Խ��ϱ߿򵥶����� */
            border-top: 10px dotted pink;
            background-color: black;
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

<img src="img/image5.png" style="width:50%;" />

## 3.1 ����ϸ�߱߿�

�����������Ԫ�����ڵı߿���ص���һ�𣬳��ֳ��Ӵֵ�Ч����

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>���߿򡪡�����С˵���а�</title>
    <style>
        table {
            width: 500px;
            height: 249px;
        }

        th {
            height: 35px;
        }

        table,
        td,
        th {
            border: 1px solid black;
            /* �ϲ����ڵı߿� */
            /* border-collapse: collapse; */
            font-size: 14px;
            text-align: center;
        }
    </style>
</head>

<body>
    <table align="center" cellspacing="0">
        <thead>
            <tr>
                <th>����</th>
                <th>�ؼ���</th>
                <th>����</th>
                <th>��������</th>
                <th>�������</th>
                <th>�������</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>����</td>
                <td><img src="down.jpg"></td>
                <td>456</td>
                <td>123</td>
                <td> <a href="#">����</a> <a href="#">ͼƬ</a> <a href="#">�ٿ�</a> </td>
            </tr>

            <tr>
                <td>1</td>
                <td>����</td>
                <td><img src="down.jpg"></td>
                <td>456</td>
                <td>123</td>
                <td> <a href="#">����</a> <a href="#">ͼƬ</a> <a href="#">�ٿ�</a> </td>
            </tr>
            <tr>
                <td>3</td>
                <td>���μ�</td>
                <td><img src="up.jpg"></td>
                <td>456</td>
                <td>123</td>
                <td> <a href="#">����</a> <a href="#">ͼƬ</a> <a href="#">�ٿ�</a> </td>
            </tr>
            <tr>
                <td>1</td>
                <td>����</td>
                <td><img src="down.jpg"></td>
                <td>456</td>
                <td>123</td>
                <td> <a href="#">����</a> <a href="#">ͼƬ</a> <a href="#">�ٿ�</a> </td>
            </tr>
            <tr>
                <td>1</td>
                <td>����</td>
                <td><img src="down.jpg"></td>
                <td>456</td>
                <td>123</td>
                <td> <a href="#">����</a> <a href="#">ͼƬ</a> <a href="#">�ٿ�</a> </td>
            </tr>
            <tr>
                <td>1</td>
                <td>����</td>
                <td><img src="down.jpg"></td>
                <td>456</td>
                <td>123</td>
                <td> <a href="#">����</a> <a href="#">ͼƬ</a> <a href="#">�ٿ�</a> </td>
            </tr>
        </tbody>
    </table>
</body>

</html>
```

![](img/image6.png)

`border-collapse` ���Կ�����������Ʊ��߿�ķ�ʽ��

���������ڵ�Ԫ��ı߿�

**�﷨��**

```css
border-collapse: collapse;
```

- `collapse` �����Ǻϲ�����˼
- `border-collapse: collapse;` ��ʾ���ڱ߿�ϲ���һ��

```css
table,
td,
th {
    border: 1px solid black;
    /* �ϲ����ڵı߿� */
    border-collapse: collapse;
    font-size: 14px;
    text-align: center;
}
```

## 3.2 �߿��Ӱ�����ʵ�ʴ�С

�߿��������Ӻ��ӵ�ʵ�������С��������������ַ��������

- �������Ӵ�С��ʱ�򣬲����߿�
- ���������ʱ������˱߿�����Ҫ width��height ��ȥ�߿��ȣ�ע������߻���˫�ߣ�

> ע�⣺����ʵ�������С = ��������С + �ڱ߾��С + �߿��С + ��߾��С

������

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>�߿��Ӱ����ӵ�ʵ�ʴ�С</title>
    <style>
        /* ������Ҫһ�� 200*200 �ĺ���, ������������� 10 ���صĺ�ɫ�߿� */
        div {
            width: 180px;
            height: 180px;
            background-color: pink;
            border: 10px solid black;
            /* ���� */
            margin: 0 auto;
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

![](img/2.gif)

# �ġ��ڱ߾ࣨpadding��

padding ������������**�ڱ߾�**����**�߿�������֮��ľ���**��

| ����             | ����     |
| ---------------- | -------- |
| `padding-left`   | ���ڱ߾� |
| `padding-rigth`  | ���ڱ߾� |
| `padding-top`    | ���ڱ߾� |
| `padding-bottom` | ���ڱ߾� |

padding ���ԣ���д���ԣ�������һ���ĸ�ֵ��

| ֵ�ĸ���                       | �����˼                                                     |
| ------------------------------ | ------------------------------------------------------------ |
| `padding: 5px;`                | 1 ��ֵ�������������Ҷ��� 5 �����ڱ߾�                        |
| `padding: 5px 10px;`           | 2 ��ֵ�����������ڱ߾��� 5 ���أ������ڱ߾��� 10 ����        |
| `padding: 5px 10px 20px;`      | 3 ��ֵ���������ڱ߾� 5 ���أ������ڱ߾� 10 ���أ����ڱ߾� 20 ���� |
| `padding: 5px 10px 20px 30px;` | 4 ��ֵ������ 5 ���أ��� 10 ���أ��� 20 ���أ����� 30 ���أ�˳ʱ�룩 |

���� 4 �����������ʵ�ʿ�������������

�����Ǹ�����ָ�� `padding` ֵ֮�󣬷����� 2 �����飺

- ���ݺͱ߿����˾��룬������ڱ߾�
- `padding` Ӱ���˺���ʵ�������С

Ҳ����˵����������Ѿ����˿�Ⱥ͸߶ȣ���ʱ��ָ���ڱ߾࣬��Ŵ��������

���������

- �����֤���Ӹ�Ч��ͼ��С����һ�£����� width��height ��ȥ��������ڱ߾��С����
- ������ӱ���û��ָ�� width��height ���ԣ����ʱ padding ����ſ����������С

��padding �Ŵ���ӡ�

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>padding �Ŵ����</title>
    <style>
        div {
            background-color: #000;
            width: 100px;
            height: 100px;
            /* padding: 30px; */
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

<img src="img/image7.png" style="width:50%;" />

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>padding �Ŵ����</title>
    <style>
        div {
            background-color: #000;
            width: 100px;
            height: 100px;
            padding: 30px;
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

<img src="img/image8.png" style="width:50%;" />

������

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>����ģ��֮�ڱ߾�</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            /*
            padding-top: 5px;
            padding-rigth: 10px;
            padding-bottom: 20px;
            padding-rigth: 30px;
             */
            /* �ڱ߾ิ��д������д�� �ϡ��ҡ��¡��� */
            padding: 5px 10px 20px 30px;
            /* �����ڶԺ���ָ���߿��padding ��Ŵ���� */
            /* ���ԣ���ʱ���Ӵ�СΪ��240*225 */
            /* ע�⣺����ġ����Ӵ�С��ָ���Ǻ�����ռ�ݵĴ�С��������ʵ�� width �� height ������ 200px */
        }
    </style>
</head>

<body>
    <div>
        ���������� content������������ content������������ content
    </div>
</body>

</html>
```

padding ��ʹ�ü��ɣ�

![](img/image9.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>���˵�������-paddingӰ����ӵĺô�</title>
    <style>
        .nav {
            height: 41px;
            border-top: 3px solid #ff8500;
            border-bottom: 1px solid #edeef0;
            background-color: #fcfcfc;
            line-height: 41px;
        }

        .nav a {
            /* a ��������Ԫ�أ�Ҫָ���߶ȣ�����Ҫת��Ϊ���ڿ�Ԫ�� */
            display: inline-block;
            height: 41px;
            /* û��ָ����ȣ���ʱ���� padding ��ʹ��������֮��ľ�����ͬ */
            padding: 0 20px;
            font-size: 12px;
            color: #4c4c4c;
            text-decoration: none;
        }

        .nav a:hover {
            background-color: #eee;
            color: #ff8500;
        }
    </style>
</head>

<body>
    <div class="nav">
        <a href="#">��Ϊ��ҳ</a>
        <a href="#">�ֻ�������</a>
        <a href="#">�ƶ��ͻ���</a>
        <a href="#">��¼</a>
        <a href="#">΢��</a>
        <a href="#">����</a>
        <a href="#">����</a>
        <a href="#">��վ����</a>
    </div>
</body>

</html>
```

![](img/3.gif)

```html
<!doctype html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>����С�ײ��������-paddingӰ����Ӵ�С����</title>
    <style>
        a {
            /* 1���� a ת��Ϊ�鼶Ԫ�� */
            display: block;
            /* 230 - 30��padding-left��= 200 */
            width: 200px;
            height: 40px;
            background-color: #55585a;
            font-size: 14px;
            color: #fff;
            text-decoration: none;
            padding-left: 30px;
            /* һ��С���ɣ��������ִ�ֱ���еĴ��룬�����ֵ��иߵ��ں��ӵĸ߶� */
            line-height: 40px;
        }

        /* 2����꾭�����ӱ任������ɫ */
        a:hover {
            background-color: #ff6700;
        }
    </style>
</head>

<body>
    <a href="#">�ֻ� �绰��</a>
    <a href="#">���� ����</a>
    <a href="#">�ʼǱ� ƽ��</a>
    <a href="#">���� ����</a>
    <a href="#">���� ·����</a>
    <a href="#">���� ��ͯ</a>
    <a href="#">���� ����</a>
</body>

</html>
```

<img src="img/4.gif" style="width:40%;" />

# �塢��߾ࣨmargin��

`margin` ������������**��߾�**��������**���Ӻͺ���֮��ľ���**��

| ����            | ����     |
| --------------- | -------- |
| `margin-left`   | ����߾� |
| `margin-right`  | ����߾� |
| `margin-top`    | ����߾� |
| `margin-bottom` | ����߾� |

`margin` ��д��ʽ���������� `padding` ��ȫһ�¡�

��߾����Ӧ�ã�

��߾������**�鼶����ˮƽ����**�����Ǳ�����������������

- ���ӱ���ָ���˿�� `width`
- �������ҵ���߾඼����Ϊ `auto`

```css
.header { width: 960px; margin: 0 auto;}
```

������д�����������ֶ����ԣ�

- `margin-left: auto; margin-right: auto;`
- `margin: auto;`
- `margin: 0 auto;`

ע�⣺���Ϸ������ÿ鼶Ԫ��ˮƽ���У�����Ԫ�ػ������ڿ�Ԫ��ˮƽ���и��丸Ԫ����� `text-align: center` ���ɡ�

������

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>����ģ��֮��߾�margin</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
        }

        /* 
        .one {
            margin-bottom: 20px;
        } 
        */

        .two {
            margin-top: 20px;
        }
    </style>
</head>

<body>
    <div class="one">1</div>
    <div class="two">2</div>
</body>

</html>
```

<img src="img/image10.png" style="width:30%;" />

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>�鼶����ˮƽ���ж���</title>
    <style>
        .header {
            width: 900px;
            height: 200px;
            background-color: pink;
            /* ���� 100 ���� auto */
            margin: 100px auto;
        }
    </style>
</head>

<body>
    <div class="header"></div>
</body>

</html>
```

![](img/image11.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>����Ԫ�ء����ڿ�Ԫ��ˮƽ���ж���</title>
    <style>
        .header {
            width: 900px;
            height: 200px;
            background-color: pink;
            margin: 100px auto;
            /* ����Ԫ�ػ������ڿ�Ԫ��ˮƽ���и��丸Ԫ����� text-align: center ���� */
            text-align: center;
        }

        /* �����ǲ������õ� */
        /* 
        span {
            margin: 0 auto;
        } 
        */
    </style>
</head>

<body>
    <div class="header">
        <span>���������</span>
    </div>
    <div class="header">
        <img src="../image/icon.png" alt="">
    </div>
</body>

</html>
```

![](img/image12.png)

## 5.1 ��߾�ϲ�

ʹ�� `margin` �����Ԫ�صĴ�ֱ��߾�ʱ�����ܻ������߾�ĺϲ���

ע�⣺**�ڱ߾�û�кϲ�һ˵�������ĺ��Ӳ��ᷢ����߾�ϲ���**

��Ҫ���������:

- **���ڿ�Ԫ�ش�ֱ��߾�ĺϲ�**
- **Ƕ�׿�Ԫ�ش�ֱ��߾������**

### 5.1.1 ���ڿ�Ԫ�ش�ֱ��߾�ĺϲ�

���������ڵ�������Ԫ�أ��ֵܹ�ϵ������ʱ����������Ԫ��������߾� `margin-bottom`�������Ԫ��������߾� `margin-top` ��������֮��Ĵ�ֱ��಻�� `margin-bottom` �� `margin-top` ֮�͡�����ȡ����ֵ�е�**�ϴ���**���������󱻳�Ϊ���ڿ�Ԫ�ش�ֱ��߾�ĺϲ���׼ȷ������Ӧ���ǣ�**�����߾า��С��**����

![](img/image13.png)

**���������**

����ֻ��һ��������� `margin` ֵ��

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>���ڿ�Ԫ�ش�ֱ��߾�ĺϲ�</title>
    <style>
        .one {
            width: 200px;
            height: 200px;
            background-color: hotpink;
            margin-bottom: 100px;
            margin-right: 100%;
        }

        .two {
            width: 200px;
            height: 200px;
            background-color: skyblue;
            margin-top: 100px;
            margin-right: 100%;
        }
    </style>
</head>

<body>
    <div class="one">one</div>
    <div class="two">two</div>
</body>

</html>
```

![](img/5.gif)

### 5.1.2 Ƕ�׿�Ԫ�ش�ֱ��߾������

��������Ƕ�׹�ϵ�����ӹ�ϵ���Ŀ�Ԫ�أ�����Ԫ��������߾࣬��ʱ��Ԫ�ػ����ݽϴ����߾�ֵ��**��߾�Ч����ʾ�ڸ�Ԫ��֮��**����

![](img/700165.png)

![](img/.jpg)

**���������**

- ����Ϊ��Ԫ�ض����ϱ߿򣨱��磺���Ը�һ��͸�� transparent �߿�
- ����Ϊ��Ԫ�ض������ڱ߾�
- ����Ϊ��Ԫ����� `overflow: hidden`

�����������������縡�����̶������Զ�λ�ĺ��Ӳ������������⣬�����������ܽᡣ

������

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>��߾�ϲ�-Ƕ�׿鼶Ԫ�ش�ֱ��߾�����</title>
    <style>
        .father {
            width: 400px;
            height: 400px;
            background-color: black;
            margin-top: 50px;
        }

        .son {
            width: 200px;
            height: 200px;
            background-color: pink;
            margin-top: 100px;
        }
    </style>
</head>

<body>
    <div class="father">
        <div class="son"></div>
    </div>
</body>

</html>
```

![](img/.gif)

---

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>��߾�ϲ�-Ƕ�׿鼶Ԫ�ش�ֱ��߾�����</title>
    <style>
        .father {
            width: 400px;
            height: 400px;
            background-color: black;
            margin-top: 50px;
            /* border: 1px solid transparent; */
            overflow: hidden;
        }

        .son {
            width: 200px;
            height: 200px;
            background-color: pink;
            margin-top: 100px;
        }
    </style>
</head>

<body>
    <div class="father">
        <div class="son"></div>
    </div>
</body>

</html>
```

<img src="img/-164227252890423.jpg" style="width:40%;" />

**ע�⣺��߾�ĺϲ������ú��Ӳ���ҳ���ʱ���Ǿ��������ģ�**

# �����������߾�

��ҳԪ�غܶ඼����Ĭ�ϵ�����߾࣬���Ҳ�ͬ�����Ĭ�ϵ�Ҳ��һ�¡���������ڲ���ǰ������Ҫ�������ҳԪ�ص�����߾ࡣ

```css
* {
	padding:0; 	/* ����ڱ߾� */
	margin:0; 	/* �����߾� */
}
```

ע�⣺����Ԫ��Ϊ���չ˼����ԣ�����ֻ������������߾࣬��Ҫ������������߾ࣨĳЩʱ������Ԫ�ض���������߾಻��Ч��������ת��Ϊ�鼶�����ڿ�Ԫ�ؾͿ����ˡ�

# �ߡ�����

![](img/.jpg)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>�ۺϰ���-MI��Ʒģ��</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        body {
            background-color: #f5f5f5;
        }

        a {
            color: #333;
            text-decoration: none;
        }

        .box {
            width: 298px;
            height: 415px;
            background-color: #fff;
            /* �ÿ鼶�ĺ���ˮƽ���ж��� */
            margin: 100px auto;
        }

        .box img {
            /* ͼƬ�Ŀ�Ⱥ͸���һ���� */
            width: 100%;
        }

        .review {
            height: 70px;
            font-size: 14px;
            /* ��Ϊ�������û�� width ���ԣ����� padding ����ſ����ӵĿ�� */
            padding: 0 28px;
            /* ��Ϊ��������� height ���ԣ����� padding-top ��Ŵ���ӣ����������� margin-top */
            /* ��ʵ�� padding-top Ҳ���ԣ�������Ҫ�ֶ���ȥ top ֵ���鷳�Ҳ��淶 */
            margin-top: 30px;
        }

        .appraise {
            font-size: 12px;
            color: #b0b0b0;
            padding: 0 28px;
            margin-top: 20px;
        }

        .info {
            font-size: 14px;
            padding: 0 28px;
            margin-top: 15px;
        }

        .info h4 {
            display: inline-block;
            font-weight: 400;

        }

        .info span {
            color: #ff6700;
        }

        .info em {
            /* ����б */
            font-style: normal;
            color: #ebe4e0;
            margin: 0 6px 0 15px;
        }
    </style>
</head>

<body>
    <div class="box">
        <img src="images/img.jpg" alt="">
        <p class="review">���ţ�����岻����������˵���������׸���</p>
        <div class="appraise">������ 117384232 ������</div>
        <div class="info">
            <h4> <a href="#">Redmi AirDots��������...</a></h4>
            <!-- ����Ԫ�ؿ����� em ���� -->
            <em>|</em>
            <span> 99.9Ԫ</span>
        </div>
    </div>
</body>

</html>
```

<img src="img/.jpg" style="width:30%;" />

```html
<!doctype html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>�ۺϰ���-�챨ģ��</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        li {
            /* ȥ���б�ǰ��Բ�� */
            /* ֮���԰�������䵥��д������Ϊ����ҳ�涼��Ҫ�� li ��Բ��ȥ�� */
            list-style: none;
        }

        .box {
            width: 248px;
            height: 163px;
            border: 1px solid #ccc;
            margin: 100px auto;
        }

        .box h3 {
            height: 32px;
            border-bottom: 1px dotted #ccc;
            font-size: 14px;
            font-weight: 400;
            line-height: 32px;
            /* ���ڸú��Ӵ���һ���±߿�������������ʹ�� margin�������±߿�Ҳ��һͬ������
            �˴����� padding�����Ҵ˴�û������ width������ padding-left Ҳ����Ŵ���� */
            padding-left: 15px;
        }

        .box ul li a {
            font-size: 12px;
            color: #666;
            text-decoration: none;
        }

        .box ul li a:hover {
            text-decoration: underline;
        }

        .box ul li {
            height: 23px;
            line-height: 23px;
            padding-left: 20px;
        }

        .box ul {
            margin-top: 7px;
        }
    </style>
</head>

<body>
    <div class="box">
        <h3>Ʒ�Ź��챨</h3>
        <ul>
            <li><a href="#">���ػݡ��������5���룡</a></li>
            <li><a href="#">���ػݡ�ĸ�׽ڣ������������5�ۣ�</a></li>
            <li><a href="#">���ػݡ������۵�̨��99Ԫ��</a></li>
            <li><a href="#">���ػݡ�9.9Ԫ3D��ӡ��</a></li>
            <li><a href="#">���ػݡ��������ܿյ���ʡ1000Ԫ��</a></li>
        </ul>
    </div>
</body>

</html>
```

<img src="img/.gif" style="width:40%;" />

# �ˡ��ܽ�

### a������Ϊɶ�ò�ͬ���ӣ���ֻ���� div��

��ǩ����������ģ�����ĵط��ú���ı�ǩ������������ `h`�����ֶ������ `p`��

### b��Ϊɶ����ô��������

�������Ǹ�ÿ����������һ�����֣����Ը��õ��ҵ�������ӣ�ѡȡ���Ӹ����ף�����ά��Ҳ�����㡣

### c�������� margin ���� padding��

�󲿷�����������Ի��ã����߸�����ȱ�㣬���Ǹ���ʵ������������и��򵥵ķ���ʵ�֡�

һ����˵�����������֮��ͳһ�� margin��������߿�֮���� padding��

### d���Լ���û��˼·��

�����кܶ���ʵ�ַ�ʽ�����Կ�ʼ��ģ�´�ţ��д����Ȼ���������Լ��ķ��

���һ�������ø������ߣ�������Ļ���ʣ�PS �ȡ�