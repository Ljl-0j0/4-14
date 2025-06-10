<!--
 * @Description: 
 * @Author: ljl
 * @Date: 2025-06-07 15:06:05
 * @LastEditors: rendc
 * @LastEditTime: 2025-06-10 14:29:51
-->
# ��HTTP���洢��Ajax��
> ��ԭ�����ݣ�ת����ע��������
> �������ݳ���Jerry Zhou.���ܼ��𣩣�����ѧϰ


# һ��ǰ���ͨ����HTTPЭ��

## 1.1 ��ʼǰ���ͨ��

### 1.1.1 ǰ���ͨ����ʲô

ǰ�˺ͺ�����ݽ����Ĺ��̡�

�����/�ͷ��� �� ��˷����� �����ݽ����Ĺ��̡�

### 1.1.2 Ϊʲô��Ҫǰ���ͨ��

ǰ�������˵õ����ݣ���չʾ��ǰ��ҳ���ϡ�

ǰ�˰��û�������Ϣ���͵���ˣ������浽������ݿ��

## 1.2 ǰ���ͨ�Ź�����������

<img src="mark-img/1152162627-0.jpg" alt="ǰ���ͨ��" style="width:50%;" />

��������͡�

- ǰ�ˣ��������ҳ��
- �ͻ��ˣ���������������������նˣ�����������APP�������й��ߡ�����
- ��ˣ���������

> ��ʵ���������ҳ��Ҳ�ǿͻ��˵�һ�֡�

## 1.3 ǰ���ͨ�ŷ�ʽ

- �����������ҳ
  - ͨ���������ַ������ ���� �� IP �����������Ӧ��ҳ
- HTML ��ǩ
  - ����������� link��img��script��iframe �ȱ�ǩʱ������������������Դ
  - �������������ǲ��еģ����Ǵ��еģ���Ȼ����������һ������
  - ����һЩ��ǩ�����������������������������󣬶��ǵȴ��û���ָ��磺a��form
- Ajax �� Fetch
  - ר��ʵ��ǰ���ͨ�ŵ� JS ����

## 1.4 ��ʼHTTP

### 1.4.1 HTTP��ʲô

���ı�����Э�飨Hyper Text Transfer Protocol��HTTP����һ���򵥵�����-��ӦЭ�飬��ͨ��������[TCP](https://baike.baidu.com/item/TCP/33012)֮�ϡ���ָ���˿ͻ��˿��ܷ��͸�������ʲô������Ϣ�Լ��õ�ʲô������Ӧ��

HTML��JS��CSS��ͼƬ�����塢��Ƶ����Ƶ����ͨ�� HTTP Э����������������֮�䴫��ġ�

### 1.4.2 HTTP������Ӧ�Ĺ���

- �û������������ ���� �� IP
  - �������ȥ�����в鿴�Ƿ��Ѿ����ʹ�����վ
    - �Ѿ����ʹ�
      - ���������ѯ���Ƿ��Ѿ�����
        - ���ڣ����������
        - δ���ڣ�ֱ�Ӵӻ��淵�ظ���վ����
    - û�з��ʹ�
      - �����������
        - ͨ������ host ��ѯ��Ӧ IP
          - host û�У�ͨ�� DNS ����������������ѯ IP
        - ͨ�� IP ��ַ����������� TCP ����
        - ���� TCP ����ʵ�� HTTP ������Ӧ
      - ������� IP
        - ͨ�� IP ��ַ����������� TCP ����
        - ���� TCP ����ʵ�� HTTP ������Ӧ

> TCP �� HTTP��
>
> ������˶� HTTP �� TCP �Ĺ�ϵģ�����壬����һ�������� HTTP ���ֵ����ķ���ʧ��HyperText Transfer Protocol��������� �����ı�����Э�顱���������������䡣���Ǻܶ������ǰ� HTTP �� TCP���������Э�飩��ְ����Ϊ��ͬ���͵��ˣ�Ȼ��ʵ�������ǲ��ǡ�
>
> HTTP ���� TCP ֮�ϣ��������ڷ��Ͷ� ���������Ŀ�� Web �������� HTTP �����ġ� ���ڽ��ն� ���� Web ��������������ݽ��д��������书������ TCP ��ɵģ�HTTP ֻ��Ϊ����������ǰ��׼����˵���˾��ǹ涨��Ҫ����ʲô��ʽ�����ݣ����� ����� һ�ݽ�Ҫ��ȥ����Ķ����� TCP ȥ���䣬���Խ� Transfer ����� ����� ��ȽϺ��ʡ���������ԭ���У������䡱 �Ƕ���һ���ʵķ��룺Transport��
>
> TCP/IP �� HTTP Э��Ĺ�ϵ���ӱ�������˵������û�пɱ��ԣ������ڴ�������ʱ������ֻʹ�ã�����㣩TCP/IP Э�飬���������Ļ������û��Ӧ�ò㣬���޷�ʶ���������ݣ������Ҫʹ��������������壬�����ʹ�õ�Ӧ�ò�Э�飬Ӧ�ò�Э���кܶ࣬���� HTTP��FTP��TELNET �ȣ�Ҳ�����Լ�����Ӧ�ò�Э�顣WEB ʹ�� HTTP Э����Ӧ�ò�Э�飬�Է�װ HTTP �ı���Ϣ��Ȼ��ʹ�� TCP/IP �������Э�齫�����������ϡ�
>
> ���У�IP �����ն˵��ն˵�ͨ�ţ����������������TCP �����ն����ն��ڶ˿�֮���ͨ�ţ�����������˿����������˷���˿ڣ�
>
> - ����㣺IP Э�飨�����������֮�䣬����ȷ�е�˵Ӧ��������������֮�䣩
> - ����㣺TCP Э�飨Ӧ����Ӧ��֮�䣬����ȷ�е�˵Ӧ���Ƕ˿���˿�֮�䣩
> - Ӧ�ò㣺HTTP Э�飨������������ݽ��и�ʽ�ϵ����廯�涨��ͨ�׵�������Լ�������������ʲô��ʽ��

### 1.4.3 HTTP����

��������������������ʱ�����������һ����Ϣ���У������ġ�

�������������������Ӧʱ�������Ϣ���У���Ӧ���ġ�

��HTTP ���ĸ�ʽ��

- ��**������**��

  ![image-20220717123316141](mark-img/image-20220717123316141.png)

  - **�����У�**HTTP �����еĵ�һ�����ݣ������а����������ݣ��ֱ��� `GET[����ʽ]` `/[����URL·��]` `HTTP/1.1[HTTPЭ�鼰�汾]`������ʽ������,��õ��� GET �� POST

  - **����ͷ��**��ʽΪ `key:value` ��ʽ������ͷ�л�������ɸ����ԣ������� HTTP ����ͷ�У�

    ```
    Host: ��ʾ�����������
    User-Agent: ������汾������Chrome������ı�ʶ����Mozilla/5.0 ...Chrome/79��IE������ı�ʶ����Mozilla/5.0 (Windows NT ...)like Gecko
    Accept����ʾ������ܽ��յ���Դ���ͣ���text/*��image/*��*/*��ʾ����
    Accept-Language����ʾ�����ƫ�õ����ԣ����������Ծݴ˷��ز�ͬ���Ե���ҳ
    Accept-Encoding����ʾ���������֧�ֵ�ѹ�����ͣ�����gzip��deflate��
    ```

    ����ͷ���ݵ����ã�

    ����˿��Ը�������ͷ�е���������ȡ�ͻ��˵������Ϣ��������Щ��Ϣ����˾Ϳ��Դ���ͬ��ҵ�����󣬱��磺

    * ��ͬ��������� HTML �� CSS ��ǩ�Ľ�����в�һ�£����Ծͻᵼ����ͬ�Ĵ����ڲ�ͬ�����������ֲ�ͬ��Ч��
    * ����˸��ݿͻ�������ͷ�е����ݻ�ȡ���ͻ��˵���������ͣ��Ϳ��Ը��ݲ�ͬ����������ò�ͬ�Ĵ������ﵽһ�µ�Ч��
    * ��������ǳ�˵���������������

  - **�����壺**POST ��������һ���֣��洢���������GET ����û�������壬GET �����������������е�����URL·���У�

    ![image-20220717115935153](mark-img/image-20220717115935153.png)

    ����ͼ���߿�����ݾ�������������ݣ������������ͷ֮������һ�����и�������ʱ��������͵��� POST ����Ϊʲô����ʹ�� GET �أ���ʱ����Ҫ�ع� GET �� POST ��������֮��������ˣ�

    * GET ����������������У���С�����ƣ�û�������壬POST �����������������
    * GET ���������С�����ƣ�POST û��

- ��**��Ӧ����**��

  ![image-20220717123336777](mark-img/image-20220717123336777.png)

  - **��Ӧ�У�**��Ӧ���ݵĵ�һ�У���Ӧ�а����������ݣ��ֱ��� `HTTP/1.1[HTTPЭ�鼰�汾]` `200[��Ӧ״̬��]` `ok[״̬�������]`

  - **��Ӧͷ��**��ʽΪ `key-value` ��ʽ����Ӧͷ�л�������ɸ����ԣ������� HTTP ��Ӧͷ�У�

    ```
    Content-Type����ʾ����Ӧ���ݵ����ͣ�����text/html��image/jpeg��
    Content-Length����ʾ����Ӧ���ݵĳ��ȣ��ֽ�������
    Content-Encoding����ʾ����Ӧѹ���㷨������gzip��
    Cache-Control��ָʾ�ͻ���Ӧ��λ��棬����max-age=300��ʾ������໺��300��
    ```

  - **��Ӧ�壺**���һ���֣������Ӧ���ݣ���ͼ�� `<html>...</html>` �ⲿ�����ݾ�����Ӧ�壬������Ӧͷ֮����һ�����и���

����Ӧ״̬�롿

������Ӧ״̬�룬��������Ҫ��ʶ����״̬�룬����ĵȺ����õ�����ȥ����:

* 200 ok �ͻ�������ɹ�
* 404 Not Found ������Դ������
* 500 Internal Server Error ����˷�������Ԥ�ڵĴ���

## 1.5 HTTP����

### 1.5.1 ���õ�HTTP����

�������������ʱ���õķ���������Ӧ�޹أ�

GET��POST��PUT��DELETE������

�������������Դ��ȡʲô���Ĳ����ģ��и��Ե����塣

### 1.5.2 HTTP��������

GET����ȡ����

POST����������

PUT����������

DELETE��ɾ������

��Щ������Ȼ�и��Ե����壬���ǲ�����ǿ�Ƶģ�

### 1.5.3 RESTful�ӿ����

һ�ֽӿ���Ʒ�񣬳������ HTTP ���������塣

������һ��Ľӿ���ơ�

ͨ���û� ID ��ȡ������Ϣ��ʹ�� GET ��ʽ��

- https://www.zjr.com/api/user/getUser?id=1

ע�����û���ʹ�� POST ��ʽ��

- https://www.zjr.com/api/user/addUser
- ��������������

�޸��û���Ϣ��ʹ�� POST ��ʽ��

- https://www.zjr.com/api/user/modifyUser
- ��������������

ɾ���û���ʹ�� POST ��ʽ��

- https://www.zjr.com/api/user/deleteUser
- ��������������

��RESTful �ӿ���ơ�

��������� HTTP ���������壩

ͨ���û� ID ��ȡ������Ϣ��ʹ�� GET ��ʽ��

- https://www.zjr.com/api/user?id=1

ע�����û���ʹ�� POST ��ʽ��

- https://www.zjr.com/api/user
- ��������������

�޸��û���Ϣ��ʹ�� PUT ��ʽ��

- https://www.zjr.com/api/user
- ��������������

ɾ���û���ʹ�� DELETE ��ʽ��

- https://www.zjr.com/api/user
- ��������������

## 1.6 GET��POST�����ĶԱ�

### 1.6.1 ����

GET����ȡ����

POST����������

### 1.6.2 ��������

GET ͨ����ַ����������Я�����ݣ���Я�����������͵�ַ�����й�ϵ��һ����༸ K��

POST �ȿ���ͨ����ַ����������Я�����ݣ�һ�㲻����ô������������ͨ��������Я�����ݡ�

GET һ��������������ϴ��ļ���POST ���������ϴ��ļ���

> �����ϴ��ļ���GET �� URL ��Я�����ݣ��������Ҫ�ϴ��ļ�����Ҫ���ļ�����ĳ�ֱ��루��ͼƬ���� Base64 ��ʽ���룩��һ���ַ���Ȼ����ӵ� URL �У��Ϳ���ʵ���ļ��ϴ����������� GET �� URL ���г������Ƶģ��������ַ�ʽֻ���ϴ��ǳ�С���ļ������ǻ���Ҳ������������������ POST ��ͬ��POST ���������� body �н���Я��������Я�������ݣ����һ���ֱ��Я���ļ��������ƣ��������ǿ��������ϴ��ļ��ģ�����ֵ��ע����ǣ���ʵ GET Ҳ������ body��ֻҪ����ǿ�н������ü��ɣ�������������ԭ�еĹ���һ�㲻����������

### 1.6.3 ����

GET ���Ա����棬POST ���ᱻ���档

### 1.6.4 ��ȫ��

GET �� POST ������ȫ������ GET ������ֱ���ڵ�ַ������ʾ���һ��ᱻ������������Ը�����ȫ��

## 1.7 HTTP״̬��

HTTP ״̬�룺���������������Ĵ��������Ƿ��������صġ�

HTTP ״̬������壺

100~199�����������Ѿ������գ���Ҫ��������

200~299���ɹ���200��

300~399���ض���

- 301���������ض����ض���ᱻ���棩����ʹ�ã�
- 302����ʱ���ض��򣨻��������ѯ�ʣ�
- 304��û���޸ģ��������ȷ�ϻ����Ƿ񻹿��ã�

400~499���������404��

500~599������������500��

# �������ش洢

## 2.1 ǰ��

**���Ự���١�**

**�Ự��**��������ʷ�������Դʱ���Ự�ͻὨ����ֱ����һ���Ͽ����ӣ��Ự�Ż��������һ�λỰ�п��԰�������������Ӧ��

> ���԰ѻỰ�����΢�����죬���ң��������������������������������ʼ����ʱ�����Ự�� �ͽ����ˣ������������������˳����죬��ô ���Ự�� �Ž�������һ�����죨���Ự�����У����ǿ��Զ�η�����Ϣ�������󡱣��ͽ�����Ϣ������Ӧ������

> һ����������ܴ��ڶ���Ự�����磺��������˶����ǩ��ÿ����ǩ���ǲ�ͬ����վ����ô��Щ��ͬ����վ�����ӵķ�����Ҳ�ǲ�ͬ�ģ���ô�ͻὨ����ͬ�ĻỰ��

**�Ự���٣�**һ��ά�������״̬�ķ�������������Ҫʶ���������Ƿ�������ͬһ��������Ա���ͬһ�λỰ�Ķ������乲�����ݡ�

> ���ͣ�������ͷ�����֮��ʹ�õ��� HTTP Э�����������ݴ��䣬���� HTTP Э������״̬�ģ�����˵ÿһ�ε� HTTP �����Ǳ˴˶����ģ���������ͬһ����������Ķ�����󣬷�����Ҳ������֪�����Ƿ�����ͬһ���������HTTP Э����Ƴ���״̬��Ŀ������ÿ������֮���໥����������Ӱ�죬�����㹻��ȫ���������������Ҳ���������⣬���ڷ�����ʶ�����Ƿ�����ͬһ����������ԻỰ�Ͳ���ʵ�ָ��٣��Ựһ�����ܸ�����๦�ܾ��޷�ʵ�֣����磺
>
> - ��ѡ ����ס�ҡ� ��ť������ͬһ������ĵ�¼���󣬿����Զ���¼������˺�������֤��
> - ����������һ����֤��ͼƬ����������û�������֤��󽫽�����ͻط��������������ж���֤����д�Ƿ���ȷ��
> - ��¼���ڡ�
> - ����

��ô�����ʵ�ֻỰ���ټ�����? �����ʵ�ַ�ʽ�У�

- �ͻ��˻Ự���ټ�����Cookie
- ����˻Ự���ټ�����Session
- ���ƻỰ���ټ�����Token

**��Cookie��**

Cookie���ͻ��˻Ự���ټ����������ݱ��浽�ͻ��ˣ�����������Ժ�ÿ�����󶼻��Զ�Я�� Cookie ���ݽ��з������ķ��ʡ�

**ԭ��**��������Ӧ���������ʱ�������� HTTP ��Ӧͷ������һ��ͷ��Ϣ��`set-cookie`�����ͷ��Ϣ����͸��� Cookie ���ݣ���ֵ�ԣ������磺`Set-Cookie:username=jerry`��ʵ���ϸ�ͷ��Ϣ�����ݲ�ֻ�� Cookie ���ݵļ�ֵ�ԣ���������� Cookie �����Чʱ�䡢��������URL�ȣ����������ȡ����Ӧ����󣬴���Ӧͷ�оͿ��Ի�ȡ�� `Set-Cookie` ��Ӧ��ֵ `username=jerry`���������ݴ洢����������ڴ��У�������´η��������ͬһ������ʱ����������Զ�������ͷ�����һ��ͷ��Ϣ��`Cookie:username=jerry` ���͸������������������õ��� Cookie ��ֵ����ô�Ự�ͳɹ�ʵ�ָ����ˣ����磺�� Cookie �д���û���¼����Чƾ֤����ô��һ�������¼ʱ���Ϳ�����֤���ƾ֤ʵ�����ܵ�¼�ˡ���

> ˵����
>
> 1. ��������������������Ͷ�� Cookie����������ᱣ��������������һ�����������ʱ��������һ���͸���������
> 2. Ĭ������£�Cookie �洢��������ڴ��У���������رգ��ڴ��ͷţ��� Cookie �����٣���������������ڷ��� Cookie ʱΪ�������˴��ʱ�䣬��ô������ͻ���ݴ��ʱ�佫�� Cookie ���浽Ӳ���ϡ�

**��Session��**

Session������˻Ự���ټ����������ݱ��浽����ˣ���������

- Session �Ǵ洢�ڷ���˶� Cookie �Ǵ洢�ڿͻ��ˣ��������
- �洢�ڿͻ��˵��������ױ���ȡ�ͽػ񣬴��ںܶ಻��ȫ�����أ�������Ϣǧ������ Cookie �洢
- �洢�ڷ���˵���������ڿͻ�����˵�͸���ȫ

**ԭ��**����Ҫ֪����Session �ǻ��� Cookie ʵ�ֵģ�ֻ���� �����˸��䡱������ԭ���ǣ�������������һ�� Session����� Session �����˻Ự��Ϣ�����磺�û���¼ƾ֤����ͬʱ��� Session ����һ���Լ�Ψһ�� id��һ�����ӵĹ�ϣ�ַ�����������������Ӧ��Ϣ�������ʱ������������ HTTP ��Ӧͷ������һ�� `set-cookie` ͷ��Ϣ����� Cookie �����ݾ��� Session �� id���� `Set-Cookie:JESSIONID=XXX...`����������յ���Ӧ��ͱ������ Cookie��Ȼ������һ������ͬһ������ʱЯ����� Cookie �� `Cookie:JESSIONID=XXX...`�����������յ���� Cookie ��ʶ������Ϊ `JESSIONID` �� Cookie���ͻ�����ֵ `XXX...`��id��ȥƥ��������е� Session id�����վ��õ��˾���� Session ֵ����ô�Ự�ͳɹ�ʵ�ָ����ˣ�

> ˵����
>
> 1. Session Ĭ���Ǵ洢�ڷ��������ڴ��еģ������������������ڴ��е������Ѿ����ͷ��ˣ�Session Ҳ�ͱ������ˣ����ǿ��Խ����������е� ��Session �ۻ��� �������� Session �Զ����ڷ�����Ӳ���У�һ������ı��� Session ���ļ������ڷ���������֮������ ��Session ��� �������Զ���ԭ֮ǰ�� Session��֮ǰ������ļ��ڻ��ᱻɾ��/���£�
> 2. Session Ĭ����һ���Զ�����ʱ�䣨һ���� 30 ���ӣ��������Ҳ�����Լ�ָ�� Session ������ʱ�䣬�����Ǹ��ݾ���ҵ�������� Session�����磺���û��˳���¼���ɾ�����û��йص� Session����
> 3. ��Ϊ Session �ǻ��� Cookie ʵ�ֵģ����Լ��� Session �� Cookie Ҫ��ȫ�ö࣬�����ɲ��ܰ�������Ϣ���� Session �У����磺�û����룩

**��Token��**

Token�����ƻỰ���ټ�����

׼ȷ��˵Ӧ�ýУ�JWT ��֤���ƣ������ǻỰ���ٻ���Ҳ�У���JWT��Ӣ��ȫ�ƣ�JSON Web Token����Ŀǰ�����еĿ�����֤���������

Ϊʲô���� Cookie �� Session ����Ҫ JWT �أ�

- Cookie Ĭ�ϲ�֧�ֿ�����ʣ�ʲô�ǿ�����潲�������Ե��漰��ǰ�˿��������˵�ʱ����Ҫ���ܶ��������ã��ǳ��鷳������ Session Ҳ�ǻ��� Cookie �ģ����� Session Ҳ����ͬ�������⣡
- ������ Cookie ���� Session �����㰲ȫ��JWT ���ǰ����Ҫ��ȫ�Ķ࣡���ⲻ������Դ洢���룩

JWT ԭ��

<img src="mark-img/image-20230127182050299.png" alt="image-20230127182050299" style="width:70%;" />

> ˵���������Ҳ�ǿ������� Token ���ʱ��ģ�ͬʱҲ���Խ���һЩ����ʵ�� ��Token �ۻ��� �� ��Token �����

**�����ش洢��**

�ո����������� Cookie Session Token ���Ƿ������������ǵģ���ʵǰ���Լ�Ҳ�ṩ����Ӧ�� API ���Բ��� Cookie Session Token��

> ˵����Session �ڿͻ��ˣ����������ʵ�����Ͼ���һ�� Cookie������������˵��ǰ�˲��� Session ʵ�ʻ��ǲ��� Cookie������ Token ͨ���Ǵ洢��������� LocalStorage �� SessionStorage �У�������˵�Ĳ��� Token ʵ�ʲ������� LocalStorage �� SessionStorage��LocalStorage��SessionStorage ����ѧϰ��

���棬�Ϳ�ʼѧϰ�ͻ��ˣ���������� Cookie �� Storage �Ĳ����ɣ�

## 2.2 Cookie

### 2.2.1 ��ʼCookie

Cookie ��ʲô��

Cookie ȫ�� HTTP Cookie����� Cookie����������洢���ݵ�һ�ַ�ʽ����Ϊ�洢���û����أ������Ǵ洢�ڷ������ϣ��Ǳ��ش洢��

ͬʱ��Cookie һ����Զ������������ÿ�������͵��������ˡ�

��β鿴 Cookie��

F12 �����������̨��ѡ�� Application��Ӧ�ó����е� Storage���洢���е� Cookies��������ܿ�����ǰҳ��� Cookie �ˡ�

Cookie һ�㶼���� ��ַ �� IP ����ʽ���б�ʶ��

- �����ÿ��ҳ�涼���и��Ե� Cookie �б��б��п����ж�� Cookie ���Ϊͬһ��ҳ����������˶����ͬ�ķ���������ô�ͻ��յ�������������͹����� Cookie����ÿ�� Cookie ���л���ж������ݡ�

ÿ�� Cookie �У��� `key=value` ����ʽ�洢һϵ�м�¼����¼���¼֮���� `;` + ` ` ������

����������������������ʱ������ͬһ���� Cookie��

<img src="mark-img/image-20220717180630574.png" alt="image-20220717180630574" style="width:80%;" />

### 2.2.2 Cookie�Ļ����÷�

��ȡ Cookie��`document.cookie`������һ���� ����ֵ�ԡ� ���ɵ��ַ���������ֵ�ԡ� ֮���� ��һ���ֺ� + һ���ո� ��������

ע�⣺��ȡʱֻ��һ���Զ�ȡȫ���� Cookie������ͨ�� ������ ��������ĳ�� ����ֵ�ԡ���

д�� Cookie��`document.cookie = 'username=jerry'`��

ע�⣺����ͬʱ���ö�� Cookie `document.cookie = 'username=jerry; age=18'`��ֻ��һ��һ�����á�

<img src="mark-img/image-20230127202642005.png" alt="image-20230127202642005" style="width:90%;" />

<img src="mark-img/image-20230127202459587.png" alt="image-20230127202459587" style="width:90%;" />

<img src="mark-img/image-20230127202737276.png" alt="image-20230127202737276" style="width:90%;" />

<img src="mark-img/image-20230127202825706.png" alt="image-20230127202825706" style="width:90%;" />

### 2.2.3 Cookie������

- Cookie �����ƣ�Name�������������ԣ�

- Cookei ��ֵ��Value�������������ԣ�

> Cookie �����ƻ�ֵ���������Ӣ����ĸ����д��ʱ��Ҫʹ�� encodeURIComponent() ���룬��ȡʱʹ�� decodeURIComponent() ���룺
>
> ```javascript
> document.cookie = `username=${encodeURIComponent('����')}`;
> document.cookie = `${encodeURIComponent('�û���')}=zhangsan`;
> // һ������ʹ��Ӣ����ĸ����Ҫʹ�����ģ�ֵ����ʹ�����ģ�����Ҫ���루��������룩
> ```

- ʧЧ�����ڣ�ʱ�䣺����ʧЧ�� Cookie���ᱻ�����������Ǳ������ԣ���Ĭ��ֵ��

> ���û������ʧЧʱ�䣬��ô������ Cookie ��Ϊ���Ự Cookie������ʱ��Ĭ��ֵΪ Session��ע����� Session ������ ���Ự�� ����˼���ͷ������Ǹ� Session �޹أ������������ڴ��У����Ự������Ҳ����������ر�ʱ��Cookie ����ʧ��
>
> <img src="mark-img/image-20230127203620505.png" alt="image-20230127203620505" style="width:80%;" />
>
> �볤ʱ����ڣ����� Expires �� Max-Age��
>
> ��Expires����ֵΪ Date ����
>
> ```javascript
> document.cookie = `username=alex; expires=${new Date('2050-1-01 00:00:00')}`;
> ```
>
> ��Max-Age����ֵΪ���֣���ʾ��ǰʱ�� + ���������ڣ���λ����
>
> ```javascript
> // 5 ��
> document.cookie = 'username=alex; max-age=5';
> // 30 ��
> document.cookie = `username=alex; max-age=${24 * 3600 * 30}`;
> // 0������ɾ��
> documetn.cookie = 'username=alex; max-age=0';
> // ����������ɾ��
> documetn.cookie = 'username=alex; max-age=-1';
> 
> // ͬʱ�� Max-Age �� Expires��Max-Age ���ȼ����߻Ḳ�� Expires��
> ```

- Domain ���޶���ͬһվ���²�ͬ�������� Cookie �ķ�Χ���Ǳ������ԣ���Ĭ��ֵ��Ĭ��ֵΪ��ǰ��

> ����ͨ�� Domain ����ͬһվ���²�ͬ������ Cookie �ķ��ʷ�Χ��
>
> ���磺`www.bilibili.com` �� `m.bilibili.com` �ֱ���Bվ��PC�˺��ƶ��ˣ�������ֻ�ܸ��Է��ʵ�������������������� Domain ��Ӧ�� Cookie��
>
> - ������� Bվ PC�˵� Cookie��Ȼ���Լ����һ�� Cookie����������Զ������ǰ� Domain ����Ϊ `www.bilibili.com`
>
> <img src="mark-img/image-20230127211643060.png" alt="image-20230127211643060" style="width:80%;" />
>
> - ������� Bվ �ƶ��˵� Cookie��Ȼ���Լ����һ�� Cookie����������Զ������ǰ� Domain ����Ϊ `m.bilibili.com`
>
> <img src="mark-img/image-20230127211317239.png" alt="image-20230127211317239" style="width:80%;" />
>
> - ���������� PC ��ֻ�ܷ��� Domain Ϊ `www.bilibili.com` �� Cookie���������ƶ���ֻ�ܷ��� Domain Ϊ `m.bilibili.com` �� Cookie
>
> <img src="mark-img/image-20230127211909818.png" alt="image-20230127211909818" style="width:80%;" />
>
> <img src="mark-img/image-20230127211950705.png" alt="image-20230127211950705" style="width:80%;" />
>
> 
>
> - ������ PC �����һ�� Domain Ϊ `.bilibili.com` ���������� PC ���� �ƶ��� ���ܷ��ʵ�����Ϊ�������ǵĸ�����
>
> <img src="mark-img/image-20230127212308350.png" alt="image-20230127212308350" style="width:80%;" />
>
> <img src="mark-img/image-20230127212352150.png" alt="image-20230127212352150" style="width:80%;" />
>
> <img src="mark-img/image-20230127212458776.png" alt="image-20230127212458776" style="width:80%;" />
>
> - ��Ȼ�����ƶ�������� Domain Ϊ `www.bilibili.com` �� Cookie Ҳ�ǿ��Եģ�����������ƶ���Ҳ���ʲ��ˣ����� PC ���ܷ���
>
> <img src="mark-img/image-20230127213301897.png" alt="image-20230127213301897" style="width:80%;" />
>
> <img src="mark-img/image-20230127213346726.png" alt="image-20230127213346726" style="width:80%;" />
>
> <img src="mark-img/image-20230127213654822.png" alt="image-20230127213654822" style="width:80%;" />
>
> <img src="mark-img/image-20230127213720876.png" alt="image-20230127213720876" style="width:80%;" />
>
> 
>
> > ʵ���ϣ���������Ǹ��� Cookie �� Domain �����ǻ��ֳ� Cookie �б�Ȼ��ŵ������߹����еģ������߹��߸�����򿪵Ĵ��ڵ����������ָ��������ܷ��ʵ� Cookie�������ͱȽ����������濪���߲鿴��
>
> ����� Domain����Ĭ��ֵΪ��ǰ������
>
> ```javascript
> // ע�⣺����ֻ�ܶ�д��ǰ������ Cookie���޷���д������� Cookie       
> // ���磺��ǰ������ www.zjr.com����ô������ .zjr.com
> document.cookie='username=alex; domain=www.zjr.com';
> document.cookie='username=alex; domain=.zjr.com';
> ```

- Path ·�����޶���ͬһվ����ͬһ�����²�ͬ·������ Cookie �ķ�Χ���Ǳ������ԣ���Ĭ��ֵ��

>����ͨ�� Path ����ͬһվ����ͬһ�����²�ͬ·������ Cookie �ķ�Χ��
>
>���磺www.zjr.com �� www.zjr.com/course �� www.zjr.com/course/list ��ͬһ�����Ĳ�ͬ·��������Щ·���µ�ҳ��ֻ�ܷ��ʵ��������·����·�� Path �Ķ�Ӧ�� Cookie��
>
>����� Path����Ĭ��ֵΪ��·�� `/`��
>
>```javascript
>// ע�⣺��������һ��·���¶�д��һ��·���� Path
>// ��ǰ�� www.zjr.com
>document.cookie = 'username=alex; path=/';	// ��·����ȫ�����ܷ���
>// ��ǰ�� www.zjr.com/course;
>document.cookie = 'username=alex; path=/';	// ��·����ȫ�����ܷ���
>document.cookie = 'username=alex; path=/course';	// /course ·������ܷ���
>// ��ǰ�� www.zjr.com/course/list
>document.cookie = 'username=alex; path=/';	// ��·����ȫ�����ܷ���
>document.cookie = 'username=alex; path=/course';	// /course ·������ܷ���
>document.cookie = 'username=alex; path=/course/list';	// /course/list ·������ܷ���
>```

> ע�⣺ֻ�е� Name��Domain��Path �� 3 �����Զ�ͬʱ��ȵ�ʱ�򣬲���ͬһ�� Dookie��

- HttpOnly�������� HttpOnly ���Ե� Cookie ����ͨ�� JS ȥ���ʣ�Ϊ�˰�ȫ�ԣ�
- Secure ��ȫ��־���޶���ֻ����ʹ���� https ������ http ������²ſ��Է��͸������

### 2.2.4 Cookieע������

- ǰ��˶�����д��ͻ�ȡ Cookie
  - ǰ�˿������� Cookie ��ͨ�������͸���������˽��ж�ȡ
  - ��˿������� Cookie ��ͨ����Ӧ���ظ��������Ȼ����������д洢
- Cookie ����������
  - ÿ�����µ� Cookie ���������ƣ���� < 50��
- Cookie �д�С���� 
  - ÿ�� Cookie �Ĵ洢������С�����ֻ�� 4KB ����

## 2.3 LocalStorage

### 2.3.1 ��ʼlocalStorage

��localStrorage ��ʲô��

localStrorage Ҳ��һ��������洢���ݵķ�ʽ�����ش洢������ֻ�Ǵ洢�ڱ��أ����ᷢ�͵��������ˡ�

�������Ϊ������Դ���һ�� ��С�����ݿ⡱

���������µ� localStrorage �ܴ�С�����ơ�

localStrorage �� key-value ��ʽ��

����������в��� localStrorage��

<img src="mark-img/image-20230127215003828.png" alt="image-20230127215003828" style="width:90%;" />

�������÷���

```java
// �鿴 localStrorage 
console.log(localStrorage);
// ������
localStorage.setItem('username', 'alex');
localStorage.setItem('username', 'zs');
localStorage.setItem('age', 18);
localStorage.setItem('sex', 'male');
// ��ȡ����
console.log(localStrorage.length);
// ��ȡ����
console.log(localStorage.getItem('username'));
console.log(localStorage.getItem('name'));	// ��ȡ�����ڵĻ᷵�� null
// ɾ������
localStorage.removeItem('age');
localStorage.removeItem('name');	// ɾ�������ڵ����ݲ��ᱨ��
// �������
localStorage.clear();
```

ʹ�� localStorage ʵ���Զ���书�ܣ�

�Ѿ���¼�����û�����һ�ε�¼ʱ�Զ�����û�����

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>��ʶ localStorage</title>
  </head>
  <body>
    <form id="login" action="https://www.imooc.com" method="post">
      <input type="text" name="username" />
      <input type="password" name="password" />
      <input type="submit" id="btn" value="��¼" />
    </form>

    <script>
      // ʹ�� localStorage ʵ���Զ����
      const loginForm = document.getElementById('login');
      const btn = document.getElementById('btn');

      const username = localStorage.getItem('username');
      if (username) {
        loginForm.username.value = username;
      }

      btn.addEventListener(
        'click',
        e => {
          // ��ֹĬ����Ϊ���Ȳ��ύ��
          e.preventDefault();
          // �û������������У�顭��
          // У��ͨ�������û������� localStorage
          localStorage.setItem('username', loginForm.username.value);
          // �ύ��
          loginForm.submit();
        },
        false
      );
    </script>
  </body>
</html>

```

### 2.3.2 localStorage��ע������

- localStorage �Ĵ洢����
  - localStorage �ǳ־û��ı��ش洢�������ֶ����������ͨ�� JS ɾ�������������������棩��������������Զ������ڵ�
- localStorage ����ֵ������
  - �����ֵ������ֻ�����ַ����������ַ�������Ҳ����תΪ�ַ��������ٴ��ȥ 
- ��ͬ�������ܷ��� localStorage 
  - ���ܣ�
- localStorage �ļ�����
  - IE7 �����°汾��֧�֡�

## 2.4 SessionStorage

sessionStorage ���Ự����������ر����������ʱ��sessionStorage �е����ݻᱻ��գ������÷��� localStorage һ�¡�

<img src="mark-img/image-20230127215308863.png" alt="image-20230127215308863" style="width:90%;" />

# ����Ajax

## 3.1 ��ʼ Ajax

### 3.1.1 Ajax ��ʲô

AJAX = Asynchronous JavaScript and XML���첽�� JavaScript �� XML��

AJAX �����µı�����ԣ�����һ��ʹ�����б�׼���·�����

AJAX �����ŵ����ڲ����¼�������ҳ�������£�������������������ݲ����²�����ҳ���ݡ�

Ajax �е��첽�������첽������������������ڵȴ���Ӧ�Ĺ����У�����������ǰҳ�棬������������Լ������顣ֱ���ɹ���ȡ��Ӧ��������ſ�ʼ������Ӧ���ݡ�

ѧϰ Ajax �����ڷ����������£�VSCode ����ʹ�ã�Live Server��

## 3.2 Ajax �Ļ����÷�

### 3.2.1 XMLHttpRequest

Ajax ��Ҫʵ��������������֮����첽ͨ�ţ���Ҫ���� XMLHttpRequest ���캯����

> ֮���Խ� XMLHttpRequest������Ϊ������ǰ�����Ҫ��ͨ�����嶼�� XML�����Ե�ʱ��Ϊ�������ȡ��ʱ�ͼ����� XML�������Ⲣ��������ֻ���� XML ��ʽ�󶨣������� XML Ҳ���� JSON��δ�������������ġ�
>

### 3.2.2 Ajax ��ʹ�ò���

```javascript
// ���� xhr ����
const xhr = new XMLHttpRequest();
// ׼����������׼��������
xhr.open('HTTP����GET/POST/PUT/DELETE', '��ַURL', '�첽����ͬ��true/false');
// �������󣬵��� send()
xhr.send(null);	// GET��POST/PUT/DELETE ��Ҫͨ��������ʽ��
// �����¼���������Ӧ
// ����ȡ����Ӧ�󣬻ᴥ�� xhr ����� readystatechange �¼��������ڸ��¼��Ļص������ж���Ӧ���д���
xhr.onreadystatechange = () => {
    /*
    readystatechange �¼����� readyState ���״̬�ı仯
    ����ֵ�� 0~4��һ�� 5 ��״̬
    0��δ��ʼ������δ���� open()
    1���������Ѿ����� open()������δ���� send()
    2�����͡��Ѿ����� send()������δ���յ���Ӧ
    3�����ա��Ѿ����յ�������Ӧ���ݣ���û��ȫ�������꣩
    4����ɡ��Ѿ����յ�ȫ����Ӧ���ݣ������Ѿ��������������ʹ����
    */
    if (xhr.readyState != 4) {
        return;
    }
    // ��ȡ����Ӧ����Ӧ�����ݻ��Զ���䵽 xhr �����������
    // xhr.status��HTTP CODE����HTTP 200��404
    // xhr.statusText��HTTP ״̬˵������OK��Not Found
    // xhr.responseText����Ӧ���ݣ��ַ�����ʽ��
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        console.log('����');
        console.log(xhr.statusText);
        // ��Ӧ����
        console.log(xhr.responseText);
    } else {
        console.log('����');
        console.log(xhr.statusText);
    }
};
```

ע�����

- readystatechange �¼�Ҳ������� addEventListener ʹ�ã�����Ҫע�⣬IE6~IE8 ��֧�� addEventListener

```javascript
const xhr = new XMLHttpRequest();

xhr.open('HTTP����GET/POST/PUT/DELETE', '��ַURL', '�첽����ͬ��true/false');

xhr.send(null);

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState != 4) {
        return;
    }
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        console.log('����');
        console.log(xhr.statusText);
        console.log(xhr.responseText);
    } else {
        console.log('����');
        console.log(xhr.statusText);
    }
}, false);
```

- Ϊ�˼����ԣ�readystatechange �в�Ҫʹ�� this ��ָ xhr������ֱ��ʹ�� xhr ���ɡ�
- Ϊ�˼����ԣ�readystatechange �¼���÷��� open ֮ǰ������

```javascript
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if (xhr.readyState != 4) {
        return;
    }
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        console.log('����');
        console.log(xhr.statusText);
        console.log(xhr.responseText);
    } else {
        console.log('����');
        console.log(xhr.statusText);
    }
};
xhr.open('HTTP����GET/POST/PUT/DELETE', '��ַURL', '�첽����ͬ��true/false');
xhr.send(null);	
```

��ʹ�� Ajax ���ǰ���ͨ�š�

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <title>Ajax �Ļ����÷�</title>
</head>

<body>
    <script>
        const url = 'https://www.imooc.com/api/http/search/suggest?words=js';
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return;
            }
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                console.log(xhr.responseText);
                console.log(typeof xhr.responseText);
            }
        };
        xhr.open('GET', url, true);
        xhr.send(null);
    </script>
</body>

</html>
```

## 3.3 GET����

### 3.3.1 Я������

```javascript
let name = 'zjr';
let age = 18;
const url = 'https://www.jerry.com/api/user?' + 'name=' + name + '&age=' + age;
const xhr = new XMLHttpRequest();
//......
xhr.open('GET', url, true);
xhr.send(null);

// ע�⣺�� Ajax ���� Get �����������ַ���� URL �ǲ��ᱻ�޸ĵģ�Get ���������� URL �� HTTP �����е� URL ��
```

### 3.3.2 ���ݱ���

��Ӣ���ַ��ڷ���ǰ��Ҫ���룺

```javascript
let name = '�ܼ���';
let age = 18;
const __url = 'https://www.jerry.com/api/user?' + 'name=' + name + '&age=' + age;
const url = encodeURIComponent(__url);
const xhr = new XMLHttpRequest();
//......
xhr.open('GET', url, true);
xhr.send(null);
```

## 3.4 POST����

### 3.4.1 Я������

```javascript
let id = 01321;
let name = 'zjr';
let age = 18;
// POST ����������ͷ�д�������Ҳ�������������д�������
const url = 'https://www.jerry.com/api/user?' + 'id=' + id;
const xhr = new XMLHttpRequest();
//......
xhr.open('POST', url, true);
// ���������д������ݣ�ֱ��д�� send() �Ĳ���λ��
// һ�����ַ���������һ��ʹ�� k=v&k=v ���ַ�����ʽ
// ��Ȼ��Ŀǰʹ�����Ļ���ʹ�� JSON ��ʽ
xhr.send('name=' + name + '&age=' + age);
```

### 3.4.2 ���ݱ���

```javascript
let id = 01321;
let name = 'zjr';
let age = 18;
// POST ����������ͷ�д�������Ҳ�������������д�������
const __url = 'https://www.jerry.com/api/user?' + 'id=' + id;
const url = encodeURIComponent(__url);
const xhr = new XMLHttpRequest();
//......
xhr.open('POST', url, true);
// ���������д������ݣ�ֱ��д�� send() �Ĳ���λ��
// һ�����ַ���������һ��ʹ�� k=v&k=v ���ַ�����ʽ
// ��Ȼ��Ŀǰʹ�����Ļ���ʹ�� JSON ��ʽ
const __payload = 'name=' + name + '&age=' + age;
const payload = encodeURIComponent(__payload);
xhr.send(payload);
```

## 3.5 JSON

### 3.5.1 ��ʼJSON

JSON��JavaScript Object Notation, JS������ף���һ�������������ݽ�����ʽ�������� ECMAScript��European Computer Manufacturers Association, ŷ�޼����Э���ƶ��� js �淶����һ���Ӽ���������ȫ�����ڱ�����Ե��ı���ʽ���洢�ͱ�ʾ���ݡ����������Ĳ�νṹʹ�� JSON ��Ϊ��������ݽ������ԡ� �������Ķ��ͱ�д��ͬʱҲ���ڻ������������ɣ�����Ч���������紫��Ч�ʡ�

֮ǰ���õ�ǰ������ݽ�����ʽ�� XML��Ŀǰ���� JSON��

JSON ������һ�ֱ�ʾ��ʽ����ȥ������һ���ַ������� JS �������Զ��� Ajax ���� JS ��������Ƿǳ�����ġ�

JSON �� 3 ����ʽ��ÿ����ʽ��д������ JS �е��������ͷǳ��񣬿������ɵĺ� JS �е��������ͻ���ת����

JS ���� ����> JSON ����> Java/PHP/Pyhton������ JSON �������߽����ɶ�Ӧ���ԵĶ���

Java/PHP/Pyhton ���� ����> JSON ����> JS ����

### 3.5.2 JSON��3����ʽ

> JSON ��������ע�ͣ�JSON �ַ����� `""`�������� `''`��JSON û�� undefined ֵ��

����ֵ��ʽ��

��Ӧ�� JS ���������ͣ�undefined ���⣩�����֡��ַ���������ֵ��null

```json
24
```

��������ʽ��

��Ӧ JS ����JSON ���������������ַ�����

```json
{
    "name": "�ܼ���",
    "age": 18,
    "hobby": ["���", "��Ӱ", "���", "����"],
    "family": {
        "father": "zyj",
        "mother": "glp"
    }
}
```

��������ʽ��

��Ӧ JS ���飨������ʽһ��������ʾһ��ʵ������ݣ���������һ��������ʾ���ʵ������ݣ�

```json
[
    {
        "id": 01,
        "username": "����",
        "readme": "�����ѧҽѧ��ʿ���ڿ�����ҽʦ",
        "day": ["��һ", "����"]
    },
    {
        "id": 02,
        "username": "����",
        "readme": "����Э��ҽѧԺ��ʿ���������ҽʦ"
        "day": ["��һ", "�ܶ�", "����"]
    }
]
```

### 3.5.3 JSON�ĳ��÷���

- JSON.parse()

JSON.parse()�����Խ� JSON ��ʽ���ַ��������� JS �еĶ�Ӧֵ��

��һ��Ҫ�ǺϷ��� JSON �ַ���������ᱨ��

 ```javascript
 let obj = JSON.parse(xhr.responseText);
 ```

- JSON.stringify()

JSON.stringify()�����Խ� JS �Ļ����������͡������������ת��Ϊ JSON ��ʽ���ַ�����

```javascript
let usrObj = {
    name: "zhoujirui",
    age: 18
}
__usrObj = JSON.stringify(usrObj);
xhr.send(__usrObj);
```

- ʹ�� JSON.parse() �� JSON.stringify() ��װ localStorage

localStorage ��ֵֻ�����ַ�������Ҫ���������;ͱ���ת�ַ��������� JSON.parse() �� JSON.stringify() ���ܷ����ʵ�֣����Ƿ�װһ��ģ�� storage.js��

```javascript
const set = (key, value) => {
    storage.setItem(key, JSON.stringify(value));
}

const get = (key) => {
    return JSON.parse(storage.getItem(key));
}

const remove = (key) => {
    storage.removeItem(key);
}

const clear = () => {
    storage.clear();
}

export {set, get, remove, clear};

/*
<script type="module">
	import {set, get, remove, clear} from './storage.js';
</script>
*/
```

## 3.6 ����

### 3.6.1 ������ʲô

�ȿ�һ��ͬ������ӣ�

```javascript
// ����һ�������ļ�
const url = './index.html';
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    ...
}
xhr.open('GET', url, true);
xhr.send(null);
/*
<h1>index</h1>
<p>hello</p>
*/
```

����

```javascript
// ����һ����վ�ӿ�
const url = 'https://www.imooc.com';
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    ...
}
xhr.open('GET', url, true);
xhr.send(null);
// ����
```

��ͬ�򣨿��򣩣����������Ϊ����ȫ����������Ӧ���ݣ�

������һ�������������Ҫ�������͵�ǰ���ǲ�ͬ�򣬾ͽп���

�������󣺲�ͬ��֮������󣬾��ǿ�������

### 3.6.2 ʲô�ǲ�ͬ��ʲô��ͬ��

���磺https://www.imooc.com:433/course/list

- https��Э�飩
- www.imooc.com��������
- 443���˿ںţ�
- /course/list��·����

ֻҪ `Э��`��`����`��`�˿ں�` �κ�һ����һ�������ǲ�ͬ��

��·���޹أ�·��һ��һ������ν��

ע�⣺http �� https ��һ����

http ��Ĭ�϶˿�Ϊ 80��https ��Ĭ�϶˿�Ϊ 443�������Ĭ�϶˿ںſ���ʡ�Բ�д��

https://www.imooc.com:443/ �� https://www.imooc.com/ ��һ���ġ�

### 3.6.3 ��������Ϊʲô�ᱻ��ֹ

��ֹ����������ʵ������������һ�ְ�ȫ���ԣ�ͬԴ���ԣ�����������޹أ�

�����ͻ��˻�������������ڿ�����ֹ�����⡣

�����ǣ�������������󣬷�����������Ӧ��������õ���Ӧ������/�����ˣ�

### 3.6.4 ����������

- CORS ������Դ����ʹ����ࣩ

- JSONP���������ã�

> ����ʹ�� CORS ������Դ��������������֧�� CORS �Ļ�����ʹ�� JSONP

**��CORS ������Դ����**

�ղţ��������� 'https://www.imooc.com' ʱ�����˿�������ʧ�ܣ�����֮ǰ��������ĳ�� API �ӿڣ����ǿ�������ɹ�����Ҳ�ǿ������󰡣�Ϊʲô�Ǹ��Ͳ��ᱻ��ֹ�أ�

ԭ���ǣ��� API �ĺ�˴����У����Ѿ������˿�����Դ����

����������� CORS ����ôǰ��������ʱ�����ص���Ӧͷ�л��� `Access-Control-Allow-Origin: *` ��ʾ�������е�������������������* ��ͨ�����û���κ����ơ�

> ֻ���� http://127.0.0.1:5500 ������ʣ�
>
> `Access-Control-Allow-Origin: http://127.0.0.1:5500`

ʹ�� CORS ����Ĺ��̣�

1. �������Ӧͷ����� Access-Control-Allow-Origin ͷ��Ϣ

2. ��������Ϳ�������
3. ��������յ���Ӧ
4. �����ͬ���µ�������������������ʲô���൱��ͨ�����
5. ����ǲ�ͬ���µ�����������ͻ����Ӧͷ�в����Ƿ�����������
6. ����������ͨ�����
7. ���û���ҵ��Ͷ�����Ӧ���

CORS �ļ����ԣ�

IE10 �����ϰ汾���������������ʹ�� CORS��

���������ָ����������ܷ�ʶ�� Access-Control-Allow-Origin ͷ��Ϣ��

**��JSONP��**

JSONP ��ԭ��

`<script>` ��ǩ���򲻻ᱻ�������ֹ

JSONP ��Ҫ�������� script ��ǩ�����ԣ����ؿ����ļ���

**ԭ��ϸ�ڣ�**

ǰ����ǰд��һ��������ʵ�֣������������Ҫ�ܽ��ܲ�������Щ��������������Ҫ���������ݸ����ǵ����ݣ���ǰ������ script ��ǩ�����������������������������ĵ��ã�ͬʱ�����������ǰ�˽��յ���������Ӧ�󣬾��õ��˺����ĵ��ã���ô����������Ҳ���Ժ������ò�������ʽ�õ��ˣ�

**ʹ�� JSONP ʵ�ֿ���**

���ȱ����ڷ�������׼����һ�� JSONP �ӿڣ����磺

`http://127.0.0.1:8080/api/user?callback=test`

```js
// �������˽ӿڴ��루������ Node.js ������
const http = require('http');
const url = require('url');

const app = http.createServer((req, res) => {
  let urlObj = url.parse(req.url, true);

  switch (urlObj.pathname) {
    case '/api/user':
      res.end(`${urlObj.query.callback}({"name": "jerry"})`);
      break;
    default:
      res.end('������Դ�����ڣ�404');
      break;
  }
});

app.listen(8080, () => {
  console.log('localhost:8080');
});
```

```js
// ǰ�˴���
var oscript = document.createElement('script');
// JSONP ���� script ��ǩû�п������Ƶ�����
oscript.src = 'http://127.0.0.1:8080/api/user?callback=test'
document.body.appendChild(oscript);
function test(obj) {
    console.log(obj);
}

// ���������غ����ĵ��ã�test({"name": "jerry"})
// ǰ���Զ�ִ��Ԥ���õĺ�����test()

// JSONP ֻ֧�� GET �������֧�� POST ����
// û�й��� JSONP ���õĴ�����һ���ص���������ʧ�ܣ���������Ծ�Ĭʧ�ܵķ�ʽ���� 
```

## 3.7 XHR

### 3.7.1 XHR������

**responseType �� response ����**

responseType �õ��Ľ��Ĭ��һ�����ַ�����ʽ�������� xhr.open �� xhr.send ֮������ xhr.responseType = 'json'����Ĭ���� xhr.responseType = '' �� xhr.responseType = 'text'����ô������ص��� JSON ��ʽ�����ݣ�����Զ����� JSON.pares() ����ת��Ϊ JS �����������ǾͲ������ֶ�ת���ˣ�ͬʱ��ȡ��ʱ���ֻ������ `xhr.response` ����ȡ������Ҫ��ʹ�� `responseText`��

��Ȼ����û������ responseType ��ʱ�������� responseText �� response ����ȡ�������ݶ����ַ����ģ�����ʵ��������ȫ������ response ������ responseText ��ȡ��Ӧ���ݵģ�ΨһҪע��ľ��� IE10 ��֮��� IE ������ż��� response��

```javascript
const url = 'https://www.imooc.com/api/http/search/suggest?words=js';
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) {
        return;
    }
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        console.log(xhr.response);
    }
};
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.send(null);
```

> ע�⣺һ���Զ�ת�����Ͳ����� JSON.parse(xhr.response) �ˣ�����ᱨ��

**timeout ����**

��������ĳ�ʱʱ�䣨��λ ms����������ʱ����û����Ӧ����ô�ͻᴥ�� timeout �¼������¼��ں��潲����

�����ԣ�IE8 ������֧�֡�

```javascript
xhr.open('GET', url, true);
xhr.timeout = 10000;
xhr.send(null);
```

**withCredentials ����**

ָ��ʹ�� Ajax ��������ʱ�Ƿ�Я�� Cookie��

ʹ�� Ajax ��������Ĭ������£�ͬ��ʱ����Я�� Cookie������ʱ�����ᡣ

�����ԣ�IE10 ������֧�֡�

```javascript
// ���ÿ���ʱЯ�� Cookie
xhr.withCredentials = true;
// ע�⣺���������ˣ�����Ҫ�������˶� Access-Control-Allow-Origin ���õ��������ľ����������������� *
```

### 3.7.2 XHR�ķ���

**abort()����ֹ��ǰ����һ����� abort �¼�һ��ʹ��**

```javascript
xhr.send(null);
xhr.abort();	// abort() һ��Ҫ�� send �����
```

**setRequestHeader()����������ͷ��Ϣ**

`xhr.setRequestHeader(ͷ���ֶε�����, ͷ���ֶε�ֵ);`

ע�⣺�������е�����ͷ��Ϣ�������õģ��󲿷ֶ��������ã�����Ŀǰ�ص��ע��Content-Type

```javascript
xhr.open('POST', url, true);
// ����ͷ�е� Content-Type �ֶ��������߷���������������͵�������ʲô��ʽ
// ע�⣺ֻ��ʹ�� POST ����ʽʱ��Content-Type �����ò������壬GET �������� Content-Type ��û������ģ�

// ���� application/x-www-form-urlencoded ��ʽ
// xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// application/x-www-form-urlencoded ��ʽ���͵�����
// xhr.send('username=alex&age=18');

// ���� application/json ��ʽ
xhr.setRequestHeader('Content-Type', 'application/json');
// application/json ��ʽ���͵�����
xhr.send(JSON.stringify({
    username: 'alex',
    age: 18
}));
```

> ע�⣺application/x-www-form-urlencoded �ķ�ʽ���Ǳ��ύʱ��Ĭ�Ϸ�ʽ��Ҳ����˵���ύ��Ĭ�ϸ�ʽ���� 'username=alex&age=18' ��ʽ���������� Ajax ���� Content-Type �ֶ�Ϊ application/x-www-form-urlencoded��ʵ������αװ form ��������ʽ��

### 3.7.3 XHR���¼�

**load �¼�**

��Ӧ���ݿ���ʱ������������� readystatechange �¼������Ƽ�ʹ�� load �¼���

�����ԣ�IE9 ������

```javascript
const url = 'https://www.imooc.com/api/http/search/suggest?words=js';
const xhr = new XMLHttpRequest();
/*
// ֮ǰ����ʹ�� readystatechange �¼�
xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) {
        return;
    }
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        console.log(xhr.response);
    }
};
*/

/*
// ��������ʹ�� load �¼����Ƽ�����
xhr.onload = () => {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        console.log(xhr.response);
    }
};
*/

// ���ڼ������� IE9 �����ϣ����Ըɴ�ʹ�� addEventListener
xhr.addEventListener('load', () => {
     if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        console.log(xhr.response);
    }
}, false);
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.send(null);
```

**error �¼�**

�������ʱ��������ע�⣺����״̬����󣬶���������ʹ����ˣ������磺���� URL д���ˣ�

�����ԣ�IE10 ������

```javascript
const url = 'https://www.imooc.com/api/http/search/suggest?words=js';
const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => {
     if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        console.log(xhr.response);
    } else {
        console.log('״̬���쳣��')
    }
}, false);
xhr.addEventListener('error', () => {
    console.log('error');
}, false);
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.send(null);
```

**abort �¼�**

���� abort ������ʱ��ͻᴥ����

�����ԣ�IE10 ������

```javascript
const url = 'https://www.imooc.com/api/http/search/suggest?words=js';
const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => {
     if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        console.log(xhr.response);
    }
}, false);
xhr.addEventListener('error', () => {
    console.log('error');
}, false);
xhr.addEventListener('abort', () => {
    console.log('abort');
}, false);
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.send(null);
xhr.abort();
```

**timeout �¼�**

����ʱ�ͻᴥ����

�����ԣ�IE8 ������

```javascript
const url = 'https://www.imooc.com/api/http/search/suggest?words=js';
const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => {
     if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        console.log(xhr.response);
    }
}, false);
xhr.addEventListener('error', () => {
    console.log('error');
}, false);
xhr.addEventListener('abort', () => {
    console.log('abort');
}, false);
xhr.addEventListener('timeout', () => {
    console.log('timeout');
}, false);
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.timeout = 10000;
xhr.send(null);
xhr.abort();
```

## 3.8 FormData

**ʹ�� Ajax �ύ��**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <title>FormData</title>
</head>

<body>
    <!-- ͨ������£�����ֱ��ͨ�� form �ύ���Ļ����ύ��ǰҳ����Զ���ת�� form �� action ��ָ���ҳ�档-->
    <!-- ��������һ������ Ajax �������ύ -->
    <form id="login" action="https://www.imooc.com/api/http/search/suggest?words=js" method="POST">
        <input type="text" name="username" placeholder="�û���" />
        <input type="password" name="password" placeholder="����" />
        <input id="submit" type="submit" value="��¼" />
    </form>

    <script>
        const login = document.getElementById('login');
        // �⹹��ֵ�õ���Ԫ��
        const {
            username,
            password
        } = login;
        const btn = document.getElementById('submit');
        const url = 'https://www.imooc.com/api/http/search/suggest?words=js';

        btn.addEventListener(
            'click',
            e => {
                // ��ֹ���Զ��ύ
                e.preventDefault();

                // ��������֤������У���ʽ�ȣ�����

                // ���� Ajax ����
                const xhr = new XMLHttpRequest();

                xhr.addEventListener(
                    'load',
                    () => {
                        if (
                            (xhr.status >= 200 && xhr.status < 300) ||
                            xhr.status === 304
                        ) {
                            console.log(xhr.response);
                        }
                    },
                    false
                );

                xhr.open('POST', url, true);

                // ��װ����
                const data = `username=${username.value}&password=${password.value}`;
                
                xhr.setRequestHeader(
                    'Content-Type', 'application/x-www-form-urlencoded'
                );

                xhr.send(data);
            },
            false
        );
    </script>
</body>

</html>
```

����ķ�������Ȼ����ʵ���� Ajax �ύ�������Ǵ���һ�����⣬���ǵ�����ǳ����ʱ����װ����ƴ���ַ����Ƚ��鷳����������һ���� FormData �������

ͨ�� HTML ��Ԫ�ش��� FormData ����

`const fd = new FormData(��Ԫ��)`

`xhr.send(fd)`

�����ԣ�IE10 ���Ͽ���֧��

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>FormData</title>
  </head>
  <body>
    <form id="login" action="https://www.imooc.com/api/http/search/suggest?words=js" method="POST">
      <input type="text" name="username" placeholder="�û���" />
      <input type="password" name="password" placeholder="����" />
      <input id="submit" type="submit" value="��¼" />
    </form>

    <script>
      const login = document.getElementById('login');
      const { username, password } = login;
      const btn = document.getElementById('submit');
      const url = 'https://www.imooc.com/api/http/search/suggest?words=js';

      btn.addEventListener(
        'click',
        e => {
          // ��ֹ���Զ��ύ
          e.preventDefault();

          // ��������֤����

          // ���� Ajax ����
          const xhr = new XMLHttpRequest();

          xhr.addEventListener(
            'load',
            () => {
              if (
                (xhr.status >= 200 && xhr.status < 300) ||
                xhr.status === 304
              ) {
                console.log(xhr.response);
              }
            },
            false
          );

          xhr.open('POST', url, true);

          // FormData �����ڷ��ͱ�����
          const data = new FormData(login);

          xhr.send(data);
        },
        false
      );
    </script>
  </body>
</html>
```

> FormData ���Զ���� Content-Type����� Content-Type ��ֵΪ multipart/form-data���������ʹ�� multipart/form-data��������ʹ�� application/x-www-form-urlencoded����Ϊ��Ȼ������Ϊ�����ͣ������������﷢�͵� FormData ������֮ǰ�� `&` ƴ�ӵ����ݵĽṹ�ǲ�һ���ģ�������������Ҫʹ�� multipart/form-data��

FormData �ĸ���ʹ�÷�����

���Ե���ͨ�� `append()` ���������������

```javascript
const fd = new FormData(formԪ��);
fd.append('age', 18);
fd.append('sex', 'male');
xhr.send(fd);
```

���������ǿ��Դ���һ���յ� FormData ����Ȼ���Լ�������ݣ���������һ�� form Ԫ������ʼ��

```js
const myForm = new FormData();
myForm.append('name', 'jerry');
myForm.append('age', 18);
xhr.send(myForm);
```

> ע�⣺���� FormData �����ŵ����ڷ����ϴ��ļ���

## 3.9 Ajax�ļ��ϴ�

һ������£�ͨ�����ύʵ���ļ��ϴ���ֻ��Ҫ������ enctype ��������Ϊ multipart/form-data ���ɡ�

> ע�⣺������ multipart/form-data��application/x-www-form-urlencoded �ǲ����ϴ��ļ����͵ģ�
>
> > multipart/form-data��application/x-www-form-urlencoded ������
> >
> > ǰ��������ʱ����Ҫ�Է��͹�ȥ�����ݽ��б��룡��Ҳ�������� Content-Type�������б����ʽ�ɷ�Ϊ���֣�application/x-www-form-urlencoded��multipart/form-data��application/json��text/plain��
> >
> > - text/plain�����ı����ݣ�����ʹ�ã�
> > - application/x-www-form-urlencoded�������ݷ�װ��һ���ַ������������Ͳ���ֵʹ�� "=" ƴ�ӣ�����֮��ʹ�� "&" ƴ�ӣ����շ��͵����ݸ�ʽ���磺'key1=value1&key2=value2&...'������ key �� value ����ֱ�ʹ�� encodeURI() ������б��룬����ĳЩ��Ӣ���ַ����Ϊ "%E7%A8%8B%E5..." �������ӣ����������յ������н��롣���� application/x-www-form-urlencoded ���� form �������Լ� Ajax �����Ĭ�Ϸ�ʽ��
> > - application/json��JSON �ַ�����ʽ�����ݡ�
> > - multipart/form-data����Ҫ�����ڴ����ļ��������Ǽ�Ҫ�����ı�ҲҪ�����ļ��������������һ�� boundary ��ʽ���˽⼴�ɣ��������ļ�ֵ���ڿ��Խ��ļ���Ϊ�����Ƶ���ʽ�����첽�ϴ����Ҳ��漰ת�����⣡һ��������Ҫ�ϴ��ļ��������ϴ��ļ���ͬʱ�ϴ��ı������Ƕ���ʹ�� multipart/form-data��

```html
<form action="/" enctype="multipart/form-data" method="post">
    <input type="file" name="file"/>
    <input type="submit" value="�ύ" />  
</form>
```

[Input file | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file)

���� **`type="file"`** �� input Ԫ�������û����Դ����ǵ��豸��ѡ��һ�������ļ���ѡ�����Щ�ļ�����ʹ���ύ���ķ�ʽ�ϴ����������ϣ�����ͨ�� Javascript ������ļ����в�����

> �ļ� input �� `value` ���԰�����һ���ַ�������ʾ��ѡ���ļ���·��������û�û��ѡ���κ��ļ������ֵΪ���ַ��� `""`������û�ѡ���˶���ļ����� `value` ��ʾ����ѡ����ļ��б��еĵ�һ���ļ�������ʹ�� input �� `HTMLInputElement.files` ���Ա�ʶ�����ļ���
>
> ע�⣺Ϊ����ֹ��������²��ļ�·������ֵ���ַ�����ʾ������ `C:\fakepath\` Ϊǰ׺���ļ��������������ļ�����ʵ·����
>
> input file �ĳ������ԣ�
>
> - accept��һ���ַ��������������ļ� input Ӧ�ý��ܵ��ļ����ͣ����磺`accept=".doc,.docx,.pdf,.excel,.jpg,.jpeg,.png,.mp3,.mp4"`��`accept="image/*,video/*,audio/*"` �κε�ͼƬ����Ƶ����Ƶ�ļ���
> - multiple���ļ� input �����û�ѡ�����ļ������磺`<input type="file" multiple>`��
>
> ��ȡ��ѡ���ļ�����Ϣ:
>
> ��ѡ����ļ��� `HTMLInputElement.files` ���Է��أ����ǰ���һϵ�� `File` ����� `FileList` ����`FileList` ����Ϊ��һ�����飬����ͨ����� `length` �����������ѡ���ļ���������ע�⣺������ֻѡ����һ���ļ���������û������ multiple������ `HTMLInputElement.files` ���Է��ص������� `FileList` ����ֻ��������������һ�� `File` ����
>
> ÿ�� `File` �������������Ϣ��
>
>    - `name`���ļ�����
>    - `lastModified`��һ�����֣�ָ���ļ����һ���޸ĵ����ں�ʱ�䣬�� UNIX �¼�Ԫ��1970 �� 1 �� 1 ����ҹ�������ĺ�������ʾ��
>    - `size`�����ֽ���Ϊ��λ���ļ���С��
>    - `type`���ļ��� [MIME ����](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types)��
>
> > ���� [Blob](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob)��[File](https://developer.mozilla.org/zh-CN/docs/Web/API/File)��[FileList](https://developer.mozilla.org/zh-CN/docs/Web/API/FileList)��[FileReader](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader) �Ľ��ܡ�

�� JS ���ļ����в��������ӣ�

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
            html {
                font-family: sans-serif;
            }

            form {
                width: 600px;
                background: #ccc;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid black;
            }

            form ol {
                padding-left: 0;
            }

            form li,
            div > p {
                background: #eee;
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
                list-style-type: none;
                border: 1px solid black;
            }

            form img {
                height: 124px;
                order: 1;
            }

            form p {
                line-height: 32px;
                padding-left: 10px;
            }

            form label,
            form button {
                background-color: #7f9ccb;
                padding: 5px 10px;
                border-radius: 5px;
                border: 1px ridge black;
                font-size: 0.8rem;
                height: auto;
            }

            form label:hover,
            form button:hover {
                background-color: #2d5ba3;
                color: white;
            }

            form label:active,
            form button:active {
                background-color: #0d3f8f;
                color: white;
            }
        </style>
    </head>
    <body>
        <form method="post" enctype="multipart/form-data">
            <div>
                <label for="image_uploads">ѡ��ͼƬ�ϴ� (PNG, JPG)</label>
                <input type="file" id="image_uploads" name="image_uploads" accept="image/*" multiple />
            </div>
            <div class="preview">
                <p>��ѡ��Ҫ�ϴ���ͼƬ�ļ�����</p>
            </div>
        </form>
        <script>
            // ��ȡ file ����� DOM Ԫ��
            const input = document.querySelector('#image_uploads');
            // ��ȡ Ԥ���� DOM Ԫ��
            const preview = document.querySelector('.preview');
            // �� file �������Ϊ͸��
            // ����������Ϊ�ļ������������ѿ������������ʽ�������ڿ�������ж����ǵ���Ʋ�һ��
            // ����ͨ������ <label> ���������� input Ԫ�أ���ˣ�������Ӿ������� input ���� label ��Ƴɰ�ť����ʽ
            // ʹ�� opacity��������ʹ�� visibility: hidden ���� display: none����Ϊ������������������ʽ����Ϊ�ļ� input �ǲ��ɽ����ģ�
            input.style.opacity = 0;

            // ���ǽ��¼���������ӵ� input �У��Լ���ѡ���ֵ�ĸ���
            input.addEventListener('change', updateImageDisplay);

            // ÿ�� updateImageDisplay() ����������ʱ�����ǣ�
            function updateImageDisplay() {
                // 1�����Ԥ����������
                while (preview.firstChild) {
                    preview.removeChild(preview.firstChild);
                }

                // 2����ȡ����������ѡ���ļ���Ϣ�� FileList ���󣬲�������һ������ curFiles ����
                const curFiles = input.files;

                // 3��ͨ����� curFiles.length �Ƿ���� 0 ������Ƿ�û���ļ���ѡ��
                if (curFiles.length === 0) {
                    // ����ǣ�����Ԥ���� <div> ���һ����Ϣ����ʾû��ѡ���ļ�
                    const para = document.createElement('p');
                    para.textContent = '��ѡ��Ҫ�ϴ���ͼƬ�ļ�����';
                    preview.appendChild(para);
                } else {
                    // ���ѡ�����ļ������ǽ�ѭ������ÿ���ļ�����������������Ϣ�����Ԥ���� <div>

                    // ����һ�� ul �б�
                    const list = document.createElement('ul');
                    preview.appendChild(list);

                    // ���� FileList �е�ÿ�� File ����
                    for (const file of curFiles) {
                        // ����һ�� li �б���
                        const listItem = document.createElement('li');
                        // ����һ�� p �ı�
                        const para = document.createElement('p');

                        // �������Ƶ� validFileType() �������ٴμ���ļ��������Ƿ���ȷ
                        // ԭ���ǣ�Input file �� accept ���Բ���֤��ѡ�ļ������ͣ���ֻ��Ϊ������ṩ��ʾ�������û�ѡ����ȷ���ļ����ͣ��������ǲ���ȫ�ġ�
                        if (validFileType(file)) {
                            // ������ȷ
                            // �������ƺ��ļ���С�����Ԥ���� <div> ��һ���б�����
                            // �� file.name �� file.size ��ȡ��Щ��Ϣ
                            // ���У����Ƶ� returnFileSize() ��������һ���� bytes/KB/MB ��ʾ�Ŀɶ������õ��ļ���С��Ĭ������£�������Ծ����ֽ��������С��
                            para.textContent = `�ļ����ƣ�${file.name}���ļ���С��${returnFileSize(file.size)}.`;
                            // ����һ�� img Ԫ��
                            const image = document.createElement('img');
                            // ͨ������ URL.createObjectURL(File) ������ͼƬ��һ������Ԥ��ͼ�������� img �� src ����
                            // URL.createObjectURL(File)�����������ڴ��� URL �� File ����Blob ������� MediaSource ���󡣷���ֵ��һ�� DOMString ������һ������ URL���� URL ������ָ��Դ object �����ݡ�
                            image.src = URL.createObjectURL(file);
                            listItem.appendChild(image);
                            listItem.appendChild(para);
                        } else {
                            // ���Ͳ���ȷ
                            // ���б�������ʾһ����Ϣ�������û���Ҫѡ��һ���������ļ�����
                            para.textContent = `�ļ����ƣ�${file.name}��������Ч���ļ����ͣ����������ѡ�񡭡�`;
                            listItem.appendChild(para);
                        }

                        list.appendChild(listItem);
                    }
                }
            }

            // -----------------------------------------------------------------------------
            // -----------------------------------------------------------------------------

            // validFileType() ��������һ�� File ������Ϊ������Ȼ��ʹ�� Array.prototype.includes() ��� fileTypes ���Ƿ���ֵ���ļ��� type ����ƥ�䡣
            // ����ҵ�ƥ����������� true�����û�ҵ������� false��
            const fileTypes = ['image/apng', 'image/bmp', 'image/gif', 'image/jpeg', 'image/pjpeg', 'image/png', 'image/svg+xml', 'image/tiff', 'image/webp', 'image/x-icon'];
            function validFileType(file) {
                return fileTypes.includes(file.type);
            }

            // -----------------------------------------------------------------------------
            // -----------------------------------------------------------------------------

            // returnFileSize() ��������һ�����֣��ֽ�����ȡ�Ե�ǰ�ļ��� size ���ԣ���Ϊ���������ҽ���ת��Ϊ�� bytes/KB/MB ��ʾ�Ŀɶ������õ��ļ���С��
            function returnFileSize(number) {
                if (number < 1024) {
                    return `${number} bytes`;
                } else if (number >= 1024 && number < 1048576) {
                    return `${(number / 1024).toFixed(1)} KB`;
                } else if (number >= 1048576) {
                    return `${(number / 1048576).toFixed(1)} MB`;
                }
            }
        </script>
    </body>
</html>

```

<img src="mark-img/wow.gif" alt="wow" style="width:60%;" />

������ Ajax ���ԣ������ϴ��ļ�ʱ����Ҫʹ�� FormData �ķ�����Ĭ�� Content-Type ��ֵ���� multipart/form-data ����ʽ��

[FormData �����ʹ�� - Web API �ӿڲο� | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/Using_FormData_Objects)

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <input type="file" id="input_file" accept=".jpg,.jpeg,.png" multiple />
        <button id="submit">�ϴ�</button>
        <script>
            const btn = document.getElementById('submit');
            const inputFile = document.getElementById('input_file');
            const url = 'http://www.xxx.com/api/xxx';

            btn.addEventListener(
                'click',
                () => {
                    const xhr = new XMLHttpRequest();

                    xhr.addEventListener(
                        'load',
                        () => {
                            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                                console.log(xhr.response);
                            }
                        },
                        false
                    );

                    xhr.open('POST', url, true);

                    // ����һ�� FormData ����
                    const data = new FormData();

                    // �� FormData ������� File
                    for (let i = 0; i < inputFile.files.length; i++) {
                        data.append(`img-${i}`, inputFile.files[i]);
                        // append �������Խ��յ����������������ֶ�ָ���ļ�����������Ӹò������ļ���Ĭ�Ͼ����ϴ��ļ���ԭʼ���ƣ�
                        // data.append(`img-${i}`, inputFile.files[0], `img-${i}`);
                    }

                    xhr.send(data);
                },
                false
            );
        </script>
    </body>
</html>
```

�ϴ� 3 ��ͼƬ�����ύ������������ݣ�

<img src="mark-img/file.gif" alt="file" style="width:50%;" />

��Ȼ������Ҳ����ֱ���� form ������ֱ�ӳ�ʼ��һ�� FormData��

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <form action="/" enctype="multipart/form-data" method="post" id="form">
            <!-- ���� form ���ϴ�ʱ��input ������� name ���ԣ��������� -->
            <input type="text" name="myText" /><br />
            <!-- ���� form ���ϴ�ʱ��input ������� name ���ԣ��������� -->
            <input type="file" name="myImg" accept=".jpg,.jpeg,.png" multiple />
        </form>
        <input type="file" id="input_file" accept=".jpg,.jpeg,.png" /><br />
        <button id="submit">�ϴ�</button>
        <script>
            const form = document.getElementById('form');
            const btn = document.getElementById('submit');
            const inputFile = document.getElementById('input_file');
            const url = 'http://www.xxx.com/api/xxx';

            btn.addEventListener(
                'click',
                () => {
                    const xhr = new XMLHttpRequest();

                    xhr.addEventListener(
                        'load',
                        () => {
                            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                                console.log(xhr.response);
                            }
                        },
                        false
                    );

                    xhr.open('POST', url, true);

                    // ����һ�� FormData ���󣬲��� form ���г�ʼ��
                    const data = new FormData(form);

                    // ���ǻ�����׷������
                    data.append('addImg', inputFile.files[0]);
                    data.append('addMsg', '��ӵ�����');

                    xhr.send(data);
                },
                false
            );
        </script>
    </body>
</html>
```

<img src="mark-img/image-20230129215216885.png" alt="image-20230129215216885" style="width:80%;" />

<img src="mark-img/image-20230129215309243.png" alt="image-20230129215309243" style="width:80%;" />

## 3.10 ��װAjax

<img src="mark-img/image-20220719130924846.png" alt="image-20220719130924846" style="width:20%;" />

- ajax.js

```javascript
// ����
import {
  HTTP_GET,
  CONTENT_TYPE_FORM_URLENCODED,
  CONTENT_TYPE_JSON
} from './constants.js';

// ���ߺ���
import {
  serialize,
  addURLData,
  serializeJSON
} from './utils.js';

// Ĭ�ϲ���
import DEFAULTS from './defaults.js';

// Ajax ��
class Ajax {
  constructor(url, options) {
    this.url = url;
    this.options = Object.assign({}, DEFAULTS, options);

    // ��ʼ��
    this.init();
  }

  // ��ʼ��
  init() {
    const xhr = new XMLHttpRequest();

    this.xhr = xhr;

    // ����Ӧ�¼��������
    this.bindEvents();

    xhr.open(this.options.method, this.url + this.addParam(), true);

    // ���� responseType
    this.setResponseType();

    // ���ÿ����Ƿ�Я�� cookie
    this.setCookie();

    // ���ó�ʱ
    this.setTimeout();

    // ��������
    this.sendData();
  }

  // ����Ӧ�¼��������
  bindEvents() {
    const xhr = this.xhr;

    const {
      success,
      httpCodeError,
      error,
      abort,
      timeout
    } = this.options;

    // load
    xhr.addEventListener(
      'load',
      () => {
        if (this.ok()) {
          success(xhr.response, xhr);
        } else {
          httpCodeError(xhr.status, xhr);
        }
      },
      false
    );

    // error
    // ��������������ʱ�������� error �¼�
    xhr.addEventListener(
      'error',
      () => {
        error(xhr);
      },
      false
    );

    // abort
    xhr.addEventListener(
      'abort',
      () => {
        abort(xhr);
      },
      false
    );

    // timeout
    xhr.addEventListener(
      'timeout',
      () => {
        timeout(xhr);
      },
      false
    );
  }

  // �����Ӧ�� HTTP ״̬���Ƿ�����
  ok() {
    const xhr = this.xhr;
    return (xhr.status >= 200 && xhr.status < 300) || xhr.status === 304;
  }

  // �ڵ�ַ���������
  addParam() {
    const {
      params
    } = this.options;

    if (!params) return '';

    return addURLData(this.url, serialize(params));
  }

  // ���� responseType
  setResponseType() {
    this.xhr.responseType = this.options.responseType;
  }

  // ���ÿ����Ƿ�Я�� cookie
  setCookie() {
    if (this.options.withCredentials) {
      this.xhr.withCredentials = true;
    }
  }

  // ���ó�ʱ
  setTimeout() {
    const {
      timeoutTime
    } = this.options;

    if (timeoutTime > 0) {
      this.xhr.timeout = timeoutTime;
    }
  }

  // ��������
  sendData() {
    const xhr = this.xhr;

    if (!this.isSendData()) {
      return xhr.send(null);
    }

    let resultData = null;
    const {
      data
    } = this.options;

    // ���� FormData ��ʽ������
    if (this.isFormData()) {
      resultData = data;
    } else if (this.isFormURLEncodedData()) {
      // ���� application/x-www-form-urlencoded ��ʽ������

      this.setContentType(CONTENT_TYPE_FORM_URLENCODED);
      resultData = serialize(data);
    } else if (this.isJSONData()) {
      // ���� application/json ��ʽ������

      this.setContentType(CONTENT_TYPE_JSON);
      resultData = serializeJSON(data);
    } else {
      // ����������ʽ������

      this.setContentType();
      resultData = data;
    }

    xhr.send(resultData);
  }

  // �Ƿ���Ҫʹ�� send ��������
  isSendData() {
    const {
      data,
      method
    } = this.options;

    if (!data) return false;

    if (method.toLowerCase() === HTTP_GET.toLowerCase()) return false;

    return true;
  }

  // �Ƿ��� FormData ��ʽ������
  isFormData() {
    return this.options.data instanceof FormData;
  }

  // �Ƿ��� application/x-www-form-urlencoded ��ʽ������
  isFormURLEncodedData() {
    return this.options.contentType
      .toLowerCase()
      .includes(CONTENT_TYPE_FORM_URLENCODED);
  }

  // �Ƿ��� application/json ��ʽ������
  isJSONData() {
    return this.options.contentType.toLowerCase().includes(CONTENT_TYPE_JSON);
  }

  // ���� Content-Type
  setContentType(contentType = this.options.contentType) {
    if (!contentType) return;

    this.xhr.setRequestHeader('Content-Type', contentType);
  }

  // ��ȡ XHR ����
  getXHR() {
    return this.xhr;
  }
}

export default Ajax;
```

- constants.js

```javascript
// ����
export const HTTP_GET = 'GET';
export const CONTENT_TYPE_FORM_URLENCODED = 'application/x-www-form-urlencoded';
export const CONTENT_TYPE_JSON = 'application/json';
```

- defaults.js

```javascript
// ����
import {
  HTTP_GET,
  CONTENT_TYPE_FORM_URLENCODED
} from './constants.js';

// Ĭ�ϲ���
const DEFAULTS = {
  method: HTTP_GET,
  // ����ͷЯ��������
  params: null,
  // params: {
  //   username: 'alex',
  //   age: 18
  // }
  // username=alex&age=18
  // ������Я��������
  data: null,
  // data: {
  //   username: 'alex',
  //   age: 18
  // }
  // data: FormData ����

  contentType: CONTENT_TYPE_FORM_URLENCODED,
  responseType: '',
  timeoutTime: 0,
  withCredentials: false,

  // ����
  success() {},
  httpCodeError() {},
  error() {},
  abort() {},
  timeout() {}
};

export default DEFAULTS;
```

- index.js

```javascript
import Ajax from './ajax.js';

const ajax = (url, options) => {
  return new Ajax(url, options).getXHR();
};

const get = (url, options) => {
  return ajax(url, {
    ...options,
    method: 'GET'
  });
};

const getJSON = (url, options) => {
  return ajax(url, {
    ...options,
    method: 'GET',
    responseType: 'json'
  });
};

const post = (url, options) => {
  return ajax(url, {
    ...options,
    method: 'POST'
  });
};

export {
  ajax,
  get,
  getJSON,
  post
};
```

- utils.js

```javascript
// ���ߺ���

// �������л��� urlencoded ��ʽ���ַ���
const serialize = param => {
  const results = [];

  for (const [key, value] of Object.entries(param)) {
    results.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  }

  // ['username=alex', 'age=18'];

  return results.join('&');
};

// �������л��� JSON ��ʽ���ַ���
const serializeJSON = param => {
  return JSON.stringify(param);
};

// �� URL ��Ӳ���
// www.imooc.com?words=js&
const addURLData = (url, data) => {
  if (!data) return '';

  const mark = url.includes('?') ? '&' : '?';

  return `${mark}${data}`;
};

export {
  serialize,
  addURLData,
  serializeJSON
};
```

- Ajax.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <title>��װ Ajax</title>
</head>

<body>
  <script type="module">

    import { ajax, get, getJSON, post } from './ajax/index.js';

    const url = 'https://www.imooc.com/api/http/search/suggest?words=js';
    const xhr = ajax(url, {
      method: 'GET',
      params: { username: 'alex' },
      data: {
        age: 18
      },
      responseType: 'json',
      // timeoutTime: 10,
      success(response) {
        console.log(response);
      },
      httpCodeError(err) {
        console.log('http code error', err);
      },
      error(xhr) {
        console.log('error', xhr);
      },
      abort(xhr) {
        console.log('abort', xhr);
      },
      timeout(xhr) {
        console.log('timeout', xhr);
      }
    });
    xhr.abort();
  </script>
</body>

</html>
```

## 3.11 ʹ��Promise�����װ�õ�Ajax

- ajax.js

```javascript
// ����
import {
  HTTP_GET,
  CONTENT_TYPE_FORM_URLENCODED,
  CONTENT_TYPE_JSON
} from './constants.js';

// ���ߺ���
import {
  serialize,
  addURLData,
  serializeJSON
} from './utils.js';

// Ĭ�ϲ���
import DEFAULTS from './defaults.js';

// Ajax ��
class Ajax {
  constructor(url, options) {
    this.url = url;
    this.options = Object.assign({}, DEFAULTS, options);

    // ��ʼ��
    this.init();
  }

  // ��ʼ��
  init() {
    const xhr = new XMLHttpRequest();

    this.xhr = xhr;

    // ����Ӧ�¼��������
    this.bindEvents();

    xhr.open(this.options.method, this.url + this.addParam(), true);

    // ���� responseType
    this.setResponseType();

    // ���ÿ����Ƿ�Я�� cookie
    this.setCookie();

    // ���ó�ʱ
    this.setTimeout();

    // ��������
    this.sendData();
  }

  // ����Ӧ�¼��������
  bindEvents() {
    const xhr = this.xhr;

    const {
      success,
      httpCodeError,
      error,
      abort,
      timeout
    } = this.options;

    // load
    xhr.addEventListener(
      'load',
      () => {
        if (this.ok()) {
          success(xhr.response, xhr);
        } else {
          httpCodeError(xhr.status, xhr);
        }
      },
      false
    );

    // error
    // ��������������ʱ�������� error �¼�
    xhr.addEventListener(
      'error',
      () => {
        error(xhr);
      },
      false
    );

    // abort
    xhr.addEventListener(
      'abort',
      () => {
        abort(xhr);
      },
      false
    );

    // timeout
    xhr.addEventListener(
      'timeout',
      () => {
        timeout(xhr);
      },
      false
    );
  }

  // �����Ӧ�� HTTP ״̬���Ƿ�����
  ok() {
    const xhr = this.xhr;
    return (xhr.status >= 200 && xhr.status < 300) || xhr.status === 304;
  }

  // �ڵ�ַ���������
  addParam() {
    const {
      params
    } = this.options;

    if (!params) return '';

    return addURLData(this.url, serialize(params));
  }

  // ���� responseType
  setResponseType() {
    this.xhr.responseType = this.options.responseType;
  }

  // ���ÿ����Ƿ�Я�� cookie
  setCookie() {
    if (this.options.withCredentials) {
      this.xhr.withCredentials = true;
    }
  }

  // ���ó�ʱ
  setTimeout() {
    const {
      timeoutTime
    } = this.options;

    if (timeoutTime > 0) {
      this.xhr.timeout = timeoutTime;
    }
  }

  // ��������
  sendData() {
    const xhr = this.xhr;

    if (!this.isSendData()) {
      return xhr.send(null);
    }

    let resultData = null;
    const {
      data
    } = this.options;

    // ���� FormData ��ʽ������
    if (this.isFormData()) {
      resultData = data;
    } else if (this.isFormURLEncodedData()) {
      // ���� application/x-www-form-urlencoded ��ʽ������

      this.setContentType(CONTENT_TYPE_FORM_URLENCODED);
      resultData = serialize(data);
    } else if (this.isJSONData()) {
      // ���� application/json ��ʽ������

      this.setContentType(CONTENT_TYPE_JSON);
      resultData = serializeJSON(data);
    } else {
      // ����������ʽ������

      this.setContentType();
      resultData = data;
    }

    xhr.send(resultData);
  }

  // �Ƿ���Ҫʹ�� send ��������
  isSendData() {
    const {
      data,
      method
    } = this.options;

    if (!data) return false;

    if (method.toLowerCase() === HTTP_GET.toLowerCase()) return false;

    return true;
  }

  // �Ƿ��� FormData ��ʽ������
  isFormData() {
    return this.options.data instanceof FormData;
  }

  // �Ƿ��� application/x-www-form-urlencoded ��ʽ������
  isFormURLEncodedData() {
    return this.options.contentType
      .toLowerCase()
      .includes(CONTENT_TYPE_FORM_URLENCODED);
  }

  // �Ƿ��� application/json ��ʽ������
  isJSONData() {
    return this.options.contentType.toLowerCase().includes(CONTENT_TYPE_JSON);
  }

  // ���� Content-Type
  setContentType(contentType = this.options.contentType) {
    if (!contentType) return;

    this.xhr.setRequestHeader('Content-Type', contentType);
  }

  // ��ȡ XHR ����
  getXHR() {
    return this.xhr;
  }
}

export default Ajax;
```

- constants.js

```javascript
// ����
export const HTTP_GET = 'GET';
export const CONTENT_TYPE_FORM_URLENCODED = 'application/x-www-form-urlencoded';
export const CONTENT_TYPE_JSON = 'application/json';

export const ERROR_HTTP_CODE = 1;
export const ERROR_HTTP_CODE_TEXT = 'HTTP ״̬���쳣';
export const ERROR_REQUEST = 2;
export const ERROR_REQUEST_TEXT = '������ֹ';
export const ERROR_TIMEOUT = 3;
export const ERROR_TIMEOUT_TEXT = '����ʱ';
export const ERROR_ABORT = 4;
export const ERROR_ABORT_TEXT = '������ֹ';
```

- defaults.js

```javascript
// ����
import {
  HTTP_GET,
  CONTENT_TYPE_FORM_URLENCODED
} from './constants.js';

// Ĭ�ϲ���
const DEFAULTS = {
  method: HTTP_GET,
  // ����ͷЯ��������
  params: null,
  // params: {
  //   username: 'alex',
  //   age: 18
  // }
  // username=alex&age=18
  // ������Я��������
  data: null,
  // data: {
  //   username: 'alex',
  //   age: 18
  // }
  // data: FormData ����

  contentType: CONTENT_TYPE_FORM_URLENCODED,
  responseType: '',
  timeoutTime: 0,
  withCredentials: false,

  // ����
  success() {},
  httpCodeError() {},
  error() {},
  abort() {},
  timeout() {}
};

export default DEFAULTS;
```

- index.js

```javascript
import Ajax from './ajax.js';
// ����
import {
  ERROR_HTTP_CODE,
  ERROR_REQUEST,
  ERROR_TIMEOUT,
  ERROR_ABORT,
  ERROR_HTTP_CODE_TEXT,
  ERROR_REQUEST_TEXT,
  ERROR_TIMEOUT_TEXT,
  ERROR_ABORT_TEXT
} from './constants.js';

const ajax = (url, options) => {
  // return new Ajax(url, options).getXHR();
  let xhr;
  const p = new Promise((resolve, reject) => {
    xhr = new Ajax(url, {
      ...options,
      ...{
        success(response) {
          resolve(response);
        },
        httpCodeError(status) {
          reject({
            type: ERROR_HTTP_CODE,
            text: `${ERROR_HTTP_CODE_TEXT}: ${status}`
          });
        },
        error() {
          reject({
            type: ERROR_REQUEST,
            text: ERROR_REQUEST_TEXT
          });
        },
        abort() {
          reject({
            type: ERROR_ABORT,
            text: ERROR_ABORT_TEXT
          });
        },
        timeout() {
          reject({
            type: ERROR_TIMEOUT,
            text: ERROR_TIMEOUT_TEXT
          });
        }
      }
    }).getXHR();
  });

  p.xhr = xhr;
  p.ERROR_HTTP_CODE = ERROR_HTTP_CODE;
  p.ERROR_REQUEST = ERROR_REQUEST;
  p.ERROR_TIMEOUT = ERROR_TIMEOUT;
  p.ERROR_ABORT = ERROR_ABORT;

  return p;
};

const get = (url, options) => {
  return ajax(url, {
    ...options,
    method: 'GET'
  });
};

const getJSON = (url, options) => {
  return ajax(url, {
    ...options,
    method: 'GET',
    responseType: 'json'
  });
};

const post = (url, options) => {
  return ajax(url, {
    ...options,
    method: 'POST'
  });
};

export {
  ajax,
  get,
  getJSON,
  post
};
```

- utils.js

```javascript
// ���ߺ���

// �������л��� urlencoded ��ʽ���ַ���
const serialize = param => {
  const results = [];

  for (const [key, value] of Object.entries(param)) {
    results.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  }

  // ['username=alex', 'age=18'];

  return results.join('&');
};

// �������л��� JSON ��ʽ���ַ���
const serializeJSON = param => {
  return JSON.stringify(param);
};

// �� URL ��Ӳ���
// www.imooc.com?words=js&
const addURLData = (url, data) => {
  if (!data) return '';

  const mark = url.includes('?') ? '&' : '?';

  return `${mark}${data}`;
};

export {
  serialize,
  addURLData,
  serializeJSON
};
```

- Ajax.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <title>ʹ�� Promise �����װ�õ� Ajax</title>
</head>

<body>
  <script type="module">
    import { ajax, get, getJSON, post } from './ajax/index.js';

      const url = 'https://www.imooc.com/api/http/search/suggest?words=js';

      const p = getJSON(url, {
        params: { username: 'alex' },
        data: { age: 18 }
        // timeoutTime: 10
        // success(){},error(){}
      });
      p.xhr.abort();

      const { ERROR_HTTP_CODE, ERROR_REQUEST, ERROR_TIMEOUT, ERROR_ABORT } = p;

      p.then(repsonse => {
        console.log(repsonse);
      }).catch(err => {
        // console.log(err);
        switch (err.type) {
          case ERROR_HTTP_CODE:
            console.log(err.text);
            break;
          case ERROR_REQUEST:
            console.log(err.text);
            break;
          case ERROR_TIMEOUT:
            console.log(err.text);
            break;
          case ERROR_ABORT:
            console.log(err.text);
            break;
        }
      });
    </script>
</body>

</html>
```

## 3.12 ���Ajax����Ĳ���ִ��

�����Ƿ��Ͷ�� Ajax ������Ҫ����ִ�е�ʱ��Ӧ�����㣺�����Ӧ���ɹ��˲ųɹ���ֻҪ��һ�����ɹ���ô��ʧ�ܣ����Կ�����ô����

```javascript
import {
    getJSON
} from './ajax/index.js';

const menuURL = 'https://www.imooc.com/api/mall-PC/index/menu';
const adURL = 'https://www.imooc.com/api/mall-PC/index/ad';

const loadingPageEl = document.getElementById('loading-page');
const adEl = document.getElementById('ad');
const menuEl = document.getElementById('menu');

const p1 = getJSON(menuURL)
    .then(repsonse => {
        let html = '';

        for (const item of repsonse.data) {
            html += `
        <li class="menu-item" data-key="${item.key}">
          <span>${item.title}</span>
          <div class="menu-content">
            <p><img class="menu-loading" src="./loading.gif" alt="������" /></p>
          </div>
        </li>
      `;
        }

        menuEl.innerHTML = html;
    })
    .then(() => {
        const items = menuEl.querySelectorAll('.menu-item');

        for (const item of items) {
            item.addEventListener(
                'mouseenter',
                () => {
                    if (item.dataset.done === 'done') return;

                    getJSON(
                            `https://www.imooc.com/api/mall-PC/index/menu/${item.dataset.key}`
                        )
                        .then(repsonse => {
                            item.dataset.done = 'done';

                            let html = '';

                            for (const item of repsonse.data) {
                                html += `<p>${item.title}</p>`;
                            }

                            item.querySelector('.menu-content').innerHTML = html;
                        })
                        .catch(err => {
                            console.log(err);
                        });
                },
                false
            );
        }
    })
    .catch(err => {
        console.log(err);
    });

const p2 = getJSON(adURL)
    .then(response => {
        let html = '';
        for (const item of response.data) {
            html += `<img src="${item.url}" alt="" />`;
        }
        adEl.innerHTML = html;
    })
    .catch(err => {
        console.log(err);
    });

Promise.all([p1, p2]).then(() => {
    // IE10 ��ʼ֧��
    loadingPageEl.classList.add('none');
    // loadingPageEl.classList.remove('none');
});
```

# �ġ�Axios

https://axios-http.com/zh/

## 4.1 Axiso�����÷�

### 4.1.1 ����Axiso

�������룺`<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>`

### 4.1.2 ʹ��Axiso

- ������Ϊ JSON ��ʽ

```javascript
 axios(url, {
     method: 'post',
     // ����ͷ��Ϣ
     headers: {
         'Content-Type': 'application/json'
     },
     // ����������
     params: {
         usrname: 'alex'
     },
     // ����������
     data: {
         age: 18,
         sex: 'male'
     },
     // ��ʱʱ�䣨���룩
     timeout: 10000,
     // �Ƿ����Я�� Cookie
     withCredentials: true
 }).then(response => {
     console.log(response);
     console.log(response.data);
     console.log(response.status);
     console.log(response.statusText);
 }).catch(err => {
     console.log(err);
 })
```

- ������Ϊ ��ֵ�� ��ʽ

```javascript
 axios(url, {
     method: 'post',
     // ����ͷ��Ϣ
     headers: {
         'Content-Type': 'application/x-www-form-urlencoded'
     },
     // ����������
     params: {
         usrname: 'alex'
     },
     // ����������
     data: 'age=18&sex=male',
     // ��ʱʱ�䣨���룩
     timeout: 10000,
     // �Ƿ����Я�� Cookie
     withCredentials: true
 }).then(response => {
     console.log(response);
     console.log(response.data);
     console.log(response.status);
     console.log(response.statusText);
 }).catch(err => {
     console.log(err);
 })
```

- Axios �ṩ�� get ����

```javascript
axios.get(url, {
    params: {
        usrname: 'alex',
        age: 18
    },
    timeout: 10000,
    withCredentials: true
}).then(response => {
    console.log(response.data);
}).catch(err => {
    console.log(err);
})
```

- Axios �ṩ�� post ����

��ֵ����ʽ

```javascript
axios.post(url, 
  'username=alex&age=18'
).then(response => {
    console.log(response.data);
}).catch(err => {
    console.log(err);
})
```

JSON ��ʽ

```javascript
axios.post(url, {
    usrname: 'alex',
    age: 18
}).then(response => {
    console.log(response.data);
}).catch(err => {
    console.log(err);
})
```

��������������

```javascript
function getUserAccount() {
    return axios.get('/user/12345');
}

function getUserPermissions() {
    return axios.get('/user/12345/permissions');
}

Promise.all([getUserAccount(), getUserPermissions()])
    .then(function (results) {
    const acct = results[0];
    const perm = results[1];
});
```

> ע�⣺ͨ�� Axios �õ�����Ӧ JSON ���ݻ��Զ�ת��Ϊ JS �������͵ģ�

# �塢Fetch

Fetch �� Ajax ��һ��������������ǻ��� Promise �ġ�

`fetch()` �� XMLHttpRequest �������棬������ JavaScript �ű����淢�� HTTP ���������ԭ���ṩ�������

[ʹ�� Fetch - Web API �ӿڲο� | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)

Ŀǰ��Ajax �ļ����Ա� Fetch Ҫ�ã�����Ŀǰ�˽⼴�ɣ�