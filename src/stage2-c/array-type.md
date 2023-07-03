---
title: array
icon: gears
order: 4
category:
  - 第一阶段 - 开发环境
tag:
  - c
  - 整型
---

目标：学习c语言基础类型，及相关概念。

参考：
- [array initialization](https://en.cppreference.com/w/c/language/array_initialization)
- [eval order](https://en.cppreference.com/w/c/language/eval_order)
- [storage_duration](https://en.cppreference.com/w/c/language/storage_duration)


## array

### 函数2维数组传参
```c
#include <stdio.h>

#define LEN 5

void method1(int (*a)[], int rows, int cols)
{
    int c = (*a)[cols * 2 + 4];
    printf("%d\n", c);
}

void method2(int (*a)[LEN], int rows)
{
    int c = a[2][4];
    printf("%d\n", c);
}

void method3(int *a[], int rows, int cols)
{
    int c = ((int*)a)[cols * 2 + 4];
    printf("%d\n", c);
}

void method4(int **a, int rows, int cols)
{
    int c = ((int*)a)[cols * 2 + 4];
    printf("%d\n", c);
}

void method5(int a[][LEN], int rows)
{
    int c = a[2][4];
    printf("%d\n", c);
}

void method6(int a[LEN][LEN])
{
    int c = a[2][4];
    printf("%d\n", c);
}

int main()
{ 
    int a[LEN][LEN] = {{1,2,3,}, [2][4] = 7};
    method1(a, LEN, LEN);
    method2(a, LEN);
    method3((int**)a, LEN, LEN);
    method4((int **)a, LEN, LEN);
    method5(a, LEN);
    method6(a);
    return 0;
}
```

### 局部性原理
```c
#include <stdio.h>
#include <stdlib.h>
#include <Windows.h>

#define SIZE 10240

int main()
{

    int* a[SIZE] = { 0 };
    for (int i = 0; i < SIZE; i++)
    {
        a[i] = malloc(sizeof(int) * SIZE);
    }

    ULONGLONG t1 = GetTickCount64();
    for (int i = 0; i < SIZE; i++)
    {
        for (int j = 0; j < SIZE; j++)
        {
            a[i][j] = 1;
        }
    }

    ULONGLONG t2 = GetTickCount64();
    for (int i = 0; i < SIZE; i++)
    {
        for (int j = 0; j < SIZE; j++)
        {
            a[j][i] = 2;
        }
    }

    ULONGLONG t3 = GetTickCount64();

    printf("diff 1: %ull\n", t2 - t1);
    printf("diff 2: %ull\n", t3 - t2);
    return 0;
}
```

结果：
```text
diff 1: 141ll
diff 2: 781ll
```

:::warning NOTES
```c

```
:::

## malloc/free

## string

- [string literal](https://en.cppreference.com/w/c/language/string_literal)
- [string library](https://en.cppreference.com/w/c/string)
- [Character Encoding](https://en.wikipedia.org/wiki/Character_encoding)

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
