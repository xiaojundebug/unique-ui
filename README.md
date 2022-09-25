<p align="center">
    <img alt="logo" src="https://s2.ax1x.com/2019/05/22/Vp6VkF.png" width="120">
</p>

<h3 align="center" style="margin: 30px 0 35px;">A mobile component library for Vue2.x</h3>

<p align="center">
    <img alt="travis" src="https://travis-ci.org/imzxj/unique-ui.svg?branch=master">&nbsp;
    <img alt="npm" src="https://img.shields.io/npm/v/unique-ui.svg?color=%23f86f74">&nbsp;
    <img alt="stars" src="https://img.shields.io/github/stars/imzxj/unique-ui.svg?color=%2336be52">&nbsp;
    <img alt="license" src="https://img.shields.io/npm/l/unique-ui.svg">&nbsp;
    <img alt="contributors" src="https://img.shields.io/github/contributors/imzxj/unique-ui.svg?color=%23409eff">
</p>

> :warning: 由于我工作中很久未再使用 vue 技术栈，且 vue3 也已发布，该仓库没有动力继续维护。

_这个 UI 库是我练手所用，质量可想而知，所以不要用在正式环境哦~_

_其中大量代码参考（抄袭）了 [vant](https://github.com/youzan/vant) ，少量代码参考了 [element-ui](https://github.com/ElemeFE/element)、[vux](https://github.com/airyland/vux) 等其它库_

### 👀 预览

https://imzxj.github.io/unique-ui/

### 🌵 安装

```bash
npm i unique-ui
```

### 🚀 快速开始

```javascript
import Vue from 'vue'
import Unique from 'unique-ui'

Vue.use(Unique)
```

### 💩 多年后对该项目的一些感想与反思

- commit message 不规范，有些 message 看起来很呆
- 主题功能薄弱，需要依靠手动构建文件
- icon 用的 `Font Awesom`，使用方式比较简陋
- 不该暴露一些公共方法，这对于一个 ui 库来说“管的太宽了”，况且写的还不咋样
- 没有单元测试
- 😀 还有。。。。现在感觉这个组件库的名字比较一般
 
...
