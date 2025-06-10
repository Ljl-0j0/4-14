<!--
 * @Description: 
 * @Author: ljl
 * @Date: 2025-06-07 15:06:05
 * @LastEditors: rendc
 * @LastEditTime: 2025-06-10 14:29:21
-->
# ��ES6֮Class�ࡿ

> �������ݳ���Jerry Zhou.���ܼ��𣩣�����ѧϰ

# һ����ʶClass

�ࣺ���ࡢ����

ʵ���������й��ˡ�����

> ����Կ����Ƕ����ģ�壬��һ������Դ�������಻ͬ�Ķ���

# ����Class�Ļ����÷�

`class Person{}`

ע�⣺���� Person ��û�� `()`��ͬʱ `{}` ��Ҳ��Ӧ�ü� `;`��

ÿһ�����ж�����һ�����췽����������췽�������ֶ�д������Ҳ���Բ�д������ֶ���д��ô�����Ҳ��Ĭ���Զ���ӡ�

```javascript
class Person {
    // ʵ����ʱִ�й��췽�������Ա����й��췽���������Բ�д����
    constructor() {
        console.log("���췽���Զ�ִ��");
    }
}

// ʵ����һ�� Person ���󣨱������ new �﷨��
const p = new Person();		// ���췽���Զ�ִ��
```

ͨ������£����ǻ��ڹ��캯���н��ж������Գ�ʼ����

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const zjr = new Person('jerry', 18);
console.log(zjr.name);		// jerry
console.log(zjr.age);		// 18
```

�ڹ��캯���У�����ȷʵ������ӷ��������ǲ�������ô������Ϊ�����Ĵ���ʽ�ᵼ��ÿһ��ʵ���Ķ����ж�����������һ�ݸ÷���������ڴ���˷ѡ�

����Ӧ�ý�����д�� class ���У��������еĶ��󶼹���ͬһ��������

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.speak = () => {
            console.log(this.name + " say Hi!");
        }
    }
}

const zjr = new Person('jerry', 18);
zjr.speak();	// jerry say Hi!

const lxy = new Person('Dragon', 18);
lxy.speak();	// Dragon say Hi!

console.log(zjr.speak === lxy.speak);	// false
```

```javascript
// һ�����ǰ����Զ����ڹ��췽���У��ѷ�������������
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // �������������е�д��
    speak() {
        console.log(this.name + " say Hi!");
    }
}

const zjr = new Person('jerry', 18);
zjr.speak();	// jerry say Hi!

const lxy = new Person('Dragon', 18);
lxy.speak();	// Dragon say Hi!

console.log(zjr.speak === lxy.speak);	// true
```

# ����Class�빹�캯��

�������� Class ����Ϊ֮ǰѧϰ���Ĺ��캯����

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.speak = function() {
    console.log(this.name + " sya Hi!");
}

const zjr = new Person('jarry', 18);
zjr.speak();	// jerry say Hi!
```

> Class �� ���캯�� �Ĺ�ϵ��
>
> �� ES6 ֮ǰ��Ҫ�� JavaScript ��ʵ����������̣���Ҫ�����ڹ��캯����
>
> �� ES6 ֮��ʵ����������̱����ʹ�� Class��
>
> �Ƽ����Ժ�����������������ʹ�� Class��
>
> > Class �ĵײ�ʵ�ֻ��ƻ��� ���캯�� ���ٴη�װ��
> >
> > ���磺`console.log(typeof Person);` ���Ϊ��function������ Class �ĵײ�ʵ���ϻ��ǹ��캯����
> >
> > ���磺`console.log(Person.prototype.speak);` ������Եõ� speak ���������� Class �ײ�ʵ�����ǹ��캯������������ԭ�͡�
> >
> > ���������ǿ��Ը� Person ��ԭ������ӷ��������ɿ��Դﵽ��Ӧ��Ч�������Ǽ����Ƽ���������

# �ġ�Class�����ֶ�����ʽ

## 4.1 ������ʽ

```javascript
class Person {
    constructor() {
        ...
    }
    speak() {
        ...
    }
}
```

## 4.2 ���ʽ��ʽ

```javascript
// ���� class ����һ������
const Person = class {
    constructor() {
        ...
    }
    speak() {
        ...
    }
}
```

����������������ʵ������ִ�к�������������ģ������ִ�к����ķ�ʽҲ����ʵ������ִ���ࡣ

```javascript
new (class {
    constructor() {
        console.log("constructor");		// constructor
    }
})();
```

# �塢ʵ�����ԡ���̬�����;�̬����

## 5.1 ʵ������

����֮ǰ������������� this �ķ�ʽд���˹��췽�������ķ���д���� class �

�������ǻ����԰�������Ժͷ���д�� class �Ȼ���ڹ��췽�������ֵ���޸ģ��������ṩһ�� get set ��������ӿ��Ʊ�����

```javascript
class Person {
    _age = 0;        // ������֮ǰ���ܼ� var �� let
    _sex = 'male';   // �����Ա������ֵ�൱�ھ������Ե�Ĭ��ֵ
    
    /*
    // get��set �������������ĸ�ʽ��д
    // ������ʵ�����Ͼ��Ƕ���һ�������ԣ�ֻ�����������ָ��һ����������
    getSex = function() {
        return this._age;
    };
    */

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get sex() {
        return this._sex;
    }

    set sex(value) {
        this._sex = value;
    }

    constructor(age, sex) {
        this._age = age;
        this._sex = sex;
    }

    // ��ķ��������� function �ؼ���
    speak() {
        console.log(this._age + " " + this._sex);
    }
}
```

## 5.2 ��̬����

���������ͨ����������Ҫ��������������ʵ��������Ȼ�����ö����� ����㡱 ���á�

�������Ҫ��ֱ�������������ã���ô��Ҫ�����д�����̬������

```javascript
class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    
    // ������ľ�̬����֮�⣬�ǿ��Զ������ͬ����ͨ������
    speak() {
        console.log("˵��");
    }
    
    static speak() {
        console.log("�������˵��")
    }
}

// һ������ķ�������̬��������һ����ʵ������ķ�������ͨ�����������Բ����ͻ
Person.speak();		// �������˵��
const p = new Person('Alex', 18);
p.speak();			// ˵��
```

��̬������ this ָ�����⣺��̬������ this ָ������౾��

ע�⣺��ͨ���� this ָ�����Ķ��󣬶���̬������ this ָ���౾��

```javascript
class Person {
    // ��̬����
    static _name = "user";
    static _age = 18;

    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    static test() {
        console.log("��̬����");
    }

    // ��̬����
    static readme() {
        // ��̬�����е� this ָ�� Person �౾��
        // ���Ҿ�̬������ this ֻ�����õ���ľ�̬���Լ���̬����
        console.log(this._name + " " + this._age);
        this.test();
    }
}

Person.readme();
console.log(Person._name);
/*
user 18
��̬����
user
*/

/*
�ٴ�ע�⣺��̬������ֻ��ʹ����ľ�̬�����뾲̬����
*/
```

## 5.3 ��̬����

��̬����Ҳ����������ԣ�����ʹ�� static �ؼ��֡�

ע�⣺��̬���� static �Ķ��巽��Ŀǰֻ��һ���᰸��Ŀǰ���Ƽ�����д��ĳЩ�������֧�֡�

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }
    
    // Ŀǰ���Ƽ� static ����д������Ϊ��ֻ��һ���᰸
    // static version = "1.0";
    
    // �Ƽ����þ�̬���������ʵ�־�̬����
    static getVersion() {
        return "1.0";
    }
}
```

# ����˽�����Ժͷ���

JavaScript ����û��˽�����Ժͷ�����������������������ʽ��ʵ��˽�л���

```javascript
// ��ʽһ�������Կ�ͷ���� _ ��ʾ˽��
class Person {
    constructor(name) {
        this._name = name;
    }
    
    _speak() {
        console.log("speak");
    }
    
    getName() {
        return this._name;
    }
}

const p = new Person('Alex');
console.log(p.name);	// ����
// console.log(p._name);	// Alex���������������������ˣ�Υ����˽�л��ĳ���

/*
ע�⣺���»��ߵķ�ʽʵ����ֻ����ҵ��Լ���׳ɵ�һ�ַ�����
�������ɿ���ͨ�� p._name�������ʣ��������������������ˣ��������ַ�����ʹ�ô�������Ա�Ծ���
*/
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <title>Class˽������</title>
</head>
<body>
<script>
    // ��ʽ������˽�����Ժͷ����Ƴ��ࣨʹ��ģ�飩
    // �������ǻ�û��ѧϰ��ģ�飬��������Ŀǰ������ִ�к������հ�ԭ����ģ��
    (function () {
        let name = "";
        let speak = function () {
            console.log("speak");
        }

        class Person {
            constructor(username) {
                name = username;
            }

            getName() {
                return name;
            }

            runSpeak() {
                speak();
            }
        }

        // ������ӵ�ȫ���������б�¶
        window.Person = Person;
    })();

    const p = new Person('Alex');
    console.log(p.name);	// ����
    console.log(p.getName());	// Alex
    p.runSpeak();	// speak
</script>
</body>
</html>
```

# �ߡ�extends

## 7.1 ����̳и���

```javascript
class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
        this.say = function() {
            console.log("say");
        };
    }
    speak() {
        console.log("speak");
    };
    static speak() {
        console.log("static speak");
    };
}
Person.version = "1.0";

// ����̳�
class Programmer extends Person {
    constructor(name, sex) {
        // ���ø���Ĺ��췽��
        super(name, sex);
    }
}

// ����
const zjr = new Programmer('jerry', '��');
console.log(zjr.name);				// jerry
console.log(zjr.sex);				// ��
zjr.say();						    // say
zjr.speak();					    // speak
Programmer.speak();				    // static speak
console.log(Programmer.version);	// 1.0 
// �ɴ˿ɼ������༯���˸����������Լ�������
```

## 7.2 ��д�̳е����Ի򷽷�

```javascript
class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
        this.say = function () {
            console.log("say");
        };
    }

    speak() {
        console.log("speak");
    };

    static speak() {
        console.log("static speak");
    };
}

Person.version = "1.0";

// ����̳�
class Programmer extends Person {
    constructor(name, sex, age) {
        // ���ø���Ĺ��췽����super ���������๹�췽����һ��д
        super(name, sex);
        // ��д��������
        this.name = 'zjr';
        // ������������
        this.age = age;
    }

    // ��д��������
    speak() {
        console.log("���� speak");
    }

    // ������������
    hi() {
        console.log("Hi!");
    }
}

const zjr = new Programmer('jerry', '��', 18);
console.log(zjr.name);		// zjr
console.log(zjr.sex);		// ��
console.log(zjr.age);		// 18
zjr.speak();			    // ���� speak
zjr.say();				    // say
```

# �ˡ�super

## 8.1 ��Ϊ��������

```javascript
// super ��Ϊ����ʹ�ã������˸���Ĺ��췽����ֻ����������Ĺ��췽���У����������ط��ͻᱨ��
class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

class Programmer extends Person {
    constructor(name, sex) {
        super(name, sex);
        // super ��Ȼ�����˸���Ĺ��췽���������ڲ��� this ָ�������ʵ��
        // ��Ȼ super �е� this �������ģ�������ʾ��д����������ᱨ��
    }
}

const zjr = new Programmer('jerry', '��');
```

## 8.2 ��Ϊ����ʹ��

```javascript
// super ��Ϊ����ʹ�ã������˸����ԭ�Ͷ��� Person.prototype
// �������ǿ���ͨ�� super ���ʸ���ķ�����
class Person {
    name = "Person";

    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        console.log("speak");
    }

    static speak() {
        console.log("static speak");
        console.log(this.name);
    }
}

class Programmer extends Person {
    name = "Programmer";

    constructor(name, sex) {
        super(name, sex);
        // �ڹ��췽����ʹ��
        super.speak();
    }

    speak() {
        // ��һ�㷽����ʹ��
        super.speak();
        console.log("���� speak");
    }

    static speak() {
        // �ھ�̬������ʹ��
        // ָ���࣬�����Ǹ����ԭ�Ͷ���
        // ԭ���ǣ����Ǵ�ʱ���õ��Ǹ���ķ�������̬�������ڸ��ࣩ�������Ǹ���ԭ�Ͷ����ϵķ���
        super.speak();
        console.log("��д static speak");
        // ͨ�� super ���ø���ķ���ʱ�������ڲ��� this ָ��ǰ�����࣬�����������ʵ��
    }
}

const zjr = new Programmer('jerry', '��');
zjr.speak();
Programmer.speak();

/*
speak
speak
���� speak
static speak
Programmer
��д static speak
*/

// ע�⣺super.name �� undefined��
// ��Ϊ super ��Ϊ�����Ǳ�ʾ�����ԭ�Ͷ��� Person.prototype����ԭ�Ͷ����ϲ�û�и�������
```