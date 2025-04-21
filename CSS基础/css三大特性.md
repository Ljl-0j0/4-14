<!--
 * @Description: 
 * @Author: ljl
 * @Date: 2025-04-17 14:13:10
 * @LastEditors: rendc
 * @LastEditTime: 2025-04-17 14:14:27
-->
# ��CSS�������ԡ�

CSS �������ǳ���Ҫ�����ԣ�`�����`��`�̳���`��`���ȼ�`��

## �����

��ͬһ��ѡ����������ͬ����ʽ����ʱһ����ʽ�ͻ�**����**���������һ����ͻ����ʽ��**�������Ҫ�����ʽ��ͻ������**��

�����ԭ��

- ��ʽ��ͻ����ѭ��ԭ���� `�ͽ�ԭ��`���ĸ���ʽ����ṹ������ִ���ĸ���ʽ
- ��ʽ����ͻ��������

ע���ͽ��ı�׼�ǣ�**�� > ǰ**

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS��������֮�����</title>
    <style>
        div {
            color: red;
        }

        div {
            color: pink;
        }
    </style>
</head>

<body>
    <!-- pink ɫ -->
    <div>lalal</div>
</body>

</html>
```

## �̳���

��ʵ�еļ̳У����Ǽ̳��˸��׵��ա�

CSS �еļ̳У�**�ӱ�ǩ��̳и���ǩ��ĳЩ��ʽ**���磺�ı���ɫ���ֺţ��򵥵������ǣ��ӳи�ҵ��

- ǡ����ʹ�ü̳п��Լ򻯴��룬���� CSS ��ʽ�ĸ�����
- ��Ԫ�ؿ��Լ̳и�Ԫ�ص���ʽ�� `text-`��`font-`��`line-`��`color` �� �ı������塢���䡢��ɫ

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS��������֮�̳���</title>
    <style>
        div {
            color: pink;
            font-size: 14px;
        }
    </style>
</head>

<body>
    <div>
        <p>lalala</p>
    </div>
</body>

</html>
```

**�иߵļ̳�**

```css
body {
    font: 12px/1.5 'Microsoft YaHei';
}
```

- �и߿��Ը���λҲ���Բ�����λ
- �����Ԫ��û�������иߣ����̳и�Ԫ�ص��и�Ϊ 1.5
- ��ʱ��Ԫ�ص��и��ǣ�**��ǰԪ��**��**���ִ�С** * 1.5
- body �и� 1.5 ����д���������ƾ���**�������Ԫ�ؿ��Ը����Լ����ֵĴ�С�Զ������и�**

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS��������֮�̳��ԡ����иߵļ̳�</title>
    <style>
        body {
            color: pink;
            /* font: 12px/18px; */
            font: 12px/1.5;		/* 12 + 12 * 0.5 = 18 */
        }

        div {
            /* ��Ԫ�ؼ̳��˸�Ԫ�� body ���и� 1.5 */
            /* ��� 1.5 ���ǵ�ǰԪ�����ִ�С font-size �� 1.5 �� */
            /* ���Ե�ǰ div ���и߾��ǣ�14 + 14 * 0.5 = 21px */
            font-size: 14px;
        }

        p {
            /* 1.5 * 16 = 24 ��ǰ�и� */
            font-size: 16px;
        }
        
        /* li û���ֶ�ָ�����ִ�С�����̳и��ף��˴��ĸ��׿��Բ�������ƣ������ִ�С */
        /* ����body 12px ���� li �����ִ�СΪ 12px */
        /* ��ǰ li ���и߾��� 12 * 1.5 = 18  */
    </style>
</head>
    
<body>
    <div>lalala</div>
    <p>LJL</p>
    <ul>
        <li>û��ָ�����ִ�С</li>
    </ul>
</body>

</html>
```

## ���ȼ�

- ѡ������ͬ����ִ�в����
- ѡ������ͬ�������ѡ����Ȩ��ִ��

**ѡ����Ȩ�����±���ʾ��**

| ѡ����               | ѡ����Ȩ�� |
| -------------------- | ---------- |
| �̳� ��  `*`         | `0,0,0,0`  |
| Ԫ��ѡ����           | `0,0,0,1`  |
| ��ѡ������α��ѡ���� | `0,0,1,0`  |
| ID ѡ����            | `0,1,0,0`  |
| ������ʽ style=""    | `1,0,0,0`  |
| !important ��Ҫ��    | `��` ����� |

**����**�Ƚ�λ����λ������ͬʱ�Ƚ�λ��С��

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS��������֮���ȼ�</title>
    <style>
        div {
            color: pink;
        }

        .test {
            color: red;
        }

        #demo {
            color: green;
        }
    </style>
</head>

<body>
    <div class="test">��Ц������ÿ�</div> <!-- red -->
    <div class="test" id="demo">��Ц������ÿ�</div> <!-- green -->
    <div class="test" id="demo" style="color: blue;">��Ц������ÿ�</div> <!-- blue -->
<!-- 
    ������ css ѡ���� ĳһ������ֵ������� !important����ô�������һ����ִ�У�
    ���磺div {
             color: pink !important;  
          }
          ...
    <div class="test" id="demo" style="color: blue;">��Ц������ÿ�</div> -- pink --
-->

</body>

</html>
```

**���ȼ�ע�����⣺**

- Ȩ������ 4 ��������ɵģ����ǲ����н�λ��
- �������Ϊ��`��ѡ����` ��Զ���� `Ԫ��ѡ����`��`ID ѡ����` ��Զ���� `��ѡ����`���Դ����ƣ�
- �ȼ��ж� `������`�����ĳһλ��ֵ��ͬ�����ж���һλ��ֵ
- ���Լ򵥵ļ��䣺`ͨ���` �� `�̳�` Ȩ��Ϊ 0��`��ǩѡ����` Ϊ 1��`��`��`α��`��ѡ����Ϊ 10��`ID` ѡ����Ϊ 100��`������ʽ��` Ϊ 1000��`!important` �����
- �̳е�Ȩ���� 0�����ܸ�Ԫ��Ȩ�ض�ߣ���Ԫ�صõ���Ȩ�ض��� 0 ��
- `a` ���������Ĭ��ָ����һ����ʽ��������������̳У�����������ʽ��Ҫѡ�е�������

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS��������֮���ȼ�����ע������</title>
    <style>
        /* ���׵�Ȩ���� 100 */
        #father {
            color: red !important;
        }

        /* p �̳е�Ȩ��Ϊ 0 */
        /* �����Ժ����ǿ���ǩ����ִ����һ����ʽ�����ȿ������ǩ��û��ֱ�ӱ�ѡ����
           ���ֱ�ӱ�ѡ������ˣ���ô���븸���޹��ˣ�*/
        p {
            color: pink;
        }
    </style>
</head>

<body>
    <!-- �̳е�Ȩ���� 0�����ܸ�Ԫ��Ȩ�ض�ߣ���Ԫ�صõ���Ȩ�ض��� 0 -->
    <div id="father">
        <p>�㻹�Ǻܺÿ�</p> <!-- pink -->
    </div>
    <!-- a ���������Ĭ��ָ����һ����ʽ��������������̳У����Ը� a ����ʽ����ֱ�Ӱ� a ѡ���� -->
    <a href="#">���ǵ�������ʽ</a>
</body>

</html>
```

**Ȩ�صĵ��ӣ�**

����Ǹ���ѡ�����������Ȩ�ص��ӣ���Ҫ����Ȩ�ء�

ע�⣺�ٴ�ǿ����Ȩ����Ȼ����ӣ���һ�������λ����1���Ԫ��ѡ����Ҳ�Ȳ���һ����ѡ��������

��������λ�Ƚϣ�ֻ����һλͬ���󣬲űȽ��ұ�һλ��

**���磺**

- `div ul li` ����> `0,0,0,3`
- `.nav ul li` ����> `0,0,1,2`
- `a:hover` ����> `0,0,1,1`
- `.nav a` ����> `0,0,1,1`

���Ҫ��ĳһԪ��������ʽ����ô�ͱ�������㹻�ߵ�Ȩ�أ�ע�⣺�Ǹ��������������ĸ��ף�����

> ���ѡ����Ȩ�صļ���֮һ��
>
> - ��д������ѡ����

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS��������֮���ȼ�����Ȩ�ص���</title>
    <style>
        /* ����ѡ��������Ȩ�ص��ӵ����� */
        /* Ȩ����Ȼ����ӣ�������Զ�����н�λ ���磺ʮ�� 0,0,0,1 ���Ϊ 0,0,0,10 ������ 0,0,1,0 */
        /* ul li Ȩ�� 0,0,0,1 + 0,0,0,1 = 0,0,0,2 */
        ul li {
            color: green;
        }

        /* li ��Ȩ���� 0,0,0,1 */
        li {
            color: red;
        }

        /* .nav li Ȩ�� 0,0,1,0 + 0,0,0,1 = 0,0,1,1 */
        .nav li {
            color: pink;
        }
    </style>
</head>

<body>
    <ul class="nav">
        <li>��������</li>	<!-- pink -->
        <li>������</li>	<!-- pink -->
        <li>��β��</li>	<!-- pink -->
    </ul>
</body>

</html>
```