---
title: CSS3
CSS3:
  colorFreezeLevel: 2
---
## 新的选择器

### 属性选择器
#### []
- [title] 
  匹配所有有title属性的元素
- [class="className"] 
  匹配所有有class属性且值为className的元素
### 结构选择器
#### nth-child(n)
- 数字
- 关键词
- 函数（公式）
  
#### nth-of-type(n)
- 根据类型去选择
  
### 伪元素选择器
-  ::before
-  ::after

## 转换transform
### 2D
- translate(x,y) 位移
- rotate(45deg) 旋转
- scale(x,y) 缩放
### 3D
- translate3d(x,y,z) 位移
- rotate3d(x,y,z,deg) 旋转
  通常分开写
  rotateX(0)
  rotateY(0)
  rotateZ(0) 

## 动画 animation
- 重点记住动画的简写属性 

## 浏览器私有前缀
- -moz-：代表 firefox 浏览器私有属性
- -ms-：代表 ie 浏览器私有属性
- -webkit-：代表 safari、chrome 私有属性
- -o-：代表 Opera 私有属性