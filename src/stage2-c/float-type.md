---
title: 浮点类型
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
- [arithmetic types](https://en.cppreference.com/w/c/language/arithmetic_types)
- [floating_constant](https://en.cppreference.com/w/c/language/floating_constant)

## 类型
- float, double
- long double (size >= double, binary128 or binary64)
- _Decimal32, _Decimal64, _Decimal128 (if predefine __STDC_IEC_60559_DFP__a)
- complex, imaginary (complex.h)


## 变量定义
```c
// eg.
// - 2.0, 默认为double
// - 2.f, 2.F, float
// - 2.l, 2.L, long double

float inf = INFINITY; // implement defined, math.h
float inf = NAN; // implement defined, math.h
// the negative zero, -0.0. It compares equal to the positive zero, but is meaningful in some arithmetic operations, e.g. 1.0/0.0 == INFINITY, but 1.0/-0.0 == -INFINITY) 

```

## 浮点环境
- [fenv](https://zh.cppreference.com/w/c/numeric/fenv)


