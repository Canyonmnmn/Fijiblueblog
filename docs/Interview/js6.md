---
group: JavaScript
title: 异步编程
order: 7
---

## 异步编程的实现方法有哪些？

- 回调函数
- Promise 的链式调用
- async

## 对 promise 的理解

是用来实现异步编程的方法，是一个对象。可以解决地狱回调的问题。

有三种状态：

- pending 待定
- resloved 已完成
- rejected 已拒绝

状态只能经过一次更改。

缺点：

- 一经创建就立马会执行
- 无法得知内部代码执行到哪个阶段了

## Promise 的 API

- then：接受俩个参数，分别对应 resloved 和 rejected 时调用的回调函数。
- catch：接受一个参数，是 rejected 时调用的回调函数。
- finally：接受一个参数，无论完成或者拒绝，都调用该回调函数。
- all：接受一个元素为 promise 对象的数组，如果状态都是 resloved 就返回 resloved，反之则是 rejected。
- race：也是接收数组，哪个最快结束 pending 状态，那结果就是这个 promise 的状态。

## 对 async/await 的理解

async/await 可以对 then 链进行简化，async 是异步，await 是等待。可以简单记住俩者的用途，在异步方法内部使用 await 等待一个异步方法执行完成。

默认使用 async 标记的 function 返回的是一个 Promise 对象，如果在方法里返回的是一个常量，就会用 Promise.resolved（常量）返回出来。
没有明确 return，就会返回 Promise.resolved(undefined)。

在没有使用 await 的获取 async 标记函数的结果下，该函数会立即执行并返回一个 Promise 对象。

## await 在等待什么？

如果 await 后面是一个简单的常量，那么该常量就是我们需要的返回值。
如果是一个 async 函数，那么等的就是它的返回值，且会阻塞 await 这行后面的代码。

## async/await 对比 Promise 的优势

- 代码读起来更同步，避免了繁琐的链式调用
- Promise 传递值很麻烦，async/await 几乎是同步的写法。
- 错误处理友好，可以使用 try/catch，Promise 的错误捕捉很冗余。
