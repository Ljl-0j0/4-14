<!--
 * @Description: 
 * @Author: ljl
 * @Date: 2025-04-23 20:14:02
 * @LastEditors: rendc
 * @LastEditTime: 2025-04-24 15:16:04
-->
# ��CSS��λ��
- [��CSS��λ��](#css��λ)
- [һ����λ](#һ��λ)
    - [1.1 Ϊʲô��Ҫ��λ��](#11-Ϊʲô��Ҫ��λ)
    - [1.2 ��λ���](#12-��λ���)
    - [1.3 ��̬��λ static���˽⣩](#13-��̬��λ-static�˽�)
    - [1.4 ��Զ�λ relative����Ҫ��](#14-��Զ�λ-relative��Ҫ)
    - [1.5 ���Զ�λ absolute����Ҫ��](#15-���Զ�λ-absolute��Ҫ)
    - [1.6 �Ӿ����������](#16-�Ӿ����������)
    - [1.7 �̶���λ fixed ����Ҫ��](#17-�̶���λ-fixed-��Ҫ)
    - [1.8 �̶���λС���ɣ��̶��ڰ����Ҳ�λ��](#18-�̶���λС���ɹ̶��ڰ����Ҳ�λ��)
    - [1.9 ճ�Զ�λ sticky���˽⣩](#19-ճ�Զ�λ-sticky�˽�)
    - [1.10 ��λ���ܽ�](#110-��λ���ܽ�)
    - [1.11 ��λ���Ŵ��� z-index](#111-��λ���Ŵ���-z-index)
    - [1.12 ��λ����չ](#112-��λ����չ)
- [�����ۺϰ���](#���ۺϰ���)
- [������ҳ�����ܽ�](#����ҳ�����ܽ�)
- [�ġ�Ԫ�ص���ʾ������](#��Ԫ�ص���ʾ������)
    - [4.1 display ����](#41-display-����)
    - [4.2 visibility �ɼ���](#42-visibility-�ɼ���)
    - [4.3 overflow ���](#43-overflow-���)
    - [4.4 �ܽ�](#44-�ܽ�)
- [�塢�ۺϰ���](#���ۺϰ���)


# һ����λ

## 1.1 Ϊʲô��Ҫ��λ��

���ʣ� �������ʹ�ñ�׼�����߸�����ʵ����

1. ĳ��Ԫ�ؿ���**����**����һ���������ƶ�λ�ã�����ѹס�������ӡ�

2. �����ǹ������ڵ�ʱ�򣬺�����**�̶�**��Ļĳ��λ�õġ�

����Ч������׼���򸡶����޷�����ʵ�֣���ʱ��Ҫ��λ��ʵ�֡�

���ԣ�

1. ���������ö���鼶����һ��û�з�϶������ʾ�� �������ں������к��ӡ�
2. ��λ���ǿ����ú������ɵ���ĳ���������ƶ�λ�û��߹̶���Ļ��ĳ��λ�ã����ҿ���ѹס�������ӡ�

## 1.2 ��λ���

��λ�������Ӷ���ĳһ��λ�ã����Զ�λҲ���ڰڷź��ӣ� ���ն�λ�ķ�ʽ�ƶ����ӡ�

`��λ = ��λģʽ + ��ƫ��`

- ��λģʽ����ָ��һ��Ԫ�����ĵ��еĶ�λ��ʽ
- ��ƫ��������˸�Ԫ�ص�����λ��

**��1����λģʽ**

��λģʽ����Ԫ�صĶ�λ��ʽ����ͨ�� CSS �� `position` ���������ã���ֵ���Է�Ϊ�ĸ���

| ֵ         | ����     |
| ---------- | -------- |
| `static`   | ��̬��λ |
| `relative` | ��Զ�λ |
| `absolute` | ���Զ�λ |
| `fixed`    | �̶���λ |

**��2����ƫ��**

��ƫ�ƾ��Ƕ�λ�ĺ����ƶ�������λ�á��� `top`��`bottom`��`left` �� `right` 4 �����ԡ�

ע�⣺����Ϊ��ֵ��

| ��ƫ������ | ʵ��           | ����                                           |
| ---------- | -------------- | ---------------------------------------------- |
| `top`      | `top: 80px`    | ����ƫ����������Ԫ��������丸Ԫ���ϱ��ߵľ��� |
| `bottom`   | `bottom: 80px` | �ײ�ƫ����������Ԫ��������丸Ԫ���±��ߵľ��� |
| `left`     | `left: 80px`   | ���ƫ����������Ԫ��������丸Ԫ������ߵľ��� |
| `rigth`    | `right: 80px`  | �Ҳ�ƫ����������Ԫ��������丸Ԫ���ұ��ߵľ��� |

## 1.3 ��̬��λ static���˽⣩

��̬��λ��Ԫ�ص�Ĭ�϶�λ��ʽ���޶�λ����˼��

�﷨��

```css
ѡ���� { position: static; }
```

1. ��̬��λ���ձ�׼�����԰ڷ�λ�ã���û�б�ƫ��

2. ��̬��λ�ڲ���ʱ�����õ�

## 1.4 ��Զ�λ relative����Ҫ��

��Զ�λ��Ԫ�����ƶ�λ�õ�ʱ��**�������ԭ����λ��**��˵�Ķ�λ�������ͣ���

�﷨��

```css
ѡ���� { position: relative; }
```

��Զ�λ���ص㣺����ؼ�ס��

1. ����������Լ�ԭ����λ�����ƶ��ģ��ƶ�λ�õ�ʱ����յ����Լ�ԭ����λ�õ㣩
2. ԭ����**��׼����λ�ü���ռ��**������ĺ�����Ȼ�Ա�׼���ķ�ʽ�Դ���

��ˣ�**��Զ�λ��û���ѱ�**��������͵�Ӧ���Ǹ����Զ�λ�����ġ�

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>��Զ�λ</title>
    <style>
        .box1 {
            position: relative;
            top: 100px;
            left: 100px;
            width: 200px;
            height: 200px;
            background-color: pink;
        }

        .box2 {
            width: 200px;
            height: 200px;
            background-color: deeppink;
        }
    </style>
</head>

<body>
    <div class="box1">

    </div>
    <div class="box2">

    </div>

</body>

</html>
```

<img src="img/2021041022482559.gif" style="width:50%;" />

## 1.5 ���Զ�λ absolute����Ҫ��

���Զ�λ��Ԫ�����ƶ�λ�õ�ʱ��**�����������Ԫ��**��˵�Ķ�λ��ƴ���ͣ���

�﷨��

```css
ѡ���� { position: absolute; }
```

���Զ�λ���ص㣺����ؼ�ס��

1. ���û������Ԫ�ػ�������Ԫ��û�ж�λ�����������Ϊ׼��λ��Document �ĵ���
2. �������Ԫ���ж�λ����ԡ����ԡ��̶���λ��������**���һ�����ж�λ����Ԫ��Ϊ�ο���**�ƶ�λ��
3. ���Զ�λ**����ռ��ԭ�ȵ�λ��**���ѱ꣩������**�ѱ�ĳ̶ȴ��ڸ���**����ѹס������

���Ծ��Զ�λ��**�����׼��**�ġ�

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>���Զ�λ-�޸��׻��߸����޶�λ</title>
    <style>
        .father {
            width: 500px;
            height: 500px;
            background-color: skyblue;
        }

        .son {
            position: absolute;
            /* top: 10px;
            left: 10px; */
            /* top: 100px;
            right: 200px; */
            left: 0;
            bottom: 0;
            width: 200px;
            height: 200px;
            background-color: pink;
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

<img src="img/20210410225323359.gif" style="width:50%;" />

---

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>���Զ�λ-�����ж�λ-һ������</title>
    <style>
        .father {
            position: relative;
            width: 500px;
            height: 500px;
            background-color: skyblue;
        }
        
        .son {
            position: absolute;
            /* top: 10px;
            left: 10px; */
            /* top: 100px;
            right: 200px; */
            left: 0;
            bottom: 0;
            width: 200px;
            height: 200px;
            background-color: pink;
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

<img src="img/20210410225829682.gif" style="width:50%;" />

---

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>���Զ�λ-�����ж�λ-�༶����</title>
    <style>
        /* �����һ�����ж�λ����Ԫ��Ϊ�ο����ƶ�λ�� */
        /* ����˭���ж�λ��������������Ҿ���˭Ϊ׼�� */
        .yeye {
            position: relative;
            width: 800px;
            height: 800px;
            background-color: hotpink;
            padding: 50px;
        }

        .father {
            width: 500px;
            height: 500px;
            background-color: skyblue;
        }

        .son {
            position: absolute;
            left: 30px;
            bottom: 10px;
            width: 200px;
            height: 200px;
            background-color: pink;
        }
    </style>
</head>

<body>
    <div class="yeye">
        <div class="father">
            <div class="son"></div>
        </div>
    </div>
</body>

</html>
```

<img src="img/20210410230310223.gif" style="width:50%;" />

---

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>���Զ�λ-�ѱ�</title>
    <style>
        .father {
            position: relative;
            width: 500px;
            height: 500px;
            background-color: skyblue;
        }

        .son {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 200px;
            height: 200px;
            background-color: pink;
        }

        .son2 {
            width: 200px;
            height: 200px;
            background-color: gray;
        }
    </style>
</head>

<body>
    <div class="father">
        <div class="son"></div>
        <div class="son2"></div>
    </div>

</body>

</html>
```

<img src="img/20210410231150803.gif" style="width:50%;" />

**���⣺**

1. ���Զ�λ����Զ�λ������ʲôʹ�ó����أ�
2. Ϊʲô˵��Զ�λ�����Զ�λ�������أ�

## 1.6 �Ӿ����������

Ū�������ھ����������˾��Զ�λ����Զ�λ��ʹ�ó�����

��� ���Ӿ����ࡱ ̫��Ҫ�ˣ�������ѧϰ��λ�Ŀھ����Ƕ�λ����õ�һ�ַ�ʽ��仰����˼�ǣ��Ӽ��Ǿ��Զ�λ�Ļ�������Ҫ����Զ�λ��

1. **�Ӽ����Զ�λ������ռ��λ�ã����Էŵ�������������κ�һ���ط�������Ӱ���������ֵܺ���**
2. **��������Ҫ�Ӷ�λ�����Ӻ����ڸ���������ʾ**
3. **�����Ӳ���ʱ����Ҫռ��λ�ã���˸���ֻ������Զ�λ**

������Ӿ������������������Զ�λ����������Ϊ���Զ�λ�ĸ�����

�ܽ᣺ ��Ϊ������Ҫռ��λ�ã��������Զ�λ�� �Ӻ��Ӳ���Ҫռ��λ�ã����Ǿ��Զ�λ��

��Ȼ���Ӿ����಻����Զ����ģ������Ԫ�ز���Ҫռ��λ�ã����Ӿ������� Ҳ��������

**˼����Ϊʲô��Ҫ�ö�λ��������������**

�𰸣��ø�����ĳЩ����ԶԶû�ж�λ�򵥺ͷ��㣡���磬�ֲ�ͼ��

<img src="img/20210410231958333-164233328088033.jpg" style="width:50%;" />

- �������ߵ�ͼƬ�л���ť�����ø���Ҳ�����������ǣ��������ͼƬ�ĺ��������л���ť֮ǰ��ӵģ���ô���ݸ���Ԫ��ֻ��Ӱ�������ӵ����ԣ��л���ť��ֻ������ͼƬ�ײ�֮�£������ܸ���ͼƬ֮�ϣ�
- �����л���ť�ø���ʵ���ˣ��������½ǵ��ֲ���ŵ�ͼ���Ҳ�ø���ʵ�֣���������ֲ���ŵ�ͼ�����л���ť��һ�в��Ÿ�����

�ɼ����������������������к����Ƿǳ��ʺϵģ��������ڿռ��������к��ӾͲ��ʺ��ˣ�Ӧ���ö�λʵ�֡�

**�ص㣺�����ϲ����ұ�׼���������ϲ����Ҹ������ռ��ϲ����Ҷ�λ��**

��������ѧ������ hot new ģ�顿

```html
<div class="box-bd">
	<ul class="clearfix">	
    	<li>
            <!-- 
			<em> ���ǵ�������б�ı����ñ�ǩ�������Ǹ�������������е��ı���ʾΪǿ�������ݣ�
			���ԣ�<em> ������������ǿ����Ԫ�ء�
			-->
        	<em>
            	<img src="images/hot.png" alt="">
          	</em>
         	<img src="images/pic.png" alt="">
          	<h4>
            Think PHP 5.0 ����ϵͳʵս��Ŀ����
          	</h4>
          	<div class="info">
            	<span>�߼�</span> ? 1125����ѧϰ
          	</div>
    	</li>
        ...
    </ul>
</div>
```

```css
.box-bd ul {
    width: 1225px;
}
.box-bd ul li {
    /* �Ӿ����� */
    position: relative;
    float: left;
    width: 228px;
    height: 270px;
    background-color: #fff;
    margin-right: 15px;
    margin-bottom: 15px;
   
}
.box-bd ul li > img {
    width: 100%;
}
.box-bd ul li h4 {
    margin: 20px 20px 20px 25px;
    font-size: 14px;
    color: #050505;
    font-weight: 400;
}
.box-bd ul li em {
    /* �Ӿ����� */
    position: absolute;
    top: 4px;
    right: -4px;
}
.box-bd .info {
    margin: 0 20px 0 25px;
    font-size: 12px;
    color: #999;
}
.box-bd .info span {
    color: #ff7c2d;
}
```

![](img/20210411001207402.jpg)

## 1.7 �̶���λ fixed ����Ҫ��

�̶���λ��Ԫ�ع̶����������������λ�á�

��Ҫʹ�ó����� �����������ҳ�����ʱԪ�ص�λ�ò���ı䡣

�﷨��

```css
ѡ���� { position: fixed; }
```

�̶���λ���ص㣨��ؼ�ס����

1. ��**������Ŀ��Ӵ���Ϊ���յ�**�ƶ�Ԫ��
   - ����Ԫ��û���κι�ϵ
   - �������������
2. �̶���λ����ռ��ԭ�ȵ�λ��
   - �̶���λҲ��**�ѱ�**�ģ���ʵ�̶���λҲ���Կ�����һ��**����ľ��Զ�λ**��

Ӧ�þ�����

<img src="img/20210411000419348.gif" style="width:50%;" />

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>�̶���λ</title>
    <style>
        .dj {
            position: fixed;
            top: 100px;
            left: 200px;
        }
    </style>
</head>

<body>
    <div class="dj">
        <img src="images/pvp.png" alt="">
    </div>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>
    <p>�뾡��Ը�槼�������</p>

</body>

</html>
```

<img src="img/20210411002138603.gif" style="width:50%;" />

## 1.8 �̶���λС���ɣ��̶��ڰ����Ҳ�λ��

**С�㷨��**

1. �ù̶���λ�ĺ��� `left: 50%`���ߵ��������������Ҳ���Կ������ģ� һ���λ��
2. �ù̶���λ�ĺ��� `margin-left: ���Ŀ�ȵ�һ�����`�����߰��Ŀ�ȵ�һ��λ��

�Ϳ����ù̶���λ�ĺ������Ű����Ҳ�����ˡ�

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>�̶���λС����-�̶��������Ҳ�</title>
    <style>
        .w {
            width: 800px;
            height: 1400px;
            background-color: pink;
            margin: 0 auto;
        }

        .fixed {
            position: fixed;
            /* 1. ���������ȵ�һ�� */
            left: 50%;
            /* 2. ���� margin �߰��ĺ��ӿ�ȵ�һ����루Ϊ�����۶���� 5px��*/
            margin-left: 405px;
            width: 50px;
            height: 150px;
            background-color: skyblue;
        }
    </style>
</head>

<body>
    <div class="fixed"></div>
    <div class="w">���ĺ��� 800����</div>

</body>

</html>
```

![](img/20210411002750577.gif)

## 1.9 ճ�Զ�λ sticky���˽⣩

ճ�Զ�λ���Ա���Ϊ����Զ�λ�͹̶���λ�Ļ�ϡ�

Sticky ճ�Եġ�

�﷨��

```css
ѡ���� { position: sticky; top: 10px; }
```

ճ�Զ�λ���ص㣺

1. ���������**���Ӵ���Ϊ���յ�**�ƶ�Ԫ�أ��̶���λ�ص㣩
2. ճ�Զ�λ**ռ��ԭ�ȵ�λ��**����Զ�λ�ص㣩
3. ������� top ��left��right��bottom ����һ������Ч

��ҳ���������ʹ�á� �����ԽϲIE ��֧�֡�

δ�����������ƣ���Ŀǰ�������ã�Ŀǰ�� javascript ��ʵ��ճ�Զ�λЧ������

Ӧ�þ�����

<img src="img/20210411000442416.gif" style="width:50%;" />

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ճ�Զ�λ</title>
    <style>
        body {
            height: 3000px;
        }

        .nav {
            /* ճ�Զ�λ */
            position: sticky;
            top: 0;
            width: 800px;
            height: 50px;
            background-color: pink;
            margin: 100px auto;
        }
    </style>
</head>

<body>
    <div class="nav">���ǵ�����</div>
</body>

</html>
```

![](img/20210411003401335.gif)

![](img/a6b709f41c9f42558b8d6870202bc171.gif)

## 1.10 ��λ���ܽ�

| ��λģʽ          | �Ƿ��ѱ�         | �ƶ�λ��           | �Ƿ���   |
| ----------------- | ---------------- | ------------------ | ---------- |
| static ��̬��λ   | ��               | ����ʹ�ñ�ƫ��     | ����       |
| relative ��Զ�λ | ��ռ��λ�ã�   | ���������λ���ƶ� | ����       |
| absolute ���Զ�λ | �ǣ���ռ��λ�ã� | ���ж�λ�ĸ���     | ����       |
| fixed �̶���λ    | �ǣ���ռ��λ�ã� | �����������       | ����       |
| sticky ճ�Զ�λ   | ��ռ��λ�ã�   | �����������       | ��ǰ�׶��� |

1. һ����ס����Զ�λ���̶���λ�����Զ�λ ��������ص㣺 1. �Ƿ�ռ��λ�ã��ѱ�� 2. ��˭Ϊ��׼���ƶ�λ�á�
2. ѧϰ��λ�ص�ѧ���Ӿ����ࡣ

## 1.11 ��λ���Ŵ��� z-index

��ʹ�ö�λ����ʱ�����ܻ���ֺ����ص����������ʱ������ʹ�� z-index �����ƺ��ӵ�ǰ�����z�ᣩ��

�﷨��

```css
ѡ���� { z-index: 1; }
```

- ��ֵ���������������������� 0��Ĭ���� auto����ֵԽ�󣬺���Խ����
- �������ֵ��ͬ��������д˳�򣬺�������
- ���ֺ��治�ܼӵ�λ
- ֻ�ж�λ�ĺ��Ӳ��� z-index ����

## 1.12 ��λ����չ

**��1�����Զ�λ�ĺ��Ӿ���**

���˾��Զ�λ�ĺ��Ӳ���ͨ�� `margin: 0 auto` ˮƽ���У����ǿ���ͨ�����¼��㷽��ʵ��ˮƽ�ʹ�ֱ���С�

1. `left: 50%;`���ú��ӵ�����ƶ�������Ԫ�ص�ˮƽ����λ�á�
2. `margin-left: -0.5widthpx;`���ú��������ƶ������ȵ�һ�롣

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>���Զ�λˮƽ��ֱ����</title>
    <style>
        .box {
            position: absolute;
            /* 1. left �� 50%  ��������ȵ�һ�� */
            left: 50%;
            /* 2. margin ��ֵ ������� �Լ����ӿ�ȵ�һ�� */
            margin-left: -100px;
            /* ��ֱ����ͬ�� */
            top: 50%;
            margin-top: -100px;
            width: 200px;
            height: 200px;
            background-color: pink;
            /* margin: auto; */
        }
    </style>
</head>

<body>
    <div class="box"></div>
</body>

</html>
```

![](img/20210411004813982.jpg)

**��2����λ��������**

**���Զ�λ�͹̶���λҲ�͸������ơ�**

1. ����Ԫ����Ӿ��Ի��߹̶���λ������ֱ�����ø߶ȺͿ�ȡ�
2. �鼶Ԫ����Ӿ��Ի��߹̶���λ�����������Ȼ��߸߶ȣ�Ĭ�ϴ�С�����ݵĴ�С��

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>��λ����������</title>
    <style>
        span {
            position: absolute;
            top: 100px;
            width: 200px;
            height: 150px;
            background-color: pink;
        }

        div {
            position: absolute;
            background-color: skyblue;
        }
    </style>
</head>

<body>
    <span>123</span>

    <div>abcd</div>
</body>

</html>
```

![](img/20210411005338704.jpg)

**��3���ѱ�ĺ��Ӳ��ᴥ����߾�����**

����Ԫ�ء����Զ�λ���̶���λ��Ԫ�صĶ����ᴥ����߾�ϲ������⡣

**��4�����Զ�λ���̶���λ������ȫѹס����**

����Ԫ�ز�ͬ��ֻ��ѹס�������׼���ĺ��ӣ����ǲ���ѹס�����׼��������������֣�ͼƬ����

���Ǿ��Զ�λ���̶���λ�� ��ѹס�����׼�����е����ݡ�

����֮���Բ���ѹס���֣���Ϊ����������Ŀ�������Ϊ�������ֻ���Ч���ġ� ���ֻ�Χ�Ƹ���Ԫ�ء�

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>��������ԭ����Ŀ���������ֻ���Ч��</title>
    <style>
        img {
            float: left;
        }
    </style>
</head>

<body>
    1993�꣬�ڹ�װƬ��ս��˵���а���һ���书��Ⱥ������ͬ�꣬���ݶ���ϲ��Ƭ��������ʮ����֮͵�컻�ա�����Ƭ�����ݶ���������ǧ�Ÿ���Ǯ�ĵϣ����⣬���������˰���Ƭ���쳤�ؾá�����Ƭ��������һ��������Ľ�����������
    1994�꣬���»�Ͷ�ʲ������˾���Ƭ������ء�����Ƭ��������Զ�����ȴ���������Ľ���רԱ��һ����1995�꣬����������־Ƭ���һ�ս��������Ƭ���������桢��ǿ�İ��棬��ƾ���Ƭ��õ�15����۵�Ӱ�������������������ͬ���ڶ���Ƭ����ð�ռҡ������������ʴ�Сʱ��ĸ˫������������̩���վ��Ĺ��¡�
    1996�꣬���ݺڰ���ĵĵ�Ӱ�����Ϻ�̲������Ƭ�����ݶԷ�̳̳���һƬ�Ķ�����1997�꣬���ξ���Ƭ��������졷�������ˣ�ͬ�꣬���ݰ���Ƭ����������֮�����ˡ�����Ƭ�����ݼ����ԺյĿվ���ξ����ΰ��12�£������һ��������ݾ��˶���Ƭ���ڽ𡷣���Ƭ�����ݾ����������������ĵ���ֻ������鳤�����ԡ�1998�꣬���ݶ���Ƭ�����ڽ�����
    <img src="images/img.jpg" alt="">
    �������������ĺڰ��ԱΤ���飻ͬ�꣬����ϲ��Ƭ������1999�������⣬�������ξ���Ƭ��ȥ���̻��ر�ࡷ�������ˡ�
    1993�꣬�ڹ�װƬ��ս��˵���а���һ���书��Ⱥ������ͬ�꣬���ݶ���ϲ��Ƭ��������ʮ����֮͵�컻�ա�����Ƭ�����ݶ���������ǧ�Ÿ���Ǯ�ĵϣ����⣬���������˰���Ƭ���쳤�ؾá�����Ƭ��������һ��������Ľ�����������
    1994�꣬���»�Ͷ�ʲ������˾���Ƭ������ء�����Ƭ��������Զ�����ȴ���������Ľ���רԱ��һ����1995�꣬����������־Ƭ���һ�ս��������Ƭ���������桢��ǿ�İ��棬��ƾ���Ƭ��õ�15����۵�Ӱ�������������������ͬ���ڶ���Ƭ����ð�ռҡ������������ʴ�Сʱ��ĸ˫������������̩���վ��Ĺ��¡�
    1996�꣬���ݺڰ���ĵĵ�Ӱ�����Ϻ�̲������Ƭ�����ݶԷ�̳̳���һƬ�Ķ�����1997�꣬���ξ���Ƭ��������졷�������ˣ�ͬ�꣬���ݰ���Ƭ����������֮�����ˡ�����Ƭ�����ݼ����ԺյĿվ���ξ����ΰ��12�£������һ��������ݾ��˶���Ƭ���ڽ𡷣���Ƭ�����ݾ����������������ĵ���ֻ������鳤�����ԡ�1998�꣬���ݶ���Ƭ�����ڽ������������������ĺڰ��ԱΤ���飻ͬ�꣬����ϲ��Ƭ������1999�������⣬�������ξ���Ƭ��ȥ���̻��ر�ࡷ�������ˡ�
</body>

</html>
```

![](img/20210411005813237.jpg)

---

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>��λ����ȫѹס��׼����������</title>
    <style>
        .box {
            /* 1.������Ԫ�ز���ѹס�����׼�������� */
            /* float: left; */
            /* 2. ���Զ�λ���̶���λ�� ��ѹס�����׼�����е����ݡ� */
            position: absolute;
            width: 150px;
            height: 150px;
            background-color: pink;
        }
    </style>
</head>

<body>
    <div class="box"></div>
    <p>���ºβ�ͬ���𣬷�ҡֱ�Ͼ�����</p>
</body>

</html>
```

![](img/20210411005914370.jpg)

# �����ۺϰ���

**���������Ա�����ͼ���֡�**

![](img/20210411010357458.jpg)

���ַ�����

![](img/20210411010357453.jpg)

������

1. �������������Ϊ�� tb-promo �Ա����
2. �����ȷ�һ��ͼƬ
3. ����������ť�����Ӿͺ��ˣ����ͷ prev �Ҽ�ͷ next
4. �ײ�СԲ�� ul ������������Ϊ promo-nav

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>�Ա��ֲ�ͼ����</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        li {
            list-style: none;
        }

        .tb-promo {
            position: relative;
            width: 520px;
            height: 280px;
            background-color: pink;
            margin: 100px auto;
        }

        .tb-promo img {
            width: 520px;
            height: 280px;
        }

        /* ����ѡ�������Լ���������ͬ����ʽ */
        .prev,
        .next {
            position: absolute;
            /* ���Զ�λ�ĺ��Ӵ�ֱ���� */
            top: 50%;
            margin-top: -15px;
            /* ���˾��Զ�λ�ĺ��ӿ���ֱ�����ø߶ȺͿ�� */
            width: 20px;
            height: 30px;
            background: rgba(0, 0, 0, .3);
            text-align: center;
            line-height: 30px;
            color: #fff;
            text-decoration: none;
        }

        .prev {
            left: 0;
            /* border-radius: 15px; */
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
        }

        .next {
            /* ���һ�����Ӽ��� left ����Ҳ�� right ���ԣ���Ĭ�ϻ�ִ�� left ���� 
            ͬ�� top bottom ��ִ�� top */
            right: 0;
            /* border-radius: 15px; */
            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
        }

        .promo-nav {
            position: absolute;
            bottom: 15px;
            left: 50%;
            margin-left: -35px;
            width: 70px;
            height: 13px;
            /* background-color: pink; */
            background: rgba(255, 255, 255, .3);
            border-radius: 7px;
        }

        .promo-nav li {
            float: left;
            width: 8px;
            height: 8px;
            background-color: #fff;
            border-radius: 50%;
            margin: 3px;
        }

        /* ��Ҫ����ѡ����Ȩ�ص����� */
        .promo-nav .selected {
            background-color: #ff5000;
        }
    </style>
</head>

<body>
    <div class="tb-promo">
        <img src="images/tb.jpg" alt="">
        <!-- ��ఴť��ͷ -->
        <a href="#" class="prev"> &lt; </a>
        <!-- �Ҳఴť��ͷ -->
        <a href="#" class="next"> &gt; </a>
        <!-- СԲ�� -->
        <ul class="promo-nav">
            <li class="selected"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</body>

</html>
```

![](img/20210411010727218.jpg)

# ������ҳ�����ܽ�

ͨ������ģ�ͣ����֪���󲿷� html ��ǩ��һ�����ӡ�

ͨ�� CSS ��������λ������ÿ���������г�Ϊ��ҳ��

һ����������ҳ���Ǳ�׼������������λһ����ɲ��ֵģ�ÿ�������Լ���ר���÷���

1. ��׼��

�����ú����������л����������У���ֱ�Ŀ鼶������ʾ���ñ�׼�����֡�

2. ����

�����ö���鼶Ԫ��һ����ʾ�������Ҷ�����ӣ�����鼶����ˮƽ��ʾ���ø������֡�

3. ��λ

��λ�����ص����в���ĸ�����ǿ����ö������ǰ���ѹ����ʾ�����Ԫ��������ĳ���������ƶ����ö�λ���֡�

**�ص㣺�����ϲ����ұ�׼���������ϲ����Ҹ������ռ��ϲ����Ҷ�λ��**

# �ġ�Ԫ�ص���ʾ������

������վ��棬�����ǵ���رվͲ����ˣ�������������ˢ��ҳ�棬�����³��֣�

���ʣ���һ��Ԫ����ҳ�������ػ�����ʾ������

ע�⣺�����أ�����ɾ����

1. display ��ʾ���أ��ѱ꣩
2. visibility ��ʾ���أ����ѱ꣩
3. overflow �����ʾ����

## 4.1 display ����

display ������������һ��Ԫ��Ӧ�����ʾ��

- `display: none`�����ض���
- `display��block`������ת��Ϊ�鼶Ԫ��֮�⣬ͬʱ������ʾԪ�ص���˼

display ����Ԫ�غ󣬲���ռ��ԭ����λ�ã�**�ѱ�**����

����Ӧ�ü���㷺������ JS �������ܶ����ҳ��Ч��

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>��ʾ����Ԫ��֮display</title>
    <style>
        .peppa {
            display: none;
            /* display: block; */
            width: 200px;
            height: 200px;
            background-color: pink;

        }

        .george {
            width: 200px;
            height: 200px;
            background-color: skyblue;
        }
    </style>
</head>

<body>
    <div class="peppa">����</div>		<!-- ���汻���� -->
    <div class="george">����</div>
</body>

</html>
```

![](img/2021041101335757.gif)

---

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>��ʾ����Ԫ��֮display</title>
    <style>
        .peppa {
            /* display: none; */
            display: block;
            width: 200px;
            height: 200px;
            background-color: pink;

        }

        .george {
            width: 200px;
            height: 200px;
            background-color: skyblue;
        }
    </style>
</head>

<body>
    <div class="peppa">����</div>		<!-- ���汻��ʾ -->
    <div class="george">����</div>
</body>

</html>
```

![](img/20210411013334551.gif)

## 4.2 visibility �ɼ���

visibility ��������ָ��һ��Ԫ��Ӧ�ɼ��������ء�

- `visibility��visible`��Ԫ�ؿ���
- `visibility��hidden`��Ԫ������

visibility **����Ԫ�غ󣬼���ռ��ԭ����λ��**��

�������Ԫ����Ҫԭ��λ�ã� ���� visibility��hidden��

�������Ԫ�ز���Ҫԭ��λ�ã� ���� display��none���ô����࣬�ص㣩��

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>��ʾ����Ԫ��֮display</title>
    <style>
        .baba {
            visibility: hidden;
            width: 200px;
            height: 200px;
            background-color: pink;

        }

        .mama {
            width: 200px;
            height: 200px;
            background-color: skyblue;
        }
    </style>
</head>

<body>
    <div class="baba">��ְ�</div>
    <div class="mama">������</div>
</body>

</html>
```

![](img/20210411013759206.gif)

## 4.3 overflow ���

overflow ����ָ��������������һ��Ԫ�صĿ�**������ָ���߶ȼ����**��ʱ���ᷢ��ʲô��

| ����ֵ    | ����                                                   |
| --------- | ------------------------------------------------------ |
| `visible` | ����������Ҳ����ӹ�������Ĭ�Ϸ�ʽ��                   |
| `hidden`  | ����ʾ��������ߴ�����ݣ������Ĳ������ص�������ɾ���� |
| `scroll`  | ���ܳ��������ݷ�������ʾ������                       |
| `auto`    | �����Զ���ʾ������������������ʾ������                 |

һ������£����Ƕ������������������ʾ��������Ϊ����Ĳ��ֻ�Ӱ�첼�֡�

��������ж�λ�ĺ��ӣ� ������ overflow: hidden ��Ϊ�������ض���Ĳ��֣����磺ѧ������ hot new ģ�飬���Ͻ��й��ⳬ���Ĳ��֣���ʱ�Ͳ���ʹ�� overflow: hidden����

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>��ʾ����Ԫ��֮overflow</title>
    <style>
        .peppa {
            /* overflow: visible; */
            /* overflow: hidden; */
            /* scroll ����Ĳ�����ʾ������  �����Ҳ��ʾ������ */
            /* overflow: scroll; */
            /* auto �����ʱ�����ʾ������ ���������ʾ������ */
            /* overflow: auto; */
            width: 200px;
            height: 200px;
            border: 3px solid pink;
            margin: 100px auto;
        }
    </style>
</head>

<body>
    <div class="peppa">
        С�����桷�����������ۺ���С�á���̨����Ϊ�ۺ�����ԭ��Ϊ��Peppa
        Pig��������Ӣ���˰�˹������Astley�������ˣ�Baker������ά˹��Davis��������
        ���ݺ�������һ��Ӣ��ѧǰ���Ӷ���Ƭ��Ҳ�����������Ǳ����ѧǰ��ͯƷ�ơ�
        ����Χ��С����������˵���쾭������Ĭ����Ȥ��
        ������ﴫͳ��ͥ���������飬����С�������������
    </div>

</body>

</html>
```

![](img/20210411015310864.jpg)

---

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>��ʾ����Ԫ��֮overflow</title>
    <style>
        .peppa {
            overflow: visible;
            /* overflow: hidden; */
            /* scroll ����Ĳ�����ʾ������  �����Ҳ��ʾ������ */
            /* overflow: scroll; */
            /* auto �����ʱ�����ʾ������ ���������ʾ������ */
            /* overflow: auto; */
            width: 200px;
            height: 200px;
            border: 3px solid pink;
            margin: 100px auto;
        }
    </style>
</head>

<body>
    <div class="peppa">
        С�����桷�����������ۺ���С�á���̨����Ϊ�ۺ�����ԭ��Ϊ��Peppa
        Pig��������Ӣ���˰�˹������Astley�������ˣ�Baker������ά˹��Davis��������
        ���ݺ�������һ��Ӣ��ѧǰ���Ӷ���Ƭ��Ҳ�����������Ǳ����ѧǰ��ͯƷ�ơ�
        ����Χ��С����������˵���쾭������Ĭ����Ȥ��
        ������ﴫͳ��ͥ���������飬����С�������������
    </div>

</body>

</html>
```

![](img/20210411015310864-164232733571925.jpg)

---

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>��ʾ����Ԫ��֮overflow</title>
    <style>
        .peppa {
            /* overflow: visible; */
            overflow: hidden;
            /* scroll ����Ĳ�����ʾ������  �����Ҳ��ʾ������ */
            /* overflow: scroll; */
            /* auto �����ʱ�����ʾ������ ���������ʾ������ */
            /* overflow: auto; */
            width: 200px;
            height: 200px;
            border: 3px solid pink;
            margin: 100px auto;
        }
    </style>
</head>

<body>
    <div class="peppa">
        С�����桷�����������ۺ���С�á���̨����Ϊ�ۺ�����ԭ��Ϊ��Peppa
        Pig��������Ӣ���˰�˹������Astley�������ˣ�Baker������ά˹��Davis��������
        ���ݺ�������һ��Ӣ��ѧǰ���Ӷ���Ƭ��Ҳ�����������Ǳ����ѧǰ��ͯƷ�ơ�
        ����Χ��С����������˵���쾭������Ĭ����Ȥ��
        ������ﴫͳ��ͥ���������飬����С�������������
    </div>

</body>

</html>
```

![](img/20210411015442418.jpg)

---

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>��ʾ����Ԫ��֮overflow</title>
    <style>
        .peppa {
            /* overflow: visible; */
            /* overflow: hidden; */
            /* scroll ����Ĳ�����ʾ������  �����Ҳ��ʾ������ */
            overflow: scroll;
            /* auto �����ʱ�����ʾ������ ���������ʾ������ */
            /* overflow: auto; */
            width: 200px;
            height: 200px;
            border: 3px solid pink;
            margin: 100px auto;
        }
    </style>
</head>

<body>
    <div class="peppa">
        С�����桷�����������ۺ���С�á���̨����Ϊ�ۺ�����ԭ��Ϊ��Peppa
        Pig��������Ӣ���˰�˹������Astley�������ˣ�Baker������ά˹��Davis��������
        ���ݺ�������һ��Ӣ��ѧǰ���Ӷ���Ƭ��Ҳ�����������Ǳ����ѧǰ��ͯƷ�ơ�
        ����Χ��С����������˵���쾭������Ĭ����Ȥ��
        ������ﴫͳ��ͥ���������飬����С�������������
    </div>

</body>

</html>
```

![](img/20210411015532804.jpg)

---

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>��ʾ����Ԫ��֮overflow</title>
    <style>
        .peppa {
            /* overflow: visible; */
            /* overflow: hidden; */
            /* scroll ����Ĳ�����ʾ������  �����Ҳ��ʾ������ */
            overflow: scroll;
            /* auto �����ʱ�����ʾ������ ���������ʾ������ */
            /* overflow: auto; */
            width: 200px;
            height: 200px;
            border: 3px solid pink;
            margin: 100px auto;
        }
    </style>
</head>

<body>
    <div class="peppa">
        С�����桷�����������ۺ���С�á���̨����Ϊ�ۺ�����ԭ��Ϊ��Peppa
        Pig��
    </div>

</body>

</html>
```

![](img/20210411015657674.jpg)

---

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>��ʾ����Ԫ��֮overflow</title>
    <style>
        .peppa {
            /* overflow: visible; */
            /* overflow: hidden; */
            /* scroll ����Ĳ�����ʾ������  �����Ҳ��ʾ������ */
            /* overflow: scroll; */
            /* auto �����ʱ�����ʾ������ ���������ʾ������ */
            overflow: auto;
            width: 200px;
            height: 200px;
            border: 3px solid pink;
            margin: 100px auto;
        }
    </style>
</head>

<body>
    <div class="peppa">
        С�����桷�����������ۺ���С�á���̨����Ϊ�ۺ�����ԭ��Ϊ��Peppa
        Pig��������Ӣ���˰�˹������Astley�������ˣ�Baker������ά˹��Davis��������
        ���ݺ�������һ��Ӣ��ѧǰ���Ӷ���Ƭ��Ҳ�����������Ǳ����ѧǰ��ͯƷ�ơ�
        ����Χ��С����������˵���쾭������Ĭ����Ȥ��
        ������ﴫͳ��ͥ���������飬����С�������������
    </div>

</body>

</html>
```

![](img/2021041101581715.jpg)

---

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>��ʾ����Ԫ��֮overflow</title>
    <style>
        .peppa {
            /* overflow: visible; */
            /* overflow: hidden; */
            /* scroll ����Ĳ�����ʾ������  �����Ҳ��ʾ������ */
            /* overflow: scroll; */
            /* auto �����ʱ�����ʾ������ ���������ʾ������ */
            overflow: auto;
            width: 200px;
            height: 200px;
            border: 3px solid pink;
            margin: 100px auto;
        }
    </style>
</head>

<body>
    <div class="peppa">
        С�����桷�����������ۺ���С�á���̨����Ϊ�ۺ�����ԭ��Ϊ��Peppa
        Pig��
    </div>

</body>

</html>
```

![](img/20210411015908937.jpg)

## 4.4 �ܽ�

1. display ��ʾ����Ԫ�� ���ǲ�����λ��
2. visibility ��ʾ����Ԫ�� ���Ǳ���ԭ����λ��
3. overflow �����ʾ���� ����ֻ�Ƕ�������Ĳ��ִ���

# �塢�ۺϰ���

**����������������꾭����ʾ���֡�**

1. ��ϰԪ�ص���ʾ������
2. ��ϰԪ�صĶ�λ

����ԭ��ԭ�Ȱ�͸���ĺ�ɫ���ֿ������� ��꾭������ӣ�����ʾ������

���ֵĺ��Ӳ�ռ��λ�ã�����Ҫ�þ��Զ�λ �� display ���ʹ�á�

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>����������ʾ�������ְ���</title>
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

        .mask {
            /* �������ֲ� */
            display: none;
            /* ��Ӷ�λʹ���ܹ��������������Ϸ� */
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .4) url(images/arr.png) no-repeat center;
        }

        /* ��������꾭���� ����������ӣ������������ֲ���ʾ���� */
        .tudou:hover .mask {
            /* ������ʾԪ�� */
            display: block;
        }
    </style>
</head>

<body>
    <div class="tudou">
        <div class="mask"></div>
        <img src="images/tudou.jpg" alt="">
    </div>
</body>

</html>
```

![](img/20210411020723514.gif)
