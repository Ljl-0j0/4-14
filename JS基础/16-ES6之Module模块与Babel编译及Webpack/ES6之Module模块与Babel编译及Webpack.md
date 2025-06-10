<!--
 * @Description: 
 * @Author: ljl
 * @Date: 2025-06-07 15:06:05
 * @LastEditors: rendc
 * @LastEditTime: 2025-06-09 20:28:26
-->
# ��ES6֮Moduleģ����Babel���뼰Webpack��

> ��ԭ�����ݣ�ת����ע��������
> �������ݳ���Jerry Zhou.���ܼ��𣩣�����ѧϰ
> 

# һ��Moduleģ��

## 1.1 ��ʶModule

��1��ʲô��ģ��

ģ�飺һ��һ���ľֲ�������Ĵ���顣

��2��ʲô��ģ��ϵͳ

ģ��ϵͳ��ϵͳ�Ľ����ģ�黯һϵ�����⡣

1. ģ�黯��д����֮ǰ����������ִ�к���ģ��ģ�黯��֮����������ִ�к���������Ϊ����������������������⡿��ES6 ��ʵ�������ģ�黯���﷨��
2. ����ȫ�ֱ�����ģ���еı������Ǿֲ��ģ���ͬģ��֮�䲻���໥���ţ�����ͨ���ض��﷨��¶ָ�����ݣ�
3. �������˳��֮ǰ���ǽ�һ���ܵ� JavaScript ����ּ����ļ�д���������պϲ�����ʱ��js ��������Ҫ����ǰ��������ϵ�����磺�����õ� js �ļ���һ��Ҫ���������� js �ļ�֮ǰ���أ�

## 1.2 Module�Ļ����÷�

> ע�⣺Module Ҫ��Ч�������ڷ����������²���ִ�С�
>
> ��ͨ�� HTML��JS �Ǳ����ļ���������ַ�� file Э�鿪ͷ������������ http �� https ��ͷ��
>
> ������VSCode ��ʹ�� Live Server ��չ��WebStorm Ĭ�Ͼ��Ƿ�����������

- һ�� JS �ļ�����һ��ģ��
- �� import �ؼ��ֵ���ģ��
- �� export �ؼ��ֵ���ģ����Ҫ��¶�Ĳ���
- ��ʹ�� script ��ǩ���ص�ʱ����Ҫ���� type="module"�����������ͨ JS �ļ�����ʽ�����ˣ��Ͳ���ģ����

## 1.3 Module�ĵ��뵼��

> �����Ķ������Ա����루import���������ʵ���
>
> ���ڵ���͵��������ַ�����
>
> - export default ������import ����
> - export ������import ����

### 1.3.1 export default �����Ͷ�Ӧ�� import ����

��1��һ��ģ��û�е������Ƿ���Խ��䵼�룿

```html
<!-- һ��ģ��û�е�����Ҳ���Խ��䵼�� -->
<!-- �������ģ��Ĵ��붼���Զ�ִ��һ�飨����ͨ���� js һ����������ͬһ��ģ��ĵ���ִֻ��һ�飡 -->
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Module</title>
</head>
<body>
<!-- script ��ǩ��Ҫ���� type="module" -->
<script type="module">
    import "./test.js";		// ���������̨��ӡ��test
    import "./test.js";		// ��ִ��
    import "./test.js";		// ��ִ��
    import "./test02.js";	// ���������̨��ӡ��test02
    import "./test.js";		// ��ִ��
    import "./test02.js";	// ��ִ��
</script>
</body>
</html>

----------------------------------------------------
<!-- test.js -->

console.log("test");

----------------------------------------------------
<!-- test02.js -->

console.log("test02");

```

��2��һ��ģ����ֻ����һ�� export default��

��module.js��

```javascript
// ģ���еı������Ǿֲ���
const age = 18;
const sex = "male";

export default age;			// ͨ�� export default ��������¶��һ��ֵ
// export default sex;		// ������Ϊ export default ֻ����һ���ļ��е���һ�Σ�����

/*
export default 24;				// ���Ե���ֵ
export default {};				// ���Ե�������
export default function(){};	 // ���Ե�������
export default class{};			 // ���Ե���class
*/
```

��index.html��

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Module</title>
</head>
<body>
<!-- script ��ǩ��Ҫ���� type="module" -->
<script type="module">
    // import ֮���һ��ģ��ı������Ƽ������뵼��ʱ��������ͬ������������� age
    import age from "./module.js";
    console.log(age);	// 18
</script>
</body>
</html>
```

### 1.3.2 export �����Ͷ�Ӧ�� import ����

**��1�������÷�**

��module.js��

```javascript
/*
const age = 18;
export age;		// ����
*/

// export ����ֻ�ܸ���������䣡
export const age = 18;
```

��index.html��

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Module</title>
</head>
<body>
<!-- script ��ǩ��Ҫ���� type="module" -->
<script type="module">
    // import aaa from "./module.js";	// ���� 
    // export ������ģ�飬�ڵ���ʱ��������ȡ���������Ʊ�����ģ�鵼��ʱ��ͬ������Ҫʹ�������ڽ⹹��ֵ��{}��ʽ��
    
    import {age} from "./module.js";	// ע�⣺���Ʋ�������ȡ��һ��Ҫ��ģ����ͬ
    console.log(age);	// 18;
</script>
</body>
</html>
```

ע�⣺���� export ����ʱ��Ҳ�����������ڽ⹹��ֵ��`{}`��ʽ��

��module.js��

```javascript
const age = 18;

export {age};
```

**��2�������������**

��module.js��

```javascript
// 1������������������ʽ
/*
export funciton fn() {};
export class className {};
export const age = 18;
*/

// 2�����ý⹹��ֵ����ʽ
function fn() {};
class className {};
const age = 18;

/* ��ʽ 1��
export {fn};
export {className};
export {age};
*/

// ��ʽ 2��
export {fn, className, age};
```

��index.html��

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Module</title>
</head>
<body>
<!-- script ��ǩ��Ҫ���� type="module" -->
<script type="module">
    /* ��ʽ 1��
    import {fn} from "./module.js";
    import {className} from "./module.js";
    import {age} from "./module.js";
    */
    // ��ʽ 2��
    import {fn, className, age} from "./module.js";
    console.log(fn);			// ? fn() {}
    console.log(className);		// class className {}
    console.log(age);	    	// 18
</script>
</body>
</html>
```

**��3����������ʱ�����**

```javascript
export {fn as func, className as cN, age};
```

```javascript
import {func, cN, age as nl} from "./module.js";
console.log(func);			// ? fn() {}
console.log(cN);			// class className {}
console.log(nl);	    	// 18
```

**��4�����嵼��**

```javascript
// ֮ǰ�ĵ��뷽ʽ����������ģ�鲻����ô���ã�����һ��ģ������������������ô���ر�Ѿ�
// import {fn, className, age} from "./module.js";

// ���嵼��
// ��ͬһ�ļ��������ģ�鵼�뵽һ��������
// ������ export ��Ч��ͬʱ�� export default Ҳͬ����Ч
import * as imObj from "./module.js";
console.log(imObj);					// ��ͼƬ
console.log(imObj.fn);				// ? fn() {}
console.log(imObj.className);		// class className {}
console.log(imObj.age);				// 18
// export default Ҳͬ����Ч��imObj.default
```

<img src="mark-img/image-20220602154710981.png" alt="image-20220602154710981" style="width:40%;" />

**��5��ͬʱ����**

��������Ҫ�ֱ��� export default �� export ʱ������ʹ��ͬʱ����ķ�ʽ��

```javascript
// ���ǿ��Էֿ�ʵ��
import {fn, className, age} from "./module.js";
import sex from "./module.js";
```

```javascript
// ���Ƽ�ʹ��ͬʱ����ķ�ʽ
import sex, {fn, className, age} from "./module.js";
// ע�⣺export default ������ export ֮ǰ
```

## 1.4 Module��ע������

### 1.4.1 Module��ע������

**��1��ģ�鶥��� this ָ��**

���㣺���� if��for��while�������Ⱦֲ�������֮��Ĳ��֡�

��ģ���ж���� this ָ�� undefined����ǧ��Ҫ����Ϊָ�� window��

> ģ���ж���� this ָ�� undefined���������ǿ�������������ԣ����ģ����û�б���ȷ�ĵ��롣���磺�� script ��ǩ��û�� type="moudel" ʱ��ģ���û�б��ɹ����룬��ô this ��ָ����� window��

> ��������Ҫָ��������ģ��ķ�ʽ����ʱ�����ǿ�����������
>
> ��module.js��
>
> ```javascript
> if (typeof this !== "undefined") {
>     throw new Error("��ʹ��ģ��ķ�ʽ���أ�");
> }
> ```

**��2��import �ؼ��ֺ� import() ����**

- import �����������Ч��������д���Ķ��������������ͷ��������ִ�У�

- import ִ�е�ʱ�򣬴��뻹û��ִ�У��������ǲ��ܽ� import Ƕ�뵽�����߼��У�

  ```javascript
  // ��������ʱ����ģ�
  if (...) {
      import "./pc.js";
  } else {
      import "./mobile.js";
  }
  // import �� export ����ֻ����ģ��Ķ��㣬�����ڴ������ִ�У� 
  ```

- import()��ע�⣺���� `import` ���� `import()`�����԰��������룬���ҷ���һ�� promise ����

  ```javascript
  if (...) {
      import("pc.js").then().catch();
  } else {
      import("mobile.js").then().catch();
  }
  ```

**��3�����뵼���ĸ���д��**

����д������һ�������ͬʱ��ɵ���͵�����

```javascript
// ���뵼���ĸ���д��
export {age} from "./module.js";

// �ȼ���
import {age} from "./module.js";
export {age} from "./module.js";
// �ȵ����ã�������ٵ������൱�� ����תվ��
```

# ����Babel��Webpack

## 2.1 ��ʶBabel

������[Babel �� The compiler for next generation JavaScript https://babel.dev/](https://babel.dev/)

���߱��룺[Babel �� The compiler for next generation JavaScript https://babel.dev/repl](https://babel.dev/repl)

Babel �� JavaScript �ı������������� ES6 ����ת���� ES6 ֮ǰ�Ĵ��롣

Babel ������Ա��� ES6 �Ĵ󲿷��﷨�����磺let��const����ͷ������class�����������Ƕ��� ES6 ������ API�����磺Set��Map��Promise ��ȫ�ֶ����Լ�һЩ������ȫ�ֶ����ϵķ��������� Object.assign/Array.from��������ֱ�ӱ��룬��Ҫ����������ģ�飬Babel һ����Ҫ��� Webpack ������ Module ģ���﷨��

## 2.2 Babel��ʹ�÷�ʽ

ʹ�÷�ʽ˵����[Babel �� The compiler for next generation JavaScript https://babel.dev/setup](https://babel.dev/setup)

Ŀǰ��������Ҫ��ע��CLI �� Webpack��

ע�⣺����һ�㲻���� [In the browser](https://babel.dev/setup#installation) ��ʽ����Ϊ���ַ�ʽ����ÿ�α������ִ��ʱ��Ҫ��ת��Ϊ ES6 ֮ǰ�Ĵ��룬������ת��Ӱ�������ܣ��� CLI �� Webpack �ķ�ʽ����ǰ�ͽ� ES6 ����ת��Ϊ ES6 ֮ǰ�Ĵ��룬�����������ʱ�Ѿ��� ES6 ֮ǰ�Ĵ����ˣ���Ӱ�����ܡ�

## 2.3 ʹ��Babelǰ��׼������

### 2.3.1 ʲô��Node.js��npm

�򵥵�˵ Node.js ���������ڷ���˵� JavaScript��

Node.js ��һ������ Chrome JavaScript ����ʱ������һ��ƽ̨��

Node.js ��һ���¼����� I/O ����� JavaScript ���������� Google �� V8 ���棬V8 ����ִ�� Javascript ���ٶȷǳ��죬���ܷǳ��á�

��˵� JavaScript = ECMAScript + IO + File + Http + ...�������˵Ĳ�����

npm ����ͬ Node.js һ��װ�İ������ߣ��ܽ�� Node.js ���벿���ϵĺܶ����⣬������ʹ�ó��������¼��֣�

- �����û��� npm ���������ر��˱�д�ĵ�������������ʹ�á�
- �����û��� npm ���������ز���װ���˱�д�������г��򵽱���ʹ�á�
- �����û����Լ���д�İ��������г����ϴ��� npm ������������ʹ�á�

�����°�� Node.js �Ѿ������� npm������֮ǰ npm Ҳһ����װ���ˡ�ͬ������ͨ������ **"npm -v"** �������Ƿ�ɹ���װ��

### 2.3.2 ��װNode.js

Node.js ���Ĺ�����[Node.js (nodejs.org)](https://nodejs.org/zh-cn/)

�������س���֧�ְ棬��˫����װ��������ʾ���а�װ���ɡ�

����ͨ�����ն����������룺`node -v` �� `npm -v` ���鿴�汾������鿴�ɹ�����������װ�ɹ���

### 2.3.3 ��ʼ����Ŀ

- ��ʼ����Ŀ��`npm init`

- ������Ŀ����

- ȷ�����ò���ʽ������Ŀ

<img src="mark-img/image-20220604001956543.png" alt="image-20220604001956543" style="width:80%;" />

> ����Ҳ������ `npm init -y` -y ���� yes ����˼������ʡȥ�û��س��Ĳ�����

> ��������ȷ������ϲ������Ŀ·���¾ͻ�����һ�� `package.json` �ļ������������¼������ npm ��Ŀ�ĳ�ʼ��������Ϣ�������������� npm ��װ���������������¼������ļ��С�
>
> ����������ҪǨ����Ŀʱ������ֻ��Ҫ������� `package.json` �ļ���Ȼ�����µ���Ŀ��ʹ����Ӧ�������ɻָ��ļ��еĻ���������������
>
> ����ʼʱ�� package.json��
>
> ```json
> {
>       "name": "demo",
>       "version": "1.0.0",
>       "description": "",
>       "main": "index.js",
>       "scripts": {
>        	"test": "echo \"Error: no test specified\" && exit 1"
>       },
>       "author": "",
>       "license": "ISC"
> }
> ```

### 2.3.4 ��װBabel��Ҫ�İ�

��װ���`npm install --save-dev @babel/core @babel/cli` �� `npm i --save-dev @babel/core @babel/cli`

ע�⣺`--save-dev` ��ʾ����һ������������������������֮�����ò����ġ�

�����ǰ�װ�ɹ��󣬻�õ�һ��������������ķ���Ŀ¼������ json �ļ������� package.json �ļ�������һ�� `devDependencies` ���������������ԣ�����¼�����ǵİ�װ��¼��

<img src="mark-img/image-20220604003001083.png" alt="image-20220604003001083" style="width:30%;" />

<img src="mark-img/image-20220604002444370.png" alt="image-20220604002444370" style="width:80%;" />

- @babel/cli��CLI ��ʹ�� Babel ����İ���ʵ������������ Babel �����ʶ����ִ�е�
- @babel/core��Babel ��������� ������ʩ� �İ�������ָ�ӿ������� Babel ������Ϊ

> ע�⣺�����ڰ�װʱ��Ҫ�ر�ע��һ�����������İ汾�ţ�����������������°汾����Ϊ���°汾���ܻ᲻����ĳЩ�ɰ汾��

> ������Ǩ������Ŀ����ʱ��Ҳ����Ŀ�������������루node_modules �ļ��У��Ѿ������˻��ߴ����ˣ���ôֻҪ package.json �ļ����ڣ������ package-lock.json Ҳ�ڣ��������ܱ�֤�汾��ȫ�ԣ�����ô����ֻ��Ҫִ�� `npm install` ������ɸ��� package.json ��������������Ŀ�������������루node_modules �ļ��У���
>
> ע�⣺`npm install` ���Լ�дΪ��`npm i`
>
> ע�⣺��ƽʱ����Ŀ�����У������ڿ�����Ŀ����Ǩ����Ŀʱ��ͨ������� node_modules �ļ���һͬ������Ǩ�ƣ���Ϊ���ļ��е��ļ�������̫���ˣ����Կ�����Ǩ�Ƶ�ʱ����ر𳤣����һ����׳�������һ�㶼��ͨ�� `npm install` ���������ɡ�

> �� npm5.x ֮�󣬵����� `npm install xxx` �� `npm install` �󣬻�����һ�� package-lock.json �ļ�������������У���ô��ֻ�Ǹ��¸��ļ�����ԭ���� package.json �м�¼�������İ汾ֻ��һ����汾���汾��ǰ�� `^`����������汾��һ����Χ�����磺^1.2.3 ��ƥ������� 1.x.x ������ 2.0.0������������ÿ�� `npm install` ��װ���������ʱ�����ֻ�Ǹ��� package.json �е�����������ô node_modules �е���������Ҳ�����ô��ȥ���ش�汾�е����°棬����ҵõ���ô�ͼ�����ǲ��Ǵ�汾�е����°棬����Ǿ�ԭ�ⲻ����������Ǿ����������°棡���������������汾Ƶ���ı䶯����Ȼ��汾�ڵ�����������һЩ bug ���޲���API һ�㲻��仯��������������Ҳ���������������Դ����ĸ���Ī����������⣬������õĽ���취�������������İ汾�ţ����� package-lock.json �͵����ˣ������������������ϸ�汾��¼�ã����һ����¼�������汾����ʱ�����ص�ַ���Լ����������������²��İ汾����Ϣ�����������ǽ��� `npm install` ʱ���ͼ������ᷢ��Ī���������Ϊ�����Դ����Ĵ����ˣ�

### 2.3.5 ʹ��Babel����ES6����

���ȣ�������Ҫ�ֶ��� package.json �ļ���������´��룺

```json
"scripts": {
    "build": "babel src -d lib"
}
```

���� `"build": "babel src -d lib"` ��ʾ��ͨ�� babel ��� src �µ��ļ����벢����� lib Ŀ¼�¡�

����`-d` ʵ�ʱ�ʾ�ľ��ǣ�`--out-dir` ����д����ʵ�������Ŀ¼����˼��

ע�⣺��������ͨ�������� `lib` Ŀ¼�£����Ƿ��� `dist` Ŀ¼�£��������ǰ� package.json �ļ�����ӵĴ����޸�Ϊ��

```json
"scripts": {
    "build": "babel src -d dist"
}
```

**��1�����������**

�����ú�������������Ǽ���ͨ��������б��롣

�������`npm run build`

�����Ǳ���ɹ��󣬱����һ�� `dist` Ŀ¼�����������б������ļ���

> �����ǰѱ���õ��ļ��򿪺󣬷�������Ĵ��������� ES6 �汾�ģ�������Ϊ��������ʽ�������֮ǰ����Ҫ����һ�� Babel �������ļ���

**��2��Babel�������ļ�**

���ȣ�������Ҫ���ⰲװһ������`npm install @babel/preset-env --save-dev`��������ܸ��߱������������ת������ ES6 ���﷨��

��װ�ɹ�������ĿĿ¼�£�����һ�� `.babelrc`��Babel �����ļ�����

���ļ��аѸո����صİ�����Ϊ Babel Ԥ�裨@babel/preset-env ���� Babel �ٷ��ṩ��һ��ת�� ES6 �﷨��Ԥ�裩��

```json
{
    "presets": ["@babel/preset-env"]
}
```

> ����֮�������ٴ�ִ�� `npm run build` �����ô dist Ŀ¼�е��ļ����Ǳ�����ɵ� ES6 ֮ǰ�汾�Ĵ����ˣ�

## 2.4 Webpack��ʲô

��1����ʶ Webpack

Webpack �Ǿ�̬ģ���������� Webpack ����Ӧ�ó���ʱ���Ὣ������Щģ������һ�������ļ���

��2��ʲô�� Webpack ģ�飿

���� JavaScript �⣬���� CSS��ͼƬ��ͼ������ȡ�

��3��ʲô�Ǿ�̬��

���������д����ڱ��ص� js/css/ͼƬ/ͼ������ ���ļ������Ǿ�̬�ģ�����Զ�̷�������ȡ�ľ��Ƕ�̬�ġ�

Webpack û�취����̬�Ĳ��֣�ֻ�ܴ���̬�Ĳ��֡�

��4������ԭ��

Webpack ���������е������Ϣ�����ҵ������ڣ�һ����һ�� JS �ļ�����Ȼ��˳����� JS �ļ��ҳ����ļ�������ģ�飬��������ģ��ʱ�ͽ��뵽��ģ���м����ҳ���������ģ�飬��˷�����ֱ���γ�������Ŀ�����ļ�֮��� ��������ϵ�������������������ϵ��֮��Webpack ��ݹ����������ϵ�����ҵ�ÿ���ڵ��Ӧ����Դ�ļ���Ȼ����������е� loader ���򣬽�����Ӧ�ļ�����ȥ�������ģ�飬��󽫼��غý�����д�������պϲ��������ļ��У�bundle.js����

[webpack �����ĵ� | webpack ������ (webpackjs.com)](https://www.webpackjs.com/)

<img src="mark-img/image-20230127105737221.png" alt="image-20230127105737221" style="width:80%;" />

## 2.5 Webpack������

**��1����ʼ����Ŀ**

`npm init`��ע�⣺��Ŀ���벻Ҫȡ `webpack`����Ϊ�����Ŀ���� webpack ������ͻ�ˡ�

**��2����װWebpack��Ҫ�İ�**

`npm install --save-dev webpack-cli@3.3.12 webpack@4.44.1`���˴���ĳ���汾��Ϊ��ʾ��

**��3������Webpack**

- ���������ļ� `webpack.config.js`

- �༭�������ݣ�

  ```js
  // ����·�������ģ�飨Node ��ʽ��Ҳ���� CommonJS ģ�黯��ʽ������Ļ��� ES6 Module ģ�黯��ʽ��
  const path = require('path');
  
  // ��ģ�鷽ʽ��������
  module.exports = {
    // ���
    entry: './src/index.js',
    // ����
    output: {
      // __dirname ��ʾ��ǰ·��
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
  };
  
  // Webpack �������ļ�������Ҳ����ģ��ķ�ʽ���������������ģ�鲻�� ES6 ģ�飬���� Node ģ�飨CommonJS ģ�飩
  ```

  ���ͬʱ������Ҫ�� package.json ����ӣ�

  ```json
  "scripts": {
      // ִ�� webpack ������൱��ȥִ�� webpack �����ļ�
      // (��ȥĬ��ִ�� webpack.config.js �����ļ�)
      // "webpack": "webpack"
      //��ȥִ��ָ���������ļ�����������ļ��ǿ�������ָ���ģ�
      "webpack": "webpack --config webpack.config.js"
  }
  ```

- ��������

  - index.html

  ```html
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8" />
      <title>Webpack ������</title>
  </head>
  
  <body>
      <script src="./src/index.js" type="module"></script>
  </body>
  
  </html>
  ```

  - src/index.js

  ```javascript
  import age from './module.js';
  
  console.log('index.js', age);
  ```

  - src/module.js

  ```javascript
  export default 18;
  
  console.log('module.js');
  ```

- ���벢����

  - `npm run webpack`

  ִ�к󣬱������һ�� dist Ŀ¼������һ�� bundle.js �ļ���

  ```javascript
  !function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);console.log("module.js"),console.log("index.js",18)}]);
  ```

  ���Կ�����Ĭ��ͨ�� webpack �������ļ���ѹ����ģ����ǿ���ͨ���� webpack.config.js �����ļ������óɿ����棺

  ```javascript
  const path = require('path');
  
  module.exports = {
      // ����ģʽ
      mode: 'development',
      entry: './src/index.js',
      output: {
          path: path.resolve(__dirname, 'dist'),
          filename: 'bundle.js',
      },
  };
  ```

  �ٴ�ִ�� `npm run webpack`���鿴 dist/bundle.js �ļ���

  ```javascript
  /******/ (function(modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/ 	var installedModules = {};
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/
  /******/ 		// Check if module is in cache
  /******/ 		if(installedModules[moduleId]) {
  /******/ 			return installedModules[moduleId].exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = installedModules[moduleId] = {
  /******/ 			i: moduleId,
  /******/ 			l: false,
  /******/ 			exports: {}
  /******/ 		};
  /******/
  /******/ 		// Execute the module function
  /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  /******/
  /******/ 		// Flag the module as loaded
  /******/ 		module.l = true;
  /******/
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/ 	__webpack_require__.m = modules;
  /******/
  /******/ 	// expose the module cache
  /******/ 	__webpack_require__.c = installedModules;
  /******/
  /******/ 	// define getter function for harmony exports
  /******/ 	__webpack_require__.d = function(exports, name, getter) {
  /******/ 		if(!__webpack_require__.o(exports, name)) {
  /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
  /******/ 		}
  /******/ 	};
  /******/
  /******/ 	// define __esModule on exports
  /******/ 	__webpack_require__.r = function(exports) {
  /******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  /******/ 		}
  /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
  /******/ 	};
  /******/
  /******/ 	// create a fake namespace object
  /******/ 	// mode & 1: value is a module id, require it
  /******/ 	// mode & 2: merge all properties of value into the ns
  /******/ 	// mode & 4: return value when already ns object
  /******/ 	// mode & 8|1: behave like require
  /******/ 	__webpack_require__.t = function(value, mode) {
  /******/ 		if(mode & 1) value = __webpack_require__(value);
  /******/ 		if(mode & 8) return value;
  /******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
  /******/ 		var ns = Object.create(null);
  /******/ 		__webpack_require__.r(ns);
  /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
  /******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
  /******/ 		return ns;
  /******/ 	};
  /******/
  /******/ 	// getDefaultExport function for compatibility with non-harmony modules
  /******/ 	__webpack_require__.n = function(module) {
  /******/ 		var getter = module && module.__esModule ?
  /******/ 			function getDefault() { return module['default']; } :
  /******/ 			function getModuleExports() { return module; };
  /******/ 		__webpack_require__.d(getter, 'a', getter);
  /******/ 		return getter;
  /******/ 	};
  /******/
  /******/ 	// Object.prototype.hasOwnProperty.call
  /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /******/
  /******/ 	// __webpack_public_path__
  /******/ 	__webpack_require__.p = "";
  /******/
  /******/
  /******/ 	// Load entry module and return exports
  /******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
  /******/ })
  /************************************************************************/
  /******/ ({
  
  /***/ "./src/index.js":
  /*!**********************!*\
    !*** ./src/index.js ***!
    \**********************/
  /*! no exports provided */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.js */ \"./src/module.js\");\n\r\n\r\nconsole.log('index.js', _module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/index.js?");
  
  /***/ }),
  
  /***/ "./src/module.js":
  /*!***********************!*\
    !*** ./src/module.js ***!
    \***********************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (18);\r\n\r\nconsole.log('module.js');\n\n//# sourceURL=webpack:///./src/module.js?");
  
  /***/ })
  
  /******/ });
  ```

  �ɼ���Webpack �����ǵĴ�����Ϊһ���ļ��ˡ�ͬʱ���Է��֣��ļ����Ѿ�û�� import �� export �ؼ����ˣ�webpack ������ʵ���˵��뵼���Ĵ��벢�ϲ���һ���ļ��С�

  - �����������ǾͿ���ֱ���� HTML ������������ļ�

  ```html
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8" />
      <title>Webpack ������</title>
  </head>
  
  <body>
      <!-- <script src="./src/index.js" type="module"></script> -->
      <script src="./dist/bundle.js"></script>
  </body>
  
  </html>
  ```

## 2.6 entry��output

��entry��

�� webpack.config.js �� entry ָ���� webpack ���ʱ������ļ���

```javascript
const path = require('path');

module.exports = {
    mode: 'development',
    // ����ļ�
    // д��һ�����ļ���ڣ�
    // entry: './src/index.js',
    // д���������ļ�����ļ���ڣ�
    // ���ҳ�棬һ�㶼��Ӧ������ js �ļ�������Ҫ������
    entry: {
        main: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
};
```

��output��

�� webpack.config.js �� entry ָ���� webpack ���ʱ�ĳ����ļ���

```javascript
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        // __dirname����ʾ��ǰ����·��
        // path.resolve������ƴ��·��
        // path: ��ǰ·��/dist
        path: path.resolve(__dirname, 'dist'),
        // ������ļ����������ڣ�
        filename: 'bundle.js',
    },
};
```

�����ǵ���ڵ������������ǵ���ڣ����ж�����ڣ���ô����Ҫ����д��

```javascript
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // ������ļ���������ڣ�
        // name ���Զ��滻Ϊ��Ӧ������ļ�����Բ�ͬ������в�ͬ�����
        filename: '[name].js',
    },
};
```

## 2.7 loader

loader��������

Webpack ������������� js �ģ���Ҫ��������� JS ģ�黯���⣩�������Ҫ�õ�����ģ��Ĺ��ܣ���ô����Ҫ���ָ����� loader��

[loaders | webpack ������ (webpackjs.com)](https://www.webpackjs.com/loaders/)

��babel-loader��

�� Webpack ��ʹ�� Babel ����Ҫ���� babel-loader��

��װ��babel-loader + babel/core + babel/preset-env

```
npm install --save-dev babel-loader@8.1.0 @babel/core@7.11.0 @babel/preset-env@7.11.0
```

�ǵ����� Babel��`.babelrc`

```
{
    "presets": ["@babel/preset-env"]
}
```

�� webpack.config.js ������ babel-loader

```javascript
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        // �������ö�� loader��������һ������
        rules: [
            // ÿ�� loader ��һ����������������
            //��ע�⣺��ͬ�� loader �����ù���ͬ�������� www.webpackjs.com/loaders/ �в鿴��
            {
                // ������ʽƥ����Ҫ���� loader ������ļ����˴������е� js �ļ���
                test: /\.js$/,
                // node_modules Ҳ���� js �ļ���������Ҫ�����������ǽ����ų�
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
```

֮�󣬵����� `npm run webpack` �󣬻��ȴ��� loader���� Webpack �����

������ǲ鿴������ dist/index.js �ļ����ᷢ������� let �� ES6 �﷨���Ѿ�תΪ var ��֮ǰ�汾���﷨�ˣ�˵�� babel ȷʵ��Ч�ˣ�

���ǣ�ϸ�Ĺ۲�ᷢ�֣�Babel ֻ�ǻὫһЩ ES6 �Ļ����﷨����ת�����������磺Object��Set��Map��Promise �� ES6 �ṩ�� API��Babel ���޷�ֱ��ת���ģ�����������Ҫ�ٽ���������ģ�飬����Щ������ģ����԰�����ʵ�� ES6 �е� API��

> core-js �� JavaScript ��׼��� polyfill����Ƭ/�����������¹��ܵ� ES API ת��Ϊ�󲿷��ִ������������֧�����е�һ�� API ���������ϡ���֧�����µ� ECMAScript ��׼����֧�� ECMAScript ��׼���᰸����֧��һЩ WHATWG / W3C ��׼����ƽ̨���� ECMAScript ��أ���������޶ȵ�ģ�黯�����ܽ�����������Ҫʹ�õĹ��ܣ����ܹ�����Ⱦȫ�������ռ䣬���� Babel ���ܼ��ɣ����ܹ��Ż� core-js �ĵ��룬�������ձ顢�����е�Ϊ JavaScript ��׼��򲹶��ķ�ʽ��

��װ core-js��

```
npm install --save-dev core-js@3.6.5
```

֮������ֻ��Ҫ������ js �ļ��Ŀ�ͷ��д�� `import 'core-js/stable';` ������ˣ�

���磺index.js

```javascript
import 'core-js/stable';

let name = 'Alex';
const age = 18;

const add = (x, y) => x + y;

new Promise((resolve, reject) => {
    resolve('�ɹ�');
}).then(value => {
    console.log(value);
});

Array.from([1, 2]);

class Person {
    constructor(name, age) {
        Object.assign(this, {name, age});
    }
}

new Person('Alex', 18);
```

������ִ�� `npm run webpack` ֮�����ɵĴ������ȫ�� ES6 ֮ǰ���﷨ʵ�ֵ��ˣ�

> ע�⣺core-js �� Babel ���������Ҫ�� Webpack �Ļ����µģ������� core-js �� Babel ����ϲ��˵ģ���Ϊ Babel ������ȥ���� `import 'core-js/stable';` ��������䣡

## 2.8 plugins

plugins�����

Webpack ������������ִ�з�Χ���������

[Plugins | webpack ������ (webpackjs.com)](https://www.webpackjs.com/plugins/)

��html-webpack-plugin��

������ܣ��� html �ļ�Ҳͬʱ���д����

��װ��

```
npm install --save-dev html-webpack-plugin@4.3.0
```

���� webpack.config.js

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    // �������ö�� plugin��������һ������
    plugins: [
        // ÿ�� plugin ͨ��ʵ��������������
        // ������Ϣ�ڲ����У������÷�ÿ�� plugin ��ͬ�������� www.webpackjs.com/plugins/ �в鿴
        new HtmlWebpackPlugin({
            template: './index.html',
            // ָ���� html Ҫ�����ĸ� js �ļ��������ָ������ô dist �д���õ��˼��� js �������������
            chunks: [
                'index'
            ]
        })
    ]
};
```

�����ǵ���ڵ����������չʾ����ڣ�

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        // ����ڣ��м�����ھ�ʵ��������
        new HtmlWebpackPlugin({
            template: './index.html',
            // �������Ҫ�������ֽ�������
            filename: 'index.html',
            chunks: [
                'index'
            ]
        }),
        new HtmlWebpackPlugin({
            template: './search.html',
            filename: 'search.html',
            chunks: [
                'search'
            ]
        }) 
    ]
};
```

�������ã�

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    // �������ö�� plugin��������һ������
    plugins: [
        // ÿ�� plugin ͨ��ʵ��������������
        // ������Ϣ�ڲ����У������÷�ÿ�� plugin ��ͬ�������� www.webpackjs.com/plugins/ �в鿴
        new HtmlWebpackPlugin({
            template: './index.html',
            // ָ���� html Ҫ�����ĸ� js �ļ��������ָ������ô dist �д���õ��˼��� js �������������
            chunks: [
                'index'
            ],
            minify: {
                // ɾ�� index.html �е�ע��
                removeComments: true,
                // ɾ�� index.html �еĿո�
                collapseWhitespace: true,
                // ɾ������ html ��ǩ����ֵ��˫����
                removeAttributeQuotes: true
            }
        })
    ]
};
```

## 2.9 ����CSS

��װ css-loader��

```
npm install --save-dev css-loader@4.1.1			# ʶ�� css 
npm install --save-dev style-loader@1.2.1		# �� css ���뵽 html �� style
```

���� webpack.config.js��

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                // ��� loader��Ҫ�� use[] �� use{}
                use: [
                    // ע�⣺������ style-loader �� css-loader����Ϊִ��˳���ǴӺ���ǰ
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            chunks: [
                'index'
            ],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        })
    ]
};
```

��ʱ�����ǾͿ����� index.js �ļ���ͷд�룺`import '../css/index.css';`��

- /src/index.js

```javascript
import '../css/index.css';
```

- /css/index.css

```css
body {
    background-color: red;
}
```

- index.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <title>����CSS</title>
</head>

<body>
</body>

</html>
```

- `npm run webpack`

<img src="mark-img/image-20220716214929353.png" alt="image-20220716214929353" style="width:80%;" />

�ɼ���css �� `<style>` �ķ�ʽ������ HTML �У�

��Ȼ����ʵ�ʳ����У����Ǹ������ڽ� css �� `<link>` �ķ�ʽ�����룺

��װ mini-css-extract-plugin��

```
npm install --save-dev mini-css-extract-plugin@0.9.0
```

���� webpack.config.js��

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            chunks: [
                'index'
            ],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new MiniCssExtractPlugin({
        	filename: 'css/[name].css'
        })
    ]
};
```

�ٴ� `npm run webpack`��

<img src="mark-img/image-20220717000236167.png" alt="image-20220717000236167" style="width:80%;" />

## 2.10 ����CSSͼƬ

- /css/index.css

```css
body {
    background-image: url(https://tse2-mm.cn.bing.net/th/id/OIP-C.rq2KVURH2gEGBq9pjDz1nAHaQB?pid=ImgDet&rs=1);
    background-repeat: no-repeat;
}
```

- `npm run webpack`

<img src="mark-img/image-20220717002428302.png" alt="image-20220717002428302" style="width:80%;" />

էһ����һ����������ȷʵĬ�Ͽ��Դ��� CSS ͼƬ����Ϊʲô��Ҫ����������δ��� CSS ͼƬ�أ�������Ϊ����������� CSS ��ͼƬ��һ�������ַ��ͼƬ���� webpack ����Ͳ��ᴦ����������ݣ�ֻ��Ա��ص����ݽ��д������������û���κε�Ӱ�죬�������ǰ�ͼƬ��ַ����һ������ͼƬʱ��

- /css/index.css

```css
body {
    background-image: url(../img/yyds.jpg);
    background-repeat: no-repeat;
}
```

<img src="mark-img/image-20220717003134658.png" alt="image-20220717003134658" style="width:80%;" />

webpack ֱ�ӱ�����Ϊ webpack ��������������ʱֱ�������������ڱ�������ʱ��Ҫ������ webpack �������ܴ��� css ͼƬ��

��װ��file-loader

```
npm install --save-dev file-loader@6.0.0
```

���� webpack.config.js��

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|png|apng|gif|tif|svg|bmp|webp)$/,
                loader: 'file-loader' 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            chunks: [
                'index'
            ],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new MiniCssExtractPlugin({
        	filename: 'css/[name].css'
        })
    ]
};
```

- `npm run webpack`

<img src="mark-img/image-20220717004103633.png" alt="image-20220717004103633" style="width:40%;" />

- /dist/css/index.css

```css
body {
    background-image: url(3060ad5b4948915d21a87eef6e04a080.jpg);
    background-repeat: no-repeat;
}
```

<img src="mark-img/image-20220717004339980.png" alt="image-20220717004339980" style="width:80%;" />

����ͼƬ��û�гɹ����룬������Ϊ·�������⡣

```css
/* ����õ��� */
body {
    background-image: url(3060ad5b4948915d21a87eef6e04a080.jpg);
    background-repeat: no-repeat;
}

/* ��ȷ�� */
body {
    background-image: url(../3060ad5b4948915d21a87eef6e04a080.jpg);
    background-repeat: no-repeat;
}
```

֮���Իᷢ������ԭ�򣬺� mini-css-extract-plugin �� file-loader û��Э�����йأ�����취�ǣ�

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        // ��� CSS ͼƬ·������
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|png|apng|gif|tif|svg|bmp|webp)$/,
                loader: 'file-loader' 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            chunks: [
                'index'
            ],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new MiniCssExtractPlugin({
        	filename: 'css/[name].css'
        })
    ]
};
```

- `npm run webpack` �ٴδ���鿴 dist/css/index.css ����ȷ�ˣ�

```css
body {
    background-image: url(../3060ad5b4948915d21a87eef6e04a080.jpg);
    background-repeat: no-repeat;
}
```

��������õ��� css ͼƬ�Ƿ��� dist Ŀ¼�ĸ�Ŀ¼�µģ���������������ͼƬ���� dist/img �У���ô���ǿ��ԣ�

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        // ��� CSS ͼƬ·������
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|png|apng|gif|tif|svg|bmp|webp)$/,
                use: {
                    loader: 'file-loader',
                    // ���ͼƬ·������������
                    options: {
                        name: 'img/[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            chunks: [
                'index'
            ],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new MiniCssExtractPlugin({
        	filename: 'css/[name].css'
        })
    ]
};
```

<img src="mark-img/image-20220717005549792.png" alt="image-20220717005549792" style="width:80%;" />

> ע�⣺file-loader �ı����ǰ��ļ�ֱ�ӽ��п����������ַ����ֻ�Ƕ�ͼƬ���ã��������ļ�Ҳ���ã�

## 2.11 ����HTMLͼƬ

���磺

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <title>����HTMLͼƬ</title>
</head>

<body>
    <img src="img/yyds.jpg" alt="">
</body>

</html>
```

��װ��html-withimg-loader

```
npm install --save-dev html-withimg-loader@0.1.16
```

���� webpack.config.js��

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|png|apng|gif|tif|svg|bmp|webp)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]',
                        // html-withimg-loader ���� HTML ͼƬ�������� file-loader ��
                        esModule: false
                    }
                }
            },
            {
                test: /\.(htm|html)$/,
                loader: 'html-withimg-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            chunks: [
                'index'
            ],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new MiniCssExtractPlugin({
        	filename: 'css/[name].css'
        })
    ]
};
```

������ html��

```html
<!DOCTYPE html>
<html lang=en>

<head>
    <meta charset=UTF-8>
    <title>����HTMLͼƬ</title>
    <link href=css/index.css rel=stylesheet>
</head>

<body>
    <img src=img/yyds.jpg alt="">
    <script src=index.js></script>
</body>

</html>
```

## 2.12 ����JSͼƬ

������ʹ�� file-loader������ֱ���� js �ļ��е���ͼƬ����ʹ�á�

- index.js

```javascript
import '../css/index.css';
import yydsimg from '../img/yyds.jpg';

const imgEl = document.createElement('img');
imgEl.src = yydsimg;
document.body.appendChild(imgEl);
```

## 2.13 url-loader����ͼƬ

һ������վ��Ŀ�л����������Сͼ�꣨<=10k�����������ЩСͼ�궼��ͼƬ�ļ��ķ�ʽ�����һ���ǱȽ�ӷ���Ҳ���ѧ�ģ�һ����԰���ЩСͼ���� base64 ����ķ�ʽ�������ͼƬ�� url ��ַ�滻Ϊ��ͼƬ�� base64 ���룩�����ִ����Сͼ��Ͳ�����ʵ��ͼƬ����ʽ�����ˣ������Ա������ʽ���ڡ�

��װ��url-loader

ע�⣺url-loader �������� file-loader �ģ�����ǰ�����Ѿ���װ�� file-loader��

```
npm install --save-dev url-loader@4.1.0
```

��װ�� url-loader �󣬾Ϳ��Բ��� file-loader �ˣ�ֻ������ url-loader��

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|png|apng|gif|tif|svg|bmp|webp)$/,
                use: {
                    // �� file-loader ��Ϊ url-loader
                    loader: 'url-loader',
                    options: {
                        name: 'img/[name].[ext]',
                        esModule: false,
                        // ���ƣ�С�� 10k ���ļ����� base64 ���룬�������� file-loader ��ͬ����
                        limit: 10000
                    }
                }
            },
            {
                test: /\.(htm|html)$/,
                loader: 'html-withimg-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            chunks: [
                'index'
            ],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new MiniCssExtractPlugin({
        	filename: 'css/[name].css'
        })
    ]
};
```

ִ�� `npm run webpack`��

<img src="mark-img/image-20220717021246176.png" alt="image-20220717021246176" style="width:80%;" />

<img src="mark-img/image-20220717021324142.png" alt="image-20220717021324142" style="width:80%;" />

## 2.14 webpack-dev-server

Ϊʲô��Ҫ webpack-dev-server��

�𰸣��Զ��������ÿ���޸Ķ����Զ������Ҳ������ν�� ���ȸ���/�����ء���

��װ��

```
npm install --save-dev webpack-dev-server@3.11.0
```

�޸� package.json������ `"dev": "webpack-dev-server"`��

> `"dev"*:* "webpack-dev-server --open chrome"` �Զ������� Chrome �����

```json
{
  "name": "webpack0",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src -d dist",
    "webpack": "webpack --config webpack.config.js",
    "dev": "webpack-dev-server"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.18.6",
    "@babel/core": "^7.11.0",
    "@babel/preset-env": "^7.11.0",
    "babel-loader": "^8.1.0",
    "core-js": "^3.6.5",
    "css-loader": "^4.1.1",
    "file-loader": "^6.0.0",
    "html-webpack-plugin": "^4.3.0",
    "html-withimg-loader": "^0.1.16",
    "mini-css-extract-plugin": "^0.9.0",
    "style-loader": "^1.2.1",
    "url-loader": "^4.1.0",
    "webpack": "^4.44.1",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.0"
  }
}
```

ע�⣺`npm run dev` �����ڴ������ɴ������ļ���������Ŀ���ǲ��ɼ��ģ�����ڿ��������Ҫ���� dist Ŀ¼����ô��� `npm run webpack` ���ɡ�

> ��ʾ��Webpack ��һ��Ŀǰǰ�˼���ջ�зǳ���Ҫ�Ĺ��ߣ����ǰ�˿�ܵĽ��ּܹ��߶��ǻ��� Webpack ������ģ��������ǲ�ʹ���κ�ǰ�˿�ܣ�����Ҳ�������ǻ������ʹ�õ� Webpack��Webpack ���ż򵥣�����Ҫ�úã�ȴ�ǳ��ĸ��Ӻͷ��������� ���ӡ� �ر�࣡����������һ����λ���� ��Webpack���ù���ʦ������Ϊ��ͨ��ǰ�˿����ߣ����������� Webpack ��ʹ�û������ɣ����ÿ�ϸ�ڣ���þ��Ǳ��ñ߲��ѧ�������Լ۱ȲŸߣ�