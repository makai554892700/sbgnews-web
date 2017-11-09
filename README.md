# sbgnews-web

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
### vue 相关 (需先安装nodejs)
* 安装淘宝镜像(根据个人需求,若安装后，可用cnpm替换npm运行npm命令)
    * npm install -g cnpm --registry=https://registry.npm.taobao.org
* 初始化package.json文件
    * 于webapp目录下运行 npm init 并填写或跳过相应属性
* 全局安装webpack
    * npm install webpack -g
* 全局安装vue脚手架
    * npm install vue-cli -g
* 创建vue项目
    * vue init webpack projectName
    * npm install
* 启动项目
    * npm run dev

### 坑锦集
* this.$router.push({name: '/mine', params: {username: res.data.data.userName}})//push时如果使用path则params无效
