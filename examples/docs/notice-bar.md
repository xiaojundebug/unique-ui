## NoticeBar 通告栏

```javascript
export default {
  // 示例数据
  data() {
    return {
      msg1: '您订阅的双11抽奖活动已开始，共3次抽奖机会，仅限今日。',
      msg2: '网络不给力，请检查网络设置。'
    }
  }
}
```

#### 多种模式

```html
<i-notice-bar :text="msg1" />
<i-notice-bar :text="msg1" mode="closeable" />
<i-notice-bar :text="msg1" mode="link" />
```

#### 禁止滚动

通过`scrollable`属性设置消息过长是否自动滚动，默认`true`，允许滚动

```html
<i-notice-bar :text="msg1" mode="link" :scrollable="false" />
```

#### 高级用法

```html
<i-notice-bar :text="msg2" background-color="#ffdede" color="#444">
  <img slot="left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADu0lEQVRYR82ZS08TURTH/2eGaJC+YqILN5QNW+EbuHYj8gUcOiYYXYASgiT4YqGJJhaiC0kYGD+BkLjXbyBudSG6cGOMbSkaSO495twCltKWdu4NcTZNM3P+87vnPs5jCAmvahAMKc+7wkRDAPIEyO/BxcAGgE1i3vC1Xk/Fsfzv+qJuLP4EQX7X8yYYGCGifDe2zLxJwNoprRd743izU9uOADkIchXPK4Io6FS47XPMcUbr2xTHpeP0jgWshOGIZl4lotxxYt3cZ+aSRzSWiaK1dnZtAcuFwqozr7WiYI6zKytjrW43BZQpLfv+KgEj3Xgl6bMMrGWVGms25U0BS2H45qTg9gclkLkouto4yCOAJzKtrV29mI2iyfrbhwBlQzDwJulUubAj4Gr9xjkANOvO877Y7Nae4WF4uRx2371LzCq7O6v1wP56PAAsh2EM4FpSZe/cOaSePDHmWzMz4J8/k0qJ3etsFJkz1wCaCOH7X2wUvf5+pO7dMxLV+Xnob99s5HBKqQGJOAawHIYLACZsFL0LF5Can68B3r8P/f27jZzYmg1jAEuFgqy9rmJr49u98+eRevy4Bjg7C/3jhxWgxO7cysoAmazE9z9YqclaOXsW6adPa2twehr865etJHylhqlcKDwE0QNbNUqnkS4Wa4CTk+Bq1VYSYL5N5TCUYH3FWq23F5kXL4xM5dYtYGfHWhLAOpXC8ENjsplIuacHmVevaoDj44BSiWTqjSTpFQ+ytdKeQGZ5uQZ4/borSbgFFA9qjcrNm/8p4MuXYKWwNWF1pB4anFMPphcWzNrbmppy58FSobBBRBddKKafPasB3r3rQg7M/NHdMQPUIonWqM7NOQE0x4yrg1qITCxWCtVHj9wAykHtKtQJUe/4OKivD7+fP3cCaEKdKJXCUNKafieqjkQY+JqLIulYuEm3HHHVy/xLt1wkrKIs0ysXb29b8x5KWPe8aJXy+4OD6LtzRzIQbBeLUJ8+2UAeVHeHiybfl7WYTaJ8enQUpy9fNqY7b99iZ61tR6PlKxgoZ5XKHymaTJC3KDvFg2du3DDn4O+lJajPn5OMU4qk5mXnvpptdZeI6p9R+8K9DtJNEtsd7Xo2io70glo2jyq+L5vGPtPuDHI9o1TQcfPohKf7yLTWj6mzBiYQJ93drRwou9UDAqsG5r64aQH7vhT3iVsjDaCLGaUeOmkB1wvvRZxJ00TvMnZLbDVNdKUWnDfRm03T3meISyC6xMz5xqTXJJtEm2B+72v9PulniL9m+o35qiVN6QAAAABJRU5ErkJggg==" alt="left-icon" style="margin-right: 8px; height: 20px;">
</i-notice-bar>
```

#### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| text | 文本消息| `String` | `''` |
| mode | 模式 | `String`，可另选为`closeable` `link` | `''` |
| scrollable | 超出一行自动滚动 | `Boolean` | `true` |
| speed | 滚动速率 (px/s) | `Number` | `50` |
| delay | 动画延迟时间 (s) | `Number` | `1` |
| background-color | 背景色 | `String` | `#ffebc4` |
| color | 文字颜色 | `String` | `#df9952` |

#### Slots

| 名称 | 说明 |
|------|------|
| left | 自定义左侧区域内容 |
| right | 自定义右侧区域内容 |

#### Events

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击时触发 | - |
