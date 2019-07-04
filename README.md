# vue栈前端多应用框架
背景：
随着前端业务越来越大，一个仓库内的代码越来越大。各种团队的介入，沟通的成本越来越高，需要有一个容器能够包含各个团队的业务，代码分别管理，统一或单独打包部署而不影响其他业务

## 已知问题
1. 在不同vue项目切换时候, 使用vue-devtools需要刷新下页面

## 还未解决问题
1. 同步store

## 使用前必读
1. 技术栈vue + vue-router + vuex, axios作为http请求库
2. Vue代码风格参考[style-guide](https://vuefe.cn/v2/style-guide/),JS参考[JavaScript Standard Style](https://standardjs.com/rules-zhcn.html)
3. Git规范参考[GitFlow](https://www.cnblogs.com/lcngu/p/5770288.html)和[Commit message](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

## 公共组件
- [Loadsh - JavaScript 实用工具库](https://www.lodashjs.com/)

## 开发工具
- [vue-devtools - vue调试开发工具](https://github.com/vuejs/vue-devtools)

## TODO
1. 抽出公共组件
2. 每个项目可以使用vue-cli3独立运行
