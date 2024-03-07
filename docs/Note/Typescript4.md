---
group: TypeScript
title: 内置工具类型的实现
order: 4
---

## `Record<T, U>`

用于构建一个对象类型，它的所有 key（键）都是 K 类型，它的所有 value（值）都是 T 类型
实现代码：

```ts
type Record<T extends keyof any, U> = {
  [P in T]: U;
};
```

## `Partial<T>`

将构造函数 T 的属性全变为可选：
实现代码：

```ts
type Partial<T> = {
  [K in keyof T]?: T[K];
};
```

## `Required<T>`

将构造函数 T 所有属性设为必选：
实现代码：

```ts
type Required<T> = {
  [K in keyof T]-?: T[K];
};
```

## `Exclude<T, U>`

用于构造一个类型，它是从 T 联合类型里面排除了所有可以赋给 U 的类型

```ts
type T0 = Exclude<'a' | 'b' | 'c', 'a'>;
// type T0 = "b" | "c"

type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;
// type T1 = "c"

type T2 = Exclude<string | number | (() => void), Function>;
// type T2 = string | number
```

实现代码：

```ts
type Exclude<T, U> = T extends U ? never : T;
```

## `Extract<T, U>`

## `Pick<T，K>`

## `Omit<T, K>`

## `ReturnType<T>`

## `NonNullable<T>`

## `Parameters<T>`
