<!--
 * @Description: 
 * @Author: ljl
 * @Date: 2025-04-10 16:06:59
 * @LastEditors: rendc
 * @LastEditTime: 2025-04-10 19:32:50
-->
- [@Autowired��@Resource�к�����](#autowired��resource�к�����)
- [@Configuration��@Component��ʲô����](#configuration��component��ʲô����)
- [BeanFactory��FactoryBean��ʲô����](#beanfactory��factorybean��ʲô����)
- [Bean���������ڣ�](#bean����������)
- [Spring Bean�����԰�ȫ����](#spring-bean�����԰�ȫ����)
- [SpringAOP����Щ���������](#springaop����Щ�������)

**���� 1**
# @Autowired��@Resource�к�����

* `@Autowired` �� `@Resource` �� Spring �г��õ�����ע��ע�⣬֧�����ԡ��������� Setter ����ע�룬Ҳ֧�����ע����ƣ������������£�

* ��Դ��
  * `@Autowired` �� Spring ע�⣬��org.springframework.beans.factory.annotation ����
  * `@Resource` �� JSR250 �淶ע�⣬JDK9 ǰ�� javax.annotation ����JDK9 ������ jakarta.annotation ����

* ���ԣ�
    * `@Autowired` ֻ�� required ����ָ�������Ƿ������������޷�ȷ��Ψһ��������ʱ������ @Qualifier ָ�� beanName��
    * `@Resource` �� name �� type ���ԣ��ܸ���ȷָ��ע��� Bean��Ĭ�ϷǱ��Ҳ��ͨ�� @Nullable �� Optional ʵ�֡�

* ƥ�䷽ʽ��
    * `@Autowired` Ĭ�ϰ�����ƥ�䣬���ж������ٰ�����ƥ�䣻
    * `@Resource` Ĭ�ϰ�����ƥ�䣬�޽��������ƥ�䣬���ֻ��Ʊ���Ϊ���ˡ�

* ע�⴦������
    * `@Autowired` �� AutowiredAnnotationBeanPostProcessor ����
    * `@Resource` �� CommonAnnotationBeanPostProcessor �������ߵײ㶼�����Ϊ InjectionMetadata ���ע�롣

**���� 2**
# @Configuration��@Component��ʲô����
* @Configuration �ǻ��� @Component �����ע�⣬
    * **���߶�**�ܽ�������Ϊ Spring �����е� Bean��
    * �ڲ��� @Bean ע��Ĺ����������صĶ���Ҳ���Ϊ Spring �����е� Bean��
* ��Ҫ**����**��������ģʽ��ͬ��
    * **Full ģʽ**��Full @Configuration mode��
        * **��ʽ**���ڴ� @Configuration ע����������� @Bean ע��ķ�����
        * **�ص�**��
            * **����**���������ͨ�� ConfigurationClassEnhancer ���� CGLib ��������������Ĵ�
            * **�������η�**����� @Bean ���������� private �� final ���Ρ�
            * **�������ý��**������������� @Bean ���������صĶ��� Spring �����е� Bean��
        * **�Ż�**��Spring 5.2 �� @Configuration ���� proxyBeanMethods ���ԣ�Ĭ�� true����Ϊ false �򲻴�����Ϊ Lite ģʽ��
    * **Lite ģʽ**����lite�� @Bean mode��
        * **��ʽ**������ @Configuration���� proxyBeanMethods Ϊ true�������������������������� @Import �������� @Component ע�������������
        * **�ص�**��
            * **����**��������ǿ�������� CGLib ����
            * **�������η�**����� @Bean �������� private �� final ���Ρ�
            * **�������ý��**��������� @Bean ���������ص����´����Ķ���
        * **�������**����������Ҳ��ҵ���࣬�� @Transcational ��ע��ķ������Ի���������� ConfigurationClassEnhancer���������˽�ע����Ч�߼����ɽ���ĵ��Ķ� ConfigurationClassPostProcessor �������� enhanceConfigurationClasses ����Դ�롣

**���� 3**
# BeanFactory��FactoryBean��ʲô����
BeanFactory �� FactoryBean ���� Bean �Ĵ���������أ�������������
* **����**��
    * BeanFactory ��������봴�� Bean��
    * FactoryBean �ǽӿڣ���ʵ�ֶ��ƻ� Bean �����߼���
* **��ɫ**��
    * BeanFactory �� Spring ��ܺ��ģ��������� Bean ����
    * FactoryBean ��һ�ֶ��ƻ� Bean ʵ������ʽ��
* **ʹ�÷�ʽ**��
    * BeanFactory ͨ�����������ļ���ע������� Bean��
    * FactoryBean �迪����ʵ���Զ��幤�������ṩ���ƻ������߼���

**���� 4**
# Bean���������ڣ�
* **ʵ�����׶Σ�**
    * Spring ���ƶ� Bean ���ͣ���ͨ�� Supplier �ӿڡ�������������������ʵ����������ע��Ҳ�ڴ˽׶���ɡ�
* **����ע��׶Σ�**
    1. ����һ�����棬���� ObjectFactory �Դ���ѭ��������
    2. �� MergedBeanDefinitionPostProcessor ���������� Bean ע�����Ժͷ����������������Զ�װ��Ԫ���ݡ�
    3. ����ɷ�ע��ʽ����ע�룬���� InstantiationAwareBeanPostProcessor ��������ע������ע�롣
* **��ʼ���׶Σ�**
    * ���� BeanFactoryAware��ClassLoaderAware��BeanNameAware 3 ������ Aware �ӿڡ�
    * ִ�� BeanPostProcessor ǰ�ô�������ִ�� @PostConstruct �� @PreDestory ע�ⷽ�������� 6 �������� Aware �ӿڣ����� InitializingBean �ӿڼ��Զ����ʼ��������
    * ִ�� BeanPostProcessor ���ô��������������
* **���ٽ׶Σ�**
    1. �� Bean ��װΪ DisposableBeanAdapter��
    2. ������ destroy ���������ε��� DestructionAwareBeanPostProcessor ������������DisposableBean �ӿڵ� destroy ��������ʵ�֣����Զ������ٷ�����

**���� 5**
# Spring Bean�����԰�ȫ����
* Spring Bean �Ƿ��̰߳�ȫ����һ�Ŷ��ۣ���Ҫ���� Bean ���������ʵ�ַ�ʽ���жϡ�
* ����ƺ�ʹ�� Spring Bean ʱ��Ҫ���ݾ����ҵ������ͳ���������ѡ�� Bean �������򣬲���ȡ��Ӧ�Ĵ�ʩ����֤�̰߳�ȫ��

**���� 6**
# SpringAOP����Щ���������
1. **֪ͨ�� Advisor��**
    * Advisor �� Spring AOP ��ǿ���ܵĻ�����Ԫ�������Ϊһ�� ����ǿ������
    * ���õ����е�֪ͨ�� PointcutAdvisor����֪ͨ Advice��������ǿ�߼������е� Pointcut���ж���Щ�����ɱ���ǿ����ɣ�����֪ͨ�� IntroductionInfo �����ã����ñ��������ʵ��ԭ��δʵ�ֵĽӿڡ�
2. **�е� Pointcut��**
    * �� PointcutAdvisor �Ĺؼ����֣���һ�� ��ɸѡ�������ж�����ķ����Ƿ��ܱ���ǿ��
    * ���������� AspectJExpressionPointcut������ AspectJ �������� @Pointcut ע�ⷽ����������ƥ�����񷽷���@Transactional���� TransactionAttributeSourcePointcut��ƥ�仺�淽����@Cacheable �ȣ��� CacheOperationSourcePointcut �ȡ�
3. **֪ͨ Advice��**
    * �� Advisor ����������ǿ�߼�����Ҫ��Ŀ�귽�����Ĳ�����
    * ��ִ��ʱ�������ࣺ����ִ��ǰ�� BeforeAdvice��ֱ�����ط������õĻ���֪ͨ InterceptorAdvice������ִ�к�� AfterAdvice���ַ��������غ�� AfterReturningAdvice ���׳��쳣ʱ�� ThrowsAdvice����AspectJ ���淽������Ҳ������Щ��ʽ��
4. **���������� MethodInterceptor��**
    * �� Advice �г��õ����࣬Spring �Դ� AOP �ܶ๦�ܿ���ʵ�֣��������첽�ȡ�
    * ����ȫ����Ʒ������ù��̣������ص��á��Ĳ�����������ֵ���쳣�ȡ�
5. **֯��� Joinpoint��MethodInvocation����**
    * �ɿ���һ�α����صķ������ã�������������󡢱����ط��������ò�����������������Ϣ��
    * ���� MethodInvocation.proceed () ������ִ������������ֱ������ԭʼ���������ƹ���������
6. **AbstractAutoProxyCreator �Զ�����������**
    * Springaa ���Զ�Ϊ�����ض�ע��� Bean ����������󣬿��ľ���������ơ�
    * ���������� AbstractAdvisorAutoProxyCreator��������� Advisor ����Ļ����߼�����AspectJAwareAdvisorAutoProxyCreator���û��� AspectJ �� Advisor ���������򣩡�AnnotationAwareAspectJAutoProxyCreator��֧�� AspectJ ע������棩��
7. **ProxyFactoryBean �ֶ���������**
    * ���Զ������⣬Spring ���ṩ�ֶ���������ķ�ʽ��ԭ����Զ�����һ����
8. **������ ProxyFactory��**
    * �Ǵ��� Spring ����������ײ��������һ�� ���ӹ��������� Advisor �����÷Ž�ȥ�������������������
9. **Ŀ��Դ TargetSource��**
    * ������ȡ��������󣬴�����󷽷�������ʱ������ͨ�����õ�����������ٺ������������ MethodInvocation��
    * һЩ���⹦���� @Autowired ��� @Lazy ���ӳ�ע�룬�Ϳ���������ʵ��������ɡ�