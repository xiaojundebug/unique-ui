## 快速上手

当前有些字体图标文件未集成到`unique-ui`中，请先引入以下样式

```html
<link href="//at.alicdn.com/t/font_895870_fugdyroqsrt.css" rel="stylesheet" />
```

#### 引入全部，定义到全局

```javascript
import uniqueUI from 'unique-ui'
Vue.use(uniqueUI)
```

#### 引入单个，定义到全局

```javascript
import { Button } from 'unique-ui'
Vue.use(Button)
```

#### 单次使用

```javascript
// ...
import { Button } from 'unique-ui'
// ...
export default {
  components: { Button }
}
// ...
```
