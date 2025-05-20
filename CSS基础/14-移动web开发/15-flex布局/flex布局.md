<!--
 * @Description: 
 * @Author: ljl
 * @Date: 2025-05-12 19:54:34
 * @LastEditors: rendc
 * @LastEditTime: 2025-05-14 15:05:14
-->
# ���ƶ�Web����֮flex���֡�

- [���ƶ�Web����֮flex���֡�](#�ƶ�web����֮flex����)
- [һ��flex��������](#һflex��������)
    - [1.1 ��ͳ������flex����](#11-��ͳ������flex����)
    - [1.2 ������](#12-������)
- [����flex����ԭ��](#��flex����ԭ��)
    - [2.1 ����ԭ��](#21-����ԭ��)
- [����flex���ָ��������](#��flex���ָ��������)
    - [3.1 ������������](#31-������������)
    - [3.2 flex-direction��������ķ���](#32-flex-direction��������ķ���)
    - [3.3 justify-content���������ϵ���Ԫ�����з�ʽ](#33-justify-content���������ϵ���Ԫ�����з�ʽ)
    - [3.4 flex-wrap������Ԫ���Ƿ���](#34-flex-wrap������Ԫ���Ƿ���)
    - [3.5 align-items���ò����ϵ���Ԫ�����з�ʽ�����У�](#35-align-items���ò����ϵ���Ԫ�����з�ʽ����)
    - [3.6 align-content ���ò����ϵ���Ԫ�ص����з�ʽ�����У�](#36-align-content-���ò����ϵ���Ԫ�ص����з�ʽ����)
    - [3.7 align-content��align-items����](#37-align-content��align-items����)
    - [3.8 flex-flow](#38-flex-flow)
- [�ġ�flex�������������](#��flex�������������)
    - [4.1 flex����](#41-flex����)
    - [4.2 align-self���������Լ��ڲ����ϵ����з�ʽ](#42-align-self���������Լ��ڲ����ϵ����з�ʽ)
    - [4.3 order���Զ�����Ŀ������˳��](#43-order���Զ�����Ŀ������˳��)
- [�塢Я������ҳ��������](#��Я������ҳ��������)
- [����Я������ҳ�����ص�ǿ��](#��Я������ҳ�����ص�ǿ��)
    - [6.1 ����ģ��](#61-����ģ��)
    - [6.2 ����](#62-����)
        - [6.2.1 ��������](#621-��������)
        - [6.2.2 ���ֽ���](#622-���ֽ���)


# һ��flex��������

## 1.1 ��ͳ������flex����

����ͳ���֡�

- �����Ժ�
- ���ַ���

- �����ԣ��������ƶ��˺ܺõĲ���

��flex���֡�

- �������㣬���ּ�Ϊ�򵥣��ƶ���Ӧ�úܹ㷺
- PC �������֧������ϲ�
- IE11 ����Ͱ汾��֧�ֻ������֧��

���飺

1. ����� PC ��ҳ�沼�֣����ǻ��ǽ���ʹ�ô�ͳ����
2. ������ƶ��˻��߲����Ǽ���������� PC ��ҳ�沼�֣��Ƽ�ʹ�� flex ���Բ���

## 1.2 ������

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>01-flex��������</title>
    <style>
        div {
            display: flex;
            width: 80%;
            height: 300px;
            background-color: pink;
        }

        div span {
            /* ���Բ����У����ں��ӵĿ�߿�ֱ�������ˣ���Ҳ�����ڰٷֱȲ��ֵĵط�֮һ */
            /* ��ȥ�˸��������ã��Լ��Ը���������������鷳 */
            width: 150px;
            height: 100px;
            background-color: black;
            margin-right: 5px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](mark-img/64fd881a1eef4c89a6fcb00097f3148b.png)

**�ȼ��ֲ�**

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>01-flex��������</title>
    <style>
        div {
            display: flex;
            width: 80%;
            height: 300px;
            background-color: pink;
            justify-content: space-around;
        }

        div span {
            /* ���Բ����У����ں��ӵĿ�߿�ֱ�������� */
            width: 150px;
            height: 100px;
            background-color: black;
            margin-right: 5px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](mark-img/23e4d8a8d2744e8eab0b5ec0b647a853.gif)

**ƽ����Ϊ���ȷ�**

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>01-flex��������</title>
    <style>
        div {
            display: flex;
            width: 80%;
            height: 300px;
            background-color: pink;
            justify-content: space-around;
        }

        div span {
            /* ���Բ����У����ں��ӵĿ�߿�ֱ�������� */
            /* width: 150px; */
            height: 100px;
            background-color: black;
            margin-right: 5px;
            flex: 1;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](mark-img/91471912c9304a67b5266502b67baec7.gif)

# ����flex����ԭ��

## 2.1 ����ԭ��

flex �� flexible Box ����д����Ϊ �����Բ��֡�������Ϊ��״ģ��**�ṩ���������**��**�κ�һ������������ָ��Ϊ flex ����**��

- ������Ϊ��������Ϊ flex �����Ժ���Ԫ�ص� float���������ܣ���clear������������ܣ��� vertical-align����ֱ���й��ܣ����Խ�ʧЧ��
- �������� = ���Բ��� = �����в��� = ���Ժв��� = flex ����

���� flex ���ֵ�Ԫ�أ���Ϊ flex ������flex container������� ��������������������Ԫ���Զ���Ϊ������Ա����Ϊ flex ��Ŀ��flex item������� ����Ŀ����

- ����������� div ���� flex ������
- ����������� span ���������� flex ��Ŀ
- ���������Ժ�������Ҳ������������

����������������ʱ��ͼʾ��

![](mark-img/7f22d8ac7852446f869984a7a5841eb6.png)

���ܽ� flex ����ԭ��

**����ͨ������������� flex ���ԣ��������Ӻ��ӵ�λ�ú����з�ʽ��**

# ����flex���ָ��������

## 3.1 ������������

������ 6 �������ǶԸ�Ԫ�����õ�

- `flex-direction`����������ķ���
- `justify-content`�����������ϵ���Ԫ�����з�ʽ
- `flex-wrap`��������Ԫ���Ƿ���
- `align-content`�����ò����ϵ���Ԫ�ص����з�ʽ�����У�
- `align-items`�����ò����ϵ���Ԫ�����з�ʽ�����У�
- `flex-flow`���������ԣ��൱��ͬʱ������ flex-direction �� flex-wrap

## 3.2 flex-direction��������ķ���

**��1�����������**

�� flex �����У��Ƿ�Ϊ����Ͳ�����������ͬ���Ľз��У��� �� �С�x�� �� y��

- Ĭ�����᷽����� x�� ����ˮƽ����
- Ĭ�ϲ��᷽����� y�� ����ˮƽ����

![](mark-img/fa87013b3a3b43c48256b2ed15b670e4.png)

**��2������ֵ**

`flex-direction` ���Ծ�������ķ��򣨼�����Ŀ�����з���

ע�⣺����Ͳ����ǻ�仯�ģ��Ϳ� flex-direction ����˭Ϊ���ᣬʣ�µľ��ǲ��ᡣ�����ǵ���Ԫ���Ǹ������������еġ�

| ����ֵ           | ˵��               |
| ---------------- | ------------------ |
| `row`            | �����ң�Ĭ��ֵ�� |
| `row-reverse`    | ���ҵ���           |
| `column`         | ���ϵ���           |
| `column-reverse` | ���µ���           |

��������

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>02-flex���᷽��</title>
    <style>
        div {
            /* ���������flex���� */
            display: flex;
            width: 800px;
            height: 300px;
            background-color: pink;
            /* Ĭ�ϵ������� x ��,��ô y ����ǲ���� */
            /* ���ǵ�Ԫ���Ǹ������������е� */
            flex-direction: row;
            /* ���˽ⷭת���� */
            /* flex-direction: row-reverse; */
            /* ���ǿ��԰����ǵ���������Ϊ y �� ��ô x ��ͳ��˲��� */
            /* flex-direction: column; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: purple;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](mark-img/e203d92f12b64482ba5ea5e99360ede1.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>02-flex���᷽��</title>
    <style>
        div {
            /* ���������flex���� */
            display: flex;
            width: 800px;
            height: 300px;
            background-color: pink;
            /* Ĭ�ϵ������� x ��,��ô y ����ǲ���� */
            /* ���ǵ�Ԫ���Ǹ������������е� */
            /* flex-direction: row; */
            /* ���˽ⷭת���� */
            flex-direction: row-reverse;
            /* ���ǿ��԰����ǵ���������Ϊ y �� ��ô x ��ͳ��˲��� */
            /* flex-direction: column; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: purple;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](mark-img/6765176e8adb4b9dac8117df043795fd.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>02-flex���᷽��</title>
    <style>
        div {
            /* ���������flex���� */
            display: flex;
            width: 800px;
            height: 300px;
            background-color: pink;
            /* Ĭ�ϵ������� x ��,��ô y ����ǲ���� */
            /* ���ǵ�Ԫ���Ǹ������������е� */
            /* flex-direction: row; */
            /* ���˽ⷭת���� */
            /* flex-direction: row-reverse; */
            /* ���ǿ��԰����ǵ���������Ϊ y �� ��ô x ��ͳ��˲��� */
            flex-direction: column;
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: purple;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](mark-img/4e52189e5aae4108805c8c027df4934c.png)

## 3.3 justify-content���������ϵ���Ԫ�����з�ʽ

`justify-content` ���Զ�������Ŀ�������ϵĶ��뷽ʽ

ע�⣺ʹ���������֮ǰһ��Ҫȷ�����������ĸ���

| ����ֵ          | ˵��                                             |
| --------------- | ------------------------------------------------ |
| `flex-start`    | ��ͷ����ʼ����������� x�ᣬ������ң�Ĭ��ֵ�� |
| `flex-end`      | ��β����ʼ����                                   |
| `center`        | ��������ж��루��������� x�� �� ˮƽ���У�     |
| `space-around`  | ƽ��ʣ��ռ�                                     |
| `space-between` | ������������ƽ��ʣ��ռ䣨��Ҫ��                 |

��������

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>03-flex���������ϵ���Ԫ�����з�ʽ1</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 300px;
            background-color: pink;
            /* Ĭ�ϵ������� x�� row */
            flex-direction: row;
            /* justify-content: ��������������Ԫ�ص����з�ʽ */
            /* ��ͷ����ʼ����������� x�ᣬ������ң�Ĭ��ֵ�� */
            justify-content: flex-start;
            /* ��β����ʼ���� */
            /* justify-content: flex-end; */
            /* ��������Ԫ�ؾ��ж��� */
            /* justify-content: center; */
            /* ƽ��ʣ��ռ� */
            /* justify-content: space-around; */
            /* ���������ߣ��ڷ���ʣ��Ŀռ� */
            /* justify-content: space-between; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
    </div>
</body>

</html>
```

![](mark-img/408e7c1570d44daa9bc4a62372d27baa.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>03-flex���������ϵ���Ԫ�����з�ʽ1</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 300px;
            background-color: pink;
            /* Ĭ�ϵ������� x�� row */
            flex-direction: row;
            /* justify-content: ��������������Ԫ�ص����з�ʽ */
            /* ��ͷ����ʼ����������� x�ᣬ������ң�Ĭ��ֵ�� */
            /* justify-content: flex-start; */
            /* ��β����ʼ���� */
            justify-content: flex-end;
            /* ��������Ԫ�ؾ��ж��� */
            /* justify-content: center; */
            /* ƽ��ʣ��ռ� */
            /* justify-content: space-around; */
            /* ���������ߣ��ڷ���ʣ��Ŀռ� */
            /* justify-content: space-between; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
    </div>
</body>

</html>
```

![](mark-img/201e75d13fc8475b84a23e10b5011609.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>03-flex���������ϵ���Ԫ�����з�ʽ1</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 300px;
            background-color: pink;
            /* Ĭ�ϵ������� x�� row */
            flex-direction: row;
            /* justify-content: ��������������Ԫ�ص����з�ʽ */
            /* ��ͷ����ʼ����������� x�ᣬ������ң�Ĭ��ֵ�� */
            /* justify-content: flex-start; */
            /* ��β����ʼ���� */
            /* justify-content: flex-end; */
            /* ��������Ԫ�ؾ��ж��� */
            justify-content: center;
            /* ƽ��ʣ��ռ� */
            /* justify-content: space-around; */
            /* ���������ߣ��ڷ���ʣ��Ŀռ� */
            /* justify-content: space-between; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
    </div>
</body>

</html>
```

![](mark-img/79b89bb112374435bad2705726e16aab.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>03-flex���������ϵ���Ԫ�����з�ʽ1</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 300px;
            background-color: pink;
            /* Ĭ�ϵ������� x�� row */
            flex-direction: row;
            /* justify-content: ��������������Ԫ�ص����з�ʽ */
            /* ��ͷ����ʼ����������� x�ᣬ������ң�Ĭ��ֵ�� */
            /* justify-content: flex-start; */
            /* ��β����ʼ���� */
            /* justify-content: flex-end; */
            /* ��������Ԫ�ؾ��ж��� */
            /* justify-content: center; */
            /* ƽ��ʣ��ռ� */
            justify-content: space-around;
            /* ���������ߣ��ڷ���ʣ��Ŀռ� */
            /* justify-content: space-between; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
    </div>
</body>

</html>
```

![](mark-img/0035cfe000b24b15b78ee9a9dad02fb5.png)

![](mark-img/40be74d06a4c43d888edddda10e80d16.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>03-flex���������ϵ���Ԫ�����з�ʽ1</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 300px;
            background-color: pink;
            /* Ĭ�ϵ������� x�� row */
            flex-direction: row;
            /* justify-content: ��������������Ԫ�ص����з�ʽ */
            /* ��ͷ����ʼ����������� x�ᣬ������ң�Ĭ��ֵ�� */
            /* justify-content: flex-start; */
            /* ��β����ʼ���� */
            /* justify-content: flex-end; */
            /* ��������Ԫ�ؾ��ж��� */
            /* justify-content: center; */
            /* ƽ��ʣ��ռ� */
            /* justify-content: space-around; */
            /* ���������ߣ��ڷ���ʣ��Ŀռ� */
            justify-content: space-between;
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
    </div>
</body>

</html>
```

![](mark-img/8bc9d4554a9546569c350576c429a739.png)

> ע�⣺�������Ӳ����ܸ�����������ڴ�С�Զ���������֮��ļ�࣬��Ϊ�����ӵĿ���ǹ̶��� 800px �ģ��������ǰѸ����ӿ����Ϊ 80%����ô�Ϳ�����Ч���ˡ�

`div {width: 800px;}`

![](mark-img/2345234532.gif)

`div {width: 80%;}`

![](mark-img/45235324.gif)

`div {width: 80%;}`

`div span {width: 80%;}`

![](mark-img/349857.gif)

�����ϵ���Ϊ����İ�����

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>04-flex���������ϵ���Ԫ�����з�ʽ2</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* �������ڵ������� y�� */
            flex-direction: column;
            /* justify-content: ��������������Ԫ�ص����з�ʽ */
            /* ��ͷ����ʼ������ϵ��£�Ĭ��ֵ�� */
            justify-content: flex-start;
            /* ���¿�ʼ���� */
            /* justify-content: flex-end; */
            /* ��������Ԫ�ش�ֱ���ж��� */
            /* justify-content: center; */
            /* ƽ��ʣ��ռ� */
            /* justify-content: space-around; */
            /* �������������ߣ��ڷ���ʣ��Ŀռ� */
            /* justify-content: space-between; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](mark-img/ceb344ce1a3340e48cf18c89f6b3a563.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>04-flex���������ϵ���Ԫ�����з�ʽ2</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* �������ڵ������� y�� */
            flex-direction: column;
            /* justify-content: ��������������Ԫ�ص����з�ʽ */
            /* ��ͷ����ʼ������ϵ��£�Ĭ��ֵ�� */
            /* justify-content: flex-start; */
            /* ���¿�ʼ���� */
            justify-content: flex-end;
            /* ��������Ԫ�ش�ֱ���ж��� */
            /* justify-content: center; */
            /* ƽ��ʣ��ռ� */
            /* justify-content: space-around; */
            /* �������������ߣ��ڷ���ʣ��Ŀռ� */
            /* justify-content: space-between; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](mark-img/c27f6656f46144f3bac38ff8754b6aa9.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>04-flex���������ϵ���Ԫ�����з�ʽ2</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* �������ڵ������� y�� */
            flex-direction: column;
            /* justify-content: ��������������Ԫ�ص����з�ʽ */
            /* ��ͷ����ʼ������ϵ��£�Ĭ��ֵ�� */
            /* justify-content: flex-start; */
            /* ���¿�ʼ���� */
            /* justify-content: flex-end; */
            /* ��������Ԫ�ش�ֱ���ж��� */
            justify-content: center;
            /* ƽ��ʣ��ռ� */
            /* justify-content: space-around; */
            /* �������������ߣ��ڷ���ʣ��Ŀռ� */
            /* justify-content: space-between; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

�����Զ���ֱ���е��������ڽ����������

![](mark-img/e3df7d958bd84be6b4acb4a5d44e2ea0.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>04-flex���������ϵ���Ԫ�����з�ʽ2</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* �������ڵ������� y�� */
            flex-direction: column;
            /* justify-content: ��������������Ԫ�ص����з�ʽ */
            /* ��ͷ����ʼ������ϵ��£�Ĭ��ֵ�� */
            /* justify-content: flex-start; */
            /* ���¿�ʼ���� */
            /* justify-content: flex-end; */
            /* ��������Ԫ�ش�ֱ���ж��� */
            /* justify-content: center; */
            /* ƽ��ʣ��ռ� */
            justify-content: space-around;
            /* �������������ߣ��ڷ���ʣ��Ŀռ� */
            /* justify-content: space-between; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](mark-img/b28d83e992824ef381b7c9ef662633ef.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>04-flex���������ϵ���Ԫ�����з�ʽ2</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* �������ڵ������� y�� */
            flex-direction: column;
            /* justify-content: ��������������Ԫ�ص����з�ʽ */
            /* ��ͷ����ʼ������ϵ��£�Ĭ��ֵ�� */
            /* justify-content: flex-start; */
            /* ���¿�ʼ���� */
            /* justify-content: flex-end; */
            /* ��������Ԫ�ش�ֱ���ж��� */
            /* justify-content: center; */
            /* ƽ��ʣ��ռ� */
            /* justify-content: space-around; */
            /* �������������ߣ��ڷ���ʣ��Ŀռ� */
            justify-content: space-between;
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](mark-img/ff3f75db39de49edaa70f9e722ce3262.png)

## 3.4 flex-wrap������Ԫ���Ƿ���

Ĭ������£���Ŀ������һ���ߣ��ֳ� �����ߡ����ϡ�flex-wrap ���Զ��壬flex ������Ĭ���ǲ����еġ�

| ����ֵ   | ˵��             |
| -------- | ---------------- |
| `nowrap` | �����У�Ĭ��ֵ�� |
| `wrap`   | ����             |

��������

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>05-flex-wrap��Ԫ���Ƿ���</title>
    <style>
        div {
            display: flex;
            width: 600px;
            height: 400px;
            background-color: pink;
            /* flex�����У�Ĭ�ϵ���Ԫ���ǲ����еģ� ���װ����������С��Ԫ�صĿ�ȣ��ŵ���Ԫ������  */
            /* flex-wrap: nowrap; */
            /* �Զ����� */
            /* flex-wrap: wrap; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
    </div>
</body>

</html>
```

<img src="mark-img/image-20220119004923437.png" alt="image-20220119004923437" style="zoom:50%;" />

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>05-flex-wrap��Ԫ���Ƿ���</title>
    <style>
        div {
            display: flex;
            width: 600px;
            height: 400px;
            background-color: pink;
            /* flex�����У�Ĭ�ϵ���Ԫ���ǲ����еģ� ���װ����������С��Ԫ�صĿ�ȣ��ŵ���Ԫ������  */
            /* flex-wrap: nowrap; */
            /* �Զ����� */
            flex-wrap: wrap;
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
    </div>
</body>

</html>
```

<img src="mark-img/image-20220119004814017.png" style="zoom:50%;" />

## 3.5 align-items���ò����ϵ���Ԫ�����з�ʽ�����У�

�������ǿ��������ڲ��ᣨĬ���� y�ᣩ�ϵ����з�ʽ��������Ϊ������У���ʱ��ʹ�á�

| ����ֵ       | ˵��                                                       |
| ------------ | ---------------------------------------------------------- |
| `flex-start` | ���ϵ���                                                   |
| `flex-end`   | ���µ���                                                   |
| `center`     | ����һ�����                                               |
| `stretch`    | ���죨Ĭ��ֵ��ע��ǰ�����Ӻ���û��ָ���߶ȣ�����û��Ч���� |

��������

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>06-flex���ò����ϵ���Ԫ�����з�ʽ</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* Ĭ�ϵ������� x�� row */
            flex-direction: row;
            justify-content: center;
            /* ���ò��᣺���ϵ��� */
            align-items: flex-start;
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](mark-img/50d2926f0d9c483794b81138df42d132.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>06-flex���ò����ϵ���Ԫ�����з�ʽ</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* Ĭ�ϵ������� x�� row */
            flex-direction: row;
            justify-content: center;
            /* ���ò��᣺���µ��� */
            align-items: flex-end;
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](mark-img/43173bfa7ed349c89d4003c33192941d.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>06-flex���ò����ϵ���Ԫ�����з�ʽ</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* Ĭ�ϵ������� x�� row */
            flex-direction: row;
            justify-content: center;
            /* ���ò��᣺����һ����� */
            align-items: center;
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](mark-img/f515660386034bc29da90af33b5947c5.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>06-flex���ò����ϵ���Ԫ�����з�ʽ</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* Ĭ�ϵ������� x�� row */
            flex-direction: row;
            justify-content: center;
            /* ���ò��᣺���죨Ĭ�ϣ� */
            align-items: stretch;
        }

        div span {
            width: 150px;
            /* �����ǰ����û��ָ���߶� */
            /* height: 100px; */
            background-color: gray;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](mark-img/9d77308724964371a55c2b88e79522f0.png)

> align-items ֻ��ͳһ�Բ����ϵ���Ԫ�����з�ʽ�������ж�����Ԫ�أ�Ҫ�ֱ�Բ�ͬ�������ò�ͬ�����з�ʽ����ô���ַ�ʽ���޷����ˡ�

## 3.6 align-content ���ò����ϵ���Ԫ�ص����з�ʽ�����У�

���������ڲ����ϵ����з�ʽ����ֻ������������� **����** ����������У����ڵ�������û��Ч���ġ�

| ����ֵ          | ˵��                                   |
| --------------- | -------------------------------------- |
| `flex-start`    | �ڲ����ͷ����ʼ����                   |
| `flex-end`      | �ڲ����β����ʼ����                   |
| `center`        | �ڲ����м���ʾ                         |
| `space-around`  | �����ڲ���ƽ��ʣ��ռ�                 |
| `space-between` | �����ڲ����ȷֲ�����ͷ����ƽ��ʣ��ռ� |
| `stretch`       | ��������ռ��ʣ��ռ䣨Ĭ��ֵ��         |

��������

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>07-flex���ò����ϵ���Ԫ�����з�ʽ�����У�</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* ���� */
            flex-wrap: wrap;
            /* ��Ϊ���˻��У���ʱ���ǲ����Ͽ�����Ԫ�صĶ��뷽ʽ������ align-content */
            align-content: flex-start;
            /* align-content: center; */
            /* align-content: space-around; */
            /* align-content: space-between; */
            /* align-content: stretch; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
    </div>
</body>

</html>
```

![](mark-img/aac0655dd5044255a703a1b084f89962.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>07-flex���ò����ϵ���Ԫ�����з�ʽ�����У�</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* ���� */
            flex-wrap: wrap;
            /* ��Ϊ���˻��У���ʱ���ǲ����Ͽ�����Ԫ�صĶ��뷽ʽ������ align-content */
            /* align-content: flex-start; */
            align-content: center;
            /* align-content: space-around; */
            /* align-content: space-between; */
            /* align-content: stretch; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
    </div>
</body>

</html>
```

![](mark-img/43d771e31287418a839a644229b6e604.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>07-flex���ò����ϵ���Ԫ�����з�ʽ�����У�</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* ���� */
            flex-wrap: wrap;
            /* ��Ϊ���˻��У���ʱ���ǲ����Ͽ�����Ԫ�صĶ��뷽ʽ������ align-content */
            /* align-content: flex-start; */
            /* align-content: center; */
            align-content: space-around;
            /* align-content: space-between; */
            /* align-content: stretch; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
    </div>
</body>

</html>
```

![](mark-img/af5d93c39b134dc3958497f57876de05.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>07-flex���ò����ϵ���Ԫ�����з�ʽ�����У�</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* ���� */
            flex-wrap: wrap;
            /* ��Ϊ���˻��У���ʱ���ǲ����Ͽ�����Ԫ�صĶ��뷽ʽ������ align-content */
            /* align-content: flex-start; */
            /* align-content: center; */
            /* align-content: space-around; */
            align-content: space-between;
            /* align-content: stretch; */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
    </div>
</body>

</html>
```

![](mark-img/463ca268100a4df0b092622931cbf05b.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>07-flex���ò����ϵ���Ԫ�����з�ʽ�����У�</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* ���� */
            flex-wrap: wrap;
            /* ��Ϊ���˻��У���ʱ���ǲ����Ͽ�����Ԫ�صĶ��뷽ʽ������ align-content */
            /* align-content: flex-start; */
            /* align-content: center; */
            /* align-content: space-around; */
            /* align-content: space-between; */
            align-content: stretch;
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
    </div>
</body>

</html>
```

![](mark-img/b85cdc0e53e649d1bba4979efe7b2b97.png)

## 3.7 align-content��align-items����

- align-items �����ڵ�������£�ֻ���϶��롢�¶��롢���к�����
- align-content ��Ӧ�ڻ��У����У�������£������������Ч�������������϶��롢�¶��롢���С������Լ�ƽ������ʣ��ռ������ֵ
- �ܽ���ǵ����� align-items ������ align-content

![](mark-img/d84394df9abd463f9b15096f838920ec.png)

## 3.8 flex-flow

`flex-flow` ������ flex-direction �� flex-wrap ���Եĸ�������

`flex-flow: row wrap;`

- `flex-direction`����������ķ���
- `justify-content`�����������ϵ���Ԫ�����з�ʽ
- `flex-wrap`��������Ԫ���Ƿ���
- `align-content`�����ò����ϵ���Ԫ�ص����з�ʽ�����У�
- `align-items`�����ò����ϵ���Ԫ�����з�ʽ�����У�
- `flex-flow`���������ԣ��൱��ͬʱ������ flex-direction �� flex-wrap

��������

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>08-flex-flow��������</title>
    <style>
        div {
            display: flex;
            width: 600px;
            height: 300px;
            background-color: pink;
            /* flex-direction: column;
            flex-wrap: wrap; */
            /* ���������᷽����Ƿ��У����У���д */
            flex-flow: column wrap;
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
    </div>
</body>

</html>
```

![](mark-img/209dea57f86a4bb8be262eb10e469012.png)

# �ġ�flex�������������

- flex ����Ŀռ�ķ���
- align-self ���������Լ��ڲ�������з�ʽ
- order ���Զ������������˳��ǰ��˳��

## 4.1 flex����

flex ���Զ�������Ŀ����ʣ��ռ䣬�� flex ����ʾռ���ٷ�����

```css
.item {
    flex: <number>; /* default 0 */
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
    <title>09-flex����flex����</title>
    <style>
        section {
            display: flex;
            width: 60%;
            height: 150px;
            background-color: pink;
            margin: 0 auto;
        }

        section div:nth-child(1) {
            width: 100px;
            height: 150px;
            background-color: rgb(166, 255, 139);
        }

        section div:nth-child(2) {
            flex: 1;
            background-color: rgb(0, 0, 0);
        }

        section div:nth-child(3) {
            width: 100px;
            height: 150px;
            background-color: rgb(124, 185, 255);
        }

        /* --------------------------------- */

        p {
            display: flex;
            width: 60%;
            height: 150px;
            background-color: pink;
            margin: 100px auto;
        }

        p span {
            flex: 1;
        }

        p span:nth-child(2) {
            flex: 2;
            background-color: gray;
        }
    </style>
</head>

<body>
    <section>
        <div></div>
        <div></div>
        <div></div>
    </section>
    <p>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </p>
</body>

</html>
```

![](mark-img/8bab533107f2414586bb63a80855afae.png)

![](mark-img/e65b01f3144544a0b6b167c7bf01a11a.gif)

## 4.2 align-self���������Լ��ڲ����ϵ����з�ʽ

`align-self` ������������Ŀ����������Ŀ��һ���Ķ��뷽ʽ���ɸ��� align-items ���ԡ�

Ĭ��ֵ auto����ʾ�̳и�Ԫ�� align-items ���ԣ����û�и�Ԫ�أ����ͬ�� stretch��

```css
span:nth-child(2) {
    /* �����Լ��ڲ����ϵ����з�ʽ */
    align-self: flex-end;
}
```

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>align-self���������Լ��ڲ����ϵ����з�ʽ</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* Ĭ�ϵ������� x�� row */
            flex-direction: row;
            justify-content: center;
            /* ���ò��᣺���µ��� */
            align-items: flex-end;
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
            color: #fff;
            margin: 10px;
        }

        div span:nth-child(2) {
            align-self: center;
        }
    </style>
</head>

<body>
<div>
    <span>1</span>
    <span>2</span>
    <span>3</span>
</div>
</body>

</html>
```

![](mark-img/image-20220119013638909.png)

## 4.3 order���Զ�����Ŀ������˳��

��ֵԽС������Խ��ǰ��Ĭ��Ϊ 0��

ע�⣺�� z-index ��һ����

```css
.item {
    order: <number>;
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
    <title>10-align-self��order</title>
    <style>
        div {
            display: flex;
            width: 80%;
            height: 300px;
            background-color: pink;
            /* �������Ӻ������Ų���ײ���� */
            /* align-items: flex-end; */
            /* ������ֻ��3�ź��������ײ� */
        }

        div span {
            width: 150px;
            height: 100px;
            background-color: gray;
            margin-right: 5px;
        }

        div span:nth-child(2) {
            /* ����˳�� */
            /* Ĭ����0��-1��0С������ǰ�� */
            order: -1;
        }

        div span:nth-child(3) {
            /* �������� */
            align-self: flex-end;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>

</html>
```

![](mark-img/b6f1452b4b354803b5a656bc68289881.png)

# �塢Я������ҳ��������

**��������Я�����ƶ�����ҳ��**

���ʵ�ַ��https://m.ctrip.com/

**��1������ѡ��**

���������ǲ�ȡ���������ƶ�ҳ�淽��

���������ֲ�ȡ flex ����

**��2�������ļ��нṹ**

![](mark-img/c06c94c2caa54ad4ab5d2d9f869eae34.png)

**��3�������ӿڱ�ǩ�Լ������ʼ����ʽ**

```html
<meta name="viewport" content="width=device-width, user-scalable=no,
initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<link rel="stylesheet" href="css/normalize.css">
<link rel="stylesheet" href="css/index.css">
```

**��4�����ó�ʼ����ʽ**

```css
/* ���� index.css �� */
body {
	max-width: 540px;
	min-width: 320px;
	margin: 0 auto;
	font: normal 14px/1.5 Tahoma, "Lucida Grande", Verdana, "Microsoft Yahei", STXihei, hei;
	color: #000;
	background: #f2f2f2;
	overflow-x: hidden;
	-webkit-tap-highlight-color: transparent;
}
```

**��5������ģ������**

<img src="mark-img/98a85f8a2e8d4f299e55688847ce5527.png" style="zoom: 33%;" />

<img src="mark-img/57c3144a357c47fb89dbf95f23a5f45d.png" style="zoom:33%;" />

**��6������ flex ����˼·**

![](mark-img/4b29644d4f634122a8619a17ba22b9fd.png)

���������롿

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/index.css">
    <title>Я�����֣�˵�߾���</title>
</head>

<body>
    <!-- �������� -->
    <div class="search-index">
        <div class="search">����:Ŀ�ĵ�/�Ƶ�/����/�����</div>
        <a href="#" class="user">�� ��</a>
    </div>
    <!-- ����ͼģ�� -->
    <div class="focus">
        <img src="upload/focus.jpg" alt="">
    </div>
    <!-- �ֲ������� -->
    <ul class="local-nav">
        <li>
            <a href="#" title="���㡤����">
                <span class="local-nav-icon-icon1"></span>
                <span>���㡤����</span>
            </a>
        </li>
        <li>
            <a href="#" title="���㡤����">
                <span class="local-nav-icon-icon2"></span>
                <span>���㡤����</span>
            </a>
        </li>
        <li>
            <a href="#" title="���㡤����">
                <span class="local-nav-icon-icon3"></span>
                <span>���㡤����</span>
            </a>
        </li>
        <li>
            <a href="#" title="���㡤����">
                <span class="local-nav-icon-icon4"></span>
                <span>���㡤����</span>
            </a>
        </li>
        <li>
            <a href="#" title="���㡤����">
                <span class="local-nav-icon-icon5"></span>
                <span>���㡤����</span>
            </a>
        </li>

    </ul>

    <!-- �������� -->
    <nav>
        <div class="nav-common">
            <div class="nav-items">
                <a href="#">����Ƶ�</a>
            </div>
            <div class="nav-items">
                <a href="#">����Ƶ�</a>
                <a href="#">�ؼ۾Ƶ�</a>
            </div>
            <div class="nav-items">
                <a href="#">����Ƶ�</a>
                <a href="#">�ؼ۾Ƶ�</a>
            </div>
        </div>
        <div class="nav-common">
            <div class="nav-items">
                <a href="#">����Ƶ�</a>
            </div>
            <div class="nav-items">
                <a href="#">����Ƶ�</a>
                <a href="#">�ؼ۾Ƶ�</a>
            </div>
            <div class="nav-items">
                <a href="#">����Ƶ�</a>
                <a href="#">�ؼ۾Ƶ�</a>
            </div>
        </div>
        <div class="nav-common">
            <div class="nav-items">
                <a href="#">����Ƶ�</a>
            </div>
            <div class="nav-items">
                <a href="#">����Ƶ�</a>
                <a href="#">�ؼ۾Ƶ�</a>
            </div>
            <div class="nav-items">
                <a href="#">����Ƶ�</a>
                <a href="#">�ؼ۾Ƶ�</a>
            </div>
        </div>

    </nav>
    <!-- �ർ���� -->
    <ul class="subnav-entry">
        <li>
            <a href="#">
                <span class="subnav-entry-icon"></span>
                <span>�绰��</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="subnav-entry-icon"></span>
                <span>�绰��</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="subnav-entry-icon"></span>
                <span>�绰��</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="subnav-entry-icon"></span>
                <span>�绰��</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="subnav-entry-icon"></span>
                <span>�绰��</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="subnav-entry-icon"></span>
                <span>�绰��</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="subnav-entry-icon"></span>
                <span>�绰��</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="subnav-entry-icon"></span>
                <span>�绰��</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="subnav-entry-icon"></span>
                <span>�绰��</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="subnav-entry-icon"></span>
                <span>�绰��</span>
            </a>
        </li>

    </ul>

    <!-- ����ģ�� -->
    <div class="sales-box">
        <div class="sales-hd">
            <h2>���Ż</h2>
            <a href="#" class="more">��ȡ���ร��</a>
        </div>
        <div class="sales-bd">
            <div class="row">
                <a href="#">
                    <img src="upload/pic1.jpg" alt="">
                </a>
                <a href="#">
                    <img src="upload/pic2.jpg" alt="">

                </a>
            </div>
            <div class="row">
                <a href="#">
                    <img src="upload/pic3.jpg" alt="">
                </a>
                <a href="#">
                    <img src="upload/pic4.jpg" alt="">

                </a>
            </div>
            <div class="row">
                <a href="#">
                    <img src="upload/pic5.jpg" alt="">
                </a>
                <a href="#">
                    <img src="upload/pic6.jpg" alt="">

                </a>
            </div>

        </div>
    </div>
</body>

</html>
```

```css
body {
  max-width: 540px;
  min-width: 320px;
  margin: 0 auto;
  font: normal 14px/1.5 Tahoma, "Lucida Grande", Verdana, "Microsoft Yahei",
    STXihei, hei;
  color: #000;
  background: #f2f2f2;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #222;
}

div {
  box-sizing: border-box;
}

/* ����ģ�� */

.search-index {
  display: flex;
  /* �̶���λ������û�й�ϵ ������ĻΪ׼ */
  position: fixed;
  top: 0;
  left: 50%;
  /* �̶��ĺ���Ӧ���п�� */
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 100%;
  min-width: 320px;
  max-width: 540px;
  height: 44px;
  background-color: #f6f6f6;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.search {
  position: relative;
  height: 26px;
  line-height: 24px;
  border: 1px solid #ccc;
  flex: 1;
  font-size: 12px;
  color: #666;
  margin: 7px 10px;
  padding-left: 25px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.search::before {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  width: 15px;
  height: 15px;
  background: url(../images/sprite.png) no-repeat -59px -279px;
  background-size: 104px auto;
}

.user {
  width: 44px;
  height: 44px;
  font-size: 12px;
  text-align: center;
  color: #2eaae0;
}

.user::before {
  content: "";
  display: block;
  width: 23px;
  height: 23px;
  background: url(../images/sprite.png) no-repeat -59px -194px;
  background-size: 104px auto;
  margin: 4px auto -2px;
}

/* focus */

.focus {
  padding-top: 44px;
}

.focus img {
  width: 100%;
}

/* local-nav */

.local-nav {
  display: flex;
  height: 64px;
  margin: 3px 4px;
  background-color: #fff;
  border-radius: 8px;
}

.local-nav li {
  flex: 1;
}

.local-nav a {
  display: flex;
  flex-direction: column;
  /* ������ж��� ��Ϊ�ǵ��� */
  align-items: center;
  font-size: 12px;
}

.local-nav li [class^="local-nav-icon"] {
  width: 32px;
  height: 32px;
  background-color: pink;
  margin-top: 8px;
  background: url(../images/localnav_bg.png) no-repeat 0 0;
  background-size: 32px auto;
}

.local-nav li .local-nav-icon-icon2 {
  background-position: 0 -32px;
}

.local-nav li .local-nav-icon-icon3 {
  background-position: 0 -64px;
}

.local-nav li .local-nav-icon-icon4 {
  background-position: 0 -96px;
}

.local-nav li .local-nav-icon-icon5 {
  background-position: 0 -128px;
}

/* nav */

nav {
  overflow: hidden;
  border-radius: 8px;
  margin: 0 4px 3px;
}

.nav-common {
  display: flex;
  height: 88px;
  background-color: pink;
}

.nav-common:nth-child(2) {
  margin: 3px 0;
}

.nav-items {
  /* ����ͻ�� */
  flex: 1;
  display: flex;
  flex-direction: column;
}

.nav-items a {
  flex: 1;
  text-align: center;
  line-height: 44px;
  color: #fff;
  font-size: 14px;
  /* ������Ӱ */
  text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
}

.nav-items a:nth-child(1) {
  border-bottom: 1px solid #fff;
}

.nav-items:nth-child(1) a {
  border: 0;
  background: url(../images/hotel.png) no-repeat bottom center;
  background-size: 121px auto;
}

/* -n+2����ѡ��ǰ������Ԫ�� */

.nav-items:nth-child(-n + 2) {
  border-right: 1px solid #fff;
}

.nav-common:nth-child(1) {
  background: -webkit-linear-gradient(left, #fa5a55, #fa994d);
}

.nav-common:nth-child(2) {
  background: -webkit-linear-gradient(left, #4b90ed, #53bced);
}

.nav-common:nth-child(3) {
  background: -webkit-linear-gradient(left, #34c2a9, #6cd559);
}

/* subnav-entry */

.subnav-entry {
  display: flex;
  border-radius: 8px;
  background-color: #fff;
  margin: 0 4px;
  flex-wrap: wrap;
  padding: 5px 0;
}

.subnav-entry li {
  /* ������Ӻ��ӿ���д % ����ڸ�����˵�� */
  flex: 20%;
}

.subnav-entry a {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subnav-entry-icon {
  width: 28px;
  height: 28px;
  background-color: pink;
  margin-top: 4px;
  background: url(../images/subnav-bg.png) no-repeat;
  background-size: 28px auto;
}

/* sales-box */

.sales-box {
  border-top: 1px solid #bbb;
  background-color: #fff;
  margin: 4px;
}

.sales-hd {
  position: relative;
  height: 44px;
  border-bottom: 1px solid #ccc;
}

.sales-hd h2 {
  position: relative;
  text-indent: -999px;
  overflow: hidden;
}

.sales-hd h2::after {
  position: absolute;
  top: 5px;
  left: 8px;
  content: "";
  width: 79px;
  height: 15px;
  background: url(../images/hot.png) no-repeat 0 -20px;
  background-size: 79px auto;
}

.more {
  position: absolute;
  right: 5px;
  top: 0px;
  background: -webkit-linear-gradient(left, #ff506c, #ff6bc6);
  border-radius: 15px;
  padding: 3px 20px 3px 10px;
  color: #fff;
}

.more::after {
  content: "";
  position: absolute;
  top: 9px;
  right: 9px;
  width: 7px;
  height: 7px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: rotate(45deg);
}

.row {
  display: flex;
}

.row a {
  flex: 1;
  border-bottom: 1px solid #eee;
}

.row a:nth-child(1) {
  border-right: 1px solid #eee;
}

.row a img {
  width: 100%;
}
```

<img src="mark-img/a27c42ea2d884fedb216313af830c18e.png" style="zoom: 67%;" />

<img src="mark-img/3dfa71998f534aecb36292e1e072ccdf.png" style="zoom:67%;" />

# ����Я������ҳ�����ص�ǿ��

## 6.1 ����ģ��

<img src="mark-img/image-20220128192810458.png" alt="" style="zoom:50%;" />

```html
<!-- �������� -->
<div class="search-index">
    <div class="search">����:Ŀ�ĵ�/�Ƶ�/����/�����</div>
	<a href="#" class="user">�� ��</a>
</div>
```

���Ϸ�������ģ�����������ù̶���λ��ʵ�ֵģ���������ݲ�������ͨ�����Բ���ʵ�֡�

**��1�����岿�ֵĶ�λ**

```css
.search-index {
  /* �̶���λ������û�й�ϵ ������ĻΪ׼ */
  position: fixed;
  top: 0;
  /* �ص㣺���� translateX ʵ���ƶ������ȵ�һ�룡*/
  left: 50%;
  /* �̶��ĺ���Ӧ���п�� */
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  /* ������������ʾ���һ�� */
  width: 100%;
  min-width: 320px;
  max-width: 540px;
  height: 44px;
  background-color: #f6f6f6;
}
```

**��2�����������ҵĲ��ֲ���**

- ���� search-index ���õ��Բ��֡�

```css
display: flex;
```

- ���� serch ����ռ��1������

```css
.search {
  height: 26px;
  line-height: 24px;
  border: 1px solid #ccc;
  /* ����Ϊռ�� 1�� */
  flex: 1;
  font-size: 12px;
  color: #666;
  margin: 7px 10px;
  padding-left: 25px;
}
```

- ��user ��������һ����ȣ�ռ���Լ��ǲ��֡�

```css
.user {
  width: 44px;
  height: 44px;
  font-size: 12px;
  text-align: center;
  color: #2eaae0;
}
```

����ʵ�ֵĽṹ��

![](mark-img/image-20220128194425850.png)

## 6.2 ����

### 6.2.1 ��������

**��1���������Խ���**

�﷨��

`background: linear-gradient(��ʼ����, ��ɫ1, ��ɫ2, ��ɫ3, ...);`

```css
background: -webkit-linear-gradient(left, red, blue);
background: -webkit-linear-gradient(left top, red, blue, deeppink);
background: -webkit-linear-gradient(45deg, red, blue);
```

- ��������**����**��������˽��ǰ׺

- ��ʼ��������ǣ�**��λ����** �� **����**�����ʡ��Ĭ�Ͼ��� top�����ϵ��£�

- ��λ���ʣ�`top`��`bottom`��`left`��`right`��`�������`

- �������Ƕ���ָˮƽ�ߺͽ�����֮��ĽǶȣ���ʱ�뷽����㡣���仰˵��0deg ������һ�����µ��ϵĽ��䣬90deg ������һ�������ҵĽ��䡣

  <img src="mark-img/image-20220128181903220.png" style="zoom:50%;" />

  > ע��ܶ��������Chrome��Safari��firefox�ȣ���ʹ���˾ɵı�׼���� 0deg ������һ�������ҵĽ��䣬90deg ������һ�����µ��ϵĽ��䡣���㹫ʽ **90 - x = y** ���� x Ϊ��׼�Ƕȣ�yΪ�Ǳ�׼�Ƕȡ�

��������

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>�������Խ���</title>
    <style>
        div {
            width: 600px;
            height: 200px;
            background-color: red; /* �������֧�ֵ�ʱ����ʾ */
            /* �������������������˽��ǰ׺ */
            /* ���ڴ˴����ƶ��ˣ���������д webkit �͹��� */
            background: -webkit-linear-gradient(left, red, blue);
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

![](mark-img/f6d079aad03f4013b60a124619a11523.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>�������Խ���</title>
    <style>
        div {
            width: 600px;
            height: 200px;
            background-color: red; /* �������֧�ֵ�ʱ����ʾ */
            /* �������������������˽��ǰ׺ */
            /* Ĭ�ϴ��ϵ��� top */
            background: -webkit-linear-gradient(red, blue);
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

![](mark-img/313c9d5d71814cdf876df9107f18faa9.png)

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>�������Խ���</title>
    <style>
        div {
            width: 600px;
            height: 200px;
            background-color: red; /* �������֧�ֵ�ʱ����ʾ */
            /* �������������������˽��ǰ׺ */
            /* left top �� top left ������ */
            background: -webkit-linear-gradient(left top, red, blue);
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

![](mark-img/d94d2dd28f4243a0b6fc2f5efe391c1d.png)

��ʹ��͸���ȡ�

CSS3 ����Ҳ֧��͸���ȣ�transparent���������ڴ��������䵭��Ч����

Ϊ�����͸���ȣ�����ʹ�� `rgba()` ������������ɫ�ڵ㡣rgba() �����е����һ�����������Ǵ� 0 �� 1 ��ֵ������������ɫ��͸���ȣ�0 ��ʾ��ȫ͸����1 ��ʾ��ȫ��͸����

�����ʵ����ʾ�˴���߿�ʼ�����Խ��䡣�������ȫ͸�����������ɵ���ȫ��͸���ĺ�ɫ��

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>�������Խ���</title>
    <style>
        div {
            width: 600px;
            height: 200px;
            /* �������������������˽��ǰ׺ */
            /* ǰ��� red Ϊ�������֧��ʱ��ʾ */
            background: red -webkit-linear-gradient(left, rgba(0,0,255,.2), rgba(255,0,0,1));
        }
    </style>
</head>

<body>
<div></div>
</body>

</html>
```

<img src="mark-img/image-20220128182622106.png" style="zoom: 67%;" />

**��2�����򽥱�**

���򽥱����������Ķ��塣

Ϊ�˴���һ�����򽥱䣬��Ҳ�������ٶ���������ɫ�ڵ㡣��ɫ�ڵ㼴����Ҫ����ƽ�ȹ��ɵ���ɫ��ͬʱ����Ҳ����ָ����������ġ���״��Բ�λ���Բ�Σ�����С��Ĭ������£������������ center����ʾ�����ĵ㣩���������״�� ellipse����ʾ��Բ�Σ�������Ĵ�С�� farthest-corner����ʾ����Զ�Ľ��䣩��

> ���򽥱䲻Ҫ�������ǰ׺��

**���򽥱� - ��ɫ�ڵ���ȷֲ���Ĭ������£�**

```css
width: 300px;
height: 300px;
background: radial-gradient(red, green, blue);
```

<img src="mark-img/image-20220128185054290.png" style="zoom:50%;" />

**���򽥱� - ��ɫ�ڵ㲻���ȷֲ�**

```css
width: 300px;
height: 300px;
background: radial-gradient(red 5%, green 15%, blue 60%);
```

<img src="mark-img/image-20220128185317175.png" style="zoom:50%;" />

**������״**

`shape` ������������״����������ֵ `circle` �� `ellipse`�����У�`circle` ��ʾԲ�Σ�`ellipse` ��ʾ��Բ�Ρ�Ĭ��ֵ�� `ellipse`��

```css
height: 150px;
width: 200px;
background: radial-gradient(red, yellow, green); 
background: radial-gradient(circle, red, yellow, green); 
```

<img src="mark-img/image-20220128185852176.png" style="zoom:50%;" />

**��ͬ�ߴ��С�ؼ��ֵ�ʹ��**

`size` ���������˽���Ĵ�С���������������ĸ�ֵ��

- `closest-side`
- `farthest-side`
- `closest-corner`
- `farthest-corner`

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8"> 
<title></title> 
<style>
#grad1 {
  height: 150px;
  width: 150px;
  background-color: red; /* �������֧�ֵ�ʱ����ʾ */
  background: radial-gradient(closest-side at 60% 55%, red, yellow, black); 
}

#grad2 {
  height: 150px;
  width: 150px;
  background-color: red; /* �������֧�ֵ�ʱ����ʾ */
  background: radial-gradient(farthest-side at 60% 55%, red, yellow, black); 
}

#grad3 {
  height: 150px;
  width: 150px;
  background-color: red; /* �������֧�ֵ�ʱ����ʾ */
  background: radial-gradient(closest-corner at 60% 55%, red, yellow, black);
}

#grad4 {
  height: 150px;
  width: 150px;
  background-color: red; /* �������֧�ֵ�ʱ����ʾ */
  background: radial-gradient(farthest-corner at 60% 55%, red, yellow, black); 
}
</style>
</head>
<body>

<h3>���򽥱� - ��ͬ�ߴ��С�ؼ��ֵ�ʹ��</h3>

<p><strong>closest-side��</strong></p>
<div id="grad1"></div>

<p><strong>farthest-side��</strong></p>
<div id="grad2"></div>

<p><strong>closest-corner��</strong></p>
<div id="grad3"></div>

<p><strong>farthest-corner��Ĭ�ϣ���</strong></p>
<div id="grad4"></div>

</body>
</html>
```

<img src="mark-img/image-20220128190728826.png" style="zoom:50%;" />

### 6.2.2 ���ֽ���

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        p{
            font-size: 60px;
            background: linear-gradient(0deg,red,blue);
            background-clip:text;
            -webkit-background-clip: text;
            color: transparent;
        }
    </style>
</head>
<body>
<p>
    ���ǽ�������
</p>
</body>
</html>
```

<img src="mark-img/image-20220128191209061.png" style="zoom:50%;" />

**��������˵��**

background ���ԣ����ñ���ͼƬΪ���Խ���ɫ��

background-clip ���ԣ��涨�����Ļ�����������ע�⵽�������ϵ�-webkit-��˵�������Ի����ڼ������⣬�����������������֧�֣��� W3C ��û�� text ���ֵ�ģ������ text �Ǳ������ü������֣���

![](mark-img/image-20220128191422675.png)

color ���ԣ�����������ɫΪ͸����Ȼ����ı���ɫ��ʾ������