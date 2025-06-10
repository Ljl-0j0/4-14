<!--
 * @Description: 
 * @Author: ljl
 * @Date: 2025-05-19 09:28:49
 * @LastEditors: rendc
 * @LastEditTime: 2025-06-10 14:28:56
-->
# ��ES6�﷨��չ��
> �������ݳ���Jerry Zhou.���ܼ��𣩣�����ѧϰ

# һ��ʣ�����

## 1.2 ��ʶʣ�����

`const add = (x, y, z, ...args) => {};`

## 1.3 ʣ������ı���

ʣ�������Զ�Ǹ����飬��ʹû��ֵ��Ҳ�Ǹ������顣

```javascript
const add = (x, y, ...args) => {
    console.log(x, y, args);
};
add();					// undefined undefined []
add(1);					// 1 undefined []
add(1, 2);				// 1 2 []
add(1, 2, 3, 4, 5);		// 1 2 [ 3, 4, 5 ]
```

## 1.4 ע������

### 1.4.1 ��ͷ������ʣ�����

��ͷ�����Ĳ������ּ�ʹֻ��һ��ʣ�������Ҳ����ʡ��Բ���š�

`const add = (...args) => {};`

### 1.4.2 ʹ��ʣ�������� arguments ��ȡʵ�ʲ���

- ʣ�������һ�� �������顱��arguments ��һ�� �������顱
- ʣ����������ֿ����Զ���

### 1.4.3 ʣ�������λ��

ʣ�����ֻ�������һ��������֮����������������������ᱨ��

## 1.5 ʣ�������Ӧ��

��Ϊ�����Ӧ�ã�

```javascript
const add = (...args) => {
    let sum = 0;

    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    } // ��Ȼ�˴���arguments Ҳ����

    return sum;
};

console.log(add());			// 0
console.log(add(1, 1));		// 2
console.log(add(1, 2, 3));	// 6
```

��⹹��ֵ���ʹ�ã�

��ʣ�������һ����Ҫ��Ϊ��������ʹ�ã�

- ������⹹��ֵ���

```javascript
const func = ([num, ...args]) => {console.log(num, args)};
func([1, 2, 3]);
// 1 [ 2, 3 ]
```

- �����⹹��ֵ���

```javascript
const {x, y, ...z} = {a: 3, x: 1, y: 2, b: 4};
console.log(x, y, z);
// 1 2 { a: 3, b: 4 }
// �����ʣ������Ǹ�����׼ȷ��Ӧ�ýУ�ʣ������/Ԫ�أ�
```

```javascript
const func = ({x, y, ...z}) => {
    console.log(x, y, z);	// 1 2 { a: 3, b: 4 }
};
func({a: 3, x: 1, y: 2, b: 4});
```

# ��������չ�������

## 2.1 ��ʶ����չ�������

ʣ������������б� ����> ��������

����չ����������������� ����> �����б�

������

> ���������Ҫ�� [3, 1, 2] �е����ֵ����ô�����ǲ���ֱ��ͨ�� Math.max() ����ģ���Ϊ Math.max() ���ܵĲ��������飬����һ��һ���Ĳ��������磺Math.max(3, 1, 2)�����԰Ѳ�������ת��Ϊ�����б���ǹؼ���

## 2.2 ����չ��������Ļ����÷�

�÷���ʣ���������

`console.log(Math.min(...[3, 1, 2]));`

�൱��

`console.log(Math.min(3, 1, 2));`

## 2.3 ����ʣ�������չ�������

```javascript
const add = (...args) => {
    console.log(args);		// [ 1, 2, 3 ]
    console.log(...args);	// 1 2 3
};
add(1, 2, 3);
```

```javascript
console.log([...[1, 2, 3], 4]);	// [ 1, 2, 3, 4 ]
```

## 2.4 ����չ���������Ӧ��

### 2.4.1 ��������

```javascript
const a = [1, 2, 3];
const b = [...a];
a[1] = 5;
console.log(a);		// [ 1, 5, 3 ]
console.log(b);		// [ 1, 2, 3 ]
```

### 2.4.2 �ϲ�����

```javascript
const a = [1, 2];
const b = [3];
const c = [4, 5];
console.log([0, ...a, 99, ...c, ...b]);
// [0, 1, 2, 99, 4, 5, 3]
```

### 2.4.3 �ַ���תΪ����

�ַ������԰����������ʽչ����

```javascript
console.log(...'alex');				// a l e x
console.log('a', 'l', 'e', 'x');	// a l e x

console.log([...'alex']);			// [ 'a', 'l', 'e', 'x' ]
// ES6 ֮ǰ�ַ���ת������ͨ����'alex'.split('');
```

### 2.4.4 ������תΪ����

```javascript
// arguments
function func() {
    console.log(arguments);			// [Arguments] { '0': 1, '1': 2 }
    console.log([...arguments]);	// [ 1, 2 ]
}
func(1, 2);


console.log([...document.querySelectorAll('p')].push);
```

```html
<body>
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <script>
        // NodeList
        console.log(document.getElementsByTagName('p'));
        console.log(...document.getElementsByTagName('p'));
        console.log([...document.getElementsByTagName('p')]);
    </script>
</body>
```

<img src="mark-img/image-20230126230622456.png" alt="image-20230126230622456" style="width:30%;" />

# ��������չ�������

## 3.1 չ������

������ֱ��չ���������� {} ��չ����

```javascript
const apple = {
    color: '��ɫ',
    shape: '����',
    taste: '��'
};
console.log({...apple});			// { color: '��ɫ', shape: '����', taste: '��' }
console.log({...apple} === apple);	// false
```

## 3.2 �ϲ�����

```javascript
const apple = {
    color: '��ɫ',
    shape: '����',
    taste: '��'
};

const pen = {
    color: '��ɫ',
    shape: 'Բ����',
    use: 'д��'
};

// �¶���ӵ��ȫ�����ԣ���ͬ���ԣ����߸���ǰ��
console.log({...apple, ...pen});	// { color: '��ɫ', shape: 'Բ����', taste: '��', use: 'д��' }
console.log({...pen, ...apple});	// { color: '��ɫ', shape: '����', use: 'д��', taste: '��' }
```

## 3.3 ע������

### 3.3.1 �ն����չ��

���չ��һ���ն�����û���κ�Ч����

```javascript
console.log({...{}});			// {}
console.log({...{}, a: 1});		// { a: 1 }
```

### 3.3.2 �Ƕ����չ��

���չ���Ĳ��Ƕ�������Զ�����תΪ�����ٽ����������г�����û�����Ա�Ϊ�գ���

```javascript
console.log({...1});			// {}
console.log({...undefined});	// {}
console.log({...null});			// {}
console.log({...true});			// {}
```

### 3.3.3 �ַ�����չ��

���չ��������������ַ����������Զ�ת��һ����������Ķ�����˷��صĲ��ǿն���

```javascript
// �ַ����ڶ�����չ��
console.log({...'alex'});		// { '0': 'a', '1': 'l', '2': 'e', '3': 'x' }

// �ַ�����������չ��
console.log([...'alex']);		// [ 'a', 'l', 'e', 'x' ]

// �ַ���ֱ��չ��
console.log(...'alex');			// a l e x
```

### 3.3.4 �����չ��

```javascript
console.log({...[1, 2, 3]});	// { '0': 1, '1': 2, '2': 3 }
```

### 3.3.5 �����ж������Ե�չ��

����չ�������еĶ������ԡ�

```javascript
const apple = {
    feature: {
        taste: '��'
    }
};

const pen = {
    feature: {
        color: '��ɫ',
        shape: 'Բ����'
    },
    use: 'д��'
};

console.log({...apple});			// { feature: { taste: '��' } }

// feature ��ֱ�Ӹ��ǣ���Ϊ feature ����չ��
console.log({...apple, ...pen});	// { feature: { color: '��ɫ', shape: 'Բ����' }, use: 'д��' }
```

## 3.4 ����չ���������Ӧ��

### 3.4.1 ���ƶ���

```javascript
const a = {x: 1, y: 2};
const c = {...a};
console.log(c, c === a);
// { x: 1, y: 2 } false
```

### 3.4.2 �û�������Ĭ�ϲ���

```javascript
const logUser = userParam => {
    const defaultPeram = {
        username: 'ZhangSan',
        age: 0,
        sex: 'male'
    };

    const param = {...defaultPeram, ...userParam};
    console.log(param.username, param.age, param.sex);
};

logUser({username: 'jerry'});	// jerry 0 male
```

���Ż���

```javascript
const logUser = userParam => {
    const defaultPeram = {
        username: 'ZhangSan',
        age: 0,
        sex: 'male'
    };

    const {username, age, sex} = {...defaultPeram, ...userParam};
    console.log(username, age, sex);
};

logUser({username: 'jerry'});	// jerry 0 male
```

# �ġ�Set �� Map

## 4.1 ʲô�� Set��

Set ��һϵ������û���ظ�ֵ�����ݼ��ϡ�

> ������һϵ�������±������������ݼ��ϡ�

```javascript
const s = new Set();
s.add(1
s.add(2);

// Set �в������ظ��ĳ�Ա
s.add(1);
console.log(s);		// Set(2) { 1, 2 }

// Set û���±�ȥ��ʶÿһ��ֵ������ Set ������ģ�Ҳ��������������ͨ���±�ȥ���� Set �ĳ�Ա��
```

## 4.2 Set ʵ���ķ���������

### 4.2.1 add ����

```javascript
const s = new Set();
s.add(0);
// ������д
s.add(1).add(2).add(2).add(3);
console.log(s);		// Set(4) { 0, 1, 2, 3 }
```

### 4.2.2 has ����

```javascript
const s = new Set();
s.add(0);
s.add(1).add(2).add(2).add(3);
console.log(s.has(1));	// true
console.log(s.has(4));	// false
```

### 4.2.3 delete ����

```javascript
const s = new Set();
s.add(0);
s.add(1).add(2).add(2).add(3);
s.delete(2);
// ʹ�� delete ɾ�������ڵĳ�Ա��ʲô�����ᷢ����Ҳ���ᱨ��
s.delete(4);
console.log(s);	// Set(3) { 0, 1, 3 }
```

### 4.2.4 clear ����

```javascript
const s = new Set();
s.add(0);
s.add(1).add(2).add(2).add(3);
s.clear();
console.log(s);	// Set(0) {}
```

### 4.2.5 forEach ����

���ã����ڱ��� Set �ģ����ճ�Ա��ӽ����ϵ�˳���������

forEach �������Խ���������������һ���ǣ��ص��������ڶ����ǣ�ָ���ص������� this ָ��

```javascript
const s = new Set();
s.add(0);
s.add(1).add(2).add(2).add(3);

s.forEach(function (value, key, set) {
    // Set �� value = key��ԭ�򣺺ö����ݽṹ���� forEach ������Ϊ�˷���ͳһ�����Բ�����ͳһ�ģ����ǲ�����������в�ͬ
    // set ���� s ����
    console.log(value, key, set === s);
    console.log(this);
});

/*
0 0 true
Window
1 1 true
Window
2 2 true
Window
3 3 true
Window?
*/
```

```javascript
const s = new Set();
s.add(0);
s.add(1).add(2).add(2).add(3);

s.forEach(function (value, key, set) {
    // Set �� value = key��ԭ�򣺺ö����ݽṹ���� forEach ������Ϊ�˷���ͳһ�����Բ�����ͳһ�ģ����ǲ�����������в�ͬ
    // set ���� s ����
    console.log(value, key, set === s);
    console.log(this);
}, document);

/*
0 0 true
#document
1 1 true
#document
2 2 true
#document
3 3 true
#document
*/
```

### 4.2.6 size ����

```javascript
const s = new Set();
s.add(0);
s.add(1).add(2).add(2).add(3);

console.log(s.size);	// 4
```

## 4.3 Set ���캯���Ĳ���

- ����
- �ַ�����arguments��NodeList��Set ��

�����顿

```javascript
const s = new Set([1, 2, 1]);
console.log(s);		// Set(2) { 1, 2 }
```

���ַ�����

```javascript
console.log(new Set('hiii'));	// Set(2) { 'h', 'i' }
```

��arguments��

```javascript
function func() {
    console.log(new Set(arguments));
}
func(1, 2, 1);	// Set(2) { 1, 2 }
```

��NodeList��

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<p>1</p>
<p>2</p>
<p>3</p>
<script>
    console.log(new Set(document.querySelectorAll('P')));
</script>
</body>
</html>
```

��Set��

```javascript
const s = new Set([1, 2, 1]);
console.log(new Set(s));	// Set(2) { 1, 2 }
console.log(s);				// Set(2) { 1, 2 }
// ��Ҳ�Ǹ���һ�� Set �ķ���
```

## 4.4 Set ע������

��Set ����ж��ظ���

- Set ���ظ�ֵ���жϻ�����ѭ�ϸ���ȣ�===��

- ���Ƕ��� NaN ���ж��� === ��ͬ��Set �� NaN ���� NaN

```javascript
const s = new Set();
s.add({}).add({});
console.log({} === {});	 // false
console.log(s);			 // Set(2) { {}, {} }
```

��ʲôʱ��ʹ�� Set��

- ������ַ�����Ҫȥ��ʱ
- ����Ҫͨ���±���ʣ�ֻ��Ҫ����ʱ
- Ϊ��ʹ�� Set �ṩ�ķ���������ʱ

## 4.5 Set ��Ӧ��

������ȥ�ء�

```javascript
const s = new Set([1, 2, 1]);
console.log(s);			// Set(2) { 1, 2 }
console.log([...s]);	// [ 1, 2 ]
```

���ַ���ȥ�ء�

```javascript
const s = new Set('abbacbd');
console.log(s);					// Set(4) { 'a', 'b', 'c', 'd' }
console.log([...s].join(''));	// abcd
```

����� DOM Ԫ�ء�

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<p>1</p>
<p>2</p>
<p>3</p>
<script>
    // ����ʹ�� Set ����Ϊ���ǲ���Ҫͨ���±�ȥ���ʣ�ֻ��ֱ�ӱ�������
    const s = new Set(document.querySelectorAll('p'));
    s.forEach(function (elem) {
        elem.style.color = 'red';
    });
</script>
</body>
</html>
```

## 4.6 ʲô�� Map��

Map �������Ϊ����ӳ�䡱��

Map �� ���� ���Ǽ�ֵ�Եļ��ϡ�

```javascript
// �� ����> ֵ��key ����> value
// ����
const person = {
    name: 'alex',
    age: 18
};

// Map��
const m = new Map();
m.set('name', 'alex');
m.set('age', 18);
console.log(m);		// Map(2) { 'name' => 'alex', 'age' => 18 }

// Map �� ���� ������
// ����һ�����ַ������� ����������Ȼ����дʱ�ַ����������ſ���ȥ����.
// Map �е� ������ ������һ�����͡�
const m = new Map();
m.set(true, 'true');
m.set({}, 'object');
m.set(new Set([1, 2]), 'set');
m.set(undefined, 'undefined');
console.log(m);
/*
Map(4) {
  true => 'true',
  {} => 'object',
  Set(2) { 1, 2 } => 'set',
  undefined => 'undefined'
}
*/
```

## 4.7 Map ʵ���ķ���������

### 4.7.1 set ����

```javascript
const m = new Map();
m.set('age', 18).set(true, 'true').set('age', 22);
console.log(m);		// Map(2) { 'age' => 22, true => 'true' }
```

### 4.7.2 get ����

```javascript
const m = new Map();
m.set('age', 18).set(true, 'true').set('age', 22);
console.log(m.get('age'));		// 22
console.log(m.get(true));		// true
```

### 4.7.3 has ����

```javascript
const m = new Map();
m.set('age', 18).set(true, 'true').set('age', 22);
console.log(m.has('age'));			// true
console.log(m.has('true'));			// false
```

### 4.7.4 delete ����

```javascript
m.delete('age');
// ʹ�� delete ɾ�������ڵĳ�Ա��ʲô�����ᷢ����Ҳ���ᱨ��
m.delete('name');
```

### 4.7.5 clear ����

```javascript
m.clear();
```

### 4.7.6 forEach ����

```javascript
m.forEach(function (value, key, map) {
    console.log(this);
}, document);
```

### 4.7.7 size ����

```javascript
// ����û�����Ƶ�����
console.log(m.size);
```

## 4.8 Map ���캯���Ĳ���

- ��ά����
- Set��Map ��

����ά���顿

```javascript
console.log(new Map([
    ['name', 'alex'],
    ['age', 18]
]));
// Map(2) { 'name' => 'alex', 'age' => 18 }
```

��Set��Map��

```javascript
// Set
// Set ��Ҳ�������ֳ�����ֵ
const s = new Set([
    ['name', 'alex'],
    ['age', 18]
]);
console.log(new Map(s));
console.log(s);
// Map(2) { 'name' => 'alex', 'age' => 18 }
// Set(2) { [ 'name', 'alex' ], [ 'age', 18 ] }

// Map
const m = new Map([
    ['name', 'alex'],
    ['age', 18]
]);
console.log(m);
const m2 = new Map(m);
console.log(m2, m2 === m);
// Map(2) { 'name' => 'alex', 'age' => 18 }
// Map(2) { 'name' => 'alex', 'age' => 18 } false
// Map ���Ƶķ���
```

## 4.9 Map ע������

��Map ����жϼ����Ƿ���ͬ��

> �� Set �������ظ���ֱֵ��ȥ�����ߣ��� Map �������ظ��ļ�ֵ���Ǻ���ĸ���ǰ��ġ�

- ������ѭ�ϸ���ȣ�===��
- Map �� NaN Ҳ�ǵ��� NaN

��ʲôʱ��ʹ�� Map��

- ���ֻ����Ҫ��ֵ�Խṹ
- ��Ҫ�ַ��������ֵ����
- ����һ������ģ��ʵ����

## 4.10 Map ��Ӧ��

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<p>1</p>
<p>2</p>
<p>3</p>
<script>
    const [p1, p2, p3] = document.querySelectorAll('p');
    const m = new Map([
        [p1, {
            color: 'red',
            backgroundColor: 'yellow',
            fontSize: '40px'
        }],
        [p2, {
            color: 'green',
            backgroundColor: 'pink',
            fontSize: '40px'
        }],
        [p3, {
            color: 'blue',
            backgroundColor: 'orange',
            fontSize: '40px'
        }]
    ]);
    m.forEach((propObj, elem) => {
        for (const p in propObj) {
            elem.style[p] = propObj[p];
        }
    });	// ���ڲ���Ҫ�ı� this ָ�����Կ���ʹ�ü�ͷ����
</script>
</body>
</html>
```

<img src="mark-img/image-20220327154158420.png" alt="image-20220327154158420" style="width:50%;" />

# �塢Iterator �������� for...of ѭ��

## 5.1 ʲô�� Iterator��

**��1��Iterator ������**

Iterator������������������

> ��ʵ��һ���ײ�ĵ������ƣ���Ҫ�˽⼴�ɡ�

**��2��ʹ�� Iterator**

```javascript
const it = [1, 2][Symbol.iterator](); // ������������ Symbol.iterator ����
console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }
console.log(it.next()); // { value: undefined, done: true }
// it���ɱ������󣨿ɵ�������
// Symbol.iterator���ɱ�����������ɷ���
// value��ֵ��done���Ƿ�������
```

**��3��ʲô�� Iterator��**

Symbol.iterator���ɱ�����������ɷ���������> it���ɱ������󣩡���> it.next() ����> it.next() ����> ... ��ֱ�� done Ϊ true��

## 5.2 Iterator ���

**��1��Ϊʲô��Ҫ Iterator ��������**

�������飺for ѭ���� forEach ����

��������for in ѭ��

Iterator ��������һ��ͳһ�ı�����ʽ��

**��2����θ������ʹ�� Iterator**

֮ǰ��Symbol.iterator ����> it ����> next()

�Ż���������Ĳ�����з�װ���Ѿ���װ���ˣ�for...of ѭ����

## 5.3 for...of ���÷�

ԭ��

```javascript
const arr = [1, 2, 3];
const it = arr[Symbol.iterator]();
let next = it.next();
while (!next.done) {
    ...
    next = it.next();
}
```

for...of��

```javascript
const arr = [1, 2, 3];
for (const item of arr) {
    ...
}
```

> for...of ѭ��ֻ���������Щ done Ϊ false ʱ����Ӧ�� value ֵ��

���� break��continue һ��ʹ�á�

```javascript
const arr = [1, 2, 3];
for (const item of arr) {
    if (item === 2) {
        // break;
    	continue;
    }
    console.log(item);
}
```

���� for...of �л�ȡ�����������

```javascript
const arr = [1, 2, 3];
console.log(arr.keys());
for (const key of arr.keys()) {
    console.log(key);
}
// keys() �õ����������Ŀɱ������󣬿��Ա���������ֵ
/*
Object [Array Iterator] {}
0
1
2
*/


for (const value of arr.values()) {
    console.log(value);
}
// values() �õ�����ֵ�Ŀɱ������󣬿��Ա�����ֵ
/*
1
2
3
*/


for (const entries of arr.entries()) {
    console.log(entrie);
}
/*
[ 0, 1 ]
[ 1, 2 ]
[ 2, 3 ]
*/

// ��Ͻ⹹��ֵ
for (const [index, value] of arr.entries()) {
    console.log(index, value);
}
/*
0 1
1 2
2 3
*/
```

## 5.4 ԭ���ɱ������ԭ���ɱ���

### 5.4.1 ʲô�ǿɱ���

ֻҪ�� Symbol.iterator ������������������������ɿɱ������󣬾��ǿɱ����ġ�

ֻҪ�ɱ������Ϳ���ʹ�� for...of ѭ����ͳһ������

### 5.4.2 ԭ���ɱ���������Щ��

- ����
- �ַ���
- Set
- Map
- arguments
- NodeList

### 5.4.3 ��ԭ���ɱ���������Щ��

- ����

���ֶ����һ�� Symbol.iterator �����������ǽ������ Symbol.iterator ������������

### 5.4.4 ʹ���� Iterator ����������

- �����չ�������
- ����Ľ⹹��ֵ
- Set �� Map �Ĺ��캯��

# ����ES6 ��������

## 6.1 �ַ�����������

### 6.1.1 includes()

�ж��ַ������Ƿ���ĳЩ�ַ���

```javascript
// �����÷�
console.log('abc'.includes('a'));		// true
console.log('abc'.includes('ab'));		// true
console.log('abc'.includes('bc'));		// true
console.log('abc'.includes('ac'));		// false


// ���ܵڶ�������
// ��ʾ��ʼ������λ�ã�Ĭ���� 0
console.log('abc'.includes('a'));		// true
console.log('abc'.includes('a', 0));	// true
console.log('abc'.includes('a', 1));	// false


// Ӧ�ã��ı�·����
// https://www.imooc.com/course/list
// https://www.imooc.com/course/list?c=fe&sort=pop&name=value
let url = 'https://www.imooc.com/course/list';
const addURLParam = (url, name, value) => {
    url += url.includes('?') ? '' : '?';

    url += `${name}=${value}`;

    return url;
};
url = addURLParam(url, 'c', 'fe');
console.log(url);	// https://www.imooc.com/course/list?c=fe
url = addURLParam(url, 'sort', 'pop');
console.log(url);	// https://www.imooc.com/course/list?c=fesort=pop
```

### 6.1.2 padStart() �� padEnd()

�������賤�Ȳ�ȫ�ַ�����

```javascript
// �����÷�
console.log('x'.padStart(5, 'ab'));		// ababx
console.log('x'.padEnd(5, 'ab'));		// xabab
console.log('x'.padEnd(4, 'ab'));		// xaba

// ע������
// ԭ�ַ����ĳ��ȣ����ڻ������󳤶ȣ���������ԭ�ַ������ַ�����ȫ����Ч������ԭ�ַ���
console.log('xxx'.padStart(2, 'ab'));	// xxx
console.log('xxx'.padEnd(2, 'ab'));		// xxx

// ���ʡ�Եڶ���������Ĭ��ʹ�ÿո�ȫ����
console.log('x'.padStart(4));			//    x
console.log('x'.padEnd(4));				// x

// Ӧ�ã���ʾ���ڸ�ʽ��
// 2020-10-10
// 2020-01-01
console.log('10'.padStart(2, 0));		// 10
console.log('1'.padStart(2, 0));		// 01
```

### 6.1.3 trimStart() �� trimEnd()

����ַ������׻�β�ո��м�Ŀո񲻻������

```javascript
// �����÷�
const s = '  a b c  ';
console.log(s);						//   a b c
console.log(s.trimStart());			// a b c  
console.log(s.trimLeft());			// a b c 
console.log(s.trimEnd());			//   a b c
console.log(s.trimRight());			//   a b c
// ��ͷͬʱȥ���ո�
console.log(s.trim());				// a b c

// Ӧ�ã����ύ�����β�Ƿ��пո�
const usernameInput = document.getElementById('username');
const btn = document.getElementById('btn');

btn.addEventListener(
    'click',
    () => {
        console.log(usernameInput.value);

        // ��֤��β�Ƿ��пո�
        console.log(usernameInput.value.trim());
        if (usernameInput.value.trim() !== '') {
            // �����ύ
            console.log('�����ύ');
        } else {
            // �����ύ
            console.log('�����ύ');
        }
    },
    false
);
```

## 6.2 ������������

### 6.2.1 includes()

```javascript
// �����÷�
// �ж��������Ƿ���ĳ����Ա
console.log([1, 2, 3].includes('2'));	 // false
console.log([1, 2, 3].includes(2));		 // true

// �ڶ���������ʾ��������ʼλ�ã�Ĭ��ֵ�� 0
console.log([1, 2, 3].includes(2, 2));	 // false

// ������ѭ�ϸ���ȣ�===�������Ƕ��� NaN ���ж��� === ��ͬ��includes ��Ϊ NaN === NaN
console.log(NaN === NaN);					// false
console.log([1, 2, NaN].includes(NaN));		// true

// Ӧ��
// ȥ��
// [1, 2, 1];
const arr = [];
for (const item of [1, 2, 1]) {
    if (!arr.includes(item)) {
        arr.push(item);
    }
}
console.log(arr);	// [ 1, 2 ]
```

### 6.2.2 Array.from()

��������������ת�������顣

```javascript
// �����÷�
console.log(Array.from('str'));		// [ 's', 't', 'r' ]

// ��Щ����ͨ�� Array.from() ת�������飿
// 1�����пɱ����ģ����顢�ַ�����Set��Map��NodeList��arguments
console.log(Array.from(new Set([1, 2, 1])));	// [ 1, 2 ]
console.log([...new Set([1, 2, 1])]);			// [ 1, 2 ]
// 2��ӵ�� length ���Ե��������
const obj = {
    '0': 'a',
    '1': 'b',
    name: 'Alex',
    length: 3
};
// ֻ������ּ���תΪ����Ԫ��
console.log(Array.from(obj));	// [ 'a', 'b', undefined ]
console.log([...obj]);			// ����

// �ڶ�������
// ��������������� map ������������ÿ��Ԫ�ؽ��д�����������ֵ���뷵�ص�����
console.log(
    [1, 2].map(value => {
    	return value * 2;
    })
);	// [ 2, 4 ]

console.log(Array.from('12', value => value * 2));			// [ 2, 4 ]
console.log(Array.from('12').map(value => value * 2));		// [ 2, 4 ]

// �������������޸� this ָ��
Array.from(
    '12',
    function () {
        console.log(this);
    },
    document
);
```

### 6.2.3 find() �� findIndex()

find()���ҵ�����������һ����������
findIndex()���ҵ�����������һ������������������

```javascript
// �����÷�
console.log([1, 5, 10, 15].find((value, index, arr) => {
        return value > 9;
    })
);
// 10
console.log([1, 5, 10, 15].findIndex((value, index, arr) => {
        return value > 9;
    })
);
// 2

// �ڶ�������ָ�� this
[1, 5, 10, 15].find(function (value, index, arr) {
    console.log(this);
    return value > 9;
}, document);

// Ӧ��
const students = [
    {
        name: '����',
        sex: '��',
        age: 16
    },
    {
        name: '����',
        sex: 'Ů',
        age: 22
    },
    {
        name: '��������',
        sex: '��',
        age: 32
    }
];
console.log(students.find(value => value.sex === 'Ů'));
// { name: '����', sex: 'Ů', age: 22 }
console.log(students.findIndex(value => value.sex === 'Ů'));
// 1
```


## 6.3 ������������

### 6.3.1 Object.assign()

�����ϲ�����

```javascript
// �����÷�
// Object.assign(Ŀ�����, Դ����1, Դ����2, ...);
const apple = {
    color: '��ɫ',
    shape: 'Բ��',
    taste: '��'
};
const pen = {
    color: '��ɫ',
    shape: 'Բ����',
    use: 'д��'
};
console.log(Object.assign(apple, pen));	
// ����ĸ���ǰ��ģ����շ��صĲ����µģ������޸���ǰ��ģ�
// { color: '��ɫ', shape: 'Բ����', taste: '��', use: 'д��' }
// Object.assign ֱ�Ӻϲ����˵�һ�������У����صľ��Ǻϲ���Ķ���
console.log(apple);	// { color: '��ɫ', shape: 'Բ����', taste: '��', use: 'д��' }
console.log(Object.assign(apple, pen) === apple);	// true


// ���Ժϲ��������
// ��һ������ʹ��һ���ն�����ʵ�ֺϲ�����һ���¶����Ŀ��
console.log(Object.assign({}, apple, pen));	// { color: '��ɫ', shape: 'Բ����', taste: '��', use: 'д��' }
console.log(apple);	// { color: '��ɫ', shape: 'Բ��', taste: '��' }
console.log({...apple, ...pen}); // { color: '��ɫ', shape: 'Բ����', taste: '��', use: 'д��' }


// ע������
// (1) ��������������ΪԴ����
// ������չ�����ƣ���ת���ɶ����ٺϲ�
console.log(Object.assign({}, undefined));	// {}
console.log(Object.assign({}, null));		// {}
console.log(Object.assign({}, 1));			// {}
console.log(Object.assign({}, true));		// {}
console.log(Object.assign({}, 'str'));		// { '0': 's', '1': 't', '2': 'r' }
// (2) ͬ�����Ե��滻
// �����ֱ�Ӹ���ǰ���
const apple = {
    color: ['��ɫ', '��ɫ'],
    shape: 'Բ��',
    taste: '��'
};
const pen = {
    color: ['��ɫ', '��ɫ'],
    shape: 'Բ����',
    use: 'д��'
};
console.log(Object.assign({}, apple, pen));	// { color: [ '��ɫ', '��ɫ' ], shape: 'Բ����', taste: '��', use: 'д��' }


// Ӧ��
// �ϲ�Ĭ�ϲ������û�����
const logUser = userOptions => {
    const DEFAULTS = {
        username: 'ZhangSan',
        age: 0,
        sex: 'male'
    };

    const options = Object.assign({}, DEFAULTS, userOptions);
    console.log(options);
};
logUser();						// { username: 'ZhangSan', age: 0, sex: 'male' }
logUser({});					// { username: 'ZhangSan', age: 0, sex: 'male' }
logUser({username: 'Alex'});	// { username: 'Alex', age: 0, sex: 'male' }
```

### 6.3.2 Object.keys()��Object.values() �� Object.entries()

```javascript
// �����÷�
const person = {
    name: 'Alex',
    age: 18
};
// ���ؼ�����
console.log(Object.keys(person));		// [ 'name', 'age' ]
// ����ֵ����
console.log(Object.values(person));		// [ 'Alex', 18 ]
// ���ؼ�ֵ��ά����
console.log(Object.entries(person));	// [ [ 'name', 'Alex' ], [ 'age', 18 ] ]


// ���������Ʒ���������
console.log([1, 2].keys());			// Object [Array Iterator] {}
console.log([1, 2].values());		// Object [Array Iterator] {}
console.log([1, 2].entries());		// Object [Array Iterator] {}
// ����� keys()��values()��entries() �ȷ�����ʵ�����������صĶ��� Iterator
// ����� Object.keys()��Object.values()��Object.entries() �ȷ����ǹ��캯�����������ص�������


// Ӧ�ã�ʹ�� for...of ѭ����������
const person = {
    name: 'Alex',
    age: 18
};
for (const key of Object.keys(person)) {
    console.log(key);		
}
// name
// age
for (const value of Object.values(person)) {
    console.log(value);		
}
// Alex
// 18
for (const entries of Object.entries(person)) {
    console.log(entries);	
}
// [ 'name', 'Alex' ]
// [ 'age', 18 ]
for (const [key, value] of Object.entries(person)) {
    console.log(key, value);
}
// name Alex
// age 18

// Object.keys()/values()/entires() �����ܱ�֤˳��һ�����㿴�������ӣ���һ��� for in ��һ����
// ����Ա���˳����Ҫ����ô������ for in �Լ����ַ�������Ҫ����������
```