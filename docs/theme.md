## 更换主题

1、安装命令行主题构建工具

```bash
npm i unique-theme-builder -g
```

2、修改主题变量 _只能修改，不要删除某个变量_

主题变量文件地址`node_modules/unique-ui/packages/theme/src/common/_var.scss`

3、构建主题

```bash
# 必须在你工程根目录下输入
utb # 等同于 utb -o .theme
```

你可以通过`-o`参数指定打包目录，默认 .theme

4、引入主题

如果是搭配 [babel-plugin-component](https://github.com/ElementUI/babel-plugin-component) 一起使用，只需要修改 .babelrc 的配置，指定 styleLibraryName 路径为自定义主题相对于 .babelrc 的路径，注意要加`~`

```javascript
{
  // ...
  "plugins": [
    // ...
    [
      "component",
      {
        "libraryName": "unique-ui",
        "styleLibraryName": "~.theme"
      }
    ]
  ]
}
```

如果没用这个插件，那么需要你手动引入构建后的主题文件，操作与以前一样，只是路径是你打包后的文件地址
