---
group: JavaScript
title: 垃圾回收与内存泄漏
order: 8
---

## 垃圾回收的概念

js 代码在运行的时候，会分配内存储存变量，当 js 代码不再运行时，这些内存要被回收，这就是垃圾回收。

js 变量分为全局变量和局部变量。对于全局变量来说，只有当页面被卸载时，才会被回收。对于局部变量，当函数执行结束时，位于该函数内的局部变量就会被回收。
还有一种情况时闭包，该变量被外部函数所引用，那么即使该变量所在的函数执行结束，也不会被回收。

## 垃圾回收的方式

- 引用计数
  就是看对象有没有被其他对象引用，如果没有就回收。会存在一种循环引用的情况，解决方式就是在不使用的时候置空。
- 标记清除
  js 会定期的从 window 对象开始标记，标记那些有被引用的对象。没有被引用的就会在标记清除阶段被清除。

## 如何减少垃圾回收

- 减少对象的创建，尽量复用，对于不使用的对象，手动 null
- 置空数组将其长度设置成 0
