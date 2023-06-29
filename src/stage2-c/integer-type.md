---
title: 整型
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
- [integer_constant](https://en.cppreference.com/w/c/language/integer_constant)


## 整型分类图

```mindmap
root((c整型))
  char类
    ))char((
    signed char
    unsigned char
  short类
    short <br/> short int <br/> signed short <br/> signed short int
    unsigned short <br/> unsigned short int
  int类
    int <br/> signed <br/> signed int
    unsigned <br/> unsigned int
  long类
    long <br/> long int <br/> signed long <br/> signed long int
    unsigned long <br/> unsigned long int
  long long类
    long long <br/> long long int <br/> signed long long <br/> signed long long int
    unsigned long long <br/> unsigned long long int
```

:::warning 注意
- `char`与`signed char`不是同一类型。而其它整型比如`int`与`signed int`等价。
  当使用`signed char * = char *`的类似转换时，会有告警。
  [为什么char与signed char有区别](https://stackoverflow.com/questions/15533115/why-dont-the-c-or-c-standards-explicitly-define-char-as-signed-or-unsigned)
- 类型单词顺序不重要，`unsigned long long int`与`long int unsigned long`是一个意思。
:::

## 变量定义
```c
int d = 42;
int o = 052;
int x = 0x2aB; // 大小写无关
int X = 0X2Ab;
int b = 0b101010; // C23
int B = 0B101010; // C23

// u l 顺序无关
// ll = LL , 但lL Ll不行
unsigned long long l1 = 18446744073709550592ull; // C99
unsigned long long l2 = 18'446'744'073'709'550'592llu; // C23
unsigned long long l3 = 1844'6744'0737'0955'0592uLL; // C23
unsigned long long l4 = 184467'440737'0'95505'92LLU; // C23
```

## 字符char
- 与byte有什么关系?c中没有byte关键字，一般开发过程中使用`unsigned char`来表示byte。
- [ASCII](https://en.cppreference.com/w/cpp/language/ascii)
- sizeof, size_t
- wchar_t?

:::warning 注意一些差异
``` c
// gcc: sizeof('a') = 4;
// g++: sizeof('a') = 1;
printf("%zu %zu\n", sizeof(char), sizeof('a'));
```
:::

## 其它整形
- short, int, long, long long
- long int, long long int
- WORD? DWORD? (WinDef.h)
- 大端，小端
- [Data Model](https://en.cppreference.com/w/cpp/language/types)。类型大小是compiler-defined, c99标准只定义了最小范围
- 固定大小使用`stdint.h`(c++: `cstdint`)

## 数据大小
- 各个整型的具体大小不定，由编译平台定义实现。读[Date Model](https://en.cppreference.com/w/c/language/arithmetic_types)。
- 即使大小不定，但c标准保证: 
  `1 == sizeof(char) ≤ sizeof(short) ≤ sizeof(int) ≤ sizeof(long) ≤ sizeof(long long)`。
- 在实际开发中，对整形表示范围敏感的数据，使用[`stdint.h`](https://en.cppreference.com/w/c/types/integer)中的类型（c++为`cstdint`）。

## 运算
- 原码、反码、补码
- 数学运算
- 位运算
- 注意上/下溢

