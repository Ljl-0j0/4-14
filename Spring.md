<!--
 * @Description: 
 * @Author: ljl
 * @Date: 2025-04-10 16:06:59
 * @LastEditors: rendc
 * @LastEditTime: 2025-04-10 19:32:50
-->
- [@Autowired和@Resource有何区别？](#autowired和resource有何区别)
- [@Configuration和@Component有什么区别？](#configuration和component有什么区别)
- [BeanFactory和FactoryBean有什么区别？](#beanfactory和factorybean有什么区别)
- [Bean的生命周期？](#bean的生命周期)
- [Spring Bean是线性安全的吗？](#spring-bean是线性安全的吗)
- [SpringAOP有哪些核心组件？](#springaop有哪些核心组件)

**试题 1**
# @Autowired和@Resource有何区别？

* `@Autowired` 和 `@Resource` 是 Spring 中常用的依赖注入注解，支持属性、构造器和 Setter 方法注入，也支持组合注解机制，二者区别如下：

* 来源：
  * `@Autowired` 是 Spring 注解，在org.springframework.beans.factory.annotation 包；
  * `@Resource` 是 JSR250 规范注解，JDK9 前在 javax.annotation 包，JDK9 及后在 jakarta.annotation 包。

* 属性：
    * `@Autowired` 只有 required 属性指定依赖是否必填，当按类型无法确认唯一依赖对象时，需用 @Qualifier 指定 beanName；
    * `@Resource` 有 name 和 type 属性，能更精确指定注入的 Bean，默认非必填，也可通过 @Nullable 或 Optional 实现。

* 匹配方式：
    * `@Autowired` 默认按类型匹配，若有多个结果再按名称匹配；
    * `@Resource` 默认按名称匹配，无结果则按类型匹配，这种机制被称为回退。

* 注解处理器：
    * `@Autowired` 由 AutowiredAnnotationBeanPostProcessor 处理，
    * `@Resource` 由 CommonAnnotationBeanPostProcessor 处理，二者底层都会解析为 InjectionMetadata 完成注入。

**试题 2**
# @Configuration和@Component有什么区别？
* @Configuration 是基于 @Component 的组合注解，
    * **二者都**能将类声明为 Spring 容器中的 Bean；
    * 内部带 @Bean 注解的工厂方法返回的对象也会成为 Spring 容器中的 Bean，
* 主要**区别**在于配置模式不同：
    * **Full 模式**（Full @Configuration mode）
        * **形式**：在带 @Configuration 注解的类中声明 @Bean 注解的方法。
        * **特点**：
            * **代理**：配置类会通过 ConfigurationClassEnhancer 生成 CGLib 代理对象，性能消耗大。
            * **访问修饰符**：类和 @Bean 方法不能用 private 和 final 修饰。
            * **方法调用结果**：无论内外调用 @Bean 方法，返回的都是 Spring 容器中的 Bean。
        * **优化**：Spring 5.2 中 @Configuration 新增 proxyBeanMethods 属性，默认 true，设为 false 则不代理，变为 Lite 模式。
    * **Lite 模式**（“lite” @Bean mode）
        * **形式**：不在 @Configuration（且 proxyBeanMethods 为 true）的类中声明工厂方法，如在 @Import 引入的类或 @Component 注解的类中声明。
        * **特点**：
            * **代理**：无需增强，不进行 CGLib 代理。
            * **访问修饰符**：类和 @Bean 方法可用 private 和 final 修饰。
            * **方法调用结果**：内外调用 @Bean 方法，返回的是新创建的对象。
        * **特殊情况**：若配置类也是业务类，有 @Transcational 等注解的方法，仍会代理，但不走 ConfigurationClassEnhancer。想深入了解注解生效逻辑，可结合文档阅读 ConfigurationClassPostProcessor 处理器的 enhanceConfigurationClasses 方法源码。

**试题 3**
# BeanFactory和FactoryBean有什么区别？
BeanFactory 和 FactoryBean 都与 Bean 的创建管理相关，但有显著区别：
* **功能**：
    * BeanFactory 负责管理与创建 Bean；
    * FactoryBean 是接口，可实现定制化 Bean 创建逻辑。
* **角色**：
    * BeanFactory 是 Spring 框架核心，负责整体 Bean 管理；
    * FactoryBean 是一种定制化 Bean 实例化方式。
* **使用方式**：
    * BeanFactory 通常借助配置文件或注解管理创建 Bean；
    * FactoryBean 需开发者实现自定义工厂类来提供定制化创建逻辑。

**试题 4**
# Bean的生命周期？
* **实例化阶段：**
    * Spring 先推断 Bean 类型，再通过 Supplier 接口、工厂方法或构造器创建实例，构造器注入也在此阶段完成。
* **依赖注入阶段：**
    1. 设置一级缓存，放置 ObjectFactory 以处理循环依赖。
    2. 用 MergedBeanDefinitionPostProcessor 后处理器处理 Bean 注解属性和方法，解析并缓存自动装配元数据。
    3. 先完成非注解式依赖注入，再用 InstantiationAwareBeanPostProcessor 后处理器按注解配置注入。
* **初始化阶段：**
    * 触发 BeanFactoryAware、ClassLoaderAware、BeanNameAware 3 个基础 Aware 接口。
    * 执行 BeanPostProcessor 前置处理，包括执行 @PostConstruct 和 @PreDestory 注解方法，触发 6 个容器级 Aware 接口，调用 InitializingBean 接口及自定义初始化方法。
    * 执行 BeanPostProcessor 后置处理，创建代理对象。
* **销毁阶段：**
    1. 将 Bean 包装为 DisposableBeanAdapter，
    2. 调用其 destroy 方法，依次调用 DestructionAwareBeanPostProcessor 后处理器方法、DisposableBean 接口的 destroy 方法（若实现）和自定义销毁方法。

**试题 5**
# Spring Bean是线性安全的吗？
* Spring Bean 是否线程安全不能一概而论，需要根据 Bean 的作用域和实现方式来判断。
* 在设计和使用 Spring Bean 时，要根据具体的业务需求和场景，合理选择 Bean 的作用域，并采取相应的措施来保证线程安全。

**试题 6**
# SpringAOP有哪些核心组件？
1. **通知器 Advisor：**
    * Advisor 是 Spring AOP 增强功能的基本单元，可理解为一个 “增强包”。
    * 常用的有切点通知器 PointcutAdvisor，由通知 Advice（具体增强逻辑）和切点 Pointcut（判断哪些方法可被增强）组成；引介通知器 IntroductionInfo 很少用，能让被代理对象实现原本未实现的接口。
2. **切点 Pointcut：**
    * 是 PointcutAdvisor 的关键部分，像一个 “筛选器”，判断类里的方法是否能被增强。
    * 常见类型有 AspectJExpressionPointcut（处理 AspectJ 切面类中 @Pointcut 注解方法）、用于匹配事务方法（@Transactional）的 TransactionAttributeSourcePointcut、匹配缓存方法（@Cacheable 等）的 CacheOperationSourcePointcut 等。
3. **通知 Advice：**
    * 是 Advisor 里真正的增强逻辑，即要对目标方法做的操作。
    * 按执行时机分三类：方法执行前的 BeforeAdvice、直接拦截方法调用的环绕通知 InterceptorAdvice、方法执行后的 AfterAdvice（又分正常返回后的 AfterReturningAdvice 和抛出异常时的 ThrowsAdvice）。AspectJ 切面方法最终也会变成这些形式。
4. **方法拦截器 MethodInterceptor：**
    * 是 Advice 中常用的子类，Spring 自带 AOP 很多功能靠它实现，如事务、异步等。
    * 它能全面控制方法调用过程，像拦截调用、改参数、处理返回值和异常等。
5. **织入点 Joinpoint（MethodInvocation）：**
    * 可看作一次被拦截的方法调用，包含被代理对象、被拦截方法、调用参数和拦截器链等信息。
    * 调用 MethodInvocation.proceed () 会依次执行拦截器链，直到调用原始方法，类似过滤器链。
6. **AbstractAutoProxyCreator 自动代理处理器：**
    * Springaa 能自动为加了特定注解的 Bean 创建代理对象，靠的就是这个机制。
    * 常用子类有 AbstractAdvisorAutoProxyCreator（定义基于 Advisor 代理的基本逻辑）、AspectJAwareAdvisorAutoProxyCreator（让基于 AspectJ 的 Advisor 按规则排序）、AnnotationAwareAspectJAutoProxyCreator（支持 AspectJ 注解的切面）。
7. **ProxyFactoryBean 手动代理工厂：**
    * 除自动代理外，Spring 还提供手动创建代理的方式，原理和自动代理一样。
8. **代理工厂 ProxyFactory：**
    * 是创建 Spring 代理对象的最底层组件，像一个 “加工厂”。把 Advisor 等配置放进去，就能生产出代理对象。
9. **目标源 TargetSource：**
    * 用来获取被代理对象，代理对象方法被调用时，会先通过它拿到被代理对象，再和拦截器等组成 MethodInvocation。
    * 一些特殊功能如 @Autowired 配合 @Lazy 的延迟注入，就靠它的特殊实现类来完成。