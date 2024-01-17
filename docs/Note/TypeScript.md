---
group: TypeScript
title: Ts练习题
order: 2
---

## 第一题

```ts
type User = {
  id: number;
  kind: string;
};

function makeCustomer<T extends User>(u: T): T {
  // Error（TS 编译器版本：v4.4.2）
  // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
  // '{ id: number; kind: string; }' is assignable to the constraint of type 'T',
  // but 'T' could be instantiated with a different subtype of constraint 'User'.
  return {
    id: u.id,
    kind: 'customer',
  };
}
```

> 以上代码为什么会提示错误，应该如何解决上述问题？

答：T 只是约束于 User，但是不一定是 User 结构,所以`makeCustomer`的返回对象的类型与 T 并不一致。

第一种做法：将多余的返回值用拓展运算符。

```ts
function makeCustomer<T extends User>(u: T): T {
  return {
    ...u,
    id: u.id,
    kind: 'customer',
  };
}
```

第二种做法：将返回值类型限制为 User 类型

```ts
function makeCustomer<T extends User>(u: T): Pick<T, keyof User> {
  return {
    id: u.id,
    kind: 'customer',
  };
}
```

## 第二题

```ts
function f(a: string | number, b: string | number) {
  if (typeof a === 'string') {
    return a + ':' + b; // no error but b can be number!
  } else {
    return a + b; // error as b can be number | string
  }
}

f(2, 3); // Ok
f(1, 'a'); // Error
f('a', 2); // Error
f('a', 'b'); // Ok
```

> 本道题我们希望参数 a 和 b 的类型都是一致的，即 a 和 b 同时为 number 或 string 类型。当它们的类型不一致的值，TS 类型检查器能自动提示对应的错误信息。

解一：函数重载

```ts
function f(a: string, b: string): string;
function f(a: number, b: number): number;
function f(a: string | number, b: string | number): string | number {
  if (typeof a === 'string') {
    return a + ':' + b; // no error but b can be number!
  } else {
    return a + (b as number); // error as b can be number | string
  }
}
```

解二：类型守卫

```ts
type paramsType = string[] | number[];
function isStringArray(params: paramsType): params is string[] {
  return typeof params[0] === 'string';
}
function f(a: paramsType) {
  if (isStringArray(a)) {
    return a[0] + ':' + a[1]; // no error but b can be number!
  } else {
    return a[0] + a[1]; // error as b can be number | string
  }
}
```

## 第三题

> 定义一个 SetOptional 工具类型，支持把给定的 keys 对应的属性变成可选的。定义一个 SetRequired 工具类型，利用它可以把指定的 keys 对应的属性变成必填的。

解

```ts
type Flatten<T extends object> = { [K in keyof T]: T[K] };

type SetOptional<T extends object, K extends keyof T> = Flatten<
  Partial<Pick<T, K>> & Omit<T, K>
>;
type setRequired<T extends object, K extends keyof T> = Flatten<
  Required<Pick<T, K>> & Omit<T, K>
>;
```

## 第四题

> 定义一个 ConditionalPick 工具类型，支持根据指定的 Condition 条件来生成新的类型，对应的使用示例如下：

```ts
interface Example {
  a: string;
  b: string | number;
  c: () => void;
  d: {};
}

// 测试用例：
type StringKeysOnly = ConditionalPick<Example, string>;
//=> {a: string}
```

解一：
先定义一个`ConditionalKey`满足要求的类型的 key 以联合类型返回。
后利用内置工具类`Pick`挑选需要的键值对。

```ts
type ConditionalKey<T, V> = {
  [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];

type ConditionalPick<T, U> = Pick<T, ConditionalKey<T, U>>;
```

解二：
类型断言 as

```ts
type ConditionalPick<T, U> = {
  [P in keyof T as T[P] extends U ? P : never]: T[P];
};
```

## 第五题

> 定义一个工具类型 AppendArgument，为已有的函数类型增加指定类型的参数，新增的参数名是 x，将作为新函数类型的第一个参数。具体的使用示例如下所示：

```ts
type Fn = (a: number, b: string) => number
type AppendArgument<F, A> = // 你的实现代码

type FinalFn = AppendArgument<Fn, boolean>
// (x: boolean, a: number, b: string) => number
```

解一：
利用`Parameters`来获取函数的参数类型，利用`ReturnType`获取函数的返回类型

```ts
type AppendArgument<F extends (...args: any) => any, A> = (
  x: A,
  ...args: Parameters<F>
) => ReturnType<F>;
```

解二：
基于`infer`（`Parameters`和`ReturnType`工具类型也是基于 infer 实现）

```ts
type AppendArgument<F, A> = F extends (...args: infer Args) => infer Return
  ? (x: A, ...args: Args) => Return
  : never;
```
