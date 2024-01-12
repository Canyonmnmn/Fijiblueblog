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
> 解一：函数重载

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
