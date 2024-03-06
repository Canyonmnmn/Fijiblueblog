## 虚拟DOM

虚拟DOM是一个javascript对象，通过对象的方式表示DOM结构。利用对象的形式，使得跨平台渲染成为可能。通过事务处理机制，将多次DOM修改的结果一次性更新到页面上，从而减少页面渲染次数。

每次数据发生变化时，会将生成的虚拟DOM与之前缓存的虚拟DOM进行diff算法比对。渲染所变化的部分。

## React中的diff算法

React 分别对 **tree diff、component diff** 以及 **element diff** 进行算法优化。

### tree diff

对于同一层级的节点进行比对，如果发现该节点不存在了，就直接删除该节点和其子节点。

### component diff

同一类型的组件，就继续执行tree diff策略。

发现俩者是不同类的组件，就直接删除该节点和其子节点。

对于component，有可能其虚拟dom结构没有改变，我们可以手动设置比如React.memo来跳过比对，提高效率。

### element diff

节点有删除、插入、移动三种，通过设置唯一key的方式和差异化对比，来确定节点是哪种操作。