---
title: array
icon: gears
order: 2
category:
  - 第一阶段 - 开发环境
tag:
  - c
  - 整型
---

目标：学习c语言基础类型，及相关概念。

参考：
- [cppreference.com 英文](https://en.cppreference.com)([中文](https://zh.cppreference.com))
- [ISO C99](https://www.dii.uchile.cl/~daespino/files/Iso_C_1999_definition.pdf)


## collate

```c
#include <stdio.h>
#include <string.h>
#include <locale.h>

int main()
{
    char *a = "a";
    char *b = "A";

    setlocale(LC_ALL, "en_US.UTF-8");
    int r1 = strcoll(a, b);
    printf("%d\n", r1);

    setlocale(LC_ALL, "zh_CN.utf8");
    int r2 = strcoll(a, b);
    printf("%d\n", r2);

    return 0;
}
```
