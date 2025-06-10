<!--
 * @Description: 
 * @Author: ljl
 * @Date: 2025-05-18 16:15:34
 * @LastEditors: rendc
 * @LastEditTime: 2025-05-18 16:15:40
-->
# ��JS���̿��ơ�
> �������ݳ���Jerry Zhou.���ܼ��𣩣�����ѧϰ

# һ��if �������

```javascript
if (��������) {  
    
}
```

```javascript
if (��������) { 
    
} else {
    
}
```

```javascript
if (��������) {
    
} else if (��������) {
    
} else {
    
}
```

- ����������Ƕ�ף���ò�ҪǶ�׳������㣩
- if-elseif-else ���ע�����������䣨��һ�������ĳ����ǽ�������һ��������������ǰ���£�
- ����ֻ�� if �� else if

# ����switch ѡ�����

```javascript
switch (����/���ʽ) {
    case ����ֵ/����/���ʽ:
        ���;
        break;
    case ����ֵ/����/���ʽ:
        ���;
        break;
    default:
        ���;
}
```

- �������߼����Բ�ͬ���� JS �� case �󲻽���ֻ�ܸ�����ֵ�������Ը������ͱ��ʽ
- ע�� switch ���� �����ء� ���ԣ����� break ������ switch������ֱ�ӽ�����һ�� case�����������ú� break�����粻�� break ����ʵ�ֶ��� case ����ͬһ������壩
- default ��䲻�Ǳ����

# ������Ԫ�����

`�������ʽ ? ���ʽ1 : ���ʽ2;`

���������ʽΪ��ʱִ�� ���ʽ1 �����ؽ��������ִ�� ���ʽ2 �����ؽ����

����Ԫ���������;��

����ĳ�������Ƿ��������������ֵͬ��ѡ������ֵ��

```javascript
var age = 24;
var type = age >= 18 ? '������' : 'δ������';
alert(type);
```

# �ġ�for ѭ�����

```javascript
for (���α��ʽ; �ж�����; ���α��ʽ) {
    
}
```

�� JS �У�֧���� �����α��ʽ�� ��������������ֵ��

��ִ�й��̡�

- ��ִ�� �����α��ʽ����ֻΨһִ��һ�Σ�
- �ж�������������Ϊ false���˳�ѭ����
- ִ������
- ִ�� �����α��ʽ��
- �ж�������������Ϊ false���˳�ѭ����
- ִ������
- ִ�� �����α��ʽ��
- �ж�������������Ϊ false���˳�ѭ����
- ����

��for ... in ѭ����

`for` ѭ����һ�������� `for ... in` ѭ���������԰�һ�������������������ѭ��������

���У�`key` ���ַ������ͣ�ֵΪ�������������

```javascript
var o = {
    name: 'Jerry',
    age: 20,
    city: 'Beijing'
};

for (var key in o) {
    console.log(key + ': ' + o[key]);
}
/*
"name: Jerry"
"age: 20"
"city: Beijing"
*/
```

Ҫ���˵�����̳е����ԣ��� `hasOwnProperty()` ��ʵ�֣�

```javascript
var o = {
    name: 'Jerry',
    age: 20,
    city: 'Beijing'
};

for (var key in o) {
    if (o.hasOwnProperty(key)) {
        console.log(key + ': ' + o[key]);
    }
}
/*
"name: Jerry"
"age: 20"
"city: Beijing"
*/
```

��������Ҳ�Ƕ����һ�֣���ˣ�`for ... in` ѭ������ֱ��ѭ���������������

���У�`i` ���ַ������ͣ�ֵΪ���������ֵ���ַ������ͣ���

```javascript
var a = ['A', 'B', 'C'];

for (var i in a) {
    console.log(i + ': ' + a[i]);
}
/*
0: A
1: B
2: C
*/
```

�ٴ����ѣ�`for ... in` �������ѭ���õ��������� `String` ������ `Number`��

**��for ... of ѭ����**

`for in` ���ʺϱ������󣬵�ȻҲ���Ա������飬���ǻ����һЩ���⣬���磺����Ϊ�ַ��������֣�����ֱ�ӽ��м������㣡ĳЩ����£�����˳���п��ܲ��ǰ���ʵ��������ڲ�˳��

ʹ�� `for in` ������������еĿ�ö�����ԣ�����ԭ�ͣ�����������ԭ���ϵķ��������ԵĻ���������ѭ���ڲ��ж�һ�£�ʹ�� `hasOwnProperty()` ���������ж�ĳ�����ǲ��Ǹö����ʵ�����ԣ�

```js
var arr = [1, 2, 3];
Array.prototype.n = 123;
    
for (var i in arr) {
  var res = arr[i];
  console.log(res);
}
// 1 2 3 123

for(var i in arr) {
    if(arr.hasOwnProperty(i)) {
        var res = arr[i];
  		console.log(res);
    }
}
// 1 2 3
```

ES6 �У������� `for ... of` ѭ�������ñ��� ����/�ַ���/map/set ��ӵ�е���������iterator���ļ��ϣ����ǲ��ܱ�����ͨ��������������������ԣ�������� `for in` ѭ������Ҳ�����ı�ְ�����������ڽ��� `Object.keys()` ��������ȡ�����ʵ��������ɵ����飬������ԭ�ͷ��������ԣ�����

`for of` ������������Ԫ�ص�ֵ������ `for of` ������ֻ�������ڵ�Ԫ�أ�������ԭ�����Ժ�������

```js
var arr = [1, 2, 3];
Array.prototype.a = 123;

for (var value of arr) {
  console.log(value);
}
// 1 2 3
```

```js
var str = '13579';

for (var c of str) {
    console.log(c);
}
// 1 3 5 7 9
```

�Ƽ���������ͨ�����ã�`for in`���������鼰�ַ������ã�`for of`��

# �塢while ѭ�����

```javascript
while (�ж�����) {
    
}
```

```javascript
do {
    
} while (�ж�����);
```

�� while �У����ж���������������ʱ��ִ������塣

�� do-while �У�do �ڵ�������ִ��һ�Σ����ж�������

# ����break �� continue

`break;`��������ֹ�����ѭ����

`continue;`���������������ѭ������ǰ���뱾��ε���һ��ѭ����

# �ߡ�label ���ʽ

`label` ��һ����ǩ��������� `break` �� `continue` ʹ������ת�������ǩ��ִ�У�ִ�� `break` �� `continue`�����Ӷ��ı�����ִ�����̡�

```javascript
// ע�⣺label ����һ���ض��Ĺؼ��֣��������ȡ��
label: for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (i + j === 6) {
            console.log("j=" + j);
            break label;
        }
    }
    console.log("i=" + i);
}
/*
j=6
*/
```

```javascript
label: for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (i + j === 6) {
            console.log("j=" + j);
            continue label;
        }
    }
    console.log("i=" + i);
}
/*
j=6
j=5
j=4
j=3
j=2
j=1
j=0
i=7
i=8
i=9
*/
```

```javascript
// label + break ��Ͽ�������ѭ����� if �����
label: {
    if (1 > 0) {
        console.log("1");
        break label;
    }
    console.log("2");
}
/*
1
*/
```

# �ˡ���ʶ�㷨

�㷨�����������׼ȷ��������������

- ����
- ���
- ������
- ȷ����
- ������

> �õ��㷨��Ҫ���㣺�ɶ��ԡ���׳�ԣ�