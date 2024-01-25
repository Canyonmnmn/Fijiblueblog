---
group: TypeScript
title: 类型体操（21～30）
order: 3
---

## 第二十一题

> 实现一个 Merge 工具类型，用于把两个类型合并成一个新的类型。第二种类型（SecondType）的 Keys 将会覆盖第一种类型（FirstType）的 Keys。具体的使用示例如下所示：

解一：

```ts
type Merge<T, U> = {
  //@ts-ignore
  [K in keyof (T & U)]: K extends keyof U ? U[K] : T[K];
};
```

解二：
omit

```ts
type Merge<T, U> = Omit<T, keyof U> & U;
```

## 第二十二题

> 实现一个 RequireAtLeastOne 工具类型，它将创建至少含有一个给定 Keys 的类型，其余的 Keys 保持原样。具体的使用示例如下所示：

```ts
type RequireAtLeastOne<
  ObjectType,
  KeysType extends keyof ObjectType = keyof ObjectType,
> = KeysType extends keyof ObjectType
  ? ObjectType & Required<Pick<ObjectType, KeysType>>
  : never;
```

## 第二十三题

> 实现一个 RemoveIndexSignature 工具类型，用于移除已有类型中的索引签名。具体的使用示例如下所示：

解：
在对象结构中，键的类型只能是 string、number、symbol。
但是在 keyof T 后生成的是每项是字面量类型的联合类型。

```ts
type Foo = {
  [key: string]: any;
  [key: number]: any;
  name: string;
  bar(): void;
};

type RemoveIndexSignature<T> = {
  [k in keyof T as string extends k
    ? never
    : number extends k
    ? never
    : symbol extends k
    ? never
    : k]: T[k];
};
type FooWithOnlyBar = RemoveIndexSignature<Foo>; //{ name:string;bar: () => void; }
```

## 第二十四题

> 实现一个 Mutable 工具类型，用于移除对象类型上所有属性或部分属性的 readonly 修饰符。具体的使用示例如下所示

```ts
type Mutable<T, Keys extends keyof T = keyof T> = Omit<T, Keys> & {
  -readonly [K in Keys]: T[K];
};
```
