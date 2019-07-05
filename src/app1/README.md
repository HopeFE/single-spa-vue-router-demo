# 个人货主端-PC
[![Vue](https://img.shields.io/badge/vue-2.6.8-brightgreen.svg?style=flat-square)](https://github.com/vuejs/vue)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Vue Style Guide](https://img.shields.io/badge/vue_style-beta-brightgreen.svg)](https://vuefe.cn/v2/style-guide/)

## 使用前必读
1. 技术栈vue + vue-router + vuex, axios作为http请求库
2. 集成打包脚手架使用[vue-cli3.0](https://cli.vuejs.org)
3. 使用[ant-design-vue](https://github.com/vueComponent/ant-design-vue)作为主体UI组件
4. Vue代码风格参考[style-guide](https://vuefe.cn/v2/style-guide/),JS参考[JavaScript Standard Style](https://standardjs.com/rules-zhcn.html)
5. 推荐使用VSCODE作为开发IDE，yarn安装包依赖
6. Git规范参考[GitFlow](https://www.cnblogs.com/lcngu/p/5770288.html)和[Commit message](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

## 开发工具

- [vue-devtools - vue调试开发工具](https://github.com/vuejs/vue-devtools)

### 推荐IDE

- [VSCODE](https://code.visualstudio.com/)

#### Vscode推荐插件

- [Vetur - Vue tooling for VS Code](https://vuejs.github.io/vetur/)

- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

### JS风格指南(必须)

- [JavaScript Standard Style](https://standardjs.com/rules-zhcn.html)

### Vue风格指南(必须)

- [style-guide](https://vuefe.cn/v2/style-guide/)

- [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue/tree/master/docs/rules)

### Git风格指南(推荐)

- [Commit message](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

## Main Javascript Framework

-	[Vue](http://cn.vuejs.org/guide/)

-	[Vue-router](http://router.vuejs.org/zh-cn/index.html)

-	[Vuex](http://vuex.vuejs.org/zh-cn/index.html)

-	[Axios - Http Client](https://github.com/mzabriskie/axios)

### UI Compoents

- [ant-design-vue](https://github.com/vueComponent/ant-design-vue) - Ant Design Of Vue 实现

- [ant-design-admin](https://preview.pro.loacg.com/user/login?redirect=%2Fform%2Fstep-form) - Ant Design Pro Vue 实现

### Plugins

- [Vue-Amap - 高德地图Vue组件](https://elemefe.github.io/vue-amap/#/zh-cn/introduction/init)

- [Loadsh - JavaScript 实用工具库](https://www.lodashjs.com/)

- 安装依赖
```
yarn
```

- 开发模式运行
```
yarn run serve
```

- 编译项目
```
yarn run build
```

- Lints and fixes files
```
yarn run lint
```


## 其他说明
----

- 修改 Ant Design 配色，在文件 `vue.config.js` 中，其他 less 变量覆盖参考 [ant design](https://ant.design/docs/react/customize-theme-cn) 官方说明
```ecmascript 6
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          /* less 变量覆盖，用于自定义 ant design 主题 */

          'primary-color': '#F5222D',
          'link-color': '#F5222D',
          'border-radius-base': '4px',
        },
        javascriptEnabled: true,
      }
    }
  }
```

## 附属文档
----

- [路由/菜单说明](https://github.com/sendya/ant-design-pro-vue/blob/master/src/router/README.md)
- [ANTD 默认配置项](https://github.com/sendya/ant-design-pro-vue/blob/master/src/defaultSettings.js)
- [按需加载/减少打包大小](https://github.com/sendya/ant-design-pro-vue/blob/master/docs/load-on-demand.md)  
- [为首屏增加 Loading 动画](https://github.com/sendya/ant-design-pro-vue/blob/master/docs/add-page-loading-animate.md)
- [多标签页组件 feature/multi-tabs](https://github.com/sendya/ant-design-pro-vue/tree/feature/multi-tabs) [如何移除](https://github.com/sendya/ant-design-pro-vue/blob/master/docs/multi-tabs.md)
- [为项目增加依赖项分析工具 analyzer](https://github.com/sendya/ant-design-pro-vue/blob/master/docs/webpack-bundle-analyzer.md)  
- ANTD PRO 额外组件
  - Trend 趋势标记 [Trend.md](https://github.com/sendya/ant-design-pro-vue/blob/master/src/components/Trend/index.md)
  - AvatarList 用户头像列表 [AvatarList.md](https://github.com/sendya/ant-design-pro-vue/blob/master/src/components/AvatarList/index.md)
  - CountDown 倒计时 [CountDown.md](https://github.com/sendya/ant-design-pro-vue/blob/master/src/components/CountDown/index.md)
  - Ellipsis 文本自动省略号 [Ellipsis.md](https://github.com/sendya/ant-design-pro-vue/blob/master/src/components/Ellipsis/index.md)
  - NumberInfo 数据文本 [NumberInfo.md](https://github.com/sendya/ant-design-pro-vue/blob/master/src/components/NumberInfo/index.md)
  - FooterToolbar 底部工具栏 [FooterToolbar.md](https://github.com/sendya/ant-design-pro-vue/blob/master/src/components/FooterToolbar/index.md)
  - IconSelector 图标选择组件 [IconSelector.md](https://github.com/sendya/ant-design-pro-vue/blob/master/src/components/)
  - IconSelector/README.md) 提供: [@Saraka](https://github.com/saraka-tsukai)

- 项目文档
  - [产品需求](http://wiki.ymmoa.com/pages/viewpage.action?pageId=20088563)
  - [用户中心接口](http://apidoc.ymmoa.com/project?id=1095#doc)
  - [个人货主接口](http://apidoc.ymmoa.com/project?id=1230#doc)
  - [GitLab](https://code.ymmoa.com/h5developer/tms-shipper-pc)
- 其他待补充...


