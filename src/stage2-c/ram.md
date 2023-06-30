---
title: 内存地址和数据
icon: gears
order: 1
category:
  - 第二阶段 - 学习c语言
tag:
  - RAM
---

目标：
- 了解内存地址，32/64位区别。
- 方便讲解数据类型存放、结构体对齐、指针等知识。
- 更深入的知识放在后续操作系统中。

- [byte](https://en.wikipedia.org/wiki/Byte)
- [memory layout](https://www.geeksforgeeks.org/memory-layout-of-c-program/)
- 大端小端。
  小端：高位高地址，低位低地址。小端好处，方便类型扩展。
  比如0x1234，用16位解析跟32位一样。如果是大端用32位会变成0x12340000。
