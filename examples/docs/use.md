## 快速上手

字体图标文件未集成到`unique-ui`中，请在`index.html`中引入以下样式

```html
<link href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" rel="stylesheet" />
<link href="//at.alicdn.com/t/font_895870_fugdyroqsrt.css" rel="stylesheet" />
```

#### 完整引入

```javascript
import 'unique-ui/lib/theme/index.css' // 引入所有样式
import uniqueUI from 'unique-ui'
Vue.use(uniqueUI)
```

#### 手动引入

```javascript
import 'unique-ui/lib/theme/base.css' // 引入基本样式
import 'unique-ui/lib/theme/button.css' // 引入组件样式
import { Button } from 'unique-ui'
Vue.use(Button)
```

#### 按需引入（推荐）

_可以帮你自动引入这个组件的样式_

首先安装 [babel-plugin-component](https://github.com/ElementUI/babel-plugin-component) 库

```bash
npm install babel-plugin-component -D
```

然后修改`.babelrc`文件

```javascript
{
  // ...
  "plugins": [
    // ...
    [
      "component",
      {
        "libraryName": "unique-ui",
        "styleLibraryName": "theme"
      }
    ]
  ]
}
```

接下来，如果你只希望引入部分组件，比如`Button`和`Modal`，那么需要在`main.js`中写入以下内容：

```javascript
import { Button, Modal } from 'unique-ui'
Vue.use(Button)
   .use(Modal)
```
