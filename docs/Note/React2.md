---
group: React
title: React虚拟DOM及其diff算法
order: 2
---

## 虚拟 DOM

虚拟 DOM 是一个 javascript 对象，通过对象的方式表示 DOM 结构。利用对象的形式，使得跨平台渲染成为可能。通过事务处理机制，将多次 DOM 修改的结果一次性更新到页面上，从而减少页面渲染次数。

每次数据发生变化时，会将生成的虚拟 DOM 与之前缓存的虚拟 DOM 进行 diff 算法比对。渲染所变化的部分。

## React 中的 diff 算法

React 分别对 **tree diff、component diff** 以及 **element diff** 进行算法优化。

### tree diff

对于同一层级的节点进行比对，如果发现该节点不存在了，就直接删除该节点和其子节点。

### component diff

同一类型的组件，就继续执行 tree diff 策略。

发现俩者是不同类的组件，就直接删除该节点和其子节点。

对于 component，有可能其虚拟 dom 结构没有改变，我们可以手动设置比如 React.memo 来跳过比对，提高效率。

### element diff

节点有删除、插入、移动三种，通过设置唯一 key 的方式和差异化对比，来确定节点是哪种操作。

## 为什么 react 循环要使用 key 标记元素？

在 diff 算法中，对于元素的 diff，就是根据 key 来进行算法优化的。将 key 属性作为组件唯一标识的规则，无论是从哪个位置插入 新元素， React 在下次渲染的时候，仍然能够识别这些组件，不会对原来的旧组件执行变更操作。
