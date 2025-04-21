<!--
 * @Description: 
 * @Author: ljl
 * @Date: 2025-04-18 09:41:08
 * @LastEditors: rendc
 * @LastEditTime: 2025-04-18 10:28:29
-->
# HTML & CSS
- [ ] **盒模型（Box Model）是什么？如何控制元素的最总渲染尺寸？**
>    - **答案：**
>盒模型由内容（content）、内边距（padding）、边框（border）、外边距（margin）组成。通过`box-sizing`控制：
>        - `content-box`（默认）：元素宽度 = content宽度
>        - `border-box`：元素宽度 = content宽度 + padding宽度 + border宽度
---
- [ ] **如何实现垂直居中？**
>    - **答案：**
>        - Flex方案：父容器设置`display:flex; align-items:center; justify-content:center;`
>        - Grid方案：父容器设置`display:grid; place-items:center;`
>        - 绝对定位方案：父容器设置`position:relative;`，子元素设置`position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);`
---
- [ ] **CSS选择器优先级规则？**
>    - **答案：**
>`!important` > 内行样式 > ID选择器 > 类/伪类/属性选择器 > 标签选择器 > 通配符选择器
>
>       权重计算：ID（100）、Class（10）、Tag（1）、*（0）
---
# JavaScript核心
- [ ] **闭包（closure）是什么？距离实际应用场景**
>    - **答案：** 就是能够读取其他函数内部变量的函数。函数与其词法环境的引用绑定
>       - 模块化（封装私有变量）
>       - 防抖/节流函数（保持定时器ID） 
>```javascript
>  function createCounter() {
>     let count = 0;
>     return () => count++;
>  }
> ```
---
- [ ] **事件循环（Event Loop）机制**
>   - **答案：**
>      1. 同步代码进入调用栈执行。
>      2. 异步任务（如`setTimeout`）由Web API处理，完成后调回进入任务队列。
>      3. 调用栈为空时，事件循环将队列中的回调推入调用栈执行。
>          - 宏任务（Script、setTimeout）
>          - 微任务（Promise.then、MutationObserver）优先级更高
---
- [ ] **ES6+ 重要特性**
>   - **答案：**
>       - `let/const`（块级作用域）
>       - 箭头函数（无自己的`this`）
>       - Promise/Async Await（异步解决方案）
>       - 解构赋值、模板字符串
>       - 模块化（import/export）
---
> 
> 
>
>

