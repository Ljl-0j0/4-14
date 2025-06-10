<!--
 * @Description: 
 * @Author: ljl
 * @Date: 2025-05-19 09:16:56
 * @LastEditors: rendc
 * @LastEditTime: 2025-06-04 15:34:35
-->
# ��BOM��

# һ��BOM��ʲô

BOM��Browser Object Model�����������ģ�ͣ��� JS �� ��������ڽ����Ľӿڡ�

һЩ��������ı�ߴ硢������������ص���Ч����Ҫ���� BOM ������

# ����window����

window �����ǵ�ǰ JS �ű����������Ĵ��ڣ�����������а��� DOM �ṹ��`window.document` ���Ծ��� `document` ����

���б�ǩ���ܵ�������У�ÿ����ǩ��ӵ���Լ��� `window` ����Ҳ����˵��ͬһ�����ڵı�ǩҳ֮�䲻�Ṳ��һ�� window ����

# ����ȫ�ֱ�����window������

ȫ�ֱ������Ϊ window ��������ԡ�

```javascript
var a = 10;
console.log(window.a == a);	// true
```

�����ζ�ţ���� js �ļ�֮���ǹ���ȫ��������ģ�����js �ļ�û����������빦�ܡ�

# �ġ����ú����ձ���window�ķ���

�� `setInterval()`��`alert()` �����ú������ձ��� window �ķ�����

```javascript
console.log(window.alert == alert);	// true
console.log(window.setInterval == setInterval);	// true
```

# �塢���ڳߴ��������

| ����          | ����                                                     |
| ------------- | -------------------------------------------------------- |
| `innerHeight` | ��������ڵ���������ĸ߶ȣ�����ˮƽ������������еĻ��� |
| `innerWidth`  | ��������ڵ���������Ŀ�ȣ�������ֱ������������еĻ��� |
| `outerHeight` | ��������ڵ��ⲿ�߶�                                     |
| `outerWidth`  | ��������ڵ��ⲿ���                                     |

��ò������������Ĵ��ڿ�ȣ�Ҫ�ã�

`document.documentElement.clientWidth`

> ����������ָ������������ڱ߿�Ŀ�ȡ�
>
> �����������ȫ��ʱ������������ == ������ڿ�������������
>
> ����������ڲ�ȫ��ʱ������������ > ������ڿ�������������

# ����resize�¼�

�ڴ��ڴ�С�ı�֮�󣬾ͻᴥ�� `resize` �¼�������ʹ�� `window.onresize` ���� `window.addEventListener('resize')` �����¼���������

# �ߡ��Ѿ��߶�

`window.scrollY` ���Ա�ʾ�ڴ�ֱ�����ѹ���������ֵ��

`document.documentElement.scrollTop` ����Ҳ��ʾ���ھ��߶ȡ�

```javascript
// �������ô��ַ�ʽ��ô��ھ��ĸ߶�
var scrollTop = window.scrollY || document.documentElement.scrollTop;
```

- document.documentElement.scrollTop �ǿ����ֶ�����ֵ�ģ��Դﵽ�������κ�ָ�������߶ȴ�
- window.scrollY ��ֻ���ģ��������ֶ���ֵ

# �ˡ�scroll�¼�

�ڴ��ڱ���֮�󣬾ͻᴥ�� scroll �¼�������ʹ�ã�

`window.onscroll` ���� `window.addEventListener('scroll')` �����¼���������

# �š�Navigator����

navigator�Ƕ��󣬸ö����¼�¼�����������������Ϣ��
 
`window.navigator` ���Կ��Լ��� navigator �������ڲ������û��˴λ���������������Ժͱ�ʶ��

| ����         | ����                                       |
| ------------ | ------------------------------------------ |
| `appName`    | ������ٷ�����                             |
| `appVersion` | ������汾                                 |
| `userAgent`  | ������û����������ں���Ϣ�ͷ�װ����Ϣ�� |
| `platform`   | �û�����ϵͳ                               |

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
    <script>
        console.log('�����Ʒ��', navigator.appName);
        console.log('������汾', navigator.appVersion);
        console.log('�û�����', navigator.userAgent);
        console.log('����ϵͳ', navigator.platform);
    </script>
</body>
</html>
```

![](mark-img/ee10e3c3552940359198256a6304d806.png)

 
�������Ժͷ�����
 
- ͨ�� userAgent ���������İ汾��ƽ̨
 
```javascript
// ��� userAgent���������Ϣ��
(function () {
  const userAgent = navigator.userAgent
  // ��֤�Ƿ�ΪAndroid��iPhone
  const android = userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)
  const iphone = userAgent.match(/(iPhone\sOS)\s([\d_]+)/)
  // �����Android��iPhone������ת���ƶ�վ��
  if (android || iphone) {
    location.href = 'http://m.itcast.cn'
  }})();
```

# ʮ��ʶ���û������Ʒ��

ʶ���û������Ʒ��ͨ��ʹ�� `navigator.userAgent` ���ԡ�

```javascript
var sUsrAg = navigator.userAgent;

if (sUsrAg.indexOf("Firefox") > -1) {
} else if (sUsrAg.indexOf("Opera") > -1) {
} else if (sUsrAg.indexOf("Edge") > -1) {
} else if (sUsrAg.indexOf("Chrome") > -1) {
} else if (sUsrAg.indexOf("Safari") > -1) {
} else {
}
```

# ��ʱ��-�ӳٺ���
 
JavaScript ���õ�һ�������ô����ӳ�ִ�еĺ������� setTimeout
 
**�﷨��**
 
```JavaScript
setTimeout(�ص�����, �ӳ�ʱ��)
```
 
setTimeout ����ִֻ��һ�Σ����Կ������Ϊ���ǰ�һ�δ����ӳ�ִ��, ƽʱʡ��window
 
��Ъ���� setInterval : ÿ��һ��ʱ���ִ��һ�Σ� , ƽʱʡ��window
 
�����ʱ������
 
```JavaScript
clearTimeout(timerId)
```
 
>ע���
>
>1. ��ʱ������Ҫ�ȴ�,���Ժ���Ĵ�����ִ��
>2. ����ֵ��һ������������ʾ��ʱ���ı��
 
```html
<body>
  <script>
    // ��ʱ��֮�ӳٺ���
 
    // 1. �����ӳٺ���
    let timerId = setTimeout(function () {
      console.log('��ִֻ��һ��')
    }, 3000)
 
    // 1.1 �ӳٺ������صĻ���һ�����������֣���ʾ�ӳٺ����ı��
    console.log(timerId)
 
    // 1.2 �ӳٺ�����Ҫ�ȴ�ʱ�䣬��������Ĵ�������ִ��
 
    // 2. �ر��ӳٺ���
    clearTimeout(timerId)
 
  </script>
</body>
```

# ʮһ��History����

history (��ʷ)�Ƕ�����Ҫ������ʷ��¼�� �ö������������ַ���Ĳ������Ӧ����ǰ�������˵�
 
**ʹ�ó���**
 
history����һ����ʵ�ʿ����бȽ����ã����ǻ���һЩOA �칫ϵͳ�м�����
 
 ![](mark-img/1676047834796.png)
 
����������
 
 ![](mark-img/1676047846593.png)

`window.history` �����ṩ�˲���������Ự��ʷ�Ľӿڡ�

���ò�������ģ����������˰�ť��


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
  <button class="back">������</button>
  <button class="forward">ǰ����</button>
  <script>
    // histroy����
 
    // 1.ǰ��
    const forward = document.querySelector('.forward')
    forward.addEventListener('click', function () {
      // history.forward() 
      history.go(1)
    })
    // 2.����
    const back = document.querySelector('.back')
    back.addEventListener('click', function () {
      // history.back()
      history.go(-1)
    })
  </script>
</body>

</html>
```

<img src="mark-img/1fdace562f72414c8a3839383e14be69.gif" style="width:50%;" />

# ʮ����Location����

`window.location` ��ʶ��ǰ������ַ������ͨ����������Ը�ֵ�������������ҳ����ת��

```javascript
window.locaiton = 'http://www.imooc.com';
window.location.href = 'http://www.imooc.com';
```
 
location (��ַ) ����ֲ������� URL ��ַ�ĸ�����ɲ��֣� ����һ������
 
| ����/���� | ˵��                                                 |
| --------- | ---------------------------------------------------- |
| href      | ���ԣ���ȡ������ URL ��ַ����ֵʱ���ڵ�ַ����ת      |
| search    | ���ԣ���ȡ��ַ��Я���Ĳ��������� �����沿��          |
| hash      | ���ԣ���ȡ��ַ�е�ɶϣֵ������ # ���沿��            |
| reload()  | ����������ˢ�µ�ǰҳ�棬������� true ʱ��ʾǿ��ˢ�� |
 
```html
<body>
  <form>
    <input type="text" name="search"> <button>����</button>
  </form>
  <a href="#/music">����</a>
  <a href="#/download">����</a>
 
  <button class="reload">ˢ��ҳ��</button>
  <script>
    // location ����  
    // 1. href���� ���ص㣩 �õ�������ַ����ֵ������ת���µ�ַ
    console.log(location.href)
    // location.href = 'http://www.itcast.cn'
 
    // 2. search����  �õ� ? ����ĵ�ַ 
    console.log(location.search)  // ?search=�ʼǱ�
 
    // 3. hash����  �õ� # ����ĵ�ַ
    console.log(location.hash)
 
    // 4. reload ����  ˢ��ҳ��
    const btn = document.querySelector('.reload')
    btn.addEventListener('click', function () {
      // location.reload() // ҳ��ˢ��
      location.reload(true) // ǿ��ҳ��ˢ�� ctrl+f5
    })
  </script>
</body>
```

# ʮ�������¼��ص�ǰҳ��

���Ե��� location �� `reload` ���������¼��ص�ǰҳ�棬���� true ��ʾǿ�ƴӷ�����ǿ�Ƽ��ء�

```javascript
window.location.reload(true);
```

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
    <button id="btn1">����ȥ��Ľ��</button>
    <button id="btn2">ˢ��</button>
    <script>
        var btn1 = document.getElementById('btn1');
        var btn2 = document.getElementById('btn2');

        btn1.onclick = function () {
            window.location = 'http://www.imooc.com';
        };

        btn2.onclick = function () {
            window.location.reload(true);
        };
    </script>
</body>

</html>
```

 

 
## ���ش洢�������ص㣩
 
���ش洢�������ݴ洢�ڱ����������
 
������ʹ�ó�����
 
<https://todomvc.com/examples/vanilla-es6/>    ҳ��ˢ�����ݲ���ʧ
 
�ô���
 
1��ҳ��ˢ�»��߹رղ���ʧ���ݣ�ʵ�����ݳ־û�
 
2�������ϴ�sessionStorage�� localStorage Լ 5M ����
 
###  localStorage���ص㣩
 
**����:** ���ݿ��Գ��ڱ����ڱ���������У�ˢ��ҳ��͹ر�ҳ�棬����Ҳ���ᶪʧ
 
**���ԣ�**�Լ�ֵ�Ե���ʽ�洢�����Ҵ洢�����ַ����� ʡ����window
 
![67604963508](assets/1676049635087.png)
 
```html
<!DOCTYPE html>
<html lang="en">
 
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>���ش洢-localstorage</title>
</head>
 
<body>
  <script>
    // ���ش洢 - localstorage �洢�����ַ��� 
    // 1. �洢
    localStorage.setItem('age', 18)
 
    // 2. ��ȡ
    console.log(typeof localStorage.getItem('age'))
 
    // 3. ɾ��
    localStorage.removeItem('age')
  </script>
</body>
 
</html>
```
 
### sessionStorage���˽⣩
 
���ԣ�
 
- �÷���localStorage������ͬ
- �����ǣ���ҳ����������ر�ʱ���洢�� sessionStorage �����ݻᱻ���
 
�洢��sessionStorage.setItem(key,value)
 
��ȡ��sessionStorage.getItem(key)
 
ɾ����sessionStorage.removeItem(key)
 
### localStorage �洢������������
 
**���⣺**����ֻ�ܴ洢�ַ���,�޷��洢������������.
 
**�����**��Ҫ��������������ת���� JSON�ַ���,�ڴ洢������
 
**�﷨��**JSON.stringify(������������)
 
JSON�ַ�����
 
- ������1���ַ���
- ������ʹ��˫���������������ܵ�����
- ����ֵ������ַ�����Ҳ����˫����
 
```html
<body>
  <script>
    // ���ش洢������������
    const goods = {
      name: 'С��',
      price: 1999
    }
    // localStorage.setItem('goods', goods)
    // console.log(localStorage.getItem('goods'))
 
    // 1. �Ѷ���ת��ΪJSON�ַ���  JSON.stringify
    localStorage.setItem('goods', JSON.stringify(goods))
    // console.log(typeof localStorage.getItem('goods'))
 
  </script>
</body>
```
 
 
 
**���⣺**��Ϊ���ش洢����ȡ���������ַ��������Ƕ����޷�ֱ��ʹ��
 
**����� **��ȡ�������ַ���ת��Ϊ����
 
**�﷨��**JSON.parse(JSON�ַ���)
 
```html
<body>
  <script>
    // ���ش洢������������
    const goods = {
      name: 'С��',
      price: 1999
    }
    // localStorage.setItem('goods', goods)
    // console.log(localStorage.getItem('goods'))
 
    // 1. �Ѷ���ת��ΪJSON�ַ���  JSON.stringify
    localStorage.setItem('goods', JSON.stringify(goods))
    // console.log(typeof localStorage.getItem('goods'))
 
    // 2. ��JSON�ַ���ת��Ϊ����  JSON.parse
    console.log(JSON.parse(localStorage.getItem('goods')))
 
  </script>
</body>
```
 

# ʮ�ġ�GET�����ѯ����

`window.location.search` ���Լ�Ϊ��ǰ������� GET �����ѯ������

������ַ��https://www.imooc.com/?a=1&b=2

```javascript
console.log(window.location.search);	// "?a=1&b=2"
```

> ���� GET �� POST ����ϸ������ Ajax �н��ܡ�

# ʮ�塢BOM��Ч����

## 15.1 ���ض�����ť����

���ض�����ԭ���ı� `document.documentElement.scrollTop` ���ԣ�ͨ����ʱ���𲽸ı��ֵ�����ö�����ʽ���ض�����

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            height: 5000px;
            background-image: linear-gradient(to bottom, rgb(255, 0, 149), rgb(7, 185, 255), rgb(0, 255, 76));
        }

        .backtotop {
            width: 60px;
            height: 60px;
            background-color: rgba(255, 255, 255, .6);
            position: fixed;
            bottom: 100px;
            right: 100px;
            /* С��״ */
            cursor: pointer;
        }
    </style>
</head>

<body>
    <div class="backtotop" id="backtotopBtn">���ض���</div>

    <script>
        var backtotopBtn = document.getElementById('backtotopBtn');

        var timer;
        backtotopBtn.onclick = function () {
            // ����ȹ�
            clearInterval(timer);

            // ���ö�ʱ��
            timer = setInterval(function () {
                // ������scrollTop����
                document.documentElement.scrollTop -= 200;
                // ��ʱ���϶�Ҫͣ
                if (document.documentElement.scrollTop <= 0) {
                    clearInterval(timer);
                }
            }, 20);
        };
    </script>
</body>

</html>
```

## 15.2 ¥�㵼��СЧ��

DOM Ԫ�ض��� `offsetTop` ���ԣ���ʾ��Ԫ�ص���λ����Ԫ�صĴ�ֱ���롣

��λ����Ԫ�أ��������У����Լ��������ӵ�ж�λ���Ե�Ԫ�ء�

> ����offsetTop ���Կ��Եõ���Ԫ�������Լ������ӵ�ж�λ������Ԫ�ض����ľ���ֵ��
>
> ���磬û�������ж�λ����ôֱ�ӵõ���Ԫ�ؾ���ҳ�涥���ľ���ֵ��	

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

        .content-part {
            width: 1000px;
            margin: 0px auto;
            margin-bottom: 30px;
            background-color: #ccc;
            font-size: 50px;
        }

        .floornav {
            position: fixed;
            right: 40px;
            top: 50%;
            margin-top: -100px;
            width: 120px;
            height: 200px;
            background-color: orange;
        }

        .floornav ul {
            list-style: none;
        }

        .floornav ul li {
            width: 120px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 26px;
            /* С��ָ�� */
            cursor: pointer;
        }

        .floornav ul li.current {
            background: purple;
            color: white;
        }
    </style>
</head>

<body>
    <nav class="floornav">
        <ul id="list">
            <li data-n="�Ƽ�" class="current">�Ƽ�</li>
            <li data-n="����">����</li>
            <li data-n="����">����</li>
            <li data-n="����">����</li>
            <li data-n="��Ƶ">��Ƶ</li>
        </ul>
    </nav>

    <section class="content-part" style="height:674px;" data-n="�Ƽ�">
        �Ƽ���Ŀ
    </section>

    <section class="content-part" style="height:567px;" data-n="����">
        ������Ŀ
    </section>

    <section class="content-part" style="height:739px;" data-n="����">
        ������Ŀ
    </section>

    <section class="content-part" style="height:574px;" data-n="����">
        ������Ŀ
    </section>

    <section class="content-part" style="height:1294px;" data-n="��Ƶ">
        ��Ƶ��Ŀ
    </section>

    <script>
        // ʹ���¼�ί�и�li��Ӽ���
        var list = document.getElementById('list');
        var contentParts = document.querySelectorAll('.content-part');
        var lis = document.querySelectorAll('#list li');

        list.onclick = function (e) {
            if (e.target.tagName.toLowerCase() == 'li') {
                // getAttribute��ʾ�õ���ǩ���ϵ�ĳ������ֵ
                var n = e.target.getAttribute('data-n');

                // ����������ѡ����(���Ƿ�����ѡ����)��Ѱ�Ҵ�����ͬdata-n��content-part
                var contentPart = document.querySelector('.content-part[data-n=' + n + ']');

                // ��ҳ��ľ��Զ���Ϊ������ӵ�offsetTopֵ
                document.documentElement.scrollTop = contentPart.offsetTop;
            }
        }


        // ��ҳ����غ�֮�󣬽����е�content-part���ӵ�offsetTopֵ��������
        var offsetTopArr = [];

        // �������е�contentPart�������ǵľ�λ����������
        for (var i = 0; i < contentParts.length; i++) {
            offsetTopArr.push(contentParts[i].offsetTop);
        }
        // Ϊ�����һ����Է���Ƚϣ����ǿ�������һ�������
        offsetTopArr.push(Infinity);

        console.log(offsetTopArr);

        // ��ǰ����¥��
        var nowfloor = -1;

        // ���ڵľ�
        window.onscroll = function () {
            // �õ���ǰ�Ĵ��ھ�ֵ
            var scrollTop = document.documentElement.scrollTop;

            // ����offsetTopArr���飬������ǰ��scrollTopֵ��������¥��֮��
            for (var i = 0; i < offsetTopArr.length; i++) {
                if (scrollTop >= offsetTopArr[i] && scrollTop < offsetTopArr[i + 1]) {
                    break;
                }
            }
            // �˳�ѭ����ʱ��i�Ǽ����ͱ�ʾ��ǰ¥���Ǽ�
            // �����ǰ����¥�㣬����i����ʾ��¥��
            if (nowfloor != i) {
                console.log(i);
                // ��ȫ�ֱ����ı�Ϊ���¥���
                nowfloor = i;

                // �����±�Ϊi������cur
                for (var j = 0; j < lis.length; j++) {
                    if (j == i) {
                        lis[j].className = 'current';
                    } else {
                        lis[j].className = '';
                    }
                }
            }
        };
    </script>
</body>

</html>
```

<img src="mark-img/e37cf208422d4177afb2f4691e141232.gif" style="width:80%;" />

<img src="mark-img/2491bae6d5f747f995cc22476b14513e.gif" style="width:80%;" />