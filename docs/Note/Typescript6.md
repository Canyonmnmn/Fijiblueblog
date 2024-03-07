---
group: TypeScript
title: TSconfig配置详解
order: 6
---

# TSconfig 配置详解

## 构建相关

### 构建解析相关

- files、include 与 exclude
  - files：使用 files 我们可以描述本次包含的所有文件，但不能使用 src 或者 src/\* 这种方式，每个值都需要是完整的文件路径，小型项目中使用。
  - include
  ```js
    {
        "include": ["src/**/*", "generated/*.ts", "internal/*"]
    }
  ```
  `src/**/*`表示包括在 src 下的所有合法文件，无视目录层级。 `internal/*` 则只会匹配 internal 下的文件，不会匹配 internal/utils/ 下的文件。
  这里的合法文件指的是，只会匹配 以.ts / .tsx / .d.ts / .js / .jsx 为拓展名的文件。
  - exclude：剔除已经被 include 包含的文件。
- baseUrl
  这一配置可以定义文件进行解析的根目录，它通常会是一个相对路径，然后配合 tsconfig.json 所在的路径来确定根目录的位置。

  ```text
  project
  ├── out.ts
  ├── src
  ├──── core.ts
  └── tsconfig.json

  ```

  如果你设置成"baseUrl": "./"，根目录就会被确定为 project。
  在 out.ts 中使用导入语句，就可以直接使用基于根目录的绝对路径导入文件。

  ```ts
  import 'src/core'; // TS 会自动解析到对应的文件，即 "./src/core.ts"
  ```

### 构建产物相关
