<!--
 * @Description: 
 * @Author: ljl
 * @Date: 2025-04-07 17:05:59
 * @LastEditors: rendc
 * @LastEditTime: 2025-04-10 18:48:28
-->
## Ŀ¼
- [Spring MVC����Ҫ�����](#spring-mvc����Ҫ���)
- [POST���������������⴦��](#post���������������⴦��)
- [�������ڴ���ͬ���͵Ĵ���HTTP���󷽷���ע�� ��](#�������ڴ���ͬ���͵Ĵ���http���󷽷���ע��-)
- [Spring MVC��������������ôд�ģ�](#spring-mvc��������������ôд��)
- [Spring,Spring MVC,Spring Boot ֮��ʲô��ϵ?](#springspring-mvcspring-boot-֮��ʲô��ϵ)
- [������Spring MVC�Ĺ������̣�����һ�� DispatcherServlet �Ĺ������̣�](#������spring-mvc�Ĺ�����������һ��-dispatcherservlet-�Ĺ�������)
- [Spring MVC��Spring Boot֮���������ʲô��](#spring-mvc��spring-boot֮���������ʲô)
- [ʲô��Spring MVC���򵥽��������Spring MVC����⣿�Լ���ʲô�ŵ㣿](#ʲô��spring-mvc�򵥽��������spring-mvc������Լ���ʲô�ŵ�)
- [SpringMVC����ԭ���������ʲô��](#springmvc����ԭ���������ʲô)
- [Spring MVC��Struts2����](#spring-mvc��struts2����)
- [������ִ�����̣�](#������ִ������)
- [����Spring MVC��@PathVariableע�͵����� ��](#����spring-mvc��pathvariableע�͵�����-)
- [@Controllerע�������](#controllerע�������)
- [SpringMVC��Ҫ�������������ʲô��](#springmvc��Ҫ�������������ʲô)
- [����@RestController �� @Controller ��ʲô����](#����restcontroller-��-controller-��ʲô����)
- [Spring MVC �е�������ģʽ��ΪʲôҪ�� Spring MVC ��ʹ��������ģʽ����](#spring-mvc-�е�������ģʽΪʲôҪ��-spring-mvc-��ʹ��������ģʽ)

**���� 1**
# Spring MVC����Ҫ�����
**1.ǰ�˿����� DispatcherServlet������Ҫ����Ա������**
- ���ã�����������Ӧ������൱��ת���������� `DispatcherServlet` �ͼ������������֮�����϶ȡ� 

**2.������ӳ����HandlerMapping������Ҫ����Ա������** 
- ���ã����������URL������ `Handler` 

**3.������������HandlerAdapter** 
- ע�⣺�ڱ�д `Handler` ��ʱ��Ҫ���� `HandlerAdapter` Ҫ��Ĺ���ȥ��д������������ `HandlerAdapter` �ſ�����ȷ��ȥִ�� `Handler` �� 

**4.������Handler����Ҫ����Ա������**

**5.��ͼ������ ViewResolver������Ҫ����Ա������**
- ���ã�������ͼ�Ľ�����������ͼ�߼�����������������ͼ��view��

**6.��ͼView**
- View��һ���ӿڣ� ����ʵ����֧�ֲ�ͬ����ͼ���ͣ�jsp��freemarker��pdf�ȵȣ�

**���� 2**
# POST���������������⴦��
* POST �������������ͨ��������������ı���δ��ȷ���õ��µġ�����ͨ������request����ı����������

* GET �������������ͨ�������� URL ��������⡣�����ڷ������˶Ի�ȡ�Ĳ������н���

**���� 3**
# �������ڴ���ͬ���͵Ĵ���HTTP���󷽷���ע�� ��
��Spring MVC�У�����ͬ���͵Ĵ���HTTP���󷽷���Ҫͨ�����¼���ע�ͣ�ע�⣩��ʵ�֣�
* **@GetMapping**�����ע�����ڴ���HTTP GET������ͨ������`��������`���ӷ�����`��ȡĳЩ��Ϣ`ʱ������һ��GET����Ȼ���ڶ�Ӧ��Controller������ʹ��@GetMappingע�⡣
  
* **@PostMapping**�����ע�����ڴ���HTTP POST������ͨ������`�ύ����`����`���ύ`ʱ������ύ��ťʱ��������������������һ��POST���󣬷������ϵ�Controller�ж�Ӧ�ķ�����ʹ��@PostMappingע���������������

* **@PutMapping**�����ע�����ڴ���HTTP PUT����PUT����ͨ������`������Դ`����RESTful API�У�PUT�����Ǹ�����Դ״̬��һ�ֳ�����ʽ��

* **@DeleteMapping**�����ע�����ڴ���HTTP DELETE���󡣹���˼�壬��ͨ������`ɾ����Դ`����PUT�������ƣ�HTML��Ҳ��ֱ��֧��DELETE����������RESTful API�У�DELETE��������ɾ����Դ��

* **@PatchMapping**�����ע�����ڴ���HTTP PATCH����PATCH�������ڶ�`��Դ���в����޸�`����RESTful API����У������ֻ��Ҫ������Դ��һ�������ԣ�������ȫ������ô����ʹ��PATCH����

* **@RequestMapping**�����ע����һ����ͨ�õ�ע�⣬����������`������������`��HTTP���������ͨ��ָ��method������������ֻ�����ض����͵��������磬@RequestMapping(method = RequestMethod.GET)��ͬ��@GetMapping��

RESTful ��REST��������״̬ת�ƣ��ܹ�����API��Ʒ�ʽ��ͨ�����ں��`�ֲ�ʽϵͳ`
![alt text](img/image-5.png)

**���� 4**
# Spring MVC��������������ôд�ģ�
��һ��ͨ��ʵ��HandleInterceptor�ӿڣ����߼̳�HandleInterceptor�ӿڵ�ʵ����HandleInterceptorAdapter�����壻

�ڶ���ͨ��ʵ��WebRequestInterceptor�ӿڣ���̳�WebRequestInterceptor�ӿڵ�ʵ���������塣

**1.�������Ķ��壺��ʵ��HandleInterceptor�ӿ�Ϊ����**
```java
    public class LoginInterceptor implements HandlerInterceptor {

        @Override
        public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
            //��һЩ���� ������������Ϊ����ֵ
            return false;
        }
    
        @Override
        public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
            //��һЩ����
        }
    
        @Override
        public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
            //��һЩ����
        }
    }
```
�����Ͽ��Կ������Զ������������ʵ����HandlerInterceptor�ӿڣ�����ʵ���˽ӿ��е������������������������������£�

**��1��preHandle()����**

�÷������ڿ���������ǰִ�У��䷵��ֵ��ʾ�Ƿ��жϺ���������������ֵΪ`true`ʱ����ʾ`��������ִ��`��������ֵΪ`false`ʱ����`�жϺ���`�����в���������������һ���������Ϳ��������еķ���ִ�еȣ���

**��2��postHandle()����**

�÷������ڿ�������������֮���ҽ�����ͼ֮ǰִ�С�����ͨ���˷������������е�ģ�ͺ���ͼ������һ�����޸ġ�

**��3��afterCompletion()����**

�÷�����������������ɣ�����ͼ��Ⱦ����֮��ִ�С�����ͨ���˷���ʵ��һЩ��Դ������¼��־��Ϣ�ȹ�����

**2.������������**

Ҫʹ�Զ��������������Ч������Ҫ��springmvc�������ļ��н������á�����������ʾ��
```html
 <!-- ���������� -->
 <mvc:interceptors>
     <!-- ʹ��beanֱ�Ӷ�����<mvc:interceptors>�����Interceptor�������������� -->
     <bean class="com.config.AllInterceptor"/>
     
     <!-- ������1 -->
     <mvc:interceptor>
         <!-- �������������õ�·����/**��ʾ��������·�� -->
         <mvc:mapping path="/**"/>   
         <!-- ���ò���Ҫ���������õ�·�� /admin��ʾ����������/admin��β��·�� -->
         <mvc:exclude-mapping path="/admin"/>    
         <!-- ������<mvc:interceptor>�����Interceptor����ʾ��ƥ��·��������Ž������� -->
         <bean class="com.config.AdminInterceptor"/>
     </mvc:interceptor>
     
     <!-- ������2 -->
     <mvc:interceptor>
         <mvc:mapping path="/index/**"/>
         <bean class="com.config.IndexInterceptor"/>
     </mvc:interceptor>
     
      <!-- ����������ö��������-->
     </mvc:interceptors>
```
`��Ҫע������ڽ�������������ʱ�����밴�����ϵ�˳��������ã�������������ʧЧ��`


**���� 5**
# Spring,Spring MVC,Spring Boot ֮��ʲô��ϵ?
**Spring**��Java�������

**Spring MVC**����Spring��ܵ�һ��ģ�飬��web��Ŀ���Ӧ��

**Spring Boot**�����ڼ� Spring Ӧ�ÿ����Ͳ���Ĺ��ߣ������԰��������߿��ٴ���� Spring �� Spring MVC ��Ӧ�ã���߿���Ч�ʡ�

**���� 6**
# ������Spring MVC�Ĺ������̣�����һ�� DispatcherServlet �Ĺ������̣�
* ��1���û�����������ǰ�˿�����`DispatcherServlet`�� 

* ��2�� `DispatcherServlet`�յ�����󣬵���`HandlerMapping`������ӳ�����������ȡ`Handle`�� 

* ��3��������ӳ������������url�ҵ�����Ĵ����������ɴ��������󼰴�����������(�����������)һ�����ظ�`DispatcherServlet`��

* ��4��`DispatcherServlet` ���� `HandlerAdapter`��������������

* ��5��`HandlerAdapter` ����������þ��崦����( `Handler` ��Ҳ�к�˿�����)��

* ��6��`Handler`ִ����ɷ���`ModelAndView`��

* ��7��`HandlerAdapter`��`Handler`ִ�н��`ModelAndView`���ظ�`DispatcherServlet`��

* ��8��`DispatcherServlet`��`ModelAndView`����`ViewResolver`��ͼ���������н�����

* ��9��`ViewResolver`�����󷵻ؾ���`View`�� 

* ��10��`DispatcherServlet`��`View`������Ⱦ��ͼ������ģ�������������ͼ�У�

* ��11��`DispatcherServlet`��Ӧ�û���

![alt text](img/image.png)

**���� 7**
# Spring MVC��Spring Boot֮���������ʲô��
Spring MVC��Spring Boot��Spring��̬ϵͳ�е�������Ҫ���֣�����֮�����Ҫ�������£�

**1.��λ��ͬ��**

* Spring MVC��һ��Web��ܣ����ڹ���WebӦ�ó���

* Spring Boot��һ������Spring�Ŀ�����ܣ�ּ�ڼ�SpringӦ�õĴ����Ϳ������̡�

**2.���÷�ʽ��**

* Spring MVC��Ҫ���ô�����XML��Java���ã���DispatcherServlet����ͼ�������ȡ�

* Spring Boot�ṩ�Զ����ã����������ù��̣�������з��������á�

**3.Ƕ��ʽ��������**

* Spring MVCͨ����Ҫ�������ⲿ��Servlet�����С�

* Spring Boot��Ƕ��Servlet��������Tomcat����ʹ��Ӧ�ÿ��Զ������С�

**4.��;��**

* Spring MVC��Ҫ����WebӦ�õ���ͼ�Ϳ��Ʋ㡣

* Spring Boot�������ڸ������͵�SpringӦ�ã�����WebӦ�á�

**���� 8**
# ʲô��Spring MVC���򵥽��������Spring MVC����⣿�Լ���ʲô�ŵ㣿
***����ܹ�*** 
![alt text](img/image-6.png)
һ��**��������**��**����MVC��Web��Ӧ�ÿ��**��ƫǰ�˶����ǻ���ҵ���߼��㣬��Spring��ܵ�һ��������Ʒ��ͨ����ģ��-��ͼ-���������룬��web�����ְ�����Ѹ��ӵ�webӦ�÷ֳ��߼������ļ����֣��򻯿��������ٳ����������ڿ�����Ա֮�����ϡ�

Spring MVC��һ��**�ֲ����˼��**��Ŀ���ǽ����ӵ�Ӧ��ϵͳ���շֲ㴦�������ƺ͹滮,ͨ��������Ʒ�ʽ�ﵽ�ֶ���֮��Ч��,�Ӷ����ͳ��򿪷����Ѷ�,��ߴ���Ŀ�ά����. Spring MVC�������� DispatcherServlet ������һ�� Servlet��������ʵ�ֵ�Servlet�ӿڡ�

**Spring MVC���ŵ㣺**
* ��1������֧�ָ�����ͼ����,��������������JSP�� 

* ��2����Spring��ܼ��ɣ���IoC������AOP�ȣ��� 

* ��3�������Ľ�ɫ���䣺ǰ�˿�����(DispatcherServlet) , ���󵽴�����ӳ�䣨handlerMapping��, ��������������HandlerAdapter��, ��ͼ��������ViewResolver���� 

* ��4��֧�ָ���������Դ��ӳ����ԡ�

**���� 9**
# SpringMVC����ԭ���������ʲô��
Spring MVC �Ĺ���ԭ������̿��Է�Ϊ������裬���û�����Ľ��յ���Ӧ�����ɣ�ÿ�����趼�����ض�������͹��ܡ������� Spring MVC �Ĺ���������ϸ������

**��������**

**1.�û�����**��

* �û�ͨ���������ͻ��˷�������ͨ����һ�� HTTP ���󣬰���һЩ������������Ϣ��

**2.ǰ�˿�������DispatcherServlet��**��
  * �����������ȵ��� DispatcherServlet������ Spring MVC ����������������������������Ӧ���������̡�

**3.������ӳ������HandlerMapping��**��
* DispatcherServlet ���������� URL ���� HandlerMapping���������������ƥ��Ĵ�������Handler����

* HandlerMapping ����ͨ�����ַ�ʽ����ƥ�䣬�����ע�⣨@RequestMapping����XML ���õȡ�

**4.��������������HandlerAdapter��**��
* һ���ҵ����ʵĴ�������DispatcherServlet ������ HandlerAdapter���������͵��ҵ��Ĵ�������

* HandlerAdapter �������ǽ����������䵽 Spring MVC �У�����ͬ���͵Ĵ�����������

**5.��������Handler��**��
* ����ҵ���߼����ɾ���� Handler��ͨ���� Controller������������������ִ����Ӧ��ҵ���߼���������һ�� ``ModelAndView`` ����

* `ModelAndView` �������ģ�����ݺ���ͼ�����ƣ�ģ�����ݽ������ݵ���ͼ�н���չʾ��

**6.��ͼ��������ViewResolver��**��    
* DispatcherServlet ʹ�� ViewResolver �� Controller ���ص���ͼ�߼���������ʵ�ʵ���ͼʵ�֣��� JSP��Thymeleaf��FreeMarker �ȣ���

* ��ͼ�������������ã���ǰ׺����׺����ϳ���ʵ����ͼ·����

**7.������Ӧ��View����**

* һ����������ͼ��Spring MVC �Ὣģ�����ݴ��ݸ���ͼ����ͼ����Ⱦ�����յ� HTML ҳ����������͵���Ӧ���� JSON��PDF �ȣ���

* ��Ⱦ��ɺ����ɵ���Ӧ�᷵�ص� DispatcherServlet��

**8.������Ӧ���û���**

* DispatcherServlet ����ͼ������������� HTML ҳ���������ʽ����Ӧ���ݣ����ظ��û����������ͻ��ˡ�
![alt text](img/image-1.png)

**���� 10**
# Spring MVC��Struts2����
* **��ͬ��** ���ǻ���mvc�ı��ֲ��ܣ�������web��Ŀ�Ŀ�����

* **��ͬ��**
    * **ǰ�˿�����**��SpringMVC �� Servlet��DispatcherServlet����Struts2 �� Filter��StrutsPreparedAndExcutorFilter����

    * **�����������**��SpringMVC �÷����βΣ����ڷ����������̰߳�ȫ���Ƽ�������Struts2 �����Ա�����������࿪�����̲߳���ȫ��ֻ�ܶ�����

    * **���ݴ���**��Struts ��ֵջ�� OGNL ��ȡ���ݣ�SpringMVC �ò����������������βθ�ֵ����װ ModelAndView��ͨ�� request �����ݣ�Jsp ��ͼ������Ĭ���� Jstl��
    * **�� Spring ����**��SpringMVC �� Spring һ���֣��������ϣ���ҵ��Ŀʹ�öࡣ
    * **Struts2 �ص�**���༶�����أ�ÿ�����󴴽� action�����Ա���������ֻ�ܶ������޷���ע�⿪�������̰߳�ȫ���⡣ͨ�������Ի�ģ���������ղ�������ֵջ�� OGNL ��ȡֵ�����Զ������ػ��ƣ������ļ���
    * **Spring MVC �ص�**�������������أ������Ӧ������������װ��������������������� @RequestBody��controller Ĭ�ϵ���������ע�⿪����ͨ���������� model �践��ֵ��ҳ���� el ���ʽ��ȡ���ж��� AOP ���ػ��ơ�

**���� 11**
# ������ִ�����̣�

* **����������**��������ִ���������� preHandle() ���������� true �����ִ�д���������������ֹͣ��ҵ�����������������ִ�� postHandle() ���������� DispatcherServlet ������Ӧ�����ִ�� afterCompletion() ������ִ������Ϊ��preHandle() �� ���������� �� postHandle() �� afterCompletion()��
![alt text](img/image-2.png)

* **���������**���� Spring MVC �����ļ������� Interceptor1 �� Interceptor2 �� Interceptor1 ��ǰΪ����preHandle() ����������˳��ִ�У�postHandle() �� afterCompletion() ����������˳����ִ�С�ִ������Ϊ��preHandle1 �� preHandle2 �� ���������� �� postHandle2 �� postHandle1 �� afterCompletion2 �� afterCompletion1 �������������ʱ��preHandle ������ִ�У����෽������ִ�С�
![alt text](img/image-3.png)

**���� 12**
# ����Spring MVC��@PathVariableע�͵����� ��

�� Spring MVC �`@PathVariable` ע��ɽ� URL �е�ģ�������URI �������󶨵�������������������ʹ�� RESTful ��� URL�����в����������û�����仯����Ҫ���仯������Ϊ�����������������ʱ����ʹ�ø�ע�⡣
* ���磬��ȡ�ض��û���Ϣ�� URL Ϊ /users/575������ 575 �� URI �����������յ� /users/123 ����ʱ��123 ���� userId �ľ���ֵ���ڿ�����������ʹ�� @PathVariable ע���ȡ��ֵ��

```java
@RequestMapping(value = "/users/575", method = RequestMethod.GET)
public String getUser(@PathVariable("userId") Long userId, Model model) {
    // �� userId ��ȡ�û���Ϣ����ӵ�ģ��
    return "userDetails";
}
```
���� @PathVariable("userId") ���� Spring MVC �� URL ��ȡ��Ӧֵ��תΪ Long ���ͺ󴫸� userId ������
�� URI �������ͷ�����������ͬ����ʡ�� @PathVariable �е�ֵ��
```java
@RequestMapping(value = "/users/575", method = RequestMethod.GET)
public String getUser(@PathVariable Long userId, Model model) {
    // ...
    return "userDetails";
}
```
��ʱ Spring MVC ���Զ�ƥ�� URI �����ͷ���������

**���� 13**
# @Controllerע�������

�� Spring MVC �У������� `Controller` ���� `DispatcherServlet` �ַ������󣬽����������ݷ�װ�� `Model` ���� `View` չʾ������ `Controller` �ܼ�㣬����̳��ض����ʵ�ֽӿڣ��� `@Controller` ����࣬��� `@RequestMapping`��`@RequestParam` ��ע�ⶨ�� URL �뷽����ӳ�䣬���ɱ������ʣ��Ҳ�ֱ������ `HttpServletRequest` �� `HttpServletResponse����ͨ������������ȡ��`

`@Controller` ��ǵ����� Spring MVC �Ŀ��������󣬷ַ���������ɨ����ʹ�� `@RequestMapping` ע��ķ������������� `@Controller` ��ǻ����������� Spring ������࣬�����ַ�ʽ��һ���������ļ����� bean ���󣻶����������ļ�ָ������ `@Controller` ������λ�á�

ʹ�� `@Controller` ע�ⲽ�����£�
1. **������������**������ Java �ಢ�� @Controller ��ע��
```java
@Controller
public class HelloController {
    @GetMapping("/hello")
    public String hello() {
        return "hello";
    }
}
```
2. **��д����������**���ڿ��������б�д�������󡢷�����Ӧ�ķ���������ע��ָ������ URL�������Ȳ������� `@GetMapping("/hello")` ָ������ URL������ ��hello�� ��ʾ��Ⱦͬ����ͼ��
3. **������ͼ������**��Ϊ����ͼ���ƽ���Ϊʵ����ͼ����������ͼ��������
```java
@Bean
public ViewResolver viewResolver() {
    InternalResourceViewResolver resolver = new InternalResourceViewResolver();
    resolver.setPrefix("/WEB-INF/views/");
    resolver.setSuffix(".jsp");
    return resolver;
}
```
�������뽫ǰ׺��Ϊ `/WEB-INF/views/`����׺��Ϊ `.jsp`�������� ��hello�� ʱ�������Ϊ `/WEB-INF/views/hello.jsp`��

4. **����Ӧ�ó���**������Ӧ�ú���� http://localhost:8080/hello �ɿ�����ͼ���ݡ�
```java
@SpringBootApplication
public class MyApp {
    public static void main(String[] args) {
        SpringApplication.run(MyApp.class, args);
    }
}
```
**���� 14**
# SpringMVC��Ҫ�������������ʲô��
![alt text](img/image-4.png)

**���� 15**
# ����@RestController �� @Controller ��ʲô����
�� Spring MVC �@Controller��@RestController�����ڱ�ʶ��Ϊ Spring MVC �� controller ���������ܽ��� HTTP ���󣬵������б�
* **�������ͣ�**@Controller���ڽ������󲢷�����ͼ���� HTML��JSP���������� MVC ģʽ���䷽������String��ModelAndView��Map<String, Object>�ȣ����������ͼ��@RestController�����ڷ������ݣ�JSON��XML �ȣ�������@Controller��@ResponseBody����ϡ���ע���µķ���ֻ�ܷ��� Java Bean�������������͵ȣ�Spring ���Զ�תΪ JSON �� XML ��ʽ��
  
* **��ͼ������**@Controller�����InternalResourceViewResolver��ͼ��������������ת JSP��HTML ҳ�档@RestController����Ҫ�������ݣ��޷�����ָ��ҳ�棬��ͼ������Ҳ�������á�

��֮���践�� HTML ҳ����@Controller���践�� JSON��XML ����������@RestController ��

**���� 16**
# Spring MVC �е�������ģʽ��ΪʲôҪ�� Spring MVC ��ʹ��������ģʽ����
�� Spring MVC �У�DispatcherServlet ����������Ϣ���� HandlerMapping�����������Ӧ�� Handler����������Ӧ�� Handler��Ҳ��������ƽ��˵�� Controller ���������󣬿�ʼ��HandlerAdapter ����������HandlerAdapter ��Ϊ�����ӿڣ������������ʵ�������ڶ�Ŀ����������䣬Controller ��Ϊ��Ҫ�������

Spring MVC �е� Controller �����ڶ࣬��ͬ���͵� Controller ͨ����ͬ�ķ�������������д������������������ģʽ�Ļ���DispatcherServlet ֱ�ӻ�ȡ��Ӧ���͵� Controller����Ҫ���������жϣ���������δ���һ����
```
 if(mappedHandler.getHandler() instanceof MultiActionController){
    ((MultiActionController)mappedHandler.getHandler()).xxx
 }else if(mappedHandler.getHandler() instanceof XXX){
     ...
 }else if(...){
    ...
 }
```
��������������һ�� Controller���;�Ҫ������������ټ���һ�� �ж���䣬������ʽ��ʹ�ó�������ά����ҲΥ�������ģʽ�еĿ���ԭ�� �C ����չ���ţ����޸Ĺرա�