<!--
 * @Description: 
 * @Author: ljl
 * @Date: 2025-05-19 09:18:41
 * @LastEditors: rendc
 * @LastEditTime: 2025-05-28 09:54:38
-->
# ��DOM��

# һ��DOM��������

DOM��Document Object Model���ĵ�����ģ�ͣ��� JavaScript ���� HTML �ĵ��Ľӿڣ�ʹ�ĵ�������÷ǳ����š���㡣

DOM �����ص���ǽ� HTML �ĵ���ʾΪ ���ڵ�������

DOM Ԫ��/�ڵ㣺������Ⱦ��ҳ���ϵģ�һ������ HTML ��ǩ�壨��ǩ + ���� + ���ݣ���

# ����DOM�ڵ���

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>DOM</title>
</head>

<body>
    <h1>IMOOC</h1>
    <div>
        <h2>Coder Dream</h2>
        <img src="logo.png">
        <div class="box">
            �ı�����
        </div>
    </div>
</body>

</html>
```

��DOM��

<img src="mark-img/5782ab2ac7a34aaca8b1380ee9f21089.png" style="width: 50%;" />

> ���� html �ĵ��Ͷ�Ӧһ�� document ���󣬿��Բ��� html �ĵ��������еı�ǩ�������Ժ��ı���

# ����nodeType

�ڵ�� nodeType ���Կ�����ʾ����ڵ��������͡�

`document.nodeType;	  // 9`

| nodeTypeֵ | �ڵ�����                        |
| ---------- | ------------------------------- |
| 1          | Ԫ�ؽڵ㣬���� `<p>` �� `<div>` |
| 3          | ���ֽڵ�                        |
| 8          | ע�ͽڵ�                        |
| 9          | document �ڵ�                   |
| 10         | DTD �ڵ㣨�ĵ�����������        |

# �ġ�document

## 4.1 ����Ԫ�ؽڵ�

��ν �����ʡ� Ԫ�ؽڵ㣬����ָ ���õ���������ȡ�� ҳ���ϵ�Ԫ�ؽڵ㡣

�Խڵ���в�������һ������Ҫ�õ�����

����Ԫ�ؽڵ���Ҫ���� document ����

## 4.2 ��ʶ document ����

document ������ DOM ������Ҫ�Ķ������������� DOM �Ĺ��ܶ���װ���� document �����С�

document ����Ҳ��ʾ���� HTML �ĵ������� DOM �ڵ����ĸ���

document ����� nodeType ����ֵ�� 9��

```javascript
typeof document;	// object
document.nodeType;	// 9
```

## 4.3 ����Ԫ�ؽڵ�ĳ��÷���

ע�⣺���·����Ĳ��������ַ������� `''`��

| ����                                | ����                       | ������                       |
| ----------------------------------- | -------------------------- | ---------------------------- |
| `document.getElementById()`         | ͨ�� id �õ�**Ԫ��**       | IE 6                         |
| `document.getElementsByTagName()`   | ͨ����ǩ���õ�**Ԫ������** | IE 6                         |
| `document.getElementsByClassName()` | ͨ�������õ�**Ԫ������**   | IE 9                         |
| `document.querySelector()`          | ͨ��ѡ�����õ�**Ԫ��**     | IE 8 ���ּ��ݡ�IE 9 ��ȫ���� |
| `document.querySelectorAll()`       | ͨ��ѡ�����õ�**Ԫ������** | IE 8 ���ּ��ݡ�IE 9 ��ȫ���� |

> Element��Ԫ�ء�
>
> query����ѯ��
>
> Selector��ѡ������

## 4.4 getElementById()

`document.getElementById()` ������ͨ�� id �õ�Ԫ�ؽڵ㡣

- HTML

```html
<div id="box">����һ������</div>
<p id="para">����һ������</p>
```

- JS

```javascript
var box = document.getElementById('box');
var para = document.getElementById('para');
```

��ע�����

> ���ҳ��������ͬ id ��Ԫ�أ���ֻ�ܵõ���һ����
>
> ԭ���ϣ�html ��ͬһ���Ƶ� id Ҳֻ�ܳ���һ�Ρ�

## 4.5 �ӳ�����

ͨ�� JS ����Ҫд�� HTML �ṹ����󣬷��� JS �޷��ҵ���Ӧ�� DOM �ڵ㡣

����ʹ�� `window.onload = function(){}` ���ӳ� JS ��ִ�У�ֱ�� HTML �ĵ�������Ϻ󣨴��� window.onload �¼�������ִ�к�����Ĵ��롣

> һ�� script ��ǩ�ᱻ����ͷ����β����
>
> ͷ������ `<head></head>` ���棬β��һ��ָ `</body>` ǰ����Ҳ�з��� `</body>` ֮��ģ���ò�Ҫ��������

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="box">����һ������</div>
    <p id="para">����һ������</p>
    <script>
        // ��ȡ DOM �ڵ�
        var box = document.getElementById('box');
        var para = document.getElementById('para');
        // �����ȡ���� DOM �ڵ�
        console.log(box);	// <div id="box">����һ������</div>
        console.log(para);	// <p id="para">����һ������</p>
    </script>
</body>

</html>
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        // ��ȡ DOM �ڵ�
        var box = document.getElementById('box');
        var para = document.getElementById('para');
        // �����ȡ���� DOM �ڵ�
        // ���� HTML ������˳��ִ�еģ���ִ�е��˴��� JS ����ʱ������ body �ڵ� DOM �ڵ㻹û���ü�ִ��
        console.log(box);	// null
        console.log(para);	// null
    </script>
</head>

<body>
    <div id="box">����һ������</div>
    <p id="para">����һ������</p>
</body>

</html>
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        // window.onload �¼����� HTML �ĵ�������Ϻ󴥷�
        window.onload = function () {
            // ��ȡ DOM �ڵ�
            var box = document.getElementById('box');
            var para = document.getElementById('para');
            // �����ȡ���� DOM �ڵ�
            console.log(box);	// <div id="box">����һ������</div>
            console.log(para);	// <p id="para">����һ������</p>
        }
    </script>
</head>

<body>
    <div id="box">����һ������</div>
    <p id="para">����һ������</p>
</body>

</html>
```

## 4.6 getElementsByTagName()

`getElementsByTagName()` �����Ĺ�����ͨ����ǩ���õ��ڵ����顣

> ע�⣺�õ�����һ�����飡

```html
<p>���Ƕ���</p>
<p>���Ƕ���</p>
<p>���Ƕ���</p>
<p>���Ƕ���</p>
```

```javascript
var ps = document.getElementsByTagName('p');
```

��ע�����

���鷽��������Ӷ����������ٿ�Ԫ�ؽڵ㡣

��ʹҳ����ֻ��һ��ָ����ǩ���Ľڵ㣬Ҳ���õ�����Ϊ 1 �����顣

�κ�һ���ڵ�Ԫ��Ҳ���Ե��� getElementsByTagName() �������Ӷ��õ����ڲ���ĳ�ֱ�ǩ����Ԫ�ؽڵ㡣

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        window.onload = function () {
            var ps = document.getElementsByTagName('p');
            console.log(ps);	// HTMLCollection(6) [p, p, p, p, p, p]
        }
    </script>
</head>

<body>
    <div id="box1">
        <p>���Ƕ���</p>
        <p>���Ƕ���</p>
        <p>���Ƕ���</p>
    </div>
    <div id="box2">
        <p>���Ƕ���</p>
        <p>���Ƕ���</p>
        <p>���Ƕ���</p>
    </div>
</body>

</html>
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        window.onload = function () {
            // �ȵõ� box1
            var box1 = document.getElementById('box1');
            // �õ� box1 �е� p ��ǩ������
            var ps_inbox1 = box1.getElementsByTagName('p');
            console.log(ps_inbox1);	// HTMLCollection(3) [p, p, p]
        }
    </script>
</head>

<body>
    <div id="box1">
        <p>���Ƕ���</p>
        <p>���Ƕ���</p>
        <p>���Ƕ���</p>
    </div>
    <div id="box2">
        <p>���Ƕ���</p>
        <p>���Ƕ���</p>
        <p>���Ƕ���</p>
    </div>
</body>

</html>
```

## 4.7 getElementsByClassName()

`getElementsByClassName()` �����Ĺ�����ͨ�������õ��ڵ����顣

- HTML

```html
<div class="spec">���Ǻ���</div>
<div>���Ǻ���</div>
<div class="spec">���Ǻ���</div>
<div class="spec">���Ǻ���</div>
```

- JS

```javascript
var spec_divs = document.getElementsByClassName('spec');
```

��ע�����

`getElementsByClassName()` ������ IE9 ��ʼ���ݡ�

ĳ���ڵ�Ԫ��Ҳ���Ե��� getElementsByClassName() �������Ӷ��õ����ڲ���ĳ������Ԫ�ؽڵ㡣

## 4.8 querySelector()

`querySelector()` �����Ĺ�����ͨ��ѡ�����õ�Ԫ�ء�

- HTML

```html
<div id="box1">
	<p>���Ƕ���</p>
    <p class="spec">���Ƕ���</p>
    <p>���Ƕ���</p>
</div>
```

- JS

```javascript
var the_p = document.querySelector('#box1 .spec');
```

��ע�����

querySelector() ����ֻ�ܵõ�ҳ����һ��Ԫ�أ�����ж��Ԫ�ط�����������ֻ�ܵõ���һ��Ԫ�ء�

querySelector() ������ IE8 ��ʼ���ݣ����� IE9 ��ʼ֧�� CSS3 ��ѡ�������磺`nth-child()`��`:[src^='dog']` �� CSS3 ѡ������ʽ��֧�����á�

> ע�⣺����ѡ��α�࣡

## 4.9 querySelectorAll()

`querySelectorAll()` �����Ĺ�����ͨ��ѡ�����õ�Ԫ�����顣

��ʹҳ����ֻ��һ������ѡ�����Ľڵ㣬Ҳ���õ�����Ϊ 1 �����顣

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ul id="list1">
        <li>����li</li>
        <li>����li</li>
        <li>����li</li>
        <li>����li</li>
        <li>����li</li>
    </ul>
    <ul id="list2">
        <li>����li</li>
        <li>����li</li>
        <li>����li</li>
        <li>����li</li>
        <li>����li</li>
    </ul>
    <script>
        var lis_inlist1 = document.querySelectorAll('#list1 li');

        console.log(lis_inlist1);	// NodeList(5) [li, li, li, li, li]
    </script>
</body>

</html>
```

# �塢�ڵ�Ĺ�ϵ

<img src="mark-img/3c085acf7fcb4bb98af133369c922241.png" style="width: 50%;" />

| ��ϵ           | �������н��      |
| -------------- | ----------------- |
| �ӽڵ�         | `childNodes`      |
| ���ڵ�         | `parentNode`      |
| ��һ���ӽڵ�   | `firstChild`      |
| ���һ���ӽڵ� | `lastChild`       |
| ǰһ���ֵܽڵ� | `previousSibling` |
| ��һ���ֵܽڵ� | `nextSibling`     |

��ע�⣺�ı��ڵ�Ҳ���ڽڵ㡿

DOM �У��ı��ڵ�Ҳ���ڽڵ㣬��ʹ�ýڵ�Ĺ�ϵʱһ��Ҫע�⡣

�ڱ�׼�� W3C �淶�У��հ��ı��ڵ�ҲӦ�������ڵ㣬������ IE8 ����ǰ��������л���һ���ļ������⣬���ǲ��ѿհ��ı��ڵ㵱���ڵ㡣

���ų��ı��ڵ�ĸ��š�

�� IE9 ��ʼ֧��һЩ ��ֻ����Ԫ�ؽڵ㡱 �����ԡ�

> ������Ǽ����ԣ�����ͨ������ĺ�����װ��ʵ�֡�

| ��ϵ           | �������н��      | ֻ����Ԫ�ؽڵ�           |
| -------------- | ----------------- | ------------------------ |
| �ӽڵ�         | `childNodes`      | `children`               |
| ���ڵ�         | `parentNode`      | ͬ                       |
| ��һ���ӽڵ�   | `firstChild`      | `firstElementChild`      |
| ���һ���ӽڵ� | `lastChild`       | `lastElementChild`       |
| ǰһ���ֵܽڵ� | `previousSibling` | `previousElementSibling` |
| ��һ���ֵܽڵ� | `nextSibling`     | `nextElementSibling`     |

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="box">
        <p>���Ƕ���A</p>
        <p id="para">���Ƕ���B</p>
        <p>���Ƕ���C</p>
    </div>

    <script>
        var box = document.getElementById('box');
        var para = document.getElementById('para');

        // �����ӽڵ�
        console.log(box.childNodes);
        // ���е�Ԫ���ӽڵ㣨IE9��ʼ���ݣ�
        console.log(box.children);
        console.log(box.children.para);

        // ��һ���ӽڵ�
        console.log(box.firstChild);
        console.log(box.firstChild.nodeType);
        // ��һ��Ԫ���ӽڵ㣨IE9��ʼ���ݣ�
        console.log(box.firstElementChild);

        // ���һ���ӽڵ�
        console.log(box.lastChild);
        console.log(box.lastChild.nodeType);
        // ���һ��Ԫ���ӽڵ㣨IE9��ʼ���ݣ�
        console.log(box.lastElementChild);

        // ���ڵ�
        console.log(para.parentNode);

        // ǰһ���ֵܽڵ�
        console.log(para.previousSibling);
        // ǰһ��Ԫ���ֵܽڵ㣨IE9��ʼ���ݣ�
        console.log(para.previousElementSibling);

        // ��һ���ֵܽڵ�
        console.log(para.nextSibling);
        // ��һ��Ԫ���ֵܽڵ㣨IE9��ʼ���ݣ�
        console.log(para.nextElementSibling);
    </script>
</body>

</html>
```

- ���

<img src="mark-img/59691c6f0d424e538657b10a99e55a1e.png" style="width: 50%;" />

ע�⣺�ı�Ҳ�����ڵ㣨��ͼѡ�пհײ��֣�

<img src="mark-img/5236374c628640628b2be7c232cd99b7.png" style="width:50%;" />

# ������д�����Ľڵ��ϵ����

��д IE6 Ҳ�ܼ��ݵ� ��Ѱ������Ԫ���ӽڵ㡱 ������

��д IE6 Ҳ�ܼ��ݵ� ��Ѱ��ǰһ��Ԫ���ֵܽڵ㡱 ������

��α�д���������ĳԪ�ص����е��ֵܽڵ㡣

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="box">
        <p>���Ƕ���</p>
        <p>���Ƕ���</p>
        <p>���Ƕ���</p>
        <p id="fpara">���Ƕ���fpara</p>
        �����ı�
        <!-- ����ע�� -->
        <p id="para">
            ���Ƕ���para
            <span>1</span>
            <span>2</span>
            <span>3</span>
        </p>
        <p>���Ƕ���</p>
        <p>���Ƕ���</p>
        <p>���Ƕ���</p>
    </div>

    <script>
        var box = document.getElementById('box');
        var para = document.getElementById('para');
        var fpara = document.getElementById('fpara');

        // ��װһ������������������Է���Ԫ�ص�������Ԫ�ؽڵ㣨���ݵ� IE6�������� children �Ĺ���
        function getChildren(node) {
            // �������
            var children = [];
            // ���� node ����ڵ�������ӽڵ㣬�ж�ÿһ���ӽڵ�� nodeType �����ǲ��� 1
            // ����� 1��������������
            for (var i = 0; i < node.childNodes.length; i++) {
                if (node.childNodes[i].nodeType == 1) {
                    children.push(node.childNodes[i]);
                }
            }
            return children;
        }

        console.log(getChildren(box));
        console.log(getChildren(para));

        // ��װһ������������������Է���Ԫ�ص�ǰһ��Ԫ���ֵܽڵ㣨���ݵ� IE6�������� previousElementSibling �Ĺ���
        function getElementPrevSibling(node) {
            var o = node;
            // ʹ�� while ���
            while (o.previousSibling != null) {
                if (o.previousSibling.nodeType == 1) {
                    // ����ѭ�����ҵ���
                    return o.previousSibling;
                }
                // �� o ��Ϊ����ǰһ���ڵ�
                o = o.previousSibling;
            }
            return null;
        }

        console.log(getElementPrevSibling(para));
        console.log(getElementPrevSibling(fpara));

        // ��װ����������������������Է���Ԫ�ص�����Ԫ���ֵܽڵ�
        function getAllElementSibling(node) {
            // ǰ���Ԫ���ֵܽڵ�
            var prevs = [];
            // �����Ԫ���ֵܽڵ�
            var nexts = [];

            var o = node;
            // ���� node ��ǰ��Ľڵ�
            while (o.previousSibling != null) {
                if (o.previousSibling.nodeType == 1) {
                    prevs.unshift(o.previousSibling);
                }
                o = o.previousSibling;
            }

            o = node;

            // ���� node �ĺ���Ľڵ�
            while (o.nextSibling != null) {
                if (o.nextSibling.nodeType == 1) {
                    nexts.push(o.nextSibling);
                }
                o = o.nextSibling;
            }

            // ������������кϲ���Ȼ�󷵻�
            return prevs.concat(nexts);
        }

        console.log(getAllElementSibling(para));
    </script>
</body>

</html>
```

# �ߡ��ڵ����

## 7.1 ��θı�Ԫ�ؽڵ��е�����

�ı�Ԫ�ؽڵ��е����ݿ���ʹ������������ԡ�

- `innerHTML`
- `innerText`

`innerHTML` �������� HTML �﷨���ýڵ��е����ݡ�

`innerText` ����ֻ���Դ��ı�����ʽ���ýڵ��е����ݡ�

- innerHTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="box"></div>
    <script>
        var oBox = document.getElementById('box');
        oBox.innerHTML = '�ܼ���';
    </script>
</body>

</html>
```

<img src="mark-img/5a0f6903a8dc4f35977d19e63360f167.png" style="width: 33%;" />

- innerHTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="box"></div>
    <script>
        var oBox = document.getElementById('box');
        // ע�⣺�˴��� HTML �ַ����������У�
        oBox.innerHTML = '<ul><li>ţ��</li><li>����</li></ul>';
    </script>
</body>

</html>
```

<img src="mark-img/93d396b4ae784751b781fb2e9402c53c.png" style="width: 25%;" />

- innerText

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="box"></div>
    <script>
        var oBox = document.getElementById('box');
        oBox.innerText = '�ܼ���';
    </script>
</body>

</html>
```

<img src="mark-img/3492cc06309c4c08a156e35cd06eab45.png" style="width: 33%;" />

- innerText

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="box"></div>
    <script>
        var oBox = document.getElementById('box');
        oBox.innerText = '<ul><li>ţ��</li><li>����</li></ul>';
    </script>
</body>

</html>
```

<img src="mark-img/c8210b44616242fc9b3465ac93d23c23.png" style="width: 33%;" />

## 7.2 ��θı�Ԫ�ؽڵ��CSS��ʽ

�ı�Ԫ�ؽڵ�� CSS ��ʽ��Ҫʹ����������䣺

- `oBox.style.backgroundColor = 'red';`
- `oBox.style.backgroundImage = 'url(images/1.jpg)';`
- `oBox.style.fontSize = '32px';`

��ע�����

- CSS ����Ҫд�� ���շ塱 ��ʽ
- CSS ����ֵҪ���ó�������ʽ
- ע��д��λ

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            width: 200px;
            height: 200px;
            border: 1px solid #000;
        }
    </style>
</head>

<body>
    <div class="box" id="box">
        ���
    </div>

    <script>
        var oBox = document.getElementById('box');
        oBox.style.backgroundColor = 'rgb(100, 200, 123)';
        oBox.style.backgroundColor = '#f80';
        oBox.style.backgroundImage = 'url(https://www.imooc.com/static/img/index/logo-recommended.png)';
        oBox.style.backgroundSize = 'contain';
        oBox.style.fontSize = '50px';
    </script>
</body>

</html>
```

> JS �޸ĵ� CSS ��ʽ����������ʽ�����ȼ���ߣ����Կ��Ը���ԭ�е���ʽ��

## 7.3 ��θı�Ԫ�ؽڵ��HTML����

��׼ W3C ���ԣ��� `src`��`href`��`title`��`alt` �ȵȣ�ֻ��Ҫֱ�Ӵ����и��ļ��ɡ�

`oImg.src = 'images/2.jpg';`

��������

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <img src="images/1.jpg" id="pic">
    <a href="http://www.baidu.com" id="link">
        ȥ�ٶ�
    </a>

    <script>
        var oPic = document.getElementById('pic');
        var oLink = document.getElementById('link');
        oPic.src = 'images/2.jpg';
        oLink.href = 'http://www.imooc.com';
        oLink.innerText = 'ȥĽ����';
    </script>
</body>

</html>
```

���ڲ����� W3C ��׼�����ԣ�Ҫʹ�� `setAttribute()` �� `getAttribute()` �����á���ȡ��

```javascript
oBox.setAttribute('data-n', 10);
var n = oBox.getAttribute('data-n');
alert(n);
```

> HTML ���Զ������ԣ���Ҫ��;������ JS ��Ϸ���ʵ��һЩЧ����

��������

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="box"></div>

    <script>
        var box = document.getElementById('box');
        box.setAttribute('data-n', 10);
        var n = box.getAttribute('data-n');
        alert(n);
    </script>
</body>

</html>
```

<img src="mark-img/2fba8d550d464f37ae300e2b54eed0ce.png" style="width:35%;" />

# �ˡ��ڵ�Ĵ������ƶ���ɾ���Ϳ�¡

## 8.1 �ڵ�Ĵ���

`document.createElement()` �������ڴ���һ��ָ�� tag name �� HTML Ԫ�ء�

```javascript
var oDiv = document.createElement('div');
```

## 8.2 "�¶��ڵ�"

�´������Ľڵ��� ���¶��ڵ㡱������ζ������û�б����ص� DOM ���ϣ������޷���������

�������ʹ�� `appendChild()` �� `insertBefore()` �������¶��ڵ���뵽 DOM ���ϡ�

### 8.2.1 appendChild()

�κ��Ѿ��� DOM ���ϵĽڵ㣬�����Ե��� appendChild() �����������Խ��¶��ڵ���ص������ڲ�����Ϊ�������һ���ӽڵ㡣

```javascript
���ڵ�.appendChild(�¶��ڵ�);
```

��С������

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="box">
        <p>����ԭ���Ķ���0</p>
        <p>����ԭ���Ķ���1</p>
        <p>����ԭ���Ķ���2</p>
    </div>
    <script>
        var oBox = document.getElementById('box');
        // �����¶��ڵ�
        var oP = document.createElement('p');
        // �����ڲ�����
        oP.innerText = '����������';
        // ����
        oBox.appendChild(oP);
    </script>
</body>

</html>
```

<img src="mark-img/e2ffcdd3c509446280c97bc1450c49f3.png" style="width:24%;" />

### 8.2.2 insertBefore()

�κ��Ѿ��� DOM ���ϵĽڵ㣬�����Ե��� insertBefore() �����������Խ��¶��ڵ���ص������ڲ�����Ϊ���� ������ӽڵ㡱 ֮ǰ�Ľڵ㡣

```javascript
���ڵ�.insertBefore(�¶��ڵ�, ��˽ڵ�);
```

��С������

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="box">
        <p>����ԭ���Ķ���0</p>
        <p>����ԭ���Ķ���1</p>
        <p>����ԭ���Ķ���2</p>
    </div>
    <script>
        var oBox = document.getElementById('box');
        var oPs = oBox.getElementsByTagName('p');
        // �����¶��ڵ�
        var oP = document.createElement('p');
        // �����ڲ�����
        oP.innerText = '����������';
        // ����
        oBox.insertBefore(oP, oPs[1]);
    </script>
</body>

</html>
```

<img src="mark-img/de9796a998234c4b9bfaa3bddf70687d.png" style="width:25%;" />

## 8.3 �ڵ㴴��С����

����̬����һ��20��12�еı��

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        td {
            width: 20px;
            height: 20px;
            border: 1px solid #000;
        }
    </style>
</head>

<body>
    <table id="mytable"></table>

    <script>
        // �붯̬������һ�� 20 �� 12 �еı��
        var mytable = document.getElementById('mytable');

        for (var i = 0; i < 20; i++) {
            // �������µ� tr ��ǩ
            var tr = document.createElement('tr');
            for (var j = 0; j < 12; j++) {
                // �������µ� td ��ǩ
                var td = document.createElement('td');
                // �� tr ׷�� td ��ǩ
                tr.appendChild(td);
            }
            // �� mytable ׷�� tr ��ǩ
            mytable.appendChild(tr);
        }
    </script>
</body>

</html>
```

<img src="mark-img/260e2e4ae2b54cdcb2e60c6e29a0d9ca.png" style="width:25%;" />

���žų˷���

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        td {
            width: 80px;
            height: 30px;
            padding-left: 10px;
            border: 1px solid #000;
        }
    </style>
</head>

<body>
    <table id="mytable"></table>

    <script>
        // �봴���žų˷���
        var mytable = document.getElementById('mytable');

        for (var i = 1; i <= 9; i++) {
            // �������µ� tr ��ǩ
            var tr = document.createElement('tr');
            for (var j = 1; j <= i; j++) {
                // �������µ� td ��ǩ
                var td = document.createElement('td');
                // ���� td �ڲ�������
                td.innerText = i + '��' + j + '=' + (i * j);
                // ��tr׷�� td ��ǩ
                tr.appendChild(td);
            }
            // �� mytable ׷�� tr ��ǩ
            mytable.appendChild(tr);
        }
    </script>
</body>

</html>
```

<img src="mark-img/86dcaf404820444abe361c3a5ea4a670.png" style="width: 50%;" />

## 8.4 �ƶ��ڵ�

������Ѿ����ص� DOM ���ϵĽڵ��Ϊ `appendChild()` ���� `insertBefore()` �Ĳ���������ڵ㽫�ᱻ�ƶ���

```javascript
�¸��ڵ�.appendChild(�Ѿ��и��׵Ľڵ�);
```

```javascript
�¸��ڵ�.insertBefore(�Ѿ��и��׵Ľڵ�, ����ӽڵ�);
```

����ζ��һ���ڵ㲻��ͬʱλ�� DOM ��������λ�á�

��С������

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="box1">
        <p id="para">���Ƕ���</p>
    </div>

    <div id="box2">
        <p>����box2��ԭ��p��ǩ</p>
        <p>����box2��ԭ��p��ǩ</p>
        <p>����box2��ԭ��p��ǩ</p>
        <p>����box2��ԭ��p��ǩ</p>
    </div>

    <script>
        var box2 = document.getElementById('box2');
        var para = document.getElementById('para');
        var ps_inbox2 = box2.getElementsByTagName('p');

        box2.insertBefore(para, ps_inbox2[2]);
    </script>
</body>

</html>
```

<img src="mark-img/7cd9c894d8e04e0cbb64ce710df9aab6.png" style="width:25%;" />

## 8.5 ɾ���ڵ�

`removeChild()` ������ DOM ��ɾ��һ���ӽڵ㡣

```javascript
���ڵ�.removeChild(Ҫɾ���ӽڵ�);
```

�ڵ㲻������ɾ���Լ��������ɸ��ڵ�ɾ������

��С������

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="box">
        <p>����p�ڵ�0</p>
        <p>����p�ڵ�1</p>
        <p>����p�ڵ�2</p>
    </div>

    <script>
        var box = document.getElementById('box');
        var the_first_p = box.getElementsByTagName('p')[0];

        box.removeChild(the_first_p);
    </script>
</body>

</html>
```

<img src="mark-img/8ba0e61b217a42a28e3e3ecec215ff58.png" style="width:25%;" />

## 8.6 ��¡�ڵ�

`cloneNode()` �������Կ�¡�ڵ㣬��¡���Ľڵ��� ���¶��ڵ㡱��

�������ʹ�� `appendChild()` �� `insertBefore()` �������¶��ڵ���뵽 DOM ���ϡ�

```javascript
var �¶��ڵ� = �Ͻڵ�.cloneNode();
var �¶��ڵ� = �Ͻڵ�.cloneNode(true);
```

������һ������ֵ����ʾ�Ƿ������ȿ�¡�����Ϊ true����ýڵ�����к���ڵ�Ҳ�ᱻ��¡�����Ϊ false����ֻ��¡�ýڵ㱾��

��С������

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="box1">
        <ul>
            <li>ţ��</li>
            <li>����</li>
            <li>����</li>
        </ul>
    </div>

    <div id="box2"></div>

    <script>
        var box1 = document.getElementById('box1');
        var box2 = document.getElementById('box2');
        var theul = box1.getElementsByTagName('ul')[0];

        // ��¡�ڵ�
        var new_ul = theul.cloneNode(true);
        box2.appendChild(new_ul);
    </script>
</body>
</html>
```

<img src="mark-img/fe25a44f19804275a1ff3d8e7a750759.png" style="width:25%;" />

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="box1">
        <ul>
            <li>ţ��</li>
            <li>����</li>
            <li>����</li>
        </ul>
    </div>

    <div id="box2"></div>

    <script>
        var box1 = document.getElementById('box1');
        var box2 = document.getElementById('box2');
        var theul = box1.getElementsByTagName('ul')[0];

        // ��¡�ڵ�
        var new_ul = theul.cloneNode(false);
        box2.appendChild(new_ul);
    </script>
</body>
</html>
```

<img src="mark-img/41d2b250d63e4fd3bf14752815602cfe.png" style="width:25%;" />

# �š��¼�����

DOM ����������д JavaScript �������� HTML Ԫ��������Ӧ��

ʲô�� ���¼������û�����ҳ�Ľ���������

## 9.1 ʲô���¼�����

�������� ����˼�壬�����ü������ʱ�ܹ���������¼������ˣ��Ӷ�ִ�г���ԱԤ�ȱ�д�õ�һЩ����

�����¼������ķ�����Ҫ�� `onxxx` �� `addEventListener()` ���֣����ߵ������� ���¼������� һ���н��ܡ�

> ԭʼ���¼�����������ֱ��ͨ���¼��󶨺�����
>
> ���磺
>
> HTML��`<button onclick="add();">���</button>`
>
> JS��`function add() { alert("���"); }`
>
> ���Ϸ�ʽ���Ƽ�ʹ�ã�����

## 9.2 ��򵥵������¼������ķ���

��򵥵ĸ�Ԫ�������¼������ķ��������������ǵ� `onxxx` ���ԣ���������

```javascript
oBox.onclick = function() {
    // �������ʱ����ִ����������
}
```

````javascript
function fun() {
    ...
}

oBox.onclick = fun;
````

��С������

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: #ccc;
        }
    </style>
</head>

<body>
    <div id="box"></div>
    <script>
        var oBox = document.getElementById('box');

        // ��box���������ӵ���¼�����
        oBox.onclick = function () {
            alert('��ã����ǵ���¼�����');
        };
    </script>
</body>

</html>
```

## 9.3 ����������¼�����

| �¼���         | �¼�����                                     |
| -------------- | -------------------------------------------- |
| `onclick`      | ����굥��ĳ������                           |
| `ondblclick`   | �����˫��ĳ������                           |
| `onmousedown`  | ��ĳ����갴����ĳ�������ϱ�����             |
| `onmouseup`    | ��ĳ����갴����ĳ�������ϱ��ɿ�             |
| `onmousemove`  | ��ĳ����갴����ĳ�������ϱ��ƶ�             |
| `onmouseenter` | ��������ĳ�����������¼� `onmouseover`�� |
| `onmouseleave` | ������뿪ĳ�����������¼� `onmouseout`��  |

## 9.4 �����ļ����¼�����

| �¼���       | �¼�����                                                     |
| ------------ | ------------------------------------------------------------ |
| `onkeypress` | ��ĳ�����̵ļ������£�ϵͳ��ť���ͷ���͹��ܼ��޷��õ�ʶ�� |
| `onkeydown`  | ��ĳ�����̵ļ������£�ϵͳ��ť����ʶ�𣬲��һ����� `onkeypress` ������ |
| `onkeyup`    | ��ĳ�����̵ļ����ɿ�                                         |

## 9.5 �����ı��¼�����

| �¼���     | �¼�����                                  |
| ---------- | ----------------------------------------- |
| `onchange` | ���û��ı�����������                    |
| `onfocus`  | ��ĳԪ�ػ�ý��㣨���� tab ����������� |
| `onblur`   | ��ĳԪ��ʧȥ����                          |
| `onsubmit` | �������ύ                              |
| `onreset`  | ����������                              |

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form id="myform">
        <p>
            ������
            <input type="text" name="nameField">
        </p>
        <p>
            ���䣺
            <input type="text" name="ageField">
        </p>
        <p>
            <input type="submit">
        </p>
    </form>

    <script>
        var myform = document.getElementById('myform');
        // ���������ͨ�� ����㡱 name ���ԣ��õ��������Ԫ�ء�
        var nameField = myform.nameField;
        var ageField = myform.ageField;

        nameField.onchange = function () {
            console.log('���Ѿ��޸���������');
        };

        nameField.oninput = function () {
            console.log('�������޸�����');
        };

        nameField.onfocus = function () {
            console.log('�������Ѿ��õ��˽���');
        }

        nameField.onblur = function () {
            console.log('�������Ѿ�ʧȥ�˽���');
        }

        myform.onsubmit = function () {
            alert('�����ڳ����ύ��');
         /* return true;  ����ʡ�ԣ�Ĭ��ִ�б��ύ */
         /* return false; ��ִ�б��ύ�������û���Ϣ��д��ȫ�Ͳ�Ӧ���ύ�� */
        }
    </script>
</body>

</html>
```

> ���������ͨ�� ����㡱 name ���ԣ��õ��������Ԫ�ء�

## 9.6 ������ҳ���¼�����

| �¼���     | �¼�����               |
| ---------- | ---------------------- |
| `onload`   | ��ҳ���ͼ����ɼ��� |
| `onunload` | ���û��˳�ҳ��         |

�����йش��ڻ�ҳ����¼��� BOM �γ��н��ܡ�

# ʮ���¼�����

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box1 {
            width: 202px;
            height: 202px;
            border: 1px solid #000;
            padding: 50px;
        }

        #box2 {
            width: 100px;
            height: 100px;
            border: 1px solid #000;
            padding: 50px;
        }

        #box3 {
            width: 100px;
            height: 100px;
            border: 1px solid #000;
        }
    </style>
</head>

<body>
    <div id="box1">
        <div id="box2">
            <div id="box3"></div>
        </div>
    </div>
    <script>
        var oBox1 = document.getElementById('box1');
        var oBox2 = document.getElementById('box2');
        var oBox3 = document.getElementById('box3');

        oBox2.onclick = function () {
            console.log('���� box2 �� onclick');
        };

        oBox3.onclick = function () {
            console.log('���� box3 �� onclick');
        };

        oBox1.onclick = function () {
            console.log('���� box1 �� onclick');
        };
    </script>
</body>

</html>
```

<img src="mark-img/7732a11fa88f4524985552ac4080e6ae.png" style="width:25%;" />

<img src="mark-img/949aed65331840478a6749dac642a196.png" style="width: 50%;" />

<img src="mark-img/87664139d4af41c9b2040f3eca05171e.png" style="width:50%;" />

## 10.1 ����׶κ�ð�ݽ׶�

<img src="mark-img/28a5ea37ffba43a5bf367b9f7033efb8.png" style="width:50%;" />

## 10.2 onxxxд��ֻ�ܼ���ð�ݽ׶�

<img src="mark-img/518daf0ad2e94eb09e7545e0eeea489e.png" style="width:50%;" />

## 10.3 addEventListener()����

```javascript
oBox.addEventListener('click', function(){}, true);
```

> Event���¼�

<img src="mark-img/8d112b4208944d75bdd3e655b4b8a7b4.png" style="width:50%;" />

��С������

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box1 {
            width: 202px;
            height: 202px;
            border: 1px solid #000;
            padding: 50px;
        }

        #box2 {
            width: 100px;
            height: 100px;
            border: 1px solid #000;
            padding: 50px;
        }

        #box3 {
            width: 100px;
            height: 100px;
            border: 1px solid #000;
        }
    </style>
</head>

<body>
    <div id="box1">
        <div id="box2">
            <div id="box3"></div>
        </div>
    </div>
    <script>
        var oBox1 = document.getElementById('box1');
        var oBox2 = document.getElementById('box2');
        var oBox3 = document.getElementById('box3');

        oBox1.onclick = function () {
            console.log('����box1��onclick');
        };

        oBox2.onclick = function () {
            console.log('����box2��onclick');
        };

        oBox3.onclick = function () {
            console.log('����box3��onclick');
        };

        oBox3.addEventListener('click', function () {
            console.log('����box3�Ĳ���׶�');
        }, true);

        oBox2.addEventListener('click', function () {
            console.log('����box2�Ĳ���׶�');
        }, true);

        oBox1.addEventListener('click', function () {
            console.log('����box1�Ĳ���׶�');
        }, true);


        oBox1.addEventListener('click', function () {
            console.log('����box1��ð�ݽ׶�');
        }, false);

        oBox2.addEventListener('click', function () {
            console.log('����box2��ð�ݽ׶�');
        }, false);

        oBox3.addEventListener('click', function () {
            console.log('����box3��ð�ݽ׶�');
        }, false);
    </script>
</body>

</html>
```

<img src="mark-img/b1d04ae4a389469cb9612cf9399bd838.png" style="width: 25%;" />

��ע�����

- ���ڲ�Ԫ�ز������ֲ����ð�ݽ׶Σ�����ִ��д��ǰ��ļ�����Ȼ��ִ�к�д�ļ���

> ԭ���Ȳ�����������ڲ㣬Ȼ������ڲ㿪ʼð�ݣ���ʱ�������ڲ�Ԫ����˵�������ð�ݶ���ͬһʱ��Σ�����˭д��ǰ����ִ��˭��

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box1 {
            width: 202px;
            height: 202px;
            border: 1px solid #000;
            padding: 50px;
        }

        #box2 {
            width: 100px;
            height: 100px;
            border: 1px solid #000;
            padding: 50px;
        }

        #box3 {
            width: 100px;
            height: 100px;
            border: 1px solid #000;
        }
    </style>
</head>

<body>
    <div id="box1">
        <div id="box2">
            <div id="box3"></div>
        </div>
    </div>
    <script>
        var oBox1 = document.getElementById('box1');
        var oBox2 = document.getElementById('box2');
        var oBox3 = document.getElementById('box3');

        oBox3.onclick = function () {
            console.log('����box3��onclick');
        };

        oBox3.addEventListener('click', function () {
            console.log('����box3��ð�ݽ׶�');
        }, false);

        oBox3.addEventListener('click', function () {
            console.log('����box3�Ĳ���׶�');
        }, true);
    </script>
</body>

</html>
```

```text
����box3��onclick
����box3��ð�ݽ׶�
����box3�Ĳ���׶�
```

> ע�⣺���°�� Chrome �ж�Ĭ����ִ�����ڲ�Ԫ�صĲ�����ִ��ð�ݣ�

- �����Ԫ��������ͬ����������ͬ���¼����� onclick д������д�ĻḲ����д�ģ��� addEventListener �ᰴ˳��ִ�У�ԭ���� onclick ������ֵ��λᷢ�����ǣ�

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box1 {
            width: 202px;
            height: 202px;
            border: 1px solid #000;
            padding: 50px;
        }

        #box2 {
            width: 100px;
            height: 100px;
            border: 1px solid #000;
            padding: 50px;
        }

        #box3 {
            width: 100px;
            height: 100px;
            border: 1px solid #000;
        }
    </style>
</head>

<body>
    <div id="box1">
        <div id="box2">
            <div id="box3"></div>
        </div>
    </div>
    <script>
        var oBox1 = document.getElementById('box1');
        var oBox2 = document.getElementById('box2');
        var oBox3 = document.getElementById('box3');

        oBox2.onclick = function () {
            alert('A');
        };

        oBox2.onclick = function () {
            alert('B');
        };

        oBox2.addEventListener('click', function () {
            alert('C');
        }, false);

        oBox2.addEventListener('click', function () {
            alert('D');
        }, false);
    </script>
</body>

</html>
```

<img src="mark-img/22f213b615f64aef95c28b60c3fdd260.png" style="width: 25%;" />

## 10.4 removeEventListener()����

������ addEventListener() �󣬸ü����¼��ͻ�һֱ��Ч��ֱ���ر�ҳ������Ƴ��ö�Ӧ�ļ�����

removeEventListener() ���������Ƴ������¼���ֻ���Ƴ����������ļ������ҷ������ƺ��治�ܴ���

```javascript
var body = document.querySelector('body'),
var clickTarget = document.getElementById('click-target'),
var mouseOverTarget = document.getElementById('mouse-over-target'),
var toggle = false;

// ��������
function makeBackgroundYellow() {
    'use strict';

    if (toggle) {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'yellow';
    }

    toggle = !toggle;
}

// ע�����
clickTarget.addEventListener('click',
    makeBackgroundYellow,
    false
);

// ע�����
mouseOverTarget.addEventListener('mouseover', function () {
    'use strict';

    // �Ƴ�����
    clickTarget.removeEventListener('click',
        makeBackgroundYellow,
        // ����ָ�����Ƴ�ð�����͵ģ����ǲ������͵ģ�
        false
    );
});
```

## 10.5 �ر�ע��

addEventListener() һ��ע��ĳ���¼�����ô����¼��ǻ�һֱ��Ч�ģ������Ǹ�ע���¼�д��ĳ�������У��Ǹ����������Ѿ������ˣ����Ǹ��¼����ǻ���ڣ���Ϊ�¼���ע����ֱ�Ӱ󶨵���Ӧ��Ԫ���ϵģ��������첽�ģ�����ҳ�汻�رգ��������Ƴ��ü�����

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="btn">���</button>
    <script>
        var btn = document.getElementById('btn');

        function demo() {
            console.log('btn');
        }

        function test() {
            btn.addEventListener('click', demo, false);
            return 'over';
        }
        
        console.log(test());
    </script>
</body>

</html>

ִ�н����
over
�������ť��
btn
```

> �ر�ע�⣺�¼��������������û�п��ƣ���ô�¼��������ȴ� document ����ʼ���¼�ð�������� document ����

# ʮһ���¼�����

## 11.1 ʲô���¼�����

�¼��������ṩһ����ʽ����������һ�����󣬷�װ�˱����¼���ϸ�ڡ�

�������ͨ���õ��� `event` ����ĸ `e` ����ʾ��

```javascript
oBox.onmousemove = function(e) {
    // ���� e ��������¼��ġ��¼�����
}
```

> ������� e ���ܵ�ֵ������������ϵͳ���ݡ�

## 11.2 ���λ��

| ����      | ��������                           |
| --------- | ---------------------------------- |
| `clientX` | ���ָ��������������ˮƽ����     |
| `clientY` | ���ָ�������������Ĵ�ֱ����     |
| `pageX`   | ���ָ�������������ҳ��ˮƽ����   |
| `pageY`   | ���ָ�������������ҳ�Ĵ�ֱ����   |
| `offsetX` | ���ָ��������¼�ԴԪ�ص�ˮƽ���� |
| `offsetY` | ���ָ��������¼�ԴԪ�صĴ�ֱ���� |

- �����

<img src="mark-img/cfd65b2855084028ac209f18da9ab32f.png" style="width:33%;" />

- ������ҳ

<img src="mark-img/b8e255e4f8f54dd4aefd2139a518ceb1.png" style="width:33%;" />

- �¼�Դ

<img src="mark-img/96059664dd5e4ceb8535973c9b17dbb5.png" style="width: 33%;" />

��С������

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        #box {
            width: 200px;
            height: 200px;
            background-color: #333;
            margin: 100px;
            margin-top: 150px;
        }

        body {
            height: 2000px;
        }

        #info {
            font-size: 30px;
            margin: 60px;
        }
    </style>
</head>

<body>
    <div id="box"></div>
    <div id="info"></div>

    <script>
        var oBox = document.getElementById('box');
        var oInfo = document.getElementById('info');

        oBox.onmousemove = function (e) {
            oInfo.innerHTML = 'offsetX/Y��' + e.offsetX + ',' + e.offsetY + '<br>'
                + 'clientX/Y��' + e.clientX + ',' + e.clientY + '<br>'
                + 'pageX/Y��' + e.pageX + ',' + e.pageY;
        };
    </script>
</body>

</html>
```

<img src="mark-img/709b6caf822e40e1af8d3b262244d786.gif" style="width: 25%;" />

��ע�����

���� offsetX �� offsetY ���ԣ����������ڲ�Ԫ��Ϊ�¼�Դ��

> ����Ӧ�����¼�Դ�����ڲ���С���ӵĴ��ڡ�

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        #box {
            overflow: hidden;
            width: 200px;
            height: 200px;
            background-color: #333;
            margin: 100px;
            margin-top: 150px;
        }

        body {
            height: 2000px;
        }

        #info {
            font-size: 30px;
            margin: 60px;
        }

        p {
            width: 100px;
            height: 100px;
            background-color: pink;
            margin: 50px;
        }
    </style>
</head>

<body>
    <div id="box">
        <p></p>
    </div>
    <div id="info"></div>

    <script>
        var oBox = document.getElementById('box');
        var oInfo = document.getElementById('info');

        oBox.onmousemove = function (e) {
            oInfo.innerHTML = 'offsetX/Y��' + e.offsetX + ',' + e.offsetY + '<br>';
        };
    </script>
</body>

</html>
```

<img src="mark-img/b64bdf28426a44b79b412db5fb20ccb6.gif" style="width:25%;" />

## 11.3 e.charCode��e.keyCode����

`e.charCode` ����ͨ������ `onkeypress` �¼��У���ʾ�û�������ַ��� ���ַ��롱��

`e.keyCode` ����ͨ������ `onkeydown` �¼��� `onkeyup` �У���ʾ�û����µİ����� �����롱��

### 11.3.1 charCode�ַ���

| �ַ�    | �ַ���   |
| ------- | -------- |
| `0 ~ 9` | 48 ~ 57  |
| `A ~ Z` | 65 ~ 90  |
| `a ~ z` | 97 ~ 122 |

### 11.3.2 keyCode����

| ����               | ����                                |
| ------------------ | ----------------------------------- |
| `0 ~ 9`            | 48 ~ 57��ͬ charCode ������ȫ��ͬ�� |
| `A ~ Z` `a ~ z`    | 65 ~ 90����ĸ���ִ�Сд��           |
| ����� `�� �� �� ��`   | 37��38��39��40                      |
| �˸�� `Backspace` | 8                                   |
| `Tab`              | 9                                   |
| �س��� `enter`     | 13                                  |
| `Shift`            | 16                                  |
| `Ctrl`             | 17                                  |
| `Alt`              | 18                                  |
| ��С�� `CapsLK`    | 20                                  |
| `Esc`              | 27                                  |
| �ո�� `space`     | 32                                  |
| ɾ���� `Delete`    | 46                                  |
| ��ʼ�� `Start`     | 91                                  |
| `F1 ~ F12`         | 112 ~ 123                           |

> ����ֻ�ǲ��֣�

### 11.3.3 ����

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <input type="text" id="field1">
    <h1 id="info1"></h1>
    <input type="text" id="field2">
    <h1 id="info2"></h1>

    <script>
        var oField1 = document.getElementById('field1');
        var oInfo1 = document.getElementById('info1');
        var oField2 = document.getElementById('field2');
        var oInfo2 = document.getElementById('info2');

        oField1.onkeypress = function (e) {
            oInfo1.innerText = '��������ַ����ַ�����' + e.charCode;
        };

        oField2.onkeydown = function (e) {
            oInfo2.innerText = '�㰴�µİ����ļ�����' + e.keyCode;
        };
    </script>
</body>

</html>
```

<img src="mark-img/99770e9c9af8412ca9db1aa8552d6d83.gif" style="width:50%;" />

��С���� - �����ƶ���

����һ����Ч������������Կ���ҳ���ϵĺ����ƶ���

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box {
            position: absolute;
            top: 200px;
            left: 200px;
            width: 100px;
            height: 100px;
            background-color: orange;
        }

        #info {
            position: fixed;
        }
    </style>
</head>

<body>
    <div id="box"></div>
    <h1 id="info"></h1>

    <script>
        var oBox = document.getElementById('box');
        var oInfo = document.getElementById('info');

        // ȫ�ֱ��� t��l���ֱ��ʾ���ӵ� top ����ֵ�� left ����ֵ
        var t = 200;
        var l = 200;

        // ���� document ����ļ��̰����¼���������ʾ���û���������ҳ�ϰ��°�����ʱ��
        document.onkeydown = function (e) {
            oInfo.innerText = '�㰴�µİ����ļ�����' + e.keyCode;

            switch (e.keyCode) {
                case 37:
                    l -= 3;
                    break;
                case 38:
                    t -= 3;
                    break;
                case 39:
                    l += 3;
                    break;
                case 40:
                    t += 3;
                    break;
            }

            // ������ʽ
            oBox.style.left = l + 'px';
            oBox.style.top = t + 'px';
        };
    </script>
</body>

</html>
```

<img src="mark-img/f8a977b365214fbea637f829c704a014.gif" style="width: 33%;" />

## 11.4 e.preventDefault()����

`e.preventDefault()` ����������ֹ�¼������� ��Ĭ�϶�������

һЩ�����ҵ��������Ҫ��ֹ�¼��� ��Ĭ�϶�������

��С����1��

����һ���ı���ֻ�����û�����������Сд��ĸ�����֣������ַ�����û��Ч����

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <p>
        ֻ������Сд��ĸ�����֣�
        <input type="text" id="field">
    </p>
    <script>
        var oField = document.getElementById('field');

        oField.onkeypress = function (e) {
            console.log(e.charCode);

            // �����û�������ַ����ַ��루e.charCode)
            // ���� 0~9���ַ��� 48~57
            // Сд��ĸ a~z���ַ��� 97~122
            if (!(e.charCode >= 48 && e.charCode <= 57 || e.charCode >= 97 && e.charCode <= 122)) {
                // ��ֹ�������Ĭ����Ϊ
                e.preventDefault();
            }
        };
    </script>
</body>

</html>
```

<img src="mark-img/27548b611bfe406b957870b4256f655f.gif" style="width: 33%;" />

��С����2��

�����������¼���������ں��������¹���ʱ�����ּ� 1����֮�����ּ� 1��

�������¼��� `onmousewheel`�������¼����� e �ṩ `deltaY` ���Ա�ʾ�������������¹����Ƿ�����ֵ�����Ϲ���ʱ���ظ�ֵ��

- û����ֹ�¼��� ��Ĭ�϶����� ʱ

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box {
            width: 200px;
            height: 200px;
            background-color: #333;
        }

        body {
            height: 2000px;
        }
    </style>
</head>

<body>
    <div id="box"></div>
    <h1 id="info">0</h1>

    <script>
        var oBox = document.getElementById('box');
        var oInfo = document.getElementById('info');

        // ȫ�ֱ������� info ����ʾ������
        var a = 0;

        // �� box ��������������¼�����
        oBox.onmousewheel = function (e) {
            if (e.deltaY > 0) {
                a++;
            } else {
                a--;
            }
            oInfo.innerText = a;
        }
    </script>
</body>

</html>
```

<img src="mark-img/973fb9858bf542b6815b3b1f2f77249c.gif" style="width: 25%;" />

- ��ֹ�¼��� ��Ĭ�϶����� ��

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box {
            width: 200px;
            height: 200px;
            background-color: #333;
        }

        body {
            height: 2000px;
        }
    </style>
</head>

<body>
    <div id="box"></div>
    <h1 id="info">0</h1>

    <script>
        var oBox = document.getElementById('box');
        var oInfo = document.getElementById('info');

        // ȫ�ֱ������� info ����ʾ������
        var a = 0;

        // �� box ��������������¼�����
        oBox.onmousewheel = function (e) {
            // ��ֹĬ���¼�������˵���û��ں���������������ֵ�ʱ�򣬴�ʱ��������ҳ��Ĺ������Ĺ���
            e.preventDefault();

            if (e.deltaY > 0) {
                a++;
            } else {
                a--;
            }
            oInfo.innerText = a;
        }
    </script>
</body>

</html>
```

<img src="mark-img/5c65bcd5518f4175bd6227fdd767b962.gif" style="width:25%;" />

��С����3��

��������Ҽ�����¼���������Ҽ������ʱ���ı䱳����ɫ��

`oncontextmenu`�����û��������Ҽ��������Ĳ˵�ʱ������

- û����ֹ�¼��� ��Ĭ�϶����� ʱ

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        var oBody = document.getElementsByTagName('body')[0];
        // �� document �������Ҽ��¼�����
        var flag = 0;
        document.oncontextmenu = function (e) {
            if (flag == 0) {
                oBody.style.backgroundColor = 'black';
                flag = 1;;
            } else {
                oBody.style.backgroundColor = 'white';
                flag = 0;
            }
        }
    </script>
</body>

</html>
```

<img src="mark-img/bdde5ade8da44af8aadf8e536e9e5b15.gif" style="width: 33%;" />

- ��ֹ�¼��� ��Ĭ�϶����� ��

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        var oBody = document.getElementsByTagName('body')[0];
        // �� document �������Ҽ��¼�����
        var flag = 0;
        document.oncontextmenu = function (e) {
            // ��ֹĬ���¼�������˵���û��Ҽ���ʱ�򣬴�ʱ���ᵯ��ҳ����Ҽ��˵�
            e.preventDefault();

            if (flag == 0) {
                oBody.style.backgroundColor = 'black';
                flag = 1;;
            } else {
                oBody.style.backgroundColor = 'white';
                flag = 0;
            }
        }
    </script>
</body>

</html>
```

<img src="mark-img/11cf64b786754582bd21671a5b9f92ea.gif" style="width:33%;" />

## 11.5 e.stopPropagation()����

`e.stopPropagation()` ����������ֹ�¼�����������

��һЩ���ϣ��ǳ��б�Ҫ�ж��¼�������������������ҳ����Ч��ʾ�� bug��

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: #333;
        }
    </style>
</head>

<body>
    <div id="box">
        <button id="btn">����</button>
    </div>
    <script>
        var oBox = document.getElementById('box');
        var oBtn = document.getElementById('btn');

        oBox.onclick = function () {
            console.log('���Ǻ���');
        };

        oBtn.onclick = function () {
            console.log('���ǰ�ť');
        };
    </script>
</body>

</html>
```

<img src="mark-img/c1b81c5b9a5c4dc98adda42fee50173e.png" style="width:25%;" />

����ֹð�ݡ�

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            width: 200px;
            height: 200px;
            background-color: #333;
        }
    </style>
</head>

<body>
    <div id="box">
        <button id="btn">����</button>
    </div>
    <script>
        var oBox = document.getElementById('box');
        var oBtn = document.getElementById('btn');

        oBox.onclick = function () {
            console.log('���Ǻ���');
        };

        oBtn.onclick = function (e) {
            // ��ֹ�¼���������
            e.stopPropagation();
            console.log('���ǰ�ť');
        };
    </script>
</body>

</html>
```

<img src="mark-img/28487ac4a75644d4a968196ebd516961.png" style="width:25%;" />

����ֹ������

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: #333;
        }
    </style>
</head>

<body>
    <div id="box">
        <button id="btn">����</button>
    </div>
    <script>
        var oBox = document.getElementById('box');
        var oBtn = document.getElementById('btn');

        oBox.addEventListener('click', function (e) {
            // ��ֹ�¼���������
            e.stopPropagation();
            console.log('���Ǻ���');
        }, true);

        oBtn.addEventListener('click', function () {
            console.log('���ǰ�ť');
        }, true);
    </script>
</body>

</html>
```

<img src="mark-img/1d37cdf849424fb5b3eaa0efcee9f424.png" style="width:25%;" />

��С������

����һ�������㣺�����ť��ʾ�����㣬�����ҳ����ط���������رա�

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .modal {
            width: 400px;
            height: 140px;
            background-color: #333;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -70px;
            margin-left: -200px;
            display: none;
        }
    </style>
</head>

<body>
    <button id="btn">���ҵ���������</button>
    <div class="modal" id="modal"></div>

    <script>
        var oBtn = document.getElementById('btn');
        var oModal = document.getElementById('modal');

        // �����ť��ʱ�򣬵�������ʾ
        oBtn.onclick = function (e) {
            // ��ֹ�¼�����������document����
            e.stopPropagation();
            oModal.style.display = 'block';
        };

        // ���ҳ���κβ��ֵ�ʱ�򣬵�����ر�
        document.onclick = function () {
            oModal.style.display = 'none';
        };

        // ����������ڲ���ʱ�򣬲��ܹرյ�����ģ�����Ӧ����ֹ�¼���������
        oModal.onclick = function (e) {
            // ��ֹ�¼�����������document����
            e.stopPropagation();
        };
    </script>
</body>

</html>
```

<img src="mark-img/8f0ca4fd795748cf8140bc3b59409d3d.gif" style="width:50%;" />

# ʮ�����¼�ί��

## 12.1 ��������¼�����

��Ŀ��ҳ������һ�������б� `<ul>`�����ڲ����� 20 �� `<li>` Ԫ�أ�����������������¼�������ʵ��Ч��������ĸ� `<li>` Ԫ�أ��ĸ� `<li>` Ԫ�ؾͱ�졣

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ul id="list">
        <li>�б���</li>
        <li>�б���</li>
        <li>�б���</li>
        <li>�б���</li>
        <li>�б���</li>
        <li>�б���</li>
        <li>�б���</li>
        <li>�б���</li>
        <li>�б���</li>
        <li>�б���</li>
        <li>�б���</li>
        <li>�б���</li>
        <li>�б���</li>
        <li>�б���</li>
        <li>�б���</li>
        <li>�б���</li>
        <li>�б���</li>
        <li>�б���</li>
        <li>�б���</li>
        <li>�б���</li>
    </ul>

    <script>
        var oList = document.getElementById('list');
        var lis = oList.getElementsByTagName('li');

        // ��дѭ����䣬������Ԫ����Ӽ���
        for (let i = 0; i < lis.length; i++) {
            lis[i].addEventListener('click', function () {
                // ����������У�this ��ʾ��������Ԫ�أ�this �漰���������ĵ����֪ʶ�������ڡ�������󡱿γ��н���
                this.style.color = 'red';
            })
        }
    </script>
</body>

</html>
```

## 12.2 ��������¼���������������

ÿһ���¼�����ע�ᶼ������һ����ϵͳ�ڴ棬����������¼��ᵼ�¼�������̫�࣬�ڴ����Ļ�ǳ���

ʵ���ϣ�ÿ�� `<li>` ���¼����������ǲ�ͬ�ĺ�������Щ��������Ҳ��ռ���ڴ档

## 12.3 ����Ԫ�ض�̬���¼�

��Ŀ��ҳ������һ�������б� `<ul>`�����ڲ�û�� `<li>` Ԫ�أ�������һ����ť����������ť��������һ�� `<li>` Ԫ�ء�����Ҫ��ÿ�����ӵ� `<li>` Ԫ��ҲҪ�е���¼�������ʵ��Ч��������ĸ� `<li>` Ԫ�أ��ĸ� `<li>` Ԫ�ؾͱ�졣

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="btn">��������µ�li�б���</button>
    <ul id="list"></ul>

    <script>
        var oBtn = document.getElementById('btn');
        var oList = document.getElementById('list');
        var lis = oList.getElementsByTagName('li');

        // ��ť�ĵ���¼�
        oBtn.onclick = function () {
            // ����һ���µ� li �б���¶��ڵ�
            var oLi = document.createElement('li');
            oLi.innerHTML = '�����б���';
            // ����
            oList.appendChild(oLi);
            // ���´�������� li �ڵ���� onclick �¼�����
            oLi.onclick = function () {
                this.style.color = 'red';
            };
        };
    </script>
</body>

</html>
```

## 12.4 ��̬���¼�������

����Ԫ�ر���ֱ�����¼������������Զ�����¼�������

�����¼������������¼���������������������ڴ����ġ�

## 12.5 �¼�ί��

�����¼�ð�ݻ��ƣ������Ԫ���¼�ί�и�����Ԫ�ء�

<img src="mark-img/ca442d80a9424d399391760d58060803.png" style="width:50%;" />

## 12.6 e.target��e.currentTarget����

�¼�ί��ͨ����Ҫ���ʹ�� e.target ���ԡ�

| ����            | ��������                              |
| --------------- | ------------------------------------- |
| `target`        | �������¼�������Ԫ�أ��� ���¼�ԴԪ�ء� |
| `currentTarget` | �¼�������򸽼ӵ���Ԫ��              |

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="btn">���Ҵ���һ�����б���</button>
    <ul id="list">
        <li>�б���</li>
        <li>�б���</li>
        <li>�б���</li>
    </ul>
    <script>
        var oList = document.getElementById('list');
        var oBtn = document.getElementById('btn');

        oList.onclick = function (e) {
            // e.target ��ʾ�û�����������Ǹ�Ԫ�أ��� ���¼�ԴԪ�ء�
            e.target.style.color = 'red';
        };

        oBtn.onclick = function () {
            // �����µ�liԪ��
            var oLi = document.createElement('li');
            // д����
            oLi.innerText = '����������';
            // ����
            oList.appendChild(oLi);
        };
    </script>
</body>

</html>
```

<img src="mark-img/ee71ffa8650645779a52081ad329d2a7.gif" style="width: 25%;" />

## 12.7 �¼�ί�е�ʹ�ó���

���д�������Ԫ����Ҫ��������¼�����ʱ��ʹ���¼�ί�п��Լ����ڴ濪����

���ж�̬Ԫ�ؽڵ�����ʱ��ʹ���¼�ί�п�������������Ԫ�ؾ����¼�������

## 12.8 ʹ���¼�ί��ʱ��Ҫע�������

��1��`onmouseenter` �� `onmouseover` ����ʾ �������롱��������ʲô�����أ�

��`onmouseenter` ��ð�ݣ�`onmouseover` ð�ݡ�

- ʹ���¼�ί��ʱҪע�⣺����ί�в�ð�ݵ��¼�������Ԫ�ء�

��onmouseenter��

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="btn">���Ҵ���һ�����б���</button>
    <ul id="list">
        <li>�б���</li>
        <li>�б���</li>
        <li>�б���</li>
    </ul>
    <script>
        var oList = document.getElementById('list');
        var oBtn = document.getElementById('btn');

        // onmouseenter��������������ǡ���ð�ݡ��ģ��൱�����¼����������Ӹ����Ǹ�DOM�ڵ�
        // �����ĸ�DOM�ڵ��Լ��������¼�,û��ð�ݹ���
        // ����Ϊ�̳��ԣ��������� li ��һ���ɫ
        oList.onmouseenter = function (e) {
            // e.target��ʾ�û�����������Ǹ�Ԫ��
            e.target.style.color = 'red';
        };

        // oList.onmouseover = function (e) {
        //     // e.target��ʾ�û�����������Ǹ�Ԫ�أ������Ǹ� li
        //     e.target.style.color = 'red';
        // };

        oBtn.onclick = function () {
            // �����µ�liԪ��
            var oLi = document.createElement('li');
            // д����
            oLi.innerText = '����������';
            // ����
            oList.appendChild(oLi);
        };
    </script>
</body>

</html>
```

<img src="mark-img/f53b135d49874c24965c6b525aef3f9e.gif" style="width:25%;" />

��onmouseover��

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="btn">���Ҵ���һ�����б���</button>
    <ul id="list">
        <li>�б���</li>
        <li>�б���</li>
        <li>�б���</li>
    </ul>
    <script>
        var oList = document.getElementById('list');
        var oBtn = document.getElementById('btn');

        // onmouseenter��������������ǡ���ð�ݡ��ģ��൱�����¼����������Ӹ����Ǹ�DOM�ڵ�
        // �����ĸ�DOM�ڵ��Լ��������¼�,û��ð�ݹ���
        // ����Ϊ�̳��ԣ��������� li ��һ���ɫ
        // oList.onmouseenter = function (e) {
        //     // e.target��ʾ�û�����������Ǹ�Ԫ��
        //     e.target.style.color = 'red';
        // };

        oList.onmouseover = function (e) {
            // e.target��ʾ�û�����������Ǹ�Ԫ�أ������Ǹ� li
            e.target.style.color = 'red';
        };

        oBtn.onclick = function () {
            // �����µ�liԪ��
            var oLi = document.createElement('li');
            // д����
            oLi.innerText = '����������';
            // ����
            oList.appendChild(oLi);
        };
    </script>
</body>

</html>
```

<img src="mark-img/1ea54cba540d46efa5eb9bcffab9ec99.gif" style="width:25%;" />

��2�����ڲ�Ԫ�ز������ж�����ڲ�Ԫ���ˣ����磺

<img src="mark-img/9619f89a852d40b2881d7cac91e9fc7f.png" style="width:50%;" />

��ᵼ�µ�� li ʱЧ�����������ǵ�� span ʱ��ֻ�� span ���ɫ��

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="btn">���Ҵ���һ�����б���</button>
    <ul id="list">
        <li><span>����span</span>�б���</li>
        <li><span>����span</span>�б���</li>
        <li><span>����span</span>�б���</li>
        <li><span>����span</span>�б���</li>
        <li><span>����span</span>�б���</li>
    </ul>
    <script>
        var oList = document.getElementById('list');
        var oBtn = document.getElementById('btn');

        oList.onmouseover = function (e) {
            // e.target��ʾ�û�����������Ǹ�Ԫ�أ������Ǹ� li
            e.target.style.color = 'red';
        };

        oBtn.onclick = function () {
            // �����µ�liԪ��
            var oLi = document.createElement('li');
            // д����
            oLi.innerText = '����������';
            // ����
            oList.appendChild(oLi);
        };
    </script>
</body>

</html>
```

<img src="mark-img/6ea82efcbc0e431e994f6109e48a3043.gif" style="width:25%;" />

# ʮ������ʱ������ʱ��

## 13.1 ��ʱ��

`setInterval()` ���������ظ�����һ����������ÿ�ε���֮���й̶���ʱ������

> Interval�����

<img src="mark-img/4d70d6d2a23e430cb7825498629929bf.png" style="width:50%;" />

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        var a = 0;

        setInterval(function () {
            console.log(++a);
        }, 1000);
    </script>
</body>

</html>
```

<img src="mark-img/75e9d6efb7cf4e0daf0bfbb959bfe9ff.gif" style="width:24%;" />

## 13.2 �����Ĳ���

`setInterval()` �������Խ��յ� 3��4������ �����������ǽ���˳���뺯����

<img src="mark-img/7af3cab742ca4aa3a12f10f166438cf6.png" style="width:50%;" />

## 13.3 ��������Ҳ���Դ���setInterval

��������Ҳ���Դ��� `setInterval`��

> ���������������Ƶĺ�����
>
> ���������������Ƶĺ�����

<img src="mark-img/c99d6095b3c941538c8db2a2c1d75fe3.png" style="width:50%;" />

## 13.4 �����ʱ��

`clearInterval()` �����������һ����ʱ����

<img src="mark-img/8e6c49ba5a044ddfa7c54741bd69d800.png" style="width:50%;" />

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1 id="info">0</h1>
    <button id="btn1">��ʼ</button>
    <button id="btn2">��ͣ</button>

    <script>
        var oInfo = document.getElementById('info');
        var oBtn1 = document.getElementById('btn1');
        var oBtn2 = document.getElementById('btn2');

        var a = 0;

        // ȫ�ֱ���
        var timer;

        oBtn1.onclick = function () {
            // ����ȫ�ֱ��� timer ��ֵΪһ����ʱ��ʵ��
            timer = setInterval(function () {
                oInfo.innerText = ++a;
            }, 1000);
        };

        oBtn2.onclick = function () {
            clearInterval(timer);
        };
    </script>
</body>

</html>
```

![](mark-img/29a4a59f27474586835c03a03161e6c2.gif)

���ǣ���ʱ��һ�� BUG���Ǿ��ǵ��ظ����ʱ���ᷢ����ʱ�����ӡ�

> ��ʱ�����ӣ�ͬһʱ���ж����ʱ����ͬʱ������

![](mark-img/91287644df004f6e9a212bba504d5c24.gif)

�Ľ���

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1 id="info">0</h1>
    <button id="btn1">��ʼ</button>
    <button id="btn2">��ͣ</button>

    <script>
        var oInfo = document.getElementById('info');
        var oBtn1 = document.getElementById('btn1');
        var oBtn2 = document.getElementById('btn2');

        var a = 0;

        // ȫ�ֱ���
        var timer;

        oBtn1.onclick = function () {
            // Ϊ�˷�ֹ��ʱ�����ӣ�����Ӧ�������ö�ʱ��֮ǰ�������ʱ��
            clearInterval(timer);
            // ����ȫ�ֱ���timer��ֵΪһ����ʱ��ʵ��
            timer = setInterval(function () {
                oInfo.innerText = ++a;
            }, 1000);
        };

        oBtn2.onclick = function () {
            clearInterval(timer);
        };
    </script>
</body>

</html>
```

![](mark-img/bda8b440190f4de690e33cedc1bd8d4d.gif)

## 13.5 ��ʱ��

`setTimeout()` ������������һ����ʱ������ָ��ʱ�䵽��֮�󣬻�ִ�к���һ�Σ������ظ�ִ�С�

<img src="mark-img/fddf2a5fc5af41d3892796071e325dbe.png" style="width:50%;" />

## 13.6 �����ʱ��

`clearTimeout()` �������������ʱ������ `clearInterval()` �ǳ����ơ�

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="btn1">2��󵯳����</button>
    <button id="btn2">ȡ������</button>

    <script>
        var btn1 = document.getElementById('btn1');
        var btn2 = document.getElementById('btn2');
        var timer;

        btn1.onclick = function () {
            timer = setTimeout(function () {
                alert('���');
            }, 2000);
        }

        btn2.onclick = function () {
            clearTimeout(timer);
        }
    </script>
</body>

</html>
```

## 13.7 ������ʶ�첽���

`setInterval()` �� `setTimeout()` �������첽��䡣

�첽��asynchronous������������ CPU ����ִ��������䣬���첽���ʱ����ִ�� ���ص���������callback����

<img src="mark-img/e3423b0d66af49b5a113b2fce2c1dc62.png" style="width:50%;" />

## 13.8 ʹ�ö�ʱ��ʵ�ֶ���

��������ҳ�Ϸǳ�������ҵ������

ʹ�ö�ʱ��ʵ�ֶ����������� ���Ӿ������� ԭ��

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box {
            position: absolute;
            top: 100px;
            left: 100px;
            width: 100px;
            height: 100px;
            background-color: orange;
        }
    </style>
</head>

<body>
    <button id="btn">��ʼ�˶�</button>
    <div id="box"></div>

    <script>
        // �õ�Ԫ��
        var btn = document.getElementById('btn');
        var box = document.getElementById('box');

        // ȫ�ֱ������ӵ�leftֵ
        var left = 100;

        // ��ť����
        btn.onclick = function () {
            var timer = setInterval(function () {
                // �ı�ȫ�ֱ���
                left += 10;
                if (left >= 1000) {
                    clearInterval(timer);
                }
                // ����left����
                box.style.left = left + 'px';
            }, 20);
        };
    </script>
</body>

</html>
```

<img src="mark-img/9cdd8fb6242143858bd1a9df1899ce6f.gif" style="width:50%;" />

ʹ�ö�ʱ��ʵ�ֶ�����Ϊ���㣺

1. ��������ݶ�����ʱ����㲽��
2. �˶�����Ҫ��������
3. �����˶����е��ӽ�Ϊ����

> ����ʵ�ʿ����������ã�
>
> JQuery �� JS �⣨Ŀǰ���õ�Խ��Խ�٣�
>
> JS + CSS3 ��ģʽ��������

# ʮ�ġ�JS��CSS3���ʵ�ֶ���

## 14.1 JS��CSS3���ʵ�ֶ���

- ����֪����CSS3 �� `transition` �������Կ���ʵ�ֶ�����
- JS �������� CSS3 �� transition ��������ʵ��Ԫ�ض�����
- JS �� CSS3 ���ʵ�ֶ�������˶�ʱ������������ȱ�㡣

## 14.2 ��������

����������һ������ִ��һ�κ�ֻ�д����趨��ִ�����ں������ִ�еڶ��Ρ�

�������������壺����� JS + CSS3 ʵ�ֵĶ����У����û�к�����������ô��һ��������û��ִ����ʱ������û��ٴ�Ҫ��ִ�ж������򶯻���ֱ���жϻ�δִ����Ķ�����Ȼ��ִ���µĶ���������Ҫͨ����������������������������磺�ֲ�ͼ�о�Ҫ�����û���Ƶ�ص���ֲ�ͼ�л���ťʱ�ֲ�ͼ�ɿ��л������⣬��Ӧ�����������û������飬�ֲ�ͼ���л��ٶ�ʼ����ƽ�ȵġ�

���������ǳ�����ʵ�֣�ֻ����� `setTimeout` ��ʱ����

����������ģ�塿

```javascript
// ����������
var lock = true;

function ��Ҫ�����ĺ���() {
    // ������ǹر�״̬����ִ��
    if (!lock) {
        return;
    }
    
    // �����������
    // ����
    // �����������
    
    // ����
    lock = false;
    
    // ָ��������������
    setTimeout(function() {
        lock = true;
    }, 2000);
}
```

��������

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box {
            width: 100px;
            height: 100px;
            background-color: orange;
            position: absolute;
            top: 100px;
            left: 100px;
        }
    </style>
</head>

<body>
    <button id="btn">�����˶�</button>
    <div id="box"></div>

    <script>
        // �õ�Ԫ��
        var btn = document.getElementById('btn');
        var box = document.getElementById('box');

        // ��ʶ����ָʾ��ǰ��������߻����ұ�
        var pos = 1; // 1��ߣ�2�ұ�

        // ����������
        var lock = true;

        // �¼�����
        btn.onclick = function () {
            // ���ȼ�����Ƿ��ǹر�
            if (!lock) return;

            // �ѹ��ɼ���
            box.style.transition = 'all 2s linear 0s';
            if (pos == 1) {
                // ˲���ƶ������������й��ɣ������Ƕ���
                box.style.left = '1100px';
                pos = 2;
            } else if (pos == 2) {
                // ˲���ƶ������������й��ɣ������Ƕ���
                box.style.left = '100px';
                pos = 1;
            }

            // ����
            lock = false;
            // ָ��ʱ��󣬽�����
            setTimeout(function () {
                lock = true;
            }, 2000);
        };
    </script>
</body>

</html>
```

<img src="mark-img/cd2d762739b64d9b9aeca7bb69a1874b.gif" style="width:50%;" />

# ʮ�塢������������

## 15.1 ����Ч������1-�޷�����������Ч

<img src="mark-img/ec75f87bc4aa4922aecb45262157b4b7.gif" style="width:50%;" />

ԭ��:

<img src="mark-img/e97c8629d8a748aba71398b87638d4a3.gif" style="width:50%;" />

���룺

> �˶������ö�ʱ�������� JS + CSS3 �����㡣

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .box {
            width: 1000px;
            height: 130px;
            border: 1px solid #000;
            margin: 50px auto;
            overflow: hidden;
        }

        .box ul {
            list-style: none;
            /* ���ô�һ�㣬����li���ܸ��� */
            width: 5000px;
            position: relative;
        }

        .box ul li {
            float: left;
            margin-right: 10px;
        }
    </style>
</head>

<body>
    <div id="box" class="box">
        <ul id="list">
            <li><img src="images/number/0.png" alt=""></li>
            <li><img src="images/number/1.png" alt=""></li>
            <li><img src="images/number/2.png" alt=""></li>
            <li><img src="images/number/3.png" alt=""></li>
            <li><img src="images/number/4.png" alt=""></li>
            <li><img src="images/number/5.png" alt=""></li>
        </ul>
    </div>
    <script>
        var box = document.getElementById('box');
        var list = document.getElementById('list');

        // ���ƶ�һ�����е�li
        list.innerHTML += list.innerHTML;

        // ȫ�ֱ�������ʾ��ǰlist��leftֵ
        var left = 0;

        // ��ʱ����ȫ�ֱ���
        var timer;

        move();

        // ������װ�ɺ���
        function move() {
            // ����ȹأ���ֹ��������
            clearInterval(timer);

            timer = setInterval(function () {
                left -= 4;
                // ����
                if (left <= -1260) {
                    left = 0;
                }
                list.style.left = left + 'px';
            }, 20);
        }

        // ������ֹͣ��ʱ��
        box.onmouseenter = function () {
            clearInterval(timer);
        };

        // ����뿪������ʱ��
        box.onmouseleave = function () {
            move();
        };
    </script>
</body>

</html>
```

## 15.2 ����Ч������2-������ֲ�ͼ��Ч

> ������ֲ�ͼ���ֽУ������ֲ�ͼ�������ֲ�ͼ��Ҫ��ͼƬ�ų�һ�У��������һ��ͼƬ���¡һ�ݵ�һ��ͼƬ�����������һ��ʱ��ʵ��˲���ֻ�Ч������

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .carousel {
            width: 650px;
            height: 360px;
            border: 1px solid #000;
            margin: 50px auto;
            position: relative;
            overflow: hidden;
        }

        .carousel ul {
            list-style: none;
            width: 6000px;
            position: relative;
            left: 0px;
            transition: left .5s ease 0s;
        }

        .carousel ul li {
            float: left;
        }

        .carousel .leftbtn {
            position: absolute;
            left: 20px;
            top: 50%;
            margin-top: -25px;
            width: 50px;
            height: 50px;
            background-color: rgb(28, 180, 226);
            border-radius: 50%;
        }

        .carousel .rightbtn {
            position: absolute;
            right: 20px;
            top: 50%;
            margin-top: -25px;
            width: 50px;
            height: 50px;
            background-color: rgb(28, 180, 226);
            border-radius: 50%;
        }
    </style>
</head>

<body>
    <div class="carousel">
        <ul id="list">
            <li><img src="images/beijing/0.jpg" alt=""></li>
            <li><img src="images/beijing/1.jpg" alt=""></li>
            <li><img src="images/beijing/2.jpg" alt=""></li>
            <li><img src="images/beijing/3.jpg" alt=""></li>
            <li><img src="images/beijing/4.jpg" alt=""></li>
        </ul>
        <a href="javascript:;" class="leftbtn" id="leftbtn"></a>
        <a href="javascript:;" class="rightbtn" id="rightbtn"></a>
    </div>
    <script>
        // �õ���ť��ul��ul��������˶�
        var leftbtn = document.getElementById('leftbtn');
        var rightbtn = document.getElementById('rightbtn');
        var list = document.getElementById('list');

        // ��¡��һ��ͼƬ
        var cloneli = list.firstElementChild.cloneNode(true); // �ǵ�Ҫдtrue����Ȼ��ֻ���¡li�������¡img
        list.appendChild(cloneli);

        // ��ǰul��ʾ���ڼ����ˣ���0��ʼ��
        var idx = 0;

        // ������
        var lock = true;

        // �ұ߰�ť����
        rightbtn.onclick = function () {
            // �ж�����״̬
            if (!lock) return;

            lock = false;

            // ��list�ӹ��ɣ�ΪʲôҪ�ӣ���css�в����Ѿ�����ô����������Ϊ���һ��ͼƬ��ѹ���ȥ��
            list.style.transition = 'left .5s ease 0s';
            idx++;
            if (idx > 4) {
                // ����һ����ʱ������ʱ���Ĺ��ܾ��ǽ�ul˲������0��λ�ã���ʱ����Ŀ�ľ����ù��ɶ�������֮��
                setTimeout(function () {
                    // ȡ�������ɣ���ΪҪ����˲���ƶ������ǡ����ࡱ��ȥ
                    list.style.transition = 'none';
                    list.style.left = 0;
                    idx = 0;
                }, 500);
            }
            list.style.left = -idx * 650 + 'px';

            // ��������
            setTimeout(function () {
                lock = true;
            }, 500);
        }

        // ��߰�ť����
        leftbtn.onclick = function () {
            if (!lock) return;

            lock = false;

            // �ж��ǲ��ǵ�0�ţ�����ǣ���Ҫ˲���üٵ��滻���
            if (idx == 0) {
                // ȡ�������ɣ���ΪҪ����˲���ƶ������ǡ����ࡱ��ȥ
                list.style.transition = 'none';
                // ֱ��˲���ƶ������ļ�ͼƬ��
                list.style.left = -5 * 650 + 'px';
                // ����һ����ʱ���������ʱ������ʱʱ�������0���룬��Ȼ��0���룬���ǿ��������ǹ�������˲��ȡ����Ȼ���ټ���
                setTimeout(function () {
                    // �ӹ���
                    list.style.transition = 'left .5s ease 0s';
                    // idx��Ϊ���������һ��
                    idx = 4;
                    list.style.left = -idx * 650 + 'px';
                }, 0);
            } else {
                idx--;
                list.style.left = -idx * 650 + 'px';
            }

            // ��������
            setTimeout(function () {
                lock = true;
            }, 500);
        }
    </script>
</body>

</html>
```

<img src="mark-img/73872995bfae4c37bae88638ca30aea9.gif" style="width:70%;" />

ԭ��

<img src="mark-img/410afbfa99594640bf979eff8a62dd9b.gif" style="width:70%;" />

<img src="mark-img/7bd01d838eae44a3ac0e07f2e4b2e013.gif" style="width:70%;" />

## 15.3 ����Ч������3-�������ֲ�ͼ��Ч

> �������ֲ�ͼ���ֽУ����뵭���ֲ�ͼ�������ֲ�ͼ��Ҫ��ͼƬ����һ��

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .carousel {
            width: 650px;
            height: 360px;
            border: 1px solid #000;
            margin: 50px auto;
            position: relative;

        }

        .carousel ul {
            list-style: none;
        }

        .carousel ul li {
            position: absolute;
            top: 0;
            left: 0;
            /* ͸���ȶ���0 */
            opacity: 0;
            transition: opacity 1s ease 0s;
        }

        /* ֻ�е�һ��͸������1 */
        .carousel ul li:first-child {
            opacity: 1;
        }

        .carousel .leftbtn {
            position: absolute;
            left: 20px;
            top: 50%;
            margin-top: -25px;
            width: 50px;
            height: 50px;
            background-color: rgb(28, 180, 226);
            border-radius: 50%;
        }

        .carousel .rightbtn {
            position: absolute;
            right: 20px;
            top: 50%;
            margin-top: -25px;
            width: 50px;
            height: 50px;
            background-color: rgb(28, 180, 226);
            border-radius: 50%;
        }
    </style>
</head>

<body>
    <div class="carousel">
        <ul id="list">
            <li><img src="images/beijing/0.jpg" alt=""></li>
            <li><img src="images/beijing/1.jpg" alt=""></li>
            <li><img src="images/beijing/2.jpg" alt=""></li>
            <li><img src="images/beijing/3.jpg" alt=""></li>
            <li><img src="images/beijing/4.jpg" alt=""></li>
        </ul>
        <a href="javascript:;" class="leftbtn" id="leftbtn"></a>
        <a href="javascript:;" class="rightbtn" id="rightbtn"></a>
    </div>
    <script>
        // �õ���ť��ul��ul��������˶�
        var leftbtn = document.getElementById('leftbtn');
        var rightbtn = document.getElementById('rightbtn');
        var list = document.getElementById('list');
        var lis = list.getElementsByTagName('li');

        // ��ǰ�ǵڼ���ͼ��ʾ
        var idx = 0;

        // ����
        var lock = true;

        // �Ұ�ť
        rightbtn.onclick = function () {
            // �жϽ���
            if (!lock) return;

            lock = false;

            // ��û�и�idx����ʱ��idx���ͼƬ������ͼ����ͼ����
            lis[idx].style.opacity = 0;
            idx++;
            if (idx > 4) idx = 0;
            // ����idx����ʱ��idx���ͼƬ������ͼ����ͼ����
            lis[idx].style.opacity = 1;

            // ��������֮�󣬿���
            setTimeout(function () {
                lock = true;
            }, 1000);
        }

        // ��ť
        leftbtn.onclick = function () {
            // �жϽ���
            if (!lock) return;

            lock = false;

            // ��û�и�idx����ʱ��idx���ͼƬ������ͼ����ͼ����
            lis[idx].style.opacity = 0;
            idx--;
            if (idx < 0) idx = 4;
            // ����idx����ʱ��idx���ͼƬ������ͼ����ͼ����
            lis[idx].style.opacity = 1;

            // ��������֮�󣬿���
            setTimeout(function () {
                lock = true;
            }, 1000);
        }
    </script>
</body>

</html>
```

<img src="mark-img/6ce3942a0d204578b8025195c37f48aa.gif" style="width:70%;" />

# ʮ����JQuery

- [jQuery �̳� (w3school.com.cn)](https://www.w3school.com.cn/jquery/index.asp)

- [jQuery �̳� | ����̳� (runoob.com)](https://www.runoob.com/jquery/jquery-tutorial.html)