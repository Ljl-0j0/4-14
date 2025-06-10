<!--
 * @Description: 
 * @Author: ljl
 * @Date: 2025-05-19 09:27:40
 * @LastEditors: rendc
 * @LastEditTime: 2025-06-10 11:26:20
-->
# ��ES6�������š�

# һ����ʼ ES6
> ��ԭ�����ݣ�ת����ע��������
> �������ݳ���Jerry Zhou.���ܼ��𣩣�����ѧϰ
> 

## 1.1 ES6 ���

ES6 = ECMAScript ���ű�׼�ĵ� 6 ���汾��2015����

- ECMAScript �����Եı�׼
- 6 �ǰ汾��

ECMA��ŷ�޼����������Э��

�������ݣ��﷨ + API

��ʷ�汾��ES1 ����> 3��ES5 ����> 6��ES4 �������ˣ�

����Ŀǰʹ�� JS �Ĵ󲿷����ݶ��� ES3 �Ĳ��֡�

ES �� JS �Ĺ�ϵ��`JavaScript(�������) = ESMAScript(�﷨+API) + DOM + BOM`

 ES6 �ļ����ԣ�

- ��������������°汾������֧�� ES6
- IE �ϰ汾�Ȳ�֧�ֵ������������ʹ�� Babel ת��
- **��֮������Ĵ󵨵�ʹ�� ES6**

## 1.2 let �� const

�򵥽��ͣ�

- `let` ����������������Ӧ֮ǰ�� `var`��
- `const` ��������������֮ǰû�г����ĸ��

### 1.2.1 �����볣��

��������ʼ����������¸�ֵ����

��������ʼ���󲻿������¸�ֵ����

### 1.2.2 const

**��1��Ϊʲô��Ҫ const**

��ΪĳЩ����ֵ��һֱ�̶��ģ�����ҪҲ���ܱ��޸ģ�������޸ľ�Ӧ�ñ���

**��2��const ע������**

- ʹ�� const ����������һ�������ͱ���������ʼ�������ֿܷ���ֵ��

  ```javascript
  const name = 'jerry'; ��
  -------------------------
  const name;
  name = 'jerry'; ��
  ```

- const �����ĳ����������ڲ����¸�ֵ�����޸��ڴ��ַ����������޸�����ֵ

  ```javascript
  // �����������Ͳ�����
  -------------------
  // ������������
  const person = {
      username: 'jerry'
  };
  // �޸Ķ����ڵ����ԣ��ö�����ڴ��ַ��û�з����仯
  person.username = 'zjr'; ��
  ```

### 1.2.3 ʲôʱ���� let��ʲôʹ���� const

ԭ�������֪����ʲô��ʱ�򣬾��� const

ԭ�����Ӧ���ǳ�������ô�պ÷����������Ӧ���Ǳ�������ô��������ʱ��������Ϊ����ҲΪʱ����ͬʱ��һ��ʼ������Ϊ����������������ҪΪ����ʱ����ֵȴ�������޸ĵ������

## 1.3 let��const �� var ������

- �ظ�����
- ��������
- ��ʱ������
- window ��������Ժͷ�����ȫ���������У�
- �鼶������

> ������ let �� var �ĶԱ���˵����const �� let ͬ��

> ���� let �� const ֮�󣬷Ǳ�Ҫ������벻Ҫ��ʹ�� var ��

### 1.3.1 �ظ�����

```javascript
var a = 10;
var a = 24;
console.log(a);		// 24
```

```javascript
let a = 10;
let a = 24;
console.log(a);		// ���������ظ�������
```

```javascript
function func(a) {
    var a = 1;
    console.log(a);		// 1
}
func(24);
```

```javascript
function func(a) {
    let a = 1;
    console.log(a);		// ���������ظ�������
}
func(24);
```

### 1.3.2 ��������

```javascript
console.log(a);		// undefined
var a = 24;
```

```javascript
console.log(a);		// ��������δ���壩
let a = 24;
```

> �������еı����ͳ�����˵��Ӧ����ѭ��**��������ʹ��**��ԭ��

### 1.3.3 ��ʱ������

ֻҪ�������ڴ��� let��const�������������ı����������Զ� ���󶨡� ������򣬲����ܵ��ⲿ�������Ӱ�졣

```javascript
let a = 2;
function func() {
    console.log(a);		// ����
    let a = 1;
}
func();
```

```javascript
let a = 2;
function func() {
    console.log(a);		// 2
}
func();
```

**����ֻҪ�������ڳ�����ͬ���� let �� const����ô�ͻ�ȥ�����������ǰ�ң�������Ҳ���Ҳ������ȥ�ⲿ�ң�ֻ��ֱ�ӱ���**

> ֻҪ�������� ��**��������ʹ��**������ô��ʵ�ͻ�����������������������ʱ���������⡣

### 1.3.4 window ��������Ժͷ�����ȫ���������У�

ȫ���������У�`var` �����ı�����`function` �����ĺ��������Զ���� window ��������Ի򷽷���

```javascript
var age = 18;
function add() {}
console.log(window.age);			 // 18
console.log(window.add === add);	 // true
```

```javascript
let age = 18;
const add = function() {}
console.log(window.age);			 // undefined
console.log(window.add === add);	 // false
```

### 1.3.5 �鼶������

- var û�п鼶������

```javascript
for (var i = 0; i < 3; i++) {
}
console.log(i);		// 3
```

- let��const �п鼶������

```javascript
for (let i = 0; i < 3; i++) {
}
console.log(i);		// ����
```

- �����������ڲ������� ����> ��������� ����> ȫ��������

- �鼶�����򣺳��˶��� `{}`������ `{}`������������֮���һ�� `{}` �����ڿ鼶������

## 1.4 let �� const ��Ӧ��

Ҫ����ҳ������ʾ������ť��1��2��3��������κ�һ����ť����ʾ�ð�ť��Ӧ�����֡�

- ʹ�� var

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <meta content="ie=edge" http-equiv="X-UA-Compatible"/>
    <title>let �� const ��Ӧ��</title>
    <style>
        body {
            padding: 50px 0 0 150px;
        }

        .btn {
            width: 100px;
            height: 100px;
            margin-right: 20px;
            font-size: 80px;
            cursor: pointer;
        }
    </style>
</head>
<body>
<button class="btn">0</button>
<button class="btn">1</button>
<button class="btn">2</button>

<script>
     var btns = document.querySelectorAll('.btn');

     for (var i = 0; i < btns.length; i++) {
       btns[i].addEventListener(
         'click',
         function () {
           console.log(i);
         },
         false
       );
     }
</script>
</body>
</html>
```

<img src="mark-img/1.gif" alt="1" style="width: 50%;" />

���۵��˭���� 3��������Ϊ var û�п鼶��������������¼������е� i ����ͬһ��ȫ�ֱ��������� i ��Ϊ 3 �ˣ����Թ�Ȼ����� 3��

- ʹ�� var��ͬʱ��Ϻ���������

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <meta content="ie=edge" http-equiv="X-UA-Compatible"/>
    <title>let �� const ��Ӧ��</title>
    <style>
        body {
            padding: 50px 0 0 150px;
        }

        .btn {
            width: 100px;
            height: 100px;
            margin-right: 20px;
            font-size: 80px;
            cursor: pointer;
        }
    </style>
</head>
<body>
<button class="btn">0</button>
<button class="btn">1</button>
<button class="btn">2</button>

<script>
    var btns = document.querySelectorAll('.btn');

    for (var i = 0; i < btns.length; i++) {
        // index ���ں���������
        (function (index) {
            btns[index].addEventListener(
                'click',
                function () {
                    console.log(index);
                },
                false
            );
        })(i);
    }
</script>
</body>
</html>
```

<img src="mark-img/1-16471758864061.gif" alt="1" style="width:50%;" />

- ʹ�� let

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <meta content="ie=edge" http-equiv="X-UA-Compatible"/>
    <title>let �� const ��Ӧ��</title>
    <style>
        body {
            padding: 50px 0 0 150px;
        }

        .btn {
            width: 100px;
            height: 100px;
            margin-right: 20px;
            font-size: 80px;
            cursor: pointer;
        }
    </style>
</head>
<body>
<button class="btn">0</button>
<button class="btn">1</button>
<button class="btn">2</button>

<script>
    let btns = document.querySelectorAll('.btn');

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener(
            'click',
            function () {
                console.log(i);
            },
            false
        );
    }
</script>
</body>
</html>
```

<img src="mark-img/1-16471758864061.gif" alt="1" style="width:50%;" />

# ����ģ���ַ���

## 2.1 ��ʶģ���ַ���

- ��ͨ�ַ�����

```javascript
'�ַ���'
"�ַ���"
```

- ģ���ַ�����

```javascript
`�ַ���`
```

## 2.2 ģ���ַ�����һ���ַ���������

- ������ͨ�÷�**û������**

```javascript
const name1 = 'ljl';
const name2 = `ljl`;
console.log(name1, name2, name1 === name2);
// ljl ljl true
```

- �ַ���ƴ�ӵ�**�޴�����**

```javascript
const person = {
    name: 'ljl',
    age: 18,
    sex: 'Ů'
};

const info = '�ҵ������ǣ�' + person.name + '���Ա��ǣ�' + person.sex + '�����꣺' + person.age + '��';

console.log(info);

// �ҵ������ǣ�ljl���Ա��ǣ�Ů�����꣺18��
```

```javascript
const person = {
    name: `ljl`,
    age: 18,
    sex: `Ů`
};

const info = `�ҵ������ǣ�${person.name}���Ա��ǣ�${person.sex}�����꣺${person.age}��`;

console.log(info);

// �ҵ������ǣ�ljl���Ա��ǣ�female�����꣺18��
```

> ģ���ַ����������ƣ�����ע�룡

## 2.3 ģ���ַ�����ע������

### 2.3.1 ��������ַ���

```javascript
// һ���ַ���
const info = '��һ��\n�ڶ���';
console.log(info);
/*
��һ��
�ڶ���
*/

// ģ���ַ���
const info = `��һ��
�ڶ���`;	// ע�ⲻ��������
console.log(info);
/*
��һ��
�ڶ���
*/
```

> ģ���ַ����У����еĿո񡢻��л��������ᱻ����������У�

### 2.3.2 ��� `` ` �� `\` �������ַ�

```javascript
const info = `\``;	// ```
const info = `\\`;	// `\`
const info = `""`;	// `""`
const info = `''`;	// `''`
```

### 2.3.3 ģ���ַ�����ע��

```javascript
const username = 'alex';
const person = {
    age: 18,
    sex: `male`
};
const getSex = function (sex) {
    return sex === `male` ? '��' : 'Ů';
};

const info = `${username},${person.age + 2},${getSex(person.sex)}`;
console.log(info);

// alex,20,��
```

> ģ���ַ����� `${}` ע����Լ��ݼ������е�ֵ��
>
> ģ���ַ������ַ�������ֵ������ֵ�����ʽ������������ֻҪ����Ǹ� ��ֵ�� ���ɣ�

## 2.4 ģ���ַ�����Ӧ��

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <title>ģ���ַ�����Ӧ��</title>
    <style>
        body {
            padding: 50px 0 0 300px;
            font-size: 22px;
        }

        ul {
            padding: 0;
        }

        p {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
<p>ѧ����Ϣ��</p>
<ul id="list">
    <li style="list-style: none;">��Ϣ�����С���</li>
</ul>

<script>
    // ���ݣ��˴�ֻ��ģ�����ݣ���ʵ������Ӧ����ͨ�� Ajax �Ӻ�̨��ȡ��
    const students = [
        {
            username: 'Alex',
            age: 18,
            sex: 'male'
        },
        {
            username: 'ZhangSan',
            age: 28,
            sex: 'male'
        },
        {
            username: 'LiSi',
            age: 20,
            sex: 'female'
        }
    ];

    const list = document.getElementById('list');

    let html = '';

    for (let i = 0; i < students.length; i++) {
        html += `<li>�ҵ������ǣ�${students[i].username},${students[i].sex},${students[i].age}</li>`;
    }

    list.innerHTML = html;
</script>
</body>
</html>
```

<img src="mark-img/image-20220315130229559.png" alt="image-20220315130229559" style="width:50%;" />

# ������ͷ����

## 3.1 ��ʶ��ͷ����

��ͨ������

- `function ������() {}`
- `const ������ = function() {};`

��ͷ������

- `���� => ������`

- `() => {}`

> ���ڼ�ͷ������������������������ͨ����������һ������

```javascript
const add = (x, y) => {
    return x + y;
};

console.log(add(1, 1));		// 2
```

## 3.2 ��ͷ����ע������

### 3.2.1 ��������

```javascript
const add = (x) => {
    return x + 1;
};

// ������������ʡ�� ()
const add = x => {
    return x + 1;
};

// �޲�����0����������ʡ�� ()
const test = () => {
    return 1;
};
```

### 3.2.2 ���к�����

```javascript
const add = (x, y) => {
    return x + y;
};

// ���к��������ʡ�� return �� {}���� return �� {} ��Ҫһ��ʡ��
const add = (x, y) => x + y; 
```

### 3.2.3 ���ж���

```javascript
const add = (x, y) => {
    return {
        value: x + y
    };
};

// const add = (x, y) => {value: x + y};  ������Ϊ {} ��������壡
// () ���Խ�����Ϊ���ʽ���Ӷ� {} �Ϳ��Ա�˳����½���Ϊ����
const add = (x, y) => ({value: x + y});

// �����û����������
const add = (x, y) => [x, y];
```

## 3.3 �Ǽ�ͷ�����е� this ָ��

### 3.3.1 ȫ���������е� this ָ��

```javascript
console.log(this);
// window
```

### 3.3.2 һ�㺯�����Ǽ�ͷ�������е� this ָ��

> ֻ���ں������õ�ʱ�� this ָ�����ȷ���������õ�ʱ�򣬲�֪��ָ��˭��
>
> this ָ��ͺ������Ķ�û�й�ϵ��ֻ��˭�ڵ����йء�

```javascript
function add() {
    console.log(this);
}

add();	// window
// �ڷ��ϸ�ģʽ�£�this ��ʵ����ָ�� undefined��Ȼ���Զ�תΪ�� window
```

```javascript
'use strict'	// �ϸ�ģʽ

function add() {
    console.log(this);
}

add();	// undefined
// ���ϸ�ģʽ�£�this Ϊ undefined
```

```javascript
'use strict'	// �ϸ�ģʽ

function add() {
    console.log(this);
}

const calc = {
    add: add
};

calc.add();		// ������ this Ϊ calc

const adder = calc.add;
adder();		// ָ�� undefined�����ϸ�ģʽ��ָ�� window��
```

## 3.4 ��ͷ����û�� this

> ��ͷ����û�� this��

## 3.5 �����ü�ͷ�����ĳ���

### 3.4.1 ��Ϊ���캯��

��Ϊ��ͷ����û�� this�������캯���ĺ��ľ��� this��

### 3.4.2 ��Ҫ this ָ����ö����ʱ��

��Ϊ��ͷ����û�� this�����������ͷ�����г����� this����ô��� this �������ģ�

### 3.4.3 ��Ҫʹ�� arguments ��ʱ��

��ͷ����û�� arguments��

�����������������������ʣ�������

## 3.6 ��ͷ������Ӧ��

> ��ҪӦ�þ��ǣ���ͷ����û�� this ��һ���ԣ�

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <title>��ͷ������Ӧ��</title>
    <style>
        body {
            padding: 50px 0 0 250px;
            font-size: 30px;
        }

        #btn {
            width: 100px;
            height: 100px;
            margin-right: 20px;
            font-size: 30px;
            cursor: pointer;
        }
    </style>
</head>
<body>
<button id="btn">��ʼ</button>
<span id="result">0</span>

<script>
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');

    const timer = {
        time: 0,
        start: function () {
            // ����ϣ���� this �� start ��� this����Ϊ��� this �Ż�ָ�� timer
            // �¼��������ص������е��������Ǳ��󶨵� dom ���󣬼� this ��ָ�򱻰󶨵� dom ����
            btn.addEventListener(
                'click',
                function () {
                    setInterval(function () {
                        // ��ʱ������ʱ���ص��������������� window ���󣬼� this ��ָ�� window
                        console.log(this);
                        this.time++;
                        result.innerHTML = this.time;
                    }, 1000);
                },
                false
            );
        }
    };

    timer.start();
</script>
</body>
</html>
```
<img src="mark-img/1-16473495911521.gif" alt="1" style="width:20%;" />

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <title>��ͷ������Ӧ��</title>
    <style>
        body {
            padding: 50px 0 0 250px;
            font-size: 30px;
        }

        #btn {
            width: 100px;
            height: 100px;
            margin-right: 20px;
            font-size: 30px;
            cursor: pointer;
        }
    </style>
</head>
<body>
<button id="btn">��ʼ</button>
<span id="result">0</span>

<script>
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');

    const timer = {
        time: 0,
        start: function () {
            // ����ϣ���� this �� start ��� this����Ϊ��� this �Ż�ָ�� timer
         	// �� that �� self �� _this ���� this
            var that = this;
            btn.addEventListener(
                'click',
                function () {
                    setInterval(function () {
                        that.time++;
                        result.innerHTML = that.time;
                    }, 1000);
                },
                false
            );
        }
    };

    timer.start();
</script>
</body>
</html>
```
<img src="mark-img/2.gif" alt="2" style="width:20%;" />

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <title>��ͷ������Ӧ��</title>
    <style>
        body {
            padding: 50px 0 0 250px;
            font-size: 30px;
        }

        #btn {
            width: 100px;
            height: 100px;
            margin-right: 20px;
            font-size: 30px;
            cursor: pointer;
        }
    </style>
</head>
<body>
<button id="btn">��ʼ</button>
<span id="result">0</span>

<script>
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');

    const timer = {
        time: 0,
        start: function () {
            // ����ϣ���� this �� start ��� this����Ϊ��� this �Ż�ָ�� timer
            btn.addEventListener(
                'click',
                // ��ͷ����
                () => {
                    // ��ͷ����
                    setInterval(() => {
                        // ��ͷ������û�� this������ this Ӧ������һ�� btn �ģ��¼��������ص������е��������Ǳ��󶨵� dom ����
                    	// ������ addEventListener �Ļص�����Ҳ�Ǽ�ͷ����Ҳû�� this������������ this ���� timer ��
                        console.log(this);
                        this.time++;
                        result.innerHTML = this.time;
                    }, 1000);
                },
                false
            );
        }
    };
    timer.start();
</script>
</body>
</html>
```

<img src="mark-img/2-16473496264402.gif" alt="2" style="width:20%;" />

# �ġ��⹹��ֵ

��ʶ�⹹��ֵ��

```javascript
const [a, b, c] = [1, 2, 3];
console.log(a, b, c);	// 1 2 3
```

����ĳһ���ݵĽṹ����������Ҫ�Ķ�����ȡ��������ֵ������������

## 4.1 ����Ľ⹹��ֵ

### 4.1.1 ԭ��

1. ģʽ���ṹ��ƥ�� `[] = [1, 2, 3];`

2. ����ֵ��ͬ����ɸ�ֵ `const [a, b, c] = [1, 2, 3];`

3. ����

   ```javascript
   const [a, [, , b], c] = [1, [2, 3, 4], 5];
   console.log(a, b, c);	// 1 4 5
   ```

### 4.1.2 ����⹹��ֵ��Ĭ��ֵ

**��1��Ĭ��ֵ�Ļ����÷�**

```javascript
const [a, b] = [];
console.log(a, b);	// undefined undefined

// ---------------------------------------
const [a = 1, b = 2] = [];
console.log(a, b);	// 1 2
```

**��2��Ĭ��ֵ����Ч����**

ֻ�е�һ�������Ա�ϸ���� === undefined ʱ����Ӧ��Ĭ��ֵ�Ż���Ч��

```javascript
const [a = 1, b = 2] = [3, 0];		// 3 0
const [a = 1, b = 2] = [3, null];	// 3 null
const [a = 1, b = 2] = [3];		    // 3 2
```

**��3��Ĭ��ֵ���ʽ**

���Ĭ��ֵ�Ǳ��ʽ����ôĬ��ֵ���ʽ�Ƕ�����ֵ�ģ������������õ�Ĭ��ֵʱ�����ʽ�ǲ�����ֵ�ģ�

```javascript
const func = () => {
    return 24;
};

const [a = func()] = [1];	// 1
const [b = func()] = [];	// 24
```

### 4.1.3 ����⹹��ֵ��Ӧ��

**��1��arguments**

```javascript
function func() {
    const [a, b] = arguments;
    console.log(a, b);	// 1 2
}
func(1, 2);
```

**��2��NodeList**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>NodeList</title>
</head>
<body>
<p>1</p>
<p>2</p>
<p>3</p>
<script>
    const [p1, p2, p3] = document.querySelectorAll('p');
    console.log(p1, p2, p3);
    /*
    <p>1</p>
	<p>2</p>
	<p>3</p>
	*/
</script>
</body>
</html>
```

**��3�����������Ľ⹹��ֵ**

```javascript
const array = [1, 1];
// const add = arr => arr[0] + arr[1];
const add = ([x = 0, y = 0]) => x + y;
console.log(add(array));	// 2
console.log(add([]));		// 0
```

**��4������������ֵ**

```javascript
let x = 2, y = 1;

// ԭ��
let tmp = x;
x = y;
y = tmp;

// ����
[x, y] = [y, x];
// ��⣺[x, y] = [2, 1]
console.log(x, y);
// 1 2
```

## 4.2 ����Ľ⹹��ֵ

### 4.2.1 ԭ��

1. ģʽ���ṹ��ƥ�� `{} = {};`
2. ��������ͬ����ɸ�ֵ `const {name, age} = {name: 'jerry', age: 18};` �� `const {age, name} = {name: 'jerry', age: 18};`

### 4.2.2 ��׼д��

```javascript
const {age: age, name: name} = {name: 'jerry', age: '18'};
// js ����� key ��������ַ�����ֻ����������� js ��ʶ�������淶ʱ�����Բ�д����
const {'name': name, 'age': age} = {name: 'jerry', age: '18'};

// ����д����һ�����ĺô����ǿ����Զ������
const {name: myName, age: myAge} = {name: 'jerry', age: '18'};
console.log(myName, myAge);	// jerry 18

// ��д��js �����У�key �� value ͬ��ʱ������дΪһ����
const {name, age} = {name: 'jerry', age: '18'};
console.log(name, age);	// jerry 18
```

### 4.2.3 ����⹹��ֵ��Ĭ��ֵ

1. ���������ֵ�ϸ���� undefined ʱ����Ӧ��Ĭ��ֵ�Ż���Ч��

2. ���Ĭ��ֵ�Ǳ��ʽ��Ĭ��ֵ���ʽ�Ƕ�����ֵ�ġ�

### 4.2.4 ��һ���Ѿ������ı������ڽ⹹��ֵ

������ֵ��Ҫ��Բ�����н��У�

```javascript
let x = 2;
({x} = {x: 1});
// ������� ()����ô {x} �ᱻ���������Ϊ����ͨ�Ĵ����
// �Ѿ������ı�����������Ľ⹹��ֵ�Ͳ��������������
```

### 4.2.5 ����⹹��ֵ����ȡ���̳�����

```javascript
const {toString} = {};
console.log(toString);	// [Function: toString]
// toString �� object �����ԣ����κζ��󶼼̳��� Object
```

### 4.2.6 ����⹹��ֵ��Ӧ��

 **��1��������Ϊ��������**

```javascript
// ֮ǰ
const logPersonInfo = user => console.log(user.name, user.age);
logPersonInfo({name: 'jerry', age: 18});

// ֮��
const logPersonInfo = ({age = 21, name = 'ZJR'}) => console.log(name, age);
logPersonInfo({name: 'jerry', age: 18});	// jerry 18
logPersonInfo({});	// ZJR 21
```

**��2�����ӵ�Ƕ�ף���Ҫ�������߼���ϵ���ɣ�**

```javascript
const obj = {
    x: 1,
    y: [2, 3, 4],
    z: {
        a: 5,
        b: 6
    }
};

// ----------------------------------------------------
const {x, y, z} = obj;
console.log(x, y, z);	// 1 [ 2, 3, 4 ] { a: 5, b: 6 }

// ----------------------------------------------------
const {y: [, y2]} = obj;
console.log(y2);	// 3
console.log(y);		// ����y ֻ�Ƕ������Ե����ƣ����Ǳ�����

// ----------------------------------------------------
const {y: y, y: [, y2]} = obj;
console.log(y2);	// 3
console.log(y);		// [ 2, 3, 4 ]

// ----------------------------------------------------
const {y, y: [, y2], z, z: {b}} = obj;
console.log(y2);	// 3
console.log(y);		// [ 2, 3, 4 ]
console.log(z);		// { a: 5, b: 6 }
console.log(b);		// 6
```

## 4.3 �����������͵Ľ⹹��ֵ

### 4.3.1 �ַ����Ľ⹹��ֵ

�ȿ������������ʽ���⹹��ֵ��Ҳ�����ö������ʽ���⹹��ֵ��

```javascript
// ������ʽ�⹹��ֵ
const [a, b, , , c] = 'hello';
console.log(a, b, c);	// h e o

// ������ʽ�⹹��ֵ
const {0: a, 1: b, 4: o, length} = 'hello';
console.log(a, b, o, length);	// h e o 5
```

### 4.3.2 ��ֵ�Ͳ���ֵ�Ľ⹹��ֵ

ֻ�ܰ��ն������ʽ���⹹��ֵ��

�������Զ����Ⱥ��ұߵ�ֵתΪ����

```javascript
// ������ϰһ�½���ֵ�Ͳ���ֵת��Ϊ����
console.log(new Number(123));
console.log(new Boolean(true));
// ת����Ķ�����û���κε����ԣ�û�� 123 ������ԣ�Ҳû�� true ������ԣ��ͷ�����
// ���е����Ժͷ����������ļ̳� __proto__ �У����� toString �������Ǽ̳����ġ�

// �����ֵֻ����Ĭ��ֵ���̳еķ������ǿ���ȡ��
const {a = 1, toString} = 123;
console.log(a, toString);	// 1 [Function: toString]

// �����ֵֻ����Ĭ��ֵ���̳еķ������ǿ���ȡ��
const {b = 1, toString} = true;
console.log(b, toString);	// 1 [Function: toString]
```

> ֪��������¼��ɣ�һ�㶼�ò�������Ϊû̫�����塣

### 4.3.3 undefined �� null û�н⹹��ֵ

���� undefined �� null �޷�תΪ�������Զ����ǽ��н⹹��ֵ�����ᱨ��

# �塢��������������ǿ

## 5.1 ���Ժͷ����ļ���ʾ��

### 5.1.1 ����������

��ν�Ķ������������Ƕ����һ���µ�д����

֮ǰ������Ҫ�� new ���캯��������һ��������������Ҳ����ֱ���ö�����������д��������һ������

```javascript
// ʵ�������캯�����ɶ���
const person = new Object();
person.age = 18;
person.speak = function() {};
console.log(person);	// { age: 18, speak: [Function (anonymous)] }

// ����������
const person = {
    age: 18,
    speak: function() {}
};
console.log(person);	// { age: 18, speak: [Function (anonymous)] }
```

### 5.1.1 ���Եļ���ʾ��

```javascript
const age = 18;
const person = {
    age: age
};
console.log(person.age);	// 18

// -----------------------

const age = 18;
const person = {
    // js ����� key ��������ַ�����ֻ����������� js ��ʶ�������淶ʱ�����Բ�д����
    'age': age
};
console.log(person.age);	// 18

// -----------------------

// ������ֵ��һ����ʱ�򣬿���ֻдһ��
const age = 18;
const person = {
    age
};
console.log(person.age);	// 18
```

### 5.1.2 �����ļ���ʾ��

```javascript
const person = {
    // speak: function() {}
    speak() {}
};

console.log(person);	// { speak: [Function: speak] }
```

## 5.2 �������﷨

### 5.2.1 �������﷨���÷�

```javascript
const prop = 'age';
const person = {};
person.prop = 18;
console.log(person);	// { prop: 18 }

// -----------------------------------------

const prop = 'age';
const person = {};
person[prop] = 18;
console.log(person);	// { age: 18 }

// -----------------------------------------

// ES6 ��ǿ
const prop = 'age';
const person = {
    [prop]: 18
};
console.log(person);	// { age: 18 }
```

### 5.2.2 �������п��Է�ʲô

```javascript
// [ֵ�����Եõ�ֵ�ı��ʽ]
const prop = 'age';
const func = () => 'age2';
const person = {
    [prop]: 18,
    [func()]: 24,
    ['sex']: 'man',
    ['s' + 'ex2']: 'womam'
};
console.log(person);	// { age: 18, age2: 24, sex: 'man', sex2: 'womam' }
```

### 5.2.3 �������﷨�͵��﷨������

1. ���﷨�Ƿ������﷨��������ʽ
2. �����������֡���ĸ���»����Լ� $ ���ɣ��������ֻ����ܴ�ͷ��ʱ�����ʹ�õ��﷨���Ϸ���ʶ����
3. ���õ��﷨����ʹ�õ��﷨

```javascript
const person = {
    age: 18
};

person.age �ȼ��� person['age']
```

# ��������������Ĭ��ֵ

## 6.1 ��ʶ����������Ĭ��ֵ

���ú�����ʱ�򴫲��ˣ����ô��ݵĲ��������û���Σ�����Ĭ��ֵ��

## 6.2 ��������Ĭ��ֵ�Ļ����÷�

```javascript
// ֮ǰ��Ĭ��ֵʵ�ַ�ʽ
const multiply = (x, y) => {
    if (typeof y === 'undefined') {
        y = 3;
    }
    return x * y;
};
console.log(multiply(2, 2));	// 4
console.log(multiply(2));		// 6
```

```javascript
// ES6 Ĭ��ֵʵ�ַ�ʽ
const multiply = (x, y = 3) => {
    return x * y;
};
console.log(multiply(2, 2));	// 4
console.log(multiply(2));		// 6
```

## 6.3 Ĭ��ֵ����Ч����

����������������ȷ�Ĵ��� undefined ��Ϊ������ֻ������������£�Ĭ��ֵ�Ż���Ч��

ע�⣺null ���� null������ʹ��Ĭ��ֵ��

## 6.4 Ĭ��ֵ���ʽ

���Ĭ��ֵ�Ǳ��ʽ����ôĬ��ֵ���ʽ�Ƕ�����ֵ�ġ�

## 6.5 ����Ĭ��ֵ��С����

����������Ĭ��ֵ��ôӲ����б���ұ߿�ʼ���ã�

```javascript
// ����߿�ʼ����Ĭ��ֵ��ȱ��
const multiply = (x = 1, y) => x * y;
console.log(multiply(2));	// NaN��2 ���� x��y û�и�ֵĬ��Ϊ undefined��
// Ϊ�˱������壬ǰ��Ĳ�������ָ��Ϊ undefined
console.log(multiply(undefined, 2));	// 2
```

## 6.6��������Ĭ��ֵ��Ӧ��

**���պܶ������ʱ��**

```javascript
// ��ͨʱ��
const logUser = (username = 'zjr', age = 18, sex = 'male') => {
    console.log(username, age, sex);
};
// ��Ҫ�ܹ���ס������˳����������϶���ô��Ҫ����ĵ���ʹ�ò�����
logUser('jerry', 18, 'male');

// ------------------------------------------------------------

// ����һ��������Ϊ����
// ����Ҫ��ס������˳��
const logUser = options => {
    console.log(options.username, options.age, options.sex);
};
logUser({
    username: 'jerry',
    age: 18,
    sex: 'male'
});

// ------------------------------------------------------------

// ���Ż������ý⹹��ֵ��
const logUser = ({username, age, sex}) => {
    console.log(username, age, sex);
};

logUser({
    username: 'jerry',
    age: 18,
    sex: 'male'
});

// ------------------------------------------------------------

// ����Ĭ��ֵ
const logUser = ({
    username = 'ljl',
    age = 18,
    sex = 'female'
}) => {
    console.log(username, age, sex);
};

logUser({username: 'jerry'});	// jerry 18 female

logUser({});	// ljl 18 female

logUser();		// ������Ϊ�����൱�ڴ���һ�� undefined�������Ͻ⹹��ֵ

// ------------------------------------------------------------

// ���Ż�������Ĭ��ֵ + �⹹��ֵ + �⹹��ֵĬ��ֵ��
const logUser = ({
    username = 'ljl',
    age = 18,
    sex = 'female'
} = {}) => {
    console.log(username, age, sex);
};
logUser();	// ljl 18 female

/* 
���ͣ�
1������ logUser() ��ʵ��Ϊ undefined������Ĭ��ֵΪ {}
2������Ϊ {username = 'ljl', age = 18, sex = 'female'} = {} �ǽ⹹��ֵ
3������ {} ��Ϊ undefined�����Խ⹹��ֵ����Ĭ��ֵ
4�������������β�Ϊ {username = 'ljl', age = 18, sex = 'female'}
ע�����������ĺô������Ӻ����Ľ�׳�ԣ�
*/
```