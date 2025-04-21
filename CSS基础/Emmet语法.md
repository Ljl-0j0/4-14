# ��Emmet�﷨��

`Emmet` �﷨��ǰ���� `Zen coding`����ʹ����д������� `html/css` �ı�д�ٶ�,��`VSCode` �ڲ��Ѿ����ɸ��﷨��

- �������� HTML �ṹ�﷨
- �������� CSS ��ʽ�﷨

[Cheat Sheet (emmet.io)](https://docs.emmet.io/cheat-sheet/)

## ��������HTML�ṹ�﷨

- ���ɱ�ǩֱ�������ǩ���� <kbd>tab</kbd> �����ɣ����� `div` Ȼ�� <kbd>tab</kbd> ���� �Ϳ������� `<div></div>`
- �����Ҫ���ɶ����ͬ��ǩ���� `*` �Ϳ����ˣ����� `div*3` �Ϳ��Կ������� 3 �� `div`
- ����и��Ӽ���ϵ�ı�ǩ�������� `>` ���� `ul>li` �Ϳ�����
- ������ֵܹ�ϵ�ı�ǩ���� `+` �Ϳ����ˣ����� `div+p`
- ������ɴ��� `����` ���� `id` ���ֵı�ǩ�� ֱ��д `��ǩ.demo` ���� `��ǩ#demo` �ٰ��� tab ���Ϳ�����
- ������ɵ�������˳�򣬿������������� `$`
- �����Ҫ�����ɵı�ǩ�ڲ�д���ݿ����� `{}` ��ʾ

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emmet�﷨֮��������HTML�ṹ�﷨</title>
</head>

<body>
    <!-- div -->
    <div></div>
    <!-- table -->
    <table></table>
    <!-- div*6 -->
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <!-- p*4 -->
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <!-- ul>li -->
    <ul>
        <li></li>
    </ul>
    <!-- div>span -->
    <div><span></span></div>
    <!-- div+p -->
    <div></div>
    <p></p>
    <!-- .nav -->
    <div class="nav"></div>
    <!-- #banner -->
    <div id="banner"></div>
    <!-- p.one -->
    <p class="one"></p>
    <!-- span.gray -->
    <span class="gray"></span>
    <!-- ul>li#two -->
    <ul>
        <li id="two"></li>
    </ul>
    <!-- .demo*5 -->
    <div class="demo"></div>
    <div class="demo"></div>
    <div class="demo"></div>
    <div class="demo"></div>
    <div class="demo"></div>
    <!-- .demo$*5 -->
    <div class="demo1"></div>
    <div class="demo2"></div>
    <div class="demo3"></div>
    <div class="demo4"></div>
    <div class="demo5"></div>
    <!-- div{pink��ʦ} -->
    <div>pink��ʦ</div>
    <!-- div{����ϲ������}*6 -->
    <div>����ϲ��</div>
    <div>����ϲ��</div>
    <div>����ϲ��</div>
    <div>����ϲ��</div>
    <div>����ϲ��</div>
    <div>����ϲ��</div>
    <!-- div{$}*6 -->
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
</body>

</html>
```

## ��������CSS��ʽ�﷨

CSS ������ȡ��д��ʽ���ɡ�

- ���� `w200` �� <kbd>tab</kbd> ���� ���� `width: 200px;`
- ���� `lh26px` �� <kbd>tab</kbd> �������� `line-height: 26px;`

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emmet�﷨֮��������CSS��ʽ�﷨</title>
    <style>
        .one {
            /* tac */
            text-align: center;
            /* ti2e */
            text-indent: 2em;
            /* w */
            /* width: ; */
            /* h */
            /* height: ; */
            /* w24 */
            width: 24px;
            /* h24 */
            height: 24px;
            /* tdn */
            text-decoration: none;
        }
    </style>
</head>

<body>

</body>

</html>
```

## ���ٸ�ʽ������

`VSCode` ���ٸ�ʽ�����룺<kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd>��

`WebStorm` ���ٸ�ʽ�����룺<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>L</kbd>��