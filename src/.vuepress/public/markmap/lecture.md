---
markmap:
  colorFreezeLevel: 3
---

# c/c++课程

## 启动

### 安排说明

- 了解彼此
- 为什么来学C/C++/QT？ \
  学员技术摸底、学习能力评估
- 我们为什么来做培训？ \
  市场需求大，入门门槛高，人才稀缺
- 我们怎么做？
  - 对比网络学习，公司培训的不同和优势
  - 课程安排
  - 考核指标
  - 纪律申明

### 闲聊历史

- 计算机发展
- 编程技术发展

## 一阶段 - 开发环境

### git
- 简提svn，git历史，代码管理思路
- ssh / http，及配置
- 仓库创建、克隆、删除
- Untracted、Unmodify、Modified、Staged四种状态
- commit / push / pull
- 分支管理（本地、远端）
- merge / rebase
- 冲突
- 回滚, 修改历史提交
- 强推，强拉
- ==学员练习== \
  学员使用自己的仓库练习

### Hello World

- 安装使用visual studio
- 对IDE有个初步熟悉，代码编写、调试、运行
- c/c++发展历史
- hello world，及代码结构

### 初识c语言

- 学员有一定语言(c/c++/java或其它)基础, 需要一次快速的语言印象,\
参看[learnxinyminutes c](learnxinyminutes.com/docs/c)
- 类比其它语言, 主要关注数据类型、数组、流程控制、函数声明调用, 带着写几个例子
- ==学员练习== \
目的: 基础开发, 加强IDE使用熟练

  - 使用`*`打印三角形
  - 输入n, 打印斐波那契数列（Fibonacci sequence）
  
## 二阶段 - 学习C

### 基础类型

- 内存地址和数据(32位 vs 64位)
- char, short, int, long, long long
- signed & unsigned, 原码、反码、补码
- sizeof, size_t
- 整形存放, 大端和小端概念和场景. 手写程序判定大小端
- 浮点数存放, 不精确的由来. 经典算法实现快速求平方根倒数 $\frac {1} {\sqrt x}$ \
  [Fast inverse square root](https://en.wikipedia.org/wiki/Fast_inverse_square_root) \
  [平方根倒数速算法](https://zhuanlan.zhihu.com/p/537091849)
- 算数运算、位运算，xor的魔力
- 类型的隐式、显式转换
- [字符 ASCII](https://en.wikipedia.org/wiki/ASCII)，\
  `char`与`w_char`
- 小例子，用逻辑门模拟加法
- 小例子，一堆数中，一个数出现奇数次，其它数出现偶数次，求这个数
- ==学员练习== \
  一堆数中，一个数出现1次，其它数出现3次，求这个数

  

### 数组与字符串
- 数组，初始化、大小、取值、修改
- 字符串，初始化、大小、取值、修改
- 字符串什么要空结尾
- 内存存放，长度、大小判断等
- 字符集与编码，\
  [UNICODE](https://en.wikipedia.org/wiki/Unicode)、\
  GBK、UTF-8、UTF-16等，`emoji`支持，更多知识放在`进阶`
- 换行符, `\n`,`\r\n`, `\r`
- 字符串比较与排序
- 发散引入`COLLATE`知识，更多知识放在`进阶`
- 扩展
  - `visual studio`中的字符集设置
  - Windows系统的编码设置
  - 文件的编码
- ==学员练习== \
  utf-8 <=> utf-16 互转
  
### 指针与内存
- 内存模型
- malloc, free
- NULL?
- 指针，指针的指针等
- 结合其它小节逐步讨论指针

### 其它类型
- 函数
  - 参数传递
  - 返回值
- 枚举
- 结构体
  - 按位定义成员
  - 内嵌结构
  - 内存对齐，与大小
- 联合体

### 代码控制
- 条件判断、循环、switch、goto，以及其中的坑. 有趣的例子[Duff's device](https://en.wikipedia.org/wiki/Duff%27s_device)
- 变量生命周期
- 多文件引用
  - `#include "x.h"` vs `#include <x.h>`，目录查找顺序，及相关配置
  - 交叉引用与预防
- 修饰关键词，const、static、extern、inline等
- 宏
  - 编译处理
  - 预编译指令
  - `#`和`##`
  - 优秀实践，优点和避坑

### 常用函数
- 文件IO
- 随机
- 时间


### 了解底层
- 操作系统做了什么，程序是怎么跑起来的
- 编译器做了什么，编译过程，4个阶段
- 可执行程序有那些
  - PE格式、ELF格式
  - .exe、.dll、.lib、.sys、.a、.so 文件
- debug和release区别，用好符号文件做调试分析
- 一点点汇编知识
- 可执行程序在内存中怎么存，常量、全局变量、局部变量、堆栈等
- 函数调用过程
- 栈溢出
  
  
## 三阶段 - 学习C++

### C++印象

- 最近的发展
- 因为有C的基础，走读[learnxinyminutes c++](https://learnxinyminutes.com/docs/c++/)，形成一定的印象
- 与C的差异点。并非完全兼容
- 命名空间，作用域
- bool，优点与内存使用
- 函数引用传参
- string
- new, delete
- 异常处理x
- IO

### 面向对象
- class与struct
- 构造、析构等函数与new, delete
- 多态、继承、重载、重写等实际概念
- 访问控制, 及友元
- virtual、v_table，及对象模型
- static在类中的作用
- 操作符重载
- 模版

### RTTI与类型转换
- typeid, type_info
- static_cast, dynamic_cast, reinterpret_cast, const_cast


## 四阶段 - 知识矩阵

### 数据结构&算法
- 栈、堆、列表、Hash、树、图等数据结构定义和操作
- c/c++常用容器和方法
  - vector
  - set
  - map
  - stack
  - queue
- 排序、搜索、寻路等
- 复杂度评估
- 字符串搜索
- 贪心、动态规划、BFS、DFS

### 操作系统
- 系统结构
- 并发
  - 进程、线程，协程
  - CPU调度
  - 通信
  - 同步、异步，阻塞、非阻塞，死锁·
- 内存管理
  - 分页、分段
  - 虚拟内存
  - 内存文件映射
- 文件系统

### 网络
- 网络分层
- 网络模型, 与拓扑结构
- 广播、组播. ARP、IP、ICMP、路由、VPN、NAT
- 传输层、TCP、UDP
- 应用层， DNS，HTTP，SMTP，RTP，DHCP、SNMP


## 五阶段 - Windows平台开发

### Win32
- 基本的窗口程序
- 消息机制，GetMessage/PeekMessage等
- 部分gdi/gdi+

### MFC
- 常用界面控件操作
- TCP/UDP等网络操作，测试、抓包
- 文件系统管理
- 系统进程管理

### 链接库
- dll、lib
- 风险与系统限制
- 工具使用

### HOOK
- 使用系统hook api
- 使用二进制手段
  - 使用动态, 静态分析工具等
  - 了解PE与逆向
  - 程序在内存的映射
  - DLL注入，钩子
  

## 六阶段 - Linux平台开发

### 熟悉linux
- 使用ubuntu，包管理
- 用户管理
- 常用工具及设置
- 目录结构，可执行、配置、设备、运行时数据
- 权限管理
- 正则表达式（方便使用awk、vim等工具）
- 常用命令操作
- vim常用操作
- shell脚本

### 开发工具
- 活用man查看文档
- gcc工具链为主，clang可做部分对比
- 细化编译阶段，后续过程中普及工具命令
- gdb调试
- Makefile, make, cmake, automake


### 开发
- 进程、线程及管理
- 信号和异常
- 网络开发、分析工具、防火墙
- 界面知识（X、wayland），可以根据情况使用sdl或者raylib做个游戏
- 一个跨平台（Windows、Linux）的示例

## QT

### QT印象
- 安装QT 5.12，一个`hello world`示例
- 简介QT工具连，界面功能
- 工程配置
- 逐步引入示例说明QApplication、QObject、Q_PROPERTY、信号槽使用

### QT组件
- 架构及工具链
- 机制原理。事件、对象树、信号槽
- 常用类型
- 常用GUI组件
- QML
- 文件IO
- 数据库操作
- 网络操作
- Visual Studio中开发QT

### 项目实训
- 串联多类知识的项目，视学员情况和时间而定。\
  可以是个类QQ的聊天、可以是游戏+管理端
