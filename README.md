# blog

> blog for dadatang
> 这是一个nuxt的练习网站，技术组成nuxt+vue+nodejs+express，功能比较简单，一个首页用作数据展示，和一个简单的后台管理系统，实现了增改查功能。
> **学习目的：**熟悉nuxt的主要API，了解nodejs+express+mysql技术栈

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm start
```

## 开发流程
1. 项目初始化（done）
2. 博客功能设计(首页/博客列表/添加博客/修改博客/博客详情)
3. 页面布局开发(done)
4. 安装mysql，后端接口开发(done)
5. 数据对接(done)
6. 添加测试

## 坑
- axios需要配置baseUrl而且要在nuxt.config.js配置
- mysql存储中文，字符集设为：utf8mb4