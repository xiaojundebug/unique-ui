export default [
  {
    groupName: '开发指南',
    list: [
      {
        name: '更新记录',
        routePath: '/change-log',
        hideNavBar: true,
        doc: () => import('docs/CHANGELOG'),
        demo: () => import('./pages/demo-home')
      },
      {
        name: '快速上手',
        routePath: '/use',
        hideNavBar: true,
        doc: () => import('docs/use'),
        demo: () => import('./pages/demo-home')
      },
      {
        name: '更换主题',
        routePath: '/theme',
        hideNavBar: true,
        doc: () => import('docs/theme'),
        demo: () => import('./pages/demo-home')
      },
      {
        name: '实用代码',
        routePath: '/utils',
        hideNavBar: true,
        doc: () => import('docs/utils'),
        demo: () => import('./pages/demo-home')
      }
    ]
  },
  {
    groupName: '基本组件',
    list: [
      {
        name: 'Button 按钮',
        routePath: '/button',
        doc: () => import('docs/button'),
        demo: () => import('packages/button/demo')
      },
      {
        name: 'Cell 单元格',
        routePath: '/cell',
        doc: () => import('docs/cell'),
        demo: () => import('packages/cell/demo')
      },
      {
        name: 'Icon 图标',
        routePath: '/icon',
        doc: () => import('docs/icon'),
        demo: () => import('packages/icon/demo')
      },
      {
        name: 'Layout 布局',
        routePath: '/layout',
        doc: () => import('docs/layout'),
        demo: () => import('packages/row/demo')
      },
      {
        name: 'NavBar 导航栏',
        routePath: '/nav-bar',
        doc: () => import('docs/nav-bar'),
        demo: () => import('packages/nav-bar/demo')
      },
      {
        name: 'Popup 弹出层',
        routePath: '/popup',
        doc: () => import('docs/popup'),
        demo: () => import('packages/popup/demo')
      },
      {
        name: 'Sticky 粘性定位',
        routePath: '/sticky',
        doc: () => import('docs/sticky'),
        demo: () => import('packages/sticky/demo')
      },
      {
        name: 'Tabbar 标签栏',
        routePath: '/tab-bar',
        doc: () => import('docs/tabbar'),
        demo: () => import('packages/tabbar/demo')
      }
    ]
  },
  {
    groupName: '展示组件',
    list: [
      {
        name: 'NoticeBar 通告栏',
        routePath: '/notice-bar',
        doc: () => import('docs/notice-bar'),
        demo: () => import('packages/notice-bar/demo')
      },
      {
        name: 'Slide 轮播图',
        routePath: '/slide',
        doc: () => import('docs/slide'),
        demo: () => import('packages/slide/demo')
      },
      {
        name: 'Tag 标记',
        routePath: '/tag',
        doc: () => import('docs/tag'),
        demo: () => import('packages/tag/demo')
      }
    ]
  },
  {
    groupName: '表单组件',
    list: [
      {
        name: 'Checkbox 复选框',
        routePath: '/checkbox',
        doc: () => import('docs/checkbox'),
        demo: () => import('packages/checkbox/demo')
      },
      {
        name: 'Field 输入框',
        routePath: '/field',
        doc: () => import('docs/field'),
        demo: () => import('packages/field/demo')
      },
      {
        name: 'Radio 单选框',
        routePath: '/radio',
        doc: () => import('docs/radio'),
        demo: () => import('packages/radio/demo')
      },
      {
        name: 'Switch 开关',
        routePath: '/switch',
        doc: () => import('docs/switch'),
        demo: () => import('packages/switch/demo')
      }
    ]
  },
  {
    groupName: '反馈组件',
    list: [
      {
        name: 'Actionsheet 上拉菜单',
        routePath: '/actionsheet',
        doc: () => import('docs/actionsheet'),
        demo: () => import('packages/actionsheet/demo')
      },
      {
        name: 'Modal 弹窗',
        routePath: '/modal',
        doc: () => import('docs/modal'),
        demo: () => import('packages/modal/demo')
      },
      {
        name: 'Spinner 加载动画',
        routePath: '/spinner',
        doc: () => import('docs/spinner'),
        demo: () => import('packages/spinner/demo')
      },
      {
        name: 'Toast 消息提示',
        routePath: '/toast',
        doc: () => import('docs/toast'),
        demo: () => import('packages/toast/demo')
      }
    ]
  }
]
