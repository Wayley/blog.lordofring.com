# VuePress 的使用

## VuePress 环境搭建

VuePress 环境搭建依赖 node 环境

### 安装 VuePress

- 全局安装

```bash
$ yarn global add vuepress # 或者: $ npm install -g vuepress
```

- 本地安装

```bash
$ yarn add -D vuepress # 或者: $ npm install -D vuepress
```

### 开始创作

```bash
# 创建项目文件夹
$ mkdir demo && cd demo/

# 初始化
$ yarn init -y # 或者: $ npm init -y

# 创建docs 文件夹作为项目文档根目录
$ mkdir docs

# 新建笔记文件
$ echo '# 这是一级标题' > docs/README.md

# 写作文档(本地预览)
$ npx vuepress dev docs # 或者: $ vuepress dev docs

# 构建静态html文件
$ npx vuepress build docs # 或者: $ vuepress build docs

```

## 使用默认主题配置

### 创建.vuepress 目录

> 在 docs 目录下新建.vuepress 目录, 用以存放与 VuePress 相关的文件

```bash
$ cd docs/ && mkdir .vuepress
```

### 创建配置文件

> 新建配置文件`.vuepress/config.js`

```bash
$ cd .vuepress/ && touch config.js
```

`config.js`文件导出一个 JavaScript 对象:

```js
module.export = {
  //
};
```

## VuePress 中 markdown 语法使用

### Front Matter 使用

> `front matter` 必须是 markdown 文件中的`第一部分`，并且必须采用在`三点划线`之间书写的有效的 YAML

```markdown
---
metaTitle: Configuration | Theme
---
```

### 容器

> 容器采用在`三冒号`之间书写的有效的内容

```markdown
::: [type][title]
Content
:::
```

Examples:
::: tip
THIS IS THE CONTENT OF `TIP`
:::

::: warning
THIS IS THE CONTENT OF `WARNING`
:::

::: danger
THIS IS THE CONTENT OF `DANGER`
:::

自定义标题
::: tip 提示
THIS IS THE CONTENT OF `TIP` WITH `CUSTOM TITLE`
:::

### Badge

Examples:

**node 版本** <Badge text="> 6.9.1" vertical="top"/>

**node 版本** <Badge text="> 6.9.1" vertical="middle"/>

**node 版本** <Badge text="> 6.9.1" vertical="bottom"/>
