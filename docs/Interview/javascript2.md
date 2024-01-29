---
group: JavaScript
title: ES6
order: 3
---

## var、let、const 的差异？

|       | 定义 | 作用域 | 暂时性死区 | 重复声明 | 全局 |
| :---- | :--: | :----: | :--------: | :------: | :--: |
| const | 常量 |  局部  |     是     |    否    |  否  |
| let   | 变量 |  局部  |     是     |    否    |  否  |
| var   | 变量 |  全局  |     否     |    是    |  是  |

`暂时性死区`：处于暂时性死区的变量，都只能先声明后访问。var 声明的变量存在变量提升。
`全局`：这里的全局指的是全局变量中的全局对象，挂载在`window`和`globalThis`上。

## new 操作符的实现步骤及代码实现

- 创建一个空对象。
- 将构造函数的 prototype 赋值给空对象的 _proto_
- 将构造函数的 this 指向该对象
- 执行初始化空对象的代码操作
- 返回该对象

```js
function createNew(constuctor, ...arg) {
  // 创建一个空对象
  let obj = {};
  // 让实例的_proto_指向实例原型
  obj._proto_ = constuctor.prototyoe;
  // 构造函数的this指向实例，并执行初始化操作
  let result = constuctor.apply(obj, arg);
  if (typeof result === 'object' && result !== null) {
    return result;
  }
  return obj;
}

function Person(name) {
  this.name = name;
}
let jo = createNew(Person, 'josasd');
console.log(jo.name); //josasd
```

## 箭头函数和普通函数的区别

- 没有自己的 this 和 prototype，this 也不能被改变，所以也不能作为构造函数。
- 没有 arguments

```

```
